import { Router } from "express";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "./db.js";
import { items } from "./data/items.js";

const router = Router();

async function allGifts() {
  const db = await connectToDatabase();
  return db ? db.collection("gifts").find({}).toArray() : items;
}

router.get("/", async (_req, res, next) => {
  try {
    res.json(await allGifts());
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const db = await connectToDatabase();
    const gift = db
      ? await db.collection("gifts").findOne({
          $or: [{ id: req.params.id }, ...(ObjectId.isValid(req.params.id) ? [{ _id: new ObjectId(req.params.id) }] : [])]
        })
      : items.find((item) => item.id === req.params.id);
    if (!gift) return res.status(404).json({ message: "Gift not found" });
    res.json(gift);
  } catch (error) {
    next(error);
  }
});

router.post("/:id/comments", async (req, res) => {
  const gift = items.find((item) => item.id === req.params.id);
  if (!gift) return res.status(404).json({ message: "Gift not found" });
  gift.comments.push({ text: req.body.text, createdAt: new Date().toISOString() });
  res.status(201).json(gift);
});

export default router;
