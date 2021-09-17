import { 
    createContext, 
    useContext,
    useState
} from 'react';

const DarkTheme = createContext({} as DarkThemeData);

interface DarkThemeData {
    dark: boolean;
    onChangeDark: (value: any) => void;
}

interface DarkProviderData {
    children: any;
}

export function DarkProvider({ children }: DarkProviderData) {
    let [ dark, setDark ] = useState(false);

    function onChangeDark(value:any) {
        setDark(value);
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