import{a as h,u as p}from"./use-quasar.ee2244ef.js";import{api as g}from"./axios.c73445ad.js";import{r as y,u as w,l as A,a as b,S as k,P as u}from"./index.633eb824.js";const D=()=>{const l=h(),o=y(!1),i=p(),c=w(),m=A();let n=null;i.token!==""&&(n=b.read(i.token).claim);const f=(e,t)=>{o.value=!1,l.dialog({title:"Confirmar",message:e,ok:{push:!0,label:"Eliminar",color:"teal-7"},cancel:{push:!0,color:"blue-grey-8",label:"Cancelar"}}).onOk(async()=>{try{await g.delete(t),s("positive","Registro eliminado exitosamente"),o.value=!0}catch(a){s("negative",a.response.data.message)}})},s=(e,t,a="top-right")=>{k.xs&&(a="top");let r="";Array.isArray(t)?(r+="<ul>",t.forEach(d=>{r+=`<li> ${d}</li>`}),r+="</ul>"):r=t,l.notify({type:e,message:r,position:a,html:!0})};return{claim:n,confirmDelete:f,mostrarNotify:s,isDeleted:o,showLoading:(e=!0)=>{e?u.show({message:"Cargando..."}):u.hide()},router:c,route:m}};export{D as u};
