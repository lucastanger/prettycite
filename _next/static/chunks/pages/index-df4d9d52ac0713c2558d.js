_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{RNiq:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return l}));var n=r("nKUr"),a=r("w+Rh"),c=r("pTTa"),s=r("eOhz");function l(){return Object(n.jsxs)("div",{className:"h-screen w-screen dark:bg-gray-800",children:[Object(n.jsx)(a.default,{}),Object(n.jsx)(c.default,{}),Object(n.jsx)(s.default,{})]})}},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("J4zp"),a=r("284h");t.__esModule=!0,t.default=void 0;var c=a(r("q1tI")),s=r("elyg"),l=r("nOHt"),i=r("vNVm"),o={};function d(e,t,r,n){if(e&&(0,s.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;o[t+"%"+r+(a?"%"+a:"")]=!0}}var u=function(e){var t=!1!==e.prefetch,r=(0,l.useRouter)(),a=r&&r.pathname||"/",u=c.default.useMemo((function(){var t=(0,s.resolveHref)(a,e.href,!0),r=n(t,2),c=r[0],l=r[1];return{href:c,as:e.as?(0,s.resolveHref)(a,e.as):l||c}}),[a,e.href,e.as]),f=u.href,h=u.as,p=e.children,x=e.replace,b=e.shallow,g=e.scroll,j=e.locale;"string"===typeof p&&(p=c.default.createElement("a",null,p));var m=c.Children.only(p),v=m&&"object"===typeof m&&m.ref,y=(0,i.useIntersection)({rootMargin:"200px"}),O=n(y,2),w=O[0],N=O[1],k=c.default.useCallback((function(e){w(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,w]);(0,c.useEffect)((function(){var e=N&&t&&(0,s.isLocalURL)(f),n="undefined"!==typeof j?j:r&&r.locale,a=o[f+"%"+h+(n?"%"+n:"")];e&&!a&&d(r,f,h,{locale:n})}),[h,f,N,j,t,r]);var R={ref:k,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,c,l,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(r))&&(e.preventDefault(),null==l&&(l=n.indexOf("#")<0),t[a?"replace":"push"](r,n,{shallow:c,locale:i,scroll:l}))}(e,r,f,h,x,b,g,j)},onMouseEnter:function(e){(0,s.isLocalURL)(f)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),d(r,f,h,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var _="undefined"!==typeof j?j:r&&r.locale,M=r&&r.isLocaleDomain&&(0,s.getDomainLocale)(h,_,r&&r.locales,r&&r.domainLocales);R.href=M||(0,s.addBasePath)((0,s.addLocale)(h,_,r&&r.defaultLocale))}return c.default.cloneElement(m,R)};t.default=u},eOhz:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return a}));var n=r("nKUr");function a(){return Object(n.jsxs)("div",{className:"w-3/4 mx-auto mt-20 max-w-lg space-y-5",children:[Object(n.jsxs)("div",{className:"flex items-center justify-center space-x-10 uppercase",children:[Object(n.jsx)("a",{className:"underline text-indigo-800",children:"url"}),Object(n.jsx)("a",{className:"",children:"isbn"}),Object(n.jsx)("a",{className:"",children:"title"}),Object(n.jsx)("a",{className:"",children:"doi"})]}),Object(n.jsxs)("div",{className:"relative text-gray-700",children:[Object(n.jsx)("input",{className:"w-full h-10 pl-3 pr-8 text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 placeholder-gray-300",type:"text",placeholder:"http://prettycite.vercel.app"}),Object(n.jsx)("div",{className:"absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-400 font-extralight",children:"\u2318 + V"})]})]})}},pTTa:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return a}));var n=r("nKUr");function a(){return Object(n.jsxs)("div",{className:"relative h-1/5 sm:h-1/4 md:h-1/3 lg:h-1/2",children:[Object(n.jsxs)("div",{className:"absolute w-full h-full bg-black bg-opacity-60 flex flex-col items-center justify-center text-gray-200 text-6xl md:text-8xl font-extrabold space-y-3",children:[Object(n.jsx)("h3",{className:"text-2xl font-medium",children:"citation. made easy."}),Object(n.jsx)("h1",{children:"PRETTYCITE"}),Object(n.jsxs)("h6",{className:"text-sm font-light",children:[Object(n.jsx)("a",{href:"https://github.com/lucastanger/prettycite",target:"_blank",rel:"noreferrer",className:"text-indigo-400",children:"prettycite\xa0"}),"created with\xa0",Object(n.jsx)("span",{className:"text-indigo-900",children:"\u2665"}),"\xa0by",Object(n.jsx)("a",{href:"https://github.com/lucastanger",target:"_blank",rel:"noreferrer",className:"text-indigo-400",children:"\xa0lucastanger"})]})]}),Object(n.jsx)("img",{className:"w-full h-full object-cover",src:"https://images.unsplash.com/photo-1520467795206-62e33627e6ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",alt:"image of a book"}),Object(n.jsx)("div",{className:"absolute right-0 bottom-0",children:Object(n.jsx)("a",{className:"text-gray-50 text-sm opacity-20",href:"https://unsplash.com/photos/MiJTU6lqksg",target:"_blank",children:"image \xa9 unsplash.com"})})]})}},vNVm:function(e,t,r){"use strict";var n=r("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!s,i=(0,a.useRef)(),o=(0,a.useState)(!1),d=n(o,2),u=d[0],f=d[1],h=(0,a.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),r||u||e&&e.tagName&&(i.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=l.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,c=n.observer,s=n.elements;return s.set(e,t),c.observe(e),function(){s.delete(e),c.unobserve(e),0===s.size&&(c.disconnect(),l.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,u]);return(0,a.useEffect)((function(){if(!s&&!u){var e=(0,c.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[u]),[h,u]};var a=r("q1tI"),c=r("0G5g"),s="undefined"!==typeof IntersectionObserver;var l=new Map},vlRD:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("RNiq")}])},"w+Rh":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return l}));var n=r("nKUr"),a=r("q1tI"),c=r("YFqc"),s=r.n(c);function l(){var e=Object(a.useState)("false"),t=e[0],r=e[1];return Object(n.jsxs)("header",{className:"flex flex-wrap flex-row justify-between space-x-4 bg-gray-100 dark:bg-gray-900 px-6 md:space-x-4 relative",children:[Object(n.jsx)(s.a,{href:"/",children:Object(n.jsx)("a",{href:"",className:"block uppercase py-6 dark:text-indigo-100",children:"prettycite"})}),Object(n.jsx)("button",{onClick:function(){r(!t)},className:"md:hidden w-8 h-8 rounded-lg text-gray-600 dark:text-gray-200 my-5 focus:outline-none focus:ring-2 focus:ring-indigo-600 flex bg-transparent p-0 ".concat(t?"":"opened"),children:Object(n.jsxs)("svg",{fill:"currentColor",viewBox:"0 0 100 100",height:"35",width:"35",className:"",xmlns:"http://www.w3.org/2000/svg",children:[Object(n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",className:"line line1",d:"M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"}),Object(n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",className:"line line2",d:"M 20,50 H 80"}),Object(n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",className:"line line3",d:"M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"})]})}),Object(n.jsxs)("nav",{className:"uppercase md:relative md:flex flex-col md:flex-row md:space-x-5 md:items-center font-semibold text-sm w-full md:w-auto space-y-3 md:space-y-0 md:bg-transparent pb-3 md:pb-0 ".concat(t?"hidden ":""),children:[Object(n.jsx)(s.a,{href:"/",children:Object(n.jsx)("a",{className:"block text-indigo-600 dark:text-indigo-300 p-4 rounded-lg hover:bg-indigo-600 hover:text-gray-300",children:"Home"})}),Object(n.jsx)(s.a,{href:"/lets-begin",children:Object(n.jsx)("a",{className:"block text-gray-600 dark:text-gray-300 p-4 rounded-lg hover:bg-gray-300 hover:text-indigo-800",children:"Let's begin"})}),Object(n.jsx)(s.a,{href:"/about",children:Object(n.jsx)("a",{className:"block text-gray-600 dark:text-gray-300 p-4 rounded-lg hover:bg-gray-300 hover:text-indigo-800",children:"About"})}),Object(n.jsx)(s.a,{href:"/contact",children:Object(n.jsx)("a",{className:"block text-gray-600 dark:text-gray-300 p-4 rounded-lg hover:bg-gray-300 hover:text-indigo-800",children:"Contact me"})})]})]})}}},[["vlRD",0,1,2]]]);