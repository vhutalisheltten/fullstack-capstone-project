import express from "express";
import cors from "cors";
import path from "node:path";
import { fileURLToPath } from "node:url";
import giftRoutes from "./giftRoutes.js";
import searchRoutes from "./searchRoutes.js";
import authRoutes from "./authRoutes.js";

export const app = express();
const clientDist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../client/dist");
app.use(cors());
app.use(express.json());
app.get("/api/health", (_req, res) => res.json({ status: "ok" }));
app.use("/api/gifts", giftRoutes);
app.use("/api/search", searchRoutes);
app.use("/api/auth", authRoutes);
app.use(express.static(clientDist));
app.get("/", (_req, res) => res.sendFile(path.join(clientDist, "index.html")));
app.use((error, _req, res, _next) => res.status(500).json({ message: error.message }));
