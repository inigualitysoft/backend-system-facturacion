import{Q as R}from"./QInnerLoading.b047928c.js";import{Q as U,a as S,b as L}from"./QTable.d28355b8.js";import{Q as O,a as A}from"./QTooltip.cae77356.js";import{Q as j}from"./QSelect.cb1a9ee3.js";import{d as M,r as p,v as G,o as l,c as f,e as m,f as i,g as s,aU as H,ad as c,a9 as o,af as n,aj as b,ai as J,ae as K,h as d,Q as W,bc as X,i as Y,O as D,aa as _,ab as x}from"./index.f32ba181.js";import{Q as F}from"./QBadge.ded32e71.js";import{Q as Z}from"./QPageSticky.8f80c623.js";import{C as N}from"./ClosePopup.a7672475.js";import{u as ee}from"./useHelpers.2ac66ca7.js";import{u as ae}from"./useSucursal.076dca74.js";import{u as le}from"./useRolPermisos.c992cffe.js";import"./QList.134e73f2.js";import"./format.590990f1.js";import"./use-quasar.f54a93b3.js";import"./axios.b2069d9f.js";const se={class:"q-ma-lg q-pt-md"},te={class:"row q-col-gutter-lg"},oe={class:"col-12"},re={key:0,class:"text-center row justify-center",style:{width:"100%"}},ie=m("label",{class:"q-mb-sm text-grey-7 text-h6"}," Listado de Sucursales ",-1),ne=[ie],ce=m("label",{class:"q-mr-sm row items-center"},[m("span",null,"Empresa: ")],-1),ue=m("div",{class:"full-width row flex-center text-lime-10 q-gutter-sm"},[m("span",{class:"text-subtitle1"}," No se encontr\xF3 ningun Resultado ")],-1),qe=M({__name:"IndexPage",setup(de){const P=[{name:"acciones",label:"acciones",align:"center"},{align:"center",label:"Sucursal",field:"nombre",name:"nombre"},{align:"center",label:"Direcci\xF3n",field:"direccion",name:"direccion"},{align:"center",label:"N\xB0 de establecimiento",field:"establecimiento",name:"esta"},{label:"Punto de emisi\xF3n",field:"punto_emision",align:"center",name:"p_v"},{label:"N\xB0 de factura",field:"secuencia_factura_produccion",align:"center",name:"sec"},{name:"estado",label:"Estado",align:"center"}];let{api:C,claim:h,cargarCompanies:V,listCompanies:z}=ae();const k=p(""),Q=p([]),w=p(!1),v=p(h.company.id),{mostrarNotify:$,confirmDelete:B,isDeleted:I}=ee(),{validarPermisos:g}=le(),y=async()=>{w.value=!0;try{const a=v.value;v.value="";let t={headers:{"company-id":a}};const{data:e}=await C.get("/sucursal",t);Q.value=e,v.value=a}catch(a){$("warning",a.response.data.message)}w.value=!1},q=async(a,t)=>{try{const{data:{msg:e}}=await C.patch(`/sucursal/${a}/${t}`);$("positive",e),y()}catch(e){console.log(e)}};G(I,(a,t)=>{a&&y()});const T=async a=>{try{B("Estas seguro de eliminar esta sucursal?",`/sucursal/${a}`)}catch(t){console.log(t)}};y(),V();const u=p("list"),E=p({rowsPerPage:10});return(a,t)=>(l(),f(b,null,[m("div",se,[m("div",te,[m("div",oe,[i(H,{flat:"",class:"shadow_custom"},{default:s(()=>[i(U,{"title-class":"text-grey-7 text-h6",rows:Q.value,loading:w.value,"hide-header":u.value==="grid",columns:P,"row-key":"name",grid:u.value==="grid",filter:k.value,pagination:E.value},{loading:s(()=>[i(R,{showing:"",color:"primary"})]),header:s(e=>[i(O,{props:e,style:{height:"60px"}},{default:s(()=>[(l(!0),f(b,null,J(e.cols,r=>(l(),o(L,{key:r.name,props:e,class:"text-grey-7 text-weight-bold text-uppercase",style:{"font-size":"13px"}},{default:s(()=>[_(x(r.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"top-left":s(e=>[c(h).roles[0]!=="SUPER-ADMINISTRADOR"?(l(),f("div",re,ne)):n("",!0),c(h).roles[0]=="SUPER-ADMINISTRADOR"?(l(),f("div",{key:1,style:{display:"flex"},class:K([a.$q.screen.xs?"q-mb-md":""])},[ce,i(j,{outlined:"",dense:"",modelValue:v.value,"onUpdate:modelValue":[t[0]||(t[0]=r=>v.value=r),y],"emit-value":"","map-options":"",options:c(z)},null,8,["modelValue","options"])],2)):n("",!0)]),"top-right":s(e=>[!a.$q.screen.xs&&c(g)("crear.sucursal")?(l(),o(d,{key:0,onClick:t[1]||(t[1]=r=>a.$router.push({name:"Agregar Sucursal"})),outline:"",color:"primary",label:"Agregar Sucursal",class:"q-mr-xs"})):n("",!0),i(W,{style:X(a.$q.screen.width>700||"width: 70%"),outlined:"",dense:"",debounce:"300",modelValue:k.value,"onUpdate:modelValue":t[2]||(t[2]=r=>k.value=r),placeholder:"Buscar..."},{append:s(()=>[i(Y,{name:"search"})]),_:1},8,["style","modelValue"]),u.value==="list"?(l(),o(d,{key:1,flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen",onClick:e.toggleFullscreen},{default:s(()=>[D((l(),o(A,{disable:a.$q.platform.is.mobile},{default:s(()=>[_(x(e.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen"),1)]),_:2},1032,["disable"])),[[N]])]),_:2},1032,["icon","onClick"])):n("",!0),e.inFullscreen?n("",!0):(l(),o(d,{key:2,flat:"",round:"",dense:"",icon:u.value==="grid"?"list":"grid_on",onClick:t[3]||(t[3]=r=>{u.value=u.value==="grid"?"list":"grid",a.separator=u.value==="grid"?"none":"horizontal"})},{default:s(()=>[D((l(),o(A,{disable:a.$q.platform.is.mobile},{default:s(()=>[_(x(u.value==="grid"?"List":"Grid"),1)]),_:1},8,["disable"])),[[N]])]),_:1},8,["icon"]))]),"body-cell-estado":s(e=>[i(S,{props:e},{default:s(()=>[e.row.isActive?(l(),o(F,{key:0,outline:"",color:"positive",label:"Activo",class:"q-pa-sm"})):(l(),o(F,{key:1,outline:"",color:"red",label:"Inactivo",class:"q-pa-sm"}))]),_:2},1032,["props"])]),"body-cell-acciones":s(e=>[i(S,{props:e},{default:s(()=>[e.row.isActive?(l(),f(b,{key:0},[c(g)("editar.sucursal")?(l(),o(d,{key:0,round:"",color:"blue-grey",onClick:r=>a.$router.push({name:"Editar Sucursal",params:{sucursal_id:e.row.id}}),icon:"edit",class:"q-mr-sm",size:"10px"},null,8,["onClick"])):n("",!0),c(g)("inactivar.sucursal")?(l(),o(d,{key:1,round:"",color:"blue-grey",icon:"close",onClick:r=>q(e.row.id,!1),size:"10px"},null,8,["onClick"])):n("",!0)],64)):(l(),f(b,{key:1},[c(g)("activar.sucursal")?(l(),o(d,{key:0,round:"",color:"blue-grey",icon:"done",onClick:r=>q(e.row.id,!0),size:"10px"},null,8,["onClick"])):n("",!0),!e.row.estado&&c(g)("eliminar.sucursal")?(l(),o(d,{key:1,round:"",color:"blue-grey",class:"q-ml-sm",icon:"delete",onClick:r=>T(e.row.id),size:"10px"},null,8,["onClick"])):n("",!0)],64))]),_:2},1032,["props"])]),"no-data":s(({icon:e})=>[ue]),_:1},8,["rows","loading","hide-header","grid","filter","pagination"])]),_:1})])])]),a.$q.screen.xs&&c(g)("crear.sucursal")?(l(),o(Z,{key:0,position:"bottom-right",offset:[18,18]},{default:s(()=>[i(d,{round:"",color:"secondary",size:"lg",icon:"add",onClick:t[4]||(t[4]=e=>a.$router.push({name:"Agregar Sucursal"}))})]),_:1})):n("",!0)],64))}});export{qe as default};
