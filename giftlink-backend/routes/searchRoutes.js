import { Router } from "express";
import { connectToDatabase } from "../models/db.js";

const router = Router();

router.get("/", async (req, res) => {
  const database = await connectToDatabase();
  const category = req.query.category;
  const filter = category ? { category } : {};
  res.json(await database.collection("gifts").find(filter).toArray());
});

export default router;
