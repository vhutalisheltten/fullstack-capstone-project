import test from "node:test";
import assert from "node:assert/strict";
import request from "supertest";
import { app } from "./app.js";

test("lists 16 gifts", async () => {
  const response = await request(app).get("/api/gifts");
  assert.equal(response.status, 200);
  assert.equal(response.body.length, 16);
});

test("searches by category", async () => {
  const response = await request(app).get("/api/search?category=Books");
  assert.equal(response.status, 200);
  assert.ok(response.body.every((gift) => gift.category === "Books"));
});

test("registers and logs in", async () => {
  const user = { name: "Test User", email: "test@example.com", password: "Password123!" };
  assert.equal((await request(app).post("/api/auth/register").send(user)).status, 201);
  const login = await request(app).post("/api/auth/login").send(user);
  assert.equal(login.status, 200);
  assert.ok(login.body.token);
});
