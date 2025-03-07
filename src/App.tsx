import React, { useRef } from 'react'

import Introduction from "./components/Introduction"
import SkillSet from "./components/SkillSet"
import Project from "./components/Project"
import Award from "./components/Award"
import Career from "./components/Career"
import LinkSet from "./components/LinkSet"

import data from './assets/data.json'
import './styles/Global.css'
import './styles/Image.css'
import './styles/Table.css'

const App: React.FC = () => {
  const introRef = useRef(null);
  const skillRef = useRef(null);
  const projectRefs = data.projects.map(() => useRef(null));
  const awardRef = useRef(null);
  const careerRef = useRef(null);
  const linkRef = useRef(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container">
      <div className="content" id="content-to-download">
        <Introduction ref={introRef} />
        <SkillSet ref={skillRef} languages={data.languages} librarys={data.librarys} tools={data.tools} />
        {data.projects.map((project, index) => (
          <Project key={index} ref={projectRefs[index]} index={index} project={project} />
        ))}
        <Award ref={awardRef} prizes={data.prizes} certificates={data.certificates} />
        <Career ref={careerRef} careers={data.careers} />
        <LinkSet ref={linkRef} />
      </div>

      <div className="tabs">
        <button onClick={() => scrollToSection(introRef)}>자기소개</button>
        <button onClick={() => scrollToSection(skillRef)}>기술스택</button>
        {projectRefs.map((projectRef, index) => (
          <button key={index} onClick={() => scrollToSection(projectRef)}>프로젝트 {index+1}{"\n"}{data.projects[index].project}</button>
        ))}
        <button onClick={() => scrollToSection(awardRef)}>수상 및 자격증</button>
        <button onClick={() => scrollToSection(careerRef)}>경력</button>
        <button onClick={() => scrollToSection(linkRef)}>링크</button>
      </div>
    </div>
  )
}

export default App
