import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleScroll = (sectionId) => {
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
            }, 200); // Wait for home page to render
        } else {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return ( <
        nav className = "navbar" >
        <
        div className = "logo" >
        <
        Link to = "/"
        style = {
            { textDecoration: "none", color: "inherit" } } >
        Nywele Affordable Hair Studio <
        /Link> <
        /div>

        <
        ul className = "nav-links" >
        <
        li > < Link to = "/shop" > Shop < /Link></li >
        <
        li >
        <
        button onClick = {
            () => handleScroll("testimonials") }
        className = "link-btn" >
        Testimonials <
        /button> <
        /li> <
        li >
        <
        button onClick = {
            () => handleScroll("about") }
        className = "link-btn" >
        About <
        /button> <
        /li> <
        /ul> <
        /nav>
    );
}

export default Navbar;