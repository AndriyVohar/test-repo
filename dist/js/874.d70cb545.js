"use strict";(self["webpackChunkunitrade"]=self["webpackChunkunitrade"]||[]).push([[874],{8874:function(a,t,o){o.r(t),o.d(t,{default:function(){return C}});var s=o(3396),e=o(7139);const r={key:0,class:"mobile-form-container"},c={class:"form-container"},n={class:"photo-container"},i=["src"],l={class:"form-content"},p={class:"header-text"},d={class:"name"},m={class:"address"},h={class:"icons"},f=["href"],g=["href"],w={style:{display:"flex"},class:"down"},u={class:"category"},_={class:"date"},D={key:1};function v(a,t,o,v,b,y){const k=(0,s.up)("font-awesome-icon");return b.postData?((0,s.wg)(),(0,s.iD)("div",r,[(0,s._)("div",c,[(0,s._)("div",n,[(0,s._)("img",{src:b.postData.imgURL,alt:"Photo",class:"photo"},null,8,i)]),(0,s._)("div",l,[(0,s._)("p",p,(0,e.zw)(b.postData.title),1),(0,s._)("p",d,(0,e.zw)(b.postData.creator.name),1),(0,s._)("p",m,(0,e.zw)(a.$t("global.dormitory"))+": "+(0,e.zw)(b.postData.creator.dormitory)+" "+(0,e.zw)(b.postData.creator.room),1),(0,s._)("div",h,[(0,s._)("a",{href:"https://www.instagram.com/"+b.postData.creator.instagram},[(0,s.Wm)(k,{class:"icon",icon:["fab","instagram"]})],8,f),(0,s._)("a",{href:"https://t.me/"+b.postData.creator.telegram},[(0,s.Wm)(k,{class:"icon",icon:["fab","telegram"]})],8,g),(0,s._)("a",{onClick:t[0]||(t[0]=a=>y.copyToClipboard(b.postData.creator.email,"email"))},[(0,s.Wm)(k,{class:"icon",icon:["far","envelope"]})]),(0,s._)("a",{onClick:t[1]||(t[1]=a=>y.copyToClipboard(b.postData.creator.phone,"phone"))},[(0,s.Wm)(k,{class:"icon",icon:["fas","phone"]})])]),(0,s._)("div",w,[(0,s._)("div",u,(0,e.zw)(b.postData.tag),1),(0,s._)("p",_,(0,e.zw)(b.postData.created_at),1)])])])])):((0,s.wg)(),(0,s.iD)("div",D,(0,e.zw)(a.$t("global.loading"))+"...",1))}var b=o(5605),y={name:"PostPage",data(){return{postData:null}},methods:{copyToClipboard(a,t){let o="Номер скопійовано";"email"==t&&(o="Пошту скопійовано"),navigator.clipboard.writeText(a),alert(o)}},mounted(){(0,b.ZX)("advertisements",this.$route.params.id).then((a=>{this.postData=a})).catch((()=>{console.log("something wrong")}))}},k=o(89);const z=(0,k.Z)(y,[["render",v],["__scopeId","data-v-309a80a2"]]);var C=z}}]);
//# sourceMappingURL=874.d70cb545.js.map