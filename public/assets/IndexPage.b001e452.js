import{Q as oe,a as j,b as L,c as ae}from"./QTable.64c17302.js";import{Q as te,a as G}from"./QTooltip.d939355f.js";import{Q as T}from"./QSelect.b0251b2c.js";import{d as z,o as d,ab as m,g as t,af as o,e as a,f as l,Q as b,c as w,ah as _,h as f,aN as M,ac as $,O as B,aO as U,N as W,r as h,C as D,aQ as V,aR as H,ak as F,aj as se,ag as ie,i as P,ad as K}from"./index.8bba9b46.js";import{Q as ne}from"./QPageSticky.9c402b29.js";import{C as E}from"./ClosePopup.d1f285b1.js";import{api as J}from"./axios.a8d45b11.js";import{u as re}from"./useHelpers.752873d2.js";import{u as I}from"./useSucursal.a41641e0.js";import{Q as de}from"./QForm.7a176ab2.js";import"./QList.1b5bc5a8.js";import"./QItemLabel.4c054916.js";import"./QChip.590d07c5.js";import"./format.2bc25e5f.js";import"./use-quasar.7c983df5.js";import"./auth-user.d8fa41c1.js";const ue={class:"row q-pt-lg q-gutter-lg justify-center"},ce={class:"col-xs-12 col-md-11"},me=a("label",null,"Nombre del establecimiento:",-1),pe={class:"col-xs-12 col-md-11"},fe=a("label",null,"Direcci\xF3n:",-1),_e={class:"col-xs-12 col-md-5"},ge=a("label",null,"Numero de Establecimiento:",-1),be={class:"col-xs-12 col-md-5"},ye=a("label",null,"N\xB0 punto de emisi\xF3n:",-1),ve={class:"col-xs-12 col-md-5"},xe=a("label",null,"N\xB0 secuencial Factura:",-1),he={class:"col-xs-12 col-md-5"},Ve=a("label",null,"N\xB0 secuencial Factura Pruebas:",-1),we={class:"col-xs-12 col-md-5"},ke=a("label",null,"Ambiente:",-1),qe={key:0,class:"col-xs-12 col-md-5"},Ce=a("label",null,"Empresa:",-1),$e={class:"col-xs-9 col-md-12 flex justify-center"},X=z({__name:"FormSucursal",props:{edit:{type:Boolean}},setup(S){const y=S,{api:k,claim:Q,cargarCompanies:c,formSucursal:s,loading:q,allowOnlyNumber:v,listCompanies:A,onSubmit:x}=I();return c(),(N,n)=>(d(),m(de,{onSubmit:n[8]||(n[8]=r=>o(x)(y.edit))},{default:t(()=>[a("div",ue,[a("div",ce,[me,l(b,{modelValue:o(s).nombre,"onUpdate:modelValue":n[0]||(n[0]=r=>o(s).nombre=r),modelModifiers:{trim:!0},dense:"",filled:"",required:""},null,8,["modelValue"])]),a("div",pe,[fe,l(b,{modelValue:o(s).direccion,"onUpdate:modelValue":n[1]||(n[1]=r=>o(s).direccion=r),modelModifiers:{trim:!0},dense:"",filled:"",required:""},null,8,["modelValue"])]),a("div",_e,[ge,l(b,{modelValue:o(s).establecimiento,"onUpdate:modelValue":n[2]||(n[2]=r=>o(s).establecimiento=r),maxlength:3,dense:"",filled:"",required:"",onKeyup:o(v)},null,8,["modelValue","onKeyup"])]),a("div",be,[ye,l(b,{modelValue:o(s).punto_emision,"onUpdate:modelValue":n[3]||(n[3]=r=>o(s).punto_emision=r),maxlength:3,dense:"",filled:"",required:"",onKeyup:o(v)},null,8,["modelValue","onKeyup"])]),a("div",ve,[xe,l(b,{modelValue:o(s).secuencia_factura_produccion,"onUpdate:modelValue":n[4]||(n[4]=r=>o(s).secuencia_factura_produccion=r),modelModifiers:{trim:!0},maxlength:9,onKeyup:o(v),dense:"",filled:"",required:""},null,8,["modelValue","onKeyup"])]),a("div",he,[Ve,l(b,{modelValue:o(s).secuencia_factura_pruebas,"onUpdate:modelValue":n[5]||(n[5]=r=>o(s).secuencia_factura_pruebas=r),modelModifiers:{trim:!0},maxlength:9,onKeyup:o(v),dense:"",filled:"",required:""},null,8,["modelValue","onKeyup"])]),a("div",we,[ke,l(T,{dense:"",modelValue:o(s).ambiente,"onUpdate:modelValue":n[6]||(n[6]=r=>o(s).ambiente=r),modelModifiers:{trim:!0},filled:"",options:["PRODUCCION","PRUEBA"]},null,8,["modelValue"])]),o(Q).roles[0]=="Super-Administrador"?(d(),w("div",qe,[Ce,l(T,{dense:"",modelValue:o(s).company_id,"onUpdate:modelValue":n[7]||(n[7]=r=>o(s).company_id=r),modelModifiers:{trim:!0},filled:"",options:o(A),"emit-value":"","map-options":""},null,8,["modelValue","options"])])):_("",!0),a("div",$e,[l(f,{label:N.edit?"Editar":"Guardar",loading:o(q),class:"q-px-xl q-my-xs",type:"submit",color:"green-9"},null,8,["label","loading"])])])]),_:1}))}}),Se={class:"text-h6"},Qe=z({__name:"AddSucursal",setup(S){const{limpiarFormulario:y}=I();return y(),(k,Q)=>(d(),m(M,{style:{width:"713px !important","max-width":"fit-content"}},{default:t(()=>[l(U,null,{default:t(()=>[a("div",Se,[$(" Nueva Sucursal "),B(l(f,{round:"",flat:"",dense:"",icon:"close",class:"float-right",color:"grey-8"},null,512),[[E]])])]),_:1}),l(W,{inset:""}),l(U,{class:"q-pt-none"},{default:t(()=>[l(X,{edit:!1})]),_:1})]),_:1}))}}),Ne={class:"text-h6"},Fe=z({__name:"EditSucursal",setup(S){return(y,k)=>(d(),m(M,{style:{width:"713px !important","max-width":"fit-content"}},{default:t(()=>[l(U,null,{default:t(()=>[a("div",Ne,[$(" Editar Sucursal "),B(l(f,{round:"",flat:"",dense:"",icon:"close",class:"float-right",color:"grey-8"},null,512),[[E]])])]),_:1}),l(W,{inset:""}),l(U,{class:"q-pt-none"},{default:t(()=>[l(X,{edit:!0})]),_:1})]),_:1}))}}),Be={class:"q-ma-lg q-pt-md"},Ue={class:"row q-col-gutter-lg"},Ee={class:"col-12"},ze={key:0,class:"text-center row justify-center",style:{width:"100%"}},Ae=a("label",{class:"q-mb-sm text-subtitle1 text-blue-grey-2"}," Listado de Sucursales ",-1),De=[Ae],Pe=a("label",{class:"q-mr-sm row items-center"},[a("span",null,"Empresa: ")],-1),Ke={class:"full-width row flex-center text-lime-10 q-gutter-sm"},Te=a("span",{class:"text-subtitle1"}," No se encontr\xF3 ningun Resultado ",-1),al=z({__name:"IndexPage",setup(S){const y=[{name:"acciones",label:"acciones",align:"center"},{align:"center",label:"Sucursal",field:"nombre",name:"nombre"},{align:"center",label:"Direcci\xF3n",field:"direccion",name:"direccion"},{align:"center",label:"N\xB0 de establecimiento",field:"establecimiento",name:"esta"},{label:"Punto de emisi\xF3n",field:"punto_emision",align:"center",name:"p_v"},{label:"N\xB0 de factura",field:"secuencia_factura_produccion",align:"center",name:"sec"},{name:"estado",label:"Estado",align:"center"}];let{actualizarLista:k,claim:Q,modalAgregarSucursal:c,modalEditarSucursal:s,formSucursal:q,cargarCompanies:v,listCompanies:A}=I();const x=h(""),N=h([]),n=h(!1),r=h(Q.company.id),{mostrarNotify:O,confirmDelete:Y,isDeleted:Z}=re();D(r,(u,i)=>{C()}),D(k,(u,i)=>{u&&C()});const C=async()=>{n.value=!0;try{let u={headers:{company_id:r.value}};const{data:i}=await J.get("/sucursal",u);N.value=i,k.value=!1}catch(u){O("warning",u.response.data.message)}n.value=!1},R=async(u,i)=>{try{const{data:{msg:e}}=await J.patch(`/sucursal/${u}/${i}`);O("positive",e),C()}catch(e){console.log(e)}};D(Z,(u,i)=>{u&&C()});const ee=async u=>{try{Y("Estas seguro de eliminar esta sucursal?",`/sucursal/${u}`)}catch(i){console.log(i)}};C(),v();const g=h("list"),le=h({rowsPerPage:10});return(u,i)=>(d(),w(F,null,[a("div",Be,[a("div",Ue,[a("div",Ee,[l(M,{flat:"",class:"shadow_custom"},{default:t(()=>[l(oe,{"title-class":"text-grey-7 text-h6",rows:N.value,loading:n.value,"hide-header":g.value==="grid",columns:y,"row-key":"name",grid:g.value==="grid",filter:x.value,pagination:le.value},{header:t(e=>[l(te,{props:e,style:{height:"60px"}},{default:t(()=>[(d(!0),w(F,null,se(e.cols,p=>(d(),m(ae,{key:p.name,props:e,class:"text-grey-7 text-weight-bold text-uppercase",style:{"font-size":"13px"}},{default:t(()=>[$(K(p.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"top-left":t(e=>[u.$q.screen.xs?(d(),w("div",ze,De)):_("",!0),a("div",{style:{display:"flex"},class:ie([u.$q.screen.xs?"q-mb-md":""])},[Pe,l(T,{outlined:"",dense:"",modelValue:r.value,"onUpdate:modelValue":i[0]||(i[0]=p=>r.value=p),"emit-value":"","map-options":"",options:o(A)},null,8,["modelValue","options"])],2)]),"top-right":t(e=>[u.$q.screen.xs?_("",!0):(d(),m(f,{key:0,onClick:i[1]||(i[1]=p=>V(c)?c.value=!o(c):c=!o(c)),outline:"",color:"primary",label:"Agregar Sucursal",class:"q-mr-xs"})),l(b,{outlined:"",dense:"",debounce:"300",modelValue:x.value,"onUpdate:modelValue":i[2]||(i[2]=p=>x.value=p),placeholder:"Buscar..."},{append:t(()=>[l(P,{name:"search"})]),_:1},8,["modelValue"]),g.value==="list"?(d(),m(f,{key:1,flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen",onClick:e.toggleFullscreen},{default:t(()=>[B((d(),m(G,{disable:u.$q.platform.is.mobile},{default:t(()=>[$(K(e.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen"),1)]),_:2},1032,["disable"])),[[E]])]),_:2},1032,["icon","onClick"])):_("",!0),e.inFullscreen?_("",!0):(d(),m(f,{key:2,flat:"",round:"",dense:"",icon:g.value==="grid"?"list":"grid_on",onClick:i[3]||(i[3]=p=>{g.value=g.value==="grid"?"list":"grid",u.separator=g.value==="grid"?"none":"horizontal"})},{default:t(()=>[B((d(),m(G,{disable:u.$q.platform.is.mobile},{default:t(()=>[$(K(g.value==="grid"?"List":"Grid"),1)]),_:1},8,["disable"])),[[E]])]),_:1},8,["icon"]))]),"body-cell-estado":t(e=>[l(j,{props:e},{default:t(()=>[e.row.isActive?(d(),m(L,{key:0,outline:"",color:"positive",label:"Activo",class:"q-pa-sm"})):(d(),m(L,{key:1,outline:"",color:"red",label:"Inactivo",class:"q-pa-sm"}))]),_:2},1032,["props"])]),"body-cell-acciones":t(e=>[l(j,{props:e},{default:t(()=>[l(f,{round:"",color:"blue-grey",onClick:p=>(V(q)?q.value={...e.row,company_id:e.row.company_id.id}:q={...e.row,company_id:e.row.company_id.id},V(s)?s.value=!0:s=!0),icon:"edit",class:"q-mr-sm",size:"10px"},null,8,["onClick"]),e.row.isActive?(d(),w(F,{key:0},[e.row.isActive?(d(),m(f,{key:0,round:"",color:"blue-grey",icon:"close",onClick:p=>R(e.row.id,!1),size:"10px"},null,8,["onClick"])):_("",!0)],64)):(d(),w(F,{key:1},[e.row.isActive?_("",!0):(d(),m(f,{key:0,round:"",color:"blue-grey",icon:"done",onClick:p=>R(e.row.id,!0),size:"10px"},null,8,["onClick"])),e.row.estado?_("",!0):(d(),m(f,{key:1,round:"",color:"blue-grey",class:"q-ml-sm",icon:"delete",onClick:p=>ee(e.row.id),size:"10px"},null,8,["onClick"]))],64))]),_:2},1032,["props"])]),"no-data":t(({icon:e})=>[a("div",Ke,[l(P,{size:"2em",name:"sentiment_dissatisfied"}),Te,l(P,{size:"2em",name:x.value?"filter_b_and_w":e},null,8,["name"])])]),_:1},8,["rows","loading","hide-header","grid","filter","pagination"])]),_:1})])])]),u.$q.screen.xs?(d(),m(ne,{key:0,position:"bottom-right",offset:[18,18]},{default:t(()=>[l(f,{round:"",color:"secondary",size:"lg",icon:"add",onClick:i[4]||(i[4]=e=>V(c)?c.value=!o(c):c=!o(c))})]),_:1})):_("",!0),l(H,{modelValue:o(c),"onUpdate:modelValue":i[5]||(i[5]=e=>V(c)?c.value=e:c=e)},{default:t(()=>[l(Qe)]),_:1},8,["modelValue"]),l(H,{modelValue:o(s),"onUpdate:modelValue":i[6]||(i[6]=e=>V(s)?s.value=e:s=e)},{default:t(()=>[l(Fe)]),_:1},8,["modelValue"])],64))}});export{al as default};
