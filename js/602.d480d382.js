"use strict";(self["webpackChunkunitrade"]=self["webpackChunkunitrade"]||[]).push([[602],{3602:function(e,t,a){a.r(t),a.d(t,{default:function(){return D}});a(560);var r=a(3396),o=a(7139),l=a(9242);const i={class:"form-container"},s={class:"form-title"},n={class:"input-group"},u=["placeholder"],c=["placeholder"],d=["placeholder"],m=["placeholder"],p={class:"button-group"};function f(e,t,a,f,h,g){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",i,[(0,r._)("form",{class:"form-content",onSubmit:t[7]||(t[7]=e=>g.submitForm())},[(0,r._)("h2",s,(0,o.zw)(e.$t("work.create")),1),(0,r._)("div",n,[(0,r._)("input",{type:"file",id:"photo",onChange:t[0]||(t[0]=(...e)=>g.checkFileSize&&g.checkFileSize(...e)),accept:"image/*",class:"input-field",required:""},null,32),(0,r.wy)((0,r._)("input",{type:"text",id:"title","onUpdate:modelValue":t[1]||(t[1]=e=>h.formData.title=e),placeholder:e.$t("form.name"),class:"input-field",required:""},null,8,u),[[l.nr,h.formData.title]]),(0,r.wy)((0,r._)("input",{type:"text",id:"tag","onUpdate:modelValue":t[2]||(t[2]=e=>h.formData.tag=e),placeholder:e.$t("form.tag"),class:"input-field",required:""},null,8,c),[[l.nr,h.formData.tag]]),(0,r.wy)((0,r._)("input",{type:"number",id:"salary","onUpdate:modelValue":t[3]||(t[3]=e=>h.formData.salary=e),placeholder:e.$t("form.salary"),class:"input-field",required:""},null,8,d),[[l.nr,h.formData.salary]]),(0,r.wy)((0,r._)("textarea",{style:{resize:"none"},"onUpdate:modelValue":t[4]||(t[4]=e=>h.formData.description=e),placeholder:e.$t("form.description"),class:"input-field",required:""},null,8,m),[[l.nr,h.formData.description]])]),(0,r._)("div",p,[(0,r._)("button",{type:"submit",class:"save-button",onClick:t[5]||(t[5]=e=>g.createWork())},(0,o.zw)(e.$t("form.submit")),1),(0,r._)("button",{type:"button",class:"cancel-button",onClick:t[6]||(t[6]=e=>this.$router.push("/me"))},(0,o.zw)(e.$t("form.cancel")),1)])],32)])])}var h=a(65),g=a(5605),y={data(){return{formData:{}}},computed:{...(0,h.Se)(["user"])},methods:{submitForm(){console.log("Надіслано:",this.formData)},checkFileSize(e){const t=e.target,a=t.files[0];if(a){const r=a.size/1024;r>600?(alert("Фотографія має бути менше 600KB"),t.value=""):this.encodeImageFileAsURL(e)}},encodeImageFileAsURL(e){var t=e.target.files[0];if(t){var a=new FileReader;a.onloadend=()=>{this.formData.imgURL=a.result},a.readAsDataURL(t)}else console.error("No file selected.")},createWork(){(0,g.jX)("works",this.formData,this.user.google_id),this.$router.push("/me")}},mounted(){0==this.user.status&&(alert("Ваш акаунт неактивний, зачекайте на підтвердження комендантом"),this.$router.push("/me"))}},_=a(89);const b=(0,_.Z)(y,[["render",f],["__scopeId","data-v-9729c2d0"]]);var D=b}}]);
//# sourceMappingURL=602.d480d382.js.map