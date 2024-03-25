import{r as c,n as M,d as Q,o as A,a9 as P,g as t,aU as R,f as o,aV as B,e as F,ae as x,ad as D,h as V,i as q,aa as g,ab as _}from"./index.ca7b667e.js";import{Q as T,a as f}from"./QTable.6377d10b.js";import{Q as $}from"./QInnerLoading.642ba93c.js";import{u as O}from"./useHelpers.9a0288d5.js";const v=c([]),h=c(""),i=c(!1),N=c({}),w=c(!1),C=c(""),z=c([{name:"acciones",label:"Quitar",align:"left"},{label:"Codigo Barra",align:"left",field:"codigoBarra",name:"codigoBarra"},{label:"Producto",align:"left",field:"nombre",name:"nombre"},{name:"cantidad",label:"Cantidad",align:"left"},{name:"iva",label:"Aplica IVA",align:"center"},{name:"descuento",label:"descuento %",align:"left",field:"descuento"},{label:"Stock",align:"center",field:"stock",name:"stock"},{name:"pvm",label:"Costo Neto",align:"center"},{name:"v_total",label:"Valor Total",align:"center",field:"v_total"}]),E=()=>{const u=c(0),{api:b,mostrarNotify:r,claim:d}=O(),p=(e,a)=>{if(v.value.some(s=>s.codigoBarra==e.codigoBarra))r("warning","Ya fue agregado este articulo");else{if(a!=="compras"&&e.stock<=0&&e.tipo!="Servicio")return r("negative",`No hay stock del articulo ${e.nombre}`);let s=0;a=="proforma"?s=e.cantidad:e.tipo=="Servicio"?s=1:s=0,e.cantidad=s,e.v_total=a=="proforma"?e.v_total:0,e.descuento=a=="venta"||a=="proforma"?e.descuento:0,v.value.unshift(e),e.tipo=="Servicio"&&I(e,"ventas"),h.value=""}},y=async e=>{if(h.value.length==0)return r("warning","Ingresa el termino de busqueda");i.value=!0;try{let{data:a}=await b.get(`/products/${h.value}`);if(a=a.filter(l=>{if(e=="compras"&&l.tipo=="Producto"||e=="venta")return l}),a.length>1)return N.value={data:a,tipo:e},w.value=!0,i.value=!1;if(a.length===0)return r("warning","No se encontro el articulo..."),i.value=!1;if(d.roles[0]=="ADMINISTRADOR"||d.roles[0]=="SUPER-ADMINISTRADOR"){if(C.value!==a[0].sucursal_id.id)return r("warning","No se encontro el articulo..."),i.value=!1}else if(d.sucursales[0]!==a[0].sucursal_id.id)return r("warning","No se encontro el articulo..."),i.value=!1;i.value=!1,p(a[0],e)}catch(a){console.log(a),i.value=!1}},m=e=>{const a=v.value.findIndex(l=>l.id==e);v.value.splice(a,1)},S=async()=>{const{data:{iva:e}}=await b.get(`/companies/get-iva/${d.company.id}`);e=="4"&&(u.value=15),e=="3"&&(u.value=14),e=="2"&&(u.value=12)},k=M(()=>{let e=0,a=0,l=0,s=0;return v.value.forEach(n=>{n.descuento>0&&(l+=parseFloat(n.v_total)*parseFloat(n.descuento)/100),n.aplicaIva&&(a+=(parseFloat(n.v_total)-parseFloat(n.v_total)*parseFloat(n.descuento)/100)*u.value/100),e+=parseFloat(n.v_total)}),s=e+a-l,{subtotal:parseFloat((Math.floor(e*100)/100).toString()),iva:parseFloat((Math.floor(a*100)/100).toString()),descuento:parseFloat((Math.floor(l*100)/100).toString()),total:parseFloat((Math.floor(s*100)/100).toString())}}),I=(e,a="compras")=>{a=="compras"?e.v_total=parseFloat(e.cantidad)*parseFloat((Math.floor(e.precio_compra*100)/100).toString()):e.v_total=parseFloat(e.cantidad)*parseFloat((Math.floor(e.pvp*100)/100).toString())};return S(),{agregarAndValidarStock:p,columns:z,claim:d,filterArticulo:y,filterByCodBarra:h,loadingState:i,listProductos:N,modalSelectProducto:w,sucursal_selected:C,iva_selected:u,getSubtotalByProduct:I,quitarArticulo:m,valorFactura:k,rows:v}};const U=F("div",{class:"text-h6 text-center"},"Selecciona un producto",-1),H={class:"row q-gutter-sm"},L={class:"col-xs-12 col-sm-12 q-my-sm"},K=Q({__name:"SelectProduct",props:{listProductos:{}},emits:["agregarProduct"],setup(u,{emit:b}){const r=u,d=[{name:"add",label:"Agregar"},{name:"codigoBarra",label:"Codigo Barra",align:"left",field:"codigoBarra"},{name:"producto",label:"Producto",align:"left",field:"nombre"},{name:"stock",label:"Stock",align:"center",field:"stock"},{name:"aplicaIva",label:"Aplica IVA",align:"center",field:"aplicaIva"},{name:"stock",label:"Stock",align:"center",field:"stock"},{name:"pvm",label:"Precio de Compra",align:"center",field:"pvm"},{name:"sucursal",label:"Sucursal",align:"center",field:"sucursal"}],{claim:p,sucursal_selected:y}=E();let m;p.roles[0]=="ADMINISTRADOR"||p.roles[0]=="SUPER-ADMINISTRADOR"?m=y.value:m=p.sucursales[0];const S=c([]);return r.listProductos.tipo,S.value=r.listProductos.data,(k,I)=>(A(),P(R,{style:{width:"1040px","max-width":"80vw"}},{default:t(()=>[o(B,{class:"q-pb-none"},{default:t(()=>[U]),_:1}),o(B,null,{default:t(()=>[F("div",H,[F("div",L,[o(T,{class:x([k.$q.dark.isActive?"":"my-sticky-header-table2"]),rows:S.value,columns:d,"hide-bottom":"","row-key":"name"},{"body-cell-add":t(e=>[o(f,{props:e},{default:t(()=>[D(m)==e.row.sucursal_id.id?(A(),P(V,{key:0,round:"",color:"green-9",class:"q-ml-md",size:"sm",onClick:a=>b("agregarProduct",e.row),icon:"fa-solid fa-plus"},null,8,["onClick"])):(A(),P(q,{key:1,color:"red-9",class:"q-ml-md",size:"sm",name:"fa-solid fa-ban"}))]),_:2},1032,["props"])]),"body-cell-descuento":t(e=>[o(f,{props:e},{default:t(()=>[g(_(e.row.descuento)+"% ",1)]),_:2},1032,["props"])]),"body-cell-aplicaIva":t(e=>[o(f,{props:e},{default:t(()=>[g(_(e.row.aplicaIva?"SI":"NO"),1)]),_:2},1032,["props"])]),"body-cell-pvp":t(e=>[o(f,{props:e},{default:t(()=>[g("$"+_(e.row.pvp.toFixed(2)),1)]),_:2},1032,["props"])]),"body-cell-pvm":t(e=>[o(f,{props:e},{default:t(()=>[g("$"+_(e.row.precio_compra),1)]),_:2},1032,["props"])]),"body-cell-sucursal":t(e=>[o(f,{props:e},{default:t(()=>[g(_(e.row.sucursal_id.nombre),1)]),_:2},1032,["props"])]),loading:t(()=>[o($,{showing:"",color:"primary"})]),_:1},8,["class","rows"])])])]),_:1})]),_:1}))}});export{K as _,E as u};