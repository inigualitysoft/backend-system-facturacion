import{Q as Se,a as L,b as Ve}from"./QTable.208cdf47.js";import{a as se,Q as Pe}from"./QTooltip.d0ac592a.js";import{Q as G}from"./QSelect.f9dfedb4.js";import{r as v,v as Y,o as n,a9 as _,g as l,f as a,aV as K,e as r,aa as k,O as B,h as V,ah as ne,i as Z,ae as re,ab as D,ad as s,c as Q,af as S,aj as X,ai as fe,B as $e,a8 as qe,aU as ae,d as ie,Q as j,bb as M,C as Ie,ba as oe,bc as Ce}from"./index.7e6e0c1f.js";import{a as ee,Q as H,d as te}from"./format.a57e8416.js";import{Q as ge}from"./QList.b38dfcbe.js";import{Q as De}from"./QBtnDropdown.0c07dfc6.js";import{Q as ce}from"./QBadge.c29970ea.js";import{Q as Ae}from"./QPageSticky.e732586e.js";import{C as O}from"./ClosePopup.465445af.js";import{Q as Re}from"./QFile.594ce218.js";import{u as ue}from"./useHelpers.104cd01b.js";import{Q as Qe}from"./QForm.3ac0604a.js";import{u as Ue}from"./useRolPermisos.71da533c.js";import"./QBtnGroup.fdc05c3f.js";import"./use-quasar.fab57ded.js";import"./axios.7bffd825.js";const Te={class:"text-h6 text-center"},Ne={class:"row flex flex-center"},Be={class:"col-xs-11 col-sm-9 text-center q-mt-sm"},Ee=r("label",null,"Subir archivo excel:",-1),Fe={key:0,class:"col-xs-11 col-sm-9 text-center q-mt-md"},Me=r("label",null,"Elige una sucursal:",-1),Oe={key:0,class:"col-12 q-mt-md"},ze={class:"col-xs-9 col-md-12 flex justify-center q-mt-none q-ml-none"},Le={__name:"ModalCargarExcel",emits:["actualizarDatos"],setup(U,{emit:I}){const y=v(null),f=v(!1),w=v([]),P=v([]),$=v([]),T=v(""),{api:m,claim:g}=ue();Y(y,o=>{const i=o[0],p=new FileReader;p.onload=function(h){const C=h.target.result;E(C)},p.readAsBinaryString(i)});const x=v({file:{message:"",isValid:!0},sucursal:{message:"",isValid:!0}}),A=()=>{let o=!1;return y.value==null&&(x.value.file.message="Debes completar este campo",x.value.file.isValid=!1,o=!0),T.value.length==0&&(x.value.sucursal.message="Debes completar este campo",x.value.sucursal.isValid=!1,o=!0),x.value.isValid&&y.value[0].type!=="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"&&(x.value.file.message="Debes subir un archivo excel",x.value.file.isValid=!1,o=!0),o};function E(o){const i=XLSX.read(o,{type:"binary"}),p=i.Sheets[i.SheetNames[0]],h=XLSX.utils.sheet_to_json(p,{header:1});w.value=h}function R(o){return new Promise(i=>setTimeout(i,o))}const N=async()=>{$.value=[];const{data:o}=await m.get(`/sucursal/find/${g.company.id}/company`);o.forEach(i=>{$.value.push({label:i.nombre,value:i.id})}),(g.roles[0]!=="SUPER-ADMINISTRADOR"||g.roles[0]!=="ADMINISTRADOR")&&(T.value=g.sucursales[0])},u=async()=>{if(!A()){f.value=!0;for(let o=1;o<w.value.length;o++){if(w.value[o].length>0){const i=w.value[o];P.value.unshift({nombre:i[1],estado:"cargando",message:"",index:o});try{await R(70);let p={sucursal_id:T.value};await m.post("/products",{aplicaIva:i[4]=="SI",codigoBarra:i[0].toString(),nombre:i[1].toUpperCase(),precio_compra:i[2],pvp:i[3],tipo:i[6],descuento:i[5]},{headers:p});let h=P.value.find(C=>C.index==o);h.estado="success"}catch(p){let h=P.value.find(C=>C.index==o);h.estado="error",console.log(p),h.message=p.response.data.message}}o+1==w.value.length&&(I("actualizarDatos"),f.value=!1)}}};return N(),(o,i)=>(n(),_(ae,{style:{width:"600px","max-width":"80vw"}},{default:l(()=>[a(K,null,{default:l(()=>[r("div",Te,[k(" Carga masiva de productos "),B(a(V,{round:"",flat:"",dense:"",icon:"close",class:"float-right",color:"grey-8"},null,512),[[O]])])]),_:1}),a(ne,{inset:""}),a(K,{class:"q-pt-md"},{default:l(()=>[r("div",Ne,[r("div",Be,[Ee,a(Re,{"input-class":"inputFileClick",accept:".xls, .xlsx",dense:"",error:!x.value.file.isValid,"onUpdate:modelValue":[i[0]||(i[0]=p=>x.value.file.isValid=!0),i[1]||(i[1]=p=>y.value=p)],modelValue:y.value,outlined:"",multiple:"",append:""},{append:l(()=>[a(Z,{name:"fa-solid fa-file-excel"})]),error:l(()=>[r("label",{class:re(o.$q.dark.isActive?"text-red-4":"text-negative")},D(x.value.file.message),3)]),_:1},8,["error","modelValue"])]),s(g).roles[0]=="SUPER-ADMINISTRADOR"||s(g).roles[0]=="ADMINISTRADOR"?(n(),Q("div",Fe,[Me,a(G,{outlined:"",dense:"",modelValue:T.value,"onUpdate:modelValue":[i[2]||(i[2]=p=>T.value=p),i[3]||(i[3]=p=>x.value.sucursal.isValid=!0)],error:!x.value.sucursal.isValid,"emit-value":"","map-options":"",options:$.value},{error:l(()=>[r("label",{class:re(o.$q.dark.isActive?"text-red-4":"text-negative")},D(x.value.sucursal.message),3)]),_:1},8,["modelValue","error","options"])])):S("",!0)]),P.value.length>0?(n(),Q("div",Oe,[a(ge,{bordered:"",id:"scrollList"},{default:l(()=>[(n(!0),Q(X,null,fe(P.value,(p,h)=>B((n(),_(ee,{key:h,clickable:""},{default:l(()=>[a(H,null,{default:l(()=>[k(D(p.nombre),1)]),_:2},1024),a(H,{avatar:""},{default:l(()=>[p.estado=="cargando"?(n(),_($e,{key:0,size:"30px",color:"primary"})):S("",!0),p.estado=="success"?(n(),_(Z,{key:1,name:"check_circle",color:"green-9"})):S("",!0),p.estado=="error"?(n(),_(Z,{key:2,name:"error",color:"negative"},{default:l(()=>[a(se,{anchor:"top middle",self:"bottom middle",offset:[10,10]},{default:l(()=>[k(D(p.message),1)]),_:2},1024)]),_:2},1024)):S("",!0)]),_:2},1024)]),_:2},1024)),[[qe]])),128))]),_:1})])):S("",!0),r("div",ze,[a(V,{label:"Subir productos",loading:f.value,class:"q-px-xl q-mt-md q-mb-md",onClick:u,outline:"",rounded:"",style:{color:"#696cff"}},null,8,["loading"])])]),_:1})]),_:1}))}},c=v({aplicaIva:!1,codigoBarra:"",nombre:"",precio_compra:0,pvp:0,tipo:"",stock:0,descuento:0}),J=v(!1),me=v(!1),pe=v(!1),ve=v(!1),W=v("");v(!1);const le=()=>{const{api:U,claim:I,mostrarNotify:y}=ue(),f=()=>{c.value.aplicaIva=!1,c.value.codigoBarra="",c.value.nombre="",c.value.precio_compra=0,c.value.pvp=0,c.value.stock=0,c.value.tipo="",c.value.descuento=0,W.value=""};return{api:U,allowOnlyNumber:()=>{c.value.stock.toString().length>0?c.value.stock=parseFloat(c.value.stock.toString().replace(/\D/g,"")):c.value.stock=0,c.value.descuento.toString().length>0?c.value.descuento=parseFloat(c.value.descuento.toString().replace(/\D/g,"")):c.value.descuento=0},actualizarTabla:ve,claim:I,formProduct:c,transformToUpperCase:()=>{c.value.nombre=c.value.nombre.toUpperCase()},limpiarFormulario:f,loading:J,mostrarNotify:y,onSubmit:async m=>{try{if(W.value.length==0)return y("warning","Elige una sucursal por favor");if(c.value.tipo.length==0)return y("warning","Completa el campo tipo por favor");J.value=!0;let g={headers:{sucursal_id:W.value}};m?await U.patch("/products/"+c.value.id,c.value,g):await U.post("/products",c.value,g),y("positive",`Producto ${m?"editado":"agregado"} exitosamente`),me.value=!1,pe.value=!1,ve.value=!0,f(),J.value=!1}catch(g){J.value=!1,y("warning",g.response.data.message)}},selectSucursal:W,validDecimal:m=>{let g=0;m=="pvm"?g=c.value.precio_compra:g=c.value.pvp;const x=/^\d{0,9}(\.\d{1,2})?$/;setTimeout(function(){let A=0;if(m=="pvm"?A=c.value.precio_compra:A=c.value.pvp,!x.test(A.toString())){const E=parseFloat(g.toString().substring(0,g.toString().length-1));m=="pvm"?c.value.precio_compra=E:c.value.pvp=E}},0)},modalAgregarProducto:me,modalEditarProducto:pe}};const je={class:"row q-pt-lg q-gutter-lg justify-center"},Ke={class:"col-xs-12 col-sm-5"},Xe=r("label",null,"Codigo / Serial:",-1),Ge={class:"col-xs-12 col-sm-5"},He=r("label",null,"Nombre:",-1),Je={class:"col-xs-12 col-sm-5"},We=r("label",null,"Precio de Compra:",-1),Ye={class:"col-xs-12 col-sm-5"},Ze=r("label",null,"PVP:",-1),el={class:"col-xs-12 col-sm-5"},ll=r("label",null,"Aplica IVA:",-1),al={class:"col-xs-12 col-sm-5"},ol=r("label",null,"Descuento(%):",-1),tl={class:"col-xs-12 col-sm-5"},sl=r("label",null,"Tipo:",-1),rl={key:0,class:"col-xs-12 col-sm-5"},nl=r("label",null,"Sucursal:",-1),il={class:"col-xs-9 col-sm-12 q-mt-lg q-mb-md flex justify-center"},_e=ie({__name:"FormProduct",props:{edit:{type:Boolean}},setup(U){const I=U,y=v([]),{claim:f,api:w,mostrarNotify:P,selectSucursal:$}=le();(async()=>{try{const{data:N}=await w.get(`/sucursal/find/${f.company.id}/company`);N.forEach(u=>{y.value.push({label:u.nombre,value:u.id})})}catch{P("warning","No se puedo cargar las sucursales")}})();const{formProduct:m,allowOnlyNumber:g,transformToUpperCase:x,validDecimal:A,onSubmit:E,loading:R}=le();return(N,u)=>(n(),_(Qe,{onSubmit:u[10]||(u[10]=o=>s(E)(I.edit))},{default:l(()=>[r("div",je,[r("div",Ke,[Xe,a(j,{modelValue:s(m).codigoBarra,"onUpdate:modelValue":u[0]||(u[0]=o=>s(m).codigoBarra=o),onKeyup:s(g),dense:"",filled:"",required:""},null,8,["modelValue","onKeyup"])]),r("div",Ge,[He,a(j,{modelValue:s(m).nombre,"onUpdate:modelValue":u[1]||(u[1]=o=>s(m).nombre=o),modelModifiers:{trim:!0},onKeyup:s(x),dense:"",filled:"",required:""},null,8,["modelValue","onKeyup"])]),r("div",Je,[We,a(j,{type:"number",modelValue:s(m).precio_compra,"onUpdate:modelValue":u[2]||(u[2]=o=>s(m).precio_compra=o),modelModifiers:{trim:!0},min:"0","input-class":"resaltarTextoInput",step:".01",onKeyup:u[3]||(u[3]=o=>s(A)("pvm")),dense:"",filled:""},null,8,["modelValue"])]),r("div",Ye,[Ze,a(j,{modelValue:s(m).pvp,"onUpdate:modelValue":u[4]||(u[4]=o=>s(m).pvp=o),modelModifiers:{trim:!0},type:"number",min:"0","input-class":"resaltarTextoInput",step:".01",onKeyup:u[5]||(u[5]=o=>s(A)("pvp")),dense:"",filled:"",required:""},null,8,["modelValue"])]),r("div",el,[ll,a(G,{modelValue:s(m).aplicaIva,"onUpdate:modelValue":u[6]||(u[6]=o=>s(m).aplicaIva=o),filled:"",dense:"",required:"","emit-value":"","map-options":"",options:[{label:"SI",value:!0},{label:"NO",value:!1}]},null,8,["modelValue"])]),r("div",al,[ol,a(j,{type:N.$q.platform.is.mobile?"number":"text",modelValue:s(m).descuento,"onUpdate:modelValue":u[7]||(u[7]=o=>s(m).descuento=o),"input-class":"resaltarTextoInput",onKeyup:s(g),dense:"",filled:"",required:""},null,8,["type","modelValue","onKeyup"])]),r("div",tl,[sl,a(G,{modelValue:s(m).tipo,"onUpdate:modelValue":u[8]||(u[8]=o=>s(m).tipo=o),filled:"",dense:"",required:"",options:["Producto","Servicio"]},null,8,["modelValue"])]),s(f).roles[0]=="SUPER-ADMINISTRADOR"||s(f).roles[0]=="ADMINISTRADOR"?(n(),Q("div",rl,[nl,a(G,{filled:"",dense:"",modelValue:s($),"onUpdate:modelValue":u[9]||(u[9]=o=>M($)?$.value=o:null),"emit-value":"","map-options":"",options:y.value},null,8,["modelValue","options"])])):S("",!0),r("div",il,[a(V,{type:"submit",icon:"save",loading:s(R),outline:"",rounded:"",class:"q-px-xl",style:{color:"#696cff"}},{default:l(()=>[k(" \xA0 Guardar Cambios ")]),_:1},8,["loading"])])])]),_:1}))}}),ul={class:"text-h6 text-center"},dl=ie({__name:"AddProduct",setup(U){const{limpiarFormulario:I}=le();return I(),(y,f)=>(n(),_(ae,{style:{width:"643px !important","max-width":"fit-content"}},{default:l(()=>[a(K,null,{default:l(()=>[r("div",ul,[k(" Agregar Producto "),B(a(V,{round:"",flat:"",dense:"",icon:"close",class:"float-right",color:"grey-8"},null,512),[[O]])])]),_:1}),a(ne,{inset:""}),a(K,{class:"q-pt-none"},{default:l(()=>[a(_e,{edit:!1})]),_:1})]),_:1}))}}),cl={class:"text-h6 text-center"},ml=ie({__name:"EditProduct",setup(U){return(I,y)=>(n(),_(ae,{style:{width:"643px !important","max-width":"fit-content"}},{default:l(()=>[a(K,null,{default:l(()=>[r("div",cl,[k(" Editar Producto "),B(a(V,{round:"",flat:"",dense:"",icon:"close",class:"float-right",color:"grey-8"},null,512),[[O]])])]),_:1}),a(ne,{inset:""}),a(K,{class:"q-pt-none"},{default:l(()=>[a(_e,{edit:!0})]),_:1})]),_:1}))}}),pl={class:"q-ma-lg q-pt-md"},vl={class:"row q-col-gutter-lg"},fl={class:"col-12"},gl={key:0,class:"text-center row justify-center",style:{width:"100%"}},_l=r("label",{class:"q-mb-sm text-grey-7 text-h6"}," Listado de Productos ",-1),yl=[_l],bl=r("label",{class:"q-mr-sm row items-center"},[r("span",null,"Sucursal: ")],-1),xl=r("div",{class:"full-width row flex-center text-lime-10 q-gutter-sm"},[r("span",{class:"text-subtitle1"}," No se encontr\xF3 ningun Resultado ")],-1),Bl={__name:"IndexPage",setup(U){let{actualizarTabla:I,claim:y,modalAgregarProducto:f,modalEditarProducto:w,formProduct:P,selectSucursal:$}=le();const T=[{name:"acciones",label:"acciones",align:"center"},{name:"codigoBarra",label:"Codigo de Barra",align:"center",field:"codigoBarra"},{name:"producto",label:"Producto",align:"center",field:"nombre"},{name:"stock",label:"Stock",align:"center",field:"stock"},{name:"descuento",label:"Descuento",align:"center",field:"descuento"},{name:"aplicaIva",label:"Aplica Iva",align:"center",field:"aplicaIva"},{name:"estado",label:"Estado",align:"center",field:"isActive"}],m=v(!1),{api:g,mostrarNotify:x,confirmDelete:A,isDeleted:E}=ue(),{validarPermisos:R}=Ue(),N=v([]),u=v("codigo"),o=v(""),i=v(),p=v(!1),h=v(""),C=v([]),q=v({sortBy:"desc",descending:!1,page:1,rowsPerPage:10,rowsNumber:15}),de=async(d,t)=>{try{const{data:{msg:e}}=await g.patch(`/products/${d}/${t}`);x("positive",e),z(1,q.value.rowsPerPage)}catch(e){console.log(e)}};Y(E,(d,t)=>{d&&z(1,q.value.rowsPerPage)}),Y(u,(d,t)=>{z(1,q.value.rowsPerPage)}),Y(I,(d,t)=>{d&&(z(1,q.value.rowsPerPage),I.value=!1)});const ye=async d=>{try{A("Estas seguro de eliminar este producto?",`/products/${d}`)}catch(t){console.log(t)}},be=async()=>{p.value=!0;try{const{data:d}=await g.get(`/sucursal/find/${y.company.id}/company`);d.forEach(t=>{C.value.push({label:t.nombre,value:t.id})}),C.value.length!==0&&(h.value=C.value[0].value)}catch(d){x("warning",d.response.data.message)}p.value=!1},z=async(d=1,t=10)=>{C.value.length==0&&await be();let e={sucursal_id:h.value};try{const{data:b}=await g.get("/products",{params:{page:d,limit:t,busqueda:o.value},headers:e});q.value.rowsNumber=b.meta.totalItems,N.value=b.items}catch(b){console.log(b)}},xe=async()=>{try{const{data:d}=await g.post("/products/download-products-excel",{sucursal_id:h.value},{responseType:"arraybuffer"}),t=new Blob([d],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),e=document.createElement("a");e.href=window.URL.createObjectURL(t),e.download="productos_servicios.xlsx",document.body.appendChild(e),e.click(),document.body.removeChild(e)}catch{}};async function we(d){const{page:t,rowsPerPage:e,sortBy:b,descending:ke}=d.pagination;p.value=!0,await z(t,e),q.value.page=t,q.value.rowsPerPage=e,q.value.sortBy=b,q.value.descending=ke,p.value=!1}const he=()=>{var d="/plantillas/productos_plantilla.xlsx";window.location.href=d};Ie(()=>{i.value.requestServerInteraction()});const F=v("list");return(d,t)=>(n(),Q(X,null,[r("div",pl,[r("div",vl,[r("div",fl,[a(ae,{flat:"",class:"shadow_custom"},{default:l(()=>[a(Se,{"title-class":"text-grey-7 text-h6",rows:N.value,loading:p.value,"hide-header":F.value==="grid",columns:T,"row-key":"name",grid:F.value==="grid",filter:o.value,pagination:q.value,"onUpdate:pagination":t[6]||(t[6]=e=>q.value=e),"rows-per-page-options":[10,15,20,0],ref_key:"tableRef",ref:i,"binary-state-sort":"",onRequest:we},{header:l(e=>[a(Pe,{props:e,style:{height:"60px"}},{default:l(()=>[(n(!0),Q(X,null,fe(e.cols,b=>(n(),_(Ve,{key:b.name,props:e,class:"text-grey-7 text-weight-bold text-uppercase",style:{"font-size":"13px"}},{default:l(()=>[k(D(b.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"top-left":l(e=>[s(y).roles[0]!=="SUPER-ADMINISTRADOR"&&s(y).roles[0]!=="ADMINISTRADOR"?(n(),Q("div",gl,yl)):S("",!0),s(y).roles[0]=="SUPER-ADMINISTRADOR"||s(y).roles[0]=="ADMINISTRADOR"?(n(),Q("div",{key:1,style:{display:"flex"},class:re([d.$q.screen.xs?"q-mb-md":""])},[bl,a(G,{outlined:"",dense:"",modelValue:h.value,"onUpdate:modelValue":[t[0]||(t[0]=b=>h.value=b),t[1]||(t[1]=b=>z(1,q.value.rowsPerPage))],"emit-value":"","map-options":"",options:C.value},null,8,["modelValue","options"])],2)):S("",!0)]),"top-right":l(e=>[!d.$q.screen.xs&&s(R)("crear.productos")?(n(),_(V,{key:0,onClick:t[2]||(t[2]=b=>M(f)?f.value=!s(f):f=!s(f)),outline:"",color:"primary",label:"Agregar Producto",class:"q-mr-xs"})):S("",!0),a(De,{outline:"",class:"q-mr-sm q-ml-xs",color:"teal-6",icon:"fa-solid fa-file-excel"},{default:l(()=>[a(ge,null,{default:l(()=>[B((n(),_(ee,{clickable:"",onClick:t[3]||(t[3]=b=>m.value=!0)},{default:l(()=>[a(H,null,{default:l(()=>[a(te,null,{default:l(()=>[k("Importar Excel")]),_:1})]),_:1})]),_:1})),[[O]]),B((n(),_(ee,{onClick:he,clickable:""},{default:l(()=>[a(H,null,{default:l(()=>[a(te,null,{default:l(()=>[k("Exportar Plantilla")]),_:1})]),_:1})]),_:1})),[[O]]),B((n(),_(ee,{onClick:xe,clickable:""},{default:l(()=>[a(H,null,{default:l(()=>[a(te,null,{default:l(()=>[k("Exportar Productos/Servicios")]),_:1})]),_:1})]),_:1})),[[O]])]),_:1})]),_:1}),a(j,{style:Ce(d.$q.screen.width>700||"width: 70%"),outlined:"",dense:"",debounce:"900",modelValue:o.value,"onUpdate:modelValue":t[4]||(t[4]=b=>o.value=b),placeholder:"Buscar..."},{append:l(()=>[a(Z,{name:"search"})]),_:1},8,["style","modelValue"]),F.value==="list"?(n(),_(V,{key:1,flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen",onClick:e.toggleFullscreen},{default:l(()=>[B((n(),_(se,{disable:d.$q.platform.is.mobile},{default:l(()=>[k(D(e.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen"),1)]),_:2},1032,["disable"])),[[O]])]),_:2},1032,["icon","onClick"])):S("",!0),e.inFullscreen?S("",!0):(n(),_(V,{key:2,flat:"",round:"",dense:"",icon:F.value==="grid"?"list":"grid_on",onClick:t[5]||(t[5]=b=>{F.value=F.value==="grid"?"list":"grid",d.separator=F.value==="grid"?"none":"horizontal"})},{default:l(()=>[B((n(),_(se,{disable:d.$q.platform.is.mobile},{default:l(()=>[k(D(F.value==="grid"?"List":"Grid"),1)]),_:1},8,["disable"])),[[O]])]),_:1},8,["icon"]))]),"body-cell-acciones":l(e=>[a(L,{props:e},{default:l(()=>[e.row.isActive?(n(),Q(X,{key:0},[s(R)("editar.productos")?(n(),_(V,{key:0,round:"",color:"blue-grey",onClick:b=>(M(P)?P.value={...e.row}:P={...e.row},M($)?$.value=e.row.sucursal_id.id:$=e.row.sucursal_id.id,M(w)?w.value=!0:w=!0),icon:"edit",class:"q-mr-sm",size:"10px"},null,8,["onClick"])):S("",!0),s(R)("inactivar.productos")?(n(),_(V,{key:1,round:"",color:"blue-grey",icon:"close",onClick:b=>de(e.row.id,!1),size:"10px"},null,8,["onClick"])):S("",!0)],64)):(n(),Q(X,{key:1},[s(R)("activar.productos")?(n(),_(V,{key:0,round:"",color:"blue-grey",icon:"done",size:"10px",onClick:b=>de(e.row.id,!0)},null,8,["onClick"])):S("",!0),!e.row.isActive&&s(R)("eliminar.productos")?(n(),_(V,{key:1,round:"",color:"blue-grey",class:"q-ml-sm",icon:"delete",size:"10px",onClick:b=>ye(e.row.id)},null,8,["onClick"])):S("",!0)],64))]),_:2},1032,["props"])]),"body-cell-codigoBarra":l(e=>[a(L,{props:e},{default:l(()=>[k(D(e.row.codigoBarra),1)]),_:2},1032,["props"])]),"body-cell-producto":l(e=>[a(L,{props:e},{default:l(()=>[k(D(e.row.nombre),1)]),_:2},1032,["props"])]),"body-cell-descuento":l(e=>[a(L,{props:e},{default:l(()=>[k(D(e.row.descuento)+"% ",1)]),_:2},1032,["props"])]),"body-cell-aplicaIva":l(e=>[a(L,{props:e},{default:l(()=>[k(D(e.row.aplicaIva?"SI":"NO"),1)]),_:2},1032,["props"])]),"body-cell-estado":l(e=>[a(L,{props:e},{default:l(()=>[e.row.isActive?(n(),_(ce,{key:0,outline:"",color:"positive",label:"Activo",class:"q-pa-sm"})):(n(),_(ce,{key:1,outline:"",color:"red",label:"Inactivo",class:"q-pa-sm"}))]),_:2},1032,["props"])]),"no-data":l(({icon:e})=>[xl]),_:1},8,["rows","loading","hide-header","grid","filter","pagination"])]),_:1})])])]),a(oe,{modelValue:s(f),"onUpdate:modelValue":t[7]||(t[7]=e=>M(f)?f.value=e:f=e)},{default:l(()=>[a(dl)]),_:1},8,["modelValue"]),a(oe,{modelValue:s(w),"onUpdate:modelValue":t[8]||(t[8]=e=>M(w)?w.value=e:w=e)},{default:l(()=>[a(ml)]),_:1},8,["modelValue"]),d.$q.screen.xs&&s(R)("crear.productos")?(n(),_(Ae,{key:0,position:"bottom-right",offset:[18,18]},{default:l(()=>[a(V,{round:"",color:"secondary",size:"lg",icon:"add",onClick:t[9]||(t[9]=e=>M(f)?f.value=!0:f=!0)})]),_:1})):S("",!0),a(oe,{modelValue:m.value,"onUpdate:modelValue":t[11]||(t[11]=e=>m.value=e)},{default:l(()=>[a(Le,{onActualizarDatos:t[10]||(t[10]=e=>z())})]),_:1},8,["modelValue"])],64))}};export{Bl as default};
