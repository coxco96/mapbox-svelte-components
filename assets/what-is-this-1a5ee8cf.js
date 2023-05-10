import{j as e}from"./jsx-runtime-e9f9f2bd.js";import{M as s}from"./index-9795a6f3.js";import{u as r}from"./index-d6f7c3a7.js";import"./iframe-53f9362c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-09b4b528.js";import"./index-356e4a49.js";function g(i={}){const{wrapper:n}=Object.assign({},r(),i.components);return n?e.jsx(n,Object.assign({},i,{children:e.jsx(o,{})})):o();function o(){const t=Object.assign({h1:"h1",h2:"h2",p:"p",em:"em",h3:"h3",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",h4:"h4"},r(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Start Here/what is this?"}),`
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
`,e.jsx(t.h1,{id:"mapbox-gl-js--sveltekit",children:"Mapbox GL JS + Sveltekit"}),`
`,e.jsx(t.h2,{id:"a-reactive-component-library-to-build-custom-maps-with-less-code",children:"a reactive component library to build custom maps with less code"}),`
`,e.jsx(t.p,{children:e.jsx(t.em,{children:"Heads up! This project is still in production. It isn't published or available for use just yet."})}),`
`,e.jsx(t.h3,{id:"a-quick-personal-note",children:"a quick personal note"}),`
`,e.jsxs(t.p,{children:["This Storybook was born as a demonstration for my master's defense for the M.S. in Digital Mapping from ",e.jsx(t.a,{href:"https://newmapsplus.as.uky.edu/programs",target:"_blank",rel:"nofollow noopener noreferrer",children:"New Maps Plus"})," at the ",e.jsx(t.a,{href:"https://www.uky.edu/",target:"_blank",rel:"nofollow noopener noreferrer",children:"University of Kentucky"}),". You can view more of my projects at ",e.jsx(t.a,{href:"https://coxco96.github.io/",target:"_blank",rel:"nofollow noopener noreferrer",children:"my portfolio website"}),", or have a look around ",e.jsx(t.a,{href:"https://github.com/coxco96",target:"_blank",rel:"nofollow noopener noreferrer",children:"my Github profile"}),"."]}),`
`,e.jsx(t.p,{children:"I decided last winter that I wanted to learn how to use a framework called Svelte. In the spirit of learning by doing, I decided I would code my final project using Sveltekit as the framework for the site itself--that is, for layout templates and page navigation/routing."}),`
`,e.jsx(t.p,{children:"Svelte felt like an impossible puzzle at first, but as I began to think in its language, my project grew into something much different than what I had initially intended. Rather than a narrative story in itself, I've created and and am optimizing building blocks for my future ideas."}),`
`,e.jsx(t.p,{children:"Now that I've spent time with it, Svelte feels more like a game of sudoku--a bunch of little pieces influencing each other from all directions, offering the cozy sort of brain tease you want to have with coffee. This library, functional though nascent, is the foundation of a project I plan to continue developing in the coming months."}),`
`,e.jsxs(t.p,{children:["This Storybook does not present full documentation. Eventually, that will live in the ",e.jsx(t.a,{href:"https://github.com/coxco96/mapbox-svelte-components",target:"_blank",rel:"nofollow noopener noreferrer",children:"Github repo"}),". For now, the Storybook is a basic explanation of what it is and what it does, leaving out a lot of the technical intricacies happening under the hood."]}),`
`,e.jsx(t.p,{children:"It was a bit out of left field that I ever started the New Maps Plus program, and an even wider stretch to be finishing with a degree, because when I began the certificate program in April 2021, I had a bachelor's in creative writing, had never written a line of code, and knew next to nothing about maps. I'm still not sure what enticed me about the program enough to decide to pay the tuition out-of-pocket with a dwindling temp job (at the time), but I am better because I did, and I continue to become a better version of myself as I learn to see see in patterns, think in logic, recognize harm veiled by data, and advocate for myself and my world through maps. Thanks, NMP."}),`
`,e.jsx(t.p,{children:"- Court"}),`
`,e.jsx(t.h3,{id:"so-what-is-this",children:"so what is this?"}),`
`,e.jsx(t.p,{children:"todo!"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"mapbox"}),`
`,e.jsx(t.li,{children:"sveltekit"}),`
`]}),`
`,e.jsx(t.h3,{id:"why-did-i-make-this",children:"Why did I make this?"}),`
`,e.jsx(t.p,{children:"master's project"}),`
`,e.jsx(t.h3,{id:"who-is-it-for",children:"Who is it for?"}),`
`,e.jsxs(t.p,{children:["This library is for ",e.jsx(t.strong,{children:"developers"}),", primarily."]}),`
`,e.jsx(t.h3,{id:"next-steps-priority",children:"Next Steps: priority"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["optimize for accessibility:",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["screen reader support:",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"write scripts to analyze map options and data to dynamically read map summaries to screen reader users"}),`
`,e.jsx(t.li,{children:"create reactive declarations to re-run these scripts to announce changes in map"}),`
`,e.jsx(t.li,{children:"overall goal is to create non-visual interactive map and data experiences as a native feature to the MapContainer"}),`
`]}),`
`]}),`
`,e.jsx(t.li,{children:"reduce motion preferences (rotating globe needs option to stop rotation)"}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:["send data to ",e.jsx(t.code,{children:"<Geocoder/>"})," (currently only sends to ",e.jsx(t.code,{children:"<SourceLayer/>"}),")"]}),`
`,e.jsx(t.li,{children:"add support for all Mapbox-supported data types (currently only accepts geojson type)"}),`
`,e.jsxs(t.li,{children:["test and optimize for:",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"multiple data sources on one map"}),`
`,e.jsx(t.li,{children:"multiple map instances on one page"}),`
`]}),`
`]}),`
`,e.jsx(t.li,{children:"add map height as a MapContainer prop (currently hard coded inside MapContainer component to 500px)"}),`
`,e.jsx(t.li,{children:"figure out if it optimizes speed to omit undefined values before passing options"}),`
`,e.jsx(t.li,{children:"publish package to npm"}),`
`,e.jsx(t.li,{children:"write more extensive documentation in Github README"}),`
`]}),`
`,e.jsx(t.h3,{id:"future-steps",children:"Future steps"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["infer fill type if not specified in ",e.jsx(t.code,{children:"layerOpts"})," (currently will throw error if not specified)"]}),`
`,e.jsx(t.li,{children:"set default paint values by type (check if they already have defaults that render as visible)"}),`
`,e.jsx(t.li,{children:"build Markers component"}),`
`,e.jsx(t.li,{children:"add more Mapbox plugins"}),`
`,e.jsxs(t.li,{children:["add scrollymap prop option (scrollytelling template with map)",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"for accessibility, must include on/off motion option"}),`
`]}),`
`]}),`
`,e.jsx(t.li,{children:"ship with pre-written actions to use as mapScripts and/or geoprocesses (or potentially create a separate component to invoke prewritten actions)"}),`
`,e.jsx(t.li,{children:"add maplibre support (like mapbox but open-source)"}),`
`,e.jsxs(t.li,{children:["add style component in which the style object (usually sent as a url) in mapOpt is customizable within something like ",e.jsx(t.code,{children:"<MapContainer styleObj={}/>"})]}),`
`,e.jsx(t.li,{children:"add something like layerScript to run scripts to pass to values of layerOpts (like to generate filters and expressions)"}),`
`]}),`
`,e.jsx(t.h4,{id:"a-brain-dump-of-actions-to-ship-with",children:"A brain dump of actions to ship with"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"mapScript: style builder (UI to change map styles on the fly)"}),`
`,e.jsx(t.li,{children:"mapScript: set flyTo object (accept args to create this more easily than it is to do directly in geoprocess layerOpts)"}),`
`,e.jsx(t.li,{children:"set some sort of catch error for sourceOpts or layerOpts are not valid (there are no pre-defined values for these, unlike the rest)"}),`
`,e.jsx(t.li,{children:'geoprocess: use turf for "distance to" geoprocess'}),`
`,e.jsx(t.li,{children:'geoprocess: use turf for "nearest point" geoprocess'}),`
`,e.jsx(t.li,{children:"geoprocess: highlight (change opacity or color) of polygon (from data) that searched feature lands in"}),`
`,e.jsx(t.li,{children:"geoprocess: draw line from searchedPoint to other specified point"}),`
`]})]})}}export{g as default};
//# sourceMappingURL=what-is-this-1a5ee8cf.js.map
