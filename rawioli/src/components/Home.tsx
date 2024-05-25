import React from 'react';
import Navigation from './Navigation';
import mainravioli from "../assets/mainrawioli.png";
import Slider from './Slider';
import PhoneIcon from '../assets/icons/PhoneIcon';
import MailIcon from '../assets/icons/MailIcon';
import 'font-awesome/css/font-awesome.min.css';
import AnimatedPageLeft from './AnimatedPageLeft';
import AnimatedPageRight from './AnimatedPageRight';
import LinkedInIcon from '../assets/icons/LinkedInIcon';

const Home = () => {

    const fbClick = () => {
        window.open("https://www.facebook.com/profile.php?id=100093398737578")
    }
  return (
    <div className="home">
       
      <AnimatedPageLeft>
      <div className="homeContainer">
        <div className='homeGlassDivLeft'>
            <div className='homeGlassContent'>
                <span className='homeGlassSpan'>Sklep o nazwie "Polski Smak" znajduje się w Holandii i oferuje szeroki asortyment produktów spożywczych prosto z Polski. Jest to mały, ale dobrze zaopatrzony lokal, który przyciąga zarówno Polaków mieszkających za granicą, jak i Holendrów zainteresowanych odkrywaniem nowych smaków. W ofercie sklepu można znaleźć świeże warzywa i owoce dostarczane regularnie, różnorodne produkty nabiałowe takie jak sery, jogurty oraz mleko, a także bogaty wybór pieczywa, w tym tradycyjny polski chleb i bułki. Dodatkowo, sklep prowadzi sprzedaż wysokiej jakości mięs, w tym wędlin i kiełbas, które są chętnie kupowane przez klientów ceniących sobie smak i jakość polskich produktów. "Polski Smak" jest nie tylko miejscem zakupów, ale również punktem spotkań dla lokalnej społeczności polskiej, gdzie można poczuć kawałek rodzimej kultury.</span>
                <div className='fbIconDiv'>
                    <span>Odwiedź nas na</span>
                    <span className='fbIcon' onClick={fbClick}>
                        <LinkedInIcon/>
                    </span>
                   
                </div>
                
            </div>
           
        </div>
        {/* <div className='homeGlassDivRight'>
                <Slider/>
        </div> */}
        
      </div>
      </AnimatedPageLeft>
    </div>
  );
};

export default Home;