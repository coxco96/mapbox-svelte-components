import{j as e}from"./jsx-runtime-5952030e.js";import{M as o}from"./index-82914f5a.js";import{u as s}from"./index-8db9d9bb.js";import"./iframe-a1ee0f44.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-09b4b528.js";import"./index-356e4a49.js";function f(i={}){const{wrapper:t}=Object.assign({},s(),i.components);return t?e.jsx(t,Object.assign({},i,{children:e.jsx(r,{})})):r();function r(){const n=Object.assign({h1:"h1",hr:"hr",ul:"ul",li:"li",h3:"h3",code:"code"},s(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Start Here/to-dos & next steps"}),`
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
      font-size: 16px;
      line-height: 20px;
      font-weight: 700;
      background: #e6bcbc;
      color: #330404;
      padding: 4px 12px;
      margin-right: 10px;
      vertical-align: top;
    }

    .tip-wrapper {
      font-size: 16px;
      line-height: 20px;
      margin-top: 15px;
      margin-bottom: 15px;
    }

    .tip-wrapper code {
      font-size: 12px;
      display: inline-block;
    }
  `}),`
`,e.jsx(n.h1,{id:"whats-next",children:"what's next?"}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.h3,{id:"ideas-for-accessibility-and-equitable-data-experiences",children:"ideas for accessibility and equitable data experiences"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`write scripts to analyze map options, generating a "for humans" summary of the map's style and location and boundaries, to be sent to a screen-reader only hidden dom element on render`}),`
`,e.jsx(n.li,{children:"write scripts to analyze any accepted data type for this map (so far only geojson) to generate a summary of interesting bits about the data, to be sent to a screen-reader only hidden dom element on render"}),`
`,e.jsx(n.li,{children:"create reactive declarations to re-run these scripts to announce changes in map or data displayed"}),`
`,e.jsx(n.li,{children:"consider reduce motion preferences (rotating globe needs option to stop rotation)"}),`
`,e.jsx(n.li,{children:"automatically generate a data table from source data and make available as hidden node for screen readers"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.h3,{id:"upcoming-to-dos",children:"upcoming to-dos"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"[] implement accessibility standards"}),`
`,e.jsxs(n.li,{children:["[] send data to ",e.jsx(n.code,{children:"<Geocoder/>"})," (currently only sends to ",e.jsx(n.code,{children:"<SourceLayer/>"}),")"]}),`
`,e.jsx(n.li,{children:"[] add support for all Mapbox-supported data types (currently only accepts geojson type)"}),`
`,e.jsx(n.li,{children:"[] test and optimize for multiple data sources on one map"}),`
`,e.jsx(n.li,{children:"[] test and optimize for multiple map instances on one page"}),`
`,e.jsx(n.li,{children:"[] add map height as a MapContainer prop (currently hard coded inside MapContainer component to 500px)"}),`
`,e.jsx(n.li,{children:"[] figure out if it optimizes speed to omit undefined values before passing options"}),`
`,e.jsx(n.li,{children:"[] write more extensive documentation in Github README"}),`
`,e.jsx(n.li,{children:"[] publish package to npm"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.h3,{id:"in-coming-months",children:"in coming months"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["[] infer fill type if not specified in ",e.jsx(n.code,{children:"layerOpts"})," (currently will throw error if not specified)"]}),`
`,e.jsx(n.li,{children:"[] set default paint values by type (check if they already have defaults that render as visible)"}),`
`,e.jsx(n.li,{children:"[] build Markers component"}),`
`,e.jsx(n.li,{children:"[] add more Mapbox plugins"}),`
`,e.jsx(n.li,{children:"[] add scrollymap prop option (scrollytelling template with map) (must include on/off motion option for accessibility)"}),`
`,e.jsx(n.li,{children:"[] ship with pre-written actions to use as mapScripts and/or geoprocesses (or potentially create a separate component to invoke prewritten actions)"}),`
`,e.jsx(n.li,{children:"[] add maplibre support (like mapbox but open-source)"}),`
`,e.jsxs(n.li,{children:["[] add style component in which the style object (usually sent as a url) in mapOpt is customizable within something like ",e.jsx(n.code,{children:"<MapContainer styleObj={}/>"})]}),`
`,e.jsx(n.li,{children:"[] add something like layerScript to run scripts to pass to values of layerOpts (like to generate filters and expressions)"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.h3,{id:"a-brain-dump-of-premade-actions-that-could-come-with-the-library",children:"a brain dump of premade actions that could come with the library"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"[] mapScript: style builder (UI to change map styles on the fly)"}),`
`,e.jsx(n.li,{children:"[] mapScript: set flyTo object (accept args to create this more easily than it is to do directly in geoprocess layerOpts)"}),`
`,e.jsx(n.li,{children:"[] set some sort of catch error for sourceOpts or layerOpts are not valid (there are no pre-defined values for these, unlike the rest)"}),`
`,e.jsx(n.li,{children:'[] geoprocess: use turf for "distance to" geoprocess'}),`
`,e.jsx(n.li,{children:'[] geoprocess: use turf for "nearest point" geoprocess'}),`
`,e.jsx(n.li,{children:"[] geoprocess: highlight (change opacity or color) of polygon (from data) that searched feature lands in"}),`
`,e.jsx(n.li,{children:"[] geoprocess: draw line from searchedPoint to other specified point"}),`
`]}),`
`]}),`
`]})]})}}export{f as default};
//# sourceMappingURL=next-steps-8f7da8c8.js.map
