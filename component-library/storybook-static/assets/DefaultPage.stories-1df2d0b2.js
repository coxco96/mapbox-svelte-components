import{S as B,i as D,s as G,q as d,j as P,k as A,m as I,l as $,n as E,b as F,t as H,p as J,r as g}from"./index-3db65c44.js";import{M as K}from"./MapContainer-029b0aaf.js";import"./_commonjsHelpers-042e6b4d.js";function L(a){let e,o;const n=[a[0]];let m={};for(let t=0;t<n.length;t+=1)m=d(m,n[t]);return e=new K({props:m}),{c(){P(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,i){I(e,t,i),o=!0},p(t,[i]){const S=i&1?$(n,[E(t[0])]):{};e.$set(S)},i(t){o||(F(e.$$.fragment,t),o=!0)},o(t){H(e.$$.fragment,t),o=!1},d(t){J(e,t)}}}function N(a,e,o){return a.$$set=n=>{o(0,e=d(d({},e),g(n)))},e=g(e),[e]}class z extends B{constructor(e){super(),D(this,e,N,L,G,{})}}const Q=z;z.__docgen={version:3,name:"DefaultPage.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const V={title:"MapContainer/MapOpts",component:Q},s={args:{title:"Default Map Container",codeBlock:"<MapContainer/>",content:"come back to this"}},c={args:{mapOpts:{style:"mapbox://styles/mapbox/light-v10"},title:"Change Map Style",codeBlock:`<MapContainer mapOpts={{
    style: 'mapbox://styles/mapbox/light-v10'
}}/>`,content:"come back to this"}},r={args:{mapOpts:{interactive:!1,style:"mapbox://styles/coxco96/clfx9b01p004i01l8qojjofqh",zoom:-2,center:[84,-37]},title:"Interactive Off",codeBlock:`<MapContainer mapOpts={{
    interactive: false, 
    style: 'mapbox://styles/coxco96/clfx9b01p004i01l8qojjofqh'
}}/>`,content:"come back to content!"}},l={args:{mapOpts:{projection:"globe",zoom:0,style:"mapbox://styles/coxco96/clam405uw000215qwfzg4hejq"},title:"Change Projection",codeBlock:`
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
addGeocoder: {true}/>`,content:"content here"}};var b,u,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: 'Default Map Container',
    codeBlock: \`<MapContainer/>\`,
    content: 'come back to this'
  }
}`,...(f=(u=s.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var x,y,h;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(h=(y=c.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var j,q,C;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(C=(q=r.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};var _,M,O;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(O=(M=l.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var k,w,v;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(v=(w=p.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};const W=["DefaultMapContainer","ChangeMapStyle","InteractionOff","ChangeProjection","GeoAndStyle"];export{c as ChangeMapStyle,l as ChangeProjection,s as DefaultMapContainer,p as GeoAndStyle,r as InteractionOff,W as __namedExportsOrder,V as default};
//# sourceMappingURL=DefaultPage.stories-1df2d0b2.js.map
