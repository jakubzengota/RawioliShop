import React from 'react';
import logo from "../assets/logo.svg"
import PhoneIcon from '../assets/icons/PhoneIcon';
import LocationIcon from '../assets/icons/LocationIcon';
import MailIcon from '../assets/icons/MailIcon';

const Footer = () => {
  return (
    <div className="footer">
        <div className='footerContent'>
            <div className='footerLeft'>
                <img className='logo' src={logo} alt='logoFooter'/>
                <div className='footerLeftInfoDiv'>
                    <PhoneIcon/>
                    <span>+31 6 16974255</span>
                </div>
                <div className='footerLeftInfoDiv'>
                    <MailIcon/>
                    <span>wiola_2008@op.pl</span>
                </div>
                <div className='footerLeftInfoDiv'>
                    <LocationIcon/>
                    <span>Kloosterstraat 64, Grubbenvorst, Netherlands</span>
                </div>
            </div>
            <div className='footerRight'>
                <div className='footerRightInfoDiv'>
                    <span className='ourCompanySpan'>Nasza firma</span>
                </div>
                <div className='footerRightInfoDiv'>
                    <span>Promocje</span>
                </div>
                <div className='footerRightInfoDiv'>
                    <span>O nas</span>
                </div>
                <div className='footerRightInfoDiv'>
                    <span>Kontakt z nami</span>
                </div>
            </div>
        </div>
        

        <div className='footerBottom'>
            <span>&copy; Jakub Zengota Copyright 2024 All rights reserved</span>
        </div>

    </div>
  );
};

export default Footer;