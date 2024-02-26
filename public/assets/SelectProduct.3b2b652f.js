import{r as n,n as w,d as I,o as y,a7 as k,g as t,aP as x,f as l,aQ as B,e as F,ac as Q,ab as N,h as q,i as V,a8 as v,a9 as _}from"./index.63602cd2.js";import{Q as M,a as p}from"./QTable.fc3e737e.js";import{Q as $}from"./QInnerLoading.e6b9f461.js";import{a as T}from"./axios.22257619.js";import{u as z}from"./useHelpers.d026a779.js";const f=n([]),b=n(""),c=n(!1),P=n({}),A=n(!1),C=n(""),D=n([{name:"acciones",label:"Quitar",align:"left"},{label:"Codigo Barra",align:"left",field:"codigoBarra",name:"codigoBarra"},{label:"Producto",align:"left",field:"nombre",name:"nombre"},{name:"cantidad",label:"Cantidad",align:"left"},{name:"iva",label:"Aplica IVA",align:"center"},{name:"descuento",label:"descuento %",align:"left",field:"descuento"},{label:"Stock",align:"center",field:"stock",name:"stock"},{name:"pvm",label:"Costo Neto",align:"center"},{name:"v_total",label:"Valor Total",align:"center",field:"v_total"}]),E=()=>{const{mostrarNotify:s,claim:u}=z(),m=(e,o)=>{if(f.value.some(a=>a.codigoBarra==e.codigoBarra))s("warning","Ya fue agregado este articulo");else{if(o!=="compras"&&e.stock<=0&&e.tipo!="Servicio")return s("negative",`No hay stock del articulo ${e.nombre}`);let a=0;o=="proforma"?a=e.cantidad:e.tipo=="Servicio"?a=1:a=0,e.cantidad=a,e.v_total=o=="proforma"?e.v_total:0,e.descuento=o=="venta"||o=="proforma"?e.descuento:0,f.value.unshift(e),e.tipo=="Servicio"&&d(e,"ventas"),b.value=""}},h=async e=>{if(b.value.length==0)return s("warning","Ingresa el termino de busqueda");c.value=!0;try{const{data:o}=await T.get(`/products/${b.value}`);if(o.length>1)return P.value={data:o,tipo:e},A.value=!0,c.value=!1;if(o.length===0)return s("warning","No se encontro el articulo..."),c.value=!1;if(u.roles[0]=="Administrador"||u.roles[0]=="Super-Administrador"){if(C.value!==o[0].sucursal_id.id)return s("warning","No se encontro el articulo..."),c.value=!1}else if(u.sucursales[0]!==o[0].sucursal_id.id)return s("warning","No se encontro el articulo..."),c.value=!1;c.value=!1,m(o[0],e)}catch(o){console.log(o),c.value=!1}},g=e=>{const o=f.value.findIndex(i=>i.id==e);f.value.splice(o,1)},S=w(()=>{let e=0,o=0,i=0,a=0;return f.value.forEach(r=>{r.descuento>0&&(i+=parseFloat(r.v_total)*parseFloat(r.descuento)/100),r.aplicaIva&&(o+=(parseFloat(r.v_total)-parseFloat(r.v_total)*parseFloat(r.descuento)/100)*.12),e+=parseFloat(r.v_total)}),a=e+o-i,{subtotal:parseFloat((Math.floor(e*100)/100).toString()),iva:parseFloat((Math.floor(o*100)/100).toString()),descuento:parseFloat((Math.floor(i*100)/100).toString()),total:parseFloat((Math.floor(a*100)/100).toString())}}),d=(e,o="compras")=>{o=="compras"?e.v_total=parseFloat(e.cantidad)*parseFloat((Math.floor(e.precio_compra*100)/100).toString()):e.v_total=parseFloat(e.cantidad)*parseFloat((Math.floor(e.pvp*100)/100).toString())};return{agregarAndValidarStock:m,columns:D,claim:u,filterArticulo:h,filterByCodBarra:b,loadingState:c,listProductos:P,modalSelectProducto:A,sucursal_selected:C,getSubtotalByProduct:d,quitarArticulo:g,valorFactura:S,rows:f}};const H=F("div",{class:"text-h6 text-center"},"Selecciona un producto",-1),L={class:"row q-gutter-sm"},O={class:"col-xs-12 col-sm-12 q-my-sm"},R=I({__name:"SelectProduct",props:{listProductos:{}},emits:["agregarProduct"],setup(s,{emit:u}){const m=s,h=[{name:"add",label:"Agregar"},{name:"codigoBarra",label:"Codigo Barra",align:"left",field:"codigoBarra"},{name:"producto",label:"Producto",align:"left",field:"nombre"},{name:"stock",label:"Stock",align:"center",field:"stock"},{name:"aplicaIva",label:"Aplica IVA",align:"center",field:"aplicaIva"},{name:"stock",label:"Stock",align:"center",field:"stock"},{name:"pvm",label:"Precio de Compra",align:"center",field:"pvm"},{name:"sucursal",label:"Sucursal",align:"center",field:"sucursal"}],{claim:g,sucursal_selected:S}=E();let d;g.roles[0]=="Administrador"||g.roles[0]=="Super-Administrador"?d=S.value:d=g.sucursales[0];const e=n([]);return m.listProductos.tipo,e.value=m.listProductos.data,(o,i)=>(y(),k(x,{style:{width:"1040px","max-width":"80vw"}},{default:t(()=>[l(B,{class:"q-pb-none"},{default:t(()=>[H]),_:1}),l(B,null,{default:t(()=>[F("div",L,[F("div",O,[l(M,{class:Q([o.$q.dark.isActive?"":"my-sticky-header-table2"]),rows:e.value,columns:h,"hide-bottom":"","row-key":"name"},{"body-cell-add":t(a=>[l(p,{props:a},{default:t(()=>[N(d)==a.row.sucursal_id.id?(y(),k(q,{key:0,round:"",color:"green-9",class:"q-ml-md",size:"sm",onClick:r=>u("agregarProduct",a.row),icon:"fa-solid fa-plus"},null,8,["onClick"])):(y(),k(V,{key:1,color:"red-9",class:"q-ml-md",size:"sm",name:"fa-solid fa-ban"}))]),_:2},1032,["props"])]),"body-cell-descuento":t(a=>[l(p,{props:a},{default:t(()=>[v(_(a.row.descuento)+"% ",1)]),_:2},1032,["props"])]),"body-cell-aplicaIva":t(a=>[l(p,{props:a},{default:t(()=>[v(_(a.row.aplicaIva?"SI":"NO"),1)]),_:2},1032,["props"])]),"body-cell-pvp":t(a=>[l(p,{props:a},{default:t(()=>[v("$"+_(a.row.pvp.toFixed(2)),1)]),_:2},1032,["props"])]),"body-cell-pvm":t(a=>[l(p,{props:a},{default:t(()=>[v("$"+_(a.row.precio_compra),1)]),_:2},1032,["props"])]),"body-cell-sucursal":t(a=>[l(p,{props:a},{default:t(()=>[v(_(a.row.sucursal_id.nombre),1)]),_:2},1032,["props"])]),loading:t(()=>[l($,{showing:"",color:"primary"})]),_:1},8,["class","rows"])])])]),_:1})]),_:1}))}});export{R as _,E as u};
