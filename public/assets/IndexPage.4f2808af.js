import{Q as z,a as x,b as E}from"./QTable.6377d10b.js";import{Q as N,a as C}from"./QTooltip.9c554273.js";import{d as $,r as u,C as I,o as l,c as p,e as g,f as r,g as a,aU as R,aj as U,ai as A,Q as S,aZ as D,i as v,a9 as c,O as Q,aa as _,ab as h,h as w,af as y,ad as H}from"./index.ca7b667e.js";import{Q as L}from"./QBadge.75b08eab.js";import{C as P}from"./ClosePopup.a0cb6a9f.js";import{u as j}from"./useHelpers.9a0288d5.js";import{u as G}from"./useRolPermisos.8c42c441.js";import"./QList.44b26507.js";import"./QSelect.8fcb8d59.js";import"./format.f35043b7.js";import"./use-quasar.fb95affe.js";import"./axios.1f8f1753.js";const M={class:"q-ma-lg q-pt-md"},O={class:"row q-col-gutter-lg"},Z={class:"col-12"},J={key:0},K={key:1},W={class:"full-width row flex-center text-lime-10 q-gutter-sm"},X=g("span",{class:"text-subtitle1"}," No se encontr\xF3 ningun Resultado ",-1),me=$({__name:"IndexPage",setup(Y){const q=[{name:"acciones",label:"acciones",align:"center"},{name:"empresa_name",label:"Empresa",align:"center",field:"empresa_name"},{name:"host",label:"Host",align:"center",field:"host"},{name:"puerto",label:"Puerto",align:"center",field:"puerto"},{name:"usuario",label:"Usuario",align:"center",field:"usuario"},{name:"password",label:"Contrase\xF1a",align:"center",field:"password"}],{api:B}=j(),{validarPermisos:F}=G(),b=u([]),m=u(""),k=u(),f=u(!1),d=u({sortBy:"desc",descending:!1,page:1,rowsPerPage:5,rowsNumber:5}),T=async(i=1,o=5,e=null)=>{try{const{data:s}=await B.get("/email");s.forEach(t=>{t.empresa_name=t.company_id.nombre_comercial,t.host=t.host==""?"----------":t.host,t.usuario=t.usuario==""?"----------":t.usuario,t.password=t.password==""?"----------":t.password}),b.value=s}catch(s){console.log(s)}};async function V(i){const{page:o,rowsPerPage:e,sortBy:s,descending:t}=i.pagination;f.value=!0,await T(o,e),d.value.page=o,d.value.rowsPerPage=e,d.value.sortBy=s,d.value.descending=t,f.value=!1}I(()=>{k.value.requestServerInteraction()});const n=u("list");return(i,o)=>(l(),p("div",M,[g("div",O,[g("div",Z,[r(R,{flat:"",class:"shadow_custom"},{default:a(()=>[r(z,{"title-class":"text-grey-7 text-h6",title:"Emails Config",rows:b.value,loading:f.value,"hide-header":n.value==="grid",columns:q,"row-key":"name",grid:n.value==="grid",filter:m.value,pagination:d.value,"onUpdate:pagination":o[2]||(o[2]=e=>d.value=e),"rows-per-page-options":[3,7,15,0],ref_key:"tableRef",ref:k,"binary-state-sort":"",onRequest:V},{header:a(e=>[r(N,{props:e,style:{height:"60px"}},{default:a(()=>[(l(!0),p(U,null,A(e.cols,s=>(l(),c(E,{key:s.name,props:e,class:"text-grey-7 text-weight-bold text-uppercase",style:{"font-size":"13px"}},{default:a(()=>[_(h(s.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"top-right":a(e=>[r(S,{style:D(i.$q.screen.width>700||"width: 70%"),outlined:"",dense:"",debounce:"300",modelValue:m.value,"onUpdate:modelValue":o[0]||(o[0]=s=>m.value=s),placeholder:"Buscar..."},{append:a(()=>[r(v,{name:"search"})]),_:1},8,["style","modelValue"]),n.value==="list"?(l(),c(w,{key:0,flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen",onClick:e.toggleFullscreen},{default:a(()=>[Q((l(),c(C,{disable:i.$q.platform.is.mobile},{default:a(()=>[_(h(e.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen"),1)]),_:2},1032,["disable"])),[[P]])]),_:2},1032,["icon","onClick"])):y("",!0),e.inFullscreen?y("",!0):(l(),c(w,{key:1,flat:"",round:"",dense:"",icon:n.value==="grid"?"list":"grid_on",onClick:o[1]||(o[1]=s=>{n.value=n.value==="grid"?"list":"grid",i.separator=n.value==="grid"?"none":"horizontal"})},{default:a(()=>[Q((l(),c(C,{disable:i.$q.platform.is.mobile},{default:a(()=>[_(h(n.value==="grid"?"List":"Grid"),1)]),_:1},8,["disable"])),[[P]])]),_:1},8,["icon"]))]),"body-cell-acciones":a(e=>[r(x,{props:e},{default:a(()=>[H(F)("editar.correo")?(l(),c(w,{key:0,round:"",color:"blue-grey",onClick:s=>i.$router.push({name:"email.edit",params:{email_id:e.row.company_id.id}}),icon:"edit",class:"q-mr-sm",size:"12px"},null,8,["onClick"])):y("",!0)]),_:2},1032,["props"])]),"body-cell-estado":a(e=>[r(x,{props:e},{default:a(()=>[r(L,{outline:"",class:"q-py-xs q-px-md",color:e.row.isActive?"positive":"dark"},{default:a(()=>[e.row.isActive?(l(),p("span",J,"Activo")):(l(),p("span",K,"Inactivo"))]),_:2},1032,["color"])]),_:2},1032,["props"])]),"no-data":a(({icon:e})=>[g("div",W,[r(v,{size:"2em",name:"sentiment_dissatisfied"}),X,r(v,{size:"2em",name:m.value?"filter_b_and_w":e},null,8,["name"])])]),_:1},8,["rows","loading","hide-header","grid","filter","pagination"])]),_:1})])])]))}});export{me as default};
