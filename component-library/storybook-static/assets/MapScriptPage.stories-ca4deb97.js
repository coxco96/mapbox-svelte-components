import{S as _,i as b,s as x,q as l,j as y,k as P,m as M,l as v,n as Z,b as h,t as G,p as j,r as d}from"./index-53b01f1f.js";import{M as w}from"./MapContainer-33fc72d3.js";import{s as C}from"./map-style-options-00d5f86d.js";import"./_commonjsHelpers-042e6b4d.js";function O(o){let t,s;const r=[o[0]];let n={};for(let e=0;e<r.length;e+=1)n=l(n,r[e]);return t=new w({props:n}),{c(){y(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,a){M(t,e,a),s=!0},p(e,[a]){const i=a&1?v(r,[Z(e[0])]):{};t.$set(i)},i(e){s||(h(t.$$.fragment,e),s=!0)},o(e){G(t.$$.fragment,e),s=!1},d(e){j(t,e)}}}function k(o,t,s){return o.$$set=r=>{s(0,t=l(l({},t),d(r)))},t=d(t),[t]}class S extends _{constructor(t){super(),b(this,t,k,O,x,{})}}const $=S;S.__docgen={version:3,name:"MapScriptPage.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function q(o){let n=!1;function e(){const a=o.getZoom();if(!n&&a<5){let i=3;if(a>3){const p=(5-a)/2;i*=p}const m=o.getCenter();m.lng-=i,o.easeTo({center:m,duration:1e3,easing:p=>p})}}o.on("mousedown",()=>{n=!0}),o.on("mouseup",()=>{n=!1,e()}),o.on("dragend",()=>{n=!1,e()}),o.on("pitchend",()=>{n=!1,e()}),o.on("rotateend",()=>{n=!1,e()}),o.on("moveend",()=>{e()})}const E={title:"<Map>/mapScript",component:$},c={args:{mapScript:q,title:"Spin the globe by adding a custom script as an action",codeBlock:"<MapContainer mapScript={spinGlobe} mapOpts={style: styles.courtPixie, projection: 'globe}>",mapOpts:{style:C.courtPixie,projection:"globe"}}};var u,g,f;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    mapScript: spinGlobe,
    title: 'Spin the globe by adding a custom script as an action',
    codeBlock: \`<MapContainer mapScript={spinGlobe} mapOpts={style: styles.courtPixie, projection: 'globe}>\`,
    mapOpts: {
      'style': styles.courtPixie,
      'projection': 'globe'
    }
  }
}`,...(f=(g=c.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const I=["SpinGlobe"];export{c as SpinGlobe,I as __namedExportsOrder,E as default};
//# sourceMappingURL=MapScriptPage.stories-ca4deb97.js.map
