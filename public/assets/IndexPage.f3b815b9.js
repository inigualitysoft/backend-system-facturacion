import{Q as J,a as A,b as K}from"./QTable.ec89ebde.js";import{Q as M,a as E}from"./QTooltip.eed8b34b.js";import{d as L,o as r,ad as s,g as a,aP as R,f as l,e as v,ae as k,R as P,h as d,aQ as F,O as W,r as _,D as B,c as w,aj as u,ah as f,aS as g,aT as N,am as b,al as X,Q as Y,aU as Z,i as C,af as Q}from"./index.d41bbc77.js";import{Q as S}from"./QBadge.05c368ae.js";import{Q as ee}from"./QPageSticky.b833ab6b.js";import{C as $}from"./ClosePopup.1e4fc19e.js";import{api as I}from"./axios.285a4291.js";import{u as ae}from"./useHelpers.26f595d3.js";import{_ as oe,u as le,a as te}from"./AddProveedor.83770ded.js";import"./QList.fa60a52c.js";import"./QSelect.e2298bca.js";import"./QChip.3f015bda.js";import"./QItemLabel.3788c9ad.js";import"./format.2bc25e5f.js";import"./use-quasar.312cdeb8.js";import"./QForm.430f58c0.js";const re={class:"text-h6 text-center"},ie=L({__name:"EditProveedor",setup(U){return(q,p)=>(r(),s(R,{style:{width:"740px !important","max-width":"fit-content"}},{default:a(()=>[l(F,null,{default:a(()=>[v("div",re,[k(" Editar Proveedor "),P(l(d,{round:"",flat:"",dense:"",icon:"close",class:"float-right",color:"grey-8"},null,512),[[$]])])]),_:1}),l(W,{inset:""}),l(F,{class:"q-pt-none"},{default:a(()=>[l(oe,{edit:!0})]),_:1})]),_:1}))}}),se={class:"q-ma-lg q-pt-md"},ne={class:"row q-col-gutter-lg"},de={class:"col-12"},ce={class:"full-width row flex-center text-lime-10 q-gutter-sm"},ue=v("span",{class:"text-subtitle1"}," No se encontr\xF3 ningun Resultado ",-1),qe=L({__name:"IndexPage",setup(U){const q=[{name:"acciones",label:"acciones",align:"center"},{name:"razon_social",align:"center",label:"Razon Social",field:"razon_social",sortable:!0},{name:"tipo_documento",align:"center",label:"Tipo de Documento",field:"tipo_documento"},{name:"numero_documento",align:"center",label:"Numero de Documento",field:"numero_documento"},{name:"email",label:"Email",field:"email",align:"center"},{name:"celular",label:"Celular",field:"celular",align:"center"},{name:"estado",label:"Estado",align:"center",field:"estado"}],p=_(""),z=_([]);let{actualizarLista:V,modalAgregarProveedor:i,modalEditarProveedor:m,formProveedor:h}=le();const x=_(!1),{mostrarNotify:D,confirmDelete:j,isDeleted:G}=ae(),y=async()=>{x.value=!0;try{const{data:o}=await I.get("/providers");z.value=o}catch(o){console.log(o),D("warning",o.response.data.message)}x.value=!1},T=async(o,t)=>{try{const{data:{msg:e}}=await I.patch(`/providers/${o}/${t}`);D("positive",e),y()}catch(e){console.log(e)}};B(V,(o,t)=>{o&&(y(),V.value=!1)}),B(G,(o,t)=>{o&&y()});const H=async o=>{try{j("Estas seguro de eliminar este proveedor?",`/providers/${o}`)}catch(t){console.log(t)}};y();const c=_("list"),O=_({rowsPerPage:10});return(o,t)=>(r(),w(b,null,[v("div",se,[v("div",ne,[v("div",de,[l(R,{flat:"",class:"shadow_custom"},{default:a(()=>[l(J,{"title-class":"text-grey-7 text-h6",title:"Listado de Proveedores",rows:z.value,loading:x.value,"hide-header":c.value==="grid",columns:q,"row-key":"name",grid:c.value==="grid",filter:p.value,pagination:O.value},{header:a(e=>[l(M,{props:e,style:{height:"60px"}},{default:a(()=>[(r(!0),w(b,null,X(e.cols,n=>(r(),s(K,{key:n.name,props:e,class:"text-grey-7 text-weight-bold text-uppercase",style:{"font-size":"13px"}},{default:a(()=>[k(Q(n.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"top-right":a(e=>[o.$q.screen.xs?u("",!0):(r(),s(d,{key:0,onClick:t[0]||(t[0]=n=>g(i)?i.value=!f(i):i=!f(i)),outline:"",color:"primary",label:"Agregar Proveedor",class:"q-mr-xs"})),l(Y,{style:Z(o.$q.screen.width>700||"width: 70%"),outlined:"",dense:"",debounce:"300",modelValue:p.value,"onUpdate:modelValue":t[1]||(t[1]=n=>p.value=n),placeholder:"Buscar..."},{append:a(()=>[l(C,{name:"search"})]),_:1},8,["style","modelValue"]),c.value==="list"?(r(),s(d,{key:1,flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen",onClick:e.toggleFullscreen},{default:a(()=>[P((r(),s(E,{disable:o.$q.platform.is.mobile},{default:a(()=>[k(Q(e.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen"),1)]),_:2},1032,["disable"])),[[$]])]),_:2},1032,["icon","onClick"])):u("",!0),e.inFullscreen?u("",!0):(r(),s(d,{key:2,flat:"",round:"",dense:"",icon:c.value==="grid"?"list":"grid_on",onClick:t[2]||(t[2]=n=>{c.value=c.value==="grid"?"list":"grid",o.separator=c.value==="grid"?"none":"horizontal"})},{default:a(()=>[P((r(),s(E,{disable:o.$q.platform.is.mobile},{default:a(()=>[k(Q(c.value==="grid"?"List":"Grid"),1)]),_:1},8,["disable"])),[[$]])]),_:1},8,["icon"]))]),"body-cell-estado":a(e=>[l(A,{props:e},{default:a(()=>[e.row.isActive?(r(),s(S,{key:0,outline:"",color:"positive",label:"Activo",class:"q-pa-sm"})):(r(),s(S,{key:1,outline:"",color:"red",label:"Inactivo",class:"q-pa-sm"}))]),_:2},1032,["props"])]),"body-cell-acciones":a(e=>[l(A,{props:e},{default:a(()=>[e.row.isActive?(r(),s(d,{key:0,round:"",color:"blue-grey",onClick:n=>(g(h)?h.value={...e.row}:h={...e.row},g(m)?m.value=!0:m=!0),icon:"edit",class:"q-mr-sm",size:"10px"},null,8,["onClick"])):u("",!0),e.row.isActive?(r(),w(b,{key:1},[e.row.isActive?(r(),s(d,{key:0,round:"",color:"blue-grey",icon:"close",onClick:n=>T(e.row.id,!1),size:"10px"},null,8,["onClick"])):u("",!0)],64)):(r(),w(b,{key:2},[e.row.isActive?u("",!0):(r(),s(d,{key:0,round:"",color:"blue-grey",icon:"done",onClick:n=>T(e.row.id,!0),size:"10px"},null,8,["onClick"])),e.row.estado?u("",!0):(r(),s(d,{key:1,round:"",color:"blue-grey",class:"q-ml-sm",icon:"delete",onClick:n=>H(e.row.id),size:"10px"},null,8,["onClick"]))],64))]),_:2},1032,["props"])]),"no-data":a(({icon:e})=>[v("div",ce,[l(C,{size:"2em",name:"sentiment_dissatisfied"}),ue,l(C,{size:"2em",name:p.value?"filter_b_and_w":e},null,8,["name"])])]),_:1},8,["rows","loading","hide-header","grid","filter","pagination"])]),_:1})])])]),o.$q.screen.xs?(r(),s(ee,{key:0,position:"bottom-right",offset:[18,18]},{default:a(()=>[l(d,{round:"",color:"secondary",size:"lg",icon:"add",onClick:t[3]||(t[3]=e=>g(i)?i.value=!f(i):i=!f(i))})]),_:1})):u("",!0),l(N,{modelValue:f(i),"onUpdate:modelValue":t[4]||(t[4]=e=>g(i)?i.value=e:i=e)},{default:a(()=>[l(te)]),_:1},8,["modelValue"]),l(N,{modelValue:f(m),"onUpdate:modelValue":t[5]||(t[5]=e=>g(m)?m.value=e:m=e)},{default:a(()=>[l(ie)]),_:1},8,["modelValue"])],64))}});export{qe as default};
