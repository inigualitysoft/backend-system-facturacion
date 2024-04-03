import{Q as D,a as C,b as I}from"./QTable.89b4c855.js";import{Q as S,a as x}from"./QTooltip.76ee0229.js";import{d as R,r as g,v as L,o,c as f,e as p,f as r,g as a,aU as O,ad as u,a9 as i,af as d,aj as b,ai as U,h as c,Q as j,bc as G,i as H,O as Q,aa as y,ab as v}from"./index.ff6c63a6.js";import{Q as q}from"./QBadge.74173c63.js";import{Q as J}from"./QPageSticky.0f44a290.js";import{C as E}from"./ClosePopup.03d65a7b.js";import{u as K}from"./useHelpers.43624c8a.js";import{u as M}from"./useEmpresa.8a5ab090.js";import{u as W}from"./useRolPermisos.88383fb8.js";import"./QList.1afe1699.js";import"./QSelect.6cdf1ca2.js";import"./format.2828d3a5.js";import"./use-quasar.5b94fead.js";import"./axios.74fd605e.js";const X={class:"q-ma-lg q-pt-md"},Y={class:"row q-col-gutter-lg"},Z={class:"col-12"},ee=p("div",{class:"full-width row flex-center text-lime-10 q-gutter-sm"},[p("span",{class:"text-subtitle1"}," No se encontr\xF3 ningun Resultado ")],-1),be=R({__name:"IndexPage",setup(ae){const z=[{name:"acciones",label:"Acciones",align:"center"},{label:"R.U.C",field:"ruc",align:"left",name:"b"},{label:"Nombre Comercial",field:"nombre_comercial",align:"left",name:"c"},{label:"Raz\xF3n Social",field:"razon_social",align:"left",name:"d"},{label:"Telefono",field:"telefono",align:"center",name:"e"},{label:"Email",field:"email",name:"email",align:"center"},{label:"Obligado Contabilidad",name:"obligadoContabilidad",align:"center"},{label:"Estado",name:"estado",align:"center"}];let{api:w}=M();const{validarPermisos:m}=W(),k=g(""),_=g([]),F=g(!1),{claim:N,mostrarNotify:T,confirmDelete:A,isDeleted:B}=K(),h=async()=>{let l={company_id:N.company.id};const{data:t}=await w.get("/companies",{headers:l});_.value=t},$=async(l,t)=>{try{const{data:{msg:e}}=await w.patch(`/companies/${l}/${t}`);T("positive",e),h()}catch(e){console.log(e)}};L(B,(l,t)=>{l&&h()});const P=async l=>{A("Estas seguro de eliminar esta empresa?",`/companies/${l}`)};h();const n=g("list"),V=g({rowsPerPage:10});return(l,t)=>(o(),f(b,null,[p("div",X,[p("div",Y,[p("div",Z,[r(O,{flat:"",class:"shadow_custom"},{default:a(()=>[r(D,{"title-class":"text-grey-7 text-h6",title:"Listado de Empresas",rows:_.value,loading:F.value,"hide-header":n.value==="grid",columns:z,"row-key":"name",grid:n.value==="grid",filter:k.value,pagination:V.value},{header:a(e=>[r(S,{props:e,style:{height:"60px"}},{default:a(()=>[(o(!0),f(b,null,U(e.cols,s=>(o(),i(I,{key:s.name,props:e,class:"text-grey-7 text-weight-bold text-uppercase",style:{"font-size":"13px"}},{default:a(()=>[y(v(s.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"top-right":a(e=>[!l.$q.screen.xs&&u(m)("crear.empresa")?(o(),i(c,{key:0,onClick:t[0]||(t[0]=s=>l.$router.push({name:"Agregar Empresa"})),outline:"",color:"primary",label:"Agregar Empresa",class:"q-mr-xs"})):d("",!0),r(j,{style:G(l.$q.screen.width>700||"width: 70%"),outlined:"",dense:"",debounce:"300",modelValue:k.value,"onUpdate:modelValue":t[1]||(t[1]=s=>k.value=s),placeholder:"Buscar..."},{append:a(()=>[r(H,{name:"search"})]),_:1},8,["style","modelValue"]),n.value==="list"?(o(),i(c,{key:1,flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen",onClick:e.toggleFullscreen},{default:a(()=>[Q((o(),i(x,{disable:l.$q.platform.is.mobile},{default:a(()=>[y(v(e.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen"),1)]),_:2},1032,["disable"])),[[E]])]),_:2},1032,["icon","onClick"])):d("",!0),e.inFullscreen?d("",!0):(o(),i(c,{key:2,flat:"",round:"",dense:"",icon:n.value==="grid"?"list":"grid_on",onClick:t[2]||(t[2]=s=>{n.value=n.value==="grid"?"list":"grid",l.separator=n.value==="grid"?"none":"horizontal"})},{default:a(()=>[Q((o(),i(x,{disable:l.$q.platform.is.mobile},{default:a(()=>[y(v(n.value==="grid"?"List":"Grid"),1)]),_:1},8,["disable"])),[[E]])]),_:1},8,["icon"]))]),"body-cell-obligadoContabilidad":a(e=>[r(C,{props:e},{default:a(()=>[y(v(e.row.obligado_contabilidad?"SI":"NO"),1)]),_:2},1032,["props"])]),"body-cell-estado":a(e=>[r(C,{props:e},{default:a(()=>[e.row.isActive?(o(),i(q,{key:0,outline:"",color:"positive",label:"Activo",ss:"q-pa-sm"})):(o(),i(q,{key:1,outline:"",color:"red",label:"Inactivo",class:"q-pa-sm"}))]),_:2},1032,["props"])]),"body-cell-acciones":a(e=>[r(C,{props:e},{default:a(()=>[e.row.isActive?(o(),f(b,{key:0},[u(m)("editar.empresa")?(o(),i(c,{key:0,round:"",color:"blue-grey",onClick:s=>l.$router.push({name:"Editar Empresa",params:{empresa_id:e.row.id}}),icon:"edit",class:"q-mr-sm",size:"10px"},null,8,["onClick"])):d("",!0),u(m)("inactivar.empresa")?(o(),i(c,{key:1,round:"",color:"blue-grey",icon:"close",onClick:s=>$(e.row.id,!1),size:"10px"},null,8,["onClick"])):d("",!0)],64)):(o(),f(b,{key:1},[u(m)("activar.empresa")?(o(),i(c,{key:0,round:"",color:"blue-grey",icon:"done",onClick:s=>$(e.row.id,!0),size:"10px"},null,8,["onClick"])):d("",!0),!e.row.estado&&u(m)("eliminar.empresa")?(o(),i(c,{key:1,round:"",color:"blue-grey",class:"q-ml-sm",icon:"delete",onClick:s=>P(e.row.id),size:"10px"},null,8,["onClick"])):d("",!0)],64))]),_:2},1032,["props"])]),"no-data":a(({icon:e})=>[ee]),_:1},8,["rows","loading","hide-header","grid","filter","pagination"])]),_:1})])])]),l.$q.screen.xs&&u(m)("crear.empresa")?(o(),i(J,{key:0,position:"bottom-right",offset:[18,18]},{default:a(()=>[r(c,{round:"",color:"secondary",size:"lg",icon:"add",onClick:t[3]||(t[3]=e=>l.$router.push({name:"Agregar Empresa"}))})]),_:1})):d("",!0)],64))}});export{be as default};
