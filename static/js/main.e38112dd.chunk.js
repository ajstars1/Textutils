(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(5),r=n.n(s),l=(n(10),n(2)),o=(n(11),n(4)),i=n.n(o),b=n(0);function d(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(b.jsxs)("div",{className:"btn-group",role:"group","aria-label":"Basic mixed styles example",children:[Object(b.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){document.body.style.backgroundColor="darkred"}}),Object(b.jsx)("button",{type:"button",className:"btn btn-warning",onClick:function(){document.body.style.backgroundColor="darkgoldenrod"}}),Object(b.jsx)("button",{type:"button",className:"btn btn-success",onClick:function(){document.body.style.backgroundColor="darkslategray"}}),Object(b.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:function(){document.body.style.backgroundColor="darkgray"}}),Object(b.jsx)("button",{type:"button",className:"btn btn-info",onClick:function(){document.body.style.backgroundColor="darkcyan"}})]}),Object(b.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(b.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),Object(b.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Dark Mode"})]})]})]})})})}function u(e){var t,n=function(e){o(e.target.value)},c=Object(a.useState)(""),s=Object(l.a)(c,2),r=s[0],o=s[1],i=Object(a.useState)(""),d=Object(l.a)(i,2),u=d[0],j=d[1],m=Object(a.useState)(""),h=Object(l.a)(m,2),x=h[0],p=h[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{children:e.heading}),Object(b.jsx)("div",{className:"mb-3",children:Object(b.jsx)("textarea",{className:"form-control",id:"myBox",value:r,onChange:n,rows:"7"})}),Object(b.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var e=r.toUpperCase();j(e)},children:"Convert to UpperCase"}),Object(b.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var e=r.toLowerCase();j(e)},children:"Convert to LowerCase"}),Object(b.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){for(var e=0;e<r.split(" ").length;e++)var t=r.split(" ")[e].toLowerCase(),n=n+" "+t.charAt(0).toUpperCase()+t.slice(1);j(n.slice(10))},children:"All Words Capitalized"}),Object(b.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var e=r.split(/[ ]+/);j(e.join(" "))},children:"Remove ExtraSpaces"}),Object(b.jsx)("button",{onClick:function(){j(r),e.showAlert("Text is Reset","success")},children:"Reset"})]}),Object(b.jsxs)("div",{className:"container my-3",children:[Object(b.jsx)("h3",{children:"Text Repeater"}),Object(b.jsx)("input",{placeholder:"Enter the number",name:"repeatervalue",type:"number",value:x,onChange:function(e){p(e.target.value)}}),Object(b.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var e=r.repeat(x);j(e)},children:"Sumbit"})]}),Object(b.jsxs)("div",{className:"container my-3",children:[Object(b.jsx)("div",{className:"mb-3",children:Object(b.jsx)("textarea",{placeholder:"Enter Text Above",className:"form-control",id:"myBox2",value:u,onChange:n,rows:"7"})}),Object(b.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=document.getElementById("myBox2");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Text is Copied","success")},children:"Copy"}),Object(b.jsxs)("div",{className:"container my-3",children:[Object(b.jsx)("h3",{children:"Your Text Summary"}),Object(b.jsxs)("p",{children:[u.length>0?(t=u,(t=t.replace(/(^\s*)|(\s*$)/gi,"")).split(" ").length):"0"," words , ",u.length," characters"]}),Object(b.jsxs)("p",{children:[parseInt(.004*u.split(" ").length)," minutes ",u.length>0?.24*u.split(" ").length:"0"," seconds read"]})]})]})]})}function j(e){return e.alert&&Object(b.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),id:"alert",role:"alert",children:[Object(b.jsxs)("strong",{children:[function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type),"!"]})," ",e.alert.msg,Object(b.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]})}d.prototype={title:i.a.string.isRequired,about:i.a.string},d.defaultProps={title:"Title text here",about:"About text here"};var m=function(){var e=Object(a.useState)("light"),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(null),r=Object(l.a)(s,2),o=r[0],i=r[1],m=function(e,t){i({msg:e,type:t}),setTimeout((function(){i(null)}),3e3)};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d,{title:"TextUtiles",mode:n,toggleMode:function(){if("light"===n){c("dark"),document.body.style.backgroundColor="#191818";for(var e=document.getElementsByClassName("btn-group"),t=0;t<e.length;t+=1)e[t].style.visibility="visible";m("Dark Mode is Enabled","success")}else{c("light"),document.body.style.backgroundColor="white";for(var a=document.getElementsByClassName("btn-group"),s=0;s<a.length;s+=1)a[s].style.visibility="hidden";m("Light Mode is Enabled","success")}}}),Object(b.jsx)(j,{alert:o}),Object(b.jsx)("div",{className:"container my-3 text-".concat("light"===n?"dark":"light"),children:Object(b.jsx)(u,{showAlert:m,heading:"Enter the text to analyze below"})})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.e38112dd.chunk.js.map