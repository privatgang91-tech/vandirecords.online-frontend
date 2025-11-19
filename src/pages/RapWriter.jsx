// src/pages/RapWriter.jsx
import React, { useState } from "react";
import "../styles/rap.css";

// 🔌 URL de l’API backend
// En local : backend sur http://localhost:3001
// En prod (Render) : tu pourras mettre l’URL Render à la place.
const API_URL =
import.meta.env.VITE_RAPWRITER_API ||
"https://reap-x-backend.onrender.com";

export default function RapWriter() {
const [language, setLanguage] = useState("FR");
const [style, setStyle] = useState("Trap");
const [keywords, setKeywords] = useState("");
const [result, setResult] = useState("");
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

async function generateLyrics() {
setLoading(true);
setResult("");
setError("");

try {
const res = await fetch(API_URL, {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ language, style, keywords }),
});

// Si le backend ne répond pas 200 → on log le texte pour debug
if (!res.ok) {
const txt = await res.text();
console.error("Backend HTTP error:", res.status, txt);
throw new Error(`HTTP ${res.status}`);
}

const data = await res.json();
setResult(data.lyrics || "");
} catch (err) {
console.error("Erreur front RapWriter:", err);
setError("Erreur : impossible de contacter le backend.");
} finally {
setLoading(false);
}
}

const steps = [
"> Parsing parameters...",
"> Initializing REAP-X core...",
"> Booting ghostwriter module...",
"> Injecting corruption layer...",
"> Synthesizing bars...",
"> Finalizing output...",
];

return (
<div className="reapx-main">
<div className="reapx-header-line" />

<div className="reapx-container">
<h1 className="reapx-title glitch" data-text="REAP-X // AI RAP WRITER">
REAP-X // AI RAP WRITER
</h1>
<p className="reapx-subtitle">
REAP-X : LYRICAL GENERATOR UNIT v1.0
<br />
16 mesures // FR / EN // Old School, Trap, Drill, Club, Horrorcore.
</p>

<div className="reapx-form">
<label>LANGUAGE</label>
<select
value={language}
onChange={(e) => setLanguage(e.target.value)}
>
<option value="FR">French</option>
<option value="EN">English</option>
</select>

<label>STYLE</label>
<select value={style} onChange={(e) => setStyle(e.target.value)}>
<option>Old School</option>
<option>Trap</option>
<option>Drill</option>
<option>Club</option>
<option>Dark Horrorcore</option>
</select>

<label>KEYWORDS (optional)</label>
<input
type="text"
placeholder="ex: shadow, glitch, system"
value={keywords}
onChange={(e) => setKeywords(e.target.value)}
/>

<button
className="rw-btn"
onClick={generateLyrics}
disabled={loading}
>
{loading ? "PROCESSING…" : "GENERATE 16 BARS"}
</button>
</div>

{/* 🔺 Message d’erreur si la requête plante */}
{error && <p className="rw-error">✖ {error}</p>}

{/* LOADING */}
{loading && (
<div className="rw-loader">
<div className="scanline"></div>
<div className="rw-steps">
{steps.map((s, i) => (
<div key={i} className="rw-step">
{s}
</div>
))}
</div>
</div>
)}

{/* RESULT */}
{result && (
<div className="rw-result">
<pre>{result}</pre>
<button
className="rw-copy"
onClick={() => navigator.clipboard.writeText(result)}
>
COPY TEXT
</button>
</div>
)}
</div>

<div className="reapx-footer-line" />
<p className="reapx-footer">
DATA CORRUPTION UNIT — © Vandi Records
</p>
</div>
);
}
