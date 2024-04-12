import{Q as V}from"./QInnerLoading.30729cec.js";import{Q as E,a as I}from"./QTable.df421c74.js";import{Q as N,a as k}from"./QTooltip.91751e8e.js";import{d as $,r as u,C as R,o as r,c as m,e as p,f as l,g as a,aU as z,aj as U,ai as A,Q as L,bc as S,i as D,a9 as c,O as x,aa as v,ab as _,h,af as w,ad as H}from"./index.b06266f8.js";import{Q}from"./QTd.f67bd005.js";import{Q as j}from"./QBadge.a4a1953d.js";import{C}from"./ClosePopup.7ee02aea.js";import{u as G}from"./useHelpers.0f2d5882.js";import{u as M}from"./useRolPermisos.535e99b6.js";import"./QList.07058183.js";import"./QSelect.13f7c12a.js";import"./format.96727fdf.js";import"./use-quasar.cc618dc1.js";import"./axios.6714b63a.js";const O={class:"q-ma-lg q-pt-md"},J={class:"row q-col-gutter-lg"},K={class:"col-12"},W={key:0},X={key:1},Y=p("div",{class:"full-width row flex-center text-lime-10 q-gutter-sm"},[p("span",{class:"text-subtitle1"}," No se encontr\xF3 ningun Resultado ")],-1),ge=$({__name:"IndexPage",setup(Z){const P=[{name:"acciones",label:"acciones",align:"center"},{name:"empresa_name",label:"Empresa",align:"center",field:"empresa_name"},{name:"host",label:"Host",align:"center",field:"host"},{name:"puerto",label:"Puerto",align:"center",field:"puerto"},{name:"usuario",label:"Usuario",align:"center",field:"usuario"},{name:"password",label:"Contrase\xF1a",align:"center",field:"password"}],{api:q}=G(),{validarPermisos:B}=M(),y=u([]),g=u(""),b=u(),f=u(!1),d=u({sortBy:"desc",descending:!1,page:1,rowsPerPage:5,rowsNumber:5}),F=async(i=1,t=5,e=null)=>{try{const{data:o}=await q.get("/email");o.forEach(s=>{s.empresa_name=s.company_id.nombre_comercial,s.host=s.host==""?"----------":s.host,s.usuario=s.usuario==""?"----------":s.usuario,s.password=s.password==""?"----------":s.password}),y.value=o}catch(o){console.log(o)}};async function T(i){const{page:t,rowsPerPage:e,sortBy:o,descending:s}=i.pagination;f.value=!0,await F(t,e),d.value.page=t,d.value.rowsPerPage=e,d.value.sortBy=o,d.value.descending=s,f.value=!1}R(()=>{b.value.requestServerInteraction()});const n=u("list");return(i,t)=>(r(),m("div",O,[p("div",J,[p("div",K,[l(z,{flat:"",class:"shadow_custom"},{default:a(()=>[l(E,{"title-class":"text-grey-7 text-h6",title:"Emails Config",rows:y.value,loading:f.value,"hide-header":n.value==="grid",columns:P,"row-key":"name",grid:n.value==="grid",filter:g.value,pagination:d.value,"onUpdate:pagination":t[2]||(t[2]=e=>d.value=e),"rows-per-page-options":[3,7,15,0],ref_key:"tableRef",ref:b,"binary-state-sort":"",onRequest:T},{loading:a(()=>[l(V,{showing:"",color:"primary"})]),header:a(e=>[l(N,{props:e,style:{height:"60px"}},{default:a(()=>[(r(!0),m(U,null,A(e.cols,o=>(r(),c(I,{key:o.name,props:e,class:"text-grey-7 text-weight-bold text-uppercase",style:{"font-size":"13px"}},{default:a(()=>[v(_(o.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"top-right":a(e=>[l(L,{style:S(i.$q.screen.width>700||"width: 70%"),outlined:"",dense:"",debounce:"300",modelValue:g.value,"onUpdate:modelValue":t[0]||(t[0]=o=>g.value=o),placeholder:"Buscar..."},{append:a(()=>[l(D,{name:"search"})]),_:1},8,["style","modelValue"]),n.value==="list"?(r(),c(h,{key:0,flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen",onClick:e.toggleFullscreen},{default:a(()=>[x((r(),c(k,{disable:i.$q.platform.is.mobile},{default:a(()=>[v(_(e.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen"),1)]),_:2},1032,["disable"])),[[C]])]),_:2},1032,["icon","onClick"])):w("",!0),e.inFullscreen?w("",!0):(r(),c(h,{key:1,flat:"",round:"",dense:"",icon:n.value==="grid"?"list":"grid_on",onClick:t[1]||(t[1]=o=>{n.value=n.value==="grid"?"list":"grid",i.separator=n.value==="grid"?"none":"horizontal"})},{default:a(()=>[x((r(),c(k,{disable:i.$q.platform.is.mobile},{default:a(()=>[v(_(n.value==="grid"?"List":"Grid"),1)]),_:1},8,["disable"])),[[C]])]),_:1},8,["icon"]))]),"body-cell-acciones":a(e=>[l(Q,{props:e},{default:a(()=>[H(B)("editar.correo")?(r(),c(h,{key:0,round:"",color:"blue-grey",onClick:o=>i.$router.push({name:"email.edit",params:{email_id:e.row.company_id.id}}),icon:"edit",class:"q-mr-sm",size:"12px"},null,8,["onClick"])):w("",!0)]),_:2},1032,["props"])]),"body-cell-estado":a(e=>[l(Q,{props:e},{default:a(()=>[l(j,{outline:"",class:"q-py-xs q-px-md",color:e.row.isActive?"positive":"dark"},{default:a(()=>[e.row.isActive?(r(),m("span",W,"Activo")):(r(),m("span",X,"Inactivo"))]),_:2},1032,["color"])]),_:2},1032,["props"])]),"no-data":a(({icon:e})=>[Y]),_:1},8,["rows","loading","hide-header","grid","filter","pagination"])]),_:1})])])]))}});export{ge as default};
