import{Q as z,a as w,b as B,c as S}from"./QTable.4623bfd2.js";import{Q as U,a as C}from"./QTooltip.8de217d5.js";import{d as E,r as i,a as I,C as Y,o as s,c as Q,e as p,f as o,g as t,aN as L,af as _,ab as u,ah as g,aR as H,ak as $,aj as M,h as c,Q as O,i as h,O as F,ac as y,ad as x}from"./index.9a69bdf9.js";import{Q as R}from"./QPageSticky.ba34640d.js";import{C as V}from"./ClosePopup.d29d88a9.js";import{api as q}from"./axios.1a9376d4.js";import{u as j,_ as G}from"./DetalleProducts.013ad689.js";import{u as J}from"./useHelpers.110a86a1.js";import{d as K}from"./date.b2c910a6.js";import{u as W}from"./use-quasar.882813a0.js";import{u as X}from"./auth-user.5eae0586.js";import"./QList.565596f8.js";import"./QSelect.d1e92d92.js";import"./QChip.cdeb0aad.js";import"./QItemLabel.a344fdf0.js";import"./format.2bc25e5f.js";import"./QInnerLoading.798657ea.js";const Z={class:"q-ma-lg q-pt-md"},ee={class:"row q-col-gutter-lg"},ae={class:"col-12"},le={class:"full-width row flex-center text-lime-10 q-gutter-sm"},te=p("span",{class:"text-subtitle1"}," No se encontr\xF3 ningun resultado ",-1),ke=E({__name:"IndexPage",setup(oe){const D=[{name:"acciones",label:"acciones",align:"center"},{name:"sucursal",label:"Sucursal",align:"center",field:"sucursal_name"},{name:"num_comprobante",label:"Num Comprobante",field:"numero_comprobante",align:"center"},{name:"usuario",label:"Usuario",align:"center",field:"user_name"},{name:"proveedor",label:"Proveedor",align:"center",field:"proveedor_name"},{name:"fecha",label:"Fecha Compra",align:"center",field:"fecha_compra"},{name:"total",label:"Total",field:"total",align:"center"},{name:"estado",label:"Estado",field:"estado",align:"center"}],k=i([]),v=i(!1);i({desde:"",hasta:"",pv_id:""});const m=i("");i({}),j();const{mostrarNotify:N}=J(),d=W(),A=X(),f=i(!1);I.read(A.token);const b=async()=>{try{f.value=!0;const{data:l}=await q.get("/buys");l.map(e=>{e.fecha_compra=K.formatDate(e.fecha_compra,"DD/MM/YYYY"),e.sucursal_name=e.sucursal_id.nombre,e.proveedor_name=e.proveedor_id.razon_social,e.user_name=e.user_id.fullName,e.total=`$${e.total}`}),k.value=l,f.value=!1}catch(l){console.log(l),f.value=!1}},P=l=>{d.dialog({title:"<center>\xBFEstas Seguro de anular esta compra?</center>",message:`<span><strong>Num Comprobante</strong>: ${l.num_comprobante}</span> <br>
              <span class='q-my-lg'><strong>Proveedor</strong>: ${l.proveedor}</span> <br>
              <span class='q-my-lg'><strong>Fecha/Hora</strong>: ${l.fecha}</span> <br>
              <span><strong>Total</strong>: $${l.total.toFixed(2)}</span> <br>`,html:!0,ok:{push:!0,label:"Anular",color:"teal-7"},cancel:{push:!0,color:"blue-grey-8",label:"Cancelar"}}).onOk(async()=>{try{d.loading.show({message:"Cargando..."}),await q.put(`/compras/${l.id}`),N("positive","Factura Anulada exitosamente"),b(),d.loading.hide()}catch(e){console.log(e)}})};b(),Y(m,(l,e)=>{b()});const r=i("list"),T=i({rowsPerPage:10});return(l,e)=>(s(),Q($,null,[p("div",Z,[p("div",ee,[p("div",ae,[o(L,{flat:"",class:"shadow_custom"},{default:t(()=>[o(z,{"title-class":"text-grey-7 text-h6",title:"Listado de Compras",rows:k.value,loading:f.value,"hide-header":r.value==="grid",columns:D,"row-key":"name",grid:r.value==="grid",filter:m.value,pagination:T.value},{header:t(a=>[o(U,{props:a,style:{height:"60px"}},{default:t(()=>[(s(!0),Q($,null,M(a.cols,n=>(s(),u(S,{key:n.name,props:a,class:"text-grey-7 text-weight-bold text-uppercase",style:{"font-size":"13px"}},{default:t(()=>[y(x(n.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"top-right":t(a=>[_(d).screen.xs?g("",!0):(s(),u(c,{key:0,onClick:e[0]||(e[0]=n=>l.$router.push("/compras/add")),outline:"",color:"primary",label:"Agregar Compra",class:"q-mr-xs"})),o(O,{outlined:"",dense:"",debounce:"300",modelValue:m.value,"onUpdate:modelValue":e[1]||(e[1]=n=>m.value=n),placeholder:"Buscar..."},{append:t(()=>[o(h,{name:"search"})]),_:1},8,["modelValue"]),r.value==="list"?(s(),u(c,{key:1,flat:"",round:"",dense:"",icon:a.inFullscreen?"fullscreen_exit":"fullscreen",onClick:a.toggleFullscreen},{default:t(()=>[F((s(),u(C,{disable:_(d).platform.is.mobile},{default:t(()=>[y(x(a.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen"),1)]),_:2},1032,["disable"])),[[V]])]),_:2},1032,["icon","onClick"])):g("",!0),a.inFullscreen?g("",!0):(s(),u(c,{key:2,flat:"",round:"",dense:"",icon:r.value==="grid"?"list":"grid_on",onClick:e[2]||(e[2]=n=>{r.value=r.value==="grid"?"list":"grid",l.separator=r.value==="grid"?"none":"horizontal"})},{default:t(()=>[F((s(),u(C,{disable:_(d).platform.is.mobile},{default:t(()=>[y(x(r.value==="grid"?"List":"Grid"),1)]),_:1},8,["disable"])),[[V]])]),_:1},8,["icon"]))]),"body-cell-estado":t(a=>[o(w,{props:a},{default:t(()=>[o(B,{outline:"",class:"q-py-xs q-px-md",color:a.row.isActive?"secondary":"negative",label:a.row.isActive?"Aceptado":"Anulado"},null,8,["color","label"])]),_:2},1032,["props"])]),"body-cell-acciones":t(a=>[o(w,{props:a},{default:t(()=>[o(c,{round:"",color:"blue-grey",icon:"visibility",class:"q-mr-sm",onClick:n=>(v.value=!0,l.detalleData={...a.row}),size:"10px"},null,8,["onClick"]),a.row.isActive?(s(),u(c,{key:0,round:"",color:"blue-grey",onClick:n=>P(a.row),icon:"close",size:"10px"},null,8,["onClick"])):g("",!0)]),_:2},1032,["props"])]),"no-data":t(({icon:a})=>[p("div",le,[o(h,{size:"2em",name:"sentiment_dissatisfied"}),te,o(h,{size:"2em",name:m.value?"filter_b_and_w":a},null,8,["name"])])]),_:1},8,["rows","loading","hide-header","grid","filter","pagination"])]),_:1})])])]),_(d).screen.xs?(s(),u(R,{key:0,position:"bottom-right",offset:[18,18]},{default:t(()=>[o(c,{round:"",color:"secondary",size:"lg",icon:"add",onClick:e[3]||(e[3]=a=>l.$router.push("/compras/add"))})]),_:1})):g("",!0),o(H,{modelValue:v.value,"onUpdate:modelValue":e[4]||(e[4]=a=>v.value=a)},{default:t(()=>[o(G,{detalleData:l.detalleData},null,8,["detalleData"])]),_:1},8,["modelValue"])],64))}});export{ke as default};