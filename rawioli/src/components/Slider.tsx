import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import data from '../data/products.json';

interface SlideWrapperProps {
  translate: number;
}

const SliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const SlideWrapper = styled.div<SlideWrapperProps>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${props => props.translate}%);
`;

const Product = styled.div`
  min-width: 50%;
  box-sizing: border-box;
  padding: 20px;
  text-align: center;
`;

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % 4); 
      }, 4000);
      return () => clearInterval(interval);
    }, []);
  
    const translate = -currentSlide * 100;
  
    return (
      <div className="slider-container">
        <div className="slide-wrapper" style={{ transform: `translateX(${translate}%)` }}>
          {data.products.map((product, index) => (
            <div className="product" key={index}>
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <h3>{product.price}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Slider;