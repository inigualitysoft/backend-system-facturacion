import{m as U,n as o,p as g,s as oe,k as de,t as A,r as z,v as T,x as fe,y as vt,z as le,A as he,T as ft,B as ht,C as Me,D as mt,E as gt,F as bt,G as yt,H as St,I as Ue,J as Ke,K as pt,L as zt,M as _t,N as Xe,O as J,R as Re,U as xe,V as wt,W as qt,X as xt,Y as kt,Z as Ct,_ as He,$ as Oe,a0 as $t,a1 as Ge,a2 as Je,a3 as Tt,a4 as ke,a5 as be,a6 as Pt,d as Bt,a7 as Qt,a8 as Ye,o as O,a9 as W,g as $,f as q,i as Ze,aa as se,ab as Qe,u as Mt,a as Lt,ac as Rt,h as ye,ad as R,c as Ce,e as F,ae as $e,af as ee,ag as Ht,ah as Ae,ai as Ot,aj as Ve,ak as At,al as Vt}from"./index.04b71378.js";import{b as Y,Q as ae,a as ue,c as Dt}from"./format.e804e329.js";import{Q as Te}from"./QList.83f6954b.js";import{Q as ve}from"./QResizeObserver.b3dc3232.js";import{Q as te}from"./QExpansionItem.eef2b669.js";import{T as ce}from"./TouchPan.d4f5b15f.js";import{C as Pe}from"./ClosePopup.4cd066b5.js";import{a as Nt,u as Ft}from"./use-quasar.49982070.js";import{u as jt}from"./useRolPermisos.fa494180.js";import"./QSlideTransition.a96d0276.js";import"./touch.3df10340.js";var Et=U({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:k}){const r=o(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>g("div",{class:r.value},oe(k.default))}}),De=U({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:k}){const r=o(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>g("div",{class:r.value,role:"toolbar"},oe(k.default))}}),Wt=U({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:k,emit:r}){const{proxy:{$q:c}}=le(),s=de(he,A);if(s===A)return console.error("QHeader needs to be child of QLayout"),A;const n=z(parseInt(e.heightHint,10)),d=z(!0),t=o(()=>e.reveal===!0||s.view.value.indexOf("H")>-1||c.platform.is.ios&&s.isContainer.value===!0),b=o(()=>{if(e.modelValue!==!0)return 0;if(t.value===!0)return d.value===!0?n.value:0;const u=n.value-s.scroll.value.position;return u>0?u:0}),y=o(()=>e.modelValue!==!0||t.value===!0&&d.value!==!0),l=o(()=>e.modelValue===!0&&y.value===!0&&e.reveal===!0),M=o(()=>"q-header q-layout__section--marginal "+(t.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(y.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),x=o(()=>{const u=s.rows.value.top,Q={};return u[0]==="l"&&s.left.space===!0&&(Q[c.lang.rtl===!0?"right":"left"]=`${s.left.size}px`),u[2]==="r"&&s.right.space===!0&&(Q[c.lang.rtl===!0?"left":"right"]=`${s.right.size}px`),Q});function f(u,Q){s.update("header",u,Q)}function _(u,Q){u.value!==Q&&(u.value=Q)}function B({height:u}){_(n,u),f("size",u)}function p(u){l.value===!0&&_(d,!0),r("focusin",u)}T(()=>e.modelValue,u=>{f("space",u),_(d,!0),s.animate()}),T(b,u=>{f("offset",u)}),T(()=>e.reveal,u=>{u===!1&&_(d,e.modelValue)}),T(d,u=>{s.animate(),r("reveal",u)}),T(s.scroll,u=>{e.reveal===!0&&_(d,u.direction==="up"||u.position<=e.revealOffset||u.position-u.inflectionPoint<100)});const S={};return s.instances.header=S,e.modelValue===!0&&f("size",n.value),f("space",e.modelValue),f("offset",b.value),fe(()=>{s.instances.header===S&&(s.instances.header=void 0,f("size",0),f("offset",0),f("space",!1))}),()=>{const u=vt(k.default,[]);return e.elevated===!0&&u.push(g("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(g(ve,{debounce:0,onResize:B})),g("header",{class:M.value,style:x.value,onFocusin:p},u)}}});const It={ratio:[String,Number]};function Ut(e,k){return o(()=>{const r=Number(e.ratio||(k!==void 0?k.value:void 0));return isNaN(r)!==!0&&r>0?{paddingBottom:`${100/r}%`}:null})}const Kt=16/9;var Xt=U({name:"QImg",props:{...It,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:Kt},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:k,emit:r}){const c=z(e.initialRatio),s=Ut(e,c);let n=null,d=!1;const t=[z(null),z(p())],b=z(0),y=z(!1),l=z(!1),M=o(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),x=o(()=>({width:e.width,height:e.height})),f=o(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),_=o(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));T(()=>B(),S);function B(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function p(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function S(m){n!==null&&(clearTimeout(n),n=null),l.value=!1,m===null?(y.value=!1,t[b.value^1].value=p()):y.value=!0,t[b.value].value=m}function u({target:m}){d!==!0&&(n!==null&&(clearTimeout(n),n=null),c.value=m.naturalHeight===0?.5:m.naturalWidth/m.naturalHeight,Q(m,1))}function Q(m,V){d===!0||V===1e3||(m.complete===!0?h(m):n=setTimeout(()=>{n=null,Q(m,V+1)},50))}function h(m){d!==!0&&(b.value=b.value^1,t[b.value].value=null,y.value=!1,l.value=!1,r("load",m.currentSrc||m.src))}function P(m){n!==null&&(clearTimeout(n),n=null),y.value=!1,l.value=!0,t[b.value].value=null,t[b.value^1].value=p(),r("error",m)}function L(m){const V=t[m].value,H={key:"img_"+m,class:f.value,style:_.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...V};return b.value===m?(H.class+=" q-img__image--waiting",Object.assign(H,{onLoad:u,onError:P})):H.class+=" q-img__image--loaded",g("div",{class:"q-img__container absolute-full",key:"img"+m},g("img",H))}function j(){return y.value!==!0?g("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},oe(k[l.value===!0?"error":"default"])):g("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},k.loading!==void 0?k.loading():e.noSpinner===!0?void 0:[g(ht,{color:e.spinnerColor,size:e.spinnerSize})])}return S(B()),fe(()=>{d=!0,n!==null&&(clearTimeout(n),n=null)}),()=>{const m=[];return s.value!==null&&m.push(g("div",{key:"filler",style:s.value})),l.value!==!0&&(t[0].value!==null&&m.push(L(0)),t[1].value!==null&&m.push(L(1))),m.push(g(ft,{name:"q-transition--fade"},j)),g("div",{class:M.value,style:x.value,role:"img","aria-label":e.alt},m)}}});const{passive:Ne}=bt,Gt=["both","horizontal","vertical"];var et=U({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Gt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:k}){const r={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let c=null,s,n;T(()=>e.scrollTarget,()=>{b(),t()});function d(){c!==null&&c();const M=Math.max(0,yt(s)),x=St(s),f={top:M-r.position.top,left:x-r.position.left};if(e.axis==="vertical"&&f.top===0||e.axis==="horizontal"&&f.left===0)return;const _=Math.abs(f.top)>=Math.abs(f.left)?f.top<0?"up":"down":f.left<0?"left":"right";r.position={top:M,left:x},r.directionChanged=r.direction!==_,r.delta=f,r.directionChanged===!0&&(r.direction=_,r.inflectionPoint=r.position),k("scroll",{...r})}function t(){s=gt(n,e.scrollTarget),s.addEventListener("scroll",y,Ne),y(!0)}function b(){s!==void 0&&(s.removeEventListener("scroll",y,Ne),s=void 0)}function y(M){if(M===!0||e.debounce===0||e.debounce==="0")d();else if(c===null){const[x,f]=e.debounce?[setTimeout(d,e.debounce),clearTimeout]:[requestAnimationFrame(d),cancelAnimationFrame];c=()=>{f(x),c=null}}}const{proxy:l}=le();return T(()=>l.$q.lang.rtl,d),Me(()=>{n=l.$el.parentNode,t()}),fe(()=>{c!==null&&c(),b()}),Object.assign(l,{trigger:y,getPosition:()=>r}),mt}});const Fe=["vertical","horizontal"],Be={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},je={prevent:!0,mouse:!0,mouseAllDir:!0},Ee=e=>e>=250?50:Math.ceil(e/5);var We=U({name:"QScrollArea",props:{...Ue,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:k,emit:r}){const c=z(!1),s=z(!1),n=z(!1),d={vertical:z(0),horizontal:z(0)},t={vertical:{ref:z(null),position:z(0),size:z(0)},horizontal:{ref:z(null),position:z(0),size:z(0)}},{proxy:b}=le(),y=Ke(e,b.$q);let l=null,M;const x=z(null),f=o(()=>"q-scrollarea"+(y.value===!0?" q-scrollarea--dark":""));t.vertical.percentage=o(()=>{const i=t.vertical.size.value-d.vertical.value;if(i<=0)return 0;const v=Y(t.vertical.position.value/i,0,1);return Math.round(v*1e4)/1e4}),t.vertical.thumbHidden=o(()=>(e.visible===null?n.value:e.visible)!==!0&&c.value===!1&&s.value===!1||t.vertical.size.value<=d.vertical.value+1),t.vertical.thumbStart=o(()=>t.vertical.percentage.value*(d.vertical.value-t.vertical.thumbSize.value)),t.vertical.thumbSize=o(()=>Math.round(Y(d.vertical.value*d.vertical.value/t.vertical.size.value,Ee(d.vertical.value),d.vertical.value))),t.vertical.style=o(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${t.vertical.thumbStart.value}px`,height:`${t.vertical.thumbSize.value}px`})),t.vertical.thumbClass=o(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.vertical.barClass=o(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),t.horizontal.percentage=o(()=>{const i=t.horizontal.size.value-d.horizontal.value;if(i<=0)return 0;const v=Y(Math.abs(t.horizontal.position.value)/i,0,1);return Math.round(v*1e4)/1e4}),t.horizontal.thumbHidden=o(()=>(e.visible===null?n.value:e.visible)!==!0&&c.value===!1&&s.value===!1||t.horizontal.size.value<=d.horizontal.value+1),t.horizontal.thumbStart=o(()=>t.horizontal.percentage.value*(d.horizontal.value-t.horizontal.thumbSize.value)),t.horizontal.thumbSize=o(()=>Math.round(Y(d.horizontal.value*d.horizontal.value/t.horizontal.size.value,Ee(d.horizontal.value),d.horizontal.value))),t.horizontal.style=o(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[b.$q.lang.rtl===!0?"right":"left"]:`${t.horizontal.thumbStart.value}px`,width:`${t.horizontal.thumbSize.value}px`})),t.horizontal.thumbClass=o(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.horizontal.barClass=o(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const _=o(()=>t.vertical.thumbHidden.value===!0&&t.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),B=[[ce,i=>{j(i,"vertical")},void 0,{vertical:!0,...je}]],p=[[ce,i=>{j(i,"horizontal")},void 0,{horizontal:!0,...je}]];function S(){const i={};return Fe.forEach(v=>{const C=t[v];i[v+"Position"]=C.position.value,i[v+"Percentage"]=C.percentage.value,i[v+"Size"]=C.size.value,i[v+"ContainerSize"]=d[v].value}),i}const u=pt(()=>{const i=S();i.ref=b,r("scroll",i)},0);function Q(i,v,C){if(Fe.includes(i)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(i==="vertical"?Re:xe)(x.value,v,C)}function h({height:i,width:v}){let C=!1;d.vertical.value!==i&&(d.vertical.value=i,C=!0),d.horizontal.value!==v&&(d.horizontal.value=v,C=!0),C===!0&&I()}function P({position:i}){let v=!1;t.vertical.position.value!==i.top&&(t.vertical.position.value=i.top,v=!0),t.horizontal.position.value!==i.left&&(t.horizontal.position.value=i.left,v=!0),v===!0&&I()}function L({height:i,width:v}){t.horizontal.size.value!==v&&(t.horizontal.size.value=v,I()),t.vertical.size.value!==i&&(t.vertical.size.value=i,I())}function j(i,v){const C=t[v];if(i.isFirst===!0){if(C.thumbHidden.value===!0)return;M=C.position.value,s.value=!0}else if(s.value!==!0)return;i.isFinal===!0&&(s.value=!1);const N=Be[v],ie=d[v].value,Se=(C.size.value-ie)/(ie-C.thumbSize.value),pe=i.distance[N.dist],me=M+(i.direction===N.dir?1:-1)*pe*Se;ne(me,v)}function m(i,v){const C=t[v];if(C.thumbHidden.value!==!0){const N=i[Be[v].offset];if(N<C.thumbStart.value||N>C.thumbStart.value+C.thumbSize.value){const ie=N-C.thumbSize.value/2;ne(ie/d[v].value*C.size.value,v)}C.ref.value!==null&&C.ref.value.dispatchEvent(new MouseEvent(i.type,i))}}function V(i){m(i,"vertical")}function H(i){m(i,"horizontal")}function I(){c.value=!0,l!==null&&clearTimeout(l),l=setTimeout(()=>{l=null,c.value=!1},e.delay),e.onScroll!==void 0&&u()}function ne(i,v){x.value[Be[v].scroll]=i}function K(){n.value=!0}function re(){n.value=!1}let Z=null;return T(()=>b.$q.lang.rtl,i=>{x.value!==null&&xe(x.value,Math.abs(t.horizontal.position.value)*(i===!0?-1:1))}),zt(()=>{Z={top:t.vertical.position.value,left:t.horizontal.position.value}}),_t(()=>{if(Z===null)return;const i=x.value;i!==null&&(xe(i,Z.left),Re(i,Z.top))}),fe(u.cancel),Object.assign(b,{getScrollTarget:()=>x.value,getScroll:S,getScrollPosition:()=>({top:t.vertical.position.value,left:t.horizontal.position.value}),getScrollPercentage:()=>({top:t.vertical.percentage.value,left:t.horizontal.percentage.value}),setScrollPosition:Q,setScrollPercentage(i,v,C){Q(i,v*(t[i].size.value-d[i].value)*(i==="horizontal"&&b.$q.lang.rtl===!0?-1:1),C)}}),()=>g("div",{class:f.value,onMouseenter:K,onMouseleave:re},[g("div",{ref:x,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[g("div",{class:"q-scrollarea__content absolute",style:_.value},Xe(k.default,[g(ve,{debounce:0,onResize:L})])),g(et,{axis:"both",onScroll:P})]),g(ve,{debounce:0,onResize:h}),g("div",{class:t.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:V}),g("div",{class:t.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:H}),J(g("div",{ref:t.vertical.ref,class:t.vertical.thumbClass.value,style:t.vertical.style.value,"aria-hidden":"true"}),B),J(g("div",{ref:t.horizontal.ref,class:t.horizontal.thumbClass.value,style:t.horizontal.style.value,"aria-hidden":"true"}),p)])}});const Ie=150;var Jt=U({name:"QDrawer",inheritAttrs:!1,props:{...wt,...Ue,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...qt,"onLayout","miniState"],setup(e,{slots:k,emit:r,attrs:c}){const s=le(),{proxy:{$q:n}}=s,d=Ke(e,n),{preventBodyScroll:t}=$t(),{registerTimeout:b,removeTimeout:y}=xt(),l=de(he,A);if(l===A)return console.error("QDrawer needs to be child of QLayout"),A;let M,x=null,f;const _=z(e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint),B=o(()=>e.mini===!0&&_.value!==!0),p=o(()=>B.value===!0?e.miniWidth:e.width),S=z(e.showIfAbove===!0&&_.value===!1?!0:e.modelValue===!0),u=o(()=>e.persistent!==!0&&(_.value===!0||ie.value===!0));function Q(a,w){if(j(),a!==!1&&l.animate(),E(0),_.value===!0){const D=l.instances[i.value];D!==void 0&&D.belowBreakpoint===!0&&D.hide(!1),X(1),l.isContainer.value!==!0&&t(!0)}else X(0),a!==!1&&_e(!1);b(()=>{a!==!1&&_e(!0),w!==!0&&r("show",a)},Ie)}function h(a,w){m(),a!==!1&&l.animate(),X(0),E(I.value*p.value),we(),w!==!0?b(()=>{r("hide",a)},Ie):y()}const{show:P,hide:L}=kt({showing:S,hideOnRouteChange:u,handleShow:Q,handleHide:h}),{addToHistory:j,removeFromHistory:m}=Ct(S,L,u),V={belowBreakpoint:_,hide:L},H=o(()=>e.side==="right"),I=o(()=>(n.lang.rtl===!0?-1:1)*(H.value===!0?1:-1)),ne=z(0),K=z(!1),re=z(!1),Z=z(p.value*I.value),i=o(()=>H.value===!0?"left":"right"),v=o(()=>S.value===!0&&_.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:p.value:0),C=o(()=>e.overlay===!0||e.miniToOverlay===!0||l.view.value.indexOf(H.value?"R":"L")>-1||n.platform.is.ios===!0&&l.isContainer.value===!0),N=o(()=>e.overlay===!1&&S.value===!0&&_.value===!1),ie=o(()=>e.overlay===!0&&S.value===!0&&_.value===!1),Se=o(()=>"fullscreen q-drawer__backdrop"+(S.value===!1&&K.value===!1?" hidden":"")),pe=o(()=>({backgroundColor:`rgba(0,0,0,${ne.value*.4})`})),me=o(()=>H.value===!0?l.rows.value.top[2]==="r":l.rows.value.top[0]==="l"),tt=o(()=>H.value===!0?l.rows.value.bottom[2]==="r":l.rows.value.bottom[0]==="l"),at=o(()=>{const a={};return l.header.space===!0&&me.value===!1&&(C.value===!0?a.top=`${l.header.offset}px`:l.header.space===!0&&(a.top=`${l.header.size}px`)),l.footer.space===!0&&tt.value===!1&&(C.value===!0?a.bottom=`${l.footer.offset}px`:l.footer.space===!0&&(a.bottom=`${l.footer.size}px`)),a}),lt=o(()=>{const a={width:`${p.value}px`,transform:`translateX(${Z.value}px)`};return _.value===!0?a:Object.assign(a,at.value)}),it=o(()=>"q-drawer__content fit "+(l.isContainer.value!==!0?"scroll":"overflow-auto")),ot=o(()=>`q-drawer q-drawer--${e.side}`+(re.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(d.value===!0?" q-drawer--dark q-dark":"")+(K.value===!0?" no-transition":S.value===!0?"":" q-layout--prevent-focus")+(_.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${B.value===!0?"mini":"standard"}`+(C.value===!0||N.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(me.value===!0?" q-drawer--top-padding":""))),nt=o(()=>{const a=n.lang.rtl===!0?e.side:i.value;return[[ce,ct,void 0,{[a]:!0,mouse:!0}]]}),rt=o(()=>{const a=n.lang.rtl===!0?i.value:e.side;return[[ce,Le,void 0,{[a]:!0,mouse:!0}]]}),st=o(()=>{const a=n.lang.rtl===!0?i.value:e.side;return[[ce,Le,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function ze(){dt(_,e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint)}T(_,a=>{a===!0?(M=S.value,S.value===!0&&L(!1)):e.overlay===!1&&e.behavior!=="mobile"&&M!==!1&&(S.value===!0?(E(0),X(0),we()):P(!1))}),T(()=>e.side,(a,w)=>{l.instances[w]===V&&(l.instances[w]=void 0,l[w].space=!1,l[w].offset=0),l.instances[a]=V,l[a].size=p.value,l[a].space=N.value,l[a].offset=v.value}),T(l.totalWidth,()=>{(l.isContainer.value===!0||document.qScrollPrevented!==!0)&&ze()}),T(()=>e.behavior+e.breakpoint,ze),T(l.isContainer,a=>{S.value===!0&&t(a!==!0),a===!0&&ze()}),T(l.scrollbarWidth,()=>{E(S.value===!0?0:void 0)}),T(v,a=>{G("offset",a)}),T(N,a=>{r("onLayout",a),G("space",a)}),T(H,()=>{E()}),T(p,a=>{E(),qe(e.miniToOverlay,a)}),T(()=>e.miniToOverlay,a=>{qe(a,p.value)}),T(()=>n.lang.rtl,()=>{E()}),T(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(ut(),l.animate())}),T(B,a=>{r("miniState",a)});function E(a){a===void 0?He(()=>{a=S.value===!0?0:p.value,E(I.value*a)}):(l.isContainer.value===!0&&H.value===!0&&(_.value===!0||Math.abs(a)===p.value)&&(a+=I.value*l.scrollbarWidth.value),Z.value=a)}function X(a){ne.value=a}function _e(a){const w=a===!0?"remove":l.isContainer.value!==!0?"add":"";w!==""&&document.body.classList[w]("q-body--drawer-toggle")}function ut(){x!==null&&clearTimeout(x),s.proxy&&s.proxy.$el&&s.proxy.$el.classList.add("q-drawer--mini-animate"),re.value=!0,x=setTimeout(()=>{x=null,re.value=!1,s&&s.proxy&&s.proxy.$el&&s.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function ct(a){if(S.value!==!1)return;const w=p.value,D=Y(a.distance.x,0,w);if(a.isFinal===!0){D>=Math.min(75,w)===!0?P():(l.animate(),X(0),E(I.value*w)),K.value=!1;return}E((n.lang.rtl===!0?H.value!==!0:H.value)?Math.max(w-D,0):Math.min(0,D-w)),X(Y(D/w,0,1)),a.isFirst===!0&&(K.value=!0)}function Le(a){if(S.value!==!0)return;const w=p.value,D=a.direction===e.side,ge=(n.lang.rtl===!0?D!==!0:D)?Y(a.distance.x,0,w):0;if(a.isFinal===!0){Math.abs(ge)<Math.min(75,w)===!0?(l.animate(),X(1),E(0)):L(),K.value=!1;return}E(I.value*ge),X(Y(1-ge/w,0,1)),a.isFirst===!0&&(K.value=!0)}function we(){t(!1),_e(!0)}function G(a,w){l.update(e.side,a,w)}function dt(a,w){a.value!==w&&(a.value=w)}function qe(a,w){G("size",a===!0?e.miniWidth:w)}return l.instances[e.side]=V,qe(e.miniToOverlay,p.value),G("space",N.value),G("offset",v.value),e.showIfAbove===!0&&e.modelValue!==!0&&S.value===!0&&e["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!0),Me(()=>{r("onLayout",N.value),r("miniState",B.value),M=e.showIfAbove===!0;const a=()=>{(S.value===!0?Q:h)(!1,!0)};if(l.totalWidth.value!==0){He(a);return}f=T(l.totalWidth,()=>{f(),f=void 0,S.value===!1&&e.showIfAbove===!0&&_.value===!1?P(!1):a()})}),fe(()=>{f!==void 0&&f(),x!==null&&(clearTimeout(x),x=null),S.value===!0&&we(),l.instances[e.side]===V&&(l.instances[e.side]=void 0,G("size",0),G("offset",0),G("space",!1))}),()=>{const a=[];_.value===!0&&(e.noSwipeOpen===!1&&a.push(J(g("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),nt.value)),a.push(Oe("div",{ref:"backdrop",class:Se.value,style:pe.value,"aria-hidden":"true",onClick:L},void 0,"backdrop",e.noSwipeBackdrop!==!0&&S.value===!0,()=>st.value)));const w=B.value===!0&&k.mini!==void 0,D=[g("div",{...c,key:""+w,class:[it.value,c.class]},w===!0?k.mini():oe(k.default))];return e.elevated===!0&&S.value===!0&&D.push(g("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(Oe("aside",{ref:"content",class:ot.value,style:lt.value},D,"contentclose",e.noSwipeClose!==!0&&_.value===!0,()=>rt.value)),g("div",{class:"q-drawer-container"},a)}}}),Yt=U({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:k}){const{proxy:{$q:r}}=le(),c=de(he,A);if(c===A)return console.error("QPage needs to be a deep child of QLayout"),A;if(de(Ge,A)===A)return console.error("QPage needs to be child of QPageContainer"),A;const n=o(()=>{const t=(c.header.space===!0?c.header.size:0)+(c.footer.space===!0?c.footer.size:0);if(typeof e.styleFn=="function"){const b=c.isContainer.value===!0?c.containerHeight.value:r.screen.height;return e.styleFn(t,b)}return{minHeight:c.isContainer.value===!0?c.containerHeight.value-t+"px":r.screen.height===0?t!==0?`calc(100vh - ${t}px)`:"100vh":r.screen.height-t+"px"}}),d=o(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>g("main",{class:d.value,style:n.value},oe(k.default))}}),Zt=U({name:"QPageContainer",setup(e,{slots:k}){const{proxy:{$q:r}}=le(),c=de(he,A);if(c===A)return console.error("QPageContainer needs to be child of QLayout"),A;Je(Ge,!0);const s=o(()=>{const n={};return c.header.space===!0&&(n.paddingTop=`${c.header.size}px`),c.right.space===!0&&(n[`padding${r.lang.rtl===!0?"Left":"Right"}`]=`${c.right.size}px`),c.footer.space===!0&&(n.paddingBottom=`${c.footer.size}px`),c.left.space===!0&&(n[`padding${r.lang.rtl===!0?"Right":"Left"}`]=`${c.left.size}px`),n});return()=>g("div",{class:"q-page-container",style:s.value},oe(k.default))}}),ea=U({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:k,emit:r}){const{proxy:{$q:c}}=le(),s=z(null),n=z(c.screen.height),d=z(e.container===!0?0:c.screen.width),t=z({position:0,direction:"down",inflectionPoint:0}),b=z(0),y=z(Tt.value===!0?0:ke()),l=o(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),M=o(()=>e.container===!1?{minHeight:c.screen.height+"px"}:null),x=o(()=>y.value!==0?{[c.lang.rtl===!0?"left":"right"]:`${y.value}px`}:null),f=o(()=>y.value!==0?{[c.lang.rtl===!0?"right":"left"]:0,[c.lang.rtl===!0?"left":"right"]:`-${y.value}px`,width:`calc(100% + ${y.value}px)`}:null);function _(h){if(e.container===!0||document.qScrollPrevented!==!0){const P={position:h.position.top,direction:h.direction,directionChanged:h.directionChanged,inflectionPoint:h.inflectionPoint.top,delta:h.delta.top};t.value=P,e.onScroll!==void 0&&r("scroll",P)}}function B(h){const{height:P,width:L}=h;let j=!1;n.value!==P&&(j=!0,n.value=P,e.onScrollHeight!==void 0&&r("scrollHeight",P),S()),d.value!==L&&(j=!0,d.value=L),j===!0&&e.onResize!==void 0&&r("resize",h)}function p({height:h}){b.value!==h&&(b.value=h,S())}function S(){if(e.container===!0){const h=n.value>b.value?ke():0;y.value!==h&&(y.value=h)}}let u=null;const Q={instances:{},view:o(()=>e.view),isContainer:o(()=>e.container),rootRef:s,height:n,containerHeight:b,scrollbarWidth:y,totalWidth:o(()=>d.value+y.value),rows:o(()=>{const h=e.view.toLowerCase().split(" ");return{top:h[0].split(""),middle:h[1].split(""),bottom:h[2].split("")}}),header:be({size:0,offset:0,space:!1}),right:be({size:300,offset:0,space:!1}),footer:be({size:0,offset:0,space:!1}),left:be({size:300,offset:0,space:!1}),scroll:t,animate(){u!==null?clearTimeout(u):document.body.classList.add("q-body--layout-animate"),u=setTimeout(()=>{u=null,document.body.classList.remove("q-body--layout-animate")},155)},update(h,P,L){Q[h][P]=L}};if(Je(he,Q),ke()>0){let L=function(){h=null,P.classList.remove("hide-scrollbar")},j=function(){if(h===null){if(P.scrollHeight>c.screen.height)return;P.classList.add("hide-scrollbar")}else clearTimeout(h);h=setTimeout(L,300)},m=function(V){h!==null&&V==="remove"&&(clearTimeout(h),L()),window[`${V}EventListener`]("resize",j)},h=null;const P=document.body;T(()=>e.container!==!0?"add":"remove",m),e.container!==!0&&m("add"),Pt(()=>{m("remove")})}return()=>{const h=Xe(k.default,[g(et,{onScroll:_}),g(ve,{onResize:B})]),P=g("div",{class:l.value,style:M.value,ref:e.container===!0?void 0:s,tabindex:-1},h);return e.container===!0?g("div",{class:"q-layout-container overflow-hidden",ref:s},[g(ve,{onResize:p}),g("div",{class:"absolute-full",style:x.value},[g("div",{class:"scroll",style:f.value},[P])])]):P}}});const ta=Bt({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function aa(e,k,r,c,s,n){return J((O(),W(ue,{class:"navigation-item q-mx-sm","active-class":"tab-active",to:e.link,exact:"",clickable:""},{default:$(()=>[q(ae,{avatar:""},{default:$(()=>[q(Ze,{name:e.icon},null,8,["name"])]),_:1}),q(ae,null,{default:$(()=>[se(Qe(e.title),1)]),_:1})]),_:1},8,["to"])),[[Ye]])}var la=Qt(ta,[["render",aa]]);const ia=F("span",{class:"text-weight-regular"},"Bienvenido: ",-1),oa={class:"text-weight-light"},na=F("span",{class:"text-weight-regular"},"Rol: ",-1),ra={class:"text-weight-light"},sa={class:"q-mx-sm"},ua=["src"],ca={style:{height:"calc(100% - 80px)",padding:"10px"}},da={class:"q-mini-drawer-hide absolute",style:{top:"30px",right:"-17px"}},va={class:"col"},fa={class:"full-height"},ka={__name:"MainLayout",setup(e){const k=[{title:"Proveedores",icon:"fa fa-truck",link:"/proveedores",permisoRequerido:"index.proveedores"},{title:"Clientes",icon:"fa fa-user-tag",link:"/customer",permisoRequerido:"index.clientes"},{title:"Productos y Servicios",icon:"inventory",link:"/productos",permisoRequerido:"index.productos"},{title:"Compras",icon:"fa-solid fa-cart-shopping",link:"/compras",permisoRequerido:"index.compras"},{title:"Ventas",icon:"fa fa-cash-register",link:"/ventas",permisoRequerido:"index.ventas"}],r=Nt(),c=Mt(),s=Ft(),{validarPermisos:n}=jt();let d,t,b="";const{claim:y}=Lt.read(s.token);y.foto?b=`http://205.235.6.108:80/images/${y.foto}`:b="http://205.235.6.108:80/images/default-perfil.png";const l=y.fullName.split(" ");if(l.length>3){const B=l.pop();d=`${l.join(" ")} ${B[0]}.`}else d=y.fullName;t=y.roles[0],T(()=>r.dark.isActive,(B,p)=>{s.setModeDark(B)},{deep:!0}),Me(()=>{r.dark.set(s.modeDark)});const M=()=>{s.$reset(),c.push("/login")},x=z(!1),f=z(!1),_=B=>{x.value&&(x.value=!1,B.stopPropagation())};return(B,p)=>{const S=Rt("router-view");return O(),W(ea,{view:"lHh LpR lFf"},{default:$(()=>[q(Wt,{class:$e([R(r).dark.isActive?"q-dark":"bg-white","shadow_custom q-mx-lg q-mt-md q-py-sm"]),style:{right:"8px","border-radius":"4px"}},{default:$(()=>[q(De,{class:"no-shadow"},{default:$(()=>[q(ye,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",color:"grey",class:"custom-border",onClick:p[0]||(p[0]=u=>f.value=!f.value)}),q(Et,{class:"q-ml-sm"},{default:$(()=>[R(r).screen.xs?ee("",!0):(O(),Ce("div",{key:0,class:$e(["row justify-center justify-between text-h6",[R(r).dark.isActive?"":"text-black"]])},[F("div",null,[ia,F("span",oa,Qe(R(d)),1)]),F("div",null,[na,F("span",ra,Qe(R(t)),1)])],2))]),_:1}),F("div",null,[q(ye,{class:"q-mr-xs text-grey-6",flat:"",round:"",onClick:p[1]||(p[1]=u=>R(r).dark.toggle()),icon:R(r).dark.isActive?"nights_stay":"wb_sunny"},null,8,["icon"])]),F("div",sa,[q(ye,{class:"q-mr-md q-py-xs q-px-sm custom-border",flat:"",color:"grey",icon:"notifications"}),q(Ht,{class:"cursor-pointer"},{default:$(()=>[F("img",{src:R(b)},null,8,ua),q(Dt,null,{default:$(()=>[q(Te,{style:{"min-width":"200px"}},{default:$(()=>[J((O(),W(ue,{clickable:""},{default:$(()=>[q(ae,null,{default:$(()=>[se("John Doe")]),_:1})]),_:1})),[[Pe]]),q(Ae),J((O(),W(ue,{clickable:""},{default:$(()=>[q(ae,null,{default:$(()=>[se("Mi Perfil")]),_:1})]),_:1})),[[Pe]]),q(Ae),J((O(),W(ue,{onClick:M,clickable:""},{default:$(()=>[q(ae,null,{default:$(()=>[se("Cerrar Sesi\xF3n")]),_:1})]),_:1})),[[Pe]])]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1},8,["class"]),q(Jt,{modelValue:f.value,"onUpdate:modelValue":p[4]||(p[4]=u=>f.value=u),"show-if-above":"",width:260,"mini-width":80,mini:!f.value||x.value,onClickCapture:_,class:$e(R(r).dark.isActive?"":"drawer_cls"),style:{"overflow-y":"hidden"}},{default:$(()=>[F("div",ca,[q(De,{onClick:p[2]||(p[2]=u=>B.$router.push("/")),class:"cursor-pointer justify-center",style:{"margin-top":"7px"}},{default:$(()=>[q(Xt,{src:"/imgs/inigualitySoft.png","spinner-color":"white",style:{height:"auto","max-width":"125px"},fit:"contain"})]),_:1}),q(We,{style:{height:"100%"}},{default:$(()=>[q(Te,{padding:"",class:"q-mt-sm"},{default:$(()=>[J((O(),W(ue,{class:"navigation-item","active-class":"tab-active",to:"/",exact:"",clickable:""},{default:$(()=>[q(ae,{avatar:""},{default:$(()=>[q(Ze,{name:"home",size:"35px"})]),_:1}),q(ae,null,{default:$(()=>[se(" Dashboard ")]),_:1})]),_:1})),[[Ye]]),(O(),Ce(Ve,null,Ot(k,u=>(O(),Ce(Ve,{key:u.title},[R(n)(u.permisoRequerido)?(O(),W(la,At(Vt({key:0},u)),null,16)):ee("",!0)],64))),64)),q(Te,{class:"q-ml-sm"},{default:$(()=>[q(te,{"expand-separator":"",icon:"settings",label:"Ajustes"},{default:$(()=>[R(n)("index.usuario")?(O(),W(te,{key:0,"hide-expand-icon":"",icon:"group",class:"item-options","active-class":"tab-active",to:{name:"Ver Usuarios"},"dense-toggle":"",label:"Gesti\xF3n Personal","header-inset-level":0})):ee("",!0),R(n)("index.rol")?(O(),W(te,{key:1,"hide-expand-icon":"",icon:"fa-solid fa-gears",class:"item-options","active-class":"tab-active",to:{name:"Rol-Permiso"},"dense-toggle":"",label:"Roles y Permisos","header-inset-level":0})):ee("",!0),R(n)("index.correo")?(O(),W(te,{key:2,"hide-expand-icon":"",icon:"mail",class:"item-options","active-class":"tab-active",to:R(y).roles[0]=="SUPER-ADMINISTRADOR"?{name:"emails"}:{name:"email.edit",params:{email_id:R(y).company.id}},"dense-toggle":"",label:"Servidor de Correo","header-inset-level":0},null,8,["to"])):ee("",!0),R(n)("index.empresa")?(O(),W(te,{key:3,"hide-expand-icon":"",icon:"local_convenience_store",class:"item-options","active-class":"tab-active",to:{name:"Ver Empresas"},"dense-toggle":"",label:"Empresa","header-inset-level":0})):ee("",!0),R(n)("index.sucursal")?(O(),W(te,{key:4,"hide-expand-icon":"",icon:"local_convenience_store",class:"item-options","active-class":"tab-active",to:{name:"Ver Sucursales"},"dense-toggle":"",label:"Sucursales","header-inset-level":0})):ee("",!0),q(te,{"hide-expand-icon":"",icon:"description",class:"item-options","active-class":"tab-active",to:{name:"Config Proforma"},"dense-toggle":"",label:"Proforma","header-inset-level":0})]),_:1})]),_:1})]),_:1})]),_:1})]),F("div",da,[q(ye,{dense:"",round:"",style:{"background-color":"#696cff",color:"white",border:"6px solid #f2f2f7"},unelevated:"",icon:"chevron_left",onClick:p[3]||(p[3]=u=>x.value=!0)})])]),_:1},8,["modelValue","mini","class"]),q(Zt,null,{default:$(()=>[q(Yt,{class:"row no-wrap"},{default:$(()=>[F("div",va,[F("div",fa,[q(We,{class:"col q-pr-sm q-scrollarea--only-vertical full-height",visible:""},{default:$(()=>[q(S)]),_:1})])])]),_:1})]),_:1})]),_:1})}}};export{ka as default};
