(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{247:function(e,t,n){var content=n(693);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(43).default)("534fa6f1",content,!0,{sourceMap:!1})},692:function(e,t,n){"use strict";var l=n(247);n.n(l).a},693:function(e,t,n){(e.exports=n(42)(!1)).push([e.i,".type-box{padding:16px;margin:4px 0}.type-desc{color:var(--fg-light-color);margin-top:4px}.type-title{font-weight:700}",""])},724:function(e,t,n){"use strict";n.r(t);var l={components:{"gql-field":function(){return n.e(10).then(n.bind(null,723))}},props:{gqlType:{}}},o=(n(692),n(33)),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"type-box"},[n("div",{staticClass:"type-title"},[e._v(e._s(e.gqlType.name))]),e._v(" "),e.gqlType.description?n("div",{staticClass:"type-desc"},[e._v("\n    "+e._s(e.gqlType.description)+"\n  ")]):e._e(),e._v(" "),e.gqlType.getFields?n("div",[n("h5",[e._v("字段")]),e._v(" "),e._l(e.gqlType.getFields(),(function(e){return n("div",{key:e.name},[n("gql-field",{attrs:{gqlField:e}})],1)}))],2):e._e()])}),[],!1,null,null,null);t.default=component.exports}}]);