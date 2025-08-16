import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScroll = (sectionId) => {
        setMenuOpen(false); // Close mobile menu on click
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
            }, 200);
        } else {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/" className="logo-link">
                    Nywele <span>Hair Studio</span>
                </Link>
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className={`menu-toggle ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Nav Links */}
            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
               
                {/* <li>
                    <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
                </li> */}
                  <li>
                    <button onClick={() => handleScroll("featured")} className="link-btn">Shop</button>
                </li>
                <li>
                    <button onClick={() => handleScroll("testimonials")} className="link-btn">Testimonials</button>
                </li>
                <li>
                    <button onClick={() => handleScroll("about")} className="link-btn">About</button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
