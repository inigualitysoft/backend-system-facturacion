import{r as h,C as M,o as g,a9 as _,g as s,f as i,aV as x,e as a,aa as $,O as E,h as q,ah as F,c as Q,af as y,aU as j,d as B,v as R,ad as e,ba as S,aj as D,ae as n,Q as c,ab as u,bu as I,i as f,w,aW as W}from"./index.07952156.js";import{Q as N}from"./QBadge.aa17ec2e.js";import{Q as A}from"./QFile.b368dbd4.js";import{Q as T}from"./QSelect.623e9df1.js";import{Q as U}from"./QForm.b697e5ee.js";import{u as K}from"./useEmpresa.d96f3ddd.js";import{C as L}from"./ClosePopup.195cf95f.js";import{M as P}from"./index.2065a85c.js";const O={class:"text-h6 text-center"},G=a("div",{id:"qrcode-container",style:{"text-align":"center"}},[a("img",{src:"/imgs/loader.gif",alt:"loading",id:"qrcode",style:{width:"250px"}})],-1),H={class:"card"},J={class:"body"},X={key:0,class:"q-mt-md"},Y=a("h5",{id:"iduser",class:"text-h6"},null,-1),Z={__name:"ModalWhatsapp",setup(k){let v;const p=h("desconectado");return M(()=>{const o=document.getElementById("qrcode"),b=document.getElementById("iduser");v=new P("http://205.235.6.149:8000/socket.io/socket.io.js").socket("/"),v.on("qr",m=>{console.log(o),o.setAttribute("src",m)}),v.on("qrstatus",m=>{m.includes("check")&&(p.value="conectado"),m.includes("loader")&&(p.value="cargando"),o.setAttribute("src",m)}),v.on("user",m=>{b.innerHTML=m})}),(o,b)=>(g(),_(j,{style:{width:"643px !important","max-width":"fit-content"}},{default:s(()=>[i(x,null,{default:s(()=>[a("div",O,[$(" WhatsApp API QR "),E(i(q,{round:"",flat:"",dense:"",icon:"close",class:"float-right",color:"grey-8"},null,512),[[L]])])]),_:1}),i(F,{inset:""}),i(x,{class:"q-pt-none"},{default:s(()=>[i(U,{style:{"margin-top":"25px"}},{default:s(()=>[G,a("div",H,[a("div",J,[a("p",null,[p.value!="conectado"?(g(),Q("li",X," Escanea el siguiente c\xF3digo QR con tu aplicaci\xF3n de WhatsApp ")):y("",!0),Y])])])]),_:1})]),_:1})]),_:1}))}};const ee={class:"row q-pt-sm q-gutter-lg justify-center"},le=a("label",null,"R.U.C",-1),oe=a("label",null,"Raz\xF3n Social",-1),te={class:"col-xs-11 col-md-5"},ae=a("label",null,"Nombre Comercial:",-1),ie={class:"col-xs-11 col-md-5"},se=a("label",null,"Direcci\xF3n:",-1),re={class:"col-xs-11 col-md-5"},de=a("label",null,"Email:",-1),ne=a("label",null,"Obligado Contabilidad:",-1),me={class:"col-xs-11 col-md-5"},ue=a("label",null,"Celular:",-1),ce=a("label",null,"Logo de la empresa:",-1),pe=a("div",null,' Tama\xF1o m\xE1ximo 100 KB, extensi\xF3n .jpg o .png y ser menor o igual a 200px por 200px." ',-1),fe=a("label",null,"Cargar Certificado:",-1),ve=a("label",null,"Clave Certificado:",-1),ge=a("label",null,"Fecha Exp. Firma Electr\xF3nica:",-1),be=a("label",null,"Valor del IVA:",-1),we=B({__name:"FormEmpresa",props:{edit:{type:Boolean}},setup(k){const v=k,p=h(!1),{formEmpresa:o,loading:b,validaciones:r,onRejected:m,onSubmit:z,isPwd:V,isValid:C}=K();return R(()=>o.value.clave_certificado,(d,l)=>{C.value&&d!==l&&(C.value=!1)},{deep:!0}),(d,l)=>(g(),Q(D,null,[i(U,{onSubmit:l[28]||(l[28]=t=>e(z)(v.edit))},{default:s(()=>[i(j,{class:"my-card"},{default:s(()=>[i(x,{class:"q-pt-lg"},{default:s(()=>[a("div",ee,[a("div",{class:n(["col-xs-11 col-md-5",[d.$q.screen.width>600||"q-mt-md"]])},[le,i(c,{type:d.$q.platform.is.mobile?"number":"text",modelValue:e(o).ruc,"onUpdate:modelValue":[l[0]||(l[0]=t=>e(o).ruc=t),l[1]||(l[1]=t=>e(r).ruc.isValid=!0)],counter:"",maxlength:"13",onKeyup:l[2]||(l[2]=t=>e(o).ruc=e(o).ruc.replace(/\D/g,"")),"lazy-rules":"",error:!e(r).ruc.isValid,dense:"",filled:""},{error:s(()=>[a("label",{class:n(d.$q.dark.isActive?"text-red-4":"text-negative")},u(e(r).ruc.message),3)]),_:1},8,["type","modelValue","error"])],2),a("div",{class:n(["col-xs-11 col-md-5",[d.$q.screen.width>600||"q-mt-xs"]])},[oe,i(c,{modelValue:e(o).razon_social,"onUpdate:modelValue":l[3]||(l[3]=t=>e(o).razon_social=t),modelModifiers:{trim:!0},"input-style":"text-transform: uppercase;",readonly:"",dense:"",outlined:""},null,8,["modelValue"])],2),a("div",te,[ae,i(c,{modelValue:e(o).nombre_comercial,"onUpdate:modelValue":[l[4]||(l[4]=t=>e(o).nombre_comercial=t),l[5]||(l[5]=t=>e(r).nombre_comercial.isValid=!0)],modelModifiers:{trim:!0},"input-style":"text-transform: uppercase;",error:!e(r).nombre_comercial.isValid,dense:"",filled:""},{error:s(()=>[a("label",{class:n(d.$q.dark.isActive?"text-red-4":"text-negative")},u(e(r).nombre_comercial.message),3)]),_:1},8,["modelValue","error"])]),a("div",ie,[se,i(c,{modelValue:e(o).direccion_matriz,"onUpdate:modelValue":[l[6]||(l[6]=t=>e(o).direccion_matriz=t),l[7]||(l[7]=t=>e(r).direccion_matriz.isValid=!0)],modelModifiers:{trim:!0},error:!e(r).direccion_matriz.isValid,dense:"",filled:""},{error:s(()=>[a("label",{class:n(d.$q.dark.isActive?"text-red-4":"text-negative")},u(e(r).direccion_matriz.message),3)]),_:1},8,["modelValue","error"])]),a("div",re,[de,i(c,{modelValue:e(o).email,"onUpdate:modelValue":[l[8]||(l[8]=t=>e(o).email=t),l[9]||(l[9]=t=>e(r).email.isValid=!0)],modelModifiers:{trim:!0},type:"text",error:!e(r).email.isValid,dense:"",filled:""},{error:s(()=>[a("label",{class:n(d.$q.dark.isActive?"text-red-4":"text-negative")},u(e(r).email.message),3)]),_:1},8,["modelValue","error"])]),a("div",{class:n(["col-xs-11 col-md-5",d.$q.screen.width<600||"obligadoContb"])},[ne,i(I,{color:"green",size:"lg",modelValue:e(o).obligado_contabilidad,"onUpdate:modelValue":l[10]||(l[10]=t=>e(o).obligado_contabilidad=t)},null,8,["modelValue"])],2),a("div",me,[ue,i(c,{type:d.$q.platform.is.mobile?"number":"text",modelValue:e(o).telefono,"onUpdate:modelValue":[l[12]||(l[12]=t=>e(o).telefono=t),l[13]||(l[13]=t=>e(r).telefono.isValid=!0)],counter:"",maxlength:"10",error:!e(r).telefono.isValid,"input-style":"width: 81%",onKeyup:l[14]||(l[14]=t=>e(o).telefono=e(o).telefono.replace(/\D/g,"")),"lazy-rules":"",dense:"",filled:""},{error:s(()=>[a("label",{class:n(d.$q.dark.isActive?"text-red-4":"text-negative")},u(e(r).telefono.message),3)]),append:s(()=>[i(N,{filled:"",color:"teal-8",onClick:l[11]||(l[11]=t=>p.value=!0),style:{height:"100%",width:"19%",position:"absolute",right:"0px","justify-content":"center","font-size":"14px",cursor:"pointer"}},{default:s(()=>[i(f,{name:"fa-brands fa-whatsapp",size:"sm"})]),_:1})]),_:1},8,["type","modelValue","error"])]),a("div",{class:n(["col-xs-11 col-md-5",[d.$q.screen.width>600||"q-mt-sm"]])},[ce,i(A,{dense:"",filled:"","bottom-slots":"",accept:".jpg, image/*",onRejected:e(m),"onUpdate:modelValue":[l[16]||(l[16]=t=>e(r).logo.isValid=!0),l[17]||(l[17]=t=>e(o).logo=t)],modelValue:e(o).logo,error:!e(r).logo.isValid,label:e(o).logo_old==null?"Cargar Logo":e(o).logo_old},{error:s(()=>[a("label",{class:n(d.$q.dark.isActive?"text-red-4":"text-negative")},u(e(r).logo.message),3)]),prepend:s(()=>[i(f,{name:"fa-solid fa-image"})]),hint:s(()=>[pe]),append:s(()=>[typeof e(o).logo=="object"&&e(o).logo!==null?(g(),_(f,{key:0,name:"close",onClick:l[15]||(l[15]=w(t=>e(o).logo=null,["stop","prevent"])),class:"cursor-pointer"})):y("",!0)]),_:1},8,["onRejected","modelValue","error","label"])],2),a("div",{class:n(["col-xs-11 col-md-5",[d.$q.screen.width>600||"q-mt-sm"]])},[fe,i(A,{dense:"",filled:"","bottom-slots":"",accept:".p12",onRejected:e(m),modelValue:e(o).archivo_certificado,"onUpdate:modelValue":[l[19]||(l[19]=t=>e(o).archivo_certificado=t),l[20]||(l[20]=t=>e(r).archivo_certificado.isValid=!0)],error:!e(r).archivo_certificado.isValid,label:e(o).archivo_certificado_old==null?"Cargar Certificado":e(o).archivo_certificado_old},{error:s(()=>[a("label",{class:n(d.$q.dark.isActive?"text-red-4":"text-negative")},u(e(r).archivo_certificado.message),3)]),prepend:s(()=>[i(f,{name:"attach_file"})]),append:s(()=>[typeof e(o).archivo_certificado=="object"&&e(o).archivo_certificado!==null?(g(),_(f,{key:0,name:"close",onClick:l[18]||(l[18]=w(t=>e(o).archivo_certificado=null,["stop","prevent"])),class:"cursor-pointer"})):y("",!0)]),_:1},8,["onRejected","modelValue","error","label"])],2),a("div",{class:n(["col-xs-11 col-md-5",[d.$q.screen.width>600||"q-mt-xs"]])},[ve,i(c,{type:e(V)?"password":"text",filled:"",modelValue:e(o).clave_certificado,"onUpdate:modelValue":[l[22]||(l[22]=t=>e(o).clave_certificado=t),l[23]||(l[23]=t=>e(r).clave_certificado.isValid=!0)],modelModifiers:{trim:!0},dense:"",error:!e(r).clave_certificado.isValid},{error:s(()=>[a("label",{class:n(d.$q.dark.isActive?"text-red-4":"text-negative")},u(e(r).clave_certificado.message),3)]),append:s(()=>[i(f,{name:e(V)?"visibility_off":"visibility",color:"blue-grey",class:"cursor-pointer",onClick:l[21]||(l[21]=t=>V.value=!e(V))},null,8,["name"])]),prepend:s(()=>[i(f,{name:"key",color:"blue-grey-3"})]),_:1},8,["type","modelValue","error"])],2),a("div",{class:n(["col-xs-11 col-md-4",[d.$q.screen.width>600||"q-mt-sm"]])},[ge,i(c,{modelValue:e(o).fecha_caducidad_certificado,"onUpdate:modelValue":l[24]||(l[24]=t=>e(o).fecha_caducidad_certificado=t),modelModifiers:{trim:!0},"input-style":"text-transform: uppercase;",readonly:"",dense:"",outlined:""},null,8,["modelValue"])],2),a("div",{class:n(["col-xs-11 col-md-3",[d.$q.screen.width>600||"q-mt-sm"]])},[be,i(T,{filled:"",dense:"",modelValue:e(o).iva,"onUpdate:modelValue":[l[25]||(l[25]=t=>e(o).iva=t),l[26]||(l[26]=t=>e(r).iva.isValid=!0)],error:!e(r).iva.isValid,"emit-value":"","map-options":"",options:[{label:"12%",value:"2"},{label:"14%",value:"3"},{label:"15%",value:"4"}]},{error:s(()=>[a("label",{class:n(d.$q.dark.isActive?"text-red-4":"text-negative")},u(e(r).iva.message),3)]),_:1},8,["modelValue","error"])],2)])]),_:1}),i(W,{class:n(["q-pb-md",[d.$q.screen.width<600?"justify-center q-ml-xl q-pt-none q-mb-md":"justify-between"]])},{default:s(()=>[d.$q.screen.width>600?(g(),_(q,{key:0,type:"submit",icon:"arrow_back",onClick:l[27]||(l[27]=t=>d.$router.push("/empresas")),outline:"",rounded:"",class:"q-ml-md",color:d.$q.dark.isActive?"blue-grey-2":"blue-grey-10"},{default:s(()=>[$(" \xA0 Regresar ")]),_:1},8,["color"])):y("",!0),i(q,{type:"submit",icon:"save",loading:e(b),outline:"",rounded:"",class:"q-mr-lg",style:{color:"#696cff"}},{default:s(()=>[$(" \xA0 Guardar Cambios ")]),_:1},8,["loading"])]),_:1},8,["class"])]),_:1})]),_:1}),i(S,{modelValue:p.value,"onUpdate:modelValue":l[29]||(l[29]=t=>p.value=t)},{default:s(()=>[i(Z)]),_:1},8,["modelValue"])],64))}});export{we as _};
