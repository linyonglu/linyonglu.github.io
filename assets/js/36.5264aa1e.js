(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{398:function(t,e,r){},433:function(t,e,r){"use strict";r(398)},447:function(t,e,r){"use strict";r.r(e);var o={data:()=>({directory:[]}),methods:{getDirectory(){this.directory=[...document.querySelectorAll(this.$page.frontmatter.config&&this.$page.frontmatter.config.dirTag?this.$page.frontmatter.config.dirTag:"h3, h4, h5")].map(t=>{let e=[...t.querySelectorAll("a")][0].getAttribute("href");return{type:t.tagName,value:e.replace(/[\r\n]/g,"").replace(/[\#\_]/g,"").replace(/[\-]/g,"."),href:e.replace(/[\r\n]/g,"").replace(/[\s\.]/g,"-")}})},scrollTo(t){window.history.pushState({},0,window.location.href.split("#")[0]+t),t=t.split("#")[1].toLowerCase(),window.scrollTo({top:document.getElementById(t).offsetTop-100,behavior:"smooth"})}}},a=(r(433),r(15)),i=Object(a.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"directory-wrap"},[e("header",[t._v("目录")]),t._v(" "),e("div",{staticClass:"directory-content-wrap"},[e("ul",t._l(t.directory,(function(r,o){return e("li",{key:`directory-h3-${r.value}-${o}`,staticClass:"directory-h3-li",class:r.type},[e("a",{attrs:{title:r.value},on:{click:function(e){return t.scrollTo(r.href)}}},[t._v(t._s(r.value))])])})),0)])])}),[],!1,null,"6ba8b21a",null);e.default=i.exports}}]);