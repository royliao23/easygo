(this["webpackJsonpbooks-app"]=this["webpackJsonpbooks-app"]||[]).push([[0],{113:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(29),r=a.n(l),c=(a(69),a(70),a(17)),i=a(18),s=a(19),u=a(20),d=a(27),h=(a(71),a(114)),m=a(115),k=a(116),E=a(117),g=a(118),y=a(119),f=a(120),p=a(121),B=a(131),v=a(132),b=a(122),D=a(16),w=a(8),S=a.n(w),C=a(60),M=a(130),A=a(123),O=a(124),N=a(125),_=a(126),j=a(127),I=a(128),T=a(129),x=function(e){return o.a.createElement("div",null,o.a.createElement("center",null,o.a.createElement("h6",{style:{color:"blue"}},e.name)))};a(37);var q=function(){return o.a.createElement("center",null,"---- end of the list ----")};var U=function(e){return o.a.createElement(C.a,{id:"Btn1",onClick:function(){return e.greethandler2("from child")}},"Search ")},W=(n.Component,function(e){var t=e.results.map((function(t){return o.a.createElement("li",{key:t.id,onClick:function(){return e.action(t.title)}},t.title)}));return o.a.createElement("ul",null,t)}),F=(Object({NODE_ENV:"production",PUBLIC_URL:"/books-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).API_KEY,"https://royliao.pythonanywhere.com/api/article/"),Y=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={query:"",results:[],singlequery:"",entry:"",show:"",books:[],input:"ti",books2:[{id:24,title:"Bob The Builders",desc:"The best children's series",year:1999}]},n.getInfo=function(){S.a.get("".concat(F,"?search=").concat(n.state.query)).then((function(e){var t=e.data;n.setState({results:t})}))},n.handleInputChange=function(e){n.setState({query:n.search.value},(function(){n.state.query&&n.state.query.length>1?n.state.query.length%2===0&&n.getInfo():n.state.query})),"Enter"!==e.key||alert("choice:"+n.state.query)},n.getsearch2=function(e){S.a.get("".concat(F,"?search=").concat(n.state.query)).then((function(t){n.setState({books:t.data},(function(){console.log("title:",{childname:e})}))}))},n.jumptosearch=function(){alert("roy")},n.singlesearch=n.singlesearch.bind(Object(D.a)(n)),n.getsearch2=n.getsearch2.bind(Object(D.a)(n)),n}return Object(i.a)(a,[{key:"singlesearch",value:function(e){var t=this;this.setState({entry:e,query:e},(function(){t.getsearch2(t.state.query)}))}},{key:"render",value:function(){var e=this,t=this.state.books.map((function(e){return o.a.createElement("tr",{key:e.id},o.a.createElement("td",null,e.id),o.a.createElement("td",null,e.title),o.a.createElement("td",null,e.desc),o.a.createElement("td",null,e.year),o.a.createElement("td",null,o.a.createElement(C.a,{color:"success",size:"sm",className:"mr-2"},"Edit"),o.a.createElement(C.a,{color:"danger",size:"sm"},"Delete")))}));return o.a.createElement("div",null,o.a.createElement("input",{id:"myInput",placeholder:"Search for...",ref:function(t){return e.search=t},value:this.state.query,onChange:this.handleInputChange,onClick:this.getsearch2,onkeypress:"return event.keyCode!=13"}),o.a.createElement("br",null),o.a.createElement(U,{greethandler2:this.getsearch2}),o.a.createElement(W,{results:this.state.results,action:this.singlesearch}),t)}}]),a}(n.Component),L="https://royliao.pythonanywhere.com/api/article/",P=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={searchkey:"",newseachkey:"",books:[],newBookData:{title:"",desc:"",year:""},headerInfo:{"content-type":"application/json","Access-Control-Allow-Origin":"*"},newBookModal:!1,editBookData:{id:"",title:"",desc:"",year:""},editBookModal:!1,mymessage:""},n.getsearch2=function(){S.a.get("".concat(L,"?search=").concat(n.state.searchkey)).then((function(e){n.setState({books:e.data},(function(){console.log("title:")}))}))},n.handleInputChanger=function(){n.setState({searchkey:n.search.value},(function(){n.state.searchkey&&n.state.searchkey.length>0?(n.getInfo(),n.UNSAFE_componentWillMount()):n.state.searchkey||window.location.reload(!0)}))},n.getInfo=function(){S.a.get("".concat(L,"?search=").concat(n.state.searchkey)).then((function(e){var t=e.data;n.setState({results:t})}))},n._refreshBooks=n._refreshBooks.bind(Object(D.a)(n)),n}return Object(i.a)(a,[{key:"toggleNewBookModal",value:function(){this.setState({newBookModal:!this.state.newBookModal})}},{key:"toggleEditBookModal",value:function(){this.setState({editBookModal:!this.state.editBookModal})}},{key:"addBook",value:function(){var e=this;S.a.post("".concat(L),this.state.newBookData,this.state.headerInfo).then((function(t){var a=e.state.books;a.push(t.data),e.setState({mymessage:"Book Title "+e.state.newBookData.title+" is added!"}),e.setState({books:a,newBookModal:!1,newBookData:{title:"",desc:"",year:""}})}))}},{key:"editBook",value:function(e,t,a,n){this.setState({editBookData:{id:e,title:t,desc:a,year:n},editBookModal:!this.state.editBookModal})}},{key:"updateBook",value:function(){var e=this,t=this.state.editBookData,a=t.id,n=t.title,o=t.desc,l=t.year;S.a.put("".concat(L)+this.state.editBookData.id+"/",{id:a,title:n,desc:o,year:l},this.state.headerInfo).then((function(t){e._refreshBooks()})),this.setState({mymessage:"Book ID "+this.state.editBookData.id+" is edited!"}),this.setState({editBookModal:!1,editBookData:{id:"",title:"",desc:"",year:""}})}},{key:"deleteBook",value:function(e){var t=this;S.a.delete("".concat(L)+e+"/").then((function(a){t._refreshBooks(),t.setState({mymessage:"Book ID "+e+" is deleted!"})}))}},{key:"UNSAFE_componentWillMount",value:function(){var e=this;""===this.state.searchkey&&null===this.state.searchkey||S.a.get("".concat(L,"?search=").concat(this.state.searchkey)).then((function(t){e.setState({books:t.data})}))}},{key:"UNSAFE_componentWillMount2",value:function(){var e=this;""!==this.state.searchkey||null!==this.state.searchkey?S.a.get("".concat(L,"?search=").concat(this.state.searchkey)).then((function(t){e.setState({books:t.data})})):(window.location.reload(!0),alert("thh"))}},{key:"_refreshBooks",value:function(){var e=this;S.a.get("".concat(L)).then((function(t){e.setState({books:t.data})}))}},{key:"render",value:function(){var e=this,t=this.state.books.map((function(t){return o.a.createElement("tr",{key:t.id},o.a.createElement("td",null,t.id),o.a.createElement("td",null,o.a.createElement("a",{style:{color:"blue"},onClick:e.editBook.bind(e,t.id,t.title,t.desc,t.year)},t.title)),o.a.createElement("td",null,t.desc),o.a.createElement("td",null,t.year),o.a.createElement("td",null,o.a.createElement(C.a,{color:"danger",size:"sm",onClick:e.deleteBook.bind(e,t.id)},"Delete")))}));return o.a.createElement("div",{className:"App container"},o.a.createElement("center",null,o.a.createElement("div",{class:"row"},o.a.createElement("h4",{style:{marginTop:25}},"List of Customers"),"\u2003",o.a.createElement(C.a,{color:"primary",style:{marginTop:25},onClick:this.toggleNewBookModal.bind(this)},"Add Book"),o.a.createElement("input",{input:!0,class:"form-control mr-sm-2",style:{marginLeft:"auto",marginTop:25,width:200},placeholder:"Search for the ..",ref:function(t){return e.search=t},onChange:this.handleInputChanger,onkeypress:"return event.keyCode!=13"}),o.a.createElement(C.a,{id:"btn26",class:"btn btn-outline-success my-2 my-sm-0",color:"primary",style:{marginTop:25},onClick:this.UNSAFE_componentWillMount2.bind(this)},"Search")))," ",o.a.createElement(x,{name:this.state.mymessage}),o.a.createElement(M.a,{isOpen:this.state.newBookModal,toggle:this.toggleNewBookModal.bind(this)},o.a.createElement(A.a,{toggle:this.toggleNewBookModal.bind(this)},"Add a new book"),o.a.createElement(O.a,null,o.a.createElement(N.a,null,o.a.createElement(_.a,{for:"title"},"Title"),o.a.createElement(j.a,{id:"title",value:this.state.newBookData.title,onChange:function(t){var a=e.state.newBookData;a.title=t.target.value,e.setState({newBookData:a})}})),o.a.createElement(N.a,null,o.a.createElement(_.a,{for:"desc"},"Description"),o.a.createElement(j.a,{id:"desc",value:this.state.newBookData.desc,onChange:function(t){var a=e.state.newBookData;a.desc=t.target.value,e.setState({newBookData:a})}})),o.a.createElement(N.a,null,o.a.createElement(_.a,{for:"year"},"Year"),o.a.createElement(j.a,{id:"year",value:this.state.newBookData.year,onChange:function(t){var a=e.state.newBookData;a.year=t.target.value,e.setState({newBookData:a})}}))),o.a.createElement(I.a,null,o.a.createElement(I.a,null,o.a.createElement(C.a,{color:"primary",onClick:this.addBook.bind(this)},"Add Book")," ",o.a.createElement(C.a,{color:"secondary",onClick:this.toggleNewBookModal.bind(this)},"Cancel")))),o.a.createElement(M.a,{isOpen:this.state.editBookModal,toggle:this.toggleEditBookModal.bind(this)},o.a.createElement(A.a,{toggle:this.toggleEditBookModal.bind(this)},"Edit a new book"),o.a.createElement(O.a,null,o.a.createElement(N.a,null,o.a.createElement(_.a,{for:"title"},"Title"),o.a.createElement(j.a,{id:"title",value:this.state.editBookData.title,onChange:function(t){var a=e.state.editBookData;a.title=t.target.value,e.setState({editBookData:a})}})),o.a.createElement(N.a,null,o.a.createElement(_.a,{for:"desc"},"Description"),o.a.createElement(j.a,{id:"desc",value:this.state.editBookData.desc,onChange:function(t){var a=e.state.editBookData;a.desc=t.target.value,e.setState({editBookData:a})}})),o.a.createElement(N.a,null,o.a.createElement(_.a,{for:"year"},"Year"),o.a.createElement(j.a,{id:"year",value:this.state.editBookData.year,onChange:function(t){var a=e.state.editBookData;a.year=t.target.value,e.setState({editBookData:a})}}))),o.a.createElement(I.a,null,o.a.createElement(C.a,{color:"primary",onClick:this.updateBook.bind(this)},"Update Book")," ",o.a.createElement(C.a,{color:"secondary",onClick:this.toggleEditBookModal.bind(this)},"Cancel"))),o.a.createElement(T.a,null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"#"),o.a.createElement("th",null,"Title"),o.a.createElement("th",null,"Desc"),o.a.createElement("th",null,"Year"),o.a.createElement("th",null,"Action"))),o.a.createElement("tbody",null,t)),o.a.createElement("center",null,o.a.createElement(q,null)))}}]),a}(n.Component),z="https://royliao.pythonanywhere.com/api/article/",H=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={searchkey:"",newseachkey:"",books:[],newBookData:{title:"",desc:"",year:""},headerInfo:{"content-type":"application/json","Access-Control-Allow-Origin":"*"},newBookModal:!1,editBookData:{id:"",title:"",desc:"",year:""},editBookModal:!1,mymessage:""},n.getsearch2=function(){S.a.get("".concat(z,"?search=").concat(n.state.searchkey)).then((function(e){n.setState({books:e.data},(function(){console.log("title:")}))}))},n.handleInputChanger=function(){n.setState({searchkey:n.search.value},(function(){n.state.searchkey&&n.state.searchkey.length>0?(n.getInfo(),n.UNSAFE_componentWillMount()):n.state.searchkey||window.location.reload(!0)}))},n.getInfo=function(){S.a.get("".concat(z,"?search=").concat(n.state.searchkey)).then((function(e){var t=e.data;n.setState({results:t})}))},n._refreshBooks=n._refreshBooks.bind(Object(D.a)(n)),n}return Object(i.a)(a,[{key:"toggleNewBookModal",value:function(){this.setState({newBookModal:!this.state.newBookModal})}},{key:"toggleEditBookModal",value:function(){this.setState({editBookModal:!this.state.editBookModal})}},{key:"addBook",value:function(){var e=this;S.a.post("".concat(z),this.state.newBookData,this.state.headerInfo).then((function(t){var a=e.state.books;a.push(t.data),e.setState({mymessage:"Book Title "+e.state.newBookData.title+" is added!"}),e.setState({books:a,newBookModal:!1,newBookData:{title:"",desc:"",year:""}})}))}},{key:"editBook",value:function(e,t,a,n){this.setState({editBookData:{id:e,title:t,desc:a,year:n},editBookModal:!this.state.editBookModal})}},{key:"updateBook",value:function(){var e=this,t=this.state.editBookData,a=t.id,n=t.title,o=t.desc,l=t.year;S.a.put("".concat(z)+this.state.editBookData.id+"/",{id:a,title:n,desc:o,year:l},this.state.headerInfo).then((function(t){e._refreshBooks()})),this.setState({mymessage:"Book ID "+this.state.editBookData.id+" is edited!"}),this.setState({editBookModal:!1,editBookData:{id:"",title:"",desc:"",year:""}})}},{key:"deleteBook",value:function(e){var t=this;S.a.delete("".concat(z)+e+"/").then((function(a){t._refreshBooks(),t.setState({mymessage:"Book ID "+e+" is deleted!"})}))}},{key:"UNSAFE_componentWillMount",value:function(){var e=this;""===this.state.searchkey&&null===this.state.searchkey||S.a.get("".concat(z,"?search=").concat(this.state.searchkey)).then((function(t){e.setState({books:t.data})}))}},{key:"UNSAFE_componentWillMount2",value:function(){var e=this;""!==this.state.searchkey||null!==this.state.searchkey?S.a.get("".concat(z,"?search=").concat(this.state.searchkey)).then((function(t){e.setState({books:t.data})})):(window.location.reload(!0),alert("thh"))}},{key:"_refreshBooks",value:function(){var e=this;S.a.get("".concat(z)).then((function(t){e.setState({books:t.data})}))}},{key:"render",value:function(){var e=this,t=this.state.books.map((function(t){return o.a.createElement("tr",{key:t.id},o.a.createElement("td",null,t.id),o.a.createElement("td",null,o.a.createElement("a",{style:{color:"blue"},onClick:e.editBook.bind(e,t.id,t.title,t.desc,t.year)},t.title)),o.a.createElement("td",null,t.desc),o.a.createElement("td",null,t.year),o.a.createElement("td",null,o.a.createElement(C.a,{color:"danger",size:"sm",onClick:e.deleteBook.bind(e,t.id)},"Delete")))}));return o.a.createElement("div",{className:"App container"},o.a.createElement("center",null,o.a.createElement("div",{class:"row"},o.a.createElement("h4",{style:{marginTop:25}},"List of Suppliers"),"\u2003",o.a.createElement(C.a,{color:"primary",style:{marginTop:25},onClick:this.toggleNewBookModal.bind(this)},"Add Book"),o.a.createElement("input",{input:!0,class:"form-control mr-sm-2",style:{marginLeft:"auto",marginTop:25,width:200},placeholder:"Search for the ..",ref:function(t){return e.search=t},onChange:this.handleInputChanger,onkeypress:"return event.keyCode!=13"}),o.a.createElement(C.a,{id:"btn26",class:"btn btn-outline-success my-2 my-sm-0",color:"primary",style:{marginTop:25},onClick:this.UNSAFE_componentWillMount2.bind(this)},"Search")))," ",o.a.createElement(x,{name:this.state.mymessage}),o.a.createElement(M.a,{isOpen:this.state.newBookModal,toggle:this.toggleNewBookModal.bind(this)},o.a.createElement(A.a,{toggle:this.toggleNewBookModal.bind(this)},"Add a new book"),o.a.createElement(O.a,null,o.a.createElement(N.a,null,o.a.createElement(_.a,{for:"title"},"Title"),o.a.createElement(j.a,{id:"title",value:this.state.newBookData.title,onChange:function(t){var a=e.state.newBookData;a.title=t.target.value,e.setState({newBookData:a})}})),o.a.createElement(N.a,null,o.a.createElement(_.a,{for:"desc"},"Description"),o.a.createElement(j.a,{id:"desc",value:this.state.newBookData.desc,onChange:function(t){var a=e.state.newBookData;a.desc=t.target.value,e.setState({newBookData:a})}})),o.a.createElement(N.a,null,o.a.createElement(_.a,{for:"year"},"Year"),o.a.createElement(j.a,{id:"year",value:this.state.newBookData.year,onChange:function(t){var a=e.state.newBookData;a.year=t.target.value,e.setState({newBookData:a})}}))),o.a.createElement(I.a,null,o.a.createElement(I.a,null,o.a.createElement(C.a,{color:"primary",onClick:this.addBook.bind(this)},"Add Book")," ",o.a.createElement(C.a,{color:"secondary",onClick:this.toggleNewBookModal.bind(this)},"Cancel")))),o.a.createElement(M.a,{isOpen:this.state.editBookModal,toggle:this.toggleEditBookModal.bind(this)},o.a.createElement(A.a,{toggle:this.toggleEditBookModal.bind(this)},"Edit a new book"),o.a.createElement(O.a,null,o.a.createElement(N.a,null,o.a.createElement(_.a,{for:"title"},"Title"),o.a.createElement(j.a,{id:"title",value:this.state.editBookData.title,onChange:function(t){var a=e.state.editBookData;a.title=t.target.value,e.setState({editBookData:a})}})),o.a.createElement(N.a,null,o.a.createElement(_.a,{for:"desc"},"Description"),o.a.createElement(j.a,{id:"desc",value:this.state.editBookData.desc,onChange:function(t){var a=e.state.editBookData;a.desc=t.target.value,e.setState({editBookData:a})}})),o.a.createElement(N.a,null,o.a.createElement(_.a,{for:"year"},"Year"),o.a.createElement(j.a,{id:"year",value:this.state.editBookData.year,onChange:function(t){var a=e.state.editBookData;a.year=t.target.value,e.setState({editBookData:a})}}))),o.a.createElement(I.a,null,o.a.createElement(C.a,{color:"primary",onClick:this.updateBook.bind(this)},"Update Book")," ",o.a.createElement(C.a,{color:"secondary",onClick:this.toggleEditBookModal.bind(this)},"Cancel"))),o.a.createElement(T.a,null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"#"),o.a.createElement("th",null,"Title"),o.a.createElement("th",null,"Desc"),o.a.createElement("th",null,"Year"),o.a.createElement("th",null,"Action"))),o.a.createElement("tbody",null,t)),o.a.createElement("center",null,o.a.createElement(q,null)))}}]),a}(n.Component),K=a(11),R=a(24);function J(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],l=t[1];return o.a.createElement(K.a,null,o.a.createElement("div",null,o.a.createElement(h.a,{color:"light",light:!0,expand:"md"},o.a.createElement(m.a,{href:"/"},o.a.createElement("h1",null,"EasyGo")),o.a.createElement(k.a,{onClick:function(){return l(!a)}}),o.a.createElement(E.a,{isOpen:a,navbar:!0},o.a.createElement(g.a,{className:"mr-auto",navbar:!0},o.a.createElement(y.a,null,o.a.createElement(f.a,{activeClassName:"active-link",exact:!0,to:"/",tag:K.c},"Home")),o.a.createElement(y.a,null,o.a.createElement(f.a,{href:"http://royliao23.github.io/books-app"},"Customer")),o.a.createElement(p.a,{nav:!0,inNavbar:!0},o.a.createElement(B.a,{nav:!0,caret:!0},"Sales"),o.a.createElement(v.a,{right:!0},o.a.createElement(b.a,null,o.a.createElement(f.a,{exact:!0,to:"/suppliers",tag:K.c},"About1")),o.a.createElement(b.a,null,o.a.createElement(f.a,{exact:!0,to:"/suppliers",tag:K.c},"About2")),o.a.createElement(b.a,{divider:!0}),o.a.createElement(b.a,null,o.a.createElement(f.a,{exact:!0,to:"/",tag:K.c},"About3")))),o.a.createElement(y.a,null,o.a.createElement(f.a,{activeClassName:"active-link",exact:!0,to:"/suppliers",tag:K.c},"Purchase")),o.a.createElement(y.a,null,o.a.createElement(f.a,{href:"https://github.com/reactstrap/reactstrap"},"Purchase")),o.a.createElement(p.a,{nav:!0,inNavbar:!0},o.a.createElement(B.a,{nav:!0,caret:!0},"Accounts"),o.a.createElement(v.a,{right:!0},o.a.createElement(b.a,null,o.a.createElement(f.a,{exact:!0,to:"/suppliers",tag:K.c},"About1")),o.a.createElement(b.a,null,o.a.createElement(f.a,{exact:!0,to:"/suppliers",tag:K.c},"About1")),o.a.createElement(b.a,{divider:!0}),o.a.createElement(b.a,null,o.a.createElement(f.a,{exact:!0,to:"/suppliers",tag:K.c},"About1")))),o.a.createElement(y.a,null,o.a.createElement(f.a,{exact:!0,to:"/suppliers",activeClassName:"active-link",tag:K.c},"Warehouse")),o.a.createElement(p.a,{nav:!0,inNavbar:!0},o.a.createElement(B.a,{nav:!0,caret:!0},"Setting"),o.a.createElement(v.a,{right:!0},o.a.createElement(b.a,null,o.a.createElement(f.a,{exact:!0,to:"/suppliers",tag:K.c},"About1")),o.a.createElement(b.a,null,o.a.createElement(f.a,{exact:!0,to:"/suppliers",tag:K.c},"About1")),o.a.createElement(b.a,{divider:!0}),o.a.createElement(b.a,null,o.a.createElement(f.a,{exact:!0,to:"/accounts",tag:K.c},"Report"))))),"Simple Text"))),o.a.createElement("div",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(K.b,{to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(K.b,{to:"/accounts"},"Accounts")),o.a.createElement("li",null,o.a.createElement(K.b,{to:"/suppliers"},"Suppliers"))),o.a.createElement("hr",null),o.a.createElement(R.c,null,o.a.createElement(R.a,{exact:!0,path:"/"},o.a.createElement(G,null)),o.a.createElement(R.a,{path:"/accounts"},o.a.createElement(V,null)),o.a.createElement(R.a,{path:"/suppliers"},o.a.createElement(Q,null)))))}function G(){return o.a.createElement("div",null,o.a.createElement(P,null))}function V(){return o.a.createElement("div",null,o.a.createElement(Y,null),o.a.createElement("h2",null,"About roy"))}function Q(){return o.a.createElement("div",null,o.a.createElement(H,null))}var X=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App container"},o.a.createElement(J,null))}}]),a}(n.Component);r.a.render(o.a.createElement(X,null),document.getElementById("root"))},64:function(e,t,a){e.exports=a(113)},70:function(e,t,a){},71:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.17402fb8.chunk.js.map