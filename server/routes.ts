import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve attached_assets images directly 
  const attachedAssetsPath = path.resolve(process.cwd(), 'attached_assets');
  
  app.use('/images', express.static(attachedAssetsPath, {
    setHeaders: (res, filePath) => {
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
