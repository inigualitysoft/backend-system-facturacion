import{u as A}from"./useHelpers.31b4b79a.js";import{api as f}from"./axios.ddfc2968.js";import{d as j}from"./date.babffc20.js";import{r as t,B as T,v as G,bs as H}from"./index.db31c40b.js";const g=t(!1),V=t(1),y=t(!1),M=t(!1),S=t(!1);let z=t([]),J=t([]);const K=t([]),Q=t([]),U=t([]);let W=t([]),X=t([]);const r=t({nombres:"",tipo_documento:"",numero_documento:"",email:"",celular:"",direccion:""}),c=t({tipo:"",dia_pago:"",crear_factura:"",tipo_impuesto:"",tipo_comprobante:"",dia_gracia:"",aplicar_corte:"",recordatorio_pago:null}),s=t({router_id:"",direccion:"",coordenadas:"",perfil_internet:"",precio:0,fecha_instalacion:j.formatDate(Date.now(),"YYYY/MM/DD"),mac:"",red_id:"",ipv4:"",caja_id:"",puerto_id:""}),u=t({router_id:{message:"",isValid:!0},direccion:{message:"",isValid:!0},coordenadas:{message:"",isValid:!0},perfil_internet:{message:"",isValid:!0},precio:{message:"",isValid:!0},fecha_instalacion:{message:"",isValid:!0},mac:{message:"",isValid:!0},red_id:{message:"",isValid:!0},ipv4:{message:"",isValid:!0},caja_id:{message:"",isValid:!0},puerto_id:{message:"",isValid:!0}}),d=t({tipo:{message:"",isValid:!0},dia_pago:{message:"",isValid:!0},crear_factura:{message:"",isValid:!0},tipo_impuesto:{message:"",isValid:!0},tipo_comprobante:{message:"",isValid:!0},dia_gracia:{message:"",isValid:!0},aplicar_corte:{message:"",isValid:!0},recordatorio_pago:{message:"",isValid:!0}}),n=t({nombres:{message:"",isValid:!0},tipo_documento:{message:"",isValid:!0},numero_documento:{message:"",isValid:!0},email:{message:"",isValid:!0},celular:{message:"",isValid:!0},direccion:{message:"",isValid:!0},company_id:{message:"",isValid:!0}}),se=()=>{const{claim:x,router:F,mostrarNotify:_,confirmDelete:Y,isDeleted:R,route:C}=A(),h=["nombres","tipo_documento","numero_documento","email","celular","direccion"],b=["tipo","dia_pago","crear_factura","tipo_impuesto","dia_gracia","aplicar_corte","tipo_comprobante"],D=["perfil_internet","precio","red_id","ipv4"],N=()=>{r.value={nombres:"",tipo_documento:"",numero_documento:"",email:"",celular:"",direccion:""},c.value={tipo:"",dia_pago:"",crear_factura:"",tipo_impuesto:"",tipo_comprobante:"",dia_gracia:"",aplicar_corte:"",recordatorio_pago:null},s.value={router_id:"",direccion:"",coordenadas:"",perfil_internet:"",precio:0,fecha_instalacion:j.formatDate(Date.now(),"YYYY/MM/DD"),mac:"",red_id:"",ipv4:"",caja_id:"",puerto_id:""}},q=()=>{h.forEach(e=>{n.value[e].isValid=!0}),b.forEach(e=>{d.value[e].isValid=!0}),D.forEach(e=>{u.value[e].isValid=!0})},B=e=>{let a=0;a=s.value[e];const i=/^\d{0,9}(\.\d{1,2})?$/;setTimeout(function(){let o=0;if(o=s.value[e],!i.test(o.toString())){const m=parseFloat(a.toString().substring(0,a.toString().length-1));s.value[e]=m}},0),u.value.precio.isValid=!0},$=()=>{let e=!1;var a=/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;a.test(r.value.email)||(n.value.email.message="Ingresa un email valido",n.value.email.isValid=!1,e=!0),h.forEach(o=>{(r.value[o].length==0||r.value[o]==0)&&(n.value[o].message="Debes completar este campo",n.value[o].isValid=!1,e=!0)});let i;return r.value.tipo_documento==="04"&&(i=13),r.value.tipo_documento==="05"&&(i=10),r.value.tipo_documento==="06"&&(i=10),n.value.numero_documento.isValid&&r.value.numero_documento.length!=i&&(n.value.numero_documento.message=`Debes completar ${i} digitos`,n.value.numero_documento.isValid=!1,e=!0),e||(y.value=!0,V.value=2),e},k=()=>{let e=!1;return b.forEach(a=>{(c.value[a].length==0||c.value[a]==0)&&(d.value[a].message="Debes completar este campo",d.value[a].isValid=!1,e=!0)}),(c.value.recordatorio_pago==null||c.value.recordatorio_pago.length==0)&&(d.value.recordatorio_pago.message="Debes elegir al menos una opci\xF3n",d.value.recordatorio_pago.isValid=!1,e=!0),e||(M.value=!0,V.value=3),e},w=()=>{let e=!1;return s.value.router_id.length==0?(u.value.router_id.message="Debes elegir un router",u.value.router_id.isValid=!1,e=!0):(D.forEach(a=>{(s.value[a].length==0||s.value[a]==0)&&(u.value[a].message="Debes completar este campo",u.value[a].isValid=!1,e=!0)}),s.value.caja_id.length>0&&s.value.puerto_id.length==""&&(u.value.puerto_id.message="Elige una opci\xF3n",u.value.puerto_id.isValid=!1,e=!0)),e||(S.value=!0),e};return T(()=>{G(r.value,(e,a)=>{if(e.tipo_documento!==""&&e.tipo_documento!=="04"&&r.value.numero_documento.length>10){const i=e.numero_documento.length-10,o=e.numero_documento.substring(0,e.numero_documento.length-i);r.value.numero_documento=o}})}),{api:f,claim:x,formCliente:r,formFacturacion:c,loading:g,limpiarFormulario:N,groupedIpsByRed:e=>{const a={};return e.forEach(i=>{const o=i.substring(0,i.lastIndexOf("."));a.hasOwnProperty(o)||(a[o]=[]),a[o].push(i)}),a},obtenerListaSubred:e=>{const[a,i]=e.split("/"),o=a.split(".").map(Number),m=parseInt(i,10),L="1".repeat(m)+"0".repeat(32-m),I=[];for(let l=0;l<4;l++)I.push(parseInt(L.substr(l*8,8),2));const O=o.map((l,p)=>l&I[p]).join("."),E=[];for(let l=0;l<Math.pow(2,32-m);l++){const p=O.split(".").map((v,P)=>parseInt(v,10)+Math.floor(l/Math.pow(2,(3-P)*8))%256).join(".");p.split(".").every(v=>parseInt(v,10)<=255)&&E.push(p)}return E},listRedes:K,listRouter:z,listServicionsInternet:J,listCajasNap:W,listPuertosCajaNap:X,validaciones:n,validacionesFacturacion:d,validarDatosPersonales:$,validarFormFact:k,validarFormInternet:w,validacionesInternet:u,validDecimal:B,mostrarNotify:_,quitarErrores:q,confirmDelete:Y,optionsListIps:U,listIps:Q,route:C,step:V,done1:y,done2:M,done3:S,formInternet:s,isDeleted:R,onSubmit:async e=>{w()||H.create({title:"\xBFDeseas agregar este cliente?",ok:{push:!0,color:"cyan-10",label:"Guardar"},cancel:{push:!0,color:"blue-grey-6",label:"Cancelar"}}).onOk(async()=>{try{g.value=!0,e?await f.patch("/customers/"+r.value.id,r.value):(s.value.red_id.includes("|")&&(s.value.red_id=s.value.red_id.split("|")[0]),await f.post("/customers",{cliente:r.value,facturacion:c.value,servicio:s.value})),_("positive",`Cliente ${e?"editado":"agregado"} exitosamente`),g.value=!1,F.push({name:"cliente.index"})}catch(a){_("warning",a.response.data.message),g.value=!1}})}}};export{se as u};
