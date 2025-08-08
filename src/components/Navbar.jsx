import React from 'react';
import './Navbar.css'; // if you have styles

function Navbar() {
    return ( <
        nav className = "navbar" >
        <
        div className = "logo" > Nywele Affordable Hair Studio < /div> <
        ul className = "nav-links" >
        <
        li > < a href = "#shop" > Shop < /a></li >
        <
        li > < a href = "#testimonials" > Testimonials < /a></li >
        <
        li > < a href = "#about" > About < /a></li >
        <
        /ul> < /
        nav >
    );
}

export default Navbar; // ✅ THIS LINE IS VERY IMPORTANT