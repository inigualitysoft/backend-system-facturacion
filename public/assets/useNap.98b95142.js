import{a as t}from"./axios.f0c5ece9.js";import{u as V}from"./useHelpers.ba7357b2.js";import{r as o}from"./index.e3eab811.js";const i=o(!1),c=o(""),s=o([]),r=o({id:"",nombre:"",coordenadas:"",ubicacion:"",puertos:"",detalles:"",router_id:""}),u=o({nombre:{message:"",isValid:!0},coordenadas:{message:"",isValid:!0},ubicacion:{message:"",isValid:!0},puertos:{message:"",isValid:!0},detalles:{message:"",isValid:!0},router_id:{message:"",isValid:!0}}),N=m=>{const{mostrarNotify:d,claim:l,router:p,route:v}=V(),n=["nombre","coordenadas","ubicacion","puertos","router_id"],f=async()=>{s.value=[];const{data:a}=await t.get(`/router/find/${l.company.id}`);a.forEach(e=>{s.value.push({label:e.nombre,value:e.id})}),s.value.length>0&&(m||(r.value.router_id=s.value[0].value),c.value=s.value[0].value)},g=()=>{r.value={id:"",nombre:"",coordenadas:"",ubicacion:"",puertos:"",detalles:"",router_id:""}},b=()=>{n.push("router_id"),n.forEach(a=>{u.value[a].isValid=!0})},h=()=>{let a=!1;return n.forEach(e=>{(r.value[e].length==0||r.value[e]==0)&&(u.value[e].message="Debes completar este campo",u.value[e].isValid=!1,a=!0)}),a},R=a=>new Promise(e=>setTimeout(e,a));return{api:t,claim:l,cargarRouters:f,formNap:r,listRouters:s,loading:i,limpiarFormulario:g,validaciones:u,quitarErrores:b,route:v,selectedRouter:c,onSubmit:async a=>{if(!h())try{i.value=!0;let e={headers:{router_id:r.value.router_id,NotSetHeaderCompany:l.roles[0]=="SUPER-ADMINISTRADOR"}};a?await t.patch(`/caja-nap/${r.value.id}`,r.value):await t.post("/caja-nap",r.value,e),a&&await R(500),d("positive",`Router ${a?"editado":"agregado"} exitosamente`),i.value=!1,p.push({name:"cNap.index"})}catch(e){i.value=!1,d("warning",e.response.data.message)}}}};export{N as u};
