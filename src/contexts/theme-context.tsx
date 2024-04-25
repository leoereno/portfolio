import { ReactNode, createContext, useContext, useState } from "react";

type Theme = 'dark' | 'light';

type ThemeContextType = {
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
    onThemeChange: () => void;
}

interface ThemeContextProps {
    children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeProvider({children}: ThemeContextProps){
    const [theme, setTheme] = useState<Theme>('light');
    const onThemeChange = () => theme === 'light' ? setTheme('dark') : setTheme('light');
    return(
        <ThemeContext.Provider value={{theme, setTheme, onThemeChange}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useThemeContext() {
    const context = useContext(ThemeContext);
    if(!context) throw new Error("useThemeContext must be used within ThemeContextProvider");

    return context;
}