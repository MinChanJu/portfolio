import React from "react";

import { Skill } from "../types/Skill";

type SkillViewProps = {
  languages: Skill[];
  libraries: Skill[];
  tools: Skill[];
};

const SkillView: React.FC<SkillViewProps> = ({ languages, libraries, tools }) => {
  const divide = 2;

  const getLanguage = (idx: number) => {
    const sub = [];
    for (let index = idx; index < languages.length; index += divide) {
      sub.push(languages[index]);
    }

    return (
      <ul key={idx} className="flex-1 text-start text-lg font-normal">
        {sub.map((lang, index) => (
          <li key={index}>
            {lang.name} ({lang.level}/10)
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <div className="text-start text-5xl font-bold text-purple-600 italic">Skill Set</div>

      <br />
      <div className="text-start text-2xl font-bold">언어</div>
      <hr />
      <div className="flex flex-row">{Array.from({ length: divide }, (_, i) => getLanguage(i))}</div>

      <br />
      <br />
      <div className="flex flex-row gap-2.5">
        <div className="flex-1 text-start text-2xl font-bold">프레임워크 및 라이브러리</div>
        <div className="flex-1 text-start text-2xl font-bold">도구</div>
      </div>
      <hr />
      <div className="flex flex-row gap-2.5">
        <div className="flex-1">
          <ul className="text-start text-lg font-normal">
            {libraries.map((library, index) => (
              <li key={index}>
                {library.name} ({library.level}/10)
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <ul className="text-start text-lg font-normal">
            {tools.map((tool, index) => (
              <li key={index}>
                {tool.name} ({tool.level}/10)
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillView;
