import React from 'react'
import { URL } from '../constants/URLManage';
import { CustomLink } from '../components';

const IntroductionView: React.FC = () => {
  const intro = `
 저는 대학 입학 후, 처음 프로그래밍을 접했고, 코드가 정상적으로 실행될 때의 성취감에 매료되었습니다. 이후 소프트웨어학과를 복수전공하며 알고리즘 문제 해결에 흥미를 느껴 꾸준히 학습한 끝에 solved.ac P5 티어를 달성하였습니다. 또한, 2023 아주대학교 산업수학 프로그래밍 경진대회 2등, 2024 아주대학교 프로그래밍 경진대회(APC) Div.2 대상(1등)을 수상하며 실력을 인정받았습니다.

 2024년에는 수학과 소학회 MiC의 회장을 맡아 프로그래밍 멘토링과 코딩 대회를 기획·운영하며 교육 방식과 리더십을 배웠습니다. 특히, 더 나은 학습 환경을 제공하기 위해 직접 코딩 대회 사이트를 개발하며 백엔드(Spring Boot), 프론트엔드(React), 데이터베이스(Supabase)를 활용하며 실무적인 개발 경험을 쌓을 수 있었습니다. 그렇게 저는 개발자의 꿈으로 한걸음 다가갔다고 생각합니다.

 다양한 기술에 대한 호기심으로 프론트엔드(React, TypeScript), 백엔드(Spring Boot, Django), 모바일 앱(Flutter), 게임 개발(Unity) 등 폭넓은 경험을 쌓았습니다. 이렇게 다양한 경험을 쌓은 이유는 특정 분야에 국한되지 않고, 다양한 기술을 조합하여 최적의 솔루션을 찾아내는 개발자가 되고 싶었기 때문입니다. 방학마다 독학으로 앱과 웹사이트를 개발하며 문제 해결 능력을 키웠고, 끈기와 논리적 사고력을 기를 수 있었습니다.
 
 저는 새로운 것을 배우는 과정에서 끈기 있게 문제를 해결하는 것이 저만의 강점이라고 생각합니다. 코드를 작성할 때 다른 사람들이 헷갈릴 수 있는 부분을 잘 잡고 어떤 문제가 생겨도 어디에서 오류가 나는지 금방 찾을 수 있다고 생각합니다. 앞으로도 새로운 도전에 적극적으로 나서며, 팀원들과 협력하여 최적의 솔루션을 찾아가는 개발자가 되고 싶습니다.
`;

  return (
    <div className='margin'>
      <div className="big">Introduction</div>
      
      <div className="info">안녕하세요. 저는 주니어 개발자 주민찬입니다.</div>
      <div className='subinfo'>{intro}</div>

      <div className="flexRow gap10">
        <div className='flex1'>
          <div className="info">Info</div>
          <hr />
          <div className="subinfo">
            <div>이름 : 주민찬</div>
            <div>생년월일 : 2002.02.07</div>
            <div>전화번호 : 010-8592-7570</div>
            <div>이메일 : mcj00220077@gmail.com</div>
            <div>깃허브 : <CustomLink href={URL.GITHUB} /></div>
            <div>주소 : 경기도 수원시 영통구 원천동</div>
          </div>
        </div>

        <div className='flex1'>
          <div className="info">학력</div>
          <hr />
          <div className="subinfo">
            <div>학교 : 아주대학교</div>
            <div>입학년도 : 2020.03</div>
            <div>졸업년도(예정) : 2026.02</div>
            <div>제 1전공 : 수학과</div>
            <div>복수전공 : 소프트웨어학과</div>
            <div>학기 : 4-1(재학) 2025.03 기준</div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default IntroductionView;