import{Q as fe,a as E}from"./QBreadcrumbs.dbd01044.js";import{p as f,m as ge,bA as _e,bB as be,r as x,v as he,x as ye,o as v,c as k,e as l,ae as n,f as s,g as o,aa as h,ab as m,ad as i,a9 as y,bC as we,aX as U,af as M,by as G,Q as V,aY as xe,aj as Ae,bz as Ie,P,i as R,w as Ve,h as F,O as Z}from"./index.ca7b667e.js";import{a as D,Q as O,d as H}from"./format.f35043b7.js";import{Q}from"./QSelect.8fcb8d59.js";import{Q as qe,a as q}from"./QTable.6377d10b.js";import{Q as Se}from"./QPopupEdit.65ccb3d7.js";import{Q as Ce}from"./QBadge.75b08eab.js";import{Q as Re}from"./QList.44b26507.js";import{Q as De}from"./QBtnDropdown.55485a3a.js";import{Q as Oe}from"./QForm.673f8cd7.js";import{C as X}from"./ClosePopup.a0cb6a9f.js";import{u as Te}from"./useHelpers.9a0288d5.js";import{d as Ne}from"./date.9154a754.js";import{u as $e,_ as Ee}from"./SelectProduct.a3a06c8a.js";import"./QBtnGroup.162ba406.js";import"./use-quasar.fb95affe.js";import"./axios.1f8f1753.js";import"./QInnerLoading.642ba93c.js";const ke=[f("g",{transform:"translate(20 50)"},[f("rect",{x:"-10",y:"-30",width:"20",height:"60",fill:"currentColor",opacity:"0.6"},[f("animateTransform",{attributeName:"transform",type:"scale",from:"2",to:"1",begin:"0s",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keySplines:"0.1 0.9 0.4 1",keyTimes:"0;1",values:"2;1"})])]),f("g",{transform:"translate(50 50)"},[f("rect",{x:"-10",y:"-30",width:"20",height:"60",fill:"currentColor",opacity:"0.8"},[f("animateTransform",{attributeName:"transform",type:"scale",from:"2",to:"1",begin:"0.1s",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keySplines:"0.1 0.9 0.4 1",keyTimes:"0;1",values:"2;1"})])]),f("g",{transform:"translate(80 50)"},[f("rect",{x:"-10",y:"-30",width:"20",height:"60",fill:"currentColor",opacity:"0.9"},[f("animateTransform",{attributeName:"transform",type:"scale",from:"2",to:"1",begin:"0.2s",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keySplines:"0.1 0.9 0.4 1",keyTimes:"0;1",values:"2;1"})])])];var Ue=ge({name:"QSpinnerFacebook",props:_e,setup(L){const{cSize:_,classes:S}=be(L);return()=>f("svg",{class:S.value,width:_.value,height:_.value,viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid"},ke)}});const Me={class:"q-ma-lg q-pt-md q-mb-none",style:{"margin-bottom":"10px"}},Pe={class:"row q-col-gutter-lg"},Fe=l("label",{class:"text-h6 text-center"},"Nueva Venta/Proforma",-1),Qe=[Fe],Le={class:"row q-mx-lg q-col-gutter-md"},Be={class:"text-weight-regular"},je=l("span",{class:"q-mr-sm"},"N\xB0 Factura:",-1),ze={key:1,class:"text-weight-regular"},Ye={class:"col-xs-12 col-sm-12 col-md-6 q-mt-md q-pl-none"},Ke=l("label",null,"Seleccionar Cliente: ",-1),Je=l("label",null,"Seleccionar Sucursal: ",-1),Ge={class:"row q-pt-lg q-mx-lg q-col-gutter-md"},Ze={class:"col-xs-12 col-md-6 q-pl-none"},He=l("label",null,"Filtrar por codigo de barra o nombre del producto:",-1),Xe=l("label",null,"Forma de pago:",-1),We={class:"row q-mx-lg justify-center q-mt-md"},ea={class:"col-12"},aa={class:"full-width row flex-center text-lime-10 q-gutter-sm"},ta=l("span",{class:"text-subtitle1"}," Agrega alg\xFAn Producto ",-1),la=l("div",{class:"col-3 text-right"},[l("label",{class:"q-pr-md"},"Descripci\xF3n")],-1),sa={class:"col-9"},oa={class:"col-xs-12 col-sm-5",style:{display:"flex","justify-content":"end"}},ra={class:"text-right"},ia=l("td",null,[l("b",null,"TOTAL BRUTO:")],-1),na={style:{width:"50px"},class:"text-subtitle1 text-weight-regular"},ua={class:"text-right"},da=l("td",null,[l("b",null,"DESCUENTOS:")],-1),ca={style:{width:"50px"},class:"text-subtitle1 text-weight-regular"},ma={class:"text-right"},pa=l("td",null,[l("b",null,"SUBTOTAL:")],-1),va={style:{width:"50px"},class:"text-subtitle1 text-weight-regular"},fa={class:"text-right"},ga={style:{width:"50px"},class:"text-subtitle1 text-weight-regular"},_a={class:"text-right"},ba=l("td",null,[l("b",null,"TOTAL DE VENTA:")],-1),ha={style:{width:"50px"}},Ma={__name:"AddVenta",setup(L){const{filterByCodBarra:_,columns:S,rows:w,modalSelectProducto:C,loadingState:W,listProductos:ee,valorFactura:g,agregarAndValidarStock:B,filterArticulo:ae,getSubtotalByProduct:j,sucursal_selected:p,iva_selected:z,quitarArticulo:te}=$e();let Y=[];const b=x([]),{api:A,claim:c,mostrarNotify:I,route:K,router:le}=Te(),T=x([]),se=x(!1),N=x(!1),oe=Date.now();let re=Ne.formatDate(oe,"DD/MM/YYYY");(c.roles[0]!=="SUPER-ADMINISTRADOR"||c.roles[0]!=="ADMINISTRADOR")&&(p.value=c.sucursales[0]),S.value[7]={name:"pvp",label:"Precio de Venta",align:"center"};const r=x({customer_id:"386f5a32-7c96-4a51-8f50-86ea8338325b",numero_comprobante:"--- --- ---------",products:[],user_id:"",forma_pago:"",descripcion:""}),u=x({customer_id:{message:"",isValid:!0},sucursal_id:{message:"",isValid:!0},forma_pago:{message:"",isValid:!0}});he(p,(t,e)=>{J()});const ie=async t=>{T.value=[];const{data:e}=await A.get(`/sucursal/find/${t}/company`);e.forEach(a=>{T.value.push({label:a.nombre,value:a.id})})},ne=async()=>{if(K.params.venta_id!==""){const{data:t}=await A.get(`/invoices/filterInvoice/${K.params.venta_id}`);r.value.customer_id=t.customer_id.id,r.value.id=t.id,r.value.clave_acceso=t.clave_acceso,r.value.estadoSRI=t.estadoSRI,p.value=t.sucursal_id.id,t.invoiceToProduct.forEach(e=>{e.product_id.cantidad=e.cantidad,e.product_id.descuento=parseFloat(e.descuento),e.product_id.v_total=e.v_total,B(e.product_id,"proforma")})}},ue=t=>{B(t,"venta"),C.value=!1},de=async()=>{const t=r.value.customer_id;r.value.customer_id="",se.value=!1;try{const{data:e}=await A.get("/customers");b.value=[],e.forEach(a=>{b.value.push({label:a.nombres,value:a.id,num_doc:a.numero_documento})}),b.value.unshift({label:"CONSUMIDOR FINAL",value:"386f5a32-7c96-4a51-8f50-86ea8338325b",num_doc:"9999999999999"}),Y=b.value,r.value.customer_id=t,ne()}catch(e){console.log(e)}},ce=(t="",e)=>{if(t==="")return e(()=>{b.value=Y});e(()=>{const a=t.toLowerCase();b.value=b.value.filter(d=>d.num_doc.indexOf(a)>-1||d.label.toLowerCase().indexOf(a)>-1)})},me=()=>{let t=!1;return(c.roles[0]=="SUPER-ADMINISTRADOR"||c.roles[0]=="ADMINISTRADOR")&&p.value==""&&(u.value.sucursal_id.message="Debes seleccionar una sucursal",u.value.sucursal_id.isValid=!1,t=!0),g.value.total>50&&r.value.customer_id=="386f5a32-7c96-4a51-8f50-86ea8338325b"&&(u.value.customer_id.message="La factura supera los $50.00, no puede ser emitida a CONSUMIDOR FINAL",u.value.customer_id.isValid=!1,t=!0),g.value.total>50&&r.value.forma_pago=="01"&&(u.value.forma_pago.message="La factura supera los $500.00, debes elegir otra forma de pago",u.value.forma_pago.isValid=!1,t=!0),w.value.length==0&&(t=!0,I("warning","Debes agregar algun producto..")),r.value.forma_pago.length==0&&(u.value.forma_pago.message="Debes elegir una forma de pago",u.value.forma_pago.isValid=!1,t=!0),w.value.forEach((e,a)=>{e.cantidad<=0&&(t=!0,I("warning",`Agrega una cantidad cantidad al producto: ${e.nombre} de la fila: ${a+1}`)),e.cantidad>e.stock&&e.tipo!="Servicio"&&(t=!0,I("warning",`La cantidad de venta del producto: ${e.nombre} supera su stock disponible`))}),t},$=async t=>{if(me())return;r.value={...r.value,...g.value,products:w.value,user_id:c.id,tipo:t,porcentaje_iva:z.value};let e;t=="EMISION"&&(e="\xBFDeseas emitir factura de esta proforma?"),t=="FACTURA"&&(e="\xBFDeseas generar esta FACTURA?"),t=="PROFORMA"&&(e="\xBFDeseas guardar como PROFORMA?"),Ie.create({title:e,ok:{push:!0,color:"cyan-10",label:"Enviar"},cancel:{push:!0,color:"blue-grey-6",label:"Cancelar"}}).onOk(async()=>{try{P.show({message:"Cargando..."});let a={headers:{sucursal_id:p.value}};await A.post("/invoices",r.value,a),P.hide(),I("positive","Venta realizada exitosamente"),le.push("/ventas")}catch(a){console.log(a),P.hide()}})},pe=()=>{if((c.roles[0]=="SUPER-ADMINISTRADOR"||c.roles[0]=="ADMINISTRADOR")&&typeof p.value=="undefined")return I("warning","Elige una sucursal primeramente");ae("venta")},J=async()=>{N.value=!0;let t={headers:{sucursal_id:p.value}};const{data:e}=await A.get("/CE/facturas/getNumFactura",t);r.value.numero_comprobante=e.numComprobante,N.value=!1};return ye(()=>{w.value=[]}),c.roles[0]=="SUPER-ADMINISTRADOR"||c.roles[0]=="ADMINISTRADOR"?ie(c.company.id):J(),de(),(t,e)=>(v(),k(Ae,null,[l("div",Me,[l("div",Pe,[l("div",{class:n(["col-xs-12 col-md-6",[t.$q.screen.width<1022?"q-pt-sm":""]])},[s(fe,{class:n(["row q-mr-xs",[t.$q.screen.width<1022?"justify-center q-pt-sm":"justify-start "]])},{default:o(()=>[s(E,{label:"Inicio",icon:"home",to:"/"}),s(E,{label:"Ventas",icon:"payments",to:"/ventas"}),s(E,{label:"Venta/Prof.",icon:"add_circle"})]),_:1},8,["class"])],2),l("div",{class:n(["col-xs-12 col-md-6",[t.$q.screen.width<1022?"text-center q-pt-sm":"text-right"]])},Qe,2)])]),l("div",Le,[l("div",{class:n(["col-xs-12 col-md-6 q-pt-xs q-mt-md",t.$q.screen.width>=1023||"text-center"])},[l("label",{class:n(["text-weight-medium",[t.$q.screen.xs?"text-subtitle1":"text-h5"]])},[h("Fecha de Emisi\xF3n: "),l("span",Be,m(i(re)),1)],2)],2),l("div",{class:n(["col-xs-12 col-md-6",t.$q.screen.width<=1023?"text-center q-pt-sm":"text-right q-pt-xs q-mt-md"])},[l("label",{class:n(["q-mr-lg text-weight-medium",[t.$q.screen.xs?"text-subtitle1":"text-h5"]])},[je,N.value?(v(),y(Ue,{key:0,color:"primary",class:"q-ml-md",size:"2em"})):(v(),k("span",ze,m(r.value.numero_comprobante),1))],2)],2),l("div",Ye,[Ke,s(Q,{color:"orange",filled:"",modelValue:r.value.customer_id,"onUpdate:modelValue":[e[1]||(e[1]=a=>r.value.customer_id=a),e[2]||(e[2]=a=>u.value.customer_id.isValid=!0)],options:b.value,"emit-value":"","map-options":"",dense:"",error:!u.value.customer_id.isValid,onFilter:ce,"use-input":"","input-debounce":"0"},we({error:o(()=>[l("label",{class:n(t.$q.dark.isActive?"text-red-4":"text-negative")},m(u.value.customer_id.message),3)]),"no-option":o(()=>[s(D,null,{default:o(()=>[s(O,{class:"text-grey"},{default:o(()=>[h(" No hay resultados ")]),_:1})]),_:1})]),_:2},[r.value.customer_id&&r.value.customer_id!=="CONSUMIDOR FINAL"?{name:"append",fn:o(()=>[s(R,{name:"cancel",onClick:e[0]||(e[0]=Ve(a=>r.value.customer_id="CONSUMIDOR FINAL",["stop","prevent"])),class:"cursor-pointer"})]),key:"0"}:void 0]),1032,["modelValue","options","error"])]),i(c).roles[0]=="SUPER-ADMINISTRADOR"||i(c).roles[0]=="ADMINISTRADOR"?(v(),k("div",{key:0,class:n(["col-xs-12 col-md-5 q-mt-md",t.$q.screen.width<=1023?"q-pl-none":"offset-1"])},[Je,s(Q,{filled:"",modelValue:i(p),"onUpdate:modelValue":[e[3]||(e[3]=a=>U(p)?p.value=a:null),e[4]||(e[4]=a=>(u.value.sucursal_id.isValid=!0,w.value=[]))],error:!u.value.sucursal_id.isValid,options:T.value,"emit-value":"","map-options":"",dense:""},{error:o(()=>[l("label",{class:n(t.$q.dark.isActive?"text-red-4":"text-negative")},m(u.value.sucursal_id.message),3)]),"no-option":o(()=>[s(D,null,{default:o(()=>[s(O,{class:"text-grey"},{default:o(()=>[h(" No se encontro sucursal ")]),_:1})]),_:1})]),_:1},8,["modelValue","error","options"])],2)):M("",!0)]),l("div",Ge,[l("div",Ze,[He,s(V,{outlined:"","bottom-slots":"",loading:i(W),dense:"",modelValue:i(_),"onUpdate:modelValue":e[6]||(e[6]=a=>U(_)?_.value=a:null),modelModifiers:{trim:!0},onKeyup:G(pe,["enter"])},{append:o(()=>[i(_)!==""?(v(),y(R,{key:0,name:"close",onClick:e[5]||(e[5]=a=>_.value=""),class:"cursor-pointer"})):M("",!0),s(R,{name:"search"})]),_:1},8,["loading","modelValue","onKeyup"])]),l("div",{class:n(["col-xs-12 col-sm-5",t.$q.screen.width<=1023?"q-pl-none q-mb-lg":"offset-1"])},[Xe,s(Q,{dense:"",modelValue:r.value.forma_pago,"onUpdate:modelValue":[e[7]||(e[7]=a=>r.value.forma_pago=a),e[8]||(e[8]=a=>u.value.forma_pago.isValid=!0)],modelModifiers:{trim:!0},filled:"","emit-value":"","map-options":"",error:!u.value.forma_pago.isValid,options:[{label:"SIN UTILIZACION DEL SISTEMA FINANCIERO",value:"01"},{label:"COMPENSACI\xD3N DE DEUDAS",value:"15"},{label:"TARJETA DE D\xC9BITO",value:"16"},{label:"DINERO ELECTR\xD3NICO",value:"17"},{label:"TARJETA PREPAGO",value:"18"},{label:"TARJETA DE CR\xC9DITO",value:"19"},{label:"OTROS CON UTILIZACI\xD3N DEL SISTEMA FINANCIERO",value:"20"},{label:"ENDOSO DE T\xCDTULOS",value:"21"}]},{error:o(()=>[l("label",{class:n(t.$q.dark.isActive?"text-red-4":"text-negative")},m(u.value.forma_pago.message),3)]),_:1},8,["modelValue","error"])],2)]),s(Oe,{onSubmit:e[13]||(e[13]=a=>$("EMISION"))},{default:o(()=>[l("div",We,[l("div",ea,[s(qe,{rows:i(w),columns:i(S),"row-key":"name",class:n([t.$q.dark.isActive?"":"my-sticky-header-table3"]),"hide-pagination":!0,"rows-per-page-options":[50]},{"no-data":o(({})=>[l("div",aa,[ta,s(R,{size:"2em",name:"playlist_add"})])]),"body-cell-cantidad":o(a=>[s(q,{props:a},{default:o(()=>[s(V,{"input-class":"resaltarTextoInput",dense:"",required:"",onChange:d=>i(j)(a.row,"ventas"),min:"0",max:a.row.stock,readonly:a.row.tipo=="Servicio",type:"number",style:{width:"100px"},modelValue:a.row.cantidad,"onUpdate:modelValue":d=>a.row.cantidad=d,modelModifiers:{trim:!0}},null,8,["onChange","max","readonly","modelValue","onUpdate:modelValue"])]),_:2},1032,["props"])]),"body-cell-descuento":o(a=>[s(q,{props:a},{default:o(()=>[s(V,{"input-class":"resaltarTextoInput",dense:"",required:"",onChange:d=>i(j)(a.row,"ventas"),min:"0",type:"number",style:{width:"100px"},modelValue:a.row.descuento,"onUpdate:modelValue":d=>a.row.descuento=d},null,8,["onChange","modelValue","onUpdate:modelValue"])]),_:2},1032,["props"])]),"body-cell-iva":o(a=>[s(q,{props:a},{default:o(()=>[h(m(a.row.aplicaIva?"SI":"NO"),1)]),_:2},1032,["props"])]),"body-cell-pvp":o(a=>[s(q,{props:a},{default:o(()=>[h(" $"+m(a.row.pvp)+" ",1),s(Se,{modelValue:a.row.pvp,"onUpdate:modelValue":d=>a.row.pvp=d},{default:o(d=>[s(V,{modelValue:d.value,"onUpdate:modelValue":ve=>d.value=ve,dense:"",autofocus:"",counter:"",onKeyup:G(d.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["props"])]),"body-cell-acciones":o(a=>[s(q,{props:a},{default:o(()=>[s(F,{round:"",color:"deep-orange",onClick:d=>i(te)(a.row.id),icon:"close",size:"8px"},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","class"])]),l("div",{class:n(["col-xs-12 col-sm-7 row items-center",t.$q.screen.width<=1023?"q-mt-lg q-mb-sm":""])},[la,l("div",sa,[s(V,{modelValue:r.value.descripcion,"onUpdate:modelValue":e[9]||(e[9]=a=>r.value.descripcion=a),filled:"",type:"textarea",rows:"4"},null,8,["modelValue"])])],2),l("div",oa,[l("table",{class:n([t.$q.screen.xs?"":"linearTablaDetalle"])},[l("tr",ra,[ia,l("td",na," $"+m(i(g).subtotal),1)]),l("tr",ua,[da,l("td",ca," $"+m(i(g).descuento),1)]),l("tr",ma,[pa,l("td",va," $"+m(i(g).subtotal-i(g).descuento),1)]),l("tr",fa,[l("td",null,[l("b",null,"IVA("+m(i(z))+"%):",1)]),l("td",ga," $"+m(i(g).iva),1)]),l("tr",_a,[ba,l("td",ha,[s(Ce,{outline:"",class:"text-subtitle1 text-weight-bold",color:"secondary",label:`$${i(g).total}`},null,8,["label"])])])],2)]),l("div",{class:n(["col-12 flex q-mt-md q-my-lg",[t.$q.screen.width<600?"justify-center":"justify-between"]])},[t.$q.screen.width>600?(v(),y(F,{key:0,icon:"arrow_back",onClick:e[10]||(e[10]=a=>t.$router.push("/ventas")),outline:"",rounded:"",class:"q-mr-lg",color:t.$q.dark.isActive?"blue-grey-2":"blue-grey-10"},{default:o(()=>[h(" \xA0 Regresar ")]),_:1},8,["color"])):M("",!0),t.$route.params.venta_id==""?(v(),y(De,{key:1,outline:"",rounded:"",style:{color:"#696cff"},label:"Generar",class:n(t.$q.screen.width>=1023?"q-px-xl":"full-width")},{default:o(()=>[s(Re,null,{default:o(()=>[Z((v(),y(D,{clickable:"",onClick:e[11]||(e[11]=a=>$("FACTURA"))},{default:o(()=>[s(O,null,{default:o(()=>[s(H,null,{default:o(()=>[h("FACTURA")]),_:1})]),_:1})]),_:1})),[[X]]),Z((v(),y(D,{type:"submit",clickable:"",onClick:e[12]||(e[12]=a=>$("PROFORMA"))},{default:o(()=>[s(O,null,{default:o(()=>[s(H,null,{default:o(()=>[h("PROFORMA")]),_:1})]),_:1})]),_:1})),[[X]])]),_:1})]),_:1},8,["class"])):(v(),y(F,{key:2,type:"submit",label:"Emitir Factura",class:n(t.$q.screen.width>=1023?"q-px-xl":"full-width"),outline:"",rounded:"",style:{color:"#696cff"}},null,8,["class"]))],2)])]),_:1}),s(xe,{modelValue:i(C),"onUpdate:modelValue":e[14]||(e[14]=a=>U(C)?C.value=a:null)},{default:o(()=>[s(Ee,{listProductos:i(ee),onAgregarProduct:ue},null,8,["listProductos"])]),_:1},8,["modelValue"])],64))}};export{Ma as default};
