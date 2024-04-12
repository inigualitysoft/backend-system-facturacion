import{Q as z}from"./QInnerLoading.1dedf0d2.js";import{Q as B,a as F}from"./QTable.1092949f.js";import{Q as M,a as x}from"./QTooltip.a739d047.js";import{Q as O}from"./QSelect.af5c5eb7.js";import{r as m,v as L,C as j,o,c as y,e as c,f as i,g as s,aU as G,ad as n,a9 as r,af as d,aj as A,ai as H,ae as J,h as g,Q as K,bc as W,i as X,O as $,aa as k,ab as _}from"./index.29f4c737.js";import{Q as I}from"./QBadge.4e28918c.js";import{Q as N}from"./QTd.23ff1cd7.js";import{Q as Y}from"./QPageSticky.2c2573af.js";import{C as R}from"./ClosePopup.7003054d.js";import{u as Z}from"./useHelpers.c99bee56.js";import{u as ee}from"./useRolPermisos.4acb3ca2.js";import"./QList.735afe1b.js";import"./format.32e8bea4.js";import"./use-quasar.a55b1bc0.js";import"./axios.dda82ddd.js";const ae={class:"q-ma-lg q-pt-md"},le={class:"row q-col-gutter-lg"},se={class:"col-12"},oe={key:0,class:"text-center row justify-center",style:{width:"100%"}},te=c("label",{class:"q-mb-sm text-grey-7 text-h6"}," Listado de Usuarios ",-1),re=[te],ie=c("label",{class:"q-mr-sm row items-center"},[c("span",null,"Empresa: ")],-1),ne=c("div",{class:"full-width row flex-center text-lime-10 q-gutter-sm"},[c("span",{class:"text-subtitle1"}," No se encontr\xF3 ningun Resultado ")],-1),qe={__name:"IndexPage",setup(ue){const U=[{name:"acciones",label:"acciones",align:"center"},{name:"fullName",align:"center",label:"Nombre",field:"fullName",sortable:!0},{name:"usuario",label:"Usuario",field:"usuario",align:"center"},{name:"email",align:"center",label:"Email",field:"email"},{name:"celular",label:"Celular",field:"celular",align:"center"},{name:"rol_name",align:"center",label:"Rol",field:"rol_name"},{name:"estado",label:"Estado",align:"center",field:"estado"}],b=m(""),Q=m([]),C=m([]),f=m(""),h=m(!1),{api:q,claim:p,mostrarNotify:D,confirmDelete:E,isDeleted:T}=Z(),{validarPermisos:v}=ee(),w=async()=>{h.value=!0;try{let l={"company-id":f.value};const{data:a}=await q.get("/auth/users",{headers:l});a.forEach(e=>{e.rol_name=e.roles[0],e.estado=e.isActive?"Activo":"Inactivo"}),Q.value=a}catch(l){D("warning",l.response.data.message)}h.value=!1},S=async()=>{const{data:l}=await q.get("/companies");l.forEach(a=>{C.value.push({label:a.nombre_comercial,value:a.id})}),f.value=p.company.id};L(T,(l,a)=>{l&&w()});const V=async l=>{try{E("Estas seguro de eliminar este usuario?",`/auth/${l}`)}catch(a){console.log(a)}};j(async()=>{await S(),await w()});const u=m("list"),P=m({rowsPerPage:10});return(l,a)=>(o(),y(A,null,[c("div",ae,[c("div",le,[c("div",se,[i(G,{flat:"",class:"shadow_custom"},{default:s(()=>[i(B,{"title-class":"text-grey-7 text-h6",rows:Q.value,loading:h.value,"hide-header":u.value==="grid",columns:U,"row-key":"name",grid:u.value==="grid",filter:b.value,pagination:P.value},{loading:s(()=>[i(z,{showing:"",color:"primary"})]),header:s(e=>[i(M,{props:e,style:{height:"60px"}},{default:s(()=>[(o(!0),y(A,null,H(e.cols,t=>(o(),r(F,{key:t.name,props:e,class:"text-grey-7 text-weight-bold text-uppercase",style:{"font-size":"13px"}},{default:s(()=>[k(_(t.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"top-left":s(e=>[n(p).roles[0]!=="SUPER-ADMINISTRADOR"&&n(p).roles[0]!=="ADMINISTRADOR"?(o(),y("div",oe,re)):d("",!0),n(p).roles[0]=="SUPER-ADMINISTRADOR"||n(p).roles[0]=="ADMINISTRADOR"?(o(),y("div",{key:1,style:{display:"flex"},class:J([l.$q.screen.xs?"q-mb-md":""])},[ie,i(O,{outlined:"",dense:"",modelValue:f.value,"onUpdate:modelValue":[a[0]||(a[0]=t=>f.value=t),a[1]||(a[1]=t=>w())],"emit-value":"","map-options":"",options:C.value},null,8,["modelValue","options"])],2)):d("",!0)]),"top-right":s(e=>[!l.$q.screen.xs&&n(v)("crear.usuario")?(o(),r(g,{key:0,onClick:a[2]||(a[2]=t=>l.$router.push({name:"Agregar Usuario"})),outline:"",color:"primary",label:"Agregar Usuario",class:"q-mr-xs"})):d("",!0),i(K,{style:W(l.$q.screen.width>700||"width: 70%"),outlined:"",dense:"",debounce:"300",modelValue:b.value,"onUpdate:modelValue":a[3]||(a[3]=t=>b.value=t),placeholder:"Buscar..."},{append:s(()=>[i(X,{name:"search"})]),_:1},8,["style","modelValue"]),u.value==="list"?(o(),r(g,{key:1,flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen",onClick:e.toggleFullscreen},{default:s(()=>[$((o(),r(x,{disable:l.$q.platform.is.mobile},{default:s(()=>[k(_(e.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen"),1)]),_:2},1032,["disable"])),[[R]])]),_:2},1032,["icon","onClick"])):d("",!0),e.inFullscreen?d("",!0):(o(),r(g,{key:2,flat:"",round:"",dense:"",icon:u.value==="grid"?"list":"grid_on",onClick:a[4]||(a[4]=t=>{u.value=u.value==="grid"?"list":"grid",l.separator=u.value==="grid"?"none":"horizontal"})},{default:s(()=>[$((o(),r(x,{disable:l.$q.platform.is.mobile},{default:s(()=>[k(_(u.value==="grid"?"List":"Grid"),1)]),_:1},8,["disable"])),[[R]])]),_:1},8,["icon"]))]),"body-cell-estado":s(e=>[i(N,{props:e},{default:s(()=>[e.row.isActive?(o(),r(I,{key:0,outline:"",color:"positive",label:"Activo",class:"q-pa-sm"})):(o(),r(I,{key:1,outline:"",color:"red",label:"Inactivo",class:"q-pa-sm"}))]),_:2},1032,["props"])]),"body-cell-acciones":s(e=>[i(N,{props:e},{default:s(()=>[n(v)("editar.usuario")?(o(),r(g,{key:0,round:"",color:"blue-grey",onClick:t=>l.$router.push({name:"Editar Usuario",params:{term:e.row.id}}),icon:"edit",class:"q-mr-sm",size:"11px"},null,8,["onClick"])):d("",!0),e.row.estado=="Activo"&&n(v)("eliminar.usuario")?(o(),r(g,{key:1,round:"",color:"blue-grey",class:"q-ml-sm",disabled:n(p).id==e.row.id,icon:"delete",onClick:t=>V(e.row.id),size:"11px"},null,8,["disabled","onClick"])):d("",!0)]),_:2},1032,["props"])]),"no-data":s(({icon:e})=>[ne]),_:1},8,["rows","loading","hide-header","grid","filter","pagination"])]),_:1})])])]),l.$q.screen.xs&&n(v)("crear.usuario")?(o(),r(Y,{key:0,position:"bottom-right",offset:[18,18]},{default:s(()=>[i(g,{round:"",color:"secondary",size:"lg",icon:"add",onClick:a[5]||(a[5]=e=>l.$router.push({name:"Agregar Usuario"}))})]),_:1})):d("",!0)],64))}};export{qe as default};
