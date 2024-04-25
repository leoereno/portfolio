import linkedin from "../../assets/svg/linkedin-161-svgrepo-com.svg";
import mail from "../../assets/svg/email-svgrepo-com.svg"
import github from "../../assets/svg/github-142-svgrepo-com.svg";
import { useThemeContext } from "../../contexts/theme-context";
import { useLangContext } from "../../contexts/langContext";

export default function Footer(){
    const theme = useThemeContext();
    const lang = useLangContext();
    const isPt = lang.lang === 'pt';
    return(
        <div className={`${theme.theme === 'light' ? "bg-slate-50" : "bg-slate-400"} p-4 text-center flex flex-col rounded-xl shadow-md`}>
        <h2 onClick={() => {window.scroll({top: 0, left:0, behavior: 'smooth'})}} className={`text-md cursor-pointer ${theme.theme === 'light' ? "text-orange-600 hover:text-orange-300" : "text-slate-600 hover:text-slate-300"} transition-all`}>{lang.lang === 'pt' ? "Voltar ao início" : "Back to top"}</h2>
            <h1 className="font-bold text-2xl">{isPt ? "Contato" : "Contact me"}</h1>
            <ul className="flex gap-2 justify-center">
                <li className="hover:scale-110 transition-all p-1" title="LinkedIn">
                    <a href="https://linkedin.com/in/leoereno" target="_blank" rel="noreferrer">
                        <img src={linkedin} className="w-10" alt="LinkedIn Logo"></img>
                    </a>
                </li>

                <li className="hover:scale-110 transition-all p-1" title="Email">
                    <a href="mailto:leo.ereno@outlook.com">
                        <img src={mail} className="w-10" alt="Mail logo"></img>
                    </a>
                </li>

                <li className="hover:scale-110 transition-all p-1" title="Github">
                    <a href="https://github.com/leoereno" target="_blank" rel="noreferrer">
                        <img src={github} className="w-10" alt="Github Logo"></img>
                    </a>
                </li>
            </ul>
            <p className="m-1">{`© Leo Ereno - 2024 ${lang.lang === 'pt' ? "Todos os direitos reservados" : "All rights reserved"}.`}</p>
        </div>
    )
}