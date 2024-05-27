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

    return (
        <>
            <LanguageProvider>
                <Navigation homeRef={homeRef} footerRef={footerRef} />
                <div ref={homeRef}>
                    <Home />
                </div>
                <About />
                <Where />
                <div ref={footerRef}>
                    <Footer homeRef={homeRef} footerRef={footerRef} />
                </div>
            </LanguageProvider>
        </>
    );
}

export default App;
