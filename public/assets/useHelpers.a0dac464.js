import{a as g,u as h}from"./use-quasar.7f1204f4.js";import{a as u}from"./axios.15fd7c93.js";import{r as y,u as b,l as v,a as w,S as A,P as c}from"./index.474519f9.js";const D=()=>{const l=g(),s=y(!1),i=h(),m=b(),f=v();let n=null;i.token!==""&&(n=w.read(i.token).claim);const d=(e,r)=>{s.value=!1,l.dialog({title:"Confirmar",message:e,ok:{push:!0,label:"Eliminar",color:"teal-7"},cancel:{push:!0,color:"blue-grey-8",label:"Cancelar"}}).onOk(async()=>{try{await u.delete(r),o("positive","Registro eliminado exitosamente"),s.value=!0}catch(t){if(t.response.data.code=="23503")return o("negative","No es posible borrar este registro, se encuentra en uso.");o("negative",t.response.data.message)}})},o=(e,r,t="top-right")=>{A.xs&&(t="top");let a="";Array.isArray(r)?(a+="<ul>",r.forEach(p=>{a+=`<li> ${p}</li>`}),a+="</ul>"):a=r,l.notify({type:e,message:a,position:t,html:!0})};return{api:u,claim:n,confirmDelete:d,mostrarNotify:o,isDeleted:s,showLoading:(e=!0)=>{e?c.show({message:"Cargando..."}):c.hide()},router:m,route:f}};export{D as u};
