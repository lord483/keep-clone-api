(this["webpackJsonpkeep-clone"]=this["webpackJsonpkeep-clone"]||[]).push([[0],{32:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(24),s=n.n(r),i=(n(32),n(17)),o=n(4),u=n(3),l=n(5),d=n.n(l),j=n(7),b=n(12),p=n(13),O=n(11),f=n(1),h=[{icon:Object(f.jsx)(b.e,{})},{icon:Object(f.jsx)(b.b,{})},{icon:Object(f.jsx)(b.f,{})}],x=[{id:0,icon:Object(f.jsx)(p.b,{}),label:"Notes",subTitle:"Note you add appear here",path:"/"},{id:1,icon:Object(f.jsx)(p.a,{}),label:"Reminders",subTitle:"Note with upcoming reminders appear here",path:"/reminder"},{id:2,icon:Object(f.jsx)(p.c,{}),label:"Edit Labels",subTitle:"No labels yet",path:"/labels"},{id:3,icon:Object(f.jsx)(O.a,{}),label:"Archive",subTitle:"Your archived notes appear here",path:"/archive"},{id:4,icon:Object(f.jsx)(O.f,{}),label:"Trash",subTitle:"No notes in trash",path:"/trash"}],v=(O.b,b.d,b.a,O.d,O.a,O.c,O.g,O.e,p.d,a.a.createContext()),m=function(e){var t=e.children,n=Object(c.useState)(!0),a=Object(u.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)(!1),o=Object(u.a)(i,2),l=o[0],b=o[1],p=Object(c.useState)(!1),O=Object(u.a)(p,2),h=O[0],m=O[1],A=Object(c.useState)(0),N=Object(u.a)(A,2),S=N[0],y=N[1],g=Object(c.useState)(!0),I=Object(u.a)(g,2),w=I[0],C=I[1],k=Object(c.useState)([]),E=Object(u.a)(k,2),T=E[0],B=E[1],L=Object(c.useState)(""),D=Object(u.a)(L,2),H=D[0],Q=D[1],J=Object(c.useState)(""),U=Object(u.a)(J,2),_=U[0],R=U[1],F=Object(c.useState)(0),Y=Object(u.a)(F,2),P=Y[0],W=Y[1],M=Object(c.useState)(T),z=Object(u.a)(M,2),G=z[0],K=z[1],V=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.prev=1,e.next=4,fetch("/api");case 4:return t=e.sent,e.next=7,t.json();case 7:(n=e.sent)?(C(!1),c=n.map((function(e){return{_id:e._id,title:e.title,detail:e.detail}})),B(c)):B([]),s(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0),s(!1);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){V()}),[]),Object(c.useEffect)((function(){0===T.length?C(!0):C(!1)}),[w,T.length]),Object(f.jsx)(v.Provider,{value:{setIsNoteOpen:m,setIsSidebarOpen:b,setNoteTitle:Q,setActiveId:y,setNoteBody:R,setIsListEmpty:C,setNotesList:B,setSelectedId:W,fetchData:V,isListEmpty:w,isNoteOpen:h,isSidebarOpen:l,activeId:S,SidebarData:x,loading:r,notesList:T,noteTitle:H,noteBody:_,selectedId:P,filteredList:G,setFilteredList:K},children:t})},A=function(){return Object(c.useContext)(v)},N=function(){var e=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/update",{method:"PUT",headers:{Accept:"*/*","Content-Type":"application/json"},body:JSON.stringify(t)});case 3:return n=e.sent,e.abrupt("return",n.json());case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/delete",{method:"DELETE",headers:{Accept:"*/*","Content-Type":"application/json"},body:JSON.stringify(t.query)});case 3:return n=e.sent,e.abrupt("return",n.json());case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),y=(n(35),function(e){var t=e.submitHandler,n=e.text;return Object(f.jsx)("li",{className:"new-note-btn",onClick:function(e){t(e)},children:n})}),g=(n(36),function(e){var t=e.setNewNoteBody,n=e._id,c=e.selectedId,a=e.detail;return Object(f.jsx)("div",{className:"note-detail",onInput:function(e){t(e.target.textContent)},contentEditable:n===c,dangerouslySetInnerHTML:{__html:"<p>".concat(a,"</p>")}})}),I=function(e){var t=e.setNewNoteTitle,n=e._id,c=e.selectedId,a=e.title;return Object(f.jsx)("div",{className:"note-title",onInput:function(e){t(e.target.textContent)},contentEditable:n===c,dangerouslySetInnerHTML:{__html:"<h4>".concat(a,"</h4>")}})},w=(n(37),function(e){var t=e._id,n=e.title,a=e.detail,r=A(),s=r.notesList,i=r.setNotesList,o=r.selectedId,l=r.setSelectedId,b=Object(c.useState)(""),p=Object(u.a)(b,2),O=p[0],h=p[1],x=Object(c.useState)(""),v=Object(u.a)(x,2),m=v[0],w=v[1],C={query:{selectedId:o},noteData:{title:O,detail:m}},k=function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,N(C);case 3:l("");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=s.filter((function(e){return e._id!==o})),e.next=4,S(C);case 4:i(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){console.log(s)}),[s]),Object(f.jsxs)("div",{className:t===o?"note-container expand":"note-container",id:t,onClick:function(e){return function(e,t,n,c){e.preventDefault(),l(t),h(n),w(c)}(e,t,n,a)},children:[Object(f.jsx)(I,{setNewNoteTitle:h,_id:t,selectedId:o,title:n}),Object(f.jsx)(g,{setNewNoteBody:w,_id:t,selectedId:o,detail:a}),t===o&&Object(f.jsxs)("div",{className:"note-btn-container",children:[Object(f.jsx)(y,{submitHandler:k,text:"Update"}),Object(f.jsx)(y,{submitHandler:E,text:"Delete"})]})]})}),C=function(){var e=A(),t=e.notesList,n=e.filteredList,a=Object(c.useState)([]),r=Object(u.a)(a,2),s=r[0],i=r[1];return Object(c.useEffect)((function(){n.length>0?i(n):i(t)}),[n,s]),s.map((function(e,t){var n=e._id,c=e.title,a=e.detail;return Object(f.jsx)(w,{_id:n,title:c,detail:a},t)}))},k=(n(38),n(39),function(){var e=A(),t=e.notesList,n=e.setFilteredList,a=Object(c.useState)(""),r=Object(u.a)(a,2),s=r[0],i=r[1];return Object(c.useEffect)((function(){!function(){if(""===s)n(t);else{var e=t.filter((function(e){return e.title.toLowerCase()===s.toLowerCase()||e.detail.toLowerCase()===s.toLowerCase()}));e.length>0&&n(e)}}()}),[s]),Object(f.jsxs)("form",{children:[Object(f.jsx)("div",{className:"icon-container",children:Object(f.jsx)(p.e,{className:"search-icon"})}),Object(f.jsx)("input",{type:"text",placeholder:"Search",onChange:function(e){return i(e.target.value)}})]})}),E=(n(40),function(){return h.map((function(e,t){var n=e.icon;return Object(f.jsx)("div",{className:"dark-icon",children:n},t)}))}),T=function(){var e=A(),t=e.IsSidebarOpen,n=e.setIsSidebarOpen;return Object(f.jsxs)("nav",{children:[Object(f.jsx)("div",{className:"menu-icon",onClick:function(){return n(!t)},children:Object(f.jsx)(b.c,{})}),Object(f.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABbUlEQVR4Ae3aAUQEQRQG4OUmwiEAQIQQIAQIAQGCgICQkJAACUAAQkEQAAJEu11cSSldOlWR4hBJp90ozdt53QSgs/e09v70fh4YzPuWmbeYQIMergTGRmapVRc2NJxHva4Hc4UBPsOeWb9pnhWvBcUhRF9eACgMIW5QAJAjAAFyBCBAjgAEyBGAADkCECBHQADkCACAHAEAkJcCFPDnAFEvp1cz7B432SV1du8P7J63mepTfg0bQIdD7OIat4sH0cEgJsA3z5RwVtzbNdtKHx7Avexxp0kbq1gAOhpmUZxlu1vGAaS3CywNHY8AAe6WxYD0choIcDMvBtD5BA6ATkbFZ4D2B8BuobjWef9PW4BzwN9EznJmbJNttR90Ep+NfzfYNh+NrNtHf+YUQKdjfi78WH4NDyAYan5NAXoGFKAABShAAf8NkHQRUP01gMLSRrcAFJYm83hqULaRWaSwdF9g8027Y1Zae5tAA54vA5QFBsesCogAAAAASUVORK5CYII=",alt:"logo"}),Object(f.jsx)("h2",{children:"Keep"}),Object(f.jsx)(k,{className:"search-form"}),Object(f.jsx)("div",{className:"dark-icon-container",children:Object(f.jsx)(E,{})})]})},B=(n(41),function(){var e=A(),t=e.activeId,n=e.setActiveId,a=e.SidebarData,r=e.isSidebarOpen,s=e.setIsSidebarOpen,o=Object(c.useState)("60px"),l=Object(u.a)(o,2),d=l[0],j=l[1],b={width:d,transition:"width 100ms ease-in-out"};return Object(c.useEffect)((function(){j(r?"275px":"60px")}),[r]),Object(f.jsx)("div",{className:"main-container",style:b,onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)},children:Object(f.jsx)(i.a,{children:Object(f.jsx)("ul",{className:"side-container",children:a.map((function(e,c){var a=e.icon,r=e.path,s=e.id,o=e.label;return Object(f.jsx)("li",{className:"side-item ".concat(s===t&&"active"),onClick:function(){return n(s)},children:Object(f.jsxs)(i.b,{to:r,className:"side-item",children:[a," ",Object(f.jsx)("h4",{children:o})]})},c)}))})})})}),L=function(){var e=A(),t=e.SidebarData[e.activeId],n=t.icon,c=t.subTitle;return Object(f.jsxs)("div",{className:"page-icon-container",children:[n,Object(f.jsx)("h2",{className:"empty-subtitle",children:c})]})},D=n(27),H=n(26),Q=(n(47),n(48),function(e){var t=e.setFormHeight,n=e.setPlaceHolder,c=e.placeHolder,a=A(),r=a.noteTitle,s=a.setNoteTitle,i=a.noteBody,o=a.setNoteBody;return Object(f.jsxs)("div",{className:"form-container",children:[Object(f.jsx)("input",{placeholder:c,value:r,className:"title-input",onChange:function(e){return s(e.target.value)},onClick:function(){t("auto"),n("Title")}}),Object(f.jsx)("textarea",{placeholder:"Take a Note...",value:i,className:"textarea",onChange:function(e){return o(e.target.value)}})]})}),J=function(){var e=Object(j.a)(d.a.mark((function e(t){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api",{method:"POST",headers:{Accept:"*/*","Content-Type":"application/json"},body:JSON.stringify(t)});case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=A(),t=e.setNotesList,n=e.notesList,a=e.noteTitle,r=e.setNoteTitle,s=e.noteBody,i=e.setNoteBody,o=Object(c.useState)(""),l=Object(u.a)(o,2),b=l[0],p=l[1],O=Object(c.useState)("55px"),h=Object(u.a)(O,2),x=h[0],v=h[1],m=Object(c.useState)("Take a Note..."),N=Object(u.a)(m,2),S=N[0],g=N[1],I={noteData:{title:a,detail:s}},w=function(){var e=Object(j.a)(d.a.mark((function e(c){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,J(I).then((function(e){p(e.insertedId)}));case 3:return v("55px"),g("Take a Note..."),t([].concat(Object(H.a)(n),[Object(D.a)({_id:b},I.noteData)])),r(""),i(""),e.abrupt("return");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"create-form-container",style:{height:x},children:[Object(f.jsx)(Q,{setFormHeight:v,setPlaceHolder:g,placeHolder:S}),Object(f.jsx)(y,{submitHandler:w,text:"Done"})]})},_=(n(49),function(){var e=A().isListEmpty;return Object(f.jsxs)("main",{className:"page-body-container",children:[Object(f.jsx)("div",{className:"nav-panel",children:Object(f.jsx)(T,{})}),Object(f.jsxs)("div",{className:"main-body",children:[Object(f.jsx)("div",{className:"side-panel",children:Object(f.jsx)(B,{})}),Object(f.jsxs)("div",{className:"main-panel",children:[Object(f.jsx)(U,{}),Object(f.jsx)("div",{className:"secondary-section",children:e?Object(f.jsx)(L,{}):Object(f.jsx)(C,{})})]})]})]})});n(50);var R=function(){return Object(f.jsx)("main",{children:Object(f.jsx)(i.a,{children:Object(f.jsx)(o.c,{children:Object(f.jsx)(o.a,{path:"/",exact:!0,children:Object(f.jsx)(_,{})})})})})};s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(m,{children:Object(f.jsx)(R,{})})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.d22f8c2c.chunk.js.map