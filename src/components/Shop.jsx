// Shop.jsx
import React, { useState } from 'react';
import './Shop.css';
import wig1 from '../assets/wig1.jpeg';
import wig2 from '../assets/wig2.jpg';
import wig3 from '../assets/wig3.jpg';

const wigs = [{
        id: 1,
        name: 'Sleek Straight',
        price: 129,
        image: wig1,
        description: 'A sleek straight wig perfect for formal and casual styles.',
        colors: ['#000000', '#8B4513', '#A0522D'],
    },
    {
        id: 2,
        name: 'Curly Glamour',
        price: 129,
        image: wig2,
        description: 'Full-volume curls for a bold and glamorous look.',
        colors: ['#4B0082', '#A52A2A', '#FF4500'],
    },
    {
        id: 3,
        name: 'Wavy Elegance',
        price: 129,
        image: wig3,
        description: 'Natural waves that bring out elegance in every look.',
        colors: ['#D2B48C', '#2F4F4F', '#FFFFFF'],
    },
];

const Shop = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (wig) => {
        setCart([...cart, wig]);
        alert(`${wig.name} added to cart!`);
    };

    return ( <
        section className = "shop" >
        <
        h2 > Shop All Wigs < /h2> <
        div className = "wig-list" > {
            wigs.map((wig) => ( <
                div key = { wig.id }
                className = "wig-card" >
                <
                img src = { wig.image }
                alt = { wig.name }
                /> <
                h3 > { wig.name } < /h3> <
                p > { wig.description } < /p> <
                div className = "color-options" > {
                    wig.colors.map((color, index) => ( <
                        span key = { index }
                        className = "color-dot"
                        style = {
                            { backgroundColor: color } } > < /span>
                    ))
                } <
                /div> <
                p className = "wig-price" > $ { wig.price } < /p> <
                button className = "add-to-cart"
                onClick = {
                    () => addToCart(wig) } > Add to Cart < /button> <
                /div>
            ))
        } <
        /div> <
        /section>
    );
};

export default Shop;