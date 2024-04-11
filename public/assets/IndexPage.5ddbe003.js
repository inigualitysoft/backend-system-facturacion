import{Q as M,a as Q,b as P}from"./QTable.7d0eddf9.js";import{Q as R,a as x}from"./QTooltip.0405806f.js";import{Q as E}from"./QSelect.c529778b.js";import{d as U,r as p,v as j,o as a,c as m,e as u,f as r,g as o,aU as L,a9 as i,af as c,aj as v,ai as G,ad as k,ae as H,bb as O,h as d,Q as J,bc as K,i as W,O as I,aa as w,ab as _}from"./index.92f39aa9.js";import{Q as S}from"./QBadge.372604c8.js";import{Q as X}from"./QPageSticky.dba3c21b.js";import{C as V}from"./ClosePopup.e3463706.js";import{a as z}from"./axios.49c71067.js";import{u as Y}from"./useHelpers.511b7d45.js";import{u as Z}from"./useInternet.d8fc8f2d.js";import"./QList.dd9d3cf9.js";import"./format.6008d1ac.js";import"./use-quasar.465bd151.js";const ee={class:"q-ma-lg q-pt-md"},te={class:"row q-col-gutter-lg"},ae={class:"col-12"},le=u("label",{class:"q-mr-sm row items-center"},[u("span",null,"Router: ")],-1),oe={key:1,class:"text-center row justify-center",style:{width:"100%"}},se=u("label",{class:"q-mb-sm text-grey-7 text-h6"}," Servicios de Internet ",-1),ie=[se],re=u("div",{class:"full-width row flex-center text-lime-10 q-gutter-sm"},[u("span",{class:"text-subtitle1"}," No se encontr\xF3 ningun Resultado ")],-1),_e=U({__name:"IndexPage",setup(ne){const A=[{name:"acciones",label:"acciones",align:"center"},{align:"center",label:"Nombre",field:"nombre_plan",name:"nombre_plan"},{align:"center",label:"Descargar Mbps",field:"descarga_Mbps",name:"descarga_Mbps"},{align:"center",label:"Subida Mbps",field:"subida_Mbps",name:"subida_Mbps"},{align:"center",label:"Precio",field:"precio",name:"precio_plan"},{name:"estado",label:"Estado",align:"center",field:"estado"}];let{cargarRouters:F,listRouters:b,selectedRouter:g}=Z();const{mostrarNotify:$,confirmDelete:N,isDeleted:B}=Y(),y=p(""),C=p([]),h=p(!1),f=async()=>{h.value=!0;try{b.value.length==0&&await F();let t={headers:{router_id:g.value}};const{data:l}=await z.get("/internet",t);l.forEach(e=>{e.precio=`$${e.precio_plan}`,e.estado=`${e.isActive?"Activo":"Inactivo"}`}),C.value=l}catch(t){$("warning",t.response.data.message)}h.value=!1},q=async(t,l)=>{try{const{data:{msg:e}}=await z.patch(`/internet/${t}/${l}`);$("positive",e),f()}catch(e){console.log(e)}};j(B,(t,l)=>{t&&f()});const T=async t=>{try{N("Estas seguro de eliminar este servicio de internet?",`/internet/${t}`)}catch(l){console.log(l)}};f();const n=p("list"),D=p({rowsPerPage:10});return(t,l)=>(a(),m(v,null,[u("div",ee,[u("div",te,[u("div",ae,[r(L,{flat:"",class:"shadow_custom"},{default:o(()=>[r(M,{"title-class":"text-grey-7 text-h6",title:"Servicios de Internet",rows:C.value,loading:h.value,"hide-header":n.value==="grid",columns:A,"row-key":"name",grid:n.value==="grid",filter:y.value,pagination:D.value},{header:o(e=>[r(R,{props:e,style:{height:"60px"}},{default:o(()=>[(a(!0),m(v,null,G(e.cols,s=>(a(),i(P,{key:s.name,props:e,class:"text-grey-7 text-weight-bold text-uppercase",style:{"font-size":"13px"}},{default:o(()=>[w(_(s.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"top-left":o(e=>[k(b).length>1?(a(),m("div",{key:0,style:{display:"flex"},class:H([t.$q.screen.xs?"q-mb-md":""])},[le,r(E,{outlined:"",dense:"",modelValue:k(g),"onUpdate:modelValue":[l[0]||(l[0]=s=>O(g)?g.value=s:g=s),f],"emit-value":"","map-options":"",options:k(b)},null,8,["modelValue","options"])],2)):(a(),m("div",oe,ie))]),"top-right":o(e=>[t.$q.screen.xs?c("",!0):(a(),i(d,{key:0,onClick:l[1]||(l[1]=s=>t.$router.push({name:"internet.add"})),outline:"",color:"primary",label:"Nuevo",class:"q-mr-xs"})),r(J,{style:K(t.$q.screen.width>700||"width: 70%"),outlined:"",dense:"",debounce:"300",modelValue:y.value,"onUpdate:modelValue":l[2]||(l[2]=s=>y.value=s),placeholder:"Buscar..."},{append:o(()=>[r(W,{name:"search"})]),_:1},8,["style","modelValue"]),n.value==="list"?(a(),i(d,{key:1,flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen",onClick:e.toggleFullscreen},{default:o(()=>[I((a(),i(x,{disable:t.$q.platform.is.mobile},{default:o(()=>[w(_(e.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen"),1)]),_:2},1032,["disable"])),[[V]])]),_:2},1032,["icon","onClick"])):c("",!0),e.inFullscreen?c("",!0):(a(),i(d,{key:2,flat:"",round:"",dense:"",icon:n.value==="grid"?"list":"grid_on",onClick:l[3]||(l[3]=s=>{n.value=n.value==="grid"?"list":"grid",t.separator=n.value==="grid"?"none":"horizontal"})},{default:o(()=>[I((a(),i(x,{disable:t.$q.platform.is.mobile},{default:o(()=>[w(_(n.value==="grid"?"List":"Grid"),1)]),_:1},8,["disable"])),[[V]])]),_:1},8,["icon"]))]),"body-cell-estado":o(e=>[r(Q,{props:e},{default:o(()=>[e.row.isActive?(a(),i(S,{key:0,outline:"",color:"positive",label:"Activo",class:"q-pa-sm"})):(a(),i(S,{key:1,outline:"",color:"red",label:"Inactivo",class:"q-pa-sm"}))]),_:2},1032,["props"])]),"body-cell-acciones":o(e=>[r(Q,{props:e},{default:o(()=>[e.row.isActive?(a(),i(d,{key:0,round:"",color:"blue-grey",onClick:s=>t.$router.push({name:"internet.edit",params:{id:e.row.id}}),icon:"edit",class:"q-mr-sm",size:"10px"},null,8,["onClick"])):c("",!0),e.row.isActive?(a(),m(v,{key:1},[e.row.isActive?(a(),i(d,{key:0,round:"",color:"blue-grey",icon:"close",onClick:s=>q(e.row.id,!1),size:"10px"},null,8,["onClick"])):c("",!0)],64)):(a(),m(v,{key:2},[e.row.isActive?c("",!0):(a(),i(d,{key:0,round:"",color:"blue-grey",icon:"done",onClick:s=>q(e.row.id,!0),size:"10px"},null,8,["onClick"])),e.row.isActive?c("",!0):(a(),i(d,{key:1,round:"",color:"blue-grey",class:"q-ml-sm",icon:"delete",onClick:s=>T(e.row.id),size:"10px"},null,8,["onClick"]))],64))]),_:2},1032,["props"])]),"no-data":o(({icon:e})=>[re]),_:1},8,["rows","loading","hide-header","grid","filter","pagination"])]),_:1})])])]),t.$q.screen.xs?(a(),i(X,{key:0,position:"bottom-right",offset:[18,18]},{default:o(()=>[r(d,{round:"",color:"secondary",size:"lg",icon:"add",onClick:l[4]||(l[4]=e=>t.$router.push({name:"internet.add"}))})]),_:1})):c("",!0)],64))}});export{_e as default};
