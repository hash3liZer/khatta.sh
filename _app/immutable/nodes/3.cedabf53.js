import{U as Ce,S as ee,i as te,s as le,k as v,l as y,m as p,h as m,n as h,I as ve,b as C,V as Ee,g as k,v as x,f as $,d as w,F as Ie,a as N,c as F,p as U,D as g,e as j,W as ye,N as be,O as pe,P as ke,Q as we,X as We,Y as De,Z as Me,L as Ve,M as Ae,_ as He,$ as Ne,E as M,q as z,r as B,y as X,z as Y,A as Z,B as J,T as Fe,w as ie,a0 as ae,a1 as re}from"../chunks/index.4118b084.js";import{c as Se,a as oe,t as je}from"../chunks/title.c99ea2a0.js";import{F as qe,H as Pe}from"../chunks/footer.b6ec2589.js";const ze=[];function Be(a,{from:e,to:t},l={}){const f=getComputedStyle(a),c=f.transform==="none"?"":f.transform,[u,n]=f.transformOrigin.split(" ").map(parseFloat),s=e.left+e.width*u/t.width-(t.left+u),o=e.top+e.height*n/t.height-(t.top+n),{delay:i=0,duration:r=E=>Math.sqrt(E)*120,easing:d=Se}=l;return{delay:i,duration:Ce(r)?r(Math.sqrt(s*s+o*o)):r,easing:d,css:(E,b)=>{const I=b*s,q=b*o,V=E+b*e.width/t.width,S=E+b*e.height/t.height;return`transform: ${c} translate(${I}px, ${q}px) scale(${V}, ${S});`}}}function ce(a,e,t){const l=a.slice();return l[18]=e[t],l}function fe(a,e,t){const l=a.slice();return l[21]=e[t][0],l[22]=e[t][1],l}const Ke=a=>({idx:a&1024,item:a&1024}),ue=a=>({idx:a[22],item:a[21]});function _e(a,e,t){const l=a.slice();return l[21]=e[t][0],l[22]=e[t][1],l}const Oe=a=>({idx:a&1024,item:a&1024}),de=a=>({idx:a[22],item:a[21]});function Te(a){let e=[],t=new Map,l,f,c=a[18];const u=n=>n[8](n[21]);for(let n=0;n<c.length;n+=1){let s=fe(a,c,n),o=u(s);t.set(o,e[n]=he(o,s))}return{c(){for(let n=0;n<e.length;n+=1)e[n].c();l=j()},l(n){for(let s=0;s<e.length;s+=1)e[s].l(n);l=j()},m(n,s){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(n,s);C(n,l,s),f=!0},p(n,s){s&34048&&(c=n[18],x(),e=ye(e,s,u,1,n,c,t,l.parentNode,He,he,l,fe),$())},i(n){if(!f){for(let s=0;s<c.length;s+=1)k(e[s]);f=!0}},o(n){for(let s=0;s<e.length;s+=1)w(e[s]);f=!1},d(n){for(let s=0;s<e.length;s+=1)e[s].d(n);n&&m(l)}}}function Le(a){let e=[],t=new Map,l,f,c=a[18];const u=n=>n[8](n[21]);for(let n=0;n<c.length;n+=1){let s=_e(a,c,n),o=u(s);t.set(o,e[n]=me(o,s))}return{c(){for(let n=0;n<e.length;n+=1)e[n].c();l=j()},l(n){for(let s=0;s<e.length;s+=1)e[s].l(n);l=j()},m(n,s){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(n,s);C(n,l,s),f=!0},p(n,s){if(s&34112){c=n[18],x();for(let o=0;o<e.length;o+=1)e[o].r();e=ye(e,s,u,1,n,c,t,l.parentNode,Ne,me,l,_e);for(let o=0;o<e.length;o+=1)e[o].a();$()}},i(n){if(!f){for(let s=0;s<c.length;s+=1)k(e[s]);f=!0}},o(n){for(let s=0;s<e.length;s+=1)w(e[s]);f=!1},d(n){for(let s=0;s<e.length;s+=1)e[s].d(n);n&&m(l)}}}function he(a,e){let t,l;const f=e[16].default,c=be(f,e,e[15],ue);return{key:a,first:null,c(){t=j(),c&&c.c(),this.h()},l(u){t=j(),c&&c.l(u),this.h()},h(){this.first=t},m(u,n){C(u,t,n),c&&c.m(u,n),l=!0},p(u,n){e=u,c&&c.p&&(!l||n&33792)&&pe(c,f,e,e[15],l?we(f,e[15],n,Ke):ke(e[15]),ue)},i(u){l||(k(c,u),l=!0)},o(u){w(c,u),l=!1},d(u){u&&m(t),c&&c.d(u)}}}function me(a,e){let t,l,f,c,u,n=M,s;const o=e[16].default,i=be(o,e,e[15],de);return{key:a,first:null,c(){t=v("div"),i&&i.c(),l=N(),this.h()},l(r){t=y(r,"DIV",{class:!0});var d=p(t);i&&i.l(d),l=F(d),d.forEach(m),this.h()},h(){h(t,"class","svelte-b2jtby"),this.first=t},m(r,d){C(r,t,d),i&&i.m(t,null),g(t,l),s=!0},p(r,d){e=r,i&&i.p&&(!s||d&33792)&&pe(i,o,e,e[15],s?we(o,e[15],d,Oe):ke(e[15]),de)},r(){u=t.getBoundingClientRect()},f(){We(t),n(),De(t,u)},a(){n(),n=Me(t,u,Be,{duration:e[6]})},i(r){s||(k(i,r),r&&ve(()=>{s&&(c&&c.end(1),f=Ve(t,oe,{delay:100,duration:e[6]}),f.start())}),s=!0)},o(r){w(i,r),f&&f.invalidate(),r&&(c=Ae(t,oe,{delay:0,duration:e[6]})),s=!1},d(r){r&&m(t),i&&i.d(r),r&&c&&c.end()}}}function ge(a){let e,t,l,f,c,u;const n=[Le,Te],s=[];function o(i,r){return i[4]?0:1}return t=o(a),l=s[t]=n[t](a),{c(){e=v("div"),l.c(),f=N(),this.h()},l(i){e=y(i,"DIV",{class:!0,style:!0});var r=p(e);l.l(r),f=F(r),r.forEach(m),this.h()},h(){h(e,"class",c="col "+a[7]+" svelte-b2jtby"),U(e,"gap",a[3]+"px"),U(e,"max-width",a[2]+"px")},m(i,r){C(i,e,r),s[t].m(e,null),g(e,f),u=!0},p(i,r){let d=t;t=o(i),t===d?s[t].p(i,r):(x(),w(s[d],1,1,()=>{s[d]=null}),$(),l=s[t],l?l.p(i,r):(l=s[t]=n[t](i),l.c()),k(l,1),l.m(e,f)),(!u||r&128&&c!==(c="col "+i[7]+" svelte-b2jtby"))&&h(e,"class",c),(!u||r&8)&&U(e,"gap",i[3]+"px"),(!u||r&4)&&U(e,"max-width",i[2]+"px")},i(i){u||(k(l),u=!0)},o(i){w(l),u=!1},d(i){i&&m(e),s[t].d()}}}function Re(a){let e,t,l,f,c,u=a[10],n=[];for(let o=0;o<u.length;o+=1)n[o]=ge(ce(a,u,o));const s=o=>w(n[o],1,1,()=>{n[o]=null});return{c(){e=v("div");for(let o=0;o<n.length;o+=1)n[o].c();this.h()},l(o){e=y(o,"DIV",{class:!0,style:!0});var i=p(e);for(let r=0;r<n.length;r+=1)n[r].l(i);i.forEach(m),this.h()},h(){h(e,"class",t="masonry "+a[9]+" svelte-b2jtby"),h(e,"style",l="gap: "+a[3]+"px; "+a[5]),ve(()=>a[17].call(e))},m(o,i){C(o,e,i);for(let r=0;r<n.length;r+=1)n[r]&&n[r].m(e,null);f=Ee(e,a[17].bind(e)),c=!0},p(o,[i]){if(i&34012){u=o[10];let r;for(r=0;r<u.length;r+=1){const d=ce(o,u,r);n[r]?(n[r].p(d,i),k(n[r],1)):(n[r]=ge(d),n[r].c(),k(n[r],1),n[r].m(e,null))}for(x(),r=u.length;r<n.length;r+=1)s(r);$()}(!c||i&512&&t!==(t="masonry "+o[9]+" svelte-b2jtby"))&&h(e,"class",t),(!c||i&40&&l!==(l="gap: "+o[3]+"px; "+o[5]))&&h(e,"style",l)},i(o){if(!c){for(let i=0;i<u.length;i+=1)k(n[i]);c=!0}},o(o){n=n.filter(Boolean);for(let i=0;i<n.length;i+=1)w(n[i]);c=!1},d(o){o&&m(e),Ie(n,o),f()}}}function Ge(a,e,t){let l,f,{$$slots:c={},$$scope:u}=e,{items:n}=e,{minColWidth:s=330}=e,{maxColWidth:o=500}=e,{gap:i=20}=e,{masonryWidth:r=0}=e,{masonryHeight:d=0}=e,{animate:E=!0}=e,{style:b=""}=e,{duration:I=200}=e,{columnClass:q=""}=e,{idKey:V="id"}=e,{getId:S=_=>typeof _=="string"||typeof _=="number"?_:_[V]}=e,{class:A=""}=e;function T(){r=this.clientWidth,d=this.clientHeight,t(0,r),t(1,d)}return a.$$set=_=>{"items"in _&&t(11,n=_.items),"minColWidth"in _&&t(12,s=_.minColWidth),"maxColWidth"in _&&t(2,o=_.maxColWidth),"gap"in _&&t(3,i=_.gap),"masonryWidth"in _&&t(0,r=_.masonryWidth),"masonryHeight"in _&&t(1,d=_.masonryHeight),"animate"in _&&t(4,E=_.animate),"style"in _&&t(5,b=_.style),"duration"in _&&t(6,I=_.duration),"columnClass"in _&&t(7,q=_.columnClass),"idKey"in _&&t(13,V=_.idKey),"getId"in _&&t(8,S=_.getId),"class"in _&&t(9,A=_.class),"$$scope"in _&&t(15,u=_.$$scope)},a.$$.update=()=>{a.$$.dirty&6153&&t(14,l=Math.min(n.length,Math.floor(r/(s+i))||1)),a.$$.dirty&18432&&t(10,f=n.reduce((_,K,L)=>(_[L%_.length].push([K,L]),_),Array(l).fill(null).map(()=>[])))},[r,d,o,i,E,b,I,q,S,A,f,n,s,V,l,u,c,T]}class Qe extends ee{constructor(e){super(),te(this,e,Ge,Re,le,{items:11,minColWidth:12,maxColWidth:2,gap:3,masonryWidth:0,masonryHeight:1,animate:4,style:5,duration:6,columnClass:7,idKey:13,getId:8,class:9})}}function Ue(a){let e,t,l=(a[0].name??"")+"",f,c,u,n,s=(a[0].title??"")+"",o,i,r,d,E,b,I,q=(a[0].name??"")+"",V,S,A,T=a[0].title+"",_,K;function L(W,D){return W[0].avatar?Je:Ze}let O=L(a)(a),H=a[0].descr&&xe(a);return{c(){e=v("a"),t=v("div"),f=z(l),c=N(),u=v("br"),n=N(),o=z(s),i=N(),r=v("div"),d=v("div"),O.c(),E=N(),b=v("div"),I=v("span"),V=z(q),S=N(),A=v("span"),_=z(T),K=N(),H&&H.c(),this.h()},l(W){e=y(W,"A",{id:!0,rel:!0,href:!0,class:!0});var D=p(e);t=y(D,"DIV",{class:!0});var P=p(t);f=B(P,l),c=F(P),u=y(P,"BR",{}),n=F(P),o=B(P,s),P.forEach(m),i=F(D),r=y(D,"DIV",{class:!0});var R=p(r);d=y(R,"DIV",{class:!0});var G=p(d);O.l(G),E=F(G),b=y(G,"DIV",{class:!0});var Q=p(b);I=y(Q,"SPAN",{class:!0});var ne=p(I);V=B(ne,q),ne.forEach(m),S=F(Q),A=y(Q,"SPAN",{class:!0});var se=p(A);_=B(se,T),se.forEach(m),Q.forEach(m),G.forEach(m),K=F(R),H&&H.l(R),R.forEach(m),D.forEach(m),this.h()},h(){h(t,"class","absolute text-4xl font-bold opacity-5 rotate-6 leading-tight top-4"),h(I,"class","text-right p-name"),h(A,"class","opacity-50 text-right"),h(b,"class","card-title flex-col gap-0 flex-1 items-end"),h(d,"class","flex items-center gap-4"),h(r,"class","card-body p-4"),h(e,"id",a[0].id),h(e,"rel",a[0].rel),h(e,"href",a[0].link),h(e,"class","card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow h-card u-url")},m(W,D){C(W,e,D),g(e,t),g(t,f),g(t,c),g(t,u),g(t,n),g(t,o),g(e,i),g(e,r),g(r,d),O.m(d,null),g(d,E),g(d,b),g(b,I),g(I,V),g(b,S),g(b,A),g(A,_),g(r,K),H&&H.m(r,null)},p(W,D){O.p(W,D),W[0].descr&&H.p(W,D)},i:M,o:M,d(W){W&&m(e),O.d(),H&&H.d()}}}function Xe(a){let e,t=a[0].html+"";return{c(){e=v("a"),this.h()},l(l){e=y(l,"A",{id:!0,rel:!0,href:!0,class:!0});var f=p(e);f.forEach(m),this.h()},h(){h(e,"id",a[0].id),h(e,"rel",a[0].rel),h(e,"href",a[0].link),h(e,"class","h-card u-url")},m(l,f){C(l,e,f),e.innerHTML=t},p:M,i:M,o:M,d(l){l&&m(e)}}}function Ye(a){let e,t;return e=new qe({props:{rounded:!0,class:"p-4 md:p-8"}}),{c(){X(e.$$.fragment)},l(l){Y(e.$$.fragment,l)},m(l,f){Z(e,l,f),t=!0},p:M,i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){w(e.$$.fragment,l),t=!1},d(l){J(e,l)}}}function Ze(a){let e,t,l,f=(a[0].name??a[0].title).charAt(0)+"",c;return{c(){e=v("div"),t=v("div"),l=v("span"),c=z(f),this.h()},l(u){e=y(u,"DIV",{class:!0});var n=p(e);t=y(n,"DIV",{class:!0});var s=p(t);l=y(s,"SPAN",{class:!0});var o=p(l);c=B(o,f),o.forEach(m),s.forEach(m),n.forEach(m),this.h()},h(){var u,n;h(l,"class","text-3xl"),h(t,"class",(((u=a[0].class)==null?void 0:u.img)??"bg-neutral-focus text-neutral-content shadow-inner rounded-xl")+" w-16"),h(e,"class","avatar "+((n=a[0].class)==null?void 0:n.avatar)+" placeholder mb-auto")},m(u,n){C(u,e,n),g(e,t),g(t,l),g(l,c)},p:M,d(u){u&&m(e)}}}function Je(a){let e,t,l;return{c(){e=v("div"),t=v("img"),this.h()},l(f){e=y(f,"DIV",{class:!0});var c=p(e);t=y(c,"IMG",{class:!0,src:!0,alt:!0}),c.forEach(m),this.h()},h(){var f,c;h(t,"class",(((f=a[0].class)==null?void 0:f.img)??"rounded-xl")+" u-photo"),Fe(t.src,l=a[0].avatar)||h(t,"src",l),h(t,"alt",a[0].title),h(e,"class","avatar "+((c=a[0].class)==null?void 0:c.avatar)+" shrink-0 w-16 mb-auto")},m(f,c){C(f,e,c),g(e,t)},p:M,d(f){f&&m(e)}}}function xe(a){let e,t=a[0].descr+"",l;return{c(){e=v("div"),l=z(t),this.h()},l(f){e=y(f,"DIV",{class:!0});var c=p(e);l=B(c,t),c.forEach(m),this.h()},h(){h(e,"class","prose opacity-70 p-note")},m(f,c){C(f,e,c),g(e,l)},p:M,d(f){f&&m(e)}}}function $e(a){let e,t,l,f;const c=[Ye,Xe,Ue],u=[];function n(s,o){return s[0].id==="footer"?0:s[0].html?1:2}return e=n(a),t=u[e]=c[e](a),{c(){t.c(),l=j()},l(s){t.l(s),l=j()},m(s,o){u[e].m(s,o),C(s,l,o),f=!0},p(s,[o]){t.p(s,o)},i(s){f||(k(t),f=!0)},o(s){w(t),f=!1},d(s){u[e].d(s),s&&m(l)}}}function et(a,e,t){let{item:l}=e,f=l;return a.$$set=c=>{"item"in c&&t(1,l=c.item)},[f,l]}class tt extends ee{constructor(e){super(),te(this,e,et,$e,le,{item:1})}}function lt(a){let e,t;return e=new tt({props:{item:a[7]}}),{c(){X(e.$$.fragment)},l(l){Y(e.$$.fragment,l)},m(l,f){Z(e,l,f),t=!0},p(l,f){const c={};f&128&&(c.item=l[7]),e.$set(c)},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){w(e.$$.fragment,l),t=!1},d(l){J(e,l)}}}function nt(a){let e,t,l,f,c,u;e=new Pe({props:{page:{title:"Friends",path:"/friends"}}});function n(i){a[3](i)}function s(i){a[4](i)}let o={items:a[2],minColWidth:384,maxColWidth:384,gap:32,class:"mx-4 sm:mx-8 md:my-4 lg:mx-16 lg:my-8 xl:mx-32 xl:my-16",$$slots:{default:[lt,({item:i})=>({7:i}),({item:i})=>i?128:0]},$$scope:{ctx:a}};return a[0]!==void 0&&(o.width=a[0]),a[1]!==void 0&&(o.height=a[1]),l=new Qe({props:o}),ie.push(()=>ae(l,"width",n)),ie.push(()=>ae(l,"height",s)),{c(){X(e.$$.fragment),t=N(),X(l.$$.fragment)},l(i){Y(e.$$.fragment,i),t=F(i),Y(l.$$.fragment,i)},m(i,r){Z(e,i,r),C(i,t,r),Z(l,i,r),u=!0},p(i,[r]){const d={};r&384&&(d.$$scope={dirty:r,ctx:i}),!f&&r&1&&(f=!0,d.width=i[0],re(()=>f=!1)),!c&&r&2&&(c=!0,d.height=i[1],re(()=>c=!1)),l.$set(d)},i(i){u||(k(e.$$.fragment,i),k(l.$$.fragment,i),u=!0)},o(i){w(e.$$.fragment,i),w(l.$$.fragment,i),u=!1},d(i){J(e,i),i&&m(t),J(l,i)}}}function st(a,e,t){const l=Math.random();let c=[...((i,r=0,d=i.length)=>{for(;d;)r=l*d--|0,[i[d],i[r]]=[i[r],i[d]];return i})(ze),{id:"footer"}],u,n;je.set("");function s(i){u=i,t(0,u)}function o(i){n=i,t(1,n)}return[u,n,c,s,o]}class ct extends ee{constructor(e){super(),te(this,e,st,nt,le,{})}}export{ct as component};
