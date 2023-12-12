import{Q as pt,a as Pe}from"./QBreadcrumbs.b2007a40.js";import{r as x,k as _t,t as Ve,n as j,x as Ye,B as gt,bE as He,N as ee,a6 as ie,p as U,am as Ne,al as bt,bf as ht,i as se,M as yt,z as Se,bb as qt,aH as wt,m as ge,au as Te,V as Ue,v as pe,a0 as $t,K as Ct,L as xt,s as Ge,H as Pt,I as Vt,Z as Tt,o as V,a7 as F,g as o,e as a,ac as q,f as t,Q as H,ab as p,a9 as P,h as Z,a8 as I,a5 as It,aQ as Oe,af as Re,bp as kt,c as te,ad as ne,aP as be,bF as St,bG as Rt,ah as Ie,ag as At,aI as Et,aS as Dt,aT as Ft}from"./index.f53267b8.js";import{u as he}from"./useCliente.9c792930.js";import{api as Mt}from"./axios.44d120c1.js";import"./use-quasar.aae3d6a7.js";import{Q as Qt}from"./QResizeObserver.cd2d86a1.js";import{r as Lt,Q as ke}from"./QSelect.392e6efc.js";import{u as jt,a as Bt,b as Nt,c as Ut,_ as Ot}from"./FactAndNot.887232ee.js";import{Q as ye}from"./QForm.0e256771.js";import{Q as Xe,a as N}from"./QTable.fc9ddf59.js";import{Q as ze}from"./QBadge.aa574ed9.js";import{Q as We,a as Ke}from"./QTooltip.05966bd9.js";import{a as re,Q as Y,c as K}from"./QItemLabel.9ec15197.js";import{Q as zt}from"./QList.1a68e951.js";import{C as Wt}from"./ClosePopup.25ca5991.js";import{d as _e}from"./date.99d7fba5.js";import"./useHelpers.6ddec9d0.js";import"./QChip.2bfbdf41.js";import"./format.2bc25e5f.js";import"./touch.3df10340.js";import"./use-cache.b0833c75.js";const Kt=x([]),Yt=x(),Ht=x(!1),Gt=x([]),qe=()=>({api:Mt,servicios:Kt,showModalPago:Ht,factura:Yt,pagos:Gt});let Xt=0;const Zt=["click","keydown"],Jt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Xt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function ea(e,b,v,r){const n=_t(He,Ve);if(n===Ve)return console.error("QTab/QRouteTab component needs to be child of QTabs"),Ve;const{proxy:k}=Se(),$=x(null),M=x(null),f=x(null),c=j(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),s=j(()=>n.currentModel.value===e.name),T=j(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(s.value===!0?" q-tab--active"+(n.tabProps.value.activeClass?" "+n.tabProps.value.activeClass:"")+(n.tabProps.value.activeColor?` text-${n.tabProps.value.activeColor}`:"")+(n.tabProps.value.activeBgColor?` bg-${n.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&n.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||n.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(r!==void 0?r.linkClass.value:"")),Q=j(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(n.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),E=j(()=>e.disable===!0||n.hasFocus.value===!0||s.value===!1&&n.hasActiveTab.value===!0?-1:e.tabindex||0);function h(i,D){if(D!==!0&&$.value!==null&&$.value.focus(),e.disable===!0){r!==void 0&&r.hasRouterLink.value===!0&&Ne(i);return}if(r===void 0){n.updateModel({name:e.name}),v("click",i);return}if(r.hasRouterLink.value===!0){const L=(S={})=>{let O;const z=S.to===void 0||qt(S.to,e.to)===!0?n.avoidRouteWatcher=wt():null;return r.navigateToRouterLink(i,{...S,returnRouterError:!0}).catch(J=>{O=J}).then(J=>{if(z===n.avoidRouteWatcher&&(n.avoidRouteWatcher=!1,O===void 0&&(J===void 0||J.message.startsWith("Avoided redundant navigation")===!0)&&n.updateModel({name:e.name})),S.returnRouterError===!0)return O!==void 0?Promise.reject(O):J})};v("click",i,L),i.defaultPrevented!==!0&&L();return}v("click",i)}function y(i){bt(i,[13,32])?h(i,!0):ht(i)!==!0&&i.keyCode>=35&&i.keyCode<=40&&i.altKey!==!0&&i.metaKey!==!0&&n.onKbdNavigate(i.keyCode,k.$el)===!0&&Ne(i),v("keydown",i)}function m(){const i=n.tabProps.value.narrowIndicator,D=[],L=U("div",{ref:f,class:["q-tab__indicator",n.tabProps.value.indicatorClass]});e.icon!==void 0&&D.push(U(se,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&D.push(U("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&D.push(e.alertIcon!==void 0?U(se,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):U("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),i===!0&&D.push(L);const S=[U("div",{class:"q-focus-helper",tabindex:-1,ref:$}),U("div",{class:Q.value},yt(b.default,D))];return i===!1&&S.push(L),S}const _={name:j(()=>e.name),rootRef:M,tabIndicatorRef:f,routeData:r};Ye(()=>{n.unregisterTab(_)}),gt(()=>{n.registerTab(_)});function d(i,D){const L={ref:M,class:T.value,tabindex:E.value,role:"tab","aria-selected":s.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:h,onKeydown:y,...D};return ee(U(i,L,m()),[[ie,c.value]])}return{renderTab:d,$tabs:n}}var ce=ge({name:"QTab",props:Jt,emits:Zt,setup(e,{slots:b,emit:v}){const{renderTab:r}=ea(e,b,v);return()=>r("div")}});function ta(e,b,v){const r=v===!0?["left","right"]:["top","bottom"];return`absolute-${b===!0?r[0]:r[1]}${e?` text-${e}`:""}`}const aa=["left","center","right","justify"];var Ze=ge({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>aa.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:b,emit:v}){const{proxy:r}=Se(),{$q:n}=r,{registerTick:k}=Te(),{registerTick:$}=Te(),{registerTick:M}=Te(),{registerTimeout:f,removeTimeout:c}=Ue(),{registerTimeout:s,removeTimeout:T}=Ue(),Q=x(null),E=x(null),h=x(e.modelValue),y=x(!1),m=x(!0),_=x(!1),d=x(!1),i=[],D=x(0),L=x(!1);let S=null,O=null,z;const J=j(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:ta(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),et=j(()=>{const l=D.value,u=h.value;for(let g=0;g<l;g++)if(i[g].name.value===u)return!0;return!1}),tt=j(()=>`q-tabs__content--align-${y.value===!0?"left":d.value===!0?"justify":e.align}`),at=j(()=>`q-tabs row no-wrap items-center q-tabs--${y.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),ot=j(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+tt.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),de=j(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),me=j(()=>e.vertical!==!0&&n.lang.rtl===!0),we=j(()=>Lt===!1&&me.value===!0);pe(me,le),pe(()=>e.modelValue,l=>{$e({name:l,setCurrent:!0,skipEmit:!0})}),pe(()=>e.outsideArrows,ve);function $e({name:l,setCurrent:u,skipEmit:g}){h.value!==l&&(g!==!0&&e["onUpdate:modelValue"]!==void 0&&v("update:modelValue",l),(u===!0||e["onUpdate:modelValue"]===void 0)&&(lt(h.value,l),h.value=l))}function ve(){k(()=>{Ae({width:Q.value.offsetWidth,height:Q.value.offsetHeight})})}function Ae(l){if(de.value===void 0||E.value===null)return;const u=l[de.value.container],g=Math.min(E.value[de.value.scroll],Array.prototype.reduce.call(E.value.children,(A,C)=>A+(C[de.value.content]||0),0)),R=u>0&&g>u;y.value=R,R===!0&&$(le),d.value=u<parseInt(e.breakpoint,10)}function lt(l,u){const g=l!=null&&l!==""?i.find(A=>A.name.value===l):null,R=u!=null&&u!==""?i.find(A=>A.name.value===u):null;if(g&&R){const A=g.tabIndicatorRef.value,C=R.tabIndicatorRef.value;S!==null&&(clearTimeout(S),S=null),A.style.transition="none",A.style.transform="none",C.style.transition="none",C.style.transform="none";const w=A.getBoundingClientRect(),B=C.getBoundingClientRect();C.style.transform=e.vertical===!0?`translate3d(0,${w.top-B.top}px,0) scale3d(1,${B.height?w.height/B.height:1},1)`:`translate3d(${w.left-B.left}px,0,0) scale3d(${B.width?w.width/B.width:1},1,1)`,M(()=>{S=setTimeout(()=>{S=null,C.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",C.style.transform="none"},70)})}R&&y.value===!0&&oe(R.rootRef.value)}function oe(l){const{left:u,width:g,top:R,height:A}=E.value.getBoundingClientRect(),C=l.getBoundingClientRect();let w=e.vertical===!0?C.top-R:C.left-u;if(w<0){E.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(w),le();return}w+=e.vertical===!0?C.height-A:C.width-g,w>0&&(E.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(w),le())}function le(){const l=E.value;if(l===null)return;const u=l.getBoundingClientRect(),g=e.vertical===!0?l.scrollTop:Math.abs(l.scrollLeft);me.value===!0?(m.value=Math.ceil(g+u.width)<l.scrollWidth-1,_.value=g>0):(m.value=g>0,_.value=e.vertical===!0?Math.ceil(g+u.height)<l.scrollHeight:Math.ceil(g+u.width)<l.scrollWidth)}function Ee(l){O!==null&&clearInterval(O),O=setInterval(()=>{it(l)===!0&&G()},5)}function De(){Ee(we.value===!0?Number.MAX_SAFE_INTEGER:0)}function Fe(){Ee(we.value===!0?0:Number.MAX_SAFE_INTEGER)}function G(){O!==null&&(clearInterval(O),O=null)}function st(l,u){const g=Array.prototype.filter.call(E.value.children,B=>B===u||B.matches&&B.matches(".q-tab.q-focusable")===!0),R=g.length;if(R===0)return;if(l===36)return oe(g[0]),g[0].focus(),!0;if(l===35)return oe(g[R-1]),g[R-1].focus(),!0;const A=l===(e.vertical===!0?38:37),C=l===(e.vertical===!0?40:39),w=A===!0?-1:C===!0?1:void 0;if(w!==void 0){const B=me.value===!0?-1:1,W=g.indexOf(u)+w*B;return W>=0&&W<R&&(oe(g[W]),g[W].focus({preventScroll:!0})),!0}}const nt=j(()=>we.value===!0?{get:l=>Math.abs(l.scrollLeft),set:(l,u)=>{l.scrollLeft=-u}}:e.vertical===!0?{get:l=>l.scrollTop,set:(l,u)=>{l.scrollTop=u}}:{get:l=>l.scrollLeft,set:(l,u)=>{l.scrollLeft=u}});function it(l){const u=E.value,{get:g,set:R}=nt.value;let A=!1,C=g(u);const w=l<C?-1:1;return C+=w*5,C<0?(A=!0,C=0):(w===-1&&C<=l||w===1&&C>=l)&&(A=!0,C=l),R(u,C),le(),A}function Me(l,u){for(const g in l)if(l[g]!==u[g])return!1;return!0}function rt(){let l=null,u={matchedLen:0,queryDiff:9999,hrefLen:0};const g=i.filter(w=>w.routeData!==void 0&&w.routeData.hasRouterLink.value===!0),{hash:R,query:A}=r.$route,C=Object.keys(A).length;for(const w of g){const B=w.routeData.exact.value===!0;if(w.routeData[B===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:W,query:Ce,matched:vt,href:ft}=w.routeData.resolvedLink.value,xe=Object.keys(Ce).length;if(B===!0){if(W!==R||xe!==C||Me(A,Ce)===!1)continue;l=w.name.value;break}if(W!==""&&W!==R||xe!==0&&Me(Ce,A)===!1)continue;const X={matchedLen:vt.length,queryDiff:C-xe,hrefLen:ft.length-W.length};if(X.matchedLen>u.matchedLen){l=w.name.value,u=X;continue}else if(X.matchedLen!==u.matchedLen)continue;if(X.queryDiff<u.queryDiff)l=w.name.value,u=X;else if(X.queryDiff!==u.queryDiff)continue;X.hrefLen>u.hrefLen&&(l=w.name.value,u=X)}l===null&&i.some(w=>w.routeData===void 0&&w.name.value===h.value)===!0||$e({name:l,setCurrent:!0})}function ct(l){if(c(),L.value!==!0&&Q.value!==null&&l.target&&typeof l.target.closest=="function"){const u=l.target.closest(".q-tab");u&&Q.value.contains(u)===!0&&(L.value=!0,y.value===!0&&oe(u))}}function ut(){f(()=>{L.value=!1},30)}function fe(){Le.avoidRouteWatcher===!1?s(rt):T()}function Qe(){if(z===void 0){const l=pe(()=>r.$route.fullPath,fe);z=()=>{l(),z=void 0}}}function dt(l){i.push(l),D.value++,ve(),l.routeData===void 0||r.$route===void 0?s(()=>{if(y.value===!0){const u=h.value,g=u!=null&&u!==""?i.find(R=>R.name.value===u):null;g&&oe(g.rootRef.value)}}):(Qe(),l.routeData.hasRouterLink.value===!0&&fe())}function mt(l){i.splice(i.indexOf(l),1),D.value--,ve(),z!==void 0&&l.routeData!==void 0&&(i.every(u=>u.routeData===void 0)===!0&&z(),fe())}const Le={currentModel:h,tabProps:J,hasFocus:L,hasActiveTab:et,registerTab:dt,unregisterTab:mt,verifyRouteModel:fe,updateModel:$e,onKbdNavigate:st,avoidRouteWatcher:!1};$t(He,Le);function je(){S!==null&&clearTimeout(S),G(),z!==void 0&&z()}let Be;return Ye(je),Ct(()=>{Be=z!==void 0,je()}),xt(()=>{Be===!0&&Qe(),ve()}),()=>U("div",{ref:Q,class:at.value,role:"tablist",onFocusin:ct,onFocusout:ut},[U(Qt,{onResize:Ae}),U("div",{ref:E,class:ot.value,onScroll:le},Ge(b.default)),U(se,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(m.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||n.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:De,onTouchstartPassive:De,onMouseupPassive:G,onMouseleavePassive:G,onTouchendPassive:G}),U(se,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(_.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||n.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:Fe,onTouchstartPassive:Fe,onMouseupPassive:G,onMouseleavePassive:G,onTouchendPassive:G})])}}),ue=ge({name:"QTabPanel",props:jt,setup(e,{slots:b}){return()=>U("div",{class:"q-tab-panel",role:"tabpanel"},Ge(b.default))}}),Je=ge({name:"QTabPanels",props:{...Bt,...Pt},emits:Nt,setup(e,{slots:b}){const v=Se(),r=Vt(e,v.proxy.$q),{updatePanelsList:n,getPanelContent:k,panelDirectives:$}=Ut(),M=j(()=>"q-tab-panels q-panel-parent"+(r.value===!0?" q-tab-panels--dark q-dark":""));return()=>(n(b),Tt("div",{class:M.value},k(),"pan",e.swipeable,()=>$.value))}});const oa={class:"my-card"},la={class:"q-pt-none"},sa={class:"row q-pt-sm"},na={class:"col-xs-12 col-md-8"},ia={class:"row"},ra=a("div",{class:"col-11 flex justify-start items-center"},[a("label",{class:"text-h6 text-weight-medium"}," >> Datos del Cliente:")],-1),ca={class:"col-xs-12 col-md-6 col-sm-6"},ua={class:"col-xs-12 col-md-6 col-sm-6"},da={class:"col-xs-12 col-md-6 col-sm-6"},ma={class:"col-xs-12 col-md-6 col-sm-6"},va={class:"col-xs-12 col-md-6 col-sm-6"},fa={class:"col-xs-12 col-md-6 col-sm-6"},pa={class:"col-xs-11 col-md-4"},_a={class:"row"},ga=a("label",{class:"text-h6 text-weight-medium"}," >> Resumen Notificaciones:",-1),ba=[ga],ha=a("label",null,null,-1),ya={class:"row justify-center q-mt-md"},qa={__name:"ResumenPage",setup(e){const{api:b,mostrarNotify:v,formCliente:r,validaciones:n,validarDatosPersonales:k}=he(),$=x(!1),M=async()=>{if(!k())try{$.value=!0;const{planInternet:c,created_at:s,updated_at:T,...Q}=r.value,{data:E}=await b.put(`/customers/actualizarDatosPersonales/${r.value.id}`,Q);r.value={...E.cliente[0]},v("positive",E.msg),$.value=!1}catch(c){$.value=!1,v("warning",c.response.data.message)}};return(f,c)=>(V(),F(ye,{onSubmit:M},{default:o(()=>[a("div",oa,[a("div",la,[a("div",sa,[a("div",na,[a("div",ia,[ra,a("div",{class:q(["col-xs-12 col-md-4 flex items-center",[f.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end"]])},[a("label",{class:q(f.$q.screen.width<1022||"q-pr-md")}," Cliente: ",2)],2),a("div",ca,[t(H,{modelValue:p(r).nombres,"onUpdate:modelValue":[c[0]||(c[0]=s=>p(r).nombres=s),c[1]||(c[1]=s=>(p(r).nombres=p(r).nombres.toUpperCase(),p(n).nombres.isValid=!0))],modelModifiers:{trim:!0},error:!p(n).nombres.isValid,"input-class":"resaltarTextoInput",dense:"",outlined:""},{error:o(()=>[a("label",{class:q(f.$q.dark.isActive?"text-red-4":"text-negative")},P(p(n).nombres.message),3)]),_:1},8,["modelValue","error"])]),a("div",{class:q(["col-xs-12 col-md-4 flex items-center",[f.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end"]])},[a("label",{class:q(f.$q.screen.width<1022||"q-pr-md")}," Email: ",2)],2),a("div",ua,[t(H,{modelValue:p(r).email,"onUpdate:modelValue":c[2]||(c[2]=s=>p(r).email=s),modelModifiers:{trim:!0},error:!p(n).email.isValid,"input-class":"resaltarTextoInput",onKeyup:c[3]||(c[3]=s=>p(n).email.isValid=!0),dense:"",outlined:""},{error:o(()=>[a("label",{class:q(f.$q.dark.isActive?"text-red-4":"text-negative")},P(p(n).email.message),3)]),_:1},8,["modelValue","error"])]),a("div",{class:q(["col-xs-12 col-md-4 flex items-center",[f.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end"]])},[a("label",{class:q(f.$q.screen.width<1022||"q-pr-md")}," Celular: ",2)],2),a("div",da,[t(H,{type:f.$q.platform.is.mobile?"number":"text",modelValue:p(r).celular,"onUpdate:modelValue":c[4]||(c[4]=s=>p(r).celular=s),modelModifiers:{trim:!0},counter:"",maxlength:"10","input-class":"resaltarTextoInput",error:!p(n).celular.isValid,onKeyup:c[5]||(c[5]=s=>(p(n).celular.isValid=!0,p(r).celular=p(r).celular.replace(/\D/g,""))),dense:"",outlined:""},{error:o(()=>[a("label",{class:q(f.$q.dark.isActive?"text-red-4":"text-negative")},P(p(n).celular.message),3)]),_:1},8,["type","modelValue","error"])]),a("div",{class:q(["col-xs-12 col-md-4 flex items-center",[f.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end"]])},[a("label",{class:q(f.$q.screen.width<1022||"q-pr-md")}," Direcci\xF3n: ",2)],2),a("div",ma,[t(H,{modelValue:p(r).direccion,"onUpdate:modelValue":c[6]||(c[6]=s=>p(r).direccion=s),error:!p(n).direccion.isValid,"input-class":"resaltarTextoInput",onKeyup:c[7]||(c[7]=s=>p(n).direccion.isValid=!0),dense:"",outlined:""},{error:o(()=>[a("label",{class:q(f.$q.dark.isActive?"text-red-4":"text-negative")},P(p(n).direccion.message),3)]),_:1},8,["modelValue","error"])]),a("div",{class:q(["col-xs-12 col-md-4 flex items-center",[f.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end"]])},[a("label",{class:q(f.$q.screen.width<1022||"q-pr-md")}," Tipo de Documento: ",2)],2),a("div",va,[t(ke,{dense:"",modelValue:p(r).tipo_documento,"onUpdate:modelValue":[c[8]||(c[8]=s=>p(r).tipo_documento=s),c[9]||(c[9]=s=>p(n).tipo_documento.isValid=!0)],modelModifiers:{trim:!0},outlined:"",error:!p(n).tipo_documento.isValid,"emit-value":"","map-options":"",options:[{label:"RUC",value:"04"},{label:"Cedula",value:"05"},{label:"Pasaporte",value:"06"}]},{error:o(()=>[a("label",{class:q(f.$q.dark.isActive?"text-red-4":"text-negative")},P(p(n).tipo_documento.message),3)]),_:1},8,["modelValue","error"])]),a("div",{class:q(["col-xs-12 col-md-4 flex items-center",[f.$q.screen.width<1022?"justify-center q-mt-sm q-pb-xs":"justify-end"]])},[a("label",{class:q(f.$q.screen.width<1022||"q-pr-md")}," N. Identificaci\xF3n: ",2)],2),a("div",fa,[t(H,{type:f.$q.platform.is.mobile?"number":"text",modelValue:p(r).numero_documento,"onUpdate:modelValue":c[10]||(c[10]=s=>p(r).numero_documento=s),readonly:p(r).tipo_documento==="","input-class":"resaltarTextoInput",counter:"",maxlength:p(r).tipo_documento==="04"?13:10,error:!p(n).numero_documento.isValid,onKeyup:c[11]||(c[11]=s=>(p(n).numero_documento.isValid=!0,p(r).numero_documento=p(r).numero_documento.replace(/\D/g,""))),dense:"",outlined:""},{error:o(()=>[a("label",{class:q(f.$q.dark.isActive?"text-red-4":"text-negative")},P(p(n).numero_documento.message),3)]),_:1},8,["type","modelValue","readonly","maxlength","error"])])])]),a("div",pa,[a("div",_a,[a("div",{class:q(["col-11 flex justify-start items-center",[f.$q.screen.xs?"q-my-md":""]])},ba,2),ha])])])]),a("div",ya,[a("div",{class:q(["q-pb-md",[f.$q.screen.width>600||" q-ml-lg"]])},[t(Z,{type:"submit",icon:"save",loading:$.value,outline:"",rounded:"",class:"q-mr-lg",style:{color:"#696cff"}},{default:o(()=>[I(" \xA0 Guardar Cambios ")]),_:1},8,["loading"])],2)])])]),_:1}))}};const wa={class:"my-card"},$a={class:"q-pt-none"},Ca={class:"row q-pt-sm"},xa={class:"col-12"},Pa={class:"row"},Va=a("label",{class:"text-h6 text-weight-medium"}," >> Servicios de Internet:",-1),Ta={class:"text-h6 text-weight-medium"},Ia={class:"col-12 q-mt-md"},ka={__name:"ServiciosPage",setup(e){const b=[{name:"cont",label:"#",align:"center"},{name:"nombre_plan",align:"center",label:"Plan",field:"nombre_plan"},{name:"precio",label:"Costo",field:"precio",align:"center"},{name:"ipv4",label:"IP",field:"ipv4",align:"center"},{name:"router",label:"Router",field:"router",align:"center"},{name:"fecha_instalacion",label:"Instalado",field:"fecha_instalacion",align:"center"},{name:"direccion",label:"Direcci\xF3n",field:"direccion",align:"center"},{name:"estado",label:"Estado",field:"estado",align:"center"},{name:"acciones",label:"Acciones",field:"acciones",align:"center"}],{servicios:v}=qe(),r=v.value;return(n,k)=>(V(),F(ye,{onSubmit:k[0]||(k[0]=()=>{})},{default:o(()=>[a("div",wa,[a("div",$a,[a("div",Ca,[a("div",xa,[a("div",Pa,[a("div",{class:q(["col-12 flex items-center",n.$q.screen.xs?"justify-center":"justify-between"])},[Va,a("label",Ta,[t(Z,{outline:"",color:"primary",label:"Agregar Servicio",class:q(["q-mr-xs",!n.$q.screen.xs||"q-mt-sm"])},null,8,["class"])])],2),a("div",Ia,[t(Xe,{rows:p(r),columns:b,class:q([n.$q.dark.isActive?"":"my-sticky-header-table3"]),"hide-pagination":!0,"rows-per-page-options":[50],"row-key":"name"},{"body-cell-cont":o($=>[t(N,{props:$},{default:o(()=>[I(P($.rowIndex+1),1)]),_:2},1032,["props"])]),"body-cell-estado":o($=>[t(N,{props:$},{default:o(()=>[$.row.estado=="Activo"?(V(),F(ze,{key:0,outline:"",color:"positive",label:"Activo",class:"q-pa-sm"})):(V(),F(ze,{key:1,outline:"",color:"red",label:"Inactivo",class:"q-pa-sm"}))]),_:2},1032,["props"])]),"body-cell-acciones":o($=>[t(N,{props:$},{default:o(()=>[I(P($.rowIndex+1),1)]),_:2},1032,["props"])]),_:1},8,["rows","class"])])])])])])])]),_:1}))}},Sa={__name:"ConfiguracionPage",setup(e){return(b,v)=>(V(),F(Ot,{edit:!0}))}};const ae=e=>(St("data-v-738892ad"),e=e(),Rt(),e),Ra={class:"text-h6 text-center"},Aa={class:"row q-pt-lg q-gutter-lg justify-center"},Ea={class:"col-12"},Da=ae(()=>a("label",null,"Forma de pago:",-1)),Fa={class:"col-12 q-mt-sm"},Ma=ae(()=>a("label",null,"N\xBA transacci\xF3n:",-1)),Qa={class:"col-12 q-mt-sm"},La=ae(()=>a("label",null,"Pagar Importe Total:",-1)),ja={class:"col-12 q-mt-sm"},Ba=ae(()=>a("label",null,"Monto a Cancelar:",-1)),Na={class:"col-12 q-mt-sm"},Ua=ae(()=>a("label",null,"Monto Pendiente:",-1)),Oa={key:0,class:"col-12 q-mt-sm"},za=ae(()=>a("label",null,"Sucursal a Facturar:",-1)),Wa={class:"col-12 q-mt-none"},Ka=ae(()=>a("label",null,"Notas:",-1)),Ya={class:"col-xs-9 col-sm-12 q-mt-lg q-mb-md flex justify-center"},Ha={__name:"ModalPago",props:["servicio","nuevoPago"],emits:["actualizarDatos","connectWS"],setup(e,{emit:b}){const v=e,r=["forma_pago","montoPendiente","montoCancelar"],{api:n,claim:k,mostrarNotify:$,route:M}=he(),{showModalPago:f}=qe(),c=x([]),s=x({forma_pago:"",num_transaccion:"",importe_total:!0,sucursal_id:"",montoCancelar:"",montoPendiente:"",detalle:""}),T=x({forma_pago:{message:"",isValid:!0},montoPendiente:{message:"",isValid:!0},montoCancelar:{message:"",isValid:!0},sucursal_id:{message:"",isValid:!0}});if(v.servicio.pagos.length==0)s.value.montoPendiente=v.servicio.precio,s.value.montoCancelar=v.servicio.precio;else{let _=0;v.servicio.pagos.forEach(i=>{_+=parseFloat(i.valor)});const d=parseFloat(v.servicio.precio)-_;s.value.montoPendiente=d.toString(),s.value.montoCancelar=d.toString()}const Q=_=>{let d=0;d=s.value[_];const i=/^\d{0,9}(\.\d{1,2})?$/;setTimeout(function(){let D=0;if(D=s.value[_],!i.test(D.toString())){const L=parseFloat(d.toString().substring(0,d.toString().length-1));s.value[_]=L}},0)},E=()=>{let _=!1;return r.forEach(d=>{(s.value[d].length==0||s.value[d]==0)&&(T.value[d].message="Debes completar este campo",T.value[d].isValid=!1,_=!0)}),(k.roles[0]=="Super-Administrador"||k.roles[0]=="Administrador")&&s.value.sucursal_id==""&&v.servicio.tipo_comprobante!="Recibo"&&parseFloat(s.value.montoCancelar)>=parseFloat(s.value.montoPendiente)&&(T.value.sucursal_id.message="Debes seleccionar una sucursal",T.value.sucursal_id.isValid=!1,_=!0),_},h=["Efectivo Oficina/Sucursal","Dep\xF3sito Bancario","Transferencia Bancaria","Facilito","Punto Agil"],y=async()=>{if(E())return;const _=Date.now(),d=_e.formatDate(_,"DD/MM/YYYY");let i;v.nuevoPago&&(i=v.servicio.pagos,i.push({valor:s.value.montoCancelar,fecha_abono:d,detalle:s.value.detalle,n_transaccion:s.value.num_transaccion,forma_pago:s.value.forma_pago}));let D=0;v.servicio.pagos.forEach(S=>{D+=parseFloat(S.valor)});const L={pagos:i,estadoSRI:D>=parseFloat(s.value.montoPendiente)?"PAGADO":"PENDIENTE"};try{let S={headers:{sucursal_id:s.value.sucursal_id}};const{data:O}=await n.patch(`/pagos/${v.servicio.pago_id}`,L,S);if(parseFloat(s.value.montoCancelar)>=parseFloat(s.value.montoPendiente)&&v.servicio.tipo_comprobante!="Recibo"){b("connectWS");let z={customer_id:M.params.client_id,tipo:"EMISION",subtotal:parseFloat(v.servicio.precio),iva:parseFloat(v.servicio.iva),descuento:0,total:parseFloat(v.servicio.precio),entity:"Pagos",pago_id:v.servicio.pago_id,user_id:k.id,products:[{aplicaIva:v.servicio.iva>0,cantidad:1,pvp:v.servicio.precio,descuento:0,nombre:"SERVICIO DE INTERNET",codigoBarra:v.servicio.pago_id.split("-")[0]}]};await n.post("/CE/facturas/generarFacturaElectronica",z,S)}$("positive",O.msg),f.value=!1,b("actualizarDatos")}catch(S){console.log(S)}},m=async _=>{c.value=[];const{data:d}=await n.get(`/sucursal/find/${_}/company`);d.forEach(i=>{c.value.push({label:i.nombre,value:i.id})}),c.value.length==1&&(s.value.sucursal_id=c.value[0].value)};return(k.roles[0]=="Super-Administrador"||k.roles[0]=="Administrador")&&m(k.company.id),(_,d)=>(V(),F(be,{style:{width:"450px !important","max-width":"fit-content"}},{default:o(()=>[t(Oe,null,{default:o(()=>[a("div",Ra,[I(" Agregar Pago "),ee(t(Z,{round:"",flat:"",dense:"",icon:"close",class:"float-right",color:"grey-8"},null,512),[[Wt]])])]),_:1}),t(Re,{inset:""}),t(Oe,{class:"q-pt-none"},{default:o(()=>[t(ye,{onSubmit:y},{default:o(()=>[a("div",Aa,[a("div",Ea,[Da,t(ke,{color:"orange","transition-show":"scale","transition-hide":"scale","onUpdate:modelValue":[d[0]||(d[0]=i=>T.value.forma_pago.isValid=!0),d[1]||(d[1]=i=>s.value.forma_pago=i)],error:!T.value.forma_pago.isValid,outlined:"",modelValue:s.value.forma_pago,dense:"",options:h},{error:o(()=>[a("label",{class:q(_.$q.dark.isActive?"text-red-4":"text-negative")},P(T.value.forma_pago.message),3)]),_:1},8,["error","modelValue"])]),a("div",Fa,[Ma,t(H,{modelValue:s.value.num_transaccion,"onUpdate:modelValue":d[2]||(d[2]=i=>s.value.num_transaccion=i),dense:"",outlined:""},null,8,["modelValue"])]),a("div",Qa,[La,t(kt,{color:"green","onUpdate:modelValue":[d[3]||(d[3]=i=>s.value.montoCancelar=s.value.montoPendiente),d[4]||(d[4]=i=>s.value.importe_total=i)],size:"lg",modelValue:s.value.importe_total},null,8,["modelValue"])]),a("div",ja,[Ba,t(H,{modelValue:s.value.montoCancelar,"onUpdate:modelValue":[d[5]||(d[5]=i=>s.value.montoCancelar=i),d[6]||(d[6]=i=>(Q("montoCancelar"),T.value.montoCancelar.isValid=!0))],modelModifiers:{trim:!0},readonly:s.value.importe_total,"input-style":"padding-right: 27px;",type:"number",step:"0.01",error:!T.value.montoCancelar.isValid,"input-class":"resaltarTextoInput",dense:"",outlined:""},{error:o(()=>[a("label",{class:q(_.$q.dark.isActive?"text-red-4":"text-negative")},P(T.value.montoCancelar.message),3)]),prepend:o(()=>[t(se,{name:"attach_money"})]),_:1},8,["modelValue","readonly","error"])]),a("div",Na,[Ua,t(H,{modelValue:s.value.montoPendiente,"onUpdate:modelValue":[d[7]||(d[7]=i=>s.value.montoPendiente=i),d[8]||(d[8]=i=>(Q("montoPendiente"),T.value.montoPendiente.isValid=!0))],modelModifiers:{trim:!0},disable:"",type:"number",step:"0.01",error:!T.value.montoPendiente.isValid,"input-style":"padding-right: 27px;","input-class":"resaltarTextoInput",dense:"",outlined:""},{error:o(()=>[a("label",{class:q(_.$q.dark.isActive?"text-red-4":"text-negative")},P(T.value.montoCancelar.message),3)]),prepend:o(()=>[t(se,{name:"attach_money"})]),_:1},8,["modelValue","error"])]),v.servicio.tipo_comprobante!="Recibo"&&parseFloat(s.value.montoCancelar)>=parseFloat(s.value.montoPendiente)?(V(),te("div",Oa,[za,c.value.length>1?(V(),F(ke,{key:0,modelValue:s.value.sucursal_id,"onUpdate:modelValue":[d[9]||(d[9]=i=>s.value.sucursal_id=i),d[10]||(d[10]=i=>T.value.sucursal_id.isValid=!0)],error:!T.value.sucursal_id.isValid,outlined:"",options:c.value,"emit-value":"","map-options":"",dense:""},{error:o(()=>[a("label",{class:q(_.$q.dark.isActive?"text-red-4":"text-negative")},P(T.value.sucursal_id.message),3)]),"no-option":o(()=>[t(re,null,{default:o(()=>[t(Y,{class:"text-grey"},{default:o(()=>[I(" No se encontro sucursal ")]),_:1})]),_:1})]),_:1},8,["modelValue","error","options"])):ne("",!0)])):ne("",!0),a("div",Wa,[Ka,t(H,{modelValue:s.value.detalle,"onUpdate:modelValue":d[11]||(d[11]=i=>s.value.detalle=i),modelModifiers:{trim:!0},outlined:"",rows:"2",type:"textarea"},null,8,["modelValue"])]),a("div",Ya,[t(Z,{label:"guardar",class:"q-px-xl",type:"submit",color:"green-9"})])])]),_:1})]),_:1})]),_:1}))}};var Ga=It(Ha,[["__scopeId","data-v-738892ad"]]);const Xa={class:"my-card"},Za={class:"q-pt-none"},Ja={class:"row q-pt-sm"},eo={class:"col-12"},to={class:"row"},ao=a("label",{class:"text-h6 text-weight-medium"}," >> Servicios de Internet:",-1),oo={class:"text-h6 text-weight-medium"},lo={class:"col-12 q-mt-md"},so={class:"row q-col-gutter-sm"},no=a("div",{class:"full-width row flex-center text-lime-10 q-gutter-sm"},[a("span",{class:"text-subtitle1"}," No se encontr\xF3 ningun registros ")],-1),io={__name:"IndexFacturas",setup(e){const b=x([{name:"x",align:"center",label:" ",field:"x"},{name:"n_comprobantes",align:"center",label:"N. Comprobante",field:"n_comprobantes"},{name:"emitido",label:"Emitido",field:"emitido",align:"center"},{name:"vencimiento",label:"Vencimiento",field:"vencimiento",align:"center"},{name:"precio",label:"Total",field:"precio",align:"center"},{name:"iva",label:"Impuesto",field:"iva",align:"center"},{name:"pagado",label:"Pagado",field:"pagado",align:"center"},{name:"estado",label:"Estado",field:"estado",align:"center"},{name:"acciones",label:"Acciones",field:"acciones",align:"center"}]),v=x(!0),r=x({}),{api:n,servicios:k,pagos:$,showModalPago:M}=qe(),{claim:f,route:c}=he();let s;const T=()=>{const h=new Manager("http://205.235.6.108:3000/socket.io/socket.io.js",{extraHeaders:{autentication:f.id}});s==null||s.removeAllListeners(),s=h.socket("/"),s.on("updateStateInvoice",()=>{Q()})},Q=async()=>{$.value=[];try{const{data:h}=await n.get("/pagos/find/"+k.value[0].servicio_id);h.length>0&&h[0].servicio.factura_id.tipo_comprobante=="Recibo"&&(b.value[1].label="Tipo Comprobante"),h.forEach(y=>{const m=_e.addToDate(y.created_at,{days:y.servicio.factura_id.dia_pago-1});let _;y.servicio.factura_id.tipo_impuesto=="Impuestos incluido"?_=`${Math.floor(parseFloat(y.servicio.precio)*.12*100)/100}`:_=0;let d=0;y.pagos.forEach(i=>{d+=parseFloat(i.valor)}),$.value.push({num_comprobante:y.num_comprobante,sucursal_id:y.sucursal_id!==null?y.sucursal_id.id:null,pago_id:y.id,emitido:_e.formatDate(y.created_at,"DD/MM/YYYY"),vencimiento:_e.formatDate(m,"DD/MM/YYYY"),precio:`${y.servicio.precio}`,tipo_comprobante:y.servicio.factura_id.tipo_comprobante,iva:_,pagos:y.pagos.reverse(),pagado:d,estado:y.estadoSRI,cancelado:d>=parseFloat(y.servicio.precio)})})}catch(h){console.log(h)}},E=h=>{h.sucursal_id;let y={customer_id:c.params.client_id,tipo:"EMISION",subtotal:parseFloat(h.precio),iva:parseFloat(h.iva),descuento:0,total:parseFloat(h.precio),entity:"Pagos",pago_id:h.pago_id,user_id:f.id,products:[{aplicaIva:h.iva>0,cantidad:1,pvp:h.precio,descuento:0,nombre:"SERVICIO DE INTERNET",codigoBarra:h.pago_id.split("-")[0]}]};console.log(y)};return Q(),(h,y)=>(V(),te(Ie,null,[t(ye,{onSubmit:y[0]||(y[0]=()=>{})},{default:o(()=>[a("div",Xa,[a("div",Za,[a("div",Ja,[a("div",eo,[a("div",to,[a("div",{class:q(["col-12 flex items-center",h.$q.screen.xs?"justify-center":"justify-between"])},[ao,a("label",oo,[t(Z,{outline:"",color:"primary",label:"Agregar Servicio",class:q(["q-mr-xs",!h.$q.screen.xs||"q-mt-sm"])},null,8,["class"])])],2),a("div",lo,[t(Xe,{rows:p($),columns:b.value,class:q([h.$q.dark.isActive?"":"my-sticky-header-table3"]),"hide-pagination":!0,"rows-per-page-options":[50],"row-key":"name"},{body:o(m=>[t(We,{props:m},{default:o(()=>[m.row.pagos.length>=1?(V(),F(N,{key:"x","auto-width":""},{default:o(()=>[t(Z,{size:"sm",color:"accent",round:"",dense:"",onClick:_=>m.expand=!m.expand,icon:m.expand?"remove":"add"},null,8,["onClick","icon"])]),_:2},1024)):(V(),F(N,{key:1,"auto-width":""})),t(N,{key:"n_comprobantes",props:m},{default:o(()=>[I(P(m.row.tipo_comprobante=="Recibo"?"Recibo":m.row.num_comprobante==""||m.row.num_comprobante==null?"- - - - - -":m.row.num_comprobante),1)]),_:2},1032,["props"]),t(N,{key:"emitido",props:m},{default:o(()=>[I(P(m.row.emitido),1)]),_:2},1032,["props"]),t(N,{key:"vencimiento",props:m},{default:o(()=>[I(P(m.row.vencimiento),1)]),_:2},1032,["props"]),t(N,{key:"precio",props:m},{default:o(()=>[I(" $"+P(m.row.precio),1)]),_:2},1032,["props"]),t(N,{key:"iva",props:m},{default:o(()=>[I(" $"+P(m.row.iva),1)]),_:2},1032,["props"]),t(N,{key:"pagado",props:m},{default:o(()=>[I(" $"+P(m.row.pagado),1)]),_:2},1032,["props"]),t(N,{key:"estado",props:m},{default:o(()=>[I(P(m.row.estado),1)]),_:2},1032,["props"]),t(N,{key:"acciones",props:m},{default:o(()=>[m.row.cancelado?ne("",!0):(V(),F(Z,{key:0,round:"",color:"blue-grey",onClick:_=>(M.value=!0,r.value=m.row),icon:"done",size:"10px",class:"q-mr-sm"},{default:o(()=>[t(Ke,{class:"bg-indigo",anchor:"top middle",self:"center middle"},{default:o(()=>[I(" Agregar Pago ")]),_:1})]),_:2},1032,["onClick"])),m.row.estado.trim()=="ERROR ENVIO RECEPCION"||m.row.estado.trim()=="ERROR ENVIO RECEPCION - ANULACION"||m.row.estado.trim()=="RECIBIDA"?(V(),F(Z,{key:1,round:"",color:"blue-grey",icon:"description",onClick:_=>E(m.row),size:"10px",class:"q-mr-sm"},{default:o(()=>[t(Ke,{class:"bg-indigo",anchor:"top middle",self:"center middle"},{default:o(()=>[I(" Emitir Factura Electr\xF3nica ")]),_:1})]),_:2},1032,["onClick"])):ne("",!0)]),_:2},1032,["props"])]),_:2},1032,["props"]),ee(t(We,{props:m},{default:o(()=>[t(N,{colspan:"100%"},{default:o(()=>[a("div",so,[(V(!0),te(Ie,null,At(m.row.pagos,(_,d)=>(V(),te("div",{key:d,class:"col-4"},[t(zt,{bordered:"",padding:"",dense:""},{default:o(()=>[t(K,{header:"",class:"text-center"},{default:o(()=>[I(" Fecha Abonado: "+P(_.fecha_abono),1)]),_:2},1024),ee((V(),F(re,{tag:"label"},{default:o(()=>[t(Y,null,{default:o(()=>[t(K,null,{default:o(()=>[I("Forma de Pago:")]),_:1})]),_:1}),t(Y,{side:"",top:"",class:"justify-center"},{default:o(()=>[t(K,null,{default:o(()=>[I(P(_.forma_pago),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)),[[ie]]),ee((V(),F(re,{tag:"label",class:""},{default:o(()=>[t(Y,null,{default:o(()=>[t(K,null,{default:o(()=>[I("Valor Abonado:")]),_:1})]),_:1}),t(Y,{side:"",top:"",class:"justify-center"},{default:o(()=>[t(K,null,{default:o(()=>[I("$"+P(_.valor),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)),[[ie]]),ee((V(),F(re,{tag:"label"},{default:o(()=>[t(Y,null,{default:o(()=>[t(K,null,{default:o(()=>[I("N\xBA transacci\xF3n:")]),_:1})]),_:1}),t(Y,{side:"",top:"",class:"justify-center"},{default:o(()=>[t(K,null,{default:o(()=>[I(P(_.n_transaccion),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)),[[ie]]),ee((V(),F(re,{tag:"label"},{default:o(()=>[t(Y,null,{default:o(()=>[t(K,null,{default:o(()=>[I("Detalle:")]),_:1})]),_:1}),t(Y,{side:"",top:"",class:"justify-center"},{default:o(()=>[t(K,null,{default:o(()=>[I(P(_.detalle==""?"Sin detalles":_.detalle),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)),[[ie]])]),_:2},1024)]))),128))])]),_:2},1024)]),_:2},1032,["props"]),[[Et,m.expand]])]),"no-data":o(({icon:m})=>[no]),_:1},8,["rows","columns","class"])])])])])])])]),_:1}),t(Ft,{modelValue:p(M),"onUpdate:modelValue":y[1]||(y[1]=m=>Dt(M)?M.value=m:null)},{default:o(()=>[t(Ga,{servicio:r.value,nuevoPago:v.value,onActualizarDatos:Q,onConnectWS:T},null,8,["servicio","nuevoPago"])]),_:1},8,["modelValue"])],64))}},ro={class:"q-gutter-y-md"},co={__name:"FacturacionPagos",setup(e){const b=x("facturas");return(v,r)=>(V(),te("div",ro,[t(be,null,{default:o(()=>[t(Ze,{modelValue:b.value,"onUpdate:modelValue":r[0]||(r[0]=n=>b.value=n),draggable:"false",dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"left","narrow-indicator":""},{default:o(()=>[t(ce,{name:"facturas",label:"Facturas"}),t(ce,{name:"configuracion",label:"Configuraci\xF3n"})]),_:1},8,["modelValue"]),t(Re),t(Je,{modelValue:b.value,"onUpdate:modelValue":r[1]||(r[1]=n=>b.value=n),animated:""},{default:o(()=>[t(ue,{name:"facturas"},{default:o(()=>[t(io)]),_:1}),t(ue,{name:"configuracion"},{default:o(()=>[t(Sa)]),_:1})]),_:1},8,["modelValue"])]),_:1})]))}};const uo={class:"q-gutter-y-md"},mo={__name:"IndexPage",setup(e){const b=x("resumen");return(v,r)=>(V(),te("div",uo,[t(be,null,{default:o(()=>[t(Ze,{modelValue:b.value,"onUpdate:modelValue":r[0]||(r[0]=n=>b.value=n),draggable:"false",dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:o(()=>[t(ce,{name:"resumen",label:"Resumen"}),t(ce,{name:"servicios",label:"Servicios"}),t(ce,{name:"facturacion/pagos",label:"Facturaci\xF3n/Pagos"})]),_:1},8,["modelValue"]),t(Re),t(Je,{modelValue:b.value,"onUpdate:modelValue":r[1]||(r[1]=n=>b.value=n),animated:""},{default:o(()=>[t(ue,{name:"resumen"},{default:o(()=>[t(qa)]),_:1}),t(ue,{name:"servicios"},{default:o(()=>[b.value=="servicios"?(V(),F(ka,{key:0})):ne("",!0)]),_:1}),t(ue,{name:"facturacion/pagos"},{default:o(()=>[b.value=="facturacion/pagos"?(V(),F(co,{key:0})):ne("",!0)]),_:1})]),_:1},8,["modelValue"])]),_:1})]))}},vo={class:"q-ma-lg q-pt-md"},fo={class:"row q-col-gutter-md",style:{"justify-content":"center"}},po={class:"text-h6 text-center",style:{position:"relative",top:"-8px",left:"17px"}},_o={class:"row q-col-gutter-md",style:{"justify-content":"center"}},go={class:"col-xs-11 col-md-11 q-pt-xs"},Lo={__name:"EditCliente",setup(e){const{api:b,route:v,formCliente:r,formFacturacion:n}=he(),{servicios:k}=qe(),$=x("");return(async()=>{k.value=[];const{data:f}=await b.get("/customers/find/"+v.params.client_id);f[0].planInternet.forEach(c=>{n.value={...c.factura_id},k.value.push({servicio_id:c.id,precio:c.precio,direccion:`${c.direccion==""?"- - - - -":c.direccion}`,fecha_instalacion:c.fecha_instalacion,ipv4:c.ipv4,nombre_plan:c.perfil_internet.nombre_plan,router:c.router_id.nombre,estado:`${c.isActive?"Activo":"Inactivo"}`})}),$.value=f[0].nombres,r.value={...f[0]}})(),(f,c)=>(V(),te(Ie,null,[a("div",vo,[a("div",fo,[a("div",{class:q(["col-xs-12 q-pl-none",[f.$q.screen.width<1022?"q-pt-sm col-md-6":"col-md-6"]])},[t(pt,{class:q(["row q-mr-xs",[f.$q.screen.width<1022?"justify-center q-pt-sm":"justify-start "]])},{default:o(()=>[t(Pe,{label:"Inicio",icon:"home",to:"/"}),t(Pe,{label:"Clientes",icon:"fa-solid fa-list",to:"/clientes"}),t(Pe,{label:"Nuevo",icon:"add_circle"})]),_:1},8,["class"])],2),a("div",{class:q(["col-xs-12",[f.$q.screen.width<1022?"text-center q-pt-sm col-md-6 q-pl-none":"text-right col-md-5"]])},[a("label",po,P($.value),1)],2)])]),a("div",_o,[a("div",go,[t(be,{flat:"",class:"shadow_custom q-pt-none"},{default:o(()=>[t(mo,{edit:!0})]),_:1})])])],64))}};export{Lo as default};