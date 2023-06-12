"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[334,831,357],{291:function(e,t,n){n.d(t,{M1:function(){return x},TP:function(){return h},tx:function(){return f},wr:function(){return c},z1:function(){return l}});var r=n(165),i=n(861),s=n(243),a="https://api.themoviedb.org/3/",u="?api_key=457a0be892b7eaa9d80ace4b1a3dd2c6";function c(){return o.apply(this,arguments)}function o(){return(o=(0,i.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)(a+"trending/movie/day"+u);case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=(0,i.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)(a+"search/movie"+u+"&query="+t+"&page=1&include_adult=false");case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return p.apply(this,arguments)}function p(){return(p=(0,i.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)(a+"movie/"+t+u);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return v.apply(this,arguments)}function v(){return(v=(0,i.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)(a+"movie/"+t+"/reviews"+u);case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return j.apply(this,arguments)}function j(){return(j=(0,i.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)(a+"movie/"+t+"/credits"+u);case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},357:function(e,t,n){n.r(t);var r=n(439),i=n(791),s=n(689),a=n(291),u=n(184);t.default=function(){var e=(0,s.UO)().id,t=(0,i.useState)(null),n=(0,r.Z)(t,2),c=n[0],o=n[1];return(0,i.useEffect)((function(){var t;null===(t=(0,a.M1)(e))||void 0===t||t.then(o)}),[e]),{casts:c}&&(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:"Cast:"}),(0,u.jsx)("ul",{children:null===c||void 0===c?void 0:c.map((function(e){var t=e.id,n=e.profile_path,r=e.name,i=e.character;return(0,u.jsxs)("li",{children:[(0,u.jsx)("img",{width:100,src:"https://image.tmdb.org/t/p/w200".concat(n),alt:r}),(0,u.jsx)("p",{children:r}),(0,u.jsxs)("p",{children:["Character: ",i]})]},t)}))})]})}},334:function(e,t,n){n.r(t),n.d(t,{MovieDetails:function(){return p}});var r=n(165),i=n(861),s=n(439),a=n(791),u=n(689),c=n(87),o=n(291),l=n(357),d=n(831),h=n(184),p=function(){var e,t=(0,u.UO)().id,n=(0,a.useState)(null),p=(0,s.Z)(n,2),f=p[0],v=p[1],x=(0,a.useState)(!1),j=(0,s.Z)(x,2),Z=j[0],m=j[1],w=(0,a.useState)(!1),b=(0,s.Z)(w,2),g=b[0],y=b[1];(0,a.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.TP)(t);case 2:n=e.sent,v(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]);var k=(0,u.TH)(),_=(0,a.useRef)((null===(e=k.state)||void 0===e?void 0:e.from)||"/");if(!f)return(0,h.jsx)("p",{children:"Loading movie details..."});var C=f.title,S=f.overview,O=f.release_date,R=f.vote_average,U=f.poster_path;return(0,h.jsxs)("div",{children:[(0,h.jsx)(c.rU,{to:_.current,children:"Go back"}),(0,h.jsx)("h2",{children:C}),(0,h.jsx)("img",{width:200,src:"https://image.tmdb.org/t/p/w500".concat(U),alt:C}),(0,h.jsxs)("p",{children:["Overview: ",S]}),(0,h.jsxs)("p",{children:["Release Date: ",O]}),(0,h.jsxs)("p",{children:["Vote Average: ",R]}),(0,h.jsx)("p",{children:"Additional information:"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)("button",{onClick:function(){m(!Z),y(!1)},children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)("button",{onClick:function(){y(!g),m(!1)},children:"Reviews"})})]}),Z&&(0,h.jsx)("div",{children:(0,h.jsx)(l.default,{})}),g&&(0,h.jsx)("div",{children:(0,h.jsx)(d.default,{})})]})};t.default=p},831:function(e,t,n){n.r(t);var r=n(439),i=n(689),s=n(791),a=n(291),u=n(184);t.default=function(){var e=(0,i.UO)().id,t=(0,s.useState)(null),n=(0,r.Z)(t,2),c=n[0],o=n[1];return(0,s.useEffect)((function(){var t;null===(t=(0,a.tx)(e))||void 0===t||t.then(o)}),[e,null===c||void 0===c?void 0:c.length]),(0,u.jsxs)("div",{children:[(0,u.jsx)("h3",{children:"Reviews:"}),(0,u.jsx)("ul",{children:0===(null===c||void 0===c?void 0:c.length)?(0,u.jsx)("p",{children:"We don't have any reviews for this movies"}):null===c||void 0===c?void 0:c.map((function(e){var t=e.author,n=e.content,r=e.id;return(0,u.jsxs)("li",{children:[(0,u.jsxs)("h3",{children:["Author: ",t]}),(0,u.jsxs)("p",{children:[" ",n]}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{})]},r)}))})]})}}}]);
//# sourceMappingURL=334.da0e8054.chunk.js.map