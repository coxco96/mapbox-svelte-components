import{j as e}from"./jsx-runtime-5952030e.js";import{M as s}from"./index-82914f5a.js";import{u as r}from"./index-8db9d9bb.js";import"./iframe-a1ee0f44.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-09b4b528.js";import"./index-356e4a49.js";function w(o={}){const{wrapper:i}=Object.assign({},r(),o.components);return i?e.jsx(i,Object.assign({},o,{children:e.jsx(n,{})})):n();function n(){const t=Object.assign({h1:"h1",h2:"h2",p:"p",em:"em",h3:"h3",strong:"strong",a:"a",code:"code",pre:"pre"},r(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Start Here/what is this?"}),`
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
`,e.jsx(t.h3,{id:"what-is-this",children:"what is this?"}),`
`,e.jsx(t.p,{children:"Good question. But first, we need to talk about Svelte."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:e.jsx(t.a,{href:"",children:"Svelte"})}),", at its core, is a compiler. Most everything on the internet that ",e.jsx(t.em,{children:"does something"})," (sends or receives data, updates when you click a button, calculates the answer to your math homework, etc.) is done by JavaScript, because internet browsers read JavaScript. Svelte is built over top of JavaScript, meaning it takes code that is written a bit differently than it would be written in JavaScript and ",e.jsx(t.em,{children:"compiles"})," it, turning it into JavaScript for the browser. As it is built over top of another programming language, it is often called a ",e.jsx(t.em,{children:"framework."})," There are other frameworks out there that do similar things, but Svelte, a relatively new framework, is ",e.jsx(t.em,{children:"really fast"})," compared to others, making it ideal for data-driven graphics-demanding interactive contentlike, such as one would might encounter when viewing, say, a digital map."]}),`
`,e.jsxs(t.p,{children:["Svelte is also highly ",e.jsx(t.em,{children:"reactive"}),' by design, making it (relatively) simple for developers to write reactive content, creating smooth interactivity. In Svelte, you write components--that is, reusable bits of code. These components accept "props," so they are not the same every time.']}),`
`,e.jsxs(t.p,{children:["Imagine the Youtube homepage. I don't think Youtube is built with Svelte, but let's just pretend for the sake of succint explanation. Youtube's homepage shows dozens of the same squares, all exactly the same except holding different videos. In Svelte, you'd write one component, perhaps called ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"<VideoContainer/>"})}),". Somewhere, there will be one code file called 'VideoContainer.svelte', and as long as you know where to find that, you can create a video containers by simply writing ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"<VideoContainer/>"})}),"."]}),`
`,e.jsxs(t.p,{children:["But how does the video container know what video it should be holding? It receives a ",e.jsx(t.strong,{children:"prop"}),", probably with some sort of ID number connected to a video on the server. Pretend with me, again, that Youtube only has three videos, and the unique ID numbers are 1, 2, and 3. (So not so unique, really.) I'll write the following, and we'll now see three video containers with three different videos:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:`<VideoContainer videoID=1>
<VideoContainer videoID=2>
<VideoContainer videoID=3>
`})}),`
`,e.jsx(t.p,{children:"And when you hover over a Youtube video, the preview starts playing, yes? Then in VideoContainer.svelte, there should be some sort of reactive statement that will go into effect the moment you hover over that video. Even though we only coded our VideoContainer once, we have three separate instances of it, which will each react independent of each other. Svelte can handle the animation and transition itself, too, unlike many other popular frameworks."}),`
`,e.jsxs(t.p,{children:["The reason Svelte is so much faster than other comparable frameworks is tricky to explain without getting deep into the technical weeds of web dev. Essentially, though, Svelte ",e.jsx(t.em,{children:"pre-compiles"}),` highly optimized JavaScript that then takes over the show, whereas other frameworks don't compile until it's showtime. (Svelte compiles the code the moment the developer says "build it" whereas other frameworks wait to compile until the user is trying to load the web page.) This allows Svelte to offer true on-the-spot reactivity, sending far less code to the browser + requiring you to write less code than other frameworks.`]}),`
`,e.jsxs(t.p,{children:["Svelte's creator, ",e.jsx(t.strong,{children:e.jsx(t.a,{href:"https://svelte.dev/blog/write-less-code",target:"_blank",rel:"nofollow noopener noreferrer",children:"Rich Harris"})}),', said it best: "All code is buggy. It stands to reason, therefore, that the more code you have to write the buggier your apps will be."']}),`
`,e.jsx(t.h3,{id:"great-so-what-is-this",children:"great! so what is this?"}),`
`,e.jsx(t.p,{children:"Not so fast. Now we need to talk about Mapbox. Briefly."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:e.jsx(t.a,{href:"https://www.mapbox.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Mapbox"})})," is the company; ",e.jsx(t.strong,{children:e.jsx(t.a,{href:"https://docs.mapbox.com/help/glossary/mapbox-gl/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Mapbox GL"})})," is the library."]}),`
`,e.jsx(t.p,{children:"Mapbox GL is used to create client-side maps (meaning maps that render in your browser when you load them)."}),`
`,e.jsxs(t.p,{children:["Mapbox GL is a library written in JavaScript that helps us develop interactive web maps. It's nice on its own, but each map requires a good bulk of code and has a bit of a learning curve, especially if you want to do anything you can't find in the code of the ",e.jsx(t.a,{href:"https://docs.mapbox.com/mapbox-gl-js/example/",target:"_blank",rel:"nofollow noopener noreferrer",children:"example maps"}),"."]}),`
`,e.jsx(t.h3,{id:"svelte--mapbox-gl--",children:"svelte + mapbox gl = ?"}),`
`,e.jsx(t.p,{children:"Fast maps. Less code. Full customization. Endless possibilities for user reactivity."}),`
`,e.jsx(t.p,{children:"My library, unlike the handful of other Svelte + Mapbox GL libraries I have seen, only asks the developer to deal with one single component:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:`<MapContainer/>
`})}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"<MapContainer/>"})})," can create a map, add a geocoder, run functions on your geocoder results, style your map, change the zoom level, bearing, create animations, make the globe spin, accept geojson data, style that data to the map, etc. etc. etc."]}),`
`,e.jsx(t.p,{children:`There are "child components" running "under the hood," but you don't even have to be aware of their existence (unless you're trying to fork the repo and help me develop it, of course).`}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"<MapContainer/>"})})," on its own will render a default map (as long as you've set your Mapbox access token in the 'utils' folder), but the magic happens in the props, where the user can declare exactly what they want without dealing with any boilerplatishness."]}),`
`,e.jsx(t.p,{children:"One import aspect of mapping is the timing. First, you have to initialize the map. You can't add data to a map that doesn't exist. You can't reference the data until it's there. If one action causes the map to re-render, and a re-render prompts it to do that one thing, you get stuck in an infinite loop which will use up every bit of your computer's memory, forcing you to power it off, losing an hour's worth of work you forgot to commit."}),`
`,e.jsxs(t.p,{children:["With the ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"<MapContainer/>"})}),", you can focus on what you need from the map in terms of design and interface."]}),`
`,e.jsxs(t.p,{children:["Hop over to the ",e.jsx(t.strong,{children:"MapContainer: how it works"})," section to learn more about how this works. (And know that more are in development.)"]}),`
`,e.jsx(t.h3,{id:"one-last-thing-what-is-sveltekit",children:"one last thing: what is sveltekit?"}),`
`,e.jsxs(t.p,{children:["It doesn't matter too much for these overview purposes, but since you're curious: Sveltekit is ",e.jsx(t.em,{children:"another"}),` framework built over top of Svelte, which lets it do "backend" web dev things like server-side rendering and page routing. I packaged this library using Sveltekit because I initially set out to build a webpage, but really, I'm not sure it's all that relevant here.`]})]})}}export{w as default};
//# sourceMappingURL=what-is-this-8790b21f.js.map
