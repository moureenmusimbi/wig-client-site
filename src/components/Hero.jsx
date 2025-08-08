import React from 'react';
import './Hero.css';
import model from '../assets/model 2.jpg'; // Replace with your actual image path

const Hero = () => {
    return ( <
        section className = "hero" >
        <
        div className = "hero-text" >
        <
        h1 > Unleash < br / > Your Beauty < /h1> <
        button className = "shop-button" > Shop Now < /button> < /
        div > <
        div className = "hero-image" >
        <
        img src = { model }
        alt = "Model wearing wig" / >
        <
        /div> < /
        section >
    );
};

export default Hero;