import{api as n}from"./axios.c95232b4.js";import{u as V}from"./useHelpers.40c7f7f5.js";import{r as o}from"./index.0d55ca8e.js";const d=o(!1),_=o(""),t=o([]),e=o({id:"",nombre_plan:"",descripcion:"",precio_plan:0,impuesto:0,descarga_Mbps:0,subida_Mbps:0,limit_at:0,burst_limit:0,prioridad:"",address_list:"",router_id:""}),p=o({nombre_plan:{message:"",isValid:!0},descripcion:{message:"",isValid:!0},precio_plan:{message:"",isValid:!0},impuesto:{message:"",isValid:!0},descarga_Mbps:{message:"",isValid:!0},subida_Mbps:{message:"",isValid:!0},limit_at:{message:"",isValid:!0},burst_limit:{message:"",isValid:!0},prioridad:{message:"",isValid:!0},address_list:{message:"",isValid:!0},router_id:{message:"",isValid:!0}}),h=i=>{let r=0;r=e.value[i];const l=/^\d{0,9}(\.\d{1,2})?$/;setTimeout(function(){let u=0;if(u=e.value[i],!l.test(u.toString())){const m=parseFloat(r.toString().substring(0,r.toString().length-1));e.value[i]=m}},0)},x=i=>{const{mostrarNotify:r,claim:l,router:u,route:m}=V(),c=["nombre_plan","precio_plan","descarga_Mbps","subida_Mbps","prioridad"],g=async()=>{t.value=[];const{data:s}=await n.get(`/router/find/${l.company.id}`);s.forEach(a=>{t.value.push({label:a.nombre,value:a.id})}),t.value.length>0&&(i||(e.value.router_id=t.value[0].value),_.value=t.value[0].value)},v=()=>{e.value={id:"",nombre_plan:"",descripcion:"",precio_plan:0,impuesto:0,descarga_Mbps:0,subida_Mbps:0,limit_at:0,burst_limit:0,prioridad:"",address_list:"",router_id:""}},b=()=>{c.push("router_id"),c.forEach(s=>{p.value[s].isValid=!0})},f=()=>{let s=!1;return c.forEach(a=>{(e.value[a].length==0||e.value[a]==0)&&(p.value[a].message="Debes completar este campo",p.value[a].isValid=!1,s=!0)}),s};return{api:n,claim:l,formInternet:e,loading:d,limpiarFormulario:v,listRouters:t,validaciones:p,cargarRouters:g,quitarErrores:b,route:m,selectedRouter:_,validDecimal:h,onSubmit:async s=>{if(!f())try{d.value=!0;let a={headers:{router_id:e.value.router_id,NotSetHeaderCompany:l.roles[0]=="Super-Administrador"}};s?await n.patch(`/internet/${e.value.id}`,e.value):await n.post("/internet",e.value,a),r("positive",`Router ${s?"editado":"agregado"} exitosamente`),d.value=!1,u.push({name:"internet.index"})}catch(a){d.value=!1,r("warning",a.response.data.message)}}}};export{x as u};
