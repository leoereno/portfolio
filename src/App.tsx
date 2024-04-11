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

function App() {
  return(
    <main className='flex flex-col items-center p-6 flex-wrap'>
      <Card 
        imgUrl={profilePic}
        title='Leonardo Ereno'
        subtitle='Desenvolvedor JavaScript'
        body='Com um histórico comprovado de adaptabilidade e proatividade, procuro contribuir no
        desenvolvimento de soluções e inovações tecnológicas'
      />
      <Card title='Tecnologias'>
        <IconList listItems={icons.icons} />
      </Card>

      <Card title='Soft Skills'>
        <TextList listItem={softSkills.softSkills} />
      </Card>

      <Card title="Projetos">
        <ProjectCard
          title='Emojify'
          description='Manipulação do input do usuário para a inserção de emojis aleatórios no texto.'
        />
      </Card>

      <Footer/>
    </main>
  );
}

export default App;
