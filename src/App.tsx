import React, { useRef } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Where from './components/Where';

import { LanguageProvider } from './utils/LanguageContext';

const App: React.FC = () => {
    const homeRef = useRef<HTMLDivElement>(null);
    const footerRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <LanguageProvider>
                <Navigation homeRef={homeRef} footerRef={footerRef} />
                <div ref={homeRef}>
                    <Home />
                </div>
                <div ref={aboutRef}>
                    <About aboutRef={aboutRef}/>
                </div>
                
                <Where />
                <div ref={footerRef}>
                    <Footer homeRef={homeRef} footerRef={footerRef} aboutRef={aboutRef}/>
                </div>
            </LanguageProvider>
        </>
    );
}

export default App;
