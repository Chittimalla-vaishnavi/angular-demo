import{$ as m,$a as Ue,A as rr,Ab as Ye,Ac as oi,B as bo,Ba as dr,Bc as Tt,C as Yt,Ca as Do,Cb as Ze,Cc as ii,Da as hr,Db as Ke,E as Z,F as Le,Fa as _o,Fb as Ho,G as me,H as or,Ha as P,I as Ge,Ia as Rt,Ib as se,J as We,Ja as Ao,Jb as hn,Jc as si,K as Ee,Ka as xo,Kb as pn,L as ir,La as No,Lc as ai,M as vo,Ma as re,Na as ve,O as yo,Oa as Oo,Pa as ko,Qa as Po,Qb as Ce,R as wo,Ra as Je,S as k,Sa as Lo,Sd as hi,T as sr,Ta as Uo,Tb as wr,Tc as Er,Td as Me,U as A,Ua as jo,Uc as tt,V as E,Va as sn,W as ar,Wa as oe,Wd as nt,Xa as W,Xd as ae,Y as g,Ya as ie,Yd as z,Z as G,Za as X,Zd as pi,_ as Ro,_a as Qe,_b as qo,_c as ci,_d as fi,a as d,aa as b,ab as Bo,ac as Te,b as H,ba as u,bb as Fo,ca as Zt,cb as pr,cc as fn,ce as gi,da as Eo,db as fr,dc as Go,ea as be,eb as zo,ec as ee,f as er,fa as F,fb as ye,fc as Rr,g as po,gc as Wo,h as fo,hc as N,i as Jt,ia as Kt,ic as Xo,j as tr,ja as en,jc as Jo,jd as Cr,k as nr,ka as x,kb as I,kc as Et,l as fe,la as cr,lb as gr,lc as Qo,m as q,ma as lr,mb as mr,mc as Yo,md as li,na as tn,nb as je,nc as Zo,nd as ui,o as ge,ob as br,oc as Ct,pa as nn,pb as vr,pc as Ko,pd as Tr,qa as Co,qb as yr,qc as et,r as j,ra as To,rb as an,rc as ei,s as p,sa as rn,sb as cn,sd as di,t as wt,ta as _,tb as $o,u as go,ua as So,uc as ti,v as mo,va as on,vb as Vo,vc as ni,wa as Io,wb as ln,wc as ri,wd as Sr,x as w,xa as ur,xb as K,xc as Se,y as Qt,ya as Mo,yb as un,yc as gn,yd as Ie,z as B,za as Xe,zb as dn,zc as mn}from"./chunk-JCETUL5E.js";var St=class{_doc;constructor(n){this._doc=n}manager},bn=(()=>{class t extends St{constructor(e){super(e)}supports(e){return!0}addEventListener(e,r,o,i){return e.addEventListener(r,o,i),()=>this.removeEventListener(e,r,o,i)}removeEventListener(e,r,o,i){return e.removeEventListener(r,o,i)}static \u0275fac=function(r){return new(r||t)(b(x))};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})(),yn=new m(""),Ar=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,r){this._zone=r,e.forEach(s=>{s.manager=this});let o=e.filter(s=>!(s instanceof bn));this._plugins=o.slice().reverse();let i=e.find(s=>s instanceof bn);i&&this._plugins.push(i)}addEventListener(e,r,o,i){return this._findPluginFor(r).addEventListener(e,r,o,i)}getZone(){return this._zone}_findPluginFor(e){let r=this._eventNameToPlugin.get(e);if(r)return r;if(r=this._plugins.find(i=>i.supports(e)),!r)throw new E(5101,!1);return this._eventNameToPlugin.set(e,r),r}static \u0275fac=function(r){return new(r||t)(b(yn),b(ve))};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})(),Ir="ng-app-id";function mi(t){for(let n of t)n.remove()}function bi(t,n){let e=n.createElement("style");return e.textContent=t,e}function da(t,n,e,r){let o=t.head?.querySelectorAll(`style[${Ir}="${n}"],link[${Ir}="${n}"]`);if(o)for(let i of o)i.removeAttribute(Ir),i instanceof HTMLLinkElement?r.set(i.href.slice(i.href.lastIndexOf("/")+1),{usage:0,elements:[i]}):i.textContent&&e.set(i.textContent,{usage:0,elements:[i]})}function Dr(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var xr=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,r,o,i={}){this.doc=e,this.appId=r,this.nonce=o,da(e,r,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,r){for(let o of e)this.addUsage(o,this.inline,bi);r?.forEach(o=>this.addUsage(o,this.external,Dr))}removeStyles(e,r){for(let o of e)this.removeUsage(o,this.inline);r?.forEach(o=>this.removeUsage(o,this.external))}addUsage(e,r,o){let i=r.get(e);i?i.usage++:r.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,o(e,this.doc)))})}removeUsage(e,r){let o=r.get(e);o&&(o.usage--,o.usage<=0&&(mi(o.elements),r.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])mi(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[r,{elements:o}]of this.inline)o.push(this.addElement(e,bi(r,this.doc)));for(let[r,{elements:o}]of this.external)o.push(this.addElement(e,Dr(r,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,r){return this.nonce&&r.setAttribute("nonce",this.nonce),e.appendChild(r)}static \u0275fac=function(r){return new(r||t)(b(x),b(ur),b(dr,8),b(Xe))};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})(),Mr={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Nr=/%COMP%/g;var yi="%COMP%",ha=`_nghost-${yi}`,pa=`_ngcontent-${yi}`,fa=!0,ga=new m("",{providedIn:"root",factory:()=>fa});function ma(t){return pa.replace(Nr,t)}function ba(t){return ha.replace(Nr,t)}function wi(t,n){return n.map(e=>e.replace(Nr,t))}var Or=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(e,r,o,i,s,a,c=null,l=null){this.eventManager=e,this.sharedStylesHost=r,this.appId=o,this.removeStylesOnCompDestroy=i,this.doc=s,this.ngZone=a,this.nonce=c,this.tracingService=l,this.platformIsServer=!1,this.defaultRenderer=new It(e,s,a,this.platformIsServer,this.tracingService)}createRenderer(e,r){if(!e||!r)return this.defaultRenderer;let o=this.getOrCreateRenderer(e,r);return o instanceof vn?o.applyToHost(e):o instanceof Mt&&o.applyStyles(),o}getOrCreateRenderer(e,r){let o=this.rendererByCompId,i=o.get(r.id);if(!i){let s=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,h=this.removeStylesOnCompDestroy,v=this.platformIsServer,T=this.tracingService;switch(r.encapsulation){case hr.Emulated:i=new vn(c,l,r,this.appId,h,s,a,v,T);break;case hr.ShadowDom:return new _r(c,l,e,r,s,a,this.nonce,v,T);default:i=new Mt(c,l,r,h,s,a,v,T);break}o.set(r.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(r){return new(r||t)(b(Ar),b(xr),b(ur),b(ga),b(x),b(ve),b(dr),b(xo,8))};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})(),It=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,r,o,i){this.eventManager=n,this.doc=e,this.ngZone=r,this.platformIsServer=o,this.tracingService=i}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(Mr[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(vi(n)?n.content:n).appendChild(e)}insertBefore(n,e,r){n&&(vi(n)?n.content:n).insertBefore(e,r)}removeChild(n,e){e.remove()}selectRootElement(n,e){let r=typeof n=="string"?this.doc.querySelector(n):n;if(!r)throw new E(-5104,!1);return e||(r.textContent=""),r}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,r,o){if(o){e=o+":"+e;let i=Mr[o];i?n.setAttributeNS(i,e,r):n.setAttribute(e,r)}else n.setAttribute(e,r)}removeAttribute(n,e,r){if(r){let o=Mr[r];o?n.removeAttributeNS(o,e):n.removeAttribute(`${r}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,r,o){o&(Rt.DashCase|Rt.Important)?n.style.setProperty(e,r,o&Rt.Important?"important":""):n.style[e]=r}removeStyle(n,e,r){r&Rt.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,r){n!=null&&(n[e]=r)}setValue(n,e){n.nodeValue=e}listen(n,e,r,o){if(typeof n=="string"&&(n=Et().getGlobalEventTarget(this.doc,n),!n))throw new E(5102,!1);let i=this.decoratePreventDefault(r);return this.tracingService?.wrapEventListener&&(i=this.tracingService.wrapEventListener(n,e,i)),this.eventManager.addEventListener(n,e,i,o)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function vi(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var _r=class extends It{sharedStylesHost;hostEl;shadowRoot;constructor(n,e,r,o,i,s,a,c,l){super(n,i,s,c,l),this.sharedStylesHost=e,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let h=o.styles;h=wi(o.id,h);for(let T of h){let S=document.createElement("style");a&&S.setAttribute("nonce",a),S.textContent=T,this.shadowRoot.appendChild(S)}let v=o.getExternalStyles?.();if(v)for(let T of v){let S=Dr(T,i);a&&S.setAttribute("nonce",a),this.shadowRoot.appendChild(S)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,r){return super.insertBefore(this.nodeOrShadowRoot(n),e,r)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Mt=class extends It{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,r,o,i,s,a,c,l){super(n,i,s,a,c),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=o;let h=r.styles;this.styles=l?wi(l,h):h,this.styleUrls=r.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Ao.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},vn=class extends Mt{contentAttr;hostAttr;constructor(n,e,r,o,i,s,a,c,l){let h=o+"-"+r.id;super(n,e,r,i,s,a,c,l,h),this.contentAttr=ma(h),this.hostAttr=ba(h)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let r=super.createElement(n,e);return super.setAttribute(r,this.contentAttr,""),r}};var wn=class t extends Yo{supportsDOMEvents=!0;static makeCurrent(){Qo(new t)}onAndCancel(n,e,r,o){return n.addEventListener(e,r,o),()=>{n.removeEventListener(e,r,o)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=va();return e==null?null:ya(e)}resetBaseElement(){Dt=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return gn(document.cookie,n)}},Dt=null;function va(){return Dt=Dt||document.head.querySelector("base"),Dt?Dt.getAttribute("href"):null}function ya(t){return new URL(t,document.baseURI).pathname}var wa=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(r){return new(r||t)};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})(),Ri=["alt","control","meta","shift"],Ra={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Ea={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},Ei=(()=>{class t extends St{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,r,o,i){let s=t.parseEventName(r),a=t.eventCallback(s.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Et().onAndCancel(e,s.domEventName,a,i))}static parseEventName(e){let r=e.toLowerCase().split("."),o=r.shift();if(r.length===0||!(o==="keydown"||o==="keyup"))return null;let i=t._normalizeKey(r.pop()),s="",a=r.indexOf("code");if(a>-1&&(r.splice(a,1),s="code."),Ri.forEach(l=>{let h=r.indexOf(l);h>-1&&(r.splice(h,1),s+=l+".")}),s+=i,r.length!=0||i.length===0)return null;let c={};return c.domEventName=o,c.fullKey=s,c}static matchEventFullKeyCode(e,r){let o=Ra[e.key]||e.key,i="";return r.indexOf("code.")>-1&&(o=e.code,i="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),Ri.forEach(s=>{if(s!==o){let a=Ea[s];a(e)&&(i+=s+".")}}),i+=o,i===r)}static eventCallback(e,r,o){return i=>{t.matchEventFullKeyCode(i,e)&&o.runGuarded(()=>r(i))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(r){return new(r||t)(b(x))};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})();function Ca(t,n,e){let r=d({rootComponent:t,platformRef:e?.platformRef},Ta(n));return Wo(r)}function Ta(t){return{appProviders:[..._a,...t?.providers??[]],platformProviders:Da}}function Sa(){wn.makeCurrent()}function Ia(){return new lr}function Ma(){return Io(document),document}var Da=[{provide:Xe,useValue:oi},{provide:Mo,useValue:Sa,multi:!0},{provide:x,useFactory:Ma}];var _a=[{provide:Eo,useValue:"root"},{provide:lr,useFactory:Ia},{provide:yn,useClass:bn,multi:!0,deps:[x]},{provide:yn,useClass:Ei,multi:!0,deps:[x]},Or,xr,Ar,{provide:ko,useExisting:Or},{provide:mn,useClass:wa},[]];var it=class{},_t=class{},De=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let r=e.indexOf(":");if(r>0){let o=e.slice(0,r),i=e.slice(r+1).trim();this.addHeaderEntry(o,i)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,r)=>{this.addHeaderEntry(r,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,r])=>{this.setHeaderEntries(e,r)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let r=n.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(n.name,e);let o=(n.op==="a"?this.headers.get(e):void 0)||[];o.push(...r),this.headers.set(e,o);break;case"d":let i=n.value;if(!i)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=this.headers.get(e);if(!s)return;s=s.filter(a=>i.indexOf(a)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(n,e){let r=n.toLowerCase();this.maybeSetNormalizedName(n,r),this.headers.has(r)?this.headers.get(r).push(e):this.headers.set(r,[e])}setHeaderEntries(n,e){let r=(Array.isArray(e)?e:[e]).map(i=>i.toString()),o=n.toLowerCase();this.headers.set(o,r),this.maybeSetNormalizedName(n,o)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var En=class{encodeKey(n){return Ci(n)}encodeValue(n){return Ci(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function Aa(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(o=>{let i=o.indexOf("="),[s,a]=i==-1?[n.decodeKey(o),""]:[n.decodeKey(o.slice(0,i)),n.decodeValue(o.slice(i+1))],c=e.get(s)||[];c.push(a),e.set(s,c)}),e}var xa=/%(\d[a-f0-9])/gi,Na={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Ci(t){return encodeURIComponent(t).replace(xa,(n,e)=>Na[e]??n)}function Rn(t){return`${t}`}var we=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new En,n.fromString){if(n.fromObject)throw new E(2805,!1);this.map=Aa(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let r=n.fromObject[e],o=Array.isArray(r)?r.map(Rn):[Rn(r)];this.map.set(e,o)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(r=>{let o=n[r];Array.isArray(o)?o.forEach(i=>{e.push({param:r,value:i,op:"a"})}):e.push({param:r,value:o,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(r=>e+"="+this.encoder.encodeValue(r)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(Rn(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let r=this.map.get(n.param)||[],o=r.indexOf(Rn(n.value));o!==-1&&r.splice(o,1),r.length>0?this.map.set(n.param,r):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};var Cn=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}};function Oa(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Ti(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function Si(t){return typeof Blob<"u"&&t instanceof Blob}function Ii(t){return typeof FormData<"u"&&t instanceof FormData}function ka(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var Mi="Content-Type",Di="Accept",_i="X-Request-URL",Ai="text/plain",xi="application/json",Pa=`${xi}, ${Ai}, */*`,rt=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,r,o){this.url=e,this.method=n.toUpperCase();let i;if(Oa(this.method)||o?(this.body=r!==void 0?r:null,i=o):i=r,i){if(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,this.keepalive=!!i.keepalive,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),i.priority&&(this.priority=i.priority),i.cache&&(this.cache=i.cache),i.credentials&&(this.credentials=i.credentials),typeof i.timeout=="number"){if(i.timeout<1||!Number.isInteger(i.timeout))throw new E(2822,"");this.timeout=i.timeout}i.mode&&(this.mode=i.mode),i.redirect&&(this.redirect=i.redirect),i.integrity&&(this.integrity=i.integrity),i.referrer&&(this.referrer=i.referrer),this.transferCache=i.transferCache}if(this.headers??=new De,this.context??=new Cn,!this.params)this.params=new we,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let a=e.indexOf("?"),c=a===-1?"?":a<e.length-1?"&":"";this.urlWithParams=e+c+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Ti(this.body)||Si(this.body)||Ii(this.body)||ka(this.body)?this.body:this.body instanceof we?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Ii(this.body)?null:Si(this.body)?this.body.type||null:Ti(this.body)?null:typeof this.body=="string"?Ai:this.body instanceof we?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?xi:null}clone(n={}){let e=n.method||this.method,r=n.url||this.url,o=n.responseType||this.responseType,i=n.keepalive??this.keepalive,s=n.priority||this.priority,a=n.cache||this.cache,c=n.mode||this.mode,l=n.redirect||this.redirect,h=n.credentials||this.credentials,v=n.referrer||this.referrer,T=n.integrity||this.integrity,S=n.transferCache??this.transferCache,D=n.timeout??this.timeout,Q=n.body!==void 0?n.body:this.body,y=n.withCredentials??this.withCredentials,C=n.reportProgress??this.reportProgress,U=n.headers||this.headers,Y=n.params||this.params,O=n.context??this.context;return n.setHeaders!==void 0&&(U=Object.keys(n.setHeaders).reduce((ke,Pe)=>ke.set(Pe,n.setHeaders[Pe]),U)),n.setParams&&(Y=Object.keys(n.setParams).reduce((ke,Pe)=>ke.set(Pe,n.setParams[Pe]),Y)),new t(e,r,Q,{params:Y,headers:U,context:O,reportProgress:C,responseType:o,withCredentials:y,transferCache:S,keepalive:i,cache:a,priority:s,timeout:D,mode:c,redirect:l,credentials:h,referrer:v,integrity:T})}},Be=function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t}(Be||{}),st=class{headers;status;statusText;url;ok;type;redirected;constructor(n,e=200,r="OK"){this.headers=n.headers||new De,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||r,this.url=n.url||null,this.redirected=n.redirected,this.ok=this.status>=200&&this.status<300}},Tn=class t extends st{constructor(n={}){super(n)}type=Be.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},At=class t extends st{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=Be.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected})}},ot=class extends st{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},La=200,Ua=204;function kr(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer}}var Ni=(()=>{class t{handler;constructor(e){this.handler=e}request(e,r,o={}){let i;if(e instanceof rt)i=e;else{let c;o.headers instanceof De?c=o.headers:c=new De(o.headers);let l;o.params&&(o.params instanceof we?l=o.params:l=new we({fromObject:o.params})),i=new rt(e,r,o.body!==void 0?o.body:null,{headers:c,context:o.context,params:l,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache,keepalive:o.keepalive,priority:o.priority,cache:o.cache,mode:o.mode,redirect:o.redirect,credentials:o.credentials,referrer:o.referrer,integrity:o.integrity,timeout:o.timeout})}let s=p(i).pipe(me(c=>this.handler.handle(c)));if(e instanceof rt||o.observe==="events")return s;let a=s.pipe(Z(c=>c instanceof At));switch(o.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return a.pipe(w(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new E(2806,!1);return c.body}));case"blob":return a.pipe(w(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new E(2807,!1);return c.body}));case"text":return a.pipe(w(c=>{if(c.body!==null&&typeof c.body!="string")throw new E(2808,!1);return c.body}));case"json":default:return a.pipe(w(c=>c.body))}case"response":return a;default:throw new E(2809,!1)}}delete(e,r={}){return this.request("DELETE",e,r)}get(e,r={}){return this.request("GET",e,r)}head(e,r={}){return this.request("HEAD",e,r)}jsonp(e,r){return this.request("JSONP",e,{params:new we().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,r={}){return this.request("OPTIONS",e,r)}patch(e,r,o={}){return this.request("PATCH",e,kr(o,r))}post(e,r,o={}){return this.request("POST",e,kr(o,r))}put(e,r,o={}){return this.request("PUT",e,kr(o,r))}static \u0275fac=function(r){return new(r||t)(b(it))};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})();var ja=new m("");function Ba(t,n){return n(t)}function Fa(t,n,e){return(r,o)=>F(e,()=>n(r,i=>t(i,o)))}var Oi=new m(""),ki=new m(""),Pi=new m("",{providedIn:"root",factory:()=>!0});var Sn=(()=>{class t extends it{backend;injector;chain=null;pendingTasks=u(To);contributeToStability=u(Pi);constructor(e,r){super(),this.backend=e,this.injector=r}handle(e){if(this.chain===null){let r=Array.from(new Set([...this.injector.get(Oi),...this.injector.get(ki,[])]));this.chain=r.reduceRight((o,i)=>Fa(o,i,this.injector),Ba)}if(this.contributeToStability){let r=this.pendingTasks.add();return this.chain(e,o=>this.backend.handle(o)).pipe(We(r))}else return this.chain(e,r=>this.backend.handle(r))}static \u0275fac=function(r){return new(r||t)(b(_t),b(be))};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})();var za=/^\)\]\}',?\n/,$a=RegExp(`^${_i}:`,"m");function Va(t){return"responseURL"in t&&t.responseURL?t.responseURL:$a.test(t.getAllResponseHeaders())?t.getResponseHeader(_i):null}var Pr=(()=>{class t{xhrFactory;constructor(e){this.xhrFactory=e}handle(e){if(e.method==="JSONP")throw new E(-2800,!1);let r=this.xhrFactory;return p(null).pipe(k(()=>new Jt(i=>{let s=r.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((y,C)=>s.setRequestHeader(y,C.join(","))),e.headers.has(Di)||s.setRequestHeader(Di,Pa),!e.headers.has(Mi)){let y=e.detectContentTypeHeader();y!==null&&s.setRequestHeader(Mi,y)}if(e.timeout&&(s.timeout=e.timeout),e.responseType){let y=e.responseType.toLowerCase();s.responseType=y!=="json"?y:"text"}let a=e.serializeBody(),c=null,l=()=>{if(c!==null)return c;let y=s.statusText||"OK",C=new De(s.getAllResponseHeaders()),U=Va(s)||e.url;return c=new Tn({headers:C,status:s.status,statusText:y,url:U}),c},h=()=>{let{headers:y,status:C,statusText:U,url:Y}=l(),O=null;C!==Ua&&(O=typeof s.response>"u"?s.responseText:s.response),C===0&&(C=O?La:0);let ke=C>=200&&C<300;if(e.responseType==="json"&&typeof O=="string"){let Pe=O;O=O.replace(za,"");try{O=O!==""?JSON.parse(O):null}catch(ua){O=Pe,ke&&(ke=!1,O={error:ua,text:O})}}ke?(i.next(new At({body:O,headers:y,status:C,statusText:U,url:Y||void 0})),i.complete()):i.error(new ot({error:O,headers:y,status:C,statusText:U,url:Y||void 0}))},v=y=>{let{url:C}=l(),U=new ot({error:y,status:s.status||0,statusText:s.statusText||"Unknown Error",url:C||void 0});i.error(U)},T=v;e.timeout&&(T=y=>{let{url:C}=l(),U=new ot({error:new DOMException("Request timed out","TimeoutError"),status:s.status||0,statusText:s.statusText||"Request timeout",url:C||void 0});i.error(U)});let S=!1,D=y=>{S||(i.next(l()),S=!0);let C={type:Be.DownloadProgress,loaded:y.loaded};y.lengthComputable&&(C.total=y.total),e.responseType==="text"&&s.responseText&&(C.partialText=s.responseText),i.next(C)},Q=y=>{let C={type:Be.UploadProgress,loaded:y.loaded};y.lengthComputable&&(C.total=y.total),i.next(C)};return s.addEventListener("load",h),s.addEventListener("error",v),s.addEventListener("timeout",T),s.addEventListener("abort",v),e.reportProgress&&(s.addEventListener("progress",D),a!==null&&s.upload&&s.upload.addEventListener("progress",Q)),s.send(a),i.next({type:Be.Sent}),()=>{s.removeEventListener("error",v),s.removeEventListener("abort",v),s.removeEventListener("load",h),s.removeEventListener("timeout",T),e.reportProgress&&(s.removeEventListener("progress",D),a!==null&&s.upload&&s.upload.removeEventListener("progress",Q)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(r){return new(r||t)(b(mn))};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})(),Li=new m(""),Ha="XSRF-TOKEN",qa=new m("",{providedIn:"root",factory:()=>Ha}),Ga="X-XSRF-TOKEN",Wa=new m("",{providedIn:"root",factory:()=>Ga}),xt=class{},Xa=(()=>{class t{doc;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(e,r){this.doc=e,this.cookieName=r}getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=gn(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(r){return new(r||t)(b(x),b(qa))};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})(),Ja=/^(?:https?:)?\/\//i;function Qa(t,n){if(!u(Li)||t.method==="GET"||t.method==="HEAD"||Ja.test(t.url))return n(t);let e=u(xt).getToken(),r=u(Wa);return e!=null&&!t.headers.has(r)&&(t=t.clone({headers:t.headers.set(r,e)})),n(t)}function Ya(...t){let n=[Ni,Pr,Sn,{provide:it,useExisting:Sn},{provide:_t,useFactory:()=>u(ja,{optional:!0})??u(Pr)},{provide:Oi,useValue:Qa,multi:!0},{provide:Li,useValue:!0},{provide:xt,useClass:Xa}];for(let e of t)n.push(...e.\u0275providers);return Zt(n)}var Ui=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(r){return new(r||t)(b(x))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var f="primary",Ht=Symbol("RouteTitle"),Fr=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function $e(t){return new Fr(t)}function qi(t,n,e){let r=e.path.split("/");if(r.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||r.length<t.length))return null;let o={};for(let i=0;i<r.length;i++){let s=r[i],a=t[i];if(s[0]===":")o[s.substring(1)]=a;else if(s!==a.path)return null}return{consumed:t.slice(0,r.length),posParams:o}}function Ka(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!ce(t[e],n[e]))return!1;return!0}function ce(t,n){let e=t?zr(t):void 0,r=n?zr(n):void 0;if(!e||!r||e.length!=r.length)return!1;let o;for(let i=0;i<e.length;i++)if(o=e[i],!Gi(t[o],n[o]))return!1;return!0}function zr(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Gi(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),r=[...n].sort();return e.every((o,i)=>r[i]===o)}else return t===n}function Wi(t){return t.length>0?t[t.length-1]:null}function Re(t){return go(t)?t:Fo(t)?j(Promise.resolve(t)):p(t)}var ec={exact:Ji,subset:Qi},Xi={exact:tc,subset:nc,ignored:()=>!0};function ji(t,n,e){return ec[e.paths](t.root,n.root,e.matrixParams)&&Xi[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function tc(t,n){return ce(t,n)}function Ji(t,n,e){if(!Fe(t.segments,n.segments)||!Dn(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let r in n.children)if(!t.children[r]||!Ji(t.children[r],n.children[r],e))return!1;return!0}function nc(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>Gi(t[e],n[e]))}function Qi(t,n,e){return Yi(t,n,n.segments,e)}function Yi(t,n,e,r){if(t.segments.length>e.length){let o=t.segments.slice(0,e.length);return!(!Fe(o,e)||n.hasChildren()||!Dn(o,e,r))}else if(t.segments.length===e.length){if(!Fe(t.segments,e)||!Dn(t.segments,e,r))return!1;for(let o in n.children)if(!t.children[o]||!Qi(t.children[o],n.children[o],r))return!1;return!0}else{let o=e.slice(0,t.segments.length),i=e.slice(t.segments.length);return!Fe(t.segments,o)||!Dn(t.segments,o,r)||!t.children[f]?!1:Yi(t.children[f],n,i,r)}}function Dn(t,n,e){return n.every((r,o)=>Xi[e](t[o].parameters,r.parameters))}var ue=class{root;queryParams;fragment;_queryParamMap;constructor(n=new R([],{}),e={},r=null){this.root=n,this.queryParams=e,this.fragment=r}get queryParamMap(){return this._queryParamMap??=$e(this.queryParams),this._queryParamMap}toString(){return ic.serialize(this)}},R=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(r=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return _n(this)}},_e=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=$e(this.parameters),this._parameterMap}toString(){return Ki(this)}};function rc(t,n){return Fe(t,n)&&t.every((e,r)=>ce(e.parameters,n[r].parameters))}function Fe(t,n){return t.length!==n.length?!1:t.every((e,r)=>e.path===n[r].path)}function oc(t,n){let e=[];return Object.entries(t.children).forEach(([r,o])=>{r===f&&(e=e.concat(n(o,r)))}),Object.entries(t.children).forEach(([r,o])=>{r!==f&&(e=e.concat(n(o,r)))}),e}var Ve=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=g({token:t,factory:()=>new Ae,providedIn:"root"})}return t})(),Ae=class{parse(n){let e=new Vr(n);return new ue(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${Nt(n.root,!0)}`,r=cc(n.queryParams),o=typeof n.fragment=="string"?`#${sc(n.fragment)}`:"";return`${e}${r}${o}`}},ic=new Ae;function _n(t){return t.segments.map(n=>Ki(n)).join("/")}function Nt(t,n){if(!t.hasChildren())return _n(t);if(n){let e=t.children[f]?Nt(t.children[f],!1):"",r=[];return Object.entries(t.children).forEach(([o,i])=>{o!==f&&r.push(`${o}:${Nt(i,!1)}`)}),r.length>0?`${e}(${r.join("//")})`:e}else{let e=oc(t,(r,o)=>o===f?[Nt(t.children[f],!1)]:[`${o}:${Nt(r,!1)}`]);return Object.keys(t.children).length===1&&t.children[f]!=null?`${_n(t)}/${e[0]}`:`${_n(t)}/(${e.join("//")})`}}function Zi(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function In(t){return Zi(t).replace(/%3B/gi,";")}function sc(t){return encodeURI(t)}function $r(t){return Zi(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function An(t){return decodeURIComponent(t)}function Bi(t){return An(t.replace(/\+/g,"%20"))}function Ki(t){return`${$r(t.path)}${ac(t.parameters)}`}function ac(t){return Object.entries(t).map(([n,e])=>`;${$r(n)}=${$r(e)}`).join("")}function cc(t){let n=Object.entries(t).map(([e,r])=>Array.isArray(r)?r.map(o=>`${In(e)}=${In(o)}`).join("&"):`${In(e)}=${In(r)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var lc=/^[^\/()?;#]+/;function Lr(t){let n=t.match(lc);return n?n[0]:""}var uc=/^[^\/()?;=#]+/;function dc(t){let n=t.match(uc);return n?n[0]:""}var hc=/^[^=?&#]+/;function pc(t){let n=t.match(hc);return n?n[0]:""}var fc=/^[^&#]+/;function gc(t){let n=t.match(fc);return n?n[0]:""}var Vr=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new R([],{}):new R([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let n=[];for(this.peekStartsWith("(")||n.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),n.push(this.parseSegment());let e={};this.peekStartsWith("/(")&&(this.capture("/"),e=this.parseParens(!0));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1)),(n.length>0||Object.keys(e).length>0)&&(r[f]=new R(n,e)),r}parseSegment(){let n=Lr(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new E(4009,!1);return this.capture(n),new _e(An(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=dc(this.remaining);if(!e)return;this.capture(e);let r="";if(this.consumeOptional("=")){let o=Lr(this.remaining);o&&(r=o,this.capture(r))}n[An(e)]=An(r)}parseQueryParam(n){let e=pc(this.remaining);if(!e)return;this.capture(e);let r="";if(this.consumeOptional("=")){let s=gc(this.remaining);s&&(r=s,this.capture(r))}let o=Bi(e),i=Bi(r);if(n.hasOwnProperty(o)){let s=n[o];Array.isArray(s)||(s=[s],n[o]=s),s.push(i)}else n[o]=i}parseParens(n){let e={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Lr(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new E(4010,!1);let i;r.indexOf(":")>-1?(i=r.slice(0,r.indexOf(":")),this.capture(i),this.capture(":")):n&&(i=f);let s=this.parseChildren();e[i??f]=Object.keys(s).length===1&&s[f]?s[f]:new R([],s),this.consumeOptional("//")}return e}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new E(4011,!1)}};function es(t){return t.segments.length>0?new R([],{[f]:t}):t}function ts(t){let n={};for(let[r,o]of Object.entries(t.children)){let i=ts(o);if(r===f&&i.segments.length===0&&i.hasChildren())for(let[s,a]of Object.entries(i.children))n[s]=a;else(i.segments.length>0||i.hasChildren())&&(n[r]=i)}let e=new R(t.segments,n);return mc(e)}function mc(t){if(t.numberOfChildren===1&&t.children[f]){let n=t.children[f];return new R(t.segments.concat(n.segments),n.children)}return t}function xe(t){return t instanceof ue}function ns(t,n,e=null,r=null){let o=rs(t);return os(o,n,e,r)}function rs(t){let n;function e(i){let s={};for(let c of i.children){let l=e(c);s[c.outlet]=l}let a=new R(i.url,s);return i===t&&(n=a),a}let r=e(t.root),o=es(r);return n??o}function os(t,n,e,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return Ur(o,o,o,e,r);let i=bc(n);if(i.toRoot())return Ur(o,o,new R([],{}),e,r);let s=vc(i,o,t),a=s.processChildren?kt(s.segmentGroup,s.index,i.commands):ss(s.segmentGroup,s.index,i.commands);return Ur(o,s.segmentGroup,a,e,r)}function xn(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function Lt(t){return typeof t=="object"&&t!=null&&t.outlets}function Ur(t,n,e,r,o){let i={};r&&Object.entries(r).forEach(([c,l])=>{i[c]=Array.isArray(l)?l.map(h=>`${h}`):`${l}`});let s;t===n?s=e:s=is(t,n,e);let a=es(ts(s));return new ue(a,i,o)}function is(t,n,e){let r={};return Object.entries(t.children).forEach(([o,i])=>{i===n?r[o]=e:r[o]=is(i,n,e)}),new R(t.segments,r)}var Nn=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,r){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=r,n&&r.length>0&&xn(r[0]))throw new E(4003,!1);let o=r.find(Lt);if(o&&o!==Wi(r))throw new E(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function bc(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Nn(!0,0,t);let n=0,e=!1,r=t.reduce((o,i,s)=>{if(typeof i=="object"&&i!=null){if(i.outlets){let a={};return Object.entries(i.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...o,{outlets:a}]}if(i.segmentPath)return[...o,i.segmentPath]}return typeof i!="string"?[...o,i]:s===0?(i.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?e=!0:a===".."?n++:a!=""&&o.push(a))}),o):[...o,i]},[]);return new Nn(e,n,r)}var lt=class{segmentGroup;processChildren;index;constructor(n,e,r){this.segmentGroup=n,this.processChildren=e,this.index=r}};function vc(t,n,e){if(t.isAbsolute)return new lt(n,!0,0);if(!e)return new lt(n,!1,NaN);if(e.parent===null)return new lt(e,!0,0);let r=xn(t.commands[0])?0:1,o=e.segments.length-1+r;return yc(e,o,t.numberOfDoubleDots)}function yc(t,n,e){let r=t,o=n,i=e;for(;i>o;){if(i-=o,r=r.parent,!r)throw new E(4005,!1);o=r.segments.length}return new lt(r,!1,o-i)}function wc(t){return Lt(t[0])?t[0].outlets:{[f]:t}}function ss(t,n,e){if(t??=new R([],{}),t.segments.length===0&&t.hasChildren())return kt(t,n,e);let r=Rc(t,n,e),o=e.slice(r.commandIndex);if(r.match&&r.pathIndex<t.segments.length){let i=new R(t.segments.slice(0,r.pathIndex),{});return i.children[f]=new R(t.segments.slice(r.pathIndex),t.children),kt(i,0,o)}else return r.match&&o.length===0?new R(t.segments,{}):r.match&&!t.hasChildren()?Hr(t,n,e):r.match?kt(t,0,o):Hr(t,n,e)}function kt(t,n,e){if(e.length===0)return new R(t.segments,{});{let r=wc(e),o={};if(Object.keys(r).some(i=>i!==f)&&t.children[f]&&t.numberOfChildren===1&&t.children[f].segments.length===0){let i=kt(t.children[f],n,e);return new R(t.segments,i.children)}return Object.entries(r).forEach(([i,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(o[i]=ss(t.children[i],n,s))}),Object.entries(t.children).forEach(([i,s])=>{r[i]===void 0&&(o[i]=s)}),new R(t.segments,o)}}function Rc(t,n,e){let r=0,o=n,i={match:!1,pathIndex:0,commandIndex:0};for(;o<t.segments.length;){if(r>=e.length)return i;let s=t.segments[o],a=e[r];if(Lt(a))break;let c=`${a}`,l=r<e.length-1?e[r+1]:null;if(o>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!zi(c,l,s))return i;r+=2}else{if(!zi(c,{},s))return i;r++}o++}return{match:!0,pathIndex:o,commandIndex:r}}function Hr(t,n,e){let r=t.segments.slice(0,n),o=0;for(;o<e.length;){let i=e[o];if(Lt(i)){let c=Ec(i.outlets);return new R(r,c)}if(o===0&&xn(e[0])){let c=t.segments[n];r.push(new _e(c.path,Fi(e[0]))),o++;continue}let s=Lt(i)?i.outlets[f]:`${i}`,a=o<e.length-1?e[o+1]:null;s&&a&&xn(a)?(r.push(new _e(s,Fi(a))),o+=2):(r.push(new _e(s,{})),o++)}return new R(r,{})}function Ec(t){let n={};return Object.entries(t).forEach(([e,r])=>{typeof r=="string"&&(r=[r]),r!==null&&(n[e]=Hr(new R([],{}),0,r))}),n}function Fi(t){let n={};return Object.entries(t).forEach(([e,r])=>n[e]=`${r}`),n}function zi(t,n,e){return t==e.path&&ce(n,e.parameters)}var ut="imperative",M=function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t}(M||{}),V=class{id;url;constructor(n,e){this.id=n,this.url=e}},Ne=class extends V{type=M.NavigationStart;navigationTrigger;restoredState;constructor(n,e,r="imperative",o=null){super(n,e),this.navigationTrigger=r,this.restoredState=o}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},J=class extends V{urlAfterRedirects;type=M.NavigationEnd;constructor(n,e,r){super(n,e),this.urlAfterRedirects=r}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},L=function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t}(L||{}),ht=function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t}(ht||{}),le=class extends V{reason;code;type=M.NavigationCancel;constructor(n,e,r,o){super(n,e),this.reason=r,this.code=o}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},de=class extends V{reason;code;type=M.NavigationSkipped;constructor(n,e,r,o){super(n,e),this.reason=r,this.code=o}},pt=class extends V{error;target;type=M.NavigationError;constructor(n,e,r,o){super(n,e),this.error=r,this.target=o}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Ut=class extends V{urlAfterRedirects;state;type=M.RoutesRecognized;constructor(n,e,r,o){super(n,e),this.urlAfterRedirects=r,this.state=o}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},On=class extends V{urlAfterRedirects;state;type=M.GuardsCheckStart;constructor(n,e,r,o){super(n,e),this.urlAfterRedirects=r,this.state=o}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},kn=class extends V{urlAfterRedirects;state;shouldActivate;type=M.GuardsCheckEnd;constructor(n,e,r,o,i){super(n,e),this.urlAfterRedirects=r,this.state=o,this.shouldActivate=i}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Pn=class extends V{urlAfterRedirects;state;type=M.ResolveStart;constructor(n,e,r,o){super(n,e),this.urlAfterRedirects=r,this.state=o}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ln=class extends V{urlAfterRedirects;state;type=M.ResolveEnd;constructor(n,e,r,o){super(n,e),this.urlAfterRedirects=r,this.state=o}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Un=class{route;type=M.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},jn=class{route;type=M.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Bn=class{snapshot;type=M.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Fn=class{snapshot;type=M.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},zn=class{snapshot;type=M.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},$n=class{snapshot;type=M.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ft=class{routerEvent;position;anchor;type=M.Scroll;constructor(n,e,r){this.routerEvent=n,this.position=e,this.anchor=r}toString(){let n=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${n}')`}},jt=class{},gt=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function Cc(t){return!(t instanceof jt)&&!(t instanceof gt)}function Tc(t,n){return t.providers&&!t._injector&&(t._injector=sn(t.providers,n,`Route: ${t.path}`)),t._injector??n}function ne(t){return t.outlet||f}function Sc(t,n){let e=t.filter(r=>ne(r)===n);return e.push(...t.filter(r=>ne(r)!==n)),e}function vt(t){if(!t)return null;if(t.routeConfig?._injector)return t.routeConfig._injector;for(let n=t.parent;n;n=n.parent){let e=n.routeConfig;if(e?._loadedInjector)return e._loadedInjector;if(e?._injector)return e._injector}return null}var Vn=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return vt(this.route?.snapshot)??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new He(this.rootInjector)}},He=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,r){let o=this.getOrCreateContext(e);o.outlet=r,this.contexts.set(e,o)}onChildOutletDestroyed(e){let r=this.getContext(e);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let r=this.getContext(e);return r||(r=new Vn(this.rootInjector),this.contexts.set(e,r)),r}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(r){return new(r||t)(b(be))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Hn=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=qr(n,this._root);return e?e.children.map(r=>r.value):[]}firstChild(n){let e=qr(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=Gr(n,this._root);return e.length<2?[]:e[e.length-2].children.map(o=>o.value).filter(o=>o!==n)}pathFromRoot(n){return Gr(n,this._root).map(e=>e.value)}};function qr(t,n){if(t===n.value)return n;for(let e of n.children){let r=qr(t,e);if(r)return r}return null}function Gr(t,n){if(t===n.value)return[n];for(let e of n.children){let r=Gr(t,e);if(r.length)return r.unshift(n),r}return[]}var $=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function ct(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var Bt=class extends Hn{snapshot;constructor(n,e){super(n),this.snapshot=e,eo(this,n)}toString(){return this.snapshot.toString()}};function as(t){let n=Ic(t),e=new q([new _e("",{})]),r=new q({}),o=new q({}),i=new q({}),s=new q(""),a=new he(e,r,i,s,o,f,t,n.root);return a.snapshot=n.root,new Bt(new $(a,[]),n)}function Ic(t){let n={},e={},r={},o="",i=new ze([],n,r,o,e,f,t,null,{});return new Ft("",new $(i,[]))}var he=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,r,o,i,s,a,c){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=r,this.fragmentSubject=o,this.dataSubject=i,this.outlet=s,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(w(l=>l[Ht]))??p(void 0),this.url=n,this.params=e,this.queryParams=r,this.fragment=o,this.data=i}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(w(n=>$e(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(w(n=>$e(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function qn(t,n,e="emptyOnly"){let r,{routeConfig:o}=t;return n!==null&&(e==="always"||o?.path===""||!n.component&&!n.routeConfig?.loadComponent)?r={params:d(d({},n.params),t.params),data:d(d({},n.data),t.data),resolve:d(d(d(d({},t.data),n.data),o?.data),t._resolvedData)}:r={params:d({},t.params),data:d({},t.data),resolve:d(d({},t.data),t._resolvedData??{})},o&&ls(o)&&(r.resolve[Ht]=o.title),r}var ze=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[Ht]}constructor(n,e,r,o,i,s,a,c,l){this.url=n,this.params=e,this.queryParams=r,this.fragment=o,this.data=i,this.outlet=s,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=$e(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=$e(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(r=>r.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},Ft=class extends Hn{url;constructor(n,e){super(e),this.url=n,eo(this,e)}toString(){return cs(this._root)}};function eo(t,n){n.value._routerState=t,n.children.forEach(e=>eo(t,e))}function cs(t){let n=t.children.length>0?` { ${t.children.map(cs).join(", ")} } `:"";return`${t.value}${n}`}function jr(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,ce(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),ce(n.params,e.params)||t.paramsSubject.next(e.params),Ka(n.url,e.url)||t.urlSubject.next(e.url),ce(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function Wr(t,n){let e=ce(t.params,n.params)&&rc(t.url,n.url),r=!t.parent!=!n.parent;return e&&!r&&(!t.parent||Wr(t.parent,n.parent))}function ls(t){return typeof t.title=="string"||t.title===null}var us=new m(""),to=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=f;activateEvents=new re;deactivateEvents=new re;attachEvents=new re;detachEvents=new re;routerOutletData=ee();parentContexts=u(He);location=u(Uo);changeDetector=u(Rr);inputBinder=u(qt,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:r,previousValue:o}=e.name;if(r)return;this.isTrackedInParentContexts(o)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(o)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new E(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new E(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new E(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,r){this.activated=e,this._activatedRoute=r,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,r){if(this.isActivated)throw new E(4013,!1);this._activatedRoute=e;let o=this.location,s=e.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new Xr(e,a,o.injector,this.routerOutletData);this.activated=o.createComponent(s,{index:o.length,injector:c,environmentInjector:r}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(r){return new(r||t)};static \u0275dir=ie({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[rn]})}return t})(),Xr=class{route;childContexts;parent;outletData;constructor(n,e,r,o){this.route=n,this.childContexts=e,this.parent=r,this.outletData=o}get(n,e){return n===he?this.route:n===He?this.childContexts:n===us?this.outletData:this.parent.get(n,e)}},qt=new m(""),no=(()=>{class t{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:r}=e,o=Qt([r.queryParams,r.params,r.data]).pipe(k(([i,s,a],c)=>(a=d(d(d({},i),s),a),c===0?p(a):Promise.resolve(a)))).subscribe(i=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==r||r.component===null){this.unsubscribeFromRouteData(e);return}let s=Jo(r.component);if(!s){this.unsubscribeFromRouteData(e);return}for(let{templateName:a}of s.inputs)e.activatedComponentRef.setInput(a,i[a])});this.outletDataSubscriptions.set(e,o)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})(),ro=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=oe({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(r,o){r&1&&je(0,"router-outlet")},dependencies:[to],encapsulation:2})}return t})();function oo(t){let n=t.children&&t.children.map(oo),e=n?H(d({},t),{children:n}):d({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==f&&(e.component=ro),e}function Mc(t,n,e){let r=zt(t,n._root,e?e._root:void 0);return new Bt(r,n)}function zt(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let r=e.value;r._futureSnapshot=n.value;let o=Dc(t,n,e);return new $(r,o)}else{if(t.shouldAttach(n.value)){let i=t.retrieve(n.value);if(i!==null){let s=i.route;return s.value._futureSnapshot=n.value,s.children=n.children.map(a=>zt(t,a)),s}}let r=_c(n.value),o=n.children.map(i=>zt(t,i));return new $(r,o)}}function Dc(t,n,e){return n.children.map(r=>{for(let o of e.children)if(t.shouldReuseRoute(r.value,o.value.snapshot))return zt(t,r,o);return zt(t,r)})}function _c(t){return new he(new q(t.url),new q(t.params),new q(t.queryParams),new q(t.fragment),new q(t.data),t.outlet,t.component,t)}var mt=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},ds="ngNavigationCancelingError";function Gn(t,n){let{redirectTo:e,navigationBehaviorOptions:r}=xe(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,o=hs(!1,L.Redirect);return o.url=e,o.navigationBehaviorOptions=r,o}function hs(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[ds]=!0,e.cancellationCode=n,e}function Ac(t){return ps(t)&&xe(t.url)}function ps(t){return!!t&&t[ds]}var xc=(t,n,e,r)=>w(o=>(new Jr(n,o.targetRouterState,o.currentRouterState,e,r).activate(t),o)),Jr=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,r,o,i){this.routeReuseStrategy=n,this.futureState=e,this.currState=r,this.forwardEvent=o,this.inputBindingEnabled=i}activate(n){let e=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,r,n),jr(this.futureState.root),this.activateChildRoutes(e,r,n)}deactivateChildRoutes(n,e,r){let o=ct(e);n.children.forEach(i=>{let s=i.value.outlet;this.deactivateRoutes(i,o[s],r),delete o[s]}),Object.values(o).forEach(i=>{this.deactivateRouteAndItsChildren(i,r)})}deactivateRoutes(n,e,r){let o=n.value,i=e?e.value:null;if(o===i)if(o.component){let s=r.getContext(o.outlet);s&&this.deactivateChildRoutes(n,e,s.children)}else this.deactivateChildRoutes(n,e,r);else i&&this.deactivateRouteAndItsChildren(e,r)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let r=e.getContext(n.value.outlet),o=r&&n.value.component?r.children:e,i=ct(n);for(let s of Object.values(i))this.deactivateRouteAndItsChildren(s,o);if(r&&r.outlet){let s=r.outlet.detach(),a=r.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:s,route:n,contexts:a})}}deactivateRouteAndOutlet(n,e){let r=e.getContext(n.value.outlet),o=r&&n.value.component?r.children:e,i=ct(n);for(let s of Object.values(i))this.deactivateRouteAndItsChildren(s,o);r&&(r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated()),r.attachRef=null,r.route=null)}activateChildRoutes(n,e,r){let o=ct(e);n.children.forEach(i=>{this.activateRoutes(i,o[i.value.outlet],r),this.forwardEvent(new $n(i.value.snapshot))}),n.children.length&&this.forwardEvent(new Fn(n.value.snapshot))}activateRoutes(n,e,r){let o=n.value,i=e?e.value:null;if(jr(o),o===i)if(o.component){let s=r.getOrCreateContext(o.outlet);this.activateChildRoutes(n,e,s.children)}else this.activateChildRoutes(n,e,r);else if(o.component){let s=r.getOrCreateContext(o.outlet);if(this.routeReuseStrategy.shouldAttach(o.snapshot)){let a=this.routeReuseStrategy.retrieve(o.snapshot);this.routeReuseStrategy.store(o.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),jr(a.route.value),this.activateChildRoutes(n,null,s.children)}else s.attachRef=null,s.route=o,s.outlet&&s.outlet.activateWith(o,s.injector),this.activateChildRoutes(n,null,s.children)}else this.activateChildRoutes(n,null,r)}},Wn=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},dt=class{component;route;constructor(n,e){this.component=n,this.route=e}};function Nc(t,n,e){let r=t._root,o=n?n._root:null;return Ot(r,o,e,[r.value])}function Oc(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function yt(t,n){let e=Symbol(),r=n.get(t,e);return r===e?typeof t=="function"&&!Ro(t)?t:n.get(t):r}function Ot(t,n,e,r,o={canDeactivateChecks:[],canActivateChecks:[]}){let i=ct(n);return t.children.forEach(s=>{kc(s,i[s.value.outlet],e,r.concat([s.value]),o),delete i[s.value.outlet]}),Object.entries(i).forEach(([s,a])=>Pt(a,e.getContext(s),o)),o}function kc(t,n,e,r,o={canDeactivateChecks:[],canActivateChecks:[]}){let i=t.value,s=n?n.value:null,a=e?e.getContext(t.value.outlet):null;if(s&&i.routeConfig===s.routeConfig){let c=Pc(s,i,i.routeConfig.runGuardsAndResolvers);c?o.canActivateChecks.push(new Wn(r)):(i.data=s.data,i._resolvedData=s._resolvedData),i.component?Ot(t,n,a?a.children:null,r,o):Ot(t,n,e,r,o),c&&a&&a.outlet&&a.outlet.isActivated&&o.canDeactivateChecks.push(new dt(a.outlet.component,s))}else s&&Pt(n,a,o),o.canActivateChecks.push(new Wn(r)),i.component?Ot(t,null,a?a.children:null,r,o):Ot(t,null,e,r,o);return o}function Pc(t,n,e){if(typeof e=="function")return e(t,n);switch(e){case"pathParamsChange":return!Fe(t.url,n.url);case"pathParamsOrQueryParamsChange":return!Fe(t.url,n.url)||!ce(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Wr(t,n)||!ce(t.queryParams,n.queryParams);case"paramsChange":default:return!Wr(t,n)}}function Pt(t,n,e){let r=ct(t),o=t.value;Object.entries(r).forEach(([i,s])=>{o.component?n?Pt(s,n.children.getContext(i),e):Pt(s,null,e):Pt(s,n,e)}),o.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new dt(n.outlet.component,o)):e.canDeactivateChecks.push(new dt(null,o)):e.canDeactivateChecks.push(new dt(null,o))}function Gt(t){return typeof t=="function"}function Lc(t){return typeof t=="boolean"}function Uc(t){return t&&Gt(t.canLoad)}function jc(t){return t&&Gt(t.canActivate)}function Bc(t){return t&&Gt(t.canActivateChild)}function Fc(t){return t&&Gt(t.canDeactivate)}function zc(t){return t&&Gt(t.canMatch)}function fs(t){return t instanceof mo||t?.name==="EmptyError"}var Mn=Symbol("INITIAL_VALUE");function bt(){return k(t=>Qt(t.map(n=>n.pipe(Ge(1),wo(Mn)))).pipe(w(n=>{for(let e of n)if(e!==!0){if(e===Mn)return Mn;if(e===!1||$c(e))return e}return!0}),Z(n=>n!==Mn),Ge(1)))}function $c(t){return xe(t)||t instanceof mt}function Vc(t,n){return B(e=>{let{targetSnapshot:r,currentSnapshot:o,guards:{canActivateChecks:i,canDeactivateChecks:s}}=e;return s.length===0&&i.length===0?p(H(d({},e),{guardsResult:!0})):Hc(s,r,o,t).pipe(B(a=>a&&Lc(a)?qc(r,i,t,n):p(a)),w(a=>H(d({},e),{guardsResult:a})))})}function Hc(t,n,e,r){return j(t).pipe(B(o=>Qc(o.component,o.route,e,n,r)),Ee(o=>o!==!0,!0))}function qc(t,n,e,r){return j(n).pipe(me(o=>bo(Wc(o.route.parent,r),Gc(o.route,r),Jc(t,o.path,e),Xc(t,o.route,e))),Ee(o=>o!==!0,!0))}function Gc(t,n){return t!==null&&n&&n(new zn(t)),p(!0)}function Wc(t,n){return t!==null&&n&&n(new Bn(t)),p(!0)}function Xc(t,n,e){let r=n.routeConfig?n.routeConfig.canActivate:null;if(!r||r.length===0)return p(!0);let o=r.map(i=>Yt(()=>{let s=vt(n)??e,a=yt(i,s),c=jc(a)?a.canActivate(n,t):F(s,()=>a(n,t));return Re(c).pipe(Ee())}));return p(o).pipe(bt())}function Jc(t,n,e){let r=n[n.length-1],i=n.slice(0,n.length-1).reverse().map(s=>Oc(s)).filter(s=>s!==null).map(s=>Yt(()=>{let a=s.guards.map(c=>{let l=vt(s.node)??e,h=yt(c,l),v=Bc(h)?h.canActivateChild(r,t):F(l,()=>h(r,t));return Re(v).pipe(Ee())});return p(a).pipe(bt())}));return p(i).pipe(bt())}function Qc(t,n,e,r,o){let i=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!i||i.length===0)return p(!0);let s=i.map(a=>{let c=vt(n)??o,l=yt(a,c),h=Fc(l)?l.canDeactivate(t,n,e,r):F(c,()=>l(t,n,e,r));return Re(h).pipe(Ee())});return p(s).pipe(bt())}function Yc(t,n,e,r){let o=n.canLoad;if(o===void 0||o.length===0)return p(!0);let i=o.map(s=>{let a=yt(s,t),c=Uc(a)?a.canLoad(n,e):F(t,()=>a(n,e));return Re(c)});return p(i).pipe(bt(),gs(r))}function gs(t){return fo(A(n=>{if(typeof n!="boolean")throw Gn(t,n)}),w(n=>n===!0))}function Zc(t,n,e,r){let o=n.canMatch;if(!o||o.length===0)return p(!0);let i=o.map(s=>{let a=yt(s,t),c=zc(a)?a.canMatch(n,e):F(t,()=>a(n,e));return Re(c)});return p(i).pipe(bt(),gs(r))}var $t=class{segmentGroup;constructor(n){this.segmentGroup=n||null}},Vt=class extends Error{urlTree;constructor(n){super(),this.urlTree=n}};function at(t){return wt(new $t(t))}function Kc(t){return wt(new E(4e3,!1))}function el(t){return wt(hs(!1,L.GuardRejected))}var Qr=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}lineralizeSegments(n,e){let r=[],o=e.root;for(;;){if(r=r.concat(o.segments),o.numberOfChildren===0)return p(r);if(o.numberOfChildren>1||!o.children[f])return Kc(`${n.redirectTo}`);o=o.children[f]}}applyRedirectCommands(n,e,r,o,i){return tl(e,o,i).pipe(w(s=>{if(s instanceof ue)throw new Vt(s);let a=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),n,r);if(s[0]==="/")throw new Vt(a);return a}))}applyRedirectCreateUrlTree(n,e,r,o){let i=this.createSegmentGroup(n,e.root,r,o);return new ue(i,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let r={};return Object.entries(n).forEach(([o,i])=>{if(typeof i=="string"&&i[0]===":"){let a=i.substring(1);r[o]=e[a]}else r[o]=i}),r}createSegmentGroup(n,e,r,o){let i=this.createSegments(n,e.segments,r,o),s={};return Object.entries(e.children).forEach(([a,c])=>{s[a]=this.createSegmentGroup(n,c,r,o)}),new R(i,s)}createSegments(n,e,r,o){return e.map(i=>i.path[0]===":"?this.findPosParam(n,i,o):this.findOrReturn(i,r))}findPosParam(n,e,r){let o=r[e.path.substring(1)];if(!o)throw new E(4001,!1);return o}findOrReturn(n,e){let r=0;for(let o of e){if(o.path===n.path)return e.splice(r),o;r++}return n}};function tl(t,n,e){if(typeof t=="string")return p(t);let r=t,{queryParams:o,fragment:i,routeConfig:s,url:a,outlet:c,params:l,data:h,title:v}=n;return Re(F(e,()=>r({params:l,data:h,queryParams:o,fragment:i,routeConfig:s,url:a,outlet:c,title:v})))}var Yr={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function nl(t,n,e,r,o){let i=ms(t,n,e);return i.matched?(r=Tc(n,r),Zc(r,n,e,o).pipe(w(s=>s===!0?i:d({},Yr)))):p(i)}function ms(t,n,e){if(n.path==="**")return rl(e);if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?d({},Yr):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let o=(n.matcher||qi)(e,t,n);if(!o)return d({},Yr);let i={};Object.entries(o.posParams??{}).forEach(([a,c])=>{i[a]=c.path});let s=o.consumed.length>0?d(d({},i),o.consumed[o.consumed.length-1].parameters):i;return{matched:!0,consumedSegments:o.consumed,remainingSegments:e.slice(o.consumed.length),parameters:s,positionalParamSegments:o.posParams??{}}}function rl(t){return{matched:!0,parameters:t.length>0?Wi(t).parameters:{},consumedSegments:t,remainingSegments:[],positionalParamSegments:{}}}function $i(t,n,e,r){return e.length>0&&sl(t,e,r)?{segmentGroup:new R(n,il(r,new R(e,t.children))),slicedSegments:[]}:e.length===0&&al(t,e,r)?{segmentGroup:new R(t.segments,ol(t,e,r,t.children)),slicedSegments:e}:{segmentGroup:new R(t.segments,t.children),slicedSegments:e}}function ol(t,n,e,r){let o={};for(let i of e)if(Jn(t,n,i)&&!r[ne(i)]){let s=new R([],{});o[ne(i)]=s}return d(d({},r),o)}function il(t,n){let e={};e[f]=n;for(let r of t)if(r.path===""&&ne(r)!==f){let o=new R([],{});e[ne(r)]=o}return e}function sl(t,n,e){return e.some(r=>Jn(t,n,r)&&ne(r)!==f)}function al(t,n,e){return e.some(r=>Jn(t,n,r))}function Jn(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function cl(t,n,e){return n.length===0&&!t.children[e]}var Zr=class{};function ll(t,n,e,r,o,i,s="emptyOnly"){return new Kr(t,n,e,r,o,s,i).recognize()}var ul=31,Kr=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,r,o,i,s,a){this.injector=n,this.configLoader=e,this.rootComponentType=r,this.config=o,this.urlTree=i,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.applyRedirects=new Qr(this.urlSerializer,this.urlTree)}noMatchError(n){return new E(4002,`'${n.segmentGroup}'`)}recognize(){let n=$i(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(n).pipe(w(({children:e,rootSnapshot:r})=>{let o=new $(r,e),i=new Ft("",o),s=ns(r,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,i.url=this.urlSerializer.serialize(s),{state:i,tree:s}}))}match(n){let e=new ze([],Object.freeze({}),Object.freeze(d({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),f,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,n,f,e).pipe(w(r=>({children:r,rootSnapshot:e})),Le(r=>{if(r instanceof Vt)return this.urlTree=r.urlTree,this.match(r.urlTree.root);throw r instanceof $t?this.noMatchError(r):r}))}processSegmentGroup(n,e,r,o,i){return r.segments.length===0&&r.hasChildren()?this.processChildren(n,e,r,i):this.processSegment(n,e,r,r.segments,o,!0,i).pipe(w(s=>s instanceof $?[s]:[]))}processChildren(n,e,r,o){let i=[];for(let s of Object.keys(r.children))s==="primary"?i.unshift(s):i.push(s);return j(i).pipe(me(s=>{let a=r.children[s],c=Sc(e,s);return this.processSegmentGroup(n,c,a,s,o)}),yo((s,a)=>(s.push(...a),s)),or(null),vo(),B(s=>{if(s===null)return at(r);let a=bs(s);return dl(a),p(a)}))}processSegment(n,e,r,o,i,s,a){return j(e).pipe(me(c=>this.processSegmentAgainstRoute(c._injector??n,e,c,r,o,i,s,a).pipe(Le(l=>{if(l instanceof $t)return p(null);throw l}))),Ee(c=>!!c),Le(c=>{if(fs(c))return cl(r,o,i)?p(new Zr):at(r);throw c}))}processSegmentAgainstRoute(n,e,r,o,i,s,a,c){return ne(r)!==s&&(s===f||!Jn(o,i,r))?at(o):r.redirectTo===void 0?this.matchSegmentAgainstRoute(n,o,r,i,s,c):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(n,o,e,r,i,s,c):at(o)}expandSegmentAgainstRouteUsingRedirect(n,e,r,o,i,s,a){let{matched:c,parameters:l,consumedSegments:h,positionalParamSegments:v,remainingSegments:T}=ms(e,o,i);if(!c)return at(e);typeof o.redirectTo=="string"&&o.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>ul&&(this.allowRedirects=!1));let S=new ze(i,l,Object.freeze(d({},this.urlTree.queryParams)),this.urlTree.fragment,Vi(o),ne(o),o.component??o._loadedComponent??null,o,Hi(o)),D=qn(S,a,this.paramsInheritanceStrategy);return S.params=Object.freeze(D.params),S.data=Object.freeze(D.data),this.applyRedirects.applyRedirectCommands(h,o.redirectTo,v,S,n).pipe(k(y=>this.applyRedirects.lineralizeSegments(o,y)),B(y=>this.processSegment(n,r,e,y.concat(T),s,!1,a)))}matchSegmentAgainstRoute(n,e,r,o,i,s){let a=nl(e,r,o,n,this.urlSerializer);return r.path==="**"&&(e.children={}),a.pipe(k(c=>c.matched?(n=r._injector??n,this.getChildConfig(n,r,o).pipe(k(({routes:l})=>{let h=r._loadedInjector??n,{parameters:v,consumedSegments:T,remainingSegments:S}=c,D=new ze(T,v,Object.freeze(d({},this.urlTree.queryParams)),this.urlTree.fragment,Vi(r),ne(r),r.component??r._loadedComponent??null,r,Hi(r)),Q=qn(D,s,this.paramsInheritanceStrategy);D.params=Object.freeze(Q.params),D.data=Object.freeze(Q.data);let{segmentGroup:y,slicedSegments:C}=$i(e,T,S,l);if(C.length===0&&y.hasChildren())return this.processChildren(h,l,y,D).pipe(w(Y=>new $(D,Y)));if(l.length===0&&C.length===0)return p(new $(D,[]));let U=ne(r)===i;return this.processSegment(h,l,y,C,U?f:i,!0,D).pipe(w(Y=>new $(D,Y instanceof $?[Y]:[])))}))):at(e)))}getChildConfig(n,e,r){return e.children?p({routes:e.children,injector:n}):e.loadChildren?e._loadedRoutes!==void 0?p({routes:e._loadedRoutes,injector:e._loadedInjector}):Yc(n,e,r,this.urlSerializer).pipe(B(o=>o?this.configLoader.loadChildren(n,e).pipe(A(i=>{e._loadedRoutes=i.routes,e._loadedInjector=i.injector})):el(e))):p({routes:[],injector:n})}};function dl(t){t.sort((n,e)=>n.value.outlet===f?-1:e.value.outlet===f?1:n.value.outlet.localeCompare(e.value.outlet))}function hl(t){let n=t.value.routeConfig;return n&&n.path===""}function bs(t){let n=[],e=new Set;for(let r of t){if(!hl(r)){n.push(r);continue}let o=n.find(i=>r.value.routeConfig===i.value.routeConfig);o!==void 0?(o.children.push(...r.children),e.add(o)):n.push(r)}for(let r of e){let o=bs(r.children);n.push(new $(r.value,o))}return n.filter(r=>!e.has(r))}function Vi(t){return t.data||{}}function Hi(t){return t.resolve||{}}function pl(t,n,e,r,o,i){return B(s=>ll(t,n,e,r,s.extractedUrl,o,i).pipe(w(({state:a,tree:c})=>H(d({},s),{targetSnapshot:a,urlAfterRedirects:c}))))}function fl(t,n){return B(e=>{let{targetSnapshot:r,guards:{canActivateChecks:o}}=e;if(!o.length)return p(e);let i=new Set(o.map(c=>c.route)),s=new Set;for(let c of i)if(!s.has(c))for(let l of vs(c))s.add(l);let a=0;return j(s).pipe(me(c=>i.has(c)?gl(c,r,t,n):(c.data=qn(c,c.parent,t).resolve,p(void 0))),A(()=>a++),ir(1),B(c=>a===s.size?p(e):ge))})}function vs(t){let n=t.children.map(e=>vs(e)).flat();return[t,...n]}function gl(t,n,e,r){let o=t.routeConfig,i=t._resolve;return o?.title!==void 0&&!ls(o)&&(i[Ht]=o.title),Yt(()=>(t.data=qn(t,t.parent,e).resolve,ml(i,t,n,r).pipe(w(s=>(t._resolvedData=s,t.data=d(d({},t.data),s),null)))))}function ml(t,n,e,r){let o=zr(t);if(o.length===0)return p({});let i={};return j(o).pipe(B(s=>bl(t[s],n,e,r).pipe(Ee(),A(a=>{if(a instanceof mt)throw Gn(new Ae,a);i[s]=a}))),ir(1),w(()=>i),Le(s=>fs(s)?ge:wt(s)))}function bl(t,n,e,r){let o=vt(n)??r,i=yt(t,o),s=i.resolve?i.resolve(n,e):F(o,()=>i(n,e));return Re(s)}function Br(t){return k(n=>{let e=t(n);return e?j(e).pipe(w(()=>n)):p(n)})}var io=(()=>{class t{buildTitle(e){let r,o=e.root;for(;o!==void 0;)r=this.getResolvedTitleForRoute(o)??r,o=o.children.find(i=>i.outlet===f);return r}getResolvedTitleForRoute(e){return e.data[Ht]}static \u0275fac=function(r){return new(r||t)};static \u0275prov=g({token:t,factory:()=>u(ys),providedIn:"root"})}return t})(),ys=(()=>{class t extends io{title;constructor(e){super(),this.title=e}updateTitle(e){let r=this.buildTitle(e);r!==void 0&&this.title.setTitle(r)}static \u0275fac=function(r){return new(r||t)(b(Ui))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Oe=new m("",{providedIn:"root",factory:()=>({})}),qe=new m(""),Qn=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=u(qo);loadComponent(e,r){if(this.componentLoaders.get(r))return this.componentLoaders.get(r);if(r._loadedComponent)return p(r._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(r);let o=Re(F(e,()=>r.loadComponent())).pipe(w(Rs),k(Es),A(s=>{this.onLoadEndListener&&this.onLoadEndListener(r),r._loadedComponent=s}),We(()=>{this.componentLoaders.delete(r)})),i=new nr(o,()=>new fe).pipe(tr());return this.componentLoaders.set(r,i),i}loadChildren(e,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return p({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let i=ws(r,this.compiler,e,this.onLoadEndListener).pipe(We(()=>{this.childrenLoaders.delete(r)})),s=new nr(i,()=>new fe).pipe(tr());return this.childrenLoaders.set(r,s),s}static \u0275fac=function(r){return new(r||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function ws(t,n,e,r){return Re(F(e,()=>t.loadChildren())).pipe(w(Rs),k(Es),B(o=>o instanceof jo||Array.isArray(o)?p(o):j(n.compileModuleAsync(o))),w(o=>{r&&r(t);let i,s,a=!1;return Array.isArray(o)?(s=o,a=!0):(i=o.create(e).injector,s=i.get(qe,[],{optional:!0,self:!0}).flat()),{routes:s.map(oo),injector:i}}))}function vl(t){return t&&typeof t=="object"&&"default"in t}function Rs(t){return vl(t)?t.default:t}function Es(t){return p(t)}var Yn=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=g({token:t,factory:()=>u(yl),providedIn:"root"})}return t})(),yl=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,r){return e}static \u0275fac=function(r){return new(r||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),so=new m(""),ao=new m("");function Cs(t,n,e){let r=t.get(ao),o=t.get(x);if(!o.startViewTransition||r.skipNextTransition)return r.skipNextTransition=!1,new Promise(l=>setTimeout(l));let i,s=new Promise(l=>{i=l}),a=o.startViewTransition(()=>(i(),wl(t)));a.ready.catch(l=>{});let{onViewTransitionCreated:c}=r;return c&&F(t,()=>c({transition:a,from:n,to:e})),s}function wl(t){return new Promise(n=>{Oo({read:()=>setTimeout(n)},{injector:t})})}var co=new m(""),Zn=(()=>{class t{currentNavigation=nn(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=null;events=new fe;transitionAbortWithErrorSubject=new fe;configLoader=u(Qn);environmentInjector=u(be);destroyRef=u(cr);urlSerializer=u(Ve);rootContexts=u(He);location=u(et);inputBindingEnabled=u(qt,{optional:!0})!==null;titleStrategy=u(io);options=u(Oe,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=u(Yn);createViewTransition=u(so,{optional:!0});navigationErrorHandler=u(co,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>p(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=o=>this.events.next(new Un(o)),r=o=>this.events.next(new jn(o));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let r=++this.navigationId;Te(()=>{this.transitions?.next(H(d({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,abortController:new AbortController,id:r}))})}setupNavigations(e){return this.transitions=new q(null),this.transitions.pipe(Z(r=>r!==null),k(r=>{let o=!1;return p(r).pipe(k(i=>{if(this.navigationId>r.id)return this.cancelNavigationTransition(r,"",L.SupersededByNewNavigation),ge;this.currentTransition=r,this.currentNavigation.set({id:i.id,initialUrl:i.rawUrl,extractedUrl:i.extractedUrl,targetBrowserUrl:typeof i.extras.browserUrl=="string"?this.urlSerializer.parse(i.extras.browserUrl):i.extras.browserUrl,trigger:i.source,extras:i.extras,previousNavigation:this.lastSuccessfulNavigation?H(d({},this.lastSuccessfulNavigation),{previousNavigation:null}):null,abort:()=>i.abortController.abort()});let s=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),a=i.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!s&&a!=="reload"){let c="";return this.events.next(new de(i.id,this.urlSerializer.serialize(i.rawUrl),c,ht.IgnoredSameUrlNavigation)),i.resolve(!1),ge}if(this.urlHandlingStrategy.shouldProcessUrl(i.rawUrl))return p(i).pipe(k(c=>(this.events.next(new Ne(c.id,this.urlSerializer.serialize(c.extractedUrl),c.source,c.restoredState)),c.id!==this.navigationId?ge:Promise.resolve(c))),pl(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy),A(c=>{r.targetSnapshot=c.targetSnapshot,r.urlAfterRedirects=c.urlAfterRedirects,this.currentNavigation.update(h=>(h.finalUrl=c.urlAfterRedirects,h));let l=new Ut(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(l)}));if(s&&this.urlHandlingStrategy.shouldProcessUrl(i.currentRawUrl)){let{id:c,extractedUrl:l,source:h,restoredState:v,extras:T}=i,S=new Ne(c,this.urlSerializer.serialize(l),h,v);this.events.next(S);let D=as(this.rootComponentType).snapshot;return this.currentTransition=r=H(d({},i),{targetSnapshot:D,urlAfterRedirects:l,extras:H(d({},T),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(Q=>(Q.finalUrl=l,Q)),p(r)}else{let c="";return this.events.next(new de(i.id,this.urlSerializer.serialize(i.extractedUrl),c,ht.IgnoredByUrlHandlingStrategy)),i.resolve(!1),ge}}),A(i=>{let s=new On(i.id,this.urlSerializer.serialize(i.extractedUrl),this.urlSerializer.serialize(i.urlAfterRedirects),i.targetSnapshot);this.events.next(s)}),w(i=>(this.currentTransition=r=H(d({},i),{guards:Nc(i.targetSnapshot,i.currentSnapshot,this.rootContexts)}),r)),Vc(this.environmentInjector,i=>this.events.next(i)),A(i=>{if(r.guardsResult=i.guardsResult,i.guardsResult&&typeof i.guardsResult!="boolean")throw Gn(this.urlSerializer,i.guardsResult);let s=new kn(i.id,this.urlSerializer.serialize(i.extractedUrl),this.urlSerializer.serialize(i.urlAfterRedirects),i.targetSnapshot,!!i.guardsResult);this.events.next(s)}),Z(i=>i.guardsResult?!0:(this.cancelNavigationTransition(i,"",L.GuardRejected),!1)),Br(i=>{if(i.guards.canActivateChecks.length!==0)return p(i).pipe(A(s=>{let a=new Pn(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(a)}),k(s=>{let a=!1;return p(s).pipe(fl(this.paramsInheritanceStrategy,this.environmentInjector),A({next:()=>a=!0,complete:()=>{a||this.cancelNavigationTransition(s,"",L.NoDataFromResolver)}}))}),A(s=>{let a=new Ln(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(a)}))}),Br(i=>{let s=a=>{let c=[];if(a.routeConfig?.loadComponent){let l=vt(a)??this.environmentInjector;c.push(this.configLoader.loadComponent(l,a.routeConfig).pipe(A(h=>{a.component=h}),w(()=>{})))}for(let l of a.children)c.push(...s(l));return c};return Qt(s(i.targetSnapshot.root)).pipe(or(null),Ge(1))}),Br(()=>this.afterPreactivation()),k(()=>{let{currentSnapshot:i,targetSnapshot:s}=r,a=this.createViewTransition?.(this.environmentInjector,i.root,s.root);return a?j(a).pipe(w(()=>r)):p(r)}),w(i=>{let s=Mc(e.routeReuseStrategy,i.targetSnapshot,i.currentRouterState);return this.currentTransition=r=H(d({},i),{targetRouterState:s}),this.currentNavigation.update(a=>(a.targetRouterState=s,a)),r}),A(()=>{this.events.next(new jt)}),xc(this.rootContexts,e.routeReuseStrategy,i=>this.events.next(i),this.inputBindingEnabled),Ge(1),sr(new Jt(i=>{let s=r.abortController.signal,a=()=>i.next();return s.addEventListener("abort",a),()=>s.removeEventListener("abort",a)}).pipe(Z(()=>!o&&!r.targetRouterState),A(()=>{this.cancelNavigationTransition(r,r.abortController.signal.reason+"",L.Aborted)}))),A({next:i=>{o=!0,this.lastSuccessfulNavigation=Te(this.currentNavigation),this.events.next(new J(i.id,this.urlSerializer.serialize(i.extractedUrl),this.urlSerializer.serialize(i.urlAfterRedirects))),this.titleStrategy?.updateTitle(i.targetRouterState.snapshot),i.resolve(!0)},complete:()=>{o=!0}}),sr(this.transitionAbortWithErrorSubject.pipe(A(i=>{throw i}))),We(()=>{o||this.cancelNavigationTransition(r,"",L.SupersededByNewNavigation),this.currentTransition?.id===r.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Le(i=>{if(this.destroyed)return r.resolve(!1),ge;if(o=!0,ps(i))this.events.next(new le(r.id,this.urlSerializer.serialize(r.extractedUrl),i.message,i.cancellationCode)),Ac(i)?this.events.next(new gt(i.url,i.navigationBehaviorOptions)):r.resolve(!1);else{let s=new pt(r.id,this.urlSerializer.serialize(r.extractedUrl),i,r.targetSnapshot??void 0);try{let a=F(this.environmentInjector,()=>this.navigationErrorHandler?.(s));if(a instanceof mt){let{message:c,cancellationCode:l}=Gn(this.urlSerializer,a);this.events.next(new le(r.id,this.urlSerializer.serialize(r.extractedUrl),c,l)),this.events.next(new gt(a.redirectTo,a.navigationBehaviorOptions))}else throw this.events.next(s),i}catch(a){this.options.resolveNavigationPromiseOnError?r.resolve(!1):r.reject(a)}}return ge}))}))}cancelNavigationTransition(e,r,o){let i=new le(e.id,this.urlSerializer.serialize(e.extractedUrl),r,o);this.events.next(i),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),r=Te(this.currentNavigation),o=r?.targetBrowserUrl??r?.extractedUrl;return e.toString()!==o?.toString()&&!r?.extras.skipLocationChange}static \u0275fac=function(r){return new(r||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Rl(t){return t!==ut}var Ts=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=g({token:t,factory:()=>u(El),providedIn:"root"})}return t})(),Xn=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}},El=(()=>{class t extends Xn{static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ss=(()=>{class t{urlSerializer=u(Ve);options=u(Oe,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=u(et);urlHandlingStrategy=u(Yn);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new ue;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:r,targetBrowserUrl:o}){let i=e!==void 0?this.urlHandlingStrategy.merge(e,r):r,s=o??i;return s instanceof ue?this.urlSerializer.serialize(s):s}commitTransition({targetRouterState:e,finalUrl:r,initialUrl:o}){r&&e?(this.currentUrlTree=r,this.rawUrlTree=this.urlHandlingStrategy.merge(r,o),this.routerState=e):this.rawUrlTree=o}routerState=as(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();updateStateMemento(){this.stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=g({token:t,factory:()=>u(Cl),providedIn:"root"})}return t})(),Cl=(()=>{class t extends Ss{currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(r=>{r.type==="popstate"&&setTimeout(()=>{e(r.url,r.state,"popstate")})})}handleRouterEvent(e,r){e instanceof Ne?this.updateStateMemento():e instanceof de?this.commitTransition(r):e instanceof Ut?this.urlUpdateStrategy==="eager"&&(r.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(r),r)):e instanceof jt?(this.commitTransition(r),this.urlUpdateStrategy==="deferred"&&!r.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(r),r)):e instanceof le&&e.code!==L.SupersededByNewNavigation&&e.code!==L.Redirect?this.restoreHistory(r):e instanceof pt?this.restoreHistory(r,!0):e instanceof J&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,{extras:r,id:o}){let{replaceUrl:i,state:s}=r;if(this.location.isCurrentPathEqualTo(e)||i){let a=this.browserPageId,c=d(d({},s),this.generateNgRouterState(o,a));this.location.replaceState(e,"",c)}else{let a=d(d({},s),this.generateNgRouterState(o,this.browserPageId+1));this.location.go(e,"",a)}}restoreHistory(e,r=!1){if(this.canceledNavigationResolution==="computed"){let o=this.browserPageId,i=this.currentPageId-o;i!==0?this.location.historyGo(i):this.getCurrentUrlTree()===e.finalUrl&&i===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,r){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:r}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Kn(t,n){t.events.pipe(Z(e=>e instanceof J||e instanceof le||e instanceof pt||e instanceof de),w(e=>e instanceof J||e instanceof de?0:(e instanceof le?e.code===L.Redirect||e.code===L.SupersededByNewNavigation:!1)?2:1),Z(e=>e!==2),Ge(1)).subscribe(()=>{n()})}var Tl={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Sl={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},pe=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=u(Bo);stateManager=u(Ss);options=u(Oe,{optional:!0})||{};pendingTasks=u(Co);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=u(Zn);urlSerializer=u(Ve);location=u(et);urlHandlingStrategy=u(Yn);injector=u(be);_events=new fe;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=u(Ts);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=u(qe,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!u(qt,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{this.console.warn(e)}}),this.subscribeToNavigationEvents()}eventsSubscription=new po;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(r=>{try{let o=this.navigationTransitions.currentTransition,i=Te(this.navigationTransitions.currentNavigation);if(o!==null&&i!==null){if(this.stateManager.handleRouterEvent(r,i),r instanceof le&&r.code!==L.Redirect&&r.code!==L.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof J)this.navigated=!0;else if(r instanceof gt){let s=r.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(r.url,o.currentRawUrl),c=d({browserUrl:o.extras.browserUrl,info:o.extras.info,skipLocationChange:o.extras.skipLocationChange,replaceUrl:o.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Rl(o.source)},s);this.scheduleNavigation(a,ut,null,c,{resolve:o.resolve,reject:o.reject,promise:o.promise})}}Cc(r)&&this._events.next(r)}catch(o){this.navigationTransitions.transitionAbortWithErrorSubject.next(o)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),ut,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,r,o)=>{this.navigateToSyncWithBrowser(e,o,r)})}navigateToSyncWithBrowser(e,r,o){let i={replaceUrl:!0},s=o?.navigationId?o:null;if(o){let c=d({},o);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(i.state=c)}let a=this.parseUrl(e);this.scheduleNavigation(a,r,s,i).catch(c=>{this.disposed||this.injector.get(tn)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Te(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(oo),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,r={}){let{relativeTo:o,queryParams:i,fragment:s,queryParamsHandling:a,preserveFragment:c}=r,l=c?this.currentUrlTree.fragment:s,h=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":h=d(d({},this.currentUrlTree.queryParams),i);break;case"preserve":h=this.currentUrlTree.queryParams;break;default:h=i||null}h!==null&&(h=this.removeEmptyProps(h));let v;try{let T=o?o.snapshot:this.routerState.snapshot.root;v=rs(T)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),v=this.currentUrlTree.root}return os(v,e,h,l??null)}navigateByUrl(e,r={skipLocationChange:!1}){let o=xe(e)?e:this.parseUrl(e),i=this.urlHandlingStrategy.merge(o,this.rawUrlTree);return this.scheduleNavigation(i,ut,null,r)}navigate(e,r={skipLocationChange:!1}){return Il(e),this.navigateByUrl(this.createUrlTree(e,r),r)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(ar(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,r){let o;if(r===!0?o=d({},Tl):r===!1?o=d({},Sl):o=r,xe(e))return ji(this.currentUrlTree,e,o);let i=this.parseUrl(e);return ji(this.currentUrlTree,i,o)}removeEmptyProps(e){return Object.entries(e).reduce((r,[o,i])=>(i!=null&&(r[o]=i),r),{})}scheduleNavigation(e,r,o,i,s){if(this.disposed)return Promise.resolve(!1);let a,c,l;s?(a=s.resolve,c=s.reject,l=s.promise):l=new Promise((v,T)=>{a=v,c=T});let h=this.pendingTasks.add();return Kn(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(h))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:o,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:i,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(v=>Promise.reject(v))}static \u0275fac=function(r){return new(r||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Il(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new E(4008,!1)}var Is=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;reactiveHref=nn(null);get href(){return Te(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}target;queryParams;fragment;queryParamsHandling;state;info;relativeTo;isAnchorElement;subscription;onChanges=new fe;applicationErrorHandler=u(tn);options=u(Oe,{optional:!0});constructor(e,r,o,i,s,a){this.router=e,this.route=r,this.tabIndexAttribute=o,this.renderer=i,this.el=s,this.locationStrategy=a,this.reactiveHref.set(u(new Go("href"),{optional:!0}));let c=s.nativeElement.tagName?.toLowerCase();this.isAnchorElement=c==="a"||c==="area"||!!(typeof customElements=="object"&&customElements.get(c)?.observedAttributes?.includes?.("href")),this.isAnchorElement?this.setTabIndexIfNotOnNativeEl("0"):this.subscribeToNavigationEventsIfNecessary()}subscribeToNavigationEventsIfNecessary(){if(this.subscription!==void 0||!this.isAnchorElement)return;let e=this.preserveFragment,r=o=>o==="merge"||o==="preserve";e||=r(this.queryParamsHandling),e||=!this.queryParamsHandling&&!r(this.options?.defaultQueryParamsHandling),e&&(this.subscription=this.router.events.subscribe(o=>{o instanceof J&&this.updateHref()}))}preserveFragment=!1;skipLocationChange=!1;replaceUrl=!1;setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.isAnchorElement&&(this.updateHref(),this.subscribeToNavigationEventsIfNecessary()),this.onChanges.next(this)}routerLinkInput=null;set routerLink(e){e==null?(this.routerLinkInput=null,this.setTabIndexIfNotOnNativeEl(null)):(xe(e)?this.routerLinkInput=e:this.routerLinkInput=Array.isArray(e)?e:[e],this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,r,o,i,s){let a=this.urlTree;if(a===null||this.isAnchorElement&&(e!==0||r||o||i||s||typeof this.target=="string"&&this.target!="_self"))return!0;let c={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(a,c)?.catch(l=>{this.applicationErrorHandler(l)}),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let e=this.urlTree;this.reactiveHref.set(e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null)}applyAttributeValue(e,r){let o=this.renderer,i=this.el.nativeElement;r!==null?o.setAttribute(i,e,r):o.removeAttribute(i,e)}get urlTree(){return this.routerLinkInput===null?null:xe(this.routerLinkInput)?this.routerLinkInput:this.router.createUrlTree(this.routerLinkInput,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}static \u0275fac=function(r){return new(r||t)(Je(pe),Je(he),So("tabindex"),Je(Po),Je(on),Je(Ct))};static \u0275dir=ie({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(r,o){r&1&&ln("click",function(s){return o.onClick(s.button,s.ctrlKey,s.shiftKey,s.altKey,s.metaKey)}),r&2&&ye("href",o.reactiveHref(),_o)("target",o.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",N],skipLocationChange:[2,"skipLocationChange","skipLocationChange",N],replaceUrl:[2,"replaceUrl","replaceUrl",N],routerLink:"routerLink"},features:[rn]})}return t})();var Wt=class{};var Ms=(()=>{class t{router;injector;preloadingStrategy;loader;subscription;constructor(e,r,o,i){this.router=e,this.injector=r,this.preloadingStrategy=o,this.loader=i}setUpPreloading(){this.subscription=this.router.events.pipe(Z(e=>e instanceof J),me(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(e,r){let o=[];for(let i of r){i.providers&&!i._injector&&(i._injector=sn(i.providers,e,`Route: ${i.path}`));let s=i._injector??e,a=i._loadedInjector??s;(i.loadChildren&&!i._loadedRoutes&&i.canLoad===void 0||i.loadComponent&&!i._loadedComponent)&&o.push(this.preloadConfig(s,i)),(i.children||i._loadedRoutes)&&o.push(this.processRoutes(a,i.children??i._loadedRoutes))}return j(o).pipe(rr())}preloadConfig(e,r){return this.preloadingStrategy.preload(r,()=>{let o;r.loadChildren&&r.canLoad===void 0?o=this.loader.loadChildren(e,r):o=p(null);let i=o.pipe(B(s=>s===null?p(void 0):(r._loadedRoutes=s.routes,r._loadedInjector=s.injector,this.processRoutes(s.injector??e,s.routes))));if(r.loadComponent&&!r._loadedComponent){let s=this.loader.loadComponent(e,r);return j([i,s]).pipe(rr())}else return i})}static \u0275fac=function(r){return new(r||t)(b(pe),b(be),b(Wt),b(Qn))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ds=new m(""),Dl=(()=>{class t{urlSerializer;transitions;viewportScroller;zone;options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=ut;restoredId=0;store={};constructor(e,r,o,i,s={}){this.urlSerializer=e,this.transitions=r,this.viewportScroller=o,this.zone=i,this.options=s,s.scrollPositionRestoration||="disabled",s.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof Ne?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof J?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof de&&e.code===ht.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof ft))return;let r={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],r):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,r):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,r){this.zone.runOutsideAngular(()=>er(this,null,function*(){yield new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<"u"&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new ft(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,r))})}))}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(r){Lo()};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})();function _l(t,...n){return Zt([{provide:qe,multi:!0,useValue:t},[],{provide:he,useFactory:_s,deps:[pe]},{provide:fr,multi:!0,useFactory:As},n.map(e=>e.\u0275providers)])}function _s(t){return t.routerState.root}function Xt(t,n){return{\u0275kind:t,\u0275providers:n}}function As(){let t=u(en);return n=>{let e=t.get(zo);if(n!==e.components[0])return;let r=t.get(pe),o=t.get(xs);t.get(uo)===1&&r.initialNavigation(),t.get(ks,null,{optional:!0})?.setUpPreloading(),t.get(Ds,null,{optional:!0})?.init(),r.resetRootComponentType(e.componentTypes[0]),o.closed||(o.next(),o.complete(),o.unsubscribe())}}var xs=new m("",{factory:()=>new fe}),uo=new m("",{providedIn:"root",factory:()=>1});function Ns(){let t=[{provide:Do,useValue:!0},{provide:uo,useValue:0},pr(()=>{let n=u(en);return n.get(Zo,Promise.resolve()).then(()=>new Promise(r=>{let o=n.get(pe),i=n.get(xs);Kn(o,()=>{r(!0)}),n.get(Zn).afterPreactivation=()=>(r(!0),i.closed?p(void 0):i),o.initialNavigation()}))})];return Xt(2,t)}function Os(){let t=[pr(()=>{u(pe).setUpLocationChangeListener()}),{provide:uo,useValue:2}];return Xt(3,t)}var ks=new m("");function Ps(t){return Xt(0,[{provide:ks,useExisting:Ms},{provide:Wt,useExisting:t}])}function Ls(){return Xt(8,[no,{provide:qt,useExisting:no}])}function Us(t){No("NgRouterViewTransitions");let n=[{provide:so,useValue:Cs},{provide:ao,useValue:d({skipNextTransition:!!t?.skipInitialTransition},t)}];return Xt(9,n)}var js=[et,{provide:Ve,useClass:Ae},pe,He,{provide:he,useFactory:_s,deps:[pe]},Qn,[]],Al=(()=>{class t{constructor(){}static forRoot(e,r){return{ngModule:t,providers:[js,[],{provide:qe,multi:!0,useValue:e},[],r?.errorHandler?{provide:co,useValue:r.errorHandler}:[],{provide:Oe,useValue:r||{}},r?.useHash?Nl():Ol(),xl(),r?.preloadingStrategy?Ps(r.preloadingStrategy).\u0275providers:[],r?.initialNavigation?kl(r):[],r?.bindToComponentInputs?Ls().\u0275providers:[],r?.enableViewTransitions?Us().\u0275providers:[],Pl()]}}static forChild(e){return{ngModule:t,providers:[{provide:qe,multi:!0,useValue:e}]}}static \u0275fac=function(r){return new(r||t)};static \u0275mod=W({type:t});static \u0275inj=G({})}return t})();function xl(){return{provide:Ds,useFactory:()=>{let t=u(ii),n=u(ve),e=u(Oe),r=u(Zn),o=u(Ve);return e.scrollOffset&&t.setOffset(e.scrollOffset),new Dl(o,r,t,n,e)}}}function Nl(){return{provide:Ct,useClass:ei}}function Ol(){return{provide:Ct,useClass:Ko}}function kl(t){return[t.initialNavigation==="disabled"?Os().\u0275providers:[],t.initialNavigation==="enabledBlocking"?Ns().\u0275providers:[]]}var lo=new m("");function Pl(){return[{provide:lo,useFactory:As},{provide:fr,multi:!0,useExisting:lo}]}var Bs=class{constructor(n,e=10){this.pageNo=n;this.limit=e}static type="[Post] load post"},Fs=class{constructor(n){this.posts=n}static type="[Post] load post success"},zs=class{constructor(n){this.post=n}static type="[Post] add post"},$s=class{constructor(n){this.post=n}static type="[Post] add post success"},Vs=class{constructor(n){this.post=n}static type="[Post] edit post"},Hs=class{constructor(n){this.post=n}static type="[Post] edit post success"},qs=class{constructor(n){this.id=n}static type="[Post] delete post"},Gs=class{constructor(n){this.id=n}static type="[Post] delete post success"};var Ws=(()=>{class t extends ae{autofocus=!1;focused=!1;platformId=u(Xe);document=u(x);host=u(on);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){Tt(this.platformId)&&this.autofocus&&setTimeout(()=>{let e=fi.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275dir=ie({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[X]})}return t})();var Xs=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var Ll=`
    ${Xs}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,Ul={root:({instance:t})=>{let n=typeof t.value=="function"?t.value():t.value,e=typeof t.size=="function"?t.size():t.size,r=typeof t.badgeSize=="function"?t.badgeSize():t.badgeSize,o=typeof t.severity=="function"?t.severity():t.severity;return["p-badge p-component",{"p-badge-circle":ai(n)&&String(n).length===1,"p-badge-dot":si(n),"p-badge-sm":e==="small"||r==="small","p-badge-lg":e==="large"||r==="large","p-badge-xl":e==="xlarge"||r==="xlarge","p-badge-info":o==="info","p-badge-success":o==="success","p-badge-warn":o==="warn","p-badge-danger":o==="danger","p-badge-secondary":o==="secondary","p-badge-contrast":o==="contrast"}]}},Js=(()=>{class t extends Ie{name="badge";style=Ll;classes=Ul;static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})();var Qs=new m("BADGE_INSTANCE"),Fh=new m("BADGE_DIRECTIVE_INSTANCE");var ho=(()=>{class t extends ae{$pcBadge=u(Qs,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=u(z,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=ee();badgeSize=ee();size=ee();severity=ee();value=ee();badgeDisabled=ee(!1,{transform:N});_componentStyle=u(Js);static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275cmp=oe({type:t,selectors:[["p-badge"]],hostVars:4,hostBindings:function(r,o){r&2&&(se(o.cn(o.cx("root"),o.styleClass())),Ho("display",o.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[Ce([Js,{provide:Qs,useExisting:t},{provide:nt,useExisting:t}]),Qe([z]),X],decls:1,vars:1,template:function(r,o){r&1&&hn(0),r&2&&pn(o.value())},dependencies:[Se,Me,pi],encapsulation:2,changeDetection:0})}return t})(),Zs=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=W({type:t});static \u0275inj=G({imports:[ho,Me,Me]})}return t})();var Bl=["*"],Fl={root:"p-fluid"},Ks=(()=>{class t extends Ie{name="fluid";classes=Fl;static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})();var ea=new m("FLUID_INSTANCE"),ta=(()=>{class t extends ae{$pcFluid=u(ea,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=u(z,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=u(Ks);static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275cmp=oe({type:t,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(r,o){r&2&&se(o.cx("root"))},features:[Ce([Ks,{provide:ea,useExisting:t},{provide:nt,useExisting:t}]),Qe([z]),X],ngContentSelectors:Bl,decls:1,vars:0,template:function(r,o){r&1&&(un(),dn(0))},dependencies:[Se],encapsulation:2,changeDetection:0})}return t})();var zl=["data-p-icon","spinner"],na=(()=>{class t extends gi{pathId;onInit(){this.pathId="url(#"+Sr()+")"}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275cmp=oe({type:t,selectors:[["","data-p-icon","spinner"]],features:[X],attrs:zl,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(r,o){r&1&&(Kt(),br(0,"g"),yr(1,"path",0),vr(),br(2,"defs")(3,"clipPath",1),yr(4,"rect",2),vr()()),r&2&&(ye("clip-path",o.pathId),P(3),Vo("id",o.pathId))},encapsulation:2})}return t})();var ra=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var $l=`
    ${ra}

    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,Vl={root:"p-ink"},oa=(()=>{class t extends Ie{name="ripple";style=$l;classes=Vl;static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})();var ia=(()=>{class t extends ae{zone=u(ve);_componentStyle=u(oa);animationListener;mouseDownListener;timeout;constructor(){super(),fn(()=>{Tt(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(e){let r=this.getInk();if(!r||this.document.defaultView?.getComputedStyle(r,null).display==="none")return;if(tt(r,"p-ink-active"),!Cr(r)&&!Tr(r)){let a=Math.max(ci(this.el.nativeElement),ui(this.el.nativeElement));r.style.height=a+"px",r.style.width=a+"px"}let o=li(this.el.nativeElement),i=e.pageX-o.left+this.document.body.scrollTop-Tr(r)/2,s=e.pageY-o.top+this.document.body.scrollLeft-Cr(r)/2;this.renderer.setStyle(r,"top",s+"px"),this.renderer.setStyle(r,"left",i+"px"),Er(r,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&tt(a,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let r=0;r<e.length;r++)if(typeof e[r].className=="string"&&e[r].className.indexOf("p-ink")!==-1)return e[r];return null}resetInk(){let e=this.getInk();e&&tt(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),tt(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,di(e))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(r){return new(r||t)};static \u0275dir=ie({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[Ce([oa]),X]})}return t})();var sa=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var Hl=["content"],ql=["loadingicon"],Gl=["icon"],Wl=["*"],la=(t,n)=>({class:t,pt:n});function Xl(t,n){t&1&&$o(0)}function Jl(t,n){if(t&1&&je(0,"span",7),t&2){let e=K(3);se(e.cn(e.cx("loadingIcon"),"pi-spin",e.loadingIcon)),I("pBind",e.ptm("loadingIcon")),ye("aria-hidden",!0)}}function Ql(t,n){if(t&1&&(Kt(),je(0,"svg",8)),t&2){let e=K(3);se(e.cn(e.cx("loadingIcon"),e.spinnerIconClass())),I("pBind",e.ptm("loadingIcon"))("spin",!0),ye("aria-hidden",!0)}}function Yl(t,n){if(t&1&&(an(0),Ue(1,Jl,1,4,"span",3)(2,Ql,1,5,"svg",6),cn()),t&2){let e=K(2);P(),I("ngIf",e.loadingIcon),P(),I("ngIf",!e.loadingIcon)}}function Zl(t,n){}function Kl(t,n){if(t&1&&Ue(0,Zl,0,0,"ng-template",9),t&2){let e=K(2);I("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function eu(t,n){if(t&1&&(an(0),Ue(1,Yl,3,2,"ng-container",2)(2,Kl,1,1,null,5),cn()),t&2){let e=K();P(),I("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),P(),I("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",wr(3,la,e.cx("loadingIcon"),e.ptm("loadingIcon")))}}function tu(t,n){if(t&1&&je(0,"span",7),t&2){let e=K(2);se(e.cn("icon",e.iconClass())),I("pBind",e.ptm("icon"))}}function nu(t,n){}function ru(t,n){if(t&1&&Ue(0,nu,0,0,"ng-template",9),t&2){let e=K(2);I("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function ou(t,n){if(t&1&&(an(0),Ue(1,tu,1,3,"span",3)(2,ru,1,1,null,5),cn()),t&2){let e=K();P(),I("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),P(),I("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",wr(3,la,e.cx("icon"),e.ptm("icon")))}}function iu(t,n){if(t&1&&(gr(0,"span",7),hn(1),mr()),t&2){let e=K();se(e.cx("label")),I("pBind",e.ptm("label")),ye("aria-hidden",e.icon&&!e.label),P(),pn(e.label)}}function su(t,n){if(t&1&&je(0,"p-badge",10),t&2){let e=K();I("value",e.badge)("severity",e.badgeSeverity)("pt",e.ptm("pcBadge"))}}var au={root:({instance:t})=>["p-button p-component",{"p-button-icon-only":(t.icon||t.buttonProps?.icon||t.iconTemplate||t._iconTemplate||t.loadingIcon||t.loadingIconTemplate||t._loadingIconTemplate)&&!t.label&&!t.buttonProps?.label,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-button-loading":t.loading||t.buttonProps?.loading,"p-button-link":t.link||t.buttonProps?.link,[`p-button-${t.severity||t.buttonProps?.severity}`]:t.severity||t.buttonProps?.severity,"p-button-raised":t.raised||t.buttonProps?.raised,"p-button-rounded":t.rounded||t.buttonProps?.rounded,"p-button-text":t.text||t.variant==="text"||t.buttonProps?.text||t.buttonProps?.variant==="text","p-button-outlined":t.outlined||t.variant==="outlined"||t.buttonProps?.outlined||t.buttonProps?.variant==="outlined","p-button-sm":t.size==="small"||t.buttonProps?.size==="small","p-button-lg":t.size==="large"||t.buttonProps?.size==="large","p-button-plain":t.plain||t.buttonProps?.plain,"p-button-fluid":t.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos||t.buttonProps?.iconPos}`]:t.label||t.buttonProps?.label,"p-button-icon-left":(t.iconPos==="left"||t.buttonProps?.iconPos==="left")&&t.label||t.buttonProps?.label,"p-button-icon-right":(t.iconPos==="right"||t.buttonProps?.iconPos==="right")&&t.label||t.buttonProps?.label},t.icon,t.buttonProps?.icon],spinnerIcon:({instance:t})=>Object.entries(t.iconClass()).filter(([,n])=>!!n).reduce((n,[e])=>n+` ${e}`,"p-button-loading-icon"),label:"p-button-label"},aa=(()=>{class t extends Ie{name="button";style=sa;classes=au;static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})();var ca=new m("BUTTON_INSTANCE"),zp=new m("BUTTON_DIRECTIVE_INSTANCE"),$p=new m("BUTTON_LABEL_INSTANCE"),Vp=new m("BUTTON_ICON_INSTANCE");var cu=(()=>{class t extends ae{hostName="";$pcButton=u(ca,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=u(z,{self:!0});_componentStyle=u(aa);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=ee(void 0,{transform:N});onClick=new re;onFocus=new re;onBlur=new re;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=u(ta,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[r])=>e+` ${r}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,[this.icon]:!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275cmp=oe({type:t,selectors:[["p-button"]],contentQueries:function(r,o,i){if(r&1&&(Ye(i,Hl,5),Ye(i,ql,5),Ye(i,Gl,5),Ye(i,hi,4)),r&2){let s;Ze(s=Ke())&&(o.contentTemplate=s.first),Ze(s=Ke())&&(o.loadingIconTemplate=s.first),Ze(s=Ke())&&(o.iconTemplate=s.first),Ze(s=Ke())&&(o.templates=s)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",N],raised:[2,"raised","raised",N],rounded:[2,"rounded","rounded",N],text:[2,"text","text",N],plain:[2,"plain","plain",N],outlined:[2,"outlined","outlined",N],link:[2,"link","link",N],tabindex:[2,"tabindex","tabindex",Xo],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",N],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",N],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[Ce([aa,{provide:ca,useExisting:t},{provide:nt,useExisting:t}]),Qe([z]),X],ngContentSelectors:Wl,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt"]],template:function(r,o){r&1&&(un(),gr(0,"button",0),ln("click",function(s){return o.onClick.emit(s)})("focus",function(s){return o.onFocus.emit(s)})("blur",function(s){return o.onBlur.emit(s)}),dn(1),Ue(2,Xl,1,0,"ng-container",1)(3,eu,3,6,"ng-container",2)(4,ou,3,6,"ng-container",2)(5,iu,2,5,"span",3)(6,su,1,3,"p-badge",4),mr()),r&2&&(se(o.cn(o.cx("root"),o.styleClass,o.buttonProps==null?null:o.buttonProps.styleClass)),I("ngStyle",o.style||(o.buttonProps==null?null:o.buttonProps.style))("disabled",o.disabled||o.loading||(o.buttonProps==null?null:o.buttonProps.disabled))("pAutoFocus",o.autofocus||(o.buttonProps==null?null:o.buttonProps.autofocus))("pBind",o.ptm("root")),ye("type",o.type||(o.buttonProps==null?null:o.buttonProps.type))("aria-label",o.ariaLabel||(o.buttonProps==null?null:o.buttonProps.ariaLabel))("tabindex",o.tabindex||(o.buttonProps==null?null:o.buttonProps.tabindex)),P(2),I("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),P(),I("ngIf",o.loading),P(),I("ngIf",!o.loading),P(),I("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.label),P(),I("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.badge))},dependencies:[Se,ti,ri,ni,ia,Ws,na,Zs,ho,Me,z],encapsulation:2,changeDetection:0})}return t})(),Hp=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=W({type:t});static \u0275inj=G({imports:[Se,cu,Me,Me]})}return t})();export{Or as a,Ca as b,De as c,Cn as d,Ni as e,Ya as f,to as g,Is as h,_l as i,Al as j,Bs as k,Fs as l,zs as m,$s as n,Vs as o,Hs as p,qs as q,Gs as r,ho as s,Zs as t,Ws as u,ta as v,na as w,ia as x,cu as y,Hp as z};
