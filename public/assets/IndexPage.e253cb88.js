import{Q as M,a as x,b as P}from"./QTable.75882cbb.js";import{Q as E,a as z}from"./QTooltip.502c49c5.js";import{Q as U}from"./QSelect.ac3f44cf.js";import{d as j,r as p,v as L,o as a,c as m,e as u,f as n,g as s,aR as G,a9 as i,af as d,aj as b,ai as H,ad as _,ae as O,aU as W,h as c,Q as J,aW as K,i as k,O as I,aa as w,ab as $}from"./index.77dc7136.js";import{Q as S}from"./QBadge.664dbf8a.js";import{Q as X}from"./QPageSticky.9122b839.js";import{C as V}from"./ClosePopup.48df6d9e.js";import{a as A}from"./axios.9fd1c94c.js";import{u as Y}from"./useHelpers.602f9f43.js";import{u as Z}from"./useInternet.25c59489.js";import"./QList.18d45291.js";import"./QItemLabel.aaa628b9.js";import"./QChip.ebe95b50.js";import"./format.cbf00d5d.js";import"./use-quasar.75c84b60.js";const ee={class:"q-ma-lg q-pt-md"},te={class:"row q-col-gutter-lg"},ae={class:"col-12"},le=u("label",{class:"q-mr-sm row items-center"},[u("span",null,"Router: ")],-1),se={key:1,class:"text-center row justify-center",style:{width:"100%"}},oe=u("label",{class:"q-mb-sm text-grey-7 text-h6"}," Servicios de Internet ",-1),ie=[oe],ne={class:"full-width row flex-center text-lime-10 q-gutter-sm"},re=u("span",{class:"text-subtitle1"}," No se encontr\xF3 ningun Resultado ",-1),qe=j({__name:"IndexPage",setup(de){const F=[{name:"acciones",label:"acciones",align:"center"},{align:"center",label:"Nombre",field:"nombre_plan",name:"nombre_plan"},{align:"center",label:"Descargar Mbps",field:"descarga_Mbps",name:"descarga_Mbps"},{align:"center",label:"Subida Mbps",field:"subida_Mbps",name:"subida_Mbps"},{align:"center",label:"Precio",field:"precio",name:"precio_plan"},{name:"estado",label:"Estado",align:"center",field:"estado"}];let{cargarRouters:N,listRouters:y,selectedRouter:g}=Z();const{mostrarNotify:C,confirmDelete:B,isDeleted:R}=Y(),f=p(""),q=p([]),h=p(!1),v=async()=>{h.value=!0;try{y.value.length==0&&await N();let t={headers:{router_id:g.value}};const{data:l}=await A.get("/internet",t);l.forEach(e=>{e.precio=`$${e.precio_plan}`,e.estado=`${e.isActive?"Activo":"Inactivo"}`}),q.value=l}catch(t){C("warning",t.response.data.message)}h.value=!1},Q=async(t,l)=>{try{const{data:{msg:e}}=await A.patch(`/internet/${t}/${l}`);C("positive",e),v()}catch(e){console.log(e)}};L(R,(t,l)=>{t&&v()});const T=async t=>{try{B("Estas seguro de eliminar este servicio de internet?",`/internet/${t}`)}catch(l){console.log(l)}};v();const r=p("list"),D=p({rowsPerPage:10});return(t,l)=>(a(),m(b,null,[u("div",ee,[u("div",te,[u("div",ae,[n(G,{flat:"",class:"shadow_custom"},{default:s(()=>[n(M,{"title-class":"text-grey-7 text-h6",title:"Servicios de Internet",rows:q.value,loading:h.value,"hide-header":r.value==="grid",columns:F,"row-key":"name",grid:r.value==="grid",filter:f.value,pagination:D.value},{header:s(e=>[n(E,{props:e,style:{height:"60px"}},{default:s(()=>[(a(!0),m(b,null,H(e.cols,o=>(a(),i(P,{key:o.name,props:e,class:"text-grey-7 text-weight-bold text-uppercase",style:{"font-size":"13px"}},{default:s(()=>[w($(o.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"top-left":s(e=>[_(y).length>1?(a(),m("div",{key:0,style:{display:"flex"},class:O([t.$q.screen.xs?"q-mb-md":""])},[le,n(U,{outlined:"",dense:"",modelValue:_(g),"onUpdate:modelValue":[l[0]||(l[0]=o=>W(g)?g.value=o:g=o),v],"emit-value":"","map-options":"",options:_(y)},null,8,["modelValue","options"])],2)):(a(),m("div",se,ie))]),"top-right":s(e=>[t.$q.screen.xs?d("",!0):(a(),i(c,{key:0,onClick:l[1]||(l[1]=o=>t.$router.push({name:"internet.add"})),outline:"",color:"primary",label:"Nuevo",class:"q-mr-xs"})),n(J,{style:K(t.$q.screen.width>700||"width: 70%"),outlined:"",dense:"",debounce:"300",modelValue:f.value,"onUpdate:modelValue":l[2]||(l[2]=o=>f.value=o),placeholder:"Buscar..."},{append:s(()=>[n(k,{name:"search"})]),_:1},8,["style","modelValue"]),r.value==="list"?(a(),i(c,{key:1,flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen",onClick:e.toggleFullscreen},{default:s(()=>[I((a(),i(z,{disable:t.$q.platform.is.mobile},{default:s(()=>[w($(e.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen"),1)]),_:2},1032,["disable"])),[[V]])]),_:2},1032,["icon","onClick"])):d("",!0),e.inFullscreen?d("",!0):(a(),i(c,{key:2,flat:"",round:"",dense:"",icon:r.value==="grid"?"list":"grid_on",onClick:l[3]||(l[3]=o=>{r.value=r.value==="grid"?"list":"grid",t.separator=r.value==="grid"?"none":"horizontal"})},{default:s(()=>[I((a(),i(z,{disable:t.$q.platform.is.mobile},{default:s(()=>[w($(r.value==="grid"?"List":"Grid"),1)]),_:1},8,["disable"])),[[V]])]),_:1},8,["icon"]))]),"body-cell-estado":s(e=>[n(x,{props:e},{default:s(()=>[e.row.isActive?(a(),i(S,{key:0,outline:"",color:"positive",label:"Activo",class:"q-pa-sm"})):(a(),i(S,{key:1,outline:"",color:"red",label:"Inactivo",class:"q-pa-sm"}))]),_:2},1032,["props"])]),"body-cell-acciones":s(e=>[n(x,{props:e},{default:s(()=>[e.row.isActive?(a(),i(c,{key:0,round:"",color:"blue-grey",onClick:o=>t.$router.push({name:"internet.edit",params:{id:e.row.id}}),icon:"edit",class:"q-mr-sm",size:"10px"},null,8,["onClick"])):d("",!0),e.row.isActive?(a(),m(b,{key:1},[e.row.isActive?(a(),i(c,{key:0,round:"",color:"blue-grey",icon:"close",onClick:o=>Q(e.row.id,!1),size:"10px"},null,8,["onClick"])):d("",!0)],64)):(a(),m(b,{key:2},[e.row.isActive?d("",!0):(a(),i(c,{key:0,round:"",color:"blue-grey",icon:"done",onClick:o=>Q(e.row.id,!0),size:"10px"},null,8,["onClick"])),e.row.isActive?d("",!0):(a(),i(c,{key:1,round:"",color:"blue-grey",class:"q-ml-sm",icon:"delete",onClick:o=>T(e.row.id),size:"10px"},null,8,["onClick"]))],64))]),_:2},1032,["props"])]),"no-data":s(({icon:e})=>[u("div",ne,[n(k,{size:"2em",name:"sentiment_dissatisfied"}),re,n(k,{size:"2em",name:f.value?"filter_b_and_w":e},null,8,["name"])])]),_:1},8,["rows","loading","hide-header","grid","filter","pagination"])]),_:1})])])]),t.$q.screen.xs?(a(),i(X,{key:0,position:"bottom-right",offset:[18,18]},{default:s(()=>[n(c,{round:"",color:"secondary",size:"lg",icon:"add",onClick:l[4]||(l[4]=e=>t.$router.push({name:"internet.add"}))})]),_:1})):d("",!0)],64))}});export{qe as default};
