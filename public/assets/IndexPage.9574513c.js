import{Q as E,a as _,b as F}from"./QTable.c7b8d510.js";import{Q as T,a as k}from"./QTooltip.3983f715.js";import{r as u,v as V,o,c as w,e as m,f as s,g as t,aP as P,a7 as r,ad as c,ah as Q,ag as I,h as d,Q as D,aU as L,i as p,N as C,a8 as v,a9 as b}from"./index.5d1f09cd.js";import{Q as q}from"./QBadge.830994ce.js";import{Q as S}from"./QPageSticky.f01c64fb.js";import{C as $}from"./ClosePopup.488eb010.js";import{a as R}from"./axios.8d86dbdf.js";import{u as G}from"./useHelpers.087d2c36.js";import"./QList.225b0277.js";import"./QSelect.c4dd2bd4.js";import"./QChip.b975933a.js";import"./QItemLabel.762c223e.js";import"./format.2bc25e5f.js";import"./use-quasar.fbb59c95.js";const H={class:"q-ma-lg q-pt-md"},j={class:"row q-col-gutter-lg"},J={class:"col-12"},K={class:"full-width row flex-center text-lime-10 q-gutter-sm"},M=m("span",{class:"text-subtitle1"}," No se encontr\xF3 ningun Resultado ",-1),ue={__name:"IndexPage",setup(O){const x=[{name:"acciones",label:"acciones",align:"center"},{name:"fullName",align:"center",label:"Nombre",field:"fullName",sortable:!0},{name:"usuario",label:"Usuario",field:"usuario",align:"center"},{name:"email",align:"center",label:"Email",field:"email"},{name:"celular",label:"Celular",field:"celular",align:"center"},{name:"rol_name",align:"center",label:"Rol",field:"rol_name"},{name:"estado",label:"Estado",align:"center",field:"estado"}],g=u(""),h=u([]),f=u(!1),{mostrarNotify:N,confirmDelete:U,isDeleted:z}=G(),y=async()=>{f.value=!0;try{const{data:a}=await R.get("/auth/users");a.forEach(l=>{l.rol_name=l.roles[0],l.estado=l.isActive?"Activo":"Inactivo"}),h.value=a}catch(a){N("warning",a.response.data.message)}f.value=!1};V(z,(a,l)=>{a&&y()});const A=async a=>{try{U("Estas seguro de eliminar este usuario?",`/auth/${a}`)}catch(l){console.log(l)}};y();const i=u("list"),B=u({rowsPerPage:10});return(a,l)=>(o(),w(Q,null,[m("div",H,[m("div",j,[m("div",J,[s(P,{flat:"",class:"shadow_custom"},{default:t(()=>[s(E,{"title-class":"text-grey-7 text-h6",title:"Listado de Usuarios",rows:h.value,loading:f.value,"hide-header":i.value==="grid",columns:x,"row-key":"name",grid:i.value==="grid",filter:g.value,pagination:B.value},{header:t(e=>[s(T,{props:e,style:{height:"60px"}},{default:t(()=>[(o(!0),w(Q,null,I(e.cols,n=>(o(),r(F,{key:n.name,props:e,class:"text-grey-7 text-weight-bold text-uppercase",style:{"font-size":"13px"}},{default:t(()=>[v(b(n.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"top-right":t(e=>[a.$q.screen.xs?c("",!0):(o(),r(d,{key:0,onClick:l[0]||(l[0]=n=>a.$router.push({name:"Agregar Usuario"})),outline:"",color:"primary",label:"Agregar Usuario",class:"q-mr-xs"})),s(D,{style:L(a.$q.screen.width>700||"width: 70%"),outlined:"",dense:"",debounce:"300",modelValue:g.value,"onUpdate:modelValue":l[1]||(l[1]=n=>g.value=n),placeholder:"Buscar..."},{append:t(()=>[s(p,{name:"search"})]),_:1},8,["style","modelValue"]),i.value==="list"?(o(),r(d,{key:1,flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen",onClick:e.toggleFullscreen},{default:t(()=>[C((o(),r(k,{disable:a.$q.platform.is.mobile},{default:t(()=>[v(b(e.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen"),1)]),_:2},1032,["disable"])),[[$]])]),_:2},1032,["icon","onClick"])):c("",!0),e.inFullscreen?c("",!0):(o(),r(d,{key:2,flat:"",round:"",dense:"",icon:i.value==="grid"?"list":"grid_on",onClick:l[2]||(l[2]=n=>{i.value=i.value==="grid"?"list":"grid",a.separator=i.value==="grid"?"none":"horizontal"})},{default:t(()=>[C((o(),r(k,{disable:a.$q.platform.is.mobile},{default:t(()=>[v(b(i.value==="grid"?"List":"Grid"),1)]),_:1},8,["disable"])),[[$]])]),_:1},8,["icon"]))]),"body-cell-estado":t(e=>[s(_,{props:e},{default:t(()=>[e.row.isActive?(o(),r(q,{key:0,outline:"",color:"positive",label:"Activo",class:"q-pa-sm"})):(o(),r(q,{key:1,outline:"",color:"red",label:"Inactivo",class:"q-pa-sm"}))]),_:2},1032,["props"])]),"body-cell-acciones":t(e=>[s(_,{props:e},{default:t(()=>[s(d,{round:"",color:"blue-grey",onClick:n=>a.$router.push({name:"Editar Usuario",params:{term:e.row.id}}),icon:"edit",class:"q-mr-sm",size:"11px"},null,8,["onClick"]),e.row.estado=="Activo"?(o(),r(d,{key:0,round:"",color:"blue-grey",class:"q-ml-sm",icon:"delete",onClick:n=>A(e.row.id),size:"11px"},null,8,["onClick"])):c("",!0)]),_:2},1032,["props"])]),"no-data":t(({icon:e})=>[m("div",K,[s(p,{size:"2em",name:"sentiment_dissatisfied"}),M,s(p,{size:"2em",name:g.value?"filter_b_and_w":e},null,8,["name"])])]),_:1},8,["rows","loading","hide-header","grid","filter","pagination"])]),_:1})])])]),a.$q.screen.xs?(o(),r(S,{key:0,position:"bottom-right",offset:[18,18]},{default:t(()=>[s(d,{round:"",color:"secondary",size:"lg",icon:"add",onClick:l[3]||(l[3]=e=>a.$router.push({name:"Agregar Usuario"}))})]),_:1})):c("",!0)],64))}};export{ue as default};
