"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[7],{291:function(t,n,r){r.d(n,{M1:function(){return Z},TP:function(){return h},tx:function(){return l},wr:function(){return s},z1:function(){return p}});var e=r(165),u=r(861),a=r(243),c="https://api.themoviedb.org/3/",i="?api_key=457a0be892b7eaa9d80ace4b1a3dd2c6";function s(){return o.apply(this,arguments)}function o(){return(o=(0,u.Z)((0,e.Z)().mark((function t(){var n;return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,a.Z)(c+"trending/movie/day"+i);case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,u.Z)((0,e.Z)().mark((function t(n){var r;return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,a.Z)(c+"search/movie"+i+"&query="+n+"&page=1&include_adult=false");case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,u.Z)((0,e.Z)().mark((function t(n){var r;return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,a.Z)(c+"movie/"+n+i);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return v.apply(this,arguments)}function v(){return(v=(0,u.Z)((0,e.Z)().mark((function t(n){var r;return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,a.Z)(c+"movie/"+n+"/reviews"+i);case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Z(t){return x.apply(this,arguments)}function x(){return(x=(0,u.Z)((0,e.Z)().mark((function t(n){var r;return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,a.Z)(c+"movie/"+n+"/credits"+i);case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},7:function(t,n,r){r.r(n),r.d(n,{Movies:function(){return p}});var e=r(165),u=r(861),a=r(439),c=r(791),i=r(87),s=r(291),o=r(184),p=function(){var t=(0,c.useState)(""),n=(0,a.Z)(t,2),r=n[0],p=n[1],f=(0,c.useState)([]),h=(0,a.Z)(f,2),d=h[0],l=h[1],v=function(){var t=(0,u.Z)((0,e.Z)().mark((function t(){var n;return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.z1)(r);case 2:n=t.sent,l(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:"Search Movies"}),(0,o.jsx)("input",{type:"text",value:r,onChange:function(t){p(t.target.value)}}),(0,o.jsx)("button",{onClick:v,children:"Search"}),(0,o.jsx)("ul",{children:d.map((function(t){return(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"/movies/".concat(t.id),children:t.title})},t.id)}))})]})};n.default=p}}]);
//# sourceMappingURL=7.e39ec7c4.chunk.js.map