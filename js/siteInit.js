import{$ as Y,A as B,B as P,C as he,D as U,E as F,F as me,G as pe,H as fe,I as ve,J as we,K as ye,L as ge,M as Ee,N as be,O as Ce,P as Ae,Q as Se,R as Le,S as ke,T as qe,U as xe,V as Te,W as Re,X as g,Y as E,Z as j,a as f,aa as He,ba as Ie,c as J,ca as Me,da as Oe,e as L,ea as Ne,f as Be,fa as Pe,h as z,ha as K,i as Ue,j as h,k as G,l as k,m as X,n as je,o as ze,p as _,q as D,r as Xe,s as q,t as v,u as Q,v as x,w as V,x as d,y as De,z as b}from"./chunk-BTSPVGVF.js";import"./chunk-M2OVB55D.js";import"./chunk-5R6CWXD2.js";Ue();var T=(e,t)=>{d.hasClass("on")?(d.removeClass("on"),x.removeClass("close"),t?d.style="":g(d,"slideRightOut")):t?d.style="":g(d,"slideRightIn",()=>{d.addClass("on"),x.addClass("close")})},$e=()=>{let e=d.querySelector(".inner");d.querySelector(".tab")&&e.removeChild(d.querySelector(".tab"));let t=document.createElement("ul"),s="active";t.className="tab",["contents","related","overview"].forEach(o=>{let n=d.querySelector(".panel."+o);if(n.innerHTML.trim().length<1){o==="contents"&&z(U,"none");return}o==="contents"&&z(U,"");let r=document.createElement("li"),i=document.createElement("span"),a=document.createTextNode(n.getAttribute("data-title"));i.appendChild(a),r.appendChild(i),r.addClass(o+" item"),s?(n.addClass(s),r.addClass(s)):n.removeClass("active"),r.addEventListener("click",l=>{let c=l.currentTarget;c.hasClass("active")||(d.find(".tab .item").forEach(u=>{u.removeClass("active")}),d.find(".panel").forEach(u=>{u.removeClass("active")}),d.querySelector(".panel."+c.className.replace(" item","")).addClass("active"),c.addClass("active"))}),t.appendChild(r),s=""}),t.childNodes.length>1?(e.insertBefore(t,e.childNodes[0]),d.querySelector(".panels").style.paddingTop=""):d.querySelector(".panels").style.paddingTop=".625rem"},We=()=>{let e=i=>{let a=t[i];if(!a||a.hasClass("current"))return;f.each(".toc .active",c=>{c&&c.removeClass("active current")}),s.forEach(c=>{c&&c.removeClass("active")}),a.addClass("active current"),s[i]&&s[i].addClass("active");let l=a.parentNode;for(;!l.matches(".contents");){if(l.matches("li")){l.addClass("active");let c=document.getElementById(decodeURIComponent(l.querySelector("a.toc-link").getAttribute("href").replace("#","")));c&&c.addClass("active")}l=l.parentNode}getComputedStyle(d).display!=="none"&&n.hasClass("active")&&E(n,a.offsetTop-n.offsetHeight/4)},t=f.all(".contents li");if(t.length<1)return;let s=[...t],o=null;s=s.map((i,a)=>{let l=i.querySelector("a.toc-link"),c=document.getElementById(decodeURI(l.getAttribute("href").replace("#","")));if(!c)return null;let u=c.querySelector("a.anchor"),S=m=>{m.preventDefault();let N=document.getElementById(decodeURI(m.currentTarget.getAttribute("href").replace("#","")));o=a,E(N,null,()=>{e(a),o=null})};return l.addEventListener("click",S),u&&u.addEventListener("click",m=>{S(m),Ie(h.hostname+"/"+LOCAL.path+m.currentTarget.getAttribute("href"))}),c});let n=d.querySelector(".contents.panel"),r=i=>{let a=0,l=i[a];if(l.boundingClientRect.top>0)return a=s.indexOf(l.target),a===0?0:a-1;for(;a<i.length;a++)if(i[a].boundingClientRect.top<=0)l=i[a];else return s.indexOf(l.target);return s.indexOf(l.target)};(()=>{let i=new IntersectionObserver(a=>{let l=r(a)+(X<0?1:0);o===null&&e(l)},{rootMargin:"0px 0px -100% 0px",threshold:0});s.forEach(a=>{a&&i.observe(a)})})()},Z=()=>{E(0)},Ye=()=>{E(parseInt(String(L(Xe))))},Fe=()=>{E(document.getElementById("comments"))},Je=()=>{f.each(".menu .item:not(.title)",e=>{let t=e.querySelector("a[href]"),s=e.parentNode.parentNode;if(!t)return;let o=t.pathname===location.pathname||t.pathname===location.pathname.replace("index.html",""),n=!h.root.startsWith(t.pathname)&&location.pathname.startsWith(t.pathname),r=!t.onclick&&t.hostname===location.hostname&&(o||n);e.toggleClass("active",r),e.parentNode.querySelector(".active")&&s.hasClass("dropdown")?s.removeClass("active").addClass("expand"):s.removeClass("expand")})},w={timer:void 0,lock:!1,show(){clearTimeout(this.timer),document.body.removeClass("loaded"),q.setAttribute("style","display:block"),w.lock=!1},hide(e){h.loader.start||(e=-1),this.timer=setTimeout(this.vanish,e||3e3)},vanish(){w.lock||(h.loader.start&&g(q,0),document.body.addClass("loaded"),w.lock=!0)}};function Ke(){f.each(".overview .menu > .item",e=>{v.querySelector(".menu").appendChild(e.cloneNode(!0))}),q.addEventListener("click",w.vanish),x.addEventListener("click",T),document.querySelector(".dimmer").addEventListener("click",T),V.querySelector(".down").addEventListener("click",Ye),V.querySelector(".up").addEventListener("click",Z),b||Re(J(Q,"div",{id:"tool",innerHTML:'<div class="item player"></div><div class="item contents"><i class="ic i-list-ol"></i></div><div class="item chat"><i class="ic i-comments"></i></div><div class="item back-to-top"><i class="ic i-arrow-up"></i><span>0%</span></div>'})),ke(b.querySelector(".player")),qe(b.querySelector(".back-to-top")),xe(b.querySelector(".chat")),Te(b.querySelector(".contents")),P.addEventListener("click",Z),he.addEventListener("click",Fe),U.addEventListener("click",T),Oe(B),document.querySelector("main").addEventListener("click",()=>{B.player.mini()}),new IntersectionObserver(([e])=>{e.isIntersecting?(document.querySelectorAll(".parallax>use").forEach(t=>{t.classList.remove("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(t=>{t.classList.remove("stop-animation")})):(document.querySelectorAll(".parallax>use").forEach(t=>{t.classList.add("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(t=>{t.classList.add("stop-animation")}))},{root:null,threshold:.2}).observe(document.getElementById("waves")),new IntersectionObserver(([e])=>{e.isIntersecting?document.querySelectorAll(".with-love>i").forEach(t=>{t.classList.remove("stop-animation")}):document.querySelectorAll(".with-love>i").forEach(t=>{t.classList.add("stop-animation")})},{root:null,threshold:.2}).observe(document.querySelector(".with-love"))}var Ge=()=>{if(!document.querySelector(".index.wrap"))return;let e=new IntersectionObserver(t=>{t.forEach(s=>{s.target.hasClass("show")?e.unobserve(s.target):(s.isIntersecting||s.intersectionRatio>0)&&(s.target.addClass("show"),e.unobserve(s.target))})},{root:null,threshold:[.3]});f.each(".index.wrap article.item, .index.wrap section.item",t=>{e.observe(t)}),document.querySelector(".index.wrap .item:first-child").addClass("show"),f.each(".cards .item",t=>{["mouseenter","touchstart"].forEach(s=>{t.addEventListener(s,()=>{let o=document.querySelector(".cards .item.active");o&&o.removeClass("active"),t.addClass("active")},{passive:!0})}),["mouseleave"].forEach(s=>{t.addEventListener(s,()=>{t.removeClass("active")},{passive:!0})})})},p=e=>{let t=document.querySelector(".theme .ic");e==="dark"?(D.setAttribute("data-theme",e),t.removeClass("i-sun"),t.addClass("i-moon")):(D.removeAttribute("data-theme"),t.removeClass("i-moon"),t.addClass("i-sun"))},_e=()=>{h.auto_dark.enable&&(new Date().getHours()>=h.auto_dark.start||new Date().getHours()<=h.auto_dark.end?p("dark"):p())},ee=e=>{D.getAttribute("data-theme")==="dark"&&(e="#222"),document.querySelector('meta[name="theme-color"]').setAttribute("content",e)},Qe=()=>{window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{t.matches?p("dark"):p()});let e=j.get("theme");e?p(e):h.darkmode&&p("dark")},Ve=document.getElementById("waves"),te=()=>{fe(L(v)),ve(L(Q)),we(F+L(Ve)),pe!==window.innerWidth&&T(null,1),ye(window.innerHeight),ge(window.innerWidth)},Ze=()=>{let e=window.innerHeight,t=document.querySelector("main > .inner").offsetHeight,s=t>e?t-e:document.body.scrollHeight-e,o=window.scrollY>F,n=window.scrollY>0;ee(o?"#FFF":"#222"),v.toggleClass("show",o),b.toggleClass("affix",n),De.toggleClass("affix",n),d.toggleClass("affix",window.scrollY>me&&document.body.offsetWidth>=991),typeof k.y>"u"&&(k.y=window.scrollY),Ee(k.y-window.scrollY),X<0?(v.removeClass("up"),v.toggleClass("down",o)):X>0&&(v.removeClass("down"),v.toggleClass("up",o)),k.y=window.scrollY;let r=Math.round(Math.min(100*window.scrollY/s,100))+"%";P.querySelector("span").innerText!==r&&(P.querySelector("span").innerText=r),(document.getElementById("sidebar").hasClass("affix")||document.getElementById("sidebar").hasClass("on"))&&Be(document.querySelector(".percent"),r)},et=()=>{let e=document.querySelector('[rel="icon"]');document.addEventListener("visibilitychange",()=>{switch(document.visibilityState){case"hidden":e.setAttribute("href",G+h.favicon.hidden),document.title=LOCAL.favicon.hide,h.loader.switch&&w.show(),clearTimeout(ze);break;case"visible":e.setAttribute("href",G+h.favicon.normal),document.title=LOCAL.favicon.show,h.loader.switch&&w.hide(1e3),be(setTimeout(()=>{document.title=je},2e3));break}},{passive:!0})},tt=32,st="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",se=typeof window>"u",ot=!se&&"loading"in HTMLImageElement.prototype,at=!se&&(!("onscroll"in window)||/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent));function nt(e,t=document){return typeof e=="string"?[...t.querySelectorAll(e)]:e instanceof Element?[e]:[...e]}function rt(e,t){let s;return function(...o){s&&clearTimeout(s),s=setTimeout(()=>{s=void 0,e(...o)},t)}}var it=Math.PI,qt=it*2;function lt(e='img[loading="lazy"]',{hash:t=!0,hashType:s="blurhash",placeholderSize:o=tt,updateSizesOnResize:n=!1,onImageLoad:r}={}){let i=new Set;for(let a of nt(e)){let l=$(a,{updateOnResize:n});if(n&&l&&i.add(l),!a.dataset.src&&!a.dataset.srcset)continue;if(at||!ot){ae(a),I(a),H(a);continue}if(a.src||(a.src=st),a.complete&&a.naturalWidth>0){oe(a,r);continue}let c=()=>oe(a,r);a.addEventListener("load",c,{once:!0}),i.add(()=>a.removeEventListener("load",c))}return()=>{for(let a of i)a();i.clear()}}function oe(e,t){if(e.parentElement?.tagName.toLowerCase()==="picture"){ae(e),I(e),H(e),t?.(e);return}let s=new Image,{srcset:o,src:n,sizes:r}=e.dataset;if(r==="auto"){let i=ne(e);i&&(s.sizes=`${i}px`)}else e.sizes&&(s.sizes=e.sizes);o&&(s.srcset=o),n&&(s.src=n),s.addEventListener("load",()=>{I(e),H(e),t?.(e)},{once:!0})}var R=new WeakMap;function $(e,t){if(e.dataset.sizes!=="auto")return;let s=ne(e);if(s&&(e.sizes=`${s}px`),e.parentElement?.tagName.toLowerCase()==="picture"&&!t?.skipChildren&&[...e.parentElement.getElementsByTagName("source")].forEach(o=>$(o,{skipChildren:!0})),t?.updateOnResize){if(!R.has(e)){let o=rt(()=>$(e),500),n=new ResizeObserver(o);R.set(e,n),n.observe(e)}return()=>{let o=R.get(e);o&&(o.disconnect(),R.delete(e))}}}function H(e){e.dataset.src&&(e.src=e.dataset.src,e.removeAttribute("data-src"))}function I(e){e.dataset.srcset&&(e.srcset=e.dataset.srcset,e.removeAttribute("data-srcset"))}function ae(e){let t=e.parentElement;t?.tagName.toLowerCase()==="picture"&&([...t.querySelectorAll("source[data-srcset]")].forEach(I),[...t.querySelectorAll("source[data-src]")].forEach(H))}function ne(e){return e instanceof HTMLSourceElement?e.parentElement?.getElementsByTagName("img")[0]?.offsetWidth:e.offsetWidth}var ct=()=>{Y(),d.hasClass("on")&&g(d,0,()=>{d.removeClass("on"),x.removeClass("close")});let e=document.getElementById("main");e.innerHTML="",e.appendChild(q.lastChild.cloneNode(!0)),E(0)},re=async e=>{Ce(0),Ae(window.location.href),K("katex"),await import("./copy-tex-PUH7NFKJ.js"),K("mermaid");let t=new IntersectionObserver(function(o,n){o.forEach(r=>{if(r.isIntersecting){let i=r.target;i.style.backgroundImage=`url("${i.getAttribute("data-background-image")}")`,i.removeAttribute("data-background-image"),n.unobserve(i)}})},{root:null,threshold:.2});document.querySelectorAll("[data-background-image]").forEach(o=>{t.observe(o)}),e!==1&&f.each("script[data-pjax]",Pe),Le(document.title),te(),Je(),$e(),We(),import("./post-VLPL7D4H.js").then(({postBeauty:o})=>{o()});let s=document.getElementById("copyright");if(s){let o=new IntersectionObserver(n=>{n.forEach(r=>{r.isIntersecting&&o.disconnect()})},{root:null,threshold:.2});o.observe(s)}lt(),Me(),B.player.load(LOCAL.audio||h.audio||{}),w.hide(100),setTimeout(()=>{He()},500),Ge()};function y(e,t,s){return e instanceof HTMLCollection||e instanceof NodeList||e instanceof Array?Array.prototype.forEach.call(e,t,s):t.call(s,e,0,[e])}var ie=(e,t)=>{e=typeof e=="string"?e.split(" "):e,e.forEach(t)};function W(e,t,s,o){ie(t,n=>{y(e,r=>{r.addEventListener(n,s,o)})})}function C(e,t,s={}){ie(t,o=>{let n=new CustomEvent(o,{bubbles:!0,cancelable:!0,...s});y(e,r=>{r.dispatchEvent(n)})})}function le(e){let t=e.text||e.textContent||e.innerHTML||"",s=e.src||"",o=e.parentNode||document.querySelector("head")||document.documentElement,n=document.createElement("script");return t.match("document.write")?!1:(n.type="text/javascript",n.id=e.id,s!==""&&(n.src=s,n.async=!1),t!==""&&n.appendChild(document.createTextNode(t)),o.appendChild(n),(o instanceof HTMLHeadElement||o instanceof HTMLBodyElement)&&o.contains(n)&&o.removeChild(n),!0)}function dt(e){e.tagName.toLowerCase()==="script"&&le(e),y(e.querySelectorAll("script"),t=>{let s=t;(!s.type||s.type.toLowerCase()==="text/javascript")&&(s.parentNode&&s.parentNode.removeChild(s),le(s))})}function ut(e,t,s,o=document){e.forEach(n=>{y(o.querySelectorAll(n),t,s)})}var M=(()=>{let e=0;return()=>`pjax${new Date().getTime()}_${e++}`})();function ce(e,t){e.outerHTML=t.outerHTML,this.onSwitch()}function ht(e,t){e.innerHTML=t.innerHTML,t.className===""?e.removeAttribute("class"):e.className=t.className,this.onSwitch()}function de(e,t){if(e.innerHTML=t.innerHTML,t.hasAttributes()){let s=t.attributes;for(let o=0;o<s.length;o++)e.attributes.setNamedItem(s[o].cloneNode())}this.onSwitch()}function mt({elements:e="a[href]",selectors:t=["title",".js-Pjax"],switches:s={},switchesOptions:o={},history:n=!0,scrollTo:r=0,scrollRestoration:i=!0,cacheBust:a=!0,timeout:l=0,currentUrlFullReload:c=!1}={}){let u={elements:e,selectors:t,switches:s,switchesOptions:o,history:n,scrollTo:r,scrollRestoration:i,cacheBust:a,timeout:l,currentUrlFullReload:c};return u.switches.head||(u.switches.head=de),u.switches.body||(u.switches.body=de),u}var O="data-pjax-state";function ue(e,t){if(t.defaultPrevented||t.returnValue===!1)return;let s={...this.options},o=pt(e,t);if(o){e.setAttribute(O,o);return}if(t.preventDefault(),this.options.currentUrlFullReload&&e.href===window.location.href.split("#")[0]){e.setAttribute(O,"reload"),this.reload();return}e.setAttribute(O,"load"),s.triggerElement=e,this.loadUrl(e.href,s)}function pt(e,t){return t.which>1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey?"modifier":e.protocol!==window.location.protocol||e.host!==window.location.host?"external":e.hash&&e.href.replace(e.hash,"")===window.location.href.replace(location.hash,"")?"anchor":e.href===window.location.href.split("#")[0]+"#"?"anchor-empty":null}function ft(e){e.setAttribute(O,""),W(e,"click",t=>ue.call(this,e,t)),W(e,"keyup",t=>{let s=t;s.keyCode===13&&ue.call(this,e,s)})}function vt(e,t,s,o){if(o={...o||this.options},o.request=t,e===!1){C(document,"pjax:complete pjax:error",o);return}let n=window.history.state||{};window.history.replaceState({url:n.url||window.location.href,title:n.title||document.title,uid:n.uid||M(),scrollPos:[document.documentElement.scrollLeft||document.body.scrollLeft,document.documentElement.scrollTop||document.body.scrollTop]},document.title,window.location.href);let r=s;t.responseURL?s!==t.responseURL&&(s=t.responseURL):t.getResponseHeader("X-PJAX-URL")?s=t.getResponseHeader("X-PJAX-URL"):t.getResponseHeader("X-XHR-Redirected-To")&&(s=t.getResponseHeader("X-XHR-Redirected-To"));let i=document.createElement("a");i.href=r;let a=i.hash;i.href=s,a&&!i.hash&&(i.hash=a,s=i.href),this.state.href=s,this.state.options=o;try{this.loadContent(e,o)}catch(l){return C(document,"pjax:error",o),console.error("Pjax switch fail: ",l),this.latestChance(s)}}function wt(e){switch(e.tagName.toLowerCase()){case"a":e.hasAttribute("data-pjax-state")||this.attachLink(e);break;default:throw new Error("theme-shokax-pjax can only be applied on <a>")}}function yt(e,t,s){let o=new RegExp("([?&])"+t+"=.*?(&|$)","i"),n=e.indexOf("?")!==-1?"&":"?";return e.match(o)?e.replace(o,"$1"+t+"="+s+"$2"):e+n+t+"="+s}function gt(e,t={},s){let o=t.requestOptions||{},n=(o.requestMethod||"GET").toUpperCase(),r=o.requestParams||null,i=null,a=new XMLHttpRequest,l=t.timeout;if(a.onreadystatechange=()=>{a.readyState===4&&(a.status===200?s(a.responseText,a,e,t):a.status!==0&&s(null,a,e,t))},a.onerror=c=>{console.error(c),s(null,a,e,t)},a.ontimeout=()=>{s(null,a,e,t)},r&&r.length){let c=r.map(u=>u.name+"="+u.value).join("&");switch(n){case"GET":e=e.split("?")[0],e+="?"+c;break;case"POST":i=c;break}}return t.cacheBust&&(e=yt(e,"t",Date.now())),a.open(n,e,!0),a.timeout=l,a.setRequestHeader("X-Requested-With","XMLHttpRequest"),a.setRequestHeader("X-PJAX","true"),a.setRequestHeader("X-PJAX-Selectors",JSON.stringify(t.selectors)),a.send(i),a}function Et(e,t,s,o,n,r){let i=[];s.forEach(a=>{let l=o.querySelectorAll(a),c=n.querySelectorAll(a);if(l.length!==c.length)throw new Error(`DOM doesn't look the same on new loaded page: '${a}' - new ${l.length}, old ${c.length}`);y(l,(u,S)=>{let m=c[S],N=e[a]?e[a].bind(this,m,u,r,t[a]):ce.bind(this,m,u,r);i.push(N)},this)},this),this.state.numPendingSwitches=i.length,i.forEach(a=>{a()})}function bt(e,t,s){for(let o of t){let n=e.querySelectorAll(o);for(let r=0;r<n.length;r++)if(n[r].contains(s))return!0}return!1}var A=class{constructor(e){this.state={numPendingSwitches:0,href:null,options:null},this.options=mt(e),this.options.scrollRestoration&&"scrollRestoration"in history&&(history.scrollRestoration="manual"),this.maxUid=this.lastUid=M(),this.parseDOM(document),W(window,"popstate",t=>{let s=t;if(s.state){let o={...this.options};o.url=s.state.url,o.title=s.state.title,o.history=!1,o.scrollPos=s.state.scrollPos,s.state.uid<this.lastUid?o.backward=!0:o.forward=!0,this.lastUid=s.state.uid,this.loadUrl(s.state.url,o)}})}getElements(e){return e.querySelectorAll(this.options.elements)}parseDOM(e){y(this.getElements(e),wt,this)}refresh(e){this.parseDOM(e||document)}reload(){window.location.reload()}forEachSelectors(e,t,s){return ut.bind(this)(this.options.selectors,e,t,s)}switchSelectors(e,t,s,o){return Et.bind(this)(this.options.switches,this.options.switchesOptions,e,t,s,o)}latestChance(e){window.location=e}onSwitch(){C(window,"resize scroll"),this.state.numPendingSwitches--,this.state.numPendingSwitches===0&&this.afterAllSwitches()}loadContent(e,t){if(typeof e!="string"){C(document,"pjax:complete pjax:error",t);return}let s=document.implementation.createHTMLDocument("pjax"),o=/<html[^>]+>/gi,n=/\s?[a-z:]+(?:=['"][^'">]+['"])*/gi,r=e.match(o);if(r&&r.length&&(r=r[0].match(n),r.length&&(r.shift(),r.forEach(i=>{let a=i.trim().split("=");a.length===1?s.documentElement.setAttribute(a[0],"true"):s.documentElement.setAttribute(a[0],a[1].slice(1,-1))}))),s.documentElement.innerHTML=e,document.activeElement&&bt(document,this.options.selectors,document.activeElement))try{document.activeElement.blur()}catch{}this.switchSelectors(this.options.selectors,s,document,t)}loadUrl(e,t){t=typeof t=="object"?{...this.options,...t}:{...this.options},this.abortRequest(this.request),C(document,"pjax:send",t),this.request=this.doRequest(e,t,this.handleResponse.bind(this))}afterAllSwitches(){var e,t,s;this.options.selectors.forEach(n=>{y(document.querySelectorAll(n),r=>{dt(r)})});let o=this.state;if(!((e=o.options)===null||e===void 0)&&e.history&&(window.history.state||(this.lastUid=this.maxUid=M(),window.history.replaceState({url:window.location.href,title:document.title,uid:this.maxUid,scrollPos:[0,0]},document.title)),this.lastUid=this.maxUid=M(),window.history.pushState({url:o.href,title:o.options.title,uid:this.maxUid,scrollPos:[0,0]},o.options.title,o.href)),this.forEachSelectors(n=>{this.parseDOM(n)},this),C(document,"pjax:complete pjax:success",o.options),!((t=o.options)===null||t===void 0)&&t.history){let n=document.createElement("a");if(n.href=this.state.href,n.hash){let r=n.hash.slice(1);r=decodeURIComponent(r);let i=0,a=document.getElementById(r)||document.getElementsByName(r)[0];if(a&&a.offsetParent)do i+=a.offsetTop,a=a.offsetParent;while(a);window.scrollTo(0,i)}else o.options.scrollTo!==!1&&(Array.isArray(o.options.scrollTo)?window.scrollTo(o.options.scrollTo[0],o.options.scrollTo[1]):window.scrollTo(0,o.options.scrollTo))}else!((s=o.options)===null||s===void 0)&&s.scrollRestoration&&o.options.scrollPos&&window.scrollTo(o.options.scrollPos[0],o.options.scrollPos[1]);this.state={numPendingSwitches:0,href:null,options:null}}abortRequest(e){e&&e.readyState<4&&(e.onreadystatechange=()=>{},e.abort())}};A.prototype.attachLink=ft,A.prototype.doRequest=gt,A.prototype.handleResponse=vt,A.switches={innerHTML:ht,outerHTML:ce};function Ct(){function e(){let t,s=document.querySelector(".theme").querySelector(".ic"),o=J(_,"div",{id:"neko",innerHTML:'<div class="planet"><div class="sun"></div><div class="moon"></div></div><div class="body"><div class="face"><section class="eyes left"><span class="pupil"></span></section><section class="eyes right"><span class="pupil"></span></section><span class="nose"></span></div></div>'}),n=()=>{g(o,{delay:2500,opacity:0},()=>{_.removeChild(o)})};s.hasClass("i-sun")?t=()=>{o.addClass("dark"),p("dark"),j.set("theme","dark"),n()}:(o.addClass("dark"),t=()=>{o.removeClass("dark"),p(),j.set("theme","light"),n()}),g(o,1,()=>{setTimeout(t,210)},()=>{z(o,"block")})}document.getElementById("rightNav").querySelector(".theme .ic").addEventListener("click",e)}var At=async()=>{Ct(),Ke(),Se(new A({selectors:["head title",".languages",".twikoo",".pjax",".leancloud-recent-comment","script[data-config]"],cacheBust:!1})),h.quicklink.ignores=LOCAL.ignores,import("./quicklink-L4RMBLR7.js").then(({listen:e})=>{e(h.quicklink)}),_e(),et(),Qe(),import("./index.esm-B6A3XSUG.js").then(e=>{e.default(h.fireworks)}),window.addEventListener("scroll",Ze,{passive:!0}),window.addEventListener("resize",te,{passive:!0}),window.addEventListener("pjax:send",ct,{passive:!0}),window.addEventListener("pjax:success",re,{passive:!0}),window.addEventListener("beforeunload",()=>{Y()}),await re(1)};Ne(),window.addEventListener("DOMContentLoaded",At,{passive:!0}),console.log("%c Theme.ShokaX v"+h.version+" %c https://github.com/theme-shoka-x/hexo-theme-shokaX ","color: white; background: #e9546b; padding:5px 0;","padding:4px;border:1px solid #e9546b;");/*! For license information please see siteInit.js.LEGAL.txt */
