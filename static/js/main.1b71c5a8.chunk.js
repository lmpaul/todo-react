(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(3),l=a.n(c),s=(a(11),a(1)),r=(a(13),a(4)),u=function(e){var t=e.setStatus,a=e.inputText,n=e.setInputText,c=e.todos,l=e.setTodos;return o.a.createElement("form",null,o.a.createElement("input",{onChange:function(e){n(e.target.value)},type:"text",className:"todo-input",value:a}),o.a.createElement("button",{onClick:function(e){e.preventDefault(),l([].concat(Object(r.a)(c),[{text:a,completed:!1,id:Math.floor(1e3*Math.random())}])),n("")},className:"todo-button",type:"submit"},o.a.createElement("i",{className:"fas fa-plus-square"})),o.a.createElement("div",{className:"select"},o.a.createElement("select",{onChange:function(e){t(e.target.value)},name:"todos",className:"filter-todo"},o.a.createElement("option",{value:"all"},"All"),o.a.createElement("option",{value:"completed"},"Completed"),o.a.createElement("option",{value:"uncompleted"},"Uncompleted"))))},i=a(5),d=function(e){var t=e.todos,a=e.setTodos,n=e.todo;return o.a.createElement("div",{className:"todo",id:n.id},o.a.createElement("li",{className:"todo-item ".concat(n.completed?"completed":"")},n.text),o.a.createElement("button",{onClick:function(){a(t.map(function(e){return e.id===n.id?Object(i.a)({},e,{completed:!e.completed}):e}))},className:"complete-btn"},o.a.createElement("i",{className:"fas fa-check"})),o.a.createElement("button",{onClick:function(e){a(t.filter(function(e){return e.id!==n.id}))},className:"trash-btn"},o.a.createElement("i",{className:"fas fa-trash"})))},m=function(e){var t=e.filteredTodos,a=e.todos,n=e.setTodos;return o.a.createElement("div",{className:"todo-container"},o.a.createElement("ul",{className:"todo-list"},t.map(function(e){return o.a.createElement(d,{todo:e,todos:a,setTodos:n,key:e.id})})))};var f=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),r=Object(s.a)(l,2),i=r[0],d=r[1],f=Object(n.useState)("All"),p=Object(s.a)(f,2),E=p[0],b=p[1],v=Object(n.useState)([]),g=Object(s.a)(v,2),N=g[0],T=g[1];Object(n.useEffect)(function(){S()},[]),Object(n.useEffect)(function(){!function(){switch(E){case"completed":T(i.filter(function(e){return e.completed}));break;case"uncompleted":T(i.filter(function(e){return!e.completed}));break;default:T(i)}}(),O()},[i,E]);var O=function(){localStorage.setItem("todos",JSON.stringify(i))},S=function(){null===localStorage.getItem("todos")?localStorage.setItem("todos",[]):d(JSON.parse(localStorage.getItem("todos")))};return o.a.createElement("div",{className:"App"},o.a.createElement("header",null,o.a.createElement("h1",null,"Paul's Todo List")),o.a.createElement(u,{setStatus:b,inputText:a,setInputText:c,todos:i,setTodos:d}),o.a.createElement(m,{filteredTodos:N,todos:i,setTodos:d}))},p=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,16)).then(function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),o(e),c(e),l(e)})};l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),p()},6:function(e,t,a){e.exports=a(15)}},[[6,3,2]]]);
//# sourceMappingURL=main.1b71c5a8.chunk.js.map