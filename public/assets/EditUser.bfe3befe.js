import{Q as u,a as e}from"./QBreadcrumbs.2aac7c42.js";import{d as _,bv as f,t as h,o as w,c as q,e as s,f as o,g as r,aN as v,ag as a}from"./index.9a69bdf9.js";import{u as g,_ as b}from"./FormUser.5765e896.js";import{api as x}from"./axios.1a9376d4.js";import"./QItemLabel.a344fdf0.js";import"./QSelect.d1e92d92.js";import"./QChip.cdeb0aad.js";import"./format.2bc25e5f.js";import"./TouchPan.f3153855.js";import"./QPopupProxy.093ca537.js";import"./date.b2c910a6.js";import"./QForm.951ed4e0.js";import"./ClosePopup.d29d88a9.js";import"./AddEmpresa.7b91b1f7.js";import"./useHelpers.110a86a1.js";import"./use-quasar.882813a0.js";import"./QFile.ea296c12.js";const y={class:"q-ma-lg q-pt-md"},U={class:"row q-col-gutter-lg"},B={class:"col-12"},E=s("label",{class:"text-h6"},"Editar Usuario",-1),j=[E],C={class:"col-xs-12 col-sm-12 col-md-6"},Q={class:"q-px-md"},$={class:"row q-col-gutter-md"},N={class:"col-xs-12 col-md-12"},X=_({__name:"EditUser",setup(k){const{formUser:i,limpiarFormulario:c}=g(),m=f(),d=async()=>{const{data:t}=await x.get("/auth/find/"+m.params.term),{password:l,confirmPassword:V,company:n,...p}=t[0];i.value={...p,company:n.id}};return h(()=>{c(),d()}),(t,l)=>(w(),q("div",y,[s("div",U,[s("div",B,[o(v,{flat:"",class:"shadow_custom"},{default:r(()=>[s("div",{class:a(["row q-py-md q-pl-md",t.$q.screen.xs?"justify-center":"justify-between"])},[s("div",{class:a(["col-xs-12 col-sm-12 col-md-6",[t.$q.screen.width<1022?"text-center":"text-left"]])},j,2),s("div",C,[o(u,{class:a(["row q-mr-lg",[t.$q.screen.width<1022?"justify-center":"justify-end"]])},{default:r(()=>[o(e,{label:"Inicio",icon:"home",to:"/"}),o(e,{label:"Usuarios",icon:"group",to:"/usuarios"}),o(e,{label:"Editar Usuario",icon:"person"})]),_:1},8,["class"])])],2),s("div",Q,[s("div",$,[s("div",N,[o(b,{edit:!0})])])])]),_:1})])])]))}});export{X as default};