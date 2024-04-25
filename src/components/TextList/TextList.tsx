import { useThemeContext } from "../../contexts/theme-context";

type ListItem = {
    title: string;
}
interface ListItemProps{
    listItem: ListItem[];
}
export default function TextList({listItem}: ListItemProps){
    const {theme} = useThemeContext();
    const color = theme === 'light' ? 'orange-600' : 'slate-500'
    const hoverColor = theme === 'light' ? 'hover:bg-orange-600' : 'hover:bg-indigo-500'
    return(
        <ul className={`flex flex-row gap-6 text-lg sm:text-xl flex-wrap justify-center ${theme === 'dark' ? 'text-slate-900': ''}`}>
            {
                listItem.map(e => 
                    <li key={e.title} className={`border-2 p-3 ${"border-" + color} rounded-full cursor-default ${hoverColor} hover:text-white transition-all`}>{e.title}</li>
                )
            }
        </ul>

    )
}