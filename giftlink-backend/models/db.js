import { MongoClient } from "mongodb";

let database;

export async function connectToDatabase() {
  if (database) return database;
  const client = new MongoClient(process.env.MONGO_URL || "mongodb://localhost:27017");
  await client.connect();
  database = client.db(process.env.DB_NAME || "giftlink");
  return database;
}
