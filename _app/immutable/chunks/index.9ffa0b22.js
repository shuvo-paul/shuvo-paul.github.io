function w(){}function R(t,n){for(const e in n)t[e]=n[e];return t}function D(t){return t()}function C(){return Object.create(null)}function y(t){t.forEach(D)}function q(t){return typeof t=="function"}function st(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let x;function lt(t,n){return x||(x=document.createElement("a")),x.href=n,t===x.href}function G(t){return Object.keys(t).length===0}function I(t,...n){if(t==null)return w;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ft(t,n,e){t.$$.on_destroy.push(I(n,e))}function at(t,n,e,i){if(t){const r=B(t,n,e,i);return t[0](r)}}function B(t,n,e,i){return t[1]&&i?R(e.ctx.slice(),t[1](i(n))):e.ctx}function _t(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],o=Math.max(n.dirty.length,r.length);for(let u=0;u<o;u+=1)l[u]=n.dirty[u]|r[u];return l}return n.dirty|r}return n.dirty}function dt(t,n,e,i,r,l){if(r){const o=B(n,e,i,l);t.p(o,r)}}function ht(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function mt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}let E=!1;function J(){E=!0}function K(){E=!1}function Q(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let s=0;s<n.length;s++){const a=n[s];a.claim_order!==void 0&&c.push(a)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const s=n[c].claim_order,a=(r>0&&n[e[r]].claim_order<=s?r+1:Q(1,r,g=>n[e[g]].claim_order,s))-1;i[c]=e[a]+1;const f=a+1;e[f]=c,r=Math.max(f,r)}const l=[],o=[];let u=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(l.push(n[c-1]);u>=c;u--)o.push(n[u]);u--}for(;u>=0;u--)o.push(n[u]);l.reverse(),o.sort((c,s)=>c.claim_order-s.claim_order);for(let c=0,s=0;c<o.length;c++){for(;s<l.length&&o[c].claim_order>=l[s].claim_order;)s++;const a=s<l.length?l[s]:null;t.insertBefore(o[c],a)}}function U(t,n){if(E){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function pt(t,n,e){E&&!e?U(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function yt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function gt(){return S(" ")}function xt(){return S("")}function Z(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function bt(t,n){for(const e in n)Z(t,e,n[e])}function tt(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function H(t,n,e,i,r=!1){nt(t);const l=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const u=t[o];if(n(u)){const c=e(u);return c===void 0?t.splice(o,1):t[o]=c,r||(t.claim_info.last_index=o),u}}for(let o=t.claim_info.last_index-1;o>=0;o--){const u=t[o];if(n(u)){const c=e(u);return c===void 0?t.splice(o,1):t[o]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function O(t,n,e,i){return H(t,r=>r.nodeName===n,r=>{const l=[];for(let o=0;o<r.attributes.length;o++){const u=r.attributes[o];e[u.name]||l.push(u.name)}l.forEach(o=>r.removeAttribute(o))},()=>i(n))}function $t(t,n,e){return O(t,n,e,X)}function wt(t,n,e){return O(t,n,e,Y)}function et(t,n){return H(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function Et(t){return et(t," ")}function Nt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function vt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function At(t,n){const e=[];let i=0;for(const r of n.childNodes)if(r.nodeType===8){const l=r.textContent.trim();l===`HEAD_${t}_END`?(i-=1,e.push(r)):l===`HEAD_${t}_START`&&(i+=1,e.push(r))}else i>0&&e.push(r);return e}function St(t,n){return new t(n)}let p;function m(t){p=t}function P(){if(!p)throw new Error("Function called outside component initialization");return p}function kt(t){P().$$.on_mount.push(t)}function jt(t){P().$$.after_update.push(t)}const h=[],T=[],b=[],M=[],z=Promise.resolve();let v=!1;function F(){v||(v=!0,z.then(L))}function Ct(){return F(),z}function A(t){b.push(t)}const N=new Set;let d=0;function L(){if(d!==0)return;const t=p;do{try{for(;d<h.length;){const n=h[d];d++,m(n),it(n.$$)}}catch(n){throw h.length=0,d=0,n}for(m(null),h.length=0,d=0;T.length;)T.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];N.has(e)||(N.add(e),e())}b.length=0}while(h.length);for(;M.length;)M.pop()();v=!1,N.clear(),m(t)}function it(t){if(t.fragment!==null){t.update(),y(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const $=new Set;let _;function Tt(){_={r:0,c:[],p:_}}function Mt(){_.r||y(_.c),_=_.p}function rt(t,n){t&&t.i&&($.delete(t),t.i(n))}function Dt(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function qt(t,n){const e={},i={},r={$$scope:1};let l=t.length;for(;l--;){const o=t[l],u=n[l];if(u){for(const c in o)c in u||(i[c]=1);for(const c in u)r[c]||(e[c]=u[c],r[c]=1);t[l]=u}else for(const c in o)r[c]=1}for(const o in i)o in e||(e[o]=void 0);return e}function Bt(t){t&&t.c()}function Ht(t,n){t&&t.l(n)}function ct(t,n,e,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(n,e),i||A(()=>{const o=t.$$.on_mount.map(D).filter(q);t.$$.on_destroy?t.$$.on_destroy.push(...o):y(o),t.$$.on_mount=[]}),l.forEach(A)}function ot(t,n){const e=t.$$;e.fragment!==null&&(y(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ut(t,n){t.$$.dirty[0]===-1&&(h.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ot(t,n,e,i,r,l,o,u=[-1]){const c=p;m(t);const s=t.$$={fragment:null,ctx:[],props:l,update:w,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:C(),dirty:u,skip_bound:!1,root:n.target||c.$$.root};o&&o(s.root);let a=!1;if(s.ctx=e?e(t,n.props||{},(f,g,...k)=>{const j=k.length?k[0]:g;return s.ctx&&r(s.ctx[f],s.ctx[f]=j)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](j),a&&ut(t,f)),g}):[],s.update(),a=!0,y(s.before_update),s.fragment=i?i(s.ctx):!1,n.target){if(n.hydrate){J();const f=tt(n.target);s.fragment&&s.fragment.l(f),f.forEach(V)}else s.fragment&&s.fragment.c();n.intro&&rt(t.$$.fragment),ct(t,n.target,n.anchor,n.customElement),K(),L()}m(c)}class Pt{$destroy(){ot(this,1),this.$destroy=w}$on(n,e){if(!q(e))return w;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!G(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{ct as A,ot as B,U as C,w as D,R as E,Y as F,wt as G,bt as H,qt as I,mt as J,at as K,At as L,dt as M,ht as N,_t as O,ft as P,lt as Q,yt as R,Pt as S,gt as a,pt as b,Et as c,Dt as d,xt as e,Mt as f,rt as g,V as h,Ot as i,jt as j,X as k,$t as l,tt as m,Z as n,kt as o,vt as p,S as q,et as r,st as s,Ct as t,Nt as u,Tt as v,T as w,St as x,Bt as y,Ht as z};
