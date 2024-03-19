import{m as U,n as o,p as y,s as oe,k as de,t as A,r as S,v as T,x as fe,y as vt,z as le,A as he,T as ft,B as ht,C as Me,D as mt,E as gt,F as bt,G as yt,H as St,I as Ue,J as Ke,K as pt,L as zt,M as _t,N as Xe,O as J,R as Re,U as xe,V as wt,W as qt,X as xt,Y as kt,Z as Ct,_ as He,$ as Oe,a0 as $t,a1 as Ge,a2 as Je,a3 as Tt,a4 as ke,a5 as be,a6 as Pt,d as Bt,a7 as Qt,a8 as Ye,o as O,a9 as W,g as C,f as _,i as Ze,aa as se,ab as Qe,u as Mt,a as Lt,ac as Rt,h as ye,ad as H,c as Ce,e as F,ae as $e,af as ee,ag as Ht,ah as Ae,ai as Ot,aj as Ve,ak as At,al as Vt}from"./index.77dc7136.js";import{Q as ae,a as ue,b as Dt}from"./QItemLabel.aaa628b9.js";import{Q as Te}from"./QList.18d45291.js";import{Q as ve}from"./QResizeObserver.1b6880f0.js";import{Q as te}from"./QExpansionItem.23739e2a.js";import{T as ce}from"./TouchPan.fdf9ea12.js";import{b as Y}from"./format.cbf00d5d.js";import{C as Pe}from"./ClosePopup.48df6d9e.js";import{a as Nt,u as Ft}from"./use-quasar.75c84b60.js";import{u as jt}from"./useRolPermisos.1aace9f8.js";import"./QSlideTransition.08c0e0c7.js";import"./touch.3df10340.js";var Et=U({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:x}){const r=o(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>y("div",{class:r.value},oe(x.default))}}),De=U({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:x}){const r=o(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>y("div",{class:r.value,role:"toolbar"},oe(x.default))}}),Wt=U({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:x,emit:r}){const{proxy:{$q:u}}=le(),s=de(he,A);if(s===A)return console.error("QHeader needs to be child of QLayout"),A;const n=S(parseInt(e.heightHint,10)),c=S(!0),t=o(()=>e.reveal===!0||s.view.value.indexOf("H")>-1||u.platform.is.ios&&s.isContainer.value===!0),m=o(()=>{if(e.modelValue!==!0)return 0;if(t.value===!0)return c.value===!0?n.value:0;const d=n.value-s.scroll.value.position;return d>0?d:0}),q=o(()=>e.modelValue!==!0||t.value===!0&&c.value!==!0),l=o(()=>e.modelValue===!0&&q.value===!0&&e.reveal===!0),Q=o(()=>"q-header q-layout__section--marginal "+(t.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(q.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),w=o(()=>{const d=s.rows.value.top,M={};return d[0]==="l"&&s.left.space===!0&&(M[u.lang.rtl===!0?"right":"left"]=`${s.left.size}px`),d[2]==="r"&&s.right.space===!0&&(M[u.lang.rtl===!0?"left":"right"]=`${s.right.size}px`),M});function p(d,M){s.update("header",d,M)}function h(d,M){d.value!==M&&(d.value=M)}function $({height:d}){h(n,d),p("size",d)}function P(d){l.value===!0&&h(c,!0),r("focusin",d)}T(()=>e.modelValue,d=>{p("space",d),h(c,!0),s.animate()}),T(m,d=>{p("offset",d)}),T(()=>e.reveal,d=>{d===!1&&h(c,e.modelValue)}),T(c,d=>{s.animate(),r("reveal",d)}),T(s.scroll,d=>{e.reveal===!0&&h(c,d.direction==="up"||d.position<=e.revealOffset||d.position-d.inflectionPoint<100)});const v={};return s.instances.header=v,e.modelValue===!0&&p("size",n.value),p("space",e.modelValue),p("offset",m.value),fe(()=>{s.instances.header===v&&(s.instances.header=void 0,p("size",0),p("offset",0),p("space",!1))}),()=>{const d=vt(x.default,[]);return e.elevated===!0&&d.push(y("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),d.push(y(ve,{debounce:0,onResize:$})),y("header",{class:Q.value,style:w.value,onFocusin:P},d)}}});const It={ratio:[String,Number]};function Ut(e,x){return o(()=>{const r=Number(e.ratio||(x!==void 0?x.value:void 0));return isNaN(r)!==!0&&r>0?{paddingBottom:`${100/r}%`}:null})}const Kt=16/9;var Xt=U({name:"QImg",props:{...It,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:Kt},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:x,emit:r}){const u=S(e.initialRatio),s=Ut(e,u);let n=null,c=!1;const t=[S(null),S(P())],m=S(0),q=S(!1),l=S(!1),Q=o(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),w=o(()=>({width:e.width,height:e.height})),p=o(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),h=o(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));T(()=>$(),v);function $(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function P(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function v(b){n!==null&&(clearTimeout(n),n=null),l.value=!1,b===null?(q.value=!1,t[m.value^1].value=P()):q.value=!0,t[m.value].value=b}function d({target:b}){c!==!0&&(n!==null&&(clearTimeout(n),n=null),u.value=b.naturalHeight===0?.5:b.naturalWidth/b.naturalHeight,M(b,1))}function M(b,V){c===!0||V===1e3||(b.complete===!0?g(b):n=setTimeout(()=>{n=null,M(b,V+1)},50))}function g(b){c!==!0&&(m.value=m.value^1,t[m.value].value=null,q.value=!1,l.value=!1,r("load",b.currentSrc||b.src))}function B(b){n!==null&&(clearTimeout(n),n=null),q.value=!1,l.value=!0,t[m.value].value=null,t[m.value^1].value=P(),r("error",b)}function L(b){const V=t[b].value,R={key:"img_"+b,class:p.value,style:h.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...V};return m.value===b?(R.class+=" q-img__image--waiting",Object.assign(R,{onLoad:d,onError:B})):R.class+=" q-img__image--loaded",y("div",{class:"q-img__container absolute-full",key:"img"+b},y("img",R))}function j(){return q.value!==!0?y("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},oe(x[l.value===!0?"error":"default"])):y("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},x.loading!==void 0?x.loading():e.noSpinner===!0?void 0:[y(ht,{color:e.spinnerColor,size:e.spinnerSize})])}return v($()),fe(()=>{c=!0,n!==null&&(clearTimeout(n),n=null)}),()=>{const b=[];return s.value!==null&&b.push(y("div",{key:"filler",style:s.value})),l.value!==!0&&(t[0].value!==null&&b.push(L(0)),t[1].value!==null&&b.push(L(1))),b.push(y(ft,{name:"q-transition--fade"},j)),y("div",{class:Q.value,style:w.value,role:"img","aria-label":e.alt},b)}}});const{passive:Ne}=bt,Gt=["both","horizontal","vertical"];var et=U({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Gt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:x}){const r={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let u=null,s,n;T(()=>e.scrollTarget,()=>{m(),t()});function c(){u!==null&&u();const Q=Math.max(0,yt(s)),w=St(s),p={top:Q-r.position.top,left:w-r.position.left};if(e.axis==="vertical"&&p.top===0||e.axis==="horizontal"&&p.left===0)return;const h=Math.abs(p.top)>=Math.abs(p.left)?p.top<0?"up":"down":p.left<0?"left":"right";r.position={top:Q,left:w},r.directionChanged=r.direction!==h,r.delta=p,r.directionChanged===!0&&(r.direction=h,r.inflectionPoint=r.position),x("scroll",{...r})}function t(){s=gt(n,e.scrollTarget),s.addEventListener("scroll",q,Ne),q(!0)}function m(){s!==void 0&&(s.removeEventListener("scroll",q,Ne),s=void 0)}function q(Q){if(Q===!0||e.debounce===0||e.debounce==="0")c();else if(u===null){const[w,p]=e.debounce?[setTimeout(c,e.debounce),clearTimeout]:[requestAnimationFrame(c),cancelAnimationFrame];u=()=>{p(w),u=null}}}const{proxy:l}=le();return T(()=>l.$q.lang.rtl,c),Me(()=>{n=l.$el.parentNode,t()}),fe(()=>{u!==null&&u(),m()}),Object.assign(l,{trigger:q,getPosition:()=>r}),mt}});const Fe=["vertical","horizontal"],Be={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},je={prevent:!0,mouse:!0,mouseAllDir:!0},Ee=e=>e>=250?50:Math.ceil(e/5);var We=U({name:"QScrollArea",props:{...Ue,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:x,emit:r}){const u=S(!1),s=S(!1),n=S(!1),c={vertical:S(0),horizontal:S(0)},t={vertical:{ref:S(null),position:S(0),size:S(0)},horizontal:{ref:S(null),position:S(0),size:S(0)}},{proxy:m}=le(),q=Ke(e,m.$q);let l=null,Q;const w=S(null),p=o(()=>"q-scrollarea"+(q.value===!0?" q-scrollarea--dark":""));t.vertical.percentage=o(()=>{const i=t.vertical.size.value-c.vertical.value;if(i<=0)return 0;const f=Y(t.vertical.position.value/i,0,1);return Math.round(f*1e4)/1e4}),t.vertical.thumbHidden=o(()=>(e.visible===null?n.value:e.visible)!==!0&&u.value===!1&&s.value===!1||t.vertical.size.value<=c.vertical.value+1),t.vertical.thumbStart=o(()=>t.vertical.percentage.value*(c.vertical.value-t.vertical.thumbSize.value)),t.vertical.thumbSize=o(()=>Math.round(Y(c.vertical.value*c.vertical.value/t.vertical.size.value,Ee(c.vertical.value),c.vertical.value))),t.vertical.style=o(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${t.vertical.thumbStart.value}px`,height:`${t.vertical.thumbSize.value}px`})),t.vertical.thumbClass=o(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.vertical.barClass=o(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),t.horizontal.percentage=o(()=>{const i=t.horizontal.size.value-c.horizontal.value;if(i<=0)return 0;const f=Y(Math.abs(t.horizontal.position.value)/i,0,1);return Math.round(f*1e4)/1e4}),t.horizontal.thumbHidden=o(()=>(e.visible===null?n.value:e.visible)!==!0&&u.value===!1&&s.value===!1||t.horizontal.size.value<=c.horizontal.value+1),t.horizontal.thumbStart=o(()=>t.horizontal.percentage.value*(c.horizontal.value-t.horizontal.thumbSize.value)),t.horizontal.thumbSize=o(()=>Math.round(Y(c.horizontal.value*c.horizontal.value/t.horizontal.size.value,Ee(c.horizontal.value),c.horizontal.value))),t.horizontal.style=o(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[m.$q.lang.rtl===!0?"right":"left"]:`${t.horizontal.thumbStart.value}px`,width:`${t.horizontal.thumbSize.value}px`})),t.horizontal.thumbClass=o(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.horizontal.barClass=o(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const h=o(()=>t.vertical.thumbHidden.value===!0&&t.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),$=[[ce,i=>{j(i,"vertical")},void 0,{vertical:!0,...je}]],P=[[ce,i=>{j(i,"horizontal")},void 0,{horizontal:!0,...je}]];function v(){const i={};return Fe.forEach(f=>{const k=t[f];i[f+"Position"]=k.position.value,i[f+"Percentage"]=k.percentage.value,i[f+"Size"]=k.size.value,i[f+"ContainerSize"]=c[f].value}),i}const d=pt(()=>{const i=v();i.ref=m,r("scroll",i)},0);function M(i,f,k){if(Fe.includes(i)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(i==="vertical"?Re:xe)(w.value,f,k)}function g({height:i,width:f}){let k=!1;c.vertical.value!==i&&(c.vertical.value=i,k=!0),c.horizontal.value!==f&&(c.horizontal.value=f,k=!0),k===!0&&I()}function B({position:i}){let f=!1;t.vertical.position.value!==i.top&&(t.vertical.position.value=i.top,f=!0),t.horizontal.position.value!==i.left&&(t.horizontal.position.value=i.left,f=!0),f===!0&&I()}function L({height:i,width:f}){t.horizontal.size.value!==f&&(t.horizontal.size.value=f,I()),t.vertical.size.value!==i&&(t.vertical.size.value=i,I())}function j(i,f){const k=t[f];if(i.isFirst===!0){if(k.thumbHidden.value===!0)return;Q=k.position.value,s.value=!0}else if(s.value!==!0)return;i.isFinal===!0&&(s.value=!1);const N=Be[f],ie=c[f].value,Se=(k.size.value-ie)/(ie-k.thumbSize.value),pe=i.distance[N.dist],me=Q+(i.direction===N.dir?1:-1)*pe*Se;ne(me,f)}function b(i,f){const k=t[f];if(k.thumbHidden.value!==!0){const N=i[Be[f].offset];if(N<k.thumbStart.value||N>k.thumbStart.value+k.thumbSize.value){const ie=N-k.thumbSize.value/2;ne(ie/c[f].value*k.size.value,f)}k.ref.value!==null&&k.ref.value.dispatchEvent(new MouseEvent(i.type,i))}}function V(i){b(i,"vertical")}function R(i){b(i,"horizontal")}function I(){u.value=!0,l!==null&&clearTimeout(l),l=setTimeout(()=>{l=null,u.value=!1},e.delay),e.onScroll!==void 0&&d()}function ne(i,f){w.value[Be[f].scroll]=i}function K(){n.value=!0}function re(){n.value=!1}let Z=null;return T(()=>m.$q.lang.rtl,i=>{w.value!==null&&xe(w.value,Math.abs(t.horizontal.position.value)*(i===!0?-1:1))}),zt(()=>{Z={top:t.vertical.position.value,left:t.horizontal.position.value}}),_t(()=>{if(Z===null)return;const i=w.value;i!==null&&(xe(i,Z.left),Re(i,Z.top))}),fe(d.cancel),Object.assign(m,{getScrollTarget:()=>w.value,getScroll:v,getScrollPosition:()=>({top:t.vertical.position.value,left:t.horizontal.position.value}),getScrollPercentage:()=>({top:t.vertical.percentage.value,left:t.horizontal.percentage.value}),setScrollPosition:M,setScrollPercentage(i,f,k){M(i,f*(t[i].size.value-c[i].value)*(i==="horizontal"&&m.$q.lang.rtl===!0?-1:1),k)}}),()=>y("div",{class:p.value,onMouseenter:K,onMouseleave:re},[y("div",{ref:w,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[y("div",{class:"q-scrollarea__content absolute",style:h.value},Xe(x.default,[y(ve,{debounce:0,onResize:L})])),y(et,{axis:"both",onScroll:B})]),y(ve,{debounce:0,onResize:g}),y("div",{class:t.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:V}),y("div",{class:t.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:R}),J(y("div",{ref:t.vertical.ref,class:t.vertical.thumbClass.value,style:t.vertical.style.value,"aria-hidden":"true"}),$),J(y("div",{ref:t.horizontal.ref,class:t.horizontal.thumbClass.value,style:t.horizontal.style.value,"aria-hidden":"true"}),P)])}});const Ie=150;var Jt=U({name:"QDrawer",inheritAttrs:!1,props:{...wt,...Ue,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...qt,"onLayout","miniState"],setup(e,{slots:x,emit:r,attrs:u}){const s=le(),{proxy:{$q:n}}=s,c=Ke(e,n),{preventBodyScroll:t}=$t(),{registerTimeout:m,removeTimeout:q}=xt(),l=de(he,A);if(l===A)return console.error("QDrawer needs to be child of QLayout"),A;let Q,w=null,p;const h=S(e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint),$=o(()=>e.mini===!0&&h.value!==!0),P=o(()=>$.value===!0?e.miniWidth:e.width),v=S(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),d=o(()=>e.persistent!==!0&&(h.value===!0||ie.value===!0));function M(a,z){if(j(),a!==!1&&l.animate(),E(0),h.value===!0){const D=l.instances[i.value];D!==void 0&&D.belowBreakpoint===!0&&D.hide(!1),X(1),l.isContainer.value!==!0&&t(!0)}else X(0),a!==!1&&_e(!1);m(()=>{a!==!1&&_e(!0),z!==!0&&r("show",a)},Ie)}function g(a,z){b(),a!==!1&&l.animate(),X(0),E(I.value*P.value),we(),z!==!0?m(()=>{r("hide",a)},Ie):q()}const{show:B,hide:L}=kt({showing:v,hideOnRouteChange:d,handleShow:M,handleHide:g}),{addToHistory:j,removeFromHistory:b}=Ct(v,L,d),V={belowBreakpoint:h,hide:L},R=o(()=>e.side==="right"),I=o(()=>(n.lang.rtl===!0?-1:1)*(R.value===!0?1:-1)),ne=S(0),K=S(!1),re=S(!1),Z=S(P.value*I.value),i=o(()=>R.value===!0?"left":"right"),f=o(()=>v.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:P.value:0),k=o(()=>e.overlay===!0||e.miniToOverlay===!0||l.view.value.indexOf(R.value?"R":"L")>-1||n.platform.is.ios===!0&&l.isContainer.value===!0),N=o(()=>e.overlay===!1&&v.value===!0&&h.value===!1),ie=o(()=>e.overlay===!0&&v.value===!0&&h.value===!1),Se=o(()=>"fullscreen q-drawer__backdrop"+(v.value===!1&&K.value===!1?" hidden":"")),pe=o(()=>({backgroundColor:`rgba(0,0,0,${ne.value*.4})`})),me=o(()=>R.value===!0?l.rows.value.top[2]==="r":l.rows.value.top[0]==="l"),tt=o(()=>R.value===!0?l.rows.value.bottom[2]==="r":l.rows.value.bottom[0]==="l"),at=o(()=>{const a={};return l.header.space===!0&&me.value===!1&&(k.value===!0?a.top=`${l.header.offset}px`:l.header.space===!0&&(a.top=`${l.header.size}px`)),l.footer.space===!0&&tt.value===!1&&(k.value===!0?a.bottom=`${l.footer.offset}px`:l.footer.space===!0&&(a.bottom=`${l.footer.size}px`)),a}),lt=o(()=>{const a={width:`${P.value}px`,transform:`translateX(${Z.value}px)`};return h.value===!0?a:Object.assign(a,at.value)}),it=o(()=>"q-drawer__content fit "+(l.isContainer.value!==!0?"scroll":"overflow-auto")),ot=o(()=>`q-drawer q-drawer--${e.side}`+(re.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(c.value===!0?" q-drawer--dark q-dark":"")+(K.value===!0?" no-transition":v.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${$.value===!0?"mini":"standard"}`+(k.value===!0||N.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(me.value===!0?" q-drawer--top-padding":""))),nt=o(()=>{const a=n.lang.rtl===!0?e.side:i.value;return[[ce,ct,void 0,{[a]:!0,mouse:!0}]]}),rt=o(()=>{const a=n.lang.rtl===!0?i.value:e.side;return[[ce,Le,void 0,{[a]:!0,mouse:!0}]]}),st=o(()=>{const a=n.lang.rtl===!0?i.value:e.side;return[[ce,Le,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function ze(){dt(h,e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint)}T(h,a=>{a===!0?(Q=v.value,v.value===!0&&L(!1)):e.overlay===!1&&e.behavior!=="mobile"&&Q!==!1&&(v.value===!0?(E(0),X(0),we()):B(!1))}),T(()=>e.side,(a,z)=>{l.instances[z]===V&&(l.instances[z]=void 0,l[z].space=!1,l[z].offset=0),l.instances[a]=V,l[a].size=P.value,l[a].space=N.value,l[a].offset=f.value}),T(l.totalWidth,()=>{(l.isContainer.value===!0||document.qScrollPrevented!==!0)&&ze()}),T(()=>e.behavior+e.breakpoint,ze),T(l.isContainer,a=>{v.value===!0&&t(a!==!0),a===!0&&ze()}),T(l.scrollbarWidth,()=>{E(v.value===!0?0:void 0)}),T(f,a=>{G("offset",a)}),T(N,a=>{r("onLayout",a),G("space",a)}),T(R,()=>{E()}),T(P,a=>{E(),qe(e.miniToOverlay,a)}),T(()=>e.miniToOverlay,a=>{qe(a,P.value)}),T(()=>n.lang.rtl,()=>{E()}),T(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(ut(),l.animate())}),T($,a=>{r("miniState",a)});function E(a){a===void 0?He(()=>{a=v.value===!0?0:P.value,E(I.value*a)}):(l.isContainer.value===!0&&R.value===!0&&(h.value===!0||Math.abs(a)===P.value)&&(a+=I.value*l.scrollbarWidth.value),Z.value=a)}function X(a){ne.value=a}function _e(a){const z=a===!0?"remove":l.isContainer.value!==!0?"add":"";z!==""&&document.body.classList[z]("q-body--drawer-toggle")}function ut(){w!==null&&clearTimeout(w),s.proxy&&s.proxy.$el&&s.proxy.$el.classList.add("q-drawer--mini-animate"),re.value=!0,w=setTimeout(()=>{w=null,re.value=!1,s&&s.proxy&&s.proxy.$el&&s.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function ct(a){if(v.value!==!1)return;const z=P.value,D=Y(a.distance.x,0,z);if(a.isFinal===!0){D>=Math.min(75,z)===!0?B():(l.animate(),X(0),E(I.value*z)),K.value=!1;return}E((n.lang.rtl===!0?R.value!==!0:R.value)?Math.max(z-D,0):Math.min(0,D-z)),X(Y(D/z,0,1)),a.isFirst===!0&&(K.value=!0)}function Le(a){if(v.value!==!0)return;const z=P.value,D=a.direction===e.side,ge=(n.lang.rtl===!0?D!==!0:D)?Y(a.distance.x,0,z):0;if(a.isFinal===!0){Math.abs(ge)<Math.min(75,z)===!0?(l.animate(),X(1),E(0)):L(),K.value=!1;return}E(I.value*ge),X(Y(1-ge/z,0,1)),a.isFirst===!0&&(K.value=!0)}function we(){t(!1),_e(!0)}function G(a,z){l.update(e.side,a,z)}function dt(a,z){a.value!==z&&(a.value=z)}function qe(a,z){G("size",a===!0?e.miniWidth:z)}return l.instances[e.side]=V,qe(e.miniToOverlay,P.value),G("space",N.value),G("offset",f.value),e.showIfAbove===!0&&e.modelValue!==!0&&v.value===!0&&e["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!0),Me(()=>{r("onLayout",N.value),r("miniState",$.value),Q=e.showIfAbove===!0;const a=()=>{(v.value===!0?M:g)(!1,!0)};if(l.totalWidth.value!==0){He(a);return}p=T(l.totalWidth,()=>{p(),p=void 0,v.value===!1&&e.showIfAbove===!0&&h.value===!1?B(!1):a()})}),fe(()=>{p!==void 0&&p(),w!==null&&(clearTimeout(w),w=null),v.value===!0&&we(),l.instances[e.side]===V&&(l.instances[e.side]=void 0,G("size",0),G("offset",0),G("space",!1))}),()=>{const a=[];h.value===!0&&(e.noSwipeOpen===!1&&a.push(J(y("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),nt.value)),a.push(Oe("div",{ref:"backdrop",class:Se.value,style:pe.value,"aria-hidden":"true",onClick:L},void 0,"backdrop",e.noSwipeBackdrop!==!0&&v.value===!0,()=>st.value)));const z=$.value===!0&&x.mini!==void 0,D=[y("div",{...u,key:""+z,class:[it.value,u.class]},z===!0?x.mini():oe(x.default))];return e.elevated===!0&&v.value===!0&&D.push(y("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(Oe("aside",{ref:"content",class:ot.value,style:lt.value},D,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>rt.value)),y("div",{class:"q-drawer-container"},a)}}}),Yt=U({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:x}){const{proxy:{$q:r}}=le(),u=de(he,A);if(u===A)return console.error("QPage needs to be a deep child of QLayout"),A;if(de(Ge,A)===A)return console.error("QPage needs to be child of QPageContainer"),A;const n=o(()=>{const t=(u.header.space===!0?u.header.size:0)+(u.footer.space===!0?u.footer.size:0);if(typeof e.styleFn=="function"){const m=u.isContainer.value===!0?u.containerHeight.value:r.screen.height;return e.styleFn(t,m)}return{minHeight:u.isContainer.value===!0?u.containerHeight.value-t+"px":r.screen.height===0?t!==0?`calc(100vh - ${t}px)`:"100vh":r.screen.height-t+"px"}}),c=o(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>y("main",{class:c.value,style:n.value},oe(x.default))}}),Zt=U({name:"QPageContainer",setup(e,{slots:x}){const{proxy:{$q:r}}=le(),u=de(he,A);if(u===A)return console.error("QPageContainer needs to be child of QLayout"),A;Je(Ge,!0);const s=o(()=>{const n={};return u.header.space===!0&&(n.paddingTop=`${u.header.size}px`),u.right.space===!0&&(n[`padding${r.lang.rtl===!0?"Left":"Right"}`]=`${u.right.size}px`),u.footer.space===!0&&(n.paddingBottom=`${u.footer.size}px`),u.left.space===!0&&(n[`padding${r.lang.rtl===!0?"Right":"Left"}`]=`${u.left.size}px`),n});return()=>y("div",{class:"q-page-container",style:s.value},oe(x.default))}}),ea=U({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:x,emit:r}){const{proxy:{$q:u}}=le(),s=S(null),n=S(u.screen.height),c=S(e.container===!0?0:u.screen.width),t=S({position:0,direction:"down",inflectionPoint:0}),m=S(0),q=S(Tt.value===!0?0:ke()),l=o(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),Q=o(()=>e.container===!1?{minHeight:u.screen.height+"px"}:null),w=o(()=>q.value!==0?{[u.lang.rtl===!0?"left":"right"]:`${q.value}px`}:null),p=o(()=>q.value!==0?{[u.lang.rtl===!0?"right":"left"]:0,[u.lang.rtl===!0?"left":"right"]:`-${q.value}px`,width:`calc(100% + ${q.value}px)`}:null);function h(g){if(e.container===!0||document.qScrollPrevented!==!0){const B={position:g.position.top,direction:g.direction,directionChanged:g.directionChanged,inflectionPoint:g.inflectionPoint.top,delta:g.delta.top};t.value=B,e.onScroll!==void 0&&r("scroll",B)}}function $(g){const{height:B,width:L}=g;let j=!1;n.value!==B&&(j=!0,n.value=B,e.onScrollHeight!==void 0&&r("scrollHeight",B),v()),c.value!==L&&(j=!0,c.value=L),j===!0&&e.onResize!==void 0&&r("resize",g)}function P({height:g}){m.value!==g&&(m.value=g,v())}function v(){if(e.container===!0){const g=n.value>m.value?ke():0;q.value!==g&&(q.value=g)}}let d=null;const M={instances:{},view:o(()=>e.view),isContainer:o(()=>e.container),rootRef:s,height:n,containerHeight:m,scrollbarWidth:q,totalWidth:o(()=>c.value+q.value),rows:o(()=>{const g=e.view.toLowerCase().split(" ");return{top:g[0].split(""),middle:g[1].split(""),bottom:g[2].split("")}}),header:be({size:0,offset:0,space:!1}),right:be({size:300,offset:0,space:!1}),footer:be({size:0,offset:0,space:!1}),left:be({size:300,offset:0,space:!1}),scroll:t,animate(){d!==null?clearTimeout(d):document.body.classList.add("q-body--layout-animate"),d=setTimeout(()=>{d=null,document.body.classList.remove("q-body--layout-animate")},155)},update(g,B,L){M[g][B]=L}};if(Je(he,M),ke()>0){let L=function(){g=null,B.classList.remove("hide-scrollbar")},j=function(){if(g===null){if(B.scrollHeight>u.screen.height)return;B.classList.add("hide-scrollbar")}else clearTimeout(g);g=setTimeout(L,300)},b=function(V){g!==null&&V==="remove"&&(clearTimeout(g),L()),window[`${V}EventListener`]("resize",j)},g=null;const B=document.body;T(()=>e.container!==!0?"add":"remove",b),e.container!==!0&&b("add"),Pt(()=>{b("remove")})}return()=>{const g=Xe(x.default,[y(et,{onScroll:h}),y(ve,{onResize:$})]),B=y("div",{class:l.value,style:Q.value,ref:e.container===!0?void 0:s,tabindex:-1},g);return e.container===!0?y("div",{class:"q-layout-container overflow-hidden",ref:s},[y(ve,{onResize:P}),y("div",{class:"absolute-full",style:w.value},[y("div",{class:"scroll",style:p.value},[B])])]):B}}});const ta=Bt({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function aa(e,x,r,u,s,n){return J((O(),W(ue,{class:"navigation-item q-mx-sm","active-class":"tab-active",to:e.link,exact:"",clickable:""},{default:C(()=>[_(ae,{avatar:""},{default:C(()=>[_(Ze,{name:e.icon},null,8,["name"])]),_:1}),_(ae,null,{default:C(()=>[se(Qe(e.title),1)]),_:1})]),_:1},8,["to"])),[[Ye]])}var la=Qt(ta,[["render",aa]]);const ia=F("span",{class:"text-weight-regular"},"Bienvenido: ",-1),oa={class:"text-weight-light"},na=F("span",{class:"text-weight-regular"},"Rol: ",-1),ra={class:"text-weight-light"},sa={class:"q-mx-sm"},ua=F("img",{src:"https://cdn.quasar.dev/img/avatar2.jpg"},null,-1),ca={style:{height:"calc(100% - 80px)",padding:"10px"}},da={class:"q-mini-drawer-hide absolute",style:{top:"30px",right:"-17px"}},va={class:"col"},fa={class:"full-height"},Ca={__name:"MainLayout",setup(e){const x=[{title:"Proveedores",icon:"fa fa-truck",link:"/proveedores",permisoRequerido:"index.proveedores"},{title:"Clientes",icon:"fa fa-user-tag",link:"/customer",permisoRequerido:"index.clientes"},{title:"Productos y Servicios",icon:"inventory",link:"/productos",permisoRequerido:"index.productos"},{title:"Compras",icon:"fa-solid fa-cart-shopping",link:"/compras",permisoRequerido:"index.compras"},{title:"Ventas",icon:"fa fa-cash-register",link:"/ventas",permisoRequerido:"index.ventas"}],r=Nt(),u=Mt(),s=Ft(),{validarPermisos:n}=jt();let c="",t="";const{claim:m}=Lt.read(s.token),q=m.fullName.split(" ");if(q.length>3){const h=q.pop();c=`${q.join(" ")} ${h[0]}.`}else c=m.fullName;t=m.roles[0],T(()=>r.dark.isActive,(h,$)=>{s.setModeDark(h)},{deep:!0}),Me(()=>{r.dark.set(s.modeDark)});const l=()=>{s.$reset(),u.push("/login")},Q=S(!1),w=S(!1),p=h=>{Q.value&&(Q.value=!1,h.stopPropagation())};return(h,$)=>{const P=Rt("router-view");return O(),W(ea,{view:"lHh LpR lFf"},{default:C(()=>[_(Wt,{class:$e([H(r).dark.isActive?"q-dark":"bg-white","shadow_custom q-mx-lg q-mt-md q-py-sm"]),style:{right:"8px","border-radius":"4px"}},{default:C(()=>[_(De,{class:"no-shadow"},{default:C(()=>[_(ye,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",color:"grey",class:"custom-border",onClick:$[0]||($[0]=v=>w.value=!w.value)}),_(Et,{class:"q-ml-sm"},{default:C(()=>[H(r).screen.xs?ee("",!0):(O(),Ce("div",{key:0,class:$e(["row justify-center justify-between text-h6",[H(r).dark.isActive?"":"text-black"]])},[F("div",null,[ia,F("span",oa,Qe(H(c)),1)]),F("div",null,[na,F("span",ra,Qe(H(t)),1)])],2))]),_:1}),F("div",null,[_(ye,{class:"q-mr-xs text-grey-6",flat:"",round:"",onClick:$[1]||($[1]=v=>H(r).dark.toggle()),icon:H(r).dark.isActive?"nights_stay":"wb_sunny"},null,8,["icon"])]),F("div",sa,[_(ye,{class:"q-mr-md q-py-xs q-px-sm custom-border",flat:"",color:"grey",icon:"notifications"}),_(Ht,{class:"cursor-pointer"},{default:C(()=>[ua,_(Dt,null,{default:C(()=>[_(Te,{style:{"min-width":"200px"}},{default:C(()=>[J((O(),W(ue,{clickable:""},{default:C(()=>[_(ae,null,{default:C(()=>[se("John Doe")]),_:1})]),_:1})),[[Pe]]),_(Ae),J((O(),W(ue,{clickable:""},{default:C(()=>[_(ae,null,{default:C(()=>[se("My Perfil")]),_:1})]),_:1})),[[Pe]]),_(Ae),J((O(),W(ue,{onClick:l,clickable:""},{default:C(()=>[_(ae,null,{default:C(()=>[se("Cerrar Sesi\xF3n")]),_:1})]),_:1})),[[Pe]])]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1},8,["class"]),_(Jt,{modelValue:w.value,"onUpdate:modelValue":$[4]||($[4]=v=>w.value=v),"show-if-above":"",width:260,"mini-width":80,mini:!w.value||Q.value,onClickCapture:p,class:$e(H(r).dark.isActive?"":"drawer_cls"),style:{"overflow-y":"hidden"}},{default:C(()=>[F("div",ca,[_(De,{onClick:$[2]||($[2]=v=>h.$router.push("/")),class:"cursor-pointer justify-center",style:{"margin-top":"7px"}},{default:C(()=>[_(Xt,{src:"/public//imgs/inigualitySoft.png","spinner-color":"white",style:{height:"auto","max-width":"125px"},fit:"contain"})]),_:1}),_(We,{style:{height:"100%"}},{default:C(()=>[_(Te,{padding:"",class:"q-mt-sm"},{default:C(()=>[J((O(),W(ue,{class:"navigation-item","active-class":"tab-active",to:"/",exact:"",clickable:""},{default:C(()=>[_(ae,{avatar:""},{default:C(()=>[_(Ze,{name:"home",size:"35px"})]),_:1}),_(ae,null,{default:C(()=>[se(" Dashboard ")]),_:1})]),_:1})),[[Ye]]),(O(),Ce(Ve,null,Ot(x,v=>(O(),Ce(Ve,{key:v.title},[H(n)(v.permisoRequerido)?(O(),W(la,At(Vt({key:0},v)),null,16)):ee("",!0)],64))),64)),_(Te,{class:"q-ml-sm"},{default:C(()=>[_(te,{"expand-separator":"",icon:"settings",label:"Ajustes"},{default:C(()=>[H(n)("index.usuario")?(O(),W(te,{key:0,"hide-expand-icon":"",icon:"group",class:"item-options","active-class":"tab-active",to:{name:"Ver Usuarios"},"dense-toggle":"",label:"Gesti\xF3n Personal","header-inset-level":0})):ee("",!0),H(n)("index.rol")?(O(),W(te,{key:1,"hide-expand-icon":"",icon:"fa-solid fa-gears",class:"item-options","active-class":"tab-active",to:{name:"Rol-Permiso"},"dense-toggle":"",label:"Roles y Permisos","header-inset-level":0})):ee("",!0),H(n)("index.correo")?(O(),W(te,{key:2,"hide-expand-icon":"",icon:"mail",class:"item-options","active-class":"tab-active",to:H(m).roles[0]=="SUPER-ADMINISTRADOR"?{name:"emails"}:{name:"email.edit",params:{email_id:H(m).company.id}},"dense-toggle":"",label:"Servidor de Correo","header-inset-level":0},null,8,["to"])):ee("",!0),H(n)("index.empresa")?(O(),W(te,{key:3,"hide-expand-icon":"",icon:"local_convenience_store",class:"item-options","active-class":"tab-active",to:{name:"Ver Empresas"},"dense-toggle":"",label:"Empresa","header-inset-level":0})):ee("",!0),H(n)("index.sucursal")?(O(),W(te,{key:4,"hide-expand-icon":"",icon:"local_convenience_store",class:"item-options","active-class":"tab-active",to:{name:"Ver Sucursales"},"dense-toggle":"",label:"Sucursales","header-inset-level":0})):ee("",!0),_(te,{"hide-expand-icon":"",icon:"description",class:"item-options","active-class":"tab-active",to:{name:"Config Proforma"},"dense-toggle":"",label:"Proforma","header-inset-level":0})]),_:1})]),_:1})]),_:1})]),_:1})]),F("div",da,[_(ye,{dense:"",round:"",style:{"background-color":"#696cff",color:"white",border:"6px solid #f2f2f7"},unelevated:"",icon:"chevron_left",onClick:$[3]||($[3]=v=>Q.value=!0)})])]),_:1},8,["modelValue","mini","class"]),_(Zt,null,{default:C(()=>[_(Yt,{class:"row no-wrap"},{default:C(()=>[F("div",va,[F("div",fa,[_(We,{class:"col q-pr-sm q-scrollarea--only-vertical full-height",visible:""},{default:C(()=>[_(P)]),_:1})])])]),_:1})]),_:1})]),_:1})}}};export{Ca as default};
