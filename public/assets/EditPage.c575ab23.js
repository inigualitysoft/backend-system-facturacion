import{Q as n,a as o}from"./QBreadcrumbs.b31a76e8.js";import{o as p,c as _,e as t,ae as a,f as s,g as r,aU as u,aj as f}from"./index.56b4024e.js";import{u as h}from"./useRedIpv4.fa198046.js";import{_ as q}from"./FormRedIpv4.8def5440.js";import"./axios.070f9dba.js";import"./useHelpers.7f3330bb.js";import"./use-quasar.37480dad.js";import"./QSelect.232f159e.js";import"./format.12fa23cd.js";import"./QBadge.52262dfe.js";import"./QExpansionItem.e33bb0c1.js";import"./QSlideTransition.d6c888a9.js";import"./QForm.445d47b3.js";import"./ClosePopup.5f0aea51.js";const v={class:"q-ma-lg q-pt-md"},x={class:"row q-col-gutter-md",style:{"justify-content":"center"}},g=t("label",{class:"text-h6 text-center",style:{position:"relative",top:"-8px",left:"17px"}}," Editar Red IPv4 ",-1),w=[g],y={class:"row q-col-gutter-md",style:{"justify-content":"center"}},b={class:"col-xs-11 col-md-11 q-pt-xs"},D={__name:"EditPage",setup(E){const{api:i,quitarErrores:c,formRed:d,route:l}=h(),m=async()=>{const{data:e}=await i.get("/red-ipv4/find/"+l.params.id);d.value={...e,router_id:e.router_id.id}};return c(),m(),(e,j)=>(p(),_(f,null,[t("div",v,[t("div",x,[t("div",{class:a(["col-xs-12 q-pl-none",[e.$q.screen.width<1022?"q-pt-sm col-md-6":"col-md-6"]])},[s(n,{class:a(["row q-mr-xs",[e.$q.screen.width<1022?"justify-center q-pt-sm":"justify-start "]])},{default:r(()=>[s(o,{label:"Inicio",icon:"home",to:"/"}),s(o,{label:"Redes",icon:"fa-solid fa-list",to:"/redes-ipv4"}),s(o,{label:"Editar",icon:"add_circle"})]),_:1},8,["class"])],2),t("div",{class:a(["col-xs-12",[e.$q.screen.width<1022?"text-center q-pt-sm col-md-6 q-pl-none":"text-right col-md-5"]])},w,2)])]),t("div",y,[t("div",b,[s(u,{flat:"",class:"shadow_custom"},{default:r(()=>[s(q,{edit:!0})]),_:1})])])],64))}};export{D as default};