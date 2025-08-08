import React, { useState } from 'react';
import './FeaturedWigs.css';

// Import all wig images (color variants)
import wig1Black from '../assets/wig1Black.jpg';
import wig1Brown from '../assets/wig2-brown.jpeg';
import wig1Gold from '../assets/wig3Red.jpg';

import wig2Red from '../assets/browncurly.jpg';
import wig2Purple from '../assets/purplecury.jpg';
import wig2Orange from '../assets/wig1-straight.jpg';

import wig3Tan from '../assets/creamwevy.jpg';
import wig3Dark from '../assets/greenblue.jpg';
import wig3White from '../assets/whitewevy.jpg';

const wigs = [
  {
    id: 1,
    name: 'Sleek Straight',
    description: 'A sleek straight wig perfect for formal and casual styles.',
    price: 129,
    variants: [
      { color: '#000000', image: wig1Black },
      { color: '#8B4513', image: wig1Brown },
      { color: '#7e0303', image: wig1Gold },
    ],
  },
  {
    id: 2,
    name: 'Curly Glamour',
    description: 'Full-volume curls for a bold and glamorous look.',
    price: 139,
    variants: [
      { color: '#8B0000', image: wig2Red },
      { color: '#800080', image: wig2Purple },
      { color: '#FF4500', image: wig2Orange },
    ],
  },
  {
    id: 3,
    name: 'Wavy Elegance',
    description: 'Natural waves that bring out elegance in every look.',
    price: 149,
    variants: [
      { color: '#D2B48C', image: wig3Tan },
      { color: '#2F4F4F', image: wig3Dark },
      { color: '#FFFFFF', image: wig3White },
    ],
  },
];

const FeaturedWigs = () => {
  const [selectedImages, setSelectedImages] = useState(
    wigs.map((wig) => wig.variants[0].image)
  );

  const handleColorClick = (wigIndex, image) => {
    const updatedImages = [...selectedImages];
    updatedImages[wigIndex] = image;
    setSelectedImages(updatedImages);
  };

  return (
    <section className="featured">
      <h2>Featured Wigs</h2>
      <div className="wig-list">
        {wigs.map((wig, index) => (
          <div key={wig.id} className="wig-card">
            <img src={selectedImages[index]} alt={wig.name} className="wig-img" />
            <h3>{wig.name}</h3>
            <p className="wig-description">{wig.description}</p>

            {/* Color selection */}
            <div className="color-options">
              {wig.variants.map((variant, i) => (
                <span
                  key={i}
                  className="color-dot"
                  style={{ backgroundColor: variant.color }}
                  onClick={() => handleColorClick(index, variant.image)}
                ></span>
              ))}
            </div>

            <p className="wig-price">${wig.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWigs;
