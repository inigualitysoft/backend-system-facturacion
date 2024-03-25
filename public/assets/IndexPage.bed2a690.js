import{r as i,o as m,a9 as q,g as a,f as e,aS as _,e as l,aa as w,O as H,h as g,ah as U,Q as $,ad as P,aR as M,c as A,aV as B,aj as G,ai as R,af as J,ab as S,bs as K}from"./index.d6c4bdc6.js";import{Q as j}from"./QPopupEdit.619cd7d7.js";import{Q as h,c as I,a as k}from"./QItemLabel.1ee9546f.js";import{Q as z}from"./QList.ed89e0ad.js";import{Q as L}from"./QForm.18dc3b57.js";import{C as O}from"./ClosePopup.ce0f6283.js";import{u as D}from"./useHelpers.0a8a684c.js";import{f as E}from"./format.cbf00d5d.js";import{a as W}from"./use-quasar.293c2d69.js";import"./axios.465f24f1.js";const X={class:"text-h6 text-center"},Y={class:"row q-pt-lg q-gutter-lg justify-center"},Z={class:"col-xs-12"},ee=l("label",{class:"text-center"},"Nombre:",-1),ae={class:"col-xs-12"},te=l("label",{class:"text-center"},"Descripcion:",-1),le={class:"col-xs-9 col-sm-12 q-mt-lg q-mb-md flex justify-center"},oe={__name:"ModalProforma",props:["clausulas","aceptacion"],emits:["hideModal"],setup(C,{emit:x}){const y=C,{capitalize:b}=E,r=i(!1),t=i({nombre:"",descripcion:""}),{api:p,mostrarNotify:c}=D(),f=async()=>{try{y.clausulas.unshift({...t.value}),await p.post("/proforma/clausula",{clausulas:y.clausulas,aceptacion_proforma:y.aceptacion}),c("positive","Clausula agregada exitosamente"),x("hideModal")}catch(V){console.log(V),c("warning","No se pudo agregar la clausula")}};return(V,s)=>(m(),q(M,{style:{width:"500px !important","max-width":"80vw"}},{default:a(()=>[e(_,null,{default:a(()=>[l("div",X,[w(" Nueva Clausula "),H(e(g,{round:"",flat:"",dense:"",icon:"close",class:"float-right",color:"grey-8"},null,512),[[O]])])]),_:1}),e(U,{inset:""}),e(_,{class:"q-pt-none"},{default:a(()=>[e(L,{onSubmit:f},{default:a(()=>[l("div",Y,[l("div",Z,[ee,e($,{modelValue:t.value.nombre,"onUpdate:modelValue":s[0]||(s[0]=n=>t.value.nombre=n),modelModifiers:{trim:!0},onKeyup:s[1]||(s[1]=n=>t.value.nombre=P(b)(t.value.nombre)),dense:"",filled:"",required:""},null,8,["modelValue"])]),l("div",ae,[te,e($,{type:"textarea",rows:"3",onKeyup:s[2]||(s[2]=n=>t.value.descripcion=P(b)(t.value.descripcion)),modelValue:t.value.descripcion,"onUpdate:modelValue":s[3]||(s[3]=n=>t.value.descripcion=n),modelModifiers:{trim:!0},dense:"",filled:"",required:""},null,8,["modelValue"])]),l("div",le,[e(g,{label:"Guardar",loading:r.value,outline:"",rounded:"",class:"q-px-xl",type:"submit",style:{color:"#696cff"}},null,8,["loading"])])])]),_:1})]),_:1})]),_:1}))}},se={class:"text-h6 text-center"},ue={class:"row q-pt-lg q-gutter-lg justify-center"},ne={class:"col-xs-12"},re=l("label",{class:"text-center"},"Detalle:",-1),de={class:"col-xs-9 col-sm-12 q-mt-lg q-mb-md flex justify-center"},ce={__name:"ModalAceptacionPropuesta",props:["clausulas","aceptacion","proforma_id"],emits:["hideModal"],setup(C,{emit:x}){const y=C,{capitalize:b}=E,r=i(!1),t=i(""),{api:p,mostrarNotify:c}=D(),f=async()=>{try{await p.post("/proforma/clausula",{clausulas:y.clausulas,aceptacion_proforma:t.value}),c("positive","Clausula agregada exitosamente"),x("hideModal")}catch{c("warning","No se pudo agregar la clausula")}};return(V,s)=>(m(),q(M,{style:{width:"500px !important","max-width":"80vw"}},{default:a(()=>[e(_,null,{default:a(()=>[l("div",se,[w(" Aceptaci\xF3n de la propuesta "),H(e(g,{round:"",flat:"",dense:"",icon:"close",class:"float-right",color:"grey-8"},null,512),[[O]])])]),_:1}),e(U,{inset:""}),e(_,{class:"q-pt-none"},{default:a(()=>[e(L,{onSubmit:f},{default:a(()=>[l("div",ue,[l("div",ne,[re,e($,{type:"textarea",rows:"4",modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=n=>t.value=n),modelModifiers:{trim:!0},onKeyup:s[1]||(s[1]=n=>t.value=P(b)(t.value)),dense:"",filled:"",required:""},null,8,["modelValue"])]),l("div",de,[e(g,{label:"Guardar",loading:r.value,outline:"",rounded:"",class:"q-px-xl",type:"submit",style:{color:"#696cff"}},null,8,["loading"])])])]),_:1})]),_:1})]),_:1}))}},ie={class:"q-ma-lg q-pt-md"},me={class:"row q-col-gutter-lg"},pe={class:"col-xs-12 col-sm-7"},fe=l("div",{class:"text-h6 q-pt-sm"},"Clausulas de la propuesta",-1),ve={class:"text-weight-medium text-left"},_e={class:"text-weight-medium text-justify"},ge={class:"text-grey-8 q-gutter-xs"},xe={class:"col-xs-12 col-sm-5"},ye=l("div",{class:"text-h6 q-pt-sm"},"Aceptaci\xF3n de la propuesta",-1),be={class:"text-weight-medium text-justify",id:"text-aceptacion"},Ve={class:"text-grey-8 q-gutter-xs"},Se={__name:"IndexPage",setup(C){const{api:x,claim:y,mostrarNotify:b}=D(),r=i([]),t=i(""),p=i("");i(!1);const c=i(!1),f=i(!1),V=W(),s=async()=>{const{data:v}=await x.get(`/proforma/${y.company.id}`);p.value=v.id,r.value=v.clausulas,t.value=v.aceptacion_proforma},n=async()=>{setTimeout(async()=>{await x.patch(`/proforma/${p.value}`,{clausulas:r.value,aceptacion_proforma:t.value})},1e3)},F=v=>{V.dialog({title:"Confirmar",message:"Deseas quitar esta clausula?",ok:{push:!0,label:"Quitar",color:"teal-7"},cancel:{push:!0,color:"blue-grey-8",label:"Cancelar"}}).onOk(async()=>{try{r.value.splice(v,1),n()}catch(u){b("negative",u.response.data.message)}})},T=()=>{V.dialog({title:"Confirmar",message:"Deseas quitar esta aceptaci\xF3n?",ok:{push:!0,label:"Quitar",color:"teal-7"},cancel:{push:!0,color:"blue-grey-8",label:"Cancelar"}}).onOk(async()=>{try{await x.patch(`/proforma/${p.value}`,{clausulas:r.value,aceptacion_proforma:""}),s()}catch(v){b("negative",v.response.data.message)}})};return s(),(v,u)=>(m(),A(G,null,[l("div",ie,[l("div",me,[l("div",pe,[e(M,{class:"my-card"},{default:a(()=>[e(_,{class:"text-white flex justify-between q-pt-sm q-pb-sm"},{default:a(()=>[fe,e(g,{onClick:u[0]||(u[0]=o=>c.value=!0),round:"",color:"primary",icon:"add"})]),_:1}),e(U),e(_,{class:"q-pa-none"},{default:a(()=>[e(z,{bordered:"",class:"rounded-borders q-pt-sm"},{default:a(()=>[r.value.length>0?(m(!0),A(G,{key:0},R(r.value,(o,Q)=>(m(),q(k,{key:Q},{default:a(()=>[e(h,{top:"",class:"col-2 gt-sm flex flex-center"},{default:a(()=>[l("span",ve,[w(S(o.nombre)+" ",1),e(j,{modelValue:o.nombre,"onUpdate:modelValue":d=>o.nombre=d,buttons:"",onSave:n,"label-set":"Guardar","label-cancel":"Cancelar","auto-save":""},{default:a(d=>[e($,{modelValue:d.value,"onUpdate:modelValue":N=>d.value=N,dense:"",autofocus:"",counter:"",onKeyup:K(d.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["modelValue","onUpdate:modelValue"])])]),_:2},1024),e(h,{top:""},{default:a(()=>[l("span",_e,[w(S(o.descripcion)+" ",1),e(j,{modelValue:o.descripcion,"onUpdate:modelValue":d=>o.descripcion=d,buttons:"",onSave:n,"label-set":"Guardar","label-cancel":"Cancelar","auto-save":""},{default:a(d=>[e($,{type:"textarea",rows:"4",modelValue:d.value,"onUpdate:modelValue":N=>d.value=N,dense:"",autofocus:"",counter:"",onKeyup:K(d.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["modelValue","onUpdate:modelValue"])])]),_:2},1024),e(h,{top:"",side:"",class:"flex flex-center"},{default:a(()=>[l("div",ge,[e(g,{class:"gt-xs",onClick:d=>F(Q),size:"12px",flat:"",dense:"",round:"",icon:"delete"},null,8,["onClick"])])]),_:2},1024)]),_:2},1024))),128)):(m(),q(k,{key:1,class:"text-center"},{default:a(()=>[e(h,{top:"",class:"col-12 gt-sm"},{default:a(()=>[e(I,{class:"q-mt-sm"},{default:a(()=>[w(" No hay clausulas ")]),_:1})]),_:1})]),_:1}))]),_:1})]),_:1})]),_:1})]),l("div",xe,[e(M,{class:"my-card"},{default:a(()=>[e(_,{class:"text-white flex justify-between q-pt-sm q-pb-sm"},{default:a(()=>[ye,t.value.length==0?(m(),q(g,{key:0,onClick:u[1]||(u[1]=o=>f.value=!0),round:"",color:"primary",icon:"add"})):J("",!0)]),_:1}),e(U),e(_,{class:"q-pa-none"},{default:a(()=>[e(z,{bordered:"",class:"rounded-borders q-pt-sm"},{default:a(()=>[t.value.length>0?(m(),q(k,{key:0},{default:a(()=>[e(h,{top:""},{default:a(()=>[l("span",be,[w(S(t.value)+" ",1),e(j,{modelValue:t.value,"onUpdate:modelValue":u[2]||(u[2]=o=>t.value=o),buttons:"",onSave:n,"label-set":"Guardar","label-cancel":"Cancelar","auto-save":""},{default:a(o=>[e($,{type:"textarea",rows:"4",modelValue:o.value,"onUpdate:modelValue":Q=>o.value=Q,dense:"",autofocus:"",counter:"",onKeyup:K(o.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:1},8,["modelValue"])])]),_:1}),e(h,{top:"",side:""},{default:a(()=>[l("div",Ve,[e(g,{class:"gt-xs",onClick:T,size:"12px",flat:"",dense:"",round:"",icon:"delete"})])]),_:1})]),_:1})):(m(),q(k,{key:1,class:"text-center"},{default:a(()=>[e(h,{top:"",class:"col-12 gt-sm"},{default:a(()=>[e(I,{class:"q-mt-sm"},{default:a(()=>[w(" No hay clausulas ")]),_:1})]),_:1})]),_:1}))]),_:1})]),_:1})]),_:1})])])]),e(B,{modelValue:c.value,"onUpdate:modelValue":u[4]||(u[4]=o=>c.value=o)},{default:a(()=>[e(oe,{clausulas:r.value,aceptacion:t.value,onHideModal:u[3]||(u[3]=o=>(c.value=!1,s()))},null,8,["clausulas","aceptacion"])]),_:1},8,["modelValue"]),e(B,{modelValue:f.value,"onUpdate:modelValue":u[6]||(u[6]=o=>f.value=o)},{default:a(()=>[e(ce,{clausulas:r.value,aceptacion:t.value,proforma_id:p.value,onHideModal:u[5]||(u[5]=o=>(f.value=!1,s()))},null,8,["clausulas","aceptacion","proforma_id"])]),_:1},8,["modelValue"])],64))}};export{Se as default};