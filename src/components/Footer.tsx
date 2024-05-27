import  { RefObject, useContext } from 'react';
import logo from "../assets/logo.svg"
import PhoneIcon from '../assets/icons/PhoneIcon';
import LocationIcon from '../assets/icons/LocationIcon';
import MailIcon from '../assets/icons/MailIcon';
import LanguageContext from '../utils/LanguageContext';

interface NavigationProps {
    homeRef: RefObject<HTMLDivElement>;
    footerRef: RefObject<HTMLDivElement>;
}


const Footer: React.FC<NavigationProps> = ({ homeRef }) => {
    const { translations } = useContext(LanguageContext);

    const scrollToHome = () => {
        homeRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

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
                    <span>{translations.location}</span>
                </div>
            </div>
            <div className='footerRight'>
                <div className='footerRightInfoDiv'>
                    <span className='ourCompanySpan'>{translations.ourCompany}</span>
                </div>
                <div className='footerRightInfoDiv'>
                    <span className='toUpperCase' onClick={scrollToHome}>{translations.about}</span>
                </div>
                <div className='footerRightInfoDiv'>
                    <span className='toUpperCase'>{translations.contact}</span>
                </div>
            </div>
        </div>
        
        <div className='footerBottom'>
            <span>&copy; 2024 Jakub Zengota. All rights reserved</span>
        </div>

    </div>
  );
};

export default Footer;