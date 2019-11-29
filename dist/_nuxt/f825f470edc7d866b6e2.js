(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{239:function(t,e,o){var content=o(670);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(43).default)("5d3b9c9c",content,!0,{sourceMap:!1})},669:function(t,e,o){"use strict";var n=o(239);o.n(n).a},670:function(t,e,o){(t.exports=o(42)(!1)).push([t.i,"div.log{margin:4px;padding:8px 16px;width:calc(100% - 8px);border-radius:8px;background-color:var(--bg-dark-color);color:var(--fg-color);height:256px;overflow:auto}div.log,div.log span{font-size:16px;font-family:Roboto Mono,monospace;font-weight:400}div.log span{display:block;white-space:pre-wrap;word-wrap:break-word;word-break:break-all}",""])},720:function(t,e,o){"use strict";o.r(e);o(10),o(7),o(21),o(34),o(56),o(92);var n={components:{"pw-section":function(){return o.e(1).then(o.bind(null,263))}},data:function(){return{connectionState:!1,url:"wss://echo.websocket.org",socket:null,communication:{log:null,input:""},connectionSSEState:!1,server:"https://express-eventsource.herokuapp.com/events",sse:null,events:{log:null,input:""}}},computed:{toggleConnectionVerb:function(){return this.connectionState?"断开连接":"连接"},urlValid:function(){return new RegExp("^(wss?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+@]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(this.url)},toggleSSEConnectionVerb:function(){return this.connectionSSEState?"停止":"开始"},serverValid:function(){return new RegExp("^(http(s)?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+@]*)*(\\?[:\\;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(this.server)}},methods:{toggleConnection:function(){return this.connectionState?this.disconnect():this.connect()},connect:function(){var t=this;this.communication.log=[{payload:"正在连接到 ".concat(this.url,"..."),source:"info",color:"var(--ac-color)"}];try{this.socket=new WebSocket(this.url),this.socket.onopen=function(e){t.connectionState=!0,t.communication.log=[{payload:"连接到 ".concat(t.url,"."),source:"info",color:"var(--ac-color)",ts:(new Date).toLocaleTimeString()}],t.$toast.success("连接完成",{icon:"sync"})},this.socket.onerror=function(e){t.handleError()},this.socket.onclose=function(e){t.connectionState=!1,t.communication.log.push({payload:"断开链接 ".concat(t.url,"."),source:"info",color:"#ff5555",ts:(new Date).toLocaleTimeString()}),t.$toast.error("断开连接",{icon:"sync_disabled"})},this.socket.onmessage=function(e){t.communication.log.push({payload:e.data,source:"server",ts:(new Date).toLocaleTimeString()})}}catch(t){this.handleError(t),this.$toast.error("发生了一些错误!",{icon:"error"})}},disconnect:function(){this.socket.close()},handleError:function(t){this.disconnect(),this.connectionState=!1,this.communication.log.push({payload:"发生了一个错误.",source:"info",color:"#ff5555",ts:(new Date).toLocaleTimeString()}),null!==t&&this.communication.log.push({payload:t,source:"info",color:"#ff5555",ts:(new Date).toLocaleTimeString()})},sendMessage:function(){var t=this.communication.input;this.socket.send(t),this.communication.log.push({payload:t,source:"client",ts:(new Date).toLocaleTimeString()}),this.communication.input=""},collapse:function(t){var e=t.target.parentNode.className;document.getElementsByClassName(e)[0].classList.toggle("hidden")},getSourcePrefix:function(source){var t={info:"\tℹ️ [INFO]:\t",client:"\t👽 [SENT]:\t",server:"\t📥 [RECEIVED]:\t"};return Object.keys(t).includes(source)?t[source]:""},toggleSSEConnection:function(){return this.connectionSSEState?this.stop():this.start()},start:function(){var t=this;if(this.events.log=[{payload:"正在连接到 ".concat(this.server,"..."),source:"info",color:"var(--ac-color)"}],"undefined"!=typeof EventSource)try{this.sse=new EventSource(this.server),this.sse.onopen=function(e){t.connectionSSEState=!0,t.events.log=[{payload:"连接到 ".concat(t.server,"."),source:"info",color:"var(--ac-color)",ts:(new Date).toLocaleTimeString()}],t.$toast.success("连接成功",{icon:"sync"})},this.sse.onerror=function(e){t.handleSSEError()},this.sse.onclose=function(e){t.connectionSSEState=!1,t.events.log.push({payload:"断开连接 ".concat(t.server,"."),source:"info",color:"#ff5555",ts:(new Date).toLocaleTimeString()}),t.$toast.error("断开了连接",{icon:"sync_disabled"})},this.sse.onmessage=function(e){t.events.log.push({payload:e.data,source:"server",ts:(new Date).toLocaleTimeString()})}}catch(t){this.handleSSEError(t),this.$toast.error("发生了一些错误!",{icon:"error"})}else this.events.log=[{payload:"这个浏览器似乎没有服务器发送事件的支持.",source:"info",color:"#ff5555",ts:(new Date).toLocaleTimeString()}]},handleSSEError:function(t){this.stop(),this.connectionSSEState=!1,this.events.log.push({payload:"发生了一个错误.",source:"info",color:"#ff5555",ts:(new Date).toLocaleTimeString()}),null!==t&&this.events.log.push({payload:t,source:"info",color:"#ff5555",ts:(new Date).toLocaleTimeString()})},stop:function(){this.sse.onclose(),this.sse.close()}},updated:function(){this.$nextTick((function(){var t=document.getElementById("log");t.scrollBy(0,t.scrollHeight+100)}))}},r=(o(669),o(33)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page"},[o("section",{attrs:{id:"options"}},[o("input",{attrs:{id:"tab-one",type:"radio",name:"options",checked:"checked"}}),t._v(" "),o("label",{attrs:{for:"tab-one"}},[t._v("WebSocket")]),t._v(" "),o("div",{staticClass:"tab"},[o("pw-section",{ref:"request",staticClass:"blue",attrs:{label:"请求"}},[o("ul",[o("li",[o("label",{attrs:{for:"url"}},[t._v("URL")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],class:{error:!t.urlValid},attrs:{id:"url",type:"url"},domProps:{value:t.url},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.urlValid&&t.toggleConnection()},input:function(e){e.target.composing||(t.url=e.target.value)}}})]),t._v(" "),o("div",[o("li",[o("label",{staticClass:"hide-on-small-screen",attrs:{for:"connect"}},[t._v(" ")]),t._v(" "),o("button",{attrs:{disabled:!t.urlValid,id:"connect",name:"connect"},on:{click:t.toggleConnection}},[t._v("\n                "+t._s(t.toggleConnectionVerb)+"\n                "),o("span",[t.connectionState?t._e():o("i",{staticClass:"material-icons"},[t._v("sync")]),t._v(" "),t.connectionState?o("i",{staticClass:"material-icons"},[t._v("sync_disabled")]):t._e()])])])])])]),t._v(" "),o("pw-section",{ref:"response",staticClass:"purple",attrs:{label:"连接",id:"response"}},[o("ul",[o("li",[o("label",{attrs:{for:"log"}},[t._v("日志")]),t._v(" "),o("div",{staticClass:"log",attrs:{id:"log",name:"log"}},[t.communication.log?o("span",t._l(t.communication.log,(function(e,n){return o("span",{key:n,style:{color:e.color}},[t._v("@ "+t._s(e.ts)+t._s(t.getSourcePrefix(e.source))+t._s(e.payload))])})),0):o("span",[t._v("(等待连接)")])])])]),t._v(" "),o("ul",[o("li",[o("label",{attrs:{for:"message"}},[t._v("消息")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.communication.input,expression:"communication.input"}],attrs:{id:"message",name:"message",type:"text",readonly:!t.connectionState},domProps:{value:t.communication.input},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.connectionState&&t.sendMessage()},input:function(e){e.target.composing||t.$set(t.communication,"input",e.target.value)}}})]),t._v(" "),o("div",[o("li",[o("label",{staticClass:"hide-on-small-screen",attrs:{for:"send"}},[t._v(" ")]),t._v(" "),o("button",{attrs:{id:"send",name:"send",disabled:!t.connectionState},on:{click:t.sendMessage}},[t._v("\n                发送\n                "),o("span",[o("i",{staticClass:"material-icons"},[t._v("send")])])])])])])])],1),t._v(" "),o("input",{attrs:{id:"tab-two",type:"radio",name:"options"}}),t._v(" "),o("label",{attrs:{for:"tab-two"}},[t._v("SSE")]),t._v(" "),o("div",{staticClass:"tab"},[o("pw-section",{ref:"request",staticClass:"blue",attrs:{label:"请求"}},[o("ul",[o("li",[o("label",{attrs:{for:"server"}},[t._v("服务器")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.server,expression:"server"}],class:{error:!t.serverValid},attrs:{id:"server",type:"url"},domProps:{value:t.server},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.serverValid&&t.toggleSSEConnection()},input:function(e){e.target.composing||(t.server=e.target.value)}}})]),t._v(" "),o("div",[o("li",[o("label",{staticClass:"hide-on-small-screen",attrs:{for:"start"}},[t._v(" ")]),t._v(" "),o("button",{attrs:{disabled:!t.serverValid,id:"start",name:"start"},on:{click:t.toggleSSEConnection}},[t._v("\n                "+t._s(t.toggleSSEConnectionVerb)+"\n                "),o("span",[t.connectionSSEState?t._e():o("i",{staticClass:"material-icons"},[t._v("sync")]),t._v(" "),t.connectionSSEState?o("i",{staticClass:"material-icons"},[t._v("sync_disabled")]):t._e()])])])])])]),t._v(" "),o("pw-section",{ref:"response",staticClass:"purple",attrs:{label:"链接",id:"response"}},[o("ul",[o("li",[o("label",{attrs:{for:"log"}},[t._v("事件")]),t._v(" "),o("div",{staticClass:"log",attrs:{id:"log",name:"log"}},[t.events.log?o("span",t._l(t.events.log,(function(e,n){return o("span",{key:n,style:{color:e.color}},[t._v("@ "+t._s(e.ts)+t._s(t.getSourcePrefix(e.source))+t._s(e.payload))])})),0):o("span",[t._v("(等待连接)")])]),t._v(" "),o("div",{attrs:{id:"result"}})])])])],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);