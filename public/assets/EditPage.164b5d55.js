import{Q as d,a as e}from"./QBreadcrumbs.9cf5b320.js";import{d as m,o as p,c as u,e as s,ac as o,f as a,g as r,aP as _,ah as f}from"./index.56865ea9.js";import{u as h}from"./useNap.ac3f6de4.js";import{_ as q}from"./FormNap.3f659d1b.js";import"./axios.260c29fd.js";import"./useHelpers.16467bd1.js";import"./use-quasar.fe1b283b.js";import"./QSelect.d548565d.js";import"./QChip.e08c3411.js";import"./QItemLabel.11af56b0.js";import"./format.2bc25e5f.js";import"./QForm.68ef74c3.js";const g={class:"q-ma-lg q-pt-md"},x={class:"row q-col-gutter-md",style:{"justify-content":"center"}},j=s("label",{class:"text-h6 text-center",style:{position:"relative",top:"-8px",left:"17px"}}," Editar Caja NAP ",-1),w=[j],v={class:"row q-col-gutter-md",style:{"justify-content":"center"}},y={class:"col-xs-11 col-md-11 q-pt-xs"},G=m({__name:"EditPage",setup(C){const{api:c,quitarErrores:i,formNap:l,route:n}=h();return(async()=>{const{data:t}=await c.get("/caja-nap/"+n.params.id);l.value={...t,puertos:t.puertos.length,router_id:t.router_id.id}})(),i(),(t,b)=>(p(),u(f,null,[s("div",g,[s("div",x,[s("div",{class:o(["col-xs-12 q-pl-none",[t.$q.screen.width<1022?"q-pt-sm col-md-6":"col-md-6"]])},[a(d,{class:o(["row q-mr-xs",[t.$q.screen.width<1022?"justify-center q-pt-sm":"justify-start "]])},{default:r(()=>[a(e,{label:"Inicio",icon:"home",to:"/"}),a(e,{label:"Cajas Nap",icon:"fa-solid fa-list",to:"/cajas-nap"}),a(e,{label:"Editar",icon:"add_circle"})]),_:1},8,["class"])],2),s("div",{class:o(["col-xs-12",[t.$q.screen.width<1022?"text-center q-pt-sm col-md-6 q-pl-none":"text-right col-md-5"]])},w,2)])]),s("div",v,[s("div",y,[a(_,{flat:"",class:"shadow_custom"},{default:r(()=>[a(q,{edit:!0})]),_:1})])])],64))}});export{G as default};