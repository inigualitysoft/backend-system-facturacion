import{d as $,o as c,a9 as u,g as m,ad as l,e,ae as t,f as n,Q as a,c as j,af as p,h as f,aa as q}from"./index.7e6e0c1f.js";import{Q as y}from"./QSelect.f9dfedb4.js";import{Q as g}from"./QForm.3ac0604a.js";import{u as N}from"./useSucursal.0f4479f2.js";const U={class:"col-xs-12 col-md-6"},I={class:"row"},K={class:"col-xs-12 col-md-7"},B={class:"col-xs-12 col-md-6"},C={class:"row"},S={class:"col-xs-12 col-md-7"},T={class:"col-xs-12 col-md-6"},M={class:"row"},k={class:"col-xs-12 col-md-7"},A={class:"col-xs-12 col-md-6"},E={class:"row"},F={class:"col-xs-12 col-md-7"},Q={class:"col-xs-12 col-md-6"},R={class:"row"},P={class:"col-xs-12 col-md-7"},D={class:"col-xs-12 col-md-6"},O={class:"row"},z={class:"col-xs-12 col-md-7"},G={class:"col-xs-12 col-md-6"},H={class:"row"},J={class:"col-xs-12 col-md-7"},L={class:"col-xs-12 col-md-6"},W={class:"row"},X={class:"col-xs-12 col-md-7"},Y={class:"col-xs-12 col-md-6"},Z={class:"row"},ee={class:"col-xs-12 col-md-7"},se={key:0,class:"col-xs-12 col-md-6"},le={class:"row"},oe={class:"col-xs-12 col-md-7"},ae=$({__name:"FormSucursal",props:{edit:{type:Boolean}},setup(x){const b=x,{claim:v,cargarCompanies:_,formSucursal:d,loading:h,listCompanies:w,allowOnlyNumber:r,onSubmit:V}=N();return _(),(s,o)=>(c(),u(g,{onSubmit:o[11]||(o[11]=i=>l(V)(b.edit)),class:"q-mt-md"},{default:m(()=>[e("div",{class:t(["row q-col-gutter-md q-px-lg",s.$q.screen.width<1022||"q-col-gutter-y-lg"])},[e("div",U,[e("div",I,[e("div",{class:t(["col-xs-12 col-md-5 flex items-center justify-end",[s.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"texto-rigth"]])},[e("label",{class:t(s.$q.screen.width<1022||"q-pr-md")}," Nombre del establecimiento: ",2)],2),e("div",K,[n(a,{modelValue:l(d).nombre,"onUpdate:modelValue":o[0]||(o[0]=i=>l(d).nombre=i),modelModifiers:{trim:!0},"input-style":"text-transform: uppercase;","input-class":"resaltarTextoInput",dense:"",filled:"",required:""},null,8,["modelValue"])])])]),e("div",B,[e("div",C,[e("div",{class:t(["col-xs-12 col-md-5 flex items-center justify-end",[s.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end"]])},[e("label",{class:t(s.$q.screen.width<1022||"q-pr-md")}," Direcci\xF3n: ",2)],2),e("div",S,[n(a,{modelValue:l(d).direccion,"onUpdate:modelValue":o[1]||(o[1]=i=>l(d).direccion=i),modelModifiers:{trim:!0},"input-class":"resaltarTextoInput",dense:"",filled:"",required:""},null,8,["modelValue"])])])]),e("div",T,[e("div",M,[e("div",{class:t(["col-xs-12 col-md-5 flex items-center justify-end",[s.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"texto-rigth"]])},[e("label",{class:t(s.$q.screen.width<1022||"q-pr-md")}," Numero de Establecimiento: ",2)],2),e("div",k,[n(a,{type:s.$q.platform.is.mobile?"number":"text",modelValue:l(d).establecimiento,"onUpdate:modelValue":o[2]||(o[2]=i=>l(d).establecimiento=i),"input-class":"resaltarTextoInput",maxlength:3,dense:"",filled:"",required:"",onKeyup:l(r)},null,8,["type","modelValue","onKeyup"])])])]),e("div",A,[e("div",E,[e("div",{class:t(["col-xs-12 col-md-5 flex items-center justify-end",[s.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end"]])},[e("label",{class:t(s.$q.screen.width<1022||"q-pr-md")}," N\xB0 punto de emisi\xF3n: ",2)],2),e("div",F,[n(a,{type:s.$q.platform.is.mobile?"number":"text",modelValue:l(d).punto_emision,"onUpdate:modelValue":o[3]||(o[3]=i=>l(d).punto_emision=i),"input-class":"resaltarTextoInput",maxlength:3,dense:"",filled:"",required:"",onKeyup:l(r)},null,8,["type","modelValue","onKeyup"])])])]),e("div",Q,[e("div",R,[e("div",{class:t(["col-xs-12 col-md-5 flex items-center justify-end",[s.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end"]])},[e("label",{class:t(s.$q.screen.width<1022||"q-pr-md")}," N\xB0 secuencial Factura: ",2)],2),e("div",P,[n(a,{type:s.$q.platform.is.mobile?"number":"text",modelValue:l(d).secuencia_factura_produccion,"onUpdate:modelValue":o[4]||(o[4]=i=>l(d).secuencia_factura_produccion=i),modelModifiers:{trim:!0},"input-class":"resaltarTextoInput",maxlength:9,onKeyup:l(r),dense:"",filled:"",required:""},null,8,["type","modelValue","onKeyup"])])])]),e("div",D,[e("div",O,[e("div",{class:t(["col-xs-12 col-md-5 flex items-center justify-end",[s.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"texto-rigth"]])},[e("label",{class:t(s.$q.screen.width<1022||"q-pr-md")}," N\xB0 secuencial Factura Pruebas: ",2)],2),e("div",z,[n(a,{type:s.$q.platform.is.mobile?"number":"text",modelValue:l(d).secuencia_factura_pruebas,"onUpdate:modelValue":o[5]||(o[5]=i=>l(d).secuencia_factura_pruebas=i),modelModifiers:{trim:!0},"input-class":"resaltarTextoInput",maxlength:9,onKeyup:l(r),dense:"",filled:"",required:""},null,8,["type","modelValue","onKeyup"])])])]),e("div",G,[e("div",H,[e("div",{class:t(["col-xs-12 col-md-5 flex items-center justify-end",[s.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"texto-rigth"]])},[e("label",{class:t(s.$q.screen.width<1022||"q-pr-md")}," N\xB0 secuencial Nota de Cr\xE9dito: ",2)],2),e("div",J,[n(a,{type:s.$q.platform.is.mobile?"number":"text",modelValue:l(d).secuencia_nota_credito_produccion,"onUpdate:modelValue":o[6]||(o[6]=i=>l(d).secuencia_nota_credito_produccion=i),modelModifiers:{trim:!0},"input-class":"resaltarTextoInput",maxlength:9,onKeyup:l(r),dense:"",filled:"",required:""},null,8,["type","modelValue","onKeyup"])])])]),e("div",L,[e("div",W,[e("div",{class:t(["col-xs-12 col-md-5 flex items-center justify-end",[s.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"texto-rigth"]])},[e("label",{class:t(s.$q.screen.width<1022||"q-pr-md")}," Secuencial nota de cr\xE9dito Pruebas: ",2)],2),e("div",X,[n(a,{type:s.$q.platform.is.mobile?"number":"text","input-class":"resaltarTextoInput",modelValue:l(d).secuencia_nota_credito_pruebas,"onUpdate:modelValue":o[7]||(o[7]=i=>l(d).secuencia_nota_credito_pruebas=i),modelModifiers:{trim:!0},maxlength:9,onKeyup:l(r),dense:"",filled:"",required:""},null,8,["type","modelValue","onKeyup"])])])]),e("div",Y,[e("div",Z,[e("div",{class:t(["col-xs-12 col-md-5 flex items-center justify-end",[s.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end"]])},[e("label",{class:t(s.$q.screen.width<1022||"q-pr-md")}," Ambiente: ",2)],2),e("div",ee,[n(y,{dense:"",modelValue:l(d).ambiente,"onUpdate:modelValue":o[8]||(o[8]=i=>l(d).ambiente=i),modelModifiers:{trim:!0},filled:"",options:["PRODUCCION","PRUEBA"]},null,8,["modelValue"])])])]),l(v).roles[0]=="SUPER-ADMINISTRADOR"?(c(),j("div",se,[e("div",le,[e("div",{class:t(["col-xs-12 col-md-5 flex items-center justify-end",[s.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end"]])},[e("label",{class:t(s.$q.screen.width<1022||"q-pr-md")}," Empresa: ",2)],2),e("div",oe,[n(y,{dense:"",modelValue:l(d).company_id,"onUpdate:modelValue":o[9]||(o[9]=i=>l(d).company_id=i),modelModifiers:{trim:!0},filled:"",options:l(w),"emit-value":"","map-options":""},null,8,["modelValue","options"])])])])):p("",!0),e("div",{class:t(["col-xs-12 col-md-12 flex q-py-lg",[s.$q.screen.width<600?"justify-center q-ml-xl q-pt-none q-mb-md":"justify-between"]])},[s.$q.screen.width>600?(c(),u(f,{key:0,icon:"arrow_back",onClick:o[10]||(o[10]=i=>s.$router.push("/sucursales")),outline:"",rounded:"",class:"q-ml-md",color:s.$q.dark.isActive?"blue-grey-2":"blue-grey-10"},{default:m(()=>[q(" \xA0 Regresar ")]),_:1},8,["color"])):p("",!0),n(f,{type:"submit",icon:"save",loading:l(h),outline:"",rounded:"",class:"q-mr-lg",style:{color:"#696cff"}},{default:m(()=>[q(" \xA0 Guardar Cambios ")]),_:1},8,["loading"])],2)],2)]),_:1}))}});export{ae as _};
