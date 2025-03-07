import coding_contest1 from "../assets/image/coding_contest/coding_contest1.png"
import coding_contest2 from "../assets/image/coding_contest/coding_contest2.png"
import coding_contest3 from "../assets/image/coding_contest/coding_contest3.png"
import coding_contest4 from "../assets/image/coding_contest/coding_contest4.png"
import coding_contest5 from "../assets/image/coding_contest/coding_contest5.png"
import coding_contest6 from "../assets/image/coding_contest/coding_contest6.png"
import mic_app1 from "../assets/image/mic_app/mic_app1.png"
import mic_app2 from "../assets/image/mic_app/mic_app2.png"
import mic_app3 from "../assets/image/mic_app/mic_app3.png"
import portfolio1 from "../assets/image/portfolio/portfolio1.png"
import portfolio2 from "../assets/image/portfolio/portfolio2.png"
import portfolio3 from "../assets/image/portfolio/portfolio3.png"
import portfolio4 from "../assets/image/portfolio/portfolio4.png"
import random_chat_app1 from "../assets/image/random_chat_app/random_chat_app1.png"
import random_chat_app2 from "../assets/image/random_chat_app/random_chat_app2.png"
import random_chat_app3 from "../assets/image/random_chat_app/random_chat_app3.png"
import random_chat_app4 from "../assets/image/random_chat_app/random_chat_app4.png"
import random_chat_app5 from "../assets/image/random_chat_app/random_chat_app5.png"
import random_chat_app6 from "../assets/image/random_chat_app/random_chat_app6.png"
import trash_game1 from "../assets/image/trash_game/trash_game1.jpeg"
import trash_game2 from "../assets/image/trash_game/trash_game2.jpeg"
import trash_game3 from "../assets/image/trash_game/trash_game3.jpeg"

export const IMG: { [key: string]: string[] } = {
    "coding_contest": [coding_contest1, coding_contest2, coding_contest3, coding_contest4, coding_contest5, coding_contest6],
    "mic_app": [mic_app1, mic_app2, mic_app3],
    "portfolio": [portfolio1, portfolio2, portfolio3, portfolio4],
    "random_chat_app": [random_chat_app1, random_chat_app2, random_chat_app3, random_chat_app4, random_chat_app5, random_chat_app6],
    "trash_game": [trash_game1, trash_game2, trash_game3],
    
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