import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve attached_assets images directly 
  const currentDir = path.dirname(fileURLToPath(import.meta.url));
  app.use('/images', express.static(path.join(currentDir, '..', 'attached_assets'), {
    setHeaders: (res, filePath) => {
      // Set proper headers for images with UTF-8 support
      res.setHeader('Cache-Control', 'public, max-age=31536000');
      if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) {
        res.setHeader('Content-Type', 'image/jpeg');
      } else if (filePath.endsWith('.png')) {
        res.setHeader('Content-Type', 'image/png');
      }
    }
  }));

  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
