import { Project } from "./project.types";

export const PROJECTS: Project[] = [
  {
    project: "Moyo - 2D 가상 공간 기반 협업 플랫폼",
    period: "2025.12 ~ 2026.02 (2개월, 네이버 부스트캠프 10기에서 진행)",
    team: "4명",
    role: "Full Stack - 50%",
    skills: "React, TypeScript, NestJS, MySQL, TypeORM",
    site: { url: "https://www.moyo.asia", favicon: "https://www.moyo.asia/favicon.svg" },
    links: [
      {
        label: "소스코드",
        url: "https://github.com/boostcampwm2025/web13-isj-dle",
      },
    ],
    description: `## 🏠 프로젝트 개요

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
- 리팩토링 및 릴리즈 주도`,
    name: "moyo",
  },
  {
    project: "강의실 예약 사이트",
    period: "2025.05 ~ 2025.05 (1일, 아주대학교 해커톤에서 진행)",
    team: "4명 (FrontEnd)",
    role: "FrontEnd - 60%",
    skills: "React, TypeScript",
    links: [
      {
        label: "소스코드",
        url: "https://github.com/MinChanJu/classroom-reservation",
      },
    ],
    description: `## 🏫 프로젝트 개요

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
- 디바이스별 화면 최적화`,
    name: "ajou_ton",
  },
  {
    project: "코딩대회 사이트",
    period: "2024.11 ~ 2025.01 (약 3개월)",
    team: "1명 (총괄)",
    role: `Full Stack - 100%`,
    skills: "Spring Boot, Java, React, TypeScript, SupaBase, PostgreSQL",
    site: { url: "https://minchanju.github.io/MiC", favicon: "https://minchanju.github.io/MiC/logo.jpeg" },
    links: [
      {
        label: "백엔드",
        url: "https://github.com/MinChanJu/mic-spring",
      },
      {
        label: "프론트엔드",
        url: "https://github.com/MinChanJu/MiC",
      },
    ],
    description: `## 💻 프로젝트 개요

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
- 코드 실행 및 비동기 채점 파이프라인 구축`,
    name: "coding_contest",
  },
  {
    project: "포트폴리오",
    period: "2024.12 ~ 2025.01 (약 1주일, 주기적으로 업데이트)",
    team: "1명 (총괄)",
    role: "FrontEnd - 100%",
    skills: "React, TypeScript",
    site: {
      url: "https://minchanju.github.io/portfolio",
      favicon: "https://minchanju.github.io/portfolio/favicon.svg",
    },
    links: [
      {
        label: "소스코드",
        url: "https://github.com/MinChanJu/portfolio",
      },
    ],
    description: `## 🗂 프로젝트 개요

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
- **지속적 업데이트**: 새 프로젝트·경력 추가 시 업데이트`,
    name: "portfolio",
  },
  {
    project: "데이팅 앱",
    period: "2025.01 ~ 2025.02 (잠시 중단)",
    team: "2명 (팀장)",
    role: `Full Stack - 70%`,
    skills: "Spring Boot, Java, Flutter, Dart, SupaBase, PostgreSQL",
    links: [
      {
        label: "소스코드",
        url: "https://github.com/MinChanJu/BuckTanley",
      },
    ],
    description: `## 💘 프로젝트 개요

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

> ⚠️ 현재 개발 중인 프로젝트입니다.`,
    name: "dating_app",
  },
];
