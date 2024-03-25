import{d as A,o as d,a9 as b,g as l,aZ as B,aU as j,f as c,e,ab as a,aV as y,ae as r,c as i,af as _,ad as I,aa as n,O as f,h as N}from"./index.ca7b667e.js";import{Q as g}from"./QBadge.75b08eab.js";import{Q as O,a as m}from"./QTable.6377d10b.js";import{Q as S}from"./QInnerLoading.642ba93c.js";import{a as D,Q as v,d as q}from"./format.f35043b7.js";import{Q as E}from"./QList.44b26507.js";import{Q as L}from"./QBtnDropdown.55485a3a.js";import{C as w}from"./ClosePopup.a0cb6a9f.js";import{u as V}from"./useHelpers.9a0288d5.js";const F={class:"text-h6 text-center"},U={class:"row q-gutter-sm text-center"},R=e("label",{class:"text-subtitle1 text-weight-medium"}," Num. Comprobantes: ",-1),z=[R],M=e("label",{class:"text-subtitle1 text-weight-medium"},"Clave de Acceso:",-1),H=[M],X={style:{width:"100%","word-wrap":"break-word"}},Z=e("label",{class:"text-subtitle1 text-weight-medium"},"Descripci\xF3n:",-1),G=[Z],J=e("label",{class:"text-subtitle1 text-weight-medium"},"Sucursal:",-1),K=[J],W={class:"text-subtitle1 text-weight-medium"},Y={key:0},ee={key:1},te=e("label",{class:"text-subtitle1 text-weight-medium"},"Usuario:",-1),le=[te],se={class:"text-subtitle1 text-weight-medium"},ae={key:0},oe={key:1},ce=e("label",{class:"text-subtitle1 text-weight-medium"}," Estado: ",-1),re=[ce],de={class:"col-xs-12 col-sm-12 q-my-sm"},ie={class:"row"},ne={key:0,class:"col-xs-12 col-sm-6 row items-center"},ue={class:"col-xs-12 col-sm-6",style:{display:"flex","justify-content":"end"}},me={style:{"margin-right":"5px"}},_e={class:"text-right"},xe=e("td",null,[e("b",null,"TOTAL BRUTO:")],-1),be={style:{width:"90px"},class:"text-subtitle1 text-weight-regular"},pe={class:"text-right"},he=e("td",{class:""},[e("b",null,"DESCUENTOS:")],-1),ye={style:{width:"90px"},class:"text-subtitle1 text-weight-regular"},fe={class:"text-right"},ge=e("td",null,[e("b",null,"SUBTOTAL:")],-1),De={style:{width:"90px"},class:"text-subtitle1 text-weight-regular"},ve={class:"text-right"},qe={class:"q-py-none"},we={style:{width:"90px"},class:"text-subtitle1 text-weight-regular"},Te={class:"text-right"},$e={style:{width:"90px"}},ke={key:1,class:"col-xs-12 col-sm-5 row justify-center q-my-sm"},Se=A({__name:"DetalleProducts",props:{detalleData:{}},setup(T){const t=T,$=[{label:"Codigo Barra",align:"left",name:"codigoBarra"},{label:"Producto",align:"left",name:"product"},{label:"Cantidad",align:"center",field:"cantidad"},{label:"Precio de Venta",align:"center",name:"pvp"},{name:"descuento",label:"Descuento",align:"center"},{name:"iva",label:"Aplica IVA",align:"center"},{name:"total",label:"Total",align:"center"}],{api:k,claim:P,mostrarNotify:C}=V();let p;t.detalleData.buyToProduct?t.detalleData.isActive?p="Aceptado":p="Anulado":p=t.detalleData.estadoSRI;const h=async(o,u)=>{try{const{data:s}=await k.post("/invoices/download-ride-xml",{clave_acceso:o,tipo_documento:u,razon_social:P.company.nombre_comercial},{responseType:"arraybuffer"}),Q=new Blob([s],{type:u=="ride"?"application/pdf":"application/xml"}),x=document.createElement("a");x.href=window.URL.createObjectURL(Q),x.download=`${o}${u=="ride"?".pdf":".xml"}`,document.body.appendChild(x),x.click(),document.body.removeChild(x)}catch{C("negative","No se encontro el archivo")}};return(o,u)=>(d(),b(j,{style:B(o.$q.screen.width<=1023?"max-width: 92vw;":"max-width: 60vw;")},{default:l(()=>[c(y,{class:"q-pb-none"},{default:l(()=>[e("div",F,a(t.detalleData.buyToProduct?"Detallle de Compra":"Detalle de la Factura/Proforma"),1)]),_:1}),c(y,null,{default:l(()=>[e("div",U,[e("div",{class:r(["col-xs-12 col-sm-5",[o.$q.screen.xs?"text-center":"text-right"]])},z,2),e("div",{class:r(["col-xs-12 col-sm-5 q-mt-sm flex items-center",[o.$q.screen.xs?"justify-center":"q-ml-lg"]])},[e("label",null,a(t.detalleData.numero_comprobante),1)],2),t.detalleData.buyToProduct?_("",!0):(d(),i("div",{key:0,class:r(["col-xs-12 col-sm-5 q-mt-none",[o.$q.screen.xs?"text-center":"text-right"]])},H,2)),t.detalleData.buyToProduct?_("",!0):(d(),i("div",{key:1,class:r(["col-xs-12 col-sm-6 q-mt-none flex items-center",[o.$q.screen.xs?"justify-left":"q-ml-lg text-left"]])},[e("label",X,a(t.detalleData.clave_acceso),1)],2)),t.detalleData.buyToProduct?(d(),i("div",{key:2,class:r(["col-xs-12 col-sm-5 q-mt-none",[o.$q.screen.xs?"text-center":"text-right"]])},G,2)):_("",!0),t.detalleData.buyToProduct?(d(),i("div",{key:3,class:r(["col-xs-12 col-sm-5 q-mt-none flex items-center",[o.$q.screen.xs?"justify-center":"q-ml-lg"]])},[e("label",null,a(t.detalleData.descripcion),1)],2)):_("",!0),e("div",{class:r(["col-xs-12 col-sm-5 q-mt-none",[o.$q.screen.xs?"text-center":"text-right"]])},K,2),e("div",{class:r(["col-xs-12 col-sm-5 q-mt-none flex items-center",[o.$q.screen.xs?"justify-center":"q-ml-lg"]])},[e("label",null,a(t.detalleData.sucursal_id.nombre),1)],2),e("div",{class:r(["col-xs-12 col-sm-5 q-mt-none",[o.$q.screen.xs?"text-center":"text-right"]])},[e("label",W,a(t.detalleData.buyToProduct?"Proveedor":"Cliente"),1)],2),e("div",{class:r(["col-xs-12 col-sm-5 q-mt-none flex items-center",[o.$q.screen.xs?"justify-center":"q-ml-lg"]])},[t.detalleData.buyToProduct?(d(),i("label",Y,a(t.detalleData.proveedor_id.razon_social),1)):(d(),i("label",ee,a(t.detalleData.customer_id.nombres),1))],2),e("div",{class:r(["col-xs-12 col-sm-5 q-mt-none",[o.$q.screen.xs?"text-center":"text-right"]])},le,2),e("div",{class:r(["col-xs-12 col-sm-5 q-mt-none flex items-center",[o.$q.screen.xs?"justify-center":"q-ml-lg"]])},[e("label",null,a(t.detalleData.user_id.fullName),1)],2),e("div",{class:r(["col-xs-12 col-sm-5 q-mt-none",[o.$q.screen.xs?"text-center":"text-right"]])},[e("label",se,a(t.detalleData.buyToProduct?"Fecha de Compra:":"Fecha de Emisi\xF3n:"),1)],2),e("div",{class:r(["col-xs-12 col-sm-5 q-mt-none flex items-center",[o.$q.screen.xs?"justify-center":"q-ml-lg"]])},[t.detalleData.buyToProduct?(d(),i("label",ae,a(t.detalleData.fecha_compra),1)):(d(),i("label",oe,a(t.detalleData.created_at),1))],2),e("div",{class:r(["col-xs-12 col-sm-5 q-mt-none",[o.$q.screen.xs?"text-center":"text-right"]])},re,2),e("div",{class:r(["col-xs-12 col-sm-5 q-mt-none flex items-center",[o.$q.screen.xs?"justify-center":"q-ml-lg"]])},[c(g,{outline:"",class:"q-py-xs q-px-md",color:o.$q.dark.isActive?"blue-grey-3":"blue-grey-7",label:I(p)},null,8,["color","label"])],2),e("div",de,[c(O,{class:r([o.$q.dark.isActive?"":"my-sticky-header-table2"]),rows:t.detalleData.invoiceToProduct?t.detalleData.invoiceToProduct:t.detalleData.buyToProduct,columns:$,"hide-bottom":"","row-key":"name"},{"body-cell-indice":l(s=>[c(m,{props:s},{default:l(()=>[n(a(s.pageIndex+1),1)]),_:2},1032,["props"])]),"body-cell-descuento":l(s=>[c(m,{props:s},{default:l(()=>[n(a(s.row.descuento)+"%",1)]),_:2},1032,["props"])]),"body-cell-product":l(s=>[c(m,{props:s},{default:l(()=>[n(a(s.row.product_id.nombre),1)]),_:2},1032,["props"])]),"body-cell-iva":l(s=>[t.detalleData.buyToProduct?(d(),b(m,{key:0,props:s},{default:l(()=>[n(a(s.row.iva?"SI":"NO"),1)]),_:2},1032,["props"])):(d(),b(m,{key:1},{default:l(()=>[n(a(s.row.product_id.aplicaIva?"SI":"NO"),1)]),_:2},1024))]),"body-cell-total":l(s=>[c(m,{props:s},{default:l(()=>[n("$"+a(s.row.v_total),1)]),_:2},1032,["props"])]),"body-cell-codigoBarra":l(s=>[c(m,{props:s},{default:l(()=>[n(a(s.row.product_id.codigoBarra),1)]),_:2},1032,["props"])]),"body-cell-pvp":l(s=>[c(m,{props:s},{default:l(()=>[n("$"+a(s.row.product_id.pvp),1)]),_:2},1032,["props"])]),loading:l(()=>[c(S,{showing:"",color:"primary"})]),_:1},8,["class","rows"]),e("div",ie,[o.$q.screen.xs?_("",!0):(d(),i("div",ne,[c(L,{class:"q-mr-xs",label:"Descargar Documento",outline:"",color:"primary",icon:"download"},{default:l(()=>[c(E,null,{default:l(()=>[f((d(),b(D,{clickable:"",onClick:u[0]||(u[0]=s=>h(t.detalleData.clave_acceso,"ride"))},{default:l(()=>[c(v,null,{default:l(()=>[c(q,null,{default:l(()=>[n("Descargar RIDE")]),_:1})]),_:1})]),_:1})),[[w]]),f((d(),b(D,{onClick:u[1]||(u[1]=s=>h(t.detalleData.clave_acceso,"xml")),clickable:""},{default:l(()=>[c(v,null,{default:l(()=>[c(q,null,{default:l(()=>[n("Descargar XML")]),_:1})]),_:1})]),_:1})),[[w]])]),_:1})]),_:1})])),e("div",ue,[e("table",me,[e("tr",_e,[xe,e("td",be,a(t.detalleData.subtotal),1)]),e("tr",pe,[he,e("td",ye,a(t.detalleData.descuento),1)]),e("tr",fe,[ge,e("td",De,a(parseFloat(t.detalleData.subtotal)-parseFloat(t.detalleData.descuento)),1)]),e("tr",ve,[e("td",qe,[e("b",null,"IVA("+a(t.detalleData.porcentaje_iva)+"%):",1)]),e("td",we,a(t.detalleData.iva),1)]),e("tr",Te,[e("td",null,[e("b",null,a(t.detalleData.buyToProduct?"TOTAL DE COMPRA:":"TOTAL DE VENTA:"),1)]),e("td",$e,[c(g,{outline:"",class:"text-subtitle1 text-weight-bold",color:"secondary",label:`${t.detalleData.total}`},null,8,["label"])])])])]),o.$q.screen.xs?(d(),i("div",ke,[c(N,{type:"submit",label:"Descargar Documento","icon-right":"picture_as_pdf",outline:"",rounded:"",style:{color:"#696cff"},size:"14px"})])):_("",!0)])])])]),_:1})]),_:1},8,["style"]))}});export{Se as _};
