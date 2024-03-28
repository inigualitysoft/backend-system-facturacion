import{Q as Y,a as x,c as ee,b as te}from"./QTable.9df74c75.js";import{Q as oe,a as U}from"./QTooltip.73d904aa.js";import{Q as ae}from"./QSelect.1ef953d4.js";import{r as y,v as se,C as le,o as s,c as m,e as i,f as r,g as l,aU as re,a9 as n,af as c,aj as $,ai as ne,ad as E,ae as ie,h as u,Q as de,aZ as D,i as N,O as S,aa as z,ab as A}from"./index.1eb79b9c.js";import{Q as C}from"./QBadge.a5f7ee3f.js";import{Q as ce}from"./QPageSticky.009c7164.js";import{C as L}from"./ClosePopup.dfa4db61.js";import{a as F}from"./axios.a2ad1f31.js";import{u as ue}from"./useHelpers.33b51013.js";import{u as me}from"./useRedIpv4.dc9d5d0a.js";import{u as pe}from"./useCliente.a389c5a7.js";import"./QList.c5a11a96.js";import"./format.694d017e.js";import"./use-quasar.36cfd852.js";import"./date.41a4d1c4.js";const ge={class:"q-ma-lg q-pt-md"},fe={class:"row q-col-gutter-lg"},ve={class:"col-12"},ye=i("label",{class:"q-mr-sm row items-center"},[i("span",null,"Router: ")],-1),be={key:1,class:"text-center row justify-center",style:{width:"100%"}},he=i("label",{class:"q-mb-sm text-grey-7 text-h6"}," Redes IPv4 ",-1),we=[he],ke={class:"absolute-full flex justify-around"},_e={class:"full-width row flex-center text-lime-10 q-gutter-sm"},Ie=i("span",{class:"text-subtitle1"}," No se encontr\xF3 ningun Resultado ",-1),De={__name:"IndexPage",setup($e){const{obtenerListaSubred:M,groupedIpsByRed:Ce}=pe(),G=[{name:"acciones",label:"acciones",align:"center"},{align:"center",label:"Nombre",field:"nombre",name:"nombre"},{align:"center",label:"Red",field:"red",name:"red"},{align:"center",label:"Uso IPS",field:"uso_ips",name:"uso_ips"},{align:"center",label:"CIDR",name:"cidr",field:"cidr"},{align:"center",label:"Router",field:"router_name",name:"router_name"},{name:"estado",label:"Estado",align:"center",field:"estado"}],b=y("");let{listRouter:k,cargarRouter:H}=me();const{mostrarNotify:P,confirmDelete:O,isDeleted:Z}=ue(),_=y(""),V=y([]),q=y(!1),j=[],J=o=>{const[a,e]=o.split("/"),t=parseInt(e,10);function p(Q){return Q.split(".").reduce((B,R)=>(B<<8)+parseInt(R,10),0)}function g(Q){return Array.from({length:4},(B,R)=>Q>>8*(3-R)&255).join(".")}const f=p(a),v=(1<<32-t)-1,h=g(f&~v),w=g(f|v);return{rangoInicio:h,rangoFin:w}},K=(o,a,e)=>{function t(v){return v.split(".").reduce((h,w)=>(h<<8)+parseInt(w,10),0)}const p=t(o),g=t(a),f=t(e);return p>=g&&p<=f},I=async()=>{q.value=!0;try{let o={headers:{router_id:b.value}};(await F.get(`/customers/get-ips/${b.value}`)).data.forEach(t=>{j.push(t.ipv4)});const{data:e}=await F.get("/red-ipv4",o);e.forEach(t=>{t.router_name=t.router_id.nombre,t.cidr=t.cidr.split(" ")[0];const p=M(`${t.red}/${t.cidr}`);t.totalIps=p.length-2;const{rangoInicio:g,rangoFin:f}=J(`${t.red}/${t.cidr}`),v=j.filter(w=>K(w,g,f));t.totalIpsUsadas=v.length;const h=Math.floor(t.totalIpsUsadas*100/t.totalIps*100)/100/100;t.porcentaje=h}),V.value=e}catch(o){P("warning",o.response.data.message)}q.value=!1},T=async(o,a)=>{try{const{data:{msg:e}}=await F.patch(`/red-ipv4/${o}/${a}`);P("positive",e),I()}catch(e){console.log(e)}};se(Z,(o,a)=>{o&&I()});const W=async o=>{try{O("Estas seguro de eliminar esta red IPv4?",`/red-ipv4/${o}`)}catch(a){console.log(a)}};le(async()=>{await H(),k.value.length>0&&(b.value=k.value[0].value),I()});const d=y("list"),X=y({rowsPerPage:10});return(o,a)=>(s(),m($,null,[i("div",ge,[i("div",fe,[i("div",ve,[r(re,{flat:"",class:"shadow_custom"},{default:l(()=>[r(Y,{"title-class":"text-grey-7 text-h6",title:"Redes IPv4",rows:V.value,loading:q.value,"hide-header":d.value==="grid",columns:G,"row-key":"name",grid:d.value==="grid",filter:_.value,pagination:X.value},{header:l(e=>[r(oe,{props:e,style:{height:"60px"}},{default:l(()=>[(s(!0),m($,null,ne(e.cols,t=>(s(),n(te,{key:t.name,props:e,class:"text-grey-7 text-weight-bold text-uppercase",style:{"font-size":"13px"}},{default:l(()=>[z(A(t.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"top-left":l(e=>[E(k).length>1?(s(),m("div",{key:0,style:{display:"flex"},class:ie([o.$q.screen.xs?"q-mb-md":""])},[ye,r(ae,{outlined:"",dense:"",modelValue:b.value,"onUpdate:modelValue":[a[0]||(a[0]=t=>b.value=t),I],"emit-value":"","map-options":"",options:E(k)},null,8,["modelValue","options"])],2)):(s(),m("div",be,we))]),"top-right":l(e=>[o.$q.screen.xs?c("",!0):(s(),n(u,{key:0,onClick:a[1]||(a[1]=t=>o.$router.push({name:"redesIpv4.add"})),outline:"",color:"primary",label:"Nuevo",class:"q-mr-xs"})),r(de,{style:D(o.$q.screen.width>700||"width: 70%"),outlined:"",dense:"",debounce:"300",modelValue:_.value,"onUpdate:modelValue":a[2]||(a[2]=t=>_.value=t),placeholder:"Buscar..."},{append:l(()=>[r(N,{name:"search"})]),_:1},8,["style","modelValue"]),d.value==="list"?(s(),n(u,{key:1,flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen",onClick:e.toggleFullscreen},{default:l(()=>[S((s(),n(U,{disable:o.$q.platform.is.mobile},{default:l(()=>[z(A(e.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen"),1)]),_:2},1032,["disable"])),[[L]])]),_:2},1032,["icon","onClick"])):c("",!0),e.inFullscreen?c("",!0):(s(),n(u,{key:2,flat:"",round:"",dense:"",icon:d.value==="grid"?"list":"grid_on",onClick:a[3]||(a[3]=t=>{d.value=d.value==="grid"?"list":"grid",o.separator=d.value==="grid"?"none":"horizontal"})},{default:l(()=>[S((s(),n(U,{disable:o.$q.platform.is.mobile},{default:l(()=>[z(A(d.value==="grid"?"List":"Grid"),1)]),_:1},8,["disable"])),[[L]])]),_:1},8,["icon"]))]),"body-cell-uso_ips":l(e=>[r(x,{props:e},{default:l(()=>[(s(),m("div",{key:0,style:D(o.$q.screen.xs?"min-width: 180px;":"min-width: 140px;")},[r(ee,{stripe:"",rounded:"",size:"25px",value:e.row.porcentaje,color:"cyan-9"},{default:l(()=>[i("div",ke,[r(C,{color:"transparent",class:"text-weight-bold","text-color":o.$q.dark.isActive?"grey-3":"grey-9",label:(e.row.porcentaje*100).toFixed(2)+"%"},null,8,["text-color","label"]),r(C,{color:"transparent",class:"text-weight-bolder","text-color":o.$q.dark.isActive?"grey-3":"grey-9",label:`(${e.row.totalIpsUsadas} de ${e.row.totalIps})`},null,8,["text-color","label"])])]),_:2},1032,["value"])],4))]),_:2},1032,["props"])]),"body-cell-estado":l(e=>[r(x,{props:e},{default:l(()=>[e.row.isActive?(s(),n(C,{key:0,outline:"",color:"positive",label:"Activo",class:"q-pa-sm"})):(s(),n(C,{key:1,outline:"",color:"red",label:"Inactivo",class:"q-pa-sm"}))]),_:2},1032,["props"])]),"body-cell-acciones":l(e=>[r(x,{props:e},{default:l(()=>[e.row.isActive?(s(),n(u,{key:0,round:"",color:"blue-grey",onClick:t=>o.$router.push({name:"redesIpv4.edit",params:{id:e.row.id}}),icon:"edit",class:"q-mr-sm",size:"10px"},null,8,["onClick"])):c("",!0),e.row.isActive?(s(),m($,{key:1},[e.row.isActive?(s(),n(u,{key:0,round:"",color:"blue-grey",icon:"close",onClick:t=>T(e.row.id,!1),size:"10px"},null,8,["onClick"])):c("",!0)],64)):(s(),m($,{key:2},[e.row.isActive?c("",!0):(s(),n(u,{key:0,round:"",color:"blue-grey",icon:"done",onClick:t=>T(e.row.id,!0),size:"10px"},null,8,["onClick"])),e.row.isActive?c("",!0):(s(),n(u,{key:1,round:"",color:"blue-grey",class:"q-ml-sm",icon:"delete",onClick:t=>W(e.row.id),size:"10px"},null,8,["onClick"]))],64))]),_:2},1032,["props"])]),"no-data":l(({icon:e})=>[i("div",_e,[r(N,{size:"2em",name:"sentiment_dissatisfied"}),Ie,r(N,{size:"2em",name:_.value?"filter_b_and_w":e},null,8,["name"])])]),_:1},8,["rows","loading","hide-header","grid","filter","pagination"])]),_:1})])])]),o.$q.screen.xs?(s(),n(ce,{key:0,position:"bottom-right",offset:[18,18]},{default:l(()=>[r(u,{round:"",color:"secondary",size:"lg",icon:"add",onClick:a[4]||(a[4]=e=>o.$router.push({name:"redesIpv4.add"}))})]),_:1})):c("",!0)],64))}};export{De as default};
