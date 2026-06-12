import express from "express";
import giftRoutes from "./routes/giftRoutes.js";
import searchRoutes from "./routes/searchRoutes.js";

const app = express();
app.use(express.json());
app.use("/api/gifts", giftRoutes);
app.use("/api/gifts/search", searchRoutes);

export default app;
