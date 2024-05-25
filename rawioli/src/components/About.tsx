import React from 'react';
import mainrawioli from '../assets/mainrawioli.png'

const About = () => {
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
            <span className='aboutSpan'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid eum officiis ullam fugiat asperiores enim, sint nostrum ad consectetur fuga ducimus odio ut, porro tempora quis placeat excepturi, repellat sapiente.</span>
        </div>
        
    </div>
  );
};

export default About;