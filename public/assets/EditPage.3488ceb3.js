import{Q as d,a as o}from"./QBreadcrumbs.140e708b.js";import{d as m,o as p,c as _,e as t,ac as r,f as s,g as a,aP as u,ah as f}from"./index.eef75245.js";import{u as h}from"./useInternet.c428ba2f.js";import{_ as q}from"./FormInternet.d0e28194.js";import"./axios.2f3e7d32.js";import"./useHelpers.582824f5.js";import"./use-quasar.651ee3ac.js";import"./QBadge.9fdb6a21.js";import"./QSelect.2afc433b.js";import"./QChip.78519a04.js";import"./QItemLabel.8d9dffff.js";import"./format.2bc25e5f.js";import"./QForm.228ccbdd.js";const g={class:"q-ma-lg q-pt-md"},x={class:"row q-col-gutter-md",style:{"justify-content":"center"}},v=t("label",{class:"text-h6 text-center",style:{position:"relative",top:"-8px",left:"17px"}}," Editar Perfil ",-1),w=[v],y={class:"row q-col-gutter-md",style:{"justify-content":"center"}},b={class:"col-xs-11 col-md-11 q-pt-xs"},H=m({__name:"EditPage",setup(I){const{api:i,quitarErrores:c,formInternet:n,route:l}=h();return(async()=>{const{data:e}=await i.get("/internet/find/"+l.params.id);n.value={...e,router_id:e.router_id.id}})(),c(),(e,E)=>(p(),_(f,null,[t("div",g,[t("div",x,[t("div",{class:r(["col-xs-12 q-pl-none",[e.$q.screen.width<1022?"q-pt-sm col-md-6":"col-md-6"]])},[s(d,{class:r(["row q-mr-xs",[e.$q.screen.width<1022?"justify-center q-pt-sm":"justify-start "]])},{default:a(()=>[s(o,{label:"Inicio",icon:"home",to:"/"}),s(o,{label:"Internet",icon:"fa-solid fa-list",to:"/servicios/internet"}),s(o,{label:"Agregar",icon:"add_circle"})]),_:1},8,["class"])],2),t("div",{class:r(["col-xs-12",[e.$q.screen.width<1022?"text-center q-pt-sm col-md-6 q-pl-none":"text-right col-md-5"]])},w,2)])]),t("div",y,[t("div",b,[s(u,{flat:"",class:"shadow_custom"},{default:a(()=>[s(q,{edit:!0})]),_:1})])])],64))}});export{H as default};