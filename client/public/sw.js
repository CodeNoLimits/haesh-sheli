// Service Worker for PWA capabilities
const CACHE_NAME = 'haesh-sheli-v2';
// Derive the base path (e.g., "/haesh-sheli/") for GitHub Pages deployments
const BASE_URL = (self.registration?.scope || self.location.pathname)
  .replace(self.location.origin, '')
  .replace(/[^/]+$/, '');
const urlsToCache = [
  BASE_URL,
  BASE_URL + 'manifest.json'
];

// Install Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});