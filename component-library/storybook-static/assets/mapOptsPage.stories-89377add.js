import{S as k,i as v,s as z,q as i,j as S,k as B,m as G,l as P,n as A,b as I,t as $,p as E,r as d}from"./index-3db65c44.js";import{M as D}from"./MapContainer-2dca9c34.js";import"./_commonjsHelpers-042e6b4d.js";function F(a){let e,o;const n=[a[0]];let l={};for(let t=0;t<n.length;t+=1)l=i(l,n[t]);return e=new D({props:l}),{c(){S(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,m){G(e,t,m),o=!0},p(t,[m]){const M=m&1?P(n,[A(t[0])]):{};e.$set(M)},i(t){o||(I(e.$$.fragment,t),o=!0)},o(t){$(e.$$.fragment,t),o=!1},d(t){E(e,t)}}}function H(a,e,o){return a.$$set=n=>{o(0,e=i(i({},e),d(n)))},e=d(e),[e]}class C extends k{constructor(e){super(),v(this,e,H,F,z,{})}}const J=C;C.__docgen={version:3,name:"MapOptsPage.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const Q={title:"<Map>/mapOpts",component:J},s={args:{mapOpts:{style:"mapbox://styles/mapbox/light-v10"},title:"Change Map Style",codeBlock:`<MapContainer mapOpts={{
    style: 'mapbox://styles/mapbox/light-v10'
}}/>`,content:"come back to this"}},c={args:{mapOpts:{interactive:!1,style:"mapbox://styles/coxco96/clfx9b01p004i01l8qojjofqh",zoom:-2,center:[84,-37]},title:"Interactive Off",codeBlock:`<MapContainer mapOpts={{
    interactive: false, 
    style: 'mapbox://styles/coxco96/clfx9b01p004i01l8qojjofqh'
}}/>`,content:"come back to content!"}},r={args:{mapOpts:{projection:"globe",zoom:0,style:"mapbox://styles/coxco96/clam405uw000215qwfzg4hejq"},title:"Change Projection",codeBlock:`
<MapContainer mapOpts={{
projection: 'globe',
zoom: 0,
style: 'mapbox://styles/coxco96/clam405uw000215qwfzg4hejq'
}}/>`,content:"come back to text"}},p={args:{mapOpts:{projection:"globe",zoom:1.5,center:[-87,37],bearing:5,style:"mapbox://styles/coxco96/clam3w1aq005d15qmwtbma0l2"},addGeocoder:!0,title:"Add Geocoder",codeBlock:`
<MapContainer 
mapOpts={{
    projection: 'globe',
    zoom: 1.5,
     center: [-87, 37],
    bearing: 5,
    style: 'mapbox://styles/coxco96/clam3w1aq005d15qmwtbma0l2'
    }}, 
addGeocoder: {true}/>`,content:"content here"}};var g,b,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    mapOpts: {
      'style': 'mapbox://styles/mapbox/light-v10'
    },
    title: 'Change Map Style',
    codeBlock: \`<MapContainer mapOpts={{
    style: 'mapbox://styles/mapbox/light-v10'
}}/>\`,
    content: 'come back to this'
  }
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var y,f,u;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    mapOpts: {
      'interactive': false,
      'style': 'mapbox://styles/coxco96/clfx9b01p004i01l8qojjofqh',
      'zoom': -2,
      center: [84, -37]
    },
    title: 'Interactive Off',
    codeBlock: \`<MapContainer mapOpts={{
    interactive: false, 
    style: 'mapbox://styles/coxco96/clfx9b01p004i01l8qojjofqh'
}}/>\`,
    content: 'come back to content!'
  }
}`,...(u=(f=c.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var h,j,q;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    mapOpts: {
      'projection': 'globe',
      'zoom': 0,
      'style': 'mapbox://styles/coxco96/clam405uw000215qwfzg4hejq'
    },
    title: 'Change Projection',
    codeBlock: \`
<MapContainer mapOpts={{
projection: 'globe',
zoom: 0,
style: 'mapbox://styles/coxco96/clam405uw000215qwfzg4hejq'
}}/>\`,
    content: 'come back to text'
  }
}`,...(q=(j=r.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var O,_,w;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    mapOpts: {
      'projection': 'globe',
      'zoom': 1.5,
      'center': [-87, 37],
      'bearing': 5,
      'style': 'mapbox://styles/coxco96/clam3w1aq005d15qmwtbma0l2'
    },
    addGeocoder: true,
    title: 'Add Geocoder',
    codeBlock: \`
<MapContainer 
mapOpts={{
    projection: 'globe',
    zoom: 1.5,
     center: [-87, 37],
    bearing: 5,
    style: 'mapbox://styles/coxco96/clam3w1aq005d15qmwtbma0l2'
    }}, 
addGeocoder: {true}/>\`,
    content: 'content here'
  }
}`,...(w=(_=p.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};const R=["ChangeMapStyle","InteractionOff","ChangeProjection","GeoAndStyle"];export{s as ChangeMapStyle,r as ChangeProjection,p as GeoAndStyle,c as InteractionOff,R as __namedExportsOrder,Q as default};
//# sourceMappingURL=mapOptsPage.stories-89377add.js.map
