import{Q as U,a as z,b as L}from"./QTable.7fcf9738.js";import{Q as O,a as N}from"./QTooltip.eebfcb15.js";import{Q as j}from"./QSelect.520b4c98.js";import{d as H,r as p,v as M,o as s,c as f,e as m,f as i,g as t,aU as G,ad as c,a9 as o,af as n,aj as b,ai as Z,ae as J,h as d,Q as K,aZ as W,i as w,O as A,aa as x,ab as C}from"./index.7acef9a6.js";import{Q as D}from"./QBadge.4e6bc3c4.js";import{Q as X}from"./QPageSticky.07d80fd0.js";import{C as F}from"./ClosePopup.01114e94.js";import{u as Y}from"./useHelpers.5242f772.js";import{u as ee}from"./useSucursal.9d23ca8d.js";import{u as ae}from"./useRolPermisos.ffb5276b.js";import"./QList.363f54d0.js";import"./format.b7cf0653.js";import"./use-quasar.c0f2ab40.js";import"./axios.870a43e3.js";const se={class:"q-ma-lg q-pt-md"},le={class:"row q-col-gutter-lg"},te={class:"col-12"},oe={key:0,class:"text-center row justify-center",style:{width:"100%"}},re=m("label",{class:"q-mb-sm text-grey-7 text-h6"}," Listado de Sucursales ",-1),ie=[re],ne=m("label",{class:"q-mr-sm row items-center"},[m("span",null,"Empresa: ")],-1),ce={class:"full-width row flex-center text-lime-10 q-gutter-sm"},ue=m("span",{class:"text-subtitle1"}," No se encontr\xF3 ningun Resultado ",-1),$e=H({__name:"IndexPage",setup(de){const P=[{name:"acciones",label:"acciones",align:"center"},{align:"center",label:"Sucursal",field:"nombre",name:"nombre"},{align:"center",label:"Direcci\xF3n",field:"direccion",name:"direccion"},{align:"center",label:"N\xB0 de establecimiento",field:"establecimiento",name:"esta"},{label:"Punto de emisi\xF3n",field:"punto_emision",align:"center",name:"p_v"},{label:"N\xB0 de factura",field:"secuencia_factura_produccion",align:"center",name:"sec"},{name:"estado",label:"Estado",align:"center"}];let{api:S,claim:h,cargarCompanies:V,listCompanies:B}=ee();const v=p(""),$=p([]),k=p(!1),_=p(h.company.id),{mostrarNotify:q,confirmDelete:T,isDeleted:E}=Y(),{validarPermisos:g}=ae(),y=async()=>{k.value=!0;try{let a={headers:{company_id:_.value,NotSetHeaderCompany:!0}};const{data:l}=await S.get("/sucursal",a);$.value=l}catch(a){q("warning",a.response.data.message)}k.value=!1},Q=async(a,l)=>{try{const{data:{msg:e}}=await S.patch(`/sucursal/${a}/${l}`);q("positive",e),y()}catch(e){console.log(e)}};M(E,(a,l)=>{a&&y()});const I=async a=>{try{T("Estas seguro de eliminar esta sucursal?",`/sucursal/${a}`)}catch(l){console.log(l)}};y(),V();const u=p("list"),R=p({rowsPerPage:10});return(a,l)=>(s(),f(b,null,[m("div",se,[m("div",le,[m("div",te,[i(G,{flat:"",class:"shadow_custom"},{default:t(()=>[i(U,{"title-class":"text-grey-7 text-h6",rows:$.value,loading:k.value,"hide-header":u.value==="grid",columns:P,"row-key":"name",grid:u.value==="grid",filter:v.value,pagination:R.value},{header:t(e=>[i(O,{props:e,style:{height:"60px"}},{default:t(()=>[(s(!0),f(b,null,Z(e.cols,r=>(s(),o(L,{key:r.name,props:e,class:"text-grey-7 text-weight-bold text-uppercase",style:{"font-size":"13px"}},{default:t(()=>[x(C(r.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"top-left":t(e=>[c(h).roles[0]!=="SUPER-ADMINISTRADOR"?(s(),f("div",oe,ie)):n("",!0),c(h).roles[0]=="SUPER-ADMINISTRADOR"?(s(),f("div",{key:1,style:{display:"flex"},class:J([a.$q.screen.xs?"q-mb-md":""])},[ne,i(j,{outlined:"",dense:"",modelValue:_.value,"onUpdate:modelValue":[l[0]||(l[0]=r=>_.value=r),y],"emit-value":"","map-options":"",options:c(B)},null,8,["modelValue","options"])],2)):n("",!0)]),"top-right":t(e=>[!a.$q.screen.xs&&c(g)("crear.sucursal")?(s(),o(d,{key:0,onClick:l[1]||(l[1]=r=>a.$router.push({name:"Agregar Sucursal"})),outline:"",color:"primary",label:"Agregar Sucursal",class:"q-mr-xs"})):n("",!0),i(K,{style:W(a.$q.screen.width>700||"width: 70%"),outlined:"",dense:"",debounce:"300",modelValue:v.value,"onUpdate:modelValue":l[2]||(l[2]=r=>v.value=r),placeholder:"Buscar..."},{append:t(()=>[i(w,{name:"search"})]),_:1},8,["style","modelValue"]),u.value==="list"?(s(),o(d,{key:1,flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen",onClick:e.toggleFullscreen},{default:t(()=>[A((s(),o(N,{disable:a.$q.platform.is.mobile},{default:t(()=>[x(C(e.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen"),1)]),_:2},1032,["disable"])),[[F]])]),_:2},1032,["icon","onClick"])):n("",!0),e.inFullscreen?n("",!0):(s(),o(d,{key:2,flat:"",round:"",dense:"",icon:u.value==="grid"?"list":"grid_on",onClick:l[3]||(l[3]=r=>{u.value=u.value==="grid"?"list":"grid",a.separator=u.value==="grid"?"none":"horizontal"})},{default:t(()=>[A((s(),o(N,{disable:a.$q.platform.is.mobile},{default:t(()=>[x(C(u.value==="grid"?"List":"Grid"),1)]),_:1},8,["disable"])),[[F]])]),_:1},8,["icon"]))]),"body-cell-estado":t(e=>[i(z,{props:e},{default:t(()=>[e.row.isActive?(s(),o(D,{key:0,outline:"",color:"positive",label:"Activo",class:"q-pa-sm"})):(s(),o(D,{key:1,outline:"",color:"red",label:"Inactivo",class:"q-pa-sm"}))]),_:2},1032,["props"])]),"body-cell-acciones":t(e=>[i(z,{props:e},{default:t(()=>[e.row.isActive?(s(),f(b,{key:0},[c(g)("editar.sucursal")?(s(),o(d,{key:0,round:"",color:"blue-grey",onClick:r=>a.$router.push({name:"Editar Sucursal",params:{sucursal_id:e.row.id}}),icon:"edit",class:"q-mr-sm",size:"10px"},null,8,["onClick"])):n("",!0),c(g)("inactivar.sucursal")?(s(),o(d,{key:1,round:"",color:"blue-grey",icon:"close",onClick:r=>Q(e.row.id,!1),size:"10px"},null,8,["onClick"])):n("",!0)],64)):(s(),f(b,{key:1},[c(g)("activar.sucursal")?(s(),o(d,{key:0,round:"",color:"blue-grey",icon:"done",onClick:r=>Q(e.row.id,!0),size:"10px"},null,8,["onClick"])):n("",!0),!e.row.estado&&c(g)("eliminar.sucursal")?(s(),o(d,{key:1,round:"",color:"blue-grey",class:"q-ml-sm",icon:"delete",onClick:r=>I(e.row.id),size:"10px"},null,8,["onClick"])):n("",!0)],64))]),_:2},1032,["props"])]),"no-data":t(({icon:e})=>[m("div",ce,[i(w,{size:"2em",name:"sentiment_dissatisfied"}),ue,i(w,{size:"2em",name:v.value?"filter_b_and_w":e},null,8,["name"])])]),_:1},8,["rows","loading","hide-header","grid","filter","pagination"])]),_:1})])])]),a.$q.screen.xs&&c(g)("crear.sucursal")?(s(),o(X,{key:0,position:"bottom-right",offset:[18,18]},{default:t(()=>[i(d,{round:"",color:"secondary",size:"lg",icon:"add",onClick:l[4]||(l[4]=e=>a.$router.push({name:"Agregar Sucursal"}))})]),_:1})):n("",!0)],64))}});export{$e as default};
