import React from 'react'
import { URL } from '../constants/URLManage'
import CustomLink from '../components/CustomLink'

const LinkView: React.FC = () => {
  return (
    <div className='margin'>
      <div className="big">Link</div>

      <div className="info">GitHub</div>
      <hr />
      <div className="subinfo"><CustomLink href={URL.GITHUB} /></div>
      <div className="imageContainer">
        <img style={{ width: "42.5%" }} src={URL.GITHUB_TOP_LANGS} alt="Top Languages" />
        <img style={{ width: "55.5%" }} src={URL.GITHUB_STATS} alt="GitHub Stats" />
      </div>

      <br />

      <div className="info">BAEKJOON</div>
      <hr />

      <div className="imageContainer">
        <div>Python</div>
        <div>JAVA</div>
      </div>
      <div className="imageContainer">
        <a href={URL.BAEKJOON_PYTHON} target="_blank" rel="noopener noreferrer"><img src={URL.BAEKJOON_PYTHON_TIER} alt="BAEKJOON_PYTHON_TIER" /></a>
        <a href={URL.BAEKJOON_JAVA} target="_blank" rel="noopener noreferrer"><img src={URL.BAEKJOON_JAVA_TIER} alt="BAEKJOON_JAVA_TIER" /></a>
      </div>

      <div className="imageContainer">
        <div>C언어</div>
        <div>C++</div>
      </div>
      <div className="imageContainer">
        <a href={URL.BAEKJOON_CLANG} target="_blank" rel="noopener noreferrer"><img src={URL.BAEKJOON_CLANG_TIER} alt="BAEKJOON_CLANG_TIER" /></a>
        <a href={URL.BAEKJOON_CPP} target="_blank" rel="noopener noreferrer"><img src={URL.BAEKJOON_CPP_TIER} alt="BAEKJOON_CPP_TIER" /></a>
      </div>
    </div>
  );
};

export default LinkView;