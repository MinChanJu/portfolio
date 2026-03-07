const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-GSkcVsrW.js","assets/vendor-BItL4kOI.js","assets/vendor-CDab0zVI.css","assets/image-DznyYTLO.js","assets/swiper-Cq9G6lv5.js","assets/swiper-BH4JZYC6.css","assets/react-vendor-D6vjmnaZ.js","assets/index-DmDVIl1I.js","assets/index-DSPBm41I.js","assets/index-B4bZAVdt.js","assets/index-BSYCSgbY.js"])))=>i.map(i=>d[i]);
import{j as e,b as u}from"./vendor-BItL4kOI.js";import{c as P}from"./react-vendor-D6vjmnaZ.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();const T="modulepreload",k=function(t){return"/portfolio/"+t},v={},g=function(s,a,i){let r=Promise.resolve();if(a&&a.length>0){let x=function(d){return Promise.all(d.map(p=>Promise.resolve(p).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),c=n?.nonce||n?.getAttribute("nonce");r=x(a.map(d=>{if(d=k(d),d in v)return;v[d]=!0;const p=d.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${m}`))return;const h=document.createElement("link");if(h.rel=p?"stylesheet":T,p||(h.as="script"),h.crossOrigin="",h.href=d,c&&h.setAttribute("nonce",c),document.head.appendChild(h),p)return new Promise((N,y)=>{h.addEventListener("load",N),h.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(n){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=n,window.dispatchEvent(c),!c.defaultPrevented)throw n}return r.then(n=>{for(const c of n||[])c.status==="rejected"&&o(c.reason);return s().catch(o)})},C="data:image/webp;base64,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",E={BAEKJOON_PYTHON:"https://www.acmicpc.net/user/chany0207",BAEKJOON_JAVA:"https://www.acmicpc.net/user/mcj0207",BAEKJOON_CLANG:"https://www.acmicpc.net/user/chany8592",BAEKJOON_CPP:"https://www.acmicpc.net/user/mcj8592",BAEKJOON_PYTHON_TIER:"https://mazassumnida.wtf/api/v2/generate_badge?boj=chany0207",BAEKJOON_JAVA_TIER:"https://mazassumnida.wtf/api/v2/generate_badge?boj=mcj0207",BAEKJOON_CLANG_TIER:"https://mazassumnida.wtf/api/v2/generate_badge?boj=chany8592",BAEKJOON_CPP_TIER:"https://mazassumnida.wtf/api/v2/generate_badge?boj=mcj8592",GITHUB:"https://github.com/MinChanJu",GITHUB_STREAK:"https://ghchart.rshah.org/MinChanJu",GITHUB_STATS:"https://github-profile-summary-cards.vercel.app/api/cards/stats?username=MinChanJu&theme=buefy",GITHUB_TOP_LANGS:"https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=MinChanJu&theme=buefy",GITHUB_SUMMARY:"https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=MinChanJu&theme=buefy"},l={INTRODUCTION:"introduction",SKILL:"skill",PROJECT:"project",AWARD:"award",CAREER:"career",LINK:"link"},O=({href:t})=>e.jsx("a",{className:"break-all text-blue-600 hover:text-blue-800",href:t,target:"_blank",rel:"noopener noreferrer",children:t}),R=({label:t,children:s})=>e.jsxs("div",{className:"flex items-baseline gap-3",children:[e.jsx("span",{className:"w-20 shrink-0 text-xs font-semibold tracking-widest text-slate-600 uppercase",children:t}),e.jsx("span",{className:"text-sm text-slate-700",children:s})]}),L=({title:t,titlePosition:s="left"})=>e.jsxs("div",{className:"flex items-center gap-3",children:[(s==="center"||s==="right")&&e.jsx("div",{className:"h-px flex-1 bg-slate-200"}),e.jsx("h2",{className:"text-xl font-bold text-slate-700",children:t}),(s==="center"||s==="left")&&e.jsx("div",{className:"h-px flex-1 bg-slate-200"})]}),f=({title:t,titlePosition:s="left",children:a,className:i})=>e.jsxs("div",{className:`rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm md:px-6 md:py-5 ${i}`,children:[t&&e.jsxs(e.Fragment,{children:[e.jsx(L,{title:t,titlePosition:s}),e.jsx("div",{className:"h-3"})]}),a]}),M=({caption:t,title:s,children:a})=>e.jsxs("div",{className:"flex flex-col gap-3 md:gap-5 print:break-before-page",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold tracking-widest text-purple-600 uppercase",children:t}),e.jsx("h1",{className:"mt-1 text-2xl font-bold text-slate-800 md:text-4xl",children:s})]}),a]}),I=["저는 대학 입학 후 처음 프로그래밍을 접했고, 코드가 정상적으로 실행될 때의 성취감에 매료되었습니다. 이후 소프트웨어학과를 복수전공하며 알고리즘 문제 해결에 흥미를 느껴 꾸준히 학습한 끝에 solved.ac P5(상위 약 4%) 티어를 달성하였습니다. 또한, 2023 아주대학교 산업수학 프로그래밍 경진대회 2등, 2024 아주대학교 프로그래밍 경진대회(APC) Div.2 대상(1등)을 수상하며 실력을 인정받았습니다.","2024년에는 수학과 소학회 MiC의 회장을 맡아 프로그래밍 멘토링과 코딩 대회를 기획·운영하며 교육 방식과 리더십을 배웠습니다. 특히, 더 나은 학습 환경을 제공하기 위해 직접 코딩 대회 사이트를 개발하며 백엔드(Spring Boot), 프론트엔드(React), 데이터베이스(Supabase)를 활용하며 실무적인 개발 경험을 쌓을 수 있었습니다. 그렇게 저는 개발자의 꿈을 향해 한 걸음 다가갔다고 생각합니다.","다양한 기술에 대한 호기심으로 프론트엔드(React, TypeScript), 백엔드(Spring Boot, Django), 모바일 앱(Flutter), 게임 개발(Unity) 등 폭넓은 경험을 쌓았습니다. 방학마다 독학으로 앱과 웹사이트를 개발하며 문제 해결 능력을 키웠고, 끈기와 논리적 사고력을 기를 수 있었습니다.","저는 새로운 것을 배우는 과정에서 끈기 있게 문제를 해결하는 것이 저만의 강점이라고 생각합니다. 앞으로도 새로운 도전에 적극적으로 나서며, 팀원들과 협력하여 최적의 솔루션을 찾아가는 개발자가 되고 싶습니다."],D=[{label:"이름",value:"주민찬"},{label:"생년월일",value:"2002.02.07"},{label:"전화번호",value:"010-8592-7570"},{label:"이메일",value:"mcj00220077@gmail.com"},{label:"주소",value:"경기도 수원시 영통구"}],J=[{label:"학교",value:"아주대학교"},{label:"입학",value:"2020.03"},{label:"졸업(예정)",value:"2026.08"},{label:"1전공",value:"수학과"},{label:"복수전공",value:"소프트웨어학과"},{label:"학기",value:"4-2 (이수, 2026.02 기준)"}],j=({rows:t})=>e.jsx("div",{className:"flex flex-col gap-3 divide-y divide-slate-100",children:t.map(({label:s,value:a})=>e.jsx(R,{label:s,children:a},s))}),B=()=>e.jsxs(M,{caption:"About Me",title:e.jsxs("div",{className:"mt-5 flex items-center justify-start gap-5",children:[e.jsx("img",{className:"w-40 rounded-2xl border",src:C,alt:"프로필 사진",loading:"eager",fetchPriority:"high"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("div",{children:"안녕하세요,"}),e.jsx("div",{children:"주니어 개발자 주민찬입니다."})]})]}),children:[e.jsx(f,{title:"👋 인사말",children:e.jsx("div",{className:"flex flex-col gap-4",children:I.map((t,s)=>e.jsx("p",{className:"text-sm leading-relaxed whitespace-pre-wrap text-slate-600",children:" "+t},s))})}),e.jsxs("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-5",children:[e.jsx(f,{title:"📋 Info",children:e.jsx(j,{rows:[...D,{label:"GitHub",value:e.jsx(O,{href:E.GITHUB})}]})}),e.jsx(f,{title:"🎓 학력",children:e.jsx(j,{rows:J})})]})]}),b=[{title:"Moyo - 2D 가상 공간 기반 협업 플랫폼",period:"2025.12 ~ 2026.02 (2개월, 네이버 부스트캠프 10기에서 진행)",team:"4명",role:"Full Stack - 50%",skills:"React, TypeScript, NestJS, MySQL, TypeORM",site:{url:"https://www.moyo.asia",favicon:"https://www.moyo.asia/favicon.svg"},links:[{label:"소스코드",url:"https://github.com/boostcampwm2025/web13-isj-dle"}],description:`## 🏠 프로젝트 개요

