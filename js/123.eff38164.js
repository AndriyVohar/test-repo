"use strict";(self["webpackChunkunitrade"]=self["webpackChunkunitrade"]||[]).push([[123],{2123:function(t,o,n){n.r(o),n.d(o,{default:function(){return k}});var e=n(3396),i=n(7139);const r=t=>((0,e.dD)("data-v-5321d167"),t=t(),(0,e.Cn)(),t),s={class:"info-page"},a={class:"about-page"},l={class:"alert-holder"},d=r((()=>(0,e._)("div",{class:"posts-spacer"},null,-1)));function u(t,o,n,r,u,c){const m=(0,e.up)("selector-component"),p=(0,e.up)("info-component");return(0,e.wg)(),(0,e.iD)("div",s,[(0,e._)("div",a,[(0,e._)("h4",null,(0,i.zw)(t.$t("info.about.title")),1),(0,e._)("p",null,(0,i.zw)(t.$t("info.about.text")),1)]),(0,e.Wm)(m,{class:"selector"}),(0,e._)("div",l,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(u.attentionList,(t=>((0,e.wg)(),(0,e.j4)(p,{attention:t,key:t,class:"info-comp"},null,8,["attention"])))),128))]),d,((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(u.studmistechkoWorkers,(o=>((0,e.wg)(),(0,e.iD)("div",{class:"data",key:o.id},[(0,e._)("h4",null,(0,i.zw)(t.$t(o.position)),1),(0,e._)("p",null,(0,i.zw)(t.$t(o.fullName)),1),(0,e._)("p",null,(0,i.zw)(o.phone),1)])))),128)),((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(u.dormitory_data,(o=>((0,e.wg)(),(0,e.iD)("div",{class:"data",key:o.id},[(0,e._)("h4",null,(0,i.zw)(t.$t(o.position)),1),(0,e._)("p",null,(0,i.zw)(t.$t(o.fullName)),1),(0,e._)("p",null,(0,i.zw)(o.phone),1)])))),128))])}var c=n(6298),m=n(7619),p=n(6438),h=n(5605),f={name:"Info",components:{InfoComponent:p.Z,SelectorComponent:c.Z},methods:{loadItems(){(0,h.yO)("infos",this.dormitoryNumber).then((t=>{this.attentionList=t})).catch((()=>{console.log("some error")}))},dormitoryWorkersFromJSON(){let t=m.filter((t=>parseInt(this.dormitoryNumber)===t.dormitory_num))[0];return t.workers}},mounted(){this.loadItems(),this.dormitory_data=this.dormitoryWorkersFromJSON()},computed:{dormitoryNumber(){return this.$store.state.dormitoryNumber}},data(){return{dormitory_data:[],attentionList:[],studmistechkoWorkers:m.filter((t=>"studmistechko"===t.dormitory_num))[0].workers}},watch:{dormitoryNumber(){this.loadItems(),this.dormitory_data=this.dormitoryWorkersFromJSON()}}},w=n(89);const _=(0,w.Z)(f,[["render",u],["__scopeId","data-v-5321d167"]]);var k=_},6438:function(t,o,n){n.d(o,{Z:function(){return w}});var e=n(3396),i=n(7139),r=n(9242);const s={class:"custom-alert"},a={class:"left-part"},l={key:0},d={class:"right-part"},u={key:0,class:"buttons"};function c(t,o,n,c,m,p){const h=(0,e.up)("font-awesome-icon");return(0,e.wg)(),(0,e.iD)("div",s,[(0,e._)("div",a,[(0,e._)("h4",null,[["admin","commandant"].includes(n.user.role)?((0,e.wg)(),(0,e.iD)("span",l,"№"+(0,i.zw)(n.attention.dormitory),1)):(0,e.kq)("",!0),(0,e.Uk)(" "+(0,i.zw)(n.attention.title)+" ",1),(0,e._)("span",null,(0,i.zw)(n.attention.created_at),1)]),(0,e._)("p",null,(0,i.zw)(n.attention.description),1)]),(0,e._)("div",d,[(0,e.Wm)(h,{icon:"exclamation",beat:"",class:"exclamation-danger-end"})]),["admin","commandant"].includes(n.user.role)?((0,e.wg)(),(0,e.iD)("div",u,[(0,e.Wm)(h,{icon:["fas","pen"],onClick:o[0]||(o[0]=(0,r.iM)((t=>p.updateInfo()),["stop"]))}),(0,e.Wm)(h,{icon:["fas","trash"],onClick:o[1]||(o[1]=(0,r.iM)((t=>p.deleteInfo()),["stop"]))})])):(0,e.kq)("",!0)])}n(560);var m=n(5605),p={name:"InfoComponent",props:{attention:Object,user:{type:Object,default:()=>({})}},methods:{updateInfo(){this.$router.push({name:"infoEdit",params:{id:this.attention.id}})},deleteInfo(){confirm("Видалити інформацію ?")&&(0,m.wz)("infos",this.attention.id,this.user.google_id).then((()=>location.reload()))}}},h=n(89);const f=(0,h.Z)(p,[["render",c],["__scopeId","data-v-76060e88"]]);var w=f}}]);
//# sourceMappingURL=123.eff38164.js.map