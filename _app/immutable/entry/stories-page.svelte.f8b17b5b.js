import{S as C,i as D,s as H,k as u,q as p,a as v,l as _,m,r as b,h as d,c as x,n as g,b as B,C as f,D as k,Q as S}from"../chunks/index.3f072410.js";function y(h,t,s){const c=h.slice();return c[2]=t[s],c}function q(h){let t,s,c=h[2].title+"",i,o,l=h[2].date+"",a,r;return{c(){t=u("a"),s=u("h2"),i=p(c),o=v(),a=p(l),r=v(),this.h()},l(e){t=_(e,"A",{class:!0,href:!0});var n=m(t);s=_(n,"H2",{});var E=m(s);i=b(E,c),E.forEach(d),o=x(n),a=b(n,l),r=x(n),n.forEach(d),this.h()},h(){g(t,"class","my-4 block"),g(t,"href",`stories/${h[2].slug}`)},m(e,n){B(e,t,n),f(t,s),f(s,i),f(t,o),f(t,a),f(t,r)},p:k,d(e){e&&d(t)}}}function w(h){let t,s,c,i,o=h[0],l=[];for(let a=0;a<o.length;a+=1)l[a]=q(y(h,o,a));return{c(){t=u("div"),s=u("h1"),c=p("Blog"),i=v();for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){t=_(a,"DIV",{class:!0});var r=m(t);s=_(r,"H1",{class:!0});var e=m(s);c=b(e,"Blog"),e.forEach(d),i=x(r);for(let n=0;n<l.length;n+=1)l[n].l(r);r.forEach(d),this.h()},h(){g(s,"class","mb-8"),g(t,"class","max-w-sm mx-auto")},m(a,r){B(a,t,r),f(t,s),f(s,c),f(t,i);for(let e=0;e<l.length;e+=1)l[e].m(t,null)},p(a,[r]){if(r&1){o=a[0];let e;for(e=0;e<o.length;e+=1){const n=y(a,o,e);l[e]?l[e].p(n,r):(l[e]=q(n),l[e].c(),l[e].m(t,null))}for(;e<l.length;e+=1)l[e].d(1);l.length=o.length}},i:k,o:k,d(a){a&&d(t),S(l,a)}}}function A(h,t,s){let{data:c}=t;const{posts:i}=c;return h.$$set=o=>{"data"in o&&s(1,c=o.data)},[i,c]}class P extends C{constructor(t){super(),D(this,t,A,w,H,{data:1})}}export{P as default};
