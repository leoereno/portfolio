import "../../../node_modules/flag-icons/css/flag-icons.min.css"
interface LangSelectorProps {
    lang: string | undefined;
    setLang: React.Dispatch<React.SetStateAction<"pt" | "en">> | undefined;
}

export default function LangSelector(props: LangSelectorProps){
    return(
        <div className="flex flex-row gap-4 text-xl">
            <span className="fi fi-br cursor-pointer" title="Português - BR" onClick={(e) => props.setLang!("pt")}></span>
            <span className="fi fi-us cursor-pointer" title="English" onClick={(e) => props.setLang!("en")}></span>
        </div>
    )
}