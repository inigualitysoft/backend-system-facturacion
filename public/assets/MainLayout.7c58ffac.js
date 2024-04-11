import{m as U,n as o,p as y,s as oe,k as ve,t as V,r as z,v as T,x as me,y as vt,z as le,A as he,T as ft,B as mt,C as Me,D as ht,E as gt,F as bt,G as yt,H as pt,I as Ue,J as Ke,K as St,L as zt,M as _t,N as Xe,O as Y,R as Re,U as ke,V as wt,W as qt,X as xt,Y as kt,Z as Ct,_ as He,$ as Oe,a0 as $t,a1 as Ge,a2 as Ye,a3 as Tt,a4 as Ce,a5 as ye,a6 as Pt,d as Bt,a7 as Qt,a8 as Je,o as A,a9 as W,g as $,f as q,i as Ze,aa as se,ab as ue,u as Mt,a as Lt,ac as Rt,h as pe,ad as M,c as $e,e as O,ae as Te,af as ee,ag as Ht,ah as Ae,ai as Ot,aj as Ve,ak as At,al as Vt}from"./index.881c7505.js";import{b as J,Q as ae,a as ce,c as Dt}from"./format.14a0a558.js";import{Q as Pe}from"./QList.ee2e54b2.js";import{Q as fe}from"./QResizeObserver.8d2e757d.js";import{Q as te}from"./QExpansionItem.d51ac8ed.js";import{T as de}from"./TouchPan.4b678fda.js";import{C as Be}from"./ClosePopup.f1c15012.js";import{a as Ft,u as Nt}from"./use-quasar.d73fa91c.js";import{u as jt}from"./useRolPermisos.4548ba0e.js";import"./QSlideTransition.6995672e.js";import"./touch.3df10340.js";var Et=U({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:k}){const r=o(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>y("div",{class:r.value},oe(k.default))}}),De=U({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:k}){const r=o(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>y("div",{class:r.value,role:"toolbar"},oe(k.default))}}),Wt=U({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:k,emit:r}){const{proxy:{$q:c}}=le(),u=ve(he,V);if(u===V)return console.error("QHeader needs to be child of QLayout"),V;const n=z(parseInt(e.heightHint,10)),d=z(!0),t=o(()=>e.reveal===!0||u.view.value.indexOf("H")>-1||c.platform.is.ios&&u.isContainer.value===!0),p=o(()=>{if(e.modelValue!==!0)return 0;if(t.value===!0)return d.value===!0?n.value:0;const s=n.value-u.scroll.value.position;return s>0?s:0}),f=o(()=>e.modelValue!==!0||t.value===!0&&d.value!==!0),l=o(()=>e.modelValue===!0&&f.value===!0&&e.reveal===!0),L=o(()=>"q-header q-layout__section--marginal "+(t.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(f.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),x=o(()=>{const s=u.rows.value.top,Q={};return s[0]==="l"&&u.left.space===!0&&(Q[c.lang.rtl===!0?"right":"left"]=`${u.left.size}px`),s[2]==="r"&&u.right.space===!0&&(Q[c.lang.rtl===!0?"left":"right"]=`${u.right.size}px`),Q});function m(s,Q){u.update("header",s,Q)}function _(s,Q){s.value!==Q&&(s.value=Q)}function P({height:s}){_(n,s),m("size",s)}function h(s){l.value===!0&&_(d,!0),r("focusin",s)}T(()=>e.modelValue,s=>{m("space",s),_(d,!0),u.animate()}),T(p,s=>{m("offset",s)}),T(()=>e.reveal,s=>{s===!1&&_(d,e.modelValue)}),T(d,s=>{u.animate(),r("reveal",s)}),T(u.scroll,s=>{e.reveal===!0&&_(d,s.direction==="up"||s.position<=e.revealOffset||s.position-s.inflectionPoint<100)});const S={};return u.instances.header=S,e.modelValue===!0&&m("size",n.value),m("space",e.modelValue),m("offset",p.value),me(()=>{u.instances.header===S&&(u.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const s=vt(k.default,[]);return e.elevated===!0&&s.push(y("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),s.push(y(fe,{debounce:0,onResize:P})),y("header",{class:L.value,style:x.value,onFocusin:h},s)}}});const It={ratio:[String,Number]};function Ut(e,k){return o(()=>{const r=Number(e.ratio||(k!==void 0?k.value:void 0));return isNaN(r)!==!0&&r>0?{paddingBottom:`${100/r}%`}:null})}const Kt=16/9;var Xt=U({name:"QImg",props:{...It,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:Kt},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:k,emit:r}){const c=z(e.initialRatio),u=Ut(e,c);let n=null,d=!1;const t=[z(null),z(h())],p=z(0),f=z(!1),l=z(!1),L=o(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),x=o(()=>({width:e.width,height:e.height})),m=o(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),_=o(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));T(()=>P(),S);function P(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function h(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function S(b){n!==null&&(clearTimeout(n),n=null),l.value=!1,b===null?(f.value=!1,t[p.value^1].value=h()):f.value=!0,t[p.value].value=b}function s({target:b}){d!==!0&&(n!==null&&(clearTimeout(n),n=null),c.value=b.naturalHeight===0?.5:b.naturalWidth/b.naturalHeight,Q(b,1))}function Q(b,D){d===!0||D===1e3||(b.complete===!0?g(b):n=setTimeout(()=>{n=null,Q(b,D+1)},50))}function g(b){d!==!0&&(p.value=p.value^1,t[p.value].value=null,f.value=!1,l.value=!1,r("load",b.currentSrc||b.src))}function B(b){n!==null&&(clearTimeout(n),n=null),f.value=!1,l.value=!0,t[p.value].value=null,t[p.value^1].value=h(),r("error",b)}function R(b){const D=t[b].value,H={key:"img_"+b,class:m.value,style:_.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...D};return p.value===b?(H.class+=" q-img__image--waiting",Object.assign(H,{onLoad:s,onError:B})):H.class+=" q-img__image--loaded",y("div",{class:"q-img__container absolute-full",key:"img"+b},y("img",H))}function j(){return f.value!==!0?y("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},oe(k[l.value===!0?"error":"default"])):y("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},k.loading!==void 0?k.loading():e.noSpinner===!0?void 0:[y(mt,{color:e.spinnerColor,size:e.spinnerSize})])}return S(P()),me(()=>{d=!0,n!==null&&(clearTimeout(n),n=null)}),()=>{const b=[];return u.value!==null&&b.push(y("div",{key:"filler",style:u.value})),l.value!==!0&&(t[0].value!==null&&b.push(R(0)),t[1].value!==null&&b.push(R(1))),b.push(y(ft,{name:"q-transition--fade"},j)),y("div",{class:L.value,style:x.value,role:"img","aria-label":e.alt},b)}}});const{passive:Fe}=bt,Gt=["both","horizontal","vertical"];var et=U({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Gt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:k}){const r={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let c=null,u,n;T(()=>e.scrollTarget,()=>{p(),t()});function d(){c!==null&&c();const L=Math.max(0,yt(u)),x=pt(u),m={top:L-r.position.top,left:x-r.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const _=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";r.position={top:L,left:x},r.directionChanged=r.direction!==_,r.delta=m,r.directionChanged===!0&&(r.direction=_,r.inflectionPoint=r.position),k("scroll",{...r})}function t(){u=gt(n,e.scrollTarget),u.addEventListener("scroll",f,Fe),f(!0)}function p(){u!==void 0&&(u.removeEventListener("scroll",f,Fe),u=void 0)}function f(L){if(L===!0||e.debounce===0||e.debounce==="0")d();else if(c===null){const[x,m]=e.debounce?[setTimeout(d,e.debounce),clearTimeout]:[requestAnimationFrame(d),cancelAnimationFrame];c=()=>{m(x),c=null}}}const{proxy:l}=le();return T(()=>l.$q.lang.rtl,d),Me(()=>{n=l.$el.parentNode,t()}),me(()=>{c!==null&&c(),p()}),Object.assign(l,{trigger:f,getPosition:()=>r}),ht}});const Ne=["vertical","horizontal"],Qe={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},je={prevent:!0,mouse:!0,mouseAllDir:!0},Ee=e=>e>=250?50:Math.ceil(e/5);var We=U({name:"QScrollArea",props:{...Ue,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:k,emit:r}){const c=z(!1),u=z(!1),n=z(!1),d={vertical:z(0),horizontal:z(0)},t={vertical:{ref:z(null),position:z(0),size:z(0)},horizontal:{ref:z(null),position:z(0),size:z(0)}},{proxy:p}=le(),f=Ke(e,p.$q);let l=null,L;const x=z(null),m=o(()=>"q-scrollarea"+(f.value===!0?" q-scrollarea--dark":""));t.vertical.percentage=o(()=>{const i=t.vertical.size.value-d.vertical.value;if(i<=0)return 0;const v=J(t.vertical.position.value/i,0,1);return Math.round(v*1e4)/1e4}),t.vertical.thumbHidden=o(()=>(e.visible===null?n.value:e.visible)!==!0&&c.value===!1&&u.value===!1||t.vertical.size.value<=d.vertical.value+1),t.vertical.thumbStart=o(()=>t.vertical.percentage.value*(d.vertical.value-t.vertical.thumbSize.value)),t.vertical.thumbSize=o(()=>Math.round(J(d.vertical.value*d.vertical.value/t.vertical.size.value,Ee(d.vertical.value),d.vertical.value))),t.vertical.style=o(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${t.vertical.thumbStart.value}px`,height:`${t.vertical.thumbSize.value}px`})),t.vertical.thumbClass=o(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.vertical.barClass=o(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),t.horizontal.percentage=o(()=>{const i=t.horizontal.size.value-d.horizontal.value;if(i<=0)return 0;const v=J(Math.abs(t.horizontal.position.value)/i,0,1);return Math.round(v*1e4)/1e4}),t.horizontal.thumbHidden=o(()=>(e.visible===null?n.value:e.visible)!==!0&&c.value===!1&&u.value===!1||t.horizontal.size.value<=d.horizontal.value+1),t.horizontal.thumbStart=o(()=>t.horizontal.percentage.value*(d.horizontal.value-t.horizontal.thumbSize.value)),t.horizontal.thumbSize=o(()=>Math.round(J(d.horizontal.value*d.horizontal.value/t.horizontal.size.value,Ee(d.horizontal.value),d.horizontal.value))),t.horizontal.style=o(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[p.$q.lang.rtl===!0?"right":"left"]:`${t.horizontal.thumbStart.value}px`,width:`${t.horizontal.thumbSize.value}px`})),t.horizontal.thumbClass=o(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.horizontal.barClass=o(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const _=o(()=>t.vertical.thumbHidden.value===!0&&t.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),P=[[de,i=>{j(i,"vertical")},void 0,{vertical:!0,...je}]],h=[[de,i=>{j(i,"horizontal")},void 0,{horizontal:!0,...je}]];function S(){const i={};return Ne.forEach(v=>{const C=t[v];i[v+"Position"]=C.position.value,i[v+"Percentage"]=C.percentage.value,i[v+"Size"]=C.size.value,i[v+"ContainerSize"]=d[v].value}),i}const s=St(()=>{const i=S();i.ref=p,r("scroll",i)},0);function Q(i,v,C){if(Ne.includes(i)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(i==="vertical"?Re:ke)(x.value,v,C)}function g({height:i,width:v}){let C=!1;d.vertical.value!==i&&(d.vertical.value=i,C=!0),d.horizontal.value!==v&&(d.horizontal.value=v,C=!0),C===!0&&I()}function B({position:i}){let v=!1;t.vertical.position.value!==i.top&&(t.vertical.position.value=i.top,v=!0),t.horizontal.position.value!==i.left&&(t.horizontal.position.value=i.left,v=!0),v===!0&&I()}function R({height:i,width:v}){t.horizontal.size.value!==v&&(t.horizontal.size.value=v,I()),t.vertical.size.value!==i&&(t.vertical.size.value=i,I())}function j(i,v){const C=t[v];if(i.isFirst===!0){if(C.thumbHidden.value===!0)return;L=C.position.value,u.value=!0}else if(u.value!==!0)return;i.isFinal===!0&&(u.value=!1);const N=Qe[v],ie=d[v].value,Se=(C.size.value-ie)/(ie-C.thumbSize.value),ze=i.distance[N.dist],ge=L+(i.direction===N.dir?1:-1)*ze*Se;ne(ge,v)}function b(i,v){const C=t[v];if(C.thumbHidden.value!==!0){const N=i[Qe[v].offset];if(N<C.thumbStart.value||N>C.thumbStart.value+C.thumbSize.value){const ie=N-C.thumbSize.value/2;ne(ie/d[v].value*C.size.value,v)}C.ref.value!==null&&C.ref.value.dispatchEvent(new MouseEvent(i.type,i))}}function D(i){b(i,"vertical")}function H(i){b(i,"horizontal")}function I(){c.value=!0,l!==null&&clearTimeout(l),l=setTimeout(()=>{l=null,c.value=!1},e.delay),e.onScroll!==void 0&&s()}function ne(i,v){x.value[Qe[v].scroll]=i}function K(){n.value=!0}function re(){n.value=!1}let Z=null;return T(()=>p.$q.lang.rtl,i=>{x.value!==null&&ke(x.value,Math.abs(t.horizontal.position.value)*(i===!0?-1:1))}),zt(()=>{Z={top:t.vertical.position.value,left:t.horizontal.position.value}}),_t(()=>{if(Z===null)return;const i=x.value;i!==null&&(ke(i,Z.left),Re(i,Z.top))}),me(s.cancel),Object.assign(p,{getScrollTarget:()=>x.value,getScroll:S,getScrollPosition:()=>({top:t.vertical.position.value,left:t.horizontal.position.value}),getScrollPercentage:()=>({top:t.vertical.percentage.value,left:t.horizontal.percentage.value}),setScrollPosition:Q,setScrollPercentage(i,v,C){Q(i,v*(t[i].size.value-d[i].value)*(i==="horizontal"&&p.$q.lang.rtl===!0?-1:1),C)}}),()=>y("div",{class:m.value,onMouseenter:K,onMouseleave:re},[y("div",{ref:x,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[y("div",{class:"q-scrollarea__content absolute",style:_.value},Xe(k.default,[y(fe,{debounce:0,onResize:R})])),y(et,{axis:"both",onScroll:B})]),y(fe,{debounce:0,onResize:g}),y("div",{class:t.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:D}),y("div",{class:t.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:H}),Y(y("div",{ref:t.vertical.ref,class:t.vertical.thumbClass.value,style:t.vertical.style.value,"aria-hidden":"true"}),P),Y(y("div",{ref:t.horizontal.ref,class:t.horizontal.thumbClass.value,style:t.horizontal.style.value,"aria-hidden":"true"}),h)])}});const Ie=150;var Yt=U({name:"QDrawer",inheritAttrs:!1,props:{...wt,...Ue,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...qt,"onLayout","miniState"],setup(e,{slots:k,emit:r,attrs:c}){const u=le(),{proxy:{$q:n}}=u,d=Ke(e,n),{preventBodyScroll:t}=$t(),{registerTimeout:p,removeTimeout:f}=xt(),l=ve(he,V);if(l===V)return console.error("QDrawer needs to be child of QLayout"),V;let L,x=null,m;const _=z(e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint),P=o(()=>e.mini===!0&&_.value!==!0),h=o(()=>P.value===!0?e.miniWidth:e.width),S=z(e.showIfAbove===!0&&_.value===!1?!0:e.modelValue===!0),s=o(()=>e.persistent!==!0&&(_.value===!0||ie.value===!0));function Q(a,w){if(j(),a!==!1&&l.animate(),E(0),_.value===!0){const F=l.instances[i.value];F!==void 0&&F.belowBreakpoint===!0&&F.hide(!1),X(1),l.isContainer.value!==!0&&t(!0)}else X(0),a!==!1&&we(!1);p(()=>{a!==!1&&we(!0),w!==!0&&r("show",a)},Ie)}function g(a,w){b(),a!==!1&&l.animate(),X(0),E(I.value*h.value),qe(),w!==!0?p(()=>{r("hide",a)},Ie):f()}const{show:B,hide:R}=kt({showing:S,hideOnRouteChange:s,handleShow:Q,handleHide:g}),{addToHistory:j,removeFromHistory:b}=Ct(S,R,s),D={belowBreakpoint:_,hide:R},H=o(()=>e.side==="right"),I=o(()=>(n.lang.rtl===!0?-1:1)*(H.value===!0?1:-1)),ne=z(0),K=z(!1),re=z(!1),Z=z(h.value*I.value),i=o(()=>H.value===!0?"left":"right"),v=o(()=>S.value===!0&&_.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:h.value:0),C=o(()=>e.overlay===!0||e.miniToOverlay===!0||l.view.value.indexOf(H.value?"R":"L")>-1||n.platform.is.ios===!0&&l.isContainer.value===!0),N=o(()=>e.overlay===!1&&S.value===!0&&_.value===!1),ie=o(()=>e.overlay===!0&&S.value===!0&&_.value===!1),Se=o(()=>"fullscreen q-drawer__backdrop"+(S.value===!1&&K.value===!1?" hidden":"")),ze=o(()=>({backgroundColor:`rgba(0,0,0,${ne.value*.4})`})),ge=o(()=>H.value===!0?l.rows.value.top[2]==="r":l.rows.value.top[0]==="l"),tt=o(()=>H.value===!0?l.rows.value.bottom[2]==="r":l.rows.value.bottom[0]==="l"),at=o(()=>{const a={};return l.header.space===!0&&ge.value===!1&&(C.value===!0?a.top=`${l.header.offset}px`:l.header.space===!0&&(a.top=`${l.header.size}px`)),l.footer.space===!0&&tt.value===!1&&(C.value===!0?a.bottom=`${l.footer.offset}px`:l.footer.space===!0&&(a.bottom=`${l.footer.size}px`)),a}),lt=o(()=>{const a={width:`${h.value}px`,transform:`translateX(${Z.value}px)`};return _.value===!0?a:Object.assign(a,at.value)}),it=o(()=>"q-drawer__content fit "+(l.isContainer.value!==!0?"scroll":"overflow-auto")),ot=o(()=>`q-drawer q-drawer--${e.side}`+(re.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(d.value===!0?" q-drawer--dark q-dark":"")+(K.value===!0?" no-transition":S.value===!0?"":" q-layout--prevent-focus")+(_.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${P.value===!0?"mini":"standard"}`+(C.value===!0||N.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ge.value===!0?" q-drawer--top-padding":""))),nt=o(()=>{const a=n.lang.rtl===!0?e.side:i.value;return[[de,ct,void 0,{[a]:!0,mouse:!0}]]}),rt=o(()=>{const a=n.lang.rtl===!0?i.value:e.side;return[[de,Le,void 0,{[a]:!0,mouse:!0}]]}),st=o(()=>{const a=n.lang.rtl===!0?i.value:e.side;return[[de,Le,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function _e(){dt(_,e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint)}T(_,a=>{a===!0?(L=S.value,S.value===!0&&R(!1)):e.overlay===!1&&e.behavior!=="mobile"&&L!==!1&&(S.value===!0?(E(0),X(0),qe()):B(!1))}),T(()=>e.side,(a,w)=>{l.instances[w]===D&&(l.instances[w]=void 0,l[w].space=!1,l[w].offset=0),l.instances[a]=D,l[a].size=h.value,l[a].space=N.value,l[a].offset=v.value}),T(l.totalWidth,()=>{(l.isContainer.value===!0||document.qScrollPrevented!==!0)&&_e()}),T(()=>e.behavior+e.breakpoint,_e),T(l.isContainer,a=>{S.value===!0&&t(a!==!0),a===!0&&_e()}),T(l.scrollbarWidth,()=>{E(S.value===!0?0:void 0)}),T(v,a=>{G("offset",a)}),T(N,a=>{r("onLayout",a),G("space",a)}),T(H,()=>{E()}),T(h,a=>{E(),xe(e.miniToOverlay,a)}),T(()=>e.miniToOverlay,a=>{xe(a,h.value)}),T(()=>n.lang.rtl,()=>{E()}),T(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(ut(),l.animate())}),T(P,a=>{r("miniState",a)});function E(a){a===void 0?He(()=>{a=S.value===!0?0:h.value,E(I.value*a)}):(l.isContainer.value===!0&&H.value===!0&&(_.value===!0||Math.abs(a)===h.value)&&(a+=I.value*l.scrollbarWidth.value),Z.value=a)}function X(a){ne.value=a}function we(a){const w=a===!0?"remove":l.isContainer.value!==!0?"add":"";w!==""&&document.body.classList[w]("q-body--drawer-toggle")}function ut(){x!==null&&clearTimeout(x),u.proxy&&u.proxy.$el&&u.proxy.$el.classList.add("q-drawer--mini-animate"),re.value=!0,x=setTimeout(()=>{x=null,re.value=!1,u&&u.proxy&&u.proxy.$el&&u.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function ct(a){if(S.value!==!1)return;const w=h.value,F=J(a.distance.x,0,w);if(a.isFinal===!0){F>=Math.min(75,w)===!0?B():(l.animate(),X(0),E(I.value*w)),K.value=!1;return}E((n.lang.rtl===!0?H.value!==!0:H.value)?Math.max(w-F,0):Math.min(0,F-w)),X(J(F/w,0,1)),a.isFirst===!0&&(K.value=!0)}function Le(a){if(S.value!==!0)return;const w=h.value,F=a.direction===e.side,be=(n.lang.rtl===!0?F!==!0:F)?J(a.distance.x,0,w):0;if(a.isFinal===!0){Math.abs(be)<Math.min(75,w)===!0?(l.animate(),X(1),E(0)):R(),K.value=!1;return}E(I.value*be),X(J(1-be/w,0,1)),a.isFirst===!0&&(K.value=!0)}function qe(){t(!1),we(!0)}function G(a,w){l.update(e.side,a,w)}function dt(a,w){a.value!==w&&(a.value=w)}function xe(a,w){G("size",a===!0?e.miniWidth:w)}return l.instances[e.side]=D,xe(e.miniToOverlay,h.value),G("space",N.value),G("offset",v.value),e.showIfAbove===!0&&e.modelValue!==!0&&S.value===!0&&e["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!0),Me(()=>{r("onLayout",N.value),r("miniState",P.value),L=e.showIfAbove===!0;const a=()=>{(S.value===!0?Q:g)(!1,!0)};if(l.totalWidth.value!==0){He(a);return}m=T(l.totalWidth,()=>{m(),m=void 0,S.value===!1&&e.showIfAbove===!0&&_.value===!1?B(!1):a()})}),me(()=>{m!==void 0&&m(),x!==null&&(clearTimeout(x),x=null),S.value===!0&&qe(),l.instances[e.side]===D&&(l.instances[e.side]=void 0,G("size",0),G("offset",0),G("space",!1))}),()=>{const a=[];_.value===!0&&(e.noSwipeOpen===!1&&a.push(Y(y("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),nt.value)),a.push(Oe("div",{ref:"backdrop",class:Se.value,style:ze.value,"aria-hidden":"true",onClick:R},void 0,"backdrop",e.noSwipeBackdrop!==!0&&S.value===!0,()=>st.value)));const w=P.value===!0&&k.mini!==void 0,F=[y("div",{...c,key:""+w,class:[it.value,c.class]},w===!0?k.mini():oe(k.default))];return e.elevated===!0&&S.value===!0&&F.push(y("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(Oe("aside",{ref:"content",class:ot.value,style:lt.value},F,"contentclose",e.noSwipeClose!==!0&&_.value===!0,()=>rt.value)),y("div",{class:"q-drawer-container"},a)}}}),Jt=U({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:k}){const{proxy:{$q:r}}=le(),c=ve(he,V);if(c===V)return console.error("QPage needs to be a deep child of QLayout"),V;if(ve(Ge,V)===V)return console.error("QPage needs to be child of QPageContainer"),V;const n=o(()=>{const t=(c.header.space===!0?c.header.size:0)+(c.footer.space===!0?c.footer.size:0);if(typeof e.styleFn=="function"){const p=c.isContainer.value===!0?c.containerHeight.value:r.screen.height;return e.styleFn(t,p)}return{minHeight:c.isContainer.value===!0?c.containerHeight.value-t+"px":r.screen.height===0?t!==0?`calc(100vh - ${t}px)`:"100vh":r.screen.height-t+"px"}}),d=o(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>y("main",{class:d.value,style:n.value},oe(k.default))}}),Zt=U({name:"QPageContainer",setup(e,{slots:k}){const{proxy:{$q:r}}=le(),c=ve(he,V);if(c===V)return console.error("QPageContainer needs to be child of QLayout"),V;Ye(Ge,!0);const u=o(()=>{const n={};return c.header.space===!0&&(n.paddingTop=`${c.header.size}px`),c.right.space===!0&&(n[`padding${r.lang.rtl===!0?"Left":"Right"}`]=`${c.right.size}px`),c.footer.space===!0&&(n.paddingBottom=`${c.footer.size}px`),c.left.space===!0&&(n[`padding${r.lang.rtl===!0?"Right":"Left"}`]=`${c.left.size}px`),n});return()=>y("div",{class:"q-page-container",style:u.value},oe(k.default))}}),ea=U({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:k,emit:r}){const{proxy:{$q:c}}=le(),u=z(null),n=z(c.screen.height),d=z(e.container===!0?0:c.screen.width),t=z({position:0,direction:"down",inflectionPoint:0}),p=z(0),f=z(Tt.value===!0?0:Ce()),l=o(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),L=o(()=>e.container===!1?{minHeight:c.screen.height+"px"}:null),x=o(()=>f.value!==0?{[c.lang.rtl===!0?"left":"right"]:`${f.value}px`}:null),m=o(()=>f.value!==0?{[c.lang.rtl===!0?"right":"left"]:0,[c.lang.rtl===!0?"left":"right"]:`-${f.value}px`,width:`calc(100% + ${f.value}px)`}:null);function _(g){if(e.container===!0||document.qScrollPrevented!==!0){const B={position:g.position.top,direction:g.direction,directionChanged:g.directionChanged,inflectionPoint:g.inflectionPoint.top,delta:g.delta.top};t.value=B,e.onScroll!==void 0&&r("scroll",B)}}function P(g){const{height:B,width:R}=g;let j=!1;n.value!==B&&(j=!0,n.value=B,e.onScrollHeight!==void 0&&r("scrollHeight",B),S()),d.value!==R&&(j=!0,d.value=R),j===!0&&e.onResize!==void 0&&r("resize",g)}function h({height:g}){p.value!==g&&(p.value=g,S())}function S(){if(e.container===!0){const g=n.value>p.value?Ce():0;f.value!==g&&(f.value=g)}}let s=null;const Q={instances:{},view:o(()=>e.view),isContainer:o(()=>e.container),rootRef:u,height:n,containerHeight:p,scrollbarWidth:f,totalWidth:o(()=>d.value+f.value),rows:o(()=>{const g=e.view.toLowerCase().split(" ");return{top:g[0].split(""),middle:g[1].split(""),bottom:g[2].split("")}}),header:ye({size:0,offset:0,space:!1}),right:ye({size:300,offset:0,space:!1}),footer:ye({size:0,offset:0,space:!1}),left:ye({size:300,offset:0,space:!1}),scroll:t,animate(){s!==null?clearTimeout(s):document.body.classList.add("q-body--layout-animate"),s=setTimeout(()=>{s=null,document.body.classList.remove("q-body--layout-animate")},155)},update(g,B,R){Q[g][B]=R}};if(Ye(he,Q),Ce()>0){let R=function(){g=null,B.classList.remove("hide-scrollbar")},j=function(){if(g===null){if(B.scrollHeight>c.screen.height)return;B.classList.add("hide-scrollbar")}else clearTimeout(g);g=setTimeout(R,300)},b=function(D){g!==null&&D==="remove"&&(clearTimeout(g),R()),window[`${D}EventListener`]("resize",j)},g=null;const B=document.body;T(()=>e.container!==!0?"add":"remove",b),e.container!==!0&&b("add"),Pt(()=>{b("remove")})}return()=>{const g=Xe(k.default,[y(et,{onScroll:_}),y(fe,{onResize:P})]),B=y("div",{class:l.value,style:L.value,ref:e.container===!0?void 0:u,tabindex:-1},g);return e.container===!0?y("div",{class:"q-layout-container overflow-hidden",ref:u},[y(fe,{onResize:h}),y("div",{class:"absolute-full",style:x.value},[y("div",{class:"scroll",style:m.value},[B])])]):B}}});const ta=Bt({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function aa(e,k,r,c,u,n){return Y((A(),W(ce,{class:"navigation-item q-mx-sm","active-class":"tab-active",to:e.link,exact:"",clickable:""},{default:$(()=>[q(ae,{avatar:""},{default:$(()=>[q(Ze,{name:e.icon},null,8,["name"])]),_:1}),q(ae,null,{default:$(()=>[se(ue(e.title),1)]),_:1})]),_:1},8,["to"])),[[Je]])}var la=Qt(ta,[["render",aa]]);const ia=O("span",{class:"text-weight-regular"},"Bienvenido: ",-1),oa={class:"text-weight-light"},na=O("span",{class:"text-weight-regular"},"Rol: ",-1),ra={class:"text-weight-light"},sa={class:"q-mx-sm"},ua=["src"],ca={style:{height:"calc(100% - 80px)",padding:"10px"}},da={class:"div-show-empresa-name"},va=O("h5",{class:"text-center text-weight-medium q-my-none",style:{"font-size":"18px"}}," Empresa: ",-1),fa={class:"text-center text-weight-medium q-mt-none q-mb-md",style:{"font-size":"15px",color:"#a8a4a4","line-height":"20px"}},ma={class:"q-mini-drawer-hide absolute",style:{top:"30px",right:"-17px"}},ha={class:"col"},ga={class:"full-height"},Ta={__name:"MainLayout",setup(e){const k=[{title:"Clientes",icon:"img:https://img.icons8.com/color/96/supplier.png",link:"/customer",permisoRequerido:"index.clientes"},{title:"Proveedores",icon:"img:https://img.icons8.com/3d-fluency/96/group--v2.png",link:"/proveedores",permisoRequerido:"index.proveedores"},{title:"Compras",icon:"img:https://img.icons8.com/3d-fluency/94/shopping-cart-loaded.png",link:"/compras",permisoRequerido:"index.compras"},{title:"Facturas",icon:"img:https://img.icons8.com/3d-fluency/94/fund-accounting.png",link:"/ventas",permisoRequerido:"index.ventas"},{title:"Productos y Servicios",icon:"img:https://img.icons8.com/3d-fluency/94/package.png",link:"/productos",permisoRequerido:"index.productos"}],r=Ft(),c=Mt(),u=Nt(),{validarPermisos:n}=jt();let d,t,p="";const{claim:f}=Lt.read(u.token);f.foto?p=`/images/${f.foto}`:p="/images/default-perfil.png";const l=f.fullName.split(" ");if(l.length>3){const P=l.pop();d=`${l.join(" ")} ${P[0]}.`}else d=f.fullName;t=f.roles[0],T(()=>r.dark.isActive,(P,h)=>{u.setModeDark(P)},{deep:!0}),Me(()=>{r.dark.set(u.modeDark)});const L=()=>{u.$reset(),c.push("/login")},x=z(!1),m=z(!1),_=P=>{x.value&&(x.value=!1,P.stopPropagation())};return(P,h)=>{const S=Rt("router-view");return A(),W(ea,{view:"lHh LpR lFf"},{default:$(()=>[q(Wt,{class:Te([M(r).dark.isActive?"q-dark":"bg-white","shadow_custom q-mx-lg q-mt-md q-py-sm"]),style:{right:"8px","border-radius":"4px"}},{default:$(()=>[q(De,{class:"no-shadow"},{default:$(()=>[q(pe,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",color:"grey",class:"custom-border",onClick:h[0]||(h[0]=s=>m.value=!m.value)}),q(Et,{class:"q-ml-sm"},{default:$(()=>[M(r).screen.xs?ee("",!0):(A(),$e("div",{key:0,class:Te(["row justify-center justify-between text-h6",[M(r).dark.isActive?"":"text-black"]])},[O("div",null,[ia,O("span",oa,ue(M(d).toUpperCase()),1)]),O("div",null,[na,O("span",ra,ue(M(t)),1)])],2))]),_:1}),O("div",null,[q(pe,{class:"q-mr-xs text-grey-6",flat:"",round:"",onClick:h[1]||(h[1]=s=>M(r).dark.toggle()),icon:M(r).dark.isActive?"img:https://img.icons8.com/3d-fluency/94/sun.png ":"img:https://img.icons8.com/3d-fluency/94/partly-cloudy-night.png"},null,8,["icon"])]),O("div",sa,[q(pe,{class:"q-mr-md q-py-xs q-px-sm custom-border",flat:"",color:"grey",icon:"img:https://img.icons8.com/3d-fluency/94/bell.png"}),q(Ht,{class:"cursor-pointer"},{default:$(()=>[O("img",{src:M(p)},null,8,ua),q(Dt,null,{default:$(()=>[q(Pe,{style:{"min-width":"200px"}},{default:$(()=>[Y((A(),W(ce,{clickable:""},{default:$(()=>[q(ae,null,{default:$(()=>[se(ue(M(f).usuario),1)]),_:1})]),_:1})),[[Be]]),q(Ae),Y((A(),W(ce,{clickable:""},{default:$(()=>[q(ae,{onClick:h[2]||(h[2]=s=>P.$router.push({name:"editar.usuario.profile",params:{term:M(f).id}}))},{default:$(()=>[se(" Mi Perfil ")]),_:1})]),_:1})),[[Be]]),q(Ae),Y((A(),W(ce,{onClick:L,clickable:""},{default:$(()=>[q(ae,null,{default:$(()=>[se("Cerrar Sesi\xF3n")]),_:1})]),_:1})),[[Be]])]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1},8,["class"]),q(Yt,{modelValue:m.value,"onUpdate:modelValue":h[5]||(h[5]=s=>m.value=s),"show-if-above":"",width:260,"mini-width":80,mini:!m.value||x.value,onClickCapture:_,class:Te(M(r).dark.isActive?"":"drawer_cls"),style:{"overflow-y":"hidden"}},{default:$(()=>[O("div",ca,[q(De,{onClick:h[3]||(h[3]=s=>P.$router.push("/")),class:"cursor-pointer justify-center",style:{"margin-top":"7px"}},{default:$(()=>[q(Xt,{src:"/imgs/inigualitySoft.png","spinner-color":"white",style:{height:"auto","max-width":"125px"},fit:"contain"})]),_:1}),q(We,{style:{height:"100%",position:"relative"}},{default:$(()=>[q(Pe,{padding:"",class:"q-mt-sm"},{default:$(()=>[O("div",da,[va,O("h5",fa,ue(M(f).company.razon_social),1)]),Y((A(),W(ce,{class:"navigation-item","active-class":"tab-active",to:"/",exact:"",clickable:""},{default:$(()=>[q(ae,{avatar:""},{default:$(()=>[q(Ze,{name:"img:https://img.icons8.com/fluency/48/home.png",size:"35px"})]),_:1}),q(ae,null,{default:$(()=>[se(" Dashboard ")]),_:1})]),_:1})),[[Je]]),(A(),$e(Ve,null,Ot(k,s=>(A(),$e(Ve,{key:s.title},[M(n)(s.permisoRequerido)?(A(),W(la,At(Vt({key:0},s)),null,16)):ee("",!0)],64))),64)),q(Pe,{class:"q-ml-sm"},{default:$(()=>[q(te,{"expand-separator":"",icon:"img:https://img.icons8.com/3d-fluency/94/gear--v1.png",label:"Ajustes"},{default:$(()=>[M(n)("index.empresa")?(A(),W(te,{key:0,"hide-expand-icon":"",icon:"img:https://img.icons8.com/3d-fluency/94/client-company.png",class:"item-options","active-class":"tab-active",to:{name:"Ver Empresas"},"dense-toggle":"",label:"Empresa","header-inset-level":0})):ee("",!0),M(n)("index.sucursal")?(A(),W(te,{key:1,"hide-expand-icon":"",icon:"img:https://img.icons8.com/3d-fluency/94/skyscrapers.png",class:"item-options","active-class":"tab-active",to:{name:"Ver Sucursales"},"dense-toggle":"",label:"Sucursales","header-inset-level":0})):ee("",!0),M(n)("index.rol")?(A(),W(te,{key:2,"hide-expand-icon":"",icon:"img:https://img.icons8.com/3d-fluency/94/services--v2.png",class:"item-options","active-class":"tab-active",to:{name:"Rol-Permiso"},"dense-toggle":"",label:"Roles y Permisos","header-inset-level":0})):ee("",!0),M(n)("index.usuario")?(A(),W(te,{key:3,"hide-expand-icon":"",icon:"img:https://img.icons8.com/3d-fluency/94/conference.png",class:"item-options","active-class":"tab-active",to:{name:"Ver Usuarios"},"dense-toggle":"",label:"Gesti\xF3n Personal","header-inset-level":0})):ee("",!0),M(n)("index.correo")?(A(),W(te,{key:4,"hide-expand-icon":"",icon:"img:https://img.icons8.com/3d-fluency/94/gmail.png",class:"item-options","active-class":"tab-active",to:M(f).roles[0]=="SUPER-ADMINISTRADOR"?{name:"emails"}:{name:"email.edit",params:{email_id:M(f).company.id}},"dense-toggle":"",label:"Servidor de Correo","header-inset-level":0},null,8,["to"])):ee("",!0),q(te,{"hide-expand-icon":"",icon:"img:https://img.icons8.com/3d-fluency/94/documents.png",class:"item-options","active-class":"tab-active",to:{name:"Config Proforma"},"dense-toggle":"",label:"Proforma","header-inset-level":0})]),_:1})]),_:1})]),_:1})]),_:1})]),O("div",ma,[q(pe,{dense:"",round:"",style:{"background-color":"#21ad23",color:"white",border:"6px solid #f2f2f7"},unelevated:"",icon:"chevron_left",onClick:h[4]||(h[4]=s=>x.value=!0)})])]),_:1},8,["modelValue","mini","class"]),q(Zt,null,{default:$(()=>[q(Jt,{class:"row no-wrap"},{default:$(()=>[O("div",ha,[O("div",ga,[q(We,{class:"col q-pr-sm q-scrollarea--only-vertical full-height",visible:""},{default:$(()=>[q(S)]),_:1})])])]),_:1})]),_:1})]),_:1})}}};export{Ta as default};
