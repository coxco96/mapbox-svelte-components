import{j as e}from"./jsx-runtime-5952030e.js";import{M as i}from"./index-82914f5a.js";import{u as s}from"./index-8db9d9bb.js";import"./iframe-a1ee0f44.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-09b4b528.js";import"./index-356e4a49.js";function u(o={}){const{wrapper:t}=Object.assign({},s(),o.components);return t?e.jsx(t,Object.assign({},o,{children:e.jsx(r,{})})):r();function r(){const n=Object.assign({h1:"h1",hr:"hr",p:"p",strong:"strong",ul:"ul",li:"li",pre:"pre",code:"code",em:"em",a:"a"},s(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"<MapContainer>/how it works"}),`
`,e.jsx("style",{children:`
    .subheading {
      --mediumdark: '#999999';
      font-weight: 700;
      font-size: 13px;
      color: #999;
      letter-spacing: 6px;
      line-height: 24px;
      text-transform: uppercase;
      margin-bottom: 12px;
      margin-top: 40px;
    }

    .link-list {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 10px;
    }

    @media (min-width: 620px) {
      .link-list {
        row-gap: 20px;
        column-gap: 20px;
        grid-template-columns: 1fr 1fr;
      }
    }

    @media all and (-ms-high-contrast:none) {
    .link-list {
        display: -ms-grid;
        -ms-grid-columns: 1fr 1fr;
        -ms-grid-rows: 1fr 1fr;
      }
    }

    .link-item {
      display: block;
      padding: 20px;
      border: 1px solid #00000010;
      border-radius: 5px;
      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
      color: #333333;
      display: flex;
      align-items: flex-start;
    }

    .link-item:hover {
      border-color: #1EA7FD50;
      transform: translate3d(0, -3px, 0);
      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
    }

    .link-item:active {
      border-color: #1EA7FD;
      transform: translate3d(0, 0, 0);
    }

    .link-item strong {
      font-weight: 700;
      display: block;
      margin-bottom: 2px;
    }

    .link-item img {
      height: 40px;
      width: 40px;
      margin-right: 15px;
      flex: none;
    }

    .link-item span,
    .link-item p {
      margin: 0;
      font-size: 14px;
      line-height: 20px;
    }

    .tip {
      display: inline-block;
      border-radius: 1em;
      font-size: 11px;
      line-height: 12px;
      font-weight: 700;
      background: #E7FDD8;
      color: #2e8705;
      padding: 4px 10px;
      margin-right: 5px;
      vertical-align: top;
    }

    .tip-wrapper {
      font-size: 13px;
      line-height: 20px;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    .tip-wrapper code {
      font-size: 12px;
      display: inline-block;
    }
  `}),`
`,e.jsx(n.h1,{id:"how-it-works",children:"how it works:"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx("div",{className:"tip-wrapper",children:e.jsxs(n.p,{children:[e.jsx("span",{className:"tip",children:"Note"}),`
`,e.jsx(n.strong,{children:"This page assumes you've read the 'what is this?' section."})]})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.p,{children:"So what are you looking at here? What's going on in the sidebar? Here's what you need to know."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"MapContainer"})," has three child components:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Map"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Geocoder"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"SourceLayer"})}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"MapContainer"})," accepts props for the whole family and passes them down accordingly, which makes the map things happen."]}),`
`,e.jsxs(n.p,{children:["This Storybook is laid out by ",e.jsx(n.strong,{children:"child component > prop > examples"}),", so you can better see what is happening and how."]}),`
`,e.jsxs(n.p,{children:["For example, find the ",e.jsx(n.strong,{children:"Geocoder"})," heading in the sidebar. (But don't click it yet. Stay with me.)"]}),`
`,e.jsx(n.p,{children:"You should see:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Geocoder"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"addGeocoder"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"geocoderOpts"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"geoprocess"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"And, look now, but if you click on those subheadings, it will take you to some examples."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Geocoder"})," is the child component of ",e.jsx(n.strong,{children:"MapContainer"}),". It's nested inside of it, like this:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`<MapContainer>
  <Geocoder/>
<MapContainer/>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"addGeocoder, geocoderOpts, and geoprocess"})," are the ",e.jsx(n.strong,{children:"props"})," that ",e.jsx(n.strong,{children:"Geocoder"})," eventually receives, but we just send them in through ",e.jsx(n.strong,{children:"MapContainer"}),", because remember, you don't even ",e.jsx(n.em,{children:"really"})," need to know about the child (",e.jsx(n.strong,{children:"Geocoder"}),")."]}),`
`,e.jsx(n.p,{children:"So let's say I want to add a geocoder to my map. Here's what that looks like:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`<MapContainer geocoder={true}/>
`})}),`
`,e.jsx(n.p,{children:"If you don't want a geocoder, you don't need to do anything, because the default value is false."}),`
`,e.jsxs(n.p,{children:["Now, ",e.jsx(n.strong,{children:"Map"})," receives ",e.jsx(n.strong,{children:"mapOpts"})," as a prop, which does a lot to style your map. Let's say you want a geocoder ",e.jsx(n.em,{children:"and"})," you want to set the zoom level to 17 (very close up)."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`<MapContainer geocoder={true} mapOpts={{zoom: 17}}/>
`})}),`
`,e.jsx(n.p,{children:"And boom, geocoder added, map zoomed in right on a house."}),`
`,e.jsxs(n.p,{children:["More thorough documentation is to come on all prop options in the ",e.jsx(n.strong,{children:e.jsx(n.a,{href:"https://github.com/coxco96/mapbox-svelte-components",target:"_blank",rel:"nofollow noopener noreferrer",children:"Github repo"})}),", but that's the gist of it."]}),`
`,e.jsxs(n.p,{children:["I've kept the maps for this demonstration relatively simple to clearly show what is happening here, but know that the ",e.jsx(n.strong,{children:"mapScript"})," prop offers full customization to the Map object by allowing you to pass in a custom function. Similarly, the ",e.jsx(n.strong,{children:"geoprocess"})," prop allows you to run a custom function each time the geocoder is fired. (So for example, you might write a ",e.jsx(n.strong,{children:"geoprocess"})," function that takes the geocoder result coordinate and animates a line from that point to the nearest ice cream shop.)"]}),`
`,e.jsxs(n.p,{children:["I recommend going through this from top to bottom, starting with ",e.jsx(n.strong,{children:"Map: mapOpts"})," and working your way down. There's a bit more information about some of what's happening and the customization options in ",e.jsx(n.strong,{children:"Utils"})," at the bottom."]})]})}}export{u as default};
//# sourceMappingURL=map-container-docs-a209acff.js.map
