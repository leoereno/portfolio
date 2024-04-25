import githubIcon from "../../assets/svg/github-142-svgrepo-com.svg";
import { useLangContext } from "../../contexts/langContext";
import { Project } from "../../types/types";

interface ProjectCardProps{
    project: Project

}


export default function ProjectCard(props:ProjectCardProps) {
    const lang = useLangContext();
    return(
        <div className="rounded-sm p-4 max-w-sm shadow-md">
            <a href={props.project.projectUrl} target="_blank" rel="noreferrer">
                <img src={props.project.imageUrl.toString()} alt={`${props.project.title}`} className="object-cover hover:scale-105 transition-all" />
            </a>
            <div className="border-b-2 p-2">
                <h1 className="text-lg font-semibold">{props.project.title}</h1>
                {<p className="font-light text-slate-700">{lang.lang === 'pt' ? props.project.description : props.project.descriptionEn}</p>}
            </div>
            <div className="flex flex-col gap-4 items-center">
                <p className="font-semibold text-left mt-1">{lang.lang === 'pt' ? `Ferramentas: ` : "Tools: "}<span className="font-normal">{props.project.tools?.map((e, index) => index === props.project.tools.length-1 ? e : e + ", ")}</span></p>
                <a href={props.project.githubUrl} target="_blank" title="Github Repo" rel="noreferrer" className="">
                    <img src={githubIcon} className="w-12" alt="Github Icon"></img>
                </a>
            </div>

        </div>
    )
}