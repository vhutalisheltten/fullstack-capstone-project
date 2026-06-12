import { MongoClient } from "mongodb";

let client;
let database;

export async function connectToDatabase() {
  if (database) return database;
  const mongoUrl = process.env.MONGO_URL;
  if (!mongoUrl) return null;
  client = new MongoClient(mongoUrl);
  await client.connect();
  database = client.db(process.env.DB_NAME || "giftlink");
  return database;
}

export async function closeDatabase() {
  await client?.close();
  client = undefined;
  database = undefined;
}
