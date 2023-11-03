import{Q as re,a as A,b as ne,c as ie}from"./QTable.4623bfd2.js";import{Q as ue,a as J}from"./QTooltip.8de217d5.js";import{r as f,d as E,o as d,ab as v,g as o,af as n,e as i,f as l,Q as h,h as _,aN as j,ac as k,O as U,aO as D,N as ee,C as R,t as de,c as $,aQ as C,aR as W,ah as V,ak as T,aj as ce,i as M,ad as B}from"./index.9a69bdf9.js";import{Q as me}from"./QPageSticky.ba34640d.js";import{C as z}from"./ClosePopup.d29d88a9.js";import{api as K}from"./axios.1a9376d4.js";import{Q as pe}from"./QSelect.d1e92d92.js";import{Q as ve}from"./QForm.951ed4e0.js";import{u as le}from"./useHelpers.110a86a1.js";import"./QList.565596f8.js";import"./QItemLabel.a344fdf0.js";import"./QChip.cdeb0aad.js";import"./format.2bc25e5f.js";import"./use-quasar.882813a0.js";const t=f({aplicaIva:!1,codigoBarra:"",nombre:"",precio_compra:0,pvp:0,stock:0,descuento:0}),F=f(!1),X=f(!1),Y=f(!1),Z=f(!1);f(!1);const L=()=>{const{mostrarNotify:P}=le(),y=()=>{t.value.aplicaIva=!1,t.value.codigoBarra="",t.value.nombre="",t.value.precio_compra=0,t.value.pvp=0,t.value.stock=0,t.value.descuento=0};return{allowOnlyNumber:()=>{t.value.codigoBarra=t.value.codigoBarra.replace(/\D/g,""),t.value.stock.toString().length>0?t.value.stock=parseFloat(t.value.stock.toString().replace(/\D/g,"")):t.value.stock=0,t.value.descuento.toString().length>0?t.value.descuento=parseFloat(t.value.descuento.toString().replace(/\D/g,"")):t.value.descuento=0},actualizarTabla:Z,formProduct:t,transformToUpperCase:()=>{t.value.nombre=t.value.nombre.toUpperCase()},limpiarFormulario:y,loading:F,onSubmit:async b=>{try{F.value=!0,b?await K.patch("/products/"+t.value.id,t.value):await K.post("/products",t.value),P("positive",`Producto ${b?"editado":"agregado"} exitosamente`),X.value=!1,Y.value=!1,Z.value=!0,y(),F.value=!1}catch(w){F.value=!1,P("warning",w.response.data.message)}},validDecimal:b=>{let w=0;b=="pvm"?w=t.value.precio_compra:w=t.value.pvp;const I=/^\d{0,9}(\.\d{1,2})?$/;setTimeout(function(){let s=0;if(b=="pvm"?s=t.value.precio_compra:s=t.value.pvp,!I.test(s.toString())){const u=parseFloat(w.toString().substring(0,w.toString().length-1));b=="pvm"?t.value.precio_compra=u:t.value.pvp=u}},0)},modalAgregarProducto:X,modalEditarProducto:Y}};const fe={class:"row q-pt-lg q-gutter-lg justify-center"},ge={class:"col-xs-12 col-sm-5"},_e=i("label",null,"Codigo Barra / Serial:",-1),ye={class:"col-xs-12 col-sm-5"},be=i("label",null,"Nombre Producto:",-1),we={class:"col-xs-12 col-sm-5"},xe=i("label",null,"Precio de Compra:",-1),ke={class:"col-xs-12 col-sm-5"},Pe=i("label",null,"PVP:",-1),Ve={class:"col-xs-12 col-sm-5"},he=i("label",null,"Aplica IVA:",-1),qe={class:"col-xs-12 col-sm-5"},$e=i("label",null,"Descuento(%):",-1),Ce={class:"col-xs-12 col-sm-5"},Be=i("label",null,"Stock:",-1),Qe={class:"col-xs-9 col-sm-12 q-mt-lg q-mb-md flex justify-center"},oe=E({__name:"FormProduct",props:{edit:{type:Boolean}},setup(P){const y=P,{formProduct:a,allowOnlyNumber:p,transformToUpperCase:q,validDecimal:Q,onSubmit:b,loading:w}=L();return(I,s)=>(d(),v(ve,{onSubmit:s[9]||(s[9]=u=>n(b)(y.edit))},{default:o(()=>[i("div",fe,[i("div",ge,[_e,l(h,{modelValue:n(a).codigoBarra,"onUpdate:modelValue":s[0]||(s[0]=u=>n(a).codigoBarra=u),onKeyup:n(p),dense:"",filled:"",required:""},null,8,["modelValue","onKeyup"])]),i("div",ye,[be,l(h,{modelValue:n(a).nombre,"onUpdate:modelValue":s[1]||(s[1]=u=>n(a).nombre=u),modelModifiers:{trim:!0},onKeyup:n(q),dense:"",filled:"",required:""},null,8,["modelValue","onKeyup"])]),i("div",we,[xe,l(h,{type:"number",modelValue:n(a).precio_compra,"onUpdate:modelValue":s[2]||(s[2]=u=>n(a).precio_compra=u),modelModifiers:{trim:!0},min:"0","input-class":"resaltarTextoInput",step:".01",onKeyup:s[3]||(s[3]=u=>n(Q)("pvm")),dense:"",filled:"",required:""},null,8,["modelValue"])]),i("div",ke,[Pe,l(h,{modelValue:n(a).pvp,"onUpdate:modelValue":s[4]||(s[4]=u=>n(a).pvp=u),modelModifiers:{trim:!0},type:"number",min:"0","input-class":"resaltarTextoInput",step:".01",onKeyup:s[5]||(s[5]=u=>n(Q)("pvp")),dense:"",filled:"",required:""},null,8,["modelValue"])]),i("div",Ve,[he,l(pe,{modelValue:n(a).aplicaIva,"onUpdate:modelValue":s[6]||(s[6]=u=>n(a).aplicaIva=u),filled:"",dense:"",required:"","emit-value":"","map-options":"",options:[{label:"SI",value:!0},{label:"NO",value:!1}]},null,8,["modelValue"])]),i("div",qe,[$e,l(h,{modelValue:n(a).descuento,"onUpdate:modelValue":s[7]||(s[7]=u=>n(a).descuento=u),"input-class":"resaltarTextoInput",onKeyup:n(p),dense:"",filled:"",required:""},null,8,["modelValue","onKeyup"])]),i("div",Ce,[Be,l(h,{modelValue:n(a).stock,"onUpdate:modelValue":s[8]||(s[8]=u=>n(a).stock=u),readonly:"","input-class":"resaltarTextoInput",onKeyup:n(p),dense:"",filled:"",required:""},null,8,["modelValue","onKeyup"])]),i("div",Qe,[l(_,{label:I.edit?"Editar":"Guardar",loading:n(w),class:"q-px-xl",type:"submit",color:"green-9"},null,8,["label","loading"])])])]),_:1}))}}),Ie={class:"text-h6"},Se=E({__name:"AddProduct",setup(P){const{limpiarFormulario:y}=L();return y(),(a,p)=>(d(),v(j,{style:{width:"643px !important","max-width":"fit-content"}},{default:o(()=>[l(D,null,{default:o(()=>[i("div",Ie,[k(" Agregar Producto "),U(l(_,{round:"",flat:"",dense:"",icon:"close",class:"float-right",color:"grey-8"},null,512),[[z]])])]),_:1}),l(ee,{inset:""}),l(D,{class:"q-pt-none"},{default:o(()=>[l(oe,{edit:!1})]),_:1})]),_:1}))}}),Ae={class:"text-h6"},Ne=E({__name:"EditProduct",setup(P){return(y,a)=>(d(),v(j,{style:{width:"643px !important","max-width":"fit-content"}},{default:o(()=>[l(D,null,{default:o(()=>[i("div",Ae,[k(" Editar Producto "),U(l(_,{round:"",flat:"",dense:"",icon:"close",class:"float-right",color:"grey-8"},null,512),[[z]])])]),_:1}),l(ee,{inset:""}),l(D,{class:"q-pt-none"},{default:o(()=>[l(oe,{edit:!0})]),_:1})]),_:1}))}}),Te={class:"q-ma-lg q-pt-md"},Fe={class:"row q-col-gutter-lg"},Ue={class:"col-12"},De={key:0},ze={key:1},Ke={class:"full-width row flex-center text-lime-10 q-gutter-sm"},Ee=i("span",{class:"text-subtitle1"}," No se encontr\xF3 ningun Resultado ",-1),ol=E({__name:"IndexPage",setup(P){let{actualizarTabla:y,modalAgregarProducto:a,modalEditarProducto:p,formProduct:q}=L();const Q=[{name:"acciones",label:"acciones",align:"center"},{name:"codigoBarra",label:"Codigo de Barra",align:"center",field:"codigoBarra"},{name:"producto",label:"Producto",align:"center",field:"nombre"},{name:"stock",label:"Stock",align:"center",field:"stock"},{name:"aplicaIva",label:"Aplica Iva",align:"center",field:"aplicaIva"},{name:"estado",label:"Estado",align:"center",field:"isActive"}],{mostrarNotify:b,confirmDelete:w,isDeleted:I}=le(),s=f([]),u=f("codigo"),N=f(""),G=f(),O=f(!1),g=f({sortBy:"desc",descending:!1,page:1,rowsPerPage:5,rowsNumber:5}),H=async(c,r)=>{try{const{data:{msg:e}}=await K.patch(`/products/${c}/${r}`);b("positive",e),S(1,g.value.rowsPerPage,null)}catch(e){console.log(e)}};R(I,(c,r)=>{c&&S(1,g.value.rowsPerPage,null)}),R(u,(c,r)=>{S(1,g.value.rowsPerPage,null)}),R(y,(c,r)=>{c&&(S(1,g.value.rowsPerPage,null),y.value=!1)});const ae=async c=>{try{w("Estas seguro de eliminar este producto?",`/products/${c}`)}catch(r){console.log(r)}},S=async(c=1,r=5,e=null)=>{try{const{data:m}=await K.get("/products",{params:{page:c,limit:r,busqueda:0}});g.value.rowsNumber=m.meta.totalItems,s.value=m.items}catch(m){console.log(m)}};async function te(c){const{page:r,rowsPerPage:e,sortBy:m,descending:se}=c.pagination;O.value=!0,await S(r,e),g.value.page=r,g.value.rowsPerPage=e,g.value.sortBy=m,g.value.descending=se,O.value=!1}de(()=>{G.value.requestServerInteraction()});const x=f("list");return(c,r)=>(d(),$(T,null,[i("div",Te,[i("div",Fe,[i("div",Ue,[l(j,{flat:"",class:"shadow_custom"},{default:o(()=>[l(re,{"title-class":"text-grey-7 text-h6",title:"Listado de Productos",rows:s.value,loading:O.value,"hide-header":x.value==="grid",columns:Q,"row-key":"name",grid:x.value==="grid",filter:N.value,pagination:g.value,"onUpdate:pagination":r[3]||(r[3]=e=>g.value=e),"rows-per-page-options":[3,7,15,0],ref_key:"tableRef",ref:G,"binary-state-sort":"",onRequest:te},{header:o(e=>[l(ue,{props:e,style:{height:"60px"}},{default:o(()=>[(d(!0),$(T,null,ce(e.cols,m=>(d(),v(ie,{key:m.name,props:e,class:"text-grey-7 text-weight-bold text-uppercase",style:{"font-size":"13px"}},{default:o(()=>[k(B(m.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"top-right":o(e=>[c.$q.screen.xs?V("",!0):(d(),v(_,{key:0,onClick:r[0]||(r[0]=m=>C(a)?a.value=!n(a):a=!n(a)),outline:"",color:"primary",label:"Agregar Producto",class:"q-mr-xs"})),l(h,{outlined:"",dense:"",debounce:"300",modelValue:N.value,"onUpdate:modelValue":r[1]||(r[1]=m=>N.value=m),placeholder:"Buscar..."},{append:o(()=>[l(M,{name:"search"})]),_:1},8,["modelValue"]),x.value==="list"?(d(),v(_,{key:1,flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen",onClick:e.toggleFullscreen},{default:o(()=>[U((d(),v(J,{disable:c.$q.platform.is.mobile},{default:o(()=>[k(B(e.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen"),1)]),_:2},1032,["disable"])),[[z]])]),_:2},1032,["icon","onClick"])):V("",!0),e.inFullscreen?V("",!0):(d(),v(_,{key:2,flat:"",round:"",dense:"",icon:x.value==="grid"?"list":"grid_on",onClick:r[2]||(r[2]=m=>{x.value=x.value==="grid"?"list":"grid",c.separator=x.value==="grid"?"none":"horizontal"})},{default:o(()=>[U((d(),v(J,{disable:c.$q.platform.is.mobile},{default:o(()=>[k(B(x.value==="grid"?"List":"Grid"),1)]),_:1},8,["disable"])),[[z]])]),_:1},8,["icon"]))]),"body-cell-acciones":o(e=>[l(A,{props:e},{default:o(()=>[l(_,{round:"",color:"blue-grey",onClick:m=>(C(q)?q.value={...e.row}:q={...e.row},C(p)?p.value=!0:p=!0),icon:"edit",class:"q-mr-sm",size:"10px"},null,8,["onClick"]),e.row.isActive?(d(),$(T,{key:0},[e.row.isActive?(d(),v(_,{key:0,round:"",color:"blue-grey",icon:"close",onClick:m=>H(e.row.id,!1),size:"10px"},null,8,["onClick"])):V("",!0)],64)):(d(),$(T,{key:1},[e.row.isActive?V("",!0):(d(),v(_,{key:0,round:"",color:"blue-grey",icon:"done",size:"10px",onClick:m=>H(e.row.id,!0)},null,8,["onClick"])),e.row.isActive?V("",!0):(d(),v(_,{key:1,round:"",color:"blue-grey",class:"q-ml-sm",icon:"delete",size:"10px",onClick:m=>ae(e.row.id)},null,8,["onClick"]))],64))]),_:2},1032,["props"])]),"body-cell-codigoBarra":o(e=>[l(A,{props:e},{default:o(()=>[k(B(e.row.codigoBarra),1)]),_:2},1032,["props"])]),"body-cell-producto":o(e=>[l(A,{props:e},{default:o(()=>[k(B(e.row.nombre),1)]),_:2},1032,["props"])]),"body-cell-aplicaIva":o(e=>[l(A,{props:e},{default:o(()=>[k(B(e.row.aplicaIva?"SI":"NO"),1)]),_:2},1032,["props"])]),"body-cell-estado":o(e=>[l(A,{props:e},{default:o(()=>[l(ne,{outline:"",class:"q-py-xs q-px-md",color:e.row.isActive?"positive":"dark"},{default:o(()=>[e.row.isActive?(d(),$("span",De,"Activo")):(d(),$("span",ze,"Inactivo"))]),_:2},1032,["color"])]),_:2},1032,["props"])]),"no-data":o(({icon:e})=>[i("div",Ke,[l(M,{size:"2em",name:"sentiment_dissatisfied"}),Ee,l(M,{size:"2em",name:N.value?"filter_b_and_w":e},null,8,["name"])])]),_:1},8,["rows","loading","hide-header","grid","filter","pagination"])]),_:1})])])]),l(W,{modelValue:n(a),"onUpdate:modelValue":r[4]||(r[4]=e=>C(a)?a.value=e:a=e)},{default:o(()=>[l(Se)]),_:1},8,["modelValue"]),l(W,{modelValue:n(p),"onUpdate:modelValue":r[5]||(r[5]=e=>C(p)?p.value=e:p=e)},{default:o(()=>[l(Ne)]),_:1},8,["modelValue"]),c.$q.screen.xs?(d(),v(me,{key:0,position:"bottom-right",offset:[18,18]},{default:o(()=>[l(_,{round:"",color:"secondary",size:"lg",icon:"add",onClick:r[6]||(r[6]=e=>C(a)?a.value=!0:a=!0)})]),_:1})):V("",!0)],64))}});export{ol as default};