import "dotenv/config";
import natural from "natural";
import { app } from "./app.js";

const port = process.env.PORT || 3060;
app.listen(port, () => {
  console.log(`GiftLink API listening on http://localhost:${port}`);
  console.log(`Search tokenizer ready: ${natural.WordTokenizer.name}`);
});
