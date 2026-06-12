import { Router } from "express";
import { connectToDatabase } from "../models/db.js";

const router = Router();

// Mounted at /api/gifts, so "/" serves /api/gifts.
router.get("/", async (_req, res) => {
  const database = await connectToDatabase();
  res.json(await database.collection("gifts").find({}).toArray());
});

// Mounted at /api/gifts, so "/:id" serves /api/gifts/:id.
router.get("/:id", async (req, res) => {
  const database = await connectToDatabase();
  const gift = await database.collection("gifts").findOne({ id: req.params.id });
  res.json(gift);
});

export default router;
