import React, { useState } from 'react';
import {ProductCard} from '../product-card';

export const Carousel = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 4;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  return (
    <div className="container relative">
      <button onClick={prevSlide} 
      className="absolute left-0 lg:-left-28 top-1/2 transform -translate-y-1/2 bg-outlineText rounded-[50%] px-4 py-2 text-primary">
        &#10094;
      </button>
      <div className="flex overflow-hidden gap-6 justify-between">
        {products.slice(currentIndex, currentIndex + itemsToShow).map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      <button onClick={nextSlide} 
      className="absolute right-0 lg:-right-28 top-1/2 transform -translate-y-1/2 bg-outlineText rounded-[50%] px-4 py-2 text-primary">
        &#10095;
      </button>
    </div>
  );
};
