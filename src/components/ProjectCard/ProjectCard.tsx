interface ProjectCardProps{
    title: string;
    description?: string;
    imageUrl?: string;
    tools?: string[];
}
export default function ProjectCard(props:ProjectCardProps) {
    return(
        <div className="border-2 rounded-2xl p-4 border-orange-600">
            <h1 className="text-lg font-semibold">{props.title}</h1>
            <p className="">{props.description}</p>
        </div>
    )
}