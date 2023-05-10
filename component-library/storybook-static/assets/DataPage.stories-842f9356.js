import{S as D,i as S,s as E,q as p,j,k as z,m as A,l as B,n as v,b as F,t as P,p as R,r as m}from"./index-3db65c44.js";import{M as $}from"./MapContainer-2dca9c34.js";import{a as k}from"./acpa-cleft-care-614cb0e3.js";import{s as L}from"./map-style-options-00d5f86d.js";import"./_commonjsHelpers-042e6b4d.js";function q(n){let e,o;const a=[n[0]];let i={};for(let t=0;t<a.length;t+=1)i=p(i,a[t]);return e=new $({props:i}),{c(){j(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,l){A(e,t,l),o=!0},p(t,[l]){const w=l&1?B(a,[v(t[0])]):{};e.$set(w)},i(t){o||(F(e.$$.fragment,t),o=!0)},o(t){P(e.$$.fragment,t),o=!1},d(t){R(e,t)}}}function C(n,e,o){return n.$$set=a=>{o(0,e=p(p({},e),m(a)))},e=m(e),[e]}class O extends D{constructor(e){super(),S(this,e,C,q,E,{})}}const M=O;O.__docgen={version:3,name:"DataPage.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const N={title:"<SourceLayer>/data",component:M},r={args:{title:"Add some Data",codeBlock:"<todo/>",content:"come back to this // this is acpa data",data:k,layerOpts:{type:"circle",paint:{"circle-radius":4,"circle-color":"yellow"}},mapOpts:{center:[-95,41],zoom:3.1}}},s={args:{title:"Restyle",codeBlock:"<todo/>",content:"come back to this",data:k,layerOpts:{type:"circle",paint:{"circle-radius":9,"circle-color":"orange","circle-blur":.7,"circle-opacity":.5,"circle-stroke-width":.5,"circle-stroke-opacity":.1,"circle-stroke-color":"brown"}},mapOpts:{center:[-95,41],zoom:3.1}}},c={args:{title:"Fill Extrusion Example",codeBlock:"todo",content:"adapted from mapbox api example",data:"https://docs.mapbox.com/mapbox-gl-js/assets/indoor-3d-map.geojson",layerOpts:{type:"fill-extrusion",paint:{"fill-extrusion-color":["get","color"],"fill-extrusion-height":["get","height"],"fill-extrusion-base":["get","base_height"],"fill-extrusion-opacity":.5}},mapOpts:{center:[-87.61694,41.86625],zoom:16.5,pitch:40,bearing:30,antialias:!0,style:L.light}}};var d,u,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Add some Data',
    codeBlock: \`<todo/>\`,
    content: 'come back to this // this is acpa data',
    data: acpa,
    layerOpts: {
      type: 'circle',
      paint: {
        "circle-radius": 4,
        "circle-color": "yellow"
      }
    },
    mapOpts: {
      center: [-95, 41],
      zoom: 3.1
    }
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,h,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Restyle',
    codeBlock: \`<todo/>\`,
    content: 'come back to this',
    data: acpa,
    layerOpts: {
      type: 'circle',
      paint: {
        "circle-radius": 9,
        "circle-color": "orange",
        'circle-blur': .7,
        'circle-opacity': .5,
        'circle-stroke-width': .5,
        'circle-stroke-opacity': .1,
        'circle-stroke-color': 'brown'
      }
    },
    mapOpts: {
      center: [-95, 41],
      zoom: 3.1
    }
  }
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,_,b;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Fill Extrusion Example',
    codeBlock: \`todo\`,
    content: 'adapted from mapbox api example',
    data: 'https://docs.mapbox.com/mapbox-gl-js/assets/indoor-3d-map.geojson',
    layerOpts: {
      type: 'fill-extrusion',
      paint: {
        'fill-extrusion-color': ['get', 'color'],
        'fill-extrusion-height': ['get', 'height'],
        'fill-extrusion-base': ['get', 'base_height'],
        'fill-extrusion-opacity': 0.5
      }
    },
    mapOpts: {
      center: [-87.61694, 41.86625],
      zoom: 16.5,
      pitch: 40,
      bearing: 30,
      antialias: true,
      style: styles.light
    }
  }
}`,...(b=(_=c.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};const Q=["AddSourceAndLayer","RestyleData","FillExtrusion"];export{r as AddSourceAndLayer,c as FillExtrusion,s as RestyleData,Q as __namedExportsOrder,N as default};
//# sourceMappingURL=DataPage.stories-842f9356.js.map
