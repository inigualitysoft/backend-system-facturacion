import{Q as n,a}from"./QBreadcrumbs.626c170d.js";import{_ as p}from"./FormEmpresa.15e20a4b.js";import{u as _}from"./useEmpresa.85a51e48.js";import{d as f,l as u,v as h,o as i,c as r,e,aj as q,ai as o,f as t,g as v,am as g}from"./index.d41bbc77.js";import{api as E}from"./axios.285a4291.js";import"./QChip.3f015bda.js";import"./format.2bc25e5f.js";import"./QForm.430f58c0.js";import"./useHelpers.26f595d3.js";import"./use-quasar.312cdeb8.js";const w={class:"q-ma-lg q-pt-md"},x={class:"row q-col-gutter-md"},b={key:0,class:"offset-1"},$=e("label",{class:"text-h6 text-center",style:{position:"relative",top:"-8px",left:"-10px"}}," Editar Empresa ",-1),y=[$],B={class:"q-px-md"},C={class:"row q-col-gutter-md"},G=f({__name:"EditEmpresa",setup(V){const c=u(),{isValid:l,formEmpresa:d}=_(),m=async()=>{const{data:s}=await E.get("/companies/find/"+c.params.empresa_id);d.value={...s[0],logo:null,logo_old:s[0].logo==null?null:s[0].logo,archivo_certificado:null,archivo_certificado_old:s[0].archivo_certificado}};return l.value=!1,h(()=>{m()}),(s,j)=>(i(),r(g,null,[e("div",w,[e("div",x,[s.$q.screen.width>1022?(i(),r("div",b)):q("",!0),e("div",{class:o(["col-xs-12 q-pl-none",[s.$q.screen.width<1022?"q-pt-sm col-md-6":"col-md-5"]])},[t(n,{class:o(["row q-mr-xs",[s.$q.screen.width<1022?"justify-center q-pt-sm":"justify-start "]])},{default:v(()=>[t(a,{label:"Inicio",icon:"home",to:"/"}),t(a,{label:"Empresas",icon:"fa-solid fa-list",to:"/empresas"}),t(a,{label:"Editar",icon:"add_circle"})]),_:1},8,["class"])],2),e("div",{class:o(["col-xs-12",[s.$q.screen.width<1022?"text-center q-pt-sm col-md-6":"text-right col-md-5"]])},y,2)])]),e("div",B,[e("div",C,[e("div",{class:o(["col-xs-12 col-md-10 q-pt-xs",s.$q.screen.width<1022?"":"offset-1"])},[t(p,{edit:!0})],2)])])],64))}});export{G as default};
