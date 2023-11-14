import{M as A,k as f,N as M,t as j,Q as R,m as G,b as I,j as e,o as w,p as L,g as P,s as h,n as D,T as s,u as $,a as N,G as o,B as g,P as z,S as E}from"./index-e500a847.js";import{D as y}from"./Divider-d7be6026.js";const Q=A(),U=Q,K=["className","component","disableGutters","fixed","maxWidth","classes"],_=M(),F=U("div",{name:"MuiContainer",slot:"Root",overridesResolver:(a,r)=>{const{ownerState:t}=a;return[r.root,r[`maxWidth${j(String(t.maxWidth))}`],t.fixed&&r.fixed,t.disableGutters&&r.disableGutters]}}),H=a=>R({props:a,name:"MuiContainer",defaultTheme:_}),O=(a,r)=>{const t=l=>P(r,l),{classes:c,fixed:x,disableGutters:b,maxWidth:i}=a,n={root:["root",i&&`maxWidth${j(String(i))}`,x&&"fixed",b&&"disableGutters"]};return L(n,t,c)};function Y(a={}){const{createStyledComponent:r=F,useThemeProps:t=H,componentName:c="MuiContainer"}=a,x=r(({theme:i,ownerState:n})=>f({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&{paddingLeft:i.spacing(2),paddingRight:i.spacing(2),[i.breakpoints.up("sm")]:{paddingLeft:i.spacing(3),paddingRight:i.spacing(3)}}),({theme:i,ownerState:n})=>n.fixed&&Object.keys(i.breakpoints.values).reduce((l,d)=>{const m=d,p=i.breakpoints.values[m];return p!==0&&(l[i.breakpoints.up(m)]={maxWidth:`${p}${i.breakpoints.unit}`}),l},{}),({theme:i,ownerState:n})=>f({},n.maxWidth==="xs"&&{[i.breakpoints.up("xs")]:{maxWidth:Math.max(i.breakpoints.values.xs,444)}},n.maxWidth&&n.maxWidth!=="xs"&&{[i.breakpoints.up(n.maxWidth)]:{maxWidth:`${i.breakpoints.values[n.maxWidth]}${i.breakpoints.unit}`}}));return G.forwardRef(function(n,l){const d=t(n),{className:m,component:p="div",disableGutters:B=!1,fixed:S=!1,maxWidth:v="lg"}=d,k=I(d,K),C=f({},d,{component:p,disableGutters:B,fixed:S,maxWidth:v}),T=O(C,c);return e.jsx(x,f({as:p,ownerState:C,className:w(T.root,m),ref:l},k))})}const V=Y({createStyledComponent:h("div",{name:"MuiContainer",slot:"Root",overridesResolver:(a,r)=>{const{ownerState:t}=a;return[r.root,r[`maxWidth${j(String(t.maxWidth))}`],t.fixed&&r.fixed,t.disableGutters&&r.disableGutters]}}),useThemeProps:a=>D({props:a,name:"MuiContainer"})}),X=V,q=[{time:"10:00 - 10:10",program:"개회사",presenter:"한정현 사업단장",affiliation:"고려대 컴퓨터학과",chair:"김현우 교수님",location:"강당 (B112호)"},{time:"10:10 - 10:40",program:"AI Research in the Era of Large Language Models (LLMs)",presenter:"윤상두 소장",affiliation:"네이버 클라우드",chair:"",location:"강당 (B112호)"},{time:"10:40 - 11:00",program:"거대언어모델 기반 신약개발 코파일럿",presenter:"강재우 교수",affiliation:"고려대 컴퓨터학과",chair:"",location:"강당 (B112호)"},{time:"11:00 - 11:10",program:"Break (전시실 및 아뜨리움)",presenter:"",affiliation:"",chair:"",location:""},{time:"11:10 - 11:40",program:"AI를 통해 만들어가는 더 나은 세상",presenter:"임우형 상무",affiliation:"LG AI Research",chair:"오학주 교수님",location:"강당 (B112호)"},{time:"11:40 - 12:00",program:"Multi-modal Foundation Models for Video QA and KGQA",presenter:"김현우 교수",affiliation:"고려대 컴퓨터학과",chair:"",location:"강당 (B112호)"},{time:"12:00 - 12:20",program:"Stealing Neural Network Architecture Through SW-Based Side-Channel",presenter:"허준범 교수",affiliation:"고려대 컴퓨터학과",chair:"",location:"강당 (B112호)"},{time:"12:20 - 13:30",program:"점심 (애기능생활관) 및 포스터 세션 (전시실 및 아뜨리움)",presenter:"",affiliation:"",chair:"",location:"애기능생활관"},{time:"13:30 - 13:50",program:"ICT명품인재양성사업단 - 산학협력",presenter:"한정현 사업단장",affiliation:"고려대 컴퓨터학과",chair:"김승룡 교수님",location:"강당 (B112호)"},{time:"13:50 - 14:20",program:"SKT A.X LLM",presenter:"김지원 부사장",affiliation:"SKT",chair:"",location:"강당 (B112호)"},{time:"14:20 - 14:30",program:"Break (전시실 및 아뜨리움)",presenter:"",affiliation:"",chair:"",location:""},{time:"14:30 - 15:00",program:"AI & Security in Samsung SDS",presenter:"조지훈 마스터",affiliation:"삼성SDS",chair:"정원기 교수님",location:"강당 (B112호)"},{time:"15:00 - 15:20",program:"AI-driven Software Analysis",presenter:"오학주 교수",affiliation:"고려대 컴퓨터학과",chair:"",location:"강당 (B112호)"},{time:"15:20 - 15:40",program:"Coffee Break 및 포스터 세션 (전시실 및 아뜨리움)",presenter:"",affiliation:"",chair:"",location:"전시실 및 아뜨리움"},{time:"15:40 - 16:10",program:"국방 인공지능 동향과 사례 / AI & Data in Hanwha Systems",presenter:"하윤철 상무 / 김유신 상무",affiliation:"한화시스템",chair:"백승준 교수님",location:"강당 (B112호)"},{time:"16:10 - 16:30",program:"Recent Advances in Biomedical AI",presenter:"정원기 교수",affiliation:"고려대 컴퓨터학과",chair:"",location:"강당 (B112호)"},{time:"16:30 - 16:50",program:"NeRF Under Extreme Conditions",presenter:"김승룡 교수",affiliation:"고려대 컴퓨터학과",chair:"",location:"강당 (B112호)"},{time:"16:50 - 17:00",program:"Break (전시실 및 아뜨리움)",presenter:"",affiliation:"",chair:"",location:""},{time:"17:00 - 17:30",program:"A New Era of Generative AI",presenter:"노병석 리더",affiliation:"카카오브레인",chair:"김진규 교수님",location:"강당 (B112호)"},{time:"17:30 - 17:50",program:"Let AI Make the Most of Your Data for Dental Healthcare",presenter:"백승준 교수",affiliation:"고려대 컴퓨터학과",chair:"",location:"강당 (B112호)"},{time:"17:50 - 18:10",program:"Towards Intelligent, Rational, Safe, Mobile Agents",presenter:"김진규 교수",affiliation:"고려대 컴퓨터학과",chair:"",location:"강당 (B112호)"},{time:"18:10 - 18:20",program:"포스터/데모 시상 및 폐회사",presenter:"한정현 사업단장",affiliation:"고려대 컴퓨터학과",chair:"",location:"강당 (B112호)"}],J=()=>{const a=$("(max-width:600px)"),{palette:r}=N();return e.jsxs(X,{sx:{width:"90vw",maxWidth:"1000px",marginY:8},children:[!a&&e.jsxs(o,{container:!0,spacing:3,py:2,children:[e.jsx(o,{item:!0,xs:2,children:e.jsx(u,{children:"시간"})}),e.jsx(o,{item:!0,xs:7,children:e.jsx(u,{children:"프로그램"})}),e.jsx(o,{item:!0,xs:3,children:e.jsx(u,{children:"연사"})})]}),e.jsx(y,{sx:{borderWidth:1,backgroundColor:r.secondary.main}}),q.map((t,c)=>e.jsxs(g,{children:[a?e.jsxs(o,{container:!0,alignContent:"center",alignItems:"center",py:1,children:[e.jsx(o,{item:!0,xs:4,display:"flex",justifyContent:"center",children:e.jsx(s,{variant:"caption",fontWeight:"bold",children:t.time})}),e.jsxs(o,{item:!0,xs:8,children:[e.jsx(o,{item:!0,children:e.jsx(s,{variant:"body2",fontWeight:"bold",color:t.presenter?"undefined":r.secondary.main,children:t.program})}),t.presenter&&e.jsxs(g,{display:"flex",alignItems:"baseline",mt:1,children:[e.jsx(s,{variant:"caption",fontWeight:600,color:r.text.disabled,children:t.presenter}),t.affiliation&&t.affiliation!=="고려대 컴퓨터학과"&&e.jsx(s,{variant:"caption",fontWeight:500,color:r.secondary.main,ml:1,children:t.affiliation})]})]})]}):e.jsxs(o,{container:!0,spacing:3,alignContent:"center",children:[e.jsx(o,{item:!0,xs:2,children:e.jsx(W,{children:t.time})}),e.jsx(o,{item:!0,xs:7,alignContent:"center",children:e.jsx(g,{display:"flex",flexDirection:"row",justifyContent:t.presenter?"flex-start":"center",alignContent:"center",children:t.presenter?e.jsx(Z,{children:t.program}):e.jsx(s,{sx:{margin:"1rem 0rem",fontsize:"1rem"},color:"secondary",fontWeight:"bold",textAlign:"center",children:t.program})})}),t.presenter&&e.jsx(o,{item:!0,xs:3,display:"flex",alignItems:"baseline",children:e.jsxs(W,{children:[t.presenter,t.affiliation&&t.affiliation!=="고려대 컴퓨터학과"&&e.jsxs(s,{variant:"caption",fontWeight:600,color:r.secondary.main,ml:1,children:["• ",t.affiliation]})]})})]}),e.jsx(y,{})]},c))]})},u=h(s)`
  font-weight: bold;
  margin-vertical: 1rem;
`,Z=h(s)`
  margin: 1rem 0rem;
  fontsize: 1rem;
  font-weight: 700;
`,W=h(s)`
  margin: 1rem 0rem;
  fontsize: 1rem;
  font-weight: 500;
`,ie=()=>e.jsx(z,{children:e.jsxs(o,{container:!0,sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[e.jsx(E,{title:"PROGRAM"}),e.jsx(J,{})]})});export{ie as default};
