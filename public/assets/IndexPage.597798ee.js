import{Q as E,a as q,b as U}from"./QTable.75882cbb.js";import{Q as O,a as N}from"./QTooltip.502c49c5.js";import{Q as M}from"./QSelect.ac3f44cf.js";import{d as L,r as i,v as j,o as r,c as x,e as m,f as t,g as s,aR as H,ad as o,a9 as c,af as g,aV as G,aj as R,ai as W,ae as J,h as f,Q as K,aW as X,i as $,O as T,aa as A,ab as V,aU as Y}from"./index.77dc7136.js";import{Q as Z}from"./QBadge.664dbf8a.js";import{Q as ee}from"./QPageSticky.9122b839.js";import{C as I}from"./ClosePopup.48df6d9e.js";import{u as ae}from"./useRolPermisos.1aace9f8.js";import{u as le}from"./useHelpers.602f9f43.js";import{a as se}from"./use-quasar.75c84b60.js";import{_ as te}from"./DetalleProducts.045fd7e2.js";import"./QList.18d45291.js";import"./QItemLabel.aaa628b9.js";import"./QChip.ebe95b50.js";import"./format.cbf00d5d.js";import"./axios.9fd1c94c.js";import"./QInnerLoading.6bab21da.js";const oe={class:"q-ma-lg q-pt-md"},re={class:"row q-col-gutter-lg"},ne={class:"col-12"},ie={key:0,class:"text-center row justify-center",style:{width:"100%"}},ue=m("label",{class:"q-mb-sm text-grey-7 text-h6"}," Listado de Compras ",-1),de=[ue],ce=m("label",{class:"q-mr-sm row items-center"},[m("span",null,"Sucursal: ")],-1),me={class:"full-width row flex-center text-lime-10 q-gutter-sm"},ge=m("span",{class:"text-subtitle1"}," No se encontr\xF3 ningun resultado ",-1),Ne=L({__name:"IndexPage",setup(pe){const P=[{name:"acciones",label:"acciones",align:"center"},{name:"sucursal",label:"Sucursal",align:"center",field:"sucursal_name"},{name:"num_comprobante",label:"Num Comprobante",field:"numero_comprobante",align:"center"},{name:"usuario",label:"Usuario",align:"center",field:"user_name"},{name:"proveedor",label:"Proveedor",align:"center",field:"proveedor_name"},{name:"fecha",label:"Fecha Compra",align:"center",field:"fecha_compra"},{name:"total",label:"Total",field:"total",align:"center"},{name:"estado",label:"Estado",field:"estado",align:"center"}],D=i([]),C=i(!1);let b=i({});i({desde:"",hasta:"",pv_id:""});const v=i(""),{validarPermisos:k}=ae(),{api:Q,claim:y,mostrarNotify:S}=le(),u=se(),p=i(!1),h=i(""),_=i([]),w=async()=>{try{p.value=!0,_.value.length==0&&await z();let l={headers:{sucursal_id:h.value}};const{data:a}=await Q.get("/buys",l);a.map(e=>{e.fecha_compra=e.fecha_compra,e.sucursal_name=e.sucursal_id.nombre,e.proveedor_name=e.proveedor_id.razon_social,e.user_name=e.user_id.fullName,e.total=`$${e.total}`}),D.value=a,p.value=!1}catch(l){console.log(l),p.value=!1}},F=l=>{u.dialog({title:"<center>\xBFEstas seguro de anular esta compra?</center>",message:`<span><strong>Num Comprobante</strong>: ${l.numero_comprobante}</span> <br>
              <span class='q-my-lg'><strong>Proveedor</strong>: ${l.proveedor_name}</span> <br>
              <span class='q-my-lg'><strong>Fecha/Hora</strong>: ${l.fecha_compra}</span> <br>
              <span><strong>Total</strong>: ${l.total}</span> <br>`,html:!0,ok:{push:!0,label:"Anular",color:"teal-7"},cancel:{push:!0,color:"blue-grey-8",label:"Cancelar"}}).onOk(async()=>{try{u.loading.show({message:"Cargando..."}),await Q.delete(`/buys/${l.id}`),S("positive","Compra Anulada exitosamente"),w(),u.loading.hide()}catch(a){console.log(a)}})},z=async()=>{p.value=!0;try{const{data:l}=await Q.get("/sucursal");l.forEach(a=>{_.value.push({label:a.nombre,value:a.id})}),_.value.length!==0&&(h.value=_.value[0].value)}catch(l){S("warning",l.response.data.message)}p.value=!1};w(),j(v,(l,a)=>{w()});const d=i("list"),B=i({rowsPerPage:10});return(l,a)=>(r(),x(R,null,[m("div",oe,[m("div",re,[m("div",ne,[t(H,{flat:"",class:"shadow_custom"},{default:s(()=>[t(E,{"title-class":"text-grey-7 text-h6",rows:D.value,loading:p.value,"hide-header":d.value==="grid",columns:P,"row-key":"name",grid:d.value==="grid",filter:v.value,pagination:B.value},{header:s(e=>[t(O,{props:e,style:{height:"60px"}},{default:s(()=>[(r(!0),x(R,null,W(e.cols,n=>(r(),c(U,{key:n.name,props:e,class:"text-grey-7 text-weight-bold text-uppercase",style:{"font-size":"13px"}},{default:s(()=>[A(V(n.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"top-left":s(e=>[o(y).roles[0]!=="SUPER-ADMINISTRADOR"&&o(y).roles[0]!=="ADMINISTRADOR"?(r(),x("div",ie,de)):g("",!0),o(y).roles[0]=="SUPER-ADMINISTRADOR"||o(y).roles[0]=="ADMINISTRADOR"?(r(),x("div",{key:1,style:{display:"flex"},class:J([o(u).screen.xs?"q-mb-md":""])},[ce,t(M,{outlined:"",dense:"",modelValue:h.value,"onUpdate:modelValue":[a[0]||(a[0]=n=>h.value=n),a[1]||(a[1]=n=>w())],"emit-value":"","map-options":"",options:_.value},null,8,["modelValue","options"])],2)):g("",!0)]),"top-right":s(e=>[!o(u).screen.xs&&o(k)("crear.compra")?(r(),c(f,{key:0,onClick:a[2]||(a[2]=n=>l.$router.push("/compras/add")),outline:"",color:"primary",label:"Agregar Compra",class:"q-mr-xs"})):g("",!0),t(K,{style:X(o(u).screen.width>700||"width: 70%"),outlined:"",dense:"",debounce:"300",modelValue:v.value,"onUpdate:modelValue":a[3]||(a[3]=n=>v.value=n),placeholder:"Buscar..."},{append:s(()=>[t($,{name:"search"})]),_:1},8,["style","modelValue"]),d.value==="list"?(r(),c(f,{key:1,flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen",onClick:e.toggleFullscreen},{default:s(()=>[T((r(),c(N,{disable:o(u).platform.is.mobile},{default:s(()=>[A(V(e.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen"),1)]),_:2},1032,["disable"])),[[I]])]),_:2},1032,["icon","onClick"])):g("",!0),e.inFullscreen?g("",!0):(r(),c(f,{key:2,flat:"",round:"",dense:"",icon:d.value==="grid"?"list":"grid_on",onClick:a[4]||(a[4]=n=>{d.value=d.value==="grid"?"list":"grid",l.separator=d.value==="grid"?"none":"horizontal"})},{default:s(()=>[T((r(),c(N,{disable:o(u).platform.is.mobile},{default:s(()=>[A(V(d.value==="grid"?"List":"Grid"),1)]),_:1},8,["disable"])),[[I]])]),_:1},8,["icon"]))]),"body-cell-estado":s(e=>[t(q,{props:e},{default:s(()=>[t(Z,{outline:"",class:"q-py-xs q-px-md",color:e.row.isActive?"secondary":"negative",label:e.row.isActive?"Aceptado":"Anulado"},null,8,["color","label"])]),_:2},1032,["props"])]),"body-cell-acciones":s(e=>[t(q,{props:e},{default:s(()=>[t(f,{round:"",color:"blue-grey",icon:"visibility",class:"q-mr-sm",onClick:n=>(C.value=!0,Y(b)?b.value={...e.row}:b={...e.row}),size:"10px"},null,8,["onClick"]),e.row.isActive&&o(k)("anular.compra")?(r(),c(f,{key:0,round:"",color:"blue-grey",onClick:n=>F(e.row),icon:"close",size:"10px"},null,8,["onClick"])):g("",!0)]),_:2},1032,["props"])]),"no-data":s(({icon:e})=>[m("div",me,[t($,{size:"2em",name:"sentiment_dissatisfied"}),ge,t($,{size:"2em",name:v.value?"filter_b_and_w":e},null,8,["name"])])]),_:1},8,["rows","loading","hide-header","grid","filter","pagination"])]),_:1})])])]),o(u).screen.xs&&o(k)("crear.compra")?(r(),c(ee,{key:0,position:"bottom-right",offset:[18,18]},{default:s(()=>[t(f,{round:"",color:"secondary",size:"lg",icon:"add",onClick:a[5]||(a[5]=e=>l.$router.push("/compras/add"))})]),_:1})):g("",!0),t(G,{modelValue:C.value,"onUpdate:modelValue":a[6]||(a[6]=e=>C.value=e)},{default:s(()=>[t(te,{detalleData:o(b)},null,8,["detalleData"])]),_:1},8,["modelValue"])],64))}});export{Ne as default};
