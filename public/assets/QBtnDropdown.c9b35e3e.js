import{m as k,bx as v,aw as x,r as h,aJ as H,n as r,aS as V,v as m,C as I,p as i,i as M,s as O,h as d,z as P,aQ as _}from"./index.e3eab811.js";import{Q as j}from"./QBtnGroup.193e2417.js";import{c as R}from"./format.cdb105f3.js";const z=Object.keys(v),L=e=>z.reduce((o,t)=>{const l=e[t];return l!==void 0&&(o[t]=l),o},{});var J=k({name:"QBtnDropdown",props:{...v,...x,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(e,{slots:o,emit:t}){const{proxy:l}=P(),u=h(e.modelValue),a=h(null),c=H(),f=r(()=>{const n={"aria-expanded":u.value===!0?"true":"false","aria-haspopup":"true","aria-controls":c,"aria-label":e.toggleAriaLabel||l.$q.lang.label[u.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(n["aria-disabled"]="true"),n}),B=r(()=>"q-btn-dropdown__arrow"+(u.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),b=r(()=>V(e)),w=r(()=>L(e));m(()=>e.modelValue,n=>{a.value!==null&&a.value[n?"show":"hide"]()}),m(()=>e.split,s);function S(n){u.value=!0,t("beforeShow",n)}function C(n){t("show",n),t("update:modelValue",!0)}function q(n){u.value=!1,t("beforeHide",n)}function A(n){t("hide",n),t("update:modelValue",!1)}function D(n){t("click",n)}function y(n){_(n),s(),t("click",n)}function Q(n){a.value!==null&&a.value.toggle(n)}function g(n){a.value!==null&&a.value.show(n)}function s(n){a.value!==null&&a.value.hide(n)}return Object.assign(l,{show:g,hide:s,toggle:Q}),I(()=>{e.modelValue===!0&&g()}),()=>{const n=[i(M,{class:B.value,name:e.dropdownIcon||l.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&n.push(i(R,{ref:a,id:c,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:S,onShow:C,onBeforeHide:q,onHide:A},o.default)),e.split===!1?i(d,{class:"q-btn-dropdown q-btn-dropdown--simple",...w.value,...f.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:D},{default:()=>O(o.label,[]).concat(n),loading:o.loading}):i(j,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...b.value,glossy:e.glossy,stretch:e.stretch},()=>[i(d,{class:"q-btn-dropdown--current",...w.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:y},{default:o.label,loading:o.loading}),i(d,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...f.value,...b.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>n)])}}});export{J as Q};
