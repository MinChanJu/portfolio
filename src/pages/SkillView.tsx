import React from 'react'
import { Skill } from '../types/Skill';

type SkillViewProps = {
  languages: Skill[];
  librarys: Skill[];
  tools: Skill[];
}

const SkillView: React.FC<SkillViewProps> = ({ languages, librarys, tools }) => {
  const divide = 2;

  const getLanguage = (idx: number) => {
    let sub = [];
    for (let index = idx; index < languages.length; index += divide) {
      sub.push(languages[index]);
    }

    return (
      <ul key={idx} className="subinfo ts flex1">
        {sub.map((lang, index) => (
          <li key={index}>{lang.name} ({lang.level}/10)</li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <div className="big purple italic ts">Skill Set</div>

      <br />
      <div className="info ts">언어</div>
      <hr />
      <div className="flexRow">
        {Array.from({ length: divide }, (_, i) => getLanguage(i))}
      </div>

      <br /><br />
      <div className="flexRow gap10">
        <div className="info flex1 ts">프레임워크 및 라이브러리</div>
        <div className="info flex1 ts">도구</div>
      </div>
      <hr />
      <div className="flexRow gap10">
        <div className="flex1">
          <ul className="subinfo ts">
            {librarys.map((library, index) => (
              <li key={index}>{library.name} ({library.level}/10)</li>
            ))}
          </ul>
        </div>
        <div className="flex1">
          <ul className="subinfo ts">
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