import{Q as p,a as e}from"./QBreadcrumbs.9cf5b320.js";import{u,_}from"./FormUser.cdafb007.js";import{a as h}from"./axios.260c29fd.js";import{d as f,l as q,B as g,o as w,c as x,e as s,ac as a,f as o,g as v,ah as U}from"./index.56865ea9.js";import"./QItemLabel.11af56b0.js";import"./QSelect.d548565d.js";import"./QChip.e08c3411.js";import"./format.2bc25e5f.js";import"./TouchPan.4e760347.js";import"./touch.3df10340.js";import"./QPopupProxy.bd9342b0.js";import"./date.0242e4cc.js";import"./QSlideTransition.8b383848.js";import"./QForm.68ef74c3.js";import"./ClosePopup.6ede23af.js";import"./useHelpers.16467bd1.js";import"./use-quasar.fe1b283b.js";const b={class:"q-ma-lg q-pt-md"},B={class:"row q-col-gutter-lg"},y=s("label",{class:"text-h6"},"Editar Usuario",-1),E=[y],$={class:"q-px-md"},C={class:"row q-col-gutter-md"},Q={class:"col-xs-12 col-md-12 q-pt-xs"},T=f({__name:"EditUser",setup(j){const{formUser:r,limpiarFormulario:i}=u(),c=q(),m=async()=>{const{data:t}=await h.get("/auth/find/"+c.params.term),{password:l,confirmPassword:k,company:n,...d}=t[0];r.value={...d,company:n.id}};return g(()=>{i(),m()}),(t,l)=>(w(),x(U,null,[s("div",b,[s("div",B,[s("div",{class:a(["col-xs-12 col-md-6",[t.$q.screen.width<1022?"q-pt-sm":""]])},[o(p,{class:a(["row q-mr-xs",[t.$q.screen.width<1022?"justify-center q-pt-sm":"justify-start "]])},{default:v(()=>[o(e,{label:"Inicio",icon:"home",to:"/"}),o(e,{label:"Usuarios",icon:"group",to:"/usuarios"}),o(e,{label:"Usuario",icon:"edit"})]),_:1},8,["class"])],2),s("div",{class:a(["col-xs-12 col-md-6",[t.$q.screen.width<1022?"text-center q-pt-sm":"text-right"]])},E,2)])]),s("div",$,[s("div",C,[s("div",Q,[o(_,{edit:!0})])])])],64))}});export{T as default};
