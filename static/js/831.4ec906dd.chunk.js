"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[831],{291:function(t,n,r){r.d(n,{M1:function(){return x},TP:function(){return l},tx:function(){return h},wr:function(){return c},z1:function(){return p}});var e=r(165),u=r(861),a=r(243),i="https://api.themoviedb.org/3/",s="?api_key=457a0be892b7eaa9d80ace4b1a3dd2c6";function c(){return o.apply(this,arguments)}function o(){return(o=(0,u.Z)((0,e.Z)().mark((function t(){var n;return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,a.Z)(i+"trending/movie/day"+s);case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,u.Z)((0,e.Z)().mark((function t(n){var r;return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,a.Z)(i+"search/movie"+s+"&query="+n+"&page=1&include_adult=false");case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,u.Z)((0,e.Z)().mark((function t(n){var r;return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,a.Z)(i+"movie/"+n+s);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=(0,u.Z)((0,e.Z)().mark((function t(n){var r;return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,a.Z)(i+"movie/"+n+"/reviews"+s);case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return Z.apply(this,arguments)}function Z(){return(Z=(0,u.Z)((0,e.Z)().mark((function t(n){var r;return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,a.Z)(i+"movie/"+n+"/credits"+s);case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},831:function(t,n,r){r.r(n);var e=r(439),u=r(689),a=r(791),i=r(291),s=r(184);n.default=function(){var t=(0,u.UO)().id,n=(0,a.useState)(null),r=(0,e.Z)(n,2),c=r[0],o=r[1];return(0,a.useEffect)((function(){var n;null===(n=(0,i.tx)(t))||void 0===n||n.then(o)}),[t,null===c||void 0===c?void 0:c.length]),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Reviews:"}),(0,s.jsx)("ul",{children:0===(null===c||void 0===c?void 0:c.length)?(0,s.jsx)("p",{children:"We don't have any reviews for this movies"}):null===c||void 0===c?void 0:c.map((function(t){var n=t.author,r=t.content,e=t.id;return(0,s.jsxs)("li",{children:[(0,s.jsxs)("h3",{children:["Author: ",n]}),(0,s.jsxs)("p",{children:[" ",r]}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{})]},e)}))})]})}}}]);
//# sourceMappingURL=831.4ec906dd.chunk.js.map