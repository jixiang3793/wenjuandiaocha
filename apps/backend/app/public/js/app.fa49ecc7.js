(function(t){function e(e){for(var i,o,s=e[0],u=e[1],c=e[2],f=0,d=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},r={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="public/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1e61":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app-root"}},[n("div",{staticClass:"px-32"},[n("div",{staticClass:"text-center"},[n("h1",[t._v("南安市维护妇女儿童合法权益实施情况调查问卷统计结果")]),n("h5",[t._v("参与总人数："+t._s(t.result.length))])]),t.areaLoading?[n("div",{staticClass:"loading"}),n("div",{staticClass:"text-center"},[t._v("正在加载数据中，请稍等...")])]:t._e(),t.areaLoading?t._e():[n("div",[n("h3",[t._v("参与人数地区分布")]),n("div",{staticStyle:{color:"#aaa","margin-bottom":"12px"}},[t._v(" 可点击查看地区答题情况 ")]),n("div",{staticClass:"d-flex"},[n("div",{staticClass:"area-item",on:{click:function(e){return t.analysis(t.timulist,t.result)}}},[n("div",[t._v(t._s(t.result.length)+"人")]),n("div",[t._v("100%")]),n("div",{staticClass:"area-item-title"},[t._v("南安市")])]),t._l(t.areaMap,(function(e,i){return n("div",{key:i,staticClass:"area-item",on:{click:function(n){return t.analysis(t.timulist,e)}}},[n("div",[t._v(t._s(e.length)+"人")]),n("div",[t._v(t._s(t.calcPer(e.length))+"%")]),n("div",{staticClass:"area-item-title"},[t._v(t._s(t.formatArea(i)))])])}))],2)])],t.analysisLoading?[n("div",{staticClass:"loading"}),n("div",{staticClass:"text-center"},[t._v("正在分析数据中，请稍等...")])]:t._e(),!t.analysisLoading&&t.current.length>0?t._l(t.timutree,(function(e,i){return n("div",{key:i},[n("h2",[t._v(t._s(i))]),t._l(e,(function(e,i){return n("div",{key:i},[n("h3",[t._v(t._s(i))]),t._l(e,(function(e,i){return n("div",{key:i},[n("h4",[t._v(t._s(e.title))]),"input"!==e.mode?n("div",t._l(e.options,(function(e,i){return n("div",{key:i,staticClass:"timu-option-item"},[t._v(" "+t._s(e.label)+"("+t._s(e.percent||0)+"%-"+t._s(e.count||0)+"人) ")])})),0):t._e(),"input"===e.mode?n("div",t._l(e.values,(function(e,i){return n("div",{key:i,staticClass:"timu-option-item"},[t._v(" "+t._s(e)+" ")])})),0):t._e()])}))],2)}))],2)})):t._e()],2)])},a=[],o=(n("159b"),n("7db0"),n("d3b7"),n("ddb0"),n("1276"),n("ac1f"),{components:{},data:function(){return{timulist:[],timutree:{},result:[],numlist:["一","二","三","四","五","六","七","八","九","十"],areaMap:{},areaLoading:!1,analysisLoading:!1,current:[]}},created:function(){this.getTimus()},methods:{genTree:function(t,e){t.forEach((function(t){e[t.block]||(e[t.block]={}),e[t.block][t.category]||(e[t.block][t.category]=[]),e[t.block][t.category].push(t)}))},analysis:function(t,e){this.current=e,this.analysisLoading=!0,t.forEach((function(t){t.options.forEach((function(t){return delete t.count})),e.forEach((function(e,n){var i=e.answer[t.title];if(i)if(Array.isArray(i)&&"checkbox"===t.mode)i.forEach((function(e){var i=t.options.find((function(t){return t.value===e}));i||(console.log(t.title+n),i=t.options[0]),i.count||(i.count=0),i.count++}));else if("input"===t.mode)t.values||(t.values=[]),t.values.push(i);else{var r=t.options.find((function(t){return t.value===i}));r||(console.log(t.title+n),r=t.options[0]),r.count||(r.count=0),r.count++}})),t.options.forEach((function(t){t.percent=Math.round(t.count/e.length*100)}))})),this.analysisLoading=!1},getTimus:function(){var t=this;this.areaLoading=!0,this.$http.get("/timu").then((function(e){t.timulist=e.data,t.genTree(t.timulist,t.timutree),t.getResult()}))},getResult:function(){var t=this;this.$http.get("/answer").then((function(e){t.result=e.data,t.getArea(t.timulist,t.result),t.areaLoading=!1}))},getArea:function(t,e){var n=this,i=t[0];e.forEach((function(t){n.areaMap[t.answer[i.title]]||(n.areaMap[t.answer[i.title]]=[]),n.areaMap[t.answer[i.title]].push(t)}))},calcPer:function(t){return Math.round(t/this.result.length*100)},formatArea:function(t){return t.split("、")[1]+"镇"}}}),s=o,u=(n("ca0f"),n("2877")),c=Object(u["a"])(s,r,a,!1,null,"3fa39467",null),l=c.exports,f=n("bc3a"),d=n.n(f),p=n("2106"),v=n.n(p);i["a"].use(v.a,d.a),i["a"].config.productionTip=!1,window.vm=new i["a"]({render:function(t){return t(l)}}).$mount("#app")},ca0f:function(t,e,n){"use strict";n("1e61")}});
//# sourceMappingURL=app.fa49ecc7.js.map