import{j as o}from"./jsx-runtime-5952030e.js";import{M as r}from"./index-82914f5a.js";import{u as s}from"./index-8db9d9bb.js";import"./iframe-a1ee0f44.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-09b4b528.js";import"./index-356e4a49.js";function g(i={}){const{wrapper:n}=Object.assign({},s(),i.components);return n?o.jsx(n,Object.assign({},i,{children:o.jsx(t,{})})):t();function t(){const e=Object.assign({h1:"h1",h2:"h2",a:"a",h3:"h3",p:"p",code:"code",ul:"ul",li:"li"},s(),i.components);return o.jsxs(o.Fragment,{children:[o.jsx(r,{title:"utils/options"}),`
`,o.jsx("style",{children:`
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
      color: #66BF3C;
      padding: 4px 12px;
      margin-right: 10px;
      vertical-align: top;
    }

    .tip-wrapper {
      font-size: 13px;
      line-height: 20px;
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .tip-wrapper code {
      font-size: 12px;
      display: inline-block;
    }
  `}),`
`,o.jsx(e.h1,{id:"options",children:"options"}),`
`,o.jsx(e.h2,{id:"srclibutilsoptions",children:o.jsx(e.a,{href:"https://github.com/coxco96/mapbox-svelte-components/tree/main/component-library/src/lib/utils/options",target:"_blank",rel:"nofollow noopener noreferrer",children:"src/lib/utils/options"})}),`
`,o.jsx(e.h3,{id:"default-options",children:"default options"}),`
`,o.jsxs(e.p,{children:["This folder holds the default options exports for the default options for options not supplied by the user in ",o.jsx(e.code,{children:"<MapContainer/>"}),":"]}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.a,{href:"https://github.com/coxco96/mapbox-svelte-components/blob/main/component-library/src/lib/utils/options/map-options.js",target:"_blank",rel:"nofollow noopener noreferrer",children:"mapOpts"}),":",`
`,o.jsxs(e.ul,{children:[`
`,o.jsx(e.li,{children:o.jsx(e.code,{children:"import { options } from '$lib/utils/options/map-options.js'"})}),`
`]}),`
`]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.a,{href:"https://github.com/coxco96/mapbox-svelte-components/blob/main/component-library/src/lib/utils/options/geocoder-options.js",target:"_blank",rel:"nofollow noopener noreferrer",children:"geocoderOpts"}),":",`
`,o.jsxs(e.ul,{children:[`
`,o.jsx(e.li,{children:o.jsx(e.code,{children:"import { options } from $lib/utilsoptions/geocoder-options.js"})}),`
`]}),`
`]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.a,{href:"https://github.com/coxco96/mapbox-svelte-components/blob/main/component-library/src/lib/utils/options/geojson-options.js",target:"_blank",rel:"nofollow noopener noreferrer",children:"data"}),":",`
`,o.jsxs(e.ul,{children:[`
`,o.jsx(e.li,{children:o.jsx(e.code,{children:"import { sourceOptions } from '$lib/utils/geojson-options.js'"})}),`
`]}),`
`]}),`
`]}),`
`,o.jsx(e.h3,{id:"style-options",children:"style options"}),`
`,o.jsxs(e.p,{children:["This folder also holds ",o.jsx(e.a,{href:"https://github.com/coxco96/mapbox-svelte-components/blob/main/component-library/src/lib/utils/options/map-style-options.js",target:"_blank",rel:"nofollow noopener noreferrer",children:"object of map styles"})," for easier reference to set style in ",o.jsx(e.code,{children:"mapOpts"}),":"]}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsx(e.li,{children:o.jsx(e.code,{children:"import { styles } from '$lib/utils/options/map-style-options.js'"})}),`
`]}),`
`,o.jsx(e.p,{children:`It comes with the Mapbox-owned styles. The user may edit this file to include references to their own style URLs.
With the file imported, Mapbox's 'light' style can be specified like this:`}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsx(e.li,{children:o.jsx(e.code,{children:"<MapContainer mapOpts={{style: styles.light}}/>"})}),`
`]}),`
`,o.jsx(e.p,{children:"Whereas without the file, the full URL must be typed out, like this:"}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsx(e.li,{children:o.jsx(e.code,{children:"<MapContainer mapOpts={{style: 'mapbox://styles/mapbox/light-v10'}}/>"})}),`
`]})]})}}export{g as default};
//# sourceMappingURL=options-eb3d6bb3.js.map
