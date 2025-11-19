import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Vandi from "./pages/Vandi";
import Reapx from "./pages/Reapx";
import RapWriter from "./pages/RapWriter";

// Components
import Header from "./components/Header";
import Intro from "./components/Intro";

// Global CSS
import "./styles/global.css";
import "./styles/header.css";
import "./styles/home.css";
import "./styles/vandi.css";
import "./styles/reap.css";
import "./styles/rap.css";

export default function App() {
const [showIntro, setShowIntro] = useState(true);

// ─── INTRO : 2 secondes puis disparition ─────────────────────
useEffect(() => {
const timer = setTimeout(() => {
setShowIntro(false);
}, 2000); // durée intro = 2s (modifiable)

return () => clearTimeout(timer);
}, []);

return (
<>
{showIntro ? (
// INTRO EN PREMIER (écran entier)
<Intro />
) : (
// SITE COMPLET APRÈS L'INTRO
<>
<Header />
<main className="page-container">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/vandi" element={<Vandi />} />
<Route path="/reapx" element={<Reapx />} />
<Route path="/rapwriter" element={<RapWriter />} />
</Routes>
</main>
</>
)}
</>
);
}
