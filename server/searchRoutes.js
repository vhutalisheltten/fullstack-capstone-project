import { Router } from "express";
import natural from "natural";
import { connectToDatabase } from "./db.js";
import { items } from "./data/items.js";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const query = String(req.query.query || "").toLowerCase();
    const category = String(req.query.category || "").toLowerCase();
    const db = await connectToDatabase();
    const source = db ? await db.collection("gifts").find({}).toArray() : items;
    const tokenizer = new natural.WordTokenizer();
    const terms = tokenizer.tokenize(query);
    const results = source.filter((item) => {
      const text = `${item.name} ${item.description}`.toLowerCase();
      const matchesQuery = !terms.length || terms.every((term) => text.includes(term));
      const matchesCategory = !category || item.category.toLowerCase() === category;
      return matchesQuery && matchesCategory;
    });
    res.json(results);
  } catch (error) {
    next(error);
  }
});

export default router;
