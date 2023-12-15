import{api as n}from"./axios.c73445ad.js";import{u as m}from"./useHelpers.483cb115.js";import{r,B as v,v as d}from"./index.633eb824.js";const i=r(!1),t=r([]),e=r({nombre:"",direccion:"",establecimiento:"",punto_emision:"",secuencia_factura_produccion:"",secuencia_factura_pruebas:"",secuencia_nota_credito_produccion:"",secuencia_nota_credito_pruebas:"",ambiente:"PRUEBA"}),b=async()=>{t.value=[];const{data:a}=await n.get("/companies/true");a.forEach(o=>{t.value.push({label:o.nombre_comercial,value:o.id})})},w=()=>{const{mostrarNotify:a,claim:o,router:s,route:l}=m(),_=()=>{e.value.nombre="",e.value.direccion="",e.value.establecimiento="",e.value.punto_emision="",e.value.secuencia_factura_produccion="",e.value.secuencia_factura_pruebas="",e.value.secuencia_nota_credito_produccion="",e.value.secuencia_nota_credito_pruebas=""},p=()=>{e.value.establecimiento=e.value.establecimiento.toString().replace(/\D/g,""),e.value.punto_emision=e.value.punto_emision.toString().replace(/\D/g,""),e.value.secuencia_factura_produccion=e.value.secuencia_factura_produccion.toString().replace(/\D/g,""),e.value.secuencia_nota_credito_produccion=e.value.secuencia_nota_credito_produccion.toString().replace(/\D/g,"")};return v(()=>{d(e.value,(c,u)=>{e.value.nombre=c.nombre.toUpperCase()})}),{api:n,claim:o,formSucursal:e,loading:i,route:l,limpiarFormulario:_,cargarCompanies:b,listCompanies:t,allowOnlyNumber:p,onSubmit:async c=>{if(parseInt(e.value.establecimiento)<=0||parseInt(e.value.punto_emision)<=0||parseInt(e.value.secuencia_factura_produccion)<=0)return a("warning","Los valores deben ser mayor o igual a 1");try{if(i.value=!0,c)e.value.establecimiento=e.value.establecimiento.toString(),e.value.punto_emision=e.value.punto_emision.toString(),e.value.secuencia_factura_produccion=e.value.secuencia_factura_produccion.toString(),e.value.secuencia_nota_credito_produccion=e.value.secuencia_nota_credito_produccion.toString(),await n.patch("/sucursal/"+e.value.id,e.value);else{let u;await n.post("/sucursal",e.value,u)}a("positive",`Sucursal ${c?"editado":"agregado"} exitosamente`),i.value=!1,s.push({name:"Ver Sucursales"})}catch(u){a("warning",u.response.data.message),i.value=!1}}}};export{w as u};
