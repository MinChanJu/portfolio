import React from "react";

import CustomLink from "../components/CustomLink";
import { URL } from "../constants/URLManage";

const LinkView: React.FC = () => {
  return (
    <div className="w-full">
      <div className="text-start text-5xl font-bold text-purple-600 italic">Link</div>

      <br />
      <div className="text-start text-2xl font-bold">GitHub</div>
      <hr />
      <div className="text-start text-lg font-normal">
        <CustomLink href={URL.GITHUB} />
      </div>
      <div className="mt-5 flex w-full">
        <img src={URL.GITHUB_TOP_LANGS} alt="Top Languages" />
        <img src={URL.GITHUB_STATS} alt="GitHub Stats" />
      </div>

      <br />

      <br />
      <div className="text-start text-2xl font-bold">BAEKJOON</div>
      <hr />

      <div className="mt-5 flex">
        <div className="flex-1">Python</div>
        <div className="flex-1">JAVA</div>
      </div>
      <div className="mt-5 flex justify-between">
        <div className="flex-1">
          <a href={URL.BAEKJOON_PYTHON} target="_blank" rel="noopener noreferrer">
            <img src={URL.BAEKJOON_PYTHON_TIER} alt="BAEKJOON_PYTHON_TIER" />
          </a>
        </div>
        <div className="flex-1">
          <a href={URL.BAEKJOON_JAVA} target="_blank" rel="noopener noreferrer">
            <img src={URL.BAEKJOON_JAVA_TIER} alt="BAEKJOON_JAVA_TIER" />
          </a>
        </div>
      </div>

      <div className="mt-5 flex">
        <div className="flex-1">C언어</div>
        <div className="flex-1">C++</div>
      </div>
      <div className="mt-5 flex justify-between">
        <div className="flex-1">
          <a href={URL.BAEKJOON_CLANG} target="_blank" rel="noopener noreferrer">
            <img src={URL.BAEKJOON_CLANG_TIER} alt="BAEKJOON_CLANG_TIER" />
          </a>
        </div>
        <div className="flex-1">
          <a href={URL.BAEKJOON_CPP} target="_blank" rel="noopener noreferrer">
            <img src={URL.BAEKJOON_CPP_TIER} alt="BAEKJOON_CPP_TIER" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LinkView;
