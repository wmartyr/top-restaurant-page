(()=>{"use strict";var e={656:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([e.id,"/* https://piccalil.li/blog/a-modern-css-reset */\n\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role='list'],\nol[role='list'] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n   scroll-behavior: auto;\n  }\n  \n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}",""]);const c=i},247:(e,n,t)=>{t.d(n,{Z:()=>m});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),c=t(667),d=t.n(c),s=new URL(t(451),t.b),l=i()(r()),u=d()(s);l.push([e.id,"\n:root {\n    --color-primary-light: #f6f1ee;\n    --color-primary-dark: #4b3527;\n    --font-primary: 'Cormorant Garamond', serif;\n    --font-secondary: 'Tenor Sans', sans-serif;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    background-color: var(--color-primary-light);\n    padding: 20px 12px;\n    min-width: 375x;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    align-items: stretch;\n    gap: 10px;\n    height: calc(100vh - 40px);\n    padding: 10px clamp(10px, 3vw, 100px);\n    border: 1px solid var(--color-primary-dark);\n    border-radius: 10px;\n    max-width: 450px;\n}\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    gap: 20px;\n}\n\n.header-left {\n    font-family: var(--font-primary);\n    color: var(--color-primary-dark);\n    cursor: pointer;\n}\n\n.name-main {\n    font-size: 3rem;\n    line-height: 3rem;\n    color: var(--color-primary-dark);\n}\n\n.name-secondary {\n    font-size: 2rem;\n    line-height: 2rem;\n}\n\n.header-right {\n    font-family: var(--font-secondary);\n    font-size: 1rem;\n}\n\nbutton {\n    color: var(--color-primary-dark);\n    border: none;\n    margin: 0;\n    text-decoration: none;\n    cursor: pointer;\n    background: none;\n    border-radius: 5px;\n}\n\n.highlight {\n    color: var(--color-primary-light);\n    background-color: var(--color-primary-dark);\n}\n\nmain {\n    min-width: 329px;\n}\n\n.main-of-main {\n    background-image: url("+u+");\n    background-repeat: no-repeat;\n    background-size: cover;\n    margin-top: 20px;\n    height: calc(100vh - 220px);\n}\n\n.main-of-menu {\n    display: grid;\n    grid-template-columns: 1fr 100px 1fr;\n    grid-template-rows: repeat(3, 1fr);\n    column-gap: 10px;\n    row-gap: 20px;\n    margin-top: 20px;\n    height: calc(100vh - 160px);\n}\n\n.main-about-us {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: stretch;\n    gap: 10px;\n    font-family: var(--font-secondary);\n    font-size: 0.75rem;\n    padding: 50px;\n    text-align: center;\n}\n\n.menu-image {\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n}\n\n.menu-image-1 {\n    grid-column: 1 / 3;\n}\n\n.menu-desc {\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    gap: 10px;\n    font-family: var(--font-secondary);\n    font-size: 0.625rem;\n}\n\n.food-name {\n    font-size: 1rem;\n}\n\n.food-desc {\n    text-align: center;\n}\n\n.food-price {\n    align-self: flex-end;\n}\n\n.menu-image-2 {\n    grid-column: 2 / 4;\n    grid-row: 2;\n}\n\n.menu-image-3 {\n    grid-column: 1 / 3;\n    grid-row: 3;\n}\n\nfooter {\n    margin-top: 20px;\n    height: 20px;\n    font-family: var(--font-secondary);\n    font-size: 0.625rem;\n    text-align: center;\n    color: var(--color-primary-dark);\n}",""]);const m=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=o.base?d[0]+o.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var m=t(u),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)n[m].references++,n[m].updater(p);else{var h=r(p,o);o.byIndex=c,n.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var d=o(e,r),s=0;s<a.length;s++){var l=t(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},451:(e,n,t)=>{e.exports=t.p+"f935e0974675af5217c1.jpg"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const e=document.createElement("div"),n=document.createElement("header"),o=document.createElement("div");o.classList.add("header-left"),o.setAttribute("id","logo");const r=document.createElement("div");r.classList.add("name-main"),r.textContent="MaCh";const a=document.createElement("div");a.classList.add("name-main"),a.textContent="Bakery",o.appendChild(r),o.appendChild(a);const i=document.createElement("div");i.classList.add("header-right");const c=document.createElement("button");c.classList.add("menu-page"),c.setAttribute("id","menu-page-button"),c.textContent="MENU";const d=document.createElement("button");d.classList.add("about-us"),d.setAttribute("id","about-us-button"),d.textContent="ABOUT US",i.appendChild(c),i.appendChild(d),n.appendChild(o),n.appendChild(i);const s=document.createElement("main");s.classList.add("main-of-main");const l=document.createElement("footer");l.textContent="320 Pulteney St, Adelaide South Australia 5000",e.appendChild(n),e.appendChild(s),e.appendChild(l);const u=e,m=t.p+"4bd016e98456ab63bbda.jpg",p=t.p+"1909b730fa4893a7b1f8.jpg",h=t.p+"4a7edd6fb15f8543fb2a.jpg",E=document.createElement("div"),v=document.createElement("header"),f=document.createElement("div");f.classList.add("header-left"),f.setAttribute("id","logo");const g=document.createElement("div");g.classList.add("name-secondary"),g.textContent="MaCh";const b=document.createElement("div");b.classList.add("name-secondary"),b.textContent="Bakery",f.appendChild(g),f.appendChild(b);const C=document.createElement("div");C.classList.add("header-right");const y=document.createElement("button");y.classList.add("menu-page","highlight"),y.setAttribute("id","menu-page-button"),y.textContent="MENU";const L=document.createElement("button");L.classList.add("about-us"),L.setAttribute("id","about-us-button"),L.textContent="ABOUT US",C.appendChild(y),C.appendChild(L),v.appendChild(f),v.appendChild(C);const x=document.createElement("main");x.classList.add("main-of-menu");const S=document.createElement("img");S.classList.add("menu-image","menu-image-1"),S.src=m;const A=document.createElement("div");A.classList.add("menu-desc","menu-desc-1");const T=document.createElement("div");T.classList.add("food-name"),T.textContent="LAMINGTONS";const k=document.createElement("div");k.classList.add("food-desc"),k.textContent="3 MOIST BUTTER SPONGE CAKES DIPPED IN CHOCOLATE THEN COATED WITH COCONUT";const I=document.createElement("div");I.classList.add("food-price"),I.textContent="$ 5.0",A.appendChild(T),A.appendChild(k),A.appendChild(I);const N=document.createElement("img");N.classList.add("menu-image","menu-image-2"),N.src=p;const R=document.createElement("div");R.classList.add("menu-desc","menu-desc-2");const O=document.createElement("div");O.classList.add("food-name"),O.textContent="TIRAMISU";const w=document.createElement("div");w.classList.add("food-desc"),w.textContent="LADYFINGERS DIPPED IN COFFEE WITH MASCARPONE CHEESE AND COCOA";const D=document.createElement("div");D.classList.add("food-price"),D.textContent="$ 7.0",R.appendChild(O),R.appendChild(w),R.appendChild(D);const H=document.createElement("img");H.classList.add("menu-image","menu-image-3"),H.src=h;const M=document.createElement("div");M.classList.add("menu-desc","menu-desc-3");const q=document.createElement("div");q.classList.add("food-name"),q.textContent="CANNOLI";const U=document.createElement("div");U.classList.add("food-desc"),U.textContent="3 TUBE SHAPED PASTRY SHELLS WITH A SWEET CREAMY FILLING";const P=document.createElement("div");P.classList.add("food-price"),P.textContent="$ 7.0",M.appendChild(q),M.appendChild(U),M.appendChild(P),x.appendChild(S),x.appendChild(A),x.appendChild(N),x.appendChild(R),x.appendChild(H),x.appendChild(M),E.appendChild(v),E.appendChild(x);const B=E,j=document.createElement("div"),F=document.createElement("header"),z=document.createElement("div");z.classList.add("header-left"),z.setAttribute("id","logo");const G=document.createElement("div");G.classList.add("name-secondary"),G.textContent="MaCh";const Y=document.createElement("div");Y.classList.add("name-secondary"),Y.textContent="Bakery",z.appendChild(G),z.appendChild(Y);const Z=document.createElement("div");Z.classList.add("header-right");const W=document.createElement("button");W.classList.add("menu-page"),W.setAttribute("id","menu-page-button"),W.textContent="MENU";const $=document.createElement("button");$.classList.add("about-us","highlight"),$.setAttribute("id","about-us-button"),$.textContent="ABOUT US",Z.appendChild(W),Z.appendChild($),F.appendChild(z),F.appendChild(Z);const K=document.createElement("main");K.classList.add("main-about-us");const _=document.createElement("p");_.textContent="SITUATED IN THE ADELAIDE CBD, MACH BAKERY HAS BEEN SERVING FINE DELICACIES TO THE PEOPLE OF ADELAIDE SINCE 1932.";const V=document.createElement("p");V.textContent="HENRY MASTERS ARRIVED IN AUSTRALIA IN 1926. HE WORKED ODD JOBS UNTIL HE HAD ENOUGH MONEY TO START MASTERS BAKERY IN NORTH ADELAIDE IN 1932.";const J=document.createElement("p");J.textContent="IN 1940, HE MARRIED ELEANOR CHAPMAN AND HE RENAMED HIS BAKERY AFTER THE FIRST TWO LETTERS OF THEIR SURNAMES.";const Q=document.createElement("p");Q.textContent="THEY MOVED TO THEIR CURRENT LOCATION IN 1952. IT IS NOW OWNED AND OPERATED BY THEIR GREAT GRANDCHILDREN STILL PRODUCING THE BEST DESSERTS IN TOWN.",K.appendChild(_),K.appendChild(V),K.appendChild(J),K.appendChild(Q),j.appendChild(F),j.appendChild(K);const X=j;var ee=t(379),ne=t.n(ee),te=t(795),oe=t.n(te),re=t(569),ae=t.n(re),ie=t(565),ce=t.n(ie),de=t(216),se=t.n(de),le=t(589),ue=t.n(le),me=t(656),pe={};pe.styleTagTransform=ue(),pe.setAttributes=ce(),pe.insert=ae().bind(null,"head"),pe.domAPI=oe(),pe.insertStyleElement=se(),ne()(me.Z,pe),me.Z&&me.Z.locals&&me.Z.locals;var he=t(247),Ee={};Ee.styleTagTransform=ue(),Ee.setAttributes=ce(),Ee.insert=ae().bind(null,"head"),Ee.domAPI=oe(),Ee.insertStyleElement=se(),ne()(he.Z,Ee),he.Z&&he.Z.locals&&he.Z.locals;const ve=document.querySelector("#content");document.querySelectorAll("button");var fe="main";ve.appendChild(u);var ge=document.querySelector("#logo"),be=document.querySelector("#menu-page-button"),Ce=document.querySelector("#about-us-button");function ye(){"menu"===fe?(ge.removeEventListener("click",ye),be.removeEventListener("click",Le),Ce.removeEventListener("click",xe),ve.removeChild(B),ve.appendChild(u),ge=document.querySelector("#logo"),be=document.querySelector("#menu-page-button"),Ce=document.querySelector("#about-us-button"),ge.addEventListener("click",ye),be.addEventListener("click",Le),Ce.addEventListener("click",xe),fe="main"):"about"===fe&&(ge.removeEventListener("click",ye),be.removeEventListener("click",Le),Ce.removeEventListener("click",xe),ve.removeChild(X),ve.appendChild(u),ge=document.querySelector("#logo"),be=document.querySelector("#menu-page-button"),Ce=document.querySelector("#about-us-button"),ge.addEventListener("click",ye),be.addEventListener("click",Le),Ce.addEventListener("click",xe),fe="main")}function Le(){console.log("menu clicked"),"main"===fe?(ge.removeEventListener("click",ye),be.removeEventListener("click",Le),Ce.removeEventListener("click",xe),ve.removeChild(u),ve.appendChild(B),ge=document.querySelector("#logo"),be=document.querySelector("#menu-page-button"),Ce=document.querySelector("#about-us-button"),ge.addEventListener("click",ye),be.addEventListener("click",Le),Ce.addEventListener("click",xe),fe="menu"):"about"===fe&&(ge.removeEventListener("click",ye),be.removeEventListener("click",Le),Ce.removeEventListener("click",xe),ve.removeChild(X),ve.appendChild(B),ge=document.querySelector("#logo"),be=document.querySelector("#menu-page-button"),Ce=document.querySelector("#about-us-button"),ge.addEventListener("click",ye),be.addEventListener("click",Le),Ce.addEventListener("click",xe),fe="menu")}function xe(){console.log("about us clicked"),"main"===fe?(ge.removeEventListener("click",ye),be.removeEventListener("click",Le),Ce.removeEventListener("click",xe),ve.removeChild(u),ve.appendChild(X),ge=document.querySelector("#logo"),be=document.querySelector("#menu-page-button"),Ce=document.querySelector("#about-us-button"),ge.addEventListener("click",ye),be.addEventListener("click",Le),Ce.addEventListener("click",xe),fe="about"):"menu"===fe&&(ge.removeEventListener("click",ye),be.removeEventListener("click",Le),Ce.removeEventListener("click",xe),ve.removeChild(B),ve.appendChild(X),ge=document.querySelector("#logo"),be=document.querySelector("#menu-page-button"),Ce=document.querySelector("#about-us-button"),ge.addEventListener("click",ye),be.addEventListener("click",Le),Ce.addEventListener("click",xe),fe="about")}console.log(ge),ge.addEventListener("click",ye),be.addEventListener("click",Le),Ce.addEventListener("click",xe)})()})();