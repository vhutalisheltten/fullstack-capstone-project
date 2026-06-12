import "dotenv/config";
import { connectToDatabase, closeDatabase } from "./db.js";
import { items } from "./data/items.js";

const db = await connectToDatabase();
if (!db) throw new Error("Set MONGO_URL before importing items");
await db.collection("gifts").deleteMany({});
const result = await db.collection("gifts").insertMany(items);
console.log(`inserted_items: ${result.insertedCount} documents imported into MongoDB`);
await closeDatabase();
