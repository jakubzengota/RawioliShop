import React, { useContext, useRef } from 'react';
import Navigation from './Navigation';
import mainravioli from "../assets/mainrawioli.png";
import Slider from './Slider';
import PhoneIcon from '../assets/icons/PhoneIcon';
import MailIcon from '../assets/icons/MailIcon';
import 'font-awesome/css/font-awesome.min.css';
import AnimatedPageLeft from './AnimatedPageLeft';
import AnimatedPageRight from './AnimatedPageRight';
import LinkedInIcon from '../assets/icons/LinkedInIcon';
import LanguageContext from '../utils/LanguageContext';




const Home = () => {
    const { translations, toggleLanguage } = useContext(LanguageContext);
    const homeRef = useRef(null);


    const fbClick = () => {
        window.open("https://www.facebook.com/profile.php?id=100093398737578")
    }
  return (
    <div className="home" ref={homeRef}>
       
      <AnimatedPageLeft>
      <div className="homeContainer">
        <div className='homeGlassDivLeft'>
            <div className='homeGlassContent'>
                <span className='homeGlassSpan'>{translations.desc}</span>
                <div className='fbIconDiv'>
                    <span>{translations.visitUs}</span>
                    <span className='fbIcon' onClick={fbClick}>
                        <LinkedInIcon/>
                    </span>
                    <span className='toUpperCase'>{translations.promo}</span>
                   
                </div>
                
            </div>
           
        </div>
      </div>
      </AnimatedPageLeft>
    </div>
  );
};

export default Home;