import{c as E}from"./format.60b19ab8.js";import{m as M,r as p,n as O,bk as V,_ as B,b5 as k,p as r,z as x,h as S}from"./index.474519f9.js";function f(e,o=new WeakMap){if(Object(e)!==e)return e;if(o.has(e))return o.get(e);const n=e instanceof Date?new Date(e):e instanceof RegExp?new RegExp(e.source,e.flags):e instanceof Set?new Set:e instanceof Map?new Map:typeof e.constructor!="function"?Object.create(null):e.prototype!==void 0&&typeof e.prototype.constructor=="function"?e:new e.constructor;if(typeof e.constructor=="function"&&typeof e.valueOf=="function"){const t=e.valueOf();if(Object(t)!==t){const c=new e.constructor(t);return o.set(e,c),c}}return o.set(e,n),e instanceof Set?e.forEach(t=>{n.add(f(t,o))}):e instanceof Map&&e.forEach((t,c)=>{n.set(c,f(t,o))}),Object.assign(n,...Object.keys(e).map(t=>({[t]:f(e[t],o)})))}var _=M({name:"QPopupEdit",props:{modelValue:{required:!0},title:String,buttons:Boolean,labelSet:String,labelCancel:String,color:{type:String,default:"primary"},validate:{type:Function,default:()=>!0},autoSave:Boolean,cover:{type:Boolean,default:!0},disable:Boolean},emits:["update:modelValue","save","cancel","beforeShow","show","beforeHide","hide"],setup(e,{slots:o,emit:n}){const{proxy:t}=x(),{$q:c}=t,a=p(null),i=p(""),l=p("");let v=!1;const m=O(()=>V({initialValue:i.value,validate:e.validate,set:b,cancel:s,updatePosition:w},"value",()=>l.value,u=>{l.value=u}));function b(){e.validate(l.value)!==!1&&(d()===!0&&(n("save",l.value,i.value),n("update:modelValue",l.value)),g())}function s(){d()===!0&&n("cancel",l.value,i.value),g()}function w(){B(()=>{a.value.updatePosition()})}function d(){return k(l.value,i.value)===!1}function g(){v=!0,a.value.hide()}function y(){v=!1,i.value=f(e.modelValue),l.value=f(e.modelValue),n("beforeShow")}function h(){n("show")}function j(){v===!1&&d()===!0&&(e.autoSave===!0&&e.validate(l.value)===!0?(n("save",l.value,i.value),n("update:modelValue",l.value)):n("cancel",l.value,i.value)),n("beforeHide")}function q(){n("hide")}function C(){const u=o.default!==void 0?[].concat(o.default(m.value)):[];return e.title&&u.unshift(r("div",{class:"q-dialog__title q-mt-sm q-mb-sm"},e.title)),e.buttons===!0&&u.push(r("div",{class:"q-popup-edit__buttons row justify-center no-wrap"},[r(S,{flat:!0,color:e.color,label:e.labelCancel||c.lang.label.cancel,onClick:s}),r(S,{flat:!0,color:e.color,label:e.labelSet||c.lang.label.set,onClick:b})])),u}return Object.assign(t,{set:b,cancel:s,show(u){a.value!==null&&a.value.show(u)},hide(u){a.value!==null&&a.value.hide(u)},updatePosition:w}),()=>{if(e.disable!==!0)return r(E,{ref:a,class:"q-popup-edit",cover:e.cover,onBeforeShow:y,onShow:h,onBeforeHide:j,onHide:q,onEscapeKey:s},C)}}});export{_ as Q};