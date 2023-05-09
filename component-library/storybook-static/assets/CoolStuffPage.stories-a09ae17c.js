import{S,i as C,s as b,q as m,j as P,k as v,m as x,l as Z,n as h,b as O,t as k,p as w,r as u}from"./index-3db65c44.js";import{M as y}from"./MapContainer-029b0aaf.js";import{s as G}from"./map-style-options-00d5f86d.js";import"./_commonjsHelpers-042e6b4d.js";function M(n){let o,s;const r=[n[0]];let t={};for(let e=0;e<r.length;e+=1)t=m(t,r[e]);return o=new y({props:t}),{c(){P(o.$$.fragment)},l(e){v(o.$$.fragment,e)},m(e,a){x(o,e,a),s=!0},p(e,[a]){const c=a&1?Z(r,[h(e[0])]):{};o.$set(c)},i(e){s||(O(o.$$.fragment,e),s=!0)},o(e){k(o.$$.fragment,e),s=!1},d(e){w(o,e)}}}function j(n,o,s){return n.$$set=r=>{s(0,o=m(m({},o),u(r)))},o=u(o),[o]}class _ extends S{constructor(o){super(),C(this,o,j,M,b,{})}}const B=_;_.__docgen={version:3,name:"CoolStuffPage.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function $(n){let t=!1;function e(){const a=n.getZoom();if(!t&&a<5){let c=3;if(a>3){const l=(5-a)/2;c*=l}const p=n.getCenter();p.lng-=c,n.easeTo({center:p,duration:1e3,easing:l=>l})}}n.on("mousedown",()=>{t=!0}),n.on("mouseup",()=>{t=!1,e()}),n.on("dragend",()=>{t=!1,e()}),n.on("pitchend",()=>{t=!1,e()}),n.on("rotateend",()=>{t=!1,e()}),n.on("moveend",()=>{e()})}const A={title:"MapScript/Custom",component:B},i={args:{mapScript:$,title:"Add a custom script as an action",codeBlock:"<MapContainerTODO>",content:"content here",mapOpts:{style:G.courtBluePink,projection:"globe"}}};var d,f,g;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
//# sourceMappingURL=CoolStuffPage.stories-a09ae17c.js.map
