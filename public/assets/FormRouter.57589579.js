import{r as _,d as E,C as Q,o as k,c as S,f as d,g as n,ad as s,aV as T,aj as F,e,ae as a,Q as b,ab as c,i as U,af as M,a9 as B,aa as N,h as D}from"./index.d6c4bdc6.js";import{Q as y}from"./QSelect.a8a1d697.js";import{Q as H}from"./QBadge.dade6de9.js";import{Q as O}from"./QForm.18dc3b57.js";import{a as A}from"./axios.465f24f1.js";import{u as z}from"./useHelpers.0a8a684c.js";import{_ as L}from"./ModalMapBox.8908603a.js";const j=_(!1),G=_(!0),R=_([]),p=_({id:"",nombre:"",user_api:"",tipo_router:"",password_api:"",ubicacion:"",registro_trafico:"",ip_host:"",puerto_api:"",control_velocidad:"",seguridad:"",seguridad_alterna:"",company_id:""}),v=_({nombre:{message:"",isValid:!0},user_api:{message:"",isValid:!0},tipo_router:{message:"",isValid:!0},password_api:{message:"",isValid:!0},ubicacion:{message:"",isValid:!0},registro_trafico:{message:"",isValid:!0},ip_host:{message:"",isValid:!0},puerto_api:{message:"",isValid:!0},control_velocidad:{message:"",isValid:!0},seguridad:{message:"",isValid:!0},seguridad_alterna:{message:"",isValid:!0},company_id:{message:"",isValid:!0}}),K=async()=>{R.value=[];const{data:x}=await A.get("/companies/true");x.forEach(m=>{R.value.push({label:m.nombre_comercial,value:m.id})})},Y=x=>{const{mostrarNotify:m,claim:f,router:w,route:C}=z(),l=["nombre","user_api","tipo_router","ubicacion","registro_trafico","control_velocidad","seguridad","seguridad_alterna","ip_host","puerto_api"],P=()=>{p.value={id:"",nombre:"",user_api:"",tipo_router:"",password_api:"",ubicacion:"",registro_trafico:"",ip_host:"",control_velocidad:"",puerto_api:"",seguridad:"",seguridad_alterna:"",company_id:""}},q=()=>{l.push("ip_host","company_id"),l.forEach(u=>{v.value[u].isValid=!0})},r=()=>{let u=!1;const g=/^([0-9]{1,3}\.){3}[0-9]{1,3}$/,$=p.value.ip_host;return g.test($)&&($.split(".").every(h=>parseInt(h,10)>=0&&parseInt(h,10)<=255)?(v.value.ip_host.isValid=!0,u=!1):(v.value.ip_host.message="la ip no es valida",v.value.ip_host.isValid=!1,u=!0)),l.forEach(V=>{p.value[V].length==0&&(v.value[V].message="Debes completar este campo",v.value[V].isValid=!1,u=!0)}),!x&&p.value.company_id.length==0&&f.roles[0]=="SUPER-ADMINISTRADOR"&&(v.value.company_id.message="Debes elegir una empresa",v.value.company_id.isValid=!1,u=!0),u};return{api:A,claim:f,formRouter:p,loading:j,limpiarFormulario:P,listCompanies:R,showPass:G,validaciones:v,cargarCompanies:K,quitarErrores:q,route:C,onSubmit:async u=>{if(!r())try{j.value=!0;let g={headers:{company_id:p.value.company_id,NotSetHeaderCompany:f.roles[0]=="SUPER-ADMINISTRADOR"}};u?await A.patch("/router/"+p.value.id,p.value):await A.post("/router",p.value,g),m("positive",`Router ${u?"editado":"agregado"} exitosamente`),j.value=!1,w.push({name:"index.routers"})}catch(g){j.value=!1,m("warning",g.response.data.message)}}}};const J={class:"col-xs-12 col-md-6"},W={class:"row"},X={class:"col-xs-12 col-md-7"},Z={class:"col-xs-12 col-md-6"},ee={class:"row"},se={class:"col-xs-12 col-md-7"},oe={class:"col-xs-12 col-md-6"},te={class:"row"},ie={class:"col-xs-12 col-md-7"},re={class:"col-xs-12 col-md-6"},ae={class:"row"},le={class:"col-xs-12 col-md-7"},de={class:"col-xs-12 col-md-6"},ne={class:"row"},ue={class:"col-xs-12 col-md-7"},ce={class:"col-xs-12 col-md-6"},me={class:"row"},pe={class:"col-xs-12 col-md-7"},ve={class:"col-xs-12 col-md-6"},fe={class:"row"},ge={class:"col-xs-12 col-md-7"},_e={class:"col-xs-12 col-md-6"},qe={class:"row"},Ve={class:"col-xs-12 col-md-7"},be={class:"col-xs-12 col-md-6"},ye={class:"row"},xe={class:"col-xs-12 col-md-7"},we={class:"col-xs-12 col-md-6"},$e={class:"row"},he={class:"col-xs-12 col-md-7"},je={class:"col-xs-12 col-md-6"},Ae={class:"row"},Ce={class:"col-xs-12 col-md-7"},Pe={key:0,class:"col-xs-12 col-md-6"},ke={class:"row"},Re={class:"col-xs-12 col-md-7"},Qe=E({__name:"FormRouter",props:{edit:{type:Boolean}},setup(x){const m=x,f=_(!1),w=_({edit:!1,coords:""}),{claim:C,formRouter:l,loading:P,showPass:q,validaciones:r,listCompanies:I,cargarCompanies:u,onSubmit:g}=Y(m.edit),$=t=>{r.value.ip_host.isValid=!0;const o=t.target.value.replace(/[^0-9.]/g,"");l.value.ip_host=o},V=t=>{l.value.ubicacion=`${t.lng}, ${t.lat}`,f.value=!1},h=()=>{m.edit&&(w.value={edit:!0,coords:l.value.ubicacion}),f.value=!0};return Q(async()=>{await u()}),(t,o)=>(k(),S(F,null,[d(O,{onSubmit:o[26]||(o[26]=i=>s(g)(m.edit)),class:"q-mt-md"},{default:n(()=>[e("div",{class:a(["row q-col-gutter-md q-px-lg",t.$q.screen.width<1022||"q-col-gutter-y-lg q-pt-md"])},[e("div",J,[e("div",W,[e("div",{class:a(["col-xs-12 col-md-4 flex items-center justify-end",[t.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"texto-rigth"]])},[e("label",{class:a(t.$q.screen.width<1022||"q-pr-md")}," Nombre Router: ",2)],2),e("div",X,[d(b,{modelValue:s(l).nombre,"onUpdate:modelValue":[o[0]||(o[0]=i=>s(l).nombre=i),o[1]||(o[1]=i=>(s(l).nombre=s(l).nombre.toUpperCase(),s(r).nombre.isValid=!0))],modelModifiers:{trim:!0},error:!s(r).nombre.isValid,"input-class":"resaltarTextoInput",dense:"",outlined:""},{error:n(()=>[e("label",{class:a(t.$q.dark.isActive?"text-red-4":"text-negative")},c(s(r).nombre.message),3)]),_:1},8,["modelValue","error"])])])]),e("div",Z,[e("div",ee,[e("div",{class:a(["col-xs-12 col-md-4 flex items-center justify-end",[t.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end"]])},[e("label",{class:a(t.$q.screen.width<1022||"q-pr-md")}," Usuario (API): ",2)],2),e("div",se,[d(b,{modelValue:s(l).user_api,"onUpdate:modelValue":[o[2]||(o[2]=i=>s(l).user_api=i),o[3]||(o[3]=i=>s(r).user_api.isValid=!0)],modelModifiers:{trim:!0},error:!s(r).user_api.isValid,"input-class":"resaltarTextoInput",dense:"",outlined:""},{error:n(()=>[e("label",{class:a(t.$q.dark.isActive?"text-red-4":"text-negative")},c(s(r).user_api.message),3)]),_:1},8,["modelValue","error"])])])]),e("div",oe,[e("div",te,[e("div",{class:a(["col-xs-12 col-md-4 flex items-center justify-end",[t.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end"]])},[e("label",{class:a(t.$q.screen.width<1022||"q-pr-md")}," Tipo Router: ",2)],2),e("div",ie,[d(y,{modelValue:s(l).tipo_router,"onUpdate:modelValue":[o[4]||(o[4]=i=>s(l).tipo_router=i),o[5]||(o[5]=i=>s(r).tipo_router.isValid=!0)],outlined:"",dense:"",error:!s(r).tipo_router.isValid,options:["MikroTik"]},{error:n(()=>[e("label",{class:a(t.$q.dark.isActive?"text-red-4":"text-negative")},c(s(r).tipo_router.message),3)]),_:1},8,["modelValue","error"])])])]),e("div",re,[e("div",ae,[e("div",{class:a(["col-xs-12 col-md-4 flex items-center justify-end",[t.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end"]])},[e("label",{class:a(t.$q.screen.width<1022||"q-pr-md")}," Contrase\xF1a (API): ",2)],2),e("div",le,[d(b,{type:s(q)?"password":"text",outlined:"",dense:"",error:!s(r).password_api.isValid,"onUpdate:modelValue":[o[7]||(o[7]=i=>s(r).password_api.isValid=!0),o[8]||(o[8]=i=>s(l).password_api=i)],modelValue:s(l).password_api,modelModifiers:{trim:!0}},{error:n(()=>[e("label",{class:a(t.$q.dark.isActive?"text-red-4":"text-negative")},c(s(r).password_api.message),3)]),append:n(()=>[d(U,{name:s(q)?"visibility_off":"visibility",color:"blue-grey",class:"cursor-pointer",onClick:o[6]||(o[6]=i=>q.value=!s(q))},null,8,["name"])]),_:1},8,["type","error","modelValue"])])])]),e("div",de,[e("div",ne,[e("div",{class:a(["col-xs-12 col-md-4 flex items-center justify-end",[t.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end"]])},[e("label",{class:a(t.$q.screen.width<1022||"q-pr-md")}," Ubicaci\xF3n: ",2)],2),e("div",ue,[d(b,{modelValue:s(l).ubicacion,"onUpdate:modelValue":o[9]||(o[9]=i=>s(l).ubicacion=i),modelModifiers:{trim:!0},placeholder:"Coordenadas Longitud, Latitud","input-style":"width: 81%",error:!s(r).ubicacion.isValid,dense:"",outlined:""},{error:n(()=>[e("label",{class:a(t.$q.dark.isActive?"text-red-4":"text-negative")},c(s(r).ubicacion.message),3)]),append:n(()=>[d(H,{filled:"",color:"blue-grey-6",onClick:h,style:{height:"100%",width:"19%",position:"absolute",right:"0px","justify-content":"center","font-size":"14px",cursor:"pointer"}},{default:n(()=>[d(U,{name:"fa-solid fa-location-dot",size:"xs"})]),_:1})]),_:1},8,["modelValue","error"])])])]),e("div",ce,[e("div",me,[e("div",{class:a(["col-xs-12 col-md-4 flex items-center justify-end",[t.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end"]])},[e("label",{class:a(t.$q.screen.width<1022||"q-pr-md")}," Puerto API: ",2)],2),e("div",pe,[d(b,{modelValue:s(l).puerto_api,"onUpdate:modelValue":[o[10]||(o[10]=i=>s(l).puerto_api=i),o[11]||(o[11]=i=>(s(r).puerto_api.isValid=!0,s(l).puerto_api=s(l).puerto_api.replace(/\D/g,"")))],modelModifiers:{trim:!0},error:!s(r).puerto_api.isValid,type:t.$q.platform.is.mobile?"number":"text","input-class":"resaltarTextoInput",dense:"",outlined:""},{error:n(()=>[e("label",{class:a(t.$q.dark.isActive?"text-red-4":"text-negative")},c(s(r).puerto_api.message),3)]),_:1},8,["modelValue","error","type"])])])]),e("div",ve,[e("div",fe,[e("div",{class:a(["col-xs-12 col-md-4 flex items-center justify-end",[t.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end"]])},[e("label",{class:a(t.$q.screen.width<1022||"q-pr-md")}," Registro de tr\xE1fico: ",2)],2),e("div",ge,[d(y,{modelValue:s(l).registro_trafico,"onUpdate:modelValue":[o[12]||(o[12]=i=>s(l).registro_trafico=i),o[13]||(o[13]=i=>s(r).registro_trafico.isValid=!0)],outlined:"",dense:"",error:!s(r).registro_trafico.isValid,options:["Accounting (RouterOS V6.x)","Traffic Flow (RouterOS V6x, V7.x)"]},{error:n(()=>[e("label",{class:a(t.$q.dark.isActive?"text-red-4":"text-negative")},c(s(r).registro_trafico.message),3)]),_:1},8,["modelValue","error","options"])])])]),e("div",_e,[e("div",qe,[e("div",{class:a(["col-xs-12 col-md-4 flex items-center justify-end",[t.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end"]])},[e("label",{class:a(t.$q.screen.width<1022||"q-pr-md")}," IP / Host: ",2)],2),e("div",Ve,[d(b,{modelValue:s(l).ip_host,"onUpdate:modelValue":[o[14]||(o[14]=i=>s(l).ip_host=i),o[16]||(o[16]=i=>s(r).ip_host.isValid=!0)],modelModifiers:{trim:!0},onKeyup:o[15]||(o[15]=i=>$(i)),error:!s(r).ip_host.isValid,"input-class":"resaltarTextoInput",dense:"",outlined:""},{error:n(()=>[e("label",{class:a(t.$q.dark.isActive?"text-red-4":"text-negative")},c(s(r).ip_host.message),3)]),_:1},8,["modelValue","error"])])])]),e("div",be,[e("div",ye,[e("div",{class:a(["col-xs-12 col-md-4 flex items-center justify-end",[t.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end"]])},[e("label",{class:a(t.$q.screen.width<1022||"q-pr-md")}," Control Velocidad: ",2)],2),e("div",xe,[d(y,{modelValue:s(l).control_velocidad,"onUpdate:modelValue":[o[17]||(o[17]=i=>s(l).control_velocidad=i),o[18]||(o[18]=i=>s(r).control_velocidad.isValid=!0)],outlined:"",dense:"",error:!s(r).control_velocidad.isValid,options:["Colas Simples (Est\xE1ticas)","PCQ + Addresslist","DHCP Lease (Colas Simples Dinamicas)","Ninguno"]},{error:n(()=>[e("label",{class:a(t.$q.dark.isActive?"text-red-4":"text-negative")},c(s(r).control_velocidad.message),3)]),_:1},8,["modelValue","error","options"])])])]),e("div",we,[e("div",$e,[e("div",{class:a(["col-xs-12 col-md-4 flex items-center justify-end",[t.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end"]])},[e("label",{class:a(t.$q.screen.width<1022||"q-pr-md")}," Seguridad: ",2)],2),e("div",he,[d(y,{modelValue:s(l).seguridad,"onUpdate:modelValue":[o[19]||(o[19]=i=>s(l).seguridad=i),o[20]||(o[20]=i=>s(r).seguridad.isValid=!0)],outlined:"",dense:"",error:!s(r).seguridad.isValid,options:["Ninguno / Accounting API","PPP / Accounting API","Hotspot / Accounting API","PPP / Accounting Radius","Hotspot / Accounting Radius"]},{error:n(()=>[e("label",{class:a(t.$q.dark.isActive?"text-red-4":"text-negative")},c(s(r).seguridad.message),3)]),_:1},8,["modelValue","error"])])])]),e("div",je,[e("div",Ae,[e("div",{class:a(["col-xs-12 col-md-4 flex items-center justify-end",[t.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end"]])},[e("label",{class:a(t.$q.screen.width<1022||"q-pr-md")}," Seguridad alterna: ",2)],2),e("div",Ce,[d(y,{modelValue:s(l).seguridad_alterna,"onUpdate:modelValue":[o[21]||(o[21]=i=>s(l).seguridad_alterna=i),o[22]||(o[22]=i=>s(r).seguridad_alterna.isValid=!0)],outlined:"",dense:"",error:!s(r).seguridad_alterna.isValid,options:["Amarre de IP y MAC","Ninguno"]},{error:n(()=>[e("label",{class:a(t.$q.dark.isActive?"text-red-4":"text-negative")},c(s(r).seguridad_alterna.message),3)]),_:1},8,["modelValue","error"])])])]),s(C).roles[0]=="SUPER-ADMINISTRADOR"&&!t.edit?(k(),S("div",Pe,[e("div",ke,[e("div",{class:a(["col-xs-12 col-md-4 flex items-center justify-end",[t.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end"]])},[e("label",{class:a(t.$q.screen.width<1022||"q-pr-md")}," Empresa: ",2)],2),e("div",Re,[d(y,{modelValue:s(l).company_id,"onUpdate:modelValue":[o[23]||(o[23]=i=>s(l).company_id=i),o[24]||(o[24]=i=>s(r).company_id.isValid=!0)],outlined:"",dense:"",error:!s(r).company_id.isValid,"emit-value":"","map-options":"",options:s(I)},{error:n(()=>[e("label",{class:a(t.$q.dark.isActive?"text-red-4":"text-negative")},c(s(r).company_id.message),3)]),_:1},8,["modelValue","error","options"])])])])):M("",!0),e("div",{class:a(["col-xs-12 col-md-12 flex q-py-lg",[t.$q.screen.width<600?"justify-center q-pt-none q-mb-md q-ml-md":"justify-between"]])},[t.$q.screen.width>600?(k(),B(D,{key:0,icon:"arrow_back",onClick:o[25]||(o[25]=i=>t.$router.push("/router")),outline:"",rounded:"",class:"q-ml-md",color:t.$q.dark.isActive?"blue-grey-2":"blue-grey-10"},{default:n(()=>[N(" \xA0 Regresar ")]),_:1},8,["color"])):M("",!0),d(D,{type:"submit",icon:"save",loading:s(P),outline:"",rounded:"",class:"q-mr-lg",style:{color:"#696cff"}},{default:n(()=>[N(" \xA0 Guardar Cambios ")]),_:1},8,["loading"])],2)],2)]),_:1}),d(T,{modelValue:f.value,"onUpdate:modelValue":o[27]||(o[27]=i=>f.value=i)},{default:n(()=>[d(L,{objMap:w.value,onCoordenadasSelected:V},null,8,["objMap"])]),_:1},8,["modelValue"])],64))}});export{Qe as _,Y as u};
