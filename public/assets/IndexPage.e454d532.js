import{Q as oe}from"./QInnerLoading.6bab21da.js";import{Q as se,a as T,b as te}from"./QTable.75882cbb.js";import{Q as ie,a as L}from"./QTooltip.502c49c5.js";import{r as m,C as ne,v as z,o as d,a9 as u,g as l,e as i,f as e,Q as K,ad as o,aU as R,h as _,aS as $,aa as V,O as Q,ah as X,aR as Y,c as B,af as k,aV as j,aj as G,ai as de,ae as ue,aW as ce,i as M,ab as E}from"./index.77dc7136.js";import{Q as me}from"./QPageSticky.9122b839.js";import{C as A}from"./ClosePopup.48df6d9e.js";import{Q as H}from"./QTree.1b87f60a.js";import{Q as ve}from"./QForm.7129c50b.js";import{u as pe}from"./useHelpers.602f9f43.js";import{u as be}from"./useRolPermisos.1aace9f8.js";import"./QList.18d45291.js";import"./QSelect.ac3f44cf.js";import"./QChip.ebe95b50.js";import"./QItemLabel.aaa628b9.js";import"./format.cbf00d5d.js";import"./QSlideTransition.08c0e0c7.js";import"./use-quasar.75c84b60.js";import"./axios.9fd1c94c.js";var fe=[{label:"Seleccionar todos los permisos",value:"Seleccionar todos los permisos",children:[{label:"Proveedores",value:"Proveedores",children:[{label:"Ver Proveedores",value:"index.proveedores"},{label:"Crear Proveedor",value:"crear.proveedor"},{label:"Editar Proveedor",value:"editar.proveedor"},{label:"Activar Proveedor",value:"activar.proveedor"},{label:"Inactivar Proveedor",value:"inactivar.proveedor"},{label:"Eliminar Proveedor",value:"eliminar.proveedor"}]},{label:"Clientes",value:"Clientes",children:[{label:"Ver Clientes",value:"index.clientes"},{label:"Crear Cliente",value:"crear.cliente"},{label:"Editar Cliente",value:"editar.cliente"},{label:"Activar Cliente",value:"activar.cliente"},{label:"Inactivar Cliente",value:"inactivar.cliente"},{label:"Eliminar Cliente",value:"eliminar.cliente"}]},{label:"Productos Y Servicios",value:"Productos Y Servicios",children:[{label:"Ver Prod. Y Serv.",value:"index.productos"},{label:"Crear Prod. Y Serv.",value:"crear.productos"},{label:"Editar Prod. Y Serv.",value:"editar.productos"},{label:"Activar Prod. Y Serv.",value:"activar.productos"},{label:"Inactivar Prod. Y Serv.",value:"inactivar.productos"},{label:"Eliminar Prod. Y Serv.",value:"eliminar.productos"}]},{label:"Compras",value:"Compras",children:[{label:"Ver Compras",value:"index.compras"},{label:"Crear Compra",value:"crear.compra"},{label:"Anular Compra",value:"anular.compra"}]},{label:"Ventas",value:"Ventas",children:[{label:"Ver Ventas",value:"index.ventas"},{label:"Crear Venta",value:"crear.venta"},{label:"Anular Venta",value:"anular.venta"}]}]}],ge=[{label:"Seleccionar todos los permisos",value:"Seleccionar todos los permisos",children:[{label:"Gesti\xF3n Personal",value:"Gesti\xF3n Personal",children:[{label:"Ver Usuarios",value:"index.usuario"},{label:"Crear Usuario",value:"crear.usuario"},{label:"Editar Usuario",value:"editar.usuario"},{label:"Activar Usuario",value:"activar.usuario"},{label:"Inactivar Usuario",value:"inactivar.usuario"},{label:"Eliminar Usuario",value:"eliminar.usuario"}]},{label:"Roles Y Permisos",value:"Roles Y Permisos",children:[{label:"Ver Roles",value:"index.rol"},{label:"Crear Rol",value:"crear.rol"},{label:"Editar Rol",value:"editar.rol"},{label:"Activar Rol",value:"activar.rol"},{label:"Inactivar Rol",value:"inactivar.rol"},{label:"Eliminar Rol",value:"eliminar.rol"}]},{label:"Correo",value:"Correo",children:[{label:"Ver Correos",value:"index.correo"},{label:"Editar Correo",value:"editar.correo"}]},{label:"Empresas",value:"Empresas",children:[{label:"Ver Empresas",value:"index.empresa"},{label:"Crear Empresa",value:"crear.empresa"},{label:"Editar Empresa",value:"editar.empresa"},{label:"Activar Empresa",value:"activar.empresa"},{label:"Inactivar Empresa",value:"inactivar.empresa"},{label:"Eliminar Empresa",value:"eliminar.empresa"}]},{label:"Sucursales",value:"Sucursales",children:[{label:"Ver Sucursales",value:"index.sucursal"},{label:"Crear Sucursal",value:"crear.sucursal"},{label:"Editar Sucursal",value:"editar.sucursal"},{label:"Activar Sucursal",value:"activar.sucursal"},{label:"Inactivar Sucursal",value:"inactivar.sucursal"},{label:"Eliminar Sucursal",value:"eliminar.sucursal"}]}]}];const P=m(!1),x=m({nombre:"",permisos:[]}),O=m(!1),W=m(!1),J=m(!1),q=m([]),D=()=>{const{api:b,mostrarNotify:c,confirmDelete:y,isDeleted:S}=pe(),v=()=>{x.value.nombre="",x.value.permisos=[],q.value=[]};ne(()=>{z(x.value,(f,g)=>{x.value.nombre=f.nombre.toUpperCase()})});const p=async f=>{if(q.value.length==0)return c("warning","Debes seleccionar al menos 1 permiso","top");try{P.value=!0,x.value.permisos=q.value.map(g=>g),f?await b.patch(`/roles-and-permisos/${x.value.id}`,x.value):await b.post("/roles-and-permisos",x.value),c("positive",`Rol ${f?"editado":"agregado"} exitosamente`),q.value=[],O.value=!1,W.value=!1,J.value=!0,P.value=!1}catch(g){c("warning",g.response.data.message),P.value=!1}};return{api:b,mostrarNotify:c,confirmDelete:y,isDeleted:S,actualizarLista:J,formRol:x,loading:P,limpiarFormulario:v,expanded:m(["Seleccionar todos los permisos"]),modalEditarRol:W,modalAgregarRol:O,permisosSelected:q,onSubmit:p}},xe={class:"row q-pt-lg q-gutter-lg justify-center"},_e={class:"col-xs-12 col-md-10"},ye=i("label",null,"Nombre del Rol:",-1),he={class:"row q-pt-lg q-gutter-sm justify-center"},Ce=i("div",{class:"col-12 text-center"},[i("label",{class:"text-subtitle1"}," Selecciona alg\xFAn permiso: ")],-1),Se={class:"col-xs-12 col-md-6"},ke={class:"col-xs-12 col-md-5"},Re={class:"col-xs-9 col-md-12 flex justify-center q-mt-none"},Z={__name:"FormRol",props:["edit"],setup(b){const c=b,{formRol:y,loading:S,expanded:v,permisosSelected:p,onSubmit:f}=D();return(g,s)=>(d(),u(ve,{onSubmit:s[5]||(s[5]=n=>o(f)(c.edit))},{default:l(()=>[i("div",xe,[i("div",_e,[ye,e(K,{modelValue:o(y).nombre,"onUpdate:modelValue":s[0]||(s[0]=n=>o(y).nombre=n),modelModifiers:{trim:!0},"input-style":"text-align: center",dense:"",outlined:"",required:""},null,8,["modelValue"])])]),i("div",he,[Ce,i("div",Se,[e(H,{class:"col-11 col-sm-11 q-ml-md q-mt-sm","default-expand-all":!1,nodes:o(fe),"label-key":"label","node-key":"value","control-color":"deep-orange-14","tick-strategy":"leaf",expanded:o(v),"onUpdate:expanded":s[1]||(s[1]=n=>R(v)?v.value=n:null),ticked:o(p),"onUpdate:ticked":s[2]||(s[2]=n=>R(p)?p.value=n:null)},null,8,["nodes","expanded","ticked"])]),i("div",ke,[e(H,{class:"col-11 col-sm-11 q-ml-md q-mt-sm","default-expand-all":!1,nodes:o(ge),"label-key":"label","node-key":"value","control-color":"deep-orange-14","tick-strategy":"leaf",expanded:o(v),"onUpdate:expanded":s[3]||(s[3]=n=>R(v)?v.value=n:null),ticked:o(p),"onUpdate:ticked":s[4]||(s[4]=n=>R(p)?p.value=n:null)},null,8,["nodes","expanded","ticked"])]),i("div",Re,[e(_,{label:b.edit?"Editar":"Guardar",loading:o(S),class:"q-px-xl q-mt-md q-mb-md",type:"submit",style:{color:"#696cff"},outline:"",rounded:""},null,8,["label","loading"])])])]),_:1}))}},Ve={class:"text-h6 text-center"},qe={__name:"AddRol",setup(b){const{limpiarFormulario:c}=D();return c(),(y,S)=>(d(),u(Y,{style:{width:"730px","max-width":"80vw"}},{default:l(()=>[e($,null,{default:l(()=>[i("div",Ve,[V(" Agregar Rol "),Q(e(_,{round:"",flat:"",dense:"",icon:"close",class:"float-right",color:"grey-8"},null,512),[[A]])])]),_:1}),e(X,{inset:""}),e($,{class:"q-pt-none"},{default:l(()=>[e(Z,{edit:!1})]),_:1})]),_:1}))}},we={class:"text-h6 text-center"},Ee={__name:"EditRol",setup(b){return(c,y)=>(d(),u(Y,{style:{width:"700px !important","max-width":"fit-content"}},{default:l(()=>[e($,null,{default:l(()=>[i("div",we,[V(" Editar Rol "),Q(e(_,{round:"",flat:"",dense:"",icon:"close",class:"float-right",color:"grey-8"},null,512),[[A]])])]),_:1}),e(X,{inset:""}),e($,{class:"q-pt-none"},{default:l(()=>[e(Z,{edit:!0})]),_:1})]),_:1}))}},Pe={class:"q-ma-lg q-pt-md"},$e={class:"row q-col-gutter-lg"},Qe={class:"col-12"},Ae={class:"full-width row flex-center text-lime-10 q-gutter-sm"},Ue=i("span",{class:"text-subtitle1"}," No se encontr\xF3 registros ",-1),Ze={__name:"IndexPage",setup(b){let c=[{name:"id",align:"center",label:"#",field:"change_id",sortable:!0},{name:"rol",align:"center",label:"Rol",field:"nombre",sortable:!0},{name:"acciones",align:"center",label:"Acciones"}];const{api:y,mostrarNotify:S,confirmDelete:v,isDeleted:p,actualizarLista:f,loading:g,modalAgregarRol:s,modalEditarRol:n,permisosSelected:ee,formRol:U}=D(),{validarPermisos:w}=be(),N=m([]),I=m(""),h=m("list"),le=m({rowsPerPage:10});z(f,(a,t)=>{a&&F()});const F=async()=>{g.value=!0;try{const{data:a}=await y.get("/roles-and-permisos");N.value=a,f.value=!1}catch(a){S("negative",a.response.data.message)}g.value=!1},ae=a=>{ee.value=a.permisos,U.value.id=a.id,U.value.permisos=[],U.value.nombre=a.nombre,n.value=!0};z(p,(a,t)=>{a&&F()});const re=async a=>{try{v("Estas seguro de eliminar este rol?",`/roles-and-permisos/${a}`)}catch(t){console.log(t)}};return F(),(a,t)=>(d(),B(G,null,[i("div",Pe,[i("div",$e,[i("div",Qe,[e(Y,{flat:"",class:"shadow_custom"},{default:l(()=>[e(se,{"title-class":"text-grey-7 text-h6",title:"Listado de Roles",loading:o(g),rows:N.value,"hide-header":h.value==="grid",columns:o(c),"row-key":"name",grid:h.value==="grid",filter:I.value,pagination:le.value},{loading:l(()=>[e(oe,{showing:"",color:"secondary"})]),header:l(r=>[e(ie,{props:r,style:{height:"60px"}},{default:l(()=>[(d(!0),B(G,null,de(r.cols,C=>(d(),u(te,{key:C.name,props:r,class:"text-grey-7 text-weight-bold text-uppercase",style:{"font-size":"13px"}},{default:l(()=>[V(E(C.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"top-right":l(r=>[!a.$q.screen.xs&&o(w)("crear.rol")?(d(),u(_,{key:0,onClick:t[0]||(t[0]=C=>s.value=!o(s)),outline:"",color:"primary",label:"Agregar Rol",class:ue(a.$q.screen.width<700?"q-mb-md q-mt-sm q-mr-xl":"q-mr-xs")},null,8,["class"])):k("",!0),e(K,{style:ce(a.$q.screen.width<700?"width: 70%":""),outlined:"",dense:"",debounce:"300",modelValue:I.value,"onUpdate:modelValue":t[1]||(t[1]=C=>I.value=C),placeholder:"Search"},{append:l(()=>[e(M,{name:"search"})]),_:1},8,["style","modelValue"]),h.value==="list"?(d(),u(_,{key:1,flat:"",round:"",dense:"",icon:r.inFullscreen?"fullscreen_exit":"fullscreen",onClick:r.toggleFullscreen},{default:l(()=>[Q((d(),u(L,{disable:a.$q.platform.is.mobile},{default:l(()=>[V(E(r.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen"),1)]),_:2},1032,["disable"])),[[A]])]),_:2},1032,["icon","onClick"])):k("",!0),r.inFullscreen?k("",!0):(d(),u(_,{key:2,flat:"",round:"",dense:"",icon:h.value==="grid"?"list":"grid_on",onClick:t[2]||(t[2]=C=>{h.value=h.value==="grid"?"list":"grid",a.separator=h.value==="grid"?"none":"horizontal"})},{default:l(()=>[Q((d(),u(L,{disable:a.$q.platform.is.mobile},{default:l(()=>[V(E(h.value==="grid"?"List":"Grid"),1)]),_:1},8,["disable"])),[[A]])]),_:1},8,["icon"]))]),"body-cell-id":l(r=>[e(T,{props:r},{default:l(()=>[V(E(r.pageIndex+1),1)]),_:2},1032,["props"])]),"body-cell-acciones":l(r=>[e(T,{props:r},{default:l(()=>[o(w)("editar.rol")?(d(),u(_,{key:0,round:"",color:"blue-grey",onClick:C=>ae(r.row),icon:"edit",class:"q-mr-sm",size:"11px"},null,8,["onClick"])):k("",!0),o(w)("eliminar.rol")?(d(),u(_,{key:1,round:"",color:"blue-grey",class:"q-ml-sm",icon:"delete",onClick:C=>re(r.row.id),size:"11px"},null,8,["onClick"])):k("",!0)]),_:2},1032,["props"])]),"no-data":l(({})=>[i("div",Ae,[Ue,e(M,{size:"2em",name:"playlist_add"})])]),_:1},8,["loading","rows","hide-header","columns","grid","filter","pagination"])]),_:1})])])]),a.$q.screen.xs&&o(w)("crear.rol")?(d(),u(me,{key:0,position:"bottom-right",offset:[18,18]},{default:l(()=>[e(_,{round:"",color:"secondary",size:"lg",icon:"add",onClick:t[3]||(t[3]=r=>a.modalAgregarCliente=!a.modalAgregarCliente)})]),_:1})):k("",!0),e(j,{modelValue:o(s),"onUpdate:modelValue":t[4]||(t[4]=r=>R(s)?s.value=r:null)},{default:l(()=>[e(qe)]),_:1},8,["modelValue"]),e(j,{modelValue:o(n),"onUpdate:modelValue":t[5]||(t[5]=r=>R(n)?n.value=r:null)},{default:l(()=>[e(Ee)]),_:1},8,["modelValue"])],64))}};export{Ze as default};
