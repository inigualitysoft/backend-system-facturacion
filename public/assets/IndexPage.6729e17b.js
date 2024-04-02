import{Q as V,a as k,b as E}from"./QTable.a6eed54e.js";import{Q as N,a as x}from"./QTooltip.607ea652.js";import{d as $,r as u,C as I,o as l,c as p,e as m,f as i,g as a,aU as R,aj as z,ai as U,Q as A,bc as S,i as D,a9 as c,O as C,aa as v,ab as _,h,af as w,ad as H}from"./index.e3eab811.js";import{Q as L}from"./QBadge.2f39c146.js";import{C as Q}from"./ClosePopup.f52126f3.js";import{u as j}from"./useHelpers.ba7357b2.js";import{u as G}from"./useRolPermisos.ba10dfd6.js";import"./QList.876a2ede.js";import"./QSelect.57fbc56d.js";import"./format.cdb105f3.js";import"./use-quasar.b74492d8.js";import"./axios.f0c5ece9.js";const M={class:"q-ma-lg q-pt-md"},O={class:"row q-col-gutter-lg"},J={class:"col-12"},K={key:0},W={key:1},X=m("div",{class:"full-width row flex-center text-lime-10 q-gutter-sm"},[m("span",{class:"text-subtitle1"}," No se encontr\xF3 ningun Resultado ")],-1),ce=$({__name:"IndexPage",setup(Y){const P=[{name:"acciones",label:"acciones",align:"center"},{name:"empresa_name",label:"Empresa",align:"center",field:"empresa_name"},{name:"host",label:"Host",align:"center",field:"host"},{name:"puerto",label:"Puerto",align:"center",field:"puerto"},{name:"usuario",label:"Usuario",align:"center",field:"usuario"},{name:"password",label:"Contrase\xF1a",align:"center",field:"password"}],{api:q}=j(),{validarPermisos:B}=G(),y=u([]),g=u(""),b=u(),f=u(!1),d=u({sortBy:"desc",descending:!1,page:1,rowsPerPage:5,rowsNumber:5}),F=async(n=1,o=5,e=null)=>{try{const{data:s}=await q.get("/email");s.forEach(t=>{t.empresa_name=t.company_id.nombre_comercial,t.host=t.host==""?"----------":t.host,t.usuario=t.usuario==""?"----------":t.usuario,t.password=t.password==""?"----------":t.password}),y.value=s}catch(s){console.log(s)}};async function T(n){const{page:o,rowsPerPage:e,sortBy:s,descending:t}=n.pagination;f.value=!0,await F(o,e),d.value.page=o,d.value.rowsPerPage=e,d.value.sortBy=s,d.value.descending=t,f.value=!1}I(()=>{b.value.requestServerInteraction()});const r=u("list");return(n,o)=>(l(),p("div",M,[m("div",O,[m("div",J,[i(R,{flat:"",class:"shadow_custom"},{default:a(()=>[i(V,{"title-class":"text-grey-7 text-h6",title:"Emails Config",rows:y.value,loading:f.value,"hide-header":r.value==="grid",columns:P,"row-key":"name",grid:r.value==="grid",filter:g.value,pagination:d.value,"onUpdate:pagination":o[2]||(o[2]=e=>d.value=e),"rows-per-page-options":[3,7,15,0],ref_key:"tableRef",ref:b,"binary-state-sort":"",onRequest:T},{header:a(e=>[i(N,{props:e,style:{height:"60px"}},{default:a(()=>[(l(!0),p(z,null,U(e.cols,s=>(l(),c(E,{key:s.name,props:e,class:"text-grey-7 text-weight-bold text-uppercase",style:{"font-size":"13px"}},{default:a(()=>[v(_(s.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"top-right":a(e=>[i(A,{style:S(n.$q.screen.width>700||"width: 70%"),outlined:"",dense:"",debounce:"300",modelValue:g.value,"onUpdate:modelValue":o[0]||(o[0]=s=>g.value=s),placeholder:"Buscar..."},{append:a(()=>[i(D,{name:"search"})]),_:1},8,["style","modelValue"]),r.value==="list"?(l(),c(h,{key:0,flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen",onClick:e.toggleFullscreen},{default:a(()=>[C((l(),c(x,{disable:n.$q.platform.is.mobile},{default:a(()=>[v(_(e.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen"),1)]),_:2},1032,["disable"])),[[Q]])]),_:2},1032,["icon","onClick"])):w("",!0),e.inFullscreen?w("",!0):(l(),c(h,{key:1,flat:"",round:"",dense:"",icon:r.value==="grid"?"list":"grid_on",onClick:o[1]||(o[1]=s=>{r.value=r.value==="grid"?"list":"grid",n.separator=r.value==="grid"?"none":"horizontal"})},{default:a(()=>[C((l(),c(x,{disable:n.$q.platform.is.mobile},{default:a(()=>[v(_(r.value==="grid"?"List":"Grid"),1)]),_:1},8,["disable"])),[[Q]])]),_:1},8,["icon"]))]),"body-cell-acciones":a(e=>[i(k,{props:e},{default:a(()=>[H(B)("editar.correo")?(l(),c(h,{key:0,round:"",color:"blue-grey",onClick:s=>n.$router.push({name:"email.edit",params:{email_id:e.row.company_id.id}}),icon:"edit",class:"q-mr-sm",size:"12px"},null,8,["onClick"])):w("",!0)]),_:2},1032,["props"])]),"body-cell-estado":a(e=>[i(k,{props:e},{default:a(()=>[i(L,{outline:"",class:"q-py-xs q-px-md",color:e.row.isActive?"positive":"dark"},{default:a(()=>[e.row.isActive?(l(),p("span",K,"Activo")):(l(),p("span",W,"Inactivo"))]),_:2},1032,["color"])]),_:2},1032,["props"])]),"no-data":a(({icon:e})=>[X]),_:1},8,["rows","loading","hide-header","grid","filter","pagination"])]),_:1})])])]))}});export{ce as default};