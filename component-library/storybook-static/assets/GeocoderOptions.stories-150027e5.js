import{S as k,i as B,s as M,q as i,j as T,k as C,m as S,l as j,n as x,b as z,t as $,p as E,r as p}from"./index-3db65c44.js";import{M as q}from"./MapContainer-029b0aaf.js";import{s as w}from"./map-style-options-00d5f86d.js";import"./_commonjsHelpers-042e6b4d.js";function F(r){let e,t;const n=[r[0]];let d={};for(let o=0;o<n.length;o+=1)d=i(d,n[o]);return e=new q({props:d}),{c(){T(e.$$.fragment)},l(o){C(e.$$.fragment,o)},m(o,l){S(e,o,l),t=!0},p(o,[l]){const h=l&1?j(n,[x(o[0])]):{};e.$set(h)},i(o){t||(z(e.$$.fragment,o),t=!0)},o(o){$(e.$$.fragment,o),t=!1},d(o){E(e,o)}}}function A(r,e,t){return r.$$set=n=>{t(0,e=i(i({},e),p(n)))},e=p(e),[e]}class v extends k{constructor(e){super(),B(this,e,A,F,M,{})}}const D=v;v.__docgen={version:3,name:"GeocoderOptions.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const L={title:"Geocoder/geocoderOpts",component:D},a={args:{addGeocoder:!0,geocoderOpts:{flyTo:!1},title:"enableGeolocation: true",codeBlock:"<MapContainer addGeocoder={true} geocodeOpts={{clearOnBlur: true}}"}},s={args:{addGeocoder:!0,geocoderOpts:{enableGeolocation:!0},title:"enableGeolocation: true",codeBlock:"<MapContainer addGeocoder={true} geocodeOpts={{enableGeolocation: true}}"}},c={args:{addGeocoder:!0,geocoderOpts:{enableGeolocation:!0,flyTo:{curve:1.75,pitch:70,bearing:-60,padding:200},zoom:14.85},mapOpts:{style:w.courtEarthy,projection:"globe",zoom:1},title:"combine various options",codeBlock:"todo",content:"todo // combines mapOpts and geocoderOpts"}};var u,m,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    addGeocoder: true,
    geocoderOpts: {
      flyTo: false
    },
    title: 'enableGeolocation: true',
    codeBlock: \`<MapContainer addGeocoder={true} geocodeOpts={{clearOnBlur: true}}\`
  }
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var O,G,f;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    addGeocoder: true,
    geocoderOpts: {
      enableGeolocation: true
    },
    title: 'enableGeolocation: true',
    codeBlock: \`<MapContainer addGeocoder={true} geocodeOpts={{enableGeolocation: true}}\`
  }
}`,...(f=(G=s.parameters)==null?void 0:G.docs)==null?void 0:f.source}}};var _,b,y;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    addGeocoder: true,
    geocoderOpts: {
      enableGeolocation: true,
      flyTo: {
        curve: 1.75,
        pitch: 70,
        bearing: -60,
        padding: 200
      },
      zoom: 14.85
    },
    mapOpts: {
      style: styles.courtEarthy,
      projection: 'globe',
      zoom: 1
    },
    title: 'combine various options',
    codeBlock: \`todo\`,
    content: 'todo // combines mapOpts and geocoderOpts'
  }
}`,...(y=(b=c.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const N=["TurnOffFlyTo","enableGeolocation","MultipleOpts"];export{c as MultipleOpts,a as TurnOffFlyTo,N as __namedExportsOrder,L as default,s as enableGeolocation};
//# sourceMappingURL=GeocoderOptions.stories-150027e5.js.map
