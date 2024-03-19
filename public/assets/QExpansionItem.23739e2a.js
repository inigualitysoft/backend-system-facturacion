import{aI as W,m as Y,am as Q,V as F,I as X,W as Z,J as p,r as _,aJ as k,Y as ee,n as o,v as b,x as te,p as n,z as ne,ah as w,O as ae,aK as ie,s as oe,i as y,ap as le}from"./index.77dc7136.js";import{a as ue,c as C,Q as x}from"./QItemLabel.aaa628b9.js";import{Q as ce}from"./QSlideTransition.08c0e0c7.js";const u=W({}),de=Object.keys(Q);var ve=Y({name:"QExpansionItem",props:{...Q,...F,...X,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...Z,"click","afterShow","afterHide"],setup(e,{slots:g,emit:v}){const{proxy:{$q:d}}=ne(),f=p(e,d),a=_(e.modelValue!==null?e.modelValue:e.defaultOpened),h=_(null),I=k(),{show:A,hide:S,toggle:m}=ee({showing:a});let l,c;const O=o(()=>`q-expansion-item q-item-type q-expansion-item--${a.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),B=o(()=>{if(e.contentInsetLevel===void 0)return null;const t=d.lang.rtl===!0?"Right":"Left";return{["padding"+t]:e.contentInsetLevel*56+"px"}}),r=o(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),P=o(()=>{const t={};return de.forEach(i=>{t[i]=e[i]}),t}),j=o(()=>r.value===!0||e.expandIconToggle!==!0),E=o(()=>e.expandedIcon!==void 0&&a.value===!0?e.expandedIcon:e.expandIcon||d.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),H=o(()=>e.disable!==!0&&(r.value===!0||e.expandIconToggle===!0)),N=o(()=>({expanded:a.value===!0,detailsId:e.targetUid,toggle:m,show:A,hide:S})),T=o(()=>{const t=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:d.lang.label[a.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":a.value===!0?"true":"false","aria-controls":I,"aria-label":t}});b(()=>e.group,t=>{c!==void 0&&c(),t!==void 0&&L()});function R(t){r.value!==!0&&m(t),v("click",t)}function D(t){t.keyCode===13&&q(t,!0)}function q(t,i){i!==!0&&h.value!==null&&h.value.focus(),m(t),le(t)}function K(){v("afterShow")}function $(){v("afterHide")}function L(){l===void 0&&(l=k()),a.value===!0&&(u[e.group]=l);const t=b(a,s=>{s===!0?u[e.group]=l:u[e.group]===l&&delete u[e.group]}),i=b(()=>u[e.group],(s,z)=>{z===l&&s!==void 0&&s!==l&&S()});c=()=>{t(),i(),u[e.group]===l&&delete u[e.group],c=void 0}}function G(){const t={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},i=[n(y,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&a.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:E.value})];return H.value===!0&&(Object.assign(t,{tabindex:0,...T.value,onClick:q,onKeyup:D}),i.unshift(n("div",{ref:h,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),n(x,t,()=>i)}function M(){let t;return g.header!==void 0?t=[].concat(g.header(N.value)):(t=[n(x,()=>[n(C,{lines:e.labelLines},()=>e.label||""),e.caption?n(C,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&t[e.switchToggleSide===!0?"push":"unshift"](n(x,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>n(y,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&t[e.switchToggleSide===!0?"unshift":"push"](G()),t}function U(){const t={ref:"item",style:e.headerStyle,class:e.headerClass,dark:f.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return j.value===!0&&(t.clickable=!0,t.onClick=R,Object.assign(t,r.value===!0?P.value:T.value)),n(ue,t,M)}function V(){return ae(n("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:B.value,id:I},oe(g.default)),[[ie,a.value]])}function J(){const t=[U(),n(ce,{duration:e.duration,onShow:K,onHide:$},V)];return e.expandSeparator===!0&&t.push(n(w,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:f.value}),n(w,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:f.value})),t}return e.group!==void 0&&L(),te(()=>{c!==void 0&&c()}),()=>n("div",{class:O.value},[n("div",{class:"q-expansion-item__container relative-position"},J())])}});export{ve as Q};
