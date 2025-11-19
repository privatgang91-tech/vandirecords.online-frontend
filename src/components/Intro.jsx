import React, { useEffect, useState } from "react";
import "../styles/intro.css";
import logo from "../assets/vandi-logo.png";

export default function Intro() {
const [fade, setFade] = useState(false);

useEffect(() => {
const timer = setTimeout(() => setFade(true), 2000);
return () => clearTimeout(timer);
}, []);

return (
<div className={`intro-crt ${fade ? "fade-out" : ""}`}>
<div className="scanlines"></div>
<img src={logo} alt="Vandi Records" className="crt-logo" />
</div>
);
}