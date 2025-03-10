import React from 'react'
import { URL } from '../constants/URLManage';
import { CustomLink } from '../components';

const IntroductionView: React.FC = () => {
  return (
    <div className='margin'>
      <div className="big">Introduction</div>

      <div className="title">안녕하세요. 저는 신입 개발자 주민찬입니다.</div>
      <br />
      <div className="subinfo">
        저는 대학교에 들어와서 처음으로 코딩을 접해봤습니다.
        그 후 프로그래밍에 흥미를 느껴 소프트웨어학과를 복수전공 신청하였고 알고리즘을 배우면서 정말 재밌게 공부했습니다.
        그렇게 저는 알고리즘을 공부한지 4개월 만에 코딩 문제 풀이 사이트인 백준 온라인 저지에서 P5(상위 약 4%) 티어를 받게 되었습니다.
        그 만큼 저는 프로그래밍에 대한 열정과 끈기가 매우 강하고 배울 의지 또한 강합니다.
      </div>

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