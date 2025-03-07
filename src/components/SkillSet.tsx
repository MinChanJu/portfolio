import React from 'react'
import { skill } from '../types/skill';

type SkillSetProps = {
  languages: skill[];
  librarys: skill[];
  tools: skill[];
}

const SkillSet = React.forwardRef<HTMLDivElement, SkillSetProps>(({ languages, librarys, tools }, ref) => {
  return (
    <div ref={ref}>
      <div className="big">Skill Set</div>

      <div className="info">언어</div>
      <hr />
      <ul className="subinfo">
        {languages.map((lang, index) => (
          <li key={index}>{lang.name} ({lang.level}/10)</li>
        ))}
      </ul>

      <div className="info">프레임워크 및 라이브러리</div>
      <hr />
      <ul className="subinfo">
        {librarys.map((library, index) => (
          <li key={index}>{library.name} ({library.level}/10)</li>
        ))}
      </ul>

      <div className="info">도구</div>
      <hr />
      <ul className="subinfo">
        {tools.map((tool, index) => (
          <li key={index}>{tool.name} ({tool.level}/10)</li>
        ))}
      </ul>
    </div>
  );
});

export default SkillSet;