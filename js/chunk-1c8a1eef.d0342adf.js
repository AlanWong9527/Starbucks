(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c8a1eef"],{"21b2":function(t,a,e){},2272:function(t,a,e){"use strict";e("ba2b")},"2bb4":function(t,a,e){"use strict";e("21b2")},"928f":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bg-box"},[e("div",{staticClass:"bg"}),e("div",{staticClass:"bg-content"},[t._t("default")],2)])},n=[],i={name:"BgBox"},d=i,o=(e("2bb4"),e("2877")),r=Object(o["a"])(d,s,n,!1,null,"d0158bc0",null);a["a"]=r.exports},a821:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"address my-address"},[e("van-nav-bar",{attrs:{title:"地址列表","left-text":"返回","left-arrow":"",fixed:""},on:{"click-left":t.back}}),e("BgBox",[t.list.length>0?e("div",[e("van-address-list",{attrs:{list:t.list,"default-tag-text":"默认",switchable:!1},on:{add:t.add,edit:t.edit}})],1):e("div",[e("van-empty",{attrs:{description:"没有地址数据"}})],1)])],1)},n=[],i=(e("99af"),e("d81d"),e("928f")),d=(e("ce26"),{name:"Address",data:function(){return{chosenAddressId:"",list:[]}},components:{BgBox:i["a"]},created:function(){this.getAddressData()},methods:{back:function(){this.$router.go(-1)},getAddressData:function(){var t=this,a=localStorage.getItem("__tk");if(!a)return this.$toast("请先登录"),this.$router.push({name:"Login"});this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:"/findAddress",params:{appkey:this.appkey,tokenString:a}}).then((function(a){t.$toast.clear(),700==a.data.code?t.$router.push({name:"Login"}):2e4==a.data.code&&(a.data.result.map((function(t){t.isDefault=Boolean(t.isDefault),t.id=t.aid,t.address="".concat(t.province).concat(t.city).concat(t.county).concat(t.addressDetail)})),t.list=a.data.result)})).catch((function(a){t.$toast.clear()}))},add:function(){this.$router.push({name:"NewAddress"})},edit:function(t){this.$router.push({name:"NewAddress",query:{aid:t.aid}})}}}),o=d,r=(e("2272"),e("2877")),c=Object(r["a"])(o,s,n,!1,null,"3a000138",null);a["default"]=c.exports},ba2b:function(t,a,e){},ce26:function(t,a,e){},d81d:function(t,a,e){"use strict";var s=e("23e7"),n=e("b727").map,i=e("1dde"),d=e("ae40"),o=i("map"),r=d("map");s({target:"Array",proto:!0,forced:!o||!r},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-1c8a1eef.d0342adf.js.map