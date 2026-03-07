<div align="center">

# 주민찬 포트폴리오

**풀스택 개발자를 꿈꾸는 주민찬의 개인 포트폴리오 웹사이트입니다.**

[![사이트 바로가기](https://img.shields.io/badge/🔗_사이트_바로가기-minchanju.github.io/portfolio-4A90D9?style=for-the-badge)](https://minchanju.github.io/portfolio)

<br/>

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-deployed-222222?style=flat-square&logo=github)

<br/>

![Performance](https://img.shields.io/badge/Performance-99-4CAF50?style=flat-square&logo=lighthouse&logoColor=white)
![Accessibility](https://img.shields.io/badge/Accessibility-100-4CAF50?style=flat-square&logo=lighthouse&logoColor=white)
![Best Practices](https://img.shields.io/badge/Best_Practices-100-4CAF50?style=flat-square&logo=lighthouse&logoColor=white)
![SEO](https://img.shields.io/badge/SEO-100-4CAF50?style=flat-square&logo=lighthouse&logoColor=white)

</div>

---

## 목차

1. [소개](#-소개)
2. [기술 스택](#-기술-스택)
3. [주요 기능](#-주요-기능)
4. [프로젝트 구조](#-프로젝트-구조)
5. [시작하기](#-시작하기)
6. [데이터 관리](#-데이터-관리)
7. [성능](#-성능)

---

## 👤 소개

React 19 + TypeScript 기반의 개인 포트폴리오 웹사이트입니다.  
**FSD(Feature-Sliced Design)** 아키텍처를 적용해 관심사를 명확히 분리하였고, GitHub Pages에 배포되어 있습니다.

[![GitHub](https://img.shields.io/badge/GitHub-MinChanJu-181717?style=flat-square&logo=github)](https://github.com/MinChanJu)

---

## 🛠 기술 스택

| 분류      | 사용 기술                                                  |
| --------- | ---------------------------------------------------------- |
| Frontend  | React 19, TypeScript 5.6                                   |
| 빌드      | Vite 7, vite-tsconfig-paths                                |
| 스타일링  | Tailwind CSS v4, @tailwindcss/typography                   |
| 마크다운  | react-markdown, rehype-highlight, remark-gfm, highlight.js |
| 슬라이더  | Swiper 11                                                  |
| 코드 품질 | ESLint 9, Prettier, Husky, lint-staged                     |
| 배포      | GitHub Pages (gh-pages)                                    |

---

## ✨ 주요 기능

| 섹션          | 기능                                               |
| ------------- | -------------------------------------------------- |
| 자기소개      | 인적사항, 학력, 자기소개 문단                      |
| 기술 스택     | 언어 / 라이브러리 / 도구 뱃지 표시                 |
| 프로젝트      | Swiper 이미지 슬라이더 + Markdown 렌더링 상세 설명 |
| 수상 & 자격증 | 카테고리·첨부파일 포함 수상 내역, 자격증 카드      |
| 경력          | 기간별 필터링 (`useCareerFilter`)                  |
| 링크          | GitHub, 블로그 등 외부 링크                        |
| 이력서 인쇄   | 브라우저 인쇄 최적화 (`print:` Tailwind CSS 변형)  |

---

## 📁 프로젝트 구조

**FSD(Feature-Sliced Design)** 레이어 기반으로 구성하였습니다.  
상위 레이어는 하위 레이어만 참조할 수 있어 단방향 의존성을 보장합니다.

```
app → pages → widgets → features → entities → shared
```

```
src/
├── app/                    # 앱 진입점 (App 컴포넌트, 전역 스타일)
├── pages/
│   └── home/               # 단일 페이지 (섹션 조립)
├── widgets/                # 섹션별 독립 UI 블록
│   ├── header/             # 헤더 (내비게이션 링크)
│   ├── footer/             # 푸터
│   ├── introduction/       # 자기소개 섹션
│   ├── skill/              # 기술 스택 섹션
│   ├── project/            # 프로젝트 섹션
│   ├── award/              # 수상 & 자격증 섹션
│   ├── career/             # 경력 섹션
│   └── link/               # 링크 섹션
├── features/               # 사용자 인터랙션 기능
│   ├── filter-career/      # 경력 필터링 (useCareerFilter)
│   ├── image-slider/       # 이미지 슬라이더 (Swiper 래핑)
│   └── print-resume/       # 이력서 인쇄 버튼
├── entities/               # 비즈니스 엔티티 (타입 & 상수)
│   ├── career/
│   ├── certificate/
│   ├── prize/
│   ├── project/
│   └── skill/              # language / library / tool 분리 관리
└── shared/                 # 공유 리소스
    ├── assets/image/       # 섹션별 이미지 디렉터리
    ├── config/             # 섹션 ID, URL 상수
    ├── lib/image/          # 동적 이미지 로딩 유틸
    └── ui/                 # 공통 컴포넌트 (SectionLayout, SectionTitle 등)
```

---

## 🚀 시작하기

**요구사항**: Node.js 22+, pnpm 10+

```bash
# 저장소 클론
git clone https://github.com/MinChanJu/portfolio.git
cd portfolio

# 의존성 설치
pnpm install

# 개발 서버 실행 (http://localhost:5173)
pnpm dev
```

| 명령어         | 설명                     |
| -------------- | ------------------------ |
| `pnpm dev`     | 개발 서버 실행           |
| `pnpm build`   | 프로덕션 빌드            |
| `pnpm preview` | 빌드 결과 미리보기       |
| `pnpm lint`    | ESLint 검사 및 자동 수정 |
| `pnpm format`  | Prettier 포맷팅          |
| `pnpm deploy`  | GitHub Pages 배포        |

---

## 📦 데이터 관리

포트폴리오 데이터는 별도 서버 없이 각 엔티티 상수 파일에서 직접 관리합니다.

| 파일                                                  | 내용                    |
| ----------------------------------------------------- | ----------------------- |
| `entities/project/model/project.constants.ts`         | 프로젝트 목록           |
| `entities/skill/model/language.constants.ts`          | 프로그래밍 언어         |
| `entities/skill/model/library.constants.ts`           | 프레임워크 & 라이브러리 |
| `entities/skill/model/tool.constants.ts`              | 개발 도구               |
| `entities/prize/model/prize.constants.ts`             | 수상 내역               |
| `entities/certificate/model/certificate.constants.ts` | 자격증                  |
| `entities/career/model/career.constants.ts`           | 경력 사항               |
| `widgets/introduction/model/info.constants.ts`        | 인적사항 & 학력         |

> 프로젝트 이미지는 `src/shared/assets/image/{프로젝트명}/` 경로에 추가하면 `getImages` 유틸을 통해 슬라이더에 자동 반영됩니다.

---

## 📊 성능

> Lighthouse 12.8.2 · 데스크톱 · 측정일: 2026-03-08

| 카테고리       | 점수 |
| -------------- | :--: |
| Performance    |  99  |
| Accessibility  | 100  |
| Best Practices | 100  |
| SEO            | 100  |

**Core Web Vitals**

| 지표 | 값    |
| ---- | ----- |
| FCP  | 0.7 s |
| LCP  | 0.7 s |
| TBT  | 0 ms  |
| CLS  | 0     |
