import{Q as H,a as B,b as O}from"./QTable.fc3e737e.js";import{Q as G,a as q}from"./QTooltip.5a826ced.js";import{r as m,B as Y,o as s,a7 as n,g as a,f as l,aQ as N,e as c,a8 as f,N as D,h as i,af as J,i as A,aP as L,v as K,c as S,aT as W,ab as V,ad as w,ah as R,ag as Z,Q as ee,aU as oe,a9 as I,bs as ae}from"./index.63602cd2.js";import{Q as P}from"./QBadge.3ad7d9bf.js";import{Q as le}from"./QPageSticky.8172df02.js";import{C as F}from"./ClosePopup.4ff1d69f.js";import{u as U}from"./useHelpers.d026a779.js";import{Q as te}from"./QSelect.eb6986f4.js";import{Q as se}from"./QFile.860a16f8.js";import"./QList.ad591dc3.js";import"./QItemLabel.b338ce31.js";import"./use-quasar.37c9aa3a.js";import"./axios.22257619.js";import"./QChip.8319138a.js";import"./format.2bc25e5f.js";const re={class:"text-h6 text-center"},ne={class:"row justify-center"},ie={class:"col-xs-12 col-md-7 justify-center q-my-md"},ce=c("label",{class:"text-center",style:{display:"block"}}," Router: ",-1),de={class:"col-xs-12 col-md-7 justify-center q-my-md"},ue=c("label",{class:"text-center",style:{display:"block"}}," Subir archivo excel: ",-1),me={__name:"ModalImportarClientes",props:["router_selected"],setup(T){const z=T,{api:k,claim:v}=U(),y=m([]),b=m(""),_=m(null),h=m(!1),x=async()=>{const{data:d}=await k.get(`/router/find/${v.company.id}`);y.value=[],d.forEach((u,p)=>{y.value.push({label:u.nombre,value:u.id})}),b.value=z.router_selected};Y(()=>{const d=document.createElement("script");d.src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.17.5/xlsx.full.min.js",d.async=!0,document.head.appendChild(d)});const C=()=>{_.value==null&&(h.value=!0);const d=new FileReader;d.onload=function(u){const p=u.target.result,$=XLSX.read(p,{type:"binary"}),j=$.SheetNames[0],E=XLSX.utils.sheet_to_json($.Sheets[j]);console.log(E[2].__EMPTY_11)},d.readAsBinaryString(_.value)};return x(),(d,u)=>(s(),n(L,{style:{width:"1000px","max-width":"70vw"}},{default:a(()=>[l(N,{class:"q-py-sm"},{default:a(()=>[c("div",re,[f(" Importar Clientes "),D(l(i,{round:"",flat:"",dense:"",icon:"close",class:"float-right",color:"grey-8"},null,512),[[F]])])]),_:1}),l(J,{inset:""}),l(N,{class:"q-pa-none",id:"box-map"},{default:a(()=>[c("div",ne,[c("div",ie,[ce,l(te,{dense:"",modelValue:b.value,"onUpdate:modelValue":u[0]||(u[0]=p=>b.value=p),modelModifiers:{trim:!0},filled:"","emit-value":"","map-options":"",options:y.value},null,8,["modelValue","options"])]),c("div",de,[ue,l(se,{filled:"",dense:"",modelValue:_.value,"onUpdate:modelValue":u[1]||(u[1]=p=>_.value=p),"error-message":"Debes agregar el archivo excel",error:!h.value,accept:".xls, .xlsx"},{prepend:a(()=>[l(A,{name:"fa-solid fa-file-excel"})]),_:1},8,["modelValue","error"])]),c("div",{onClick:C,class:"col-xs-12 col-md-7 text-center q-my-md"},[l(i,{id:"btn-coordenadas",color:"teal-10","icon-right":"group"},{default:a(()=>[f(" Cargar Clientes \xA0 ")]),_:1})])])]),_:1})]),_:1}))}},pe={class:"q-ma-lg q-pt-md"},ge={class:"row q-col-gutter-lg"},fe={class:"col-12"},ve={class:"full-width row flex-center text-lime-10 q-gutter-sm"},ye=c("span",{class:"text-subtitle1"}," No se encontr\xF3 ningun Resultado ",-1),je={__name:"IndexPage",setup(T){const z=[{name:"acciones",label:"acciones",align:"center"},{align:"center",label:"Nombre Router",field:"nombre",name:"nombre"},{align:"center",label:"IP/Host",field:"ip_host",name:"ip_host"},{align:"center",label:"Empresa",field:"empresa_name",name:"empresa_name"},{name:"estado",label:"Estado",align:"center",field:"estado"}],k=m(""),v=m([]),y=m(!1),b=m(!1),_=m(""),{api:h,claim:x,mostrarNotify:C,confirmDelete:d,isDeleted:u}=U(),p=async()=>{y.value=!0;try{const{data:t}=await h.get("/router");t.forEach(o=>{o.empresa_name=o.company_id.nombre_comercial,o.estado=o.isActive?"Activo":"Inactivo",o.loading=!1}),v.value=t}catch(t){C("warning",t.response.data.message)}y.value=!1},$=async(t,o)=>{try{const{data:{msg:e}}=await h.patch(`/router/${t}/${o}`);C("positive",e),p()}catch(e){console.log(e)}};K(u,(t,o)=>{t&&p()});const j=async t=>{try{d("Estas seguro de eliminar este router?",`/router/${t}`)}catch(o){console.log(o)}},E=async t=>{ae.create({title:"Confirmar",message:"\xBFDeseas reescribir los clientes existente al mickrotik?",ok:{push:!0,label:"SI",color:"teal-7"},cancel:{push:!0,color:"blue-grey-8",label:"Cancelar"}}).onOk(async()=>{try{await h.post(`/mikrotik/reparar-router/${t}`),C("warning","Clientes agregados exitosamente")}catch(o){typeof o.response.data.message=="object"&&o.response.data.message.unshift("No pudo agregar los siguientes clientes porque ya existen:"),C("warning",o.response.data.message)}})},M=async(t,o)=>{try{v.value[o].loading=!0;const e=await h.post(`/mikrotik/download-clients-excel/${t}`,{},{responseType:"arraybuffer"}),r=new Blob([e.data],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),Q=document.createElement("a");Q.href=window.URL.createObjectURL(r),Q.download="ejemplo.xlsx",document.body.appendChild(Q),Q.click(),document.body.removeChild(Q),v.value[o].loading=!1}catch(e){console.log(e),v.value[o].loading=!1}};p();const g=m("list"),X=m({rowsPerPage:10});return(t,o)=>(s(),S(R,null,[c("div",pe,[c("div",ge,[c("div",fe,[l(L,{flat:"",class:"shadow_custom"},{default:a(()=>[l(H,{"title-class":"text-grey-7 text-h6",title:"Listado de Routers",rows:v.value,loading:y.value,"hide-header":g.value==="grid",columns:z,"row-key":"name",grid:g.value==="grid",filter:k.value,pagination:X.value},{header:a(e=>[l(G,{props:e,style:{height:"60px"}},{default:a(()=>[(s(!0),S(R,null,Z(e.cols,r=>(s(),n(O,{key:r.name,props:e,class:"text-grey-7 text-weight-bold text-uppercase",style:{"font-size":"13px"}},{default:a(()=>[f(I(r.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"top-right":a(e=>[!t.$q.screen.xs&&V(x).roles[0]=="Super-Administrador"?(s(),n(i,{key:0,onClick:o[0]||(o[0]=r=>t.$router.push({name:"router.add"})),outline:"",color:"primary",label:"Agregar Router",class:"q-mr-xs"})):w("",!0),l(ee,{style:oe(t.$q.screen.width>700||"width: 70%"),outlined:"",dense:"",debounce:"300",modelValue:k.value,"onUpdate:modelValue":o[1]||(o[1]=r=>k.value=r),placeholder:"Buscar..."},{append:a(()=>[l(A,{name:"search"})]),_:1},8,["style","modelValue"]),g.value==="list"?(s(),n(i,{key:1,flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen",onClick:e.toggleFullscreen},{default:a(()=>[D((s(),n(q,{disable:t.$q.platform.is.mobile},{default:a(()=>[f(I(e.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen"),1)]),_:2},1032,["disable"])),[[F]])]),_:2},1032,["icon","onClick"])):w("",!0),e.inFullscreen?w("",!0):(s(),n(i,{key:2,flat:"",round:"",dense:"",icon:g.value==="grid"?"list":"grid_on",onClick:o[2]||(o[2]=r=>{g.value=g.value==="grid"?"list":"grid",t.separator=g.value==="grid"?"none":"horizontal"})},{default:a(()=>[D((s(),n(q,{disable:t.$q.platform.is.mobile},{default:a(()=>[f(I(g.value==="grid"?"List":"Grid"),1)]),_:1},8,["disable"])),[[F]])]),_:1},8,["icon"]))]),"body-cell-estado":a(e=>[l(B,{props:e},{default:a(()=>[e.row.isActive?(s(),n(P,{key:0,outline:"",color:"positive",label:"Activo",class:"q-pa-sm"})):(s(),n(P,{key:1,outline:"",color:"red",label:"Inactivo",class:"q-pa-sm"}))]),_:2},1032,["props"])]),"body-cell-acciones":a(e=>[l(B,{props:e},{default:a(()=>[e.row.isActive?(s(),S(R,{key:0},[l(i,{round:"",color:"blue-grey",onClick:r=>t.$router.push({name:"router.edit",params:{router_id:e.row.id}}),icon:"edit",class:"q-mr-sm",size:"10px"},null,8,["onClick"]),l(i,{onClick:r=>E(e.row.id),round:"",color:"blue-grey",icon:"fa-solid fa-gears",class:"q-mr-sm",size:"10px"},{default:a(()=>[l(q,{class:"bg-indigo",anchor:"top middle",self:"center middle"},{default:a(()=>[f(" Reparar router ")]),_:1})]),_:2},1032,["onClick"]),l(i,{onClick:r=>M(e.row.id,e.rowIndex),loading:e.row.loading,round:"",color:"blue-grey",icon:"fa-solid fa-file-excel",class:"q-mr-sm",size:"10px"},{default:a(()=>[l(q,{class:"bg-indigo",anchor:"top middle",self:"center middle"},{default:a(()=>[f(" Descargar plantilla clientes ")]),_:1})]),_:2},1032,["onClick","loading"]),l(i,{onClick:r=>(b.value=!0,_.value=e.row.id),loading:e.row.loading,round:"",color:"blue-grey",icon:"upload",class:"q-mr-sm",size:"10px"},{default:a(()=>[l(q,{class:"bg-indigo",anchor:"top middle",self:"center middle"},{default:a(()=>[f(" Importar Clientes ")]),_:1})]),_:2},1032,["onClick","loading"]),e.row.isActive&&V(x).roles[0]=="Super-Administrador"?(s(),n(i,{key:0,round:"",color:"blue-grey",icon:"close",onClick:r=>$(e.row.id,!1),size:"10px"},null,8,["onClick"])):w("",!0)],64)):(s(),S(R,{key:1},[e.row.isActive?w("",!0):(s(),n(i,{key:0,round:"",color:"blue-grey",icon:"done",onClick:r=>$(e.row.id,!0),size:"10px"},null,8,["onClick"])),!e.row.isActive&&V(x).roles[0]=="Super-Administrador"?(s(),n(i,{key:1,round:"",color:"blue-grey",class:"q-ml-sm",icon:"delete",onClick:r=>j(e.row.id),size:"10px"},null,8,["onClick"])):w("",!0)],64))]),_:2},1032,["props"])]),"no-data":a(({icon:e})=>[c("div",ve,[l(A,{size:"2em",name:"sentiment_dissatisfied"}),ye,l(A,{size:"2em",name:k.value?"filter_b_and_w":e},null,8,["name"])])]),_:1},8,["rows","loading","hide-header","grid","filter","pagination"])]),_:1})])])]),l(W,{modelValue:b.value,"onUpdate:modelValue":o[3]||(o[3]=e=>b.value=e)},{default:a(()=>[l(me,{router_selected:_.value},null,8,["router_selected"])]),_:1},8,["modelValue"]),t.$q.screen.xs&&V(x).roles[0]=="Super-Administrador"?(s(),n(le,{key:0,position:"bottom-right",offset:[18,18]},{default:a(()=>[l(i,{round:"",color:"secondary",size:"lg",icon:"add",onClick:o[4]||(o[4]=e=>t.$router.push({name:"router.add"}))})]),_:1})):w("",!0)],64))}};export{je as default};