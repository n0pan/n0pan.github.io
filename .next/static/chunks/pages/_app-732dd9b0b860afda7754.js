_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(i.default.useContext(o.AmpStateContext))};var r,i=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,i=void 0!==r&&r,o=e.hasQuery,a=void 0!==o&&o;return n||i&&a}},0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1TCz":function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t);var i=n("nKUr"),o=n("g4pe"),a=n.n(o),c=n("q1tI"),s=n("vOnD"),u=s.c.h1.withConfig({displayName:"styles__TextLogo",componentId:"sc-e5t6wu-0"})(["span{text-transform:uppercase;font-weight:800;}"]);var l=function(){return Object(i.jsxs)(u,{children:[Object(i.jsx)("span",{children:"Hoang-Pham"})," Long-Quan"]})},d=n("Aiso"),f=n.n(d),p=s.c.div.withConfig({displayName:"styles__PictureContainer",componentId:"sc-1uh5nxr-0"})(["padding:0px 15px;div{text-align:center;height:200px;width:200px;position:relative;margin:0 auto;}"]);var h=function(){return Object(i.jsx)(p,{children:Object(i.jsx)("div",{children:Object(i.jsx)(f.a,{className:"rounded",src:"/images/rounded-pro-pic.png",alt:"Long-Quan",layout:"fill",objectFit:"cover",objectPosition:"center",quality:75})})})},m=s.c.div.withConfig({displayName:"styles__HeaderContainer",componentId:"sc-1atpu6b-0"})(["display:flex;flex-direction:column;"]),y=s.c.div.withConfig({displayName:"styles__NameContainer",componentId:"sc-1atpu6b-1"})(["text-align:center;"]);s.c.ul.withConfig({displayName:"styles__NavigationContainer",componentId:"sc-1atpu6b-2"})(["list-style-type:none;text-align:center;li{margin-right:25px;display:inline;}"]),s.c.a.withConfig({displayName:"styles__NavLink",componentId:"sc-1atpu6b-3"})(["cursor:pointer;color:",";"],(function(e){return e.isSelected?e.theme.primary:e.theme.text}));var g=function(){return Object(i.jsx)(m,{children:Object(i.jsxs)(y,{children:[Object(i.jsx)(h,{}),Object(i.jsx)(l,{})]})})},b=n("YFqc"),v=n.n(b),x=n("20a2"),j=s.c.footer.withConfig({displayName:"styles__FooterContainer",componentId:"sc-k7jara-0"})(["text-align:left;display:flex;"]),w=s.c.ul.withConfig({displayName:"styles__NavigationContainer",componentId:"sc-k7jara-1"})(["list-style-type:none;text-align:left;li{margin-right:25px;display:inline;}"]),O=s.c.a.withConfig({displayName:"styles__NavLink",componentId:"sc-k7jara-2"})(["cursor:pointer;color:",";"],(function(e){return e.isSelected?e.theme.primary:e.theme.text}));var _=function(){var e=Object(x.useRouter)();return Object(i.jsx)(j,{children:Object(i.jsxs)(w,{children:[Object(i.jsx)("li",{children:Object(i.jsx)(v.a,{href:"/",children:Object(i.jsx)(O,{isSelected:"/"===e.pathname,children:"Home"})})}),Object(i.jsx)("li",{children:Object(i.jsx)(v.a,{href:"/contact",children:Object(i.jsx)(O,{isSelected:"/contact"===e.pathname,children:"Contact"})})})]})})},A="light",k="dark",C=s.c.ul.withConfig({displayName:"styles__ButtonContainer",componentId:"sc-1cfd0t1-0"})(["list-style-type:none;display:flex;flex-direction:row;justify-content:flex-end;"]),S=s.c.button.withConfig({displayName:"styles__Button",componentId:"sc-1cfd0t1-1"})(["cursor:pointer;background:transparent;outline:transparent;border:none;color:",";font-size:inherit;"],(function(e){return e.isSelected?e.theme.primary:e.theme.text}));var M=function(e){var t=e.onChange,n=e.currentTheme;return Object(i.jsxs)(C,{children:[Object(i.jsx)("li",{children:Object(i.jsx)(S,{isSelected:n===A,value:A,onClick:function(e){return t(e.currentTarget.value)},children:"Light"})}),Object(i.jsx)("li",{children:Object(i.jsx)(S,{isSelected:n===k,value:k,onClick:function(e){return t(e.currentTarget.value)},children:"Dark"})})]})},I={text:"#000",background:"#FFF"},P={text:"#FFF",background:"#0F2032"},E={primary:"#E7555A"};function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var H=function(){var e=Object(c.useState)(""),t=e[0],n=e[1],r=Object(c.useState)({}),i=r[0],o=r[1];return Object(c.useEffect)((function(){localStorage.getItem("theme")?n(localStorage.getItem("theme")):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?n(k):n(A)}),[]),Object(c.useEffect)((function(){o(function(e){switch(e){case A:return N(N({},E),I);case k:return N(N({},E),P);default:return N(N({},E),I)}}(t))}),[t]),{theme:i,themeName:t,setThemeName:function(e){localStorage.setItem("theme",e),n(e)}}};function D(){var e,t,n=(e=['\n  #__next {\n    height: 100%;\n  }\n\n  h1 {\n    font-family: "Oswald", sans-serif;\n    font-size: 36px;\n  }\n\n  span.highlight {\n    color: ',";\n  }\n\n  html, body {\n    background: ",";\n    color: ",';\n    font-family: "JetBrains Mono", monospace;\n    font-weight: 400;\n    min-height: 90vh;\n    margin: 0px;\n    padding: 0px;\n    height: 100%;\n    width: 100%;\n  }\n\n  main {\n    padding: 25px 50px;\n    height: calc(100% - 450px); \n    @media (min-width: 1920px) {\n      width: 30vw;\n    }\n    @media (min-width: 1200px) and (max-width: 1920px) {\n      width: 40vw;\n    }\n    @media (min-width: 1024px) and (max-width: 1200px) {\n      width: 80vw;\n    }\n    @media (max-width: 1024px) {\n      width: 100%;\n    }\n    margin: 0 auto;\n  }\n\n  button {\n    font-family: "JetBrains Mono", monospace;\n  }\n\n  a {\n    text-decoration: none;\n    color: ',";\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  .rounded {\n    border-radius: 100%;\n  }\n\n  ul {\n    list-style-type: none;\n  }\n"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return D=function(){return n},n}var q=Object(s.b)(D(),(function(e){return e.theme.primary}),(function(e){return e.theme.background}),(function(e){return e.theme.text}),(function(e){return e.theme.primary}));function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t=e.Component,n=e.pageProps,r=H(),o=r.theme,c=r.themeName,u=r.setThemeName;return o?Object(i.jsxs)(s.a,{theme:o,children:[Object(i.jsxs)(a.a,{children:[Object(i.jsx)("title",{children:"Long-Quan"}),Object(i.jsx)("link",{rel:"icon",href:"/favicon.ico"}),Object(i.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),Object(i.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;800&display=swap",rel:"stylesheet"}),Object(i.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap",rel:"stylesheet"})]}),Object(i.jsx)(q,{}),Object(i.jsxs)(R,{children:[Object(i.jsx)(M,{onChange:u,currentTheme:c}),Object(i.jsxs)(F,{children:[Object(i.jsx)(g,{}),Object(i.jsx)(t,T({},n))]}),Object(i.jsx)(_,{})]})]}):null};var R=s.c.div.withConfig({displayName:"_app__Container",componentId:"sc-17zi1f1-0"})(["display:flex;flex-direction:column;padding:15px 25px;height:100%;"]),F=s.c.div.withConfig({displayName:"_app__Main",componentId:"sc-17zi1f1-1"})(["display:flex;flex-direction:column;flex:1;justify-content:center;text-align:center;"])},"20a2":function(e,t,n){e.exports=n("nOHt")},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},a=n("lwAK"),c=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(i){var o=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var a=i.key.slice(i.key.indexOf("$")+1);e.has(a)?o=!1:e.add(a)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(var c=0,s=f.length;c<s;c++){var u=f[c];if(i.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var l=i.props[u],d=r[u]||new Set;d.has(l)?o=!1:(d.add(l),r[u]=d)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return i.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,i.useContext)(a.AmpStateContext),r=(0,i.useContext)(c.HeadManagerContext);return i.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},"98FW":function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}},Aiso:function(e,t,n){e.exports=n("dQHF")},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},UWYU:function(e,t,n){"use strict";t.__esModule=!0,t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[]}},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),i=n("/GRZ"),o=n("i2R6"),a=(n("qXWd"),n("48fX")),c=n("tCBg"),s=n("T0f4");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var i=s(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),d=function(e){a(n,e);var t=u(n);function n(e){var o;return i(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),i=n("7KCV");t.__esModule=!0,t.default=void 0;var o=i(n("q1tI")),a=n("elyg"),c=n("nOHt"),s=n("vNVm"),u={};function l(e,t,n,r){if((0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(i?"%"+i:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),i=n&&n.pathname||"/",d=o.default.useMemo((function(){var t=(0,a.resolveHref)(i,e.href,!0),n=r(t,2),o=n[0],c=n[1];return{href:o,as:e.as?(0,a.resolveHref)(i,e.as):c||o}}),[i,e.href,e.as]),f=d.href,p=d.as,h=e.children,m=e.replace,y=e.shallow,g=e.scroll,b=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var v=o.Children.only(h),x=v&&"object"===typeof v&&v.ref,j=(0,s.useIntersection)({rootMargin:"200px"}),w=r(j,2),O=w[0],_=w[1],A=o.default.useCallback((function(e){O(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,O]);(0,o.useEffect)((function(){var e=_&&t&&(0,a.isLocalURL)(f),r="undefined"!==typeof b?b:n&&n.locale,i=u[f+"%"+p+(r?"%"+r:"")];e&&!i&&l(n,f,p,{locale:r})}),[p,f,_,b,t,n]);var k={ref:A,onClick:function(e){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,o,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[i?"replace":"push"](n,r,{shallow:o,locale:s}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,f,p,m,y,g,b)},onMouseEnter:function(e){(0,a.isLocalURL)(f)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),l(n,f,p,{priority:!0}))}};return(e.passHref||"a"===v.type&&!("href"in v.props))&&(k.href=(0,a.addBasePath)((0,a.addLocale)(p,"undefined"!==typeof b?b:n&&n.locale,n&&n.defaultLocale))),o.default.cloneElement(v,k)};t.default=d},dEHY:function(e,t,n){"use strict";t.__esModule=!0,t.toBase64=function(e){return window.btoa(e)}},dQHF:function(e,t,n){"use strict";var r=n("zoAU"),i=n("mPvQ"),o=n("AroE");t.__esModule=!0,t.default=function(e){var t=e.src,n=e.sizes,o=e.unoptimized,c=void 0!==o&&o,l=e.priority,f=void 0!==l&&l,p=e.loading,m=e.className,y=e.quality,g=e.width,j=e.height,w=e.objectFit,O=e.objectPosition,_=(0,a.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition"]),A=n?"responsive":"intrinsic",k=!1;"unsized"in _?(k=Boolean(_.unsized),delete _.unsized):"layout"in _&&(_.layout&&(A=_.layout),delete _.layout);0;var C=!f&&("lazy"===p||"undefined"===typeof p);t&&t.startsWith("data:")&&(c=!0,C=!1);var S,M,I,P=(0,d.useIntersection)({rootMargin:"200px",disabled:!C}),E=r(P,2),z=E[0],N=E[1],H=!C||N,D=x(g),q=x(j),L=x(y),T={visibility:H?"visible":"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:w,objectPosition:O};if("undefined"!==typeof D&&"undefined"!==typeof q&&"fill"!==A){var R=q/D,F=isNaN(R)?"100%":"".concat(100*R,"%");"responsive"===A?(S={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},M={display:"block",boxSizing:"border-box",paddingTop:F}):"intrinsic"===A?(S={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},M={boxSizing:"border-box",display:"block",maxWidth:"100%"},I='<svg width="'.concat(D,'" height="').concat(q,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===A&&(S={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:D,height:q})}else"undefined"===typeof D&&"undefined"===typeof q&&"fill"===A&&(S={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var B={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"};H&&(B=function(e){var t=e.src,n=e.unoptimized,r=e.layout,o=e.width,a=e.quality,c=e.sizes;if(n)return{src:t};var s=function(e,t){if("number"!==typeof e||"fill"===t||"responsive"===t)return{widths:h,kind:"w"};return{widths:i(new Set([e,2*e,3*e].map((function(e){return b.find((function(t){return t>=e}))||b[b.length-1]})))),kind:"x"}}(o,r),u=s.widths,l=s.kind,d=u.length-1,f=u.map((function(e,n){return"".concat(v({src:t,quality:a,width:e})," ").concat("w"===l?e:n+1).concat(l)})).join(", ");c||"w"!==l||(c="100vw");return{src:t=v({src:t,quality:a,width:u[d]}),sizes:c,srcSet:f}}({src:t,unoptimized:c,layout:A,width:D,quality:L,sizes:n}));k&&(S=void 0,M=void 0,T=void 0);return s.default.createElement("div",{style:S},M?s.default.createElement("div",{style:M},I?s.default.createElement("img",{style:{maxWidth:"100%",display:"block"},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,u.toBase64)(I))}):null):null,s.default.createElement("img",Object.assign({},_,B,{decoding:"async",className:m,ref:z,style:T})))};var a=o(n("98FW")),c=o(n("1ccW")),s=o(n("q1tI")),u=n("dEHY"),l=n("UWYU"),d=n("vNVm");var f=new Map([["imgix",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,o=["auto=format","fit=max","w="+r],a="";i&&o.push("q="+i);o.length&&(a="?"+o.join("&"));return"".concat(t).concat(j(n)).concat(a)}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t).concat(o).concat(j(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(j(n),"?imwidth=").concat(r)}],["default",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}]]),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||l.imageConfigDefault,h=p.deviceSizes,m=p.imageSizes,y=p.loader,g=p.path,b=(p.domains,[].concat(i(h),i(m)));function v(e){var t=f.get(y);if(t)return t((0,c.default)({root:g},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "),". Received: ").concat(y))}function x(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function j(e){return"/"===e[0]?e.slice(1):e}h.sort((function(e,t){return e-t})),b.sort((function(e,t){return e-t}))},g4pe:function(e,t,n){e.exports=n("8Kt/")},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var i=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=i},mPvQ:function(e,t,n){var r=n("5fIB"),i=n("rlHP"),o=n("KckH"),a=n("kG2m");e.exports=function(e){return r(e)||i(e)||o(e)||a()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},vNVm:function(e,t,n){"use strict";var r=n("zoAU"),i=n("AroE");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,i=(0,o.useRef)(),u=(0,o.useState)(!1),l=r(u,2),d=l[0],f=l[1],p=(0,o.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),n||d||e&&e.tagName&&(i.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){o.unobserve(e),0===a.size&&(o.disconnect(),s.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,o.useEffect)((function(){c||d||(0,a.default)((function(){return f(!0)}))}),[d]),[p,d]};var o=n("q1tI"),a=i(n("0G5g")),c="undefined"!==typeof IntersectionObserver;var s=new Map}},[[0,0,1,3,2]]]);