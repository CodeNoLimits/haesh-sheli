import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import express from "express";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve attached_assets images directly 
  app.use('/images', express.static(path.resolve(process.cwd(), 'attached_assets'), {
    setHeaders: (res, path) => {
      // Set proper headers for images
      res.setHeader('Cache-Control', 'public, max-age=31536000');
    }
  }));

  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
