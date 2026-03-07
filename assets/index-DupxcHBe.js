import{j as e,b as p,M as k,c as R,d as L}from"./vendor-BItL4kOI.js";import{c as I}from"./react-vendor-D6vjmnaZ.js";import{S as J,N as M,a as G}from"./swiper-Cq9G6lv5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(r){if(r.ep)return;r.ep=!0;const l=o(r);fetch(r.href,l)}})();const w=({href:t})=>e.jsx("a",{className:"break-all text-blue-500 hover:text-blue-700",href:t,target:"_blank",rel:"noopener noreferrer",children:t}),g=({label:t,children:s})=>e.jsxs("div",{className:"flex items-baseline gap-3",children:[e.jsx("span",{className:"w-20 shrink-0 text-xs font-semibold tracking-widest text-slate-400 uppercase",children:t}),e.jsx("span",{className:"text-sm text-slate-700",children:s})]}),u=({title:t,titlePosition:s="left"})=>e.jsxs("div",{className:"flex items-center gap-3",children:[(s==="center"||s==="right")&&e.jsx("div",{className:"h-px flex-1 bg-slate-200"}),e.jsx("h2",{className:"text-xl font-bold text-slate-700",children:t}),(s==="center"||s==="left")&&e.jsx("div",{className:"h-px flex-1 bg-slate-200"})]}),d=({title:t,titlePosition:s="left",children:o,className:a})=>e.jsxs("div",{className:`rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm md:px-6 md:py-5 ${a}`,children:[t&&e.jsxs(e.Fragment,{children:[e.jsx(u,{title:t,titlePosition:s}),e.jsx("div",{className:"h-3"})]}),o]}),h=({caption:t,title:s,children:o})=>e.jsxs("div",{className:"flex flex-col gap-3 md:gap-5 print:break-before-page",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold tracking-widest text-purple-400 uppercase",children:t}),e.jsx("h1",{className:"mt-1 text-2xl font-bold text-slate-800 md:text-4xl",children:s})]}),o]}),K=()=>{const t=p.useRef(null),[s,o]=p.useState(0);return{currentIndex:s,handleClick:i=>{t.current&&t.current.slideTo(i)},handleSlideChange:i=>{o(i.activeIndex)},setSwiper:i=>{t.current=i}}},H=({title:t,images:s})=>e.jsxs("div",{className:"print:block",children:[e.jsx(u,{title:`${t?t+" ":""}사진 (${s.length}장)`,titlePosition:"center"}),e.jsx("div",{className:"h-4"}),e.jsx("div",{className:"flex flex-wrap gap-4",children:s.map((o,a)=>e.jsx("img",{className:"mx-auto max-h-50 max-w-[calc(50%-1rem)] rounded-lg object-contain",src:o,alt:`${t?t+" ":""}사진 ${a+1}`},a))})]}),W=({images:t,currentIndex:s,handleClick:o})=>e.jsx("div",{className:"slider-scrollbar flex w-full gap-2 overflow-x-auto pb-1",children:t.map((a,r)=>e.jsx("button",{onClick:()=>o(r),className:`shrink-0 overflow-hidden rounded-lg border-2 transition-all ${s===r?"border-purple-400 opacity-100 shadow-sm":"border-transparent opacity-50 hover:opacity-80"}`,children:e.jsx("img",{className:"h-10 w-10 object-contain md:h-20 md:w-20",src:a,alt:`Select ${r}`})},r))}),y=({title:t,images:s,imageName:o})=>{const{currentIndex:a,handleClick:r,handleSlideChange:l,setSwiper:i}=K();return s.length===0?null:e.jsxs(d,{children:[e.jsxs("div",{className:"flex flex-col gap-4 print:hidden",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("p",{className:"text-base font-semibold text-slate-700",children:o?decodeURIComponent(s[a].split("/").pop()??"").split("-")[0]:`${t} 사진 ${a+1}`}),e.jsxs("span",{className:"rounded-full bg-slate-100 px-2 py-0.5 text-sm text-slate-400",children:[a+1," / ",s.length]})]}),e.jsx("div",{className:"overflow-hidden rounded-xl bg-slate-50",children:e.jsx(J,{modules:[M],spaceBetween:20,slidesPerView:1,navigation:!0,onSwiper:i,onSlideChange:l,className:"aspect-[1.5] w-full md:aspect-[2]",children:s.map((m,x)=>e.jsx(G,{className:"flex items-center justify-center",children:e.jsx("img",{className:"h-full w-full object-contain",src:m,alt:`Slide ${x}`,loading:"lazy"})},x))})}),e.jsx(W,{images:s,currentIndex:a,handleClick:r})]}),e.jsx(H,{title:t,images:s})]})},F=[{name:"PCCE(Python)-프로그래머스코딩필수역량자격",issuer:"(주)그렙",date:"2024.08.18",score:"1000/Lv.4"},{name:"PCCP(Python)-프로그래머스코딩전문가자격",issuer:"(주)그렙",date:"2024.09.22",score:"689/Lv.3"}].sort((t,s)=>{const o=new Date(t.date.replace(/\./g,"-")).getTime(),a=new Date(s.date.replace(/\./g,"-")).getTime();return o-a}),U=({name:t,issuer:s,date:o,score:a})=>e.jsxs(d,{className:"flex items-center justify-between gap-4 rounded-xl transition-shadow hover:shadow-md",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"font-semibold text-slate-800",children:t}),e.jsx("span",{className:"text-xs text-slate-400",children:s})]}),e.jsxs("div",{className:"flex shrink-0 flex-col items-end gap-1.5",children:[e.jsx("span",{className:"rounded-full border border-blue-200 bg-blue-50 px-3 py-0.5 text-xs font-semibold text-blue-700",children:a}),e.jsx("span",{className:"text-xs text-slate-400",children:o})]})]}),q=[{name:"제 3회 산업수학 프로그래밍 경진대회",host:"이주대학교 산업수학 통계센터",date:"2023.12.11",rank:"2등"},{name:"2024 아주대학교 프로그래밍 경진대회 (APC) Div2",host:"이주대학교 SW중심대학사업단",date:"2024.06.07",rank:"대상(1등)"},{name:"2025 아주대학교 해커톤 (아주톤)",host:"이주대학교 SW융합교육원",date:"2025.05.25",rank:"장려상(3등)"}].sort((t,s)=>{const o=new Date(t.date.replace(/\./g,"-")).getTime(),a=new Date(s.date.replace(/\./g,"-")).getTime();return o-a}),z=t=>t.includes("1등")||t.includes("대상")||t.includes("금")?"border-amber-300 bg-amber-50 text-amber-700":t.includes("2등")||t.includes("최우수")||t.includes("은")?"border-slate-300 bg-slate-50 text-slate-600":t.includes("3등")||t.includes("우수")||t.includes("동")?"border-orange-200 bg-orange-50 text-orange-700":"border-purple-200 bg-purple-50 text-purple-700",Y=({name:t,host:s,date:o,rank:a})=>e.jsxs(d,{className:"flex items-center justify-between gap-4 rounded-xl transition-shadow hover:shadow-md",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"font-semibold text-slate-800",children:t}),e.jsx("span",{className:"text-xs text-slate-400",children:s})]}),e.jsxs("div",{className:"flex shrink-0 flex-col items-end gap-1.5",children:[e.jsx("span",{className:`rounded-full border px-3 py-0.5 text-xs font-semibold ${z(a)}`,children:a}),e.jsx("span",{className:"text-xs text-slate-400",children:o})]})]}),X="/portfolio/assets/ajou_ton1-zHpSm68l.webp",Q="/portfolio/assets/ajou_ton2-DfaHh93W.webp",Z="/portfolio/assets/ajou_ton3-B9DWGr06.webp",V="/portfolio/assets/ajou_ton4-zw5QJ1nX.webp",$="/portfolio/assets/ajou_ton5-DnRoncuu.webp",ee="/portfolio/assets/ajou_ton6-Bn83oApr.webp",te="/portfolio/assets/ajou_ton7-cdiw2clX.webp",se="/portfolio/assets/ajou_ton8-yWQwKzK6.webp",oe="/portfolio/assets/PCCE_Python3-D043nLmC.webp",ae="/portfolio/assets/PCCP_Python3-DDPdHEjG.webp",re="/portfolio/assets/%EB%A9%A4%EB%B2%84%EC%8B%AD_%EC%88%98%EB%A3%8C%EC%A6%9D-a_0wFLeK.webp",le="/portfolio/assets/%EC%82%B0%EC%97%85%EC%88%98%ED%95%99_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D_%EA%B2%BD%EC%A7%84%EB%8C%80%ED%9A%8C-C1wmbKNq.webp",ie="/portfolio/assets/%EC%95%84%EC%A3%BC%EB%8C%80%ED%95%99%EA%B5%90_%ED%95%B4%EC%BB%A4%ED%86%A4-CDYMtxrl.webp",ne="/portfolio/assets/%EC%95%84%EC%A3%BC%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D_%EA%B2%BD%EC%A7%84%EB%8C%80%ED%9A%8C-C2he7Po4.webp",ce="/portfolio/assets/%EC%B1%8C%EB%A6%B0%EC%A7%80_%EC%88%98%EB%A3%8C%EC%A6%9D-DwJTJdra.webp",de="/portfolio/assets/coding_contest1-CDobbvln.webp",pe="/portfolio/assets/coding_contest2-LCNrK1V3.webp",me="/portfolio/assets/coding_contest3-DTf2Q5KW.webp",xe="/portfolio/assets/coding_contest4-DmYIPsQy.webp",ge="/portfolio/assets/coding_contest5-CzVEyoAg.webp",ue="/portfolio/assets/coding_contest6-BfpxxVNa.webp",be="/portfolio/assets/coding_contest7-CMzgiDOo.webp",he="/portfolio/assets/coding_contest8-D9Rn8Wt6.webp",fe="/portfolio/assets/dating_app1-DWq1nTsZ.webp",je="/portfolio/assets/dating_app2-1Wr8AwSh.webp",_e="/portfolio/assets/dating_app3-DMf1s0pN.webp",we="/portfolio/assets/dating_app4-ChLyb2yU.webp",ve="/portfolio/assets/dating_app5-DxEoRTkt.webp",Ne="/portfolio/assets/dating_app6-C29Fmy-r.webp",Ce="/portfolio/assets/moyo1-lf7YBHnG.webp",ye="/portfolio/assets/moyo10-Bobhf4n1.webp",Ae="/portfolio/assets/moyo2-BN64Sx19.webp",Se="/portfolio/assets/moyo3-FqtOiqin.webp",Ee="/portfolio/assets/moyo4-NDkmiNDg.webp",Te="/portfolio/assets/moyo5-BAO8R715.webp",Pe="/portfolio/assets/moyo6-DAq8uujs.webp",Be="/portfolio/assets/moyo7-DGxpN40H.webp",Oe="/portfolio/assets/moyo8-DUtcR6JO.webp",De="/portfolio/assets/moyo9-E5Oqijkm.webp",ke="/portfolio/assets/portfolio1-C0RJVs4K.webp",Re="/portfolio/assets/portfolio2-By1ZvRU8.webp",Le="/portfolio/assets/portfolio3-DV0iwIxu.webp",Ie="/portfolio/assets/portfolio4-BqB-Hjj-.webp",Je="/portfolio/assets/portfolio5-nnqKdEgP.webp",Me="/portfolio/assets/portfolio6-BhBaaant.webp",Ge="/portfolio/assets/portfolio7--mUWggD9.webp",Ke=Object.assign({"/src/shared/assets/image/ajou_ton/ajou_ton1.webp":X,"/src/shared/assets/image/ajou_ton/ajou_ton2.webp":Q,"/src/shared/assets/image/ajou_ton/ajou_ton3.webp":Z,"/src/shared/assets/image/ajou_ton/ajou_ton4.webp":V,"/src/shared/assets/image/ajou_ton/ajou_ton5.webp":$,"/src/shared/assets/image/ajou_ton/ajou_ton6.webp":ee,"/src/shared/assets/image/ajou_ton/ajou_ton7.webp":te,"/src/shared/assets/image/ajou_ton/ajou_ton8.webp":se,"/src/shared/assets/image/certification/PCCE_Python3.webp":oe,"/src/shared/assets/image/certification/PCCP_Python3.webp":ae,"/src/shared/assets/image/certification/멤버십_수료증.webp":re,"/src/shared/assets/image/certification/산업수학_프로그래밍_경진대회.webp":le,"/src/shared/assets/image/certification/아주대학교_해커톤.webp":ie,"/src/shared/assets/image/certification/아주프로그래밍_경진대회.webp":ne,"/src/shared/assets/image/certification/챌린지_수료증.webp":ce,"/src/shared/assets/image/coding_contest/coding_contest1.webp":de,"/src/shared/assets/image/coding_contest/coding_contest2.webp":pe,"/src/shared/assets/image/coding_contest/coding_contest3.webp":me,"/src/shared/assets/image/coding_contest/coding_contest4.webp":xe,"/src/shared/assets/image/coding_contest/coding_contest5.webp":ge,"/src/shared/assets/image/coding_contest/coding_contest6.webp":ue,"/src/shared/assets/image/coding_contest/coding_contest7.webp":be,"/src/shared/assets/image/coding_contest/coding_contest8.webp":he,"/src/shared/assets/image/dating_app/dating_app1.webp":fe,"/src/shared/assets/image/dating_app/dating_app2.webp":je,"/src/shared/assets/image/dating_app/dating_app3.webp":_e,"/src/shared/assets/image/dating_app/dating_app4.webp":we,"/src/shared/assets/image/dating_app/dating_app5.webp":ve,"/src/shared/assets/image/dating_app/dating_app6.webp":Ne,"/src/shared/assets/image/moyo/moyo1.webp":Ce,"/src/shared/assets/image/moyo/moyo10.webp":ye,"/src/shared/assets/image/moyo/moyo2.webp":Ae,"/src/shared/assets/image/moyo/moyo3.webp":Se,"/src/shared/assets/image/moyo/moyo4.webp":Ee,"/src/shared/assets/image/moyo/moyo5.webp":Te,"/src/shared/assets/image/moyo/moyo6.webp":Pe,"/src/shared/assets/image/moyo/moyo7.webp":Be,"/src/shared/assets/image/moyo/moyo8.webp":Oe,"/src/shared/assets/image/moyo/moyo9.webp":De,"/src/shared/assets/image/portfolio/portfolio1.webp":ke,"/src/shared/assets/image/portfolio/portfolio2.webp":Re,"/src/shared/assets/image/portfolio/portfolio3.webp":Le,"/src/shared/assets/image/portfolio/portfolio4.webp":Ie,"/src/shared/assets/image/portfolio/portfolio5.webp":Je,"/src/shared/assets/image/portfolio/portfolio6.webp":Me,"/src/shared/assets/image/portfolio/portfolio7.webp":Ge}),b={};Object.entries(Ke).forEach(([t,s])=>{const o=t.split("/")[5];b[o]||(b[o]=[]),b[o].push(s)});Object.keys(b).forEach(t=>{b[t].sort((s,o)=>{const a=s.split("/").pop()??"",r=o.split("/").pop()??"";return a.localeCompare(r,void 0,{numeric:!0,sensitivity:"base"})})});const A=t=>{const s=b[t];return s||[]},He=()=>e.jsxs(h,{caption:"Awards",title:"Prizes & Certificates",children:[e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(u,{title:"🏆 수상"}),q.map((t,s)=>e.jsx(Y,{...t},s))]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(u,{title:"📜 자격증"}),F.map((t,s)=>e.jsx(U,{...t},s))]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(u,{title:"🖼 증명자료"}),e.jsx(y,{images:A("certification"),imageName:!0})]})]}),S=[{type:"고등학교",title:"서울 성보고등학교 졸업",period:"2017.03 ~ 2020.02"},{type:"아르바이트",title:"대치에스에스학원 수학 TA. 수학 질문에 대한 답",period:"2019.01 ~ 2020.10"},{type:"대학교",title:"아주대학교 재학. 1전공 수학과, 복수전공 소프트웨어학과",period:"2020.03 ~ 2026.02"},{type:"군복무",title:"2022년 11월 30일 육군 병장 만기전역",period:"2021.05 ~ 2022.11"},{type:"아르바이트",title:"CU관악두산점",period:"2022.12 ~ 2023.02"},{type:"아르바이트",title:"광교에듀플렉스 수학 튜터. 수학 진도를 나가며 질문에 대한 답",period:"2023.07 ~ 2024.02"},{type:"대회",title:"제 3회 산업수학 프로그래밍 경진대회 2등",period:"2023.12 ~ 2023.12"},{type:"동아리 활동",title:"2024년 아주대학교 수학과 소학회 MiC 회장",period:"2024.01 ~ 2024.12"},{type:"대회",title:"2024 아주대학교 프로그래밍 경진대회 Div.2 대상",period:"2024.05 ~ 2024.05"},{type:"대회",title:"2024 ICPC Seoul Regional 예선",period:"2024.10 ~ 2024.10"},{type:"대회",title:"2024 아주대학교 프로그래밍 경진대회 Extra",period:"2024.12 ~ 2024.12"},{type:"아르바이트",title:"키코랩스 코딩 트레이너. 초중학생을 대상으로 코딩 기초와 심화에 대한 수업",period:"2025.01 ~ 2025.07"},{type:"대회",title:"2025 아주대학교 해커톤 (아주톤) 장려상",period:"2025.05 ~ 2025.05"},{type:"부트캠프",title:"네이버 부스트캠프 10기 베이직 수료",period:"2025.06 ~ 2025.07"},{type:"부트캠프",title:"네이버 부스트캠프 10기 챌린지 수료",period:"2025.07 ~ 2025.08"},{type:"부트캠프",title:"네이버 부스트캠프 10기 멤버십 수료",period:"2025.08 ~ 2026.02"}].sort((t,s)=>{const[o]=t.period.split(" ~ "),[a]=s.period.split(" ~ ");return new Date(o).getTime()-new Date(a).getTime()}),E=[...new Set(S.map(t=>t.type))],T={대학교:"border-purple-200 bg-purple-50 text-purple-700",고등학교:"border-purple-200 bg-purple-50 text-purple-700",부트캠프:"border-emerald-200 bg-emerald-50 text-emerald-700",대회:"border-amber-200 bg-amber-50 text-amber-700","동아리 활동":"border-blue-200 bg-blue-50 text-blue-700",아르바이트:"border-slate-200 bg-slate-50 text-slate-700",군복무:"border-rose-200 bg-rose-50 text-rose-700"},We={대학교:"bg-purple-400",고등학교:"bg-purple-400",부트캠프:"bg-emerald-400",대회:"bg-amber-400","동아리 활동":"bg-blue-400",아르바이트:"bg-slate-400",군복무:"bg-rose-400"},Fe=({selectedCareerTypes:t,onToggle:s})=>e.jsx("div",{className:"flex flex-wrap gap-2",children:E.map(o=>{const a=t.has(o),r=T[o];return e.jsx("button",{onClick:()=>s(o),className:`rounded-full border px-3.5 py-1 text-xs font-medium transition-all duration-200 ${a?r+" shadow-sm":"border-slate-100 bg-white text-slate-300 hover:border-slate-300 hover:text-slate-700"}`,children:o},o)})}),Ue=()=>{const[t,s]=p.useState(new Set(E)),o=S.filter(r=>t.has(r.type));return{selectedCareerTypes:t,filteredCareers:o,toggleCareerType:r=>{s(l=>{const i=new Set(l);return i.has(r)?i.delete(r):i.add(r),i})}}},qe=({item:t,isLast:s})=>{const o=T[t.type]??"border-slate-200 bg-slate-50 text-slate-600",a=We[t.type]??"bg-slate-300";return e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:`mt-1 h-3 w-3 shrink-0 rounded-full ring-2 ring-white ${a}`}),!s&&e.jsx("div",{className:"mt-1 w-px flex-1 bg-slate-200"})]}),e.jsxs(d,{className:"mb-4 flex flex-1 items-start justify-between gap-3 rounded-xl",children:[e.jsxs("div",{className:"flex flex-col gap-0.5",children:[e.jsx("span",{className:"font-semibold text-slate-800",children:t.title}),e.jsx("span",{className:`mt-1 w-fit rounded-full border px-2.5 py-0.5 text-xs font-medium ${o}`,children:t.type})]}),e.jsx("span",{className:"shrink-0 text-xs text-slate-400",children:t.period})]})]})},ze=({items:t})=>t.length===0?e.jsxs("div",{className:"flex flex-col items-center gap-2 py-12 text-center",children:[e.jsx("span",{className:"text-2xl",children:"🔍"}),e.jsx("p",{className:"text-sm font-medium text-slate-400",children:"해당 유형의 경력이 없습니다."})]}):e.jsx("div",{children:t.map((s,o)=>e.jsx(qe,{item:s,isLast:o===t.length-1},o))}),Ye=()=>{const{selectedCareerTypes:t,filteredCareers:s,toggleCareerType:o}=Ue();return e.jsxs(h,{caption:"Timeline",title:"Careers",children:[e.jsx(Fe,{selectedCareerTypes:t,onToggle:o}),e.jsx(ze,{items:s})]})},Xe="data:image/webp;base64,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",c={BAEKJOON_PYTHON:"https://www.acmicpc.net/user/chany0207",BAEKJOON_JAVA:"https://www.acmicpc.net/user/mcj0207",BAEKJOON_CLANG:"https://www.acmicpc.net/user/chany8592",BAEKJOON_CPP:"https://www.acmicpc.net/user/mcj8592",BAEKJOON_PYTHON_TIER:"https://mazassumnida.wtf/api/v2/generate_badge?boj=chany0207",BAEKJOON_JAVA_TIER:"https://mazassumnida.wtf/api/v2/generate_badge?boj=mcj0207",BAEKJOON_CLANG_TIER:"https://mazassumnida.wtf/api/v2/generate_badge?boj=chany8592",BAEKJOON_CPP_TIER:"https://mazassumnida.wtf/api/v2/generate_badge?boj=mcj8592",GITHUB:"https://github.com/MinChanJu",GITHUB_STREAK:"https://ghchart.rshah.org/MinChanJu",GITHUB_STATS:"https://github-profile-summary-cards.vercel.app/api/cards/stats?username=MinChanJu&theme=buefy",GITHUB_TOP_LANGS:"https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=MinChanJu&theme=buefy",GITHUB_SUMMARY:"https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=MinChanJu&theme=buefy"},n={INTRODUCTION:"introduction",SKILL:"skill",PROJECT:"project",AWARD:"award",CAREER:"career",LINK:"link"},Qe=["저는 대학 입학 후 처음 프로그래밍을 접했고, 코드가 정상적으로 실행될 때의 성취감에 매료되었습니다. 이후 소프트웨어학과를 복수전공하며 알고리즘 문제 해결에 흥미를 느껴 꾸준히 학습한 끝에 solved.ac P5(상위 약 4%) 티어를 달성하였습니다. 또한, 2023 아주대학교 산업수학 프로그래밍 경진대회 2등, 2024 아주대학교 프로그래밍 경진대회(APC) Div.2 대상(1등)을 수상하며 실력을 인정받았습니다.","2024년에는 수학과 소학회 MiC의 회장을 맡아 프로그래밍 멘토링과 코딩 대회를 기획·운영하며 교육 방식과 리더십을 배웠습니다. 특히, 더 나은 학습 환경을 제공하기 위해 직접 코딩 대회 사이트를 개발하며 백엔드(Spring Boot), 프론트엔드(React), 데이터베이스(Supabase)를 활용하며 실무적인 개발 경험을 쌓을 수 있었습니다. 그렇게 저는 개발자의 꿈을 향해 한 걸음 다가갔다고 생각합니다.","다양한 기술에 대한 호기심으로 프론트엔드(React, TypeScript), 백엔드(Spring Boot, Django), 모바일 앱(Flutter), 게임 개발(Unity) 등 폭넓은 경험을 쌓았습니다. 방학마다 독학으로 앱과 웹사이트를 개발하며 문제 해결 능력을 키웠고, 끈기와 논리적 사고력을 기를 수 있었습니다.","저는 새로운 것을 배우는 과정에서 끈기 있게 문제를 해결하는 것이 저만의 강점이라고 생각합니다. 앞으로도 새로운 도전에 적극적으로 나서며, 팀원들과 협력하여 최적의 솔루션을 찾아가는 개발자가 되고 싶습니다."],Ze=[{label:"이름",value:"주민찬"},{label:"생년월일",value:"2002.02.07"},{label:"전화번호",value:"010-8592-7570"},{label:"이메일",value:"mcj00220077@gmail.com"},{label:"주소",value:"경기도 수원시 영통구"}],Ve=[{label:"학교",value:"아주대학교"},{label:"입학",value:"2020.03"},{label:"졸업(예정)",value:"2026.08"},{label:"1전공",value:"수학과"},{label:"복수전공",value:"소프트웨어학과"},{label:"학기",value:"4-2 (이수, 2026.02 기준)"}],C=({rows:t})=>e.jsx("div",{className:"flex flex-col gap-3 divide-y divide-slate-100",children:t.map(({label:s,value:o})=>e.jsx(g,{label:s,children:o},s))}),$e=()=>e.jsxs(h,{caption:"About Me",title:e.jsxs("div",{className:"mt-5 flex items-center justify-start gap-5",children:[e.jsx("img",{className:"w-40 rounded-2xl border",src:Xe,alt:"프로필 사진"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("div",{children:"안녕하세요,"}),e.jsx("div",{children:"주니어 개발자 주민찬입니다."})]})]}),children:[e.jsx(d,{title:"👋 인사말",children:e.jsx("div",{className:"flex flex-col gap-4",children:Qe.map((t,s)=>e.jsx("p",{className:"text-sm leading-relaxed whitespace-pre-wrap text-slate-600",children:" "+t},s))})}),e.jsxs("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-5",children:[e.jsx(d,{title:"📋 Info",children:e.jsx(C,{rows:[...Ze,{label:"GitHub",value:e.jsx(w,{href:c.GITHUB})}]})}),e.jsx(d,{title:"🎓 학력",children:e.jsx(C,{rows:Ve})})]})]}),et=[{label:"Python",href:c.BAEKJOON_PYTHON,tier:c.BAEKJOON_PYTHON_TIER},{label:"JAVA",href:c.BAEKJOON_JAVA,tier:c.BAEKJOON_JAVA_TIER},{label:"C언어",href:c.BAEKJOON_CLANG,tier:c.BAEKJOON_CLANG_TIER},{label:"C++",href:c.BAEKJOON_CPP,tier:c.BAEKJOON_CPP_TIER}],tt=()=>e.jsxs(h,{caption:"Contact",title:"Links",children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(u,{title:"🐙 GitHub"}),e.jsxs(d,{children:[e.jsx(w,{href:c.GITHUB}),e.jsxs("div",{className:"mx-auto flex max-w-2xl flex-col gap-3",children:[e.jsx("img",{src:c.GITHUB_SUMMARY,alt:"GitHub Summary",className:"w-full rounded-lg"}),e.jsxs("div",{className:"flex w-full",children:[e.jsx("img",{src:c.GITHUB_TOP_LANGS,alt:"Top Languages",className:"min-w-0 flex-1 rounded-lg"}),e.jsx("img",{src:c.GITHUB_STATS,alt:"GitHub Stats",className:"min-w-0 flex-1 rounded-lg"})]}),e.jsx("img",{src:c.GITHUB_STREAK,alt:"GitHub Streak",className:"w-full rounded-lg"})]})]})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(u,{title:"⚔️ BAEKJOON"}),e.jsx("div",{className:"grid grid-cols-2 gap-3 md:gap-5",children:et.map(({label:t,href:s,tier:o})=>e.jsxs("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"flex flex-col items-start gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition-shadow hover:shadow-md md:px-6 md:py-5",children:[e.jsx("span",{className:"rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs font-semibold text-slate-600",children:t}),e.jsx("img",{src:o,alt:`BAEKJOON ${t} tier`,className:"w-full"})]},t))})]})]}),v=[{title:"Moyo - 2D 가상 공간 기반 협업 플랫폼",period:"2025.12 ~ 2026.02 (2개월, 네이버 부스트캠프 10기에서 진행)",team:"4명",role:"Full Stack - 50%",skills:"React, TypeScript, NestJS, MySQL, TypeORM",site:{url:"https://www.moyo.asia",favicon:"https://www.moyo.asia/favicon.svg"},links:[{label:"소스코드",url:"https://github.com/boostcampwm2025/web13-isj-dle"}],description:`## 🏠 프로젝트 개요

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

> ⚠️ 현재 개발 중인 프로젝트입니다.`,name:"dating_app"}],st=({index:t})=>{const s=v[t];return e.jsxs(h,{caption:`Project ${t+1}`,title:e.jsxs("div",{className:"mt-5 flex flex-row items-center gap-2",children:[s.site?.favicon&&e.jsx("img",{src:s.site.favicon,alt:"favicon",className:"h-6 w-6 md:h-10 md:w-10"}),e.jsx("div",{children:s.title})]}),children:[e.jsx(d,{title:"📌 프로젝트 정보",children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(g,{label:"기간",children:s.period}),e.jsx(g,{label:"팀구성",children:s.team}),e.jsx(g,{label:"역할",children:e.jsx("span",{className:"whitespace-pre-wrap",children:s.role})}),e.jsx(g,{label:"기술",children:e.jsx("div",{className:"flex flex-wrap gap-1.5",children:s.skills.split(",").map((o,a)=>e.jsx("span",{className:"rounded-full border border-purple-200 bg-purple-50 px-2.5 py-0.5 text-xs font-medium text-purple-700",children:o.trim()},a))})})]})}),(s.links||s.site)&&e.jsx(d,{title:"🔗 Links",children:e.jsxs("div",{className:"flex flex-col gap-3",children:[s.links?.map(({label:o,url:a},r)=>e.jsx(g,{label:o,children:e.jsx(w,{href:a})},r)),s.site&&e.jsx(g,{label:"사이트",children:e.jsx(w,{href:s.site.url})})]})}),e.jsx(d,{className:"prose prose-slate max-w-none",children:e.jsx(k,{remarkPlugins:[L],rehypePlugins:[R],children:s.description})}),e.jsx(y,{title:s.title,images:A(s.name)})]})},ot=[{name:"Python",level:8},{name:"JAVA",level:8},{name:"C언어",level:6},{name:"C++",level:7},{name:"C#",level:6},{name:"Dart",level:6},{name:"JavaScript",level:8},{name:"TypeScript",level:8},{name:"HTML",level:8},{name:"CSS",level:7},{name:"SQL",level:6}].sort((t,s)=>s.level-t.level),at=[{name:"Spring",level:7},{name:"Flutter",level:7},{name:"React",level:7},{name:"Unity",level:5},{name:"Django",level:4},{name:"NestJS",level:7},{name:"NextJS",level:5}].sort((t,s)=>s.level-t.level),rt=[{name:"Git",level:8},{name:"Visual Studio Code",level:8},{name:"Supabase",level:5},{name:"IntelliJ",level:6},{name:"PyCharm",level:6}].sort((t,s)=>s.level-t.level),lt=[{color:"bg-emerald-400",label:"숙련",range:"8+"},{color:"bg-blue-400",label:"중급",range:"6~7"},{color:"bg-slate-300",label:"기초",range:"~5"}],it=t=>t>=8?"border-emerald-200 bg-emerald-50 text-emerald-800":t>=6?"border-blue-200 bg-blue-50 text-blue-800":"border-slate-200 bg-slate-50 text-slate-500",nt=t=>t>=8?"bg-emerald-400":t>=6?"bg-blue-400":"bg-slate-300",ct=({name:t,level:s})=>e.jsxs("span",{className:`inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm font-medium shadow-sm ${it(s)}`,children:[e.jsx("span",{className:`h-1.5 w-1.5 rounded-full ${nt(s)}`}),t,e.jsxs("span",{className:"text-xs font-normal opacity-40",children:[s,"/10"]})]}),N=({title:t,skills:s})=>e.jsx(d,{title:t,children:e.jsx("div",{className:"flex flex-wrap gap-2",children:s.map((o,a)=>e.jsx(ct,{...o},a))})}),dt=()=>e.jsxs(h,{caption:"Tech Stack",title:"Skill Set",children:[e.jsx(N,{title:"🖥 언어",skills:ot}),e.jsx(N,{title:"📦 프레임워크 및 라이브러리",skills:at}),e.jsx(N,{title:"🔧 도구",skills:rt}),e.jsx("div",{className:"flex items-center gap-5",children:lt.map(({color:t,label:s,range:o})=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:`h-2.5 w-2.5 rounded-full ${t}`}),e.jsxs("span",{className:"text-xs text-slate-500",children:[s," ",e.jsxs("span",{className:"text-slate-400",children:["(",o,")"]})]})]},s))})]}),pt=()=>e.jsxs("div",{className:"flex w-full flex-col gap-12 md:gap-20",children:[e.jsx("section",{id:n.INTRODUCTION,children:e.jsx($e,{})}),e.jsx("section",{id:n.SKILL,children:e.jsx(dt,{})}),v.map((t,s)=>e.jsx("section",{id:`${n.PROJECT}-${s+1}`,children:e.jsx(st,{index:s})},s)),e.jsx("section",{id:n.AWARD,children:e.jsx(He,{})}),e.jsx("section",{id:n.CAREER,children:e.jsx(Ye,{})}),e.jsx("section",{id:n.LINK,children:e.jsx(tt,{})})]}),mt=()=>e.jsx("footer",{className:"w-full border-t border-gray-200 bg-white/80 py-8 backdrop-blur-sm",children:e.jsxs("div",{className:"flex flex-col items-center gap-1.5",children:[e.jsx("span",{className:"bg-linear-to-r from-violet-500 via-sky-500 to-teal-500 bg-clip-text text-sm font-semibold tracking-wide text-transparent",children:"포트폴리오를 방문해 주셔서 감사합니다!"}),e.jsx("p",{className:"text-[11px] tracking-widest text-gray-400",children:"좋은 하루 되세요 😊"})]})}),xt=()=>{const[t,s]=p.useState("");return p.useEffect(()=>{const i=document.querySelectorAll("section[id]"),m=()=>{const x=window.innerHeight/2;let f="";for(const j of i){const _=j.getBoundingClientRect();if(!(_.top>=x||_.bottom<=x)){f=j.id.startsWith(n.PROJECT)?n.PROJECT:Object.values(n).find(D=>D===j.id)||"";break}}s(f)};return window.addEventListener("scroll",m,{passive:!0}),m(),()=>window.removeEventListener("scroll",m)},[]),{goToHome:()=>window.scrollTo({top:0,behavior:"smooth"}),goToSection:(i,m)=>{const x=m!==void 0?`${n.PROJECT}-${m}`:i,f=document.getElementById(x);if(f){const j=56+(window.innerWidth>=768?20:12),_=f.getBoundingClientRect().top+window.scrollY-j;window.scrollTo({top:_,behavior:"smooth"})}},getDesktopNavItemClass:i=>`text-sm font-medium transition-colors duration-200 ${t===i?"text-violet-600":"text-gray-500 hover:text-gray-900"}`,getMobileNavItemClass:i=>`text-left text-sm font-medium ${t===i?"text-violet-600":"text-gray-600"}`}},P=()=>e.jsx("button",{onClick:()=>window.print(),className:"rounded-full border border-slate-200 px-3.5 py-1 text-sm font-medium text-slate-500 transition-colors duration-200 hover:border-slate-300 hover:text-slate-700",children:"PDF"}),B=()=>{const[t,s]=p.useState(!1),o=p.useRef(null);return p.useEffect(()=>{if(!o.current)return;const a=r=>{o.current?.offsetParent&&(o.current.contains(r.target)||s(!1))};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[]),{projectOpen:t,setProjectOpen:s,dropdownRef:o}},gt=({className:t,goToSection:s})=>{const{projectOpen:o,setProjectOpen:a,dropdownRef:r}=B();return e.jsxs("div",{className:"relative flex",ref:r,children:[e.jsxs("button",{onClick:()=>a(l=>!l),className:t,children:["프로젝트 ",o?"▲":"▼"]}),o&&e.jsx("div",{className:"absolute top-full right-0 mt-2 w-72 rounded-xl border border-gray-100 bg-white py-2 shadow-xl",children:v.map((l,i)=>e.jsxs("button",{onClick:()=>{s(n.PROJECT,i+1),a(!1)},className:"w-full px-4 py-2.5 text-left text-sm text-gray-600 transition-colors hover:bg-violet-50 hover:text-violet-600",children:[i+1,". ",l.title]},i))})]})},ut=[{label:"자기소개",sectionId:n.INTRODUCTION},{label:"기술스택",sectionId:n.SKILL},{label:"프로젝트",sectionId:n.PROJECT},{label:"수상/자격증",sectionId:n.AWARD},{label:"경력",sectionId:n.CAREER},{label:"링크",sectionId:n.LINK}],O=({getNavItemClass:t,goToSection:s,renderProjectDropdown:o,onClose:a})=>e.jsx(e.Fragment,{children:ut.map(({label:r,sectionId:l})=>l===n.PROJECT?e.jsx(p.Fragment,{children:o(t(l))},l):e.jsx("button",{onClick:()=>{a?.(),requestAnimationFrame(()=>s(l))},className:t(l),children:r},l))}),bt=({goToSection:t,getDesktopNavItemClass:s})=>e.jsxs("nav",{className:"flex items-center gap-6",children:[e.jsx(O,{getNavItemClass:s,goToSection:t,renderProjectDropdown:o=>e.jsx(gt,{className:o,goToSection:t})}),e.jsx(P,{})]}),ht=({className:t,goToSection:s,onClose:o})=>{const{projectOpen:a,setProjectOpen:r}=B();return e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>r(l=>!l),className:t,children:["프로젝트 ",a?"▲":"▼"]}),a&&e.jsx("div",{className:"ml-3 flex flex-col gap-2",children:v.map((l,i)=>e.jsxs("button",{onClick:()=>{o(),r(!1),requestAnimationFrame(()=>s(n.PROJECT,i+1))},className:"text-left text-xs text-gray-500 hover:text-violet-600",children:[i+1,". ",l.title]},i))})]})},ft=({isOpen:t,onClose:s,getMobileNavItemClass:o,goToSection:a})=>t?e.jsx("div",{className:"border-t border-gray-100 bg-white px-6 py-4 md:hidden",children:e.jsxs("nav",{className:"flex flex-col gap-3",children:[e.jsx(O,{getNavItemClass:o,goToSection:a,onClose:s,renderProjectDropdown:r=>e.jsx(ht,{className:r,goToSection:a,onClose:s})}),e.jsx(P,{})]})}):null,jt=()=>{const{goToHome:t,goToSection:s,getDesktopNavItemClass:o,getMobileNavItemClass:a}=xt(),[r,l]=p.useState(!1);return e.jsxs("header",{className:"sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm",children:[e.jsxs("div",{className:"mx-auto flex h-14 max-w-7xl items-center justify-between px-6",children:[e.jsx("button",{onClick:t,className:"bg-linear-to-r from-violet-500 via-sky-500 to-teal-500 bg-clip-text text-base font-bold tracking-[0.2em] text-transparent",children:"MIN CHAN JU"}),e.jsx("div",{className:"hidden md:block",children:e.jsx(bt,{goToSection:s,getDesktopNavItemClass:o})}),e.jsxs("button",{className:"flex flex-col gap-1.5 md:hidden",onClick:()=>l(i=>!i),children:[e.jsx("span",{className:`block h-0.5 w-6 bg-gray-600 transition-transform duration-200 ${r?"translate-y-2 rotate-45":""}`}),e.jsx("span",{className:`block h-0.5 w-6 bg-gray-600 transition-opacity duration-200 ${r?"opacity-0":""}`}),e.jsx("span",{className:`block h-0.5 w-6 bg-gray-600 transition-transform duration-200 ${r?"-translate-y-2 -rotate-45":""}`})]})]}),e.jsx(ft,{isOpen:r,onClose:()=>l(!1),getMobileNavItemClass:a,goToSection:s})]})},_t=()=>e.jsxs("div",{className:"flex min-h-screen flex-col bg-gray-50 print:bg-white",children:[e.jsx(jt,{}),e.jsx("main",{className:"mx-auto w-full max-w-5xl flex-1 p-3 md:p-5 print:p-0",children:e.jsx(pt,{})}),e.jsx(mt,{})]});I.createRoot(document.getElementById("root")).render(e.jsx(p.StrictMode,{children:e.jsx(_t,{})}));
