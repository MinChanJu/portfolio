# 포트폴리오 웹사이트 🌟

React와 TypeScript로 개발된 개인 포트폴리오 웹사이트입니다. 저의 기술 스택, 프로젝트, 수상 내역, 경력 등을 보여주는 반응형 웹 애플리케이션입니다.

## 🚀 배포된 사이트

**[🔗 포트폴리오 사이트 바로가기](https://minchanju.github.io/portfolio)**

## 📋 목차

- [기술 스택](#-기술-스택)
- [주요 기능](#-주요-기능)
- [프로젝트 구조](#-프로젝트-구조)
- [설치 및 실행](#-설치-및-실행)
- [빌드 및 배포](#-빌드-및-배포)
- [데이터 관리](#-데이터-관리)

## 🛠 기술 스택

- **Frontend**: React 18.3.1, TypeScript
- **빌드 도구**: Vite 6.0.5
- **라우팅**: React Router DOM 7.3.0
- **슬라이더**: Swiper 11.2.5
- **스타일링**: CSS Modules
- **개발 도구**: ESLint, TypeScript ESLint
- **배포**: GitHub Pages (gh-pages)

## ✨ 주요 기능

### 📱 반응형 디자인

- 모바일, 태블릿, 데스크톱에 최적화된 반응형 레이아웃
- 사이드바 네비게이션으로 쉬운 페이지 이동

### 🎨 사용자 인터페이스

- 깔끔하고 현대적인 디자인
- 부드러운 애니메이션과 트랜지션
- 직관적인 네비게이션 시스템

### 📄 페이지 구성

- **홈**: 전체적인 소개 및 요약
- **자기소개**: 개인 정보 및 소개
- **기술 스택**: 프로그래밍 언어, 라이브러리, 도구들
- **프로젝트**: 개발한 프로젝트들의 상세 정보
- **수상**: 대회 수상 내역 및 자격증
- **경력**: 학력 및 경력 사항
- **링크**: 소셜 미디어 및 외부 링크

### 🖼 이미지 슬라이더

- Swiper를 활용한 프로젝트 이미지 갤러리
- 터치 및 마우스 드래그 지원

## 📁 프로젝트 구조

```
src/
├── assets/                 # 정적 자원
│   ├── css/                # CSS 모듈 파일들
│   ├── image/              # 프로젝트 이미지들
│   └── data.json           # 포트폴리오 데이터
├── components/             # 재사용 가능한 컴포넌트들
│   ├── AppRoutes.tsx       # 라우팅 설정
│   ├── SideBar.tsx         # 사이드바 네비게이션
│   ├── ImageSlider.tsx     # 이미지 슬라이더
│   └── ...
├── pages/                  # 페이지 컴포넌트들
│   ├── HomeView.tsx        # 홈 페이지
│   ├── ProjectView.tsx     # 프로젝트 페이지
│   ├── SkillView.tsx       # 기술 스택 페이지
│   └── ...
├── types/                  # TypeScript 타입 정의
│   ├── Portfolio.ts        # 메인 포트폴리오 타입
│   ├── Project.ts          # 프로젝트 타입
│   └── ...
├── constants/              # 상수 정의
│   ├── routes.ts           # 라우트 경로
│   └── URLManage.ts        # URL 관리
├── hooks/                  # 커스텀 훅
│   └── useNavigation.ts    # 네비게이션 훅
├── styles/                 # 글로벌 스타일
│   ├── Global.css          # 전역 스타일
│   ├── Color.css           # 색상 정의
│   └── ...
└── utils/                  # 유틸리티 함수들
    ├── Image.ts            # 이미지 유틸리티
    └── Path.ts             # 경로 유틸리티
```

## 🚀 설치 및 실행

### 필요 조건

- Node.js (권장 버전: 22.x 이상)
- pnpm (권장 버전: 10.x 이상)

### 설치

```bash
git clone https://github.com/MinChanJu/portfolio.git
cd portfolio
pnpm install
```

### 개발 서버 실행

```bash
pnpm run dev
```

개발 서버가 `http://localhost:5173`에서 실행됩니다.

### 린팅

```bash
pnpm run lint
```

### 미리보기

```bash
pnpm run preview
```

## 📦 빌드 및 배포

### 프로덕션 빌드

```bash
pnpm run build
```

### GitHub Pages 배포

```bash
pnpm run deploy
```

이 명령어는 자동으로 빌드를 실행하고 GitHub Pages에 배포합니다.

## 📊 데이터 관리

모든 포트폴리오 데이터는 `src/assets/data.json` 파일에서 관리됩니다.

### 데이터 구조

```typescript
interface Portfolio {
  languages: Skill[]; // 프로그래밍 언어
  libraries: Skill[]; // 라이브러리/프레임워크
  tools: Skill[]; // 개발 도구
  projects: Project[]; // 프로젝트 목록
  prizes: Prize[]; // 수상 내역
  certificates: Certificate[]; // 자격증
  careers: Career[]; // 경력 사항
}
```

### 데이터 수정 방법

1. `src/assets/data.json` 파일을 편집
2. `src/types/` 폴더의 타입 정의에 맞춰 데이터 구조 유지
3. 이미지 파일은 `src/assets/image/` 폴더에 추가
4. 빌드 및 배포

## 🎯 주요 특징

- **타입 안전성**: TypeScript를 사용하여 컴파일 타임 오류 방지
- **모듈화**: CSS Modules를 통한 스타일 캡슐화
- **성능 최적화**: Vite를 통한 빠른 개발 환경 및 최적화된 빌드
- **반응형**: 모든 디바이스에서 최적의 사용자 경험 제공
- **유지보수성**: 컴포넌트 기반 아키텍처로 높은 재사용성
