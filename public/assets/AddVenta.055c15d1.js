import{Q as ye,a as Y}from"./QBreadcrumbs.7ae23304.js";import{p as f,m as te,bx as Se,by as qe,r as V,n as F,b3 as xe,Y as Ve,bb as Ae,z as ie,h as E,bz as ue,at as Ce,aH as Oe,bA as ke,v as ee,B as $e,i as L,s as De,aO as Ie,u as Ee,l as Be,x as Te,o as A,c as G,e as o,ac as b,f as n,g as r,a8 as I,a9 as x,ab as v,a7 as T,bB as Ne,aS as J,ad as W,br as oe,Q as P,aT as Re,ah as Me,bs as Pe,P as Z,w as Qe,N as se}from"./index.63602cd2.js";import{b as de,a as H,Q as z,c as ne}from"./QItemLabel.b338ce31.js";import{Q as X}from"./QSelect.eb6986f4.js";import{Q as Ue,a as Q}from"./QTable.fc3e737e.js";import{Q as Fe}from"./QBadge.3ad7d9bf.js";import{Q as Le}from"./QList.ad591dc3.js";import{Q as je}from"./QBtnGroup.c72eeeaa.js";import{Q as He}from"./QForm.3f67d641.js";import{C as re}from"./ClosePopup.4ff1d69f.js";import{a as U}from"./axios.22257619.js";import{u as ze}from"./useHelpers.d026a779.js";import{d as Ke}from"./date.c89e349e.js";import{u as Ye,_ as Ge}from"./SelectProduct.3b2b652f.js";import"./QChip.8319138a.js";import"./format.2bc25e5f.js";import"./use-quasar.37c9aa3a.js";import"./QInnerLoading.e6b9f461.js";const Je=[f("g",{transform:"translate(20 50)"},[f("rect",{x:"-10",y:"-30",width:"20",height:"60",fill:"currentColor",opacity:"0.6"},[f("animateTransform",{attributeName:"transform",type:"scale",from:"2",to:"1",begin:"0s",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keySplines:"0.1 0.9 0.4 1",keyTimes:"0;1",values:"2;1"})])]),f("g",{transform:"translate(50 50)"},[f("rect",{x:"-10",y:"-30",width:"20",height:"60",fill:"currentColor",opacity:"0.8"},[f("animateTransform",{attributeName:"transform",type:"scale",from:"2",to:"1",begin:"0.1s",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keySplines:"0.1 0.9 0.4 1",keyTimes:"0;1",values:"2;1"})])]),f("g",{transform:"translate(80 50)"},[f("rect",{x:"-10",y:"-30",width:"20",height:"60",fill:"currentColor",opacity:"0.9"},[f("animateTransform",{attributeName:"transform",type:"scale",from:"2",to:"1",begin:"0.2s",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keySplines:"0.1 0.9 0.4 1",keyTimes:"0;1",values:"2;1"})])])];var We=te({name:"QSpinnerFacebook",props:Se,setup(e){const{cSize:u,classes:i}=qe(e);return()=>f("svg",{class:i.value,width:u.value,height:u.value,viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid"},Je)}});function j(e,u=new WeakMap){if(Object(e)!==e)return e;if(u.has(e))return u.get(e);const i=e instanceof Date?new Date(e):e instanceof RegExp?new RegExp(e.source,e.flags):e instanceof Set?new Set:e instanceof Map?new Map:typeof e.constructor!="function"?Object.create(null):e.prototype!==void 0&&typeof e.prototype.constructor=="function"?e:new e.constructor;if(typeof e.constructor=="function"&&typeof e.valueOf=="function"){const d=e.valueOf();if(Object(d)!==d){const g=new e.constructor(d);return u.set(e,g),g}}return u.set(e,i),e instanceof Set?e.forEach(d=>{i.add(j(d,u))}):e instanceof Map&&e.forEach((d,g)=>{i.set(g,j(d,u))}),Object.assign(i,...Object.keys(e).map(d=>({[d]:j(e[d],u)})))}var Ze=te({name:"QPopupEdit",props:{modelValue:{required:!0},title:String,buttons:Boolean,labelSet:String,labelCancel:String,color:{type:String,default:"primary"},validate:{type:Function,default:()=>!0},autoSave:Boolean,cover:{type:Boolean,default:!0},disable:Boolean},emits:["update:modelValue","save","cancel","beforeShow","show","beforeHide","hide"],setup(e,{slots:u,emit:i}){const{proxy:d}=ie(),{$q:g}=d,p=V(null),q=V(""),c=V("");let $=!1;const N=F(()=>xe({initialValue:q.value,validate:e.validate,set:C,cancel:_,updatePosition:R},"value",()=>c.value,s=>{c.value=s}));function C(){e.validate(c.value)!==!1&&(D()===!0&&(i("save",c.value,q.value),i("update:modelValue",c.value)),S())}function _(){D()===!0&&i("cancel",c.value,q.value),S()}function R(){Ve(()=>{p.value.updatePosition()})}function D(){return Ae(c.value,q.value)===!1}function S(){$=!0,p.value.hide()}function h(){$=!1,q.value=j(e.modelValue),c.value=j(e.modelValue),i("beforeShow")}function O(){i("show")}function B(){$===!1&&D()===!0&&(e.autoSave===!0&&e.validate(c.value)===!0?(i("save",c.value,q.value),i("update:modelValue",c.value)):i("cancel",c.value,q.value)),i("beforeHide")}function M(){i("hide")}function k(){const s=u.default!==void 0?[].concat(u.default(N.value)):[];return e.title&&s.unshift(f("div",{class:"q-dialog__title q-mt-sm q-mb-sm"},e.title)),e.buttons===!0&&s.push(f("div",{class:"q-popup-edit__buttons row justify-center no-wrap"},[f(E,{flat:!0,color:e.color,label:e.labelCancel||g.lang.label.cancel,onClick:_}),f(E,{flat:!0,color:e.color,label:e.labelSet||g.lang.label.set,onClick:C})])),s}return Object.assign(d,{set:C,cancel:_,show(s){p.value!==null&&p.value.show(s)},hide(s){p.value!==null&&p.value.hide(s)},updatePosition:R}),()=>{if(e.disable!==!0)return f(de,{ref:p,class:"q-popup-edit",cover:e.cover,onBeforeShow:h,onShow:O,onBeforeHide:B,onHide:M,onEscapeKey:_},k)}}});const Xe=Object.keys(ue),et=e=>Xe.reduce((u,i)=>{const d=e[i];return d!==void 0&&(u[i]=d),u},{});var tt=te({name:"QBtnDropdown",props:{...ue,...Ce,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(e,{slots:u,emit:i}){const{proxy:d}=ie(),g=V(e.modelValue),p=V(null),q=Oe(),c=F(()=>{const s={"aria-expanded":g.value===!0?"true":"false","aria-haspopup":"true","aria-controls":q,"aria-label":e.toggleAriaLabel||d.$q.lang.label[g.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(s["aria-disabled"]="true"),s}),$=F(()=>"q-btn-dropdown__arrow"+(g.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),N=F(()=>ke(e)),C=F(()=>et(e));ee(()=>e.modelValue,s=>{p.value!==null&&p.value[s?"show":"hide"]()}),ee(()=>e.split,k);function _(s){g.value=!0,i("beforeShow",s)}function R(s){i("show",s),i("update:modelValue",!0)}function D(s){g.value=!1,i("beforeHide",s)}function S(s){i("hide",s),i("update:modelValue",!1)}function h(s){i("click",s)}function O(s){Ie(s),k(),i("click",s)}function B(s){p.value!==null&&p.value.toggle(s)}function M(s){p.value!==null&&p.value.show(s)}function k(s){p.value!==null&&p.value.hide(s)}return Object.assign(d,{show:M,hide:k,toggle:B}),$e(()=>{e.modelValue===!0&&M()}),()=>{const s=[f(L,{class:$.value,name:e.dropdownIcon||d.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&s.push(f(de,{ref:p,id:q,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:_,onShow:R,onBeforeHide:D,onHide:S},u.default)),e.split===!1?f(E,{class:"q-btn-dropdown q-btn-dropdown--simple",...C.value,...c.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:h},{default:()=>De(u.label,[]).concat(s),loading:u.loading}):f(je,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...N.value,glossy:e.glossy,stretch:e.stretch},()=>[f(E,{class:"q-btn-dropdown--current",...C.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:O},{default:u.label,loading:u.loading}),f(E,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...c.value,...N.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>s)])}}});const at={class:"q-ma-lg q-pt-md q-mb-none",style:{"margin-bottom":"10px"}},lt={class:"row q-col-gutter-lg"},ot=o("label",{class:"text-h6 text-center"},"Nueva Venta/Proforma",-1),st=[ot],nt={class:"row q-mx-lg q-col-gutter-md"},rt={class:"text-weight-regular"},it=o("span",{class:"q-mr-sm"},"N\xB0 Factura:",-1),ut={key:1,class:"text-weight-regular"},dt={class:"col-xs-12 col-sm-12 col-md-6 q-mt-md q-pl-none"},ct=o("label",null,"Seleccionar Cliente: ",-1),mt=o("label",null,"Seleccionar Sucursal: ",-1),ft={class:"row q-pt-lg q-mx-lg q-col-gutter-md"},vt={class:"col-xs-12 col-md-6 q-pl-none"},pt=o("label",null,"Filtrar por codigo de barra o nombre del producto:",-1),gt=o("label",null,"Forma de pago:",-1),bt={class:"row q-mx-lg justify-center q-mt-md"},_t={class:"col-12"},ht={class:"full-width row flex-center text-lime-10 q-gutter-sm"},wt=o("span",{class:"text-subtitle1"}," Agrega alg\xFAn Producto ",-1),yt=o("div",{class:"col-3 text-right"},[o("label",{class:"q-pr-md"},"Descripci\xF3n")],-1),St={class:"col-9"},qt={class:"col-xs-12 col-sm-5",style:{display:"flex","justify-content":"end"}},xt={class:"text-right"},Vt=o("td",null,[o("b",null,"TOTAL BRUTO:")],-1),At={style:{width:"50px"},class:"text-subtitle1 text-weight-regular"},Ct={class:"text-right"},Ot=o("td",null,[o("b",null,"DESCUENTOS:")],-1),kt={style:{width:"50px"},class:"text-subtitle1 text-weight-regular"},$t={class:"text-right"},Dt=o("td",null,[o("b",null,"SUBTOTAL:")],-1),It={style:{width:"50px"},class:"text-subtitle1 text-weight-regular"},Et={class:"text-right"},Bt=o("td",null,[o("b",null,"IVA(12%):")],-1),Tt={style:{width:"50px"},class:"text-subtitle1 text-weight-regular"},Nt={class:"text-right"},Rt=o("td",null,[o("b",null,"TOTAL DE VENTA:")],-1),Mt={style:{width:"50px"}},la={__name:"AddVenta",setup(e){const{filterByCodBarra:u,columns:i,rows:d,modalSelectProducto:g,loadingState:p,listProductos:q,valorFactura:c,agregarAndValidarStock:$,filterArticulo:N,getSubtotalByProduct:C,sucursal_selected:_,quitarArticulo:R}=Ye();let D=[];const S=V([]),{claim:h,mostrarNotify:O}=ze(),B=V([]),M=V(!1),k=V(!1),s=Date.now();let ce=Ke.formatDate(s,"DD/MM/YYYY");(h.roles[0]!=="Super-Administrador"||h.roles[0]!=="Administrador")&&(_.value=h.sucursales[0]);const me=Ee(),ae=Be();i.value[7]={name:"pvp",label:"Precio de Venta",align:"center"};const m=V({customer_id:"386f5a32-7c96-4a51-8f50-86ea8338325b",numero_comprobante:"--- --- ---------",products:[],user_id:"",forma_pago:"",descripcion:""}),w=V({customer_id:{message:"",isValid:!0},sucursal_id:{message:"",isValid:!0},forma_pago:{message:"",isValid:!0}});ee(_,(l,t)=>{le()});const fe=async l=>{B.value=[];const{data:t}=await U.get(`/sucursal/find/${l}/company`);t.forEach(a=>{B.value.push({label:a.nombre,value:a.id})})},ve=async()=>{if(ae.params.venta_id!==""){const{data:l}=await U.get(`/invoices/filterInvoice/${ae.params.venta_id}`);m.value.customer_id=l.customer_id.id,m.value.id=l.id,m.value.clave_acceso=l.clave_acceso,m.value.estadoSRI=l.estadoSRI,_.value=l.sucursal_id.id,l.invoiceToProduct.forEach(t=>{t.product_id.cantidad=t.cantidad,t.product_id.descuento=parseFloat(t.descuento),t.product_id.v_total=t.v_total,$(t.product_id,"proforma")})}},pe=l=>{$(l,"venta"),g.value=!1},ge=async()=>{const l=m.value.customer_id;m.value.customer_id="",M.value=!1;try{const{data:t}=await U.get("/customers");S.value=[],t.forEach(a=>{S.value.push({label:a.nombres,value:a.id,num_doc:a.numero_documento})}),S.value.unshift({label:"CONSUMIDOR FINAL",value:"386f5a32-7c96-4a51-8f50-86ea8338325b",num_doc:"9999999999999"}),D=S.value,m.value.customer_id=l,ve()}catch(t){console.log(t)}},be=(l="",t)=>{if(l==="")return t(()=>{S.value=D});t(()=>{const a=l.toLowerCase();S.value=S.value.filter(y=>y.num_doc.indexOf(a)>-1||y.label.toLowerCase().indexOf(a)>-1)})},_e=()=>{let l=!1;return(h.roles[0]=="Super-Administrador"||h.roles[0]=="Administrador")&&_.value==""&&(w.value.sucursal_id.message="Debes seleccionar una sucursal",w.value.sucursal_id.isValid=!1,l=!0),c.value.total>50&&m.value.customer_id=="386f5a32-7c96-4a51-8f50-86ea8338325b"&&(w.value.customer_id.message="La factura supera los $50.00, no puede ser emitida a CONSUMIDOR FINAL",w.value.customer_id.isValid=!1,l=!0),c.value.total>50&&m.value.forma_pago=="01"&&(w.value.forma_pago.message="La factura supera los $500.00, debes elegir otra forma de pago",w.value.forma_pago.isValid=!1,l=!0),d.value.length==0&&(l=!0,O("warning","Debes agregar algun producto..")),m.value.forma_pago.length==0&&(w.value.forma_pago.message="Debes elegir una forma de pago",w.value.forma_pago.isValid=!1,l=!0),d.value.forEach((t,a)=>{t.cantidad<=0&&(l=!0,O("warning",`Agrega una cantidad cantidad al producto: ${t.nombre} de la fila: ${a+1}`)),t.cantidad>t.stock&&t.tipo!="Servicio"&&(l=!0,O("warning",`La cantidad de venta del producto: ${t.nombre} supera su stock disponible`))}),l},K=async l=>{if(_e())return;m.value={...m.value,...c.value,products:d.value,user_id:h.id,tipo:l};let t;l=="EMISION"&&(t="\xBFDeseas emitir factura de esta proforma?"),l=="FACTURA"&&(t="\xBFDeseas generar esta FACTURA?"),l=="PROFORMA"&&(t="\xBFDeseas guardar como PROFORMA?"),Pe.create({title:t,ok:{push:!0,color:"cyan-10",label:"Enviar"},cancel:{push:!0,color:"blue-grey-6",label:"Cancelar"}}).onOk(async()=>{try{Z.show({message:"Cargando..."});let a={headers:{sucursal_id:_.value}};await U.post("/invoices",m.value,a),Z.hide(),O("positive","Venta realizada exitosamente"),me.push("/ventas")}catch(a){console.log(a),Z.hide()}})},he=()=>{if((h.roles[0]=="Super-Administrador"||h.roles[0]=="Administrador")&&typeof _.value=="undefined")return O("warning","Elige una sucursal primeramente");N("venta")},le=async()=>{k.value=!0;let l={headers:{sucursal_id:_.value}};const{data:t}=await U.get("/CE/facturas/getNumFactura",l);m.value.numero_comprobante=t.numComprobante,k.value=!1};return Te(()=>{d.value=[]}),h.roles[0]=="Super-Administrador"||h.roles[0]=="Administrador"?fe(h.company.id):le(),ge(),(l,t)=>(A(),G(Me,null,[o("div",at,[o("div",lt,[o("div",{class:b(["col-xs-12 col-md-6",[l.$q.screen.width<1022?"q-pt-sm":""]])},[n(ye,{class:b(["row q-mr-xs",[l.$q.screen.width<1022?"justify-center q-pt-sm":"justify-start "]])},{default:r(()=>[n(Y,{label:"Inicio",icon:"home",to:"/"}),n(Y,{label:"Ventas",icon:"payments",to:"/ventas"}),n(Y,{label:"Venta/Prof.",icon:"add_circle"})]),_:1},8,["class"])],2),o("div",{class:b(["col-xs-12 col-md-6",[l.$q.screen.width<1022?"text-center q-pt-sm":"text-right"]])},st,2)])]),o("div",nt,[o("div",{class:b(["col-xs-12 col-md-6 q-pt-xs q-mt-md",l.$q.screen.width>=1023||"text-center"])},[o("label",{class:b(["text-weight-medium",[l.$q.screen.xs?"text-subtitle1":"text-h5"]])},[I("Fecha de Emisi\xF3n: "),o("span",rt,x(v(ce)),1)],2)],2),o("div",{class:b(["col-xs-12 col-md-6",l.$q.screen.width<=1023?"text-center q-pt-sm":"text-right q-pt-xs q-mt-md"])},[o("label",{class:b(["q-mr-lg text-weight-medium",[l.$q.screen.xs?"text-subtitle1":"text-h5"]])},[it,k.value?(A(),T(We,{key:0,color:"primary",class:"q-ml-md",size:"2em"})):(A(),G("span",ut,x(m.value.numero_comprobante),1))],2)],2),o("div",dt,[ct,n(X,{color:"orange",filled:"",modelValue:m.value.customer_id,"onUpdate:modelValue":[t[1]||(t[1]=a=>m.value.customer_id=a),t[2]||(t[2]=a=>w.value.customer_id.isValid=!0)],options:S.value,"emit-value":"","map-options":"",dense:"",error:!w.value.customer_id.isValid,onFilter:be,"use-input":"","input-debounce":"0"},Ne({error:r(()=>[o("label",{class:b(l.$q.dark.isActive?"text-red-4":"text-negative")},x(w.value.customer_id.message),3)]),"no-option":r(()=>[n(H,null,{default:r(()=>[n(z,{class:"text-grey"},{default:r(()=>[I(" No hay resultados ")]),_:1})]),_:1})]),_:2},[m.value.customer_id&&m.value.customer_id!=="CONSUMIDOR FINAL"?{name:"append",fn:r(()=>[n(L,{name:"cancel",onClick:t[0]||(t[0]=Qe(a=>m.value.customer_id="CONSUMIDOR FINAL",["stop","prevent"])),class:"cursor-pointer"})]),key:"0"}:void 0]),1032,["modelValue","options","error"])]),v(h).roles[0]=="Super-Administrador"||v(h).roles[0]=="Administrador"?(A(),G("div",{key:0,class:b(["col-xs-12 col-md-5 q-mt-md",l.$q.screen.width<=1023?"q-pl-none":"offset-1"])},[mt,n(X,{filled:"",modelValue:v(_),"onUpdate:modelValue":[t[3]||(t[3]=a=>J(_)?_.value=a:null),t[4]||(t[4]=a=>(w.value.sucursal_id.isValid=!0,d.value=[]))],error:!w.value.sucursal_id.isValid,options:B.value,"emit-value":"","map-options":"",dense:""},{error:r(()=>[o("label",{class:b(l.$q.dark.isActive?"text-red-4":"text-negative")},x(w.value.sucursal_id.message),3)]),"no-option":r(()=>[n(H,null,{default:r(()=>[n(z,{class:"text-grey"},{default:r(()=>[I(" No se encontro sucursal ")]),_:1})]),_:1})]),_:1},8,["modelValue","error","options"])],2)):W("",!0)]),o("div",ft,[o("div",vt,[pt,n(P,{outlined:"","bottom-slots":"",loading:v(p),dense:"",modelValue:v(u),"onUpdate:modelValue":t[6]||(t[6]=a=>J(u)?u.value=a:null),modelModifiers:{trim:!0},onKeyup:oe(he,["enter"])},{append:r(()=>[v(u)!==""?(A(),T(L,{key:0,name:"close",onClick:t[5]||(t[5]=a=>u.value=""),class:"cursor-pointer"})):W("",!0),n(L,{name:"search"})]),_:1},8,["loading","modelValue","onKeyup"])]),o("div",{class:b(["col-xs-12 col-sm-5",l.$q.screen.width<=1023?"q-pl-none q-mb-lg":"offset-1"])},[gt,n(X,{dense:"",modelValue:m.value.forma_pago,"onUpdate:modelValue":[t[7]||(t[7]=a=>m.value.forma_pago=a),t[8]||(t[8]=a=>w.value.forma_pago.isValid=!0)],modelModifiers:{trim:!0},filled:"","emit-value":"","map-options":"",error:!w.value.forma_pago.isValid,options:[{label:"SIN UTILIZACION DEL SISTEMA FINANCIERO",value:"01"},{label:"COMPENSACI\xD3N DE DEUDAS",value:"15"},{label:"TARJETA DE D\xC9BITO",value:"16"},{label:"DINERO ELECTR\xD3NICO",value:"17"},{label:"TARJETA PREPAGO",value:"18"},{label:"TARJETA DE CR\xC9DITO",value:"19"},{label:"OTROS CON UTILIZACI\xD3N DEL SISTEMA FINANCIERO",value:"20"},{label:"ENDOSO DE T\xCDTULOS",value:"21"}]},{error:r(()=>[o("label",{class:b(l.$q.dark.isActive?"text-red-4":"text-negative")},x(w.value.forma_pago.message),3)]),_:1},8,["modelValue","error"])],2)]),n(He,{onSubmit:t[13]||(t[13]=a=>K("EMISION"))},{default:r(()=>[o("div",bt,[o("div",_t,[n(Ue,{rows:v(d),columns:v(i),"row-key":"name",class:b([l.$q.dark.isActive?"":"my-sticky-header-table3"]),"hide-pagination":!0,"rows-per-page-options":[50]},{"no-data":r(({})=>[o("div",ht,[wt,n(L,{size:"2em",name:"playlist_add"})])]),"body-cell-cantidad":r(a=>[n(Q,{props:a},{default:r(()=>[n(P,{"input-class":"resaltarTextoInput",dense:"",required:"",onChange:y=>v(C)(a.row,"ventas"),min:"0",max:a.row.stock,readonly:a.row.tipo=="Servicio",type:"number",style:{width:"100px"},modelValue:a.row.cantidad,"onUpdate:modelValue":y=>a.row.cantidad=y,modelModifiers:{trim:!0}},null,8,["onChange","max","readonly","modelValue","onUpdate:modelValue"])]),_:2},1032,["props"])]),"body-cell-descuento":r(a=>[n(Q,{props:a},{default:r(()=>[n(P,{"input-class":"resaltarTextoInput",dense:"",required:"",onChange:y=>v(C)(a.row,"ventas"),min:"0",type:"number",style:{width:"100px"},modelValue:a.row.descuento,"onUpdate:modelValue":y=>a.row.descuento=y},null,8,["onChange","modelValue","onUpdate:modelValue"])]),_:2},1032,["props"])]),"body-cell-iva":r(a=>[n(Q,{props:a},{default:r(()=>[I(x(a.row.aplicaIva?"SI":"NO"),1)]),_:2},1032,["props"])]),"body-cell-pvp":r(a=>[n(Q,{props:a},{default:r(()=>[I(" $"+x(a.row.pvp)+" ",1),n(Ze,{modelValue:a.row.pvp,"onUpdate:modelValue":y=>a.row.pvp=y},{default:r(y=>[n(P,{modelValue:y.value,"onUpdate:modelValue":we=>y.value=we,dense:"",autofocus:"",counter:"",onKeyup:oe(y.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["props"])]),"body-cell-acciones":r(a=>[n(Q,{props:a},{default:r(()=>[n(E,{round:"",color:"deep-orange",onClick:y=>v(R)(a.row.id),icon:"close",size:"8px"},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","class"])]),o("div",{class:b(["col-xs-12 col-sm-7 row items-center",l.$q.screen.width<=1023?"q-mt-lg q-mb-sm":""])},[yt,o("div",St,[n(P,{modelValue:m.value.descripcion,"onUpdate:modelValue":t[9]||(t[9]=a=>m.value.descripcion=a),filled:"",type:"textarea",rows:"4"},null,8,["modelValue"])])],2),o("div",qt,[o("table",{class:b([l.$q.screen.xs?"":"linearTablaDetalle"])},[o("tr",xt,[Vt,o("td",At," $"+x(v(c).subtotal),1)]),o("tr",Ct,[Ot,o("td",kt," $"+x(v(c).descuento),1)]),o("tr",$t,[Dt,o("td",It," $"+x(v(c).subtotal-v(c).descuento),1)]),o("tr",Et,[Bt,o("td",Tt," $"+x(v(c).iva),1)]),o("tr",Nt,[Rt,o("td",Mt,[n(Fe,{outline:"",class:"text-subtitle1 text-weight-bold",color:"secondary",label:`$${v(c).total}`},null,8,["label"])])])],2)]),o("div",{class:b(["col-12 flex q-mt-md q-my-lg",[l.$q.screen.width<600?"justify-center":"justify-between"]])},[l.$q.screen.width>600?(A(),T(E,{key:0,icon:"arrow_back",onClick:t[10]||(t[10]=a=>l.$router.push("/ventas")),outline:"",rounded:"",class:"q-mr-lg",color:l.$q.dark.isActive?"blue-grey-2":"blue-grey-10"},{default:r(()=>[I(" \xA0 Regresar ")]),_:1},8,["color"])):W("",!0),l.$route.params.venta_id==""?(A(),T(tt,{key:1,outline:"",rounded:"",style:{color:"#696cff"},label:"Generar",class:b(l.$q.screen.width>=1023?"q-px-xl":"full-width")},{default:r(()=>[n(Le,null,{default:r(()=>[se((A(),T(H,{clickable:"",onClick:t[11]||(t[11]=a=>K("FACTURA"))},{default:r(()=>[n(z,null,{default:r(()=>[n(ne,null,{default:r(()=>[I("FACTURA")]),_:1})]),_:1})]),_:1})),[[re]]),se((A(),T(H,{type:"submit",clickable:"",onClick:t[12]||(t[12]=a=>K("PROFORMA"))},{default:r(()=>[n(z,null,{default:r(()=>[n(ne,null,{default:r(()=>[I("PROFORMA")]),_:1})]),_:1})]),_:1})),[[re]])]),_:1})]),_:1},8,["class"])):(A(),T(E,{key:2,type:"submit",label:"Emitir Factura",class:b(l.$q.screen.width>=1023?"q-px-xl":"full-width"),outline:"",rounded:"",style:{color:"#696cff"}},null,8,["class"]))],2)])]),_:1}),n(Re,{modelValue:v(g),"onUpdate:modelValue":t[14]||(t[14]=a=>J(g)?g.value=a:null)},{default:r(()=>[n(Ge,{listProductos:v(q),onAgregarProduct:pe},null,8,["listProductos"])]),_:1},8,["modelValue"])],64))}};export{la as default};
