(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,a=n(8),s=n.n(a),l=n(6),o=n(7),i=(n(13),n(14),n(1)),r=n(4),u=n.n(r),b=n(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.alphabetically="alphabetically",t.length="length",t.default=""}(c||(c={}));var j=c.alphabetically,d=c.length;var f=function(){var t=Object(i.useState)(c.default),e=Object(l.a)(t,2),n=e[0],a=e[1],s=Object(i.useState)(!1),r=Object(l.a)(s,2),f=r[0],g=r[1],p=function(t,e,n){var a=Object(o.a)(t);switch(e){case c.alphabetically:a.sort((function(t,e){return t.localeCompare(e)}));break;case c.length:a.sort((function(t,e){return t.length-e.length}));break;default:a=Object(o.a)(t)}return n&&a.reverse(),a}(h,n,f);return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:u()("button","is-info",{"is-light":j!==n}),onClick:function(){return a(j)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:u()("button","is-success",{"is-light":d!==n}),onClick:function(){return a(d)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:u()("button","is-warning",{"is-light":!f}),onClick:function(){return g((function(t){return!t}))},children:"Reverse"}),(f||""!==n)&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){g(!1),a(c.default)},children:"Reset"})]}),Object(b.jsx)("ul",{children:p.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t})}))})]})};s.a.render(Object(b.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a93499f5.chunk.js.map