import { ReactNode, createContext, useContext, useState } from "react";

type Language = 'pt'|'en';

interface LangProviderContext {
    lang: Language | undefined;
    setLang: React.Dispatch<React.SetStateAction<Language>>;
    onLangChange: () => void;
}

interface LangProviderProps {
    children: ReactNode;
}


export const LangContext = createContext<Partial<LangProviderContext>>({});

export default function LangProvider ({children}: LangProviderProps){
    const [lang, setLang] = useState<Language>('pt')
    const onLangChange = () => {
        if(lang === 'pt') setLang('en');
        else setLang('pt');
        
    }
    
    ;
    return(
        <LangContext.Provider value={{lang, setLang, onLangChange}}>
            {children}
        </LangContext.Provider>
    )
}

export function useLangContext(){
    const lang = useContext(LangContext);
    if(!lang) throw new Error(
        "useLangContext must be used within a LangContextProvider"
    );
    return lang;
}