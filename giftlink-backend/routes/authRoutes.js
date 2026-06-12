import { Router } from "express";
import { connectToDatabase } from "../models/db.js";

const router = Router();

router.post("/login", async (req, res) => {
  const database = await connectToDatabase();
  const collection = database.collection("users");
  const currentUser = await collection.findOne({ email: req.body.email });
  res.json({ currentUser });
});

export default router;
