import{m as oe,I as se,J as fe,r as $,b6 as he,n as v,v as U,p as o,z as ve,_ as ye,b9 as ke,B as be,i as H,bj as ge,ap as R,O as xe,aK as _e,bk as V}from"./index.e3eab811.js";import{Q as qe}from"./QSlideTransition.8231c29e.js";const Se=["none","strict","leaf","leaf-filtered"];var Ce=oe({name:"QTree",props:{...se,nodes:{type:Array,required:!0},nodeKey:{type:String,required:!0},labelKey:{type:String,default:"label"},childrenKey:{type:String,default:"children"},dense:Boolean,color:String,controlColor:String,textColor:String,selectedColor:String,icon:String,tickStrategy:{type:String,default:"none",validator:l=>Se.includes(l)},ticked:Array,expanded:Array,selected:{},noSelectionUnset:Boolean,defaultExpandAll:Boolean,accordion:Boolean,filter:String,filterMethod:Function,duration:Number,noConnectors:Boolean,noTransition:Boolean,noNodesLabel:String,noResultsLabel:String},emits:["update:expanded","update:ticked","update:selected","lazyLoad","afterShow","afterHide"],setup(l,{slots:k,emit:h}){const{proxy:A}=ve(),{$q:q}=A,E=fe(l,q),x=$({}),_=$(l.ticked||[]),y=$(l.expanded||[]);let w={};he(()=>{w={}});const J=v(()=>`q-tree q-tree--${l.dense===!0?"dense":"standard"}`+(l.noConnectors===!0?" q-tree--no-connectors":"")+(E.value===!0?" q-tree--dark":"")+(l.color!==void 0?` text-${l.color}`:"")),B=v(()=>l.selected!==void 0),G=v(()=>l.icon||q.iconSet.tree.icon),L=v(()=>l.controlColor||l.color),S=v(()=>l.textColor!==void 0?` text-${l.textColor}`:""),W=v(()=>{const t=l.selectedColor||l.color;return t?` text-${t}`:""}),X=v(()=>l.filterMethod!==void 0?l.filterMethod:(t,i)=>{const e=i.toLowerCase();return t[l.labelKey]&&t[l.labelKey].toLowerCase().indexOf(e)>-1}),f=v(()=>{const t={},i=(e,n)=>{const r=e.tickStrategy||(n?n.tickStrategy:l.tickStrategy),c=e[l.nodeKey],d=e[l.childrenKey]&&Array.isArray(e[l.childrenKey])&&e[l.childrenKey].length!==0,b=e.disabled!==!0&&B.value===!0&&e.selectable!==!1,s=e.disabled!==!0&&e.expandable!==!1,de=r!=="none",C=r==="strict",j=r==="leaf-filtered",F=r==="leaf"||r==="leaf-filtered";let N=e.disabled!==!0&&e.tickable!==!1;F===!0&&N===!0&&n&&n.tickable!==!0&&(N=!1);let g=e.lazy;g===!0&&x.value[c]!==void 0&&Array.isArray(e[l.childrenKey])===!0&&(g=x.value[c]);const a={key:c,parent:n,isParent:d,lazy:g,disabled:e.disabled,link:e.disabled!==!0&&(b===!0||s===!0&&(d===!0||g===!0)),children:[],matchesFilter:l.filter?X.value(e,l.filter):!0,selected:c===l.selected&&b===!0,selectable:b,expanded:d===!0?y.value.includes(c):!1,expandable:s,noTick:e.noTick===!0||C!==!0&&g&&g!=="loaded",tickable:N,tickStrategy:r,hasTicking:de,strictTicking:C,leafFilteredTicking:j,leafTicking:F,ticked:C===!0?_.value.includes(c):d===!0?!1:_.value.includes(c)};if(t[c]=a,d===!0&&(a.children=e[l.childrenKey].map(u=>i(u,a)),l.filter&&(a.matchesFilter!==!0?a.matchesFilter=a.children.some(u=>u.matchesFilter):a.noTick!==!0&&a.disabled!==!0&&a.tickable===!0&&j===!0&&a.children.every(u=>u.matchesFilter!==!0||u.noTick===!0||u.tickable!==!0)===!0&&(a.tickable=!1)),a.matchesFilter===!0&&(a.noTick!==!0&&C!==!0&&a.children.every(u=>u.noTick)===!0&&(a.noTick=!0),F))){if(a.ticked=!1,a.indeterminate=a.children.some(u=>u.indeterminate===!0),a.tickable=a.tickable===!0&&a.children.some(u=>u.tickable),a.indeterminate!==!0){const u=a.children.reduce((D,ue)=>ue.ticked===!0?D+1:D,0);u===a.children.length?a.ticked=!0:u>0&&(a.indeterminate=!0)}a.indeterminate===!0&&(a.indeterminateNextState=a.children.every(u=>u.tickable!==!0||u.ticked!==!0))}return a};return l.nodes.forEach(e=>i(e,null)),t});U(()=>l.ticked,t=>{_.value=t}),U(()=>l.expanded,t=>{y.value=t});function K(t){const i=[].reduce,e=(n,r)=>{if(n||!r)return n;if(Array.isArray(r)===!0)return i.call(Object(r),e,n);if(r[l.nodeKey]===t)return r;if(r[l.childrenKey])return e(null,r[l.childrenKey])};return e(null,l.nodes)}function Y(){return _.value.map(t=>K(t))}function Z(){return y.value.map(t=>K(t))}function p(t){return t&&f.value[t]?f.value[t].expanded:!1}function ee(){l.expanded!==void 0?h("update:expanded",[]):y.value=[]}function P(){const t=[],i=e=>{e[l.childrenKey]&&e[l.childrenKey].length!==0&&e.expandable!==!1&&e.disabled!==!0&&(t.push(e[l.nodeKey]),e[l.childrenKey].forEach(i))};l.nodes.forEach(i),l.expanded!==void 0?h("update:expanded",t):y.value=t}function z(t,i,e=K(t),n=f.value[t]){if(n.lazy&&n.lazy!=="loaded"){if(n.lazy==="loading")return;x.value[t]="loading",Array.isArray(e[l.childrenKey])!==!0&&(e[l.childrenKey]=[]),h("lazyLoad",{node:e,key:t,done:r=>{x.value[t]="loaded",e[l.childrenKey]=Array.isArray(r)===!0?r:[],ye(()=>{const c=f.value[t];c&&c.isParent===!0&&Q(t,!0)})},fail:()=>{delete x.value[t],e[l.childrenKey].length===0&&delete e[l.childrenKey]}})}else n.isParent===!0&&n.expandable===!0&&Q(t,i)}function Q(t,i){let e=y.value;const n=l.expanded!==void 0;if(n===!0&&(e=e.slice()),i){if(l.accordion&&f.value[t]){const r=[];f.value[t].parent?f.value[t].parent.children.forEach(c=>{c.key!==t&&c.expandable===!0&&r.push(c.key)}):l.nodes.forEach(c=>{const d=c[l.nodeKey];d!==t&&r.push(d)}),r.length!==0&&(e=e.filter(c=>r.includes(c)===!1))}e=e.concat([t]).filter((r,c,d)=>d.indexOf(r)===c)}else e=e.filter(r=>r!==t);n===!0?h("update:expanded",e):y.value=e}function te(t){return t&&f.value[t]?f.value[t].ticked:!1}function T(t,i){let e=_.value;const n=l.ticked!==void 0;n===!0&&(e=e.slice()),i?e=e.concat(t).filter((r,c,d)=>d.indexOf(r)===c):e=e.filter(r=>t.includes(r)===!1),n===!0&&h("update:ticked",e)}function le(t,i,e){const n={tree:A,node:t,key:e,color:l.color,dark:E.value};return V(n,"expanded",()=>i.expanded,r=>{r!==i.expanded&&z(e,r)}),V(n,"ticked",()=>i.ticked,r=>{r!==i.ticked&&T([e],r)}),n}function O(t){return(l.filter?t.filter(i=>f.value[i[l.nodeKey]].matchesFilter):t).map(i=>ae(i))}function ie(t){if(t.icon!==void 0)return o(H,{class:"q-tree__icon q-mr-sm",name:t.icon,color:t.iconColor});const i=t.img||t.avatar;if(i)return o("img",{class:`q-tree__${t.img?"img":"avatar"} q-mr-sm`,src:i})}function re(){h("afterShow")}function ne(){h("afterHide")}function ae(t){const i=t[l.nodeKey],e=f.value[i],n=t.header&&k[`header-${t.header}`]||k["default-header"],r=e.isParent===!0?O(t[l.childrenKey]):[],c=r.length!==0||e.lazy&&e.lazy!=="loaded";let d=t.body&&k[`body-${t.body}`]||k["default-body"];const b=n!==void 0||d!==void 0?le(t,e,i):null;return d!==void 0&&(d=o("div",{class:"q-tree__node-body relative-position"},[o("div",{class:S.value},[d(b)])])),o("div",{key:i,class:`q-tree__node relative-position q-tree__node--${c===!0?"parent":"child"}`},[o("div",{class:"q-tree__node-header relative-position row no-wrap items-center"+(e.link===!0?" q-tree__node--link q-hoverable q-focusable":"")+(e.selected===!0?" q-tree__node--selected":"")+(e.disabled===!0?" q-tree__node--disabled":""),tabindex:e.link===!0?0:-1,onClick:s=>{I(t,e,s)},onKeypress(s){ke(s)!==!0&&(s.keyCode===13?I(t,e,s,!0):s.keyCode===32&&m(t,e,s,!0))}},[o("div",{class:"q-focus-helper",tabindex:-1,ref:s=>{w[e.key]=s}}),e.lazy==="loading"?o(be,{class:"q-tree__spinner",color:L.value}):c===!0?o(H,{class:"q-tree__arrow"+(e.expanded===!0?" q-tree__arrow--rotate":""),name:G.value,onClick(s){m(t,e,s)}}):null,e.hasTicking===!0&&e.noTick!==!0?o(ge,{class:"q-tree__tickbox",modelValue:e.indeterminate===!0?null:e.ticked,color:L.value,dark:E.value,dense:!0,keepColor:!0,disable:e.tickable!==!0,onKeydown:R,"onUpdate:modelValue":s=>{ce(e,s)}}):null,o("div",{class:"q-tree__node-header-content col row no-wrap items-center"+(e.selected===!0?W.value:S.value)},[n?n(b):[ie(t),o("div",t[l.labelKey])]])]),c===!0?l.noTransition===!0?o("div",{class:"q-tree__node-collapsible"+S.value,key:`${i}__q`},[d,o("div",{class:"q-tree__children"+(e.disabled===!0?" q-tree__node--disabled":"")},e.expanded?r:null)]):o(qe,{duration:l.duration,onShow:re,onHide:ne},()=>xe(o("div",{class:"q-tree__node-collapsible"+S.value,key:`${i}__q`},[d,o("div",{class:"q-tree__children"+(e.disabled===!0?" q-tree__node--disabled":"")},r)]),[[_e,e.expanded]])):d])}function M(t){const i=w[t];i&&i.focus()}function I(t,i,e,n){n!==!0&&i.selectable!==!1&&M(i.key),B.value&&i.selectable?l.noSelectionUnset===!1?h("update:selected",i.key!==l.selected?i.key:null):i.key!==l.selected&&h("update:selected",i.key===void 0?null:i.key):m(t,i,e,n),typeof t.handler=="function"&&t.handler(t)}function m(t,i,e,n){e!==void 0&&R(e),n!==!0&&i.selectable!==!1&&M(i.key),z(i.key,!i.expanded,t,i)}function ce(t,i){if(t.indeterminate===!0&&(i=t.indeterminateNextState),t.strictTicking)T([t.key],i);else if(t.leafTicking){const e=[],n=r=>{r.isParent?(i!==!0&&r.noTick!==!0&&r.tickable===!0&&e.push(r.key),r.leafTicking===!0&&r.children.forEach(n)):r.noTick!==!0&&r.tickable===!0&&(r.leafFilteredTicking!==!0||r.matchesFilter===!0)&&e.push(r.key)};n(t),T(e,i)}}return l.defaultExpandAll===!0&&P(),Object.assign(A,{getNodeByKey:K,getTickedNodes:Y,getExpandedNodes:Z,isExpanded:p,collapseAll:ee,expandAll:P,setExpanded:z,isTicked:te,setTicked:T}),()=>{const t=O(l.nodes);return o("div",{class:J.value},t.length===0?l.filter?l.noResultsLabel||q.lang.tree.noResults:l.noNodesLabel||q.lang.tree.noNodes:t)}}});export{Ce as Q};
