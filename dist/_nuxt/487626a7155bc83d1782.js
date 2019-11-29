(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{729:function(e,t,o){"use strict";o.r(t);o(28),o(15),o(10),o(7),o(21),o(27);var r=o(9);function n(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}var l={props:{show:Boolean,editingRequest:Object},components:{modal:function(){return o.e(0).then(o.bind(null,738))}},data:function(){return{defaultRequestName:"My Request",requestData:{name:void 0,collectionIndex:void 0,folderIndex:void 0,requestIndex:void 0}}},watch:{"requestData.collectionIndex":function(){this.$data.requestData.folderIndex=void 0,this.$data.requestData.requestIndex=void 0},"requestData.folderIndex":function(){this.$data.requestData.requestIndex=void 0}},computed:{folders:function(){return void 0!==this.$data.requestData.collectionIndex?this.$store.state.postwoman.collections[this.$data.requestData.collectionIndex].folders:[]},requests:function(){if(!(void 0!==this.$data.requestData.collectionIndex))return[];if(void 0!==this.$data.requestData.folderIndex){var e=this.$store.state.postwoman.collections[this.$data.requestData.collectionIndex].folders[this.$data.requestData.folderIndex].requests;return e}return this.$store.state.postwoman.collections[this.$data.requestData.collectionIndex].requests}},methods:{saveRequestAs:function(){if(void 0===this.$data.requestData.collectionIndex)this.$toast.error("选择一个集合",{icon:"error"});else{var e=function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(source,!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):n(source).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},this.$props.editingRequest,{name:this.$data.requestData.name||this.$data.defaultRequestName,collection:this.$data.requestData.collectionIndex});this.$store.commit("postwoman/saveRequestAs",{request:e,collectionIndex:this.$data.requestData.collectionIndex,folderIndex:this.$data.requestData.folderIndex,requestIndex:this.$data.requestData.requestIndex}),this.hideModal()}},hideModal:function(){this.$emit("hide-modal"),this.$emit("hide-model")}}},d=o(33),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.show?o("modal",{on:{close:e.hideModal}},[o("div",{attrs:{slot:"header"},slot:"header"},[o("ul",[o("li",[o("div",{staticClass:"flex-wrap"},[o("h3",{staticClass:"title"},[e._v("保存请求")]),e._v(" "),o("div",[o("button",{staticClass:"icon",on:{click:e.hideModal}},[o("i",{staticClass:"material-icons"},[e._v("close")])])])])])])]),e._v(" "),o("div",{attrs:{slot:"body"},slot:"body"},[o("ul",[o("li",[o("label",{attrs:{for:"selectLabel"}},[e._v("标签")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.requestData.name,expression:"requestData.name"}],attrs:{type:"text",id:"selectLabel",placeholder:e.defaultRequestName,list:"preCollectionLabels"},domProps:{value:e.requestData.name},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.saveRequestAs(t)},input:function(t){t.target.composing||e.$set(e.requestData,"name",t.target.value)}}}),e._v(" "),o("datalist",{attrs:{id:"preCollectionLabels"}},[o("option",{attrs:{value:"Login"}}),e._v(" "),o("option",{attrs:{value:"Logout"}}),e._v(" "),o("option",{attrs:{value:"Bug"}}),e._v(" "),o("option",{attrs:{value:"Users"}})]),e._v(" "),o("label",{attrs:{for:"selectCollection"}},[e._v("集合")]),e._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.requestData.collectionIndex,expression:"requestData.collectionIndex"}],attrs:{type:"text",id:"selectCollection"},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.requestData,"collectionIndex",t.target.multiple?o:o[0])}}},[o("option",{key:void 0,attrs:{hidden:"",disabled:"",selected:""},domProps:{value:void 0}},[e._v("选择一个集合")]),e._v(" "),e._l(e.$store.state.postwoman.collections,(function(t,r){return o("option",{key:r,domProps:{value:r}},[e._v(e._s(t.name))])}))],2),e._v(" "),o("label",{attrs:{for:"selectFolder"}},[e._v("目录")]),e._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.requestData.folderIndex,expression:"requestData.folderIndex"}],attrs:{type:"text",id:"selectFolder"},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.requestData,"folderIndex",t.target.multiple?o:o[0])}}},[o("option",{key:void 0,domProps:{value:void 0}},[e._v("/")]),e._v(" "),e._l(e.folders,(function(t,r){return o("option",{key:r,domProps:{value:r}},[e._v(e._s(t.name))])}))],2),e._v(" "),o("label",{attrs:{for:"selectRequest"}},[e._v("请求")]),e._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.requestData.requestIndex,expression:"requestData.requestIndex"}],attrs:{type:"text",id:"selectRequest"},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.requestData,"requestIndex",t.target.multiple?o:o[0])}}},[o("option",{key:void 0,domProps:{value:void 0}},[e._v("/")]),e._v(" "),e._l(e.requests,(function(t,r){return o("option",{key:r,domProps:{value:r}},[e._v(e._s(t.name))])}))],2)])])]),e._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("ul",[o("li",[o("button",{staticClass:"icon",on:{click:e.saveRequestAs}},[o("i",{staticClass:"material-icons"},[e._v("save")]),e._v(" "),o("span",[e._v("保存")])])])])])]):e._e()}),[],!1,null,null,null);t.default=component.exports}}]);