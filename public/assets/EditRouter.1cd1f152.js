import{Q as d,a as s}from"./QBreadcrumbs.0184d9c7.js";import{d as m,o as p,c as u,e as t,ae as r,f as o,g as a,aR as _,aj as f}from"./index.9a174042.js";import{u as h,_ as q}from"./FormRouter.baa0af85.js";import"./QSelect.4c17bc3b.js";import"./QChip.27896cb8.js";import"./QItemLabel.d54ced73.js";import"./format.cbf00d5d.js";import"./QBadge.caa0115f.js";import"./QForm.05cb29a7.js";import"./axios.ba8f4325.js";import"./useHelpers.ae76dc84.js";import"./use-quasar.a805da59.js";import"./ModalMapBox.bceb52d9.js";import"./QBtnGroup.c342e7f3.js";import"./ClosePopup.ebdea06f.js";const x={class:"q-ma-lg q-pt-md"},y={class:"row q-col-gutter-md",style:{"justify-content":"center"}},g=t("label",{class:"text-h6 text-center",style:{position:"relative",top:"-8px",left:"17px"}}," Editar Router ",-1),w=[g],v={class:"row q-col-gutter-md",style:{"justify-content":"center"}},R={class:"col-xs-11 col-md-11 q-pt-xs"},K=m({__name:"EditRouter",setup(b){const{api:i,quitarErrores:c,formRouter:l,route:n}=h();return(async()=>{const{data:e}=await i.get("/router/find/"+n.params.router_id);l.value={...e[0],company_id:e[0].company_id.id}})(),c(),(e,j)=>(p(),u(f,null,[t("div",x,[t("div",y,[t("div",{class:r(["col-xs-12 q-pl-none",[e.$q.screen.width<1022?"q-pt-sm col-md-6":"col-md-6"]])},[o(d,{class:r(["row q-mr-xs",[e.$q.screen.width<1022?"justify-center q-pt-sm":"justify-start "]])},{default:a(()=>[o(s,{label:"Inicio",icon:"home",to:"/"}),o(s,{label:"Routers",icon:"fa-solid fa-list",to:"/router"}),o(s,{label:"Editar",icon:"add_circle"})]),_:1},8,["class"])],2),t("div",{class:r(["col-xs-12",[e.$q.screen.width<1022?"text-center q-pt-sm col-md-6 q-pl-none":"text-right col-md-5"]])},w,2)])]),t("div",v,[t("div",R,[o(_,{flat:"",class:"shadow_custom"},{default:a(()=>[o(q,{edit:!0})]),_:1})])])],64))}});export{K as default};