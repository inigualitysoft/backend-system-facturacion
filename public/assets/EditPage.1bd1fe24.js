import{Q as n,a as o}from"./QBreadcrumbs.df454313.js";import{o as p,c as _,e as t,ae as a,f as s,g as r,aU as u,aj as f}from"./index.1eb79b9c.js";import{u as h}from"./useRedIpv4.dc9d5d0a.js";import{_ as q}from"./FormRedIpv4.6679feaf.js";import"./axios.a2ad1f31.js";import"./useHelpers.33b51013.js";import"./use-quasar.36cfd852.js";import"./QSelect.1ef953d4.js";import"./format.694d017e.js";import"./QBadge.a5f7ee3f.js";import"./QExpansionItem.2e97b1b4.js";import"./QSlideTransition.1c3ed3c0.js";import"./QForm.3bf39009.js";import"./ClosePopup.dfa4db61.js";const v={class:"q-ma-lg q-pt-md"},x={class:"row q-col-gutter-md",style:{"justify-content":"center"}},g=t("label",{class:"text-h6 text-center",style:{position:"relative",top:"-8px",left:"17px"}}," Editar Red IPv4 ",-1),w=[g],y={class:"row q-col-gutter-md",style:{"justify-content":"center"}},b={class:"col-xs-11 col-md-11 q-pt-xs"},D={__name:"EditPage",setup(E){const{api:i,quitarErrores:c,formRed:d,route:l}=h(),m=async()=>{const{data:e}=await i.get("/red-ipv4/find/"+l.params.id);d.value={...e,router_id:e.router_id.id}};return c(),m(),(e,j)=>(p(),_(f,null,[t("div",v,[t("div",x,[t("div",{class:a(["col-xs-12 q-pl-none",[e.$q.screen.width<1022?"q-pt-sm col-md-6":"col-md-6"]])},[s(n,{class:a(["row q-mr-xs",[e.$q.screen.width<1022?"justify-center q-pt-sm":"justify-start "]])},{default:r(()=>[s(o,{label:"Inicio",icon:"home",to:"/"}),s(o,{label:"Redes",icon:"fa-solid fa-list",to:"/redes-ipv4"}),s(o,{label:"Editar",icon:"add_circle"})]),_:1},8,["class"])],2),t("div",{class:a(["col-xs-12",[e.$q.screen.width<1022?"text-center q-pt-sm col-md-6 q-pl-none":"text-right col-md-5"]])},w,2)])]),t("div",y,[t("div",b,[s(u,{flat:"",class:"shadow_custom"},{default:r(()=>[s(q,{edit:!0})]),_:1})])])],64))}};export{D as default};
