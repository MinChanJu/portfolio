import React, { useRef } from "react";
import coding_contest from '../assets/coding_contest.png'
import mic_app1 from '../assets/MiCapp1.jpeg'
import mic_app2 from '../assets/MiCapp2.jpeg'
import mic_app3 from '../assets/MiCapp3.jpeg'
import chat1 from '../assets/chat1.png'
import chat2 from '../assets/chat2.png'
import chat3 from '../assets/chat3.png'
import trash1 from '../assets/trash1.jpeg'
import trash2 from '../assets/trash2.jpeg'
import trash3 from '../assets/trash3.jpeg'
import portfolio from '../assets/portfolio.png'
import './CSS/Portfolio.css';

const Portfolio: React.FC = () => {
    const introRef = useRef(null);
    const skillRef = useRef(null);
    const projectRef = useRef(null);
    const awardRef = useRef(null);

    const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="container">
            <div className="content">
                <div ref={introRef}>
                    <div className="big">Introduction</div>
                    <div className="title">안녕하세요. 저는 신입 개발자 주민찬입니다.</div>
                    <p>
                        저는 대학교에 들어와서 처음으로 코딩을 접해봤습니다.
                        그 후 프로그래밍에 흥미를 느껴 소프트웨어학과를 복수전공 신청하였고 알고리즘을 배우면서 정말 재밌게 공부했습니다.
                        그렇게 저는 알고리즘을 공부한지 4개월 만에 코딩 문제 풀이 사이트인 백준 온라인 저지에서 P5(상위 4%) 티어를 받게 되었습니다.
                        그 만큼 저는 프로그래밍에 대한 열정과 끈기가 매우 강하고 배울 의지 또한 강합니다.
                    </p>

                    <div className="info">학력</div>
                    <hr />
                    <div className="subinfo">
                        <div>학교 : 이주대학교</div>
                        <div>입학년도 : 2020.03</div>
                        <div>제 1전공 : 수학과</div>
                        <div>복수전공 : 소프트웨어학과</div>
                        <div>학기 : 3-2(수료) 2024.01 기준</div>
                    </div>

                    <div className="info">경력</div>
                    <hr />
                    <table>
                        <tr>
                            <th>구분</th>
                            <th>내용</th>
                            <th>기간</th>
                        </tr>
                        <tr>
                            <td>군복무</td>
                            <td>2022년 11월 30일 육군 병장 만기전역</td>
                            <td>2021.05.31 ~ 2022.11.30</td>
                        </tr>
                        <tr>
                            <td>동아리 활동</td>
                            <td>2024년 아주대학교 수학과 소학회 MiC 회장</td>
                            <td>2024.01.01 ~ 2024.12.31</td>
                        </tr>
                    </table>
                    <ol className="subinfo">
                        <li>
                            <div>구분 : </div>
                            <div>근무기간 : 2024.08.18 ~ 2024.09.22</div>
                            <div>직급 : 인턴</div>
                            <div>담당업무 : Python3 강의 수강 및 문제 풀이</div>
                        </li>
                    </ol>

                    <div className="info">기타</div>
                    <hr />
                    <div className="subinfo">
                        <div>이름 : 주민찬</div>
                        <div>생년월일 : 2002.02.07</div>
                        <div>전화번호 : 010-8592-7570</div>
                        <div>이메일 : mcj00220077@gmail.com</div>
                        <div>주소 : 경기도 수원시 영통구 원천동</div>
                        <div>깃허브 : <a href="https://github.com/MinChanJu" target="_blank" rel="noopener noreferrer">https://github.com/MinChanJu</a></div>
                    </div>
                </div>

                <div ref={skillRef}>
                    <div className="big">Skill Set</div>
                    <div className="info">언어</div>
                    <hr />
                    <ul className="subinfo">
                        <li>Python (4/5)</li>
                        <li>JAVA (4/5)</li>
                        <li>JavaScript (3/5)</li>
                        <li>TypeScript (3/5)</li>
                        <li>HTML (3/5)</li>
                        <li>CSS (2/5)</li>
                    </ul>
                    <div className="info">프레임워크</div>
                    <hr />
                    <ul className="subinfo">
                        <li>Spring Boot (3/5)</li>
                        <li>React (3/5)</li>
                        <li>Flutter (3/5)</li>
                        <li>Unity (3/5)</li>
                    </ul>
                </div>

                <div ref={projectRef}>
                    <div className="big">Project</div>
                    <div className="info">프로젝트</div>
                    <hr />
                    <ol className="subinfo">
                        <li>
                            <div>프로젝트명 : 코딩대회 사이트</div>
                            <div>개발기간 : 2024년 08월 27일 ~ 2024년 09월 14일</div>
                            <div>개발인원 : 1명</div>
                            <div>사용기술 : Spring Boot, React</div>
                            <div>설명 : Spring Boot를 이용한 백엔드 개봘과 React를 이용한 프론트엔드 개발</div>
                            <div>소스코드(백엔드) : <a href="https://github.com/MinChanJu/my_gradle_spring_app" target="_blank" rel="noopener noreferrer">https://github.com/MinChanJu/my_gradle_spring_app</a></div>
                            <div>소스코드(프론트엔드) : <a href="https://github.com/MinChanJu/react" target="_blank" rel="noopener noreferrer">https://github.com/MinChanJu/react</a></div>
                            <div><img src={coding_contest} alt="coding_contest" /></div>
                        </li>
                        <br />
                        <li>
                            <div>프로젝트명 : 소학회 앱</div>
                            <div>개발기간 : 2024년 07월 29일 ~ 2024년 08월 01일</div>
                            <div>개발인원 : 1명</div>
                            <div>사용기술 : Flutter, Dart</div>
                            <div>설명 : Flutter를 이용해 소학회 앱 개발</div>
                            <div>소스코드 : <a href="https://github.com/MinChanJu/MIC-app" target="_blank" rel="noopener noreferrer">https://github.com/MinChanJu/MIC-app</a></div>
                            <div style={{display:"flex", justifyContent:"center", gap:"15px"}}>
                                <img style={{width: "30%"}} src={mic_app1} alt="mic_app1" />
                                <img style={{width: "30%"}} src={mic_app2} alt="mic_app2" />
                                <img style={{width: "30%"}} src={mic_app3} alt="mic_app3" />
                            </div>
                        </li>
                        <br />
                        <li>
                            <div>프로젝트명 : 채팅 앱</div>
                            <div>개발기간 : 2024년 07월 04일 ~ 2024년 07월 12일</div>
                            <div>개발인원 : 1명</div>
                            <div>사용기술 : Flutter, Dart</div>
                            <div>설명 : Flutter를 이용해 채팅 앱 개발</div>
                            <div>소스코드 : <a href="https://github.com/MinChanJu/chat-app" target="_blank" rel="noopener noreferrer">https://github.com/MinChanJu/chat-app</a></div>
                            <div style={{display:"flex", justifyContent:"center", gap:"15px"}}>
                                <img style={{width: "30%"}} src={chat1} alt="chat1" />
                                <img style={{width: "30%"}} src={chat2} alt="chat2" />
                                <img style={{width: "30%"}} src={chat3} alt="chat3" />
                            </div>
                        </li>
                        <br />
                        <li>
                            <div>프로젝트명 : 쓰레기 처리 게임</div>
                            <div>개발기간 : 2024년 12월 02일 ~ 2024년 12월 05일</div>
                            <div>개발인원 : 1명</div>
                            <div>사용기술 : Unity, C#</div>
                            <div>설명 : Unity를 이용해 첫 게임 개발</div>
                            <div>소스코드 : <a href="https://github.com/MinChanJu/Trash-Flight-Unity" target="_blank" rel="noopener noreferrer">https://github.com/MinChanJu/Trash-Flight-Unity</a></div>
                            <div style={{display:"flex", justifyContent:"center", gap:"15px"}}>
                                <img style={{width: "30%"}} src={trash1} alt="trash1" />
                                <img style={{width: "30%"}} src={trash2} alt="trash2" />
                                <img style={{width: "30%"}} src={trash3} alt="trash3" />
                            </div>
                        </li>
                        <br />
                        <li>
                            <div>프로젝트명 : 포트폴리오</div>
                            <div>개발기간 : 2024년 12월 26일 ~ 2024년 12월 30일</div>
                            <div>개발인원 : 1명</div>
                            <div>사용기술 : React, TypeScript</div>
                            <div>설명 : React를 이용하여 포트폴리오 완성</div>
                            <div>소스코드 : <a href="https://github.com/MinChanJu/portfolio" target="_blank" rel="noopener noreferrer">https://github.com/MinChanJu/portfolio</a></div>
                            <div><img src={portfolio} alt="portfolio" /></div>
                        </li>
                    </ol>
                </div>

                <div ref={awardRef}>
                    <div className="big">Prizes and Certificates</div>
                    <div className="info">입상</div>
                    <hr />
                    <ol className="subinfo">
                        <li>
                            <div>대회명 : 제 3회 산업수학 프로그래밍 경진대회</div>
                            <div>주관 : 이주대학교 산업수학 통계센터</div>
                            <div>수상일 : 2023년 12월 11일</div>
                            <div>수상명 : 2등</div>
                        </li>
                        <br />
                        <li>
                            <div>대회명 : 2024 아주대학교 프로그래밍 경진대회 (APC) Div2</div>
                            <div>주관 : 이주대학교 SW중심대학사업단</div>
                            <div>수상일 : 2024년 06월 07일</div>
                            <div>수상명 : 대상(1등)</div>
                        </li>
                    </ol>
                    <div className="info">자격</div>
                    <hr />
                    <ol className="subinfo">
                        <li>
                            <div>자격증명 : PCCE Python3</div>
                            <div>발급처 : (주)그렙</div>
                            <div>취득일 : 2024년 08월 18일</div>
                            <div>점수 : 1000/Lv.4</div>
                        </li>
                        <br />
                        <li>
                            <div>자격증명 : PCCP Python3</div>
                            <div>발급처 : (주)그렙</div>
                            <div>취득일 : 2024년 09월 22일</div>
                            <div>점수 : 689/Lv.3</div>
                        </li>
                    </ol>
                </div>
            </div>

            <div className="tabs">
                <button onClick={() => scrollToSection(introRef)}>자기소개</button>
                <button onClick={() => scrollToSection(skillRef)}>기술스택</button>
                <button onClick={() => scrollToSection(projectRef)}>프로젝트</button>
                <button onClick={() => scrollToSection(awardRef)}>입상 및 자격</button>
            </div>
        </div>
    )
}

export default Portfolio