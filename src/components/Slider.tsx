import { useEffect, useState } from 'react';
import data from '../data/products.json';


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