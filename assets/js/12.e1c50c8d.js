(window.webpackJsonp=window.webpackJsonp||[]).push([[12,44],{398:function(t,a,n){t.exports=n.p+"assets/img/bg.cf398a4e.svg"},402:function(t,a,n){},425:function(t,a,n){"use strict";n.r(a);var e={name:"Valine",data:()=>({uuid:(new Date).getTime()+Math.round(1e4*Math.random())}),mounted(){new(n(449))({el:"#valine-wrap-"+this.uuid,notify:!1,verify:!1,avatar:"robohash",placeholder:"",visitor:!0,recordIP:!0,meta:["nick","mail"],path:this.$page.frontmatter&&this.$page.frontmatter.config&&this.$page.frontmatter.config.valineId?this.$page.frontmatter.config.valineId:this.$page.regularPath,...this.$site.themeConfig.valine})}},i=(n(428),n(19)),r=Object(i.a)(e,(function(){var t=this._self._c;return t("div",{staticClass:"valine-wrap"},[t("div",{staticClass:"valine-module",attrs:{id:"valine-wrap-"+this.uuid}})])}),[],!1,null,null,null);a.default=r.exports},428:function(t,a,n){"use strict";n(402)},434:function(t,a,n){},477:function(t,a,n){"use strict";n(434)},487:function(t,a,n){"use strict";n.r(a);var e={components:{Valine:n(425).default},props:{bannerImg:{type:String,default:""}},data:()=>({backgroundImage:"url("+n(398)+")"}),computed:{},mounted(){},methods:{localhref(t){window.open(t)}}},i=(n(477),n(19)),r=Object(i.a)(e,(function(){var t=this,a=t._self._c;return a("div",{staticClass:"friend-wrap"},[a("div",{staticClass:"bg-wrap",style:{backgroundImage:t.$page.frontmatter.backgroundImage?`url(${t.$page.frontmatter.backgroundImage})`:t.backgroundImage}}),t._v(" "),a("main",[t._m(0),t._v(" "),a("div",{staticClass:"friend-card-wrap-box"},[a("div",{staticClass:"friend-card-wrap"},t._l(t.$page.frontmatter.friendLink||[],(function(n){return a("div",{key:n.href+n.icon,staticClass:"friend-card",on:{click:function(a){return t.localhref(n.href)}}},[a("div",[a("el-image",{attrs:{lazy:"",src:n.icon},scopedSlots:t._u([{key:"error",fn:function(){return[a("div",{staticClass:"image-error-slot"},[a("i",{staticClass:"el-icon-picture-outline"})])]},proxy:!0},{key:"placeholder",fn:function(){return[a("div",{staticClass:"image-error-slot"},[a("i",{staticClass:"el-icon-picture-outline"})])]},proxy:!0}],null,!0)}),t._v(" "),a("div",[a("a",[t._v(t._s(n.name))]),t._v(" "),a("p",[t._v(t._s(n.description))])])],1)])})),0)]),t._v(" "),a("div",{staticClass:"valine-wrap"},[t.$site.themeConfig.valine.enable?a("Valine"):t._e()],1)])])}),[function(){var t=this,a=t._self._c;return a("div",{staticClass:"rule-card"},[a("p",{staticStyle:{"font-size":"20px","margin-bottom":"30px"}},[t._v("友链，申请规则")]),t._v(" "),a("p",[t._v("\n                如果要和本站交换友链，请按照以下格式发送到\n                "),a("a",{attrs:{href:"mailto:664652740@qq.com"}},[t._v("664652740@qq.com")]),t._v("，或在下方留言区留言\n            ")]),t._v(" "),a("p",[t._v("如果我没有回复的话，可以直接滴滴QQ，一般都是我没看见")]),t._v(" "),a("div",{staticClass:"format-wrap"},[a("p",[t._v("名字： Ericlin")]),t._v(" "),a("p",[t._v("\n                    地址：\n                    "),a("a",{attrs:{href:"https://www.sanghangning.cn"}},[t._v("https://www.sanghangning.cn")])]),t._v(" "),a("p",[t._v("描述： 说说我的生活")]),t._v(" "),a("p",[t._v("头像： https://cdn.chenyingshuang.cn/index/avatar.jpg")])])])}],!1,null,"32326512",null);a.default=r.exports}}]);