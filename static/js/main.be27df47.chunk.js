(this.webpackJsonpcentinel=this.webpackJsonpcentinel||[]).push([[0],{22:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(2),s=n.n(a),r=n(15),i=n.n(r),o=(n(22),n(3)),j=n.n(o),l=n(5),u=n(4),d=function(e){var t=e.posts;if(e.loading)return Object(c.jsx)("h2",{children:"Loading ..."});var n=function(){var e=Object(l.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:alert("Servicio no disponible ...");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsx)("table",{className:"table",children:t.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.id}),Object(c.jsx)("td",{children:e.eventBody.symbol}),Object(c.jsx)("td",{children:e.labels}),Object(c.jsx)("td",{children:e.timestamp}),Object(c.jsx)("td",{children:e.status}),Object(c.jsx)("td",{children:e.checked}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{type:"checkbox",checked:!0,"data-toggle":"toggle",onClick:n})})]})}))})},b=function(e){for(var t=e.postsPerPage,n=e.totalPosts,a=e.paginate,s=[],r=1;r<=Math.ceil(n/t);r++)s.push(r);return Object(c.jsx)("nav",{children:Object(c.jsx)("ul",{className:"pagination",children:s.map((function(e){return Object(c.jsx)("li",{className:"page-item",children:Object(c.jsx)("a",{onClick:function(){return a(e)},href:"!#",className:"page-link",children:e})},e)}))})})},h=n(16),p=n.n(h),O=(n(41),function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(!1),i=Object(u.a)(r,2),o=i[0],h=i[1],O=Object(a.useState)(1),f=Object(u.a)(O,2),x=f[0],g=f[1],m=Object(a.useState)(10),v=Object(u.a)(m,1)[0];Object(a.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,p.a.get("./data.json");case 3:t=e.sent,console.log(t.data.events),s(t.data.events),h(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var k=x*v,P=k-v,y=n.slice(P,k);return Object(c.jsxs)("div",{className:"container mt-5",children:[Object(c.jsx)("h1",{className:"text-primary mb-3",children:"Centinel App"}),Object(c.jsx)(d,{posts:y,loading:o}),Object(c.jsx)(b,{postsPerPage:v,totalPosts:n.length,paginate:function(e){return g(e)}})]})}),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),f()}},[[42,1,2]]]);
//# sourceMappingURL=main.be27df47.chunk.js.map