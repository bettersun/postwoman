(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{220:function(e,t,o){"use strict";var n=o(5),l=o(29),d=o(36),r=o(132),c=o(70),h=o(18),v=o(57).f,f=o(71).f,x=o(16).f,m=o(702).trim,w=n.Number,I=w,C=w.prototype,_="Number"==d(o(93)(C)),M="trim"in String.prototype,E=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){var o,n,l,d=(t=M?t.trim():m(t,3)).charCodeAt(0);if(43===d||45===d){if(88===(o=t.charCodeAt(2))||120===o)return NaN}else if(48===d){switch(t.charCodeAt(1)){case 66:case 98:n=2,l=49;break;case 79:case 111:n=8,l=55;break;default:return+t}for(var code,r=t.slice(2),i=0,h=r.length;i<h;i++)if((code=r.charCodeAt(i))<48||code>l)return NaN;return parseInt(r,n)}}return+t};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(e){var t=arguments.length<1?0:e,o=this;return o instanceof w&&(_?h((function(){C.valueOf.call(o)})):"Number"!=d(o))?r(new I(E(t)),o,w):E(t)};for(var F,y=o(11)?v(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;y.length>N;N++)l(I,F=y[N])&&!l(w,F)&&x(w,F,f(I,F));w.prototype=C,C.constructor=w,o(20)(n,"Number",w)}},252:function(e,t,o){var content=o(705);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(43).default)("1cf1c844",content,!0,{sourceMap:!1})},253:function(e,t,o){var content=o(707);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(43).default)("d508b91a",content,!0,{sourceMap:!1})},702:function(e,t,o){var n=o(8),l=o(35),d=o(18),r=o(703),c="["+r+"]",h=RegExp("^"+c+c+"*"),v=RegExp(c+c+"*$"),f=function(e,t,o){var l={},c=d((function(){return!!r[e]()||"​"!="​"[e]()})),h=l[e]=c?t(x):r[e];o&&(l[o]=h),n(n.P+n.F*c,"String",l)},x=f.trim=function(e,t){return e=String(l(e)),1&t&&(e=e.replace(h,"")),2&t&&(e=e.replace(v,"")),e};e.exports=f},703:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},704:function(e,t,o){"use strict";var n=o(252);o.n(n).a},705:function(e,t,o){(e.exports=o(42)(!1)).push([e.i,"ul[data-v-beb58d5a]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}ul[data-v-beb58d5a],ul li[data-v-beb58d5a]{display:-webkit-box;display:flex}ul li[data-v-beb58d5a]{margin-left:32px;border-left:1px solid var(--brd-color)}",""])},706:function(e,t,o){"use strict";var n=o(253);o.n(n).a},707:function(e,t,o){(e.exports=o(42)(!1)).push([e.i,".virtual-list[data-v-72134745]{max-height:calc(100vh - 232px)}ul[data-v-72134745]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}",""])},718:function(e,t,o){"use strict";o.r(t);o(220);var n={components:{folder:function(){return o.e(24).then(o.bind(null,736))},request:function(){return o.e(9).then(o.bind(null,737))}},props:{collectionIndex:Number,collection:Object},data:function(){return{showChildren:!1,selectedFolder:{}}},methods:{toggleShowChildren:function(){this.showChildren=!this.showChildren},removeCollection:function(){confirm("你确定要删除这个集合?")&&this.$store.commit("postwoman/removeCollection",{collectionIndex:this.collectionIndex})},editFolder:function(e,t,o){this.$emit("edit-folder",{collectionIndex:e,folder:t,folderIndex:o})}}},l=(o(704),o(33)),d=Object(l.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"flex-wrap"},[o("div",[o("button",{staticClass:"icon",on:{click:e.toggleShowChildren}},[o("i",{directives:[{name:"show",rawName:"v-show",value:!e.showChildren,expression:"!showChildren"}],staticClass:"material-icons"},[e._v("arrow_right")]),e._v(" "),o("i",{directives:[{name:"show",rawName:"v-show",value:e.showChildren,expression:"showChildren"}],staticClass:"material-icons"},[e._v("arrow_drop_down")]),e._v(" "),o("i",{staticClass:"material-icons"},[e._v("folder")]),e._v(" "),o("span",[e._v(e._s(e.collection.name))])])]),e._v(" "),o("v-popover",[o("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"更多",expression:"'更多'"}],staticClass:"tooltip-target icon"},[o("i",{staticClass:"material-icons"},[e._v("more_vert")])]),e._v(" "),o("template",{slot:"popover"},[o("div",[o("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",on:{click:function(t){return e.$emit("add-folder")}}},[o("i",{staticClass:"material-icons"},[e._v("create_new_folder")]),e._v(" "),o("span",[e._v("新目录")])])]),e._v(" "),o("div",[o("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",on:{click:function(t){return e.$emit("edit-collection")}}},[o("i",{staticClass:"material-icons"},[e._v("create")]),e._v(" "),o("span",[e._v("编辑")])])]),e._v(" "),o("div",[o("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",on:{click:e.removeCollection}},[o("i",{staticClass:"material-icons"},[e._v("delete")]),e._v(" "),o("span",[e._v("删除")])])])])],2)],1),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.showChildren,expression:"showChildren"}]},[o("ul",[e._l(e.collection.folders,(function(t,n){return o("li",{key:t.name},[o("folder",{attrs:{folder:t,folderIndex:n,"collection-index":e.collectionIndex},on:{"edit-folder":function(o){return e.editFolder(e.collectionIndex,t,n)},"edit-request":function(t){return e.$emit("edit-request",t)}}})],1)})),e._v(" "),0===e.collection.folders.length&&0===e.collection.requests.length?o("li",[o("label",[e._v("集合暂无内容")])]):e._e()],2),e._v(" "),o("ul",e._l(e.collection.requests,(function(t,n){return o("li",{key:n},[o("request",{attrs:{request:t,"collection-index":e.collectionIndex,"folder-index":-1,"request-index":n},on:{"edit-request":function(o){return e.$emit("edit-request",{request:t,collectionIndex:e.collectionIndex,folderIndex:void 0,requestIndex:n})}}})],1)})),0)])])}),[],!1,null,"beb58d5a",null).exports,r={components:{collection:d,addCollection:function(){return o.e(30).then(o.bind(null,730))},addFolder:function(){return o.e(31).then(o.bind(null,731))},editCollection:function(){return o.e(32).then(o.bind(null,732))},editFolder:function(){return o.e(33).then(o.bind(null,733))},editRequest:function(){return o.e(34).then(o.bind(null,734))},importExportCollections:function(){return o.e(35).then(o.bind(null,735))},VirtualList:function(){return o.e(12).then(o.t.bind(null,716,7))}},data:function(){return{showModalAdd:!1,showModalEdit:!1,showModalImportExport:!1,showModalAddFolder:!1,showModalEditFolder:!1,showModalEditRequest:!1,editingCollection:void 0,editingCollectionIndex:void 0,editingFolder:void 0,editingFolderIndex:void 0,editingRequest:void 0,editingRequestIndex:void 0}},computed:{collections:function(){return this.$store.state.postwoman.collections}},methods:{displayModalAdd:function(e){this.showModalAdd=e},displayModalEdit:function(e){this.showModalEdit=e,e||this.resetSelectedData()},displayModalImportExport:function(e){this.showModalImportExport=e},displayModalAddFolder:function(e){this.showModalAddFolder=e,e||this.resetSelectedData()},displayModalEditFolder:function(e){this.showModalEditFolder=e,e||this.resetSelectedData()},displayModalEditRequest:function(e){this.showModalEditRequest=e,e||this.resetSelectedData()},editCollection:function(e,t){this.$data.editingCollection=e,this.$data.editingCollectionIndex=t,this.displayModalEdit(!0)},addFolder:function(e,t){this.$data.editingCollection=e,this.$data.editingCollectionIndex=t,this.displayModalAddFolder(!0)},editFolder:function(e){var t=e.collectionIndex,o=e.folder,n=e.folderIndex;this.$data.editingCollection=d,this.$data.editingCollectionIndex=t,this.$data.editingFolder=o,this.$data.editingFolderIndex=n,this.displayModalEditFolder(!0)},editRequest:function(e){var t=e.request,o=e.collectionIndex,n=e.folderIndex,l=e.requestIndex;this.$data.editingCollectionIndex=o,this.$data.editingFolderIndex=n,this.$data.editingRequest=t,this.$data.editingRequestIndex=l,this.displayModalEditRequest(!0)},resetSelectedData:function(){this.$data.editingCollection=void 0,this.$data.editingCollectionIndex=void 0,this.$data.editingFolder=void 0,this.$data.editingFolderIndex=void 0,this.$data.editingRequest=void 0,this.$data.editingRequestIndex=void 0}}},c=(o(706),Object(l.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"collections-wrapper"},[o("addCollection",{attrs:{show:e.showModalAdd},on:{"hide-modal":function(t){return e.displayModalAdd(!1)}}}),e._v(" "),o("editCollection",{attrs:{show:e.showModalEdit,editingCollection:e.editingCollection,editingCollectionIndex:e.editingCollectionIndex},on:{"hide-modal":function(t){return e.displayModalEdit(!1)}}}),e._v(" "),o("addFolder",{attrs:{show:e.showModalAddFolder,collection:e.editingCollection,collectionIndex:e.editingCollectionIndex},on:{"hide-modal":function(t){return e.displayModalAddFolder(!1)}}}),e._v(" "),o("editFolder",{attrs:{show:e.showModalEditFolder,collection:e.editingCollection,collectionIndex:e.editingCollectionIndex,folder:e.editingFolder,folderIndex:e.editingFolderIndex},on:{"hide-modal":function(t){return e.displayModalEditFolder(!1)}}}),e._v(" "),o("editRequest",{attrs:{show:e.showModalEditRequest,collectionIndex:e.editingCollectionIndex,folderIndex:e.editingFolderIndex,request:e.editingRequest,requestIndex:e.editingRequestIndex},on:{"hide-modal":function(t){return e.displayModalEditRequest(!1)}}}),e._v(" "),o("importExportCollections",{attrs:{show:e.showModalImportExport},on:{"hide-modal":function(t){return e.displayModalImportExport(!1)}}}),e._v(" "),o("div",{staticClass:"flex-wrap"},[o("div",[o("button",{staticClass:"icon",on:{click:function(t){return e.displayModalAdd(!0)}}},[o("i",{staticClass:"material-icons"},[e._v("add")]),e._v(" "),o("span",[e._v("新的")])])]),e._v(" "),o("div",[o("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"导入 / 导出",expression:"'导入 / 导出'"}],staticClass:"icon",on:{click:function(t){return e.displayModalImportExport(!0)}}},[o("i",{staticClass:"material-icons"},[e._v("import_export")])])])]),e._v(" "),o("virtual-list",{staticClass:"virtual-list",class:{filled:e.collections.length},attrs:{size:152,remain:Math.min(5,e.collections.length)}},[o("ul",[e._l(e.collections,(function(t,n){return o("li",{key:t.name},[o("collection",{attrs:{"collection-index":n,collection:t},on:{"edit-collection":function(o){return e.editCollection(t,n)},"add-folder":function(o){return e.addFolder(t,n)},"edit-folder":function(t){return e.editFolder(t)},"edit-request":function(t){return e.editRequest(t)}}})],1)})),e._v(" "),0===e.collections.length?o("li",[o("label",[e._v("集合是空的")])]):e._e()],2)])],1)}),[],!1,null,"72134745",null));t.default=c.exports}}]);