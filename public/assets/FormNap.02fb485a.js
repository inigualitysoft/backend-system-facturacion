import{d as w,C as j,o as c,a9 as v,g as a,ad as e,e as s,ae as l,f as n,ab as m,Q as u,c as h,af as b,h as f,aa as x}from"./index.d6c4bdc6.js";import{Q as k}from"./QSelect.a8a1d697.js";import{Q as _}from"./QForm.18dc3b57.js";import{u as A}from"./useNap.feecb24e.js";const C={class:"col-xs-12 col-md-6"},N={class:"row"},T={class:"col-xs-12 col-md-7"},U={class:"col-xs-12 col-md-6"},Q={class:"row"},B={class:"col-xs-12 col-md-7"},F={class:"col-xs-12 col-md-6"},I={class:"row"},M={class:"col-xs-12 col-md-7"},R={class:"col-xs-12 col-md-6"},S={class:"row"},D={class:"col-xs-12 col-md-7"},P={class:"col-xs-12 col-md-6"},L={class:"row"},z={class:"col-xs-12 col-md-7"},E={key:0,class:"col-xs-12 col-md-6"},G={class:"row"},H={class:"col-xs-12 col-md-7"},X=w({__name:"FormNap",props:{edit:{type:Boolean}},setup(y){const p=y,{formNap:i,loading:V,validaciones:d,listRouters:q,cargarRouters:g,onSubmit:$}=A(p.edit);return j(async()=>{await g()}),(o,t)=>(c(),v(_,{onSubmit:t[13]||(t[13]=r=>e($)(p.edit)),class:"q-mt-md"},{default:a(()=>[s("div",{class:l(["row q-col-gutter-md q-px-lg",o.$q.screen.width<1022||"q-col-gutter-y-lg q-pt-md"])},[s("div",C,[s("div",N,[s("div",{class:l(["col-xs-12 col-md-4 flex items-center justify-end",[o.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"texto-rigth q-pb-md"]])},[s("label",{class:l(o.$q.screen.width<1022||"q-pr-md")}," Nombre: ",2)],2),s("div",T,[n(u,{modelValue:e(i).nombre,"onUpdate:modelValue":[t[0]||(t[0]=r=>e(i).nombre=r),t[1]||(t[1]=r=>(e(i).nombre=e(i).nombre.toUpperCase(),e(d).nombre.isValid=!0))],modelModifiers:{trim:!0},placeholder:"Caja N1",error:!e(d).nombre.isValid,"input-class":"resaltarTextoInput",dense:"",outlined:""},{error:a(()=>[s("label",{class:l(o.$q.dark.isActive?"text-red-4":"text-negative")},m(e(d).nombre.message),3)]),_:1},8,["modelValue","error"])])])]),s("div",U,[s("div",Q,[s("div",{class:l(["col-xs-12 col-md-4 flex items-center justify-end",[o.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end q-pb-md"]])},[s("label",{class:l(o.$q.screen.width<1022||"q-pr-md")}," Coordenadas: ",2)],2),s("div",B,[n(u,{modelValue:e(i).coordenadas,"onUpdate:modelValue":[t[2]||(t[2]=r=>e(i).coordenadas=r),t[3]||(t[3]=r=>e(d).coordenadas.isValid=!0)],modelModifiers:{trim:!0},placeholder:"Lg, Lt",hint:"* Texto para la facturaci\xF3n",error:!e(d).coordenadas.isValid,"input-class":"resaltarTextoInput",dense:"",outlined:""},{error:a(()=>[s("label",{class:l(o.$q.dark.isActive?"text-red-4":"text-negative")},m(e(d).coordenadas.message),3)]),_:1},8,["modelValue","error"])])])]),s("div",F,[s("div",I,[s("div",{class:l(["col-xs-12 col-md-4 flex items-center justify-end",[o.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end q-pb-md"]])},[s("label",{class:l(o.$q.screen.width<1022||"q-pr-md")}," Ubicaci\xF3n: ",2)],2),s("div",M,[n(u,{modelValue:e(i).ubicacion,"onUpdate:modelValue":[t[4]||(t[4]=r=>e(i).ubicacion=r),t[5]||(t[5]=r=>e(d).ubicacion.isValid=!0)],modelModifiers:{trim:!0},placeholder:"Av. xxx 123",hint:"* Texto para la facturaci\xF3n",error:!e(d).ubicacion.isValid,"input-class":"resaltarTextoInput",dense:"",outlined:""},{error:a(()=>[s("label",{class:l(o.$q.dark.isActive?"text-red-4":"text-negative")},m(e(d).ubicacion.message),3)]),_:1},8,["modelValue","error"])])])]),s("div",R,[s("div",S,[s("div",{class:l(["col-xs-12 col-md-4 flex items-center justify-end",[o.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end q-pb-md"]])},[s("label",{class:l(o.$q.screen.width<1022||"q-pr-md")}," Puertos: ",2)],2),s("div",D,[n(u,{modelValue:e(i).puertos,"onUpdate:modelValue":[t[6]||(t[6]=r=>e(i).puertos=r),t[7]||(t[7]=r=>(e(d).puertos.isValid=!0,e(i).puertos=e(i).puertos.replace(/\D/g,"")))],modelModifiers:{trim:!0},type:o.$q.platform.is.mobile?"number":"text",placeholder:"16",error:!e(d).puertos.isValid,"input-class":"resaltarTextoInput stylePlaceholder",dense:"",outlined:""},{error:a(()=>[s("label",{class:l(o.$q.dark.isActive?"text-red-4":"text-negative")},m(e(d).puertos.message),3)]),_:1},8,["modelValue","type","error"])])])]),s("div",P,[s("div",L,[s("div",{class:l(["col-xs-12 col-md-4 flex items-center justify-end",[o.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end q-pb-md"]])},[s("label",{class:l(o.$q.screen.width<1022||"q-pr-md")}," Detalles: ",2)],2),s("div",z,[n(u,{modelValue:e(i).detalles,"onUpdate:modelValue":[t[8]||(t[8]=r=>e(i).detalles=r),t[9]||(t[9]=r=>e(d).detalles.isValid=!0)],modelModifiers:{trim:!0},placeholder:"Poste 5",autogrow:"",error:!e(d).detalles.isValid,"input-class":"resaltarTextoInput",dense:"",outlined:""},{error:a(()=>[s("label",{class:l(o.$q.dark.isActive?"text-red-4":"text-negative")},m(e(d).detalles.message),3)]),_:1},8,["modelValue","error"])])])]),e(q).length>1?(c(),h("div",E,[s("div",G,[s("div",{class:l(["col-xs-12 col-md-4 flex items-center justify-end",[o.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end q-pb-md"]])},[s("label",{class:l(o.$q.screen.width<1022||"q-pr-md")}," Router: ",2)],2),s("div",H,[n(k,{modelValue:e(i).router_id,"onUpdate:modelValue":[t[10]||(t[10]=r=>e(i).router_id=r),t[11]||(t[11]=r=>e(d).router_id.isValid=!0)],outlined:"",dense:"",error:!e(d).router_id.isValid,"emit-value":"","map-options":"",options:e(q)},{error:a(()=>[s("label",{class:l(o.$q.dark.isActive?"text-red-4":"text-negative")},m(e(d).router_id.message),3)]),_:1},8,["modelValue","error","options"])])])])):b("",!0),s("div",{class:l(["col-xs-12 col-md-12 flex q-py-lg",[o.$q.screen.width<600?"justify-center q-pt-none q-mb-md q-ml-md":"justify-between"]])},[o.$q.screen.width>600?(c(),v(f,{key:0,icon:"arrow_back",onClick:t[12]||(t[12]=r=>o.$router.push("/servicios/internet")),outline:"",rounded:"",class:"q-ml-md",color:o.$q.dark.isActive?"blue-grey-2":"blue-grey-10"},{default:a(()=>[x(" \xA0 Regresar ")]),_:1},8,["color"])):b("",!0),n(f,{type:"submit",icon:"save",loading:e(V),outline:"",rounded:"",class:"q-mr-lg",style:{color:"#696cff"}},{default:a(()=>[x(" \xA0 Guardar Cambios ")]),_:1},8,["loading"])],2)],2)]),_:1}))}});export{X as _};