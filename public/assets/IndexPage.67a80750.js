import{m as T,aR as z,n as x,aS as $,p as A,h as _,N as M,aT as O,d as j,r as D,o as Q,c as N,e,f as l,g as o,aU as y,aV as b,ab as C,aW as w,ad as q,aa as B,ae as F}from"./index.04b71378.js";import{Q as E}from"./QBtnGroup.7c48f648.js";import{u as U}from"./useHelpers.5e8ffe27.js";import"./use-quasar.49982070.js";import"./axios.bc73b9b6.js";var W=T({name:"QBtnToggle",props:{...z,modelValue:{required:!0},options:{type:Array,required:!0,validator:t=>t.every(c=>("label"in c||"icon"in c||"slot"in c)&&"value"in c)},color:String,textColor:String,toggleColor:{type:String,default:"primary"},toggleTextColor:String,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,padding:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,readonly:Boolean,disable:Boolean,stack:Boolean,stretch:Boolean,spread:Boolean,clearable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","clear","click"],setup(t,{slots:c,emit:g}){const p=x(()=>t.options.find(n=>n.value===t.modelValue)!==void 0),f=x(()=>({type:"hidden",name:t.name,value:t.modelValue})),u=O(f),m=x(()=>$(t)),h=x(()=>({rounded:t.rounded,dense:t.dense,...m.value})),r=x(()=>t.options.map((n,d)=>{const{attrs:k,value:v,slot:I,...i}=n;return{slot:I,props:{key:d,"aria-pressed":v===t.modelValue?"true":"false",...k,...i,...h.value,disable:t.disable===!0||i.disable===!0,color:v===t.modelValue?a(i,"toggleColor"):a(i,"color"),textColor:v===t.modelValue?a(i,"toggleTextColor"):a(i,"textColor"),noCaps:a(i,"noCaps")===!0,noWrap:a(i,"noWrap")===!0,size:a(i,"size"),padding:a(i,"padding"),ripple:a(i,"ripple"),stack:a(i,"stack")===!0,stretch:a(i,"stretch")===!0,onClick(S){s(v,n,S)}}}}));function s(n,d,k){t.readonly!==!0&&(t.modelValue===n?t.clearable===!0&&(g("update:modelValue",null,null),g("clear")):g("update:modelValue",n,d),g("click",k))}function a(n,d){return n[d]===void 0?t[d]:n[d]}function V(){const n=r.value.map(d=>A(_,d.props,d.slot!==void 0?c[d.slot]:void 0));return t.name!==void 0&&t.disable!==!0&&p.value===!0&&u(n,"push"),M(c.default,n)}return()=>A(E,{class:"q-btn-toggle",...m.value,rounded:t.rounded,stretch:t.stretch,glossy:t.glossy,spread:t.spread},V)}});const P={class:"q-ma-lg q-pt-md"},G={class:"row q-col-gutter-lg"},R={class:"col-12 row justify-end q-pt-md"},Y={class:"col-xs-12 col-sm-6 col-md-3 cardInfo q-pt-xs"},H={class:"row q-py-sm"},L={class:"col-8"},Z={class:"text-h4 text-weight-bold"},J=e("div",{class:"text-subtitle1"}," Facturaci\xF3n total ",-1),K=e("div",{class:"col-4 flex flex-center"},[e("i",{class:"fa-solid fa-file-invoice iconCard",style:{"font-size":"45px",color:"#228E3B","margin-left":"16px"}})],-1),X=e("i",{class:"fa-solid fa-circle-arrow-right q-ml-sm iconTest",style:{"font-size":"18px"}},null,-1),ee={class:"col-xs-12 col-sm-6 col-md-3 cardInfo q-pt-xs"},te={class:"row q-py-sm"},ae={class:"col-8"},le=e("div",{class:"col-4 flex flex-center"},[e("i",{class:"fa-solid fa-users iconCard",style:{"font-size":"45px",color:"rgb(191 145 9)","margin-left":"16px"}})],-1),oe=e("i",{class:"fa-solid fa-circle-arrow-right q-ml-sm iconTest",style:{"font-size":"18px"}},null,-1),se={class:"col-xs-12 col-sm-6 col-md-3 cardInfo q-pt-xs"},ne={class:"row q-py-sm"},ie={class:"col-8"},re={class:"text-h4 text-weight-bold"},de=e("div",{class:"text-subtitle1"}," Total de Compras ",-1),ce=e("div",{class:"col-4 flex flex-center"},[e("i",{class:"fa-solid fa-cart-shopping iconCard",style:{"font-size":"45px",color:"#148A9D","margin-left":"16px"}})],-1),ue=e("i",{class:"fa-solid fa-circle-arrow-right q-ml-sm iconTest",style:{"font-size":"18px"}},null,-1),fe={class:"col-xs-12 col-sm-6 col-md-3 cardInfo q-pt-xs"},me={class:"row q-py-sm"},ge={class:"col-8"},pe={class:"text-h4 text-weight-bold"},xe=e("div",{class:"text-subtitle1"}," Facturas Anuladas ",-1),_e=e("div",{class:"col-4 flex flex-center"},[e("i",{class:"fa-solid fa-file-circle-xmark iconCard",style:{"font-size":"45px",color:"rgb(169 44 55)","margin-left":"16px"}})],-1),he=e("i",{class:"fa-solid fa-circle-arrow-right q-ml-sm iconTest",style:{"font-size":"18px"}},null,-1),qe=j({__name:"IndexPage",setup(t){const{api:c,claim:g,router:p}=U(),f=D({totalFacturado:0,totalClientes:0,totalCompras:0,facturasAnuladas:0}),u=D("mes"),m=()=>{var r=new Date,s=new Date(r.getFullYear(),r.getMonth(),1),a=s.toISOString().slice(0,10),V=new Date(r.getFullYear(),r.getMonth()+1,0),n=V.toISOString().slice(0,10);return`${a} - ${n}`},h=async()=>{try{var r=new Date,s=r.getMonth()+1;const{data:a}=await c.post("/dashboard",{company_id:g.company.id,modo:u.value,mes:m()});f.value=a}catch{}};return h(),(r,s)=>(Q(),N("div",P,[e("div",G,[e("div",R,[l(W,{modelValue:u.value,"onUpdate:modelValue":[s[0]||(s[0]=a=>u.value=a),h],class:"my-custom-toggle","no-caps":"",rounded:"",unelevated:"","toggle-color":"primary",color:"white","text-color":"primary",options:[{label:"Mes",value:"mes"},{label:"General",value:"general"}]},null,8,["modelValue"])]),e("div",Y,[l(y,{class:"my-card text-white",style:{"background-color":"#28A745"}},{default:o(()=>[l(b,null,{default:o(()=>[e("div",H,[e("div",L,[e("div",Z," $"+C(f.value.totalFacturado.toFixed(2)),1),J]),K])]),_:1}),l(w,{class:"justify-center q-py-none q-px-none",style:{"background-color":"#228E3B"}},{default:o(()=>[l(_,{onClick:s[1]||(s[1]=a=>{q(p).push({name:"Ver Ventas",params:{tipo:"AUTORIZADO",fecha:u.value=="mes"?m():""}})}),class:"full-width",flat:"",style:{"padding-left":"0px","padding-right":"0px"}},{default:o(()=>[B(" Mas Info "),X]),_:1})]),_:1})]),_:1})]),e("div",ee,[l(y,{class:"my-card text-white",style:{"background-color":"#FFC107"}},{default:o(()=>[l(b,null,{default:o(()=>[e("div",te,[e("div",ae,[e("div",{class:F(["text-h4 text-weight-bold",[r.$q.dark.isActive?"":"text-blue-grey-10"]])},C(f.value.totalClientes),3),e("div",{class:F(["text-subtitle1 text-weight-medium",[r.$q.dark.isActive?"":"text-blue-grey-10"]])}," Total de clientes ",2)]),le])]),_:1}),l(w,{class:"justify-center q-py-none text-blue-grey-10 text-weight-medium q-px-none",style:{"background-color":"#D9A406"}},{default:o(()=>[l(_,{onClick:s[2]||(s[2]=a=>q(p).push({name:"customer.index"})),class:"full-width",flat:"",style:{"padding-left":"0px","padding-right":"0px"}},{default:o(()=>[B(" Mas Info "),oe]),_:1})]),_:1})]),_:1})]),e("div",se,[l(y,{class:"my-card text-white",style:{"background-color":"#17A2B8"}},{default:o(()=>[l(b,null,{default:o(()=>[e("div",ne,[e("div",ie,[e("div",re," $"+C(f.value.totalCompras.toFixed(2)),1),de]),ce])]),_:1}),l(w,{class:"justify-center q-py-none q-px-none",style:{"background-color":"#148A9D"}},{default:o(()=>[l(_,{onClick:s[3]||(s[3]=a=>{q(p).push({name:"Ver Compras",params:{fecha:u.value=="mes"?m():""}})}),class:"full-width",flat:"",style:{"padding-left":"0px","padding-right":"0px"}},{default:o(()=>[B(" Mas Info "),ue]),_:1})]),_:1})]),_:1})]),e("div",fe,[l(y,{class:"my-card text-white",style:{"background-color":"#DC3545"}},{default:o(()=>[l(b,null,{default:o(()=>[e("div",me,[e("div",ge,[e("div",pe," $"+C(f.value.facturasAnuladas.toFixed(2)),1),xe]),_e])]),_:1}),l(w,{class:"justify-center q-py-none q-px-none",style:{"background-color":"#C6303E"}},{default:o(()=>[l(_,{onClick:s[4]||(s[4]=a=>{q(p).push({name:"Ver Ventas",params:{tipo:"ANULADO",fecha:u.value=="mes"?m():""}})}),class:"full-width",flat:"",style:{"padding-left":"0px","padding-right":"0px"}},{default:o(()=>[B(" Mas Info "),he]),_:1})]),_:1})]),_:1})])])]))}});export{qe as default};
