import{S as B,i as D,s as H,k as u,q as p,a as v,l as _,m,r as x,h as d,c as b,n as g,b as w,D as f,E,R as S}from"../chunks/index.de9e07e7.js";function y(o,t,s){const r=o.slice();return r[2]=t[s],r}function q(o){let t,s,r=o[2].title+"",i,c,l=o[2].date+"",a,h;return{c(){t=u("a"),s=u("h2"),i=p(r),c=v(),a=p(l),h=v(),this.h()},l(e){t=_(e,"A",{class:!0,href:!0});var n=m(t);s=_(n,"H2",{});var k=m(s);i=x(k,r),k.forEach(d),c=b(n),a=x(n,l),h=b(n),n.forEach(d),this.h()},h(){g(t,"class","text-white hover:text-primary-500 my-4 block"),g(t,"href",`posts/${o[2].slug}`)},m(e,n){w(e,t,n),f(t,s),f(s,i),f(t,c),f(t,a),f(t,h)},p:E,d(e){e&&d(t)}}}function A(o){let t,s,r,i,c=o[0],l=[];for(let a=0;a<c.length;a+=1)l[a]=q(y(o,c,a));return{c(){t=u("div"),s=u("h1"),r=p("Blog"),i=v();for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){t=_(a,"DIV",{class:!0});var h=m(t);s=_(h,"H1",{class:!0});var e=m(s);r=x(e,"Blog"),e.forEach(d),i=b(h);for(let n=0;n<l.length;n+=1)l[n].l(h);h.forEach(d),this.h()},h(){g(s,"class","mb-8"),g(t,"class","max-w-sm mx-auto")},m(a,h){w(a,t,h),f(t,s),f(s,r),f(t,i);for(let e=0;e<l.length;e+=1)l[e].m(t,null)},p(a,[h]){if(h&1){c=a[0];let e;for(e=0;e<c.length;e+=1){const n=y(a,c,e);l[e]?l[e].p(n,h):(l[e]=q(n),l[e].c(),l[e].m(t,null))}for(;e<l.length;e+=1)l[e].d(1);l.length=c.length}},i:E,o:E,d(a){a&&d(t),S(l,a)}}}function C(o,t,s){let{data:r}=t;const{posts:i}=r;return o.$$set=c=>{"data"in c&&s(1,r=c.data)},[i,r]}class P extends B{constructor(t){super(),D(this,t,C,A,H,{data:1})}}export{P as default};
