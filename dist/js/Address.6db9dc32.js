(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Address"],{"0a03":function(t,e,n){"use strict";var a=n("9079"),s=n.n(a);s.a},"1b0f":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.FlagSeek?n("div",{staticClass:"header"},[n("div",{attrs:{slot:"left"},slot:"left"},[n("van-icon",{attrs:{name:"arrow-left"},on:{click:function(e){return t.GoBack()}}})],1),n("div",{attrs:{slot:"center"},slot:"center"},[n("h3",[t._v("搜索")])])]):t._e(),t.FlagLogin?n("div",{staticClass:"header"},[n("div",{attrs:{slot:"left"},slot:"left"},[n("van-icon",{attrs:{name:"arrow-left"},on:{click:function(e){return t.GoBack()}}})],1),n("div",{attrs:{slot:"center"},slot:"center"},[n("h3",[t._v("密码登录")])])]):t._e(),t.FlagMine?n("div",{staticClass:"header"},[n("div",{attrs:{slot:"left"},slot:"left"},[n("van-icon",{attrs:{name:"arrow-left"},on:{click:function(e){return t.GoBack()}}})],1),n("div",{attrs:{slot:"center"},slot:"center"},[n("h3",[t._v("我的")])])]):t._e(),t.FlagIndent?n("div",{staticClass:"header"},[n("div",{attrs:{slot:"left"},slot:"left"},[n("van-icon",{attrs:{name:"arrow-left"},on:{click:function(e){return t.GoBack()}}})],1),n("div",{attrs:{slot:"center"},slot:"center"},[n("h3",[t._v("订单列表")])])]):t._e(),t.FlagInfo?n("div",{staticClass:"header"},[n("div",{attrs:{slot:"left"},slot:"left"},[n("van-icon",{attrs:{name:"arrow-left"},on:{click:function(e){return t.GoBack()}}})],1),n("div",{attrs:{slot:"center"},slot:"center"},[n("h3",[t._v("账户信息")])])]):t._e(),t.FlagAddress?n("div",{staticClass:"header"},[n("div",{attrs:{slot:"left"},slot:"left"},[n("van-icon",{attrs:{name:"arrow-left"},on:{click:function(e){return t.GoBack()}}})],1),n("div",{attrs:{slot:"center"},slot:"center"},[n("h3",[t._v("编辑地址")])]),n("div",{attrs:{slot:"right"},slot:"right"},[n("span",{on:{click:function(e){return t.bian()}}},[t._v(t._s(this.ClickChange))])])]):t._e(),t.FlagAdd?n("div",{staticClass:"header"},[n("div",{attrs:{slot:"left"},slot:"left"},[n("van-icon",{attrs:{name:"arrow-left"},on:{click:function(e){return t.GoBack()}}})],1),n("div",{attrs:{slot:"center"},slot:"center"},[n("h3",[t._v("新增地址")])])]):t._e(),t.FlagAddDetail?n("div",{staticClass:"header"},[n("div",{attrs:{slot:"left"},slot:"left"},[n("van-icon",{attrs:{name:"arrow-left"},on:{click:function(e){return t.GoBack()}}})],1),n("div",{attrs:{slot:"center"},slot:"center"},[n("h3",[t._v("搜索地址")])])]):t._e()])},s=[];function r(){document.documentElement.style.fontSize=document.documentElement.clientWidth/4.5+"px"}r(),window.onresize=r;var i={props:["FlagSeek","FlagLogin","FlagMine","FlagIndent","FlagInfo","FlagAddress","FlagAdd","FlagAddDetail"],data:function(){return{update:!1,ClickChange:"编辑"}},methods:{GoBack:function(){this.$router.go(-1)},bian:function(){"编辑"==this.ClickChange?(this.ClickChange="完成",this.update=!0):(this.ClickChange="编辑",this.update=!1),this.$emit("dd",this.update)}},mounted:function(){this.update=!0}},o=i,l=(n("de3c"),n("6691")),c=Object(l["a"])(o,a,s,!1,null,"2ba9cfe2",null);e["a"]=c.exports},9079:function(t,e,n){},d11d:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"address"},[n("Header",{attrs:{FlagAddress:!0,FlagLogin:!1,FlagSeek:!1,FlagMine:!1},on:{dd:function(e){return t.xx(e)}}}),n("div",{staticClass:"ding"}),t._l(t.arr,function(e,a){return n("div",{key:a,staticClass:"nei"},[n("p",[t._v(t._s(e.address_detail))]),n("span",[t._v(t._s(e.phone))]),t.Flag?n("b",{on:{click:function(n){return t.del(a,e.id)}}},[t._v("×")]):t._e()])}),n("router-link",{attrs:{to:"/add"}},[n("div",{staticClass:"add"},[n("span",[t._v("新增地址")]),n("span",[n("van-icon",{attrs:{name:"arrow"}})],1)])])],2)},s=[],r=n("1b0f"),i={data:function(){return{Flag:"",arr:[]}},components:{Header:r["a"]},methods:{xx:function(t){console.log(t),this.Flag=t},del:function(t,e){var n=this,a=this.$store.state.ma.user_id;this.$http.delete("http://elm.cangdu.org/v1/users/"+a+"/addresses/"+e).then(function(e){console.log(e),e.data.success&&n.arr.splice(t,1)})}},mounted:function(){var t=this,e=this.$store.state.ma.user_id;this.$http.get("http://elm.cangdu.org/v1/users/"+e+"/addresses").then(function(e){console.log(e),t.arr=e.data})}},o=i,l=(n("0a03"),n("6691")),c=Object(l["a"])(o,a,s,!1,null,"8bcebfe6",null);e["default"]=c.exports},de3c:function(t,e,n){"use strict";var a=n("fde1"),s=n.n(a);s.a},fde1:function(t,e,n){}}]);
//# sourceMappingURL=Address.6db9dc32.js.map