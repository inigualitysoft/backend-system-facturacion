import{Q as T,a as w}from"./QBreadcrumbs.df454313.js";import{r as v,l as B,o as $,c as x,f as l,g as n,e,ae as r,Q as f,ad as a,i as V,h as _,aZ as D,aU as Q,aV as C,aW as F,O as P,aX as M,aY as R,aj as A,d as z,a as O,af as H}from"./index.1eb79b9c.js";import{Q as G}from"./QSelect.1ef953d4.js";import{Q as E}from"./QForm.3bf39009.js";import{C as K}from"./ClosePopup.dfa4db61.js";import{a as j}from"./axios.a2ad1f31.js";import{u as W}from"./useHelpers.33b51013.js";import{u as X}from"./useSucursal.8d8556ce.js";import{u as Y}from"./use-quasar.36cfd852.js";import"./format.694d017e.js";const b=v({id:"",host:"",usuario:"",puerto:0,password:"",email_client:"",seguridad:"",empresa:"",company_id:null}),q=v(!1),Z=v(!1),J=v(!0),L=v(!1),ee=()=>{const{mostrarNotify:c}=W();return{api:j,formEmail:b,mostrarNotify:c,limpiarFormulario:()=>{b.value={id:"",host:"",usuario:"",puerto:0,password:"",email_client:"",seguridad:"",empresa:"",company_id:null}},loading:q,onSubmit:async()=>{try{q.value=!0;const{id:s,company_id:m,empresa:h,puerto:y,...u}=b.value,{data:d}=await j.patch(`/email/${s}`,{...u,company_id:h,puerto:y});c("positive",d.msg),q.value=!1,q.value=!1}catch(s){q.value=!1,c("warning",s.response.data.message)}},loadingTesting:Z,isPwd:J,prompt:L}};const se={class:"row"},te=e("label",{for:""},"Host/servidor:",-1),le=[te],oe=e("label",{for:""},"Puerto:",-1),ae=[oe],ie=e("label",{for:""},"Usuario/Correo:",-1),re=[ie],ne=e("label",{for:""},"Contrase\xF1a:",-1),de=[ne],me=e("label",{for:""},"Empresa:",-1),ue=[me],ce=e("div",{class:"text-h6"},"Correo del cliente",-1),pe={__name:"FormEmail",props:["edit"],setup(c){const g=B(),{api:p,formEmail:s,loadingTesting:m,onSubmit:h,mostrarNotify:y,isPwd:u,prompt:d}=ee();let{cargarCompanies:S,listCompanies:U}=X();S();const I=async()=>{const{data:t}=await p.get(`/email/${g.params.email_id}`);s.value={...t,empresa:t.company_id.id}},k=async()=>{try{m.value=!0;const{data:t}=await p.post("/email/testing",{...s.value,puerto:parseInt(s.value.puerto)});y("positive",t),m.value=!1,d.value=!1}catch(t){console.log(t);let o="";m.value=!1,t.response.data.response?o=t.response.data.response:o=`${t.response.data.code} - ${t.response.data.command} `,y("negative",o),d.value=!1}},N=()=>{s.value.puerto=s.value.puerto.replace(/\D/g,"")};return I(),(t,o)=>($(),x(A,null,[l(E,{onSubmit:o[7]||(o[7]=i=>a(h)())},{default:n(()=>[e("div",se,[e("div",{class:r(["col-xs-11 col-md-2 flex items-center",[t.$q.screen.width<1022?"justify-center q-mt-lg":"justify-end"]])},le,2),e("div",{class:r(["col-xs-11 col-md-3 q-ml-md",[t.$q.screen.width<1022?"q-mt-sm":"q-mt-lg"]])},[l(f,{modelValue:a(s).host,"onUpdate:modelValue":o[0]||(o[0]=i=>a(s).host=i),modelModifiers:{trim:!0},"input-class":"resaltarTextoInput",dense:"",outlined:"",required:""},null,8,["modelValue"])],2),e("div",{class:r(["col-xs-11 col-md-2 flex items-center q-mt-lg",[t.$q.screen.width<1022?"justify-center":"justify-end"]])},ae,2),e("div",{class:r(["col-xs-11 col-md-3 q-ml-md",[t.$q.screen.width<1022?"q-mt-sm":"q-mt-lg"]])},[l(f,{type:t.$q.platform.is.mobile?"number":"text",modelValue:a(s).puerto,"onUpdate:modelValue":o[1]||(o[1]=i=>a(s).puerto=i),modelModifiers:{trim:!0},"input-class":"resaltarTextoInput",onKeyup:N,dense:"",outlined:"",required:""},null,8,["type","modelValue"])],2),e("div",{class:r(["col-xs-11 col-md-2 flex items-center q-mt-lg",[t.$q.screen.width<1022?"justify-center":"justify-end"]])},re,2),e("div",{class:r(["col-xs-11 col-md-3 q-ml-md",[t.$q.screen.width<1022?"q-mt-sm":"q-mt-lg"]])},[l(f,{modelValue:a(s).usuario,"onUpdate:modelValue":o[2]||(o[2]=i=>a(s).usuario=i),modelModifiers:{trim:!0},"input-class":"resaltarTextoInput",dense:"",outlined:"",required:""},null,8,["modelValue"])],2),e("div",{class:r(["col-xs-11 col-md-2 flex items-center q-mt-lg",[t.$q.screen.width<1022?"justify-center":"justify-end"]])},de,2),e("div",{class:r(["col-xs-11 col-md-3 q-ml-md",[t.$q.screen.width<1022?"q-mt-sm":"q-mt-lg"]])},[l(f,{"input-class":"resaltarTextoInput",type:a(u)?"password":"text","label-color":"blue-grey-3",outlined:"",dense:"",modelValue:a(s).password,"onUpdate:modelValue":o[4]||(o[4]=i=>a(s).password=i),modelModifiers:{trim:!0},required:""},{append:n(()=>[l(V,{name:a(u)?"visibility_off":"visibility",color:"blue-grey",class:"cursor-pointer",onClick:o[3]||(o[3]=i=>u.value=!a(u))},null,8,["name"])]),prepend:n(()=>[l(V,{name:"key"})]),_:1},8,["type","modelValue"])],2),e("div",{class:r(["col-xs-11 col-md-2 flex items-center q-mt-lg",[t.$q.screen.width<1022?"justify-center":"justify-end"]])},ue,2),e("div",{class:r(["col-xs-11 col-md-3 q-ml-md",[t.$q.screen.width<1022?"q-mt-sm":"q-mt-lg"]])},[l(G,{outlined:"",dense:"",modelValue:a(s).empresa,"onUpdate:modelValue":o[5]||(o[5]=i=>a(s).empresa=i),readonly:"","emit-value":"","map-options":"",options:a(U)},null,8,["modelValue","options"])],2),e("div",{class:r(["col-xs-11 col-md-11 q-ml-md text-center q-pb-xl q-pt-lg",[t.$q.screen.width<1022?"q-mt-sm":"q-mt-lg"]])},[l(_,{onClick:o[6]||(o[6]=i=>d.value=!a(d)),label:"Probar Configuraci\xF3n",class:r([[t.$q.screen.width>600||"q-mb-md"],"q-mr-lg"]),"icon-right":"send",outline:"",rounded:"",style:D([{color:"#696cff"},!t.$q.platform.is.mobile||"font-size: 12px"])},null,8,["class","style"]),l(_,{type:"submit",label:"Guardar","icon-right":"save",outline:"",rounded:"",class:"q-mr-lg",style:{color:"#696cff"}})],2)])]),_:1}),l(R,{modelValue:a(d),"onUpdate:modelValue":o[9]||(o[9]=i=>M(d)?d.value=i:null)},{default:n(()=>[l(Q,{style:{"min-width":"350px"}},{default:n(()=>[l(C,null,{default:n(()=>[ce]),_:1}),l(E,{onSubmit:k},{default:n(()=>[l(C,{class:"q-pt-none"},{default:n(()=>[l(f,{type:"email",dense:"",modelValue:a(s).email_client,"onUpdate:modelValue":o[8]||(o[8]=i=>a(s).email_client=i),autofocus:"",required:""},null,8,["modelValue"])]),_:1}),l(F,{align:"right",class:"text-primary"},{default:n(()=>[P(l(_,{flat:"",label:"Cancelar"},null,512),[[K]]),l(_,{type:"submit",loading:a(m),flat:"",label:"Enviar"},null,8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}},fe={class:"q-ma-lg q-pt-md"},qe={class:"row q-col-gutter-lg"},ve={class:"col-12"},ge={key:0,class:"col-xs-12 col-sm-12 col-md-6"},ye=e("label",{class:"text-h6 q-pr-md"},"Datos del servidor correo",-1),_e=[ye],he={class:"q-px-md"},we={class:"row q-col-gutter-md"},be={class:"col-xs-12 col-md-12 q-pt-xs"},ke=z({__name:"EditEmail",setup(c){const g=Y(),{claim:p}=O.read(g.token);return(s,m)=>($(),x("div",fe,[e("div",qe,[e("div",ve,[l(Q,{flat:"",class:"shadow_custom"},{default:n(()=>[e("div",{class:r(["row q-py-md q-pl-md",s.$q.screen.xs?"justify-center":"justify-between"])},[a(p).roles[0]=="SUPER-ADMINISTRADOR"?($(),x("div",ge,[l(T,{class:r(["row q-mr-lg",[s.$q.screen.width<1022?"justify-center q-pt-sm":"justify-start "]])},{default:n(()=>[l(w,{label:"Inicio",icon:"home",to:"/"}),l(w,{label:"Emails",icon:"mail",to:"/emails"}),l(w,{label:"Email",icon:"edit"})]),_:1},8,["class"])])):H("",!0),e("div",{class:r(["col-xs-12 col-sm-12 col-md-6 q-mt-sm",[s.$q.screen.width<1022?"text-center":"text-right"]])},_e,2)],2),e("div",he,[e("div",we,[e("div",be,[l(pe,{edit:!0})])])])]),_:1})])])]))}});export{ke as default};
