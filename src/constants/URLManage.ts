export const IMG: { [key: string]: string[] } = {
  "coding_contest": Object.values(import.meta.glob("../assets/image/coding_contest/*.{png,jpg,jpeg,svg}", { eager: true, import: "default" })),
  "mic_app": Object.values(import.meta.glob("../assets/image/mic_app/*.{png,jpg,jpeg,svg}", { eager: true, import: "default" })),
  "portfolio": Object.values(import.meta.glob("../assets/image/portfolio/*.{png,jpg,jpeg,svg}", { eager: true, import: "default" })),
  "random_chat_app": Object.values(import.meta.glob("../assets/image/random_chat_app/*.{png,jpg,jpeg,svg}", { eager: true, import: "default" })),
  "trash_game": Object.values(import.meta.glob("../assets/image/trash_game/*.{png,jpg,jpeg,svg}", { eager: true, import: "default" })),
}

export const PROJECT: { [key: string]: string[][] } = {
  "coding_contest": [["백엔드", 'https://github.com/MinChanJu/mic-spring'], ["프론트엔드", 'https://github.com/MinChanJu/mic-react'], ["사이트", 'https://minchanju.github.io/mic-react/']],
  "mic_app": [["소스코드", 'https://github.com/MinChanJu/MIC-app']],
  "portfolio": [["소스코드", 'https://github.com/MinChanJu/portfolio'], ["사이트", 'https://minchanju.github.io/portfolio/']],
  "random_chat_app": [["소스코드", 'https://github.com/MinChanJu/BuckTanley']],
  "trash_game": [["소스코드", 'https://github.com/MinChanJu/Trash-Flight-Unity']],
}

export const URL = {
  BAEKJOON_PYTHON: 'https://www.acmicpc.net/user/chany0207',
  BAEKJOON_JAVA: 'https://www.acmicpc.net/user/mcj0207',
  BAEKJOON_CLANG: 'https://www.acmicpc.net/user/chany8592',
  BAEKJOON_CPP: 'https://www.acmicpc.net/user/mcj8592',

  SOLVED_AC_PYTHON: 'https://solved.ac/profile/chany0207',
  SOLVED_AC_JAVA: 'https://solved.ac/profile/mcj0207',
  SOLVED_AC_CLANG: 'https://solved.ac/profile/chany8592',
  SOLVED_AC_CPP: 'https://solved.ac/profile/mcj8592',

  BAEKJOON_PYTHON_TIER: 'https://mazassumnida.wtf/api/v2/generate_badge?boj=chany0207',
  BAEKJOON_JAVA_TIER: 'https://mazassumnida.wtf/api/v2/generate_badge?boj=mcj0207',
  BAEKJOON_CLANG_TIER: 'https://mazassumnida.wtf/api/v2/generate_badge?boj=chany8592',
  BAEKJOON_CPP_TIER: 'https://mazassumnida.wtf/api/v2/generate_badge?boj=mcj8592',

  GITHUB: 'https://github.com/MinChanJu',
  GITHUB_TOP_LANGS: 'https://github-readme-stats.vercel.app/api/top-langs/?username=MinChanJu&layout=compact&theme=radical',
  GITHUB_STATS: 'https://github-readme-stats.vercel.app/api?username=MinChanJu&show_icons=true&theme=radical',
}