"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[493],{291:function(r,t,n){n.d(t,{M1:function(){return x},TP:function(){return v},tx:function(){return l},wr:function(){return o},z1:function(){return f}});var e=n(861),u=n(757),a=n.n(u),c=n(243),s="https://api.themoviedb.org/3/",i="?api_key=457a0be892b7eaa9d80ace4b1a3dd2c6";function o(){return p.apply(this,arguments)}function p(){return(p=(0,e.Z)(a().mark((function r(){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,c.Z)(s+"trending/movie/day"+i);case 2:return t=r.sent,r.abrupt("return",t.data.results);case 4:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function f(r){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(a().mark((function r(t){var n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,c.Z)(s+"search/movie"+i+"&query="+t+"&page=1&include_adult=false");case 2:return n=r.sent,r.abrupt("return",n.data.results);case 4:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function v(r){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(a().mark((function r(t){var n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,c.Z)(s+"movie/"+t+i);case 2:return n=r.sent,r.abrupt("return",n.data);case 4:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function l(r){return w.apply(this,arguments)}function w(){return(w=(0,e.Z)(a().mark((function r(t){var n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,c.Z)(s+"movie/"+t+"/reviews"+i);case 2:return n=r.sent,r.abrupt("return",n.data.results);case 4:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function x(r){return m.apply(this,arguments)}function m(){return(m=(0,e.Z)(a().mark((function r(t){var n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,c.Z)(s+"movie/"+t+"/credits"+i);case 2:return n=r.sent,r.abrupt("return",n.data.cast);case 4:case"end":return r.stop()}}),r)})))).apply(this,arguments)}},493:function(r,t,n){n.r(t);var e=n(861),u=n(439),a=n(757),c=n.n(a),s=n(791),i=n(87),o=n(291),p=n(184);t.default=function(){var r=(0,s.useState)([]),t=(0,u.Z)(r,2),n=t[0],a=t[1];(0,s.useEffect)((function(){f()}),[]);var f=function(){var r=(0,e.Z)(c().mark((function r(){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,o.wr)();case 3:t=r.sent,a(t),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error("Error fetching trending movies:",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();return(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:"Trending Movies"}),n.map((function(r){return(0,p.jsx)("li",{children:(0,p.jsx)(i.rU,{to:"/movies/".concat(r.id),children:r.title})},r.id)}))]})}}}]);
//# sourceMappingURL=493.9e489fa3.chunk.js.map