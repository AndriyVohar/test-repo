(function(){var e={5605:function(e,t,o){"use strict";o.d(t,{$G:function(){return l},MH:function(){return d},MZ:function(){return i},Un:function(){return m},Wj:function(){return g},ZX:function(){return c},_h:function(){return p},jX:function(){return s},wz:function(){return u},yO:function(){return a}});var n=o(4161);const r="http://localhost:8000/api";function i(e,t=null){let o;return o=t?`${r}/${e}?page=${t}`:`${r}/${e}`,n.Z.get(o,{headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"}}).then((e=>t?e.data:e.data.data)).catch((e=>{console.error(e)}))}function a(e,t,o=null){let i;return i=o?`${r}/${t}/${e}?page=${o}`:`${r}/${t}/${e}`,n.Z.get(i,{headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"}}).then((e=>o?e.data:e.data.data)).catch((()=>Promise.reject("Error fetching items list. Please try again later.")))}function s(e,t,o){return n.Z.post(`${r}/${e}`,t,{headers:{"Content-Type":"application/json","User-Google-Id":o}}).then((e=>e.data)).catch((e=>{console.error(e)}))}function c(e,t){return n.Z.get(`${r}/${e}/${t}`,{headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"}}).then((e=>e.data.data)).catch((e=>{console.error(e)}))}function l(e,t,o,i){return n.Z.put(`${r}/${e}/${t}`,o,{headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true","User-Google-Id":i}}).then((e=>e.data)).catch((e=>{console.error(e)}))}function u(e,t,o){return n.Z.delete(`${r}/${e}/${t}`,{headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true","User-Google-Id":o}})}function d(e,t){return n.Z.get(`${r}/users/${e}/advertisements`,{headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true","User-Google-Id":t}}).then((e=>e.data.data)).catch((e=>{console.error(e)}))}function m(e,t=1,o){return n.Z.get(`${r}/washings/${e}/${t}/${o}`,{headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"}}).then((e=>e.data)).catch((e=>{console.error(e)}))}function p(e,t){return n.Z.get(`${r}/${e}/worker-tasks/${t}`,{headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"}}).then((e=>e.data.data)).catch((e=>{console.log(e)}))}function g(e){return n.Z.get(`${r}/${e}/advertisements/approve`,{headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"}}).then((e=>e.data.data)).catch((e=>{console.log(e)}))}},4609:function(e,t,o){"use strict";var n=o(9242),r=o(3396);function i(e,t,o,n,i,a){const s=(0,r.up)("custom-confirm"),c=(0,r.up)("Header"),l=(0,r.up)("RouterView"),u=(0,r.up)("Footer");return(0,r.wg)(),(0,r.iD)("div",null,[i.show_confirm?((0,r.wg)(),(0,r.j4)(s,{key:0,title:i.confirm_obj.title,description:i.confirm_obj.description,type:i.confirm_obj.type},null,8,["title","description","type"])):(0,r.kq)("",!0),(0,r.Wm)(c),(0,r.Wm)(l,{class:"router-view-main"}),(0,r.Wm)(u)])}var a=o.p+"img/logo_dormitory_text.c074b620.svg";const s=e=>((0,r.dD)("data-v-edb2151e"),e=e(),(0,r.Cn)(),e),c={class:"header-content"},l=s((()=>(0,r._)("img",{src:a,alt:""},null,-1))),u=s((()=>(0,r._)("option",{value:"ua"},"🇺🇦",-1))),d=s((()=>(0,r._)("option",{value:"en"},"🇬🇧",-1))),m=[u,d];function p(e,t,o,i,a,s){return(0,r.wg)(),(0,r.iD)("header",null,[(0,r._)("div",c,[l,(0,r.wy)((0,r._)("select",{class:"language-select","onUpdate:modelValue":t[0]||(t[0]=e=>a.selectedLanguage=e),onChange:t[1]||(t[1]=(...e)=>s.changeLanguage&&s.changeLanguage(...e))},m,544),[[n.bM,a.selectedLanguage]])])])}var g=o(65),f={data(){return{value1:"",toggle:"advertisement",selectedLanguage:localStorage.getItem("selectedLanguage")}},mounted(){this.$i18n.locale=localStorage.getItem("selectedLanguage")||"ua",this.selectedLanguage=localStorage.getItem("selectedLanguage")||"ua"},computed:{...(0,g.Se)("user",["user"])},methods:{changeLanguage(){this.$i18n.locale=this.selectedLanguage,localStorage.setItem("selectedLanguage",this.selectedLanguage)}}},h=o(89);const b=(0,h.Z)(f,[["render",p],["__scopeId","data-v-edb2151e"]]);var w=b,_=o(7139),v=o.p+"img/home.91f111f1.svg",y=o(3651),k=o(4729),C=o.p+"img/service.12d21b32.svg",S=o.p+"img/person.dfd60dba.svg";const A=e=>((0,r.dD)("data-v-ab87e60a"),e=e(),(0,r.Cn)(),e),I={class:"footer"},E=A((()=>(0,r._)("img",{src:v,alt:""},null,-1))),$=A((()=>(0,r._)("img",{src:y,alt:""},null,-1))),U=A((()=>(0,r._)("img",{src:k,alt:""},null,-1))),L=A((()=>(0,r._)("img",{src:C,alt:""},null,-1))),P=["src"],j={key:1,src:S,alt:""};function x(e,t,o,n,i,a){const s=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",I,[(0,r.Wm)(s,{to:"/",class:"router-link"},{default:(0,r.w5)((()=>[(0,r._)("div",{class:(0,_.C_)(["footer-element",{selected:"/"===e.$route.path}])},[E,(0,r._)("span",null,(0,_.zw)(e.$t("footer.main")),1)],2)])),_:1}),(0,r.Wm)(s,{to:"/posts",class:"router-link"},{default:(0,r.w5)((()=>[(0,r._)("div",{class:(0,_.C_)(["footer-element",{selected:"/posts"===e.$route.path}])},[$,(0,r._)("span",null,(0,_.zw)(e.$t("global.advertisement")),1)],2)])),_:1}),(0,r.Wm)(s,{to:"/info",class:"router-link"},{default:(0,r.w5)((()=>[(0,r._)("div",{class:(0,_.C_)(["footer-element",{selected:"/info"===e.$route.path}])},[U,(0,r._)("span",null,(0,_.zw)(e.$t("footer.information")),1)],2)])),_:1}),(0,r.Wm)(s,{to:"/services",class:"router-link"},{default:(0,r.w5)((()=>[(0,r._)("div",{class:(0,_.C_)(["footer-element",{selected:"/services"===e.$route.path}])},[L,(0,r._)("span",null,(0,_.zw)(e.$t("global.service")),1)],2)])),_:1}),(0,r.Wm)(s,{to:"/me",class:"router-link"},{default:(0,r.w5)((()=>[(0,r._)("div",{class:(0,_.C_)(["footer-element",{selected:"/me"===e.$route.path}])},[e.user.id?((0,r.wg)(),(0,r.iD)("img",{key:0,src:e.user.imgURL,style:{border:"0.5px solid black","border-radius":"10px"}},null,8,P)):((0,r.wg)(),(0,r.iD)("img",j)),(0,r._)("span",null,(0,_.zw)(e.$t("footer.account")),1)],2)])),_:1})])}o(560);var D={methods:{pushLink(e){this.$router.push(e)}},computed:{...(0,g.Se)(["user"])}};const N=(0,h.Z)(D,[["render",x],["__scopeId","data-v-ab87e60a"]]);var z=N,O=o(72);const T=e=>((0,r.dD)("data-v-09b22674"),e=e(),(0,r.Cn)(),e),R={class:"confirm-bg"},B={class:"confirm-base"},F={class:"confirm-data"},W={class:"icon"},Z={class:"confirm-text"},G=T((()=>(0,r._)("div",{class:"buttons"},[(0,r._)("button",null,"Скасувати"),(0,r._)("button",null,"Підтвердити")],-1)));function M(e,t,o,n,i,a){const s=(0,r.up)("font-awesome-icon");return(0,r.wg)(),(0,r.iD)("div",R,[(0,r._)("div",B,[(0,r._)("div",F,[(0,r._)("div",W,["success"===o.type?((0,r.wg)(),(0,r.j4)(s,{key:0,icon:["fas","circle-check"]})):"warning"===o.type?((0,r.wg)(),(0,r.j4)(s,{key:1,icon:["fas","triangle-exclamation"]})):((0,r.wg)(),(0,r.j4)(s,{key:2,icon:["fas","bomb"]}))]),(0,r._)("div",Z,[(0,r._)("p",null,(0,_.zw)(o.title),1),(0,r._)("p",null,(0,_.zw)(o.description),1),(0,r._)("p",null,(0,_.zw)(o.type),1)])]),G])])}var V={name:"customConfirm",props:{title:String,description:String,type:{type:String,validator(e){return["success","warning","danger"].includes(e)}}}};const Y=(0,h.Z)(V,[["render",M],["__scopeId","data-v-09b22674"]]);var J=Y,K={name:"App",data(){return{show_confirm:!1,confirm_obj:{title:"",description:"",type:"success"}}},components:{CustomConfirm:J,Footer:z,Header:w},computed:{...(0,g.Se)("user",["isLoggedIn"])},methods:{...(0,g.nv)(["loadUser"])},mounted(){window.showCustomConfirm=(e,t,o)=>{this.confirm_obj.title=e,this.confirm_obj.description=t,this.confirm_obj.type=o,this.show_confirm=!0},window.hideCustomConfirm=()=>{this.confirm_obj.title="",this.confirm_obj.description="",this.confirm_obj.type="success",this.show_confirm=!1},window.stopScroll=e=>{let t="";t=e?"hidden":"auto",document.body.style.overflowY=t},localStorage.getItem("defaultDormitory")||localStorage.setItem("defaultDormitory",4),localStorage.getItem("selectedLanguage")||localStorage.setItem("selectedLanguage","ua"),this.loadUser(O.Z.getGoogleIdFromCookie())}};const H=(0,h.Z)(K,[["render",i]]);var Q=H,q=o(2483);const X={class:"page"},ee={class:"alert"};function te(e,t,o,n,i,a){const s=(0,r.up)("Auth_btn");return(0,r.wg)(),(0,r.iD)("div",X,[(0,r._)("div",ee,[(0,r._)("h3",null,(0,_.zw)(e.$t("auth.oops"))+"...",1),(0,r._)("p",null,(0,_.zw)(e.$t("auth.text.notLogged")),1),(0,r._)("p",null,(0,_.zw)(e.$t("auth.text.functions")),1),(0,r._)("p",null,(0,_.zw)(e.$t("auth.rules")),1),(0,r.Wm)(s)])])}const oe={version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48","xmlns:xlink":"http://www.w3.org/1999/xlink",style:{display:"block"}},ne=(0,r.uE)('<path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" data-v-a73d5c62></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" data-v-a73d5c62></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" data-v-a73d5c62></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" data-v-a73d5c62></path><path fill="none" d="M0 0h48v48H0z" data-v-a73d5c62></path>',5),re=[ne];function ie(e,t,o,n,i,a){return(0,r.wg)(),(0,r.iD)("div",{class:"auth-btn",onClick:t[0]||(t[0]=e=>a.signInWithGoogle())},[((0,r.wg)(),(0,r.iD)("svg",oe,re)),(0,r._)("span",null,(0,_.zw)(e.$t("auth.authorize")),1)])}var ae=o(8443),se=o.n(ae),ce=o(5605),le={name:"Auth_btn",methods:{...(0,g.nv)(["loadUser"]),signInWithGoogle(){se().init({google:"687895112030-98oht0ilvp1u0defu2vnb475h844352p.apps.googleusercontent.com"}),se()("google").login({scope:"email"}).then((e=>{const t=e.authResponse.access_token;console.log(t),se()("google").api("me").then((e=>{O.Z.setGoogleIdCookie(e.id),O.Z.setAccessTokenCookie(e.id);const t={google_id:e.id,name:e.name,email:e.email,imgURL:e.picture};console.log(t),(0,ce.jX)("users",t,e.id).then((()=>{this.loadUser(e.id).then((()=>{this.$route.query.redirect&&this.$router.push(this.$route.query.redirect)}))}))}),(e=>{console.error("Помилка отримання профілю: ",e)}))}),(e=>{console.error("Авторизація не вдалась: ",e)}))}}};const ue=(0,h.Z)(le,[["render",ie],["__scopeId","data-v-a73d5c62"]]);var de=ue,me={components:{Auth_btn:de}};const pe=(0,h.Z)(me,[["render",te]]);var ge=pe;const fe=e=>((0,r.dD)("data-v-5ca587ae"),e=e(),(0,r.Cn)(),e),he={class:"main-page-container"},be={key:0,class:"login-notification"},we={class:"text-part"},_e=fe((()=>(0,r._)("div",{class:"spacer"},null,-1))),ve={class:"iframe-container"},ye={key:0,src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.3092066038507!2d22.27880627688167!3d48.62306481723768!2m3!1f0!2f0!3f0!3m2!\r\n    1i1024!2i768!4f13.1!3m3!1m2!1s0x4739184de3d6b1fd%3A0x49937b7cbd2981f5!2z0JPRg9GA0YLQvtC20LjRgtC-0Log0KPQttCd0KMg4oSWMQ!5e0!3m2!1suk!2sua!4v1703448480255!5m2!1suk!2sua",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},ke={key:1,src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.3385398761197!2d22.277629092631823!3d48.62250344328752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473919b3723d569f%3A0xa2d6e1893b65d28!2z0JPRg9GA0YLQvtC20LjRgtC-0Log0KPQttCd0KMg4oSWMg!5e0!3m2!1suk!2sua!4v1703448758353!5m2!1suk!2sua",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},Ce={key:2,src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.31155798193!2d22.280855176881676!3d48.62301981724079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4739184dbf050b95%3A0xa3415e1465987a48!2z0JPRg9GA0YLQvtC20LjRgtC-0Log0KPQttCd0KMg4oSWMw!5e0!3m2!1suk!2sua!4v1703448526952!5m2!1suk!2sua",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},Se={key:3,src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10546.788975405578!2d22.28502516225587!3d48.634775\r\n    32607448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4739183a652310df%3A0x2fb944ceb4390e52!2z0JPRg9GA0YLQvtC2\r\n    0LjRgtC-0Log4oSWNCDQo9C20J3Qow!5e0!3m2!1suk!2sua!4v1703448226217!5m2!1suk!2sua",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},Ae={key:4,src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2636.5638161608163!2d22.283532976882242!3d48.63732831623741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13\r\n    .1!3m3!1m2!1s0x4739183414f6cb71%3A0xa0171da6518a8d6b!2z0JPRg9GA0YLQvtC20LjRgtC-0Log4oSWNSDQo9C20J3Qow!5e0!3m2!1suk!2sua!4v1703448402075!5m2!1suk!2sua",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},Ie={class:"workers-holder"},Ee=["src","alt"],$e={class:"worker-position"},Ue={class:"worker-fullname"},Le={class:"worker-phone"},Pe=["src","alt"],je={class:"worker-position"},xe={class:"worker-fullname"},De={class:"worker-phone"},Ne=fe((()=>(0,r._)("div",{class:"spacer"},null,-1))),ze={class:"disclaimer about-us"},Oe={class:"disclaimer rules"},Te=fe((()=>(0,r._)("div",{class:"space"},null,-1)));function Re(e,t,n,i,a,s){const c=(0,r.up)("Auth_btn"),l=(0,r.up)("selector-component"),u=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",he,[e.user.id?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",be,[(0,r._)("div",we,[(0,r._)("h4",null,(0,_.zw)(e.$t("main.titles.greeting")),1),(0,r._)("p",null,(0,_.zw)(e.$t("main.text.greeting")),1),(0,r._)("p",null,(0,_.zw)(e.$t("auth.rules")),1)]),(0,r.Wm)(c)])),(0,r.Wm)(l),_e,(0,r._)("div",ve,[1==s.selected_dormitory?((0,r.wg)(),(0,r.iD)("iframe",ye)):2==s.selected_dormitory?((0,r.wg)(),(0,r.iD)("iframe",ke)):3==s.selected_dormitory?((0,r.wg)(),(0,r.iD)("iframe",Ce)):4==s.selected_dormitory?((0,r.wg)(),(0,r.iD)("iframe",Se)):((0,r.wg)(),(0,r.iD)("iframe",Ae))]),(0,r._)("div",Ie,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.studmistechkoWorkers,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"workers-data",key:e},[(0,r._)("img",{src:o(2220)(`./${e.image}`),alt:e.fullName},null,8,Ee),(0,r._)("span",null,[(0,r._)("p",$e,(0,_.zw)(e.position),1),(0,r._)("p",Ue,(0,_.zw)(e.fullName),1),(0,r._)("p",Le,(0,_.zw)(e.phone),1)])])))),128)),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.dormitory_data,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"workers-data",key:e},[(0,r._)("img",{src:o(2220)(`./${e.image}`),alt:e.fullName},null,8,Pe),(0,r._)("span",null,[(0,r._)("p",je,(0,_.zw)(e.position),1),(0,r._)("p",xe,(0,_.zw)(e.fullName),1),(0,r._)("p",De,(0,_.zw)(e.phone),1)])])))),128))]),Ne,(0,r.Wm)(u,{class:"router-link",to:"/about-us"},{default:(0,r.w5)((()=>[(0,r._)("div",ze,[(0,r._)("p",null,(0,_.zw)(e.$t("main.titles.aboutUs")),1),(0,r._)("span",null,(0,_.zw)(e.$t("main.text.aboutUs")),1)])])),_:1}),(0,r.Wm)(u,{class:"router-link",to:"/rules"},{default:(0,r.w5)((()=>[(0,r._)("div",Oe,[(0,r._)("p",null,(0,_.zw)(e.$t("main.titles.rules")),1),(0,r._)("span",null,(0,_.zw)(e.$t("main.text.rules")),1)])])),_:1}),Te])}var Be=o(979),Fe=o(7619),We={name:"Main_Page",components:{Auth_btn:de,SelectorComponent:Be.Z},data(){return{dormitory_data:[],studmistechkoWorkers:Fe.filter((e=>"studmistechko"===e.dormitory_num))[0].workers}},computed:{selected_dormitory(){return this.$store.state.dormitoryNumber},...(0,g.Se)(["user"])},methods:{dormitoryWorkersFromJSON(){let e=Fe.filter((e=>parseInt(this.selected_dormitory)===e.dormitory_num))[0];return e.workers}},watch:{selected_dormitory(){this.dormitory_data=this.dormitoryWorkersFromJSON()}},mounted(){this.dormitory_data=this.dormitoryWorkersFromJSON()}};const Ze=(0,h.Z)(We,[["render",Re],["__scopeId","data-v-5ca587ae"]]);var Ge=Ze;const Me=[{path:"/",name:"main",component:Ge,meta:{forLoggedIn:!1}},{path:"/auth",name:"auth",component:ge,props:!0,meta:{forLoggedIn:!1}},{path:"/info",name:"info",component:()=>o.e(359).then(o.bind(o,9359)),meta:{forLoggedIn:!1}},{path:"/infos/create",name:"infoCreate",component:()=>o.e(404).then(o.bind(o,9404)),meta:{forLoggedIn:!0}},{path:"/infos/:id/edit",name:"infoEdit",component:()=>o.e(988).then(o.bind(o,5988)),meta:{forLoggedIn:!0}},{path:"/advertisements",name:"advertisements",component:()=>o.e(250).then(o.bind(o,8250)),children:[{path:"/posts",name:"posts",component:()=>o.e(417).then(o.bind(o,3417)),meta:{forLoggedIn:!1}},{path:"/works",name:"works",component:()=>o.e(306).then(o.bind(o,7306)),meta:{forLoggedIn:!1}}]},{path:"/posts/create",name:"postCreate",component:()=>o.e(257).then(o.bind(o,2257)),meta:{forLoggedIn:!0}},{path:"/posts/:id",name:"post",component:()=>o.e(438).then(o.bind(o,6438)),meta:{forLoggedIn:!1}},{path:"/posts/:id/edit",name:"postEdit",component:()=>o.e(433).then(o.bind(o,433)),meta:{forLoggedIn:!0}},{path:"/works/:id",name:"work",component:()=>o.e(636).then(o.bind(o,636)),meta:{forLoggedIn:!1}},{path:"/works/:id/edit",name:"workEdit",component:()=>o.e(800).then(o.bind(o,7800)),meta:{forLoggedIn:!0}},{path:"/works/create",name:"workCreate",component:()=>o.e(808).then(o.bind(o,7808)),meta:{forLoggedIn:!0}},{path:"/services",name:"services",component:()=>o.e(427).then(o.bind(o,5427))},{path:"/me",name:"me",component:()=>o.e(901).then(o.bind(o,5377)),meta:{forLoggedIn:!0}},{path:"/about-us",name:"aboutUs",component:()=>o.e(455).then(o.bind(o,0)),meta:{forLoggedIn:!1}},{path:"/rules",name:"rules",component:()=>o.e(890).then(o.bind(o,7890)),meta:{forLoggedIn:!1}}],Ve=(0,q.p7)({history:(0,q.PO)("/test-repo/"),routes:Me});Ve.beforeEach(((e,t,o)=>{const n=O.Z.getAccessTokenFromCookie(),r=e.meta?.forLoggedIn;r&&!n?o({path:"/auth",query:{redirect:e.fullPath}}):o()}));var Ye=Ve,Je=(0,g.MT)({state(){return{user:{},accessToken:O.Z.getAccessTokenFromCookie(),userGoogleId:O.Z.getGoogleIdFromCookie(),dormitoryNumber:localStorage.getItem("defaultDormitoryNumber")||4}},getters:{user:({user:e})=>e,userGoogleId:({googleId:e})=>e,accessToken:({accessToken:e})=>e},mutations:{changeUser(e,t){e.user=t},changeAccessToken(e,t){e.accessToken=t},changeDormitoryNumber(e,t){e.dormitoryNumber=t,localStorage.setItem("defaultDormitoryNumber",t)}},actions:{loadUser({commit:e},t){(0,ce.ZX)("users",t).then((t=>{if(t)return e("changeUser",t),t}))}}}),Ke=o(7853),He=JSON.parse('{"global":{"dormitory":"Dormitory","room":"Room","advertisement":"Advertisement","post":"Post","work":"Work","save":"Save","cancel":"Cancel","select":"Select","info":"Information","loading":"Loading","service":"Service","worker":{"plumber":"Plumber","joiner":"Joiner","electrician":"Electrician"},"send":"Send"},"footer":{"main":"Main","information":"Information","account":"Account"},"auth":{"authorize":"Log in","oops":"Oops","text":{"notLogged":"It looks like you are not logged in","functions":"To access these functions, you need to log in from your corporate email"},"rules":"*By logging in to this platform, you confirm that you are familiar with the rules of use"},"main":{"titles":{"greeting":"Greeting","search":"Search","aboutUs":"About Us","rules":"Rules"},"text":{"greeting":"Log in to Uni and use all the opportunities!","aboutUs":"A little bit about us and this project","rules":"Rules for using the platform"}},"profile":{"dateOfJoining":"Date of joining","show":"Show","logout":"Log out","createPost":"Create advertisement","createWork":"Create work","createInfo":"Create information"},"aboutUs":{"titles":{"aboutUs":"About Us","developers":"Developers","contacts":"Contacts","rules":"Rules"},"developers":{"oleksandr":"Oleksandr (2 course)","andriy":"Andriy (2 course)","viktor":"Viktor (2 course)","yaroslav":"Yaroslav (2 course)","oleksiy":"Oleksiy (3 course)","ihor":"Ihor (3 course)"},"contacts":{"communication":"Communicate with us"}},"rules":{"1":"Prohibited materials: Please do not post offensive, obscene, or illegal content.","2":"Accuracy and reliability: Only publish accurate information in your classifieds.","3":"Advertising and spam: Posting unsolicited commercial messages, advertisements, or spam is prohibited.","4":"Responsibility for your own content: Users are solely responsible for what they publish.","5":"The obligation to provide real data: When creating an account, you must provide true and accurate information about yourself. Accounts with fake information may be blocked. Your privacy is important to us and the data will be used in accordance with the privacy policy.","title":"Failure to comply with the rules of use of the platform will lead to account blocking and removal of ads"},"info":{"about":{"title":"Information","text":"On this page you can view data and events related to the selected dormitory"},"edit":"Edit information","create":"Create information"},"work":{"salary":"Salary","create":"Create new work","edit":"Edit work"},"post":{"create":"Create new post","edit":"Edit post"},"services":{"about":{"title":"Services","text":"On this page you can use the services provided by your dormitory. You can make an appointment for laundry, or send a request for repairs from a plumber, carpenter or electrician"},"send-problem":"Send the problem to","washing-appointment":"Making an appointment for laundry"},"form":{"name":"Title","tag":"Category","salary":"Salary","description":"Description","submit":"Submit","cancel":"Cancel","title":"Title","content":"Description","textarea":{"problem-description":"Describe your problem. Please do not write the room number or your surname, as it will automatically be displayed according to your profile data"}}}'),Qe=JSON.parse('{"global":{"dormitory":"Гуртожиток","room":"Кімната","advertisement":"Оголошення","post":"Пост","work":"Робота","save":"Зберегти","cancel":"Скасувати","select":"Вибрати","info":"Інформація","loading":"Завантаження","service":"Послуги","worker":{"plumber":"Сантехнік","joiner":"Столяр","electrician":"Електрик"},"send":"Надіслати"},"footer":{"main":"Головна","information":"Інформація","account":"Акаунт"},"auth":{"authorize":"Авторизуватись","oops":"Ой","text":{"notLogged":"Схоже ви не авторизовані в системі","functions":"Для доступу до цих функцій, необхідно авторизуватись з корпоративної пошти"},"rules":"*Авторизувавшись на даній платформі, ви підтверджуєте, що ознайомлені з правилами користування"},"main":{"titles":{"greeting":"Вітаю","search":"Шукати","aboutUs":"Про нас","rules":"Правила"},"text":{"greeting":"Увійди в Uni та використовуй всі можливості!","aboutUs":"Трохи про нас та цей проект","rules":"Правила користування платформою"}},"profile":{"dateOfJoining":"Дата приєднання","show":"Показати","logout":"Вийти","createPost":"Створити оголошення","createWork":"Створити роботу","createInfo":"Створити інформацію"},"aboutUs":{"titles":{"aboutUs":"Про нас","developers":"Розробники","contacts":"Контакти","rules":"Правила"},"developers":{"oleksandr":"Олександр (2 курс)","andriy":"Андрій (2 курс)","viktor":"Віктор (2 курс)","yaroslav":"Ярослав (2 курс)","oleksiy":"Олексій (3 курс)","ihor":"Ігор (3 курс)"},"contacts":{"communication":"Зв\'язатись з нами"}},"rules":{"1":"Заборонені матеріали: Будь ласка, не публікуйте образливий, непристойний чи нелегальний вміст.","2":"Точність та достовірність: Публікуйте лише достовірну інформацію в оголошеннях.","3":"Реклама та спам: Заборонено розміщення небажаних комерційних повідомлень, реклами чи спаму.","4":"Відповідальність за власний контент: Користувачі несуть особисту відповідальність за те, що вони публікують.","5":"Обов\'язок вказання реальних даних: При створенні облікового запису необхідно надавати правдиву та достовірну інформацію про себе. Облікові записи з фейковою інформацією можуть бути заблоковані. Ваша приватність важлива для нас, і дані будуть використані відповідно до політики конфіденційності.","title":"Недотримання правил користування платформи призведе до блокування акаунту та видалення оголошень"},"info":{"about":{"title":"Інформація","text":"На даній сторінці ви зможете переглянути дані та події пов\'язані з вибраним гуртожитком"},"edit":"Редагувати інформацію","create":"Створити інформацію"},"work":{"salary":"Заробітна плата","create":"Створити нову роботу","edit":"Редагувати роботу"},"post":{"create":"Створити нове пост","edit":"Редагувати пост"},"services":{"about":{"title":"Послуги","text":"На даній сторінці ви можете скористатися послугами, які надає ваш гуртожиток. Записатися на прання, або надіслати запит на ремонт від сантехніка, столяра та електрика"},"send-problem":"Надіслати проблему до","washing-appointment":"Запис на прання речей"},"form":{"name":"Назва","tag":"Категорія","salary":"Заробітна плата","description":"Опис","submit":"Зберегти","cancel":"Скасувати","title":"Назва","content":"Опис","textarea":{"problem-description":"Опишіть свою проблему. Прохання: не пишіть номер кімнати, ваше прізвище, адже воно автоматично буде відображатися відповідно з даними вашого профілю"}}}');const qe=(0,Ke.o)({locale:{NODE_ENV:"production",VUE_APP_DATABASE_API_URL:"http://localhost:8000/api",VUE_APP_FIREBASE_API_KEY:"AIzaSyBIzYOOUnnuYbJtUv9ryHOcdUf8NxfpOrM",VUE_APP_FIREBASE_APP_ID:"1:184955882517:web:c6476a7ec3ea37da84921c",VUE_APP_FIREBASE_AUTH_DOMAIN:"uzhnu-campus-7c7eb.firebaseapp.com",VUE_APP_FIREBASE_MESSAGE_SENDER_ID:"184955882517",VUE_APP_FIREBASE_PROJECT_ID:"uzhnu-campus-7c7eb",VUE_APP_FIREBASE_STORAGE_BUCKET:"uzhnu-campus-7c7eb.appspot.com",VUE_APP_GOOGLE_CLIENT_ID:"687895112030-98oht0ilvp1u0defu2vnb475h844352p.apps.googleusercontent.com",BASE_URL:"/test-repo/"}.VUE_APP_I18N_LOCALE||"ua",fallbackLocale:{NODE_ENV:"production",VUE_APP_DATABASE_API_URL:"http://localhost:8000/api",VUE_APP_FIREBASE_API_KEY:"AIzaSyBIzYOOUnnuYbJtUv9ryHOcdUf8NxfpOrM",VUE_APP_FIREBASE_APP_ID:"1:184955882517:web:c6476a7ec3ea37da84921c",VUE_APP_FIREBASE_AUTH_DOMAIN:"uzhnu-campus-7c7eb.firebaseapp.com",VUE_APP_FIREBASE_MESSAGE_SENDER_ID:"184955882517",VUE_APP_FIREBASE_PROJECT_ID:"uzhnu-campus-7c7eb",VUE_APP_FIREBASE_STORAGE_BUCKET:"uzhnu-campus-7c7eb.appspot.com",VUE_APP_GOOGLE_CLIENT_ID:"687895112030-98oht0ilvp1u0defu2vnb475h844352p.apps.googleusercontent.com",BASE_URL:"/test-repo/"}.VUE_APP_I18N_FALLBACK_LOCALE||"ua",messages:{en:He,ua:Qe}});var Xe=qe,et=o(3494),tt=o(7749),ot=o(8539),nt=o(8429),rt=o(4551);et.vI.add(ot.BC0,ot.acZ,ot.eFW,nt.RrC,ot.r8p,ot.WV2,nt.FU$,rt.Zzi,ot.IwR,ot.zd8,ot.A35,ot._tD,ot.fV7,ot.ik8,ot.Yme,rt.Uv8,ot.j1w,ot.P88,ot.QSU,ot.$aW),(0,n.ri)(Q).use(Je).use(Ye).use(Xe).component("font-awesome-icon",tt.GN).mount("#app")},72:function(e,t){"use strict";class o{static setAccessTokenCookie(e,t){const o=`access_token=${e}; expires=${new Date(t).toUTCString()}; path=/;`;"https:"===window.location.protocol?document.cookie=`${o} Secure; SameSite=None;`:document.cookie=o}static getAccessTokenFromCookie(){const e="access_token=",t=decodeURIComponent(document.cookie),o=t.split(";");for(let n=0;n<o.length;n++){let t=o[n].trim();if(0===t.indexOf(e))return t.substring(e.length,t.length)}return null}static removeAccessTokenCookie(){const e=new Date(1970,0,1).toUTCString();"https:"===window.location.protocol?document.cookie=`access_token=; expires=${e}; path=/; Secure; SameSite=None;`:document.cookie=`access_token=; expires=${e}; path=/;`}static setGoogleIdCookie(e,t){const o=`google_id=${e}; expires=${new Date(t).toUTCString()}; path=/;`;"https:"===window.location.protocol?document.cookie=`${o} Secure; SameSite=None;`:document.cookie=o}static getGoogleIdFromCookie(){const e="google_id=",t=decodeURIComponent(document.cookie),o=t.split(";");for(let n=0;n<o.length;n++){let t=o[n].trim();if(0===t.indexOf(e))return t.substring(e.length,t.length)}return null}static removeGoogleIdCookie(){const e=new Date(1970,0,1).toUTCString();"https:"===window.location.protocol?document.cookie=`google_id=; expires=${e}; path=/; Secure; SameSite=None;`:document.cookie=`google_id=; expires=${e}; path=/;`}static setUserCookie(e,t){try{const o=JSON.stringify(e),n=encodeURIComponent(o),r=`user=${n}; expires=${new Date(t).toUTCString()}; path=/;`;"https:"===window.location.protocol?document.cookie=`${r} Secure; SameSite=None;`:document.cookie=r}catch(o){console.error("Error while setting user cookie:",o)}}static getUserFromCookie(){const e="user=",t=decodeURIComponent(document.cookie),o=t.split(";");for(let r=0;r<o.length;r++){let t=o[r].trim();if(0===t.indexOf(e))try{const o=t.substring(e.length,t.length),n=decodeURIComponent(o);return JSON.parse(n)}catch(n){return console.error("Error while getting user from cookie:",n),null}}return null}static removeUserCookie(){const e=new Date(1970,0,1).toUTCString();"https:"===window.location.protocol?document.cookie=`user=; expires=${e}; path=/; Secure; SameSite=None;`:document.cookie=`user=; expires=${e}; path=/;`}}t.Z=o},979:function(e,t,o){"use strict";o.d(t,{Z:function(){return f}});var n=o(3396),r=o(7139),i=o(9242);const a={value:"1"},s={value:"2"},c={value:"3"},l={value:"4"},u={value:"5"};function d(e,t,o,d,m,p){return(0,n.wg)(),(0,n.iD)("div",{class:(0,r.C_)(["dormitory-selector",p.selector_bg])},[(0,n._)("span",null,(0,r.zw)(e.$t("global.select")),1),(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>m.selected_dormitory=e)},[(0,n._)("option",a,(0,r.zw)(e.$t("global.dormitory"))+" №1",1),(0,n._)("option",s,(0,r.zw)(e.$t("global.dormitory"))+" №2",1),(0,n._)("option",c,(0,r.zw)(e.$t("global.dormitory"))+" №3",1),(0,n._)("option",l,(0,r.zw)(e.$t("global.dormitory"))+" №4",1),(0,n._)("option",u,(0,r.zw)(e.$t("global.dormitory"))+" №5",1)],512),[[i.bM,m.selected_dormitory]])],2)}var m={data(){return{selected_dormitory:this.$store.state.dormitoryNumber}},computed:{selector_bg(){return 1==this.selected_dormitory?"dorm-1":2==this.selected_dormitory?"dorm-2":3==this.selected_dormitory?"dorm-3":4==this.selected_dormitory?"dorm-4":"dorm-5"}},watch:{selected_dormitory(e){this.$store.commit("changeDormitoryNumber",e)}}},p=o(89);const g=(0,p.Z)(m,[["render",d],["__scopeId","data-v-91166e60"]]);var f=g},2220:function(e,t,o){var n={"./BobikYurii.jpeg":1032,"./KepichVasil.jpeg":6196,"./TantsiuraHalina.jpeg":7672};function r(e){var t=i(e);return o(t)}function i(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=2220},3651:function(e,t,o){"use strict";e.exports=o.p+"img/browse.94b3f240.svg"},4729:function(e,t,o){"use strict";e.exports=o.p+"img/info.1e400205.svg"},1032:function(e,t,o){"use strict";e.exports=o.p+"img/BobikYurii.948108d2.jpeg"},6196:function(e,t,o){"use strict";e.exports=o.p+"img/KepichVasil.bd2e1645.jpeg"},7672:function(e,t,o){"use strict";e.exports=o.p+"img/TantsiuraHalina.02054c5f.jpeg"},7619:function(e){"use strict";e.exports=JSON.parse('[{"dormitory_num":"studmistechko","workers":[{"phone":"64-34-67","email":"example@gmail.com","fullName":"КЕПИЧ Василь Георгійович","position":"Директор студмістечка","image":"KepichVasil.jpeg"},{"phone":"64-34-67","email":"example@gmail.com","fullName":"НЕКАЧАЙЛО Валерій Вікторович","position":"Заступник директора студмістечка","image":"BobikYurii.jpeg"},{"phone":"64-34-67","email":"example@gmail.com","fullName":"БУРДЮХ Іван Іванович","position":"Заступник директора по експлуатації","image":"BobikYurii.jpeg"}]},{"dormitory_num":1,"workers":[{"phone":"64-34-67","fullName":"БІЛЕЙ Світлана Петрівна","position":"Комендант гуртожитку","image":"BobikYurii.jpeg"}]},{"dormitory_num":2,"workers":[{"phone":"64-36-97","fullName":"БЕЦАЛА Марія Іванівна","position":"Комендант гуртожитку","image":"BobikYurii.jpeg"}]},{"dormitory_num":3,"workers":[{"phone":"64-33-73","fullName":"МІШУРА Тамара Корніївна","position":"Комендант гуртожитку","image":"BobikYurii.jpeg"}]},{"dormitory_num":4,"workers":[{"phone":"64-26-69","fullName":"ТРОХИМЕЦЬ Ірина Михайлівна","position":"Завідувач гуртожитку","image":"BobikYurii.jpeg"},{"phone":"64-26-69","fullName":"БОБИК Юрій Юрійович","position":"Комендант гуртожитку","image":"BobikYurii.jpeg"},{"phone":"64-26-69","fullName":"ТАНЦЮРА Галина Григорівна","position":"Комендант гуртожитку","image":"TantsiuraHalina.jpeg"}]},{"dormitory_num":5,"workers":[{"phone":"64-35-72","fullName":"БУРИШИН-ОЛІЙНИК Тетяна Іванівна","position":"Комендант гуртожитку","image":"BobikYurii.jpeg"}]}]')}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,n,r,i){if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],i=e[u][2];for(var s=!0,c=0;c<n.length;c++)(!1&i||a>=i)&&Object.keys(o.O).every((function(e){return o.O[e](n[c])}))?n.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,r,i]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/"+e+"."+{250:"450cf5a2",257:"44b4e0ca",306:"ca699c45",359:"0c73f080",404:"5c80bb9a",417:"8ba923bf",427:"eee2e8e7",433:"5dfb736f",438:"e826751d",455:"2194e13f",636:"da0fc98f",800:"34cc4366",808:"4f3fadf4",890:"dd778cbb",901:"233a11b2",988:"ab6f6b02"}[e]+".js"}}(),function(){o.miniCssF=function(e){return"css/"+e+"."+{250:"74baec22",257:"fe492499",306:"69e66b81",359:"df7642c5",404:"10178d38",417:"dd873372",427:"cfd9202a",433:"78d9a9a1",438:"35370622",455:"b8b90c00",636:"7a3f1767",800:"b967cbea",808:"f21f6528",890:"a989ce70",901:"f4b25af4",988:"de081de4"}[e]+".css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="unitrade:";o.l=function(n,r,i,a){if(e[n])e[n].push(r);else{var s,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+i),s.src=n),e[n]=[r];var m=function(t,o){s.onerror=s.onload=null,clearTimeout(p);var r=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(o)})),t)return t(o)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/test-repo/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,n,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(o){if(i.onerror=i.onload=null,"load"===o.type)n();else{var a=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=s,i.parentNode&&i.parentNode.removeChild(i),r(c)}};return i.onerror=i.onload=a,i.href=t,o?o.parentNode.insertBefore(i,o.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var r=o[n],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){r=a[n],i=r.getAttribute("data-href");if(i===e||i===t)return r}},n=function(n){return new Promise((function(r,i){var a=o.miniCssF(n),s=o.p+a;if(t(a,s))return r();e(n,s,null,r,i)}))},r={143:0};o.f.miniCss=function(e,t){var o={250:1,257:1,306:1,359:1,404:1,417:1,427:1,433:1,438:1,455:1,636:1,800:1,808:1,890:1,901:1,988:1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=n(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(o,n){r=e[t]=[o,n]}));n.push(r[2]=i);var a=o.p+o.u(t),s=new Error,c=function(n){if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,r[1](s)}};o.l(a,c,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,i,a=n[0],s=n[1],c=n[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(c)var u=c(o)}for(t&&t(n);l<a.length;l++)i=a[l],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(u)},n=self["webpackChunkunitrade"]=self["webpackChunkunitrade"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(4609)}));n=o.O(n)})();
//# sourceMappingURL=app.e1770a33.js.map