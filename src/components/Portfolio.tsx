import React, { useRef } from "react"

import Introduction from "./Introduction"
import SkillSet from "./SkillSet"
import Project from "./Project"
import Award from "./Award"
import Career from "./Career"
import LinkSet from "./LinkSet"

import data from '../assets/data.json'
import './CSS/Portfolio.css'

const Portfolio: React.FC = () => {
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
            <div className="content">
                <Introduction ref={introRef} />
                <SkillSet ref={skillRef} />
                {data.projects.map((project, index) => (
                    <Project key={index} ref={projectRefs[index]} index={index} project={project} />
                ))}
                <Award ref={awardRef} />
                <Career ref={careerRef} />
                <LinkSet ref={linkRef}></LinkSet>
                <footer>
                    <br /><br /><br /><br />
                </footer>
            </div>

            <div className="tabs">
                <button onClick={() => scrollToSection(introRef)}>자기소개</button>
                <button onClick={() => scrollToSection(skillRef)}>기술스택</button>
                {projectRefs.map((projectRef, index) => (
                    <button key={index} onClick={() => scrollToSection(projectRef)}>프로젝트 {index + 1}</button>
                ))}
                <button onClick={() => scrollToSection(awardRef)}>수상 및 자격증</button>
                <button onClick={() => scrollToSection(careerRef)}>경력</button>
                <button onClick={() => scrollToSection(linkRef)}>링크</button>
            </div>
        </div>
    );
};

export default Portfolio;