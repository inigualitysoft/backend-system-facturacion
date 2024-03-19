import{Q as ve,a as Y,b as _e}from"./QTable.841f7159.js";import{a as le,Q as ge}from"./QTooltip.a288d9b7.js";import{r as b,C as be,v as O,d as te,o,a9 as m,g as l,ad as a,e as s,ae as X,f as e,Q as A,h as w,aR as G,aa as Q,O as E,aS as T,ah as oe,i as B,ab as N,c as S,aj as R,ai as ce,B as xe,af as V,a8 as ye,aU as L,aV as Z}from"./index.d6c4bdc6.js";import{a as K,Q as I,c as ee}from"./QItemLabel.1ee9546f.js";import{Q as me}from"./QList.ed89e0ad.js";import{Q as he}from"./QBtnDropdown.9a2835b8.js";import{Q as ne}from"./QBadge.dade6de9.js";import{Q as Ce}from"./QPageSticky.1408c27a.js";import{C as z}from"./ClosePopup.ce0f6283.js";import{u as ae}from"./useHelpers.0a8a684c.js";import{a as ie}from"./axios.465f24f1.js";import{Q as fe}from"./QSelect.a8a1d697.js";import{Q as we}from"./QForm.18dc3b57.js";import{Q as ke}from"./QFile.8a31449c.js";import{u as Ve}from"./useRolPermisos.65eefceb.js";import"./QBtnGroup.227f3910.js";import"./use-quasar.293c2d69.js";import"./QChip.f02742be.js";import"./format.cbf00d5d.js";const j=b(!1),_=b({nombres:"",tipo_documento:"",numero_documento:"",email:"",celular:"",direccion:""}),re=b(!1),ue=b(!1),de=b(!1),se=()=>{const{mostrarNotify:U}=ae(),D=()=>{_.value.nombres="",_.value.tipo_documento="",_.value.numero_documento="",_.value.email="",_.value.celular="",_.value.direccion=""},u=()=>{_.value.numero_documento=_.value.numero_documento.replace(/\D/g,""),_.value.celular=_.value.celular.replace(/\D/g,"")};return be(()=>{O(_.value,(n,y)=>{if(_.value.nombres=n.nombres.toUpperCase(),n.tipo_documento!==""&&n.tipo_documento!=="04"&&_.value.numero_documento.length>10){const h=n.numero_documento.length-10,k=n.numero_documento.substring(0,n.numero_documento.length-h);_.value.numero_documento=k}})}),{actualizarLista:de,formCliente:_,loading:j,limpiarFormulario:D,allowOnlyNumber:u,modalAgregarCliente:re,modalEditarCliente:ue,validateNumDocument:[n=>n.length>=(_.value.tipo_documento==="04"?13:10)||`Debes completar ${_.value.tipo_documento==="04"?13:10} digitos`],validateNumCelular:[n=>n.length>=10||"Debes completar 10 digitos"],onSubmit:async n=>{try{j.value=!0,n?await ie.patch("/customers/"+_.value.id,_.value):await ie.post("/customers/create",_.value),U("positive",`Cliente ${n?"editado":"agregado"} exitosamente`),re.value=!1,ue.value=!1,de.value=!0,j.value=!1}catch(y){U("warning",y.response.data.message),j.value=!1}}}},$e={class:"row q-pt-lg q-gutter-lg justify-center"},qe=s("label",null,"Nombres:",-1),Qe={class:"col-xs-12 col-sm-5"},De=s("label",null,"Tipo de Documento:",-1),Se={class:"col-xs-12 col-sm-5"},Ee=s("label",null,"Numero de Documento:",-1),Ue={class:"col-xs-12 col-sm-5"},ze=s("label",null,"Email:",-1),Fe={class:"col-xs-12 col-sm-5"},Ne=s("label",null,"Celular:",-1),Le=s("label",null,"Direcci\xF3n:",-1),Ae={class:"col-xs-9 col-sm-12 flex justify-center"},pe=te({__name:"FormCliente",props:{edit:{type:Boolean}},setup(U){const D=U,{formCliente:u,loading:p,allowOnlyNumber:n,validateNumDocument:y,validateNumCelular:h,onSubmit:k}=se();return($,g)=>(o(),m(we,{onSubmit:g[6]||(g[6]=i=>a(k)(D.edit))},{default:l(()=>[s("div",$e,[s("div",{class:X(["col-xs-12 col-sm-11",[$.$q.screen.xs?"":"q-px-md"]])},[qe,e(A,{modelValue:a(u).nombres,"onUpdate:modelValue":g[0]||(g[0]=i=>a(u).nombres=i),modelModifiers:{trim:!0},dense:"",filled:"",required:""},null,8,["modelValue"])],2),s("div",Qe,[De,e(fe,{dense:"",modelValue:a(u).tipo_documento,"onUpdate:modelValue":g[1]||(g[1]=i=>a(u).tipo_documento=i),modelModifiers:{trim:!0},filled:"","emit-value":"","map-options":"",options:[{label:"RUC",value:"04"},{label:"Cedula",value:"05"},{label:"Pasaporte",value:"06"}]},null,8,["modelValue"])]),s("div",Se,[Ee,e(A,{modelValue:a(u).numero_documento,"onUpdate:modelValue":g[2]||(g[2]=i=>a(u).numero_documento=i),disable:a(u).tipo_documento==="",counter:"",maxlength:a(u).tipo_documento==="04"?13:10,rules:a(y),"lazy-rules":"",dense:"",filled:"",required:"",onKeyup:a(n)},null,8,["modelValue","disable","maxlength","rules","onKeyup"])]),s("div",Ue,[ze,e(A,{modelValue:a(u).email,"onUpdate:modelValue":g[3]||(g[3]=i=>a(u).email=i),modelModifiers:{trim:!0},type:"email",dense:"",filled:"",required:""},null,8,["modelValue"])]),s("div",Fe,[Ne,e(A,{modelValue:a(u).celular,"onUpdate:modelValue":g[4]||(g[4]=i=>a(u).celular=i),modelModifiers:{trim:!0},counter:"",maxlength:"10",rules:a(h),"lazy-rules":"",onKeyup:a(n),dense:"",filled:"",required:""},null,8,["modelValue","rules","onKeyup"])]),s("div",{class:X(["col-xs-12 col-sm-11",[$.$q.screen.xs?"":"q-px-md"]])},[Le,e(A,{modelValue:a(u).direccion,"onUpdate:modelValue":g[5]||(g[5]=i=>a(u).direccion=i),dense:"",filled:"",required:""},null,8,["modelValue"])],2),s("div",Ae,[e(w,{label:$.edit?"Editar":"Guardar",loading:a(p),class:"q-px-xl",type:"submit",outline:"",rounded:"",style:{color:"#696cff"}},null,8,["label","loading"])])])]),_:1}))}}),Be={class:"text-h6 text-center"},Te=te({__name:"AddCliente",setup(U){const{limpiarFormulario:D}=se();return D(),(u,p)=>(o(),m(G,{style:{width:"843px !important","max-width":"fit-content"}},{default:l(()=>[e(T,null,{default:l(()=>[s("div",Be,[Q(" Agregar Cliente "),E(e(w,{round:"",flat:"",dense:"",icon:"close",class:"float-right",color:"grey-8"},null,512),[[z]])])]),_:1}),e(oe,{inset:""}),e(T,{class:"q-pt-none"},{default:l(()=>[e(pe,{edit:!1})]),_:1})]),_:1}))}}),Pe={class:"text-h6 text-center"},Re=te({__name:"EditCliente",setup(U){return(D,u)=>(o(),m(G,{style:{width:"843px !important","max-width":"fit-content"}},{default:l(()=>[e(T,null,{default:l(()=>[s("div",Pe,[Q(" Editar Cliente "),E(e(w,{round:"",flat:"",dense:"",icon:"close",class:"float-right",color:"grey-8"},null,512),[[z]])])]),_:1}),e(oe,{inset:""}),e(T,{class:"q-pt-none"},{default:l(()=>[e(pe,{edit:!0})]),_:1})]),_:1}))}});const Ie={class:"text-h6 text-center"},Me={class:"row flex flex-center"},je={class:"col-xs-11 col-sm-9 text-center q-mt-sm"},Ke=s("label",null,"Subir clientes desde excel:",-1),Oe={class:"col-xs-11 col-sm-9 text-center q-mt-md"},Xe=s("label",null,"Elige una sucursal:",-1),Ge={key:0,class:"col-12 q-mt-md"},He={class:"col-xs-9 col-md-12 flex justify-center q-ml-none"},Je={__name:"ModalCargarExcel",emits:["actualizarDatos"],setup(U,{emit:D}){const u=b(null),p=b(!1),n=b([]),y=b([]),h=b([]),k=b(""),{api:$,claim:g}=ae(),i=b({file:{message:"",isValid:!0},sucursal:{message:"",isValid:!0}});O(u,d=>{const r=d[0],v=new FileReader;v.onload=function(x){const C=x.target.result;M(C)},v.readAsBinaryString(r)});const P=async()=>{h.value=[];const{data:d}=await $.get(`/sucursal/find/${g.company.id}/company`);d.forEach(r=>{h.value.push({label:r.nombre,value:r.id})})};function M(d){const r=XLSX.read(d,{type:"binary"}),v=r.Sheets[r.SheetNames[0]],x=XLSX.utils.sheet_to_json(v,{header:1});n.value=x}function H(d){return new Promise(r=>setTimeout(r,d))}const J=()=>{let d=!1;return u.value==null&&(i.value.file.message="Debes completar este campo",i.value.file.isValid=!1,d=!0),k.value.length==0&&(i.value.sucursal.message="Debes completar este campo",i.value.sucursal.isValid=!1,d=!0),i.value.isValid&&u.value[0].type!=="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"&&(i.value.file.message="Debes subir un archivo excel",i.value.file.isValid=!1,d=!0),d},F=async()=>{if(!J()){p.value=!0;for(let d=1;d<n.value.length;d++){if(n.value[d].length>0){const r=n.value[d];y.value.unshift({nombre:r[0],estado:"cargando",message:"",index:d});try{await H(700);let v={headers:{sucursal_id:k.value}},x;r[1].toLowerCase()=="ruc"&&(x="04"),r[1].toLowerCase()=="cedula"&&(x="05"),r[1].toLowerCase()=="pasaporte"&&(x="06"),await $.post("/customers/create",{nombres:r[0],tipo_documento:x,numero_documento:r[2].toString(),email:r[3],celular:r[4].toString(),direccion:r[5]},v);let C=y.value.find(W=>W.index==d);C.estado="success"}catch(v){let x=y.value.find(C=>C.index==d);x.estado="error",x.message=v.response.data.message}}d+1==n.value.length&&(D("actualizarDatos"),p.value=!1)}}};return P(),(d,r)=>(o(),m(G,{style:{width:"600px","max-width":"80vw"}},{default:l(()=>[e(T,null,{default:l(()=>[s("div",Ie,[Q(" Carga masiva de clientes "),E(e(w,{round:"",flat:"",dense:"",icon:"close",class:"float-right",color:"grey-8"},null,512),[[z]])])]),_:1}),e(oe,{inset:""}),e(T,{class:"q-pt-md"},{default:l(()=>[s("div",Me,[s("div",je,[Ke,e(ke,{"input-class":"inputFileClick",accept:".xls, .xlsx",dense:"",error:!i.value.file.isValid,"onUpdate:modelValue":[r[0]||(r[0]=v=>i.value.file.isValid=!0),r[1]||(r[1]=v=>u.value=v)],modelValue:u.value,outlined:"",multiple:"",append:""},{append:l(()=>[e(B,{name:"fa-solid fa-file-excel"})]),error:l(()=>[s("label",{class:X(d.$q.dark.isActive?"text-red-4":"text-negative")},N(i.value.file.message),3)]),_:1},8,["error","modelValue"])]),s("div",Oe,[Xe,e(fe,{outlined:"",dense:"",modelValue:k.value,"onUpdate:modelValue":[r[2]||(r[2]=v=>k.value=v),r[3]||(r[3]=v=>i.value.sucursal.isValid=!0)],error:!i.value.sucursal.isValid,"emit-value":"","map-options":"",options:h.value},{error:l(()=>[s("label",{class:X(d.$q.dark.isActive?"text-red-4":"text-negative")},N(i.value.sucursal.message),3)]),_:1},8,["modelValue","error","options"])])]),y.value.length>0?(o(),S("div",Ge,[e(me,{bordered:"",id:"scrollList"},{default:l(()=>[(o(!0),S(R,null,ce(y.value,(v,x)=>E((o(),m(K,{key:x,clickable:""},{default:l(()=>[e(I,null,{default:l(()=>[Q(N(v.nombre),1)]),_:2},1024),e(I,{avatar:""},{default:l(()=>[v.estado=="cargando"?(o(),m(xe,{key:0,size:"30px",color:"primary"})):V("",!0),v.estado=="success"?(o(),m(B,{key:1,name:"check_circle",color:"green-9"})):V("",!0),v.estado=="error"?(o(),m(B,{key:2,name:"error",color:"negative"},{default:l(()=>[e(le,{anchor:"top middle",self:"bottom middle",offset:[10,10]},{default:l(()=>[Q(N(v.message),1)]),_:2},1024)]),_:2},1024)):V("",!0)]),_:2},1024)]),_:2},1024)),[[ye]])),128))]),_:1})])):V("",!0),s("div",He,[e(w,{label:"Subir clientes",loading:p.value,class:"q-px-xl q-mt-md q-mb-md",onClick:F,outline:"",rounded:"",style:{color:"#696cff"}},null,8,["loading"])])]),_:1})]),_:1}))}},We={class:"q-ma-lg q-pt-md"},Ye={class:"row q-col-gutter-lg"},Ze={class:"col-12"},el={key:0},ll={key:1},tl={key:2},ol={class:"full-width row flex-center text-lime-10 q-gutter-sm"},al=s("span",{class:"text-subtitle1"}," No se encontr\xF3 ningun Resultado ",-1),kl={__name:"IndexPage",setup(U){const D=[{name:"acciones",label:"acciones",align:"center"},{name:"nombre",align:"center",label:"Cliente",field:"nombres",sortable:!0},{name:"tipo_documento",align:"center",label:"Tipo de Documento",field:"tipo_documento"},{name:"numero_documento",align:"center",label:"Numero de Documento",field:"numero_documento"},{name:"email",label:"Email",field:"email",align:"center"},{name:"celular",label:"Celular",field:"celular",align:"center"},{name:"estado",label:"Estado",align:"center",field:"estado"}];let{actualizarLista:u,modalAgregarCliente:p,modalEditarCliente:n,formCliente:y}=se();const{validarPermisos:h}=Ve(),k=b(!1),$=b(""),g=b([]),i=b(!1),{api:P,mostrarNotify:M,confirmDelete:H,isDeleted:J}=ae();O(u,(f,c)=>{f&&F()});const F=async()=>{i.value=!0;try{const{data:f}=await P.get("/customers");g.value=f,u.value=!1}catch(f){M("warning",f.response.data.message)}i.value=!1},d=async(f,c)=>{try{const{data:{msg:t}}=await P.patch(`/customers/${f}/${c}`);M("positive",t),F()}catch(t){console.log(t)}};O(J,(f,c)=>{f&&F()});const r=async f=>{H("Estas seguro de eliminar este cliente?",`/customers/${f}`)},v=()=>{var f="/plantillas/clientes_plantilla.xlsx";window.location.href=f},x=async()=>{try{const{data:f}=await P.post("/customers/download-clients-excel",{},{responseType:"arraybuffer"}),c=new Blob([f],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),t=document.createElement("a");t.href=window.URL.createObjectURL(c),t.download="clientes.xlsx",document.body.appendChild(t),t.click(),document.body.removeChild(t),console.log(f)}catch{}};F();const C=b("list"),W=b({rowsPerPage:10});return(f,c)=>(o(),S(R,null,[s("div",We,[s("div",Ye,[s("div",Ze,[e(G,{flat:"",class:"shadow_custom"},{default:l(()=>[e(ve,{"title-class":"text-grey-7 text-h6",title:"Listado de Clientes",rows:g.value,loading:i.value,"hide-header":C.value==="grid",columns:D,"row-key":"name",grid:C.value==="grid",filter:$.value,pagination:W.value},{header:l(t=>[e(ge,{props:t,style:{height:"60px"}},{default:l(()=>[(o(!0),S(R,null,ce(t.cols,q=>(o(),m(_e,{key:q.name,props:t,class:"text-grey-7 text-weight-bold text-uppercase",style:{"font-size":"13px"}},{default:l(()=>[Q(N(q.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"top-right":l(t=>[!f.$q.screen.xs&&a(h)("crear.cliente")?(o(),m(w,{key:0,onClick:c[0]||(c[0]=q=>L(p)?p.value=!a(p):p=!a(p)),outline:"",color:"primary",label:"Agregar Cliente",class:"q-mr-xs"})):V("",!0),e(he,{class:"q-mr-xs",outline:"",color:"primary",icon:"fa-solid fa-file-excel"},{default:l(()=>[e(me,null,{default:l(()=>[E((o(),m(K,{clickable:"",onClick:c[1]||(c[1]=q=>k.value=!0)},{default:l(()=>[e(I,null,{default:l(()=>[e(ee,null,{default:l(()=>[Q("Importar Excel")]),_:1})]),_:1})]),_:1})),[[z]]),E((o(),m(K,{onClick:v,clickable:""},{default:l(()=>[e(I,null,{default:l(()=>[e(ee,null,{default:l(()=>[Q("Exportar Plantilla")]),_:1})]),_:1})]),_:1})),[[z]]),E((o(),m(K,{onClick:x,clickable:""},{default:l(()=>[e(I,null,{default:l(()=>[e(ee,null,{default:l(()=>[Q("Exportar Clientes")]),_:1})]),_:1})]),_:1})),[[z]])]),_:1})]),_:1}),e(A,{outlined:"",dense:"",debounce:"300",modelValue:$.value,"onUpdate:modelValue":c[2]||(c[2]=q=>$.value=q),placeholder:"Buscar..."},{append:l(()=>[e(B,{name:"search"})]),_:1},8,["modelValue"]),C.value==="list"?(o(),m(w,{key:1,flat:"",round:"",dense:"",icon:t.inFullscreen?"fullscreen_exit":"fullscreen",onClick:t.toggleFullscreen},{default:l(()=>[E((o(),m(le,{disable:f.$q.platform.is.mobile},{default:l(()=>[Q(N(t.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen"),1)]),_:2},1032,["disable"])),[[z]])]),_:2},1032,["icon","onClick"])):V("",!0),t.inFullscreen?V("",!0):(o(),m(w,{key:2,flat:"",round:"",dense:"",icon:C.value==="grid"?"list":"grid_on",onClick:c[3]||(c[3]=q=>{C.value=C.value==="grid"?"list":"grid",f.separator=C.value==="grid"?"none":"horizontal"})},{default:l(()=>[E((o(),m(le,{disable:f.$q.platform.is.mobile},{default:l(()=>[Q(N(C.value==="grid"?"List":"Grid"),1)]),_:1},8,["disable"])),[[z]])]),_:1},8,["icon"]))]),"body-cell-tipo_documento":l(t=>[e(Y,{props:t},{default:l(()=>[s("div",null,[t.row.tipo_documento==4?(o(),S("label",el,"RUC")):t.row.tipo_documento==5?(o(),S("label",ll,"Cedula")):(o(),S("label",tl,"Pasaporte"))])]),_:2},1032,["props"])]),"body-cell-estado":l(t=>[e(Y,{props:t},{default:l(()=>[t.row.isActive?(o(),m(ne,{key:0,outline:"",color:"positive",label:"Activo",class:"q-pa-sm"})):(o(),m(ne,{key:1,outline:"",color:"red",label:"Inactivo",class:"q-pa-sm"}))]),_:2},1032,["props"])]),"body-cell-acciones":l(t=>[e(Y,{props:t},{default:l(()=>[t.row.isActive?(o(),S(R,{key:0},[a(h)("editar.cliente")?(o(),m(w,{key:0,round:"",color:"blue-grey",onClick:q=>(L(y)?y.value={...t.row}:y={...t.row},L(n)?n.value=!0:n=!0),icon:"edit",class:"q-mr-sm",size:"10px"},null,8,["onClick"])):V("",!0),t.row.isActive&&a(h)("inactivar.cliente")?(o(),m(w,{key:1,round:"",color:"blue-grey",icon:"close",onClick:q=>d(t.row.id,!1),size:"10px"},null,8,["onClick"])):V("",!0)],64)):(o(),S(R,{key:1},[!t.row.isActive&&a(h)("activar.cliente")?(o(),m(w,{key:0,round:"",color:"blue-grey",icon:"done",onClick:q=>d(t.row.id,!0),size:"10px"},null,8,["onClick"])):V("",!0),!t.row.estado&&a(h)("eliminar.cliente")?(o(),m(w,{key:1,round:"",color:"blue-grey",class:"q-ml-sm",icon:"delete",onClick:q=>r(t.row.id),size:"10px"},null,8,["onClick"])):V("",!0)],64))]),_:2},1032,["props"])]),"no-data":l(({icon:t})=>[s("div",ol,[e(B,{size:"2em",name:"sentiment_dissatisfied"}),al,e(B,{size:"2em",name:$.value?"filter_b_and_w":t},null,8,["name"])])]),_:1},8,["rows","loading","hide-header","grid","filter","pagination"])]),_:1})])])]),f.$q.screen.xs&&a(h)("crear.cliente")?(o(),m(Ce,{key:0,position:"bottom-right",offset:[18,18]},{default:l(()=>[e(w,{round:"",color:"secondary",size:"lg",icon:"add",onClick:c[4]||(c[4]=t=>L(p)?p.value=!a(p):p=!a(p))})]),_:1})):V("",!0),e(Z,{modelValue:a(p),"onUpdate:modelValue":c[5]||(c[5]=t=>L(p)?p.value=t:p=t)},{default:l(()=>[e(Te)]),_:1},8,["modelValue"]),e(Z,{modelValue:a(n),"onUpdate:modelValue":c[6]||(c[6]=t=>L(n)?n.value=t:n=t)},{default:l(()=>[e(Re)]),_:1},8,["modelValue"]),e(Z,{modelValue:k.value,"onUpdate:modelValue":c[8]||(c[8]=t=>k.value=t)},{default:l(()=>[e(Je,{onActualizarDatos:c[7]||(c[7]=t=>F())})]),_:1},8,["modelValue"])],64))}};export{kl as default};