[네이버 부스트캠프 10기](https://boostcamp.connect.or.kr/) 기간 중 **ISJ-DLE 팀**(4인)이 개발한 **2D 가상 공간 기반 협업 플랫폼**입니다.
부스트캠프 캠퍼들이 원격 환경에서도 같은 공간에 있는 듯한 몰입감을 느끼며 학습하고 소통할 수 있도록 설계되었습니다.

---

## 🛠 기술 스택

| 분류 | 기술 |
|------|------|
| Frontend | React 19, TypeScript, Phaser (2D 게임 엔진), Socket.io Client |
| Backend | NestJS, TypeORM, MySQL |
| 협업 도구 | LiveKit (화상회의), Yjs + Monaco Editor (실시간 코드편집), TLDraw (화이트보드) |
| 인프라 | Docker, Naver Cloud, AWS S3 |
| 인증 | GitHub OAuth |
| 아키텍처 | pnpm monorepo, Feature-Sliced Design (FSD) |
| 코드 품질 | ESLint, Prettier, Husky, lint-staged |

---

## 📱 주요 기능

### 🗺 2D 가상 공간
- **아바타 이동**: 방향키 또는 마우스 클릭으로 자유로운 이동
- **자동이동**: EasyStar.js 길찾기 알고리즘을 활용한 장애물 회피 이동
- **미니맵**: M 키로 전체 맵 확대 조회

### 🔔 상태 & 바운더리 시스템
- **노크 시스템**: 🟢 Available / 🔴 Focusing / 🟠 Talking 3단계 상태 관리
- **바운더리 시스템**: Convex Hull 알고리즘을 이용한 그룹 영역 시각화

### 💬 소통 & 협업
- **실시간 채팅**: Socket.io 기반 공간 내 채팅
- **화상회의**: LiveKit을 활용한 실시간 영상·음성 통화
- **공동 코드 편집**: Yjs + Monaco Editor CRDT 기반 실시간 코드 공유
- **화이트보드**: TLDraw 기반 공유 드로잉 보드

### 🏢 공간별 기능
- **세미나실 / 소회의실 (Breakout Room)**: 랜덤 또는 자유 배정 소규모 미팅
- **식당 공간**: 이미지 업로드(AWS S3) 및 좋아요 기능
- **인터랙티브 튜토리얼**: Shepherd.js를 활용한 온보딩 가이드

---

## 🏗 프론트엔드 아키텍처 & 협업 환경

### Feature-Sliced Design (FSD)
- 프론트엔드 전체를 **FSD 레이어**(app / pages / widgets / features / entities / shared)로 구성
- 레이어 간 단방향 의존성을 유지하여 코드 가독성 및 확장성 확보

### 팀 컨벤션 & 코드 품질 자동화
- **Husky** + **lint-staged**를 활용해 커밋 전 자동으로 lint·format 검사 실행
- **ESLint**: 코드 스타일 및 잠재적 오류 사전 차단
- **Prettier**: 팀 전체 일관된 코드 포매팅
- **커밋 메시지 컨벤션**: 팀원 간 합의한 prefix 규칙 (feat / fix / refactor 등) 적용

---

## 👨‍💻 담당 역할 (Full Stack 50%)
- 2D 맵 렌더링 및 아바타 이동 시스템 구현 (Phaser)
- GitHub OAuth 인증 및 사용자 세션 관리
- 공간 자동 이동 기능 구현 (EasyStar.js)
- 코드 에디터 기능 구현 (Yjs + Monaco Editor)
- NestJS 백엔드 API 개발 및 Socket.io 이벤트 설계
- FSD 아키텍처 설계 및 Husky·lint-staged 기반 협업 환경 구축
- 리팩토링 및 릴리즈 주도`,name:"moyo"},{title:"강의실 예약 사이트",period:"2025.05 ~ 2025.05 (1일, 아주대학교 해커톤에서 진행)",team:"4명 (FrontEnd)",role:"FrontEnd - 60%",skills:"React, TypeScript",links:[{label:"소스코드",url:"https://github.com/MinChanJu/classroom-reservation"}],description:`## 🏫 프로젝트 개요

**2025 아주대학교 제2회 아주톤(해커톤)** 참가작으로, 약 20시간의 개발 기간 동안 제작한 강의실 예약 시스템입니다.
시간 제약으로 인해 팀원들과 협의 후 프론트엔드 중심의 웹DB 방식으로 구현하였으며, 최종 **장려상(3등)** 을 수상하였습니다.

---

## 🛠 기술 스택

| 분류 | 기술 |
|------|------|
| Frontend | React 19, TypeScript, Vite |
| 3D 렌더링 | Three.js, React Three Fiber |
| 인증 | WebAuthn API (PassKey) |
| 스타일링 | Bootstrap 5, Emotion |
| 기타 | QRCode.js, jQuery DateTimePicker, js-sha256 |

---

## 📱 주요 기능

### 🏗 3D 건물 뷰어
- Three.js + React Three Fiber 기반의 3D 건물 모델 렌더링
- **성호관**(1~6층) 층별 강의실 배치도 제공
- 강의실 상태: 🟢 사용 가능 / 🔴 사용 중 / 🟡 점검 중

### 🔐 PassKey 인증
- **WebAuthn API** 기반 비밀번호 없는 생체인증 (지문 / 얼굴 인식)
- 기존 아이디·비밀번호 방식 대비 보안성 및 편의성 향상

### 📱 다중 디바이스 지원
- \`useDeviceType\` 커스텀 훅으로 디바이스 자동 감지
- **사이니지**(강의실 앞 대형 안내 스크린), **태블릿**, **모바일** 각각 전용 UI 제공
  - *사이니지란?* → 학교·회사 등 공공장소에서 운영되는 대형 디지털 안내판으로, 강의실 앞 예약 현황 안내 스크린을 목표로 설계하였습니다.

### 🔄 기타
- QR 코드 생성으로 강의실 정보 공유
- 30초 자동 새로고침으로 실시간 상태 모니터링

---

## 👨‍💻 담당 역할 (FrontEnd 60%)
- 프론트엔드 전체 아키텍처 및 UI/UX 설계 주도
- Three.js 기반 3D 건물 뷰어 및 층별 강의실 배치 로직 개발
- 디바이스별 화면 최적화`,name:"ajou_ton"},{title:"코딩대회 사이트",period:"2024.11 ~ 2025.01 (약 3개월)",team:"1명 (총괄)",role:"Full Stack - 100%",skills:"Spring Boot, Java, React, TypeScript, SupaBase, PostgreSQL",site:{url:"https://minchanju.github.io/MiC",favicon:"https://minchanju.github.io/MiC/logo.jpeg"},links:[{label:"백엔드",url:"https://github.com/MinChanJu/mic-spring"},{label:"프론트엔드",url:"https://github.com/MinChanJu/MiC"}],description:`## 💻 프로젝트 개요

아주대학교 수학과 소학회 **MiC(Mathematics in Coding)** 의 온라인 프로그래밍 대회 플랫폼입니다.
승인된 출제자가 대회를 생성하고 문제를 출제하며, 참가자들은 시간에 맞춰 코드를 제출하고 채점 결과를 확인할 수 있습니다.

---

## 🛠 기술 스택

| 분류 | 기술 |
|------|------|
| Frontend | React 18, TypeScript, Vite, Axios, MathJax (수식 렌더링) |
| Backend | Spring Boot 3.4.2, Java 21, Spring Security + JWT |
| Database | PostgreSQL, JPA/Hibernate |
| 기타 | JavaMailSender, Spring Actuator, CORS 설정 |

---

## 📱 주요 기능

### ⚖ 코드 채점 시스템
- 지원 언어: **C** (\`gcc\`), **Python3** (\`python3\`), **Java** (in-memory 컴파일)
- 실행 시간 제한: **5초**
- 비동기 채점 처리: \`requestId\` 반환 → \`/result/{requestId}\` 폴링 방식
- 보이는 예제 + 숨겨진 다중 테스트케이스 혼합 채점, 점수는 소수점 1자리까지 표시

### 👥 대회 관리
- 대회 생성 / 수정 / 삭제 및 기간 설정
- 대회 종료 후 자동으로 \`open\` 상태 전환 → 모든 사용자 접근 가능
- 실시간 스코어보드 확인

### 🔐 인증 및 보안
- JWT 토큰 기반 인증 (관리자 페이지 접근 권한 제어)
- CORS 설정으로 허용된 도메인 요청만 처리
- \`.env\` 파일을 통한 API 키 및 환경변수 관리

### 📊 기타
- Spring Actuator 모니터링 (\`/actuator/health\`, \`/actuator/metrics\`)
- JavaMailSender 기반 메일 서비스 (문의 / 신고)
- MathJax를 통한 LaTeX 수학 수식 렌더링 (문제 출제 시)

---

## 👨‍💻 담당 역할 (1인 풀스택)
- Spring Boot 백엔드 전체 설계 및 구현
- React 프론트엔드 전체 구현 (대회 목록, 문제 페이지, 스코어보드 등)
- PostgreSQL 스키마 설계 및 JPA 연동
- 코드 실행 및 비동기 채점 파이프라인 구축`,name:"coding_contest"},{title:"포트폴리오",period:"2024.12 ~ 2025.01 (약 1주일, 주기적으로 업데이트)",team:"1명 (총괄)",role:"FrontEnd - 100%",skills:"React, TypeScript",site:{url:"https://minchanju.github.io/portfolio",favicon:"https://minchanju.github.io/portfolio/favicon.svg"},links:[{label:"소스코드",url:"https://github.com/MinChanJu/portfolio"}],description:`## 🗂 프로젝트 개요

개인 포트폴리오 웹 애플리케이션으로, 설계부터 배포까지 직접 진행하였으며 아키텍처 개선을 지속적으로 반영하고 있습니다.

---

## 🛠 기술 스택

| 분류 | 기술 |
|------|------|
| Frontend | React 19, TypeScript, Vite |
| 스타일링 | Tailwind CSS v4 |
| 라우팅 | React Router DOM v7 (\`createBrowserRouter\`) |
| 아키텍처 | Feature-Sliced Design (FSD) |
| 배포 | GitHub Pages, GitHub Actions (pnpm + Node 22) |

---

## 📐 아키텍처

**Feature-Sliced Design(FSD)** 방법론을 도입하여 레이어 간 의존성을 명확히 구분하였습니다.

- **app** — RouterProvider, 전역 스타일
- **pages** — 각 페이지 컴포넌트
- **widgets** — Layout, SideBar, PageTitle
- **features** — useNavigation 커스텀 훅
- **entities** — 도메인 타입 및 상수 (Project, Career 등)
- **shared** — 공통 UI, 유틸, 자산, 설정

---

## 📱 주요 기능
- **동적 라우팅**: \`createBrowserRouter\` 기반 중첩 라우트 및 Layout 컴포넌트
- **이미지 자동 수집**: \`import.meta.glob\`을 활용하여 폴더 내 이미지 일괄 로드
- **반응형 사이드바**: 열림/닫힘 상태 관리 및 페이지 전환 시 스크롤 위치 초기화
- **지속적 업데이트**: 새 프로젝트·경력 추가 시 업데이트`,name:"portfolio"},{title:"데이팅 앱",period:"2025.01 ~ 2025.02 (잠시 중단)",team:"2명 (팀장)",role:"Full Stack - 70%",skills:"Spring Boot, Java, Flutter, Dart, SupaBase, PostgreSQL",links:[{label:"소스코드",url:"https://github.com/MinChanJu/BuckTanley"}],description:`## 💘 프로젝트 개요

한국인을 위한 랜덤 매칭 기반 채팅 앱입니다.
사용자들끼리 랜덤으로 매칭하여 채팅하거나, 친구를 맺어 영구적으로 소통할 수 있는 플랫폼입니다.

---

## 🛠 기술 스택

| 분류 | 기술 |
|------|------|
| Mobile App | Flutter, Dart |
| Backend | Spring Boot, Java |
| Database | Supabase, PostgreSQL |
| 실시간 통신 | WebSocket |
| 푸시 알림 | FCM (Firebase Cloud Messaging) |

---

## 📱 주요 기능

### 💬 채팅 시스템
- **랜덤 매칭 채팅**: 무작위로 상대방과 연결되어 채팅 진행
- **친구 채팅**: 친구 추가 후 영구적으로 채팅 가능
- **WebSocket 실시간 통신**: 서버를 통해 수신 후 각 사용자 세션에 메시지 전달

### 🔔 푸시 알림
- 상대방이 앱을 켜놓지 않은 상태 (WebSocket 세션 없음) 일 때 **FCM**을 활용한 앱 알림 전송

### 🔐 보안
- \`.env\` 파일을 통한 API 키 관리
- 서버 배포 시 CORS 설정 적용 예정

---

## 👨‍💻 담당 역할 (팀장, 70%)
- Spring Boot 백엔드 설계 및 WebSocket 서버 구현
- Flutter 모바일 앱 UI 및 채팅 기능 개발
- Supabase(PostgreSQL) 데이터베이스 스키마 설계

> ⚠️ 현재 개발 중인 프로젝트입니다.`,name:"dating_app"}],G=u.lazy(()=>g(()=>import("./index-GSkcVsrW.js"),__vite__mapDeps([0,1,2,3,4,5,6])).then(t=>({default:t.Award}))),F=u.lazy(()=>g(()=>import("./index-DmDVIl1I.js"),__vite__mapDeps([7,1,2,6])).then(t=>({default:t.Career}))),W=u.lazy(()=>g(()=>import("./index-DSPBm41I.js"),__vite__mapDeps([8,1,2,6])).then(t=>({default:t.Link}))),K=u.lazy(()=>g(()=>import("./index-B4bZAVdt.js"),__vite__mapDeps([9,1,2,3,4,5,6])).then(t=>({default:t.Project}))),U=u.lazy(()=>g(()=>import("./index-BSYCSgbY.js"),__vite__mapDeps([10,1,2,6])).then(t=>({default:t.Skill}))),H=()=>e.jsxs("div",{className:"flex w-full flex-col gap-12 md:gap-20",children:[e.jsx("section",{id:l.INTRODUCTION,children:e.jsx(B,{})}),e.jsxs(u.Suspense,{children:[e.jsx("section",{id:l.SKILL,children:e.jsx(U,{})}),b.map((t,s)=>e.jsx("section",{id:`${l.PROJECT}-${s+1}`,children:e.jsx(K,{index:s})},s)),e.jsx("section",{id:l.AWARD,children:e.jsx(G,{})}),e.jsx("section",{id:l.CAREER,children:e.jsx(F,{})}),e.jsx("section",{id:l.LINK,children:e.jsx(W,{})})]})]}),q=()=>e.jsx("footer",{className:"w-full border-t border-gray-200 bg-white/80 py-8 backdrop-blur-sm",children:e.jsxs("div",{className:"flex flex-col items-center gap-1.5",children:[e.jsx("span",{className:"bg-linear-to-r from-violet-500 via-sky-500 to-teal-500 bg-clip-text text-sm font-semibold tracking-wide text-transparent",children:"포트폴리오를 방문해 주셔서 감사합니다!"}),e.jsx("p",{className:"text-[11px] tracking-widest text-gray-400",children:"좋은 하루 되세요 😊"})]})}),z=()=>{const[t,s]=u.useState("");return u.useEffect(()=>{const n=document.querySelectorAll("section[id]"),c=()=>{const x=window.innerHeight/2;let d="";for(const p of n){const m=p.getBoundingClientRect();if(!(m.top>=x||m.bottom<=x)){d=p.id.startsWith(l.PROJECT)?l.PROJECT:Object.values(l).find(h=>h===p.id)||"";break}}s(d)};return window.addEventListener("scroll",c,{passive:!0}),c(),()=>window.removeEventListener("scroll",c)},[]),{goToHome:()=>window.scrollTo({top:0,behavior:"smooth"}),goToSection:(n,c)=>{const x=c!==void 0?`${l.PROJECT}-${c}`:n,d=document.getElementById(x);if(d){const p=56+(window.innerWidth>=768?20:12),m=d.getBoundingClientRect().top+window.scrollY-p;window.scrollTo({top:m,behavior:"smooth"})}},getDesktopNavItemClass:n=>`text-sm font-medium transition-colors duration-200 ${t===n?"text-violet-600":"text-gray-500 hover:text-gray-900"}`,getMobileNavItemClass:n=>`text-left text-sm font-medium ${t===n?"text-violet-600":"text-gray-600"}`}},A=()=>e.jsx("button",{onClick:()=>window.print(),className:"rounded-full border border-slate-200 px-3.5 py-1 text-sm font-medium text-slate-500 transition-colors duration-200 hover:border-slate-300 hover:text-slate-700",children:"PDF"}),w=()=>{const[t,s]=u.useState(!1),a=u.useRef(null);return u.useEffect(()=>{if(!a.current)return;const i=r=>{a.current?.offsetParent&&(a.current.contains(r.target)||s(!1))};return document.addEventListener("mousedown",i),()=>document.removeEventListener("mousedown",i)},[]),{projectOpen:t,setProjectOpen:s,dropdownRef:a}},Y=({className:t,goToSection:s})=>{const{projectOpen:a,setProjectOpen:i,dropdownRef:r}=w();return e.jsxs("div",{className:"relative flex",ref:r,children:[e.jsxs("button",{onClick:()=>i(o=>!o),className:t,children:["프로젝트 ",a?"▲":"▼"]}),a&&e.jsx("div",{className:"absolute top-full right-0 mt-2 w-72 rounded-xl border border-gray-100 bg-white py-2 shadow-xl",children:b.map((o,n)=>e.jsxs("button",{onClick:()=>{s(l.PROJECT,n+1),i(!1)},className:"w-full px-4 py-2.5 text-left text-sm text-gray-600 transition-colors hover:bg-violet-50 hover:text-violet-600",children:[n+1,". ",o.title]},n))})]})},X=[{label:"자기소개",sectionId:l.INTRODUCTION},{label:"기술스택",sectionId:l.SKILL},{label:"프로젝트",sectionId:l.PROJECT},{label:"수상/자격증",sectionId:l.AWARD},{label:"경력",sectionId:l.CAREER},{label:"링크",sectionId:l.LINK}],S=({getNavItemClass:t,goToSection:s,renderProjectDropdown:a,onClose:i})=>e.jsx(e.Fragment,{children:X.map(({label:r,sectionId:o})=>o===l.PROJECT?e.jsx(u.Fragment,{children:a(t(o))},o):e.jsx("button",{onClick:()=>{i?.(),requestAnimationFrame(()=>s(o))},className:t(o),children:r},o))}),Z=({goToSection:t,getDesktopNavItemClass:s})=>e.jsxs("nav",{className:"flex items-center gap-6",children:[e.jsx(S,{getNavItemClass:s,goToSection:t,renderProjectDropdown:a=>e.jsx(Y,{className:a,goToSection:t})}),e.jsx(A,{})]}),Q=({className:t,goToSection:s,onClose:a})=>{const{projectOpen:i,setProjectOpen:r}=w();return e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>r(o=>!o),className:t,children:["프로젝트 ",i?"▲":"▼"]}),i&&e.jsx("div",{className:"ml-3 flex flex-col gap-2",children:b.map((o,n)=>e.jsxs("button",{onClick:()=>{a(),r(!1),requestAnimationFrame(()=>s(l.PROJECT,n+1))},className:"text-left text-xs text-gray-500 hover:text-violet-600",children:[n+1,". ",o.title]},n))})]})},V=({isOpen:t,onClose:s,getMobileNavItemClass:a,goToSection:i})=>t?e.jsx("div",{className:"border-t border-gray-100 bg-white px-6 py-4 md:hidden",children:e.jsxs("nav",{className:"flex flex-col gap-3",children:[e.jsx(S,{getNavItemClass:a,goToSection:i,onClose:s,renderProjectDropdown:r=>e.jsx(Q,{className:r,goToSection:i,onClose:s})}),e.jsx(A,{})]})}):null,_=()=>{const{goToHome:t,goToSection:s,getDesktopNavItemClass:a,getMobileNavItemClass:i}=z(),[r,o]=u.useState(!1);return e.jsxs("header",{className:"sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm",children:[e.jsxs("div",{className:"mx-auto flex h-14 max-w-7xl items-center justify-between px-6",children:[e.jsx("button",{onClick:t,className:"bg-linear-to-r from-violet-500 via-sky-500 to-teal-500 bg-clip-text text-base font-bold tracking-[0.2em] text-transparent",children:"MIN CHAN JU"}),e.jsx("div",{className:"hidden md:block",children:e.jsx(Z,{goToSection:s,getDesktopNavItemClass:a})}),e.jsxs("button",{className:"flex flex-col gap-1.5 md:hidden",onClick:()=>o(n=>!n),children:[e.jsx("span",{className:`block h-0.5 w-6 bg-gray-600 transition-transform duration-200 ${r?"translate-y-2 rotate-45":""}`}),e.jsx("span",{className:`block h-0.5 w-6 bg-gray-600 transition-opacity duration-200 ${r?"opacity-0":""}`}),e.jsx("span",{className:`block h-0.5 w-6 bg-gray-600 transition-transform duration-200 ${r?"-translate-y-2 -rotate-45":""}`})]})]}),e.jsx(V,{isOpen:r,onClose:()=>o(!1),getMobileNavItemClass:i,goToSection:s})]})},$=()=>e.jsxs("div",{className:"flex min-h-screen flex-col bg-gray-50 print:bg-white",children:[e.jsx(_,{}),e.jsx("main",{className:"mx-auto w-full max-w-5xl flex-1 p-3 md:p-5 print:p-0",children:e.jsx(H,{})}),e.jsx(q,{})]});P.createRoot(document.getElementById("root")).render(e.jsx(u.StrictMode,{children:e.jsx($,{})}));export{O as C,R as I,b as P,f as S,E as U,M as a,L as b};
