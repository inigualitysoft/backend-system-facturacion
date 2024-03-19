import{Q as H,a as k}from"./QBreadcrumbs.ea768e66.js";import{m as D,r as F,n as v,p as m,i as L,O,a8 as J,z as N,k as G,t as I,bD as K,bE as X,s as Q,I as Y,J as Z,a2 as ee,N as te,$ as oe,o as C,c as E,e as o,ae as d,f as u,g as f,ab as x,ad as r,Q as w,a9 as R,aa as B,h as T,af as re,d as M,x as se,aU as ne,aR as le,aj as ae}from"./index.d6c4bdc6.js";import{u as A}from"./useCliente.e1731374.js";import{Q as ie}from"./QSlideTransition.772ccd4a.js";import{u as de,a as ce,b as ue,c as me,_ as pe,d as ve}from"./ServicioInternet.acf6a0c1.js";import{u as fe}from"./QDate.dd5f33e5.js";import{Q as qe}from"./QForm.18dc3b57.js";import{Q as _e}from"./QSelect.a8a1d697.js";import"./useHelpers.0a8a684c.js";import"./use-quasar.293c2d69.js";import"./axios.465f24f1.js";import"./date.6bb37875.js";import"./format.cbf00d5d.js";import"./touch.3df10340.js";import"./QItemLabel.1ee9546f.js";import"./QChip.f02742be.js";import"./QBadge.dade6de9.js";import"./QPopupProxy.59f3ce1c.js";import"./ClosePopup.ce0f6283.js";import"./ModalMapBox.8908603a.js";import"./QBtnGroup.227f3910.js";var W=D({name:"StepHeader",props:{stepper:{},step:{},goToPanel:Function},setup(e,{attrs:s}){const{proxy:{$q:a}}=N(),p=F(null),t=v(()=>e.stepper.modelValue===e.step.name),n=v(()=>{const i=e.step.disable;return i===!0||i===""}),l=v(()=>{const i=e.step.error;return i===!0||i===""}),b=v(()=>{const i=e.step.done;return n.value===!1&&(i===!0||i==="")}),y=v(()=>{const i=e.step.headerNav,c=i===!0||i===""||i===void 0;return n.value===!1&&e.stepper.headerNav&&c}),g=v(()=>e.step.prefix&&(t.value===!1||e.stepper.activeIcon==="none")&&(l.value===!1||e.stepper.errorIcon==="none")&&(b.value===!1||e.stepper.doneIcon==="none")),q=v(()=>{const i=e.step.icon||e.stepper.inactiveIcon;if(t.value===!0){const c=e.step.activeIcon||e.stepper.activeIcon;return c==="none"?i:c||a.iconSet.stepper.active}if(l.value===!0){const c=e.step.errorIcon||e.stepper.errorIcon;return c==="none"?i:c||a.iconSet.stepper.error}if(n.value===!1&&b.value===!0){const c=e.step.doneIcon||e.stepper.doneIcon;return c==="none"?i:c||a.iconSet.stepper.done}return i}),_=v(()=>{const i=l.value===!0?e.step.errorColor||e.stepper.errorColor:void 0;if(t.value===!0){const c=e.step.activeColor||e.stepper.activeColor||e.step.color;return c!==void 0?c:i}return i!==void 0?i:n.value===!1&&b.value===!0?e.step.doneColor||e.stepper.doneColor||e.step.color||e.stepper.inactiveColor:e.step.color||e.stepper.inactiveColor}),h=v(()=>"q-stepper__tab col-grow flex items-center no-wrap relative-position"+(_.value!==void 0?` text-${_.value}`:"")+(l.value===!0?" q-stepper__tab--error q-stepper__tab--error-with-"+(g.value===!0?"prefix":"icon"):"")+(t.value===!0?" q-stepper__tab--active":"")+(b.value===!0?" q-stepper__tab--done":"")+(y.value===!0?" q-stepper__tab--navigation q-focusable q-hoverable":"")+(n.value===!0?" q-stepper__tab--disabled":"")),S=v(()=>e.stepper.headerNav!==!0?!1:y.value);function V(){p.value!==null&&p.value.focus(),t.value===!1&&e.goToPanel(e.step.name)}function P(i){i.keyCode===13&&t.value===!1&&e.goToPanel(e.step.name)}return()=>{const i={class:h.value};y.value===!0&&(i.onClick=V,i.onKeyup=P,Object.assign(i,n.value===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:s.tabindex||0}));const c=[m("div",{class:"q-focus-helper",tabindex:-1,ref:p}),m("div",{class:"q-stepper__dot row flex-center q-stepper__line relative-position"},[m("span",{class:"row flex-center"},[g.value===!0?e.step.prefix:m(L,{name:q.value})])])];if(e.step.title!==void 0&&e.step.title!==null){const $=[m("div",{class:"q-stepper__title"},e.step.title)];e.step.caption!==void 0&&e.step.caption!==null&&$.push(m("div",{class:"q-stepper__caption"},e.step.caption)),c.push(m("div",{class:"q-stepper__label q-stepper__line relative-position"},$))}return O(m("div",i,c),[[J,S.value]])}}});function z(e){return m("div",{class:"q-stepper__step-content"},[m("div",{class:"q-stepper__step-inner"},Q(e.default))])}const U={setup(e,{slots:s}){return()=>z(s)}};var j=D({name:"QStep",props:{...de,icon:String,color:String,title:{type:String,required:!0},caption:String,prefix:[String,Number],doneIcon:String,doneColor:String,activeIcon:String,activeColor:String,errorIcon:String,errorColor:String,headerNav:{type:Boolean,default:!0},done:Boolean,error:Boolean,onScroll:[Function,Array]},setup(e,{slots:s,emit:a}){const{proxy:{$q:p}}=N(),t=G(K,I);if(t===I)return console.error("QStep needs to be a child of QStepper"),I;const{getCacheWithFn:n}=fe(),l=F(null),b=v(()=>t.value.modelValue===e.name),y=v(()=>p.platform.is.ios!==!0&&p.platform.is.chrome===!0||b.value!==!0||t.value.vertical!==!0?{}:{onScroll(_){const{target:h}=_;h.scrollTop>0&&(h.scrollTop=0),e.onScroll!==void 0&&a("scroll",_)}}),g=v(()=>typeof e.name=="string"||typeof e.name=="number"?e.name:String(e.name));function q(){const _=t.value.vertical;return _===!0&&t.value.keepAlive===!0?m(X,t.value.keepAliveProps.value,b.value===!0?[m(t.value.needsUniqueKeepAliveWrapper.value===!0?n(g.value,()=>({...U,name:g.value})):U,{key:g.value},s.default)]:void 0):_!==!0||b.value===!0?z(s):void 0}return()=>m("div",{ref:l,class:"q-stepper__step",role:"tabpanel",...y.value},t.value.vertical===!0?[m(W,{stepper:t.value,step:e,goToPanel:t.value.goToPanel}),t.value.animated===!0?m(ie,q):q()]:[q()])}});const be=/(-\w)/g;function ge(e){const s={};for(const a in e){const p=a.replace(be,t=>t[1].toUpperCase());s[p]=e[a]}return s}var ye=D({name:"QStepper",props:{...Y,...ce,flat:Boolean,bordered:Boolean,alternativeLabels:Boolean,headerNav:Boolean,contracted:Boolean,headerClass:String,inactiveColor:String,inactiveIcon:String,doneIcon:String,doneColor:String,activeIcon:String,activeColor:String,errorIcon:String,errorColor:String},emits:ue,setup(e,{slots:s}){const a=N(),p=Z(e,a.proxy.$q),{updatePanelsList:t,isValidPanelName:n,updatePanelIndex:l,getPanelContent:b,getPanels:y,panelDirectives:g,goToPanel:q,keepAliveProps:_,needsUniqueKeepAliveWrapper:h}=me();ee(K,v(()=>({goToPanel:q,keepAliveProps:_,needsUniqueKeepAliveWrapper:h,...e})));const S=v(()=>`q-stepper q-stepper--${e.vertical===!0?"vertical":"horizontal"}`+(e.flat===!0?" q-stepper--flat":"")+(e.bordered===!0?" q-stepper--bordered":"")+(p.value===!0?" q-stepper--dark q-dark":"")),V=v(()=>`q-stepper__header row items-stretch justify-between q-stepper__header--${e.alternativeLabels===!0?"alternative":"standard"}-labels`+(e.flat===!1||e.bordered===!0?" q-stepper__header--border":"")+(e.contracted===!0?" q-stepper__header--contracted":"")+(e.headerClass!==void 0?` ${e.headerClass}`:""));function P(){const i=Q(s.message,[]);if(e.vertical===!0){n(e.modelValue)&&l();const c=m("div",{class:"q-stepper__content"},Q(s.default));return i===void 0?[c]:i.concat(c)}return[m("div",{class:V.value},y().map(c=>{const $=ge(c.props);return m(W,{key:$.name,stepper:e,step:$,goToPanel:q})})),i,oe("div",{class:"q-stepper__content q-panel-parent"},b(),"cont",e.swipeable,()=>g.value)]}return()=>(t(s),m("div",{class:S.value},te(s.navigation,P())))}});const he={class:"col-xs-12 col-md-6"},xe={class:"row"},$e={class:"col-xs-12 col-md-7"},we={class:"row"},Ce={class:"col-xs-12 col-md-7"},Se={class:"row"},Ve={class:"col-xs-12 col-md-7"},Pe={class:"row"},ke={class:"col-xs-12 col-md-7"},Ie={class:"row"},je={class:"col-xs-12 col-md-7"},Qe={class:"row"},De={class:"col-xs-12 col-md-7"},Ne={__name:"DatosPersonales",setup(e){const{formCliente:s,validaciones:a,validarDatosPersonales:p}=A();return(t,n)=>(C(),E("div",{class:d(["row q-col-gutter-md",t.$q.screen.width>1022?"q-col-gutter-y-lg q-pt-md":""])},[o("div",he,[o("div",xe,[o("div",{class:d(["col-xs-12 col-md-4 flex items-center justify-end",[t.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"texto-rigth q-pb-md"]])},[o("label",{class:d(t.$q.screen.width<1022||"q-pr-md")}," Nombres: ",2)],2),o("div",$e,[u(w,{modelValue:r(s).nombres,"onUpdate:modelValue":[n[0]||(n[0]=l=>r(s).nombres=l),n[1]||(n[1]=l=>(r(s).nombres=r(s).nombres.toUpperCase(),r(a).nombres.isValid=!0))],modelModifiers:{trim:!0},error:!r(a).nombres.isValid,"input-class":"resaltarTextoInput",dense:"",outlined:""},{error:f(()=>[o("label",{class:d(t.$q.dark.isActive?"text-red-4":"text-negative")},x(r(a).nombres.message),3)]),_:1},8,["modelValue","error"])])])]),o("div",{class:d(["col-xs-12 col-md-6",t.$q.screen.width>1022||"q-pt-none"])},[o("div",we,[o("div",{class:d(["col-xs-12 col-md-4 flex items-center justify-end",[t.$q.screen.width<1022?"justify-center q-mt-md q-pb-xs":"justify-end text-right"]])},[o("label",{class:d(t.$q.screen.width<1022||"q-pr-md")}," Tipo de Documento: ",2)],2),o("div",Ce,[u(_e,{dense:"",modelValue:r(s).tipo_documento,"onUpdate:modelValue":[n[2]||(n[2]=l=>r(s).tipo_documento=l),n[3]||(n[3]=l=>r(a).tipo_documento.isValid=!0)],modelModifiers:{trim:!0},outlined:"",error:!r(a).tipo_documento.isValid,"emit-value":"","map-options":"",options:[{label:"RUC",value:"04"},{label:"Cedula",value:"05"},{label:"Pasaporte",value:"06"}]},{error:f(()=>[o("label",{class:d(t.$q.dark.isActive?"text-red-4":"text-negative")},x(r(a).tipo_documento.message),3)]),_:1},8,["modelValue","error"])])])],2),o("div",{class:d(["col-xs-12 col-md-6",t.$q.screen.width>1022||"q-pt-none"])},[o("div",Se,[o("div",{class:d(["col-xs-12 col-md-4 flex items-center justify-end",[t.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end q-pb-md"]])},[o("label",{class:d(t.$q.screen.width<1022||"q-pr-md text-right")}," Numero de Documento: ",2)],2),o("div",Ve,[u(w,{type:t.$q.platform.is.mobile?"number":"text",modelValue:r(s).numero_documento,"onUpdate:modelValue":n[4]||(n[4]=l=>r(s).numero_documento=l),readonly:r(s).tipo_documento==="","input-class":"resaltarTextoInput",counter:"",maxlength:r(s).tipo_documento==="04"?13:10,error:!r(a).numero_documento.isValid,onKeyup:n[5]||(n[5]=l=>(r(a).numero_documento.isValid=!0,r(s).numero_documento=r(s).numero_documento.replace(/\D/g,""))),dense:"",outlined:""},{error:f(()=>[o("label",{class:d(t.$q.dark.isActive?"text-red-4":"text-negative")},x(r(a).numero_documento.message),3)]),_:1},8,["type","modelValue","readonly","maxlength","error"])])])],2),o("div",{class:d(["col-xs-12 col-md-6",t.$q.screen.width>1022||"q-pt-none"])},[o("div",Pe,[o("div",{class:d(["col-xs-12 col-md-4 flex items-center justify-end",[t.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end q-pb-md"]])},[o("label",{class:d(t.$q.screen.width<1022||"q-pr-md")}," Celular: ",2)],2),o("div",ke,[u(w,{type:t.$q.platform.is.mobile?"number":"text",modelValue:r(s).celular,"onUpdate:modelValue":n[6]||(n[6]=l=>r(s).celular=l),modelModifiers:{trim:!0},counter:"",maxlength:"10","input-class":"resaltarTextoInput",error:!r(a).celular.isValid,onKeyup:n[7]||(n[7]=l=>(r(a).celular.isValid=!0,r(s).celular=r(s).celular.replace(/\D/g,""))),dense:"",outlined:""},{error:f(()=>[o("label",{class:d(t.$q.dark.isActive?"text-red-4":"text-negative")},x(r(a).celular.message),3)]),_:1},8,["type","modelValue","error"])])])],2),o("div",{class:d(["col-xs-12 col-md-6",t.$q.screen.width>1022||"q-pt-none"])},[o("div",Ie,[o("div",{class:d(["col-xs-12 col-md-4 flex items-center justify-end",[t.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end"]])},[o("label",{class:d(t.$q.screen.width<1022||"q-pr-md")}," Email: ",2)],2),o("div",je,[u(w,{modelValue:r(s).email,"onUpdate:modelValue":n[8]||(n[8]=l=>r(s).email=l),modelModifiers:{trim:!0},error:!r(a).email.isValid,"input-class":"resaltarTextoInput",onKeyup:n[9]||(n[9]=l=>r(a).email.isValid=!0),dense:"",outlined:""},{error:f(()=>[o("label",{class:d(t.$q.dark.isActive?"text-red-4":"text-negative")},x(r(a).email.message),3)]),_:1},8,["modelValue","error"])])])],2),o("div",{class:d(["col-xs-12 col-md-6",t.$q.screen.width>1022||"q-pt-none"])},[o("div",Qe,[o("div",{class:d(["col-xs-12 col-md-4 flex items-center justify-end",[t.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end"]])},[o("label",{class:d(t.$q.screen.width<1022||"q-pr-md")}," Direccion: ",2)],2),o("div",De,[u(w,{modelValue:r(s).direccion,"onUpdate:modelValue":n[10]||(n[10]=l=>r(s).direccion=l),error:!r(a).direccion.isValid,"input-class":"resaltarTextoInput",onKeyup:n[11]||(n[11]=l=>r(a).direccion.isValid=!0),dense:"",outlined:""},{error:f(()=>[o("label",{class:d(t.$q.dark.isActive?"text-red-4":"text-negative")},x(r(a).direccion.message),3)]),_:1},8,["modelValue","error"])])])],2),o("div",{class:d(["col-xs-12 col-md-12 flex q-py-md",[t.$q.screen.width<600?"justify-center q-pt-none q-ml-md":"justify-between"]]),style:{"padding-bottom":"0px"}},[t.$q.screen.width>600?(C(),R(T,{key:0,icon:"arrow_back",onClick:n[12]||(n[12]=l=>t.$router.push("/clientes")),outline:"",rounded:"",class:"q-ml-md",color:t.$q.dark.isActive?"blue-grey-2":"blue-grey-10"},{default:f(()=>[B(" \xA0 Salir ")]),_:1},8,["color"])):re("",!0),u(T,{onClick:r(p),"icon-right":"arrow_forward",outline:"",rounded:"",class:"q-mr-lg",style:{color:"#696cff"}},{default:f(()=>[B(" \xA0 Siguiente\xA0 ")]),_:1},8,["onClick"])],2)],2))}};const Ae={class:"col-12"},Be=M({__name:"FormCliente",props:{edit:{type:Boolean}},setup(e){const s=e,{done1:a,done2:p,done3:t,onSubmit:n,step:l,limpiarFormulario:b,quitarErrores:y}=A();return se(()=>{b(),y(),a.value,p.value,t.value=!1,l.value=1}),(g,q)=>(C(),R(qe,{onSubmit:q[1]||(q[1]=_=>r(n)(s.edit)),class:"q-mt-md"},{default:f(()=>[o("div",{class:d(["row q-col-gutter-md q-px-lg q-pb-lg",g.$q.screen.width>1022?"q-col-gutter-y-lg":""])},[o("div",Ae,[u(ye,{modelValue:r(l),"onUpdate:modelValue":q[0]||(q[0]=_=>ne(l)?l.value=_:null),"header-nav":"",ref:"stepper",color:"primary",animated:""},{default:f(()=>[u(j,{name:1,title:"Datos Personales","done-color":"secondary",caption:"Nombres, Direcci\xF3n, Telefono...",icon:"settings",done:r(l)>1},{default:f(()=>[u(Ne)]),_:1},8,["done"]),u(j,{name:2,title:"Facturaci\xF3n y Notificaciones",caption:"Dia de pago, Corte, aviso",icon:"create_new_folder",done:r(l)>2,"done-color":"secondary"},{default:f(()=>[u(pe)]),_:1},8,["done"]),u(j,{name:3,title:"Servicios",caption:"Queues, PPPoE, Hotspot, etc",icon:"add_comment"},{default:f(()=>[u(ve,{edit:s.edit},null,8,["edit"])]),_:1})]),_:1},8,["modelValue"])])],2)]),_:1}))}}),Te={class:"q-ma-lg q-pt-md"},Ue={class:"row q-col-gutter-md",style:{"justify-content":"center"}},Fe=o("label",{class:"text-h6 text-center",style:{position:"relative",top:"-8px",left:"17px"}}," Nuevo Cliente ",-1),Ke=[Fe],Ee={class:"row q-col-gutter-md",style:{"justify-content":"center"}},Re={class:"col-xs-11 col-md-11 q-pt-xs"},ct=M({__name:"AddCliente",setup(e){const{limpiarFormulario:s,quitarErrores:a}=A();return s(),a(),(p,t)=>(C(),E(ae,null,[o("div",Te,[o("div",Ue,[o("div",{class:d(["col-xs-12 q-pl-none",[p.$q.screen.width<1022?"q-pt-sm col-md-6":"col-md-6"]])},[u(H,{class:d(["row q-mr-xs",[p.$q.screen.width<1022?"justify-center q-pt-sm":"justify-start "]])},{default:f(()=>[u(k,{label:"Inicio",icon:"home",to:"/"}),u(k,{label:"Clientes",icon:"fa-solid fa-list",to:"/clientes"}),u(k,{label:"Nuevo",icon:"add_circle"})]),_:1},8,["class"])],2),o("div",{class:d(["col-xs-12",[p.$q.screen.width<1022?"text-center q-pt-sm col-md-6 q-pl-none":"text-right col-md-5"]])},Ke,2)])]),o("div",Ee,[o("div",Re,[u(le,{flat:"",class:"shadow_custom"},{default:f(()=>[u(Be,{edit:!1})]),_:1})])])],64))}});export{ct as default};
