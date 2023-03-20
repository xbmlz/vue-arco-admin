System.register(["./arco-legacy.357ce38c.js"],(function(e,t){"use strict";var n,r,o,a,c,l,s,i,u,f,p,d,h,v,m,g,y,b,w,O,E,S,j;return{setters:[e=>{n=e.s,r=e.u,o=e.c,a=e.r,c=e.n,l=e.i,s=e.d,i=e.h,u=e.p,f=e.a,p=e.w,d=e.b,h=e.g,v=e.o,m=e.e,g=e.f,y=e.j,b=e.k,w=e.m,O=e.l,E=e.t,S=e.q,j=e.v}],execute:function(){e({a:function(e=null,t={}){var n,o;const{document:a=wt}=t,c=ot(null!=(n=null!=e?e:null==a?void 0:a.title)?n:null),l=e&&Xe(e);function s(e){if(!("titleTemplate"in t))return e;const n=t.titleTemplate||"%s";return Xe(n)?n(e):r(n).replace(/%s/g,e)}return p(c,((e,t)=>{e!==t&&a&&(a.title=s(Ye(e)?e:""))}),{immediate:!0}),t.observe&&!t.titleTemplate&&a&&!l&&function(e,t,n={}){const r=n,{window:o=bt}=r,a=((e,t)=>{var n={};for(var r in e)Zt.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&Yt)for(var r of Yt(e))t.indexOf(r)<0&&en.call(e,r)&&(n[r]=e[r]);return n})(r,["window"]);let c;const l=St((()=>o&&"MutationObserver"in o)),s=()=>{c&&(c.disconnect(),c=void 0)},i=p((()=>yt(e)),(e=>{s(),l.value&&o&&e&&(c=new MutationObserver(t),c.observe(e,a))}),{immediate:!0}),u=()=>{s(),i()};rt(u)}(null==(o=a.head)?void 0:o.querySelector("title"),(()=>{a&&a.title!==c.value&&(c.value=s(a.title))}),{childList:!0}),c},b:Tt,c:function(){const e=b(!0),t=e.run((()=>f({})));let n=[],r=[];const o=w({install(e){ln(o),o._a=e,e.provide(sn,o),e.config.globalProperties.$pinia=o,r.forEach((e=>n.push(e))),r=[]},use(e){return this._a?n.push(e):r.push(e),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return o},d:function(e,t,n){let r,a;const c="function"==typeof t;function s(e,n){const s=m();return(e=e||s&&l(sn))&&ln(e),(e=cn)._s.has(r)||(c?yn(r,t,a,e):function(e,t,n,r){const{state:a,actions:c,getters:l}=t,s=n.state.value[e];let i;function u(){s||(n.state.value[e]=a?a():{});const t=j(n.state.value[e]);return gn(t,c,Object.keys(l||{}).reduce(((t,r)=>(t[r]=w(o((()=>{ln(n);const t=n._s.get(e);return l[r].call(t,t)}))),t)),{}))}i=yn(e,u,t,n,0,!0),i.$reset=function(){const e=a?a():{};this.$patch((t=>{gn(t,e)}))}}(r,a,e)),e._s.get(r)}return"string"==typeof e?(r=e,a=c?n:t):(a=e,r=e.id),s.$id=r,s},e:function(e){const l=function(e,t){const n=[],r=new Map;function o(e){return r.get(e)}function a(e,n,r){const o=!r,l=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:se(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}(e);l.aliasOf=r&&r.record;const i=fe(t,e),u=[l];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(k({},l,{components:r?r.record.components:l.components,path:e,aliasOf:r?r.record:l}))}let f,p;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(f=ce(t,n,i),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),o&&e.name&&!ie(f)&&c(e.name)),l.children){const e=l.children;for(let t=0;t<e.length;t++)a(e[t],f,r&&r.children[t])}r=r||f,s(f)}return p?()=>{c(p)}:x}function c(e){if(V(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(c),t.alias.forEach(c))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(c),e.alias.forEach(c))}}function l(){return n}function s(e){let t=0;for(;t<n.length&&ne(e,n[t])>=0&&(e.record.path!==n[t].record.path||!pe(e,n[t]));)t++;n.splice(t,0,e),e.record.name&&!ie(e)&&r.set(e.record.name,e)}function i(e,t){let o,a,c,l={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw K(1,{location:e});c=o.record.name,l=k(le(t.params,o.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&le(e.params,o.keys.map((e=>e.name)))),a=o.stringify(l)}else if("path"in e)a=e.path,o=n.find((e=>e.re.test(a))),o&&(l=o.parse(a),c=o.record.name);else{if(o=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!o)throw K(1,{location:e,currentLocation:t});c=o.record.name,l=k({},t.params,e.params),a=o.stringify(l)}const s=[];let i=o;for(;i;)s.unshift(i.record),i=i.parent;return{name:c,path:a,params:l,matched:s,meta:ue(s)}}return t=fe({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>a(e))),{addRoute:a,resolve:i,removeRoute:c,getRoutes:l,getRecordMatcher:o}}(e.routes,e),s=e.parseQuery||Ie,i=e.stringifyQuery||$e,u=e.history,f=De(),p=De(),d=De(),h=n(W);let v=W;t&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const m=P.bind(null,(e=>""+e)),g=P.bind(null,Re),y=P.bind(null,Fe);function b(e,t){if(t=k({},t||h.value),"string"==typeof e){const n=F(s,e,t.path),r=l.resolve({path:n.path},t),o=u.createHref(n.fullPath);return k(n,r,{params:y(r.params),hash:Fe(n.hash),redirectedFrom:void 0,href:o})}let n;if("path"in e)n=k({},e,{path:F(s,e.path,t.path).path});else{const r=k({},e.params);for(const e in r)null==r[e]&&delete r[e];n=k({},e,{params:g(e.params)}),t.params=g(t.params)}const r=l.resolve(n,t),o=e.hash||"";r.params=m(y(r.params));const a=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(i,k({},e,{hash:(c=o,xe(c).replace(Se,"{").replace(ke,"}").replace(Oe,"^")),path:r.path}));var c;const f=u.createHref(a);return k({fullPath:a,hash:o,query:i===$e?Ae(e.query):e.query||{}},r,{redirectedFrom:void 0,href:f})}function w(e){return"string"==typeof e?F(s,e,h.value.path):k({},e)}function O(e,t){if(v!==e)return K(8,{from:t,to:e})}function E(e){return j(e)}function S(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=w(r):{path:r},r.params={}),k({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function j(e,t){const n=v=b(e),r=h.value,o=e.state,a=e.force,c=!0===e.replace,l=S(n);if(l)return j(k(w(l),{state:"object"==typeof l?k({},o,l.state):o,force:a,replace:c}),t||n);const s=n;let u;return s.redirectedFrom=t,!a&&function(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&$(t.matched[r],n.matched[o])&&A(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(i,r,n)&&(u=K(16,{to:s,from:r}),H(r,r,!0,!1)),(u?Promise.resolve(u):I(s,r)).catch((e=>X(e)?X(e,2)?e:J(e):U(e,s,r))).then((e=>{if(e){if(X(e,2))return j(k({replace:c},w(e.to),{state:"object"==typeof e.to?k({},o,e.to.state):o,force:a}),t||s)}else e=T(s,r,!0,c,o);return _(s,r,e),e}))}function R(e,t){const n=O(e,t);return n?Promise.reject(n):Promise.resolve()}function I(e,t){let n;const[r,o,a]=function(e,t){const n=[],r=[],o=[],a=Math.max(t.matched.length,e.matched.length);for(let c=0;c<a;c++){const a=t.matched[c];a&&(e.matched.find((e=>$(e,a)))?r.push(a):n.push(a));const l=e.matched[c];l&&(t.matched.find((e=>$(e,l)))||o.push(l))}return[n,r,o]}(e,t);n=Be(r.reverse(),"beforeRouteLeave",e,t);for(const l of r)l.leaveGuards.forEach((r=>{n.push(Ne(r,e,t))}));const c=R.bind(null,e,t);return n.push(c),Je(n).then((()=>{n=[];for(const r of f.list())n.push(Ne(r,e,t));return n.push(c),Je(n)})).then((()=>{n=Be(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach((r=>{n.push(Ne(r,e,t))}));return n.push(c),Je(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(C(r.beforeEnter))for(const o of r.beforeEnter)n.push(Ne(o,e,t));else n.push(Ne(r.beforeEnter,e,t));return n.push(c),Je(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=Be(a,"beforeRouteEnter",e,t),n.push(c),Je(n)))).then((()=>{n=[];for(const r of p.list())n.push(Ne(r,e,t));return n.push(c),Je(n)})).catch((e=>X(e,8)?e:Promise.reject(e)))}function _(e,t,n){for(const r of d.list())r(e,t,n)}function T(e,n,r,o,a){const c=O(e,n);if(c)return c;const l=n===W,s=t?history.state:{};r&&(o||l?u.replace(e.fullPath,k({scroll:l&&s&&s.scroll},a)):u.push(e.fullPath,a)),h.value=e,H(e,n,r,l),J()}let M;function q(){M||(M=u.listen(((e,n,r)=>{if(!te.listening)return;const o=b(e),a=S(o);if(a)return void j(k(a,{replace:!0}),o).catch(x);v=o;const c=h.value;var l,s;t&&(l=B(c.fullPath,r.delta),s=N(),G.set(l,s)),I(o,c).catch((e=>X(e,12)?e:X(e,2)?(j(e.to,o).then((e=>{X(e,20)&&!r.delta&&r.type===L.pop&&u.go(-1,!1)})).catch(x),Promise.reject()):(r.delta&&u.go(-r.delta,!1),U(e,o,c)))).then((e=>{(e=e||T(o,c,!1))&&(r.delta&&!X(e,8)?u.go(-r.delta,!1):r.type===L.pop&&X(e,20)&&u.go(-1,!1)),_(o,c,e)})).catch(x)})))}let D,z=De(),Q=De();function U(e,t,n){J(e);const r=Q.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function J(e){return D||(D=!e,q(),z.list().forEach((([t,n])=>e?n(e):t())),z.reset()),e}function H(n,r,o,a){const{scrollBehavior:l}=e;if(!t||!l)return Promise.resolve();const s=!o&&function(e){const t=G.get(e);return G.delete(e),t}(B(n.fullPath,0))||(a||!o)&&history.state&&history.state.scroll||null;return c().then((()=>l(n,r,s))).then((e=>e&&function(e){let t;if("el"in e){const n=e.el,r="string"==typeof n&&n.startsWith("#"),o="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}(e))).catch((e=>U(e,n,r)))}const Y=e=>u.go(e);let Z;const ee=new Set,te={currentRoute:h,listening:!0,addRoute:function(e,t){let n,r;return V(e)?(n=l.getRecordMatcher(e),r=t):r=e,l.addRoute(r,n)},removeRoute:function(e){const t=l.getRecordMatcher(e);t&&l.removeRoute(t)},hasRoute:function(e){return!!l.getRecordMatcher(e)},getRoutes:function(){return l.getRoutes().map((e=>e.record))},resolve:b,options:e,push:E,replace:function(e){return E(k(w(e),{replace:!0}))},go:Y,back:()=>Y(-1),forward:()=>Y(1),beforeEach:f.add,beforeResolve:p.add,afterEach:d.add,onError:Q.add,isReady:function(){return D&&h.value!==W?Promise.resolve():new Promise(((e,t)=>{z.add([e,t])}))},install(e){e.component("RouterLink",ze),e.component("RouterView",We),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>r(h)}),t&&!Z&&h.value===W&&(Z=!0,E(u.location).catch((e=>{})));const n={};for(const t in W)n[t]=o((()=>h.value[t]));e.provide(Le,this),e.provide(Me,a(n)),e.provide(qe,h);const c=e.unmount;ee.add(e),e.unmount=function(){ee.delete(e),ee.size<1&&(v=W,M&&M(),M=null,h.value=W,Z=!1,D=!1),c()}}};return te},f:function(e){return(e=location.host?e||location.pathname+location.search:"").includes("#")||(e+="#"),function(e){const n=function(e){const{history:t,location:n}=window,r={value:Q(e,n)},o={value:t.state};function a(r,a,c){const l=e.indexOf("#"),s=l>-1?(n.host&&document.querySelector("base")?e:e.slice(l))+r:z()+e+r;try{t[c?"replaceState":"pushState"](a,"",s),o.value=a}catch(i){console.error(i),n[c?"replace":"assign"](s)}}function c(e,n){a(e,k({},t.state,U(o.value.back,e,o.value.forward,!0),n,{position:o.value.position}),!0),r.value=e}function l(e,n){const c=k({},o.value,t.state,{forward:e,scroll:N()});a(c.current,c,!0),a(e,k({},U(r.value,e,null),{position:c.position+1},n),!1),r.value=e}return o.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:l,replace:c}}(e=function(e){if(!e)if(t){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),e.replace(R,"")}(e)),r=function(e,t,n,r){let o=[],a=[],c=null;const l=({state:a})=>{const l=Q(e,location),s=n.value,i=t.value;let u=0;if(a){if(n.value=l,t.value=a,c&&c===s)return void(c=null);u=i?a.position-i.position:0}else r(l);o.forEach((e=>{e(n.value,s,{delta:u,type:L.pop,direction:u?u>0?M.forward:M.back:M.unknown})}))};function s(){c=n.value}function i(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return a.push(t),t}function u(){const{history:e}=window;e.state&&e.replaceState(k({},e.state,{scroll:N()}),"")}function f(){for(const e of a)e();a=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u),{pauseListeners:s,listen:i,destroy:f}}(e,n.state,n.location,n.replace);function o(e,t=!0){t||r.pauseListeners(),history.go(e)}const a=k({location:"",base:e,go:o,createHref:D.bind(null,e)},n,r);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>n.state.value}),a}(e)},g:function(){return l(Me)},h:function(e={}){const{navigator:t=Ot,read:n=!1,source:r,copiedDuring:o=1500}=e,a=["copy","cut"],c=St((()=>t&&"clipboard"in t)),l=f(""),s=f(!1),i=function(e,t,n={}){const{immediate:r=!0}=n,o=f(!1);let a=null;function c(){a&&(clearTimeout(a),a=null)}function l(){o.value=!1,c()}function s(...n){c(),o.value=!0,a=setTimeout((()=>{o.value=!1,a=null,e(...n)}),et(t))}return r&&(o.value=!0,Ke&&s()),rt(l),{isPending:o,start:s,stop:l}}((()=>s.value=!1),o);function u(){t.clipboard.readText().then((e=>{l.value=e}))}if(c.value&&n)for(const f of a)Et(f,u);return{isSupported:c,text:l,copied:s,copy:async function(e=et(r)){c.value&&null!=e&&(await t.clipboard.writeText(e),l.value=e,s.value=!0,i.start())}}},i:function(e={}){const{valueDark:t="dark",valueLight:n="",window:r=bt}=e,a=function(e={}){const{selector:t="html",attribute:n="class",initialValue:r="auto",window:a=bt,storage:c,storageKey:l="vueuse-color-scheme",listenToStorageChanges:s=!0,storageRef:i,emitAuto:u}=e,d=((e,t)=>{for(var n in t||(t={}))Dt.call(t,n)&&Bt(e,n,t[n]);if(qt)for(var n of qt(t))Nt.call(t,n)&&Bt(e,n,t[n]);return e})({auto:"",light:"light",dark:"dark"},e.modes||{}),h=Lt({window:a}),v=o((()=>h.value?"dark":"light")),m=i||(null==l?f(r):Tt(l,r,c,{window:a,listenToStorageChanges:s})),g=o({get:()=>"auto"!==m.value||u?m.value:v.value,set(e){m.value=e}}),y=xt("updateHTMLAttrs",((e,t,n)=>{const r=null==a?void 0:a.document.querySelector(e);if(r)if("class"===t){const e=n.split(/\s/g);Object.values(d).flatMap((e=>(e||"").split(/\s/g))).filter(Boolean).forEach((t=>{e.includes(t)?r.classList.add(t):r.classList.remove(t)}))}else r.setAttribute(t,n)}));function b(e){var r;const o="auto"===e?v.value:e;y(t,n,null!=(r=d[o])?r:o)}function w(t){e.onChanged?e.onChanged(t,b):b(t)}return p(g,w,{flush:"post",immediate:!0}),u&&p(v,(()=>w(g.value)),{flush:"post"}),at((()=>w(g.value))),g}((l=((e,t)=>{for(var n in t||(t={}))Vt.call(t,n)&&Jt(e,n,t[n]);if(Ut)for(var n of Ut(t))Wt.call(t,n)&&Jt(e,n,t[n]);return e})({},e),s={onChanged:(t,n)=>{var r;e.onChanged?null==(r=e.onChanged)||r.call(e,"dark"===t):n(t)},modes:{dark:t,light:n}},zt(l,Qt(s)))),c=Lt({window:r});var l,s;return o({get:()=>"dark"===a.value,set(e){e===c.value?a.value="auto":a.value=e?"dark":"light"}})},j:function(e=!1,t={}){const{truthyValue:n=!0,falsyValue:r=!1}=t,o=d(e),a=f(e);function c(e){if(arguments.length)return a.value=e,a.value;{const e=et(n);return a.value=a.value===e?et(r):e,a.value}}return o?c:[a,c]},k:function(e,t={}){const{document:n=wt,autoExit:r=!1}=t,o=e||(null==n?void 0:n.querySelector("html")),a=f(!1);let c=Ht[0];const l=St((()=>{if(!n)return!1;for(const e of Ht)if(e[1]in n)return c=e,!0;return!1})),[s,i,u,,p]=c;async function d(){l.value&&((null==n?void 0:n[u])&&await n[i](),a.value=!1)}async function h(){if(!l.value)return;await d();const e=yt(o);e&&(await e[s](),a.value=!0)}return n&&Et(n,p,(()=>{a.value=!!(null==n?void 0:n[u])}),!1),r&&rt(d),{isSupported:l,isFullscreen:a,enter:h,exit:d,toggle:async function(){a.value?await d():await h()}}},l:Et,m:function(e,t=200,n={}){return tt(function(e,t={}){let n,r;return o=>{const a=et(e),c=et(t.maxWait);if(n&&clearTimeout(n),a<=0||void 0!==c&&c<=0)return r&&(clearTimeout(r),r=null),o();c&&!r&&(r=setTimeout((()=>{n&&clearTimeout(n),r=null,o()}),c)),n=setTimeout((()=>{r&&clearTimeout(r),r=null,o()}),a)}}(t,n),e)},u:function(){return l(Le)}});
/*!
              * vue-router v4.1.5
              * (c) 2022 Eduardo San Martin Morote
              * @license MIT
              */
const t="undefined"!=typeof window,k=Object.assign;function P(e,t){const n={};for(const r in t){const o=t[r];n[r]=C(o)?o.map(e):e(o)}return n}const x=()=>{},C=Array.isArray,R=/\/$/;function F(e,t,n="/"){let r,o={},a="",c="";const l=t.indexOf("#");let s=t.indexOf("?");return l<s&&l>=0&&(s=-1),s>-1&&(r=t.slice(0,s),a=t.slice(s+1,l>-1?l:t.length),o=e(a)),l>-1&&(r=r||t.slice(0,l),c=t.slice(l,t.length)),r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o,a,c=n.length-1;for(o=0;o<r.length;o++)if(a=r[o],"."!==a){if(".."!==a)break;c>1&&c--}return n.slice(0,c).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}(null!=r?r:t,n),{fullPath:r+(a&&"?")+a+c,path:r,query:o,hash:c}}function I(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function $(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function A(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!_(e[n],t[n]))return!1;return!0}function _(e,t){return C(e)?T(e,t):C(t)?T(t,e):e===t}function T(e,t){return C(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var L,M;!function(e){e.pop="pop",e.push="push"}(L||(L={})),function(e){e.back="back",e.forward="forward",e.unknown=""}(M||(M={}));const q=/^[^#]+#/;function D(e,t){return e.replace(q,"#")+t}const N=()=>({left:window.pageXOffset,top:window.pageYOffset});function B(e,t){return(history.state?history.state.position-t:-1)+e}const G=new Map;let z=()=>location.protocol+"//"+location.host;function Q(e,t){const{pathname:n,search:r,hash:o}=t,a=e.indexOf("#");if(a>-1){let t=o.includes(e.slice(a))?e.slice(a).length:1,n=o.slice(t);return"/"!==n[0]&&(n="/"+n),I(n,"")}return I(n,e)+r+o}function U(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?N():null}}function V(e){return"string"==typeof e||"symbol"==typeof e}const W={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},J=Symbol("");var H;function K(e,t){return k(new Error,{type:e,[J]:!0},t)}function X(e,t){return e instanceof Error&&J in e&&(null==t||!!(e.type&t))}!function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"}(H||(H={}));const Y="[^/]+?",Z={sensitive:!1,strict:!1,start:!0,end:!0},ee=/[.+*?^${}()[\]/\\]/g;function te(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function ne(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const e=te(r[n],o[n]);if(e)return e;n++}if(1===Math.abs(o.length-r.length)){if(re(r))return 1;if(re(o))return-1}return o.length-r.length}function re(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const oe={type:0,value:""},ae=/[a-zA-Z0-9_]/;function ce(e,t,n){const r=function(e,t){const n=k({},Z,t),r=[];let o=n.start?"^":"";const a=[];for(const s of e){const e=s.length?[]:[90];n.strict&&!s.length&&(o+="/");for(let t=0;t<s.length;t++){const r=s[t];let c=40+(n.sensitive?.25:0);if(0===r.type)t||(o+="/"),o+=r.value.replace(ee,"\\$&"),c+=40;else if(1===r.type){const{value:e,repeatable:n,optional:i,regexp:u}=r;a.push({name:e,repeatable:n,optional:i});const f=u||Y;if(f!==Y){c+=10;try{new RegExp(`(${f})`)}catch(l){throw new Error(`Invalid custom RegExp for param "${e}" (${f}): `+l.message)}}let p=n?`((?:${f})(?:/(?:${f}))*)`:`(${f})`;t||(p=i&&s.length<2?`(?:/${p})`:"/"+p),i&&(p+="?"),o+=p,c+=20,i&&(c+=-8),n&&(c+=-20),".*"===f&&(c+=-50)}e.push(c)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const c=new RegExp(o,n.sensitive?"":"i");return{re:c,score:r,keys:a,parse:function(e){const t=e.match(c),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",o=a[r-1];n[o.name]=e&&o.repeatable?e.split("/"):e}return n},stringify:function(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0===e.type)n+=e.value;else if(1===e.type){const{value:a,repeatable:c,optional:l}=e,s=a in t?t[a]:"";if(C(s)&&!c)throw new Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);const i=C(s)?s.join("/"):s;if(!i){if(!l)throw new Error(`Missing required param "${a}"`);o.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=i}}return n||"/"}}}(function(e){if(!e)return[[]];if("/"===e)return[[oe]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${i}": ${e}`)}let n=0,r=n;const o=[];let a;function c(){a&&o.push(a),a=[]}let l,s=0,i="",u="";function f(){i&&(0===n?a.push({type:0,value:i}):1===n||2===n||3===n?(a.length>1&&("*"===l||"+"===l)&&t(`A repeatable param (${i}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:i,regexp:u,repeatable:"*"===l||"+"===l,optional:"*"===l||"?"===l})):t("Invalid state to consume buffer"),i="")}function p(){i+=l}for(;s<e.length;)if(l=e[s++],"\\"!==l||2===n)switch(n){case 0:"/"===l?(i&&f(),c()):":"===l?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:"("===l?n=2:ae.test(l)?p():(f(),n=0,"*"!==l&&"?"!==l&&"+"!==l&&s--);break;case 2:")"===l?"\\"==u[u.length-1]?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,"*"!==l&&"?"!==l&&"+"!==l&&s--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${i}"`),f(),c(),o}(e.path),n),o=k(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function le(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function se(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"==typeof n?n:n[r];return t}function ie(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ue(e){return e.reduce(((e,t)=>k(e,t.meta)),{})}function fe(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function pe(e,t){return t.children.some((t=>t===e||pe(e,t)))}const de=/#/g,he=/&/g,ve=/\//g,me=/=/g,ge=/\?/g,ye=/\+/g,be=/%5B/g,we=/%5D/g,Oe=/%5E/g,Ee=/%60/g,Se=/%7B/g,je=/%7C/g,ke=/%7D/g,Pe=/%20/g;function xe(e){return encodeURI(""+e).replace(je,"|").replace(be,"[").replace(we,"]")}function Ce(e){return xe(e).replace(ye,"%2B").replace(Pe,"+").replace(de,"%23").replace(he,"%26").replace(Ee,"`").replace(Se,"{").replace(ke,"}").replace(Oe,"^")}function Re(e){return null==e?"":function(e){return xe(e).replace(de,"%23").replace(ge,"%3F")}(e).replace(ve,"%2F")}function Fe(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Ie(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const e=n[r].replace(ye," "),o=e.indexOf("="),a=Fe(o<0?e:e.slice(0,o)),c=o<0?null:Fe(e.slice(o+1));if(a in t){let e=t[a];C(e)||(e=t[a]=[e]),e.push(c)}else t[a]=c}return t}function $e(e){let t="";for(let n in e){const r=e[n];(n=Ce(n).replace(me,"%3D"),null!=r)?(C(r)?r.map((e=>e&&Ce(e))):[r&&Ce(r)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})):void 0!==r&&(t+=(t.length?"&":"")+n)}return t}function Ae(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=C(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const _e=Symbol(""),Te=Symbol(""),Le=Symbol(""),Me=Symbol(""),qe=Symbol("");function De(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e,reset:function(){e=[]}}}function Ne(e,t,n,r,o){const a=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise(((c,l)=>{const s=e=>{var s;!1===e?l(K(4,{from:n,to:t})):e instanceof Error?l(e):"string"==typeof(s=e)||s&&"object"==typeof s?l(K(2,{from:t,to:e})):(a&&r.enterCallbacks[o]===a&&"function"==typeof e&&a.push(e),c())},i=e.call(r&&r.instances[o],t,n,s);let u=Promise.resolve(i);e.length<3&&(u=u.then(s)),u.catch((e=>l(e)))}))}function Be(e,t,n,r){const o=[];for(const c of e)for(const e in c.components){let l=c.components[e];if("beforeRouteEnter"===t||c.instances[e])if("object"==typeof(a=l)||"displayName"in a||"props"in a||"__vccOpts"in a){const a=(l.__vccOpts||l)[t];a&&o.push(Ne(a,n,r,c,e))}else{let a=l();o.push((()=>a.then((o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${c.path}"`));const a=(l=o).__esModule||"Module"===l[Symbol.toStringTag]?o.default:o;var l;c.components[e]=a;const s=(a.__vccOpts||a)[t];return s&&Ne(s,n,r,c,e)()}))))}}var a;return o}function Ge(e){const t=l(Le),n=l(Me),a=o((()=>t.resolve(r(e.to)))),c=o((()=>{const{matched:e}=a.value,{length:t}=e,r=e[t-1],o=n.matched;if(!r||!o.length)return-1;const c=o.findIndex($.bind(null,r));if(c>-1)return c;const l=Qe(e[t-2]);return t>1&&Qe(r)===l&&o[o.length-1].path!==l?o.findIndex($.bind(null,e[t-2])):c})),s=o((()=>c.value>-1&&function(e,t){for(const n in t){const r=t[n],o=e[n];if("string"==typeof r){if(r!==o)return!1}else if(!C(o)||o.length!==r.length||r.some(((e,t)=>e!==o[t])))return!1}return!0}(n.params,a.value.params))),i=o((()=>c.value>-1&&c.value===n.matched.length-1&&A(n.params,a.value.params)));return{route:a,href:o((()=>a.value.href)),isActive:s,isExactActive:i,navigate:function(n={}){return function(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.defaultPrevented||void 0!==e.button&&0!==e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}(n)?t[r(e.replace)?"replace":"push"](r(e.to)).catch(x):Promise.resolve()}}}const ze=s({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ge,setup(e,{slots:t}){const n=a(Ge(e)),{options:r}=l(Le),c=o((()=>({[Ue(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ue(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=t.default&&t.default(n);return e.custom?r:i("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:c.value},r)}}});function Qe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ue=(e,t,n)=>null!=e?e:null!=t?t:n;function Ve(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const We=s({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const a=l(qe),c=o((()=>e.route||a.value)),s=l(Te,0),d=o((()=>{let e=r(s);const{matched:t}=c.value;let n;for(;(n=t[e])&&!n.components;)e++;return e})),h=o((()=>c.value.matched[d.value]));u(Te,o((()=>d.value+1))),u(_e,h),u(qe,c);const v=f();return p((()=>[v.value,h.value,e.name]),(([e,t,n],[r,o,a])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&$(t,o)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const r=c.value,o=e.name,a=h.value,l=a&&a.components[o];if(!l)return Ve(n.default,{Component:l,route:r});const s=a.props[o],u=s?!0===s?r.params:"function"==typeof s?s(r):s:null,f=i(l,k({},u,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(a.instances[o]=null)},ref:v}));return Ve(n.default,{Component:f,route:r})||f}}});function Je(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}var He;const Ke="undefined"!=typeof window,Xe=e=>"function"==typeof e,Ye=e=>"string"==typeof e,Ze=()=>{};function et(e){return"function"==typeof e?e():r(e)}function tt(e,t){return function(...n){e((()=>t.apply(this,n)),{fn:t,thisArg:this,args:n})}}Ke&&(null==(He=null==window?void 0:window.navigator)?void 0:He.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);const nt=e=>e();function rt(e){return!!h()&&(v(e),!0)}function ot(e){return"function"==typeof e?o(e):f(e)}function at(e,t=!0){m()?g(e):t?e():c(e)}var ct=Object.getOwnPropertySymbols,lt=Object.prototype.hasOwnProperty,st=Object.prototype.propertyIsEnumerable;function it(e,t,n={}){const r=n,{eventFilter:o=nt}=r,a=((e,t)=>{var n={};for(var r in e)lt.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&ct)for(var r of ct(e))t.indexOf(r)<0&&st.call(e,r)&&(n[r]=e[r]);return n})(r,["eventFilter"]);return p(e,tt(o,t),a)}var ut=Object.defineProperty,ft=Object.defineProperties,pt=Object.getOwnPropertyDescriptors,dt=Object.getOwnPropertySymbols,ht=Object.prototype.hasOwnProperty,vt=Object.prototype.propertyIsEnumerable,mt=(e,t,n)=>t in e?ut(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function gt(e,t,n={}){const r=n,{eventFilter:o}=r,a=((e,t)=>{var n={};for(var r in e)ht.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&dt)for(var r of dt(e))t.indexOf(r)<0&&vt.call(e,r)&&(n[r]=e[r]);return n})(r,["eventFilter"]),{eventFilter:c,pause:l,resume:s,isActive:i}=function(e=nt){const t=f(!0);return{isActive:t,pause:function(){t.value=!1},resume:function(){t.value=!0},eventFilter:(...n)=>{t.value&&e(...n)}}}(o),u=it(e,t,(p=((e,t)=>{for(var n in t||(t={}))ht.call(t,n)&&mt(e,n,t[n]);if(dt)for(var n of dt(t))vt.call(t,n)&&mt(e,n,t[n]);return e})({},a),ft(p,pt({eventFilter:c}))));var p;return{stop:u,pause:l,resume:s,isActive:i}}function yt(e){var t;const n=et(e);return null!=(t=null==n?void 0:n.$el)?t:n}const bt=Ke?window:void 0,wt=Ke?window.document:void 0,Ot=Ke?window.navigator:void 0;function Et(...e){let t,n,r,o;if(Ye(e[0])?([n,r,o]=e,t=bt):[t,n,r,o]=e,!t)return Ze;let a=Ze;const c=p((()=>yt(t)),(e=>{a(),e&&(e.addEventListener(n,r,o),a=()=>{e.removeEventListener(n,r,o),a=Ze})}),{immediate:!0,flush:"post"}),l=()=>{c(),a()};return rt(l),l}function St(e,t=!1){const n=f(),r=()=>n.value=Boolean(e());return r(),at(r,t),n}const jt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},kt="__vueuse_ssr_handlers__";jt[kt]=jt[kt]||{};const Pt=jt[kt];function xt(e,t){return Pt[e]||t}var Ct=Object.defineProperty,Rt=Object.getOwnPropertySymbols,Ft=Object.prototype.hasOwnProperty,It=Object.prototype.propertyIsEnumerable,$t=(e,t,n)=>t in e?Ct(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,At=(e,t)=>{for(var n in t||(t={}))Ft.call(t,n)&&$t(e,n,t[n]);if(Rt)for(var n of Rt(t))It.call(t,n)&&$t(e,n,t[n]);return e};const _t={boolean:{read:e=>"true"===e,write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Tt(e,t,r,o={}){var a;const{flush:c="pre",deep:l=!0,listenToStorageChanges:s=!0,writeDefaults:i=!0,mergeDefaults:u=!1,shallow:p,window:d=bt,eventFilter:h,onError:v=(e=>{console.error(e)})}=o,m=(p?n:f)(t);if(!r)try{r=xt("getDefaultStorage",(()=>{var e;return null==(e=bt)?void 0:e.localStorage}))()}catch(S){v(S)}if(!r)return m;const g=et(t),y=function(e){return null==e?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":"boolean"==typeof e?"boolean":"string"==typeof e?"string":"object"==typeof e||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}(g),b=null!=(a=o.serializer)?a:_t[y],{pause:w,resume:O}=gt(m,(()=>function(t){try{null==t?r.removeItem(e):r.setItem(e,b.write(t))}catch(S){v(S)}}(m.value)),{flush:c,deep:l,eventFilter:h});return d&&s&&Et(d,"storage",E),E(),m;function E(t){t&&t.storageArea!==r||(t&&null===t.key?m.value=g:t&&t.key!==e||(m.value=function(t){w();try{const n=t?t.newValue:r.getItem(e);if(null==n)return i&&null!==g&&r.setItem(e,b.write(g)),g;if(!t&&u){const e=b.read(n);return Xe(u)?u(e,g):"object"!==y||Array.isArray(e)?e:At(At({},g),e)}return"string"!=typeof n?n:b.read(n)}catch(S){v(S)}finally{O()}}(t)))}}function Lt(e){return function(e,t={}){const{window:n=bt}=t,r=St((()=>n&&"matchMedia"in n&&"function"==typeof n.matchMedia));let o;const a=f(!1),c=()=>{o&&("removeEventListener"in o?o.removeEventListener("change",l):o.removeListener(l))},l=()=>{r.value&&(c(),o=n.matchMedia(ot(e).value),a.value=o.matches,"addEventListener"in o?o.addEventListener("change",l):o.addListener(l))};return y(l),rt((()=>c())),a}("(prefers-color-scheme: dark)",e)}var Mt=Object.defineProperty,qt=Object.getOwnPropertySymbols,Dt=Object.prototype.hasOwnProperty,Nt=Object.prototype.propertyIsEnumerable,Bt=(e,t,n)=>t in e?Mt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Gt=Object.defineProperty,zt=Object.defineProperties,Qt=Object.getOwnPropertyDescriptors,Ut=Object.getOwnPropertySymbols,Vt=Object.prototype.hasOwnProperty,Wt=Object.prototype.propertyIsEnumerable,Jt=(e,t,n)=>t in e?Gt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const Ht=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];var Kt,Xt,Yt=Object.getOwnPropertySymbols,Zt=Object.prototype.hasOwnProperty,en=Object.prototype.propertyIsEnumerable;(Xt=Kt||(Kt={})).UP="UP",Xt.RIGHT="RIGHT",Xt.DOWN="DOWN",Xt.LEFT="LEFT",Xt.NONE="NONE";var tn=Object.defineProperty,nn=Object.getOwnPropertySymbols,rn=Object.prototype.hasOwnProperty,on=Object.prototype.propertyIsEnumerable,an=(e,t,n)=>t in e?tn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;
/*!
              * pinia v2.0.23
              * (c) 2022 Eduardo San Martin Morote
              * @license MIT
              */
let cn;((e,t)=>{for(var n in t||(t={}))rn.call(t,n)&&an(e,n,t[n]);if(nn)for(var n of nn(t))on.call(t,n)&&an(e,n,t[n])})({linear:function(e){return e}},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});const ln=e=>cn=e,sn=Symbol();function un(e){return e&&"object"==typeof e&&"[object Object]"===Object.prototype.toString.call(e)&&"function"!=typeof e.toJSON}var fn;!function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"}(fn||(fn={}));const pn=()=>{};function dn(e,t,n,r=pn){e.push(t);const o=()=>{const n=e.indexOf(t);n>-1&&(e.splice(n,1),r())};return!n&&m()&&S(o),o}function hn(e,...t){e.slice().forEach((e=>{e(...t)}))}function vn(e,t){e instanceof Map&&t instanceof Map&&t.forEach(((t,n)=>e.set(n,t))),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],o=e[n];un(o)&&un(r)&&e.hasOwnProperty(n)&&!d(r)&&!O(r)?e[n]=vn(o,r):e[n]=r}return e}const mn=Symbol(),{assign:gn}=Object;function yn(e,t,n={},r,o,l){let s;const i=gn({actions:{}},n),u={deep:!0};let h,v,m,g=w([]),y=w([]);const S=r.state.value[e];let j;function k(t){let n;h=v=!1,"function"==typeof t?(t(r.state.value[e]),n={type:fn.patchFunction,storeId:e,events:m}):(vn(r.state.value[e],t),n={type:fn.patchObject,payload:t,storeId:e,events:m});const o=j=Symbol();c().then((()=>{j===o&&(h=!0)})),v=!0,hn(g,n,r.state.value[e])}l||S||(r.state.value[e]={}),f({});const P=pn;function x(t,n){return function(){ln(r);const o=Array.from(arguments),a=[],c=[];function l(e){a.push(e)}function s(e){c.push(e)}let i;hn(y,{args:o,name:t,store:R,after:l,onError:s});try{i=n.apply(this&&this.$id===e?this:R,o)}catch(u){throw hn(c,u),u}return i instanceof Promise?i.then((e=>(hn(a,e),e))).catch((e=>(hn(c,e),Promise.reject(e)))):(hn(a,i),i)}}const C={_p:r,$id:e,$onAction:dn.bind(null,y),$patch:k,$reset:P,$subscribe(t,n={}){const o=dn(g,t,n.detached,(()=>a())),a=s.run((()=>p((()=>r.state.value[e]),(r=>{("sync"===n.flush?v:h)&&t({storeId:e,type:fn.direct,events:m},r)}),gn({},u,n))));return o},$dispose:function(){s.stop(),g=[],y=[],r._s.delete(e)}},R=a(C);r._s.set(e,R);const F=r._e.run((()=>(s=b(),s.run((()=>t())))));for(const a in F){const t=F[a];if(d(t)&&(!d($=t)||!$.effect)||O(t))l||(!S||un(I=t)&&I.hasOwnProperty(mn)||(d(t)?t.value=S[a]:vn(t,S[a])),r.state.value[e][a]=t);else if("function"==typeof t){const e=x(a,t);F[a]=e,i.actions[a]=t}}var I,$;return gn(R,F),gn(E(R),F),Object.defineProperty(R,"$state",{get:()=>r.state.value[e],set:e=>{k((t=>{gn(t,e)}))}}),r._p.forEach((e=>{gn(R,s.run((()=>e({store:R,app:r._a,pinia:r,options:i}))))})),S&&l&&n.hydrate&&n.hydrate(R.$state,S),h=!0,v=!0,R}}}}));
