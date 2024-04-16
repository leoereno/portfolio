import githubIcon from "../../assets/svg/github-142-svgrepo-com.svg";
interface ProjectCardProps{
    title: string;
    description?: string;
    imageUrl?: string;
    tools: string[];
    projectUrl: string;
    githubUrl: string;
}
export default function ProjectCard(props:ProjectCardProps) {
    return(
        <div className="rounded-sm p-4 max-w-sm shadow-md">
            <img src={props.imageUrl} alt={`${props.title}`} className="object-cover hover:scale-105 transition-all" />
            <div className="border-b-2 p-2">
                <h1 className="text-lg font-semibold">{props.title}</h1>
                <p className="font-light text-slate-700">{props.description}</p>
            </div>
            <div className="flex flex-col gap-4 items-center">
                <p className="font-semibold text-left mt-1">Ferramentas: <span className="font-normal">{props.tools?.map((e, index) => index === props.tools.length-1 ? e : e + ", ")}</span></p>
                <a href={props.githubUrl} target="_blank" title="Github Repo" rel="noreferrer">
                    <img src={githubIcon} className="w-12" alt="Github Icon"></img>
                </a>
            </div>

        </div>
    )
}