import React, { useContext, RefObject } from 'react';
import LanguageContext from '../utils/LanguageContext';
import logo from "../assets/logo.svg";

interface NavigationProps {
    homeRef: RefObject<HTMLDivElement>;
    footerRef: RefObject<HTMLDivElement>;
}

const Navigation: React.FC<NavigationProps> = ({ homeRef, footerRef }) => {
    const { translations, toggleLanguage } = useContext(LanguageContext);

    const scrollToHome = () => {
        homeRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToFooter = () => {
        footerRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="navigation">
            <div className="logoDiv">
                <img className="logo" src={logo} alt="logo"/>
            </div>
            <div className="navMenu right">
                <span className="navSpan" onClick={scrollToHome}>{translations.about}</span>
                <span className="navSpan" onClick={scrollToFooter}>{translations.contact}</span>
                <span className="navSpanLang" onClick={() => toggleLanguage('nl')}>NL</span>
                <span className="navSpanLangSlash">/</span>
                <span className="navSpanLang" onClick={() => toggleLanguage('pl')}>PL</span>
            </div>
        </nav>
    );
};

export default Navigation;
