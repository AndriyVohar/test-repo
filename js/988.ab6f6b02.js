"use strict";(self["webpackChunkunitrade"]=self["webpackChunkunitrade"]||[]).push([[988],{5988:function(t,e,r){r.r(e),r.d(e,{default:function(){return v}});r(560);var o=r(3396),a=r(9242),n=r(7139);const i={class:"form-content"},s={class:"form-title"},u={class:"input-group"},l=["placeholder"],c=["placeholder"],d={class:"button-group"},p={class:"save-button"};function f(t,e,r,f,m,h){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",{class:"form-container",onSubmit:e[3]||(e[3]=(0,a.iM)((t=>h.updateInfo()),["prevent"]))},[(0,o._)("form",i,[(0,o._)("h2",s,(0,n.zw)(t.$t("info.edit")),1),(0,o._)("div",u,[(0,o.wy)((0,o._)("input",{type:"text",id:"title","onUpdate:modelValue":e[0]||(e[0]=t=>m.formData.title=t),placeholder:t.$t("form.title"),class:"input-field",required:""},null,8,l),[[a.nr,m.formData.title]]),(0,o.wy)((0,o._)("input",{type:"text",id:"tag","onUpdate:modelValue":e[1]||(e[1]=t=>m.formData.description=t),placeholder:t.$t("form.content"),class:"input-field",required:""},null,8,c),[[a.nr,m.formData.description]])]),(0,o._)("div",d,[(0,o._)("button",p,(0,n.zw)(t.$t("form.submit")),1),(0,o._)("button",{type:"button",class:"cancel-button",onClick:e[2]||(e[2]=e=>t.$router.push("/me"))},(0,n.zw)(t.$t("form.cancel")),1)])])],32)])}var m=r(65),h=r(5605),_={data(){return{formData:{}}},computed:{...(0,m.Se)(["user"])},methods:{updateInfo(){(0,h.$G)("infos",this.$route.params.id,this.formData,this.user.google_id).then((()=>{this.$router.push("/me")})).catch((t=>{console.error(t)}))}},mounted(){"admin"==this.user.role?(0,h.ZX)("infos",this.$route.params.id).then((t=>{this.formData=t})).catch((t=>{console.error(t)})):(alert("Ви не маєте доступу до цих функцій"),this.$router.push("/me"))}},$=r(89);const b=(0,$.Z)(_,[["render",f],["__scopeId","data-v-2cd46012"]]);var v=b}}]);
//# sourceMappingURL=988.ab6f6b02.js.map