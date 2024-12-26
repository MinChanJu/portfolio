import React, { useRef } from "react";
import { IMG, URL } from './URLManage';
import CustomLink from './CustomLink';
import data from '../assets/data.json';
import './CSS/Portfolio.css';

const Portfolio: React.FC = () => {
    const introRef = useRef(null);
    const skillRef = useRef(null);
    const projectRef = useRef(null);
    const projectRefs = data.projects.map(() => useRef(null));
    const awardRef = useRef(null);
    const careerRef = useRef(null);


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

                    <div className="info">Info</div>
                    <hr />
                    <div className="subinfo">
                        <div>이름 : 주민찬</div>
                        <div>생년월일 : 2002.02.07</div>
                        <div>전화번호 : 010-8592-7570</div>
                        <div>이메일 : mcj00220077@gmail.com</div>
                        <div>주소 : 경기도 수원시 영통구 원천동</div>
                        <div>BAEKJOON : <CustomLink href={URL.BAEKJOON} /></div>
                        <div>Solved.Ac : <CustomLink href={URL.SOLVED_AC} /></div>
                        <div>GitHub : <CustomLink href={URL.GITHUB} /></div>
                        <div className="imageContainer">
                            <img style={{ width: "45%" }} src={URL.GITHUB_TOP_LANGS} alt="Top Languages" />
                            <img style={{ width: "45%" }} src={URL.GITHUB_STATS} alt="GitHub Stats" />
                        </div>
                    </div>

                    <div className="info">학력</div>
                    <hr />
                    <div className="subinfo">
                        <div>학교 : 아주대학교</div>
                        <div>입학년도 : 2020.03</div>
                        <div>제 1전공 : 수학과</div>
                        <div>복수전공 : 소프트웨어학과</div>
                        <div>학기 : 3-2(수료) 2025.01 기준</div>
                    </div>
                </div>

                <div ref={skillRef}>
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

                <div>
                    <div ref={projectRef}>
                        <div className="big">Project</div>
                        <div className="info">프로젝트</div>
                        <hr /><br />
                    </div>

                    {data.projects.map((project, index) => (
                        <div key={index} ref={projectRefs[index]} className="subinfo">
                            <br /><br />
                            <h3>{index + 1}. {project.project}</h3>
                            <div>개발기간 : {project.time}</div>
                            <div>개발인원 : {project.people}명 </div>
                            <div>사용기술 : {project.skills}</div>
                            <div>설명 : {project.description}</div>
                            {project.sourcecode.map((href, index) => (
                                <div key={index}>소스코드 : <CustomLink href={href} /></div>
                            ))}
                            {project.site && <div>사이트 : <CustomLink href={project.site} /></div>}
                            <div className="imageContainerWrapper">
                                {project.img.reduce((acc, src, index) => {
                                    let groupIndex = Math.floor(index / (project.img.length > 3 ? 2 : 3));
                                    if (!acc[groupIndex]) {
                                        acc[groupIndex] = [];
                                    }
                                    acc[groupIndex].push(src);
                                    return acc;
                                }, [] as string[][]).map((group, groupIndex) => (
                                    <div key={groupIndex} className="imageContainer">
                                        {group.map((src, index) => (
                                            <img
                                                key={index}
                                                style={{
                                                    width: `${100 / group.length - ((group.length - 1) * 2)}%`,
                                                }}
                                                src={IMG[src]}
                                                alt={`project_image_${groupIndex + 1}_${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                ))}
                            </div>
                            <br /><br />
                        </div>
                    ))}
                </div>


                <div ref={awardRef}>
                    <div className="big">Prizes and Certificates</div>

                    <div className="info">수상</div>
                    <hr />
                    <table>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>대회명</th>
                                <th>수상명</th>
                                <th>주관</th>
                                <th>수상일</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.prizes.map((prize, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{prize.name}</td>
                                    <td>{prize.rank}</td>
                                    <td>{prize.host}</td>
                                    <td>{prize.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="info">자격증</div>
                    <hr />
                    <table>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>자격증명</th>
                                <th>점수/급수</th>
                                <th>발급처</th>
                                <th>취득일</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.certificates.map((certificate, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{certificate.name}</td>
                                    <td>{certificate.score}</td>
                                    <td>{certificate.issuer}</td>
                                    <td>{certificate.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div ref={careerRef}>
                    <div className="big">Careers</div>
                    <div className="info">경력</div>
                    <hr />
                    <table>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>구분</th>
                                <th>내용</th>
                                <th>기간</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.careers.map((career, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{career.class}</td>
                                    <td style={{ textAlign: "start" }}>{career.description}</td>
                                    <td>{career.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="tabs">
                <button onClick={() => scrollToSection(introRef)}>자기소개</button>
                <button onClick={() => scrollToSection(skillRef)}>기술스택</button>
                <button onClick={() => scrollToSection(projectRef)}>프로젝트</button>
                {projectRefs.map((projectRef, index) => (
                    <button key={index} onClick={() => scrollToSection(projectRef)}>{data.projects[index].project}</button>
                ))}
                <button onClick={() => scrollToSection(awardRef)}>수상 및 자격증</button>
                <button onClick={() => scrollToSection(careerRef)}>경력</button>
            </div>
        </div>
    )
}

export default Portfolio