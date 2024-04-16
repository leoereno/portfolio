import { ReactNode } from "react";

interface CardProps{
    title: string;
    subtitle?: string;
    body?: string;
    imgUrl?: string;
    children?: ReactNode;
    popUp?: boolean;
}



export default function Card({title, subtitle, body, children, imgUrl, popUp}: CardProps){
    return(
        <div className={`bg-slate-50 flex flex-col shrink rounded-xl shadow-md text-center p-6 sm-96 sm:w-auto mb-6 items-center ${popUp ? "hover:-translate-x-1 hover:-translate-y-2" : ""} transition-all`}>
            {imgUrl && <img src={imgUrl} className="shadow-lg object-cover rounded-full m-2 w-36" alt="Me"></img>}
            <div className="border-b-2 p-1 border-orange-200 mb-2">
                <h2 className="text-2xl font-bold">{title}</h2>
                <h3 className="text-xl font-light">{subtitle}</h3>
            </div>
            <hr></hr>
            <p className="text-slate-700 w-96 p-2 text-pretty">{body}</p>
            <div className="m-2 flex flex-row gap-4 flex-wrap">    
                {children}
            </div>
        </div>
    )
}