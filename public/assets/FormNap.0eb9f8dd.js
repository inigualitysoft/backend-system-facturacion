import{d as j,v as h,o as u,a7 as q,g as a,ab as e,e as s,ac as l,f as n,a9 as m,Q as c,c as k,ad as v,h as b,a8 as f}from"./index.34de80b5.js";import{Q as _}from"./QSelect.d6ab8ec0.js";import{Q as A}from"./QForm.f1686d74.js";import{u as C}from"./useNap.5e5c7053.js";const N={class:"col-xs-12 col-md-6"},T={class:"row"},U={class:"col-xs-12 col-md-7"},Q={class:"col-xs-12 col-md-6"},B={class:"row"},F={class:"col-xs-12 col-md-7"},I={class:"col-xs-12 col-md-6"},M={class:"row"},S={class:"col-xs-12 col-md-7"},D={class:"col-xs-12 col-md-6"},P={class:"row"},E={class:"col-xs-12 col-md-7"},L={class:"col-xs-12 col-md-6"},z={class:"row"},G={class:"col-xs-12 col-md-7"},R={key:0,class:"col-xs-12 col-md-6"},H={class:"row"},J={class:"col-xs-12 col-md-7"},Y=j({__name:"FormNap",props:{edit:{type:Boolean}},setup(x){const p=x,{claim:y,formNap:i,loading:V,validaciones:d,listCompanies:g,cargarCompanies:$,onSubmit:w}=C(p.edit);return h(async()=>{await $()}),(t,o)=>(u(),q(A,{onSubmit:o[13]||(o[13]=r=>e(w)(p.edit)),class:"q-mt-md"},{default:a(()=>[s("div",{class:l(["row q-col-gutter-md q-px-lg",t.$q.screen.width<1022||"q-col-gutter-y-lg q-pt-md"])},[s("div",N,[s("div",T,[s("div",{class:l(["col-xs-12 col-md-4 flex items-center justify-end",[t.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"texto-rigth q-pb-md"]])},[s("label",{class:l(t.$q.screen.width<1022||"q-pr-md")}," Nombre: ",2)],2),s("div",U,[n(c,{modelValue:e(i).nombre,"onUpdate:modelValue":[o[0]||(o[0]=r=>e(i).nombre=r),o[1]||(o[1]=r=>(e(i).nombre=e(i).nombre.toUpperCase(),e(d).nombre.isValid=!0))],modelModifiers:{trim:!0},placeholder:"Caja N1",error:!e(d).nombre.isValid,"input-class":"resaltarTextoInput",dense:"",outlined:""},{error:a(()=>[s("label",{class:l(t.$q.dark.isActive?"text-red-4":"text-negative")},m(e(d).nombre.message),3)]),_:1},8,["modelValue","error"])])])]),s("div",Q,[s("div",B,[s("div",{class:l(["col-xs-12 col-md-4 flex items-center justify-end",[t.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end q-pb-md"]])},[s("label",{class:l(t.$q.screen.width<1022||"q-pr-md")}," Coordenadas: ",2)],2),s("div",F,[n(c,{modelValue:e(i).coordenadas,"onUpdate:modelValue":[o[2]||(o[2]=r=>e(i).coordenadas=r),o[3]||(o[3]=r=>e(d).coordenadas.isValid=!0)],modelModifiers:{trim:!0},placeholder:"Lg, Lt",hint:"* Texto para la facturaci\xF3n",error:!e(d).coordenadas.isValid,"input-class":"resaltarTextoInput",dense:"",outlined:""},{error:a(()=>[s("label",{class:l(t.$q.dark.isActive?"text-red-4":"text-negative")},m(e(d).coordenadas.message),3)]),_:1},8,["modelValue","error"])])])]),s("div",I,[s("div",M,[s("div",{class:l(["col-xs-12 col-md-4 flex items-center justify-end",[t.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end q-pb-md"]])},[s("label",{class:l(t.$q.screen.width<1022||"q-pr-md")}," Ubicaci\xF3n: ",2)],2),s("div",S,[n(c,{modelValue:e(i).ubicacion,"onUpdate:modelValue":[o[4]||(o[4]=r=>e(i).ubicacion=r),o[5]||(o[5]=r=>e(d).ubicacion.isValid=!0)],modelModifiers:{trim:!0},placeholder:"Av. xxx 123",hint:"* Texto para la facturaci\xF3n",error:!e(d).ubicacion.isValid,"input-class":"resaltarTextoInput",dense:"",outlined:""},{error:a(()=>[s("label",{class:l(t.$q.dark.isActive?"text-red-4":"text-negative")},m(e(d).ubicacion.message),3)]),_:1},8,["modelValue","error"])])])]),s("div",D,[s("div",P,[s("div",{class:l(["col-xs-12 col-md-4 flex items-center justify-end",[t.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end q-pb-md"]])},[s("label",{class:l(t.$q.screen.width<1022||"q-pr-md")}," Puertos: ",2)],2),s("div",E,[n(c,{modelValue:e(i).puertos,"onUpdate:modelValue":[o[6]||(o[6]=r=>e(i).puertos=r),o[7]||(o[7]=r=>(e(d).puertos.isValid=!0,e(i).puertos=e(i).puertos.replace(/\D/g,"")))],modelModifiers:{trim:!0},type:t.$q.platform.is.mobile?"number":"text",placeholder:"16",error:!e(d).puertos.isValid,"input-class":"resaltarTextoInput stylePlaceholder",dense:"",outlined:""},{error:a(()=>[s("label",{class:l(t.$q.dark.isActive?"text-red-4":"text-negative")},m(e(d).puertos.message),3)]),_:1},8,["modelValue","type","error"])])])]),s("div",L,[s("div",z,[s("div",{class:l(["col-xs-12 col-md-4 flex items-center justify-end",[t.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end q-pb-md"]])},[s("label",{class:l(t.$q.screen.width<1022||"q-pr-md")}," Detalles: ",2)],2),s("div",G,[n(c,{modelValue:e(i).detalles,"onUpdate:modelValue":[o[8]||(o[8]=r=>e(i).detalles=r),o[9]||(o[9]=r=>e(d).detalles.isValid=!0)],modelModifiers:{trim:!0},placeholder:"Poste 5",autogrow:"",error:!e(d).detalles.isValid,"input-class":"resaltarTextoInput",dense:"",outlined:""},{error:a(()=>[s("label",{class:l(t.$q.dark.isActive?"text-red-4":"text-negative")},m(e(d).detalles.message),3)]),_:1},8,["modelValue","error"])])])]),e(y).roles[0]=="Super-Administrador"&&!t.edit?(u(),k("div",R,[s("div",H,[s("div",{class:l(["col-xs-12 col-md-4 flex items-center justify-end",[t.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end q-pb-md"]])},[s("label",{class:l(t.$q.screen.width<1022||"q-pr-md")}," Empresa: ",2)],2),s("div",J,[n(_,{modelValue:e(i).company_id,"onUpdate:modelValue":[o[10]||(o[10]=r=>e(i).company_id=r),o[11]||(o[11]=r=>e(d).company_id.isValid=!0)],outlined:"",dense:"",error:!e(d).company_id.isValid,"emit-value":"","map-options":"",options:e(g)},{error:a(()=>[s("label",{class:l(t.$q.dark.isActive?"text-red-4":"text-negative")},m(e(d).company_id.message),3)]),_:1},8,["modelValue","error","options"])])])])):v("",!0),s("div",{class:l(["col-xs-12 col-md-12 flex q-py-lg",[t.$q.screen.width<600?"justify-center q-pt-none q-mb-md q-ml-md":"justify-between"]])},[t.$q.screen.width>600?(u(),q(b,{key:0,icon:"arrow_back",onClick:o[12]||(o[12]=r=>t.$router.push("/servicios/internet")),outline:"",rounded:"",class:"q-ml-md",color:t.$q.dark.isActive?"blue-grey-2":"blue-grey-10"},{default:a(()=>[f(" \xA0 Regresar ")]),_:1},8,["color"])):v("",!0),n(b,{type:"submit",icon:"save",loading:e(V),outline:"",rounded:"",class:"q-mr-lg",style:{color:"#696cff"}},{default:a(()=>[f(" \xA0 Guardar Cambios ")]),_:1},8,["loading"])],2)],2)]),_:1}))}});export{Y as _};
