import{Q as p,a}from"./QBreadcrumbs.95328560.js";import{_}from"./FormEmpresa.8d77623e.js";import{u as f}from"./useEmpresa.4b7e1f5a.js";import{d as u,C as h,o as i,c as r,e,af as q,ae as o,f as t,g as v,aj as g}from"./index.474519f9.js";import"./QBadge.a56e828a.js";import"./QFile.b0f984cf.js";import"./QSelect.9befbebb.js";import"./format.60b19ab8.js";import"./QForm.fec3fa64.js";import"./ClosePopup.0951b21e.js";import"./index.2065a85c.js";import"./useHelpers.a0dac464.js";import"./use-quasar.7f1204f4.js";import"./axios.15fd7c93.js";const E={class:"q-ma-lg q-pt-md"},w={class:"row q-col-gutter-md"},x={key:0,class:"offset-1"},b=e("label",{class:"text-h6 text-center",style:{position:"relative",top:"-8px",left:"-10px"}}," Editar Empresa ",-1),$=[b],y={class:"q-px-md"},B={class:"row q-col-gutter-md"},L=u({__name:"EditEmpresa",setup(C){const{api:c,isValid:l,formEmpresa:d,route:m}=f(),n=async()=>{const{data:s}=await c.get("/companies/find/"+m.params.empresa_id);d.value={...s[0],logo:null,logo_old:s[0].logo==null?null:s[0].logo,archivo_certificado:null,archivo_certificado_old:s[0].archivo_certificado}};return l.value=!1,h(()=>{n()}),(s,V)=>(i(),r(g,null,[e("div",E,[e("div",w,[s.$q.screen.width>1022?(i(),r("div",x)):q("",!0),e("div",{class:o(["col-xs-12 q-pl-none",[s.$q.screen.width<1022?"q-pt-sm col-md-6":"col-md-5"]])},[t(p,{class:o(["row q-mr-xs",[s.$q.screen.width<1022?"justify-center q-pt-sm":"justify-start "]])},{default:v(()=>[t(a,{label:"Inicio",icon:"home",to:"/"}),t(a,{label:"Empresas",icon:"fa-solid fa-list",to:"/empresas"}),t(a,{label:"Editar",icon:"add_circle"})]),_:1},8,["class"])],2),e("div",{class:o(["col-xs-12",[s.$q.screen.width<1022?"text-center q-pt-sm col-md-6":"text-right col-md-5"]])},$,2)])]),e("div",y,[e("div",B,[e("div",{class:o(["col-xs-12 col-md-10 q-pt-xs",s.$q.screen.width<1022?"":"offset-1"])},[t(_,{edit:!0})],2)])])],64))}});export{L as default};
