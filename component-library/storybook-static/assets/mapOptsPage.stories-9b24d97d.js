import{S as A,i as R,s as U,q as g,j as x,k as z,m as D,l as H,n as N,b as X,t as $,p as q,r as y}from"./index-53b01f1f.js";import{M as w}from"./MapContainer-33fc72d3.js";import{s as p}from"./map-style-options-00d5f86d.js";import"./_commonjsHelpers-042e6b4d.js";function F(s){let e,a;const n=[s[0]];let m={};for(let t=0;t<n.length;t+=1)m=g(m,n[t]);return e=new w({props:m}),{c(){x(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,u){D(e,t,u),a=!0},p(t,[u]){const P=u&1?H(n,[N(t[0])]):{};e.$set(P)},i(t){a||(X(e.$$.fragment,t),a=!0)},o(t){$(e.$$.fragment,t),a=!1},d(t){q(e,t)}}}function G(s,e,a){return s.$$set=n=>{a(0,e=g(g({},e),y(n)))},e=y(e),[e]}class I extends A{constructor(e){super(),R(this,e,G,F,U,{})}}const J=I;I.__docgen={version:3,name:"MapOptsPage.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const W={title:"<Map>/mapOpts",component:J},o={args:{title:"Default Map Container",codeBlock:"<MapContainer/>"}},r={args:{mapOpts:{style:p.satelliteStreets},title:"Change Map Style",codeBlock:"<MapContainer mapOpts={{style: styles.satelliteStreets}}/>"}},i={args:{mapOpts:{interactive:!1,style:p.courtBluePink},title:"Turn Off Interactivity",codeBlock:`<MapContainer mapOpts={{
    interactive: false, 
    style: styles.courtBluePink
}}/>`}},c={args:{mapOpts:{projection:"lambertConformalConic",style:p.courtEarthy},title:"Change Projection",codeBlock:`
<MapContainer mapOpts={{
projection: 'lambertConformalConic',
style: styles.courtEarthy
}}/>`}},l={args:{mapOpts:{projection:"globe",zoom:1.4,bearing:90,pitch:-50,style:p.satellite,customAttribution:"CUSTOM ATTRIBUTION TEXT HERE"},title:"Change Several mapOpts",codeBlock:`
<MapContainer 
mapOpts={{
    projection: 'globe',
    zoom: 1.4,
    bearing: 90,
    pitch: -50,
    style: styles.satellite,
    customAttribution: 'CUSTOM ATTRIBUTION TEXT HERE'/>`}};var d,C,O;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Default Map Container',
    codeBlock: \`<MapContainer/>\`
  }
}`,...(O=(C=o.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var f,M,T;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    mapOpts: {
      'style': styles.satelliteStreets
    },
    title: 'Change Map Style',
    codeBlock: \`<MapContainer mapOpts={{style: styles.satelliteStreets}}/>\`
  }
}`,...(T=(M=r.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var h,_,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    mapOpts: {
      'interactive': false,
      'style': styles.courtBluePink
    },
    title: 'Turn Off Interactivity',
    codeBlock: \`<MapContainer mapOpts={{
    interactive: false, 
    style: styles.courtBluePink
}}/>\`
  }
}`,...(S=(_=i.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var b,B,v;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    mapOpts: {
      'projection': 'lambertConformalConic',
      'style': styles.courtEarthy
    },
    title: 'Change Projection',
    codeBlock: \`
<MapContainer mapOpts={{
projection: 'lambertConformalConic',
style: styles.courtEarthy
}}/>\`
  }
}`,...(v=(B=c.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var E,k,j;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    mapOpts: {
      'projection': 'globe',
      'zoom': 1.4,
      'bearing': 90,
      'pitch': -50,
      'style': styles.satellite,
      'customAttribution': 'CUSTOM ATTRIBUTION TEXT HERE'
    },
    title: 'Change Several mapOpts',
    codeBlock: \`
<MapContainer 
mapOpts={{
    projection: 'globe',
    zoom: 1.4,
    bearing: 90,
    pitch: -50,
    style: styles.satellite,
    customAttribution: 'CUSTOM ATTRIBUTION TEXT HERE'/>\`
  }
}`,...(j=(k=l.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};const Y=["DefaultMapContainer","ChangeMapStyle","TurnOffInteractivity","ChangeProjection","ChangeSeveralOptions"];export{r as ChangeMapStyle,c as ChangeProjection,l as ChangeSeveralOptions,o as DefaultMapContainer,i as TurnOffInteractivity,Y as __namedExportsOrder,W as default};
//# sourceMappingURL=mapOptsPage.stories-9b24d97d.js.map
