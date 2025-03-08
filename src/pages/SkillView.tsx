import React from 'react'
import { skill } from '../types/skill';

type SkillViewProps = {
  languages: skill[];
  librarys: skill[];
  tools: skill[];
}

const SkillView: React.FC<SkillViewProps> = ({ languages, librarys, tools }) => {
  const divide = 2;

  const getLanguage = (idx: number) => {
    let sub = [];
    for (let index = idx; index < languages.length; index += divide) {
      sub.push(languages[index]);
    }

    return (
      <ul key={idx} className="subinfo flex1">
        {sub.map((lang, index) => (
          <li key={index}>{lang.name} ({lang.level}/10)</li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <div className="big">Skill Set</div>

      <div className="info">언어</div>
      <hr />
      <div className="flexRow">
        {Array.from({ length: divide }, (_, i) => getLanguage(i))}
      </div>

      <div className="flexRow gap10">
        <div className="flex1">
          <div className="info">프레임워크 및 라이브러리</div>
          <hr />
          <ul className="subinfo">
            {librarys.map((library, index) => (
              <li key={index}>{library.name} ({library.level}/10)</li>
            ))}
          </ul>
        </div>

        <div className="flex1">
          <div className="info">도구</div>
          <hr />
          <ul className="subinfo">
            {tools.map((tool, index) => (
              <li key={index}>{tool.name} ({tool.level}/10)</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillView;