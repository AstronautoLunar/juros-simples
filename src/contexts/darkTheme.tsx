import React, { 
    createContext, 
    useContext,
    useState
} from 'react';

const DarkTheme = createContext({} as DarkThemeData);

interface DarkThemeData {
    dark: boolean;
    onChangeDark: () => void;
}

interface DarkProviderData {
    children: any;
}

export function DarkProvider({ children }: DarkProviderData) {
    let [ dark, setDark ] = useState(false);

    function onChangeDark() {
        setDark(!dark);
    }

    return (
        <DarkTheme.Provider value={{ 
            dark, 
            onChangeDark 
        }}>
            {  children }
        </DarkTheme.Provider>
    )
}

export function useDark() {
    return useContext(DarkTheme);
}