import{a as s}from"./axios.260c29fd.js";import{u as b}from"./useHelpers.16467bd1.js";import{r as i}from"./index.56865ea9.js";const t=i(!1),l=i([]),a=i({id:"",nombre:"",router_id:"",red:"",cidr:"",tipo_uso:"Estatico"}),o=i({nombre:{message:"",isValid:!0},router_id:{message:"",isValid:!0},red:{message:"",isValid:!0},cidr:{message:"",isValid:!0}}),y=h=>{const{mostrarNotify:d,claim:n,router:c,route:m}=b(),u=["nombre","router_id","cidr"],p=async()=>{l.value=[];const{data:e}=await s.get(`/router/find/${n.company.id}`);e.forEach(r=>{l.value.push({label:r.nombre,value:r.id})})},v=()=>{a.value={id:"",nombre:"",router_id:"",red:"",cidr:"",tipo_uso:"Estatico"}},f=()=>{u.push("red"),u.forEach(e=>{o.value[e].isValid=!0})},g=()=>{let e=!1;return u.forEach(r=>{(a.value[r].length==0||a.value[r]==0)&&(o.value[r].message="Debes completar este campo",o.value[r].isValid=!1,e=!0)}),e};return{api:s,claim:n,cargarRouter:p,formRed:a,loading:t,listRouter:l,limpiarFormulario:v,validaciones:o,quitarErrores:f,route:m,onSubmit:async e=>{if(!g())try{t.value=!0,e?await s.patch(`/red-ipv4/${a.value.id}`,a.value):await s.post("/red-ipv4",a.value),d("positive",`Router ${e?"editado":"agregado"} exitosamente`),t.value=!1,c.push({name:"redesIpv4.index"})}catch(r){t.value=!1,d("warning",r.response.data.message)}}}};export{y as u};