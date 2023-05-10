import{S as z,i as A,s as j,q as p,j as w,k as C,m as M,l as E,n as L,b as B,t as P,p as v,r as m}from"./index-53b01f1f.js";import{M as F}from"./MapContainer-33fc72d3.js";import{a as O}from"./acpa-cleft-care-614cb0e3.js";import{s as $}from"./map-style-options-00d5f86d.js";import"./_commonjsHelpers-042e6b4d.js";function q(r){let e,a;const o=[r[0]];let i={};for(let t=0;t<o.length;t+=1)i=p(i,o[t]);return e=new F({props:i}),{c(){w(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,l){M(e,t,l),a=!0},p(t,[l]){const S=l&1?E(o,[L(t[0])]):{};e.$set(S)},i(t){a||(B(e.$$.fragment,t),a=!0)},o(t){P(e.$$.fragment,t),a=!1},d(t){v(e,t)}}}function D(r,e,a){return r.$$set=o=>{a(0,e=p(p({},e),m(o)))},e=m(e),[e]}class k extends z{constructor(e){super(),A(this,e,D,q,j,{})}}const G=k;k.__docgen={version:3,name:"SourceLayerPage.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const Q={title:"<SourceLayer>/sourceOptsAndlayerOpts",component:G},n={args:{title:"Add some data (ACPA cleft care locations)",codeBlock:"<MapContainer data={acpa} layerOpts={type: 'circle'} mapOpts={{center: [-95, 41], zoom: 3.1}}/>",data:O,layerOpts:{type:"circle"},mapOpts:{center:[-95,41],zoom:3.1}}},s={args:{title:"Style your data",codeBlock:"<MapContainer data={acpa} layerOpts={{type: 'circle', paint: {'circle-radius': 9, 'circle-color': 'orange', 'circle-blur': .7, 'circle-opacity': .5, 'circle-stroke-wdith': .5, 'circle-stroke-opacity: .1, 'circle-stroke-color': 'brown'}}} mapOpts={{center: [-95, 41], zoom: 3.1}}/>",data:O,layerOpts:{type:"circle",paint:{"circle-radius":9,"circle-color":"orange","circle-blur":.7,"circle-opacity":.5,"circle-stroke-width":.5,"circle-stroke-opacity":.1,"circle-stroke-color":"brown"}},mapOpts:{center:[-95,41],zoom:3.1}}},c={args:{title:"Fill Extrusion (from Mapbox Examples)",codeBlock:"<MapContainer data='https://docs.mapbox.com/mapbox-gl-js/assets/indoor-3d-map.geojson' layerOpts={{type: 'fill-extrusion', paint: {'fill-extrution-color': ['get', color'], 'fill-extrusion-height': ['get', 'height'],'fill-extrusion-base': ['get', 'base_height'],'fill-extrusion-opacity': 0.5}}} mapOpts={{center: [-87.61694, 41.86625], zoom: 16.5, pitch: 40, bearing: 30, antialias: true, style: styles.ligh}}/>",data:"https://docs.mapbox.com/mapbox-gl-js/assets/indoor-3d-map.geojson",layerOpts:{type:"fill-extrusion",paint:{"fill-extrusion-color":["get","color"],"fill-extrusion-height":["get","height"],"fill-extrusion-base":["get","base_height"],"fill-extrusion-opacity":.5}},mapOpts:{center:[-87.61694,41.86625],zoom:16.5,pitch:40,bearing:30,antialias:!0,style:$.light}}};var d,u,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Add some data (ACPA cleft care locations)',
    codeBlock: \`<MapContainer data={acpa} layerOpts={type: 'circle'} mapOpts={{center: [-95, 41], zoom: 3.1}}/>\`,
    data: acpa,
    layerOpts: {
      type: 'circle'
    },
    mapOpts: {
      center: [-95, 41],
      zoom: 3.1
    }
  }
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,h,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Style your data',
    codeBlock: \`<MapContainer data={acpa} layerOpts={{type: 'circle', paint: {'circle-radius': 9, 'circle-color': 'orange', 'circle-blur': .7, 'circle-opacity': .5, 'circle-stroke-wdith': .5, 'circle-stroke-opacity: .1, 'circle-stroke-color': 'brown'}}} mapOpts={{center: [-95, 41], zoom: 3.1}}/>\`,
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
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var f,b,_;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: 'Fill Extrusion (from Mapbox Examples)',
    codeBlock: \`<MapContainer data='https://docs.mapbox.com/mapbox-gl-js/assets/indoor-3d-map.geojson' layerOpts={{type: 'fill-extrusion', paint: {'fill-extrution-color': ['get', color'], 'fill-extrusion-height': ['get', 'height'],'fill-extrusion-base': ['get', 'base_height'],'fill-extrusion-opacity': 0.5}}} mapOpts={{center: [-87.61694, 41.86625], zoom: 16.5, pitch: 40, bearing: 30, antialias: true, style: styles.ligh}}/>\`,
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
}`,...(_=(b=c.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};const R=["AddSourceAndLayer","StyleData","FillExtrusionExample"];export{n as AddSourceAndLayer,c as FillExtrusionExample,s as StyleData,R as __namedExportsOrder,Q as default};
//# sourceMappingURL=SourceLayerPage.stories-b4480740.js.map
