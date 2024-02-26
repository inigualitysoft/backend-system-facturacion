import{Q as K}from"./QChip.8319138a.js";import{r as E,n as c,z as $,aO as M,am as w,as as X,p as b,m as Y,b4 as G,b8 as H,b5 as J,b7 as Z,b9 as ee,bp as te,ba as U,b3 as le,b6 as ne,ao as ie}from"./index.63602cd2.js";import{h as ae}from"./format.2bc25e5f.js";function y(e,f,x,h){const u=[];return e.forEach(s=>{h(s)===!0?u.push(s):f.push({failedPropValidation:x,file:s})}),u}function P(e){e&&e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),w(e)}const ue={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},re=["rejected"];function se({editable:e,dnd:f,getFileInput:x,addFilesToQueue:h}){const{props:u,emit:s,proxy:p}=$(),F=E(null),z=c(()=>u.accept!==void 0?u.accept.split(",").map(t=>(t=t.trim(),t==="*"?"*/":(t.endsWith("/*")&&(t=t.slice(0,t.length-1)),t.toUpperCase()))):null),V=c(()=>parseInt(u.maxFiles,10)),_=c(()=>parseInt(u.maxTotalSize,10));function j(t){if(e.value)if(t!==Object(t)&&(t={target:null}),t.target!==null&&t.target.matches('input[type="file"]')===!0)t.clientX===0&&t.clientY===0&&M(t);else{const m=x();m&&m!==t.target&&m.click(t)}}function N(t){e.value&&t&&h(null,t)}function k(t,m,S,C){let n=Array.from(m||t.target.files);const d=[],g=()=>{d.length!==0&&s("rejected",d)};if(u.accept!==void 0&&z.value.indexOf("*/")===-1&&(n=y(n,d,"accept",i=>z.value.some(r=>i.type.toUpperCase().startsWith(r)||i.name.toUpperCase().endsWith(r))),n.length===0))return g();if(u.maxFileSize!==void 0){const i=parseInt(u.maxFileSize,10);if(n=y(n,d,"max-file-size",r=>r.size<=i),n.length===0)return g()}if(u.multiple!==!0&&n.length!==0&&(n=[n[0]]),n.forEach(i=>{i.__key=i.webkitRelativePath+i.lastModified+i.name+i.size}),C===!0){const i=S.map(r=>r.__key);n=y(n,d,"duplicate",r=>i.includes(r.__key)===!1)}if(n.length===0)return g();if(u.maxTotalSize!==void 0){let i=C===!0?S.reduce((r,T)=>r+T.size,0):0;if(n=y(n,d,"max-total-size",r=>(i+=r.size,i<=_.value)),n.length===0)return g()}if(typeof u.filter=="function"){const i=u.filter(n);n=y(n,d,"filter",r=>i.includes(r))}if(u.maxFiles!==void 0){let i=C===!0?S.length:0;if(n=y(n,d,"max-files",()=>(i++,i<=V.value)),n.length===0)return g()}if(g(),n.length!==0)return n}function O(t){P(t),f.value!==!0&&(f.value=!0)}function a(t){w(t),(t.relatedTarget!==null||X.is.safari!==!0?t.relatedTarget!==F.value:document.elementsFromPoint(t.clientX,t.clientY).includes(F.value)===!1)===!0&&(f.value=!1)}function A(t){P(t);const m=t.dataTransfer.files;m.length!==0&&h(null,m),f.value=!1}function I(t){if(f.value===!0)return b("div",{ref:F,class:`q-${t}__dnd absolute-full`,onDragenter:P,onDragover:P,onDragleave:a,onDrop:A})}return Object.assign(p,{pickFiles:j,addFiles:N}),{pickFiles:j,addFiles:N,onDragover:O,onDragleave:a,processFiles:k,getDndNode:I,maxFilesNumber:V,maxTotalSizeNumber:_}}var de=Y({name:"QFile",inheritAttrs:!1,props:{...G,...H,...ue,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...J,...re],setup(e,{slots:f,emit:x,attrs:h}){const{proxy:u}=$(),s=Z(),p=E(null),F=E(!1),z=ee(e),{pickFiles:V,onDragover:_,onDragleave:j,processFiles:N,getDndNode:k}=se({editable:s.editable,dnd:F,getFileInput:Q,addFilesToQueue:R}),O=te(e),a=c(()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[]),A=c(()=>U(a.value)),I=c(()=>a.value.map(l=>l.name).join(", ")),t=c(()=>ae(a.value.reduce((l,o)=>l+o.size,0))),m=c(()=>({totalSize:t.value,filesNumber:a.value.length,maxFiles:e.maxFiles})),S=c(()=>({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:z.value,...h,id:s.targetUid.value,disabled:s.editable.value!==!0})),C=c(()=>"q-file q-field--auto-height"+(F.value===!0?" q-file--dnd":"")),n=c(()=>e.multiple===!0&&e.append===!0);function d(l){const o=a.value.slice();o.splice(l,1),i(o)}function g(l){const o=a.value.indexOf(l);o>-1&&d(o)}function i(l){x("update:modelValue",e.multiple===!0?l:l[0])}function r(l){l.keyCode===13&&ie(l)}function T(l){(l.keyCode===13||l.keyCode===32)&&V(l)}function Q(){return p.value}function R(l,o){const v=N(l,o,a.value,n.value),q=Q();q!=null&&(q.value=""),v!==void 0&&((e.multiple===!0?e.modelValue&&v.every(W=>a.value.includes(W)):e.modelValue===v[0])||i(n.value===!0?a.value.concat(v):v))}function D(){return[b("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function B(){if(f.file!==void 0)return a.value.length===0?D():a.value.map((o,v)=>f.file({index:v,file:o,ref:this}));if(f.selected!==void 0)return a.value.length===0?D():f.selected({files:a.value,ref:this});if(e.useChips===!0)return a.value.length===0?D():a.value.map((o,v)=>b(K,{key:"file-"+v,removable:s.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{d(v)}},()=>b("span",{class:"ellipsis",textContent:o.name})));const l=e.displayValue!==void 0?e.displayValue:I.value;return l.length!==0?[b("div",{class:e.inputClass,style:e.inputStyle,textContent:l})]:D()}function L(){const l={ref:p,...S.value,...O.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:R};return e.multiple===!0&&(l.multiple=!0),b("input",l)}return Object.assign(s,{fieldClass:C,emitValue:i,hasValue:A,inputRef:p,innerValue:a,floatingLabel:c(()=>A.value===!0||U(e.displayValue)),computedCounter:c(()=>{if(e.counterLabel!==void 0)return e.counterLabel(m.value);const l=e.maxFiles;return`${a.value.length}${l!==void 0?" / "+l:""} (${t.value})`}),getControlChild:()=>k("file"),getControl:()=>{const l={ref:s.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return s.editable.value===!0&&Object.assign(l,{onDragover:_,onDragleave:j,onKeydown:r,onKeyup:T}),b("div",l,[L()].concat(B()))}}),Object.assign(u,{removeAtIndex:d,removeFile:g,getNativeElement:()=>p.value}),le(u,"nativeEl",()=>p.value),ne(s)}});export{de as Q};
