import{Q as d,a as o}from"./QBreadcrumbs.9cf5b320.js";import{d as m,o as p,c as _,e as t,ac as r,f as s,g as a,aP as u,ah as f}from"./index.56865ea9.js";import{u as h}from"./useInternet.825d2cdc.js";import{_ as q}from"./FormInternet.d5a116d4.js";import"./axios.260c29fd.js";import"./useHelpers.16467bd1.js";import"./use-quasar.fe1b283b.js";import"./QBadge.2548bc93.js";import"./QSelect.d548565d.js";import"./QChip.e08c3411.js";import"./QItemLabel.11af56b0.js";import"./format.2bc25e5f.js";import"./QForm.68ef74c3.js";const g={class:"q-ma-lg q-pt-md"},x={class:"row q-col-gutter-md",style:{"justify-content":"center"}},v=t("label",{class:"text-h6 text-center",style:{position:"relative",top:"-8px",left:"17px"}}," Editar Perfil ",-1),w=[v],y={class:"row q-col-gutter-md",style:{"justify-content":"center"}},b={class:"col-xs-11 col-md-11 q-pt-xs"},H=m({__name:"EditPage",setup(I){const{api:i,quitarErrores:c,formInternet:n,route:l}=h();return(async()=>{const{data:e}=await i.get("/internet/find/"+l.params.id);n.value={...e,router_id:e.router_id.id}})(),c(),(e,E)=>(p(),_(f,null,[t("div",g,[t("div",x,[t("div",{class:r(["col-xs-12 q-pl-none",[e.$q.screen.width<1022?"q-pt-sm col-md-6":"col-md-6"]])},[s(d,{class:r(["row q-mr-xs",[e.$q.screen.width<1022?"justify-center q-pt-sm":"justify-start "]])},{default:a(()=>[s(o,{label:"Inicio",icon:"home",to:"/"}),s(o,{label:"Internet",icon:"fa-solid fa-list",to:"/servicios/internet"}),s(o,{label:"Agregar",icon:"add_circle"})]),_:1},8,["class"])],2),t("div",{class:r(["col-xs-12",[e.$q.screen.width<1022?"text-center q-pt-sm col-md-6 q-pl-none":"text-right col-md-5"]])},w,2)])]),t("div",y,[t("div",b,[s(u,{flat:"",class:"shadow_custom"},{default:a(()=>[s(q,{edit:!0})]),_:1})])])],64))}});export{H as default};