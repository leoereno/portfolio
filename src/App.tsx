import React from 'react';
import './App.css';
import Card from './components/Card/Card';
import profilePic from '../src/assets/img/me.jpg';
import IconList from './components/List/List';
import icons from "./assets/icons.json"
import softSkills from "./assets/soft-skills.json"
import TextList from './components/TextList/TextList';
import Footer from './components/Footer/Footer';
import ProjectCard from './components/ProjectCard/ProjectCard';
import emojifyPic from '../src/assets/img/emojify.png';
//import cv from '../src/assets/CV - Leonardo Ereno(br)-3.pdf'

function App() {
  return(
    <main className='flex flex-col items-center p-6 flex-wrap'>
      <Card 
        imgUrl={profilePic}
        title='Leonardo Ereno'
        subtitle='Desenvolvedor JavaScript'
        body='Com um histórico comprovado de adaptabilidade e proatividade, procuro contribuir no
        desenvolvimento de soluções e inovações tecnológicas'
        popUp
      >
      </Card>
      <Card title='Tecnologias' popUp>
        <IconList listItems={icons.icons} />
      </Card>

      <Card title='Soft Skills' popUp>
        <TextList listItem={softSkills.softSkills} />
      </Card>

      <Card title="Projetos">
        <ProjectCard
          title='Emojify'
          description='Manipulação do input do usuário para a inserção de emojis aleatórios no texto.'
          tools={["HTML", "CSS", "React", "TypeScript", "Integração com API externa"]}
          projectUrl='https://emojify-ten.vercel.app/'
          imageUrl={emojifyPic}
          githubUrl='https://github.com/leoereno/emojify'
        />
      </Card>

      <Footer/>
    </main>
  );
}

export default App;
