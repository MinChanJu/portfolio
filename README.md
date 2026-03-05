# 포트폴리오

**[🔗 https://minchanju.github.io/portfolio](https://minchanju.github.io/portfolio)**

React 19 + TypeScript 기반의 개인 포트폴리오 웹사이트입니다.  
FSD(Feature-Sliced Design) 아키텍처를 적용하였으며, GitHub Pages에 배포되어 있습니다.

## 기술 스택

| 분류      | 사용 기술                                   |
| --------- | ------------------------------------------- |
| Frontend  | React 19, TypeScript                        |
| 빌드      | Vite                                        |
| 스타일링  | Tailwind CSS v4                             |
| 라우팅    | React Router DOM v7 (`createBrowserRouter`) |
| 슬라이더  | Swiper                                      |
| 코드 품질 | ESLint, Prettier, Husky, lint-staged        |
| 배포      | GitHub Pages (gh-pages)                     |

## 프로젝트 구조

FSD(Feature-Sliced Design) 아키텍처를 기반으로 구성하였습니다.

```
src/
├── app/                    # 앱 진입점
│   ├── router/             # createBrowserRouter 라우트 정의
│   └── styles/             # 전역 스타일
├── pages/                  # 페이지 컴포넌트
│   ├── home/               # 전체보기
│   ├── introduction/       # 자기소개
│   ├── skill/              # 기술 스택
│   ├── project/            # 프로젝트
│   ├── award/              # 수상 및 자격증
│   ├── career/             # 경력
│   └── link/               # 링크
├── widgets/                # 복합 UI 블록
│   ├── layout/             # Outlet 래핑 레이아웃 (헤더/푸터/사이드바)
│   ├── sidebar/            # 사이드바 내비게이션
│   └── page-title/         # 문서 타이틀 관리
├── features/               # 사용자 인터랙션
│   └── navigation/         # useNavigation 훅
├── entities/               # 비즈니스 엔티티 타입
│   ├── career/
│   ├── certificate/
│   ├── portfolio/
│   ├── prize/
│   ├── project/
│   └── skill/
└── shared/                 # 공유 리소스
    ├── assets/             # data.json, 이미지
    ├── config/             # 라우트 상수, URL 상수
    ├── lib/                # 유틸리티 함수
    └── ui/                 # 공통 컴포넌트 (Table, ImageSlider 등)
```

## 시작하기

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

## 데이터 관리

포트폴리오 데이터는 `src/shared/assets/data.json` 하나의 파일에서 관리합니다.

```ts
type Portfolio = {
  languages: Skill[]; // 프로그래밍 언어
  libraries: Skill[]; // 프레임워크 및 라이브러리
  tools: Skill[]; // 개발 도구
  projects: Project[]; // 프로젝트 목록
  prizes: Prize[]; // 수상 내역
  certificates: Certificate[]; // 자격증
  careers: Career[]; // 경력 사항
};
```

프로젝트 이미지는 `src/shared/assets/image/{프로젝트명}/` 경로에 추가하면 자동으로 슬라이더에 반영됩니다.
