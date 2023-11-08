import{o as A,b as p,p as M,h as f,q as R,r as G,_ as L,j as e,e as w,f as P,g as I,s as j,u as D,B,L as $}from"./index-41c430e3.js";import{T as m}from"./Typography-936ba436.js";import{u as N}from"./useMediaQuery-8a4caa17.js";import{G as n}from"./Grid-448f2e6c.js";import{D as y,P as E,a as z}from"./PageTitle-532cfbf7.js";import{L as U}from"./index-5549cd9f.js";import"./useTheme-2c6374a7.js";const _=A(),Q=_,F=["className","component","disableGutters","fixed","maxWidth","classes"],H=M(),K=Q("div",{name:"MuiContainer",slot:"Root",overridesResolver:(a,r)=>{const{ownerState:i}=a;return[r.root,r[`maxWidth${f(String(i.maxWidth))}`],i.fixed&&r.fixed,i.disableGutters&&r.disableGutters]}}),O=a=>R({props:a,name:"MuiContainer",defaultTheme:H}),Y=(a,r)=>{const i=s=>I(r,s),{classes:x,fixed:h,disableGutters:b,maxWidth:t}=a,o={root:["root",t&&`maxWidth${f(String(t))}`,h&&"fixed",b&&"disableGutters"]};return P(o,i,x)};function q(a={}){const{createStyledComponent:r=K,useThemeProps:i=O,componentName:x="MuiContainer"}=a,h=r(({theme:t,ownerState:o})=>p({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!o.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}}),({theme:t,ownerState:o})=>o.fixed&&Object.keys(t.breakpoints.values).reduce((s,c)=>{const d=c,l=t.breakpoints.values[d];return l!==0&&(s[t.breakpoints.up(d)]={maxWidth:`${l}${t.breakpoints.unit}`}),s},{}),({theme:t,ownerState:o})=>p({},o.maxWidth==="xs"&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},o.maxWidth&&o.maxWidth!=="xs"&&{[t.breakpoints.up(o.maxWidth)]:{maxWidth:`${t.breakpoints.values[o.maxWidth]}${t.breakpoints.unit}`}}));return G.forwardRef(function(o,s){const c=i(o),{className:d,component:l="div",disableGutters:k=!1,fixed:S=!1,maxWidth:W="lg"}=c,v=L(c,F),C=p({},c,{component:l,disableGutters:k,fixed:S,maxWidth:W}),T=Y(C,x);return e.jsx(h,p({as:l,ownerState:C,className:w(T.root,d),ref:s},v))})}const V=q({createStyledComponent:j("div",{name:"MuiContainer",slot:"Root",overridesResolver:(a,r)=>{const{ownerState:i}=a;return[r.root,r[`maxWidth${f(String(i.maxWidth))}`],i.fixed&&r.fixed,i.disableGutters&&r.disableGutters]}}),useThemeProps:a=>D({props:a,name:"MuiContainer"})}),X=V,J=[{time:"10:00 - 10:10",program:"개회사",presenter:"한정현 사업단장",chair:"김현우 교수님",location:"강당 (B112호)"},{time:"10:10 - 10:40",program:"AI Research in the Era of Large Language Models (LLMs)",presenter:"윤상두 소장",chair:"",location:"강당 (B112호)"},{time:"10:40 - 11:00",program:"거대언어모델 기반 신약개발 코파일럿",presenter:"강재우 교수",chair:"",location:"강당 (B112호)"},{time:"11:00 - 11:10",program:"Break (전시실 및 아뜨리움)",presenter:"",chair:"",location:""},{time:"11:10 - 11:40",program:"AI를 통해 만들어가는 더 나은 세상",presenter:"임우형 상무",chair:"오학주 교수님",location:"강당 (B112호)"},{time:"11:40 - 12:00",program:"Multi-modal Foundation Models for Video QA and KGQA",presenter:"김현우 교수",chair:"",location:"강당 (B112호)"},{time:"12:00 - 12:20",program:"Stealing Neural Network Architecture Through SW-Based Side-Channel",presenter:"허준범 교수",chair:"",location:"강당 (B112호)"},{time:"12:20 - 13:30",program:"점심 및 포스터 세션 (애기능생활관)",presenter:"",chair:"",location:"애기능생활관"},{time:"13:30 - 13:50",program:"ICT명품인재양성사업단 - 산학협력",presenter:"한정현 사업단장",chair:"김승룡 교수님",location:"강당 (B112호)"},{time:"13:50 - 14:20",program:"SKT A.X LLM",presenter:"김지원 부사장",chair:"",location:"강당 (B112호)"},{time:"14:20 - 14:30",program:"Break (전시실 및 아뜨리움)",presenter:"",chair:"",location:""},{time:"14:30 - 15:00",program:"AI & Security in Samsung SDS",presenter:"조지훈 마스터",chair:"정원기 교수님",location:"강당 (B112호)"},{time:"15:00 - 15:20",program:"AI-driven Software Analysis",presenter:"오학주 교수",chair:"",location:"강당 (B112호)"},{time:"15:20 - 15:40",program:"Coffee Break 및 포스터 세션 (전시실 및 아뜨리움)",presenter:"",chair:"",location:"전시실 및 아뜨리움"},{time:"15:40 - 16:10",program:"AI in Hanwha Systems",presenter:"하윤철 상무 / 김유신 상무",chair:"백승준 교수님",location:"강당 (B112호)"},{time:"16:10 - 16:30",program:"Recent Advances in Biomedical AI",presenter:"정원기 교수",chair:"",location:"강당 (B112호)"},{time:"16:30 - 16:50",program:"NeRF Under Extreme Conditions",presenter:"김승룡 교수",chair:"",location:"강당 (B112호)"},{time:"16:50 - 17:00",program:"Break (전시실 및 아뜨리움)",presenter:"",chair:"",location:""},{time:"17:00 - 17:30",program:"A New Era of Generative AI",presenter:"노병석 리더",chair:"김진규 교수님",location:"강당 (B112호)"},{time:"17:30 - 17:50",program:"Let AI Make the Most of Your Data for Dental Healthcare",presenter:"백승준 교수",chair:"",location:"강당 (B112호)"},{time:"17:50 - 18:10",program:"Towards Intelligent, Rational, Safe, Mobile Agents",presenter:"김진규 교수",chair:"",location:"강당 (B112호)"},{time:"18:10 - 18:20",program:"포스터/데모 시상 및 폐회사",presenter:"한정현 사업단장",chair:"",location:"강당 (B112호)"}],Z=()=>{const a=N("(max-width:1000px)");return e.jsxs(X,{sx:{width:a?"90vw":"70vw",marginBottom:10},children:[e.jsxs(n,{container:!0,spacing:3,children:[e.jsx(n,{item:!0,xs:2,children:e.jsx(u,{children:"시간"})}),e.jsx(n,{item:!0,xs:7,children:e.jsx(u,{children:"프로그램"})}),e.jsx(n,{item:!0,xs:3,children:e.jsx(u,{children:"연사"})})]}),e.jsx(y,{sx:{borderWidth:1,backgroundColor:"#02306C"}}),J.map((r,i)=>e.jsxs(B,{children:[e.jsxs(n,{container:!0,spacing:3,children:[e.jsx(n,{item:!0,xs:2,children:e.jsx(g,{children:r.time})}),e.jsx(n,{item:!0,xs:7,children:e.jsx(B,{display:"flex",flexDirection:"row",justifyContent:r.presenter?"flex-start":"center",children:r.presenter?e.jsx(g,{children:r.program}):e.jsx(m,{sx:{margin:"1rem 0rem",fontsize:"1rem"},color:"secondary",fontWeight:"bold",children:r.program})})}),r.presenter&&e.jsx(n,{item:!0,xs:3,children:e.jsx(g,{children:r.presenter})})]},i),e.jsx(y,{})]},i))]})},u=j(m)`
  font-weight: bold;
  margin-vertical: 1rem;
`,g=j(m)`
  margin: 1rem 0rem;
  fontsize: 1rem;
`,se=()=>e.jsx(E,{children:e.jsxs(n,{container:!0,sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[e.jsx(n,{item:!0,children:e.jsx(z,{title:"PROGRAM"})}),e.jsx(n,{item:!0,marginY:2,children:e.jsx($,{to:"/location",style:{textDecoration:"none"},children:e.jsx(U,{children:e.jsx(m,{children:"모든 강연은 강당 (B112호)에서 진행됩니다."})})})}),e.jsx(Z,{})]})});export{se as default};
