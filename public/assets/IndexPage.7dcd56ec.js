import{Q as B,a as h,b as F}from"./QTable.a6eed54e.js";import{Q as N,a as f}from"./QTooltip.607ea652.js";import{r as p,v as P,o,c as u,e as m,f as n,g as t,aU as V,a9 as i,af as c,aj as b,ad as S,ai as Y,h as d,Q as L,bc as M,i as U,O as q,aa as g,ab as k}from"./index.e3eab811.js";import{Q as D}from"./QBadge.2f39c146.js";import{Q as R}from"./QPageSticky.fbad4b5f.js";import{C as I}from"./ClosePopup.f52126f3.js";import{u as j}from"./useCliente.3a064c3f.js";import{d as G}from"./date.1b4823d8.js";import"./QList.876a2ede.js";import"./QSelect.57fbc56d.js";import"./format.cdb105f3.js";import"./useHelpers.ba7357b2.js";import"./use-quasar.b74492d8.js";import"./axios.f0c5ece9.js";const O={class:"q-ma-lg q-pt-md"},H={class:"row q-col-gutter-lg"},J={class:"col-12"},K={key:0},W={key:1},X={key:2},Z=m("div",{class:"full-width row flex-center text-lime-10 q-gutter-sm"},[m("span",{class:"text-subtitle1"}," No se encontr\xF3 ningun Resultado ")],-1),pe={__name:"IndexPage",setup(ee){const T=[{name:"acciones",label:"acciones",align:"center"},{name:"nombre",align:"center",label:"Cliente",field:"nombres",sortable:!0},{name:"ip",align:"center",label:"IP",field:"ip",sortable:!0},{name:"direccion",align:"center",label:"Direcci\xF3n Servicio",field:"direccion",sortable:!0},{name:"tipo_documento",align:"center",label:"T. Doc.",field:"tipo_documento"},{name:"numero_documento",align:"center",label:"Num. de Doc.",field:"numero_documento"},{name:"email",label:"Email",field:"email",align:"center"},{name:"celular",label:"Movil",field:"celular",align:"center"},{name:"instalado",label:"Instalado",field:"instalado",align:"center"},{name:"total_cobrar",label:"Total Cobrar",field:"total_cobrar",align:"center"},{name:"estado",label:"Estado",align:"center",field:"estado"}];let{api:w,mostrarNotify:C,confirmDelete:z,isDeleted:E,loading:v}=j();const y=p(""),$=p([]),_=async()=>{v.value=!0;try{const{data:a}=await w.get("/customers");a.length>0&&(a.forEach(l=>{l.ip=l.planInternet[0].ipv4,l.total_cobrar=`$${l.planInternet[0].precio}`,l.direccion=`${l.planInternet[0].direccion==""?"- - - - - -":l.planInternet[0].direccion}`,l.instalado=G.formatDate(l.planInternet[0].fecha_instalacion,"DD/MM/YYYY")}),$.value=a)}catch(a){C("warning",a.response.data.message)}v.value=!1},Q=async(a,l)=>{try{const{data:{msg:e}}=await w.patch(`/customers/${a}/${l}`);C("positive",e),_()}catch(e){console.log(e)}};P(E,(a,l)=>{a&&_()});const x=async a=>{try{z("Estas seguro de eliminar este cliente?",`/customers/${a}`)}catch(l){console.log(l)}};_();const s=p("list"),A=p({rowsPerPage:10});return(a,l)=>(o(),u(b,null,[m("div",O,[m("div",H,[m("div",J,[n(V,{flat:"",class:"shadow_custom"},{default:t(()=>[n(B,{"title-class":"text-grey-7 text-h6",title:"Listado de Clientes",rows:$.value,loading:S(v),"hide-header":s.value==="grid",columns:T,"row-key":"name",grid:s.value==="grid",filter:y.value,pagination:A.value},{header:t(e=>[n(N,{props:e,style:{height:"60px"}},{default:t(()=>[(o(!0),u(b,null,Y(e.cols,r=>(o(),i(F,{key:r.name,props:e,class:"text-grey-7 text-weight-bold text-uppercase",style:{"font-size":"13px"}},{default:t(()=>[g(k(r.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"top-right":t(e=>[a.$q.screen.xs?c("",!0):(o(),i(d,{key:0,onClick:l[0]||(l[0]=r=>a.$router.push({name:"cliente.add"})),outline:"",color:"primary",label:"Agregar Cliente",class:"q-mr-xs"})),n(L,{style:M(a.$q.screen.width>700||"width: 70%"),outlined:"",dense:"",debounce:"300",modelValue:y.value,"onUpdate:modelValue":l[1]||(l[1]=r=>y.value=r),placeholder:"Buscar..."},{append:t(()=>[n(U,{name:"search"})]),_:1},8,["style","modelValue"]),s.value==="list"?(o(),i(d,{key:1,flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen",onClick:e.toggleFullscreen},{default:t(()=>[q((o(),i(f,{disable:a.$q.platform.is.mobile},{default:t(()=>[g(k(e.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen"),1)]),_:2},1032,["disable"])),[[I]])]),_:2},1032,["icon","onClick"])):c("",!0),e.inFullscreen?c("",!0):(o(),i(d,{key:2,flat:"",round:"",dense:"",icon:s.value==="grid"?"list":"grid_on",onClick:l[2]||(l[2]=r=>{s.value=s.value==="grid"?"list":"grid",a.separator=s.value==="grid"?"none":"horizontal"})},{default:t(()=>[q((o(),i(f,{disable:a.$q.platform.is.mobile},{default:t(()=>[g(k(s.value==="grid"?"List":"Grid"),1)]),_:1},8,["disable"])),[[I]])]),_:1},8,["icon"]))]),"body-cell-tipo_documento":t(e=>[n(h,{props:e},{default:t(()=>[m("div",null,[e.row.tipo_documento==4?(o(),u("label",K,"RUC")):e.row.tipo_documento==5?(o(),u("label",W,"Cedula")):(o(),u("label",X,"Pasaporte"))])]),_:2},1032,["props"])]),"body-cell-estado":t(e=>[n(h,{props:e},{default:t(()=>[e.row.isActive?(o(),i(D,{key:0,outline:"",color:"positive",label:"Activo",class:"q-pa-sm"})):(o(),i(D,{key:1,outline:"",color:"red",label:"Inactivo",class:"q-pa-sm"}))]),_:2},1032,["props"])]),"body-cell-acciones":t(e=>[n(h,{props:e},{default:t(()=>[e.row.isActive?(o(),i(d,{key:0,round:"",color:"blue-grey",onClick:r=>a.$router.push({name:"cliente.edit",params:{client_id:e.row.id}}),icon:"edit",class:"q-mr-sm",size:"10px"},{default:t(()=>[n(f,{class:"bg-indigo",anchor:"top middle",self:"center middle"},{default:t(()=>[g(" Editar ")]),_:1})]),_:2},1032,["onClick"])):c("",!0),e.row.isActive?(o(),u(b,{key:1},[e.row.isActive?(o(),i(d,{key:0,round:"",color:"blue-grey",icon:"close",onClick:r=>Q(e.row.id,!1),size:"10px"},null,8,["onClick"])):c("",!0)],64)):(o(),u(b,{key:2},[e.row.isActive?c("",!0):(o(),i(d,{key:0,round:"",color:"blue-grey",icon:"done",onClick:r=>Q(e.row.id,!0),size:"10px"},null,8,["onClick"])),e.row.estado?c("",!0):(o(),i(d,{key:1,round:"",color:"blue-grey",class:"q-ml-sm",icon:"delete",onClick:r=>x(e.row.id),size:"10px"},{default:t(()=>[n(f,{class:"bg-indigo",anchor:"top middle",self:"center middle"},{default:t(()=>[g(" Eliminar ")]),_:1})]),_:2},1032,["onClick"]))],64))]),_:2},1032,["props"])]),"no-data":t(({icon:e})=>[Z]),_:1},8,["rows","loading","hide-header","grid","filter","pagination"])]),_:1})])])]),a.$q.screen.xs?(o(),i(R,{key:0,position:"bottom-right",offset:[18,18]},{default:t(()=>[n(d,{round:"",color:"secondary",size:"lg",icon:"add",onClick:l[3]||(l[3]=e=>a.$router.push({name:"cliente.add"}))})]),_:1})):c("",!0)],64))}};export{pe as default};
