import{j as e}from"./jsx-runtime-5952030e.js";import{M as s}from"./index-82914f5a.js";import{u as o}from"./index-8db9d9bb.js";import"./iframe-a1ee0f44.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-09b4b528.js";import"./index-356e4a49.js";function u(t={}){const{wrapper:n}=Object.assign({},o(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(r,{})})):r();function r(){const i=Object.assign({h1:"h1",h2:"h2",a:"a",p:"p",code:"code"},o(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"utils/actions"}),`
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
`,e.jsx(i.h1,{id:"actions",children:"actions"}),`
`,e.jsx(i.h2,{id:"srclibutilsactions",children:e.jsx(i.a,{href:"https://github.com/coxco96/mapbox-svelte-components/tree/main/component-library/src/lib/utils/actions",target:"_blank",rel:"nofollow noopener noreferrer",children:"src/lib/utils/actions"})}),`
`,e.jsx(i.p,{children:"TODO: expand on this."}),`
`,e.jsx(i.p,{children:"This folder holds the actions, or exported functions, that run various processes behind-the-scenes."}),`
`,e.jsx(i.p,{children:"There is a 'geoprocess.js' file, which a user can update with their own geoprocessing requests (or can import from different file)."}),`
`,e.jsx(i.p,{children:"The folder currently has a 'spin-globe.js' file used to demonstrate custom actions in this Storybook."}),`
`,e.jsxs(i.p,{children:[`More actions will be added
so the library will ship with both strictly-utility and creative functions used on `,e.jsx(i.code,{children:"<Map/>"}),", ",e.jsx(i.code,{children:"<Geocoder/>"}),", and eventually, ",e.jsx(i.code,{children:"<StyleLayer/>"}),"."]})]})}}export{u as default};
//# sourceMappingURL=actions-784ce39b.js.map
