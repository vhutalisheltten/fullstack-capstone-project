import { useState } from "react";
import { api } from "./api.js";

export default function RegisterPage() {
  const [message, setMessage] = useState("");
  async function submit(event) {
    event.preventDefault();
    const body = Object.fromEntries(new FormData(event.currentTarget));
    try {
      const result = await api("/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      setMessage(result.message);
    } catch (error) { setMessage(error.message); }
  }
  return <main className="form-page"><form onSubmit={submit}><h1>Create account</h1><input name="name" placeholder="Name" required /><input name="email" type="email" placeholder="Email" required /><input name="password" type="password" placeholder="Password" required /><button>Register</button><p>{message}</p></form></main>;
}
