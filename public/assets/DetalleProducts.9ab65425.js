import{d as O,o as d,a9 as p,g as l,aZ as B,aU as j,f as c,e,ab as a,aV as f,ae as r,c as i,af as x,ad as h,aa as n,O as g,h as I}from"./index.7acef9a6.js";import{Q as D}from"./QBadge.4e6bc3c4.js";import{Q as N,a as m}from"./QTable.7fcf9738.js";import{Q as S}from"./QInnerLoading.5cd5fa79.js";import{a as v,Q as q,d as w}from"./format.b7cf0653.js";import{Q as E}from"./QList.363f54d0.js";import{Q as L}from"./QBtnDropdown.8c3a17b0.js";import{C as T}from"./ClosePopup.01114e94.js";import{u as R}from"./useHelpers.5242f772.js";const F={class:"text-h6 text-center"},V={class:"row q-gutter-sm text-center"},U=e("label",{class:"text-subtitle1 text-weight-medium"}," Num. Comprobantes: ",-1),z=[U],M=e("label",{class:"text-subtitle1 text-weight-medium"},"Clave de Acceso:",-1),H=[M],X={style:{width:"100%","word-wrap":"break-word"}},Z=e("label",{class:"text-subtitle1 text-weight-medium"},"Descripci\xF3n:",-1),G=[Z],J=e("label",{class:"text-subtitle1 text-weight-medium"},"Sucursal:",-1),K=[J],W={class:"text-subtitle1 text-weight-medium"},Y={key:0},ee={key:1},te=e("label",{class:"text-subtitle1 text-weight-medium"},"Usuario:",-1),le=[te],se={class:"text-subtitle1 text-weight-medium"},ae={key:0},oe={key:1},ce=e("label",{class:"text-subtitle1 text-weight-medium"}," Estado: ",-1),re=[ce],de={class:"col-xs-12 col-sm-12 q-my-sm"},ie={class:"row"},ne={key:0,class:"col-xs-12 col-sm-6 row items-center"},ue={style:{"margin-right":"5px"}},me={class:"text-right"},_e=e("td",null,[e("b",null,"TOTAL BRUTO:")],-1),xe={style:{width:"90px"},class:"text-subtitle1 text-weight-regular"},be={class:"text-right"},pe=e("td",{class:""},[e("b",null,"DESCUENTOS:")],-1),he={style:{width:"90px"},class:"text-subtitle1 text-weight-regular"},ye={class:"text-right"},fe=e("td",null,[e("b",null,"SUBTOTAL:")],-1),ge={style:{width:"90px"},class:"text-subtitle1 text-weight-regular"},De={class:"text-right"},ve={class:"q-py-none"},qe={style:{width:"90px"},class:"text-subtitle1 text-weight-regular"},we={class:"text-right"},Te={style:{width:"90px"}},$e={key:1,class:"col-xs-12 row justify-center q-my-sm col-sm-5"},Ne=O({__name:"DetalleProducts",props:{detalleData:{}},setup($){const t=$,k=[{label:"Codigo Barra",align:"left",name:"codigoBarra"},{label:"Producto",align:"left",name:"product"},{label:"Cantidad",align:"center",field:"cantidad"},{label:"Precio de Venta",align:"center",name:"pvp"},{name:"descuento",label:"Descuento",align:"center"},{name:"iva",label:"Aplica IVA",align:"center"},{name:"total",label:"Total",align:"center"}],{api:P,claim:C,mostrarNotify:Q}=R();let _;t.detalleData.buyToProduct?t.detalleData.isActive?_="Aceptado":_="Anulado":_=t.detalleData.estadoSRI;const y=async(o,u)=>{try{const{data:s}=await P.post("/invoices/download-ride-xml",{clave_acceso:o,tipo_documento:u,razon_social:C.company.nombre_comercial},{responseType:"arraybuffer"}),A=new Blob([s],{type:u=="ride"?"application/pdf":"application/xml"}),b=document.createElement("a");b.href=window.URL.createObjectURL(A),b.download=`${o}${u=="ride"?".pdf":".xml"}`,document.body.appendChild(b),b.click(),document.body.removeChild(b)}catch{Q("negative","No se encontro el archivo")}};return(o,u)=>(d(),p(j,{style:B(o.$q.screen.width<=1023?"max-width: 92vw;":"max-width: 60vw;")},{default:l(()=>[c(f,{class:"q-pb-none"},{default:l(()=>[e("div",F,a(t.detalleData.buyToProduct?"Detallle de Compra":"Detalle de la Factura/Proforma"),1)]),_:1}),c(f,null,{default:l(()=>[e("div",V,[e("div",{class:r(["col-xs-12 col-sm-5",[o.$q.screen.xs?"text-center":"text-right"]])},z,2),e("div",{class:r(["col-xs-12 col-sm-5 q-mt-sm flex items-center",[o.$q.screen.xs?"justify-center":"q-ml-lg"]])},[e("label",null,a(t.detalleData.numero_comprobante),1)],2),t.detalleData.buyToProduct?x("",!0):(d(),i("div",{key:0,class:r(["col-xs-12 col-sm-5 q-mt-none",[o.$q.screen.xs?"text-center":"text-right"]])},H,2)),t.detalleData.buyToProduct?x("",!0):(d(),i("div",{key:1,class:r(["col-xs-12 col-sm-6 q-mt-none flex items-center",[o.$q.screen.xs?"justify-left":"q-ml-lg text-left"]])},[e("label",X,a(t.detalleData.clave_acceso),1)],2)),t.detalleData.buyToProduct?(d(),i("div",{key:2,class:r(["col-xs-12 col-sm-5 q-mt-none",[o.$q.screen.xs?"text-center":"text-right"]])},G,2)):x("",!0),t.detalleData.buyToProduct?(d(),i("div",{key:3,class:r(["col-xs-12 col-sm-5 q-mt-none flex items-center",[o.$q.screen.xs?"justify-center":"q-ml-lg"]])},[e("label",null,a(t.detalleData.descripcion),1)],2)):x("",!0),e("div",{class:r(["col-xs-12 col-sm-5 q-mt-none",[o.$q.screen.xs?"text-center":"text-right"]])},K,2),e("div",{class:r(["col-xs-12 col-sm-5 q-mt-none flex items-center",[o.$q.screen.xs?"justify-center":"q-ml-lg"]])},[e("label",null,a(t.detalleData.sucursal_id.nombre),1)],2),e("div",{class:r(["col-xs-12 col-sm-5 q-mt-none",[o.$q.screen.xs?"text-center":"text-right"]])},[e("label",W,a(t.detalleData.buyToProduct?"Proveedor":"Cliente"),1)],2),e("div",{class:r(["col-xs-12 col-sm-5 q-mt-none flex items-center",[o.$q.screen.xs?"justify-center":"q-ml-lg"]])},[t.detalleData.buyToProduct?(d(),i("label",Y,a(t.detalleData.proveedor_id.razon_social),1)):(d(),i("label",ee,a(t.detalleData.customer_id.nombres),1))],2),e("div",{class:r(["col-xs-12 col-sm-5 q-mt-none",[o.$q.screen.xs?"text-center":"text-right"]])},le,2),e("div",{class:r(["col-xs-12 col-sm-5 q-mt-none flex items-center",[o.$q.screen.xs?"justify-center":"q-ml-lg"]])},[e("label",null,a(t.detalleData.user_id.fullName),1)],2),e("div",{class:r(["col-xs-12 col-sm-5 q-mt-none",[o.$q.screen.xs?"text-center":"text-right"]])},[e("label",se,a(t.detalleData.buyToProduct?"Fecha de Compra:":"Fecha de Emisi\xF3n:"),1)],2),e("div",{class:r(["col-xs-12 col-sm-5 q-mt-none flex items-center",[o.$q.screen.xs?"justify-center":"q-ml-lg"]])},[t.detalleData.buyToProduct?(d(),i("label",ae,a(t.detalleData.fecha_compra),1)):(d(),i("label",oe,a(t.detalleData.created_at),1))],2),e("div",{class:r(["col-xs-12 col-sm-5 q-mt-none",[o.$q.screen.xs?"text-center":"text-right"]])},re,2),e("div",{class:r(["col-xs-12 col-sm-5 q-mt-none flex items-center",[o.$q.screen.xs?"justify-center":"q-ml-lg"]])},[c(D,{outline:"",class:"q-py-xs q-px-md",color:o.$q.dark.isActive?"blue-grey-3":"blue-grey-7",label:h(_)},null,8,["color","label"])],2),e("div",de,[c(N,{class:r([o.$q.dark.isActive?"":"my-sticky-header-table2"]),rows:t.detalleData.invoiceToProduct?t.detalleData.invoiceToProduct:t.detalleData.buyToProduct,columns:k,"hide-bottom":"","row-key":"name"},{"body-cell-indice":l(s=>[c(m,{props:s},{default:l(()=>[n(a(s.pageIndex+1),1)]),_:2},1032,["props"])]),"body-cell-descuento":l(s=>[c(m,{props:s},{default:l(()=>[n(a(s.row.descuento)+"%",1)]),_:2},1032,["props"])]),"body-cell-product":l(s=>[c(m,{props:s},{default:l(()=>[n(a(s.row.product_id.nombre),1)]),_:2},1032,["props"])]),"body-cell-iva":l(s=>[t.detalleData.buyToProduct?(d(),p(m,{key:0,props:s},{default:l(()=>[n(a(s.row.iva?"SI":"NO"),1)]),_:2},1032,["props"])):(d(),p(m,{key:1},{default:l(()=>[n(a(s.row.product_id.aplicaIva?"SI":"NO"),1)]),_:2},1024))]),"body-cell-total":l(s=>[c(m,{props:s},{default:l(()=>[n("$"+a(s.row.v_total),1)]),_:2},1032,["props"])]),"body-cell-codigoBarra":l(s=>[c(m,{props:s},{default:l(()=>[n(a(s.row.product_id.codigoBarra),1)]),_:2},1032,["props"])]),"body-cell-pvp":l(s=>[c(m,{props:s},{default:l(()=>[n("$"+a(s.row.product_id.pvp),1)]),_:2},1032,["props"])]),loading:l(()=>[c(S,{showing:"",color:"primary"})]),_:1},8,["class","rows"]),e("div",ie,[!o.$q.screen.xs&&h(_)!=="PROFORMA"?(d(),i("div",ne,[c(L,{class:"q-mr-xs",label:"Descargar Documento",outline:"",color:"primary",icon:"download"},{default:l(()=>[c(E,null,{default:l(()=>[g((d(),p(v,{clickable:"",onClick:u[0]||(u[0]=s=>y(t.detalleData.clave_acceso,"ride"))},{default:l(()=>[c(q,null,{default:l(()=>[c(w,null,{default:l(()=>[n("Descargar RIDE")]),_:1})]),_:1})]),_:1})),[[T]]),g((d(),p(v,{onClick:u[1]||(u[1]=s=>y(t.detalleData.clave_acceso,"xml")),clickable:""},{default:l(()=>[c(q,null,{default:l(()=>[c(w,null,{default:l(()=>[n("Descargar XML")]),_:1})]),_:1})]),_:1})),[[T]])]),_:1})]),_:1})])):x("",!0),e("div",{class:r(["col-xs-12 col-sm-6",[h(_)=="PROFORMA"?"col-sm-12":"col-sm-5"]]),style:{display:"flex","justify-content":"end"}},[e("table",ue,[e("tr",me,[_e,e("td",xe,a(t.detalleData.subtotal),1)]),e("tr",be,[pe,e("td",he,a(t.detalleData.descuento),1)]),e("tr",ye,[fe,e("td",ge,a(parseFloat(t.detalleData.subtotal)-parseFloat(t.detalleData.descuento)),1)]),e("tr",De,[e("td",ve,[e("b",null,"IVA("+a(t.detalleData.porcentaje_iva)+"%):",1)]),e("td",qe,a(t.detalleData.iva),1)]),e("tr",we,[e("td",null,[e("b",null,a(t.detalleData.buyToProduct?"TOTAL DE COMPRA:":"TOTAL DE VENTA:"),1)]),e("td",Te,[c(D,{outline:"",class:"text-subtitle1 text-weight-bold",color:"secondary",label:`${t.detalleData.total}`},null,8,["label"])])])])],2),o.$q.screen.xs?(d(),i("div",$e,[c(I,{type:"submit",label:"Descargar Documento","icon-right":"picture_as_pdf",outline:"",rounded:"",style:{color:"#696cff"},size:"14px"})])):x("",!0)])])])]),_:1})]),_:1},8,["style"]))}});export{Ne as _};
