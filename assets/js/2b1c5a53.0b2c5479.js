"use strict";(self.webpackChunklearning_hub=self.webpackChunklearning_hub||[]).push([[487],{5435:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=i(5893),a=i(1151),n=i(3884);const s={},l="Time Zone Map",o={id:"examples/maplibre/time-zone-map",title:"Time Zone Map",description:"",source:"@site/docs/examples/maplibre/time-zone-map.mdx",sourceDirName:"examples/maplibre",slug:"/examples/maplibre/time-zone-map",permalink:"/learning/examples/maplibre/time-zone-map",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Leaflet Live Editing test",permalink:"/learning/examples/leaflet/leaflet-live-editing"}},d={},c=[];function p(e){const t={h1:"h1",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"time-zone-map",children:"Time Zone Map"}),"\n",(0,r.jsx)(n.Z,{fileUrl:"./maplibre-tz.html"})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},3884:(e,t,i)=>{i.d(t,{Z:()=>c});var r=i(7294),a=i(460),n=i.n(a),s=i(8325),l=(i(4335),i(5154)),o=i(4855),d=i(5893);function c(e){let{fileUrl:t}=e;const[i,a]=(0,r.useState)(""),[c,p]=(0,r.useState)(null),[m,u]=(0,r.useState)(!0),f=t.substring(t.lastIndexOf("/")+1),x=(0,r.useCallback)((async function(e,t){void 0===t&&(t=!1);const i=await fetch(t?`/learning${e}`:e);if(i.ok){const e=await i.text();a(e),u(!1)}else{if(404!==i.status)throw new Error(`HTTP error! status: ${i.status}`);x(`/examples/${f}`,!0)}}),[f]);return(0,r.useEffect)((()=>{x(t).catch((e=>{p(e.message),u(!1)}))}),[t,x]),m?(0,d.jsx)("div",{children:"Loading..."}):(0,d.jsxs)("div",{style:{border:"1px solid #ddd",borderRadius:"4px",height:"100%",display:"flex",flexDirection:"column"},children:[(0,d.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px",backgroundColor:"#f0f0f0",borderBottom:"1px solid #ddd"},children:[(0,d.jsx)("h2",{style:{margin:0},children:"Live Editor"}),(0,d.jsx)(o.CopyToClipboard,{text:i,children:(0,d.jsxs)("button",{style:{display:"flex",alignItems:"center",background:"none",border:"none",cursor:"pointer"},children:[(0,d.jsx)(l.esY,{style:{marginRight:"5px"}}),"Copy"]})})]}),c&&(0,d.jsxs)("div",{children:["Error: ",c]}),(0,d.jsxs)("div",{style:{flex:1,display:"flex"},children:[(0,d.jsx)("div",{style:{flex:1,overflow:"auto"},children:(0,d.jsx)(n(),{value:i,onValueChange:a,highlight:e=>(0,s.highlight)(e,s.languages.markup),padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12,backgroundColor:"#f0f0f0",height:"100%",overflow:"auto",whiteSpace:"pre-wrap",wordBreak:"break-word"}})}),(0,d.jsx)("iframe",{id:"iframe",style:{flex:1},srcDoc:i})]})]})}}}]);