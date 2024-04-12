import{Q as oe}from"./QInnerLoading.c14f1aad.js";import{Q as se,a as te}from"./QTable.eaa56cb7.js";import{Q as ie,a as Y}from"./QTooltip.0629a95f.js";import{r as m,C as ne,v as N,o as d,a9 as c,g as l,e as i,f as e,Q as W,ad as o,bb as k,h as y,aV as A,aa as w,O as $,ah as X,aU as T,c as B,af as S,ba as L,aj as M,ai as de,ae as ue,bc as ce,i as O,ab as q}from"./index.f0981421.js";import{Q as j}from"./QTd.5b3f56ad.js";import{Q as me}from"./QPageSticky.41da3812.js";import{C as Q}from"./ClosePopup.bcf84bac.js";import{Q as G}from"./QTree.feade7de.js";import{Q as ve}from"./QForm.5204417a.js";import{u as pe}from"./useHelpers.b1158c53.js";import{u as be}from"./useRolPermisos.85855722.js";import"./QList.53b4d507.js";import"./QSelect.89fb4a1b.js";import"./format.452c9745.js";import"./QSlideTransition.efac9dd4.js";import"./use-quasar.874efb4c.js";import"./axios.f2084653.js";var fe=[{label:"Seleccionar todos los permisos",value:"Seleccionar todos los permisos",children:[{label:"Proveedores",value:"Proveedores",children:[{label:"Ver Proveedores",value:"index.proveedores"},{label:"Crear Proveedor",value:"crear.proveedor"},{label:"Editar Proveedor",value:"editar.proveedor"},{label:"Activar Proveedor",value:"activar.proveedor"},{label:"Inactivar Proveedor",value:"inactivar.proveedor"},{label:"Eliminar Proveedor",value:"eliminar.proveedor"}]},{label:"Clientes",value:"Clientes",children:[{label:"Ver Clientes",value:"index.clientes"},{label:"Crear Cliente",value:"crear.cliente"},{label:"Editar Cliente",value:"editar.cliente"},{label:"Activar Cliente",value:"activar.cliente"},{label:"Inactivar Cliente",value:"inactivar.cliente"},{label:"Eliminar Cliente",value:"eliminar.cliente"}]},{label:"Productos Y Servicios",value:"Productos Y Servicios",children:[{label:"Ver Prod. Y Serv.",value:"index.productos"},{label:"Crear Prod. Y Serv.",value:"crear.productos"},{label:"Editar Prod. Y Serv.",value:"editar.productos"},{label:"Activar Prod. Y Serv.",value:"activar.productos"},{label:"Inactivar Prod. Y Serv.",value:"inactivar.productos"},{label:"Eliminar Prod. Y Serv.",value:"eliminar.productos"}]},{label:"Compras",value:"Compras",children:[{label:"Ver Compras",value:"index.compras"},{label:"Crear Compra",value:"crear.compra"},{label:"Anular Compra",value:"anular.compra"}]},{label:"Ventas",value:"Ventas",children:[{label:"Ver Ventas",value:"index.ventas"},{label:"Crear Venta",value:"crear.venta"},{label:"Anular Venta",value:"anular.venta"}]},{label:"Retenciones",value:"Retenciones",children:[{label:"Ver Retenciones",value:"index.retencion"},{label:"Crear Retencion",value:"crear.retencion"},{label:"Anular Retencion",value:"anular.retencion"}]}]}],ge=[{label:"Seleccionar todos los permisos",value:"Seleccionar todos los permisos",children:[{label:"Gesti\xF3n Personal",value:"Gesti\xF3n Personal",children:[{label:"Ver Usuarios",value:"index.usuario"},{label:"Crear Usuario",value:"crear.usuario"},{label:"Editar Usuario",value:"editar.usuario"},{label:"Activar Usuario",value:"activar.usuario"},{label:"Inactivar Usuario",value:"inactivar.usuario"},{label:"Eliminar Usuario",value:"eliminar.usuario"}]},{label:"Roles Y Permisos",value:"Roles Y Permisos",children:[{label:"Ver Roles",value:"index.rol"},{label:"Crear Rol",value:"crear.rol"},{label:"Editar Rol",value:"editar.rol"},{label:"Activar Rol",value:"activar.rol"},{label:"Inactivar Rol",value:"inactivar.rol"},{label:"Eliminar Rol",value:"eliminar.rol"}]},{label:"Correo",value:"Correo",children:[{label:"Ver Correos",value:"index.correo"},{label:"Editar Correo",value:"editar.correo"}]},{label:"Empresas",value:"Empresas",children:[{label:"Ver Empresas",value:"index.empresa"},{label:"Crear Empresa",value:"crear.empresa"},{label:"Editar Empresa",value:"editar.empresa"},{label:"Activar Empresa",value:"activar.empresa"},{label:"Inactivar Empresa",value:"inactivar.empresa"},{label:"Eliminar Empresa",value:"eliminar.empresa"}]},{label:"Sucursales",value:"Sucursales",children:[{label:"Ver Sucursales",value:"index.sucursal"},{label:"Crear Sucursal",value:"crear.sucursal"},{label:"Editar Sucursal",value:"editar.sucursal"},{label:"Activar Sucursal",value:"activar.sucursal"},{label:"Inactivar Sucursal",value:"inactivar.sucursal"},{label:"Eliminar Sucursal",value:"eliminar.sucursal"}]}]}];const P=m(!1),_=m({nombre:"",permisos:[]}),H=m(!1),J=m(!1),K=m(!1),E=m([]),F=()=>{const{api:f,mostrarNotify:u,confirmDelete:v,isDeleted:R}=pe(),p=()=>{_.value.nombre="",_.value.permisos=[],E.value=[]};ne(()=>{N(_.value,(g,x)=>{_.value.nombre=g.nombre.toUpperCase()})});const b=async g=>{if(E.value.length==0)return u("warning","Debes seleccionar al menos 1 permiso","top");try{P.value=!0,_.value.permisos=E.value.map(x=>x),g?await f.patch(`/roles-and-permisos/${_.value.id}`,_.value):await f.post("/roles-and-permisos",_.value),u("positive",`Rol ${g?"editado":"agregado"} exitosamente`),E.value=[],H.value=!1,J.value=!1,K.value=!0,P.value=!1}catch(x){u("warning",x.response.data.message),P.value=!1}};return{api:f,mostrarNotify:u,confirmDelete:v,isDeleted:R,actualizarLista:K,formRol:_,loading:P,limpiarFormulario:p,expanded:m(["Seleccionar todos los permisos"]),modalEditarRol:J,modalAgregarRol:H,permisosSelected:E,onSubmit:b}},xe={class:"row q-pt-lg q-gutter-lg justify-center"},_e={class:"col-xs-12 col-md-10"},ye=i("label",null,"Nombre del Rol:",-1),he={class:"row q-pt-lg q-gutter-sm justify-center"},Ce=i("div",{class:"col-12 text-center"},[i("label",{class:"text-subtitle1"}," Selecciona alg\xFAn permiso: ")],-1),Re={class:"col-xs-12 col-md-6"},Se={class:"col-xs-12 col-md-5"},ke={class:"col-xs-9 col-md-12 flex justify-center q-mt-none"},Z={__name:"FormRol",props:["edit"],setup(f){const u=f,{formRol:v,loading:R,expanded:p,permisosSelected:b,onSubmit:g}=F();return(x,s)=>(d(),c(ve,{onSubmit:s[5]||(s[5]=n=>o(g)(u.edit))},{default:l(()=>[i("div",xe,[i("div",_e,[ye,e(W,{modelValue:o(v).nombre,"onUpdate:modelValue":s[0]||(s[0]=n=>o(v).nombre=n),modelModifiers:{trim:!0},disable:u.edit&&(o(v).nombre=="SUPER-ADMINISTRADOR"||o(v).nombre=="ADMINISTRADOR"),"input-style":"text-align: center",dense:"",outlined:"",required:""},null,8,["modelValue","disable"])])]),i("div",he,[Ce,i("div",Re,[e(G,{class:"col-11 col-sm-11 q-ml-md q-mt-sm","default-expand-all":!1,nodes:o(fe),"label-key":"label","node-key":"value","control-color":"deep-orange-14","tick-strategy":"leaf",expanded:o(p),"onUpdate:expanded":s[1]||(s[1]=n=>k(p)?p.value=n:null),ticked:o(b),"onUpdate:ticked":s[2]||(s[2]=n=>k(b)?b.value=n:null)},null,8,["nodes","expanded","ticked"])]),i("div",Se,[e(G,{class:"col-11 col-sm-11 q-ml-md q-mt-sm","default-expand-all":!1,nodes:o(ge),"label-key":"label","node-key":"value","control-color":"deep-orange-14","tick-strategy":"leaf",expanded:o(p),"onUpdate:expanded":s[3]||(s[3]=n=>k(p)?p.value=n:null),ticked:o(b),"onUpdate:ticked":s[4]||(s[4]=n=>k(b)?b.value=n:null)},null,8,["nodes","expanded","ticked"])]),i("div",ke,[e(y,{label:f.edit?"Editar":"Guardar",loading:o(R),class:"q-px-xl q-mt-md q-mb-md",type:"submit",style:{color:"#696cff"},outline:"",rounded:""},null,8,["label","loading"])])])]),_:1}))}},we={class:"text-h6 text-center"},Ee={__name:"AddRol",setup(f){const{limpiarFormulario:u}=F();return u(),(v,R)=>(d(),c(T,{style:{width:"730px","max-width":"80vw"}},{default:l(()=>[e(A,null,{default:l(()=>[i("div",we,[w(" Agregar Rol "),$(e(y,{round:"",flat:"",dense:"",icon:"close",class:"float-right",color:"grey-8"},null,512),[[Q]])])]),_:1}),e(X,{inset:""}),e(A,{class:"q-pt-none"},{default:l(()=>[e(Z,{edit:!1})]),_:1})]),_:1}))}},Ve={class:"text-h6 text-center"},qe={__name:"EditRol",setup(f){return(u,v)=>(d(),c(T,{style:{width:"700px !important","max-width":"fit-content"}},{default:l(()=>[e(A,null,{default:l(()=>[i("div",Ve,[w(" Editar Rol "),$(e(y,{round:"",flat:"",dense:"",icon:"close",class:"float-right",color:"grey-8"},null,512),[[Q]])])]),_:1}),e(X,{inset:""}),e(A,{class:"q-pt-none"},{default:l(()=>[e(Z,{edit:!0})]),_:1})]),_:1}))}},Pe={class:"q-ma-lg q-pt-md"},Ae={class:"row q-col-gutter-lg"},$e={class:"col-12"},Qe={class:"full-width row flex-center text-lime-10 q-gutter-sm"},Ie=i("span",{class:"text-subtitle1"}," No se encontr\xF3 registros ",-1),Xe={__name:"IndexPage",setup(f){let u=[{name:"id",align:"center",label:"#",field:"change_id",sortable:!0},{name:"rol",align:"center",label:"Rol",field:"nombre",sortable:!0},{name:"acciones",align:"center",label:"Acciones"}];const{api:v,mostrarNotify:R,confirmDelete:p,isDeleted:b,actualizarLista:g,loading:x,modalAgregarRol:s,modalEditarRol:n,permisosSelected:ee,formRol:I}=F(),{validarPermisos:V}=be(),z=m([]),U=m(""),h=m("list"),le=m({rowsPerPage:10});N(g,(a,t)=>{a&&D()});const D=async()=>{x.value=!0;try{const{data:a}=await v.get("/roles-and-permisos");z.value=a,g.value=!1}catch(a){R("negative",a.response.data.message)}x.value=!1},ae=a=>{ee.value=a.permisos,I.value.id=a.id,I.value.permisos=[],I.value.nombre=a.nombre,n.value=!0};N(b,(a,t)=>{a&&D()});const re=async a=>{try{p("Estas seguro de eliminar este rol?",`/roles-and-permisos/${a}`)}catch(t){console.log(t)}};return D(),(a,t)=>(d(),B(M,null,[i("div",Pe,[i("div",Ae,[i("div",$e,[e(T,{flat:"",class:"shadow_custom"},{default:l(()=>[e(se,{"title-class":"text-grey-7 text-h6",title:"Listado de Roles",loading:o(x),rows:z.value,"hide-header":h.value==="grid",columns:o(u),"row-key":"name",grid:h.value==="grid",filter:U.value,pagination:le.value},{loading:l(()=>[e(oe,{showing:"",color:"secondary"})]),header:l(r=>[e(ie,{props:r,style:{height:"60px"}},{default:l(()=>[(d(!0),B(M,null,de(r.cols,C=>(d(),c(te,{key:C.name,props:r,class:"text-grey-7 text-weight-bold text-uppercase",style:{"font-size":"13px"}},{default:l(()=>[w(q(C.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"top-right":l(r=>[!a.$q.screen.xs&&o(V)("crear.rol")?(d(),c(y,{key:0,onClick:t[0]||(t[0]=C=>s.value=!o(s)),outline:"",color:"primary",label:"Agregar Rol",class:ue(a.$q.screen.width<700?"q-mb-md q-mt-sm q-mr-xl":"q-mr-xs")},null,8,["class"])):S("",!0),e(W,{style:ce(a.$q.screen.width<700?"width: 70%":""),outlined:"",dense:"",debounce:"300",modelValue:U.value,"onUpdate:modelValue":t[1]||(t[1]=C=>U.value=C),placeholder:"Buscar..."},{append:l(()=>[e(O,{name:"search"})]),_:1},8,["style","modelValue"]),h.value==="list"?(d(),c(y,{key:1,flat:"",round:"",dense:"",icon:r.inFullscreen?"fullscreen_exit":"fullscreen",onClick:r.toggleFullscreen},{default:l(()=>[$((d(),c(Y,{disable:a.$q.platform.is.mobile},{default:l(()=>[w(q(r.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen"),1)]),_:2},1032,["disable"])),[[Q]])]),_:2},1032,["icon","onClick"])):S("",!0),r.inFullscreen?S("",!0):(d(),c(y,{key:2,flat:"",round:"",dense:"",icon:h.value==="grid"?"list":"grid_on",onClick:t[2]||(t[2]=C=>{h.value=h.value==="grid"?"list":"grid",a.separator=h.value==="grid"?"none":"horizontal"})},{default:l(()=>[$((d(),c(Y,{disable:a.$q.platform.is.mobile},{default:l(()=>[w(q(h.value==="grid"?"List":"Grid"),1)]),_:1},8,["disable"])),[[Q]])]),_:1},8,["icon"]))]),"body-cell-id":l(r=>[e(j,{props:r},{default:l(()=>[w(q(r.pageIndex+1),1)]),_:2},1032,["props"])]),"body-cell-acciones":l(r=>[e(j,{props:r},{default:l(()=>[o(V)("editar.rol")?(d(),c(y,{key:0,round:"",color:"blue-grey",onClick:C=>ae(r.row),icon:"edit",class:"q-mr-sm",size:"11px"},null,8,["onClick"])):S("",!0),o(V)("eliminar.rol")?(d(),c(y,{key:1,round:"",color:"blue-grey",class:"q-ml-sm",icon:"delete",disable:r.row.nombre=="SUPER-ADMINISTRADOR"||r.row.nombre=="ADMINISTRADOR",onClick:C=>re(r.row.id),size:"11px"},null,8,["disable","onClick"])):S("",!0)]),_:2},1032,["props"])]),"no-data":l(({})=>[i("div",Qe,[Ie,e(O,{size:"2em",name:"playlist_add"})])]),_:1},8,["loading","rows","hide-header","columns","grid","filter","pagination"])]),_:1})])])]),a.$q.screen.xs&&o(V)("crear.rol")?(d(),c(me,{key:0,position:"bottom-right",offset:[18,18]},{default:l(()=>[e(y,{round:"",color:"secondary",size:"lg",icon:"add",onClick:t[3]||(t[3]=r=>a.modalAgregarCliente=!a.modalAgregarCliente)})]),_:1})):S("",!0),e(L,{modelValue:o(s),"onUpdate:modelValue":t[4]||(t[4]=r=>k(s)?s.value=r:null)},{default:l(()=>[e(Ee)]),_:1},8,["modelValue"]),e(L,{modelValue:o(n),"onUpdate:modelValue":t[5]||(t[5]=r=>k(n)?n.value=r:null)},{default:l(()=>[e(qe)]),_:1},8,["modelValue"])],64))}};export{Xe as default};
