(this.webpackJsonpapp1=this.webpackJsonpapp1||[]).push([[0],{16:function(t,e,a){},17:function(t,e,a){"use strict";a.r(e);var s=a(2),n=a.n(s),c=a(6),i=a.n(c),r=a(1),o=a(3),l=a(7),d=a(8),u=a(10),j=a(9),k=a(4),f=a.n(k),h="Enter",b={ALL:"All",ACTIVE:"Active",COMPLETED:"Completed"},O=a(0),p=function(t){var e=t.changeFilter,a=t.filter;return Object(O.jsx)("ul",{className:"filters",children:Object.values(b).map((function(t){var s=f()({selected:t===a});return Object(O.jsx)("li",{children:Object(O.jsx)("button",{className:s,onClick:function(){return e(t)},children:t})},t)}))})},m=function(t){var e=t.changeFilter,a=t.filter,s=t.deleteCompletedtask,n=t.count;return Object(O.jsxs)("footer",{className:"footer",children:[Object(O.jsxs)("span",{className:"todo-count",children:[n," items left"]}),Object(O.jsx)(p,{changeFilter:e,filter:a}),Object(O.jsx)("button",{className:"clear-completed",onClick:s,children:"Clear completed"})]})},T=function(t){var e=t.addTask;return Object(O.jsxs)("header",{className:"header",children:[Object(O.jsx)("h1",{children:"todos"}),Object(O.jsx)("input",{className:"new-todo",placeholder:"What needs to be done?",autoFocus:!0,onKeyDown:function(t){t.key===h&&(e(t.target.value.trim()),t.target.value="")}})]})},v=a(19),g=function(t){var e=t.id,a=t.description,s=t.created,n=t.editing,c=t.done,i=t.changeStatusTask,r=t.deleteTask,o=t.startEditTask,l=t.finishEditTask,d=f()({completed:c&&!n,active:!c&&!n,editing:n});var u=s;return u instanceof Date||(u=new Date(u)),Object(O.jsxs)("li",{className:d,children:[Object(O.jsxs)("div",{className:"view",children:[Object(O.jsx)("input",{className:"toggle",type:"checkbox",onClick:function(){return i(e)},defaultChecked:c}),Object(O.jsxs)("label",{children:[Object(O.jsx)("span",{className:"description",children:a}),Object(O.jsxs)("span",{className:"created",children:["created: ",Object(v.a)(u,{includeSeconds:!0})]})]}),Object(O.jsx)("button",{className:"icon icon-edit",onClick:function(){return o(e)}}),Object(O.jsx)("button",{className:"icon icon-destroy",onClick:function(){return r(e)}})]}),n&&Object(O.jsx)("input",{type:"text",className:"edit",defaultValue:a,onKeyDown:function(t){t.key===h&&(l(e,t.target.value.trim()),t.target.value="")},autoFocus:!0,onBlur:function(){return l(e,a)}})]})},x=function(t){var e=t.tasks,a=t.changeStatusTask,s=t.deleteTask,n=t.startEditTask,c=t.finishEditTask;return Object(O.jsx)("ul",{className:"todo-list",children:e.map((function(t){var e=t.id;return Object(O.jsx)(g,Object(r.a)(Object(r.a)({},t),{},{changeStatusTask:a,deleteTask:s,startEditTask:n,finishEditTask:c}),e)}))})},N=function(t){return"".concat(t,"_").concat((new Date).getTime())},S=function(t){Object(u.a)(a,t);var e=Object(j.a)(a);function a(){var t;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={tasks:[],filterTask:"All"},t.changeStatusTask=function(e){var a=Object(o.a)(t.state.tasks).map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{done:!t.done}):t}));t.setState({tasks:a})},t.deleteTask=function(e){var a=Object(o.a)(t.state.tasks).filter((function(t){return t.id!==e}));t.setState({tasks:a})},t.deleteCompletedtask=function(){var e=Object(o.a)(t.state.tasks).filter((function(t){return!t.done}));t.setState({tasks:e})},t.addTask=function(e){var a={editing:!1,id:N(e),created:new Date,description:e,done:!1};t.setState({tasks:[].concat(Object(o.a)(t.state.tasks),[a])})},t.startEditTask=function(e){var a=Object(o.a)(t.state.tasks).map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{editing:!0}):t}));t.setState({tasks:a})},t.finishEditTask=function(e,a){var s=Object(o.a)(t.state.tasks).map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{editing:!1,description:a}):t}));t.setState({tasks:s})},t.renderList=function(){switch(t.state.filterTask){case"All":return t.state.tasks;case"Active":return t.state.tasks.filter((function(t){return!t.done}));case"Completed":return t.state.tasks.filter((function(t){return t.done}));default:return t.state.tasks}},t.changeFilter=function(e){t.setState({filterTask:e})},t}return Object(d.a)(a,[{key:"componentDidUpdate",value:function(){localStorage.setItem("data",JSON.stringify(this.state))}},{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("data"));this.setState(Object(r.a)({},t))}},{key:"render",value:function(){var t=this.renderList(),e=this.state.tasks.filter((function(t){return!t.done})).length;return Object(O.jsxs)("section",{className:"todoapp",children:[Object(O.jsx)(T,{addTask:this.addTask}),Object(O.jsxs)("section",{className:"main",children:[t.length>0?Object(O.jsx)(x,{startEditTask:this.startEditTask,finishEditTask:this.finishEditTask,tasks:t,changeStatusTask:this.changeStatusTask,deleteTask:this.deleteTask}):Object(O.jsx)("h2",{children:"there's no todos yet"}),Object(O.jsx)(m,{changeFilter:this.changeFilter,filter:this.state.filterTask,deleteCompletedtask:this.deleteCompletedtask,count:e})]})]})}}]),a}(n.a.Component);a(16);i.a.render(Object(O.jsx)(S,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.33d15c32.chunk.js.map