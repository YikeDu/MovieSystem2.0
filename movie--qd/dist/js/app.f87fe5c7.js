(function(t){function e(e){for(var s,a,o=e[0],l=e[1],c=e[2],m=0,p=[];m<o.length;m++)a=o[m],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,o=1;o<i.length;o++){var l=i[o];0!==r[l]&&(s=!1)}s&&(n.splice(e--,1),t=a(a.s=i[0]))}return t}var s={},r={app:0},n=[];function a(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=s,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(i,s,function(e){return t[e]}.bind(null,s));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0390":function(t,e,i){"use strict";i("b52f")},"03ed":function(t,e,i){},1344:function(t,e,i){"use strict";i("4453")},"1e29":function(t,e,i){"use strict";i("27bf")},"263e":function(t,e,i){},"27bf":function(t,e,i){},3080:function(t,e,i){"use strict";i("bc9c")},"35b1":function(t,e,i){"use strict";i("03ed")},4453:function(t,e,i){},"500c":function(t,e,i){"use strict";i("a6dc")},"53c4":function(t,e,i){"use strict";i("94e2")},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var s=i("2b0e"),r=function(){var t=this,e=t._self._c;return e("el-container",{staticClass:"app"},[e("el-header",[e("Header")],1),e("router-view",{staticClass:"view"}),e("el-footer")],1)},n=[],a=function(){var t=this,e=t._self._c;return e("el-row",{attrs:{type:"flex",align:"center",justify:"center"}},[e("el-col",{attrs:{span:15}},[e("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,router:!0,mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"}},[e("el-menu-item",{attrs:{index:"/"},on:{click:t.send}},[t._v(" Home")])],1)],1),e("el-col",{attrs:{span:3}},[t.isLogin?e("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,router:!0,mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"}}):e("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,router:!0,mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"}},[e("el-menu-item",{attrs:{index:"/signup"}},[t._v("Signup")]),e("el-menu-item",{attrs:{index:"/login"}},[t._v("Login")]),e("el-submenu",{attrs:{index:"1"}},[e("template",{slot:"title"},[e("i",{staticClass:"el-icon-s-tools",staticStyle:{color:"aliceblue","margin-left":"-2px"}})]),e("el-menu-item",{attrs:{index:"1-1",disabled:""}},[t._v(t._s(t.email))]),e("el-menu-item",{on:{click:t.seting}},[t._v("SETTINGS")]),e("el-menu-item",{on:{click:t.exit}},[t._v("SIGN OUT")])],2)],1),e("el-menu")],1)],1)},o=[],l=new s["default"],c={data:function(){return{email:"Not logged in"}},computed:{activeIndex:function(){return this.$route.path},isLogin:function(){return this.$store.getters.getIsLogin},user:function(){return this.$store.getters.getUser}},mounted:function(){localStorage.getItem("user")},created:function(){var t=this;l.$on("login",(function(e){console.log("login",e),t.email=e.email})),l.$on("Update",(function(e){t.email="Not logged in"}))},methods:{seting:function(){"Not logged in"!=this.email?this.$router.push("/change"):this.$message.error("Please log in your account before you can access the Settings page!")},exit:function(){this.email="Not logged in",this.$message.success("Your account has been logged out!"),window.sessionStorage.clear(),this.$router.push("/login")},logout:function(){this.$store.dispatch("logout"),this.$router.push("/login")},send:function(){l.$emit("home","home")}}},u=c,m=(i("ae6b"),i("2877")),p=Object(m["a"])(u,a,o,!1,null,"63f221ee",null),d=p.exports,g={name:"App",components:{Header:d}},f=g,h=(i("3080"),Object(m["a"])(f,r,n,!1,null,"5612fab3",null)),v=h.exports,x=i("8c4f"),b=function(){var t=this,e=t._self._c;return e("div",{staticClass:"Box"},[e("div",{staticClass:"category"},[e("div",{staticClass:"hn"},[e("span",{staticStyle:{"font-size":"1.5rem","margin-right":"100px"},on:{click:t.category_rightf}},[t._v("Genre of film")]),t.category_right_status?e("i",{staticClass:"el-icon-arrow-down",on:{click:t.category_rightf}}):e("i",{staticClass:"el-icon-arrow-up",on:{click:t.category_rightf}}),e("div",{staticClass:"box_fq"},[t.category_right_status?e("div",{staticClass:"box_son"},[e("el-card",{staticClass:"box-card",staticStyle:{width:"267px"}},t._l(t.mtypeArry,(function(i){return e("div",{key:i,staticClass:"mtype"},[e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.mtypef(i)}}},[t._v(" "+t._s(i))])],1)})),0)],1):t._e()])]),e("div",{staticClass:"hn wd"},[e("el-button",{attrs:{type:"text"},on:{click:t.youlike}},[t._v(" movies you've rated")])],1)]),t.statusl?e("div",{staticClass:"content"},[e("div",{staticStyle:{color:"#0CDAEB","font-size":"1.2rem","margin-bottom":"10px"}},[t._v("Recommend")]),t._l(t.tj,(function(i){return e("div",{key:i.id,staticClass:"content_movie",attrs:{index:i.id},on:{click:function(e){return t.omovie(i)}}},[e("div",{staticStyle:{width:"156px",height:"320px"}},[e("el-image",{staticStyle:{width:"156px",height:"228px"},attrs:{src:i.imageSrc1,fit:t.fit}}),e("div",{staticStyle:{width:"156px","margin-bottom":"10px",height:"50px"}},[e("span",{staticStyle:{"font-size":"1rem"}},[t._v(t._s(i.title))])]),e("div",{staticStyle:{width:"156px","margin-top":"5px",height:"15px"}},[e("span",{staticStyle:{"font-size":"1rem"}},[t._v(t._s(i.year))])])],1)])}))],2):t._e(),t.statusl?e("div",{staticClass:"content"},[e("div",{staticStyle:{color:"#0CDAEB","font-size":"1.2rem","margin-bottom":"10px"}},[t._v("Weekly Trending")]),t._l(t.rm,(function(i){return e("div",{key:i.id,staticClass:"content_movie",attrs:{index:i.id},on:{click:function(e){return t.omovie(i)}}},[e("div",{staticStyle:{width:"156px",height:"320px"}},[e("el-image",{staticStyle:{width:"156px",height:"228px"},attrs:{src:i.imageSrc1,fit:t.fit}}),e("div",{staticStyle:{width:"156px","margin-bottom":"10px",height:"50px"}},[e("span",{staticStyle:{"font-size":"1rem"}},[t._v(t._s(i.title))])]),e("div",{staticStyle:{width:"156px","margin-top":"5px",height:"15px"}},[e("span",{staticStyle:{"font-size":"1rem"}},[t._v(t._s(i.year))])])],1)])}))],2):t._e(),t.statusl?e("div",{staticClass:"content"},[e("div",{staticStyle:{color:"#0CDAEB","font-size":"1.2rem","margin-bottom":"10px"}},[t._v("Top Rated")]),t._l(t.gf,(function(i){return e("div",{key:i.id,staticClass:"content_movie",attrs:{index:i.id},on:{click:function(e){return t.omovie(i)}}},[e("div",{staticStyle:{width:"156px",height:"320px"}},[e("el-image",{staticStyle:{width:"156px",height:"228px"},attrs:{src:i.imageSrc1,fit:t.fit}}),e("div",{staticStyle:{width:"156px","margin-bottom":"10px",height:"50px"}},[e("span",{staticStyle:{"font-size":"1rem"}},[t._v(t._s(i.title))])]),e("div",{staticStyle:{width:"156px","margin-top":"5px",height:"15px"}},[e("span",{staticStyle:{"font-size":"1rem"}},[t._v(t._s(i.year))])])],1)])}))],2):t._e(),t.status2?e("div",{staticClass:"content"},[t._l(t.lb,(function(i){return e("div",{key:i.id,staticClass:"content_movie",attrs:{index:i.id},on:{click:function(e){return t.omovie(i)}}},[e("div",{staticStyle:{width:"156px",height:"320px"}},[e("el-image",{staticStyle:{width:"156px",height:"228px"},attrs:{src:i.imageSrc1,fit:t.fit}}),e("div",{staticStyle:{width:"156px","margin-bottom":"10px",height:"30px"}},[e("span",{staticStyle:{"font-size":"1rem"}},[t._v(t._s(i.title))])]),e("div",{staticStyle:{width:"156px","margin-top":"5px",height:"15px"}},[e("span",{staticStyle:{"font-size":"1rem"}},[t._v(t._s(i.year))])])],1)])})),e("div",{staticClass:"block"},[e("span",{staticClass:"demonstration"}),e("el-pagination",{attrs:{"current-page":t.currentPage1,"page-size":21,layout:"total, prev, pager, next",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage1=e},"update:current-page":function(e){t.currentPage1=e}}})],1)],2):t._e()])},y=[],_=(i("96cf"),i("1da1")),w={data:function(){return{cid:"000",type:"no",sjs:"",iconColor:"#ffb24e",category_right_status:!1,movieList:[],rm:[],gf:[],tj:[],lb:[],pageSize:"",total:"",lbs:[],statusl:!0,status2:!1,mtypeArry:["Adventure","Animation","Children","Comedy","Fantasy","Drama","Mystery","Thriller"]}},mounted:function(){this.init()},beforeDestroy:function(){this.send()},created:function(){var t=this;l.$on("home",(function(e){t.type="no",console.log("你的喜欢",e)}))},methods:{handleSizeChange:function(t){console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){console.log("当前页: ".concat(t)),t-=1,this.lb=this.lbs[t],console.log("当前页: ".concat(t))},init:function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(){var e,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.cid=window.sessionStorage.getItem("token"),t.next=3,this.$http.get("/api/ratings/getdata?type="+this.type+"&cid="+this.cid);case 3:e=t.sent,i=e.data,this.rm=i.obj.rm,this.gf=i.obj.gf,this.tj=i.obj.tj,this.type="no",this.status2=!1,this.statusl=!0,console.log(i);case 12:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),youlike:function(){var t=window.sessionStorage.getItem("token");if(console.log(t),!t)return this.$message.error("请先登录账号后才能看到你的历史打分!");this.$router.push("/like")},send:function(){l.$emit("xg",this.sjs)},omovie:function(t){this.sjs=t,this.$router.push("/mdetails")},category_rightf:function(){this.category_right_status=!this.category_right_status},mtypef:function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(e){var i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.type=e,this.sleep(300),this.category_rightf(),this.statusl=!1,this.status2=!0,t.next=7,this.$http.get("/api/ratings/classification?type="+this.type);case 7:i=t.sent,s=i.data,this.lb=s.obj.sj[0],this.lbs=s.obj.sj,this.total=s.obj.cd;case 12:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),sleep:function(t){var e=new Date,i=e.getTime()+t;while(1)if(e=new Date,e.getTime()>i)return!0}}},S=w,k=(i("a261"),Object(m["a"])(S,b,y,!1,null,"fd4c8c3c",null)),C=k.exports,j=function(){var t=this,e=t._self._c;return e("el-row",{attrs:{type:"flex",align:"center",justify:"center"}},[e("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,rules:t.rules,"label-width":"100px"}},[e("el-form-item",{attrs:{label:"User Name",prop:"username"}},[e("el-input",{model:{value:t.ruleForm.username,callback:function(e){t.$set(t.ruleForm,"username",e)},expression:"ruleForm.username"}})],1),e("el-form-item",{attrs:{label:"Password",prop:"password"}},[e("el-input",{attrs:{type:"password"},model:{value:t.ruleForm.password,callback:function(e){t.$set(t.ruleForm,"password",e)},expression:"ruleForm.password"}})],1),e("el-form-item",[e("el-button",{attrs:{type:"success",round:""},on:{click:function(e){return t.submitForm("ruleForm")}}},[t._v("Login")])],1)],1)],1)},$=[],z={name:"Login",data:function(){return{ruleForm:{username:"",password:""},rules:{username:[{required:!0,message:"Please input username",trigger:"blur"},{min:4,max:32,message:"Length limited from 4 to 32 characters",trigger:"blur"}],password:[{required:!0,message:"Please input password",trigger:"blur"},{min:8,max:32,message:"Length limited from 8 to 32 characters",trigger:"blur"}]}}},methods:{submitForm:function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(e){var i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this,console.log(this.ruleForm),t.next=4,this.$http.post("/api/user/login",this.ruleForm);case 4:i=t.sent,s=i.data,console.log("res",s),200==s.code?(window.sessionStorage.setItem("token",this.ruleForm.username),window.sessionStorage.setItem("user",JSON.stringify(s.obj)),this.$message.success("login successfully"),l.$emit("login",s.obj),this.$router.push("/")):this.$message.error("The account or password is incorrect");case 8:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}},F=z,L=(i("1344"),Object(m["a"])(F,j,$,!1,null,"cd018fb0",null)),O=L.exports,P=function(){var t=this,e=t._self._c;return e("div",[e("div",[e("el-row",{attrs:{type:"flex",align:"center",justify:"center"}},[e("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,rules:t.rules,"label-width":"100px"}},[e("el-form-item",{attrs:{label:"User Name",prop:"username"}},[e("el-input",{model:{value:t.ruleForm.username,callback:function(e){t.$set(t.ruleForm,"username",e)},expression:"ruleForm.username"}})],1),e("el-form-item",{attrs:{label:"Password",prop:"password"}},[e("el-input",{attrs:{type:"password"},model:{value:t.ruleForm.password,callback:function(e){t.$set(t.ruleForm,"password",e)},expression:"ruleForm.password"}})],1),e("el-form-item",{attrs:{label:"Email",prop:"email"}},[e("el-input",{model:{value:t.ruleForm.email,callback:function(e){t.$set(t.ruleForm,"email",e)},expression:"ruleForm.email"}})],1),e("el-form-item",[e("el-button",{attrs:{type:"success",round:""},on:{click:function(e){return t.submitForm("ruleForm")}}},[t._v("Signup")])],1)],1)],1)],1)])},U=[],A=i("bc3a"),R=i.n(A),I={name:"Sign",data:function(){var t=function(t,e,i){R.a.get("/api/user/checkUsername?username="+e).then((function(t){0==t.data.code?(console.log("username validation success"),i()):i(new Error("Username already existed"))}))},e=function(t,e,i){0==/^\w{1,64}@[a-z0-9\-]{1,256}(\.[a-z]{2,6}){1,2}$/i.test(e)&&i(new Error("Email format error")),R.a.post("/api/user/checkEmail?email="+e).then((function(t){0==t.data.code?i():i(new Error("Email already existed"))}))};return{ruleForm:{username:"",email:"",password:""},rules:{username:[{validator:t,trigger:"blur"},{required:!0,message:"Please input username",trigger:"blur"},{min:4,max:32,message:"Length limited from 4 to 32 characters",trigger:"blur"}],email:[{validator:e,trigger:"blur"},{required:!0,message:"Please input email",trigger:"blur"},{min:4,max:32,message:"Length limited from 4 to 64 characters",trigger:"blur"}],password:[{required:!0,message:"Please input password",trigger:"blur"},{min:8,max:32,message:"Length limited from 8 to 32 characters",trigger:"blur"}]}}},methods:{submitForm:function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(e){var i,s,r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this,i=this.ruleForm,console.log(i),t.next=5,this.$http.post("/api/user/checkUsername",this.ruleForm);case 5:if(s=t.sent,r=s.data,console.log("res",r),200!=r.code){t.next=20;break}return t.next=11,this.$http.post("/api/user/login",this.ruleForm);case 11:return n=t.sent,a=n.data,window.sessionStorage.setItem("token",this.ruleForm.username),window.sessionStorage.setItem("user",JSON.stringify(a.obj)),l.$emit("login",a.obj),this.$router.push("/like2"),t.abrupt("return",this.$message.success(r.message));case 20:this.$message.error(r.message);case 21:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}},E=I,N=(i("35b1"),Object(m["a"])(E,P,U,!1,null,"4014af98",null)),T=N.exports,q=function(){var t=this,e=t._self._c;return e("el-row",{attrs:{type:"flex",align:"center",justify:"center"}},[e("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,rules:t.rules,"label-width":"100px"}},[e("el-form-item",{attrs:{label:"Email",prop:"email"}},[e("el-input",{attrs:{placeholder:"Please input new email"},model:{value:t.ruleForm.email,callback:function(e){t.$set(t.ruleForm,"email",e)},expression:"ruleForm.email"}})],1),e("el-form-item",{attrs:{label:"Password",prop:"password"}},[e("el-input",{attrs:{type:"password",placeholder:"Input new password"},model:{value:t.ruleForm.password,callback:function(e){t.$set(t.ruleForm,"password",e)},expression:"ruleForm.password"}})],1),e("el-form-item",[e("el-button",{attrs:{type:"success",round:""},on:{click:function(e){return t.submitForm("ruleForm")}}},[t._v("Update")])],1)],1)],1)},D=[],B={name:"Setting",data:function(){var t=function(t,e,i){0==/^\w{1,64}@[a-z0-9\-]{1,256}(\.[a-z]{2,6}){1,2}$/i.test(e)&&i(new Error("Email format error")),R.a.post("/api/user/checkEmail?email="+e).then((function(t){0==t.data.code?i():i(new Error("Email already existed"))}))};return{ruleForm:{id:0,email:"",password:""},rules:{email:[{validator:t,trigger:"blur"},{required:!0,message:"Please input email",trigger:"blur"},{min:4,max:32,message:"Length limited from 4 to 64 characters",trigger:"blur"}],password:[{required:!0,message:"Please input password",trigger:"blur"},{min:8,max:32,message:"Length limited from 8 to 32 characters",trigger:"blur"}]}}},methods:{submitForm:function(t){console.log(t);var e=this,i=this.ruleForm;i.id=this.$store.getters.getUserId,this.$refs[t].validate((function(t){t&&R.a.post("/api/user/setting",i).then((function(t){console.log(t),0==t.data.code?(e.$message({message:"Update Success!",type:"success"}),e.$store.dispatch("login",t.data.data),e.$router.push({path:"/"})):e.$message({message:"Update Error!",type:"error"})}))}))}}},J=B,M=(i("0390"),Object(m["a"])(J,q,D,!1,null,"5740af4f",null)),Q=M.exports,W=function(){var t=this,e=t._self._c;return e("el-main",[e("el-row",{attrs:{type:"flex",align:"center",justify:"center"}},[e("el-col",{attrs:{span:18}},[e("el-alert",{attrs:{title:"Are you sure to logout?",type:"warning",effect:"dark"}})],1)],1),e("el-row",{attrs:{type:"flex",align:"center",justify:"center"}},[e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.logout()}}},[t._v("Logout")])],1)],1)},H=[],Y={name:"Logout",methods:{logout:function(){this.$store.commit("cleanLoggedin")}}},G=Y,K=Object(m["a"])(G,W,H,!1,null,null,null),V=K.exports,X=(i("7f7f"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"Box"},[e("div",{staticClass:"category"},[e("div",{staticClass:"box_white"},[e("div",[e("div",{staticClass:"hn"},[e("a",{attrs:{href:t.hearfs,target:"_blank"}},[e("el-image",{staticStyle:{width:"500px",height:"280px"},attrs:{src:t.sj.imageSrc2}})],1)]),e("div",{staticClass:"hn"},[e("div",{staticStyle:{"margin-bottom":"10px"}},[e("span",{staticStyle:{"font-size":"2rem"}},[t._v(t._s(t.sj.name))])]),e("div",{staticStyle:{"margin-top":"5px"}},[e("el-rate",{on:{change:t.starf},model:{value:t.star,callback:function(e){t.star=e},expression:"star"}})],1),e("div",[e("div",{staticStyle:{display:"inline-block","margin-right":"80px"}},[t._m(0),e("div",{staticStyle:{"margin-top":"10px"}},[e("span",{staticStyle:{"font-size":"1rem"}},[t._v(t._s(t.sj.runtime))])])]),e("div",{staticStyle:{display:"inline-block","margin-right":"80px"}},[t._m(1),e("div",{staticStyle:{"margin-top":"10px"}},t._l(t.sj.mtypeLis,(function(i){return e("span",{key:i,staticStyle:{"font-size":"0.9rem",color:"#77b8e8"},attrs:{index:i}},[t._v(t._s(i)+"\n                ")])})),0)])]),e("div",{staticStyle:{"margin-top":"15px"}},[e("div",{staticStyle:{display:"inline-block","margin-right":"80px"}},[t._m(2),e("div",{staticStyle:{"margin-top":"10px"}},[e("span",{staticStyle:{"font-size":"1rem"}},[t._v(t._s(t.sj.voteCount))])])]),t._m(3)])])])])]),e("div",{staticClass:"category_jj"},[t._v(t._s(t.sj.jj))]),e("div",{staticClass:"category_jj"},[e("div",{staticClass:"head"},[e("div",{staticStyle:{"font-size":"20px",position:"absolute",top:"15px",left:"2px"}},[t._v(t._s(this.cid)+":")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.firstComments,expression:"firstComments"}],staticStyle:{"margin-left":"25px"},attrs:{type:"text",placeholder:"Please enter a comment.."},domProps:{value:t.firstComments},on:{input:function(e){e.target.composing||(t.firstComments=e.target.value)}}}),e("button",{on:{click:t.sumbit}},[t._v("add a comment")])]),e("div",{staticClass:"content"},t._l(t.comment,(function(i,s){return e("div",{key:s,staticClass:"first"},[e("div",{staticClass:"first-img"}),e("div",{staticClass:"first-content"},[e("span",[t._v(t._s(i.cid)+": ")]),e("span",{staticClass:"first-time"},[t._v(t._s(i.ctimeStr))]),e("p",{staticClass:"first-comment"},[t._v(t._s(i.cstr))])])])})),0)]),e("div",{staticClass:"category_jj"},[e("div",{staticStyle:{color:"#0CDAEB","font-size":"1.2rem","margin-bottom":"10px"}},[t._v(" Similar Movies")]),t.statusl?e("div",{staticClass:"content"},t._l(t.tj,(function(i){return e("div",{key:i,staticClass:"content_movie",attrs:{index:i},on:{click:function(e){return t.omovie(i)}}},[e("div",{staticStyle:{width:"156px",height:"320px"}},[e("el-image",{staticStyle:{width:"156px",height:"228px"},attrs:{src:i.imageSrc1,fit:t.fit}}),e("div",{staticStyle:{width:"156px","margin-bottom":"10px",height:"50px"}},[e("span",{staticStyle:{"font-size":"1rem"}},[t._v(t._s(i.title))])]),e("div",{staticStyle:{width:"156px","margin-top":"5px",height:"15px"}},[e("span",{staticStyle:{"font-size":"1rem"}},[t._v(t._s(i.year))])])],1)])})),0):t._e()]),e("div",{staticClass:"category_jj"},[e("div",{staticStyle:{color:"#0CDAEB","font-size":"1.2rem","margin-bottom":"10px"}},[t._v(" Recommendation movie")]),t.statusl?e("div",{staticClass:"content"},t._l(t.xs,(function(i){return e("div",{key:i,staticClass:"content_movie",attrs:{index:i},on:{click:function(e){return t.omovie(i)}}},[e("div",{staticStyle:{width:"156px",height:"320px"}},[e("el-image",{staticStyle:{width:"156px",height:"228px"},attrs:{src:i.imageSrc1,fit:t.fit}}),e("div",{staticStyle:{width:"156px","margin-bottom":"10px",height:"50px"}},[e("span",{staticStyle:{"font-size":"1rem"}},[t._v(t._s(i.title))])]),e("div",{staticStyle:{width:"156px","margin-top":"5px",height:"15px"}},[e("span",{staticStyle:{"font-size":"1rem"}},[t._v(t._s(i.year))])])],1)])})),0):t._e()])])}),Z=[function(){var t=this,e=t._self._c;return e("div",{staticStyle:{"margin-top":"5px"}},[e("span",{staticStyle:{"font-size":"1rem",color:"#efa485"}},[t._v("runtime")])])},function(){var t=this,e=t._self._c;return e("div",{staticStyle:{"margin-top":"5px"}},[e("span",{staticStyle:{"font-size":"1rem",color:"#efa485"}},[t._v("category")])])},function(){var t=this,e=t._self._c;return e("div",{staticStyle:{"margin-top":"5px"}},[e("span",{staticStyle:{"font-size":"1rem",color:"#efa485"}},[t._v("vote count")])])},function(){var t=this,e=t._self._c;return e("div",{staticStyle:{display:"inline-block","margin-right":"80px"}},[e("div",{staticStyle:{"margin-top":"5px"}},[e("span",{staticStyle:{"font-size":"1rem",color:"#efa485"}},[t._v("source")])]),e("div",{staticStyle:{"margin-top":"10px"}},[e("span",{staticStyle:{"font-size":"1rem",color:"#77b8e8"}},[t._v("themoviedb")])])])}],tt={components:{},data:function(){return{hearfs:"",firstComments:"",sj:null,xs:null,cid:"",tj:null,star:0,statusl:!0,comment:[],movieid:""}},created:function(){var t=this;l.$on("xg",(function(e){t.sj=e,t.hearfs="https://www.youtube.com/watch?v="+e.hearf,t.comment=e.comment,t.movieid=e.movieid,console.log(t.comment);var i=t.gettoken();t.cid=i||"Not logged in"}))},mounted:function(){this.gettjxs()},methods:{gettjxs:function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(){var e,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/api/ratings/lb?mid="+this.movieid);case 2:e=t.sent,i=e.data,this.tj=i.obj.tj,this.xs=i.obj.xs,console.log(i);case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),sumbit:function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(){var e,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(this.firstComments),e=this.gettoken(),!e){t.next=6;break}""!=this.firstComments?(i={cid:e,ctimeStr:new Date,cstr:this.firstComments},this.comment.unshift(i),i.mid=this.movieid,this.$http.post("/api/ratings/sumbit",i),this.$message.success("Thanks for participating, comment success!"),this.firstComments=""):this.$message.error("You cannot enter an empty comment!"),t.next=7;break;case 6:return t.abrupt("return",this.$message.error("Please login to your account before Posting comments!"));case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),starf:function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(){var e,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(this.star),e=this.gettoken(),console.log(e),!e){t.next=13;break}return this.sj.star=this.star,this.sj.cid=e,t.next=8,this.$http.post("/api/ratings/jsData",this.sj);case 8:i=t.sent,i.data,this.$message.success("Thank you for your participation. Score success:"+this.star+"Mark"),t.next=14;break;case 13:return t.abrupt("return",this.$message.error("Please log in your account first before you can score!"));case 14:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),gettoken:function(){return window.sessionStorage.getItem("token")}}},et=tt,it=(i("500c"),Object(m["a"])(et,X,Z,!1,null,"6caeec19",null)),st=it.exports,rt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"Box"},[t._m(0),e("div",{staticClass:"content"},t._l(t.movieList,(function(i){return e("div",{key:i,staticClass:"content_movie",attrs:{index:i},on:{click:function(e){return t.omovie(i)}}},[e("div",[e("div",{staticClass:"category"},[e("div",{staticClass:"box_white"},[e("div",[e("div",{staticClass:"hn",staticStyle:{width:"500px",height:"280px"}},[e("el-image",{attrs:{src:i.imagesrc2}})],1),e("div",{staticClass:"hn"},[e("div",{staticStyle:{"margin-bottom":"10px"}},[e("span",{staticStyle:{"font-size":"3rem"}},[t._v(t._s(i.name))])]),e("div",{staticStyle:{"margin-top":"5px"}},[e("el-rate",{attrs:{"show-text":""},on:{change:t.starf},model:{value:i.star,callback:function(e){t.$set(i,"star",e)},expression:"item.star"}})],1),e("div",{staticClass:"category_jj",staticStyle:{width:"500px"}},[t._v("\n                  "+t._s(i.jj)+"\n                ")])])])])])])])})),0)])},nt=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"category"},[e("div",{staticClass:"centero"},[e("span",[t._v("历史评分区")])])])}],at={data:function(){return{iconColor:"#ffb24e",category_right_status:!1,movieList:[]}},mounted:function(){this.init()},methods:{init:function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(){var e,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(this.star),e=window.sessionStorage.getItem("token"),t.next=4,this.$http.post("/api/ratings/like",{name:e});case 4:i=t.sent,s=i.data,this.movieList=s.obj,console.log(this.movieList);case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),youlike:function(){console.log("你的喜欢")},omovie:function(t){console.log(t),this.$router.push("/mdetails")},category_rightf:function(){this.category_right_status=!this.category_right_status},mtypef:function(){this.sleep(300),this.category_rightf()},sleep:function(t){var e=new Date,i=e.getTime()+t;while(1)if(e=new Date,e.getTime()>i)return!0}}},ot=at,lt=(i("e07b"),Object(m["a"])(ot,rt,nt,!1,null,"0f8a2c1e",null)),ct=lt.exports,ut=function(){var t=this,e=t._self._c;return e("div",{staticClass:"Box"},[e("div",{staticClass:"like"},[e("div",{staticClass:"like1"},[t._v("welcome!")]),e("div",{staticClass:"like2"},[t._v("Welcome to choose your favorite kind!")]),e("div",{staticClass:"like3"},[t._v("There are 20 categories:")]),e("div",{staticClass:"like3"},[e("div",{staticStyle:{display:"inline-block"}},[t._v("你的选择:"+t._s(t.xz))]),e("div",{staticStyle:{display:"inline-block","margin-left":"20px"}},[e("el-button",{attrs:{type:"success",round:"",size:"small"},on:{click:t.bcxq}},[t._v("保存兴趣")])],1)]),e("div",[e("div",t._l(t.types,(function(i){return e("div",{key:i,staticClass:"xbox"},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v(t._s(i.title))]),e("el-button",{staticStyle:{float:"right"},attrs:{type:"text"},on:{click:function(e){return t.xqf(i)}}},[e("i",{staticClass:"el-icon-circle-plus-outline",style:{color:i.color}})])],1),e("div",{staticStyle:{float:"left"}},[e("el-image",{staticStyle:{width:"100px",height:"135px"},attrs:{src:i.url,fit:"fit"}})],1),e("div",{staticStyle:{float:"left","margin-left":"20px"}},[e("div",{staticStyle:{width:"100px"}},[t._v(t._s(i.name))])])])],1)})),0)])])])},mt=[],pt={data:function(){return{url:"https://image.tmdb.org/t/p/w500/aipiU6YQlClnSkQlbSm7Wm7n7qc.jpg",iconColor:"#ffb24e",category_right_status:!1,types:[{url:"https://image.tmdb.org/t/p/w500/aipiU6YQlClnSkQlbSm7Wm7n7qc.jpg",name:"Animation",title:"忠犬八公",color:"#66B1FF"},{url:"https://image.tmdb.org/t/p/w500/aipiU6YQlClnSkQlbSm7Wm7n7qc.jpg",name:"Animation2",title:"忠犬八公2",color:"#66B1FF"}],xz:[]}},mounted:function(){this.getxh()},methods:{getxh:function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(){var e,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=window.sessionStorage.getItem("token"),t.next=3,this.$http.get("/api/ratings/getxh?cid="+e);case 3:i=t.sent,s=i.data,this.types=s.obj.types,this.xz=s.obj.xz;case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),bcxq:function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(){var e,i,s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=window.sessionStorage.getItem("token"),i={xh:this.xz,cid:e},t.next=4,this.$http.post("/api/user/xh?",i);case 4:return s=t.sent,r=s.data,console.log(r),t.abrupt("return",this.$message.success("喜好选择成功!"));case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),xqf:function(t){if("red"===t.color){t.color="#66B1FF";var e=t.title;this.xz.splice(this.xz.indexOf(e),1);for(var i=0;i<this.xz.length;i++)this.xz[i]}else{t.color="red";var s=t.title;if(0==this.xz.length)this.xz.push(s);else for(var r=0;r<this.xz.length;r++){var n=this.xz[r];if(console.log("name",this.xz[r]),n===s)break;r==this.xz.length-1&&this.xz.push(s)}}}}},dt=pt,gt=(i("1e29"),Object(m["a"])(dt,ut,mt,!1,null,"374c4d2a",null)),ft=gt.exports,ht=function(){var t=this,e=t._self._c;return e("div",{staticClass:"category"},[e("div",{staticClass:"left_box"},[e("div",{staticClass:"banner"},[e("div",{staticClass:"w"},[e("div",{staticClass:"subnav"},[e("ul",[e("a",{attrs:{href:"#"}},[e("li",{class:{bg:1===t.time},on:{click:function(e){return t.gcolor(1)}}},[t._v("Account setting")])]),e("a",{attrs:{href:"#"}},[e("li",{class:{bg:2===t.time},on:{click:function(e){return t.gcolor(2)}}},[t._v("Change password")])]),e("a",{attrs:{href:"#"}},[e("li",{class:{bg:3===t.time},on:{click:function(e){return t.gcolor(3)}}},[t._v("Delete a ccount")])])])])])])]),e("div",{staticClass:"rght_box"},[1==t.time?e("div",{staticClass:"rght_box2"},[t._m(0),e("br"),e("el-form",{attrs:{"label-position":t.labelPosition,"label-width":"140px",model:t.formLabelAlign}},[e("el-form-item",{attrs:{label:"Email"}},[e("el-input",{model:{value:t.formLabelAlign.Email,callback:function(e){t.$set(t.formLabelAlign,"Email",e)},expression:"formLabelAlign.Email"}})],1),e("el-form-item",{attrs:{label:"UserName"}},[e("el-input",{model:{value:t.formLabelAlign.UserName,callback:function(e){t.$set(t.formLabelAlign,"UserName",e)},expression:"formLabelAlign.UserName"}})],1),e("el-form-item",{attrs:{label:""}},[e("el-button",{on:{click:t.UpdateU}},[t._v("Update")])],1)],1)],1):t._e(),2==t.time?e("div",{staticClass:"rght_box2"},[t._m(1),e("br"),e("el-form",{attrs:{"label-position":t.labelPosition,"label-width":"140px",model:t.formLabelAlign}},[e("el-form-item",{attrs:{label:"Password"}},[e("el-input",{model:{value:t.formLabelAlign.Password,callback:function(e){t.$set(t.formLabelAlign,"Password",e)},expression:"formLabelAlign.Password"}})],1),e("el-form-item",{attrs:{label:"Retype Password","label-width":"140px"}},[e("el-input",{model:{value:t.formLabelAlign.Retype,callback:function(e){t.$set(t.formLabelAlign,"Retype",e)},expression:"formLabelAlign.Retype"}})],1),e("el-form-item",{attrs:{label:""}},[e("el-button",{on:{click:t.UpdateP}},[t._v("Update")])],1)],1)],1):t._e(),3==t.time?e("div",{staticClass:"rght_box2"},[t._m(2),t._m(3),e("br"),e("el-button",{attrs:{type:"danger"},on:{click:t.deleteU}},[t._v("Update")])],1):t._e()])])},vt=[function(){var t=this,e=t._self._c;return e("div",[e("span",{staticClass:"title"},[t._v("Account setting")])])},function(){var t=this,e=t._self._c;return e("div",[e("span",{staticClass:"title"},[t._v("Change your password")])])},function(){var t=this,e=t._self._c;return e("div",[e("span",{staticClass:"title"},[t._v("Delete a ccount")])])},function(){var t=this,e=t._self._c;return e("div",[e("span",[t._v("Have you thought about it? What you're going to do will delete your account, irretrievably")])])}],xt={components:{},data:function(){return{time:1,color1:"#5CAFE2",labelPosition:"right",formLabelAlign:{Email:"",UserName:"",Password:"",Retype:"",id:""}}},created:function(){},mounted:function(){this.init()},methods:{gcolor:function(t){this.time=t,console.log(this.time)},init:function(){var t=JSON.parse(window.sessionStorage.getItem("user"));console.log("user",t),this.formLabelAlign.Email=t.email,this.formLabelAlign.UserName=t.username,this.formLabelAlign.id=t.id},UpdateU:function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.post("/api/user/UpdateU",this.formLabelAlign);case 2:e=t.sent,e.data,this.jumplogin();case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),UpdateP:function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.post("/api/user/UpdateP",this.formLabelAlign);case 2:e=t.sent,e.data,this.jumplogin();case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),deleteU:function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.post("/api/user/deleteU",this.formLabelAlign);case 2:e=t.sent,e.data,this.jumplogin();case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),jumplogin:function(){this.$message.success("账号信息更新成功,请重新登录"),window.sessionStorage.clear(),l.$emit("Update","未登录"),this.$router.push("/login")}}},bt=xt,yt=(i("53c4"),Object(m["a"])(bt,ht,vt,!1,null,"50e19774",null)),_t=yt.exports;s["default"].use(x["a"]);var wt=new x["a"]({routes:[{path:"/",name:"Home",component:C},{path:"/login",name:"Login",component:O},{path:"/signup",name:"Signup",component:T},{path:"/setting",name:"Setting",component:Q},{path:"/logout",name:"Logout",component:V},{path:"/mdetails",name:"Mdetails",component:st},{path:"/like",name:"Like",component:ct},{path:"/like2",name:"Like2",component:ft},{path:"/change",name:"Change",component:_t}]}),St=i("2f62");s["default"].use(St["a"]);var kt=new St["a"].Store({state:{isLogin:!1,user:{}},getters:{getIsLogin:function(t){return t.isLogin||null!=localStorage.getItem("user")},getUser:function(t){return JSON.parse(localStorage.getItem("user"))},getUserId:function(t){return JSON.parse(localStorage.getItem("user")).id}},mutations:{logIn:function(t,e){t.isLogin=!0,localStorage.setItem("user",JSON.stringify({id:e.id,name:e.username,email:e.email}))},logOut:function(t){t.isLogin=!1,t.user={},localStorage.removeItem("user")}},actions:{login:function(t,e){var i=t.commit;i("logIn",e)},logout:function(t){var e=t.commit;e("logOut")}}}),Ct=i("5c96"),jt=i.n(Ct);i("0fae");R.a.interceptors.response.use(void 0,(function(t){if(t){var e=t.config;if(401===t.response.status&&!e._retry)return e._retry=!0,kt.dispatch("logout"),wt.push("/login")}})),s["default"].config.productionTip=!1,s["default"].use(jt.a),s["default"].prototype.$http=R.a,new s["default"]({router:wt,store:kt,render:function(t){return t(v)}}).$mount("#app")},"5fea":function(t,e,i){},9154:function(t,e,i){},"94e2":function(t,e,i){},a261:function(t,e,i){"use strict";i("263e")},a6dc:function(t,e,i){},ae6b:function(t,e,i){"use strict";i("9154")},b52f:function(t,e,i){},bc9c:function(t,e,i){},e07b:function(t,e,i){"use strict";i("5fea")}});
//# sourceMappingURL=app.f87fe5c7.js.map