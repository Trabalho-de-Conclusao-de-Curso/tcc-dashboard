import React, { createContext, useState, useEffect, useCallback } from 'react';
import { DefaultTheme } from 'styled-components';

import getStrings from '../../utils/strings';

import themeLight from '../../themes/light';
import themeDark from '../../themes/dark';

import { TypeStrings } from '../../models/ui';

type TypeUiContext = {
    strings: TypeStrings;
    theme: DefaultTheme;
    language: string;
    loading: boolean;
    toggleTheme(): void;
};

const UiContext = createContext<TypeUiContext>({} as TypeUiContext);

export const UiProvider: React.FC = ({ children }) => {
    const tokenKey = '@tccapp:token:';

    const [strings, setStrings] = useState<TypeStrings>({});
    const [theme, setTheme] = useState<DefaultTheme>(themeLight);
    const [language, setLanguage] = useState<string>('pt-br');
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLanguage(navigator.language);

        const loadStoragedData = async () => {
            setLoading(true);

            //Get theme data from local storage
            const themeData = localStorage.getItem(tokenKey + 'theme');

            if (themeData !== null)
                setTheme(themeData === 'light' ? themeLight : themeDark);

            setLoading(false);
        };

        loadStoragedData();
    }, []);

    useEffect(() => {
        setStrings(getStrings(language));
    }, [language]);

    useEffect(() => {
        localStorage.setItem(tokenKey + 'theme', theme.title);
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme(theme.title === 'light' ? themeDark : themeLight);
    }, [theme]);

    return (
        <UiContext.Provider
            value={{
                strings,
                theme,
                toggleTheme,
                language,
                loading,
            }}
        >
            {children}
        </UiContext.Provider>
    );
};

export default UiContext;
