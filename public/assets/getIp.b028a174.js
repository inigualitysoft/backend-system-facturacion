import{d as r,r as m,o as u,c as p,e,f as t,g as d,aU as _,aV as n,ae as f,Q as i,h as v,aa as g}from"./index.ff6c63a6.js";import{Q as q}from"./QForm.274c2a2a.js";import{a as h}from"./axios.74fd605e.js";const y={class:"q-ma-lg q-pt-md"},x={class:"row q-col-gutter-lg"},V=e("div",{class:"col-md-2"},null,-1),b={class:"col-xs-12 col-md-8"},w=e("div",{class:"text-h6 text-center"},"Obtener IP",-1),k={class:"row q-pt-md"},Q=e("div",{class:"col-12 flex justify-center items-center q-mb-lg"},[e("img",{src:"https://dev.socialidnow.com/images/9/94/Mikrotik-logo.png",style:{width:"30%"}})],-1),C=e("div",{class:"col-4 flex justify-end items-center"},[e("label",null,"Ip a Conectarse:")],-1),j={class:"col-6 q-ml-md"},M=e("div",{class:"col-4 flex justify-end items-center q-py-md"},[e("label",{for:""},"Login:")],-1),B={class:"col-6 q-ml-md q-py-md"},I=e("div",{class:"col-4 flex justify-end items-center"},[e("label",null,"Password:")],-1),U={class:"col-6 q-ml-md"},E={class:"col-12 q-ml-md q-mt-lg text-center"},z=r({__name:"getIp",setup(N){const o=m({ip:"192.168.6.130",login:"admin",password:""}),c=async()=>{try{const{data:l}=await h.post("/mikrotik",o.value);l.forEach(s=>{console.table(s)})}catch(l){console.log(l)}};return(l,s)=>(u(),p("div",y,[e("div",x,[V,e("div",b,[t(_,{class:"my-card"},{default:d(()=>[t(n,{class:f(["text-white q-py-sm",[l.$q.dark.isActive?"":"bg-blue-grey-10"]])},{default:d(()=>[w]),_:1},8,["class"]),t(n,{class:"q-pt-none",style:{"padding-bottom":"21px"}},{default:d(()=>[t(q,{onSubmit:c},{default:d(()=>[e("div",k,[Q,C,e("div",j,[t(i,{modelValue:o.value.ip,"onUpdate:modelValue":s[0]||(s[0]=a=>o.value.ip=a),modelModifiers:{trim:!0},dense:"",outlined:"",required:""},null,8,["modelValue"])]),M,e("div",B,[t(i,{modelValue:o.value.login,"onUpdate:modelValue":s[1]||(s[1]=a=>o.value.login=a),modelModifiers:{trim:!0},dense:"",outlined:"",required:""},null,8,["modelValue"])]),I,e("div",U,[t(i,{modelValue:o.value.password,"onUpdate:modelValue":s[2]||(s[2]=a=>o.value.password=a),modelModifiers:{trim:!0},dense:"",outlined:""},null,8,["modelValue"])]),e("div",E,[t(v,{type:"submit",icon:"save",outline:"",rounded:"",class:"q-ml-lg",color:"primary"},{default:d(()=>[g(" \xA0 Ejecutar ")]),_:1})])])]),_:1})]),_:1})]),_:1})])])]))}});export{z as default};
