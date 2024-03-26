import{Q as L,a as _,b as G}from"./QTable.0c87703c.js";import{Q as H,a as A}from"./QTooltip.ead0a639.js";import{Q as O}from"./QSelect.fb742e75.js";import{r as g,v as X,o as a,c as n,e as d,f as i,g as s,aU as Z,a9 as r,af as u,aj as v,ai as B,ad as k,ae as J,aX as K,h as m,Q as M,aZ as W,i as x,O as F,aa as C,ab as q}from"./index.04b71378.js";import{Q as $}from"./QBadge.36ab20a5.js";import{Q as Y}from"./QPageSticky.35b34c91.js";import{C as S}from"./ClosePopup.4cd066b5.js";import{a as Q}from"./axios.bc73b9b6.js";import{u as ee}from"./useHelpers.5e8ffe27.js";import{u as ae}from"./useNap.fbefc348.js";import"./QList.83f6954b.js";import"./format.e804e329.js";import"./use-quasar.49982070.js";const te={class:"q-ma-lg q-pt-md"},le={class:"row q-col-gutter-lg"},se={class:"col-12"},oe=d("label",{class:"q-mr-sm row items-center"},[d("span",null,"Router: ")],-1),ie={key:1,class:"text-center row justify-center",style:{width:"100%"}},re=d("label",{class:"q-mb-sm text-grey-7 text-h6"}," Servicios de Internet ",-1),ne=[re],de={key:0,class:"row q-col-gutter-y-xs",style:{"min-width":"220px"}},ce={class:"col-2"},ue={class:""},me={class:"full-width row flex-center text-lime-10 q-gutter-sm"},pe=d("span",{class:"text-subtitle1"}," No se encontr\xF3 ningun Resultado ",-1),ze={__name:"IndexPage",setup(fe){let N=[];const T=[{name:"acciones",label:"acciones",align:"center"},{align:"center",label:"Nombre",field:"nombre",name:"nombre"},{align:"center",label:"Ubicaci\xF3n",field:"ubicacion",name:"ubicacion"},{align:"center",label:"Coordenadas",field:"coordenadas",name:"coordenadas"},{align:"center",label:"Puertos",name:"xd",style:"width: 200px",headerStyle:"width: 200px"},{align:"center",label:"Detalles",field:"detalles",name:"detalles"},{name:"estado",label:"Estado",align:"center",field:"estado"}];let{claim:ge,cargarRouters:D,listRouters:b,selectedRouter:p}=ae();const{mostrarNotify:z,confirmDelete:E,isDeleted:I}=ee(),y=g(""),V=g([]),w=g(!1),h=async()=>{w.value=!0;try{b.value.length==0&&await D();let l={headers:{router_id:p.value}};(await Q.get(`/customers/get-ips/${p.value}`)).data.forEach(t=>{t.puerto_id&&N.push(t.puerto_id.id)});const{data:e}=await Q.get("/caja-nap",l);e.forEach(t=>{t.puertos.sort((f,U)=>f.puerto-U.puerto),t.puertos.map(f=>{N.includes(f.id)&&(f.isActive=!1)})}),V.value=e}catch(l){z("warning",l.response.data.message)}w.value=!1},j=async(l,o)=>{try{const{data:{msg:e}}=await Q.patch(`/caja-nap/${l}/${o}`);z("positive",e),h()}catch(e){console.log(e)}};X(I,(l,o)=>{l&&h()});const P=async l=>{try{E("Estas seguro de eliminar esta Caja Nap?",`/caja-nap/${l}`)}catch(o){console.log(o)}};h();const c=g("list"),R=g({rowsPerPage:10});return(l,o)=>(a(),n(v,null,[d("div",te,[d("div",le,[d("div",se,[i(Z,{flat:"",class:"shadow_custom"},{default:s(()=>[i(L,{"title-class":"text-grey-7 text-h6",title:"Servicios de Internet",rows:V.value,loading:w.value,"hide-header":c.value==="grid",columns:T,"row-key":"name",grid:c.value==="grid",filter:y.value,pagination:R.value},{header:s(e=>[i(H,{props:e,style:{height:"60px"}},{default:s(()=>[(a(!0),n(v,null,B(e.cols,t=>(a(),r(G,{key:t.name,props:e,class:"text-grey-7 text-weight-bold text-uppercase",style:{"font-size":"13px"}},{default:s(()=>[C(q(t.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"top-left":s(e=>[k(b).length>1?(a(),n("div",{key:0,style:{display:"flex"},class:J([l.$q.screen.xs?"q-mb-md":""])},[oe,i(O,{outlined:"",dense:"",modelValue:k(p),"onUpdate:modelValue":[o[0]||(o[0]=t=>K(p)?p.value=t:p=t),h],"emit-value":"","map-options":"",options:k(b)},null,8,["modelValue","options"])],2)):(a(),n("div",ie,ne))]),"top-right":s(e=>[l.$q.screen.xs?u("",!0):(a(),r(m,{key:0,onClick:o[1]||(o[1]=t=>l.$router.push({name:"cNap.add"})),outline:"",color:"primary",label:"Nuevo",class:"q-mr-xs"})),i(M,{style:W(l.$q.screen.width>700||"width: 70%"),outlined:"",dense:"",debounce:"300",modelValue:y.value,"onUpdate:modelValue":o[2]||(o[2]=t=>y.value=t),placeholder:"Buscar..."},{append:s(()=>[i(x,{name:"search"})]),_:1},8,["style","modelValue"]),c.value==="list"?(a(),r(m,{key:1,flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen",onClick:e.toggleFullscreen},{default:s(()=>[F((a(),r(A,{disable:l.$q.platform.is.mobile},{default:s(()=>[C(q(e.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen"),1)]),_:2},1032,["disable"])),[[S]])]),_:2},1032,["icon","onClick"])):u("",!0),e.inFullscreen?u("",!0):(a(),r(m,{key:2,flat:"",round:"",dense:"",icon:c.value==="grid"?"list":"grid_on",onClick:o[3]||(o[3]=t=>{c.value=c.value==="grid"?"list":"grid",l.separator=c.value==="grid"?"none":"horizontal"})},{default:s(()=>[F((a(),r(A,{disable:l.$q.platform.is.mobile},{default:s(()=>[C(q(c.value==="grid"?"List":"Grid"),1)]),_:1},8,["disable"])),[[S]])]),_:1},8,["icon"]))]),"body-cell-xd":s(e=>[i(_,{props:e},{default:s(()=>[(a(),n("div",de,[(a(!0),n(v,null,B(e.row.puertos,({puerto:t,isActive:f})=>(a(),n("div",ce,[d("div",ue,[i($,{filled:"",color:f?"secondary":"red-9",label:t,style:{width:"30px",height:"30px","justify-content":"center"}},null,8,["color","label"])])]))),256))]))]),_:2},1032,["props"])]),"body-cell-estado":s(e=>[i(_,{props:e},{default:s(()=>[e.row.isActive?(a(),r($,{key:0,outline:"",color:"positive",label:"Activo",class:"q-pa-sm"})):(a(),r($,{key:1,outline:"",color:"red",label:"Inactivo",class:"q-pa-sm"}))]),_:2},1032,["props"])]),"body-cell-acciones":s(e=>[i(_,{props:e},{default:s(()=>[e.row.isActive?(a(),r(m,{key:0,round:"",color:"blue-grey",onClick:t=>l.$router.push({name:"cNap.edit",params:{id:e.row.id}}),icon:"edit",class:"q-mr-sm",size:"10px"},null,8,["onClick"])):u("",!0),e.row.isActive?(a(),n(v,{key:1},[e.row.isActive?(a(),r(m,{key:0,round:"",color:"blue-grey",icon:"close",onClick:t=>j(e.row.id,!1),size:"10px"},null,8,["onClick"])):u("",!0)],64)):(a(),n(v,{key:2},[e.row.isActive?u("",!0):(a(),r(m,{key:0,round:"",color:"blue-grey",icon:"done",onClick:t=>j(e.row.id,!0),size:"10px"},null,8,["onClick"])),e.row.isActive?u("",!0):(a(),r(m,{key:1,round:"",color:"blue-grey",class:"q-ml-sm",icon:"delete",onClick:t=>P(e.row.id),size:"10px"},null,8,["onClick"]))],64))]),_:2},1032,["props"])]),"no-data":s(({icon:e})=>[d("div",me,[i(x,{size:"2em",name:"sentiment_dissatisfied"}),pe,i(x,{size:"2em",name:y.value?"filter_b_and_w":e},null,8,["name"])])]),_:1},8,["rows","loading","hide-header","grid","filter","pagination"])]),_:1})])])]),l.$q.screen.xs?(a(),r(Y,{key:0,position:"bottom-right",offset:[18,18]},{default:s(()=>[i(m,{round:"",color:"secondary",size:"lg",icon:"add",onClick:o[4]||(o[4]=e=>l.$router.push({name:"cNap.add"}))})]),_:1})):u("",!0)],64))}};export{ze as default};
