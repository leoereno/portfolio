import Icon from "./Icon";

type IconListItem = {
    title: string;
    url: string;
}

interface ListItemProps{
    listItems: IconListItem[];
}

export default function List(props: ListItemProps){
    return(
        <ul className='flex flex-row gap-6 flex-wrap justify-center'>
            {props.listItems.map((el) => 
                <li key={el.title} className='flex flex-col text-center'>
                    <Icon url={el.url} title={el.title}/>
                </li>
            )}
        </ul>           
    )
}