"use strict";(self["webpackChunkunitrade"]=self["webpackChunkunitrade"]||[]).push([[999],{7070:function(t,s,o){o.d(s,{Z:function(){return k}});var e=o(3396),a=o(7139),i=o(9242);const n=["src"],l={class:"post-data"},r={class:"text"},d={class:"post-name-icon"},p={class:"post-name"},c=["src"],u={class:"address"},m={class:"address"},g={class:"post-bottom"},_={class:"tag"},h={key:0,class:"buttons"};function v(t,s,o,v,w,b){const y=(0,e.up)("font-awesome-icon");return(0,e.wg)(),(0,e.iD)("div",{class:"post",onClick:s[2]||(s[2]=t=>b.openPost())},[(0,e._)("img",{src:o.post.imgURL,alt:"Фото поста"},null,8,n),(0,e._)("div",l,[(0,e._)("div",r,[(0,e._)("div",d,[(0,e._)("span",p,(0,a.zw)(o.post.title),1),(0,e._)("img",{src:o.post.creator.imgURL,alt:"",class:"user-profile"},null,8,c)]),(0,e._)("p",u,(0,a.zw)(t.$t("global.dormitory"))+" №"+(0,a.zw)(o.post.creator.dormitory)+" "+(0,a.zw)(o.post.creator.room),1),(0,e._)("p",m,(0,a.zw)(o.post.created_at),1)]),(0,e._)("div",g,[(0,e._)("div",_,[(0,e._)("span",null,(0,a.zw)(o.post.tag),1)]),t.user.id==o.post.creator.id||"admin"==t.user.role?((0,e.wg)(),(0,e.iD)("div",h,[(0,e.Wm)(y,{icon:["fas","pen"],onClick:s[0]||(s[0]=(0,i.iM)((t=>b.updatePost()),["stop"]))}),(0,e.Wm)(y,{icon:["fas","trash"],onClick:s[1]||(s[1]=(0,i.iM)((t=>b.deletePost()),["stop"]))})])):(0,e.kq)("",!0)])])])}o(560);var w=o(65),b=o(5605),y={name:"Post_comp",props:{post:Object},computed:{...(0,w.Se)(["user"])},methods:{openPost(){this.$router.push({name:"advertisement",params:{id:this.post.id}})},updatePost(){this.$router.push({name:"advertisementEdit",params:{id:this.post.id}})},deletePost(){confirm("Видалити оголошення ?")&&(0,b.wz)("advertisements",this.post.id).then((()=>{location.reload()})).catch((t=>{console.log(t)}))}}},P=o(89);const f=(0,P.Z)(y,[["render",v],["__scopeId","data-v-26400b47"]]);var k=f},9999:function(t,s,o){o.r(s),o.d(s,{default:function(){return z}});var e=o(3396),a=o(7139),i=o(9242);const n=t=>((0,e.dD)("data-v-689d40d0"),t=t(),(0,e.Cn)(),t),l={class:"container"},r={class:"menu"},d={value:"1"},p={value:"2"},c={value:"3"},u={value:"4"},m={value:"5"},g=n((()=>(0,e._)("div",{class:"posts-spacer"},null,-1))),_={key:0,class:"posts_list"},h={class:"page-selector"},v={key:1,class:"posts_list"};function w(t,s,o,n,w,b){const y=(0,e.up)("advertisement-component"),P=(0,e.up)("font-awesome-icon");return(0,e.wg)(),(0,e.iD)("div",l,[(0,e._)("div",r,[(0,e.wy)((0,e._)("select",{"onUpdate:modelValue":s[0]||(s[0]=t=>w.dormitoryNumber=t)},[(0,e._)("option",d,(0,a.zw)(t.$t("global.dormitory"))+" №1",1),(0,e._)("option",p,(0,a.zw)(t.$t("global.dormitory"))+" №2",1),(0,e._)("option",c,(0,a.zw)(t.$t("global.dormitory"))+" №3",1),(0,e._)("option",u,(0,a.zw)(t.$t("global.dormitory"))+" №4",1),(0,e._)("option",m,(0,a.zw)(t.$t("global.dormitory"))+" №5",1)],512),[[i.bM,w.dormitoryNumber]])]),g,w.postsList&&w.postsList.length>0?((0,e.wg)(),(0,e.iD)("div",_,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(w.postsList,(t=>((0,e.wg)(),(0,e.j4)(y,{post:t,key:t.id},null,8,["post"])))),128)),(0,e._)("div",h,[(0,e.Wm)(P,{icon:"arrow-left",class:(0,a.C_)([{"hidden-page":1==w.page_index},"page-toggle"]),onClick:s[1]||(s[1]=t=>b.subPage())},null,8,["class"]),(0,e._)("span",null,(0,a.zw)(w.page_index),1),(0,e.Wm)(P,{icon:"arrow-right",class:(0,a.C_)([{"hidden-page":w.page_index==w.lastPage},"page-toggle"]),onClick:s[2]||(s[2]=t=>b.addPage())},null,8,["class"])])])):((0,e.wg)(),(0,e.iD)("div",v,(0,a.zw)(t.$t("global.loading"))+"...",1))])}var b=o(7070),y=o(5605),P={name:"Posts_list",components:{AdvertisementComponent:b.Z},methods:{subPage(){this.page_index>1&&(this.page_index-=1)},addPage(){this.page_index!=this.lastPage&&(this.page_index+=1)},loadPostsList(t,s){(0,y.yO)("advertisements",t,s).then((t=>{this.postsList=t.data,this.lastPage=t.last_page})).catch((t=>{console.log(t),this.postsList=null}))}},data(){return{page_index:1,search:void 0,dormitoryNumber:localStorage.getItem("defaultDormitory"),postsList:null,lastPage:1}},watch:{page_index(t){this.loadPostsList(this.dormitoryNumber,t)},dormitoryNumber(t){localStorage.setItem("defaultDormitory",t),this.page_index=1,this.loadPostsList(t,this.page_index)}},mounted(){this.loadPostsList(this.dormitoryNumber,this.page_index)}},f=o(89);const k=(0,f.Z)(P,[["render",w],["__scopeId","data-v-689d40d0"]]);var z=k}}]);
//# sourceMappingURL=999.67017b89.js.map