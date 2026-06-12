import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { api } from "./api.js";
import RegisterPage from "./RegisterPage.jsx";
import LoginPage from "./LoginPage.jsx";

function Home() {
  const [gifts, setGifts] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => { api("/gifts").then(setGifts).catch(console.error); }, []);
  async function search(event) {
    event.preventDefault();
    setGifts(await api(`/search?query=${encodeURIComponent(query)}`));
  }
  return <><section className="hero"><div><span className="eyebrow">GIVE MORE. WASTE LESS.</span><h1>Useful things deserve a second story.</h1><p>GiftLink makes it simple to give away household items and find what you need, free from your community.</p><a className="cta" href="#gifts">Get Started</a></div></section><main id="gifts"><form className="search" onSubmit={search}><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for furniture, books, appliances..." /><button>Search</button></form><h2>Available near you</h2><div className="grid">{gifts.map((gift) => <article key={gift.id}><img src={gift.image} alt="" /><div><span>{gift.category}</span><h3>{gift.name}</h3><p>{gift.description}</p><b>{gift.location}</b></div></article>)}</div></main></>;
}

export default function App() {
  return <><nav><Link className="brand" to="/">GiftLink</Link><div><Link to="/">Browse Gifts</Link><Link to="/login">Log in</Link><Link className="nav-cta" to="/register">Join GiftLink</Link></div></nav><Routes><Route path="/" element={<Home />} /><Route path="/register" element={<RegisterPage />} /><Route path="/login" element={<LoginPage />} /></Routes><footer>GiftLink · Building generous, low-waste communities.</footer></>;
}
