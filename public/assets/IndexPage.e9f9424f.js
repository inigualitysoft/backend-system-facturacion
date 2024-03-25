import{Q as Y,a as T,b as Z}from"./QTable.37c20cdb.js";import{Q as J,a as B}from"./QTooltip.01e3a258.js";import{d as R,o as r,a9 as i,g as a,aU as U,f as l,e as p,aa as h,O as $,h as c,aV as N,ah as K,r as y,v as S,c as k,ad as n,af as m,aX as g,aY as A,aj as w,ai as M,Q as W,aZ as ee,i as Q,ab as P}from"./index.ad0f1a33.js";import{Q as I}from"./QBadge.295e8592.js";import{Q as ae}from"./QPageSticky.84496238.js";import{C as q}from"./ClosePopup.2559bc98.js";import{a as L}from"./axios.89b97088.js";import{u as oe}from"./useHelpers.9e513d04.js";import{_ as le,u as te,a as re}from"./AddProveedor.0c65b553.js";import{u as se}from"./useRolPermisos.b9cb57f7.js";import"./QList.b1d39dec.js";import"./QSelect.70d53dd2.js";import"./format.0be0c6a3.js";import"./use-quasar.4c29637a.js";import"./QForm.29524382.js";const ie={class:"text-h6 text-center"},ne=R({__name:"EditProveedor",setup(j){return(z,_)=>(r(),i(U,{style:{width:"740px !important","max-width":"fit-content"}},{default:a(()=>[l(N,null,{default:a(()=>[p("div",ie,[h(" Editar Proveedor "),$(l(c,{round:"",flat:"",dense:"",icon:"close",class:"float-right",color:"grey-8"},null,512),[[q]])])]),_:1}),l(K,{inset:""}),l(N,{class:"q-pt-none"},{default:a(()=>[l(le,{edit:!0})]),_:1})]),_:1}))}}),de={class:"q-ma-lg q-pt-md"},ce={class:"row q-col-gutter-lg"},ue={class:"col-12"},me={class:"full-width row flex-center text-lime-10 q-gutter-sm"},fe=p("span",{class:"text-subtitle1"}," No se encontr\xF3 ningun Resultado ",-1),ze=R({__name:"IndexPage",setup(j){const z=[{name:"acciones",label:"acciones",align:"center"},{name:"razon_social",align:"center",label:"Razon Social",field:"razon_social",sortable:!0},{name:"tipo_documento",align:"center",label:"Tipo de Documento",field:"tipo_documento"},{name:"numero_documento",align:"center",label:"Numero de Documento",field:"numero_documento"},{name:"email",label:"Email",field:"email",align:"center"},{name:"celular",label:"Celular",field:"celular",align:"center"},{name:"estado",label:"Estado",align:"center",field:"estado"}],_=y(""),V=y([]),{validarPermisos:v}=se();let{actualizarLista:D,modalAgregarProveedor:s,modalEditarProveedor:f,formProveedor:x}=te();const C=y(!1),{mostrarNotify:E,confirmDelete:G,isDeleted:H}=oe(),b=async()=>{C.value=!0;try{const{data:o}=await L.get("/providers");V.value=o}catch(o){console.log(o),E("warning",o.response.data.message)}C.value=!1},F=async(o,t)=>{try{const{data:{msg:e}}=await L.patch(`/providers/${o}/${t}`);E("positive",e),b()}catch(e){console.log(e)}};S(D,(o,t)=>{o&&(b(),D.value=!1)}),S(H,(o,t)=>{o&&b()});const O=async o=>{try{G("Estas seguro de eliminar este proveedor?",`/providers/${o}`)}catch(t){console.log(t)}};b();const u=y("list"),X=y({rowsPerPage:10});return(o,t)=>(r(),k(w,null,[p("div",de,[p("div",ce,[p("div",ue,[l(U,{flat:"",class:"shadow_custom"},{default:a(()=>[l(Y,{"title-class":"text-grey-7 text-h6",title:"Listado de Proveedores",rows:V.value,loading:C.value,"hide-header":u.value==="grid",columns:z,"row-key":"name",grid:u.value==="grid",filter:_.value,pagination:X.value},{header:a(e=>[l(J,{props:e,style:{height:"60px"}},{default:a(()=>[(r(!0),k(w,null,M(e.cols,d=>(r(),i(Z,{key:d.name,props:e,class:"text-grey-7 text-weight-bold text-uppercase",style:{"font-size":"13px"}},{default:a(()=>[h(P(d.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"top-right":a(e=>[!o.$q.screen.xs&&n(v)("crear.proveedor")?(r(),i(c,{key:0,onClick:t[0]||(t[0]=d=>g(s)?s.value=!n(s):s=!n(s)),outline:"",color:"primary",label:"Agregar Proveedor",class:"q-mr-xs"})):m("",!0),l(W,{style:ee(o.$q.screen.width>700||"width: 70%"),outlined:"",dense:"",debounce:"300",modelValue:_.value,"onUpdate:modelValue":t[1]||(t[1]=d=>_.value=d),placeholder:"Buscar..."},{append:a(()=>[l(Q,{name:"search"})]),_:1},8,["style","modelValue"]),u.value==="list"?(r(),i(c,{key:1,flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen",onClick:e.toggleFullscreen},{default:a(()=>[$((r(),i(B,{disable:o.$q.platform.is.mobile},{default:a(()=>[h(P(e.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen"),1)]),_:2},1032,["disable"])),[[q]])]),_:2},1032,["icon","onClick"])):m("",!0),e.inFullscreen?m("",!0):(r(),i(c,{key:2,flat:"",round:"",dense:"",icon:u.value==="grid"?"list":"grid_on",onClick:t[2]||(t[2]=d=>{u.value=u.value==="grid"?"list":"grid",o.separator=u.value==="grid"?"none":"horizontal"})},{default:a(()=>[$((r(),i(B,{disable:o.$q.platform.is.mobile},{default:a(()=>[h(P(u.value==="grid"?"List":"Grid"),1)]),_:1},8,["disable"])),[[q]])]),_:1},8,["icon"]))]),"body-cell-estado":a(e=>[l(T,{props:e},{default:a(()=>[e.row.isActive?(r(),i(I,{key:0,outline:"",color:"positive",label:"Activo",class:"q-pa-sm"})):(r(),i(I,{key:1,outline:"",color:"red",label:"Inactivo",class:"q-pa-sm"}))]),_:2},1032,["props"])]),"body-cell-acciones":a(e=>[l(T,{props:e},{default:a(()=>[e.row.isActive?(r(),k(w,{key:0},[n(v)("editar.proveedor")?(r(),i(c,{key:0,round:"",color:"blue-grey",onClick:d=>(g(x)?x.value={...e.row}:x={...e.row},g(f)?f.value=!0:f=!0),icon:"edit",class:"q-mr-sm",size:"10px"},null,8,["onClick"])):m("",!0),n(v)("inactivar.proveedor")?(r(),i(c,{key:1,round:"",color:"blue-grey",icon:"close",onClick:d=>F(e.row.id,!1),size:"10px"},null,8,["onClick"])):m("",!0)],64)):(r(),k(w,{key:1},[n(v)("activar.proveedor")?(r(),i(c,{key:0,round:"",color:"blue-grey",icon:"done",onClick:d=>F(e.row.id,!0),size:"10px"},null,8,["onClick"])):m("",!0),!e.row.estado&&n(v)("eliminar.proveedor")?(r(),i(c,{key:1,round:"",color:"blue-grey",class:"q-ml-sm",icon:"delete",onClick:d=>O(e.row.id),size:"10px"},null,8,["onClick"])):m("",!0)],64))]),_:2},1032,["props"])]),"no-data":a(({icon:e})=>[p("div",me,[l(Q,{size:"2em",name:"sentiment_dissatisfied"}),fe,l(Q,{size:"2em",name:_.value?"filter_b_and_w":e},null,8,["name"])])]),_:1},8,["rows","loading","hide-header","grid","filter","pagination"])]),_:1})])])]),o.$q.screen.xs&&n(v)("crear.proveedor")?(r(),i(ae,{key:0,position:"bottom-right",offset:[18,18]},{default:a(()=>[l(c,{round:"",color:"secondary",size:"lg",icon:"add",onClick:t[3]||(t[3]=e=>g(s)?s.value=!n(s):s=!n(s))})]),_:1})):m("",!0),l(A,{modelValue:n(s),"onUpdate:modelValue":t[4]||(t[4]=e=>g(s)?s.value=e:s=e)},{default:a(()=>[l(re)]),_:1},8,["modelValue"]),l(A,{modelValue:n(f),"onUpdate:modelValue":t[5]||(t[5]=e=>g(f)?f.value=e:f=e)},{default:a(()=>[l(ne)]),_:1},8,["modelValue"])],64))}});export{ze as default};
