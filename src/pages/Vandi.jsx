import React from "react";
import "../styles/Vandi.css"; // Tu peux le créer pour customiser l'apparence

export default function Vandi() {
return (
<div className="vandi-page">
<section className="vandi-hero">
<h1 className="vandi-title">VANDI LE SALE</h1>
<p className="vandi-subtitle">Rap Français brut, poétique et tranchant 💀</p>
</section>

<section className="vandi-section">
<h2 className="section-title">SINGLES DISPONIBLES</h2>
<div className="release-grid">
<div className="release-card">
<h3>BINKS</h3>
<a
href="https://music.youtube.com/watch?v=ELmDPbhiii8&si=rl0j5c7Ay2V6NK4l"
target="_blank"
rel="noreferrer"
>
Écouter sur YouTube Music
</a>
</div>
<div className="release-card">
<h3>Plume et douille</h3>
<a href="#">Lien à venir</a>
</div>
<div className="release-card">
<h3>Noir vérité</h3>
<a href="#">Lien à venir</a>
</div>
<div className="release-card">
<h3>Vandi style</h3>
<a href="#">Lien à venir</a>
</div>
<div className="release-card">
<h3>Jamais</h3>
<a href="#">Lien à venir</a>
</div>
</div>
</section>

<footer className="footer">
© 2025 Vandi Records — Tous droits réservés<br />
Underground Poitiers • Vandi le Sale
</footer>
</div>
);
}



