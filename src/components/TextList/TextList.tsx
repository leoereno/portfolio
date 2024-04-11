type ListItem = {
    title: string;
}
interface ListItemProps{
    listItem: ListItem[];
}
export default function TextList({listItem}: ListItemProps){
    return(
        <ul className="flex flex-row gap-6 text-xl flex-wrap justify-center">
            {
                listItem.map(e => 
                    <li key={e.title} className="border-2 p-3 border-orange-600 rounded-full cursor-pointer hover:bg-orange-600 hover:text-white transition-all">{e.title}</li>
                )
            }
        </ul>

    )
}