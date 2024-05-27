import React, { createContext, useState, useEffect, ReactNode } from 'react';
import pl from '../translates/pl.json';
import nl from '../translates/nl.json';

// Typy dla tłumaczeń i funkcji zmieniającej język
interface LanguageContextType {
    translations: Record<string, string>;
    toggleLanguage: (lang: string) => void;
}

// Początkowy kontekst z typami
const LanguageContext = createContext<LanguageContextType>({
    translations: pl, // Domyślnie ustawione na polski
    toggleLanguage: () => {} // Pusta funkcja
});

interface LanguageProviderProps {
    children: ReactNode;
}

// Provider z logiką zarządzania językiem
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<string>('pl');
    const [translations, setTranslations] = useState<Record<string, string>>(pl);

    useEffect(() => {
        switch (language) {
            case 'nl':
                setTranslations(nl);
                break;
            case 'pl':
            default:
                setTranslations(pl);
                break;
        }
    }, [language]);

    const toggleLanguage = (lang: string): void => {
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ translations, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageContext;