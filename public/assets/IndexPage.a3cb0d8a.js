import{Q as X,a as H}from"./QTable.1092949f.js";import{Q as G,a as Q}from"./QTooltip.a739d047.js";import{r as m,C as Y,o as s,a9 as n,g as l,f as a,aV as z,e as c,aa as f,O as T,h as i,ah as J,i as U,aU as B,v as K,c as q,ba as W,ad as S,af as w,aj as I,ai as Z,Q as ee,bc as oe,ab as E,by as le}from"./index.29f4c737.js";import{Q as F}from"./QBadge.4e28918c.js";import{Q as P}from"./QTd.23ff1cd7.js";import{Q as ae}from"./QPageSticky.2c2573af.js";import{C as j}from"./ClosePopup.7003054d.js";import{u as M}from"./useHelpers.c99bee56.js";import{Q as te}from"./QSelect.af5c5eb7.js";import{Q as se}from"./QFile.9f5bf042.js";import"./QList.735afe1b.js";import"./format.32e8bea4.js";import"./use-quasar.a55b1bc0.js";import"./axios.dda82ddd.js";const re={class:"text-h6 text-center"},ne={class:"row justify-center"},ie={class:"col-xs-12 col-md-7 justify-center q-my-md"},ce=c("label",{class:"text-center",style:{display:"block"}}," Router: ",-1),de={class:"col-xs-12 col-md-7 justify-center q-my-md"},ue=c("label",{class:"text-center",style:{display:"block"}}," Subir archivo excel: ",-1),me={__name:"ModalImportarClientes",props:["router_selected"],setup(N){const D=N,{api:C,claim:v}=M(),y=m([]),b=m(""),h=m(null),_=m(!1),k=async()=>{const{data:d}=await C.get(`/router/find/${v.company.id}`);y.value=[],d.forEach((u,p)=>{y.value.push({label:u.nombre,value:u.id})}),b.value=D.router_selected};Y(()=>{const d=document.createElement("script");d.src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.17.5/xlsx.full.min.js",d.async=!0,document.head.appendChild(d)});const x=()=>{h.value==null&&(_.value=!0);const d=new FileReader;d.onload=function(u){const p=u.target.result,$=XLSX.read(p,{type:"binary"}),A=$.SheetNames[0],V=XLSX.utils.sheet_to_json($.Sheets[A]);console.log(V[2].__EMPTY_11)},d.readAsBinaryString(h.value)};return k(),(d,u)=>(s(),n(B,{style:{width:"1000px","max-width":"70vw"}},{default:l(()=>[a(z,{class:"q-py-sm"},{default:l(()=>[c("div",re,[f(" Importar Clientes "),T(a(i,{round:"",flat:"",dense:"",icon:"close",class:"float-right",color:"grey-8"},null,512),[[j]])])]),_:1}),a(J,{inset:""}),a(z,{class:"q-pa-none",id:"box-map"},{default:l(()=>[c("div",ne,[c("div",ie,[ce,a(te,{dense:"",modelValue:b.value,"onUpdate:modelValue":u[0]||(u[0]=p=>b.value=p),modelModifiers:{trim:!0},filled:"","emit-value":"","map-options":"",options:y.value},null,8,["modelValue","options"])]),c("div",de,[ue,a(se,{filled:"",dense:"",modelValue:h.value,"onUpdate:modelValue":u[1]||(u[1]=p=>h.value=p),"error-message":"Debes agregar el archivo excel",error:!_.value,accept:".xls, .xlsx"},{prepend:l(()=>[a(U,{name:"fa-solid fa-file-excel"})]),_:1},8,["modelValue","error"])]),c("div",{onClick:x,class:"col-xs-12 col-md-7 text-center q-my-md"},[a(i,{id:"btn-coordenadas",color:"teal-10","icon-right":"group"},{default:l(()=>[f(" Cargar Clientes \xA0 ")]),_:1})])])]),_:1})]),_:1}))}},pe={class:"q-ma-lg q-pt-md"},ge={class:"row q-col-gutter-lg"},fe={class:"col-12"},ve=c("div",{class:"full-width row flex-center text-lime-10 q-gutter-sm"},[c("span",{class:"text-subtitle1"}," No se encontr\xF3 ningun Resultado ")],-1),De={__name:"IndexPage",setup(N){const D=[{name:"acciones",label:"acciones",align:"center"},{align:"center",label:"Nombre Router",field:"nombre",name:"nombre"},{align:"center",label:"IP/Host",field:"ip_host",name:"ip_host"},{align:"center",label:"Empresa",field:"empresa_name",name:"empresa_name"},{name:"estado",label:"Estado",align:"center",field:"estado"}],C=m(""),v=m([]),y=m(!1),b=m(!1),h=m(""),{api:_,claim:k,mostrarNotify:x,confirmDelete:d,isDeleted:u}=M(),p=async()=>{y.value=!0;try{const{data:t}=await _.get("/router");t.forEach(o=>{o.empresa_name=o.company_id.nombre_comercial,o.estado=o.isActive?"Activo":"Inactivo",o.loading=!1}),v.value=t}catch(t){x("warning",t.response.data.message)}y.value=!1},$=async(t,o)=>{try{const{data:{msg:e}}=await _.patch(`/router/${t}/${o}`);x("positive",e),p()}catch(e){console.log(e)}};K(u,(t,o)=>{t&&p()});const A=async t=>{try{d("Estas seguro de eliminar este router?",`/router/${t}`)}catch(o){console.log(o)}},V=async t=>{le.create({title:"Confirmar",message:"\xBFDeseas reescribir los clientes existente al mickrotik?",ok:{push:!0,label:"SI",color:"teal-7"},cancel:{push:!0,color:"blue-grey-8",label:"Cancelar"}}).onOk(async()=>{try{await _.post(`/mikrotik/reparar-router/${t}`),x("warning","Clientes agregados exitosamente")}catch(o){typeof o.response.data.message=="object"&&o.response.data.message.unshift("No pudo agregar los siguientes clientes porque ya existen:"),x("warning",o.response.data.message)}})},L=async(t,o)=>{try{v.value[o].loading=!0;const e=await _.post(`/mikrotik/download-clients-excel/${t}`,{},{responseType:"arraybuffer"}),r=new Blob([e.data],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),R=document.createElement("a");R.href=window.URL.createObjectURL(r),R.download="ejemplo.xlsx",document.body.appendChild(R),R.click(),document.body.removeChild(R),v.value[o].loading=!1}catch(e){console.log(e),v.value[o].loading=!1}};p();const g=m("list"),O=m({rowsPerPage:10});return(t,o)=>(s(),q(I,null,[c("div",pe,[c("div",ge,[c("div",fe,[a(B,{flat:"",class:"shadow_custom"},{default:l(()=>[a(X,{"title-class":"text-grey-7 text-h6",title:"Listado de Routers",rows:v.value,loading:y.value,"hide-header":g.value==="grid",columns:D,"row-key":"name",grid:g.value==="grid",filter:C.value,pagination:O.value},{header:l(e=>[a(G,{props:e,style:{height:"60px"}},{default:l(()=>[(s(!0),q(I,null,Z(e.cols,r=>(s(),n(H,{key:r.name,props:e,class:"text-grey-7 text-weight-bold text-uppercase",style:{"font-size":"13px"}},{default:l(()=>[f(E(r.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"top-right":l(e=>[!t.$q.screen.xs&&S(k).roles[0]=="SUPER-ADMINISTRADOR"?(s(),n(i,{key:0,onClick:o[0]||(o[0]=r=>t.$router.push({name:"router.add"})),outline:"",color:"primary",label:"Agregar Router",class:"q-mr-xs"})):w("",!0),a(ee,{style:oe(t.$q.screen.width>700||"width: 70%"),outlined:"",dense:"",debounce:"300",modelValue:C.value,"onUpdate:modelValue":o[1]||(o[1]=r=>C.value=r),placeholder:"Buscar..."},{append:l(()=>[a(U,{name:"search"})]),_:1},8,["style","modelValue"]),g.value==="list"?(s(),n(i,{key:1,flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen",onClick:e.toggleFullscreen},{default:l(()=>[T((s(),n(Q,{disable:t.$q.platform.is.mobile},{default:l(()=>[f(E(e.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen"),1)]),_:2},1032,["disable"])),[[j]])]),_:2},1032,["icon","onClick"])):w("",!0),e.inFullscreen?w("",!0):(s(),n(i,{key:2,flat:"",round:"",dense:"",icon:g.value==="grid"?"list":"grid_on",onClick:o[2]||(o[2]=r=>{g.value=g.value==="grid"?"list":"grid",t.separator=g.value==="grid"?"none":"horizontal"})},{default:l(()=>[T((s(),n(Q,{disable:t.$q.platform.is.mobile},{default:l(()=>[f(E(g.value==="grid"?"List":"Grid"),1)]),_:1},8,["disable"])),[[j]])]),_:1},8,["icon"]))]),"body-cell-estado":l(e=>[a(P,{props:e},{default:l(()=>[e.row.isActive?(s(),n(F,{key:0,outline:"",color:"positive",label:"Activo",class:"q-pa-sm"})):(s(),n(F,{key:1,outline:"",color:"red",label:"Inactivo",class:"q-pa-sm"}))]),_:2},1032,["props"])]),"body-cell-acciones":l(e=>[a(P,{props:e},{default:l(()=>[e.row.isActive?(s(),q(I,{key:0},[a(i,{round:"",color:"blue-grey",onClick:r=>t.$router.push({name:"router.edit",params:{router_id:e.row.id}}),icon:"edit",class:"q-mr-sm",size:"10px"},null,8,["onClick"]),a(i,{onClick:r=>V(e.row.id),round:"",color:"blue-grey",icon:"fa-solid fa-gears",class:"q-mr-sm",size:"10px"},{default:l(()=>[a(Q,{class:"bg-indigo",anchor:"top middle",self:"center middle"},{default:l(()=>[f(" Reparar router ")]),_:1})]),_:2},1032,["onClick"]),a(i,{onClick:r=>L(e.row.id,e.rowIndex),loading:e.row.loading,round:"",color:"blue-grey",icon:"fa-solid fa-file-excel",class:"q-mr-sm",size:"10px"},{default:l(()=>[a(Q,{class:"bg-indigo",anchor:"top middle",self:"center middle"},{default:l(()=>[f(" Descargar plantilla clientes ")]),_:1})]),_:2},1032,["onClick","loading"]),a(i,{onClick:r=>(b.value=!0,h.value=e.row.id),loading:e.row.loading,round:"",color:"blue-grey",icon:"upload",class:"q-mr-sm",size:"10px"},{default:l(()=>[a(Q,{class:"bg-indigo",anchor:"top middle",self:"center middle"},{default:l(()=>[f(" Importar Clientes ")]),_:1})]),_:2},1032,["onClick","loading"]),e.row.isActive&&S(k).roles[0]=="SUPER-ADMINISTRADOR"?(s(),n(i,{key:0,round:"",color:"blue-grey",icon:"close",onClick:r=>$(e.row.id,!1),size:"10px"},null,8,["onClick"])):w("",!0)],64)):(s(),q(I,{key:1},[e.row.isActive?w("",!0):(s(),n(i,{key:0,round:"",color:"blue-grey",icon:"done",onClick:r=>$(e.row.id,!0),size:"10px"},null,8,["onClick"])),!e.row.isActive&&S(k).roles[0]=="SUPER-ADMINISTRADOR"?(s(),n(i,{key:1,round:"",color:"blue-grey",class:"q-ml-sm",icon:"delete",onClick:r=>A(e.row.id),size:"10px"},null,8,["onClick"])):w("",!0)],64))]),_:2},1032,["props"])]),"no-data":l(({icon:e})=>[ve]),_:1},8,["rows","loading","hide-header","grid","filter","pagination"])]),_:1})])])]),a(W,{modelValue:b.value,"onUpdate:modelValue":o[3]||(o[3]=e=>b.value=e)},{default:l(()=>[a(me,{router_selected:h.value},null,8,["router_selected"])]),_:1},8,["modelValue"]),t.$q.screen.xs&&S(k).roles[0]=="SUPER-ADMINISTRADOR"?(s(),n(ae,{key:0,position:"bottom-right",offset:[18,18]},{default:l(()=>[a(i,{round:"",color:"secondary",size:"lg",icon:"add",onClick:o[4]||(o[4]=e=>t.$router.push({name:"router.add"}))})]),_:1})):w("",!0)],64))}};export{De as default};
