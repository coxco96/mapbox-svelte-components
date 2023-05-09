import{S as _,i as f,s as h,q as i,j as G,k as C,m as v,l as j,n as k,b as x,t as M,p as P,r as p}from"./index-3db65c44.js";import{M as $}from"./MapContainer-029b0aaf.js";import"./_commonjsHelpers-042e6b4d.js";function S(o){let e,s;const n=[o[0]];let a={};for(let t=0;t<n.length;t+=1)a=i(a,n[t]);return e=new $({props:a}),{c(){G(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,c){v(e,t,c),s=!0},p(t,[c]){const m=c&1?j(n,[k(t[0])]):{};e.$set(m)},i(t){s||(x(e.$$.fragment,t),s=!0)},o(t){M(e.$$.fragment,t),s=!1},d(t){P(e,t)}}}function b(o,e,s){return o.$$set=n=>{s(0,e=i(i({},e),p(n)))},e=p(e),[e]}class g extends _{constructor(e){super(),f(this,e,b,S,h,{})}}const q=g;g.__docgen={version:3,name:"GeoprocessPage.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function w(o){return o}const Y={title:"Geocoder/geoprocess",component:q},r={args:{addGeocoder:!0,geoprocess:w,title:"geoprocesser",codeBlock:"<MapContainer addGeocoder={true} {geoprocess}}",content:"In utils/actions, there is a geoprocessing.js file. You can create an action in there to fire on the geocoder result, such as calculating the distance to a certain point."}};var d,u,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    addGeocoder: true,
    geoprocess: geoprocess,
    title: 'geoprocesser',
    codeBlock: \`<MapContainer addGeocoder={true} {geoprocess}}\`,
    content: \`In utils/actions, there is a geoprocessing.js file. You can create an action in there to fire on the geocoder result, such as calculating the distance to a certain point.\`
  }
}`,...(l=(u=r.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const E=["returnCoords"];export{E as __namedExportsOrder,Y as default,r as returnCoords};
//# sourceMappingURL=GeoprocessPage.stories-8265df2b.js.map
