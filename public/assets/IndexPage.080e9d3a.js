import{r as i,v as T,o as r,c as w,e as a,ae as y,ad as o,f as t,g as s,Q as R,h as f,af as m,aU as G,a9 as p,aj as F,i as V,O as Q,ai as Z,bc as S,aa as I,ab as P}from"./index.29f4c737.js";import{Q as U}from"./QDate.2b3ac4b2.js";import{Q as O}from"./QPopupProxy.91dfaa01.js";import{Q as J}from"./QInnerLoading.1dedf0d2.js";import{Q as K,a as W}from"./QTable.1092949f.js";import{Q as X,a as N}from"./QTooltip.a739d047.js";import{Q as $}from"./QSelect.af5c5eb7.js";import{Q as Y}from"./QPageSticky.2c2573af.js";import{C}from"./ClosePopup.7003054d.js";import{M as ee}from"./index.2065a85c.js";import{u as le}from"./useRolPermisos.4acb3ca2.js";import{u as ae}from"./useHelpers.c99bee56.js";import{a as se}from"./use-quasar.a55b1bc0.js";import"./date.39b202c1.js";import"./format.32e8bea4.js";import"./QList.735afe1b.js";import"./axios.dda82ddd.js";const te={class:"q-mx-lg q-pt-md"},oe={class:"row q-col-gutter-lg"},ne={style:{display:"flex"}},re={class:"col-xs-12 col-sm-3"},ie={class:"q-mr-sm row q-pt-sm justify-center"},de={class:"col-xs-10 col-sm-4"},ue={class:"row items-center justify-end"},ce={class:"col-xs-12 col-sm-1 flex flex-center"},me={class:"col-xs-10 col-sm-4"},pe={class:"row items-center justify-end"},ve={key:0,class:"flex flex-center"},fe={class:"col-12 q-pt-none"},ge={key:0,class:"text-center row justify-center",style:{width:"100%"}},_e=a("label",{class:"q-mb-sm text-grey-7 text-h6"}," Listado de Comprobantes ",-1),xe=[_e],ye=a("label",{class:"q-mr-sm row items-center"},[a("span",null,"Tipo: ")],-1),be=a("label",{class:"q-mr-sm row items-center"},[a("span",null,"Por Sucursal: ")],-1),he=a("div",{class:"full-width row flex-center text-lime-10 q-gutter-sm"},[a("span",{class:"text-subtitle1"}," No se encontr\xF3 ningun resultado ")],-1),Me={__name:"IndexPage",setup(we){let b;const{api:j,claim:g,route:Ve}=ae(),M=()=>{const u=new ee("http://205.235.6.149:3000/socket.io/socket.io.js",{extraHeaders:{autentication:g.id}});b==null||b.removeAllListeners(),b=u.socket("/"),b.on("updateStateInvoice",async()=>{await d()})},z=[{name:"acciones",label:"acciones",align:"center"},{name:"sucursal",label:"Sucursal",align:"center"},{name:"num_comprobante",label:"Num. Comprobante",field:"numero_comprobante",align:"center"},{name:"usuario",label:"Usuario",align:"center"},{name:"cliente",label:"Cliente",align:"center"},{name:"f/h",label:"Fecha/Hora",align:"center",field:"created_at"},{name:"total",label:"Total",name:"total",align:"center"},{name:"estado",label:"Estado",field:"estado",align:"center"}],_=i(""),x=i(""),B=i([]);i({desde:"",hasta:"",pv_id:""});const A=i("Todos"),k=i("");i({});const h=i([]),q=i([]);i({});const{validarPermisos:D}=le(),n=se(),E=i(!1),d=()=>{console.log("get ventas")};T(A,(u,e)=>{d()}),T(q,(u,e)=>{d()});const L=async u=>{h.value=[];const{data:e}=await j.get(`/sucursal/find/${u}/company`);e.forEach(l=>{h.value.push({label:l.nombre,value:l.id})}),h.value.length!=0&&(q.value=h.value[0].value),d()};M(),T(k,(u,e)=>{d()}),g.roles[0]=="SUPER-ADMINISTRADOR"||g.roles[0]=="ADMINISTRADOR"?L(g.company.id):d();const v=i("list"),H=i({rowsPerPage:10});return(u,e)=>(r(),w(F,null,[a("div",te,[a("div",oe,[a("div",ne,[a("div",{style:{display:"flex"},class:y([o(n).screen.xs?"q-mb-md q-mt-none q-pt-xs":"q-ml-lg q-pl-none q-my-md"])},[a("div",{class:y(["row",[o(n).screen.xs?"flex-center":""]])},[a("div",re,[a("label",ie,[a("span",{class:y([o(n).screen.xs?"text-weight-bold":""])}," Filtrar por fecha: ",2)])]),a("div",de,[t(R,{outlined:"",dense:"",modelValue:_.value,"onUpdate:modelValue":e[2]||(e[2]=l=>_.value=l),mask:"date"},{append:s(()=>[_.value!==""?(r(),p(V,{key:0,name:"close",onClick:e[0]||(e[0]=l=>(_.value="",d())),class:"cursor-pointer"})):m("",!0),t(V,{name:"event",class:"cursor-pointer"},{default:s(()=>[t(O,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:s(()=>[t(U,{modelValue:_.value,"onUpdate:modelValue":[e[1]||(e[1]=l=>_.value=l),d]},{default:s(()=>[a("div",ue,[Q(t(f,{label:"Close",color:"primary",flat:""},null,512),[[C]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),a("div",ce,[a("label",{class:y(["q-mx-md",[o(n).screen.xs?"text-weight-medium":""]])}," Hasta ",2)]),a("div",me,[t(R,{outlined:"",dense:"",modelValue:x.value,"onUpdate:modelValue":e[5]||(e[5]=l=>x.value=l),mask:"date"},{append:s(()=>[x.value!==""?(r(),p(V,{key:0,name:"close",onClick:e[3]||(e[3]=l=>(x.value="",d())),class:"cursor-pointer"})):m("",!0),t(V,{name:"event",class:"cursor-pointer"},{default:s(()=>[t(O,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:s(()=>[t(U,{modelValue:x.value,"onUpdate:modelValue":[e[4]||(e[4]=l=>x.value=l),d]},{default:s(()=>[a("div",pe,[Q(t(f,{onClick:d,label:"Close",color:"primary",flat:""},null,512),[[C]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])],2)],2),o(n).screen.width>=935?(r(),w("div",ve,[t(f,{class:"q-ml-lg q-px-sm",dense:"",outline:"",color:"primary","icon-right":"picture_as_pdf",style:{"margin-top":"2px"},label:"descargar facturas"})])):m("",!0)]),a("div",fe,[t(G,{flat:"",class:"shadow_custom"},{default:s(()=>[t(K,{"title-class":"text-grey-7 text-h6",rows:B.value,"hide-header":v.value==="grid",loading:E.value,columns:z,"row-key":"name",grid:v.value==="grid",filter:k.value,pagination:H.value},{loading:s(()=>[t(J,{showing:"",color:"primary"})]),header:s(l=>[t(X,{props:l,style:{height:"60px"}},{default:s(()=>[(r(!0),w(F,null,Z(l.cols,c=>(r(),p(W,{key:c.name,props:l,class:"text-grey-7 text-weight-bold text-uppercase",style:{"font-size":"13px"}},{default:s(()=>[I(P(c.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"top-left":s(l=>[o(n).screen.xs?(r(),w("div",ge,xe)):m("",!0),a("div",{style:S([{display:"flex"},!o(n).screen.xs||"width: 100%;justify-content: center;position: relative;right: 8px;"]),class:y([o(n).screen.xs?"q-mb-md":""])},[ye,t($,{outlined:"",dense:"",modelValue:A.value,"onUpdate:modelValue":e[6]||(e[6]=c=>A.value=c),"emit-value":"","map-options":"",options:[{label:"Todos",value:"TODOS"},{label:"Proformas",value:"PROFORMA"},{label:"Facturas",value:"FACTURAS"},{label:"Facturas Anuladas",value:"ANULADO"},{label:"Facturas Autorizadas",value:"AUTORIZADO"}]},null,8,["modelValue"])],6),o(g).roles[0]=="SUPER-ADMINISTRADOR"||o(g).roles[0]=="ADMINISTRADOR"?(r(),w("div",{key:1,style:S([!o(n).screen.xs||"width: 100%;justify-content: center;",{display:"flex"}]),class:y([o(n).screen.xs?"q-mb-md":"q-ml-lg"])},[be,t($,{outlined:"",dense:"",modelValue:q.value,"onUpdate:modelValue":e[7]||(e[7]=c=>q.value=c),"emit-value":"","map-options":"",options:h.value},null,8,["modelValue","options"])],6)):m("",!0)]),"top-right":s(l=>[o(n).screen.width>=1023&&o(D)("crear.venta")?(r(),p(f,{key:0,onClick:e[8]||(e[8]=c=>u.$router.push({name:"add.retencion"})),outline:"",color:"primary",label:"Agregar Retenci\xF3n",class:"q-mr-xs"})):m("",!0),t(R,{style:S(o(n).screen.width>700||"width: 70%"),outlined:"",dense:"",debounce:"300",modelValue:k.value,"onUpdate:modelValue":e[9]||(e[9]=c=>k.value=c),placeholder:"Buscar..."},{append:s(()=>[t(V,{name:"search"})]),_:1},8,["style","modelValue"]),v.value==="list"?(r(),p(f,{key:1,flat:"",round:"",dense:"",icon:l.inFullscreen?"fullscreen_exit":"fullscreen",onClick:l.toggleFullscreen},{default:s(()=>[Q((r(),p(N,{disable:o(n).platform.is.mobile},{default:s(()=>[I(P(l.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen"),1)]),_:2},1032,["disable"])),[[C]])]),_:2},1032,["icon","onClick"])):m("",!0),l.inFullscreen?m("",!0):(r(),p(f,{key:2,flat:"",round:"",dense:"",icon:v.value==="grid"?"list":"grid_on",onClick:e[10]||(e[10]=c=>{v.value=v.value==="grid"?"list":"grid",u.separator=v.value==="grid"?"none":"horizontal"})},{default:s(()=>[Q((r(),p(N,{disable:o(n).platform.is.mobile},{default:s(()=>[I(P(v.value==="grid"?"List":"Grid"),1)]),_:1},8,["disable"])),[[C]])]),_:1},8,["icon"]))]),"no-data":s(({icon:l})=>[he]),_:1},8,["rows","hide-header","loading","grid","filter","pagination"])]),_:1})])])]),o(n).screen.width<=1023&&o(D)("crear.venta")?(r(),p(Y,{key:0,position:"bottom-right",offset:[18,18]},{default:s(()=>[t(f,{round:"",color:"secondary",size:"lg",icon:"add",onClick:e[11]||(e[11]=l=>u.$router.push("/ventas/add"))})]),_:1})):m("",!0)],64))}};export{Me as default};
