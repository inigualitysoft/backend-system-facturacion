import{Q as _,a as e}from"./QBreadcrumbs.b57c14d5.js";import{u as f,_ as h}from"./FormUser.97f27217.js";import{d as q,o as g,c as w,e as s,ae as r,f as o,g as x,aj as v}from"./index.f32ba181.js";import"./format.590990f1.js";import"./QSelect.cb1a9ee3.js";import"./QFile.8336ec95.js";import"./TouchPan.05b1918c.js";import"./touch.3df10340.js";import"./QPopupProxy.942c6601.js";import"./date.1f1cb421.js";import"./QTree.07a6ca53.js";import"./QSlideTransition.9a765c99.js";import"./QForm.04de2b3d.js";import"./ClosePopup.a7672475.js";import"./useHelpers.2ac66ca7.js";import"./use-quasar.f54a93b3.js";import"./axios.b2069d9f.js";const U={class:"q-ma-lg q-pt-md"},b={class:"row q-col-gutter-lg"},y=s("label",{class:"text-h6"},"Editar Usuario",-1),B=[y],E={class:"q-px-md"},$={class:"row q-col-gutter-md"},j={class:"col-xs-12 col-md-12 q-pt-xs"},S=q({__name:"EditUser",setup(C){const{api:i,formUser:c,limpiarFormulario:m,route:l}=f(),n=async()=>{const{data:t}=await i.get("/auth/find/"+l.params.term),{password:d,confirmPassword:Q,company:p,foto:a,...u}=t[0];c.value={...u,company:p.id,foto:null,foto_old:a==null?null:a}};return m(),n(),(t,d)=>(g(),w(v,null,[s("div",U,[s("div",b,[s("div",{class:r(["col-xs-12 col-md-6",[t.$q.screen.width<1022?"q-pt-sm":""]])},[o(_,{class:r(["row q-mr-xs",[t.$q.screen.width<1022?"justify-center q-pt-sm":"justify-start "]])},{default:x(()=>[o(e,{label:"Inicio",icon:"home",to:"/"}),o(e,{label:"Usuarios",icon:"group",to:"/usuarios"}),o(e,{label:"Usuario",icon:"edit"})]),_:1},8,["class"])],2),s("div",{class:r(["col-xs-12 col-md-6",[t.$q.screen.width<1022?"text-center q-pt-sm":"text-right"]])},B,2)])]),s("div",E,[s("div",$,[s("div",j,[o(h,{edit:!0})])])])],64))}});export{S as default};
