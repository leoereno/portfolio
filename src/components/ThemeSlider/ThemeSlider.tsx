import { useThemeContext } from "../../contexts/theme-context";
import lightMode from "../../assets/img/light-mode.png";
import darkMode from "../../assets/img/dark-mode.png";
import { useLangContext } from "../../contexts/langContext";
import "../../../node_modules/flag-icons/css/flag-icons.min.css"


export default function ThemeSlider() {
    const {theme, onThemeChange} = useThemeContext();
    const langContext = useLangContext();
    return(
        <div className="fixed bottom-6 right-6 flex flex-col gap-2">
            <button 
                className="rounded-full bg-opacity-35 text-2xl"
                onClick={() => langContext.onLangChange!()}
            >
                {langContext.lang === 'pt' ? <span className="fi fi-br cursor-pointer"></span> : 
                <span className="fi fi-us cursor-pointer"></span>
                }
            </button>
            <button 
                className="rounded-full bg-slate-300 bg-opacity-35"
                onClick={() => onThemeChange()}
            >
                <img src={theme === 'light' ? lightMode : darkMode} alt="Change light theme"></img>
            </button>
        </div>

    )
}