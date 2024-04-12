import{m as el,I as ll,aR as al,J as sl,bw as ol,r as C,n as w,v as be,aB as tl,s as il,p as y,z as rl,aT as ul,bl as nl,T as dl,O as xe,h as se,_ as ml,d as cl,C as vl,o as I,a9 as ae,g as v,ad as l,f as c,aV as fl,e as s,Q as T,ae as q,ab as E,i as S,c as K,aa as ve,af as Q,aj as pl,w as hl,bu as L,bb as bl,aW as gl,aU as yl}from"./index.f0981421.js";import{j as G,a as De,Q as Me}from"./format.452c9745.js";import{Q as fe}from"./QSelect.89fb4a1b.js";import{Q as _l}from"./QFile.7e78d7f7.js";import{T as Vl}from"./TouchPan.30ba01d4.js";import{u as wl,a as xl,b as ql,g as kl,Q as Re}from"./QPopupProxy.4c7a105c.js";import{_ as pe,f as Cl}from"./date.d464541d.js";import{Q as Sl}from"./QTree.feade7de.js";import{Q as Pl}from"./QForm.5204417a.js";import{C as Ie}from"./ClosePopup.bcf84bac.js";import{u as Al}from"./useHelpers.b1158c53.js";function Dl(u,U){if(u.hour!==null){if(u.minute===null)return"minute";if(U===!0&&u.second===null)return"second"}return"hour"}function Ml(){const u=new Date;return{hour:u.getHours(),minute:u.getMinutes(),second:u.getSeconds(),millisecond:u.getMilliseconds()}}var Ee=el({name:"QTime",props:{...ll,...al,...wl,mask:{default:null},format24h:{type:Boolean,default:null},defaultDate:{type:String,validator:u=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(u)},options:Function,hourOptions:Array,minuteOptions:Array,secondOptions:Array,withSeconds:Boolean,nowBtn:Boolean},emits:xl,setup(u,{slots:U,emit:j}){const P=rl(),{$q:A}=P.proxy,F=sl(u,A),{tabindex:D,headerClass:z,getLocale:W,getCurrentDate:t}=ql(u,A),x=ol(u),r=ul(x);let M,$;const N=C(null),B=w(()=>je()),Y=w(()=>W()),oe=w(()=>Te()),J=pe(u.modelValue,B.value,Y.value,u.calendar,oe.value),h=C(Dl(J)),d=C(J),V=C(J.hour===null||J.hour<12),f=w(()=>`q-time q-time--${u.landscape===!0?"landscape":"portrait"}`+(F.value===!0?" q-time--dark q-dark":"")+(u.disable===!0?" disabled":u.readonly===!0?" q-time--readonly":"")+(u.bordered===!0?" q-time--bordered":"")+(u.square===!0?" q-time--square no-border-radius":"")+(u.flat===!0?" q-time--flat no-shadow":"")),a=w(()=>{const e=d.value;return{hour:e.hour===null?"--":o.value===!0?G(e.hour):String(V.value===!0?e.hour===0?12:e.hour:e.hour>12?e.hour-12:e.hour),minute:e.minute===null?"--":G(e.minute),second:e.second===null?"--":G(e.second)}}),o=w(()=>u.format24h!==null?u.format24h:A.lang.date.format24h),Ue=w(()=>{const e=h.value==="hour",i=e===!0?12:60,m=d.value[h.value];let _=`rotate(${Math.round(m*(360/i))-180}deg) translateX(-50%)`;return e===!0&&o.value===!0&&d.value.hour>=12&&(_+=" scale(.7)"),{transform:_}}),qe=w(()=>d.value.hour!==null),$e=w(()=>qe.value===!0&&d.value.minute!==null),X=w(()=>u.hourOptions!==void 0?e=>u.hourOptions.includes(e):u.options!==void 0?e=>u.options(e,null,null):null),te=w(()=>u.minuteOptions!==void 0?e=>u.minuteOptions.includes(e):u.options!==void 0?e=>u.options(d.value.hour,e,null):null),ie=w(()=>u.secondOptions!==void 0?e=>u.secondOptions.includes(e):u.options!==void 0?e=>u.options(d.value.hour,d.value.minute,e):null),O=w(()=>{if(X.value===null)return null;const e=ue(0,11,X.value),i=ue(12,11,X.value);return{am:e,pm:i,values:e.values.concat(i.values)}}),Z=w(()=>te.value!==null?ue(0,59,te.value):null),ee=w(()=>ie.value!==null?ue(0,59,ie.value):null),re=w(()=>{switch(h.value){case"hour":return O.value;case"minute":return Z.value;case"second":return ee.value}}),Ne=w(()=>{let e,i,m=0,b=1;const _=re.value!==null?re.value.values:void 0;h.value==="hour"?o.value===!0?(e=0,i=23):(e=0,i=11,V.value===!1&&(m=12)):(e=0,i=55,b=5);const R=[];for(let p=e,k=e;p<=i;p+=b,k++){const H=p+m,Xe=_!==void 0&&_.includes(H)===!1,Ze=h.value==="hour"&&p===0?o.value===!0?"00":"12":p;R.push({val:H,index:k,disable:Xe,label:Ze})}return R}),Oe=w(()=>[[Vl,Qe,void 0,{stop:!0,prevent:!0,mouse:!0}]]);be(()=>u.modelValue,e=>{const i=pe(e,B.value,Y.value,u.calendar,oe.value);(i.dateHash!==d.value.dateHash||i.timeHash!==d.value.timeHash)&&(d.value=i,i.hour===null?h.value="hour":V.value=i.hour<12)}),be([B,Y],()=>{ml(()=>{we()})});function ke(){const e={...t(),...Ml()};we(e),Object.assign(d.value,e),h.value="hour"}function ue(e,i,m){const b=Array.apply(null,{length:i+1}).map((_,R)=>{const p=R+e;return{index:p,val:m(p)===!0}}).filter(_=>_.val===!0).map(_=>_.index);return{min:b[0],max:b[b.length-1],values:b,threshold:i+1}}function Ce(e,i,m){const b=Math.abs(e-i);return Math.min(b,m-b)}function ge(e,{min:i,max:m,values:b,threshold:_}){if(e===i)return i;if(e<i||e>m)return Ce(e,i,_)<=Ce(e,m,_)?i:m;const R=b.findIndex(H=>e<=H),p=b[R-1],k=b[R];return e-p<=k-e?p:k}function je(){return u.calendar!=="persian"&&u.mask!==null?u.mask:`HH:mm${u.withSeconds===!0?":ss":""}`}function Te(){if(typeof u.defaultDate!="string"){const e=t(!0);return e.dateHash=kl(e),e}return pe(u.defaultDate,"YYYY/MM/DD",void 0,u.calendar)}function ye(){return nl(P)===!0||re.value!==null&&(re.value.values.length===0||h.value==="hour"&&o.value!==!0&&O.value[V.value===!0?"am":"pm"].values.length===0)}function _e(){const e=N.value,{top:i,left:m,width:b}=e.getBoundingClientRect(),_=b/2;return{top:i+_,left:m+_,dist:_*.7}}function Qe(e){if(ye()!==!0){if(e.isFirst===!0){M=_e(),$=ne(e.evt,M);return}$=ne(e.evt,M,$),e.isFinal===!0&&(M=!1,$=null,Se())}}function Se(){h.value==="hour"?h.value="minute":u.withSeconds&&h.value==="minute"&&(h.value="second")}function ne(e,i,m){const b=tl(e),_=Math.abs(b.top-i.top),R=Math.sqrt(Math.pow(Math.abs(b.top-i.top),2)+Math.pow(Math.abs(b.left-i.left),2));let p,k=Math.asin(_/R)*(180/Math.PI);if(b.top<i.top?k=i.left<b.left?90-k:270+k:k=i.left<b.left?k+90:270-k,h.value==="hour"){if(p=k/30,O.value!==null){const H=o.value!==!0?V.value===!0:O.value.am.values.length!==0&&O.value.pm.values.length!==0?R>=i.dist:O.value.am.values.length!==0;p=ge(p+(H===!0?0:12),O.value[H===!0?"am":"pm"])}else p=Math.round(p),o.value===!0?R<i.dist?p<12&&(p+=12):p===12&&(p=0):V.value===!0&&p===12?p=0:V.value===!1&&p!==12&&(p+=12);o.value===!0&&(V.value=p<12)}else p=Math.round(k/6)%60,h.value==="minute"&&Z.value!==null?p=ge(p,Z.value):h.value==="second"&&ee.value!==null&&(p=ge(p,ee.value));return m!==p&&Le[h.value](p),p}const Ve={hour(){h.value="hour"},minute(){h.value="minute"},second(){h.value="second"}};function Fe(e){e.keyCode===13&&Pe()}function ze(e){e.keyCode===13&&Ae()}function He(e){ye()!==!0&&(A.platform.is.desktop!==!0&&ne(e,_e()),Se())}function Be(e){ye()!==!0&&ne(e,_e())}function Ye(e){if(e.keyCode===13)h.value="hour";else if([37,39].includes(e.keyCode)){const i=e.keyCode===37?-1:1;if(O.value!==null){const m=o.value===!0?O.value.values:O.value[V.value===!0?"am":"pm"].values;if(m.length===0)return;if(d.value.hour===null)de(m[0]);else{const b=(m.length+m.indexOf(d.value.hour)+i)%m.length;de(m[b])}}else{const m=o.value===!0?24:12,b=o.value!==!0&&V.value===!1?12:0,_=d.value.hour===null?-i:d.value.hour;de(b+(24+_+i)%m)}}}function Je(e){if(e.keyCode===13)h.value="minute";else if([37,39].includes(e.keyCode)){const i=e.keyCode===37?-1:1;if(Z.value!==null){const m=Z.value.values;if(m.length===0)return;if(d.value.minute===null)me(m[0]);else{const b=(m.length+m.indexOf(d.value.minute)+i)%m.length;me(m[b])}}else{const m=d.value.minute===null?-i:d.value.minute;me((60+m+i)%60)}}}function Ke(e){if(e.keyCode===13)h.value="second";else if([37,39].includes(e.keyCode)){const i=e.keyCode===37?-1:1;if(ee.value!==null){const m=ee.value.values;if(m.length===0)return;if(d.value.seconds===null)ce(m[0]);else{const b=(m.length+m.indexOf(d.value.second)+i)%m.length;ce(m[b])}}else{const m=d.value.second===null?-i:d.value.second;ce((60+m+i)%60)}}}function de(e){d.value.hour!==e&&(d.value.hour=e,le())}function me(e){d.value.minute!==e&&(d.value.minute=e,le())}function ce(e){d.value.second!==e&&(d.value.second=e,le())}const Le={hour:de,minute:me,second:ce};function Pe(){V.value===!1&&(V.value=!0,d.value.hour!==null&&(d.value.hour-=12,le()))}function Ae(){V.value===!0&&(V.value=!1,d.value.hour!==null&&(d.value.hour+=12,le()))}function le(){if(X.value!==null&&X.value(d.value.hour)!==!0){d.value=pe(),h.value="hour";return}if(te.value!==null&&te.value(d.value.minute)!==!0){d.value.minute=null,d.value.second=null,h.value="minute";return}if(u.withSeconds===!0&&ie.value!==null&&ie.value(d.value.second)!==!0){d.value.second=null,h.value="second";return}d.value.hour===null||d.value.minute===null||u.withSeconds===!0&&d.value.second===null||we()}function we(e){const i=Object.assign({...d.value},e),m=u.calendar==="persian"?G(i.hour)+":"+G(i.minute)+(u.withSeconds===!0?":"+G(i.second):""):Cl(new Date(i.year,i.month===null?null:i.month-1,i.day,i.hour,i.minute,i.second,i.millisecond),B.value,Y.value,i.year,i.timezoneOffset);i.changed=m!==u.modelValue,j("update:modelValue",m,i)}function Ge(){const e=[y("div",{class:"q-time__link "+(h.value==="hour"?"q-time__link--active":"cursor-pointer"),tabindex:D.value,onClick:Ve.hour,onKeyup:Ye},a.value.hour),y("div",":"),y("div",qe.value===!0?{class:"q-time__link "+(h.value==="minute"?"q-time__link--active":"cursor-pointer"),tabindex:D.value,onKeyup:Je,onClick:Ve.minute}:{class:"q-time__link"},a.value.minute)];u.withSeconds===!0&&e.push(y("div",":"),y("div",$e.value===!0?{class:"q-time__link "+(h.value==="second"?"q-time__link--active":"cursor-pointer"),tabindex:D.value,onKeyup:Ke,onClick:Ve.second}:{class:"q-time__link"},a.value.second));const i=[y("div",{class:"q-time__header-label row items-center no-wrap",dir:"ltr"},e)];return o.value===!1&&i.push(y("div",{class:"q-time__header-ampm column items-between no-wrap"},[y("div",{class:"q-time__link "+(V.value===!0?"q-time__link--active":"cursor-pointer"),tabindex:D.value,onClick:Pe,onKeyup:Fe},"AM"),y("div",{class:"q-time__link "+(V.value!==!0?"q-time__link--active":"cursor-pointer"),tabindex:D.value,onClick:Ae,onKeyup:ze},"PM")])),y("div",{class:"q-time__header flex flex-center no-wrap "+z.value},i)}function We(){const e=d.value[h.value];return y("div",{class:"q-time__content col relative-position"},[y(dl,{name:"q-transition--scale"},()=>y("div",{key:"clock"+h.value,class:"q-time__container-parent absolute-full"},[y("div",{ref:N,class:"q-time__container-child fit overflow-hidden"},[xe(y("div",{class:"q-time__clock cursor-pointer non-selectable",onClick:He,onMousedown:Be},[y("div",{class:"q-time__clock-circle fit"},[y("div",{class:"q-time__clock-pointer"+(d.value[h.value]===null?" hidden":u.color!==void 0?` text-${u.color}`:""),style:Ue.value}),Ne.value.map(i=>y("div",{class:`q-time__clock-position row flex-center q-time__clock-pos-${i.index}`+(i.val===e?" q-time__clock-position--active "+z.value:i.disable===!0?" q-time__clock-position--disable":"")},[y("span",i.label)]))])]),Oe.value)])])),u.nowBtn===!0?y(se,{class:"q-time__now-button absolute",icon:A.iconSet.datetime.now,unelevated:!0,size:"sm",round:!0,color:u.color,textColor:u.textColor,tabindex:D.value,onClick:ke}):null])}return P.proxy.setNow=ke,()=>{const e=[We()],i=il(U.default);return i!==void 0&&e.push(y("div",{class:"q-time__actions"},i)),u.name!==void 0&&u.disable!==!0&&r(e,"push"),y("div",{class:f.value,tabindex:-1},[Ge(),y("div",{class:"q-time__main col overflow-auto"},e)])}}}),Rl=[{label:"Seleccionar todos los permisos",value:"Seleccionar todos los permisos",children:[{label:"Proveedores",value:"Proveedores",children:[{label:"Ver Proveedores",value:"index.proveedores"},{label:"Crear Proveedor",value:"crear.proveedor"},{label:"Editar Proveedor",value:"editar.proveedor"},{label:"Activar Proveedor",value:"activar.proveedor"},{label:"Inactivar Proveedor",value:"inactivar.proveedor"},{label:"Eliminar Proveedor",value:"eliminar.proveedor"}]},{label:"Clientes",value:"Clientes",children:[{label:"Ver Clientes",value:"index.clientes"},{label:"Crear Cliente",value:"crear.cliente"},{label:"Editar Cliente",value:"editar.cliente"},{label:"Activar Cliente",value:"activar.cliente"},{label:"Inactivar Cliente",value:"inactivar.cliente"},{label:"Eliminar Cliente",value:"eliminar.cliente"}]},{label:"Productos Y Servicios",value:"Productos Y Servicios",children:[{label:"Ver Prod. Y Serv.",value:"index.productos"},{label:"Crear Prod. Y Serv.",value:"crear.productos"},{label:"Editar Prod. Y Serv.",value:"editar.productos"},{label:"Activar Prod. Y Serv.",value:"activar.productos"},{label:"Inactivar Prod. Y Serv.",value:"inactivar.productos"},{label:"Eliminar Prod. Y Serv.",value:"eliminar.productos"}]},{label:"Compras",value:"Compras",children:[{label:"Ver Compras",value:"index.compras"},{label:"Crear Compra",value:"crear.compra"},{label:"Anular Compra",value:"anular.compra"}]},{label:"Ventas",value:"Ventas",children:[{label:"Ver Ventas",value:"index.ventas"},{label:"Crear Venta",value:"crear.venta"},{label:"Anular Venta",value:"anular.venta"}]},{label:"Retenciones",value:"Retenciones",children:[{label:"Ver Retenciones",value:"index.retencion"},{label:"Crear Retencion",value:"crear.retencion"},{label:"Anular Retencion",value:"anular.retencion"}]},{label:"Gesti\xF3n Personal",value:"Gesti\xF3n Personal",children:[{label:"Ver Usuarios",value:"index.usuario"},{label:"Crear Usuario",value:"crear.usuario"},{label:"Editar Usuario",value:"editar.usuario"},{label:"Activar Usuario",value:"activar.usuario"},{label:"Inactivar Usuario",value:"inactivar.usuario"},{label:"Eliminar Usuario",value:"eliminar.usuario"}]},{label:"Roles Y Permisos",value:"Roles Y Permisos",children:[{label:"Ver Roles",value:"index.rol"},{label:"Crear Rol",value:"crear.rol"},{label:"Editar Rol",value:"editar.rol"},{label:"Eliminar Rol",value:"eliminar.rol"}]},{label:"Correo",value:"Correo",children:[{label:"Ver Correos",value:"index.correo"},{label:"Editar Correo",value:"editar.correo"}]},{label:"Empresas",value:"Empresas",children:[{label:"Ver Empresas",value:"index.empresa"},{label:"Crear Empresa",value:"crear.empresa"},{label:"Editar Empresa",value:"editar.empresa"},{label:"Activar Empresa",value:"activar.empresa"},{label:"Inactivar Empresa",value:"inactivar.empresa"},{label:"Eliminar Empresa",value:"eliminar.empresa"}]},{label:"Sucursales",value:"Sucursales",children:[{label:"Ver Sucursales",value:"index.sucursal"},{label:"Crear Sucursal",value:"crear.sucursal"},{label:"Editar Sucursal",value:"editar.sucursal"},{label:"Activar Sucursal",value:"activar.sucursal"},{label:"Inactivar Sucursal",value:"inactivar.sucursal"},{label:"Eliminar Sucursal",value:"eliminar.sucursal"}]}]}];const he=C(!1),n=C({usuario:"",email:"",cedula:"",celular:"",fullName:"",roles:[""],permisos:[""],horarios_dias:[],horarios_time:["",""],receiveSupportEmail:!1,company:"",sucursales:[""],password:"",confirmPassword:"",foto:null,foto_old:null,isActive:!0}),g=C({usuario:{message:"",isValid:!0},email:{message:"",isValid:!0},cedula:{message:"",isValid:!0},celular:{message:"",isValid:!0},fullName:{message:"",isValid:!0},roles:{message:"",isValid:!0},permisos:{message:"",isValid:!0},horarios_dias:{message:"",isValid:!0},foto:{message:"",isValid:!0},horarios_time:{message:"",isValid:!0},company:{message:"",isValid:!0},sucursales:{message:"",isValid:!0},password:{message:"",isValid:!0},confirmPassword:{message:"",isValid:!0}}),Il=()=>{const{api:u,claim:U,mostrarNotify:j,router:P,route:A}=Al(),F=async()=>{let x;return U.roles[0]=="SUPER-ADMINISTRADOR"?x=await u.get("/companies"):x=await u.get(`/companies/find/${U.company.id}`),x.data},D=()=>{n.value.email="",n.value.password="",n.value.cedula="",n.value.celular="",n.value.fullName="",n.value.usuario="",n.value.company="",n.value.roles=[""],n.value.permisos=[],n.value.horarios_dias=[],n.value.horarios_time=[],n.value.receiveSupportEmail=!1,n.value.foto=null,n.value.foto_old=null},z=()=>{j("negative","El tipo de archivo es invalido")},W=x=>{let r=!1;var M=/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;return["fullName","usuario","celular","company","confirmPassword","password","email"].forEach(N=>{!x&&(N!="password"||N!="confirmPassword")&&n.value[N].length==0&&(g.value[N].message="Debes completar este campo",g.value[N].isValid=!1,r=!0)}),n.value.company.length!=0&&n.value.roles[0].length==0&&(g.value.roles.message="Debes elegir un Rol",g.value.roles.isValid=!1,r=!0),n.value.company.length!==0&&n.value.roles[0]!=="SUPER-ADMINISTRADOR"&&n.value.roles[0]!=="ADMINISTRADOR"&&n.value.sucursales[0].length===0&&(g.value.sucursales.message="Debes elegir una sucursal",g.value.sucursales.isValid=!1,r=!0),(n.value.roles[0]=="SUPER-ADMINISTRADOR"||n.value.roles[0]=="ADMINISTRADOR")&&(n.value.sucursales=[]),x?n.value.password!=null&&(n.value.password.length>0&&n.value.password.length<8&&(g.value.password.message="La contrase\xF1a debe tener minimo 8 caracter",g.value.password.isValid=!1,r=!0),n.value.confirmPassword.length>0&&n.value.confirmPassword.length<8?(g.value.confirmPassword.message="La contrase\xF1a debe tener minimo 8 caracter",g.value.confirmPassword.isValid=!1,r=!0):n.value.confirmPassword!=n.value.password&&(g.value.confirmPassword.message="Las contrase\xF1as no coinciden, verificar",g.value.confirmPassword.isValid=!1,r=!0)):(g.value.password.isValid&&n.value.password.length<8&&(g.value.password.message="La contrase\xF1a debe tener minimo 8 caracter",g.value.password.isValid=!1,r=!0),g.value.password.isValid&&n.value.confirmPassword.length<8?(g.value.confirmPassword.message="La contrase\xF1a debe tener minimo 8 caracter",g.value.confirmPassword.isValid=!1,r=!0):n.value.password.length!==0&&n.value.confirmPassword!=n.value.password&&(g.value.confirmPassword.message="Las contrase\xF1as no coinciden, verificar",g.value.confirmPassword.isValid=!1,r=!0)),g.value.email.isValid&&!M.test(n.value.email)&&(g.value.email.message="Ingresa un email valido",g.value.email.isValid=!1,r=!0),n.value.permisos.length==0&&(g.value.permisos.message="*Debes elegir al menos un permiso",g.value.permisos.isValid=!1,r=!0),r},t=async x=>{if(!W(x))try{he.value=!0;let r=new FormData;r.append("usuario",n.value.usuario.toUpperCase()),r.append("email",n.value.email),r.append("celular",n.value.celular),r.append("fullName",n.value.fullName.toUpperCase()),r.append("roles",JSON.stringify(n.value.roles)),r.append("permisos",JSON.stringify(n.value.permisos)),r.append("horarios_dias",JSON.stringify(n.value.horarios_dias)),r.append("horarios_time",JSON.stringify(n.value.horarios_time)),r.append("receiveSupportEmail",JSON.stringify(n.value.receiveSupportEmail)),r.append("company",n.value.company),r.append("sucursales",JSON.stringify(n.value.sucursales)),r.append("password",n.value.password),r.append("confirmPassword",JSON.stringify(n.value.confirmPassword)),r.append("foto",n.value.foto),r.append("foto_old",n.value.foto_old),r.append("isActive",JSON.stringify(n.value.isActive)),x?await u.patch("/auth/edit/"+n.value.id,r,{headers:{"Content-Type":"multipart/form-data"}}):await u.post("/auth/register",r,{headers:{"Content-Type":"multipart/form-data"}}),j("positive",`Usuario ${x?"editado":"creado"} exitosamente.`),he.value=!1,P.push({name:"Ver Usuarios"})}catch(r){console.log(r),he.value=!1,j("warning",r.response.data.message)}};return{api:u,getCompanies:F,formUser:n,loading:he,onRejected:z,limpiarFormulario:D,expanded:C(["Seleccionar todos los permisos"]),onSubmit:t,validaciones:g,route:A,showPass:C(!0),showConfirmPass:C(!0)}},El={class:"row q-pt-sm"},Ul={class:"col-xs-12 col-md-8"},$l={class:"row"},Nl=s("div",{class:"col-11 flex justify-start items-center"},[s("label",{class:"text-h6 text-weight-medium"},"Datos:")],-1),Ol=s("div",{class:"col-4 flex justify-end items-center"},[s("label",null,"Nombre:")],-1),jl={class:"col-xs-7 col-sm-6 q-ml-md"},Tl=s("div",{class:"col-4 flex justify-end items-center q-my-sm"},[s("label",null,"Usuario:")],-1),Ql={class:"col-xs-7 col-sm-6 q-ml-md q-my-sm"},Fl=s("div",{class:"col-4 flex justify-end items-center"},[s("label",null,"Email:")],-1),zl={class:"col-xs-7 col-sm-6 q-ml-md"},Hl=s("div",{class:"col-4 flex justify-end items-center q-my-sm"},[s("label",null,"T\xE9lefono Movil:")],-1),Bl={class:"col-xs-7 col-sm-6 q-ml-md q-my-sm"},Yl=s("label",{class:"text-h6 text-weight-medium"},"Configuraci\xF3n:",-1),Jl=[Yl],Kl=s("div",{class:"col-4 flex justify-end items-center"},[s("label",{for:""},"Empresa:")],-1),Ll={class:"col-xs-7 col-sm-6 q-ml-md"},Gl={key:0,class:"col-4 flex justify-end items-center q-mt-sm"},Wl=s("label",null,"Rol:",-1),Xl=[Wl],Zl={key:1,class:"col-xs-7 col-sm-6 q-ml-md q-mt-sm"},ea={key:2,class:"col-4 flex justify-end items-center q-mt-sm"},la=s("label",null,"Sucursal:",-1),aa=[la],sa={key:3,class:"col-xs-7 col-sm-6 q-ml-md q-mt-sm"},oa=s("div",{class:"col-4 flex justify-end items-center q-mt-sm"},[s("label",{for:""},"Estado:")],-1),ta={class:"col-xs-7 col-sm-6 q-ml-md q-mt-sm"},ia=s("div",{class:"col-4 flex justify-end items-center q-mt-sm"},[s("label",{for:""},"Foto:")],-1),ra={class:"col-xs-7 col-sm-6 q-ml-md q-mt-lg"},ua=s("div",{class:"col-4 flex justify-end items-center q-my-sm"},null,-1),na=s("div",{class:"col-6 q-ml-md q-my-sm"},null,-1),da=s("div",{class:"col-4 flex justify-end items-center q-my-sm"},[s("label",{for:""},"Horario Acceso:")],-1),ma={class:"col-xs-7 col-sm-6 q-ml-md q-my-sm flex"},ca={style:{display:"flex","flex-direction":"column"}},va=s("label",{class:"q-ml-md"}," Lunes ",-1),fa={style:{display:"flex","flex-direction":"column"}},pa=s("label",{class:"q-ml-md"}," Martes ",-1),ha={style:{display:"flex","flex-direction":"column"}},ba=s("label",{class:"q-ml-md"}," Miercoles ",-1),ga={style:{display:"flex","flex-direction":"column"}},ya=s("label",{class:"q-ml-md"},"Jueves",-1),_a={style:{display:"flex","flex-direction":"column"}},Va=s("label",{class:"q-ml-md"}," Viernes ",-1),wa={style:{display:"flex","flex-direction":"column"}},xa=s("label",{class:"q-ml-md"}," Sabado ",-1),qa=s("div",{class:"col-4 flex justify-end items-center q-my-sm"},[s("label",{class:"q-mb-md"},"Horario:")],-1),ka={class:"col-xs-7 col-sm-6 q-ml-md q-my-sm"},Ca={class:"row"},Sa={class:"col-xs-12 col-sm-5"},Pa={class:"row items-center justify-end"},Aa={class:"col-xs-12 col-sm-5 offset-sm-1"},Da={class:"row items-center justify-end"},Ma={class:"col-11 flex justify-start items-center"},Ra=s("div",{class:"col-4 flex justify-end items-center"},[s("label",null,"Contrase\xF1a:")],-1),Ia={class:"col-xs-7 col-sm-6 q-ml-md"},Ea=s("div",{class:"col-4 flex justify-end items-center q-my-sm"},[s("label",{for:""},"Repite Contrase\xF1a:")],-1),Ua={class:"col-xs-7 col-sm-6 q-ml-md q-my-sm"},$a={class:"col-xs-11 col-md-4"},Na={class:"row"},Oa=s("label",{class:"text-h6 text-weight-medium"},"Permisos:",-1),ja=[Oa],Wa=cl({__name:"FormUser",props:{edit:{type:Boolean}},setup(u){const U=u,j=C([]),P=C(Rl),A=C([]),F=C([]);let D=!1;const{api:z,getCompanies:W,formUser:t,expanded:x,validaciones:r,showConfirmPass:M,showPass:$,onRejected:N,loading:B,onSubmit:Y,route:oe}=Il();vl(async()=>{await Promise.all([await J(),await h()]),U.edit&&t.value.roles[0]=="SUPER-ADMINISTRADOR"||oe.name=="editar.usuario.profile"?(await Promise.resolve(),P.value[0].disabled=!0):P.value[0].disabled=!1});const J=async()=>{j.value=[],(await W()).forEach(a=>{j.value.push({label:a.nombre_comercial,value:a.id})})},h=async()=>{const{data:f}=await z.get("/roles-and-permisos");f.forEach(a=>{F.value.unshift({label:a.nombre,value:a.nombre,permisos:a.permisos})})},d=()=>{const f=F.value.find(a=>a.value==t.value.roles[0]);(f==null?void 0:f.label)=="SUPER-ADMINISTRADOR"?P.value[0].disabled=!0:P.value[0].disabled=!1,t.value.permisos=f.permisos};be(()=>t.value.permisos,f=>{f.length>0?r.value.permisos.isValid=!0:r.value.permisos.isValid=!1}),be(()=>t.value.company,f=>{V(t.value.company)});const V=async f=>{A.value=[],(!U.edit||D)&&(t.value.sucursales=[""]),D=!0;const{data:a}=await z.get(`/sucursal/find/${f}/company`);a.forEach(o=>{A.value.push({label:o.nombre,value:o.id})})};return(f,a)=>(I(),ae(Pl,{onSubmit:a[38]||(a[38]=o=>l(Y)(U.edit))},{default:v(()=>[c(yl,{class:"my-card"},{default:v(()=>[c(fl,{class:"q-pt-none"},{default:v(()=>[s("div",El,[s("div",Ul,[s("div",$l,[Nl,Ol,s("div",jl,[c(T,{modelValue:l(t).fullName,"onUpdate:modelValue":[a[0]||(a[0]=o=>l(t).fullName=o),a[1]||(a[1]=o=>l(r).fullName.isValid=!0)],modelModifiers:{trim:!0},error:!l(r).fullName.isValid,"input-style":"text-transform: uppercase;",dense:"",outlined:""},{error:v(()=>[s("label",{class:q(f.$q.dark.isActive?"text-red-4":"text-negative")},E(l(r).fullName.message),3)]),_:1},8,["modelValue","error"])]),Tl,s("div",Ql,[c(T,{modelValue:l(t).usuario,"onUpdate:modelValue":[a[2]||(a[2]=o=>l(t).usuario=o),a[3]||(a[3]=o=>l(r).usuario.isValid=!0)],modelModifiers:{trim:!0},error:!l(r).usuario.isValid,dense:"",outlined:""},{error:v(()=>[s("label",{class:q(f.$q.dark.isActive?"text-red-4":"text-negative")},E(l(r).usuario.message),3)]),append:v(()=>[c(S,{name:"person",size:"1.3rem"})]),_:1},8,["modelValue","error"])]),Fl,s("div",zl,[c(T,{modelValue:l(t).email,"onUpdate:modelValue":[a[4]||(a[4]=o=>l(t).email=o),a[5]||(a[5]=o=>l(r).email.isValid=!0)],modelModifiers:{trim:!0},error:!l(r).email.isValid,type:"text",dense:"",outlined:""},{error:v(()=>[s("label",{class:q(f.$q.dark.isActive?"text-red-4":"text-negative")},E(l(r).email.message),3)]),append:v(()=>[c(S,{name:"mail",size:"1.2rem"})]),_:1},8,["modelValue","error"])]),Hl,s("div",Bl,[c(T,{modelValue:l(t).celular,"onUpdate:modelValue":[a[6]||(a[6]=o=>l(t).celular=o),a[8]||(a[8]=o=>l(r).celular.isValid=!0)],counter:"",maxlength:"10",onKeyup:a[7]||(a[7]=o=>l(t).celular=l(t).celular.replace(/\D/g,"")),"lazy-rules":"",error:!l(r).celular.isValid,dense:"",outlined:""},{error:v(()=>[s("label",{class:q(f.$q.dark.isActive?"text-red-4":"text-negative")},E(l(r).celular.message),3)]),append:v(()=>[c(S,{name:"call",size:"1.2rem"})]),_:1},8,["modelValue","error"])]),s("div",{class:q(["col-11 flex justify-start items-center",[f.$q.screen.xs?"q-my-md":""]])},Jl,2),f.$route.name!="editar.usuario.profile"||l(t).roles[0]=="SUPER-ADMINISTRADOR"||l(t).roles[0]=="ADMINISTRADOR"?(I(),K(pl,{key:0},[Kl,s("div",Ll,[c(fe,{color:"orange","transition-show":"scale","transition-hide":"scale",outlined:"",modelValue:l(t).company,"onUpdate:modelValue":[a[9]||(a[9]=o=>l(t).company=o),a[10]||(a[10]=o=>l(r).company.isValid=!0)],dense:"",error:!l(r).company.isValid,options:j.value,"emit-value":"","map-options":""},{error:v(()=>[s("label",{class:q(f.$q.dark.isActive?"text-red-4":"text-negative")},E(l(r).company.message),3)]),"no-option":v(()=>[c(De,null,{default:v(()=>[c(Me,{class:"text-grey"},{default:v(()=>[ve(" No hay resultados ")]),_:1})]),_:1})]),_:1},8,["modelValue","error","options"])]),l(t).company.length!==0?(I(),K("div",Gl,Xl)):Q("",!0),l(t).company.length!==0?(I(),K("div",Zl,[c(fe,{modelValue:l(t).roles[0],"onUpdate:modelValue":[a[11]||(a[11]=o=>l(t).roles[0]=o),a[12]||(a[12]=o=>(l(r).roles.isValid=!0,d()))],outlined:"",dense:"","transition-show":"scale","transition-hide":"scale",error:!l(r).roles.isValid,options:F.value,"emit-value":"","map-options":""},{error:v(()=>[s("label",{class:q(f.$q.dark.isActive?"text-red-4":"text-negative")},E(l(r).roles.message),3)]),_:1},8,["modelValue","error","options"])])):Q("",!0),l(t).roles[0]!==""&&l(t).company.length!==0&&l(t).roles[0]!=="ADMINISTRADOR"&&l(t).roles[0]!=="SUPER-ADMINISTRADOR"?(I(),K("div",ea,aa)):Q("",!0),l(t).roles[0]!==""&&l(t).company.length!==0&&l(t).roles[0]!=="ADMINISTRADOR"&&l(t).roles[0]!=="SUPER-ADMINISTRADOR"?(I(),K("div",sa,[c(fe,{modelValue:l(t).sucursales[0],"onUpdate:modelValue":[a[13]||(a[13]=o=>l(t).sucursales[0]=o),a[14]||(a[14]=o=>l(r).sucursales.isValid=!0)],outlined:"",dense:"",required:"","emit-value":"","map-options":"","transition-show":"scale","transition-hide":"scale",error:!l(r).sucursales.isValid,options:A.value},{error:v(()=>[s("label",{class:q(f.$q.dark.isActive?"text-red-4":"text-negative")},E(l(r).sucursales.message),3)]),"no-option":v(()=>[c(De,null,{default:v(()=>[c(Me,{class:"text-grey"},{default:v(()=>[ve(" Debes crear una sucursal ")]),_:1})]),_:1})]),_:1},8,["modelValue","error","options"])])):Q("",!0),oa,s("div",ta,[c(fe,{modelValue:l(t).isActive,"onUpdate:modelValue":a[15]||(a[15]=o=>l(t).isActive=o),outlined:"",dense:"","emit-value":"","map-options":"",options:[{label:"Activo",value:!0},{label:"Inactivo",value:!1}]},{append:v(()=>[l(t).isActive?(I(),ae(S,{key:0,size:"1.2rem",name:"fa-solid fa-user-check"})):(I(),ae(S,{key:1,name:"fa-solid fa-user-xmark",size:"1.2rem"}))]),_:1},8,["modelValue"])])],64)):Q("",!0),ia,s("div",ra,[c(_l,{dense:"",outlined:"","bottom-slots":"",accept:".jpg, .png, .jpeg",onRejected:l(N),"onUpdate:modelValue":[a[17]||(a[17]=o=>l(r).foto.isValid=!0),a[18]||(a[18]=o=>l(t).foto=o)],error:!l(r).foto.isValid,modelValue:l(t).foto,label:l(t).foto_old==null?"Cargar Imagen":l(t).foto_old},{error:v(()=>[s("label",{class:q(f.$q.dark.isActive?"text-red-4":"text-negative")},E(l(r).foto.message),3)]),prepend:v(()=>[c(S,{name:"fa-solid fa-image"})]),append:v(()=>[typeof l(t).foto=="object"&&l(t).foto!==null?(I(),ae(S,{key:0,name:"close",onClick:a[16]||(a[16]=hl(o=>l(t).foto=null,["stop","prevent"])),class:"cursor-pointer"})):Q("",!0)]),_:1},8,["onRejected","error","modelValue","label"])]),ua,na,da,s("div",ma,[s("div",ca,[c(L,{class:"q-ml-sm",size:"lg",val:"Lunes",modelValue:l(t).horarios_dias,"onUpdate:modelValue":a[19]||(a[19]=o=>l(t).horarios_dias=o)},null,8,["modelValue"]),va]),s("div",fa,[c(L,{class:"q-ml-sm",size:"lg",val:"Martes",modelValue:l(t).horarios_dias,"onUpdate:modelValue":a[20]||(a[20]=o=>l(t).horarios_dias=o)},null,8,["modelValue"]),pa]),s("div",ha,[c(L,{class:"q-ml-sm",size:"lg",val:"Miercoles",modelValue:l(t).horarios_dias,"onUpdate:modelValue":a[21]||(a[21]=o=>l(t).horarios_dias=o)},null,8,["modelValue"]),ba]),s("div",ga,[c(L,{class:"q-ml-sm",size:"lg",val:"Jueves",modelValue:l(t).horarios_dias,"onUpdate:modelValue":a[22]||(a[22]=o=>l(t).horarios_dias=o)},null,8,["modelValue"]),ya]),s("div",_a,[c(L,{class:"q-ml-sm",size:"lg",val:"Viernes",modelValue:l(t).horarios_dias,"onUpdate:modelValue":a[23]||(a[23]=o=>l(t).horarios_dias=o)},null,8,["modelValue"]),Va]),s("div",wa,[c(L,{class:"q-ml-sm",size:"lg",val:"Sabado",modelValue:l(t).horarios_dias,"onUpdate:modelValue":a[24]||(a[24]=o=>l(t).horarios_dias=o)},null,8,["modelValue"]),xa])]),qa,s("div",ka,[s("div",Ca,[s("div",Sa,[c(T,{outlined:"",modelValue:l(t).horarios_time[0],"onUpdate:modelValue":a[26]||(a[26]=o=>l(t).horarios_time[0]=o),mask:"time",dense:""},{append:v(()=>[c(S,{name:"access_time",class:"cursor-pointer"},{default:v(()=>[c(Re,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:v(()=>[c(Ee,{modelValue:l(t).horarios_time[0],"onUpdate:modelValue":a[25]||(a[25]=o=>l(t).horarios_time[0]=o)},{default:v(()=>[s("div",Pa,[xe(c(se,{label:"Close",color:"primary",flat:""},null,512),[[Ie]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),s("div",Aa,[c(T,{outlined:"",modelValue:l(t).horarios_time[1],"onUpdate:modelValue":a[28]||(a[28]=o=>l(t).horarios_time[1]=o),mask:"time",dense:""},{append:v(()=>[c(S,{name:"access_time",class:"cursor-pointer"},{default:v(()=>[c(Re,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:v(()=>[c(Ee,{modelValue:l(t).horarios_time[1],"onUpdate:modelValue":a[27]||(a[27]=o=>l(t).horarios_time[1]=o)},{default:v(()=>[s("div",Da,[xe(c(se,{label:"Close",color:"primary",flat:""},null,512),[[Ie]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])])]),s("div",Ma,[s("label",{class:q(["text-h6 text-weight-medium",[f.$q.screen.xs?"q-my-md":""]])}," Nueva Contrase\xF1a: ",2)]),Ra,s("div",Ia,[c(T,{type:l($)?"password":"text",outlined:"",dense:"","onUpdate:modelValue":[a[30]||(a[30]=o=>l(r).password.isValid=!0),a[31]||(a[31]=o=>l(t).password=o)],error:!l(r).password.isValid,modelValue:l(t).password,modelModifiers:{trim:!0}},{error:v(()=>[s("label",{class:q(f.$q.dark.isActive?"text-red-4":"text-negative")},E(l(r).password.message),3)]),append:v(()=>[c(S,{name:l($)?"visibility_off":"visibility",color:"blue-grey",class:"cursor-pointer",onClick:a[29]||(a[29]=o=>$.value=!l($))},null,8,["name"])]),prepend:v(()=>[c(S,{name:"key",color:"blue-grey-3"})]),_:1},8,["type","error","modelValue"])]),Ea,s("div",Ua,[c(T,{type:l(M)?"password":"text",outlined:"",dense:"","onUpdate:modelValue":[a[33]||(a[33]=o=>l(r).confirmPassword.isValid=!0),a[34]||(a[34]=o=>l(t).confirmPassword=o)],error:!l(r).confirmPassword.isValid,modelValue:l(t).confirmPassword,modelModifiers:{trim:!0}},{error:v(()=>[s("label",{class:q(f.$q.dark.isActive?"text-red-4":"text-negative")},E(l(r).confirmPassword.message),3)]),append:v(()=>[c(S,{name:l(M)?"visibility_off":"visibility",color:"blue-grey",class:"cursor-pointer",onClick:a[32]||(a[32]=o=>M.value=!l(M))},null,8,["name"])]),prepend:v(()=>[c(S,{name:"key",color:"blue-grey-3"})]),_:1},8,["type","error","modelValue"])])])]),s("div",$a,[s("div",Na,[s("div",{class:q(["col-11 flex justify-start items-center",[f.$q.screen.xs?"q-my-md":""]])},ja,2),c(Sl,{class:q(["col-xs-11 col-sm-11 col-sm-11",[f.$q.screen.xs?"offset-1":""]]),"default-expand-all":!1,nodes:P.value,"label-key":"label","node-key":"value","control-color":"deep-orange-14","tick-strategy":"leaf",expanded:l(x),"onUpdate:expanded":a[35]||(a[35]=o=>bl(x)?x.value=o:null),ticked:l(t).permisos,"onUpdate:ticked":a[36]||(a[36]=o=>l(t).permisos=o)},null,8,["class","nodes","expanded","ticked"]),l(r).permisos.isValid?Q("",!0):(I(),K("div",{key:0,class:q(["col-11 text-center",f.$q.dark.isActive?"text-red-4":"text-negative"])},[s("label",null,E(l(r).permisos.message),1)],2))])])])]),_:1}),c(gl,{class:q(["q-pb-md",[f.$q.screen.width<600?"justify-center q-ml-xl":"justify-between"]])},{default:v(()=>[f.$q.screen.width>600?(I(),ae(se,{key:0,type:"submit",icon:"arrow_back",onClick:a[37]||(a[37]=o=>f.$router.push("/usuarios")),outline:"",rounded:"",class:"q-mr-lg",color:f.$q.dark.isActive?"blue-grey-2":"blue-grey-10"},{default:v(()=>[ve(" \xA0 Regresar ")]),_:1},8,["color"])):Q("",!0),c(se,{type:"submit",icon:"save",loading:l(B),outline:"",rounded:"",class:"q-mr-lg",style:{color:"#696cff"}},{default:v(()=>[ve(" \xA0 Guardar Cambios ")]),_:1},8,["loading"])]),_:1},8,["class"])]),_:1})]),_:1}))}});export{Wa as _,Il as u};
