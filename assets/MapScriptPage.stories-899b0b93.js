import{S,i as b,s as M,q as l,j as P,k as v,m as x,l as Z,n as h,b as O,t as k,p as w,r as d}from"./index-3db65c44.js";import{M as y}from"./MapContainer-2dca9c34.js";import{s as C}from"./map-style-options-00d5f86d.js";import"./_commonjsHelpers-042e6b4d.js";function G(t){let n,s;const r=[t[0]];let o={};for(let e=0;e<r.length;e+=1)o=l(o,r[e]);return n=new y({props:o}),{c(){P(n.$$.fragment)},l(e){v(n.$$.fragment,e)},m(e,a){x(n,e,a),s=!0},p(e,[a]){const c=a&1?Z(r,[h(e[0])]):{};n.$set(c)},i(e){s||(O(n.$$.fragment,e),s=!0)},o(e){k(n.$$.fragment,e),s=!1},d(e){w(n,e)}}}function j(t,n,s){return t.$$set=r=>{s(0,n=l(l({},n),d(r)))},n=d(n),[n]}class _ extends S{constructor(n){super(),b(this,n,j,G,M,{})}}const B=_;_.__docgen={version:3,name:"MapScriptPage.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function $(t){let o=!1;function e(){const a=t.getZoom();if(!o&&a<5){let c=3;if(a>3){const p=(5-a)/2;c*=p}const m=t.getCenter();m.lng-=c,t.easeTo({center:m,duration:1e3,easing:p=>p})}}t.on("mousedown",()=>{o=!0}),t.on("mouseup",()=>{o=!1,e()}),t.on("dragend",()=>{o=!1,e()}),t.on("pitchend",()=>{o=!1,e()}),t.on("rotateend",()=>{o=!1,e()}),t.on("moveend",()=>{e()})}const A={title:"<Map>/mapScript",component:B},i={args:{mapScript:$,title:"Add a custom script as an action",codeBlock:"<MapContainerTODO>",content:"content here",mapOpts:{style:C.courtBluePink,projection:"globe"}}};var u,f,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    mapScript: spinGlobe,
    title: 'Add a custom script as an action',
    codeBlock: \`<MapContainerTODO>\`,
    content: \`content here\`,
    mapOpts: {
      'style': styles.courtBluePink,
      'projection': 'globe'
    }
  }
}`,...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const R=["SpinGlobe"];export{i as SpinGlobe,R as __namedExportsOrder,A as default};
//# sourceMappingURL=MapScriptPage.stories-899b0b93.js.map
