import{r as m,t as S,C as $,d as q,o as w,ab as D,g as _,af as e,e as a,ag as x,f as u,Q as d,h as Q,aN as B,ac as F,O as M,aO as C,N as z}from"./index.9a69bdf9.js";import{C as K}from"./ClosePopup.d29d88a9.js";import{u as O}from"./useHelpers.110a86a1.js";import{api as h}from"./axios.1a9376d4.js";import{Q as A}from"./QSelect.d1e92d92.js";import{Q as E}from"./QForm.951ed4e0.js";const p=m(!1),l=m({nombres:"",tipo_documento:"",numero_documento:"",email:"",celular:"",direccion:""}),y=m(!1),V=m(!1),N=m(!1),U=()=>{const{mostrarNotify:i}=O(),r=()=>{l.value.nombres="",l.value.tipo_documento="",l.value.numero_documento="",l.value.email="",l.value.celular="",l.value.direccion=""},o=()=>{l.value.numero_documento=l.value.numero_documento.replace(/\D/g,""),l.value.celular=l.value.celular.replace(/\D/g,"")};return S(()=>{$(l.value,(t,c)=>{if(l.value.nombres=t.nombres.toUpperCase(),t.tipo_documento!==""&&t.tipo_documento!=="04"&&l.value.numero_documento.length>10){const v=t.numero_documento.length-10,g=t.numero_documento.substring(0,t.numero_documento.length-v);l.value.numero_documento=g}})}),{actualizarLista:N,formCliente:l,loading:p,limpiarFormulario:r,allowOnlyNumber:o,modalAgregarCliente:y,modalEditarCliente:V,validateNumDocument:[t=>t.length>=(l.value.tipo_documento==="04"?13:10)||`Debes completar ${l.value.tipo_documento==="04"?13:10} digitos`],validateNumCelular:[t=>t.length>=10||"Debes completar 10 digitos"],onSubmit:async t=>{try{p.value=!0,t?await h.patch("/customers/"+l.value.id,l.value):await h.post("/customers",l.value),i("positive",`Cliente ${t?"editado":"agregado"} exitosamente`),y.value=!1,V.value=!1,N.value=!0,p.value=!1}catch(c){i("warning",c.response.data.message),p.value=!1}}}},T={class:"row q-pt-lg q-gutter-lg justify-center"},j=a("label",null,"Nombres:",-1),k={class:"col-xs-12 col-sm-5"},P=a("label",null,"Tipo de Documento:",-1),G={class:"col-xs-12 col-sm-5"},H=a("label",null,"Numero de Documento:",-1),I={class:"col-xs-12 col-sm-5"},L=a("label",null,"Email:",-1),R={class:"col-xs-12 col-sm-5"},J=a("label",null,"Celular:",-1),W=a("label",null,"Direcci\xF3n:",-1),X={class:"col-xs-9 col-sm-12 flex justify-center"},Y=q({__name:"FormCliente",props:{edit:{type:Boolean}},setup(i){const r=i,{formCliente:o,loading:f,allowOnlyNumber:t,validateNumDocument:c,validateNumCelular:v,onSubmit:g}=U();return(b,s)=>(w(),D(E,{onSubmit:s[6]||(s[6]=n=>e(g)(r.edit))},{default:_(()=>[a("div",T,[a("div",{class:x(["col-xs-12 col-sm-11",[b.$q.screen.xs?"":"q-px-md"]])},[j,u(d,{modelValue:e(o).nombres,"onUpdate:modelValue":s[0]||(s[0]=n=>e(o).nombres=n),modelModifiers:{trim:!0},dense:"",filled:"",required:""},null,8,["modelValue"])],2),a("div",k,[P,u(A,{dense:"",modelValue:e(o).tipo_documento,"onUpdate:modelValue":s[1]||(s[1]=n=>e(o).tipo_documento=n),modelModifiers:{trim:!0},filled:"","emit-value":"","map-options":"",options:[{label:"RUC",value:"04"},{label:"Cedula",value:"05"},{label:"Pasaporte",value:"06"}]},null,8,["modelValue"])]),a("div",G,[H,u(d,{modelValue:e(o).numero_documento,"onUpdate:modelValue":s[2]||(s[2]=n=>e(o).numero_documento=n),disable:e(o).tipo_documento==="",counter:"",maxlength:e(o).tipo_documento==="04"?13:10,rules:e(c),"lazy-rules":"",dense:"",filled:"",required:"",onKeyup:e(t)},null,8,["modelValue","disable","maxlength","rules","onKeyup"])]),a("div",I,[L,u(d,{modelValue:e(o).email,"onUpdate:modelValue":s[3]||(s[3]=n=>e(o).email=n),modelModifiers:{trim:!0},type:"email",dense:"",filled:"",required:""},null,8,["modelValue"])]),a("div",R,[J,u(d,{modelValue:e(o).celular,"onUpdate:modelValue":s[4]||(s[4]=n=>e(o).celular=n),modelModifiers:{trim:!0},counter:"",maxlength:"10",rules:e(v),"lazy-rules":"",onKeyup:e(t),dense:"",filled:"",required:""},null,8,["modelValue","rules","onKeyup"])]),a("div",{class:x(["col-xs-12 col-sm-11",[b.$q.screen.xs?"":"q-px-md"]])},[W,u(d,{modelValue:e(o).direccion,"onUpdate:modelValue":s[5]||(s[5]=n=>e(o).direccion=n),dense:"",filled:"",required:""},null,8,["modelValue"])],2),a("div",X,[u(Q,{label:b.edit?"Editar":"Guardar",loading:e(f),class:"q-px-xl",type:"submit",color:"green-9"},null,8,["label","loading"])])])]),_:1}))}}),Z={class:"text-h6"},ne=q({__name:"AddCliente",setup(i){const{limpiarFormulario:r}=U();return r(),(o,f)=>(w(),D(B,{style:{width:"710px !important","max-width":"fit-content"}},{default:_(()=>[u(C,null,{default:_(()=>[a("div",Z,[F(" Agregar Cliente "),M(u(Q,{round:"",flat:"",dense:"",icon:"close",class:"float-right",color:"grey-8"},null,512),[[K]])])]),_:1}),u(z,{inset:""}),u(C,{class:"q-pt-none"},{default:_(()=>[u(Y,{edit:!1})]),_:1})]),_:1}))}});export{ne as _,Y as a,U as u};