import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = Router();
const users = new Map();
const secret = () => process.env.JWT_SECRET || "giftlink-development-secret";

function authenticate(req, res, next) {
  const token = req.headers.authorization?.replace(/^Bearer /, "");
  if (!token) return res.status(401).json({ message: "Authorization token required" });
  try {
    req.user = jwt.verify(token, secret());
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
}

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ message: "Name, email, and password are required" });
  if (users.has(email)) return res.status(409).json({ message: "User already exists" });
  users.set(email, { name, email, password: await bcrypt.hash(password, 10), bio: "" });
  res.status(201).json({ message: "Registration successful", email });
});

router.post("/login", async (req, res) => {
  const user = users.get(req.body.email);
  if (!user || !(await bcrypt.compare(req.body.password || "", user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign({ email: user.email, name: user.name }, secret(), { expiresIn: "2h" });
  res.json({ token, user: { email: user.email, name: user.name, bio: user.bio } });
});

router.put("/profile", authenticate, (req, res) => {
  const user = users.get(req.user.email);
  Object.assign(user, { name: req.body.name ?? user.name, bio: req.body.bio ?? user.bio });
  res.json({ email: user.email, name: user.name, bio: user.bio });
});

export default router;
