import{Q as ve,a as W,b as _e}from"./QTable.9df74c75.js";import{a as le,Q as ge}from"./QTooltip.73d904aa.js";import{r as b,C as be,v as K,d as te,o as a,a9 as m,g as l,ad as o,e as s,ae as O,f as e,Q as A,h as w,aU as G,aa as Q,O as E,aV as T,ah as ae,i as B,ab as N,c as S,aj as R,ai as ce,B as xe,af as V,a8 as ye,aX as L,aY as Z}from"./index.1eb79b9c.js";import{a as X,Q as I,d as ee}from"./format.694d017e.js";import{Q as me}from"./QList.c5a11a96.js";import{Q as he}from"./QBtnDropdown.51451a0c.js";import{Q as ne}from"./QBadge.a5f7ee3f.js";import{Q as Ce}from"./QPageSticky.009c7164.js";import{C as z}from"./ClosePopup.dfa4db61.js";import{u as oe}from"./useHelpers.33b51013.js";import{a as ie}from"./axios.a2ad1f31.js";import{Q as fe}from"./QSelect.1ef953d4.js";import{Q as we}from"./QForm.3bf39009.js";import{Q as ke}from"./QFile.fb7317db.js";import{u as Ve}from"./useRolPermisos.8bc13780.js";import"./QBtnGroup.f03ab9f0.js";import"./use-quasar.36cfd852.js";const j=b(!1),_=b({nombres:"",tipo_documento:"",numero_documento:"",email:"",celular:"",direccion:""}),re=b(!1),ue=b(!1),de=b(!1),se=()=>{const{mostrarNotify:U}=oe(),D=()=>{_.value.nombres="",_.value.tipo_documento="",_.value.numero_documento="",_.value.email="",_.value.celular="",_.value.direccion=""},u=()=>{_.value.numero_documento=_.value.numero_documento.replace(/\D/g,""),_.value.celular=_.value.celular.replace(/\D/g,"")};return be(()=>{K(_.value,(n,y)=>{if(_.value.nombres=n.nombres.toUpperCase(),n.tipo_documento!==""&&n.tipo_documento!=="04"&&_.value.numero_documento.length>10){const h=n.numero_documento.length-10,k=n.numero_documento.substring(0,n.numero_documento.length-h);_.value.numero_documento=k}})}),{actualizarLista:de,formCliente:_,loading:j,limpiarFormulario:D,allowOnlyNumber:u,modalAgregarCliente:re,modalEditarCliente:ue,validateNumDocument:[n=>n.length>=(_.value.tipo_documento==="04"?13:10)||`Debes completar ${_.value.tipo_documento==="04"?13:10} digitos`],validateNumCelular:[n=>n.length>=10||"Debes completar 10 digitos"],onSubmit:async n=>{try{j.value=!0,n?await ie.patch("/customers/"+_.value.id,_.value):await ie.post("/customers/create",_.value),U("positive",`Cliente ${n?"editado":"agregado"} exitosamente`),re.value=!1,ue.value=!1,de.value=!0,j.value=!1}catch(y){U("warning",y.response.data.message),j.value=!1}}}},$e={class:"row q-pt-lg q-gutter-lg justify-center"},qe=s("label",null,"Nombres:",-1),Qe={class:"col-xs-12 col-sm-5"},De=s("label",null,"Tipo de Documento:",-1),Se={class:"col-xs-12 col-sm-5"},Ee=s("label",null,"Numero de Documento:",-1),Ue={class:"col-xs-12 col-sm-5"},ze=s("label",null,"Email:",-1),Fe={class:"col-xs-12 col-sm-5"},Ne=s("label",null,"Celular:",-1),Le=s("label",null,"Direcci\xF3n:",-1),Ae={class:"col-xs-9 col-sm-12 flex justify-center"},pe=te({__name:"FormCliente",props:{edit:{type:Boolean}},setup(U){const D=U,{formCliente:u,loading:p,allowOnlyNumber:n,validateNumDocument:y,validateNumCelular:h,onSubmit:k}=se();return($,g)=>(a(),m(we,{onSubmit:g[6]||(g[6]=i=>o(k)(D.edit))},{default:l(()=>[s("div",$e,[s("div",{class:O(["col-xs-12 col-sm-11",[$.$q.screen.xs?"":"q-px-md"]])},[qe,e(A,{modelValue:o(u).nombres,"onUpdate:modelValue":g[0]||(g[0]=i=>o(u).nombres=i),modelModifiers:{trim:!0},dense:"",filled:"",required:""},null,8,["modelValue"])],2),s("div",Qe,[De,e(fe,{dense:"",modelValue:o(u).tipo_documento,"onUpdate:modelValue":g[1]||(g[1]=i=>o(u).tipo_documento=i),modelModifiers:{trim:!0},filled:"","emit-value":"","map-options":"",options:[{label:"RUC",value:"04"},{label:"Cedula",value:"05"},{label:"Pasaporte",value:"06"}]},null,8,["modelValue"])]),s("div",Se,[Ee,e(A,{modelValue:o(u).numero_documento,"onUpdate:modelValue":g[2]||(g[2]=i=>o(u).numero_documento=i),disable:o(u).tipo_documento==="",counter:"",maxlength:o(u).tipo_documento==="04"?13:10,rules:o(y),"lazy-rules":"",dense:"",filled:"",required:"",onKeyup:o(n)},null,8,["modelValue","disable","maxlength","rules","onKeyup"])]),s("div",Ue,[ze,e(A,{modelValue:o(u).email,"onUpdate:modelValue":g[3]||(g[3]=i=>o(u).email=i),modelModifiers:{trim:!0},type:"email",dense:"",filled:"",required:""},null,8,["modelValue"])]),s("div",Fe,[Ne,e(A,{modelValue:o(u).celular,"onUpdate:modelValue":g[4]||(g[4]=i=>o(u).celular=i),modelModifiers:{trim:!0},counter:"",maxlength:"10",rules:o(h),"lazy-rules":"",onKeyup:o(n),dense:"",filled:"",required:""},null,8,["modelValue","rules","onKeyup"])]),s("div",{class:O(["col-xs-12 col-sm-11",[$.$q.screen.xs?"":"q-px-md"]])},[Le,e(A,{modelValue:o(u).direccion,"onUpdate:modelValue":g[5]||(g[5]=i=>o(u).direccion=i),dense:"",filled:"",required:""},null,8,["modelValue"])],2),s("div",Ae,[e(w,{label:$.edit?"Editar":"Guardar",loading:o(p),class:"q-px-xl",type:"submit",outline:"",rounded:"",style:{color:"#696cff"}},null,8,["label","loading"])])])]),_:1}))}}),Be={class:"text-h6 text-center"},Te=te({__name:"AddCliente",setup(U){const{limpiarFormulario:D}=se();return D(),(u,p)=>(a(),m(G,{style:{width:"843px !important","max-width":"fit-content"}},{default:l(()=>[e(T,null,{default:l(()=>[s("div",Be,[Q(" Agregar Cliente "),E(e(w,{round:"",flat:"",dense:"",icon:"close",class:"float-right",color:"grey-8"},null,512),[[z]])])]),_:1}),e(ae,{inset:""}),e(T,{class:"q-pt-none"},{default:l(()=>[e(pe,{edit:!1})]),_:1})]),_:1}))}}),Pe={class:"text-h6 text-center"},Re=te({__name:"EditCliente",setup(U){return(D,u)=>(a(),m(G,{style:{width:"843px !important","max-width":"fit-content"}},{default:l(()=>[e(T,null,{default:l(()=>[s("div",Pe,[Q(" Editar Cliente "),E(e(w,{round:"",flat:"",dense:"",icon:"close",class:"float-right",color:"grey-8"},null,512),[[z]])])]),_:1}),e(ae,{inset:""}),e(T,{class:"q-pt-none"},{default:l(()=>[e(pe,{edit:!0})]),_:1})]),_:1}))}});const Ie={class:"text-h6 text-center"},Me={class:"row flex flex-center"},je={class:"col-xs-11 col-sm-9 text-center q-mt-sm"},Xe=s("label",null,"Subir clientes desde excel:",-1),Ke={class:"col-xs-11 col-sm-9 text-center q-mt-md"},Oe=s("label",null,"Elige una sucursal:",-1),Ge={key:0,class:"col-12 q-mt-md"},He={class:"col-xs-9 col-md-12 flex justify-center q-ml-none"},Ye={__name:"ModalCargarExcel",emits:["actualizarDatos"],setup(U,{emit:D}){const u=b(null),p=b(!1),n=b([]),y=b([]),h=b([]),k=b(""),{api:$,claim:g}=oe(),i=b({file:{message:"",isValid:!0},sucursal:{message:"",isValid:!0}});K(u,d=>{const r=d[0],v=new FileReader;v.onload=function(x){const C=x.target.result;M(C)},v.readAsBinaryString(r)});const P=async()=>{h.value=[];const{data:d}=await $.get(`/sucursal/find/${g.company.id}/company`);d.forEach(r=>{h.value.push({label:r.nombre,value:r.id})})};function M(d){const r=XLSX.read(d,{type:"binary"}),v=r.Sheets[r.SheetNames[0]],x=XLSX.utils.sheet_to_json(v,{header:1});n.value=x}function H(d){return new Promise(r=>setTimeout(r,d))}const Y=()=>{let d=!1;return u.value==null&&(i.value.file.message="Debes completar este campo",i.value.file.isValid=!1,d=!0),k.value.length==0&&(i.value.sucursal.message="Debes completar este campo",i.value.sucursal.isValid=!1,d=!0),i.value.isValid&&u.value[0].type!=="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"&&(i.value.file.message="Debes subir un archivo excel",i.value.file.isValid=!1,d=!0),d},F=async()=>{if(!Y()){p.value=!0;for(let d=1;d<n.value.length;d++){if(n.value[d].length>0){const r=n.value[d];y.value.unshift({nombre:r[0],estado:"cargando",message:"",index:d});try{await H(700);let v={headers:{sucursal_id:k.value}},x;r[1].toLowerCase()=="ruc"&&(x="04"),r[1].toLowerCase()=="cedula"&&(x="05"),r[1].toLowerCase()=="pasaporte"&&(x="06"),await $.post("/customers/create",{nombres:r[0],tipo_documento:x,numero_documento:r[2].toString(),email:r[3],celular:r[4].toString(),direccion:r[5]},v);let C=y.value.find(J=>J.index==d);C.estado="success"}catch(v){let x=y.value.find(C=>C.index==d);x.estado="error",x.message=v.response.data.message}}d+1==n.value.length&&(D("actualizarDatos"),p.value=!1)}}};return P(),(d,r)=>(a(),m(G,{style:{width:"600px","max-width":"80vw"}},{default:l(()=>[e(T,null,{default:l(()=>[s("div",Ie,[Q(" Carga masiva de clientes "),E(e(w,{round:"",flat:"",dense:"",icon:"close",class:"float-right",color:"grey-8"},null,512),[[z]])])]),_:1}),e(ae,{inset:""}),e(T,{class:"q-pt-md"},{default:l(()=>[s("div",Me,[s("div",je,[Xe,e(ke,{"input-class":"inputFileClick",accept:".xls, .xlsx",dense:"",error:!i.value.file.isValid,"onUpdate:modelValue":[r[0]||(r[0]=v=>i.value.file.isValid=!0),r[1]||(r[1]=v=>u.value=v)],modelValue:u.value,outlined:"",multiple:"",append:""},{append:l(()=>[e(B,{name:"fa-solid fa-file-excel"})]),error:l(()=>[s("label",{class:O(d.$q.dark.isActive?"text-red-4":"text-negative")},N(i.value.file.message),3)]),_:1},8,["error","modelValue"])]),s("div",Ke,[Oe,e(fe,{outlined:"",dense:"",modelValue:k.value,"onUpdate:modelValue":[r[2]||(r[2]=v=>k.value=v),r[3]||(r[3]=v=>i.value.sucursal.isValid=!0)],error:!i.value.sucursal.isValid,"emit-value":"","map-options":"",options:h.value},{error:l(()=>[s("label",{class:O(d.$q.dark.isActive?"text-red-4":"text-negative")},N(i.value.sucursal.message),3)]),_:1},8,["modelValue","error","options"])])]),y.value.length>0?(a(),S("div",Ge,[e(me,{bordered:"",id:"scrollList"},{default:l(()=>[(a(!0),S(R,null,ce(y.value,(v,x)=>E((a(),m(X,{key:x,clickable:""},{default:l(()=>[e(I,null,{default:l(()=>[Q(N(v.nombre),1)]),_:2},1024),e(I,{avatar:""},{default:l(()=>[v.estado=="cargando"?(a(),m(xe,{key:0,size:"30px",color:"primary"})):V("",!0),v.estado=="success"?(a(),m(B,{key:1,name:"check_circle",color:"green-9"})):V("",!0),v.estado=="error"?(a(),m(B,{key:2,name:"error",color:"negative"},{default:l(()=>[e(le,{anchor:"top middle",self:"bottom middle",offset:[10,10]},{default:l(()=>[Q(N(v.message),1)]),_:2},1024)]),_:2},1024)):V("",!0)]),_:2},1024)]),_:2},1024)),[[ye]])),128))]),_:1})])):V("",!0),s("div",He,[e(w,{label:"Subir clientes",loading:p.value,class:"q-px-xl q-mt-md q-mb-md",onClick:F,outline:"",rounded:"",style:{color:"#696cff"}},null,8,["loading"])])]),_:1})]),_:1}))}},Je={class:"q-ma-lg q-pt-md"},We={class:"row q-col-gutter-lg"},Ze={class:"col-12"},el={key:0},ll={key:1},tl={key:2},al={class:"full-width row flex-center text-lime-10 q-gutter-sm"},ol=s("span",{class:"text-subtitle1"}," No se encontr\xF3 ningun Resultado ",-1),Cl={__name:"IndexPage",setup(U){const D=[{name:"acciones",label:"acciones",align:"center"},{name:"nombre",align:"center",label:"Cliente",field:"nombres",sortable:!0},{name:"tipo_documento",align:"center",label:"Tipo de Documento",field:"tipo_documento"},{name:"numero_documento",align:"center",label:"Numero de Documento",field:"numero_documento"},{name:"email",label:"Email",field:"email",align:"center"},{name:"celular",label:"Celular",field:"celular",align:"center"},{name:"estado",label:"Estado",align:"center",field:"estado"}];let{actualizarLista:u,modalAgregarCliente:p,modalEditarCliente:n,formCliente:y}=se();const{validarPermisos:h}=Ve(),k=b(!1),$=b(""),g=b([]),i=b(!1),{api:P,mostrarNotify:M,confirmDelete:H,isDeleted:Y}=oe();K(u,(f,c)=>{f&&F()});const F=async()=>{i.value=!0;try{const{data:f}=await P.get("/customers");g.value=f,u.value=!1}catch(f){M("warning",f.response.data.message)}i.value=!1},d=async(f,c)=>{try{const{data:{msg:t}}=await P.patch(`/customers/${f}/${c}`);M("positive",t),F()}catch(t){console.log(t)}};K(Y,(f,c)=>{f&&F()});const r=async f=>{H("Estas seguro de eliminar este cliente?",`/customers/${f}`)},v=()=>{var f="/plantillas/clientes_plantilla.xlsx";window.location.href=f},x=async()=>{try{const{data:f}=await P.post("/customers/download-clients-excel",{},{responseType:"arraybuffer"}),c=new Blob([f],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),t=document.createElement("a");t.href=window.URL.createObjectURL(c),t.download="clientes.xlsx",document.body.appendChild(t),t.click(),document.body.removeChild(t),console.log(f)}catch{}};F();const C=b("list"),J=b({rowsPerPage:10});return(f,c)=>(a(),S(R,null,[s("div",Je,[s("div",We,[s("div",Ze,[e(G,{flat:"",class:"shadow_custom"},{default:l(()=>[e(ve,{"title-class":"text-grey-7 text-h6",title:"Listado de Clientes",rows:g.value,loading:i.value,"hide-header":C.value==="grid",columns:D,"row-key":"name",grid:C.value==="grid",filter:$.value,pagination:J.value},{header:l(t=>[e(ge,{props:t,style:{height:"60px"}},{default:l(()=>[(a(!0),S(R,null,ce(t.cols,q=>(a(),m(_e,{key:q.name,props:t,class:"text-grey-7 text-weight-bold text-uppercase",style:{"font-size":"13px"}},{default:l(()=>[Q(N(q.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"top-right":l(t=>[!f.$q.screen.xs&&o(h)("crear.cliente")?(a(),m(w,{key:0,onClick:c[0]||(c[0]=q=>L(p)?p.value=!o(p):p=!o(p)),outline:"",color:"primary",label:"Agregar Cliente",class:"q-mr-xs"})):V("",!0),e(he,{class:"q-mr-xs",outline:"",color:"primary",icon:"fa-solid fa-file-excel"},{default:l(()=>[e(me,null,{default:l(()=>[E((a(),m(X,{clickable:"",onClick:c[1]||(c[1]=q=>k.value=!0)},{default:l(()=>[e(I,null,{default:l(()=>[e(ee,null,{default:l(()=>[Q("Importar Excel")]),_:1})]),_:1})]),_:1})),[[z]]),E((a(),m(X,{onClick:v,clickable:""},{default:l(()=>[e(I,null,{default:l(()=>[e(ee,null,{default:l(()=>[Q("Exportar Plantilla")]),_:1})]),_:1})]),_:1})),[[z]]),E((a(),m(X,{onClick:x,clickable:""},{default:l(()=>[e(I,null,{default:l(()=>[e(ee,null,{default:l(()=>[Q("Exportar Clientes")]),_:1})]),_:1})]),_:1})),[[z]])]),_:1})]),_:1}),e(A,{outlined:"",dense:"",debounce:"300",modelValue:$.value,"onUpdate:modelValue":c[2]||(c[2]=q=>$.value=q),placeholder:"Buscar..."},{append:l(()=>[e(B,{name:"search"})]),_:1},8,["modelValue"]),C.value==="list"?(a(),m(w,{key:1,flat:"",round:"",dense:"",icon:t.inFullscreen?"fullscreen_exit":"fullscreen",onClick:t.toggleFullscreen},{default:l(()=>[E((a(),m(le,{disable:f.$q.platform.is.mobile},{default:l(()=>[Q(N(t.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen"),1)]),_:2},1032,["disable"])),[[z]])]),_:2},1032,["icon","onClick"])):V("",!0),t.inFullscreen?V("",!0):(a(),m(w,{key:2,flat:"",round:"",dense:"",icon:C.value==="grid"?"list":"grid_on",onClick:c[3]||(c[3]=q=>{C.value=C.value==="grid"?"list":"grid",f.separator=C.value==="grid"?"none":"horizontal"})},{default:l(()=>[E((a(),m(le,{disable:f.$q.platform.is.mobile},{default:l(()=>[Q(N(C.value==="grid"?"List":"Grid"),1)]),_:1},8,["disable"])),[[z]])]),_:1},8,["icon"]))]),"body-cell-tipo_documento":l(t=>[e(W,{props:t},{default:l(()=>[s("div",null,[t.row.tipo_documento==4?(a(),S("label",el,"RUC")):t.row.tipo_documento==5?(a(),S("label",ll,"Cedula")):(a(),S("label",tl,"Pasaporte"))])]),_:2},1032,["props"])]),"body-cell-estado":l(t=>[e(W,{props:t},{default:l(()=>[t.row.isActive?(a(),m(ne,{key:0,outline:"",color:"positive",label:"Activo",class:"q-pa-sm"})):(a(),m(ne,{key:1,outline:"",color:"red",label:"Inactivo",class:"q-pa-sm"}))]),_:2},1032,["props"])]),"body-cell-acciones":l(t=>[e(W,{props:t},{default:l(()=>[t.row.isActive?(a(),S(R,{key:0},[o(h)("editar.cliente")?(a(),m(w,{key:0,round:"",color:"blue-grey",onClick:q=>(L(y)?y.value={...t.row}:y={...t.row},L(n)?n.value=!0:n=!0),icon:"edit",class:"q-mr-sm",size:"10px"},null,8,["onClick"])):V("",!0),t.row.isActive&&o(h)("inactivar.cliente")?(a(),m(w,{key:1,round:"",color:"blue-grey",icon:"close",onClick:q=>d(t.row.id,!1),size:"10px"},null,8,["onClick"])):V("",!0)],64)):(a(),S(R,{key:1},[!t.row.isActive&&o(h)("activar.cliente")?(a(),m(w,{key:0,round:"",color:"blue-grey",icon:"done",onClick:q=>d(t.row.id,!0),size:"10px"},null,8,["onClick"])):V("",!0),!t.row.estado&&o(h)("eliminar.cliente")?(a(),m(w,{key:1,round:"",color:"blue-grey",class:"q-ml-sm",icon:"delete",onClick:q=>r(t.row.id),size:"10px"},null,8,["onClick"])):V("",!0)],64))]),_:2},1032,["props"])]),"no-data":l(({icon:t})=>[s("div",al,[e(B,{size:"2em",name:"sentiment_dissatisfied"}),ol,e(B,{size:"2em",name:$.value?"filter_b_and_w":t},null,8,["name"])])]),_:1},8,["rows","loading","hide-header","grid","filter","pagination"])]),_:1})])])]),f.$q.screen.xs&&o(h)("crear.cliente")?(a(),m(Ce,{key:0,position:"bottom-right",offset:[18,18]},{default:l(()=>[e(w,{round:"",color:"secondary",size:"lg",icon:"add",onClick:c[4]||(c[4]=t=>L(p)?p.value=!o(p):p=!o(p))})]),_:1})):V("",!0),e(Z,{modelValue:o(p),"onUpdate:modelValue":c[5]||(c[5]=t=>L(p)?p.value=t:p=t)},{default:l(()=>[e(Te)]),_:1},8,["modelValue"]),e(Z,{modelValue:o(n),"onUpdate:modelValue":c[6]||(c[6]=t=>L(n)?n.value=t:n=t)},{default:l(()=>[e(Re)]),_:1},8,["modelValue"]),e(Z,{modelValue:k.value,"onUpdate:modelValue":c[8]||(c[8]=t=>k.value=t)},{default:l(()=>[e(Ye,{onActualizarDatos:c[7]||(c[7]=t=>F())})]),_:1},8,["modelValue"])],64))}};export{Cl as default};