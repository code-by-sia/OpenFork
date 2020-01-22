(function(t){function e(e){for(var n,r,c=e[0],s=e[1],l=e[2],f=0,b=[];f<c.length;f++)r=c[f],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&b.push(i[r][0]),i[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(b.length)b.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,c=1;c<a.length;c++){var s=a[c];0!==i[s]&&(n=!1)}n&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},o=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/OpenFork/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"4ecb":function(t,e,a){"use strict";var n=a("5017"),i=a.n(n);i.a},5017:function(t,e,a){},"59a9":function(t,e,a){},"6b52":function(t,e,a){"use strict";var n=a("7598"),i=a.n(n);i.a},"6ef6":function(t,e,a){},7598:function(t,e,a){},"836f":function(t,e,a){"use strict";var n=a("d167"),i=a.n(n);i.a},"8db5":function(t,e,a){"use strict";var n=a("d725"),i=a.n(n);i.a},b5f3:function(t,e,a){},c1eb:function(t,e,a){"use strict";var n=a("6ef6"),i=a.n(n);i.a},c7c4:function(t,e,a){},cc5c:function(t,e,a){"use strict";var n=a("b5f3"),i=a.n(n);i.a},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("ribbon",{staticStyle:{position:"sticky",top:"0"},attrs:{menu:t.menu},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("div",{attrs:{slot:"editor"},slot:"editor"},[a("control-box",{staticClass:"last",attrs:{label:"Data"}},[a("action-button",{attrs:{label:"load from file"},on:{click:t.selectFile}},[a("i",{staticClass:"fa fa-file",attrs:{slot:"prefix"},slot:"prefix"})]),a("action-button",{attrs:{disabled:"",label:"load from url"}},[a("i",{staticClass:"fa fa-link",attrs:{slot:"prefix"},slot:"prefix"})])],1),a("control-box",{staticClass:"independent",attrs:{label:"Clipboard"}},[a("action-group",{staticClass:"clipboard",attrs:{value:t.clipboard},on:{action:t.onClipboard}},[a("i",{staticClass:"fa fa-copy",attrs:{slot:"copy"},slot:"copy"}),a("i",{staticClass:"fa fa-paste",attrs:{slot:"paste"},slot:"paste"})])],1),a("control-box",{attrs:{label:"Formatting"}},[a("action-button",{attrs:{label:"Clear whitespace"},on:{click:t.minify}}),a("action-button",{attrs:{label:"Format Text"},on:{click:t.format}})],1),a("control-box",{attrs:{label:"Content"}},[a("action-button",{attrs:{label:"Clear"}},[a("i",{staticClass:"fa fa-eraser",attrs:{slot:"postfix"},slot:"postfix"})]),a("action-group",{staticClass:"history",attrs:{value:t.history}},[a("span",{staticClass:"action",attrs:{slot:"undo"},slot:"undo"},[a("span",[t._v("Undo")]),a("i",{staticClass:"fa fa-undo"})]),a("span",{staticClass:"action",attrs:{slot:"redo"},slot:"redo"},[a("span",[t._v("Redo")]),a("i",{staticClass:"fa fa-redo"})])])],1)],1),a("div",{attrs:{slot:"viewer"},slot:"viewer"}),a("div",{staticStyle:{flex:"1"},attrs:{slot:"about"},slot:"about"},[a("control-box",{attrs:{label:"OSI"}},[a("span",{staticStyle:{"font-size":"xx-large",color:"#00454d","font-weight":"bold"}},[a("i",{staticClass:"fab fa-osi"})])]),a("control-box",{staticStyle:{flex:"1"},attrs:{label:"About Open Web Sheet Project",grid:!1}},[a("span",{staticStyle:{flex:"1"}},[t._v(" Designed and developed by "),a("strong",[t._v("Siamand Maroufi")]),a("br"),t._v("3rd Parties: "),a("strong",[t._v("FontAwesome Icons")]),t._v(" & "),a("strong",[t._v("Google noto web font")]),a("br"),t._v("Licence: "),a("strong",[t._v("MIT Licence")])]),a("span",{staticStyle:{"align-self":"flex-start"}},[a("a",{attrs:{href:"https://siamand.cc"}},[a("i",{staticClass:"fa fa-link"}),t._v(" Developer's site ")]),t._v(" | "),a("a",{attrs:{href:"https://github.com/SiamandMaroufi/OpenFork"}},[a("i",{staticClass:"fab fa-github"}),t._v(" Source Code ")])])])],1)]),"editor"===t.active?a("editor",{staticStyle:{flex:"1"},model:{value:t.data,callback:function(e){t.data=e},expression:"data"}}):"viewer"===t.active?a("viewer",{staticStyle:{flex:"1"},model:{value:t.data,callback:function(e){t.data=e},expression:"data"}}):a("div",[t._v("nothing here yet ...")]),a("input",{staticStyle:{position:"absolute",visibility:"hidden"},attrs:{id:"file_input",type:"file"},on:{change:function(e){return t.loadFile(e)}}})],1)},o=[],r=(a("96cf"),a("1da1")),c=a("d4ec"),s=a("bee2"),l=a("99de"),u=a("7e84"),f=a("262e"),b=a("9ab4"),d=a("60a3"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ribbon-menu"},[a("ul",{staticClass:"menu",attrs:{"data-qa":"menu"}},t._l(t.menu,(function(e){return a("li",{key:e.name,staticClass:"menu-label",class:{active:t.active===e.name},attrs:{"data-qa":e},on:{click:function(a){t.active=e.name}}},[t._v(" "+t._s(e.label)+" ")])})),0),a("div",{staticClass:"menu-content"},t._l(t.menu,(function(e){return a("div",{key:e.name,staticClass:"menu-content-item",class:{active:t.active===e.name}},[t._t(e.name,[a("fieldset",[a("legend",[t._v(t._s(e.label))]),a("span",{staticClass:"default-place-holder"},[t._v("placeholder for "+t._s(e.name))])])])],2)})),0)])},v=[],h=function(t){function e(){return Object(c["a"])(this,e),Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(f["a"])(e,t),Object(s["a"])(e,[{key:"active",get:function(){return this.value},set:function(t){this.$emit("input",t)}}]),e}(d["c"]);b["a"]([Object(d["b"])({required:!0})],h.prototype,"value",void 0),b["a"]([Object(d["b"])({required:!0})],h.prototype,"menu",void 0),h=b["a"]([Object(d["a"])({name:"Ribbon"})],h);var m=h,y=m,j=(a("8db5"),a("2877")),O=Object(j["a"])(y,p,v,!1,null,"7632c134",null),g=O.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"control-box",attrs:{"data-qa":"control-box"}},[a("div",{staticClass:"control-box-controls",style:{display:t.grid?"grid":"flex"},attrs:{"data-qa":"content"}},[t._t("default")],2),t.label?a("div",{staticClass:"control-box-header",attrs:{"data-qa":"header"}},[t._v(" "+t._s(t.label)+" ")]):t._e()])},x=[],C=function(t){function e(){return Object(c["a"])(this,e),Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(f["a"])(e,t),e}(n["a"]);b["a"]([Object(d["b"])()],C.prototype,"label",void 0),b["a"]([Object(d["b"])({default:!0})],C.prototype,"grid",void 0),C=b["a"]([Object(d["a"])({name:"ControlBox"})],C);var k=C,w=k,S=(a("6b52"),Object(j["a"])(w,_,x,!1,null,"2b189682",null)),$=S.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"editor"},[t.editMode?a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],domProps:{value:t.text},on:{blur:function(e){t.editMode=!1},input:function(e){e.target.composing||(t.text=e.target.value)}}}):a("div",{staticClass:"rendered",on:{dblclick:function(e){t.editMode=!0}}},[a("div",{staticClass:"lines"},t._l(t.lines,(function(e,n){return a("div",{key:n,staticClass:"line"},[t._v(" "+t._s(n+1)+" ")])})),0),a("div",{staticClass:"content"},t._l(t.lines,(function(e,n){return a("span",{key:n,staticClass:"line",domProps:{innerHTML:t._s(t.formatLine(e))}})})),0)])])},V=[],A=(a("a4d3"),a("e01a"),a("d28b"),a("2a1b"),a("d3b7"),a("ac1f"),a("3ca3"),a("466d"),a("5319"),a("1276"),a("ddb0"),function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.regex=/((?<![\\])['"])((?:.(?!(?<![\\])\1))*.?)\1/g,t.editMode=!1,t}return Object(f["a"])(e,t),Object(s["a"])(e,[{key:"formatLine",value:function(t){t=t.replace(/ /g,"&nbsp");var e=this.regex[Symbol.match](t);if(null==e)return t;var a=!0,n=!1,i=void 0;try{for(var o,r=e[Symbol.iterator]();!(a=(o=r.next()).done);a=!0){var c=o.value;t=t.replace(c,"<span class='str'>".concat(c,"</span>"))}}catch(s){n=!0,i=s}finally{try{a||null==r.return||r.return()}finally{if(n)throw i}}return t}},{key:"text",get:function(){return this.value},set:function(t){this.$emit("input",t)}},{key:"lines",get:function(){return this.text.split("\n")}}]),e}(n["a"]));b["a"]([Object(d["b"])({required:!0})],A.prototype,"value",void 0),A=b["a"]([Object(d["a"])({name:"Editor"})],A);var E=A,F=E,P=(a("cc5c"),Object(j["a"])(F,q,V,!1,null,null,null)),M=P.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"viewer"},[a("object-viewer",{model:{value:t.root,callback:function(e){t.root=e},expression:"root"}})],1)},T=[],J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"viewer"},[t.name?a("span",{staticClass:"name"},[t._v(t._s(t.name)+":")]):t._e(),"object"==typeof t.value?a("div",{staticClass:"props"},[Array.isArray(t.value)?a("div",{staticClass:"array"},[t._v(" [ "),t._l(t.value,(function(t,e){return a("div",{key:e,staticClass:"item"},[a("object-viewer",{attrs:{value:t}})],1)})),t._v(" ] ")],2):[t._v(" { "),a("div",{staticClass:"object"},t._l(t.value,(function(e,n){return a("object-viewer",{key:n,attrs:{value:e,name:n},on:{change:function(e){return t.onChange(n,e)},"value-changed":t.onValueChanged}})})),1),t._v(" } ")]],2):a("input",{attrs:{type:"text"},domProps:{value:t.objectValue},on:{change:function(e){return t.$emit("change",e.target.value)}}})])},B=[],R=function(t){function e(){return Object(c["a"])(this,e),Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(f["a"])(e,t),Object(s["a"])(e,[{key:"onChange",value:function(t,e){var a=this.applyType(e,t);this.$set(this.objectValue,t,a),this.objectValue=this.objectValue,this.$emit("input",this.objectValue),this.$emit("value-changed",this.objectValue)}},{key:"onValueChanged",value:function(){this.$emit("input",this.objectValue)}},{key:"applyType",value:function(t,e){return"number"!=typeof this.value[e]||isNaN(t)?t:1*t}},{key:"objectValue",get:function(){return this.value},set:function(t){this.$emit("input",t)}}]),e}(n["a"]);b["a"]([Object(d["b"])()],R.prototype,"value",void 0),b["a"]([Object(d["b"])()],R.prototype,"name",void 0),R=b["a"]([Object(d["a"])({name:"ObjectViewer"})],R);var L=R,I=L,D=(a("fc3f"),Object(j["a"])(I,J,B,!1,null,"07c16fbb",null)),G=D.exports,z=function(t){function e(){return Object(c["a"])(this,e),Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(f["a"])(e,t),Object(s["a"])(e,[{key:"root",get:function(){return this.value?JSON.parse(this.value):{}},set:function(t){this.$emit("input",JSON.stringify(t,null,2))}}]),e}(n["a"]);b["a"]([Object(d["b"])()],z.prototype,"value",void 0),z=b["a"]([Object(d["a"])({name:"viewer",components:{ObjectViewer:G}})],z);var H=z,U=H,W=(a("4ecb"),Object(j["a"])(U,N,T,!1,null,"0d8c2b2e",null)),K=W.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"action-group",attrs:{"data-qa":"action-group"}},t._l(t.actions,(function(e){return a("action-button",{key:e.name,staticClass:"action-group-item",class:{on:e.selected},attrs:{disabled:e.disabled,"data-qa":"action-item","data-qa-name":e.name},on:{click:function(a){return t.$emit("action",e.name)}}},[t._t(e.name,[t._v(" "+t._s(e.label)+" ")])],2)})),1)},X=[],Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"action",attrs:{disabled:t.disabled,"data-qa":"action"},on:{click:function(e){return t.$emit("click")}}},[t._t("default",[t._t("prefix"),t._v(" "+t._s(t.label)+" "),t._t("postfix")])],2)},Z=[],tt=function(t){function e(){return Object(c["a"])(this,e),Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(f["a"])(e,t),e}(n["a"]);b["a"]([Object(d["b"])()],tt.prototype,"label",void 0),b["a"]([Object(d["b"])({default:!1})],tt.prototype,"disabled",void 0),tt=b["a"]([Object(d["a"])({name:"ActionButton"})],tt);var et=tt,at=et,nt=(a("c1eb"),Object(j["a"])(at,Y,Z,!1,null,"cb93cbbc",null)),it=nt.exports,ot=function(t){function e(){return Object(c["a"])(this,e),Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(f["a"])(e,t),Object(s["a"])(e,[{key:"actions",get:function(){return this.value}}]),e}(n["a"]);b["a"]([Object(d["b"])({required:!0})],ot.prototype,"value",void 0),ot=b["a"]([Object(d["a"])({name:"ActionGroup",components:{ActionButton:it}})],ot);var rt=ot,ct=rt,st=(a("cfc7"),Object(j["a"])(ct,Q,X,!1,null,"252226b0",null)),lt=st.exports,ut=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.active="editor",t.menu=[{name:"editor",label:"Text Editor"},{name:"viewer",label:"Object Viewer"},{name:"about",label:"About"}],t.clipboard=[{name:"copy",label:"Copy"},{name:"paste",label:"Paste"}],t.history=[{name:"redo"},{name:"undo"}],t.data='{\n    "name":"Open Fork",\n    "version":0.1,\n    "author": {\n      "name":"Siamand",\n      "web":"https://siamand.css"\n    }\n  }',t}return Object(f["a"])(e,t),Object(s["a"])(e,[{key:"onClipboard",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("paste"!==e){t.next=6;break}return t.next=3,navigator.clipboard.readText();case 3:this.data=t.sent,t.next=7;break;case 6:"copy"===e&&navigator.clipboard.writeText(this.data);case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"format",value:function(){try{this.data=JSON.parse(this.data),this.data=JSON.stringify(this.data,null,2)}catch(t){console.error(t)}}},{key:"minify",value:function(){try{this.data=JSON.parse(this.data),this.data=JSON.stringify(this.data)}catch(t){console.error(t)}}},{key:"loadFile",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.target.files[0].text();case 2:this.data=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"selectFile",value:function(){var t=document.getElementById("file_input");t&&t.click()}}]),e}(d["c"]);ut=b["a"]([Object(d["a"])({components:{ActionButton:it,ActionGroup:lt,Viewer:K,Editor:M,ControlBox:$,Ribbon:g}})],ut);var ft=ut,bt=ft,dt=(a("836f"),Object(j["a"])(bt,i,o,!1,null,"0ebfbc89",null)),pt=dt.exports,vt=a("9483");Object(vt["a"])("".concat("/OpenFork/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(pt)}}).$mount("#app")},cfc7:function(t,e,a){"use strict";var n=a("c7c4"),i=a.n(n);i.a},d167:function(t,e,a){},d725:function(t,e,a){},fc3f:function(t,e,a){"use strict";var n=a("59a9"),i=a.n(n);i.a}});
//# sourceMappingURL=app.a83ba370.js.map