import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { copyFileSync, mkdirSync, readdirSync, statSync } from "fs";

export default defineConfig({
  // Base path:
  // - Default to "/" (Netlify, normal hosting)
  // - Use "/haesh-sheli/" ONLY when building for GitHub Pages (set GITHUB_PAGES=true)
  base: process.env.GITHUB_PAGES === "true" ? "/haesh-sheli/" : "/",
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    // Copy attached_assets after build
    rollupOptions: {
      plugins: [
        {
          name: 'copy-attached-assets',
          closeBundle() {
            const srcDir = path.resolve(import.meta.dirname, "public/attached_assets");
            const destDir = path.resolve(import.meta.dirname, "dist/public/attached_assets");
            
            try {
              mkdirSync(destDir, { recursive: true });
              
              const copyRecursive = (src: string, dest: string) => {
                const entries = readdirSync(src);
                for (const entry of entries) {
                  const srcPath = path.join(src, entry);
                  const destPath = path.join(dest, entry);
                  const stat = statSync(srcPath);
                  
                  if (stat.isDirectory()) {
                    mkdirSync(destPath, { recursive: true });
                    copyRecursive(srcPath, destPath);
                  } else {
                    copyFileSync(srcPath, destPath);
                  }
                }
              };
              
              copyRecursive(srcDir, destDir);
              console.log('✅ Copied attached_assets to build directory');
            } catch (error) {
              console.error('❌ Error copying attached_assets:', error);
            }
          }
        }
      ]
    }
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
