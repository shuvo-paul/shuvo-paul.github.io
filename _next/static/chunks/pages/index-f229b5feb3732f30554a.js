(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,n){var r=n(3646),i=n(6860),a=n(379),o=n(8206);e.exports=function(e){return r(e)||i(e)||a(e)||o()}},9917:function(e,t,n){"use strict";var r=n(3038),i=n(319),a=n(5318);t.default=function(e){var t=e.src,n=e.sizes,i=e.unoptimized,a=void 0!==i&&i,d=e.priority,p=void 0!==d&&d,m=e.loading,v=e.className,x=e.quality,y=e.width,g=e.height,b=e.objectFit,_=e.objectPosition,k=e.loader,S=void 0===k?O:k,N=e.placeholder,A=void 0===N?"empty":N,M=e.blurDataURL,E=(0,o.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition","loader","placeholder","blurDataURL"]),P=n?"responsive":"intrinsic";"layout"in E&&(E.layout&&(P=E.layout),delete E.layout);var z="";if(function(e){return"object"===typeof e&&(h(e)||function(e){return void 0!==e.src}(e))}(t)){var C=h(t)?t.default:t;if(!C.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(C)));if(M=M||C.blurDataURL,z=C.src,(!P||"fill"!==P)&&(g=g||C.height,y=y||C.width,!C.height||!C.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(C)))}t="string"===typeof t?t:z;var I=j(y),D=j(g),L=j(x);0;var R=!p&&("lazy"===m||"undefined"===typeof m);t&&t.startsWith("data:")&&(a=!0,R=!1);var H,q,W,U=(0,f.useIntersection)({rootMargin:"200px",disabled:!R}),T=r(U,2),B=T[0],F=T[1],J=!R||F,K=(0,c.default)({position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:b,objectPosition:_},"blur"===A?{filter:"blur(20px)",backgroundSize:"cover",backgroundImage:'url("'.concat(M,'")')}:void 0);if("undefined"!==typeof I&&"undefined"!==typeof D&&"fill"!==P){var V=D/I,G=isNaN(V)?"100%":"".concat(100*V,"%");"responsive"===P?(H={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},q={display:"block",boxSizing:"border-box",paddingTop:G}):"intrinsic"===P?(H={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},q={boxSizing:"border-box",display:"block",maxWidth:"100%"},W='<svg width="'.concat(I,'" height="').concat(D,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===P&&(H={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:I,height:D})}else"undefined"===typeof I&&"undefined"===typeof D&&"fill"===P&&(H={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var Q={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};J&&(Q=w({src:t,unoptimized:a,layout:P,width:I,quality:L,sizes:n,loader:S}));return s.default.createElement("div",{style:H},q?s.default.createElement("div",{style:q},W?s.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,u.toBase64)(W))}):null):null,!J&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},E,w({src:t,unoptimized:a,layout:P,width:I,quality:L,sizes:n,loader:S}),{decoding:"async",style:K,className:v}))),s.default.createElement("img",Object.assign({},E,Q,{decoding:"async",className:v,ref:function(e){B(e),function(e,t){if("blur"===t&&e){var n=function(){e.src.startsWith("data:")||("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"}))};e.complete?n():e.onload=n}}(e,A)},style:K})),p?s.default.createElement(l.default,null,s.default.createElement("link",{key:"__nimg-"+Q.src+Q.srcSet+Q.sizes,rel:"preload",as:"image",href:Q.srcSet?void 0:Q.src,imagesrcset:Q.srcSet,imagesizes:Q.sizes})):null)};var o=a(n(7316)),c=a(n(7154)),s=a(n(7294)),l=a(n(2775)),u=n(8814),d=n(5655),f=n(7426);var p=new Map([["imgix",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,a=["auto=format","fit=max","w="+r],o="";i&&a.push("q="+i);a.length&&(o="?"+a.join("&"));return"".concat(t).concat(_(n)).concat(o)}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,a=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t).concat(a).concat(_(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(_(n),"?imwidth=").concat(r)}],["default",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}]]);function h(e){return void 0!==e.default}var m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"imgix"}||d.imageConfigDefault,v=m.deviceSizes,x=m.imageSizes,y=m.loader,g=m.path,b=(m.domains,[].concat(i(v),i(x)));function w(e){var t=e.src,n=e.unoptimized,r=e.layout,a=e.width,o=e.quality,c=e.sizes,s=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var l=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var r,a=/(^|\s)(1?\d?\d)vw/g,o=[];r=a.exec(n);r)o.push(parseInt(r[2]));if(o.length){var c=.01*Math.min.apply(Math,o);return{widths:b.filter((function(e){return e>=v[0]*c})),kind:"w"}}return{widths:b,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:v,kind:"w"}:{widths:i(new Set([e,2*e].map((function(e){return b.find((function(t){return t>=e}))||b[b.length-1]})))),kind:"x"}}(a,r,c),u=l.widths,d=l.kind,f=u.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:u.map((function(e,n){return"".concat(s({src:t,quality:o,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:s({src:t,quality:o,width:u[f]})}}function j(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function O(e){var t=p.get(y);if(t)return t((0,c.default)({root:g},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(y))}function _(e){return"/"===e[0]?e.slice(1):e}v.sort((function(e,t){return e-t})),b.sort((function(e,t){return e-t}))},2167:function(e,t,n){"use strict";var r=n(3038),i=n(862);t.default=void 0;var a=i(n(7294)),o=n(9414),c=n(4651),s=n(7426),l={};function u(e,t,n,r){if(e&&(0,o.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(i?"%"+i:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,i=(0,c.useRouter)(),d=a.default.useMemo((function(){var t=(0,o.resolveHref)(i,e.href,!0),n=r(t,2),a=n[0],c=n[1];return{href:a,as:e.as?(0,o.resolveHref)(i,e.as):c||a}}),[i,e.href,e.as]),f=d.href,p=d.as,h=e.children,m=e.replace,v=e.shallow,x=e.scroll,y=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var g=(t=a.Children.only(h))&&"object"===typeof t&&t.ref,b=(0,s.useIntersection)({rootMargin:"200px"}),w=r(b,2),j=w[0],O=w[1],_=a.default.useCallback((function(e){j(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,j]);(0,a.useEffect)((function(){var e=O&&n&&(0,o.isLocalURL)(f),t="undefined"!==typeof y?y:i&&i.locale,r=l[f+"%"+p+(t?"%"+t:"")];e&&!r&&u(i,f,p,{locale:t})}),[p,f,O,y,n,i]);var k={ref:_,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,a,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(n))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),t[i?"replace":"push"](n,r,{shallow:a,locale:s,scroll:c}))}(e,i,f,p,m,v,x,y)},onMouseEnter:function(e){(0,o.isLocalURL)(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(i,f,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var S="undefined"!==typeof y?y:i&&i.locale,N=i&&i.isLocaleDomain&&(0,o.getDomainLocale)(p,S,i&&i.locales,i&&i.domainLocales);k.href=N||(0,o.addBasePath)((0,o.addLocale)(p,S,i&&i.defaultLocale))}return a.default.cloneElement(t,k)};t.default=d},7426:function(e,t,n){"use strict";var r=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,s=(0,i.useRef)(),l=(0,i.useState)(!1),u=r(l,2),d=u[0],f=u[1],p=(0,i.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,a=r.observer,o=r.elements;return o.set(e,t),a.observe(e),function(){o.delete(e),a.unobserve(e),0===o.size&&(a.disconnect(),c.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,i.useEffect)((function(){if(!o&&!d){var e=(0,a.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[d]),[p,d]};var i=n(7294),a=n(3447),o="undefined"!==typeof IntersectionObserver;var c=new Map},3398:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var i=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=i},6393:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(i.default.useContext(a.AmpStateContext))};var r,i=(r=n(7294))&&r.__esModule?r:{default:r},a=n(3398);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,i=void 0!==r&&r,a=e.hasQuery,o=void 0!==a&&a;return n||i&&o}},2775:function(e,t,n){"use strict";var r=n(9713);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=f,t.default=void 0;var a,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=r?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n(7294)),c=(a=n(3244))&&a.__esModule?a:{default:a},s=n(3398),l=n(1165),u=n(6393);function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(i){var a=!0,o=!1;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){o=!0;var c=i.key.slice(i.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(i.type){case"title":case"base":t.has(i.type)?a=!1:t.add(i.type);break;case"meta":for(var s=0,l=h.length;s<l;s++){var u=h[s];if(i.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?a=!1:n.add(u);else{var d=i.props[u],f=r[u]||new Set;"name"===u&&o||!f.has(d)?(f.add(d),r[u]=f):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,o.default.cloneElement(e,c)}return o.default.cloneElement(e,{key:a})}))}var v=function(e){var t=e.children,n=(0,o.useContext)(s.AmpStateContext),r=(0,o.useContext)(l.HeadManagerContext);return o.default.createElement(c.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)};t.default=v},3244:function(e,t,n){"use strict";var r=n(319),i=n(4575),a=n(3913),o=(n(1506),n(2205)),c=n(8585),s=n(9754);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var i=s(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var u=n(7294),d=function(e){o(n,e);var t=l(n);function n(e){var a;return i(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=d},8814:function(e,t){"use strict";t.__esModule=!0,t.toBase64=function(e){return window.btoa(e)}},6719:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return p},default:function(){return h}});var r=n(5893),i=n(6156),a=n(9008),o=n(1664),c=function(){return(0,r.jsx)("header",{className:"py-8",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"flex flex-wrap flex-row items-center",children:[(0,r.jsx)("div",{className:"flex-shrink",children:(0,r.jsx)(o.default,{href:"/",children:(0,r.jsx)("a",{className:"text-primary-500 text-2xl font-medium font-display tracking-wide leading-none",children:"{{Shuvo Paul}}"})})}),(0,r.jsx)("div",{className:"flex-grow",children:(0,r.jsxs)("ul",{className:"flex flex-wrap flex-row justify-end -mx-4",children:[(0,r.jsx)("li",{className:"mx-4",children:(0,r.jsx)(o.default,{href:"#experience",children:(0,r.jsx)("a",{className:"text-white text-opacity-70 font-light hover:text-primary-500 transition-colors",children:"Experiences"})})}),(0,r.jsx)("li",{className:"mx-4",children:(0,r.jsx)(o.default,{href:"#work",children:(0,r.jsx)("a",{className:"text-white text-opacity-70 font-light hover:text-primary-500 transition-colors",children:"Works"})})}),(0,r.jsx)("li",{className:"mx-4",children:(0,r.jsx)(o.default,{href:"#contact",children:(0,r.jsx)("a",{className:"text-white text-opacity-70 font-light hover:text-primary-500 transition-colors",children:"Contact"})})}),(0,r.jsx)("li",{className:"mx-4",children:(0,r.jsx)(o.default,{href:"#about",children:(0,r.jsx)("a",{className:"text-primary-500 font-light border border-primary-500 py-2 px-4 rounded-sm hover:bg-primary-100 transition-all hover:bg-opacity-20",children:"Resume"})})})]})})]})})})},s=n(5675),l=function(e){var t=e.title,n=e.content,i=e.techs;return(0,r.jsx)("section",{className:"hero py-8 mt-8",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"max-w-5xl mx-auto",children:(0,r.jsxs)("div",{className:"flex flex-wrap",children:[(0,r.jsx)("div",{className:"flex-1 px-4",children:(0,r.jsxs)("div",{className:"max-w-[512px]",children:[(0,r.jsx)("div",{className:"text-white text-opacity-70 font-bold text-6xl mb-6",children:"Hello,"}),(0,r.jsx)("h1",{className:"hero__title text-opacity-90 text-white text-4xl mb-4",children:t}),(0,r.jsx)("div",{className:"hero__content text-white text-opacity-70 mb-4",dangerouslySetInnerHTML:{__html:n}}),(0,r.jsx)("div",{className:"text-white text-opacity-70",children:"Here are few techs I love to work with:"}),(0,r.jsx)("ul",{className:"tech-list text-white text-opacity-70 grid grid-cols-2 gap-2 mt-6",children:i.map((function(e,t){return(0,r.jsx)("li",{className:"before:content-['\u27aa'] before:text-primary-500 before:mr-2 font-light",children:e},t)}))})]})}),(0,r.jsx)("div",{className:"flex-shrink px-4",children:(0,r.jsx)("div",{className:"w-[224px] rounded-lg overflow-hidden mt-16 mr-6",children:(0,r.jsx)(s.default,{src:"./me.jpeg",alt:"Shuvo Paul",width:"224",height:"224"})})})]})})})})},u=function(e){var t=e.list;return(0,r.jsx)("section",{id:"experience",className:"mt-12",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"max-w-5xl mx-auto px-4",children:[(0,r.jsxs)("h2",{className:"text-white text-opacity-90 text-2xl mb-9",children:["What I've experienced ..."," "]}),t.map((function(e,t){return(0,r.jsxs)("div",{className:"mb-8",children:[(0,r.jsxs)("div",{className:"border-l-primary-500 border-l-2 text-white text-opacity-80 text-xl pl-8",children:[e.title,(0,r.jsx)(o.default,{href:"//".concat(e.companyLink),children:(0,r.jsxs)("a",{className:"text-primary-500 text-lg",target:"_blank",children:[" @",e.company]})}),(0,r.jsxs)("span",{className:"text-white text-opacity-70 text-sm",children:[" (",e.year,")"]})]}),(0,r.jsx)("div",{className:"mt-2 pl-8 text-white text-opacity-70",children:e.content})]},t)}))]})})})};function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=!0;function h(e){var t=e.hero,n=e.experiencesList;return(0,r.jsxs)("div",{children:[(0,r.jsx)(a.default,{children:(0,r.jsx)("title",{children:"Web Developer || JavaScript, ReactJs, NodeJs, PHP, Silverstripe"})}),(0,r.jsx)(c,{}),(0,r.jsx)(l,f({},t)),(0,r.jsx)(u,{list:n})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6719)}])},5655:function(e,t){"use strict";t.__esModule=!0,t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1}},9008:function(e,t,n){e.exports=n(2775)},5675:function(e,t,n){e.exports=n(9917)},1664:function(e,t,n){e.exports=n(2167)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);