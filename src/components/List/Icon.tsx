interface IconProps{
    url: string;
    title: string;
}
export default function Icon ({url, title}: IconProps){
    return(
        <div className="hover:scale-110 transition-all text-center items-center flex flex-col">
            {url!=="" && <img src={url} alt="{title}" title={title} className="cursor-default w-18 "/>}
            <p className="text-xl">{title}</p>
        </div>
    )
}