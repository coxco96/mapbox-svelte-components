import{j as e}from"./jsx-runtime-e9f9f2bd.js";import{M as l}from"./index-9795a6f3.js";import{u as i}from"./index-d6f7c3a7.js";import"./iframe-53f9362c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-09b4b528.js";import"./index-356e4a49.js";const p=""+new URL("github-logo-aa257577.svg",import.meta.url).href,c=""+new URL("svelte-logo-0f4a670d.svg",import.meta.url).href,s=""+new URL("mapbox-logo-789be04f.svg",import.meta.url).href,a=""+new URL("further-reading-626ef150.svg",import.meta.url).href;function v(n={}){const{wrapper:o}=Object.assign({},i(),n.components);return o?e.jsx(o,Object.assign({},n,{children:e.jsx(r,{})})):r();function r(){const t=Object.assign({h1:"h1",hr:"hr",p:"p",strong:"strong",em:"em"},i(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Start Here/docs & tutorials"}),`
`,`
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
      font-size: 14px;
      line-height: 15px;
      font-weight: 700;
      background: #E7FDD8;
      color: #458228;
      padding: 4px 12px;
      margin-right: 10px;
      vertical-align: top;
    }

    .tip-wrapper {
      font-size: 13px;
      line-height: 20px;
      margin-top: 30px;
      margin-bottom: 30px;
    }

    .tip-wrapper code {
      font-size: 12px;
      display: inline-block;
    }
  `}),`
`,e.jsx(t.h1,{id:"docs--tutorials",children:"docs & tutorials"}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Quick note: this library is still in progress and not quite production ready. Stay tuned!"})}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"The Github repo below is not complete with full documentation, and this library has not yet been published to npm."})}),`
`,e.jsx("span",{}),`
`,e.jsx(t.hr,{}),`
`,e.jsx("div",{className:"tip-wrapper",children:e.jsxs(t.p,{children:[e.jsx("span",{className:"tip",children:"Tip"}),`
`,e.jsx(t.strong,{children:"You don't need to be working in a Svelte project to use this library."})]})}),`
`,e.jsx("div",{className:"subheading",children:"Everything you need to get started"}),`
`,e.jsxs("div",{className:"link-list",children:[e.jsxs("a",{className:"link-item",href:"https://github.com/coxco96/mapbox-svelte-components",target:"_blank",children:[e.jsx("img",{src:p,alt:"Github Logo cat icon"}),e.jsx("span",{children:e.jsxs(t.p,{children:[e.jsx("strong",{children:"Check out the Github repo"}),`
`,e.jsx(t.em,{children:"Coming soon:"})," for detailed documentation on how to use this library, check out its Github repo (coming soon). If you're looking for the component code, here's a ",e.jsx("a",{href:"https://github.com/coxco96/mapbox-svelte-components/tree/main/component-library/src/lib/components",target:"_blank",children:"direct link to the components folder"}),"."]})})]}),e.jsxs("a",{className:"link-item",href:"https://svelte.dev/tutorial/basics",target:"_blank",children:[e.jsx("img",{src:c,alt:"Svelte logo"}),e.jsx("span",{children:e.jsxs(t.p,{children:[e.jsx("strong",{children:"Svelte Tutorial"}),`
You don't need to be a Svelte master to use this library. You will use one prewritten `,e.jsx("a",{href:"https://svelte.dev/tutorial/nested-components",target:"_blank",children:"nested component"}),", and you'll need to understand how to ",e.jsx("a",{href:"https://svelte.dev/tutorial/declaring-props",target:"_blank",children:"declare its props"}),"."]})})]}),e.jsxs("a",{className:"link-item",href:"https://docs.mapbox.com/mapbox-gl-js/api/map/",target:"_blank",children:[e.jsx("img",{src:s,alt:"Map Pin"}),e.jsx("span",{children:e.jsxs(t.p,{children:[e.jsx("strong",{children:"Mapbox GL: Map Options"}),`
You'll set these options through the `," ",e.jsx("code",{children:"mapOpts"})," prop."]})})]}),e.jsxs("a",{className:"link-item",href:"https://github.com/mapbox/mapbox-gl-geocoder/blob/main/API.md#mapboxgeocoder",target:"_blank",children:[e.jsx("img",{src:s,alt:"Map Pin"}),e.jsx("span",{children:e.jsxs(t.p,{children:[e.jsx("strong",{children:"Mapbox GL: Geocoder Options"}),`
You'll set these options through the `," ",e.jsx("code",{children:"geocodeOpts"})," prop."]})})]}),e.jsxs("a",{className:"link-item",href:"https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#geojson",target:"_blank",children:[e.jsx("img",{src:s,alt:"Map Pin"}),e.jsx("span",{children:e.jsxs(t.p,{children:[e.jsx("strong",{children:"Mapbox GL: Source Options "}),`
You'll bring data into the map by setting the `," ",e.jsx("code",{children:"sourceOpts"})," prop. ",e.jsx("em",{children:"Note: currently, only 'geojson' source type is supported."})]})})]}),e.jsxs("a",{className:"link-item",href:"https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#layer-properties",target:"_blank",children:[e.jsx("img",{src:s,alt:"Map Pin"}),e.jsx("span",{children:e.jsxs(t.p,{children:[e.jsx("strong",{children:"Mapbox GL: Layer Options"}),`
Layer options tell the map how to display your data. You'll set these through the `," ",e.jsx("code",{children:"layerOpts"})," prop."]})})]})]}),`
`,e.jsx("div",{className:"subheading",children:"Dive deeper"}),`
`,e.jsxs("div",{className:"link-list",children:[e.jsxs("a",{className:"link-item",href:"https://svelte.dev/docs",target:"_blank",children:[e.jsx("img",{src:a,alt:"open book"}),e.jsx("span",{children:e.jsxs(t.p,{children:[e.jsx("strong",{children:"Svelte Documentation"}),`
I recommend starting with the `,e.jsx("a",{href:"https://svelte.dev/tutorial/basics",target:"_blank",children:"Svelte tutorial"})," if you're new to Svelte. Otherwise, here is the full documentation for reference."]})})]}),e.jsxs("a",{className:"link-item",href:"https://kit.svelte.dev/docs/introduction",target:"_blank",children:[e.jsx("img",{src:a,alt:"open book"}),e.jsx("span",{children:e.jsxs(t.p,{children:[e.jsx("strong",{children:"Sveltekit Documentation"}),`
This library was `,e.jsx("a",{href:"https://kit.svelte.dev/docs/packaging",target:"_blank",children:"packaged with Sveltekit"}),", which is a Svelte framework that acts as a router and build optimizer."]})})]})]})]})}}export{v as default};
//# sourceMappingURL=docs-tutorials-a474bbe0.js.map
