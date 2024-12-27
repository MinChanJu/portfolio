import React from 'react'
import data from '../assets/data.json'
import './CSS/Portfolio.css'

const SkillSet = React.forwardRef<HTMLDivElement>(({ }, ref) => {
  return (
    <div ref={ref}>
      <div className="big">Skill Set</div>

      <div className="info">언어</div>
      <hr />
      <ul className="subinfo">
        {data.languages.map((lang, index) => (
          <li key={index}>{lang.name} ({lang.level}/5)</li>
        ))}
      </ul>

      <div className="info">프레임워크</div>
      <hr />
      <ul className="subinfo">
        {data.frameworks.map((framework, index) => (
          <li key={index}>{framework.name} ({framework.level}/5)</li>
        ))}
      </ul>
    </div>
  );
});

export default SkillSet;