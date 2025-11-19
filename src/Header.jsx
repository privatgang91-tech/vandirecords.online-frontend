// src/components/Header.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
const { pathname } = useLocation();

const isActive = (path) => (pathname === path ? "nav-link active" : "nav-link");

return (
<header className="site-header">
<div className="logo">VANDI RECORDS</div>
<nav className="nav">
<Link to="/" className={isActive("/")}>Accueil</Link>
<Link to="/vandi" className={isActive("/vandi")}>VANDI</Link>
<Link to="/reapx" className={isActive("/reapx")}>REAP-X</Link>
<Link to="/rapwriter" className={isActive("/rapwriter")}>AI RAP WRITER</Link>
<a
href="https://on.soundcloud.com/O0X0mFPvR4vGiTnTfm"
target="_blank"
rel="noreferrer"
className="nav-link"
>
SoundCloud
</a>
<a href="mailto:vandirecords@gmail.com" className="nav-link">
Contact
</a>
</nav>
</header>
);
}
