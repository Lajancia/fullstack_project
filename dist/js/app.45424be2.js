(function(e){function t(t){for(var n,r,l=t[0],s=t[1],i=t[2],d=0,h=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&h.push(c[r][0]),c[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);v&&v(t);while(h.length)h.shift()();return o.push.apply(o,i||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,r=1;r<a.length;r++){var l=a[r];0!==c[l]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},c={app:0},o=[];function l(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"08f03303"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a={about:1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"0d763c51"}[e]+".css",c=s.p+n,o=document.getElementsByTagName("link"),l=0;l<o.length;l++){var i=o[l],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===n||d===c))return t()}var h=document.getElementsByTagName("style");for(l=0;l<h.length;l++){i=h[l],d=i.getAttribute("data-href");if(d===n||d===c)return t()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=t,v.onerror=function(t){var n=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete r[e],v.parentNode.removeChild(v),a(o)},v.href=c;var u=document.getElementsByTagName("head")[0];u.appendChild(v)})).then((function(){r[e]=0})));var n=c[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,a){n=c[e]=[t,a]}));t.push(n[2]=o);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=l(e);var h=new Error;i=function(t){d.onerror=d.onload=null,clearTimeout(v);var a=c[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",h.name="ChunkLoadError",h.type=n,h.request=r,a[1](h)}c[e]=void 0}};var v=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var h=0;h<i.length;h++)t(i[h]);var v=d;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e623"),a("e379"),a("5dc8"),a("37e1");var n=a("7a23"),r=a("1250"),c=(a("7437"),{class:"h-screen bg-gradient-to-r from-dark to-dark_green",id:"background"}),o={class:"bg-container"},l=Object(n["createElementVNode"])("link",{rel:"shortcut icon",type:"image/png",href:"./assets/favicon.ico"},null,-1),s={class:"relative"},i={class:"absolute inset-y-0 left-0 h-full w-1/5"},d={class:"h-screen w-48 px-10"},h=Object(n["createElementVNode"])("div",{class:"flex flex-col justify-around text-4xl mx-3 py-8 text-yellow-500"}," MENU ",-1),v={class:"h-3/4 flex flex-col justify-around text-white"},u=Object(n["createStaticVNode"])('<h3 class="pl-1 text-sm flex items-center py-2 mb-2 text-white hover:text-yellow-500 transition duration-200 ease-in"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 25 25" fill="white"><path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"></path></svg><a class="hover:text-yellow-500 transition duration-200 ease-linear" href="http://lajanciadev.com/">Home</a></h3><h3 class="pl-1 text-sm flex items-center py-2 mb-2 hover:text-yellow-500 transition duration-200 ease-in"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 25 25" fill="white"><path d="M23.548 10.931l-10.479-10.478c-.302-.302-.698-.453-1.093-.453-.396 0-.791.151-1.093.453l-2.176 2.176 2.76 2.76c.642-.216 1.377-.071 1.889.44.513.515.658 1.256.435 1.9l2.66 2.66c.644-.222 1.387-.078 1.901.437.718.718.718 1.881 0 2.6-.719.719-1.883.719-2.602 0-.54-.541-.674-1.334-.4-2l-2.481-2.481v6.529c.175.087.34.202.487.348.717.717.717 1.881 0 2.601-.719.718-1.884.718-2.601 0-.719-.72-.719-1.884 0-2.601.177-.178.383-.312.602-.402v-6.589c-.219-.089-.425-.223-.602-.401-.544-.544-.676-1.343-.396-2.011l-2.721-2.721-7.185 7.185c-.302.302-.453.697-.453 1.093 0 .395.151.791.453 1.093l10.479 10.478c.302.302.697.452 1.092.452.396 0 .791-.15 1.093-.452l10.431-10.428c.302-.303.452-.699.452-1.094 0-.396-.15-.791-.452-1.093"></path></svg><a class="hover:text-yellow-500 transition duration-200 ease-linear" href="https://lajancia.github.io/">GitBlog</a></h3>',2),m={class:"pl-1 text-sm flex items-center py-2 mb-2 hover:text-yellow-500 transition duration-200 ease-in"},p=Object(n["createElementVNode"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 mr-2",viewBox:"0 0 25 25",fill:"white"},[Object(n["createElementVNode"])("path",{d:"M12 0l-11 6v12.131l11 5.869 11-5.869v-12.066l-11-6.065zm7.91 6.646l-7.905 4.218-7.872-4.294 7.862-4.289 7.915 4.365zm-6.91 14.554v-8.6l8-4.269v8.6l-8 4.269z"})],-1),f=Object(n["createTextVNode"])("Gallery"),b={class:"pl-1 text-sm flex items-center py-2 mb-2 hover:text-yellow-500 transition duration-200 ease-in"},w=Object(n["createElementVNode"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 mr-2",viewBox:"0 0 25 25",fill:"white"},[Object(n["createElementVNode"])("path",{d:"M22 0h-20v24h14l6-6v-18zm-6 18h4.36l-4.36 4.385v-4.385zm-3 1h-8v1h8v-1zm0-3h-8v1h8v-1zm6-2v-1h-14v1h14zm-7.059-4.968c-1.147-.265-2.214-.497-1.697-1.473 1.573-2.97.417-4.559-1.244-4.559-1.694 0-2.821 1.65-1.244 4.559.532.982-.575 1.214-1.697 1.473-1.024.237-1.062.745-1.059 1.635l.001.333h7.997l.001-.323c.004-.896-.03-1.407-1.058-1.645zm7.059.968h-4v1h4v-1zm0-2v-1h-4v1h4zm0-4h-4v1h4v-1z"})],-1),x=Object(n["createTextVNode"])("Resume"),g={class:"pl-1 text-sm flex items-center py-2 mb-2 hover:text-yellow-500 transition duration-200 ease-in"},j=Object(n["createElementVNode"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 mr-2",viewBox:"0 0 25 25",fill:"white"},[Object(n["createElementVNode"])("path",{d:"M12.23 15.5c-6.801 0-10.367-1.221-12.23-2.597v9.097h24v-8.949c-3.218 2.221-9.422 2.449-11.77 2.449zm1.77 2.532c0 1.087-.896 1.968-2 1.968s-2-.881-2-1.968v-1.032h4v1.032zm-14-8.541v-2.491h24v2.605c0 5.289-24 5.133-24-.114zm9-7.491c-1.104 0-2 .896-2 2v2h2v-1.5c0-.276.224-.5.5-.5h5c.276 0 .5.224.5.5v1.5h2v-2c0-1.104-.896-2-2-2h-6z"})],-1),y=Object(n["createTextVNode"])("Projects"),O=Object(n["createElementVNode"])("h3",{class:"pl-1 text-sm flex items-center py-2 mb-2 hover:text-yellow-500 transition duration-200 ease-in"},[Object(n["createElementVNode"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 mr-2",viewBox:"0 0 20 20",fill:"white"},[Object(n["createElementVNode"])("path",{"fill-rule":"evenodd",d:"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z","clip-rule":"evenodd"})]),Object(n["createElementVNode"])("a",{class:"hover:text-yellow-500 transition duration-200 ease-linear",href:"#"},"Settings")],-1),N={class:"absolute inset-y-0 right-0 h-full w-4/5"};function E(e,t,a,r,E,V){var z=Object(n["resolveComponent"])("router-link"),k=Object(n["resolveComponent"])("router-view");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",c,[Object(n["createElementVNode"])("div",o,[l,Object(n["createElementVNode"])("div",s,[Object(n["createElementVNode"])("div",i,[Object(n["createElementVNode"])("div",d,[h,Object(n["createElementVNode"])("div",v,[u,Object(n["createElementVNode"])("h3",m,[p,Object(n["createVNode"])(z,{to:"/about",class:"hover:text-yellow-500 transition duration-200 ease-linear"},{default:Object(n["withCtx"])((function(){return[f]})),_:1})]),Object(n["createElementVNode"])("h3",b,[w,Object(n["createVNode"])(z,{to:"/resume",class:"hover:text-yellow-500 transition duration-200 ease-linear"},{default:Object(n["withCtx"])((function(){return[x]})),_:1})]),Object(n["createElementVNode"])("h3",g,[j,Object(n["createVNode"])(z,{to:"/projects",class:"hover:text-yellow-500 transition duration-200 ease-linear"},{default:Object(n["withCtx"])((function(){return[y]})),_:1})]),O])])]),Object(n["createElementVNode"])("div",N,[Object(n["createVNode"])(k)])])])])}var V={components:{},methods:{toggle:function(){this.open=!this.open}}},z=(a("a51e"),a("6b0d")),k=a.n(z),M=k()(V,[["render",E]]),B=(a("ba8c"),a("bc3a")),S=a.n(B),_=a("130e"),C=a("7b37"),P=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02"));Object(n["pushScopeId"])("data-v-3883709c");var T=Object(n["createStaticVNode"])('<head class="absolute top-0 right-0 h-40 w-3/5" data-v-3883709c><div class="grid justify-items-end" data-v-3883709c><div class="flex items-stretch p-5 mx-5" data-v-3883709c><a href="https://www.instagram.com/lajancia/" class="mx-3" data-v-3883709c><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" data-v-3883709c><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" data-v-3883709c></path></svg></a><a href="https://github.com/Lajancia" class="mx-3" data-v-3883709c><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" data-v-3883709c><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" data-v-3883709c></path></svg></a><a href="https://grafolio.naver.com/kie6974" class="mx-3" data-v-3883709c><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" data-v-3883709c><path d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z" data-v-3883709c></path></svg></a></div></div></head>',1),A={class:"absolute bottom-0 right-0 h-full"},H={class:"py-20 mx-10"},I=Object(n["createStaticVNode"])('<div class="text-white text-6xl mt-10" data-v-3883709c> Hello. </div><div class="text-white text-6xl mb-5" data-v-3883709c> My name is <span class="text-yellow-500" data-v-3883709c>Soomin Hwang</span></div><div class="flex items-stretch" data-v-3883709c><div class="wrapper" data-v-3883709c><div id="static-txt" class="text-white pr-2 flex" data-v-3883709c> I&#39;M </div><ul id="dynamic-txts" class="text-yellow-500" data-v-3883709c><li data-v-3883709c><span data-v-3883709c>Lajancia</span></li><li data-v-3883709c><span data-v-3883709c>Developer</span></li><li data-v-3883709c><span data-v-3883709c>Writer</span></li><li data-v-3883709c><span data-v-3883709c>Illustrator</span></li></ul></div></div><div class="text-white" data-v-3883709c> This Webpage is for various private front end test and back end test. Have displayed 3D modeling and illustrations, js aninations, project summaries and so on. You can freely check out the projects and arts that I made. Please understand that some categories are not ready. </div>',4),L={class:"text-center my-20"},D=Object(n["createTextVNode"])("Resume");function R(e,t,a,r,c,o){var l=Object(n["resolveComponent"])("router-link");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[T,Object(n["createElementVNode"])("body",A,[Object(n["createElementVNode"])("div",H,[I,Object(n["createElementVNode"])("div",L,[Object(n["createVNode"])(l,{to:"/resume",class:"rounded-full text-white text-3xl bg-yellow-500 border-8 border-yellow-500 px-2"},{default:Object(n["withCtx"])((function(){return[D]})),_:1})])])])],64)}Object(n["popScopeId"])();var q={name:"Home"},F=(a("d106"),k()(q,[["render",R],["__scopeId","data-v-3883709c"]])),G=[{path:"/",name:"Home",component:F,meta:{title:"Main"}},{path:"/about",name:"About",meta:{title:"3D Object"},component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/resume",name:"Resume",meta:{title:"Resume"},component:function(){return a.e("about").then(a.bind(null,"1ba2"))}},{path:"/projects",name:"Projects",meta:{title:"My Projects list"},component:function(){return a.e("about").then(a.bind(null,"acca"))}}],J=Object(P["a"])({history:Object(P["b"])(),routes:G});J.beforeEach((function(e,t,a){document.title="".concat(e.meta.title),a()}));var U=J,W=a("201d"),K=a.n(W),Y=(a("a72e"),Object(n["createApp"])(M).use(U));Y.use(_["a"],S.a),Y.use(K.a),Y.use(r["a"]),Y.use(C["a"],{}),Y.mount("#app")},a51d:function(e,t,a){},a51e:function(e,t,a){"use strict";a("a51d")},ba8c:function(e,t,a){},d106:function(e,t,a){"use strict";a("ff86")},ff86:function(e,t,a){}});
//# sourceMappingURL=app.45424be2.js.map