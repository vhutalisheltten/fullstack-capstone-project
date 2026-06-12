import { useState } from "react";
import { api } from "./api.js";

export default function LoginPage() {
  const [message, setMessage] = useState("");
  async function submit(event) {
    event.preventDefault();
    const body = Object.fromEntries(new FormData(event.currentTarget));
    try {
      const result = await api("/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${localStorage.token || ""}` },
        body: JSON.stringify(body)
      });
      localStorage.token = result.token;
      setMessage(`Welcome, ${result.user.name}!`);
    } catch (error) { setMessage(error.message); }
  }
  return <main className="form-page"><form onSubmit={submit}><h1>Welcome back</h1><input name="email" type="email" placeholder="Email" required /><input name="password" type="password" placeholder="Password" required /><button>Log in</button><p>{message}</p></form></main>;
}
