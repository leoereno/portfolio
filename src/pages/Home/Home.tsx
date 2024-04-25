import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import LangSelector from "../../components/LangSelector/LangSelector";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import TextList from "../../components/TextList/TextList";
import aboutMeSrc from "../../assets/aboutme.json";
import softSkillsSrc from "../../assets/soft-skills.json";
import profilePic from "../../assets/img/me.jpg";
import List from "../../components/List/List";
import icons from "../../assets/icons.json";
import { useLangContext } from "../../contexts/langContext";
import { useThemeContext } from "../../contexts/theme-context";
import ThemeSlider from "../../components/ThemeSlider/ThemeSlider";
import { projects } from "../../assets/projects";

export default function Home() {

    const {lang, setLang} = useLangContext();
    const {theme} = useThemeContext();
    const aboutMe = lang === 'pt' ? aboutMeSrc.pt : aboutMeSrc.en;
    const softSkills = lang === 'pt' ? softSkillsSrc.softSkills : softSkillsSrc.softSkillsEn;
    return(
        <div className={`${theme === "light" ? "bg-slate-100" : "bg-slate-800"} w-fit sm:w-auto`}>
            <ThemeSlider />
            <main className='flex flex-col items-center p-6 flex-wrap'>
            
            <Card 
                imgUrl={profilePic}
                title={aboutMe.name}
                subtitle={aboutMe.role}
                body={aboutMe.about}
                popUp
            >
                <LangSelector lang={lang} setLang={setLang}/>
            </Card>
            <Card title={lang === "pt" ? "Tecnologias" : "Technologies"} popUp>
                <List listItems={icons.icons} />
            </Card>

            <Card title='Soft Skills' popUp>
                <TextList listItem={softSkills} />
            </Card>

            <Card title={lang === 'pt' ? "Projetos" : "Projects"}>
                {/* <ProjectCard
                project={projects.emojify}
                />

                <ProjectCard
                    project={projects.weatherApp}
                /> */}
                {
                    projects.map(e => {
                        return <ProjectCard project={e} key={e.title}/>
                    })
                }
            </Card>
            
            <Footer/>
            </main>
        </div>
    )
}