import{a as n}from"./axios.9fd1c94c.js";import{u as V}from"./useHelpers.602f9f43.js";import{r as o}from"./index.77dc7136.js";const d=o(!1),_=o(""),t=o([]),e=o({id:"",nombre_plan:"",descripcion:"",precio_plan:0,impuesto:0,descarga_Mbps:0,subida_Mbps:0,limit_at:0,burst_limit:0,prioridad:"",address_list:"",router_id:""}),p=o({nombre_plan:{message:"",isValid:!0},descripcion:{message:"",isValid:!0},precio_plan:{message:"",isValid:!0},impuesto:{message:"",isValid:!0},descarga_Mbps:{message:"",isValid:!0},subida_Mbps:{message:"",isValid:!0},limit_at:{message:"",isValid:!0},burst_limit:{message:"",isValid:!0},prioridad:{message:"",isValid:!0},address_list:{message:"",isValid:!0},router_id:{message:"",isValid:!0}}),h=i=>{let r=0;r=e.value[i];const l=/^\d{0,9}(\.\d{1,2})?$/;setTimeout(function(){let u=0;if(u=e.value[i],!l.test(u.toString())){const c=parseFloat(r.toString().substring(0,r.toString().length-1));e.value[i]=c}},0)},E=i=>{const{mostrarNotify:r,claim:l,router:u,route:c}=V(),m=["nombre_plan","precio_plan","descarga_Mbps","subida_Mbps","prioridad"],g=async()=>{t.value=[];const{data:s}=await n.get(`/router/find/${l.company.id}`);s.forEach(a=>{t.value.push({label:a.nombre,value:a.id})}),t.value.length>0&&(i||(e.value.router_id=t.value[0].value),_.value=t.value[0].value)},v=()=>{e.value={id:"",nombre_plan:"",descripcion:"",precio_plan:0,impuesto:0,descarga_Mbps:0,subida_Mbps:0,limit_at:0,burst_limit:0,prioridad:"",address_list:"",router_id:""}},b=()=>{m.push("router_id"),m.forEach(s=>{p.value[s].isValid=!0})},f=()=>{let s=!1;return m.forEach(a=>{(e.value[a].length==0||e.value[a]==0)&&(p.value[a].message="Debes completar este campo",p.value[a].isValid=!1,s=!0)}),s};return{api:n,claim:l,formInternet:e,loading:d,limpiarFormulario:v,listRouters:t,validaciones:p,cargarRouters:g,quitarErrores:b,route:c,selectedRouter:_,validDecimal:h,onSubmit:async s=>{if(!f())try{d.value=!0;let a={headers:{router_id:e.value.router_id,NotSetHeaderCompany:l.roles[0]=="SUPER-ADMINISTRADOR"}};s?await n.patch(`/internet/${e.value.id}`,e.value):await n.post("/internet",e.value,a),r("positive",`Router ${s?"editado":"agregado"} exitosamente`),d.value=!1,u.push({name:"internet.index"})}catch(a){d.value=!1,r("warning",a.response.data.message)}}}};export{E as u};
