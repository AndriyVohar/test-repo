(function(){var e={5605:function(e,t,o){"use strict";o.d(t,{$G:function(){return u},MH:function(){return m},MZ:function(){return i},Un:function(){return p},Wj:function(){return f},ZX:function(){return l},_h:function(){return g},ee:function(){return _},jX:function(){return c},oL:function(){return h},wz:function(){return d},yO:function(){return s}});var r=o(4161);const n="https://8b00-176-120-107-53.ngrok-free.app/api";let a={"Content-Type":"application/json",Accept:"application/json","ngrok-skip-browser-warning":"true"};function i(e,t=null){let o;return o=t?`${n}/${e}?page=${t}`:`${n}/${e}`,r.Z.get(o,{headers:a}).then((e=>t?e.data:e.data.data)).catch((e=>{console.error(e)}))}function s(e,t,o=null){let i;return i=o?`${n}/${t}/${e}?page=${o}`:`${n}/${t}/${e}`,r.Z.get(i,{headers:a}).then((e=>o?e.data:e.data.data)).catch((()=>Promise.reject("Error fetching items list. Please try again later.")))}function c(e,t,o){return a.Authorization=`Bearer ${o}`,r.Z.post(`${n}/${e}`,t,{headers:a}).then((e=>e.data)).catch((e=>{console.error(e)}))}function l(e,t,o=null){return o&&(a.Authorization=`Bearer ${o}`),r.Z.get(`${n}/${e}/${t}`,{headers:a}).then((e=>e.data.data)).catch((e=>{console.error(e)}))}function u(e,t,o,i){return a.Authorization=`Bearer ${i}`,r.Z.put(`${n}/${e}/${t}`,o,{headers:a}).then((e=>e.data)).catch((e=>{console.error(e)}))}function d(e,t,o){return a.Authorization=`Bearer ${o}`,r.Z.delete(`${n}/${e}/${t}`,{headers:a})}function m(e,t){return a.Authorization=`Bearer ${t}`,r.Z.get(`${n}/users/${e}/advertisements`,{headers:a}).then((e=>e.data.data)).catch((e=>{console.error(e)}))}function p(e,t=1,o){return r.Z.get(`${n}/washings/${e}/${t}/${o}`,{headers:a}).then((e=>e.data)).catch((e=>{console.error(e)}))}function g(e,t,o){return a.Authorization=`Bearer ${o}`,r.Z.get(`${n}/${e}/worker-tasks/${t}`,{headers:a}).then((e=>e.data.data)).catch((e=>{console.log(e)}))}function f(e,t){return a.Authorization=`Bearer ${t}`,r.Z.get(`${n}/${e}/advertisements/approve`,{headers:a}).then((e=>e.data.data)).catch((e=>{console.log(e)}))}function h(e){return a.Authorization=`Bearer ${e}`,r.Z.get(`${n}/works/approve`,{headers:a}).then((e=>e.data.data)).catch((e=>{console.log(e)}))}function _(e){return r.Z.get(`${n}/auth`,{headers:{"Content-Type":"application/json",Accept:"application/json","ngrok-skip-browser-warning":"true","Google-Access-Token":e}}).then((e=>e.data)).catch((e=>{console.log(e)}))}},6638:function(e,t,o){"use strict";var r=o(9242),n=o(3396);function a(e,t,o,r,a,i){const s=(0,n.up)("custom-confirm"),c=(0,n.up)("Header"),l=(0,n.up)("RouterView"),u=(0,n.up)("Footer");return(0,n.wg)(),(0,n.iD)("div",null,[a.show_confirm?((0,n.wg)(),(0,n.j4)(s,{key:0,title:a.confirm_obj.title,description:a.confirm_obj.description,type:a.confirm_obj.type},null,8,["title","description","type"])):(0,n.kq)("",!0),(0,n.Wm)(c),(0,n.Wm)(l,{class:"router-view-main"}),(0,n.Wm)(u)])}var i=o.p+"img/logo_dormitory_text.272700fd.svg";const s=e=>((0,n.dD)("data-v-f8caaa0e"),e=e(),(0,n.Cn)(),e),c={class:"header-content"},l=s((()=>(0,n._)("img",{src:i,alt:""},null,-1))),u=s((()=>(0,n._)("option",{value:"ua"},"🇺🇦",-1))),d=s((()=>(0,n._)("option",{value:"en"},"🇬🇧",-1))),m=[u,d];function p(e,t,o,a,i,s){return(0,n.wg)(),(0,n.iD)("header",null,[(0,n._)("div",c,[l,(0,n.wy)((0,n._)("select",{class:"language-select","onUpdate:modelValue":t[0]||(t[0]=e=>i.selectedLanguage=e),onChange:t[1]||(t[1]=(...e)=>s.changeLanguage&&s.changeLanguage(...e))},m,544),[[r.bM,i.selectedLanguage]])])])}var g=o(65),f={data(){return{value1:"",toggle:"advertisement",selectedLanguage:localStorage.getItem("selectedLanguage")}},mounted(){this.$i18n.locale=localStorage.getItem("selectedLanguage")||"ua",this.selectedLanguage=localStorage.getItem("selectedLanguage")||"ua"},computed:{...(0,g.Se)("user",["user"])},methods:{changeLanguage(){this.$i18n.locale=this.selectedLanguage,localStorage.setItem("selectedLanguage",this.selectedLanguage)}}},h=o(89);const _=(0,h.Z)(f,[["render",p],["__scopeId","data-v-f8caaa0e"]]);var w=_,y=o(7139),k=o.p+"img/home.91f111f1.svg",v=o(3651),b=o(4729),I=o.p+"img/service.12d21b32.svg",A=o.p+"img/person.dfd60dba.svg";const S=e=>((0,n.dD)("data-v-ab87e60a"),e=e(),(0,n.Cn)(),e),C={class:"footer"},$=S((()=>(0,n._)("img",{src:k,alt:""},null,-1))),E=S((()=>(0,n._)("img",{src:v,alt:""},null,-1))),L=S((()=>(0,n._)("img",{src:b,alt:""},null,-1))),U=S((()=>(0,n._)("img",{src:I,alt:""},null,-1))),P=["src"],z={key:1,src:A,alt:""};function D(e,t,o,r,a,i){const s=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",C,[(0,n.Wm)(s,{to:"/",class:"router-link"},{default:(0,n.w5)((()=>[(0,n._)("div",{class:(0,y.C_)(["footer-element",{selected:"/"===e.$route.path}])},[$,(0,n._)("span",null,(0,y.zw)(e.$t("footer.main")),1)],2)])),_:1}),(0,n.Wm)(s,{to:"/posts",class:"router-link"},{default:(0,n.w5)((()=>[(0,n._)("div",{class:(0,y.C_)(["footer-element",{selected:"/posts"===e.$route.path}])},[E,(0,n._)("span",null,(0,y.zw)(e.$t("global.advertisement")),1)],2)])),_:1}),(0,n.Wm)(s,{to:"/info",class:"router-link"},{default:(0,n.w5)((()=>[(0,n._)("div",{class:(0,y.C_)(["footer-element",{selected:"/info"===e.$route.path}])},[L,(0,n._)("span",null,(0,y.zw)(e.$t("footer.information")),1)],2)])),_:1}),(0,n.Wm)(s,{to:"/services",class:"router-link"},{default:(0,n.w5)((()=>[(0,n._)("div",{class:(0,y.C_)(["footer-element",{selected:"/services"===e.$route.path}])},[U,(0,n._)("span",null,(0,y.zw)(e.$t("global.service")),1)],2)])),_:1}),(0,n.Wm)(s,{to:"/me",class:"router-link"},{default:(0,n.w5)((()=>[(0,n._)("div",{class:(0,y.C_)(["footer-element",{selected:"/me"===e.$route.path}])},[e.user.id?((0,n.wg)(),(0,n.iD)("img",{key:0,src:e.user.imgURL,style:{border:"0.5px solid black","border-radius":"10px"}},null,8,P)):((0,n.wg)(),(0,n.iD)("img",z)),(0,n._)("span",null,(0,y.zw)(e.$t("footer.account")),1)],2)])),_:1})])}o(560);var N={methods:{pushLink(e){this.$router.push(e)}},computed:{...(0,g.Se)(["user"])}};const T=(0,h.Z)(N,[["render",D],["__scopeId","data-v-ab87e60a"]]);var O=T;const x=e=>((0,n.dD)("data-v-09b22674"),e=e(),(0,n.Cn)(),e),B={class:"confirm-bg"},j={class:"confirm-base"},R={class:"confirm-data"},V={class:"icon"},G={class:"confirm-text"},M=x((()=>(0,n._)("div",{class:"buttons"},[(0,n._)("button",null,"Скасувати"),(0,n._)("button",null,"Підтвердити")],-1)));function F(e,t,o,r,a,i){const s=(0,n.up)("font-awesome-icon");return(0,n.wg)(),(0,n.iD)("div",B,[(0,n._)("div",j,[(0,n._)("div",R,[(0,n._)("div",V,["success"===o.type?((0,n.wg)(),(0,n.j4)(s,{key:0,icon:["fas","circle-check"]})):"warning"===o.type?((0,n.wg)(),(0,n.j4)(s,{key:1,icon:["fas","triangle-exclamation"]})):((0,n.wg)(),(0,n.j4)(s,{key:2,icon:["fas","bomb"]}))]),(0,n._)("div",G,[(0,n._)("p",null,(0,y.zw)(o.title),1),(0,n._)("p",null,(0,y.zw)(o.description),1),(0,n._)("p",null,(0,y.zw)(o.type),1)])]),M])])}var Z={name:"customConfirm",props:{title:String,description:String,type:{type:String,validator(e){return["success","warning","danger"].includes(e)}}}};const W=(0,h.Z)(Z,[["render",F],["__scopeId","data-v-09b22674"]]);var Y=W,K={name:"App",data(){return{show_confirm:!1,confirm_obj:{title:"",description:"",type:"success"}}},components:{CustomConfirm:Y,Footer:O,Header:w},computed:{...(0,g.Se)("user",["isLoggedIn"])},methods:{...(0,g.nv)(["loadUser"])},mounted(){window.showCustomConfirm=(e,t,o)=>{this.confirm_obj.title=e,this.confirm_obj.description=t,this.confirm_obj.type=o,this.show_confirm=!0},window.hideCustomConfirm=()=>{this.confirm_obj.title="",this.confirm_obj.description="",this.confirm_obj.type="success",this.show_confirm=!1},window.stopScroll=e=>{let t="";t=e?"hidden":"auto",document.body.style.overflowY=t},localStorage.getItem("defaultDormitory")||localStorage.setItem("defaultDormitory",4),localStorage.getItem("selectedLanguage")||localStorage.setItem("selectedLanguage","ua"),this.loadUser()}};const J=(0,h.Z)(K,[["render",a]]);var H=J,Q=o(2483);const q={class:"page"},X={class:"alert"};function ee(e,t,o,r,a,i){const s=(0,n.up)("Auth_btn");return(0,n.wg)(),(0,n.iD)("div",q,[(0,n._)("div",X,[(0,n._)("h3",null,(0,y.zw)(e.$t("auth.oops"))+"...",1),(0,n._)("p",null,(0,y.zw)(e.$t("auth.text.notLogged")),1),(0,n._)("p",null,(0,y.zw)(e.$t("auth.text.functions")),1),(0,n._)("p",null,(0,y.zw)(e.$t("auth.rules")),1),(0,n.Wm)(s)])])}const te={version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48","xmlns:xlink":"http://www.w3.org/1999/xlink",style:{display:"block"}},oe=(0,n.uE)('<path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" data-v-5dc71a7c></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" data-v-5dc71a7c></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" data-v-5dc71a7c></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" data-v-5dc71a7c></path><path fill="none" d="M0 0h48v48H0z" data-v-5dc71a7c></path>',5),re=[oe];function ne(e,t,o,r,a,i){return(0,n.wg)(),(0,n.iD)("div",{class:"auth-btn",onClick:t[0]||(t[0]=e=>i.signInWithGoogle())},[((0,n.wg)(),(0,n.iD)("svg",te,re)),(0,n._)("span",null,(0,y.zw)(e.$t("auth.authorize")),1)])}var ae=o(72),ie=o(8443),se=o.n(ie),ce=o(5605),le={name:"Auth_btn",methods:{...(0,g.nv)(["loadUser"]),signInWithGoogle(){se().init({google:"687895112030-98oht0ilvp1u0defu2vnb475h844352p.apps.googleusercontent.com"}),se()("google").login({scope:"email",response_type:"token"}).then((e=>{const t=e.authResponse.access_token;ae.Z.getAccessTokenFromCookie()||(0,ce.ee)(t).then((e=>{console.log(e),ae.Z.setAccessTokenCookie(e.access_token,e.lifetime),ae.Z.setGoogleIdCookie(e.google_id,e.lifetime),this.$store.commit("changeAccessToken",e.access_token),this.$store.commit("changeGoogleId",e.google_id),this.loadUser().then((()=>{this.$route.query.redirect&&this.$router.push(this.$route.query.redirect)}))})).catch()}),(e=>{console.error("Авторизація не вдалась: ",e)}))}}};const ue=(0,h.Z)(le,[["render",ne],["__scopeId","data-v-5dc71a7c"]]);var de=ue,me={components:{Auth_btn:de}};const pe=(0,h.Z)(me,[["render",ee]]);var ge=pe;const fe=e=>((0,n.dD)("data-v-4c90dd22"),e=e(),(0,n.Cn)(),e),he={class:"main-page-container"},_e={key:0,class:"login-notification"},we={class:"text-part"},ye=fe((()=>(0,n._)("div",{class:"spacer"},null,-1))),ke={class:"iframe-container"},ve={key:0,src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.3092066038507!2d22.27880627688167!3d48.62306481723768!2m3!1f0!2f0!3f0!3m2!\n    1i1024!2i768!4f13.1!3m3!1m2!1s0x4739184de3d6b1fd%3A0x49937b7cbd2981f5!2z0JPRg9GA0YLQvtC20LjRgtC-0Log0KPQttCd0KMg4oSWMQ!5e0!3m2!1suk!2sua!4v1703448480255!5m2!1suk!2sua",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},be={key:1,src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.3385398761197!2d22.277629092631823!3d48.62250344328752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473919b3723d569f%3A0xa2d6e1893b65d28!2z0JPRg9GA0YLQvtC20LjRgtC-0Log0KPQttCd0KMg4oSWMg!5e0!3m2!1suk!2sua!4v1703448758353!5m2!1suk!2sua",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},Ie={key:2,src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.31155798193!2d22.280855176881676!3d48.62301981724079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4739184dbf050b95%3A0xa3415e1465987a48!2z0JPRg9GA0YLQvtC20LjRgtC-0Log0KPQttCd0KMg4oSWMw!5e0!3m2!1suk!2sua!4v1703448526952!5m2!1suk!2sua",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},Ae={key:3,src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10546.788975405578!2d22.28502516225587!3d48.634775\n    32607448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4739183a652310df%3A0x2fb944ceb4390e52!2z0JPRg9GA0YLQvtC2\n    0LjRgtC-0Log4oSWNCDQo9C20J3Qow!5e0!3m2!1suk!2sua!4v1703448226217!5m2!1suk!2sua",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},Se={key:4,src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2636.5638161608163!2d22.283532976882242!3d48.63732831623741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13\n    .1!3m3!1m2!1s0x4739183414f6cb71%3A0xa0171da6518a8d6b!2z0JPRg9GA0YLQvtC20LjRgtC-0Log4oSWNSDQo9C20J3Qow!5e0!3m2!1suk!2sua!4v1703448402075!5m2!1suk!2sua",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},Ce={class:"workers-holder"},$e=["src","alt"],Ee={class:"worker-position"},Le={class:"worker-fullname"},Ue={class:"worker-phone"},Pe=["src","alt"],ze={class:"worker-position"},De={class:"worker-fullname"},Ne={class:"worker-phone"},Te=fe((()=>(0,n._)("div",{class:"spacer"},null,-1))),Oe={class:"disclaimer about-us"},xe={class:"disclaimer rules"},Be=fe((()=>(0,n._)("div",{class:"space"},null,-1)));function je(e,t,r,a,i,s){const c=(0,n.up)("Auth_btn"),l=(0,n.up)("selector-component"),u=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",he,[e.user.id?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",_e,[(0,n._)("div",we,[(0,n._)("h4",null,(0,y.zw)(e.$t("main.titles.greeting")),1),(0,n._)("p",null,(0,y.zw)(e.$t("main.text.greeting")),1),(0,n._)("p",null,(0,y.zw)(e.$t("auth.rules")),1)]),(0,n.Wm)(c)])),(0,n.Wm)(l),ye,(0,n._)("div",ke,[1==s.selected_dormitory?((0,n.wg)(),(0,n.iD)("iframe",ve)):2==s.selected_dormitory?((0,n.wg)(),(0,n.iD)("iframe",be)):3==s.selected_dormitory?((0,n.wg)(),(0,n.iD)("iframe",Ie)):4==s.selected_dormitory?((0,n.wg)(),(0,n.iD)("iframe",Ae)):((0,n.wg)(),(0,n.iD)("iframe",Se))]),(0,n._)("div",Ce,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.studmistechkoWorkers,(t=>((0,n.wg)(),(0,n.iD)("div",{class:"workers-data",key:t},[(0,n._)("img",{src:o(2220)(`./${t.image}`),alt:t.fullName},null,8,$e),(0,n._)("span",null,[(0,n._)("p",Ee,(0,y.zw)(e.$t(t.position)),1),(0,n._)("p",Le,(0,y.zw)(e.$t(t.fullName)),1),(0,n._)("p",Ue,(0,y.zw)(t.phone),1)])])))),128)),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.dormitory_data,(t=>((0,n.wg)(),(0,n.iD)("div",{class:"workers-data",key:t},[(0,n._)("img",{src:o(2220)(`./${t.image}`),alt:t.fullName},null,8,Pe),(0,n._)("span",null,[(0,n._)("p",ze,(0,y.zw)(e.$t(t.position))+" №"+(0,y.zw)(s.selected_dormitory),1),(0,n._)("p",De,(0,y.zw)(e.$t(t.fullName)),1),(0,n._)("p",Ne,(0,y.zw)(t.phone),1)])])))),128))]),Te,(0,n.Wm)(u,{class:"router-link",to:"/about-us"},{default:(0,n.w5)((()=>[(0,n._)("div",Oe,[(0,n._)("p",null,(0,y.zw)(e.$t("main.titles.aboutUs")),1),(0,n._)("span",null,(0,y.zw)(e.$t("main.text.aboutUs")),1)])])),_:1}),(0,n.Wm)(u,{class:"router-link",to:"/rules"},{default:(0,n.w5)((()=>[(0,n._)("div",xe,[(0,n._)("p",null,(0,y.zw)(e.$t("main.titles.rules")),1),(0,n._)("span",null,(0,y.zw)(e.$t("main.text.rules")),1)])])),_:1}),Be])}var Re=o(6298),Ve=o(7619),Ge={name:"Main_Page",components:{Auth_btn:de,SelectorComponent:Re.Z},data(){return{dormitory_data:[],studmistechkoWorkers:Ve.filter((e=>"studmistechko"===e.dormitory_num))[0].workers}},computed:{selected_dormitory(){return this.$store.state.dormitoryNumber},...(0,g.Se)(["user"])},methods:{dormitoryWorkersFromJSON(){let e=Ve.filter((e=>parseInt(this.selected_dormitory)===e.dormitory_num))[0];return e.workers}},watch:{selected_dormitory(){this.dormitory_data=this.dormitoryWorkersFromJSON()}},mounted(){this.dormitory_data=this.dormitoryWorkersFromJSON()}};const Me=(0,h.Z)(Ge,[["render",je],["__scopeId","data-v-4c90dd22"]]);var Fe=Me;const Ze=[{path:"/",name:"main",component:Fe,meta:{forLoggedIn:!1}},{path:"/auth",name:"auth",component:ge,props:!0,meta:{forLoggedIn:!1}},{path:"/info",name:"info",component:()=>o.e(123).then(o.bind(o,2123)),meta:{forLoggedIn:!1}},{path:"/infos/create",name:"infoCreate",component:()=>o.e(441).then(o.bind(o,1441)),meta:{forLoggedIn:!0}},{path:"/infos/:id/edit",name:"infoEdit",component:()=>o.e(587).then(o.bind(o,587)),meta:{forLoggedIn:!0}},{path:"/advertisements",name:"advertisements",component:()=>o.e(620).then(o.bind(o,8620)),children:[{path:"/posts",name:"posts",component:()=>o.e(99).then(o.bind(o,9099)),meta:{forLoggedIn:!1}},{path:"/works",name:"works",component:()=>o.e(992).then(o.bind(o,1992)),meta:{forLoggedIn:!1}}]},{path:"/posts/create",name:"postCreate",component:()=>o.e(264).then(o.bind(o,5264)),meta:{forLoggedIn:!0}},{path:"/posts/:id",name:"post",component:()=>o.e(893).then(o.bind(o,893)),meta:{forLoggedIn:!1}},{path:"/posts/:id/edit",name:"postEdit",component:()=>o.e(348).then(o.bind(o,5348)),meta:{forLoggedIn:!0}},{path:"/works/:id",name:"work",component:()=>o.e(636).then(o.bind(o,636)),meta:{forLoggedIn:!1}},{path:"/works/:id/edit",name:"workEdit",component:()=>o.e(907).then(o.bind(o,8907)),meta:{forLoggedIn:!0}},{path:"/works/create",name:"workCreate",component:()=>o.e(602).then(o.bind(o,3602)),meta:{forLoggedIn:!0}},{path:"/services",name:"services",component:()=>o.e(707).then(o.bind(o,1707))},{path:"/me",name:"me",component:()=>o.e(200).then(o.bind(o,1789)),meta:{forLoggedIn:!0}},{path:"/about-us",name:"aboutUs",component:()=>o.e(455).then(o.bind(o,0)),meta:{forLoggedIn:!1}},{path:"/rules",name:"rules",component:()=>o.e(890).then(o.bind(o,7890)),meta:{forLoggedIn:!1}}],We=(0,Q.p7)({history:(0,Q.PO)("/test-repo/"),routes:Ze});We.beforeEach(((e,t,o)=>{const r=ae.Z.getAccessTokenFromCookie(),n=e.meta?.forLoggedIn;n&&!r?o({path:"/auth",query:{redirect:e.fullPath}}):o()}));var Ye=We,Ke=(0,g.MT)({state(){return{user:{},accessToken:ae.Z.getAccessTokenFromCookie(),userGoogleId:ae.Z.getGoogleIdFromCookie(),dormitoryNumber:localStorage.getItem("defaultDormitoryNumber")||4}},getters:{user:({user:e})=>e,userGoogleId:({userGoogleId:e})=>e,accessToken:({accessToken:e})=>e},mutations:{changeUser(e,t){e.user=t},changeAccessToken(e,t){e.accessToken=t},changeGoogleId(e,t){e.userGoogleId=t},changeDormitoryNumber(e,t){e.dormitoryNumber=t,localStorage.setItem("defaultDormitoryNumber",t)}},actions:{loadUser({commit:e,state:t}){(0,ce.ZX)("users",t.userGoogleId,t.accessToken).then((t=>{if(t)return e("changeUser",t),t}))}}}),Je=o(7853),He=JSON.parse('{"global":{"dormitory":"Dormitory","room":"Room","advertisement":"Advertisement","post":"Post","work":"Work","save":"Save","cancel":"Cancel","select":"Select","info":"Information","loading":"Loading","service":"Service","post-approve":"Approve post","work-approve":"Approve work","worker":{"plumber":"Plumber","joiner":"Joiner","electrician":"Electrician"},"send":"Send"},"footer":{"main":"Main","information":"Information","account":"Account"},"auth":{"authorize":"Log in","oops":"Oops","text":{"notLogged":"It looks like you are not logged in","functions":"To access these functions, you need to log in from your corporate email"},"rules":"*By logging in to this platform, you confirm that you are familiar with the rules of use"},"main":{"titles":{"greeting":"Greeting","search":"Search","aboutUs":"About Us","rules":"Rules"},"text":{"greeting":"Log in to Uni and use all the opportunities!","aboutUs":"A little bit about us and this project","rules":"Rules for using the platform"}},"profile":{"dateOfJoining":"Date of joining","show":"Show","logout":"Log out","createPost":"Create advertisement","createWork":"Create work","createInfo":"Create information"},"aboutUs":{"titles":{"aboutUs":"About Us","developers":"Developers","contacts":"Contacts","rules":"Rules"},"developers":{"oleksandr":"Oleksandr (2 course)","andriy":"Andriy (2 course)","viktor":"Viktor (2 course)","yaroslav":"Yaroslav (2 course)","oleksiy":"Oleksiy (3 course)","ihor":"Ihor (3 course)"},"contacts":{"communication":"Communicate with us"}},"rules":{"1":"Prohibited materials: Please do not post offensive, obscene, or illegal content.","2":"Accuracy and reliability: Only publish accurate information in your classifieds.","3":"Advertising and spam: Posting unsolicited commercial messages, advertisements, or spam is prohibited.","4":"Responsibility for your own content: Users are solely responsible for what they publish.","5":"The obligation to provide real data: When creating an account, you must provide true and accurate information about yourself. Accounts with fake information may be blocked. Your privacy is important to us and the data will be used in accordance with the privacy policy.","title":"Failure to comply with the rules of use of the platform will lead to account blocking and removal of ads"},"info":{"about":{"title":"Information","text":"On this page you can view data and events related to the selected dormitory"},"edit":"Edit information","create":"Create information"},"work":{"salary":"Salary","create":"Create new work","edit":"Edit work"},"post":{"create":"Create new post","edit":"Edit post"},"services":{"about":{"title":"Services","text":"On this page you can use the services provided by your dormitory. You can make an appointment for laundry, or send a request for repairs from a plumber, carpenter or electrician"},"send-problem":"Send the problem to","washing-appointment":"Making an appointment for laundry"},"form":{"name":"Title","tag":"Category","salary":"Salary","description":"Description","submit":"Submit","cancel":"Cancel","title":"Title","content":"Description","textarea":{"problem-description":"Describe your problem. Please do not write the room number or your surname, as it will automatically be displayed according to your profile data"}},"dormitory-workers":{"position":{"campus-director":"Director of the campus","deputy-campus-director":"Deputy director of the campus","deputy-operations-campus-director":"Deputy director for operation","commandant":"Commandant of the dormitory","head-dormitory":"Head of the dormitory"},"fullname":{"Kepich_V_G":"KEPICH Vasyl Georgievich","Nekachailo_V_V":"NEKACHAILO Valery Viktorovich","Burdyukh_I_I":"BURDYUKH Ivan Ivanovich","Bilei_S_P":"BILEI Svitlana Petrivna","Betsala_M_I":"BETSALA Maria Ivanivna","Voron_T_I":"VORON Tatyana Ivanivna","Trokhimets_I_M":"TROKHIMETS Irina Mikhailivna","Bobik_Y_Y":"BOBIK Yuriy Yuriyovych","Tantsiura_G_G":"TANTSIURA Galina Grigoriivna","Burishin-Oliynik_T_I":"BURISHIN-OLIYNIK Tatyana Ivanivna"}}}'),Qe=JSON.parse('{"global":{"dormitory":"Гуртожиток","room":"Кімната","advertisement":"Оголошення","post":"Пост","work":"Робота","save":"Зберегти","cancel":"Скасувати","select":"Вибрати","info":"Інформація","loading":"Завантаження","service":"Послуги","post-approve":"Підтвердити пост","work-approve":"Підтвердити роботу","worker":{"plumber":"Сантехнік","joiner":"Столяр","electrician":"Електрик"},"send":"Надіслати"},"footer":{"main":"Головна","information":"Інформація","account":"Акаунт"},"auth":{"authorize":"Авторизуватись","oops":"Ой","text":{"notLogged":"Схоже ви не авторизовані в системі","functions":"Для доступу до цих функцій, необхідно авторизуватись з корпоративної пошти"},"rules":"*Авторизувавшись на даній платформі, ви підтверджуєте, що ознайомлені з правилами користування"},"main":{"titles":{"greeting":"Вітаю","search":"Шукати","aboutUs":"Про нас","rules":"Правила"},"text":{"greeting":"Увійди в Uni та використовуй всі можливості!","aboutUs":"Трохи про нас та цей проект","rules":"Правила користування платформою"}},"profile":{"dateOfJoining":"Дата приєднання","show":"Показати","logout":"Вийти","createPost":"Створити оголошення","createWork":"Створити роботу","createInfo":"Створити інформацію"},"aboutUs":{"titles":{"aboutUs":"Про нас","developers":"Розробники","contacts":"Контакти","rules":"Правила"},"developers":{"oleksandr":"Олександр (2 курс)","andriy":"Андрій (2 курс)","viktor":"Віктор (2 курс)","yaroslav":"Ярослав (2 курс)","oleksiy":"Олексій (3 курс)","ihor":"Ігор (3 курс)"},"contacts":{"communication":"Зв\'язатись з нами"}},"rules":{"1":"Заборонені матеріали: Будь ласка, не публікуйте образливий, непристойний чи нелегальний вміст.","2":"Точність та достовірність: Публікуйте лише достовірну інформацію в оголошеннях.","3":"Реклама та спам: Заборонено розміщення небажаних комерційних повідомлень, реклами чи спаму.","4":"Відповідальність за власний контент: Користувачі несуть особисту відповідальність за те, що вони публікують.","5":"Обов\'язок вказання реальних даних: При створенні облікового запису необхідно надавати правдиву та достовірну інформацію про себе. Облікові записи з фейковою інформацією можуть бути заблоковані. Ваша приватність важлива для нас, і дані будуть використані відповідно до політики конфіденційності.","title":"Недотримання правил користування платформи призведе до блокування акаунту та видалення оголошень"},"info":{"about":{"title":"Інформація","text":"На даній сторінці ви зможете переглянути дані та події пов\'язані з вибраним гуртожитком"},"edit":"Редагувати інформацію","create":"Створити інформацію"},"work":{"salary":"Заробітна плата","create":"Створити нову роботу","edit":"Редагувати роботу"},"post":{"create":"Створити новий пост","edit":"Редагувати пост"},"services":{"about":{"title":"Послуги","text":"На даній сторінці ви можете скористатися послугами, які надає ваш гуртожиток. Записатися на прання, або надіслати запит на ремонт від сантехніка, столяра та електрика"},"send-problem":"Надіслати проблему до","washing-appointment":"Запис на прання речей"},"form":{"name":"Назва","tag":"Категорія","salary":"Заробітна плата","description":"Опис","submit":"Зберегти","cancel":"Скасувати","title":"Назва","content":"Опис","textarea":{"problem-description":"Опишіть свою проблему. Прохання: не пишіть номер кімнати, ваше прізвище, адже воно автоматично буде відображатися відповідно з даними вашого профілю"}},"dormitory-workers":{"position":{"campus-director":"Директор студмістечка","deputy-campus-director":"Заступник директора студмістечка","deputy-operations-campus-director":"Заступник директора по експлуатації","commandant":"Комендант гуртожитку","head-dormitory":"Завідувач гуртожитку"},"fullname":{"Kepich_V_G":"КЕПИЧ Василь Георгійович","Nekachailo_V_V":"НЕКАЧАЙЛО Валерій Вікторович","Burdyukh_I_I":"БУРДЮХ Іван Іванович","Bilei_S_P":"БІЛЕЙ Світлана Петрівна","Betsala_M_I":"БЕЦАЛА Марія Іванівна","Voron_T_I":"ВОРОН Тетяна Іванівна","Trokhimets_I_M":"ТРОХИМЕЦЬ Ірина Михайлівна","Bobik_Y_Y":"БОБИК Юрій Юрійович","Tantsiura_G_G":"ТАНЦЮРА Галина Григорівна","Burishin-Oliynik_T_I":"БУРИШИН-ОЛІЙНИК Тетяна Іванівна"}}}');const qe=(0,Je.o)({locale:{NODE_ENV:"production",VUE_APP_FIREBASE_API_KEY:"AIzaSyBIzYOOUnnuYbJtUv9ryHOcdUf8NxfpOrM",VUE_APP_FIREBASE_AUTH_DOMAIN:"uzhnu-campus-7c7eb.firebaseapp.com",VUE_APP_FIREBASE_PROJECT_ID:"uzhnu-campus-7c7eb",VUE_APP_FIREBASE_STORAGE_BUCKET:"uzhnu-campus-7c7eb.appspot.com",VUE_APP_FIREBASE_MESSAGE_SENDER_ID:"184955882517",VUE_APP_FIREBASE_APP_ID:"1:184955882517:web:c6476a7ec3ea37da84921c",VUE_APP_DATABASE_API_URL:"https://8b00-176-120-107-53.ngrok-free.app/api",VUE_APP_GOOGLE_CLIENT_ID:"687895112030-98oht0ilvp1u0defu2vnb475h844352p.apps.googleusercontent.com",BASE_URL:"/test-repo/"}.VUE_APP_I18N_LOCALE||"ua",fallbackLocale:{NODE_ENV:"production",VUE_APP_FIREBASE_API_KEY:"AIzaSyBIzYOOUnnuYbJtUv9ryHOcdUf8NxfpOrM",VUE_APP_FIREBASE_AUTH_DOMAIN:"uzhnu-campus-7c7eb.firebaseapp.com",VUE_APP_FIREBASE_PROJECT_ID:"uzhnu-campus-7c7eb",VUE_APP_FIREBASE_STORAGE_BUCKET:"uzhnu-campus-7c7eb.appspot.com",VUE_APP_FIREBASE_MESSAGE_SENDER_ID:"184955882517",VUE_APP_FIREBASE_APP_ID:"1:184955882517:web:c6476a7ec3ea37da84921c",VUE_APP_DATABASE_API_URL:"https://8b00-176-120-107-53.ngrok-free.app/api",VUE_APP_GOOGLE_CLIENT_ID:"687895112030-98oht0ilvp1u0defu2vnb475h844352p.apps.googleusercontent.com",BASE_URL:"/test-repo/"}.VUE_APP_I18N_FALLBACK_LOCALE||"ua",messages:{en:He,ua:Qe}});var Xe=qe,et=o(3494),tt=o(7749),ot=o(8539),rt=o(8429),nt=o(4551);et.vI.add(ot.BC0,ot.acZ,ot.eFW,rt.RrC,ot.r8p,ot.WV2,rt.FU$,nt.Zzi,ot.IwR,ot.zd8,ot.A35,ot._tD,ot.fV7,ot.ik8,ot.Yme,nt.Uv8,ot.j1w,ot.P88,ot.QSU,ot.$aW),(0,r.ri)(H).use(Ke).use(Ye).use(Xe).component("font-awesome-icon",tt.GN).mount("#app")},72:function(e,t){"use strict";class o{static setAccessTokenCookie(e,t){let o=new Date(Date.now()+1e3*t);o=o.toUTCString();const r=`access_token=${e}; expires=${o}; path=/;`;"https:"===window.location.protocol?document.cookie=`${r} Secure; SameSite=None;`:document.cookie=r}static getAccessTokenFromCookie(){const e="access_token=",t=decodeURIComponent(document.cookie),o=t.split(";");for(let r=0;r<o.length;r++){let t=o[r].trim();if(0===t.indexOf(e))return t.substring(e.length,t.length)}return null}static removeAccessTokenCookie(){const e=new Date(1970,0,1).toUTCString();"https:"===window.location.protocol?document.cookie=`access_token=; expires=${e}; path=/; Secure; SameSite=None;`:document.cookie=`access_token=; expires=${e}; path=/;`}static setGoogleIdCookie(e,t){let o=new Date(Date.now()+1e3*t);o=o.toUTCString();const r=`google_id=${e}; expires=${o}; path=/;`;"https:"===window.location.protocol?document.cookie=`${r} Secure; SameSite=None;`:document.cookie=r}static getGoogleIdFromCookie(){const e="google_id=",t=decodeURIComponent(document.cookie),o=t.split(";");for(let r=0;r<o.length;r++){let t=o[r].trim();if(0===t.indexOf(e))return t.substring(e.length,t.length)}return null}static removeGoogleIdCookie(){const e=new Date(1970,0,1).toUTCString();"https:"===window.location.protocol?document.cookie=`google_id=; expires=${e}; path=/; Secure; SameSite=None;`:document.cookie=`google_id=; expires=${e}; path=/;`}static setUserCookie(e,t){try{const o=JSON.stringify(e),r=encodeURIComponent(o),n=`user=${r}; expires=${new Date(t).toUTCString()}; path=/;`;"https:"===window.location.protocol?document.cookie=`${n} Secure; SameSite=None;`:document.cookie=n}catch(o){console.error("Error while setting user cookie:",o)}}static getUserFromCookie(){const e="user=",t=decodeURIComponent(document.cookie),o=t.split(";");for(let n=0;n<o.length;n++){let t=o[n].trim();if(0===t.indexOf(e))try{const o=t.substring(e.length,t.length),r=decodeURIComponent(o);return JSON.parse(r)}catch(r){return console.error("Error while getting user from cookie:",r),null}}return null}static removeUserCookie(){const e=new Date(1970,0,1).toUTCString();"https:"===window.location.protocol?document.cookie=`user=; expires=${e}; path=/; Secure; SameSite=None;`:document.cookie=`user=; expires=${e}; path=/;`}}t.Z=o},6298:function(e,t,o){"use strict";o.d(t,{Z:function(){return f}});var r=o(3396),n=o(7139),a=o(9242);const i={value:"1"},s={value:"2"},c={value:"3"},l={value:"4"},u={value:"5"};function d(e,t,o,d,m,p){return(0,r.wg)(),(0,r.iD)("div",{class:(0,n.C_)(["dormitory-selector",p.selector_bg])},[(0,r._)("span",null,(0,n.zw)(e.$t("global.select")),1),(0,r.wy)((0,r._)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>m.selected_dormitory=e)},[(0,r._)("option",i,(0,n.zw)(e.$t("global.dormitory"))+" №1",1),(0,r._)("option",s,(0,n.zw)(e.$t("global.dormitory"))+" №2",1),(0,r._)("option",c,(0,n.zw)(e.$t("global.dormitory"))+" №3",1),(0,r._)("option",l,(0,n.zw)(e.$t("global.dormitory"))+" №4",1),(0,r._)("option",u,(0,n.zw)(e.$t("global.dormitory"))+" №5",1)],512),[[a.bM,m.selected_dormitory]])],2)}var m={data(){return{selected_dormitory:this.$store.state.dormitoryNumber}},computed:{selector_bg(){return 1==this.selected_dormitory?"dorm-1":2==this.selected_dormitory?"dorm-2":3==this.selected_dormitory?"dorm-3":4==this.selected_dormitory?"dorm-4":"dorm-5"}},watch:{selected_dormitory(e){this.$store.commit("changeDormitoryNumber",e)}}},p=o(89);const g=(0,p.Z)(m,[["render",d],["__scopeId","data-v-20af6c26"]]);var f=g},2220:function(e,t,o){var r={"./BetsalaMaria.jpg":3247,"./BobikYurii.jpeg":1032,"./KepichVasil.jpeg":6196,"./TantsiuraHalina.jpeg":7672,"./unknow_female.png":4946,"./unknow_male.png":3232};function n(e){var t=a(e);return o(t)}function a(e){if(!o.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=a,e.exports=n,n.id=2220},3651:function(e,t,o){"use strict";e.exports=o.p+"img/browse.94b3f240.svg"},4729:function(e,t,o){"use strict";e.exports=o.p+"img/info.1e400205.svg"},3247:function(e,t,o){"use strict";e.exports=o.p+"img/BetsalaMaria.36b7a046.jpg"},1032:function(e,t,o){"use strict";e.exports=o.p+"img/BobikYurii.948108d2.jpeg"},6196:function(e,t,o){"use strict";e.exports=o.p+"img/KepichVasil.bd2e1645.jpeg"},7672:function(e,t,o){"use strict";e.exports=o.p+"img/TantsiuraHalina.02054c5f.jpeg"},4946:function(e,t,o){"use strict";e.exports=o.p+"img/unknow_female.32267e93.png"},3232:function(e,t,o){"use strict";e.exports=o.p+"img/unknow_male.a42ebd89.png"},7619:function(e){"use strict";e.exports=JSON.parse('[{"dormitory_num":"studmistechko","workers":[{"phone":"64-34-67","email":"example@gmail.com","fullName":"dormitory-workers.fullname.Kepich_V_G","position":"dormitory-workers.position.campus-director","image":"KepichVasil.jpeg"},{"phone":"64-34-67","email":"example@gmail.com","fullName":"dormitory-workers.fullname.Nekachailo_V_V","position":"dormitory-workers.position.deputy-campus-director","image":"unknow_male.png"},{"phone":"64-34-67","email":"example@gmail.com","fullName":"dormitory-workers.fullname.Burdyukh_I_I","position":"dormitory-workers.position.deputy-operations-campus-director","image":"unknow_male.png"}]},{"dormitory_num":1,"workers":[{"phone":"64-34-67","fullName":"dormitory-workers.fullname.Bilei_S_P","position":"dormitory-workers.position.commandant","image":"unknow_female.png"}]},{"dormitory_num":2,"workers":[{"phone":"64-36-97","fullName":"dormitory-workers.fullname.Betsala_M_I","position":"dormitory-workers.position.commandant","image":"BetsalaMaria.jpg"}]},{"dormitory_num":3,"workers":[{"phone":"64-33-73","fullName":"dormitory-workers.fullname.Voron_T_I","position":"dormitory-workers.position.commandant","image":"unknow_female.png"}]},{"dormitory_num":4,"workers":[{"phone":"64-26-69","fullName":"dormitory-workers.fullname.Trokhimets_I_M","position":"dormitory-workers.position.head-dormitory","image":"unknow_female.png"},{"phone":"64-26-69","fullName":"dormitory-workers.fullname.Bobik_Y_Y","position":"dormitory-workers.position.commandant","image":"BobikYurii.jpeg"},{"phone":"64-26-69","fullName":"dormitory-workers.fullname.Tantsiura_G_G","position":"dormitory-workers.position.commandant","image":"TantsiuraHalina.jpeg"}]},{"dormitory_num":5,"workers":[{"phone":"64-35-72","fullName":"dormitory-workers.fullname.Burishin-Oliynik_T_I","position":"dormitory-workers.position.commandant","image":"unknow_female.png"}]}]')}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,r,n,a){if(!r){var i=1/0;for(u=0;u<e.length;u++){r=e[u][0],n=e[u][1],a=e[u][2];for(var s=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(o.O).every((function(e){return o.O[e](r[c])}))?r.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var l=n();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,n,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,r){return o.f[r](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/"+e+"."+{99:"06ce1f9d",123:"588f9ddf",200:"4a239d15",264:"28570830",348:"21e4cae4",441:"9a616831",455:"0be90dcf",587:"0f152b72",602:"d480d382",620:"4bdb91a1",636:"b153cee5",707:"7a5ce588",890:"d94d6a62",893:"f664755c",907:"b7c9f13e",992:"2c4a8ac3"}[e]+".js"}}(),function(){o.miniCssF=function(e){return"css/"+e+"."+{99:"16ff3ece",123:"c397e1ff",200:"80f78890",264:"15121627",348:"8611055a",441:"5c9cec31",455:"b8b90c00",587:"924e52ad",602:"d3cfa474",620:"45c94860",636:"7a3f1767",707:"b55adf03",890:"a989ce70",893:"e741114e",907:"f2999fa3",992:"333c7914"}[e]+".css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="unitrade:";o.l=function(r,n,a,i){if(e[r])e[r].push(n);else{var s,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[n];var m=function(t,o){s.onerror=s.onload=null,clearTimeout(p);var n=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((function(e){return e(o)})),t)return t(o)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/test-repo/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,r,n){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(o){if(a.onerror=a.onload=null,"load"===o.type)r();else{var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,a.parentNode&&a.parentNode.removeChild(a),n(c)}};return a.onerror=a.onload=i,a.href=t,o?o.parentNode.insertBefore(a,o.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var n=o[r],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){n=i[r],a=n.getAttribute("data-href");if(a===e||a===t)return n}},r=function(r){return new Promise((function(n,a){var i=o.miniCssF(r),s=o.p+i;if(t(i,s))return n();e(r,s,null,n,a)}))},n={143:0};o.f.miniCss=function(e,t){var o={99:1,123:1,200:1,264:1,348:1,441:1,455:1,587:1,602:1,620:1,636:1,707:1,890:1,893:1,907:1,992:1};n[e]?t.push(n[e]):0!==n[e]&&o[e]&&t.push(n[e]=r(e).then((function(){n[e]=0}),(function(t){throw delete n[e],t})))}}}(),function(){var e={143:0};o.f.j=function(t,r){var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise((function(o,r){n=e[t]=[o,r]}));r.push(n[2]=a);var i=o.p+o.u(t),s=new Error,c=function(r){if(o.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,n[1](s)}};o.l(i,c,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,a,i=r[0],s=r[1],c=r[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(c)var u=c(o)}for(t&&t(r);l<i.length;l++)a=i[l],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},r=self["webpackChunkunitrade"]=self["webpackChunkunitrade"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(6638)}));r=o.O(r)})();
//# sourceMappingURL=app.88c042ee.js.map