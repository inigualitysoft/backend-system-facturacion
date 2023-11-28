import{m as A,n as x,p as H,s as I,J as re,aj as Ce,K as ce,ak as Te,r as W,A as j,al as de,am as fe,E as Se,an as pe,ao as Z,z as Be,ap as ee,D as B,v as He,x as O,aq as We,B as D,ar as te,as as Me,a2 as Le,V as Pe,at as _e,W as Ae,au as Re,X as $e,av as ze,Y as Fe,aw as Ke,ax as De,ay as Qe,az as Ie,aA as ne,G as je,aB as Oe,aC as Ne,aD as Ve,aE as Xe,aF as Ye}from"./index.34de80b5.js";var ot=A({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:n}){const l=x(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>H("div",{class:l.value},I(n.default))}}),ut=A({name:"QItem",props:{...re,...Ce,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:n,emit:l}){const{proxy:{$q:t}}=j(),i=ce(e,t),{hasLink:d,linkAttrs:o,linkClass:v,linkTag:m,navigateOnClick:c}=Te(),f=W(null),h=W(null),b=x(()=>e.clickable===!0||d.value===!0||e.tag==="label"),a=x(()=>e.disable!==!0&&b.value===!0),r=x(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(i.value===!0?" q-item--dark":"")+(d.value===!0&&e.active===null?v.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(a.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),T=x(()=>{if(e.insetLevel===void 0)return null;const s=t.lang.rtl===!0?"Right":"Left";return{["padding"+s]:16+e.insetLevel*56+"px"}});function E(s){a.value===!0&&(h.value!==null&&(s.qKeyEvent!==!0&&document.activeElement===f.value?h.value.focus():document.activeElement===h.value&&f.value.focus()),c(s))}function S(s){if(a.value===!0&&de(s,13)===!0){fe(s),s.qKeyEvent=!0;const y=new MouseEvent("click",s);y.qKeyEvent=!0,f.value.dispatchEvent(y)}l("keyup",s)}function M(){const s=Se(n.default,[]);return a.value===!0&&s.unshift(H("div",{class:"q-focus-helper",tabindex:-1,ref:h})),s}return()=>{const s={ref:f,class:r.value,style:T.value,role:"listitem",onClick:E,onKeyup:S};return a.value===!0?(s.tabindex=e.tabindex||"0",Object.assign(s,o.value)):b.value===!0&&(s["aria-disabled"]="true"),H(m.value,s,M())}}});function Ue(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),pe.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const Ge={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Je({showing:e,avoidEmit:n,configureAnchorEl:l}){const{props:t,proxy:i,emit:d}=j(),o=W(null);let v=null;function m(a){return o.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const c={};l===void 0&&(Object.assign(c,{hide(a){i.hide(a)},toggle(a){i.toggle(a),a.qAnchorHandled=!0},toggleKey(a){de(a,13)===!0&&c.toggle(a)},contextClick(a){i.hide(a),Z(a),Be(()=>{i.show(a),a.qAnchorHandled=!0})},prevent:Z,mobileTouch(a){if(c.mobileCleanup(a),m(a)!==!0)return;i.hide(a),o.value.classList.add("non-selectable");const r=a.target;ee(c,"anchor",[[r,"touchmove","mobileCleanup","passive"],[r,"touchend","mobileCleanup","passive"],[r,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),v=setTimeout(()=>{v=null,i.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){o.value.classList.remove("non-selectable"),v!==null&&(clearTimeout(v),v=null),e.value===!0&&a!==void 0&&Ue()}}),l=function(a=t.contextMenu){if(t.noParentEvent===!0||o.value===null)return;let r;a===!0?i.$q.platform.is.mobile===!0?r=[[o.value,"touchstart","mobileTouch","passive"]]:r=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:r=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],ee(c,"anchor",r)});function f(){We(c,"anchor")}function h(a){for(o.value=a;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;l()}function b(){if(t.target===!1||t.target===""||i.$el.parentNode===null)o.value=null;else if(t.target===!0)h(i.$el.parentNode);else{let a=t.target;if(typeof t.target=="string")try{a=document.querySelector(t.target)}catch{a=void 0}a!=null?(o.value=a.$el||a,l()):(o.value=null,console.error(`Anchor: target "${t.target}" not found`))}}return B(()=>t.contextMenu,a=>{o.value!==null&&(f(),l(a))}),B(()=>t.target,()=>{o.value!==null&&f(),b()}),B(()=>t.noParentEvent,a=>{o.value!==null&&(a===!0?f():l())}),He(()=>{b(),n!==!0&&t.modelValue===!0&&o.value===null&&d("update:modelValue",!1)}),O(()=>{v!==null&&clearTimeout(v),f()}),{anchorEl:o,canShow:m,anchorEvents:c}}function Ze(e,n){const l=W(null);let t;function i(v,m){const c=`${m!==void 0?"add":"remove"}EventListener`,f=m!==void 0?m:t;v!==window&&v[c]("scroll",f,D.passive),window[c]("scroll",f,D.passive),t=m}function d(){l.value!==null&&(i(l.value),l.value=null)}const o=B(()=>e.noParentEvent,()=>{l.value!==null&&(d(),n())});return O(o),{localScrollTarget:l,unconfigureScrollTarget:d,changeScrollEvent:i}}const{notPassiveCapture:P}=D,C=[];function _(e){const n=e.target;if(n===void 0||n.nodeType===8||n.classList.contains("no-pointer-events")===!0)return;let l=te.length-1;for(;l>=0;){const t=te[l].$;if(t.type.name==="QTooltip"){l--;continue}if(t.type.name!=="QDialog")break;if(t.props.seamless!==!0)return;l--}for(let t=C.length-1;t>=0;t--){const i=C[t];if((i.anchorEl.value===null||i.anchorEl.value.contains(n)===!1)&&(n===document.body||i.innerRef.value!==null&&i.innerRef.value.contains(n)===!1))e.qClickOutside=!0,i.onClickOutside(e);else return}}function et(e){C.push(e),C.length===1&&(document.addEventListener("mousedown",_,P),document.addEventListener("touchstart",_,P))}function le(e){const n=C.findIndex(l=>l===e);n>-1&&(C.splice(n,1),C.length===0&&(document.removeEventListener("mousedown",_,P),document.removeEventListener("touchstart",_,P)))}let ae,ie;function oe(e){const n=e.split(" ");return n.length!==2?!1:["top","center","bottom"].includes(n[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(n[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function tt(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const Q={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{Q[`${e}#ltr`]=e,Q[`${e}#rtl`]=e});function ue(e,n){const l=e.split(" ");return{vertical:l[0],horizontal:Q[`${l[1]}#${n===!0?"rtl":"ltr"}`]}}function nt(e,n){let{top:l,left:t,right:i,bottom:d,width:o,height:v}=e.getBoundingClientRect();return n!==void 0&&(l-=n[1],t-=n[0],d+=n[1],i+=n[0],o+=n[0],v+=n[1]),{top:l,bottom:d,height:v,left:t,right:i,width:o,middle:t+(i-t)/2,center:l+(d-l)/2}}function lt(e,n,l){let{top:t,left:i}=e.getBoundingClientRect();return t+=n.top,i+=n.left,l!==void 0&&(t+=l[1],i+=l[0]),{top:t,bottom:t+1,height:1,left:i,right:i+1,width:1,middle:i,center:t}}function at(e,n){return{top:0,center:n/2,bottom:n,left:0,middle:e/2,right:e}}function se(e,n,l,t){return{top:e[l.vertical]-n[t.vertical],left:e[l.horizontal]-n[t.horizontal]}}function ve(e,n=0){if(e.targetEl===null||e.anchorEl===null||n>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{ve(e,n+1)},10);return}const{targetEl:l,offset:t,anchorEl:i,anchorOrigin:d,selfOrigin:o,absoluteOffset:v,fit:m,cover:c,maxHeight:f,maxWidth:h}=e;if(Me.is.ios===!0&&window.visualViewport!==void 0){const p=document.body.style,{offsetLeft:k,offsetTop:q}=window.visualViewport;k!==ae&&(p.setProperty("--q-pe-left",k+"px"),ae=k),q!==ie&&(p.setProperty("--q-pe-top",q+"px"),ie=q)}const{scrollLeft:b,scrollTop:a}=l,r=v===void 0?nt(i,c===!0?[0,0]:t):lt(i,v,t);Object.assign(l.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:h||"100vw",maxHeight:f||"100vh",visibility:"visible"});const{offsetWidth:T,offsetHeight:E}=l,{elWidth:S,elHeight:M}=m===!0||c===!0?{elWidth:Math.max(r.width,T),elHeight:c===!0?Math.max(r.height,E):E}:{elWidth:T,elHeight:E};let s={maxWidth:h,maxHeight:f};(m===!0||c===!0)&&(s.minWidth=r.width+"px",c===!0&&(s.minHeight=r.height+"px")),Object.assign(l.style,s);const y=at(S,M);let g=se(r,y,d,o);if(v===void 0||t===void 0)K(g,r,y,d,o);else{const{top:p,left:k}=g;K(g,r,y,d,o);let q=!1;if(g.top!==p){q=!0;const w=2*t[1];r.center=r.top-=w,r.bottom-=w+2}if(g.left!==k){q=!0;const w=2*t[0];r.middle=r.left-=w,r.right-=w+2}q===!0&&(g=se(r,y,d,o),K(g,r,y,d,o))}s={top:g.top+"px",left:g.left+"px"},g.maxHeight!==void 0&&(s.maxHeight=g.maxHeight+"px",r.height>g.maxHeight&&(s.minHeight=s.maxHeight)),g.maxWidth!==void 0&&(s.maxWidth=g.maxWidth+"px",r.width>g.maxWidth&&(s.minWidth=s.maxWidth)),Object.assign(l.style,s),l.scrollTop!==a&&(l.scrollTop=a),l.scrollLeft!==b&&(l.scrollLeft=b)}function K(e,n,l,t,i){const d=l.bottom,o=l.right,v=Le(),m=window.innerHeight-v,c=document.body.clientWidth;if(e.top<0||e.top+d>m)if(i.vertical==="center")e.top=n[t.vertical]>m/2?Math.max(0,m-d):0,e.maxHeight=Math.min(d,m);else if(n[t.vertical]>m/2){const f=Math.min(m,t.vertical==="center"?n.center:t.vertical===i.vertical?n.bottom:n.top);e.maxHeight=Math.min(d,f),e.top=Math.max(0,f-d)}else e.top=Math.max(0,t.vertical==="center"?n.center:t.vertical===i.vertical?n.top:n.bottom),e.maxHeight=Math.min(d,m-e.top);if(e.left<0||e.left+o>c)if(e.maxWidth=Math.min(o,c),i.horizontal==="middle")e.left=n[t.horizontal]>c/2?Math.max(0,c-o):0;else if(n[t.horizontal]>c/2){const f=Math.min(c,t.horizontal==="middle"?n.middle:t.horizontal===i.horizontal?n.right:n.left);e.maxWidth=Math.min(o,f),e.left=Math.max(0,f-e.maxWidth)}else e.left=Math.max(0,t.horizontal==="middle"?n.middle:t.horizontal===i.horizontal?n.left:n.right),e.maxWidth=Math.min(o,c-e.left)}var st=A({name:"QMenu",inheritAttrs:!1,props:{...Ge,...Pe,...re,..._e,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:oe},self:{type:String,validator:oe},offset:{type:Array,validator:tt},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Ae,"click","escapeKey"],setup(e,{slots:n,emit:l,attrs:t}){let i=null,d,o,v;const m=j(),{proxy:c}=m,{$q:f}=c,h=W(null),b=W(!1),a=x(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),r=ce(e,f),{registerTick:T,removeTick:E}=Re(),{registerTimeout:S}=$e(),{transitionProps:M,transitionStyle:s}=ze(e),{localScrollTarget:y,changeScrollEvent:g,unconfigureScrollTarget:p}=Ze(e,G),{anchorEl:k,canShow:q}=Je({showing:b}),{hide:w}=Fe({showing:b,canShow:q,handleShow:xe,handleHide:ye,hideOnRouteChange:a,processOnMount:!0}),{showPortal:N,hidePortal:V,renderPortal:me}=Ke(m,h,qe,"menu"),R={anchorEl:k,innerRef:h,onClickOutside(u){if(e.persistent!==!0&&b.value===!0)return w(u),(u.type==="touchstart"||u.target.classList.contains("q-dialog__backdrop"))&&fe(u),!0}},X=x(()=>ue(e.anchor||(e.cover===!0?"center middle":"bottom start"),f.lang.rtl)),he=x(()=>e.cover===!0?X.value:ue(e.self||"top start",f.lang.rtl)),ge=x(()=>(e.square===!0?" q-menu--square":"")+(r.value===!0?" q-menu--dark q-dark":"")),be=x(()=>e.autoClose===!0?{onClick:ke}:{}),Y=x(()=>b.value===!0&&e.persistent!==!0);B(Y,u=>{u===!0?(Xe(z),et(R)):(ne(z),le(R))});function $(){Ve(()=>{let u=h.value;u&&u.contains(document.activeElement)!==!0&&(u=u.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.querySelector("[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function xe(u){if(i=e.noRefocus===!1?document.activeElement:null,De(J),N(),G(),d=void 0,u!==void 0&&(e.touchPosition||e.contextMenu)){const F=Qe(u);if(F.left!==void 0){const{top:we,left:Ee}=k.value.getBoundingClientRect();d={left:F.left-Ee,top:F.top-we}}}o===void 0&&(o=B(()=>f.screen.width+"|"+f.screen.height+"|"+e.self+"|"+e.anchor+"|"+f.lang.rtl,L)),e.noFocus!==!0&&document.activeElement.blur(),T(()=>{L(),e.noFocus!==!0&&$()}),S(()=>{f.platform.is.ios===!0&&(v=e.autoClose,h.value.click()),L(),N(!0),l("show",u)},e.transitionDuration)}function ye(u){E(),V(),U(!0),i!==null&&(u===void 0||u.qClickOutside!==!0)&&(((u&&u.type.indexOf("key")===0?i.closest('[tabindex]:not([tabindex^="-"])'):void 0)||i).focus(),i=null),S(()=>{V(!0),l("hide",u)},e.transitionDuration)}function U(u){d=void 0,o!==void 0&&(o(),o=void 0),(u===!0||b.value===!0)&&(Ie(J),p(),le(R),ne(z)),u!==!0&&(i=null)}function G(){(k.value!==null||e.scrollTarget!==void 0)&&(y.value=je(k.value,e.scrollTarget),g(y.value,L))}function ke(u){v!==!0?(Oe(c,u),l("click",u)):v=!1}function J(u){Y.value===!0&&e.noFocus!==!0&&Ye(h.value,u.target)!==!0&&$()}function z(u){l("escapeKey"),w(u)}function L(){ve({targetEl:h.value,offset:e.offset,anchorEl:k.value,anchorOrigin:X.value,selfOrigin:he.value,absoluteOffset:d,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function qe(){return H(Ne,M.value,()=>b.value===!0?H("div",{role:"menu",...t,ref:h,tabindex:-1,class:["q-menu q-position-engine scroll"+ge.value,t.class],style:[t.style,s.value],...be.value},I(n.default)):null)}return O(U),Object.assign(c,{focus:$,updatePosition:L}),me}}),rt=A({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:n}){const l=x(()=>parseInt(e.lines,10)),t=x(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(l.value===1?" ellipsis":"")),i=x(()=>e.lines!==void 0&&l.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":l.value}:null);return()=>H("div",{style:i.value,class:t.value},I(n.default))}});export{ot as Q,ut as a,st as b,rt as c,Ue as d,tt as e,Ze as f,Je as g,et as h,ue as p,le as r,ve as s,Ge as u,oe as v};
