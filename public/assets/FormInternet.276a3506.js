import{d as M,C as I,o as c,a9 as q,g as a,ad as e,e as s,ae as i,f as n,ab as m,Q as p,i as u,ah as k,c as A,af as f,h as x,aa as g}from"./index.d6c4bdc6.js";import{Q as y}from"./QBadge.dade6de9.js";import{Q as V}from"./QSelect.a8a1d697.js";import{Q as U}from"./QForm.18dc3b57.js";import{u as Q}from"./useInternet.153d1a22.js";const S={class:"col-xs-12 col-md-6"},T={class:"row"},B={class:"col-xs-12 col-md-7"},D={class:"col-xs-12 col-md-6"},z={class:"row"},C={class:"col-xs-12 col-md-7"},N={class:"col-xs-12 col-md-6"},P={class:"row"},F={class:"col-xs-12 col-md-7"},R={class:"col-xs-12 col-md-6"},L={class:"row"},E={class:"col-xs-12 col-md-7"},G={class:"col-12 q-py-sm"},O={class:"col-xs-12 col-md-6"},H={class:"row"},J={class:"col-xs-12 col-md-7"},K={class:"col-xs-12 col-md-6"},W={class:"row"},X={class:"col-xs-12 col-md-7"},Y={class:"col-xs-12 col-md-6"},Z={class:"row"},ee={class:"col-xs-12 col-md-7"},se={class:"col-xs-12 col-md-6"},te={class:"row"},le={class:"col-xs-12 col-md-7"},ie={class:"col-xs-12 col-md-6"},oe={class:"row"},re={class:"col-xs-12 col-md-7"},de={class:"col-xs-12 col-md-6"},ae={class:"row"},ne={class:"col-xs-12 col-md-7"},me={key:0,class:"col-xs-12 col-md-6"},pe={class:"row"},ue={class:"col-xs-12 col-md-7"},xe=M({__name:"FormInternet",props:{edit:{type:Boolean}},setup(_){const b=_,{formInternet:o,loading:$,validaciones:d,listRouters:v,cargarRouters:w,validDecimal:h,onSubmit:j}=Q(b.edit);return I(async()=>{await w()}),(l,t)=>(c(),q(U,{onSubmit:t[23]||(t[23]=r=>e(j)(b.edit)),class:"q-mt-md"},{default:a(()=>[s("div",{class:i(["row q-col-gutter-md q-px-lg",l.$q.screen.width<1022||"q-col-gutter-y-lg q-pt-md"])},[s("div",S,[s("div",T,[s("div",{class:i(["col-xs-12 col-md-4 flex items-center justify-end",[l.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"texto-rigth q-pb-md"]])},[s("label",{class:i(l.$q.screen.width<1022||"q-pr-md")}," Nombre Plan: ",2)],2),s("div",B,[n(p,{modelValue:e(o).nombre_plan,"onUpdate:modelValue":[t[0]||(t[0]=r=>e(o).nombre_plan=r),t[1]||(t[1]=r=>(e(o).nombre_plan=e(o).nombre_plan.toUpperCase(),e(d).nombre_plan.isValid=!0))],modelModifiers:{trim:!0},placeholder:"Plan Premium 4Mbps",error:!e(d).nombre_plan.isValid,"input-class":"resaltarTextoInput",dense:"",outlined:""},{error:a(()=>[s("label",{class:i(l.$q.dark.isActive?"text-red-4":"text-negative")},m(e(d).nombre_plan.message),3)]),_:1},8,["modelValue","error"])])])]),s("div",D,[s("div",z,[s("div",{class:i(["col-xs-12 col-md-4 flex items-center justify-end",[l.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end q-pb-md"]])},[s("label",{class:i(l.$q.screen.width<1022||"q-pr-md")}," Descripci\xF3n: ",2)],2),s("div",C,[n(p,{modelValue:e(o).descripcion,"onUpdate:modelValue":[t[2]||(t[2]=r=>e(o).descripcion=r),t[3]||(t[3]=r=>e(d).descripcion.isValid=!0)],modelModifiers:{trim:!0},placeholder:"Internet banda ancha 4Mbps/2Mbps",hint:"* Texto para la facturaci\xF3n",error:!e(d).descripcion.isValid,"input-class":"resaltarTextoInput",dense:"",outlined:""},{error:a(()=>[s("label",{class:i(l.$q.dark.isActive?"text-red-4":"text-negative")},m(e(d).descripcion.message),3)]),_:1},8,["modelValue","error"])])])]),s("div",N,[s("div",P,[s("div",{class:i(["col-xs-12 col-md-4 flex items-center justify-end",[l.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"texto-rigth q-pb-md"]])},[s("label",{class:i(l.$q.screen.width<1022||"q-pr-md")}," Precio Plan: ",2)],2),s("div",F,[n(p,{modelValue:e(o).precio_plan,"onUpdate:modelValue":[t[4]||(t[4]=r=>e(o).precio_plan=r),t[5]||(t[5]=r=>(e(h)("precio_plan"),e(d).precio_plan.isValid=!0))],modelModifiers:{trim:!0},placeholder:"0.00",error:!e(d).precio_plan.isValid,type:"number",step:"0.01","input-class":"resaltarTextoInput",dense:"",outlined:""},{error:a(()=>[s("label",{class:i(l.$q.dark.isActive?"text-red-4":"text-negative")},m(e(d).precio_plan.message),3)]),prepend:a(()=>[n(u,{name:"paid"})]),_:1},8,["modelValue","error"])])])]),s("div",R,[s("div",L,[s("div",{class:i(["col-xs-12 col-md-4 flex items-center justify-end",[l.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end q-pb-md"]])},[s("label",{class:i(l.$q.screen.width<1022||"q-pr-md")}," Impuesto(%): ",2)],2),s("div",E,[n(p,{modelValue:e(o).impuesto,"onUpdate:modelValue":[t[6]||(t[6]=r=>e(o).impuesto=r),t[7]||(t[7]=r=>(e(d).impuesto.isValid=!0,e(o).impuesto=parseInt(e(o).impuesto.toString().replace(/\D/g,""))))],modelModifiers:{trim:!0},placeholder:"0",type:l.$q.platform.is.mobile?"number":"text",error:!e(d).impuesto.isValid,"input-class":"resaltarTextoInput",dense:"",outlined:""},{error:a(()=>[s("label",{class:i(l.$q.dark.isActive?"text-red-4":"text-negative")},m(e(d).impuesto.message),3)]),append:a(()=>[n(u,{name:"fa-solid fa-percent",size:"xs"})]),_:1},8,["modelValue","type","error"])])])]),s("div",G,[n(k,{inset:""})]),s("div",O,[s("div",H,[s("div",{class:i(["col-xs-12 col-md-4 flex items-center justify-end",[l.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"texto-rigth q-pb-md"]])},[s("label",{class:i(l.$q.screen.width<1022||"q-pr-md")}," Descarga Mbps: ",2)],2),s("div",J,[n(p,{modelValue:e(o).descarga_Mbps,"onUpdate:modelValue":[t[8]||(t[8]=r=>e(o).descarga_Mbps=r),t[9]||(t[9]=r=>(e(d).descarga_Mbps.isValid=!0,e(o).descarga_Mbps=parseInt(e(o).descarga_Mbps.toString().replace(/\D/g,""))))],modelModifiers:{trim:!0},placeholder:"0",type:l.$q.platform.is.mobile?"number":"text",error:!e(d).descarga_Mbps.isValid,"input-class":"resaltarTextoInput",dense:"",outlined:""},{error:a(()=>[s("label",{class:i(l.$q.dark.isActive?"text-red-4":"text-negative")},m(e(d).descarga_Mbps.message),3)]),append:a(()=>[n(y,{filled:"",color:"blue-grey-6",style:{height:"100%",width:"19%",position:"absolute",right:"0px","justify-content":"center","font-size":"14px"},label:"Mbps"})]),_:1},8,["modelValue","type","error"])])])]),s("div",K,[s("div",W,[s("div",{class:i(["col-xs-12 col-md-4 flex items-center justify-end",[l.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"texto-rigth q-pb-md"]])},[s("label",{class:i(l.$q.screen.width<1022||"q-pr-md")}," Subida Mbps: ",2)],2),s("div",X,[n(p,{modelValue:e(o).subida_Mbps,"onUpdate:modelValue":[t[10]||(t[10]=r=>e(o).subida_Mbps=r),t[11]||(t[11]=r=>(e(d).subida_Mbps.isValid=!0,e(o).subida_Mbps=parseInt(e(o).subida_Mbps.toString().replace(/\D/g,""))))],modelModifiers:{trim:!0},placeholder:"0",type:l.$q.platform.is.mobile?"number":"text",error:!e(d).subida_Mbps.isValid,"input-class":"resaltarTextoInput",dense:"",outlined:""},{error:a(()=>[s("label",{class:i(l.$q.dark.isActive?"text-red-4":"text-negative")},m(e(d).subida_Mbps.message),3)]),append:a(()=>[n(y,{filled:"",color:"blue-grey-6",style:{height:"100%",width:"19%",position:"absolute",right:"0px","justify-content":"center","font-size":"14px"},label:"Mbps"})]),_:1},8,["modelValue","type","error"])])])]),s("div",Y,[s("div",Z,[s("div",{class:i(["col-xs-12 col-md-4 flex items-center justify-end",[l.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end q-pb-md"]])},[s("label",{class:i(l.$q.screen.width<1022||"q-pr-md")}," Limit At: ",2)],2),s("div",ee,[n(p,{modelValue:e(o).limit_at,"onUpdate:modelValue":[t[12]||(t[12]=r=>e(o).limit_at=r),t[13]||(t[13]=r=>(e(d).limit_at.isValid=!0,e(o).limit_at=parseInt(e(o).limit_at.toString().replace(/\D/g,""))))],modelModifiers:{trim:!0},type:l.$q.platform.is.mobile?"number":"text",placeholder:"0",error:!e(d).limit_at.isValid,"input-class":"resaltarTextoInput",dense:"",outlined:""},{error:a(()=>[s("label",{class:i(l.$q.dark.isActive?"text-red-4":"text-negative")},m(e(d).limit_at.message),3)]),append:a(()=>[n(u,{name:"fa-solid fa-percent",size:"xs"})]),_:1},8,["modelValue","type","error"])])])]),s("div",se,[s("div",te,[s("div",{class:i(["col-xs-12 col-md-4 flex items-center justify-end",[l.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end q-pb-md"]])},[s("label",{class:i(l.$q.screen.width<1022||"q-pr-md")}," Burst Limit: ",2)],2),s("div",le,[n(p,{modelValue:e(o).burst_limit,"onUpdate:modelValue":[t[14]||(t[14]=r=>e(o).burst_limit=r),t[15]||(t[15]=r=>(e(d).burst_limit.isValid=!0,e(o).burst_limit=parseInt(e(o).burst_limit.toString().replace(/\D/g,""))))],modelModifiers:{trim:!0},placeholder:"0",type:l.$q.platform.is.mobile?"number":"text",error:!e(d).burst_limit.isValid,"input-class":"resaltarTextoInput",dense:"",outlined:""},{error:a(()=>[s("label",{class:i(l.$q.dark.isActive?"text-red-4":"text-negative")},m(e(d).burst_limit.message),3)]),prepend:a(()=>[n(u,{name:"fa-solid fa-plus",size:"xs"})]),append:a(()=>[n(u,{name:"fa-solid fa-percent",size:"xs"})]),_:1},8,["modelValue","type","error"])])])]),s("div",ie,[s("div",oe,[s("div",{class:i(["col-xs-12 col-md-4 flex items-center justify-end",[l.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end q-pb-md"]])},[s("label",{class:i(l.$q.screen.width<1022||"q-pr-md")}," Prioridad: ",2)],2),s("div",re,[n(V,{modelValue:e(o).prioridad,"onUpdate:modelValue":[t[16]||(t[16]=r=>e(o).prioridad=r),t[17]||(t[17]=r=>e(d).prioridad.isValid=!0)],outlined:"",dense:"",error:!e(d).prioridad.isValid,"emit-value":"","map-options":"",options:[{label:"Baja (8)",value:8},{label:"Baja (7)",value:7},{label:"Normal (6)",value:6},{label:"Normal (5)",value:5},{label:"Normal (4)",value:4},{label:"Alto (3)",value:3},{label:"Alto (2)",value:2},{label:"Alto (1)",value:1}]},{error:a(()=>[s("label",{class:i(l.$q.dark.isActive?"text-red-4":"text-negative")},m(e(d).prioridad.message),3)]),_:1},8,["modelValue","error","options"])])])]),s("div",de,[s("div",ae,[s("div",{class:i(["col-xs-12 col-md-4 flex items-center justify-end",[l.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end q-pb-md"]])},[s("label",{class:i(l.$q.screen.width<1022||"q-pr-md")}," Addresslist: ",2)],2),s("div",ne,[n(p,{modelValue:e(o).address_list,"onUpdate:modelValue":[t[18]||(t[18]=r=>e(o).address_list=r),t[19]||(t[19]=r=>e(d).address_list.isValid=!0)],modelModifiers:{trim:!0},hint:"*Opcional Lista personalizada ejm: habiliados",error:!e(d).address_list.isValid,"input-class":"resaltarTextoInput",dense:"",outlined:""},{error:a(()=>[s("label",{class:i(l.$q.dark.isActive?"text-red-4":"text-negative")},m(e(d).address_list.message),3)]),_:1},8,["modelValue","error"])])])]),e(v).length>1?(c(),A("div",me,[s("div",pe,[s("div",{class:i(["col-xs-12 col-md-4 flex items-center justify-end",[l.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end q-pb-md"]])},[s("label",{class:i(l.$q.screen.width<1022||"q-pr-md")}," Router: ",2)],2),s("div",ue,[n(V,{modelValue:e(o).router_id,"onUpdate:modelValue":[t[20]||(t[20]=r=>e(o).router_id=r),t[21]||(t[21]=r=>e(d).router_id.isValid=!0)],outlined:"",dense:"",error:!e(d).router_id.isValid,"emit-value":"","map-options":"",options:e(v)},{error:a(()=>[s("label",{class:i(l.$q.dark.isActive?"text-red-4":"text-negative")},m(e(d).router_id.message),3)]),_:1},8,["modelValue","error","options"])])])])):f("",!0),s("div",{class:i(["col-xs-12 col-md-12 flex q-py-lg",[l.$q.screen.width<600?"justify-center q-pt-none q-mb-md q-ml-md":"justify-between"]])},[l.$q.screen.width>600?(c(),q(x,{key:0,icon:"arrow_back",onClick:t[22]||(t[22]=r=>l.$router.push("/servicios/internet")),outline:"",rounded:"",class:"q-ml-md",color:l.$q.dark.isActive?"blue-grey-2":"blue-grey-10"},{default:a(()=>[g(" \xA0 Regresar ")]),_:1},8,["color"])):f("",!0),n(x,{type:"submit",icon:"save",loading:e($),outline:"",rounded:"",class:"q-mr-lg",style:{color:"#696cff"}},{default:a(()=>[g(" \xA0 Guardar Cambios ")]),_:1},8,["loading"])],2)],2)]),_:1}))}});export{xe as _};
