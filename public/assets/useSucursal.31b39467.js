import{a as c}from"./axios.49c71067.js";import{u as p}from"./useHelpers.511b7d45.js";import{r as n}from"./index.92f39aa9.js";const u=n(!1),r=n([]),e=n({nombre:"",direccion:"",establecimiento:"",punto_emision:"",secuencia_factura_produccion:"",secuencia_factura_pruebas:"",secuencia_nota_credito_produccion:"",secuencia_nota_credito_pruebas:"",ambiente:"PRUEBA",company_id:""}),S=()=>{const{mostrarNotify:i,claim:t,router:s,route:l}=p();return{api:c,claim:t,formSucursal:e,loading:u,route:l,limpiarFormulario:()=>{e.value.nombre="",e.value.direccion="",e.value.establecimiento="",e.value.punto_emision="",e.value.secuencia_factura_produccion="",e.value.secuencia_factura_pruebas="",e.value.secuencia_nota_credito_produccion="",e.value.secuencia_nota_credito_pruebas=""},cargarCompanies:async()=>{r.value=[];const{data:a}=await c.get("/companies/true");a.forEach(o=>{r.value.push({label:o.nombre_comercial,value:o.id})}),e.value.company_id=t.company.id},listCompanies:r,allowOnlyNumber:()=>{e.value.establecimiento=e.value.establecimiento.toString().replace(/\D/g,""),e.value.punto_emision=e.value.punto_emision.toString().replace(/\D/g,""),e.value.secuencia_factura_produccion=e.value.secuencia_factura_produccion.toString().replace(/\D/g,""),e.value.secuencia_nota_credito_produccion=e.value.secuencia_nota_credito_produccion.toString().replace(/\D/g,"")},onSubmit:async a=>{if(parseInt(e.value.establecimiento)<=0||parseInt(e.value.punto_emision)<=0||parseInt(e.value.secuencia_factura_produccion)<=0)return i("warning","Los valores deben ser mayor o igual a 1");try{u.value=!0,a?(e.value.establecimiento=e.value.establecimiento.toString(),e.value.punto_emision=e.value.punto_emision.toString(),e.value.secuencia_factura_produccion=e.value.secuencia_factura_produccion.toString(),e.value.secuencia_nota_credito_produccion=e.value.secuencia_nota_credito_produccion.toString(),e.value.nombre=e.value.nombre.toUpperCase(),await c.patch("/sucursal/"+e.value.id,e.value)):await c.post("/sucursal",{...e.value,nombre:e.value.nombre.toUpperCase()}),i("positive",`Sucursal ${a?"editado":"agregado"} exitosamente`),u.value=!1,s.push({name:"Ver Sucursales"})}catch(o){i("warning",o.response.data.message),u.value=!1}}}};export{S as u};
