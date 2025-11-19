import React from "react";
import vandiTag from "../assets/vandi-tag.png";
import reapxLogo from "../assets/reapxlogo.png";
import "../styles/home.css";

export default function Home() {
return (
<div className="home">
<div className="home-container">

{/* === LOGOS CÔTE À CÔTÉ === */}
<section className="hero logos-flex">
<img
src={vandiTag}
alt="Vandi le Sale Logo"
className="vandi-logo-home"
/>
<img
src={reapxLogo}
alt="REAP-X Logo"
className="reapx-logo-home"
/>
</section>

<h3 className="section-title">VANDI RECORDS ONLINE</h3>
<p className="ep-title glitch-text">
Label indépendant — Hip-Hop / Underground / Digital glitchcore
</p>

<section className="about-section">
<h3 className="about-title glitch-text">À propos de Vandi Records</h3>

<p className="about-text">
Label né de la nuit, forgé dans les entrailles de Poitiers.<br />
Chaque son est un rituel, chaque drop une faille dans la Matrice.<br />
“Lux in Tenebris” fut notre serment.<br />
Aujourd’hui, nous sommes les Glitch.
<br /><br />— Vandi le Sale & N.O.D.E-13 💀
</p>
</section>

<footer className="footer">
© 2025 Vandi Records — Tous droits réservés
<br />
Crafted in the shadows by Vandi & Nadir 💀
</footer>
</div>
</div>
);
}
