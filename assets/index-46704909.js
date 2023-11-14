import{a as c,u as g,m,j as e,B as n,P as p,G as o,S as f,T as s,K as j,d as u}from"./index-e500a847.js";import{d as C}from"./LocationOn-df448953.js";import{D as i}from"./Divider-d7be6026.js";const{kakao:r}=window,y=()=>{const t=c(),a=g(t.breakpoints.up("lg"));return m.useEffect(()=>{const l=document.getElementById("map"),d={center:new r.maps.LatLng(37.584948,127.027816),level:3},x=new r.maps.Map(l,d),h=new r.maps.LatLng(37.5846168,127.0253533);new r.maps.Marker({position:h}).setMap(x)},[]),e.jsx(n,{sx:{display:"flex",padding:t.spacing(1)},children:e.jsx(n,{id:"map",style:{width:a?500:300,height:a?500:300}})})},w="서울 성북구 고려대로22길 6-7",E="고려대학교 하나스퀘어 (지하1층)",k="https://map.kakao.com/link/from/%EC%95%88%EC%95%94%EC%97%AD%206%ED%98%B8%EC%84%A0,%2037.5863,%20127.0293/to/%EA%B3%A0%EB%A0%A4%EB%8C%80%ED%95%99%EA%B5%90%ED%95%98%EB%82%98%EC%8A%A4%ED%80%98%EC%96%B4,37.5846168,%20127.0253533",L=()=>{const t=c();return e.jsx(p,{children:e.jsxs(o,{container:!0,sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[e.jsx(o,{item:!0,children:e.jsx(f,{title:"LOCATION"})}),e.jsxs(o,{container:!0,item:!0,sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",mt:t.spacing(10)},children:[e.jsxs(n,{sx:{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:t.spacing(1),justifyContent:"center"},children:[e.jsx(C,{color:"secondary",sx:{width:21,height:21}}),e.jsx(s,{variant:"body1",fontWeight:800,children:w})]}),e.jsx(n,{children:e.jsx(s,{variant:"h6",fontWeight:800,children:E})}),e.jsxs(n,{sx:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"100%",marginY:t.spacing(5)},children:[e.jsx(i,{sx:{height:3,width:"12%",backgroundColor:"#02306C",mr:t.spacing(2)}}),e.jsx(s,{variant:"h6",fontWeight:800,color:"secondary",children:"지도"}),e.jsx(i,{sx:{height:3,width:"12%",backgroundColor:"#02306C",ml:t.spacing(2)}})]}),e.jsxs(n,{component:j,sx:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:1},onClick:()=>window.open(k,"_blank"),children:[e.jsx(u,{color:"secondary",sx:{width:21,height:21}}),e.jsx(s,{variant:"body2",fontWeight:800,children:"지도 바로가기"})]}),e.jsx(y,{}),e.jsxs(n,{sx:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"100%",marginY:t.spacing(5)},children:[e.jsx(i,{sx:{height:3,width:"12%",backgroundColor:"#02306C",mr:t.spacing(2)}}),e.jsx(s,{variant:"h6",fontWeight:800,color:"secondary",children:"행사장 도면"}),e.jsx(i,{sx:{height:3,width:"12%",backgroundColor:"#02306C",ml:t.spacing(2)}})]}),e.jsx(n,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx("img",{src:"/assets/blueprintNew.png",width:"50%"})})]})]})})};export{L as default};
