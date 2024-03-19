import{d as ae,r as m,o,c as F,f as a,g as l,Q as D,h as b,e as r,i as V,O as S,v as z,ae as j,ad as i,aR as te,a9 as c,af as _,aV as se,aj as Z,ai as oe,aW as B,aa as w,ab as h}from"./index.77dc7136.js";import{Q as $}from"./QDate.960d3930.js";import{Q}from"./QPopupProxy.47fca37b.js";import{Q as re,a as C,b as ne}from"./QTable.75882cbb.js";import{Q as ie,a as U}from"./QTooltip.502c49c5.js";import{Q as G}from"./QSelect.ac3f44cf.js";import{Q as O}from"./QBadge.664dbf8a.js";import{Q as de}from"./QPageSticky.9122b839.js";import{C as q}from"./ClosePopup.48df6d9e.js";import{M as ue}from"./index.2065a85c.js";import{u as ce}from"./useRolPermisos.1aace9f8.js";import{u as W}from"./useHelpers.602f9f43.js";import{d as me}from"./date.0d1ca2c3.js";import{u as pe,a as fe}from"./use-quasar.75c84b60.js";import{_ as be}from"./DetalleProducts.045fd7e2.js";import{a as ye}from"./axios.9fd1c94c.js";import"./format.cbf00d5d.js";import"./QItemLabel.aaa628b9.js";import"./QList.18d45291.js";import"./QChip.ebe95b50.js";import"./QInnerLoading.6bab21da.js";const ge={class:"col-md-9 col-sm-8 flex items-center"},ve=r("label",null,"Filtrar Por:",-1),_e={class:"row items-center justify-end"},we=r("label",{class:"q-mx-md"},"HASTA:",-1),he={class:"row items-center justify-end"};ae({__name:"FiltrarVentas",props:{formFiltrarVentas:{}},setup(H){const p=H;pe(),m([]);const k=m(!1),{mostrarNotify:g}=W();console.log(p.formFiltrarVentas);const M=async()=>{if(p.formFiltrarVentas.desde!=""&&p.formFiltrarVentas.hasta==""||p.formFiltrarVentas.desde==""&&p.formFiltrarVentas.hasta!="")return g("warning","Completa los campos de fecha de busqueda");if(p.formFiltrarVentas.desde>p.formFiltrarVentas.hasta)return g("warning","Error en el rango de fecha de busqueda");k.value=!0;try{const{data:n}=await ye.post("/ventas/consulta",p.formFiltrarVentas)}catch(n){console.log(n)}k.value=!1},E={days:"Domingo_Lunes_Martes_Mi\xE9rcoles_Jueves_Viernes_S\xE1bado".split("_"),daysShort:"Dom_Lun_Mar_Mi\xE9_Jue_Vie_S\xE1b".split("_"),months:"Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split("_"),monthsShort:"Ene_Feb_Mar_Abr_May_Jun_Jul_Ago_Sep_Oct_Nov_Dic".split("_"),firstDayOfWeek:1,format24h:!0,pluralDay:"dias"};return(n,d)=>(o(),F("div",ge,[ve,a(D,{class:"q-ml-md",style:{width:"20%"},filled:"",modelValue:n.formFiltrarVentas.desde,"onUpdate:modelValue":d[1]||(d[1]=v=>n.formFiltrarVentas.desde=v),dense:"",mask:"date",clearable:"","clear-icon":"close"},{append:l(()=>[a(V,{name:"event",class:"cursor-pointer"},{default:l(()=>[a(Q,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:l(()=>[a($,{modelValue:n.formFiltrarVentas.desde,"onUpdate:modelValue":d[0]||(d[0]=v=>n.formFiltrarVentas.desde=v),locale:E},{default:l(()=>[r("div",_e,[S(a(b,{label:"Cerrar",color:"primary",flat:""},null,512),[[q]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),we,a(D,{filled:"",style:{width:"20%"},modelValue:n.formFiltrarVentas.hasta,"onUpdate:modelValue":d[3]||(d[3]=v=>n.formFiltrarVentas.hasta=v),dense:"",mask:"date",clearable:"","clear-icon":"close"},{append:l(()=>[a(V,{name:"event",class:"cursor-pointer"},{default:l(()=>[a(Q,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:l(()=>[a($,{modelValue:n.formFiltrarVentas.hasta,"onUpdate:modelValue":d[2]||(d[2]=v=>n.formFiltrarVentas.hasta=v),locale:E},{default:l(()=>[r("div",he,[S(a(b,{label:"Cerrar",color:"primary",flat:""},null,512),[[q]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(b,{round:"",color:"black",icon:"search",loading:k.value,class:"q-ml-md",onClick:M},null,8,["loading"])]))}});const Ve={class:"q-mx-lg q-pt-md"},ke={class:"row q-col-gutter-lg"},xe={class:"col-12"},Re=r("label",{class:"q-mr-sm row q-pt-sm"},[r("span",null,"Filtrar por fecha: ")],-1),Ce={class:"row items-center justify-end"},Se=r("label",{class:"q-mx-md q-pt-sm"},"Hasta",-1),qe={class:"row items-center justify-end"},Ie={key:0,class:"text-center row justify-center",style:{width:"100%"}},Ae=r("label",{class:"q-mb-sm text-grey-7 text-h6"}," Listado de Comprobantes ",-1),Oe=[Ae],Fe=r("label",{class:"q-mr-sm row items-center"},[r("span",null,"Tipo: ")],-1),De=r("label",{class:"q-mr-sm row items-center"},[r("span",null,"Por Sucursal: ")],-1),Ee={class:"full-width row flex-center text-lime-10 q-gutter-sm"},Te=r("span",{class:"text-subtitle1"}," No se encontr\xF3 ningun resultado ",-1),tl={__name:"IndexPage",setup(H){let p;const{api:k,claim:g}=W(),M=s=>{const t=new ue("http://205.235.6.108:80/socket.io/socket.io.js",{extraHeaders:{autentication:g.id}});p==null||p.removeAllListeners(),p=t.socket("/"),p.on("updateStateInvoice",()=>{y()})},E=[{name:"acciones",label:"acciones",align:"center"},{name:"sucursal",label:"Sucursal",align:"center"},{name:"num_comprobante",label:"Num. Comprobante",field:"numero_comprobante",align:"center"},{name:"usuario",label:"Usuario",align:"center"},{name:"cliente",label:"Cliente",align:"center"},{name:"f/h",label:"Fecha/Hora",align:"center",field:"created_at"},{name:"total",label:"Total",name:"total",align:"center"},{name:"estado",label:"Estado",field:"estado",align:"center"}],n=m(""),d=m(""),v=m([]),P=m(!1);m({desde:"",hasta:"",pv_id:""});const T=m("Todos"),I=m(""),J=m({}),A=m([]),R=m([]),{validarPermisos:L}=ce(),u=fe(),N=m(!1);z(T,(s,t)=>{y()});const y=async()=>{try{N.value=!0;let s={headers:{tipo:T.value,sucursal_id:R.value,desde:n.value,hasta:d.value}};const{data:t}=await k.get("/invoices",s);t.map(e=>e.created_at=me.formatDate(e.created_at,"DD/MM/YYYY HH:mm a")),v.value=t,N.value=!1}catch(s){console.log(s),N.value=!1}},K=async()=>{const{data:s}=await k.post("/invoices/download-comprobantes",{sucursal_id:R.value,desde:n.value,hasta:d.value},{responseType:"arraybuffer"}),t=new Blob([s],{type:"application/zip"}),e=document.createElement("a");e.href=window.URL.createObjectURL(t),e.download="facturas.zip",document.body.appendChild(e),e.click(),document.body.removeChild(e)},X=s=>{u.dialog({title:"<center>\xBFEstas seguro de anular esta factura?</center>",message:`<span style="display: block;width: 100%;display: flex;align-items: center;">
                  <strong style="display: inline-block;width: 40%;text-align: end;">
                    Num Comprobante:
                  </strong>
                  <label style="display: inline-block;width: 57%;" class="q-ml-xs">
                    ${s.numero_comprobante}
                  </label>
                </span>
              <span class='q-my-xs' style="display: block;width: 100%;display: flex;align-items: center;">
                <strong style="display: inline-block;width: 40%;text-align: end;">
                  Cliente:
                </strong>
                <label style="display: inline-block;width: 57%;" class="q-ml-xs">
                  ${s.customer_id.nombres}
                </label>
              </span>
              <span class='q-my-xs' style="display: block;width: 100%;display: flex;align-items: center;">
                <strong style="display: inline-block;width: 40%;text-align: end;">
                  Fecha/Hora:
                </strong>
                <label style="display: inline-block;width: 57%;" class="q-ml-xs">
                  ${s.created_at}
                </label>
              </span>
              <span style="display: block;width: 100%;display: flex;align-items: center;">
                <strong style="display: inline-block;width: 40%;text-align: end;">
                  Total:
                </strong>
                <label style="display: inline-block;width: 57%;" class="q-ml-xs">
                  $${s.total}
                </label>
              </span>`,html:!0,ok:{push:!0,label:"Anular",color:"teal-7"},cancel:{push:!0,color:"blue-grey-8",label:"Cancelar"}}).onOk(async()=>{try{u.loading.show({message:"Cargando, por favor espere..."}),await k.post("/CE/facturas/anularFactura",{factura:s}),u.loading.hide()}catch(t){console.log(t)}})};z(R,(s,t)=>{y()});const ee=async s=>{A.value=[];const{data:t}=await k.get(`/sucursal/find/${s}/company`);t.forEach(e=>{A.value.push({label:e.nombre,value:e.id})}),A.value.length!=0&&(R.value=A.value[0].value),y()};M(),z(I,(s,t)=>{y()}),g.roles[0]=="SUPER-ADMINISTRADOR"||g.roles[0]=="ADMINISTRADOR"?ee(g.company.id):y();const x=m("list"),le=m({rowsPerPage:10});return(s,t)=>(o(),F(Z,null,[r("div",Ve,[r("div",ke,[r("div",xe,[r("div",{class:j(["q-my-md",[i(u).screen.xs?"q-mb-md":"q-ml-lg"]]),style:{display:"flex"}},[Re,a(D,{outlined:"",dense:"",modelValue:n.value,"onUpdate:modelValue":t[2]||(t[2]=e=>n.value=e),mask:"date"},{append:l(()=>[n.value!==""?(o(),c(V,{key:0,name:"close",onClick:t[0]||(t[0]=e=>(n.value="",y())),class:"cursor-pointer"})):_("",!0),a(V,{name:"event",class:"cursor-pointer"},{default:l(()=>[a(Q,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:l(()=>[a($,{modelValue:n.value,"onUpdate:modelValue":[t[1]||(t[1]=e=>n.value=e),y]},{default:l(()=>[r("div",Ce,[S(a(b,{label:"Close",color:"primary",flat:""},null,512),[[q]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),Se,a(D,{outlined:"",dense:"",modelValue:d.value,"onUpdate:modelValue":t[5]||(t[5]=e=>d.value=e),mask:"date"},{append:l(()=>[d.value!==""?(o(),c(V,{key:0,name:"close",onClick:t[3]||(t[3]=e=>(d.value="",y())),class:"cursor-pointer"})):_("",!0),a(V,{name:"event",class:"cursor-pointer"},{default:l(()=>[a(Q,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:l(()=>[a($,{modelValue:d.value,"onUpdate:modelValue":[t[4]||(t[4]=e=>d.value=e),y]},{default:l(()=>[r("div",qe,[S(a(b,{onClick:y,label:"Close",color:"primary",flat:""},null,512),[[q]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(b,{onClick:K,class:"q-ml-lg q-px-sm",dense:"",outline:"",color:"primary","icon-right":"picture_as_pdf",style:{"margin-top":"2px"},label:"descargar facturas"})],2),a(te,{flat:"",class:"shadow_custom"},{default:l(()=>[a(re,{"title-class":"text-grey-7 text-h6",rows:v.value,loading:N.value,"hide-header":x.value==="grid",columns:E,"row-key":"name",grid:x.value==="grid",filter:I.value,pagination:le.value},{header:l(e=>[a(ie,{props:e,style:{height:"60px"}},{default:l(()=>[(o(!0),F(Z,null,oe(e.cols,f=>(o(),c(ne,{key:f.name,props:e,class:"text-grey-7 text-weight-bold text-uppercase",style:{"font-size":"13px"}},{default:l(()=>[w(h(f.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"top-left":l(e=>[i(u).screen.xs?(o(),F("div",Ie,Oe)):_("",!0),r("div",{style:B([{display:"flex"},!i(u).screen.xs||"width: 100%;justify-content: center;position: relative;right: 8px;"]),class:j([i(u).screen.xs?"q-mb-md":""])},[Fe,a(G,{outlined:"",dense:"",modelValue:T.value,"onUpdate:modelValue":t[6]||(t[6]=f=>T.value=f),"emit-value":"","map-options":"",options:[{label:"PROFORMAS",value:"PROFORMA"},{label:"TODOS",value:"TODOS"},{label:"FACTURAS",value:"FACTURAS"}]},null,8,["modelValue"])],6),i(g).roles[0]=="SUPER-ADMINISTRADOR"||i(g).roles[0]=="ADMINISTRADOR"?(o(),F("div",{key:1,style:B([!i(u).screen.xs||"width: 100%;justify-content: center;",{display:"flex"}]),class:j([i(u).screen.xs?"q-mb-md":"q-ml-lg"])},[De,a(G,{outlined:"",dense:"",modelValue:R.value,"onUpdate:modelValue":t[7]||(t[7]=f=>R.value=f),"emit-value":"","map-options":"",options:A.value},null,8,["modelValue","options"])],6)):_("",!0)]),"top-right":l(e=>[i(u).screen.width>=1023&&i(L)("crear.venta")?(o(),c(b,{key:0,onClick:t[8]||(t[8]=f=>s.$router.push("/ventas/add")),outline:"",color:"primary",label:"Agregar Venta",class:"q-mr-xs"})):_("",!0),a(D,{style:B(i(u).screen.width>700||"width: 70%"),outlined:"",dense:"",debounce:"300",modelValue:I.value,"onUpdate:modelValue":t[9]||(t[9]=f=>I.value=f),placeholder:"Buscar..."},{append:l(()=>[a(V,{name:"search"})]),_:1},8,["style","modelValue"]),x.value==="list"?(o(),c(b,{key:1,flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen",onClick:e.toggleFullscreen},{default:l(()=>[S((o(),c(U,{disable:i(u).platform.is.mobile},{default:l(()=>[w(h(e.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen"),1)]),_:2},1032,["disable"])),[[q]])]),_:2},1032,["icon","onClick"])):_("",!0),e.inFullscreen?_("",!0):(o(),c(b,{key:2,flat:"",round:"",dense:"",icon:x.value==="grid"?"list":"grid_on",onClick:t[10]||(t[10]=f=>{x.value=x.value==="grid"?"list":"grid",s.separator=x.value==="grid"?"none":"horizontal"})},{default:l(()=>[S((o(),c(U,{disable:i(u).platform.is.mobile},{default:l(()=>[w(h(x.value==="grid"?"List":"Grid"),1)]),_:1},8,["disable"])),[[q]])]),_:1},8,["icon"]))]),"body-cell-total":l(e=>[a(C,{props:e},{default:l(()=>[w(" $"+h(e.row.total),1)]),_:2},1032,["props"])]),"body-cell-cliente":l(e=>[a(C,{props:e},{default:l(()=>[w(h(e.row.customer_id.nombres),1)]),_:2},1032,["props"])]),"body-cell-sucursal":l(e=>[a(C,{props:e},{default:l(()=>[w(h(e.row.sucursal_id.nombre),1)]),_:2},1032,["props"])]),"body-cell-usuario":l(e=>[a(C,{props:e},{default:l(()=>[w(h(e.row.user_id.fullName),1)]),_:2},1032,["props"])]),"body-cell-estado":l(e=>[a(C,{props:e},{default:l(()=>[e.row.estadoSRI=="NO AUTORIZADO"||e.row.estadoSRI.trim()=="DEVUELTA"?(o(),c(O,{key:0,outline:"",class:"q-py-xs q-px-md",color:i(u).dark.isActive?"warning":"orange-10",label:e.row.estadoSRI},{default:l(()=>[a(U,{anchor:"center left",self:"center right",offset:[10,10],class:"blue-grey-9 text-subtitle2"},{default:l(()=>[w(h(e.row.respuestaSRI),1)]),_:2},1024)]),_:2},1032,["color","label"])):e.row.estadoSRI=="AUTORIZADO"?(o(),c(O,{key:1,outline:"",class:"q-py-xs q-px-md",color:"secondary",label:e.row.estadoSRI},null,8,["label"])):e.row.estadoSRI=="PROFORMA"?(o(),c(O,{key:2,outline:"",class:"q-py-xs q-px-md",color:i(u).dark.isActive?"blue-grey-3":"blue-grey-7",label:e.row.estadoSRI},null,8,["color","label"])):e.row.estadoSRI=="ANULADO"?(o(),c(O,{key:3,outline:"",class:"q-py-xs q-px-md",color:"red-4",label:e.row.estadoSRI},null,8,["label"])):(o(),c(O,{key:4,outline:"",class:"q-py-xs q-px-md",color:i(u).dark.isActive?"blue-grey-3":"blue-grey-7",label:e.row.estadoSRI},{default:l(()=>[a(U,{anchor:"center left",self:"center right",offset:[10,10],class:"blue-grey-9 text-subtitle2"},{default:l(()=>[w(h(e.row.respuestaSRI),1)]),_:2},1024)]),_:2},1032,["color","label"]))]),_:2},1032,["props"])]),"body-cell-acciones":l(e=>[a(C,{props:e},{default:l(()=>{var f;return[a(b,{round:"",color:"blue-grey",icon:"visibility",size:"10px",class:"q-mr-sm",onClick:Y=>(P.value=!0,J.value={...e.row})},null,8,["onClick"]),e.row.estadoSRI=="PROFORMA"||e.row.estadoSRI.trim()=="ERROR ENVIO RECEPCION"||e.row.estadoSRI.trim()=="ERROR ENVIO RECEPCION - ANULACION"||e.row.estadoSRI.trim()=="PENDIENTE"?(o(),c(b,{key:0,onClick:Y=>s.$router.push(`ventas/add/${e.row.id}`),round:"",color:"blue-grey",icon:"description",size:"10px",class:"q-mr-sm"},null,8,["onClick"])):_("",!0),e.row.customer_id.nombres!=="CONSUMIDOR FINAL"&&(e.row.estadoSRI=="AUTORIZADO"||((f=e.row.respuestaSRI)==null?void 0:f.includes("ERROR SECUENCIAL REGISTRADO")))&&i(L)("anular.venta")?(o(),c(b,{key:1,round:"",color:"blue-grey",onClick:Y=>X(e.row),icon:"close",size:"10px"},null,8,["onClick"])):_("",!0)]}),_:2},1032,["props"])]),"no-data":l(({icon:e})=>[r("div",Ee,[a(V,{size:"2em",name:"sentiment_dissatisfied"}),Te,a(V,{size:"2em",name:I.value?"filter_b_and_w":e},null,8,["name"])])]),_:1},8,["rows","loading","hide-header","grid","filter","pagination"])]),_:1})])])]),i(u).screen.width<=1023&&i(L)("crear.venta")?(o(),c(de,{key:0,position:"bottom-right",offset:[18,18]},{default:l(()=>[a(b,{round:"",color:"secondary",size:"lg",icon:"add",onClick:t[11]||(t[11]=e=>s.$router.push("/ventas/add"))})]),_:1})):_("",!0),a(se,{modelValue:P.value,"onUpdate:modelValue":t[12]||(t[12]=e=>P.value=e)},{default:l(()=>[a(be,{detalleData:J.value},null,8,["detalleData"])]),_:1},8,["modelValue"])],64))}};export{tl as default};
