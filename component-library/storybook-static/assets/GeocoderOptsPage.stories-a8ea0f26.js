import{S as j,i as C,s as v,q as i,j as E,k,m as x,l as z,n as M,b as S,t as B,p as w,r as p}from"./index-53b01f1f.js";import{M as P}from"./MapContainer-33fc72d3.js";import{s as $}from"./map-style-options-00d5f86d.js";import"./_commonjsHelpers-042e6b4d.js";function q(n){let e,t;const a=[n[0]];let l={};for(let o=0;o<a.length;o+=1)l=i(l,a[o]);return e=new P({props:l}),{c(){E(e.$$.fragment)},l(o){k(e.$$.fragment,o)},m(o,d){x(e,o,d),t=!0},p(o,[d]){const T=d&1?z(a,[M(o[0])]):{};e.$set(T)},i(o){t||(S(e.$$.fragment,o),t=!0)},o(o){B(e.$$.fragment,o),t=!1},d(o){w(e,o)}}}function F(n,e,t){return n.$$set=a=>{t(0,e=i(i({},e),p(a)))},e=p(e),[e]}class _ extends j{constructor(e){super(),C(this,e,F,q,v,{})}}const V=_;_.__docgen={version:3,name:"GeocoderOptsPage.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const J={title:"<Geocoder>/geocoderOpts",component:V},r={args:{addGeocoder:!0,geocoderOpts:{flyTo:!1},title:"Turn off flyTo (search will not cause animation)",codeBlock:"<MapContainer addGeocoder={true} geocodeOpts={{flyTo: false}}"}},c={args:{addGeocoder:!0,geocoderOpts:{enableGeolocation:!0},title:"Enable Geolocation (get user location)",codeBlock:"<MapContainer addGeocoder={true} geocodeOpts={{enableGeolocation: true}}"}},s={args:{addGeocoder:!0,geocoderOpts:{enableGeolocation:!0,placeholder:"changed the placeholder text",flyTo:{curve:1.75,pitch:70,bearing:-60,padding:200},zoom:14.85},mapOpts:{style:$.courtEarthy,projection:"globe",zoom:1},title:"Set a flyTo object, change projection, enable geolocation, etc.",codeBlock:"<MapContainer mapOpts={{style: styles.courtEarthy, projection: 'globe', zoom: 1}}, addGeocoder=true, geocoderOpts={enableGeolocation: true, placeholder: 'changed the placeholder text', flyTo: {curve: 1.75, pitch: 70, bearing: -60, padding: 200}, zoom: 14.85}>"}};var u,m,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    addGeocoder: true,
    geocoderOpts: {
      flyTo: false
    },
    title: 'Turn off flyTo (search will not cause animation)',
    codeBlock: \`<MapContainer addGeocoder={true} geocodeOpts={{flyTo: false}}\`
  }
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var f,h,G;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    addGeocoder: true,
    geocoderOpts: {
      enableGeolocation: true
    },
    title: 'Enable Geolocation (get user location)',
    codeBlock: \`<MapContainer addGeocoder={true} geocodeOpts={{enableGeolocation: true}}\`
  }
}`,...(G=(h=c.parameters)==null?void 0:h.docs)==null?void 0:G.source}}};var b,y,O;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    addGeocoder: true,
    geocoderOpts: {
      enableGeolocation: true,
      placeholder: 'changed the placeholder text',
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
    title: 'Set a flyTo object, change projection, enable geolocation, etc.',
    codeBlock: \`<MapContainer mapOpts={{style: styles.courtEarthy, projection: 'globe', zoom: 1}}, addGeocoder=true, geocoderOpts={enableGeolocation: true, placeholder: 'changed the placeholder text', flyTo: {curve: 1.75, pitch: 70, bearing: -60, padding: 200}, zoom: 14.85}>\`
  }
}`,...(O=(y=s.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};const K=["TurnOffFlyTo","EnableGeolocation","CombineVariousOpts"];export{s as CombineVariousOpts,c as EnableGeolocation,r as TurnOffFlyTo,K as __namedExportsOrder,J as default};
//# sourceMappingURL=GeocoderOptsPage.stories-a8ea0f26.js.map
