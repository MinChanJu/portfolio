import{j as e,b as d,M as H,d as F,e as K}from"./vendor-CKZ13vf5.js";import{u as N,a as G,b as $,m as U,O as W,c as V,R as Q,d as Y}from"./react-vendor-BFmNwNq2.js";import{S as z,N as X,a as q}from"./swiper-D-R14KCk.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(l){if(l.ep)return;l.ep=!0;const r=a(l);fetch(l.href,r)}})();const Z=[{name:"PCCE(Python)-프로그래머스코딩필수역량자격",issuer:"(주)그렙",date:"2024.08.18",score:"1000/Lv.4"},{name:"PCCP(Python)-프로그래머스코딩전문가자격",issuer:"(주)그렙",date:"2024.09.22",score:"689/Lv.3"}].sort((t,s)=>{const a=new Date(t.date.replace(/\./g,"-")).getTime(),o=new Date(s.date.replace(/\./g,"-")).getTime();return a-o}),ee=[{name:"제 3회 산업수학 프로그래밍 경진대회",host:"이주대학교 산업수학 통계센터",date:"2023.12.11",rank:"2등"},{name:"2024 아주대학교 프로그래밍 경진대회 (APC) Div2",host:"이주대학교 SW중심대학사업단",date:"2024.06.07",rank:"대상(1등)"},{name:"2025 아주대학교 해커톤 (아주톤)",host:"이주대학교 SW융합교육원",date:"2025.05.25",rank:"장려상(3등)"}].sort((t,s)=>{const a=new Date(t.date.replace(/\./g,"-")).getTime(),o=new Date(s.date.replace(/\./g,"-")).getTime();return a-o}),te="/portfolio/assets/ajou_ton1-CGF_A4Bp.png",se="/portfolio/assets/ajou_ton2-MyfC8mIa.png",ae="/portfolio/assets/ajou_ton3-CglpnBrB.png",oe="/portfolio/assets/ajou_ton4-BQmfcuAI.png",le="/portfolio/assets/ajou_ton5-D03BkMJS.png",re="/portfolio/assets/ajou_ton6-0LRbwe1k.png",ne="/portfolio/assets/ajou_ton7-WtvoTXlJ.png",ie="/portfolio/assets/ajou_ton8-BFs3UlkL.png",ce="/portfolio/assets/PCCE_Python3-BFQs9_lV.png",pe="/portfolio/assets/PCCP_Python3-DXYhxLGT.png",de="/portfolio/assets/%EB%A9%A4%EB%B2%84%EC%8B%AD_%EC%88%98%EB%A3%8C%EC%A6%9D-ljccg5Lo.png",me="/portfolio/assets/%EC%82%B0%EC%97%85%EC%88%98%ED%95%99_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D_%EA%B2%BD%EC%A7%84%EB%8C%80%ED%9A%8C-tiyQ54fa.png",ge="/portfolio/assets/%EC%95%84%EC%A3%BC%EB%8C%80%ED%95%99%EA%B5%90_%ED%95%B4%EC%BB%A4%ED%86%A4-B-ovoBnI.png",xe="/portfolio/assets/%EC%95%84%EC%A3%BC%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D_%EA%B2%BD%EC%A7%84%EB%8C%80%ED%9A%8C-DOnj5DmM.png",ue="/portfolio/assets/%EC%B1%8C%EB%A6%B0%EC%A7%80_%EC%88%98%EB%A3%8C%EC%A6%9D-BX7ZiJ4G.png",he="/portfolio/assets/coding_contest1-BXfyVEFj.png",fe="/portfolio/assets/coding_contest2-BVBSia-F.png",_e="/portfolio/assets/coding_contest3-BP84FOBD.png",be="/portfolio/assets/coding_contest4-DtVEIbHy.png",je="/portfolio/assets/coding_contest5-CLltKPCf.png",ve="/portfolio/assets/coding_contest6-ARedayCI.png",Ne="/portfolio/assets/coding_contest7-zxXu8bCd.png",ye="/portfolio/assets/coding_contest8-zANeViuO.png",Se="/portfolio/assets/dating_app1-BjNfYCe7.png",we="/portfolio/assets/dating_app2-BL4rsKNo.png",Ce="/portfolio/assets/dating_app3-D-fYVSNB.png",Ee="/portfolio/assets/dating_app4-ycvWGX5T.png",Ae="/portfolio/assets/dating_app5-CRaf1Xe-.png",Te="/portfolio/assets/dating_app6-CoHHXEVy.png",Be="/portfolio/assets/moyo1-DY1u3Mmt.png",Pe="/portfolio/assets/moyo2-Dq5q21p6.png",Oe="/portfolio/assets/moyo3-B3IY_ryL.png",Re="/portfolio/assets/moyo4-wbcZprxT.png",De="/portfolio/assets/moyo5-B65U5p2R.png",Ie="/portfolio/assets/moyo6-CBKrgA68.png",ke="/portfolio/assets/moyo7-B6-VlUme.png",Le="/portfolio/assets/moyo8-DDebjNTl.png",Je="/portfolio/assets/moyo9-CVry0FXs.png",Me="/portfolio/assets/portfolio1-D1HQtpNP.png",He="/portfolio/assets/portfolio2-BwgqOTMJ.png",Fe="/portfolio/assets/portfolio3-BKwK4ytw.png",Ke="/portfolio/assets/portfolio4-DtXlX1JI.png",Ge="/portfolio/assets/portfolio5-DVGjK1ZZ.png",$e="/portfolio/assets/portfolio6-D1zfS0v9.png",Ue="/portfolio/assets/portfolio7-QjxrXLW-.png",We=Object.assign({"/src/shared/assets/image/ajou_ton/ajou_ton1.png":te,"/src/shared/assets/image/ajou_ton/ajou_ton2.png":se,"/src/shared/assets/image/ajou_ton/ajou_ton3.png":ae,"/src/shared/assets/image/ajou_ton/ajou_ton4.png":oe,"/src/shared/assets/image/ajou_ton/ajou_ton5.png":le,"/src/shared/assets/image/ajou_ton/ajou_ton6.png":re,"/src/shared/assets/image/ajou_ton/ajou_ton7.png":ne,"/src/shared/assets/image/ajou_ton/ajou_ton8.png":ie,"/src/shared/assets/image/certification/PCCE_Python3.png":ce,"/src/shared/assets/image/certification/PCCP_Python3.png":pe,"/src/shared/assets/image/certification/멤버십_수료증.png":de,"/src/shared/assets/image/certification/산업수학_프로그래밍_경진대회.png":me,"/src/shared/assets/image/certification/아주대학교_해커톤.png":ge,"/src/shared/assets/image/certification/아주프로그래밍_경진대회.png":xe,"/src/shared/assets/image/certification/챌린지_수료증.png":ue,"/src/shared/assets/image/coding_contest/coding_contest1.png":he,"/src/shared/assets/image/coding_contest/coding_contest2.png":fe,"/src/shared/assets/image/coding_contest/coding_contest3.png":_e,"/src/shared/assets/image/coding_contest/coding_contest4.png":be,"/src/shared/assets/image/coding_contest/coding_contest5.png":je,"/src/shared/assets/image/coding_contest/coding_contest6.png":ve,"/src/shared/assets/image/coding_contest/coding_contest7.png":Ne,"/src/shared/assets/image/coding_contest/coding_contest8.png":ye,"/src/shared/assets/image/dating_app/dating_app1.png":Se,"/src/shared/assets/image/dating_app/dating_app2.png":we,"/src/shared/assets/image/dating_app/dating_app3.png":Ce,"/src/shared/assets/image/dating_app/dating_app4.png":Ee,"/src/shared/assets/image/dating_app/dating_app5.png":Ae,"/src/shared/assets/image/dating_app/dating_app6.png":Te,"/src/shared/assets/image/moyo/moyo1.png":Be,"/src/shared/assets/image/moyo/moyo2.png":Pe,"/src/shared/assets/image/moyo/moyo3.png":Oe,"/src/shared/assets/image/moyo/moyo4.png":Re,"/src/shared/assets/image/moyo/moyo5.png":De,"/src/shared/assets/image/moyo/moyo6.png":Ie,"/src/shared/assets/image/moyo/moyo7.png":ke,"/src/shared/assets/image/moyo/moyo8.png":Le,"/src/shared/assets/image/moyo/moyo9.png":Je,"/src/shared/assets/image/portfolio/portfolio1.png":Me,"/src/shared/assets/image/portfolio/portfolio2.png":He,"/src/shared/assets/image/portfolio/portfolio3.png":Fe,"/src/shared/assets/image/portfolio/portfolio4.png":Ke,"/src/shared/assets/image/portfolio/portfolio5.png":Ge,"/src/shared/assets/image/portfolio/portfolio6.png":$e,"/src/shared/assets/image/portfolio/portfolio7.png":Ue}),j={};Object.entries(We).forEach(([t,s])=>{const a=t.split("/")[5];j[a]||(j[a]=[]),j[a].push(s)});const A=t=>{const s=j[t];return s||[]},v=({href:t})=>e.jsx("a",{className:"break-all text-blue-500 hover:text-blue-700",href:t,target:"_blank",rel:"noopener noreferrer",children:t}),w=({big:t,small:s,weight:a,message:o,subMessage:l,marginTop:r,marginBottom:n})=>(t=t??80,s=s??20,a=a??600,o=o??"404 에러",l=l??"서버 오류 또는 권한 없음",r=r??200,e.jsxs("div",{className:"flex flex-col items-center",style:{marginTop:`${r}px`,marginBottom:`${n==null?"auto":`${n}px`}`},children:[e.jsx("div",{className:"text-blue-600",style:{fontSize:`${t}px`,fontWeight:`${a}`},children:o}),e.jsx("br",{}),e.jsx("div",{className:"text-red-600",style:{fontSize:`${s}px`,fontWeight:`${a}`},children:l})]})),T=({title:t,images:s,imageName:a})=>{const o=N(),l=d.useRef(null),r=d.useRef(null),[n,x]=d.useState(0),m=c=>{r.current&&r.current.slideTo(c)};if(d.useEffect(()=>{x(0),l.current?.scrollTo(0,0),r.current?.slideTo(0)},[o.pathname]),s.length!=0)return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm print:hidden",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("p",{className:"text-sm font-semibold text-slate-700",children:a?decodeURIComponent(s[n].split("/").pop()??"").split("-")[0]:`${t} 사진 ${n+1}`}),e.jsxs("span",{className:"rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-400",children:[n+1," / ",s.length]})]}),e.jsx("div",{className:"overflow-hidden rounded-xl bg-slate-50",children:e.jsx(z,{modules:[X],spaceBetween:20,slidesPerView:1,navigation:!0,onSwiper:c=>r.current=c,onSlideChange:c=>x(c.activeIndex),className:"aspect-[1.5] w-full md:aspect-[2]",children:s.map((c,p)=>e.jsx(q,{className:"flex items-center justify-center",children:e.jsx("img",{className:"h-full w-full object-contain",src:c,alt:`Slide ${p}`})},p))})}),e.jsx("div",{ref:l,className:"slider-scrollbar flex w-full gap-2 overflow-x-auto pb-1",children:s.map((c,p)=>e.jsx("button",{onClick:()=>m(p),className:`shrink-0 overflow-hidden rounded-lg border-2 transition-all ${n===p?"border-purple-400 opacity-100 shadow-sm":"border-transparent opacity-50 hover:opacity-80"}`,children:e.jsx("img",{className:"h-10 w-10 object-contain md:h-20 md:w-20",src:c,alt:`Select ${p}`})},p))})]}),e.jsxs("div",{className:"hidden print:block",children:[e.jsx("div",{className:"mb-2 text-center text-sm text-slate-500",children:`${t?t+" ":""}사진 (${s.length}장)`}),e.jsx("div",{className:"flex flex-wrap justify-center gap-4",children:s.map((c,p)=>e.jsx("img",{className:"max-h-50 rounded-lg object-contain",src:c,alt:`${t?t+" ":""}사진 ${p+1}`},p))})]})]})},Ve=({src:t,alt:s,className:a=""})=>{const[o,l]=d.useState(null);return d.useEffect(()=>{fetch(t).then(r=>r.text()).then(r=>{r.includes("<svg")&&l(r)}).catch(()=>{})},[t]),o?e.jsx("div",{className:`[&>svg]:h-auto [&>svg]:w-full ${a}`,role:"img","aria-label":s,dangerouslySetInnerHTML:{__html:o}}):e.jsx("img",{src:t,alt:s,className:a})},b=({caption:t,title:s})=>e.jsxs("div",{className:"print:break-before-page",children:[e.jsx("p",{className:"text-xs font-semibold tracking-widest text-purple-400 uppercase",children:t}),e.jsx("h1",{className:"mt-1 text-2xl font-bold text-slate-800 md:text-4xl",children:s})]}),u=({children:t})=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("h2",{className:"text-xl font-bold text-slate-700",children:t}),e.jsx("div",{className:"h-px flex-1 bg-slate-200"})]}),h=({children:t,className:s=""})=>e.jsx("div",{className:`rounded-2xl border border-slate-200 bg-white shadow-sm ${s}`,children:t}),Qe=({name:t,issuer:s,date:a,score:o})=>e.jsxs("div",{className:"flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-shadow hover:shadow-md",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"font-semibold text-slate-800",children:t}),e.jsx("span",{className:"text-xs text-slate-400",children:s})]}),e.jsxs("div",{className:"flex shrink-0 flex-col items-end gap-1.5",children:[e.jsx("span",{className:"rounded-full border border-blue-200 bg-blue-50 px-3 py-0.5 text-xs font-semibold text-blue-700",children:o}),e.jsx("span",{className:"text-xs text-slate-400",children:a})]})]}),Ye=t=>t.includes("1등")||t.includes("대상")||t.includes("금")?"border-amber-300 bg-amber-50 text-amber-700":t.includes("2등")||t.includes("최우수")||t.includes("은")?"border-slate-300 bg-slate-50 text-slate-600":t.includes("3등")||t.includes("우수")||t.includes("동")?"border-orange-200 bg-orange-50 text-orange-700":"border-purple-200 bg-purple-50 text-purple-700",ze=({name:t,host:s,date:a,rank:o})=>e.jsxs("div",{className:"flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-shadow hover:shadow-md",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"font-semibold text-slate-800",children:t}),e.jsx("span",{className:"text-xs text-slate-400",children:s})]}),e.jsxs("div",{className:"flex shrink-0 flex-col items-end gap-1.5",children:[e.jsx("span",{className:`rounded-full border px-3 py-0.5 text-xs font-semibold ${Ye(o)}`,children:o}),e.jsx("span",{className:"text-xs text-slate-400",children:a})]})]}),B=()=>e.jsxs("div",{className:"flex flex-col gap-10 pb-10",children:[e.jsx(b,{caption:"Awards",title:"Prizes & Certificates"}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(u,{children:"🏆 수상"}),ee.map((t,s)=>e.jsx(ze,{...t},s))]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(u,{children:"📜 자격증"}),Z.map((t,s)=>e.jsx(Qe,{...t},s))]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(u,{children:"🖼 증명자료"}),e.jsx(T,{images:A("certification"),imageName:!0})]})]}),P=[{type:"고등학교",title:"서울 성보고등학교 졸업",period:"2017.03 ~ 2020.02"},{type:"아르바이트",title:"대치에스에스학원 수학 TA. 수학 질문에 대한 답",period:"2019.01 ~ 2020.10"},{type:"대학교",title:"아주대학교 재학. 1전공 수학과, 복수전공 소프트웨어학과",period:"2020.03 ~ 2026.02"},{type:"군복무",title:"2022년 11월 30일 육군 병장 만기전역",period:"2021.05 ~ 2022.11"},{type:"아르바이트",title:"CU관악두산점",period:"2022.12 ~ 2023.02"},{type:"아르바이트",title:"광교에듀플렉스 수학 튜터. 수학 진도를 나가며 질문에 대한 답",period:"2023.07 ~ 2024.02"},{type:"대회",title:"제 3회 산업수학 프로그래밍 경진대회 2등",period:"2023.12 ~ 2023.12"},{type:"동아리 활동",title:"2024년 아주대학교 수학과 소학회 MiC 회장",period:"2024.01 ~ 2024.12"},{type:"대회",title:"2024 아주대학교 프로그래밍 경진대회 Div.2 대상",period:"2024.05 ~ 2024.05"},{type:"대회",title:"2024 ICPC Seoul Regional 예선",period:"2024.10 ~ 2024.10"},{type:"대회",title:"2024 아주대학교 프로그래밍 경진대회 Extra",period:"2024.12 ~ 2024.12"},{type:"아르바이트",title:"키코랩스 코딩 트레이너. 초중학생을 대상으로 코딩 기초와 심화에 대한 수업",period:"2025.01 ~ 2025.07"},{type:"대회",title:"2025 아주대학교 해커톤 (아주톤) 장려상",period:"2025.05 ~ 2025.05"},{type:"부트캠프",title:"네이버 부스트캠프 10기 베이직 수료",period:"2025.06 ~ 2025.07"},{type:"부트캠프",title:"네이버 부스트캠프 10기 챌린지 수료",period:"2025.07 ~ 2025.08"},{type:"부트캠프",title:"네이버 부스트캠프 10기 멤버십 수료",period:"2025.08 ~ 2026.02"}].sort((t,s)=>{const[a]=t.period.split(" ~ "),[o]=s.period.split(" ~ ");return new Date(a).getTime()-new Date(o).getTime()}),C=[...new Set(P.map(t=>t.type))],O={대학교:"border-purple-200 bg-purple-50 text-purple-700",고등학교:"border-purple-200 bg-purple-50 text-purple-700",부트캠프:"border-emerald-200 bg-emerald-50 text-emerald-700",대회:"border-amber-200 bg-amber-50 text-amber-700","동아리 활동":"border-blue-200 bg-blue-50 text-blue-700",아르바이트:"border-slate-200 bg-slate-50 text-slate-700",군복무:"border-rose-200 bg-rose-50 text-rose-700"},Xe={대학교:"bg-purple-400",고등학교:"bg-purple-400",부트캠프:"bg-emerald-400",대회:"bg-amber-400","동아리 활동":"bg-blue-400",아르바이트:"bg-slate-400",군복무:"bg-rose-400"},qe=({item:t,isLast:s})=>{const a=O[t.type]??"border-slate-200 bg-slate-50 text-slate-600",o=Xe[t.type]??"bg-slate-300";return e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:`mt-1 h-3 w-3 shrink-0 rounded-full ring-2 ring-white ${o}`}),!s&&e.jsx("div",{className:"mt-1 w-px flex-1 bg-slate-200"})]}),e.jsxs("div",{className:"mb-4 flex flex-1 items-start justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm",children:[e.jsxs("div",{className:"flex flex-col gap-0.5",children:[e.jsx("span",{className:"font-semibold text-slate-800",children:t.title}),e.jsx("span",{className:`mt-1 w-fit rounded-full border px-2.5 py-0.5 text-xs font-medium ${a}`,children:t.type})]}),e.jsx("span",{className:"shrink-0 text-xs text-slate-400",children:t.period})]})]})},Ze=({items:t})=>t.length===0?e.jsxs("div",{className:"flex flex-col items-center gap-2 py-12 text-center",children:[e.jsx("span",{className:"text-2xl",children:"🔍"}),e.jsx("p",{className:"text-sm font-medium text-slate-400",children:"해당 유형의 경력이 없습니다."})]}):e.jsx("div",{children:t.map((s,a)=>e.jsx(qe,{item:s,isLast:a===t.length-1},a))}),R=()=>{const[t,s]=d.useState(new Set(C)),a=P.filter(l=>t.has(l.type)),o=l=>{s(r=>{const n=new Set(r);return n.has(l)?n.delete(l):n.add(l),n})};return e.jsxs("div",{className:"flex flex-col gap-8 pb-10",children:[e.jsx(b,{caption:"Timeline",title:"Careers"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:C.map(l=>{const r=t.has(l),n=O[l];return e.jsx("button",{onClick:()=>o(l),className:`rounded-full border px-3.5 py-1 text-xs font-medium transition-all duration-200 ${r?n+" shadow-sm":"border-slate-100 bg-white text-slate-300 hover:border-slate-300 hover:text-slate-700"}`,children:l},l)})}),e.jsx(Ze,{items:a})]})},et="/portfolio/assets/profile-CgLKhetz.png",g={BAEKJOON_PYTHON:"https://www.acmicpc.net/user/chany0207",BAEKJOON_JAVA:"https://www.acmicpc.net/user/mcj0207",BAEKJOON_CLANG:"https://www.acmicpc.net/user/chany8592",BAEKJOON_CPP:"https://www.acmicpc.net/user/mcj8592",BAEKJOON_PYTHON_TIER:"https://mazassumnida.wtf/api/v2/generate_badge?boj=chany0207",BAEKJOON_JAVA_TIER:"https://mazassumnida.wtf/api/v2/generate_badge?boj=mcj0207",BAEKJOON_CLANG_TIER:"https://mazassumnida.wtf/api/v2/generate_badge?boj=chany8592",BAEKJOON_CPP_TIER:"https://mazassumnida.wtf/api/v2/generate_badge?boj=mcj8592",GITHUB:"https://github.com/MinChanJu",GITHUB_STREAK:"https://ghchart.rshah.org/MinChanJu",GITHUB_STATS:"https://github-profile-summary-cards.vercel.app/api/cards/stats?username=MinChanJu&theme=buefy",GITHUB_TOP_LANGS:"https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=MinChanJu&theme=buefy",GITHUB_SUMMARY:"https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=MinChanJu&theme=buefy"},tt=["저는 대학 입학 후 처음 프로그래밍을 접했고, 코드가 정상적으로 실행될 때의 성취감에 매료되었습니다. 이후 소프트웨어학과를 복수전공하며 알고리즘 문제 해결에 흥미를 느껴 꾸준히 학습한 끝에 solved.ac P5(상위 약 4%) 티어를 달성하였습니다. 또한, 2023 아주대학교 산업수학 프로그래밍 경진대회 2등, 2024 아주대학교 프로그래밍 경진대회(APC) Div.2 대상(1등)을 수상하며 실력을 인정받았습니다.","2024년에는 수학과 소학회 MiC의 회장을 맡아 프로그래밍 멘토링과 코딩 대회를 기획·운영하며 교육 방식과 리더십을 배웠습니다. 특히, 더 나은 학습 환경을 제공하기 위해 직접 코딩 대회 사이트를 개발하며 백엔드(Spring Boot), 프론트엔드(React), 데이터베이스(Supabase)를 활용하며 실무적인 개발 경험을 쌓을 수 있었습니다. 그렇게 저는 개발자의 꿈을 향해 한 걸음 다가갔다고 생각합니다.","다양한 기술에 대한 호기심으로 프론트엔드(React, TypeScript), 백엔드(Spring Boot, Django), 모바일 앱(Flutter), 게임 개발(Unity) 등 폭넓은 경험을 쌓았습니다. 방학마다 독학으로 앱과 웹사이트를 개발하며 문제 해결 능력을 키웠고, 끈기와 논리적 사고력을 기를 수 있었습니다.","저는 새로운 것을 배우는 과정에서 끈기 있게 문제를 해결하는 것이 저만의 강점이라고 생각합니다. 앞으로도 새로운 도전에 적극적으로 나서며, 팀원들과 협력하여 최적의 솔루션을 찾아가는 개발자가 되고 싶습니다."],st=[{label:"이름",value:"주민찬"},{label:"생년월일",value:"2002.02.07"},{label:"전화번호",value:"010-8592-7570"},{label:"이메일",value:"mcj00220077@gmail.com"},{label:"주소",value:"경기도 수원시 영통구"}],at=[{label:"학교",value:"아주대학교"},{label:"입학",value:"2020.03"},{label:"졸업(예정)",value:"2026.08"},{label:"1전공",value:"수학과"},{label:"복수전공",value:"소프트웨어학과"},{label:"학기",value:"4-2 (이수, 2026.02 기준)"}],E=({rows:t})=>e.jsx("div",{className:"flex flex-col divide-y divide-slate-100",children:t.map(({label:s,value:a})=>e.jsxs("div",{className:"flex items-baseline gap-3 py-2",children:[e.jsx("span",{className:"w-24 shrink-0 text-xs font-semibold tracking-wider text-slate-400 uppercase",children:s}),e.jsx("span",{className:"text-sm text-slate-700",children:a})]},s))}),D=()=>e.jsxs("div",{className:"flex flex-col gap-10 pb-10",children:[e.jsx(b,{caption:"About Me",title:e.jsxs("div",{className:"mt-5 flex items-center justify-start gap-5",children:[e.jsx("img",{className:"w-40 rounded-2xl border",src:et,alt:"프로필 사진"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("div",{children:"안녕하세요,"}),e.jsx("div",{children:"주니어 개발자 주민찬입니다."})]})]})}),e.jsx(h,{className:"flex flex-col gap-4 px-6 py-5",children:tt.map((t,s)=>e.jsx("p",{className:"text-sm leading-relaxed whitespace-pre-wrap text-slate-600",children:"	"+t},s))}),e.jsxs("div",{className:"grid grid-cols-1 gap-10 md:grid-cols-2",children:[e.jsxs(h,{className:"flex flex-col gap-3 px-5 py-4",children:[e.jsx(u,{children:"📋 Info"}),e.jsx(E,{rows:[...st,{label:"GitHub",value:e.jsx(v,{href:g.GITHUB})}]})]}),e.jsxs(h,{className:"flex flex-col gap-3 px-5 py-4",children:[e.jsx(u,{children:"🎓 학력"}),e.jsx(E,{rows:at})]})]})]}),ot=[{label:"Python",href:g.BAEKJOON_PYTHON,tier:g.BAEKJOON_PYTHON_TIER},{label:"JAVA",href:g.BAEKJOON_JAVA,tier:g.BAEKJOON_JAVA_TIER},{label:"C언어",href:g.BAEKJOON_CLANG,tier:g.BAEKJOON_CLANG_TIER},{label:"C++",href:g.BAEKJOON_CPP,tier:g.BAEKJOON_CPP_TIER}],I=()=>e.jsxs("div",{className:"flex flex-col gap-10 pb-10",children:[e.jsx(b,{caption:"Contact",title:"Links"}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(u,{children:"🐙 GitHub"}),e.jsxs(h,{className:"px-5 py-4",children:[e.jsx(v,{href:g.GITHUB}),e.jsxs("div",{className:"mx-auto flex max-w-2xl flex-col gap-3",children:[e.jsx("img",{src:g.GITHUB_SUMMARY,alt:"GitHub Summary",className:"w-full rounded-lg"}),e.jsxs("div",{className:"flex w-full",children:[e.jsx("img",{src:g.GITHUB_TOP_LANGS,alt:"Top Languages",className:"min-w-0 flex-1 rounded-lg"}),e.jsx("img",{src:g.GITHUB_STATS,alt:"GitHub Stats",className:"min-w-0 flex-1 rounded-lg"})]}),e.jsx("img",{src:g.GITHUB_STREAK,alt:"GitHub Streak",className:"w-full rounded-lg"})]})]})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(u,{children:"⚔️ BAEKJOON"}),e.jsx("div",{className:"grid grid-cols-2 gap-3",children:ot.map(({label:t,href:s,tier:a})=>e.jsxs("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"flex flex-col items-start gap-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md",children:[e.jsx("span",{className:"rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs font-semibold text-slate-600",children:t}),e.jsx(Ve,{src:a,alt:`BAEKJOON ${t} tier`,className:"w-full"})]},t))})]})]}),f=[{project:"Moyo - 2D 가상 공간 기반 협업 플랫폼",period:"2025.12 ~ 2026.02 (2개월, 네이버 부스트캠프 10기에서 진행)",team:"4명",role:"Full Stack - 50%",skills:"React, TypeScript, NestJS, MySQL, TypeORM",site:{url:"https://www.moyo.asia",favicon:"https://www.moyo.asia/favicon.svg"},links:[{label:"소스코드",url:"https://github.com/boostcampwm2025/web13-isj-dle"}],description:`## 🏠 프로젝트 개요

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
- 리팩토링 및 릴리즈 주도`,name:"moyo"},{project:"강의실 예약 사이트",period:"2025.05 ~ 2025.05 (1일, 아주대학교 해커톤에서 진행)",team:"4명 (FrontEnd)",role:"FrontEnd - 60%",skills:"React, TypeScript",links:[{label:"소스코드",url:"https://github.com/MinChanJu/classroom-reservation"}],description:`## 🏫 프로젝트 개요

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
- 디바이스별 화면 최적화`,name:"ajou_ton"},{project:"코딩대회 사이트",period:"2024.11 ~ 2025.01 (약 3개월)",team:"1명 (총괄)",role:"Full Stack - 100%",skills:"Spring Boot, Java, React, TypeScript, SupaBase, PostgreSQL",site:{url:"https://minchanju.github.io/MiC",favicon:"https://minchanju.github.io/MiC/logo.jpeg"},links:[{label:"백엔드",url:"https://github.com/MinChanJu/mic-spring"},{label:"프론트엔드",url:"https://github.com/MinChanJu/MiC"}],description:`## 💻 프로젝트 개요

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
- 코드 실행 및 비동기 채점 파이프라인 구축`,name:"coding_contest"},{project:"포트폴리오",period:"2024.12 ~ 2025.01 (약 1주일, 주기적으로 업데이트)",team:"1명 (총괄)",role:"FrontEnd - 100%",skills:"React, TypeScript",site:{url:"https://minchanju.github.io/portfolio",favicon:"https://minchanju.github.io/portfolio/favicon.svg"},links:[{label:"소스코드",url:"https://github.com/MinChanJu/portfolio"}],description:`## 🗂 프로젝트 개요

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
- **지속적 업데이트**: 새 프로젝트·경력 추가 시 업데이트`,name:"portfolio"},{project:"데이팅 앱",period:"2025.01 ~ 2025.02 (잠시 중단)",team:"2명 (팀장)",role:"Full Stack - 70%",skills:"Spring Boot, Java, Flutter, Dart, SupaBase, PostgreSQL",links:[{label:"소스코드",url:"https://github.com/MinChanJu/BuckTanley"}],description:`## 💘 프로젝트 개요

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

> ⚠️ 현재 개발 중인 프로젝트입니다.`,name:"dating_app"}],_=({label:t,children:s})=>e.jsxs("div",{className:"flex items-baseline gap-3",children:[e.jsx("span",{className:"w-20 shrink-0 text-xs font-semibold tracking-widest text-slate-400 uppercase",children:t}),e.jsx("span",{className:"text-sm text-slate-700",children:s})]}),k=({index:t})=>{const{projectId:s}=G();let a;if(t==null?a=Number(s)-1:a=t,Number.isNaN(a))return e.jsx(w,{subMessage:"index가 숫자가 아닙니다."});if(a<0||a>=f.length)return e.jsx(w,{subMessage:"index가 프로젝트 범위를 벗어났습니다."});const o=f[a];return e.jsxs("div",{className:"flex flex-col gap-8 pb-10",children:[e.jsx(b,{caption:`Project ${a+1}`,title:e.jsxs("div",{className:"mt-5 flex flex-row items-center gap-2",children:[o.site?.favicon&&e.jsx("img",{src:o.site.favicon,alt:"favicon",className:"h-6 w-6 md:h-10 md:w-10"}),e.jsx("div",{children:o.project})]})}),e.jsxs(h,{className:"flex flex-col gap-3 bg-slate-50 px-6 py-5",children:[e.jsx(u,{children:"📌 프로젝트 정보"}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(_,{label:"기간",children:o.period}),e.jsx(_,{label:"팀구성",children:o.team}),e.jsx(_,{label:"역할",children:e.jsx("span",{className:"whitespace-pre-wrap",children:o.role})}),e.jsx(_,{label:"기술",children:e.jsx("div",{className:"flex flex-wrap gap-1.5",children:o.skills.split(",").map((l,r)=>e.jsx("span",{className:"rounded-full border border-purple-200 bg-purple-50 px-2.5 py-0.5 text-xs font-medium text-purple-700",children:l.trim()},r))})})]})]}),(o.links||o.site)&&e.jsxs(h,{className:"flex flex-col gap-3 bg-slate-50 px-6 py-5",children:[e.jsx(u,{children:"🔗 Links"}),e.jsxs("div",{className:"flex flex-col gap-3",children:[o.links?.map(({label:l,url:r},n)=>e.jsx(_,{label:l,children:e.jsx(v,{href:r})},n)),o.site&&e.jsx(_,{label:"사이트",children:e.jsx(v,{href:o.site.url})})]})]}),e.jsx(h,{className:"prose prose-slate prose-sm max-w-none px-6 py-5",children:e.jsx(H,{remarkPlugins:[K],rehypePlugins:[F],children:o.description})}),e.jsx(T,{title:o.project,images:A(o.name)})]})},lt=[{name:"Python",level:8},{name:"JAVA",level:8},{name:"C언어",level:6},{name:"C++",level:7},{name:"C#",level:6},{name:"Dart",level:6},{name:"JavaScript",level:8},{name:"TypeScript",level:8},{name:"HTML",level:8},{name:"CSS",level:7},{name:"SQL",level:6}].sort((t,s)=>s.level-t.level),rt=[{name:"Spring",level:7},{name:"Flutter",level:7},{name:"React",level:7},{name:"Unity",level:5},{name:"Django",level:4},{name:"NestJS",level:7},{name:"NextJS",level:5}].sort((t,s)=>s.level-t.level),nt=[{name:"Git",level:8},{name:"Visual Studio Code",level:8},{name:"Supabase",level:5},{name:"IntelliJ",level:6},{name:"PyCharm",level:6}].sort((t,s)=>s.level-t.level),it=[{color:"bg-emerald-400",label:"숙련",range:"8+"},{color:"bg-blue-400",label:"중급",range:"6~7"},{color:"bg-slate-300",label:"기초",range:"~5"}],ct=t=>t>=8?"border-emerald-200 bg-emerald-50 text-emerald-800":t>=6?"border-blue-200 bg-blue-50 text-blue-800":"border-slate-200 bg-slate-50 text-slate-500",pt=t=>t>=8?"bg-emerald-400":t>=6?"bg-blue-400":"bg-slate-300",dt=({name:t,level:s})=>e.jsxs("span",{className:`inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm font-medium shadow-sm ${ct(s)}`,children:[e.jsx("span",{className:`h-1.5 w-1.5 rounded-full ${pt(s)}`}),t,e.jsxs("span",{className:"text-xs font-normal opacity-40",children:[s,"/10"]})]}),S=({title:t,skills:s})=>e.jsxs(h,{className:"flex flex-col gap-3 px-6 py-5",children:[e.jsx(u,{children:t}),e.jsx("div",{className:"flex flex-wrap gap-2",children:s.map((a,o)=>e.jsx(dt,{...a},o))})]}),L=()=>e.jsxs("div",{className:"flex flex-col gap-10 pb-10",children:[e.jsx(b,{caption:"Tech Stack",title:"Skill Set"}),e.jsx(S,{title:"🖥 언어",skills:lt}),e.jsx(S,{title:"📦 프레임워크 및 라이브러리",skills:rt}),e.jsx(S,{title:"🔧 도구",skills:nt}),e.jsx("div",{className:"flex items-center gap-5",children:it.map(({color:t,label:s,range:a})=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:`h-2.5 w-2.5 rounded-full ${t}`}),e.jsxs("span",{className:"text-xs text-slate-500",children:[s," ",e.jsxs("span",{className:"text-slate-400",children:["(",a,")"]})]})]},s))})]}),J=()=>e.jsxs("div",{className:"flex w-full flex-col gap-10",children:[e.jsx(D,{}),e.jsx(L,{}),f.map((t,s)=>e.jsx(k,{index:s},s)),e.jsx(B,{}),e.jsx(R,{}),e.jsx(I,{})]}),i={HOME:"/",INTRO:"/intro",SKILL:"/skill",AWARD:"/award",CAREER:"/career",LINK:"/link",PROJECT:"/project/:projectId",PROJECT_ID:t=>`/project/${t}`,NOT_FOUND:"*"},mt=()=>e.jsx("footer",{className:"w-full border-t border-gray-200 bg-white/80 py-8 backdrop-blur-sm",children:e.jsxs("div",{className:"flex flex-col items-center gap-1.5",children:[e.jsx("span",{className:"bg-linear-to-r from-violet-500 via-sky-500 to-teal-500 bg-clip-text text-sm font-semibold tracking-wide text-transparent",children:"포트폴리오를 방문해 주셔서 감사합니다!"}),e.jsx("p",{className:"text-[11px] tracking-widest text-gray-400",children:"좋은 하루 되세요 😊"})]})}),gt=()=>{const t=$();return{goToPage:s=>t(s),goToHome:()=>t(i.HOME),goToIntro:()=>t(i.INTRO),goToSkill:()=>t(i.SKILL),goToProjectId:s=>t(i.PROJECT_ID(s)),goToAward:()=>t(i.AWARD),goToCareer:()=>t(i.CAREER),goToLink:()=>t(i.LINK)}},xt=()=>{const{goToHome:t,goToIntro:s,goToSkill:a,goToProjectId:o,goToAward:l,goToCareer:r,goToLink:n}=gt(),x=N(),m=y=>x.pathname===y,c=x.pathname.startsWith("/project"),p=y=>`text-sm font-medium transition-colors duration-200 ${m(y)?"text-violet-600":"text-gray-500 hover:text-gray-900"}`,M=[{label:"전체보기",action:t,path:i.HOME},{label:"자기소개",action:s,path:i.INTRO},{label:"기술스택",action:a,path:i.SKILL},{label:"수상/자격증",action:l,path:i.AWARD},{label:"경력",action:r,path:i.CAREER},{label:"링크",action:n,path:i.LINK}];return{goToHome:t,goToProjectId:o,navItems:M,isActive:m,isProjectActive:c,navItemClass:p}},ut=({isOpen:t,onClose:s,isActive:a,isProjectActive:o,navItems:l,onProjectNavigate:r})=>{const[n,x]=d.useState(!1);return t?e.jsx("div",{className:"border-t border-gray-100 bg-white px-6 py-4 md:hidden",children:e.jsxs("div",{className:"flex flex-col gap-3",children:[l.map(({label:m,action:c,path:p})=>e.jsx("button",{onClick:()=>{c(),s()},className:`text-left text-sm font-medium ${a(p)?"text-violet-600":"text-gray-600"}`,children:m},p)),e.jsxs("div",{children:[e.jsxs("button",{onClick:()=>x(m=>!m),className:`text-left text-sm font-medium ${o?"text-violet-600":"text-gray-600"}`,children:["프로젝트 ",n?"▲":"▼"]}),n&&e.jsx("div",{className:"mt-2 ml-3 flex flex-col gap-2",children:f.map((m,c)=>e.jsxs("button",{onClick:()=>{r(c+1),s(),x(!1)},className:"text-left text-xs text-gray-500 hover:text-violet-600",children:[c+1,". ",m.project]},c))})]})]})}):null},ht=()=>{const[t,s]=d.useState(!1),a=d.useRef(null);return d.useEffect(()=>{const o=l=>{a.current?.offsetParent&&(a.current.contains(l.target)||s(!1))};return document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o)},[]),{projectOpen:t,setProjectOpen:s,dropdownRef:a}},ft=({isProjectActive:t,onNavigate:s})=>{const{projectOpen:a,setProjectOpen:o,dropdownRef:l}=ht();return e.jsxs("div",{className:"relative",ref:l,children:[e.jsxs("button",{onClick:()=>o(r=>!r),className:`text-sm font-medium transition-colors duration-200 ${t?"text-violet-600":"text-gray-500 hover:text-gray-900"}`,children:["프로젝트 ",a?"▲":"▼"]}),a&&e.jsx("div",{className:"absolute top-full right-0 mt-2 w-72 rounded-xl border border-gray-100 bg-white py-2 shadow-xl",children:f.map((r,n)=>e.jsxs("button",{onClick:()=>{s(n+1),o(!1)},className:"w-full px-4 py-2.5 text-left text-sm text-gray-600 transition-colors hover:bg-violet-50 hover:text-violet-600",children:[n+1,". ",r.project]},n))})]})},_t=()=>{const{goToHome:t,goToProjectId:s,navItems:a,isActive:o,isProjectActive:l,navItemClass:r}=xt(),[n,x]=d.useState(!1);return e.jsxs("header",{className:"sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm",children:[e.jsxs("div",{className:"mx-auto flex h-14 max-w-7xl items-center justify-between px-6",children:[e.jsx("button",{onClick:t,className:"bg-linear-to-r from-violet-500 via-sky-500 to-teal-500 bg-clip-text text-base font-bold tracking-[0.2em] text-transparent",children:"MIN CHAN JU"}),e.jsxs("nav",{className:"hidden items-center gap-6 md:flex",children:[a.map(({label:m,action:c,path:p})=>e.jsx("button",{onClick:c,className:r(p),children:m},p)),e.jsx(ft,{isProjectActive:l,onNavigate:s}),e.jsx("button",{onClick:()=>window.print(),className:"rounded-full border border-slate-200 px-3.5 py-1 text-sm font-medium text-slate-500 transition-colors duration-200 hover:border-slate-300 hover:text-slate-700",children:"PDF"})]}),e.jsxs("button",{className:"flex flex-col gap-1.5 md:hidden",onClick:()=>x(m=>!m),children:[e.jsx("span",{className:`block h-0.5 w-6 bg-gray-600 transition-transform duration-200 ${n?"translate-y-2 rotate-45":""}`}),e.jsx("span",{className:`block h-0.5 w-6 bg-gray-600 transition-opacity duration-200 ${n?"opacity-0":""}`}),e.jsx("span",{className:`block h-0.5 w-6 bg-gray-600 transition-transform duration-200 ${n?"-translate-y-2 -rotate-45":""}`})]})]}),e.jsx(ut,{isOpen:n,onClose:()=>x(!1),isActive:o,isProjectActive:l,navItems:a,onProjectNavigate:s})]})},bt=t=>t.split("/").filter(Boolean).pop()||"",jt=()=>{const t=N();return d.useEffect(()=>{const s=t.pathname,a=bt(s);let l={[i.HOME]:"홈",[i.INTRO]:"자기 소개",[i.SKILL]:"기술 스택",[i.AWARD]:"수상 및 자격증",[i.CAREER]:"경력",[i.LINK]:"링크"}[s]||"오류";if(U(i.PROJECT,s)){const r=Number(a);!Number.isNaN(r)&&1<=r&&r<=f.length?l=f[r-1].project:l="프로젝트 오류"}document.title=l+" | MinChanJu"},[t.pathname]),null},vt=()=>{const t=N();return jt(),d.useEffect(()=>{window.scrollTo(0,0)},[t.pathname]),d.useEffect(()=>{const s=document.title,a=()=>{document.title="MinChanJu's Portfolio"},o=()=>{document.title=s};return window.addEventListener("beforeprint",a),window.addEventListener("afterprint",o),()=>{window.removeEventListener("beforeprint",a),window.removeEventListener("afterprint",o)}},[]),e.jsxs("div",{className:"flex min-h-screen flex-col bg-gray-50",children:[e.jsx(_t,{}),e.jsx("main",{id:"screen-content",className:"mx-auto w-full max-w-5xl flex-1 px-10 py-8 print:hidden",children:e.jsx(W,{})}),e.jsx(mt,{}),e.jsx("div",{id:"print-content",className:"hidden bg-white print:block",children:e.jsx(J,{})})]})},Nt=V([{element:e.jsx(vt,{}),children:[{path:i.HOME,element:e.jsx(J,{})},{path:i.INTRO,element:e.jsx(D,{})},{path:i.SKILL,element:e.jsx(L,{})},{path:i.PROJECT,element:e.jsx(k,{})},{path:i.AWARD,element:e.jsx(B,{})},{path:i.CAREER,element:e.jsx(R,{})},{path:i.LINK,element:e.jsx(I,{})},{path:i.NOT_FOUND,element:e.jsx(w,{})}]}],{basename:"/portfolio"}),yt=()=>e.jsx(Q,{router:Nt});Y.createRoot(document.getElementById("root")).render(e.jsx(d.StrictMode,{children:e.jsx(yt,{})}));
