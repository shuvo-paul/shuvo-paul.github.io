import{S,i as q,s as x,k as f,q as _,a as C,l as d,m as g,r as h,h as u,c as P,b as m,C as v,u as $,D as E,P as k}from"../chunks/index.9ffa0b22.js";import{s as y}from"../chunks/singletons.26f298f3.js";const D=()=>{const s=y;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},H={subscribe(s){return D().page.subscribe(s)}};function j(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",l;return{c(){t=f("h1"),o=_(r),n=C(),i=f("p"),l=_(c)},l(e){t=d(e,"H1",{});var a=g(t);o=h(a,r),a.forEach(u),n=P(e),i=d(e,"P",{});var p=g(i);l=h(p,c),p.forEach(u)},m(e,a){m(e,t,a),v(t,o),m(e,n,a),m(e,i,a),v(i,l)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&$(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&$(l,c)},i:E,o:E,d(e){e&&u(t),e&&u(n),e&&u(i)}}}function w(s,t,r){let o;return k(s,H,n=>r(0,o=n)),[o]}let B=class extends S{constructor(t){super(),q(this,t,w,j,x,{})}};export{B as default};