import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
return (
<header className="header">
<div className="logo">VANDI RECORDS</div>
<nav className="nav">
<Link to="/" className="nav-link">Accueil</Link>
<Link to="/vandi" className="nav-link">VANDI</Link>
<Link to="/reapx" className="nav-link">REAP-X</Link>
<Link to="/rapwriter" className="nav-link">AI RAP WRITER</Link>
<a href="https://on.soundcloud.com/O0X0mFPvR4vGiTnTfm" target="_blank" rel="noreferrer" className="nav-link">
SoundCloud
</a>
<a href="mailto:vandirecords@gmail.com" className="nav-link">Contact</a>
</nav>
</header>
);
}
