import  { useContext } from 'react';
import mainrawioli from '../assets/mainrawioli.png'
import LanguageContext from '../utils/LanguageContext';
const About = () => {
    const { translations } = useContext(LanguageContext);
  return (
    <div className="about">
         {/* <div className='aboutGlassDivLeft'>
            <span className='aboutMainSpan'>Współprace</span>

        </div> */}
        <div className='aboutGlassDivRight'>
            {/* <span className='aboutMainSpan'>O nas</span> */}
            <div className="mainravioliDiv">
                <img className="mainravioli" src={mainrawioli} alt="Owners of the shop" />
            </div>
            <span className='aboutSpan'>{translations.desc2}</span>
        </div>
        
    </div>
  );
};

export default About;