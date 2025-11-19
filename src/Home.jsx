// src/pages/Home.jsx
import React from "react";
import "../styles/home.css";

export default function Home() {
return (
<section className="home">
<h1 className="home-title">VANDI RECORDS</h1>
<p className="home-subtitle">
Underground Hip-Hop Label // Vandi le Sale &amp; REAP-X
</p>

<div className="home-logos">
{/* Tu pourras remplacer les textes par <img src="..." /> */}
<div className="home-logo-block">
<div className="home-logo-title">VANDI LE SALE</div>
<p>Rap FR // Street poetry // Noir & authentique.</p>
</div>
<div className="home-logo-block">
<div className="home-logo-title">REAP-X</div>
<p>Rap EN // Hacker ghost // Digital glitchcore.</p>
</div>
</div>
</section>
);
}
