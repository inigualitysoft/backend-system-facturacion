import{Q as d,a as o}from"./QBreadcrumbs.45ba2979.js";import{d as m,o as p,c as _,e as t,ac as r,f as s,g as a,aP as u,ah as f}from"./index.34de80b5.js";import{u as h}from"./useInternet.92542fee.js";import{_ as q}from"./FormInternet.dee1ed22.js";import"./axios.aaa8af3b.js";import"./useHelpers.aa70fe88.js";import"./use-quasar.11100f5b.js";import"./QBadge.b4ba67fc.js";import"./QSelect.d6ab8ec0.js";import"./QChip.f5fd7e9d.js";import"./QItemLabel.0f909c06.js";import"./format.2bc25e5f.js";import"./QForm.f1686d74.js";const g={class:"q-ma-lg q-pt-md"},x={class:"row q-col-gutter-md",style:{"justify-content":"center"}},v=t("label",{class:"text-h6 text-center",style:{position:"relative",top:"-8px",left:"17px"}}," Editar Perfil ",-1),w=[v],y={class:"row q-col-gutter-md",style:{"justify-content":"center"}},b={class:"col-xs-11 col-md-11 q-pt-xs"},H=m({__name:"EditPage",setup(I){const{api:i,quitarErrores:c,formInternet:n,route:l}=h();return(async()=>{const{data:e}=await i.get("/internet/find/"+l.params.id);n.value={...e,router_id:e.router_id.id}})(),c(),(e,E)=>(p(),_(f,null,[t("div",g,[t("div",x,[t("div",{class:r(["col-xs-12 q-pl-none",[e.$q.screen.width<1022?"q-pt-sm col-md-6":"col-md-6"]])},[s(d,{class:r(["row q-mr-xs",[e.$q.screen.width<1022?"justify-center q-pt-sm":"justify-start "]])},{default:a(()=>[s(o,{label:"Inicio",icon:"home",to:"/"}),s(o,{label:"Internet",icon:"fa-solid fa-list",to:"/servicios/internet"}),s(o,{label:"Agregar",icon:"add_circle"})]),_:1},8,["class"])],2),t("div",{class:r(["col-xs-12",[e.$q.screen.width<1022?"text-center q-pt-sm col-md-6 q-pl-none":"text-right col-md-5"]])},w,2)])]),t("div",y,[t("div",b,[s(u,{flat:"",class:"shadow_custom"},{default:a(()=>[s(q,{edit:!0})]),_:1})])])],64))}});export{H as default};