(function(t){function e(e){for(var o,a,r=e[0],c=e[1],u=e[2],l=0,d=[];l<r.length;l++)a=r[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,a=1;a<n.length;a++){var r=n[a];0!==s[r]&&(o=!1)}o&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},a={app:0},s={app:0},i=[];function r(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-1b4c0202":"cececd2e","chunk-202b8b38":"51a67e89","chunk-2c66b8c8":"e6711cd6","chunk-2d0c8672":"3b864a60","chunk-585166c3":"792a73e7","chunk-65617e96":"659b54d5","chunk-6563bd08":"80e96847","chunk-6aac8a90":"0d8d49f3","chunk-6f51718a":"127662e4","chunk-72075fb1":"c9872e40"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-202b8b38":1,"chunk-2c66b8c8":1,"chunk-585166c3":1,"chunk-6aac8a90":1,"chunk-72075fb1":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-1b4c0202":"31d6cfe0","chunk-202b8b38":"0c00e4c2","chunk-2c66b8c8":"21df7ce2","chunk-2d0c8672":"31d6cfe0","chunk-585166c3":"223ac8eb","chunk-65617e96":"31d6cfe0","chunk-6563bd08":"31d6cfe0","chunk-6aac8a90":"444de154","chunk-6f51718a":"31d6cfe0","chunk-72075fb1":"1a7f9712"}[t]+".css",s=c.p+o,i=document.getElementsByTagName("link"),r=0;r<i.length;r++){var u=i[r],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===s))return e()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){u=d[r],l=u.getAttribute("data-href");if(l===o||l===s)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var o=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete a[t],p.parentNode.removeChild(p),n(i)},p.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[t]=0})));var o=s[t];if(0!==o)if(o)e.push(o[2]);else{var i=new Promise((function(e,n){o=s[t]=[e,n]}));e.push(o[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=r(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=s[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,n[1](d)}s[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("64a9"),a=n.n(o);a.a},"40e7":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),a=n("8c4f");o["default"].use(a["a"]);var s=[{path:"/",name:"index",component:function(){return n.e("chunk-72075fb1").then(n.bind(null,"d504"))}},{path:"/UserInfo",name:"UserInfo",component:function(t){return n.e("chunk-202b8b38").then(function(){var e=[n("8f77")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/UserPasswd",name:"UserPasswd",component:function(t){return n.e("chunk-2d0c8672").then(function(){var e=[n("5573")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/SysPerm",name:"SysPerm",component:function(t){return n.e("chunk-6f51718a").then(function(){var e=[n("172b")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/SysRole",name:"SysRole",component:function(t){return n.e("chunk-1b4c0202").then(function(){var e=[n("10e1")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/SysConfig",name:"SysConfig",component:function(t){return n.e("chunk-2c66b8c8").then(function(){var e=[n("5f2a")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/SysMenus",name:"SysMenus",component:function(t){return n.e("chunk-585166c3").then(function(){var e=[n("a6e8")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/SysMenusAction",name:"SysMenusAction",component:function(t){return n.e("chunk-65617e96").then(function(){var e=[n("ddf3")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/SysFileManage",name:"SysFileManage",component:function(t){return n.e("chunk-6aac8a90").then(function(){var e=[n("52e8")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/Demo",name:"Demo",component:function(t){return n.e("chunk-6563bd08").then(function(){var e=[n("c876")];t.apply(null,e)}.bind(this)).catch(n.oe)}}],i=a["a"].prototype.push;a["a"].prototype.push=function(t){return i.call(this,t).catch((function(t){return t}))};var r=new a["a"]({mode:"history",base:"",routes:s}),c=r,u=n("2f62");o["default"].use(u["a"]);var l=new u["a"].Store({state:{mode:"light",statusBarHeight:0,isLogin:"",uInfo:{},system:{},menus:[],defaultMenu:"3",collapseMenu:!1,socket:null,uMsg:{scroll:null,group:[],num:""},uNotify:{},scan:null}}),d=n("5c96"),p=n.n(d),f=(n("8aa1"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[t.update.show?o("div",{staticClass:"update_body",style:{backgroundColor:t.upDateColor.bg}},[o("div",{staticClass:"update_ct verticalCenter"},[o("div",{staticClass:"logo",style:{backgroundColor:t.upDateColor.logoBg}},[o("div")]),o("div",{staticClass:"loading",style:{backgroundImage:"linear-gradient(to right, "+t.upDateColor.loading+", "+t.upDateColor.loading+" "+t.update.loading+", "+t.upDateColor.loaded+" "+t.update.loading+", "+t.upDateColor.loaded+" 100%)"}}),o("div",{staticClass:"load_msg",domProps:{innerHTML:t._s(t.update.msg)}},[t._v("正在加载应用")]),o("div",{staticClass:"load_button"},[t.update.down?o("button",{staticClass:"Button",style:{color:t.upDateColor.butColor,backgroundColor:t.upDateColor.butBg},on:{click:function(e){return t.updateDown()}}},[t._v(t._s(t.upDateColor.butText))]):t._e()])]),o("div",{staticClass:"update_logo",style:{color:t.upDateColor.copy}},[o("h1",[t._v(t._s(t.$config.title))]),o("h2",[t._v(t._s(t.$config.copy))])])]):t._e(),o("el-container",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.isLogin,expression:"!$store.state.isLogin"}],staticClass:"login_body bgImg bgcover",style:{backgroundImage:"url("+(t.$store.state.system.login_bg?t.$store.state.system.login_bg:n("86d5"))+")"}},[o("div",{staticClass:"login_ct verticalCenter"},[o("div",{staticClass:"logo flex_center"},[o("div",{staticClass:"bgImg bgTu",style:{backgroundImage:"url("+(t.$store.state.system.logo?t.$store.state.system.logo:n("9b19"))+")"}}),o("h1",{staticClass:"nowrap"},[t._v(t._s(t.$store.state.system.title))])]),o("h2",[t._v("会员登录")]),o("div",{staticClass:"item"},[o("el-input",{attrs:{maxlength:"32",placeholder:"用户名/手机/邮箱"},model:{value:t.login.uname,callback:function(e){t.$set(t.login,"uname",e)},expression:"login.uname"}},[o("template",{slot:"prepend"},[o("i",{staticClass:"icons icon_user"})])],2)],1),o("div",{staticClass:"item"},[o("el-input",{attrs:{type:"password",maxlength:"16",placeholder:"请输入密码"},model:{value:t.login.passwd,callback:function(e){t.$set(t.login,"passwd",e)},expression:"login.passwd"}},[o("template",{slot:"prepend"},[o("i",{staticClass:"icons icon_passwd"})])],2)],1),o("div",{staticClass:"item"},[o("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",disabled:t.login.dis},on:{click:function(e){return t.loginSub()}}},[t._v(t._s(t.login.subText))])],1),o("div",{staticClass:"copy nowrap"},[t._v("© "+t._s(t.$store.state.system.copy)+" license  版本："+t._s(t.$config.version))])])]),o("el-container",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.isLogin,expression:"$store.state.isLogin"}],staticClass:"app_body"},[o("el-aside",{staticClass:"app_menus",style:{width:t.$store.state.collapseMenu?"64px":"200px",paddingTop:t.$store.state.statusBarHeight}},[o("div",{staticClass:"app_img",on:{click:function(e){return t.hideMenus()}}},[t.$store.state.uInfo.img?o("div",{staticClass:"bgImg",style:{backgroundImage:"url("+t.$store.state.uInfo.img+")"}}):o("div",{staticClass:"bgImg"}),o("p",{staticClass:"nowrap"},[t._v(t._s(t.$store.state.uInfo.nickname||"昵称")+"("+t._s(t.$store.state.uInfo.name||"姓名")+")")])]),o("el-menu",{attrs:{"default-active":t.$store.state.defaultMenu,collapse:t.$store.state.collapseMenu,"unique-opened":""}},t._l(t.$store.state.menus,(function(e,n){return o("el-submenu",{key:n,attrs:{index:""+e.id}},[o("template",{slot:"title"},[o("i",{staticClass:"icons",class:e.ico}),o("span",[t._v(t._s(e.title))])]),t._l(e.menus,(function(e,n){return o("div",{key:n},[0==e.menus.length?o("el-menu-item",{attrs:{index:""+e.id},on:{click:function(n){return t.openUrl(e.ico,e.url,""+e.id,e.title)}}},[t._v(t._s(e.title))]):o("el-submenu",{attrs:{index:""+e.id}},[o("template",{slot:"title"},[o("span",[t._v(t._s(e.title))])]),t._l(e.menus,(function(e,n){return o("el-menu-item",{key:n,attrs:{index:""+e.id},on:{click:function(n){return t.openUrl(e.ico,e.url,""+e.id,e.title)}}},[t._v(t._s(e.title))])}))],2)],1)}))],2)})),1),o("div",{staticClass:"app_version nowrap"},[t._v("版本："+t._s(t.$config.version))])],1),o("el-container",{style:{paddingTop:t.$store.state.statusBarHeight}},[o("el-header",{staticClass:"app_top flex"},[o("div",{staticClass:"name"},[t._v(t._s(t.storage.getItem("MenuName")||t.$store.state.system.title)+" "),o("i",{staticClass:"el-icon-arrow-right"})]),o("div",{staticClass:"uinfo"},[o("b",[t._v(t._s(t.$store.state.uInfo.uname))]),t._v("  \n          "),o("el-button",{attrs:{type:"text"},on:{click:function(e){return t.openConfig()}}},[t._v("设置")]),o("span",{staticClass:"split"},[t._v("|")]),o("span",{staticClass:"logout",on:{click:function(e){return t.logout()}}},[t._v("退出")])],1)]),o("el-main",{staticClass:"app_main"},[o("router-view"),o("div",{staticClass:"app_copy"},[t._v("所属："+t._s(t.$store.state.system.title)+"  © "+t._s(t.$store.state.system.copy)+"  版本："+t._s(t.$config.version))])],1)],1)],1),o("el-dialog",{attrs:{title:t.config.title,visible:t.config.show,center:"",width:"360px"},on:{"update:visible":function(e){return t.$set(t.config,"show",e)}}},[o("el-form",{attrs:{"label-width":"120px"}},[o("el-form-item",{attrs:{label:"消息朗读"}},[o("el-switch",{on:{change:function(e){return t.subConfig("is_msg_audio")}},model:{value:t.config.is_msg_audio,callback:function(e){t.$set(t.config,"is_msg_audio",e)},expression:"config.is_msg_audio"}})],1)],1)],1),t.$store.state.isLogin?o("ul",{staticClass:"right_menu"},[o("li",{on:{click:function(e){return t.openMsg()}}},[o("i",{staticClass:"icons icon_msg"}),o("span",{staticClass:"redNum"},[t._v("0")])])]):t._e(),o("popup",{model:{value:t.msg.show,callback:function(e){t.$set(t.msg,"show",e)},expression:"msg.show"}},[o("div",[t._v("12323")])])],1)}),g=[],h=(n("20d6"),n("7f7f"),n("7c2f")),m=n("9060"),v={start:function(){var t=this;clearInterval(this.msgInterval),this.msgInterval=setInterval((function(){!h["a"].self.$store.state.isLogin||h["a"].self.$store.state.socket&&1==h["a"].self.$store.state.socket.readyState||t.start()}),3e3);var e=h["a"].storage.getItem("token");if(!e)return!1;h["a"].config.socket.start&&this.socket(e)},socket:function(t){var e=this;h["a"].self.$store.state.socket=new WebSocket(h["a"].config.socket.server+"?token="+t),h["a"].self.$store.state.socket.onopen=function(){console.log("Socket开启"),clearInterval(e.heartbeat),e.heartbeat=setInterval((function(){try{h["a"].self.$store.state.socket.send(JSON.stringify({type:""}))}catch(t){e._closeMsg()}}),1e4),setTimeout((function(){h["a"].self.$store.state.socket.send(JSON.stringify({type:"group"}))}),1e3)},h["a"].self.$store.state.socket.onclose=function(){console.log("Socket关闭"),e._closeMsg()},h["a"].self.$store.state.socket.onmessage=function(t){var n=JSON.parse(t.data);if(console.log(n),0!=n.code)return h["a"].toast(n.msg);if(0==n.code&&"group"==n.type)h["a"].self.$store.state.uMsg.group=n.data,e._getMsgNum();else if(0==n.code&&"msg"==n.type){h["a"].storage.getItem("voice");var o=n.data.uid==h["a"].self.$store.state.uInfo.uid?n.data.fid:n.data.uid;h["a"].self.$store.state.uMsg.group[""+o]?(h["a"].self.$store.state.uMsg.group[""+o].msg.push(n.data),h["a"].self.$store.state.uMsg.group[""+o].num++,h["a"].self.$store.state.uMsg.num++):h["a"].self.$store.state.socket.send(JSON.stringify({type:"group"}))}else 0==n.code&&n.type}},_getMsgNum:function(){var t=h["a"].self.$store.state.uMsg.group,e=0;for(var n in t)e+=t[n].num;h["a"].self.$store.state.uMsg.num=e},_closeMsg:function(){h["a"].self.$store.state.socket&&(h["a"].self.$store.state.socket.close(),h["a"].self.$store.state.socket=null,h["a"].self.$store.state.uMsg.group=[],h["a"].self.$store.state.uMsg.num="")}},y={init:function(){var t=this;if(m["a"].isPlus()){plus.screen.lockOrientation("portrait-primary"),plus.navigator.setStatusBarStyle("dark"),plus.navigator.setStatusBarBackground(Env.themeColor),h["a"].self.$store.state.statusBarHeight=plus.navigator.getStatusbarHeight(),document.addEventListener("uistylechange",(function(){h["a"].self.$store.state.mode=plus.navigator.getUiStyle()}),!1);var e=0,n=plus.webview.currentWebview();plus.key.addEventListener("backbutton",(function(){n.canBack((function(t){t.canBack?(h["a"].self.$store.state.scan&&h["a"].self.$store.state.scan.close(),h["a"].back(1)):(e>0&&plus.runtime.quit(),h["a"].toast("再按一次退出应用!"),e++,setTimeout((function(){e=0}),2e3))}))}))}this.tokenState(1),clearInterval(this.tokenInterval),this.tokenInterval=setInterval((function(){t.tokenState(0)}),1e4),v.start(),this.getConfig()},tokenState:function(t){var e=h["a"].storage.getItem("token");e?h["a"].post("user/token",{token:e,uinfo:t},(function(t){var e=t.data;0==e.code?(h["a"].self.$store.state.isLogin=!0,e.uinfo&&(h["a"].self.$store.state.uInfo=e.uinfo)):(h["a"].self.$store.state.isLogin=!1,h["a"].self.$store.state.uInfo={},h["a"].storage.setItem("token",""))})):(h["a"].self.$store.state.isLogin=!1,h["a"].storage.setItem("token",""))},getConfig:function(){h["a"].post("index/getConfig",{},(function(t){var e=t.data;0==e.code&&(h["a"].self.$store.state.system=e.list)}))}},b=n("229e"),w=n("616b"),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[n("div",{ref:"PopupBody",staticClass:"verticalCenter popup_body"},[t._t("default")],2),n("div",{ref:"PopupBG",staticClass:"popup_bg",style:{backgroundColor:"rgba(0,0,0,"+t.opacity+")"},on:{click:function(e){return t.clickBG()}}})])},C=[],_=(n("c5f6"),{name:"PopUp",model:{prop:"show",event:"show"},props:{show:{type:Boolean,default:!1},opacity:{type:Number,default:.8},bgClose:{type:Boolean,default:!0}},data:function(){return{}},watch:{show:function(t){t&&this.showBG(1,1)}},mounted:function(){console.log(this.show)},methods:{showBG:function(t,e){var n=this;setTimeout((function(){var o=n.$refs.PopupBG;o.style.opacity=t;var a=n.$refs.PopupBody;a.style.transform="scale("+e+","+e+")",setTimeout((function(){var e=1==t;n.$emit("show",e)}),300)}),300)},clickBG:function(){this.bgClose&&this.showBG(0,.3)}}}),$=_,M=(n("9149"),n("2877")),S=Object(M["a"])($,k,C,!1,null,"e33aa08a",null),I=S.exports;b["a"].use(w["a"]);var x={name:"APP",components:{Popup:I},data:function(){return{storage:h["a"].storage,update:{show:!1,os:"",down:!1,loading:"0%",msg:"检测更新",file:"",total:0},upDateColor:h["a"].config.update,login:{uname:"",passwd:"",subText:"登 录",dis:!1},menus:[],config:{show:!1,title:"系统配置",is_msg_audio:!0},msg:{show:!1}}},mounted:function(){var t=this;h["a"].self=this,setTimeout((function(){y.init(),h["a"].config.update.start&&t.isUpdate()}),1e3),h["a"].storage.getItem("token")&&this.getMenus(),this.$store.state.collapseMenu="true"==h["a"].storage.getItem("isCollapse"),this.$store.state.defaultMenu=h["a"].storage.getItem("defaultMenu")?h["a"].storage.getItem("defaultMenu"):"3"},methods:{isUpdate:function(){var t=this;if(!m["a"].isPlus())return!1;this.update.os=plus.os.name,h["a"].post("index/appUpdate",{os:this.update.os},(function(e){var n=e.data;if(0!=n.code)return!1;plus.runtime.getProperty(plus.runtime.appid,(function(e){if(!m["a"].versionDiff(e.version,n.version))return!1;t.update.show=!0,t.update.down=!0,t.update.msg="新版本: "+n.version+"&nbsp;&nbsp;大小: "+(n.size/1024/1024).toFixed(2)+"MB",t.update.file=t.$config.baseUrl+n.file,t.update.total=n.size}))}))},updateDown:function(){var t=this;if(this.update.down=!1,this.update.msg="开始下载",this.update.loading="0%","iOS"==this.update.os)this.update.msg="请在桌面查看安装进度",window.open(h["a"].config.upIosUrl),setTimeout((function(){plus.runtime.quit()}),5e3);else{var e=plus.downloader.createDownload(this.update.file,{filename:"_doc/download/",timeout:30},(function(e,n){200==n?plus.runtime.install(e.filename,{force:!0},(function(){plus.runtime.restart()}),(function(t){h["a"].toast("安装失败!")})):(t.update.down=!0,t.update.msg="下载失败")}));e.start(),e.addEventListener("statechanged",(function(e,n){var o=parseInt(e.downloadedSize/t.update.total*100);t.update.loading=o+"%",t.update.msg="正在下载："+t.update.loading,o>=100&&(t.update.msg="下载完成，安装并重启")}))}},loginSub:function(){var t=this,e=this.login.uname,n=this.login.passwd,o=h["a"].reg("passwd",n);if(!0!==h["a"].reg("uname",e)&&!0!==h["a"].reg("email",e)&&!0!==h["a"].reg("tel",e))return h["a"].toast("请输入帐号/手机/邮箱");if(!0!==o)return h["a"].toast(o);this.login.subText="正在登录",this.login.dis=!0;var a=h["a"].loading();h["a"].post("user/login",{uname:e,passwd:n},(function(e){a.clear(),t.login.subText="登 录",t.login.dis=!1;var n=e.data;0==n.code?(t.$store.state.isLogin=!0,h["a"].self.$store.state.uInfo=n.uinfo,h["a"].storage.setItem("token",n.token),t.getMenus()):(h["a"].self.$store.state.isLogin=!1,h["a"].self.$store.state.uInfo={},h["a"].storage.setItem("token",""),h["a"].toast(n.msg,"error"))}),(function(t){a.clear(),h["a"].toast("网络加载失败!")}))},logout:function(){this.$store.state.isLogin=!1,this.$store.state.uInfo={},h["a"].storage.setItem("token",""),v._closeMsg()},getMenus:function(){h["a"].post("Usermain/getMenus",{token:h["a"].storage.getItem("token")},(function(t){var e=t.data;0==e.code&&(h["a"].self.$store.state.menus=e.menus)}))},hideMenus:function(){this.isCollapse=!this.isCollapse,h["a"].storage.setItem("isCollapse",this.isCollapse),this.$store.state.collapseMenu=this.isCollapse},openUrl:function(t,e,n,o){if(h["a"].storage.setItem("MenuName",o),h["a"].storage.setItem("defaultMenu",n),this.$store.state.defaultMenu=n,"3"!=n){var a=JSON.parse(h["a"].storage.getItem("Menus")||"[]"),s={ico:t,url:e,index:n,name:o},i=a.findIndex((function(t){return JSON.stringify(t)==JSON.stringify(s)}));i>=0&&a.splice(i,1),a.push({ico:t,url:e,index:n,name:o}),h["a"].storage.setItem("Menus",JSON.stringify(a))}this.$router.push(e)},openConfig:function(){this.config.show=!0},subConfig:function(t){var e=this,n={};n[t]=this.config[t]?"1":"0";var o=h["a"].loading();h["a"].post("Userinfo/edit",{token:h["a"].storage.getItem("token"),data:JSON.stringify(n)},(function(n){o.clear();var a=n.data;return e.$store.state.uinfo[t]=e.config[t],0==a.code?h["a"].toast(a.msg,"success"):h["a"].toast(a.msg,"error")}))},openMsg:function(){this.msg.show=!0}}},A=x,T=(n("034f"),Object(M["a"])(A,f,g,!1,null,null,null)),D=T.exports,L=n("8c89");document.title=L["a"].title,o["default"].config.productionTip=L["a"].dev,o["default"].prototype.$config=L["a"],o["default"].use(p.a),new o["default"]({router:c,store:l,render:function(t){return t(D)}}).$mount("#app")},"5faa":function(t,e,n){"use strict";var o=n("b743"),a=n.n(o);a.a},"64a9":function(t,e,n){},"7c2f":function(t,e,n){"use strict";n("6b54"),n("a481");var o=n("8c89"),a=n("bc3a"),s=n.n(a);n("d055");e["a"]={self:null,config:o["a"],back:function(t,e){e.$router.goBack(-t)},loading:function(){var t=this.self.$loading({text:"",background:"rgba(0, 0, 0, 0.7)"});return{clear:function(){t.close()}}},toast:function(t,e){return e=e||"",this.self.$message({message:t,type:e,showClose:!0})},confirm:function(t,e,n){this.self.$confirm(t.content,t.title,{confirmButtonText:t.confirmText||"确定",cancelButtonText:t.cancelText||"取消",type:t.type||"",center:!0}).then(e).catch(n)},get:function(t,e,n,o,a){var i=t.substr(0,4);t="http"==i?t:this.config.apiUrl+t;var r=this.config.request;for(var c in a=a||{},r)a[c]=r[c];s.a.get(t,{params:e},a).then(n).catch(o)},post:function(t,e,n,o,a){var i=t.substr(0,4);t="http"==i?t:this.config.apiUrl+t;var r=new FormData;for(var c in e)r.append(c,e[c]);var u=this.config.request;for(var l in a=a||{},u)a[l]=u[l];s.a.post(t,r,a).then(n).catch(o)},storage:{setItem:function(t,e){return window.localStorage.setItem(t,e)},getItem:function(t){return window.localStorage.getItem(t)},clear:function(){return window.localStorage.clear()}},unique:function(t){for(var e=[],n=0,o=t.length;n<o;n++){for(var a=n+1;a<o;a++)t[n]===t[a]&&(a=++n);e.push(t[n])}return e},getDay:function(t,e){var n=e?new Date(e):new Date;n.setDate(n.getDate()+t);var o=n.getFullYear(),a=n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1,s=n.getDate()<10?"0"+n.getDate():n.getDate();return o+"-"+a+"-"+s},getWeek:function(t){var e=new Date(t),n=["日","一","二","三","四","五","六"];return n[e.getDay()]},getDate:function(){var t=new Date,e=t.getFullYear(),n=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,o=t.getDate()<10?"0"+t.getDate():t.getDate(),a=t.getHours()<10?"0"+t.getHours():t.getHours(),s=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),i=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();return e+"-"+n+"-"+o+" "+a+":"+s+":"+i},getAngle:function(t,e){var n=Math.sqrt(t*t+e*e),o=Math.acos(t/n),a=parseInt(180*o/Math.PI);return 0==t&&0==e?0:t>=0&&e>=0?-a:t<0&&e>=0?-a:a},toFixedNo:function(t,e){for(var n="",o=0;o<e;o++)n+="0";return n=parseInt("1"+n),Math.floor(t*n)/n},formatPrice:function(t){return parseInt(t).toString().replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,"$&,")},formatTel:function(t){var e=/^(\d{3})\d{4}(\d{4})$/;return t.replace(e,"$1****$2")},getimgsrc:function(t){var e=/<img.+?src=('|")?([^'"]+)('|")?(?:\s+|>)/gim,n=[],o=null;while(o=e.exec(t))n.push(o[2]);return n},timeSize:function(t){var e=(new Date).getTime(),n=new Date(t).getTime();return e-n},formatTime:function(t){var e=t,n=new Date,o=n.getFullYear(),a=n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1,s=n.getDate()<10?"0"+n.getDate():n.getDate(),i=t.substr(0,4),r=t.substr(5,2),c=t.substr(8,2),u=t.substr(11,5),l=t.substr(5,11),d=parseInt(t.substr(11,2));if(i==o&&r==a&&c==s){var p="";d<6?p="凌晨":d<9?p="早上":d<12?p="上午":d<14?p="中午":d<17?p="下午":d<20&&(p="晚上"),e=p+" "+u}else i==o&&r==a&&c==s-1?e="昨天 "+u:i==o&&r==a&&(e=l);return e},reg:function(t,e){var n=!1,o="",a={uname:/^[a-zA-Z][a-zA-Z0-9\_\@\-\*\&]{4,15}$/,tel:/^[1]\d{10}$/,email:/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/,vcode:/^\d{4}$/,passwd:/^[a-zA-Z0-9|_|@|-|*|&]{6,16}$/};switch(t){case"uname":n=a.uname.test(e),o=n?"":"用户名英文开头5~16位！";break;case"tel":n=a.tel.test(e),o=n?"":"手机号码错误！";break;case"email":n=a.email.test(e),o=n?"":"邮箱帐号错误！";break;case"vcode":n=a.vcode.test(e),o=n?"":"验证码4位！";break;case"passwd":n=a.passwd.test(e),o=n?"":"密码为6~16位字符！";break}return!!n||o},tinymce:function(){return{language:"zh_CN",language_url:"/tinymce/zh_CN.js",skin_url:"/tinymce/skins/ui/oxide",height:550,menubar:!0,branding:!1,toolbar:"undo redo | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | table image media preview | removeformat | help",toolbar_items_size:"small",plugins:["advlist autolink lists link image charmap print preview anchor textcolor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"]}},encode:function(t){var e=encodeURI(t);return btoa(e)},decode:function(t){var e=atob(t);return decodeURI(e)}}},"86d5":function(t,e,n){t.exports=n.p+"img/bg.597edca7.jpg"},"8aa1":function(t,e,n){},"8c89":function(t,e,n){"use strict";var o="WebMIS-基础框架",a="https://demo-base-api.webmis.vip/",s="wss://demo-base-api.webmis.vip/wss";e["a"]={dev:!1,title:o,version:"1.0.0",baseUrl:a,apiUrl:a+"admin/",copy:"Copyright © WebMIS.vip 2020",request:{headers:{"Content-Type":"multipart/form-data"}},statusBar:{height:"0px",color:"#333",bgColor:"#FFF"},update:{start:!0,bg:"#6FB737",logoBg:"#FFF",loading:"#FFF",loaded:"#666",copy:"#333",butColor:"#666",butBg:"#FFF",butText:"下载并安装"},upIosUrl:"",amapKey:"d956f0c3e15489a1b5bf291e5d133c8a",baiduOcr:"https://aip.baidubce.com/rest/2.0/ocr/v1/",socket:{start:!1,server:s},msgRead:300,msgContent:"content",msgBrowser:!1}},9060:function(t,e,n){"use strict";n("386d"),n("7f7f");var o=n("2b0e"),a=n("8c89"),s=n("8f9b"),i=n.n(s),r=n("bc3a"),c=n.n(r),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"notify_body",style:{backgroundColor:t.bgColor,color:t.color}},[n("div",{staticClass:"notify_title flex"},[n("div",{staticClass:"logo"}),n("h2",{staticClass:"nowrap"},[t._v(t._s(t.title))]),n("div",{staticClass:"close"})]),t.content?n("div",{staticClass:"notify_content",domProps:{innerHTML:t._s(t.content)}}):t._e()])},l=[],d={name:"Notify",props:{title:{type:String,default:"消息"},content:{type:String,default:""},bgColor:{type:String,default:"#FFF"},color:{type:String,default:"#333"}},data:function(){return{}},mounted:function(){},methods:{}},p=d,f=(n("5faa"),n("2877")),g=Object(f["a"])(p,u,l,!1,null,"840c12a2",null),h=g.exports,m={install:function(t){var e=function(t){t.style.transition="all .3s ease",t.style.transform="translate(0, 0)",t.style.opacity="1"},n=function(t,e){t.style.transition="all .3s ease",t.style.transform="translate(0, -100%)",t.style.opacity="0",setTimeout((function(){e.removeChild(t)}),300)};t.prototype.$msgNotify=function(o){var a=t.extend(h),s=new a,i=document.createElement("div");s.$mount(i),s.title=o.title||"标题",s.content=o.content||"",s.color=o.color||"#333",s.bgColor=o.bgColor||"rgba(255,255,255,.9)",o.delay=o.delay||5e3,o.onClick=o.onClick||function(){};var r=document.getElementById("notifyBody");r||(r=document.createElement("div"),r.setAttribute("id","notifyBody"),r.setAttribute("style","position: fixed; z-index: 9999; width: 100%; max-width: 360px; top: 10px; left: 0; right: 0; margin: auto;")),document.body.appendChild(r),r.appendChild(s.$el),setTimeout((function(){e(s.$el)}),300),s.$el.stime=setTimeout((function(){n(s.$el,r)}),o.delay),s.$el.onclick=function(){o.onClick(this)},s.$el.close=function(){clearTimeout(s.$el.stime),n(s.$el,r)}}}},v=m;o["default"].use(v),i.a.initAMapApiLoader({key:a["a"].amapKey,plugin:["AMap.Geolocation","PlaceSearch"],v:"1.4.15"});e["a"]={isPlus:function(){try{return!!plus}catch(t){return!1}},getStatusBarHeight:function(){var t=0,e=/Html5Plus\/.+\s\(.*(Immersed\/(\d+\.?\d*).*)\)/gi.exec(navigator.userAgent);return e&&e.length>=3&&(t=parseFloat(e[2])),t},notify:function(t,e,n,s){a["a"].msgBrowser&&window.Notification&&"denied"!==Notification.permission&&Notification.requestPermission((function(n){setTimeout((function(){new Notification(t,{body:e})}),a["a"].msgRead)})),setTimeout((function(){o["default"].prototype.$msgNotify({title:t,content:e,delay:1e4,onClick:n})}),a["a"].msgRead),s=s||!1,console.log(s),s&&c.a.post(a["a"].apiUrl+"index/baiduToken").then((function(n){var o=new Audio,s="title"==a["a"].msgContent?t:e;o.src="https://tsn.baidu.com/text2audio?lan=zh&ctp=1&cuid=1&tex="+s+"&tok="+n.data.token,setTimeout((function(){try{if("iOS"==plus.os.name){var t=plus.ios.importClass("AVAudioSession"),e=t.sharedInstance();e.setCategoryerror("AVAudioSessionCategoryPlayback",null),e.setActiveerror("YES",null);var n=plus.ios.importClass("AVSpeechSynthesizer"),a=plus.ios.importClass("AVSpeechUtterance"),i=plus.ios.import("AVSpeechSynthesisVoice"),r=new n,c=i.voiceWithLanguage("zh-CN"),u=a.speechUtteranceWithString(s);u.setVoice(c),r.speakUtterance(u)}else o.play()}catch(l){o.play()}}),a["a"].msgRead)}))},pay:function(t,e,n,o,a){var s="";for(var i in n)s+=i+"="+n[i]+"&";try{"alipay"==t?s+="type=app":"wxpay"==t&&(s+="type=APP"),plus.payment.getChannels((function(n){var i=null;for(var r in n)n[r].id==t&&(i=n[r]);c.a.post(e,s).then((function(t){var e=t.data;0==e.code?plus.payment.request(i,e.data,o,a):console.log(e.msg)}))}),(function(t){console.log("支付通道: "+t.message)}))}catch(r){console.log("H5方式: "+t)}},geoLocation:function(t,e){try{plus.geolocation.getCurrentPosition((function(e){var n={};n.province=e.address.province,n.city=e.address.city,n.latitude=e.coords.latitude,n.longitude=e.coords.longitude,window.localStorage.setItem("GeoLocation",JSON.stringify(n)),t(n)}),e)}catch(n){setTimeout((function(){AMap.service(["AMap.Geolocation"],(function(){var n=new AMap.Geolocation({enableHighAccuracy:!1,timeout:5e3});n.getCityInfo((function(o,a){var s={};s.province=a.province,s.city=a.city,n.getCurrentPosition((function(n,o){o&&o.position?(s.latitude=o.position.lat,s.longitude=o.position.lng,window.localStorage.setItem("GeoLocation",JSON.stringify(s)),t(s)):e(n)}))}))}))}),500)}},getAddress:function(t,e,n){setTimeout((function(){AMap.service(["AMap.PlaceSearch"],(function(){var o=window.localStorage.getItem("GeoLocation");o=o?JSON.parse(o):{city:"昆明市"};var a=new AMap.PlaceSearch({city:o.city});a.search(t,(function(t,o){o&&o.poiList?e(o.poiList.pois):n(t)}))}))}),500)},camera:function(t,e){try{var n=plus.camera.getCamera();n.captureImage((function(e){plus.io.resolveLocalFileSystemURL(e,(function(e){e.file((function(e){t(e)}))}),(function(t){console.log("读取拍照失败")}))}),e)}catch(a){var o=document.createElement("input");o.setAttribute("type","file"),o.setAttribute("style","display: none"),document.body.appendChild(o),o.click(),o.onchange=function(){t(o.files[0])}}},photo:function(t,e,n){n=n||!0;try{plus.gallery.pick((function(e){var n=e.files,o=[],a=null;for(var s in n)plus.io.resolveLocalFileSystemURL(n[s],(function(e){e.file((function(e){o.push(e),clearTimeout(a),a=setTimeout((function(){t(o)}),300)}))}),(function(t){console.log("读取文件: "+t.message)}))}),e,{filter:"image",multiple:n})}catch(a){var o=document.createElement("input");o.setAttribute("type","file"),o.setAttribute("style","display: none"),n&&o.setAttribute("multiple","multiple"),document.body.appendChild(o),o.click(),o.onchange=function(){t(o.files)}}},readerCompress:function(t,e,n){var o=this;try{var a=new plus.io.FileReader;a.readAsDataURL(t),a.onloadend=function(){e.ext||("image/jpeg"==t.type?e.ext="jpg":"image/png"==t.type?e.ext="png":"image/gif"==t.type&&(e.ext="gif")),o.compressImage(this.result,e,n)}}catch(i){var s=new FileReader;s.readAsDataURL(t),s.onloadend=function(){e.ext||("image/jpeg"==t.type?e.ext="jpg":"image/png"==t.type?e.ext="png":"image/gif"==t.type&&(e.ext="gif")),o.compressImage(this.result,e,n)}}},compressImage:function(t,e,n){var o=e.width||0,a=e.height||0,s=e.cut||!0,i=e.quality||.8,r=e.ext||"jpg",c={jpg:"image/jpeg",png:"image/png",gif:"image/gif"},u=1,l=1,d=0,p=0,f=1,g=u/l,h=document.createElement("canvas"),m=h.getContext("2d"),v=new Image;v.src=t,v.onload=function(){g=this.width/this.height,o>0&&0==a?(u=o<this.width?o:this.width,l=o<this.width?Math.round(o/g):Math.round(this.width/g),o=u,a=l):0==o&&a>0?(u=a<this.height?Math.round(a*g):Math.round(this.height*g),l=a<this.height?a:this.height,o=u,a=l):0==o&&0==a?(u=this.width,l=this.height,o=u,a=l):(f=o/a,g>f?o<this.width?(u=s?Math.round(a*g):o,l=s?a:Math.round(o/g)):(u=s?Math.round(this.height*g):this.width,l=s?this.height:Math.round(this.width/g)):a<this.height?(u=s?o:Math.round(a*g),l=s?Math.round(o/g):a):(u=s?this.width:Math.round(this.height*g),l=s?Math.round(this.width/g):this.height)),h.width=o,h.height=a,d=Math.round(o-u)/2,p=Math.round(a-l)/2,m.drawImage(this,d,p,u,l);var t=h.toDataURL(c[r],i);n(t)}},video:function(t,e){try{var n=plus.camera.getCamera();n.startVideoCapture((function(e){plus.io.resolveLocalFileSystemURL(e,(function(n){t(e,n)}),(function(t){console.log("读取录像失败")}))}),e)}catch(o){console.log("录像")}},audio:function(t,e,n){try{t.record({filename:"_doc/audio/"},(function(t){plus.io.resolveLocalFileSystemURL(t,(function(n){e(t,n)}),(function(t){console.log("读取音频失败")}))}),n)}catch(o){console.log("录音")}},uploader:function(t,e,n,o){try{for(var a=plus.uploader.createUpload(t,{method:"POST"},n),s=0;s<e.length;s++)"file"==e[s].type?a.addFile(e[s].val,{key:e[s].key}):"data"==e[s].type&&a.addData(e[s].key,e[s].val);a.addEventListener("statechanged",o,!1),a.start()}catch(i){console.log("上传文件")}},cacheClear:function(){try{plus.io.resolveLocalFileSystemURL("_doc/",(function(t){return t.removeRecursively()}),(function(t){console.log("清理缓存失败")}))}catch(t){console.log("清理缓存")}}}},9149:function(t,e,n){"use strict";var o=n("40e7"),a=n.n(o);a.a},"9b19":function(t,e,n){t.exports=n.p+"img/logo.5f2c810c.svg"},b743:function(t,e,n){}});