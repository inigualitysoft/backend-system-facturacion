import{Q as ve,a as E}from"./QBreadcrumbs.ea768e66.js";import{p as f,m as fe,by as ge,bz as _e,r as x,u as be,l as he,v as ye,x as we,o as v,c as k,e as l,ae as n,f as s,g as o,aa as h,ab as m,ad as i,a9 as y,bA as xe,aU as U,af as M,bs as J,Q as I,aV as Ae,aj as Ie,bt as Ve,P,i as C,w as qe,h as F,O as G}from"./index.d6c4bdc6.js";import{a as D,Q as O,c as Z}from"./QItemLabel.1ee9546f.js";import{Q}from"./QSelect.a8a1d697.js";import{Q as Se,a as V}from"./QTable.841f7159.js";import{Q as Re}from"./QPopupEdit.619cd7d7.js";import{Q as Ce}from"./QBadge.dade6de9.js";import{Q as De}from"./QList.ed89e0ad.js";import{Q as Oe}from"./QBtnDropdown.9a2835b8.js";import{Q as Te}from"./QForm.18dc3b57.js";import{C as H}from"./ClosePopup.ce0f6283.js";import{a as q}from"./axios.465f24f1.js";import{u as Ne}from"./useHelpers.0a8a684c.js";import{d as $e}from"./date.6bb37875.js";import{u as Ee,_ as ke}from"./SelectProduct.08de2d86.js";import"./QChip.f02742be.js";import"./format.cbf00d5d.js";import"./QBtnGroup.227f3910.js";import"./use-quasar.293c2d69.js";import"./QInnerLoading.60ff71fc.js";const Ue=[f("g",{transform:"translate(20 50)"},[f("rect",{x:"-10",y:"-30",width:"20",height:"60",fill:"currentColor",opacity:"0.6"},[f("animateTransform",{attributeName:"transform",type:"scale",from:"2",to:"1",begin:"0s",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keySplines:"0.1 0.9 0.4 1",keyTimes:"0;1",values:"2;1"})])]),f("g",{transform:"translate(50 50)"},[f("rect",{x:"-10",y:"-30",width:"20",height:"60",fill:"currentColor",opacity:"0.8"},[f("animateTransform",{attributeName:"transform",type:"scale",from:"2",to:"1",begin:"0.1s",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keySplines:"0.1 0.9 0.4 1",keyTimes:"0;1",values:"2;1"})])]),f("g",{transform:"translate(80 50)"},[f("rect",{x:"-10",y:"-30",width:"20",height:"60",fill:"currentColor",opacity:"0.9"},[f("animateTransform",{attributeName:"transform",type:"scale",from:"2",to:"1",begin:"0.2s",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keySplines:"0.1 0.9 0.4 1",keyTimes:"0;1",values:"2;1"})])])];var Me=fe({name:"QSpinnerFacebook",props:ge,setup(L){const{cSize:_,classes:S}=_e(L);return()=>f("svg",{class:S.value,width:_.value,height:_.value,viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid"},Ue)}});const Pe={class:"q-ma-lg q-pt-md q-mb-none",style:{"margin-bottom":"10px"}},Fe={class:"row q-col-gutter-lg"},Qe=l("label",{class:"text-h6 text-center"},"Nueva Venta/Proforma",-1),Le=[Qe],Be={class:"row q-mx-lg q-col-gutter-md"},je={class:"text-weight-regular"},ze=l("span",{class:"q-mr-sm"},"N\xB0 Factura:",-1),Ke={key:1,class:"text-weight-regular"},Ye={class:"col-xs-12 col-sm-12 col-md-6 q-mt-md q-pl-none"},Je=l("label",null,"Seleccionar Cliente: ",-1),Ge=l("label",null,"Seleccionar Sucursal: ",-1),Ze={class:"row q-pt-lg q-mx-lg q-col-gutter-md"},He={class:"col-xs-12 col-md-6 q-pl-none"},We=l("label",null,"Filtrar por codigo de barra o nombre del producto:",-1),Xe=l("label",null,"Forma de pago:",-1),ea={class:"row q-mx-lg justify-center q-mt-md"},aa={class:"col-12"},ta={class:"full-width row flex-center text-lime-10 q-gutter-sm"},la=l("span",{class:"text-subtitle1"}," Agrega alg\xFAn Producto ",-1),sa=l("div",{class:"col-3 text-right"},[l("label",{class:"q-pr-md"},"Descripci\xF3n")],-1),oa={class:"col-9"},ra={class:"col-xs-12 col-sm-5",style:{display:"flex","justify-content":"end"}},ia={class:"text-right"},na=l("td",null,[l("b",null,"TOTAL BRUTO:")],-1),ua={style:{width:"50px"},class:"text-subtitle1 text-weight-regular"},da={class:"text-right"},ca=l("td",null,[l("b",null,"DESCUENTOS:")],-1),ma={style:{width:"50px"},class:"text-subtitle1 text-weight-regular"},pa={class:"text-right"},va=l("td",null,[l("b",null,"SUBTOTAL:")],-1),fa={style:{width:"50px"},class:"text-subtitle1 text-weight-regular"},ga={class:"text-right"},_a=l("td",null,[l("b",null,"IVA(12%):")],-1),ba={style:{width:"50px"},class:"text-subtitle1 text-weight-regular"},ha={class:"text-right"},ya=l("td",null,[l("b",null,"TOTAL DE VENTA:")],-1),wa={style:{width:"50px"}},La={__name:"AddVenta",setup(L){const{filterByCodBarra:_,columns:S,rows:w,modalSelectProducto:R,loadingState:W,listProductos:X,valorFactura:g,agregarAndValidarStock:B,filterArticulo:ee,getSubtotalByProduct:j,sucursal_selected:p,quitarArticulo:ae}=Ee();let z=[];const b=x([]),{claim:c,mostrarNotify:A}=Ne(),T=x([]),te=x(!1),N=x(!1),le=Date.now();let se=$e.formatDate(le,"DD/MM/YYYY");(c.roles[0]!=="SUPER-ADMINISTRADOR"||c.roles[0]!=="ADMINISTRADOR")&&(p.value=c.sucursales[0]);const oe=be(),K=he();S.value[7]={name:"pvp",label:"Precio de Venta",align:"center"};const r=x({customer_id:"386f5a32-7c96-4a51-8f50-86ea8338325b",numero_comprobante:"--- --- ---------",products:[],user_id:"",forma_pago:"",descripcion:""}),u=x({customer_id:{message:"",isValid:!0},sucursal_id:{message:"",isValid:!0},forma_pago:{message:"",isValid:!0}});ye(p,(t,e)=>{Y()});const re=async t=>{T.value=[];const{data:e}=await q.get(`/sucursal/find/${t}/company`);e.forEach(a=>{T.value.push({label:a.nombre,value:a.id})})},ie=async()=>{if(K.params.venta_id!==""){const{data:t}=await q.get(`/invoices/filterInvoice/${K.params.venta_id}`);r.value.customer_id=t.customer_id.id,r.value.id=t.id,r.value.clave_acceso=t.clave_acceso,r.value.estadoSRI=t.estadoSRI,p.value=t.sucursal_id.id,t.invoiceToProduct.forEach(e=>{e.product_id.cantidad=e.cantidad,e.product_id.descuento=parseFloat(e.descuento),e.product_id.v_total=e.v_total,B(e.product_id,"proforma")})}},ne=t=>{B(t,"venta"),R.value=!1},ue=async()=>{const t=r.value.customer_id;r.value.customer_id="",te.value=!1;try{const{data:e}=await q.get("/customers");b.value=[],e.forEach(a=>{b.value.push({label:a.nombres,value:a.id,num_doc:a.numero_documento})}),b.value.unshift({label:"CONSUMIDOR FINAL",value:"386f5a32-7c96-4a51-8f50-86ea8338325b",num_doc:"9999999999999"}),z=b.value,r.value.customer_id=t,ie()}catch(e){console.log(e)}},de=(t="",e)=>{if(t==="")return e(()=>{b.value=z});e(()=>{const a=t.toLowerCase();b.value=b.value.filter(d=>d.num_doc.indexOf(a)>-1||d.label.toLowerCase().indexOf(a)>-1)})},ce=()=>{let t=!1;return(c.roles[0]=="SUPER-ADMINISTRADOR"||c.roles[0]=="ADMINISTRADOR")&&p.value==""&&(u.value.sucursal_id.message="Debes seleccionar una sucursal",u.value.sucursal_id.isValid=!1,t=!0),g.value.total>50&&r.value.customer_id=="386f5a32-7c96-4a51-8f50-86ea8338325b"&&(u.value.customer_id.message="La factura supera los $50.00, no puede ser emitida a CONSUMIDOR FINAL",u.value.customer_id.isValid=!1,t=!0),g.value.total>50&&r.value.forma_pago=="01"&&(u.value.forma_pago.message="La factura supera los $500.00, debes elegir otra forma de pago",u.value.forma_pago.isValid=!1,t=!0),w.value.length==0&&(t=!0,A("warning","Debes agregar algun producto..")),r.value.forma_pago.length==0&&(u.value.forma_pago.message="Debes elegir una forma de pago",u.value.forma_pago.isValid=!1,t=!0),w.value.forEach((e,a)=>{e.cantidad<=0&&(t=!0,A("warning",`Agrega una cantidad cantidad al producto: ${e.nombre} de la fila: ${a+1}`)),e.cantidad>e.stock&&e.tipo!="Servicio"&&(t=!0,A("warning",`La cantidad de venta del producto: ${e.nombre} supera su stock disponible`))}),t},$=async t=>{if(ce())return;r.value={...r.value,...g.value,products:w.value,user_id:c.id,tipo:t};let e;t=="EMISION"&&(e="\xBFDeseas emitir factura de esta proforma?"),t=="FACTURA"&&(e="\xBFDeseas generar esta FACTURA?"),t=="PROFORMA"&&(e="\xBFDeseas guardar como PROFORMA?"),Ve.create({title:e,ok:{push:!0,color:"cyan-10",label:"Enviar"},cancel:{push:!0,color:"blue-grey-6",label:"Cancelar"}}).onOk(async()=>{try{P.show({message:"Cargando..."});let a={headers:{sucursal_id:p.value}};await q.post("/invoices",r.value,a),P.hide(),A("positive","Venta realizada exitosamente"),oe.push("/ventas")}catch(a){console.log(a),P.hide()}})},me=()=>{if((c.roles[0]=="SUPER-ADMINISTRADOR"||c.roles[0]=="ADMINISTRADOR")&&typeof p.value=="undefined")return A("warning","Elige una sucursal primeramente");ee("venta")},Y=async()=>{N.value=!0;let t={headers:{sucursal_id:p.value}};const{data:e}=await q.get("/CE/facturas/getNumFactura",t);r.value.numero_comprobante=e.numComprobante,N.value=!1};return we(()=>{w.value=[]}),c.roles[0]=="SUPER-ADMINISTRADOR"||c.roles[0]=="ADMINISTRADOR"?re(c.company.id):Y(),ue(),(t,e)=>(v(),k(Ie,null,[l("div",Pe,[l("div",Fe,[l("div",{class:n(["col-xs-12 col-md-6",[t.$q.screen.width<1022?"q-pt-sm":""]])},[s(ve,{class:n(["row q-mr-xs",[t.$q.screen.width<1022?"justify-center q-pt-sm":"justify-start "]])},{default:o(()=>[s(E,{label:"Inicio",icon:"home",to:"/"}),s(E,{label:"Ventas",icon:"payments",to:"/ventas"}),s(E,{label:"Venta/Prof.",icon:"add_circle"})]),_:1},8,["class"])],2),l("div",{class:n(["col-xs-12 col-md-6",[t.$q.screen.width<1022?"text-center q-pt-sm":"text-right"]])},Le,2)])]),l("div",Be,[l("div",{class:n(["col-xs-12 col-md-6 q-pt-xs q-mt-md",t.$q.screen.width>=1023||"text-center"])},[l("label",{class:n(["text-weight-medium",[t.$q.screen.xs?"text-subtitle1":"text-h5"]])},[h("Fecha de Emisi\xF3n: "),l("span",je,m(i(se)),1)],2)],2),l("div",{class:n(["col-xs-12 col-md-6",t.$q.screen.width<=1023?"text-center q-pt-sm":"text-right q-pt-xs q-mt-md"])},[l("label",{class:n(["q-mr-lg text-weight-medium",[t.$q.screen.xs?"text-subtitle1":"text-h5"]])},[ze,N.value?(v(),y(Me,{key:0,color:"primary",class:"q-ml-md",size:"2em"})):(v(),k("span",Ke,m(r.value.numero_comprobante),1))],2)],2),l("div",Ye,[Je,s(Q,{color:"orange",filled:"",modelValue:r.value.customer_id,"onUpdate:modelValue":[e[1]||(e[1]=a=>r.value.customer_id=a),e[2]||(e[2]=a=>u.value.customer_id.isValid=!0)],options:b.value,"emit-value":"","map-options":"",dense:"",error:!u.value.customer_id.isValid,onFilter:de,"use-input":"","input-debounce":"0"},xe({error:o(()=>[l("label",{class:n(t.$q.dark.isActive?"text-red-4":"text-negative")},m(u.value.customer_id.message),3)]),"no-option":o(()=>[s(D,null,{default:o(()=>[s(O,{class:"text-grey"},{default:o(()=>[h(" No hay resultados ")]),_:1})]),_:1})]),_:2},[r.value.customer_id&&r.value.customer_id!=="CONSUMIDOR FINAL"?{name:"append",fn:o(()=>[s(C,{name:"cancel",onClick:e[0]||(e[0]=qe(a=>r.value.customer_id="CONSUMIDOR FINAL",["stop","prevent"])),class:"cursor-pointer"})]),key:"0"}:void 0]),1032,["modelValue","options","error"])]),i(c).roles[0]=="SUPER-ADMINISTRADOR"||i(c).roles[0]=="ADMINISTRADOR"?(v(),k("div",{key:0,class:n(["col-xs-12 col-md-5 q-mt-md",t.$q.screen.width<=1023?"q-pl-none":"offset-1"])},[Ge,s(Q,{filled:"",modelValue:i(p),"onUpdate:modelValue":[e[3]||(e[3]=a=>U(p)?p.value=a:null),e[4]||(e[4]=a=>(u.value.sucursal_id.isValid=!0,w.value=[]))],error:!u.value.sucursal_id.isValid,options:T.value,"emit-value":"","map-options":"",dense:""},{error:o(()=>[l("label",{class:n(t.$q.dark.isActive?"text-red-4":"text-negative")},m(u.value.sucursal_id.message),3)]),"no-option":o(()=>[s(D,null,{default:o(()=>[s(O,{class:"text-grey"},{default:o(()=>[h(" No se encontro sucursal ")]),_:1})]),_:1})]),_:1},8,["modelValue","error","options"])],2)):M("",!0)]),l("div",Ze,[l("div",He,[We,s(I,{outlined:"","bottom-slots":"",loading:i(W),dense:"",modelValue:i(_),"onUpdate:modelValue":e[6]||(e[6]=a=>U(_)?_.value=a:null),modelModifiers:{trim:!0},onKeyup:J(me,["enter"])},{append:o(()=>[i(_)!==""?(v(),y(C,{key:0,name:"close",onClick:e[5]||(e[5]=a=>_.value=""),class:"cursor-pointer"})):M("",!0),s(C,{name:"search"})]),_:1},8,["loading","modelValue","onKeyup"])]),l("div",{class:n(["col-xs-12 col-sm-5",t.$q.screen.width<=1023?"q-pl-none q-mb-lg":"offset-1"])},[Xe,s(Q,{dense:"",modelValue:r.value.forma_pago,"onUpdate:modelValue":[e[7]||(e[7]=a=>r.value.forma_pago=a),e[8]||(e[8]=a=>u.value.forma_pago.isValid=!0)],modelModifiers:{trim:!0},filled:"","emit-value":"","map-options":"",error:!u.value.forma_pago.isValid,options:[{label:"SIN UTILIZACION DEL SISTEMA FINANCIERO",value:"01"},{label:"COMPENSACI\xD3N DE DEUDAS",value:"15"},{label:"TARJETA DE D\xC9BITO",value:"16"},{label:"DINERO ELECTR\xD3NICO",value:"17"},{label:"TARJETA PREPAGO",value:"18"},{label:"TARJETA DE CR\xC9DITO",value:"19"},{label:"OTROS CON UTILIZACI\xD3N DEL SISTEMA FINANCIERO",value:"20"},{label:"ENDOSO DE T\xCDTULOS",value:"21"}]},{error:o(()=>[l("label",{class:n(t.$q.dark.isActive?"text-red-4":"text-negative")},m(u.value.forma_pago.message),3)]),_:1},8,["modelValue","error"])],2)]),s(Te,{onSubmit:e[13]||(e[13]=a=>$("EMISION"))},{default:o(()=>[l("div",ea,[l("div",aa,[s(Se,{rows:i(w),columns:i(S),"row-key":"name",class:n([t.$q.dark.isActive?"":"my-sticky-header-table3"]),"hide-pagination":!0,"rows-per-page-options":[50]},{"no-data":o(({})=>[l("div",ta,[la,s(C,{size:"2em",name:"playlist_add"})])]),"body-cell-cantidad":o(a=>[s(V,{props:a},{default:o(()=>[s(I,{"input-class":"resaltarTextoInput",dense:"",required:"",onChange:d=>i(j)(a.row,"ventas"),min:"0",max:a.row.stock,readonly:a.row.tipo=="Servicio",type:"number",style:{width:"100px"},modelValue:a.row.cantidad,"onUpdate:modelValue":d=>a.row.cantidad=d,modelModifiers:{trim:!0}},null,8,["onChange","max","readonly","modelValue","onUpdate:modelValue"])]),_:2},1032,["props"])]),"body-cell-descuento":o(a=>[s(V,{props:a},{default:o(()=>[s(I,{"input-class":"resaltarTextoInput",dense:"",required:"",onChange:d=>i(j)(a.row,"ventas"),min:"0",type:"number",style:{width:"100px"},modelValue:a.row.descuento,"onUpdate:modelValue":d=>a.row.descuento=d},null,8,["onChange","modelValue","onUpdate:modelValue"])]),_:2},1032,["props"])]),"body-cell-iva":o(a=>[s(V,{props:a},{default:o(()=>[h(m(a.row.aplicaIva?"SI":"NO"),1)]),_:2},1032,["props"])]),"body-cell-pvp":o(a=>[s(V,{props:a},{default:o(()=>[h(" $"+m(a.row.pvp)+" ",1),s(Re,{modelValue:a.row.pvp,"onUpdate:modelValue":d=>a.row.pvp=d},{default:o(d=>[s(I,{modelValue:d.value,"onUpdate:modelValue":pe=>d.value=pe,dense:"",autofocus:"",counter:"",onKeyup:J(d.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["props"])]),"body-cell-acciones":o(a=>[s(V,{props:a},{default:o(()=>[s(F,{round:"",color:"deep-orange",onClick:d=>i(ae)(a.row.id),icon:"close",size:"8px"},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","class"])]),l("div",{class:n(["col-xs-12 col-sm-7 row items-center",t.$q.screen.width<=1023?"q-mt-lg q-mb-sm":""])},[sa,l("div",oa,[s(I,{modelValue:r.value.descripcion,"onUpdate:modelValue":e[9]||(e[9]=a=>r.value.descripcion=a),filled:"",type:"textarea",rows:"4"},null,8,["modelValue"])])],2),l("div",ra,[l("table",{class:n([t.$q.screen.xs?"":"linearTablaDetalle"])},[l("tr",ia,[na,l("td",ua," $"+m(i(g).subtotal),1)]),l("tr",da,[ca,l("td",ma," $"+m(i(g).descuento),1)]),l("tr",pa,[va,l("td",fa," $"+m(i(g).subtotal-i(g).descuento),1)]),l("tr",ga,[_a,l("td",ba," $"+m(i(g).iva),1)]),l("tr",ha,[ya,l("td",wa,[s(Ce,{outline:"",class:"text-subtitle1 text-weight-bold",color:"secondary",label:`$${i(g).total}`},null,8,["label"])])])],2)]),l("div",{class:n(["col-12 flex q-mt-md q-my-lg",[t.$q.screen.width<600?"justify-center":"justify-between"]])},[t.$q.screen.width>600?(v(),y(F,{key:0,icon:"arrow_back",onClick:e[10]||(e[10]=a=>t.$router.push("/ventas")),outline:"",rounded:"",class:"q-mr-lg",color:t.$q.dark.isActive?"blue-grey-2":"blue-grey-10"},{default:o(()=>[h(" \xA0 Regresar ")]),_:1},8,["color"])):M("",!0),t.$route.params.venta_id==""?(v(),y(Oe,{key:1,outline:"",rounded:"",style:{color:"#696cff"},label:"Generar",class:n(t.$q.screen.width>=1023?"q-px-xl":"full-width")},{default:o(()=>[s(De,null,{default:o(()=>[G((v(),y(D,{clickable:"",onClick:e[11]||(e[11]=a=>$("FACTURA"))},{default:o(()=>[s(O,null,{default:o(()=>[s(Z,null,{default:o(()=>[h("FACTURA")]),_:1})]),_:1})]),_:1})),[[H]]),G((v(),y(D,{type:"submit",clickable:"",onClick:e[12]||(e[12]=a=>$("PROFORMA"))},{default:o(()=>[s(O,null,{default:o(()=>[s(Z,null,{default:o(()=>[h("PROFORMA")]),_:1})]),_:1})]),_:1})),[[H]])]),_:1})]),_:1},8,["class"])):(v(),y(F,{key:2,type:"submit",label:"Emitir Factura",class:n(t.$q.screen.width>=1023?"q-px-xl":"full-width"),outline:"",rounded:"",style:{color:"#696cff"}},null,8,["class"]))],2)])]),_:1}),s(Ae,{modelValue:i(R),"onUpdate:modelValue":e[14]||(e[14]=a=>U(R)?R.value=a:null)},{default:o(()=>[s(ke,{listProductos:i(X),onAgregarProduct:ne},null,8,["listProductos"])]),_:1},8,["modelValue"])],64))}};export{La as default};
