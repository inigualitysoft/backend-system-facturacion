import{Q as L,a as _,b as G}from"./QTable.d2338979.js";import{Q as H,a as A}from"./QTooltip.af196135.js";import{Q as J}from"./QSelect.598c9ca3.js";import{r as f,D as K,o as t,c as n,e as d,f as i,g as s,aP as M,a7 as r,ad as u,ah as v,ag as S,ab as k,ac as O,aS as W,h as m,Q as X,aU as Y,i as x,R as B,a8 as C,a9 as q}from"./index.0d55ca8e.js";import{Q as $}from"./QBadge.9538e355.js";import{Q as Z}from"./QPageSticky.a0467408.js";import{C as D}from"./ClosePopup.eed3576d.js";import{api as Q}from"./axios.c95232b4.js";import{u as ee}from"./useHelpers.40c7f7f5.js";import{u as te}from"./useNap.515c2ec6.js";import"./QList.773fb7d8.js";import"./QItemLabel.18d31e41.js";import"./QChip.b0f7efb8.js";import"./format.2bc25e5f.js";import"./use-quasar.d0cdced1.js";const ae={class:"q-ma-lg q-pt-md"},le={class:"row q-col-gutter-lg"},se={class:"col-12"},oe=d("label",{class:"q-mr-sm row items-center"},[d("span",null,"Router: ")],-1),ie={key:1,class:"text-center row justify-center",style:{width:"100%"}},re=d("label",{class:"q-mb-sm text-grey-7 text-h6"}," Servicios de Internet ",-1),ne=[re],de={key:0,class:"row q-col-gutter-y-xs",style:{"min-width":"220px"}},ce={class:"col-2"},ue={class:""},me={class:"full-width row flex-center text-lime-10 q-gutter-sm"},pe=d("span",{class:"text-subtitle1"}," No se encontr\xF3 ningun Resultado ",-1),je={__name:"IndexPage",setup(ge){let N=[];const F=[{name:"acciones",label:"acciones",align:"center"},{align:"center",label:"Nombre",field:"nombre",name:"nombre"},{align:"center",label:"Ubicaci\xF3n",field:"ubicacion",name:"ubicacion"},{align:"center",label:"Coordenadas",field:"coordenadas",name:"coordenadas"},{align:"center",label:"Puertos",name:"xd",style:"width: 200px",headerStyle:"width: 200px"},{align:"center",label:"Detalles",field:"detalles",name:"detalles"},{name:"estado",label:"Estado",align:"center",field:"estado"}];let{claim:fe,cargarRouters:P,listRouters:b,selectedRouter:p}=te();const{mostrarNotify:z,confirmDelete:R,isDeleted:T}=ee(),y=f(""),V=f([]),w=f(!1),h=async()=>{w.value=!0;try{b.value.length==0&&await P();let l={headers:{router_id:p.value}};(await Q.get(`/customers/get-ips/${p.value}`)).data.forEach(a=>{a.puerto_id&&N.push(a.puerto_id.id)});const{data:e}=await Q.get("/caja-nap",l);e.forEach(a=>{a.puertos.sort((g,U)=>g.puerto-U.puerto),a.puertos.map(g=>{N.includes(g.id)&&(g.isActive=!1)})}),V.value=e}catch(l){z("warning",l.response.data.message)}w.value=!1},j=async(l,o)=>{try{const{data:{msg:e}}=await Q.patch(`/caja-nap/${l}/${o}`);z("positive",e),h()}catch(e){console.log(e)}};K(T,(l,o)=>{l&&h()});const E=async l=>{try{R("Estas seguro de eliminar esta Caja Nap?",`/caja-nap/${l}`)}catch(o){console.log(o)}};h();const c=f("list"),I=f({rowsPerPage:10});return(l,o)=>(t(),n(v,null,[d("div",ae,[d("div",le,[d("div",se,[i(M,{flat:"",class:"shadow_custom"},{default:s(()=>[i(L,{"title-class":"text-grey-7 text-h6",title:"Servicios de Internet",rows:V.value,loading:w.value,"hide-header":c.value==="grid",columns:F,"row-key":"name",grid:c.value==="grid",filter:y.value,pagination:I.value},{header:s(e=>[i(H,{props:e,style:{height:"60px"}},{default:s(()=>[(t(!0),n(v,null,S(e.cols,a=>(t(),r(G,{key:a.name,props:e,class:"text-grey-7 text-weight-bold text-uppercase",style:{"font-size":"13px"}},{default:s(()=>[C(q(a.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"top-left":s(e=>[k(b).length>1?(t(),n("div",{key:0,style:{display:"flex"},class:O([l.$q.screen.xs?"q-mb-md":""])},[oe,i(J,{outlined:"",dense:"",modelValue:k(p),"onUpdate:modelValue":[o[0]||(o[0]=a=>W(p)?p.value=a:p=a),h],"emit-value":"","map-options":"",options:k(b)},null,8,["modelValue","options"])],2)):(t(),n("div",ie,ne))]),"top-right":s(e=>[l.$q.screen.xs?u("",!0):(t(),r(m,{key:0,onClick:o[1]||(o[1]=a=>l.$router.push({name:"cNap.add"})),outline:"",color:"primary",label:"Nuevo",class:"q-mr-xs"})),i(X,{style:Y(l.$q.screen.width>700||"width: 70%"),outlined:"",dense:"",debounce:"300",modelValue:y.value,"onUpdate:modelValue":o[2]||(o[2]=a=>y.value=a),placeholder:"Buscar..."},{append:s(()=>[i(x,{name:"search"})]),_:1},8,["style","modelValue"]),c.value==="list"?(t(),r(m,{key:1,flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen",onClick:e.toggleFullscreen},{default:s(()=>[B((t(),r(A,{disable:l.$q.platform.is.mobile},{default:s(()=>[C(q(e.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen"),1)]),_:2},1032,["disable"])),[[D]])]),_:2},1032,["icon","onClick"])):u("",!0),e.inFullscreen?u("",!0):(t(),r(m,{key:2,flat:"",round:"",dense:"",icon:c.value==="grid"?"list":"grid_on",onClick:o[3]||(o[3]=a=>{c.value=c.value==="grid"?"list":"grid",l.separator=c.value==="grid"?"none":"horizontal"})},{default:s(()=>[B((t(),r(A,{disable:l.$q.platform.is.mobile},{default:s(()=>[C(q(c.value==="grid"?"List":"Grid"),1)]),_:1},8,["disable"])),[[D]])]),_:1},8,["icon"]))]),"body-cell-xd":s(e=>[i(_,{props:e},{default:s(()=>[(t(),n("div",de,[(t(!0),n(v,null,S(e.row.puertos,({puerto:a,isActive:g})=>(t(),n("div",ce,[d("div",ue,[i($,{filled:"",color:g?"secondary":"red-9",label:a,style:{width:"30px",height:"30px","justify-content":"center"}},null,8,["color","label"])])]))),256))]))]),_:2},1032,["props"])]),"body-cell-estado":s(e=>[i(_,{props:e},{default:s(()=>[e.row.isActive?(t(),r($,{key:0,outline:"",color:"positive",label:"Activo",class:"q-pa-sm"})):(t(),r($,{key:1,outline:"",color:"red",label:"Inactivo",class:"q-pa-sm"}))]),_:2},1032,["props"])]),"body-cell-acciones":s(e=>[i(_,{props:e},{default:s(()=>[e.row.isActive?(t(),r(m,{key:0,round:"",color:"blue-grey",onClick:a=>l.$router.push({name:"cNap.edit",params:{id:e.row.id}}),icon:"edit",class:"q-mr-sm",size:"10px"},null,8,["onClick"])):u("",!0),e.row.isActive?(t(),n(v,{key:1},[e.row.isActive?(t(),r(m,{key:0,round:"",color:"blue-grey",icon:"close",onClick:a=>j(e.row.id,!1),size:"10px"},null,8,["onClick"])):u("",!0)],64)):(t(),n(v,{key:2},[e.row.isActive?u("",!0):(t(),r(m,{key:0,round:"",color:"blue-grey",icon:"done",onClick:a=>j(e.row.id,!0),size:"10px"},null,8,["onClick"])),e.row.isActive?u("",!0):(t(),r(m,{key:1,round:"",color:"blue-grey",class:"q-ml-sm",icon:"delete",onClick:a=>E(e.row.id),size:"10px"},null,8,["onClick"]))],64))]),_:2},1032,["props"])]),"no-data":s(({icon:e})=>[d("div",me,[i(x,{size:"2em",name:"sentiment_dissatisfied"}),pe,i(x,{size:"2em",name:y.value?"filter_b_and_w":e},null,8,["name"])])]),_:1},8,["rows","loading","hide-header","grid","filter","pagination"])]),_:1})])])]),l.$q.screen.xs?(t(),r(Z,{key:0,position:"bottom-right",offset:[18,18]},{default:s(()=>[i(m,{round:"",color:"secondary",size:"lg",icon:"add",onClick:o[4]||(o[4]=e=>l.$router.push({name:"cNap.add"}))})]),_:1})):u("",!0)],64))}};export{je as default};
