import{r as W,n as b,A as le,aO as ne,U as te,av as re,p as w,m as se,b4 as ue,b8 as de,b5 as ce,b7 as me,b9 as fe,bo as pe,ba as G,b3 as ve,b6 as ge,ar as be,d as ye,D as Ve,o as I,ad as T,g as V,ah as l,f as m,aQ as he,e as u,ai as A,Q as k,aU as Ce,bp as Fe,i as Q,w as H,aj as L,aR as xe,h as J,ae as Z,aP as _e}from"./index.d41bbc77.js";import{Q as qe}from"./QChip.3f015bda.js";import{h as Se}from"./format.2bc25e5f.js";import{Q as ze}from"./QForm.430f58c0.js";import{u as je}from"./useEmpresa.85a51e48.js";function R(t,v,N,i){const d=[];return t.forEach(p=>{i(p)===!0?d.push(p):v.push({failedPropValidation:N,file:p})}),d}function E(t){t&&t.dataTransfer&&(t.dataTransfer.dropEffect="copy"),te(t)}const ke={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},we=["rejected"];function Ne({editable:t,dnd:v,getFileInput:N,addFilesToQueue:i}){const{props:d,emit:p,proxy:C}=le(),_=W(null),$=b(()=>d.accept!==void 0?d.accept.split(",").map(a=>(a=a.trim(),a==="*"?"*/":(a.endsWith("/*")&&(a=a.slice(0,a.length-1)),a.toUpperCase()))):null),S=b(()=>parseInt(d.maxFiles,10)),z=b(()=>parseInt(d.maxTotalSize,10));function U(a){if(t.value)if(a!==Object(a)&&(a={target:null}),a.target!==null&&a.target.matches('input[type="file"]')===!0)a.clientX===0&&a.clientY===0&&ne(a);else{const h=N();h&&h!==a.target&&h.click(a)}}function x(a){t.value&&a&&i(null,a)}function j(a,h,D,P){let r=Array.from(h||a.target.files);const y=[],q=()=>{y.length!==0&&p("rejected",y)};if(d.accept!==void 0&&$.value.indexOf("*/")===-1&&(r=R(r,y,"accept",s=>$.value.some(f=>s.type.toUpperCase().startsWith(f)||s.name.toUpperCase().endsWith(f))),r.length===0))return q();if(d.maxFileSize!==void 0){const s=parseInt(d.maxFileSize,10);if(r=R(r,y,"max-file-size",f=>f.size<=s),r.length===0)return q()}if(d.multiple!==!0&&r.length!==0&&(r=[r[0]]),r.forEach(s=>{s.__key=s.webkitRelativePath+s.lastModified+s.name+s.size}),P===!0){const s=D.map(f=>f.__key);r=R(r,y,"duplicate",f=>s.includes(f.__key)===!1)}if(r.length===0)return q();if(d.maxTotalSize!==void 0){let s=P===!0?D.reduce((f,B)=>f+B.size,0):0;if(r=R(r,y,"max-total-size",f=>(s+=f.size,s<=z.value)),r.length===0)return q()}if(typeof d.filter=="function"){const s=d.filter(r);r=R(r,y,"filter",f=>s.includes(f))}if(d.maxFiles!==void 0){let s=P===!0?D.length:0;if(r=R(r,y,"max-files",()=>(s++,s<=S.value)),r.length===0)return q()}if(q(),r.length!==0)return r}function c(a){E(a),v.value!==!0&&(v.value=!0)}function e(a){te(a),(a.relatedTarget!==null||re.is.safari!==!0?a.relatedTarget!==_.value:document.elementsFromPoint(a.clientX,a.clientY).includes(_.value)===!1)===!0&&(v.value=!1)}function n(a){E(a);const h=a.dataTransfer.files;h.length!==0&&i(null,h),v.value=!1}function K(a){if(v.value===!0)return w("div",{ref:_,class:`q-${a}__dnd absolute-full`,onDragenter:E,onDragover:E,onDragleave:e,onDrop:n})}return Object.assign(C,{pickFiles:U,addFiles:x}),{pickFiles:U,addFiles:x,onDragover:c,onDragleave:e,processFiles:j,getDndNode:K,maxFilesNumber:S,maxTotalSizeNumber:z}}var ee=se({name:"QFile",inheritAttrs:!1,props:{...ue,...de,...ke,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...ce,...we],setup(t,{slots:v,emit:N,attrs:i}){const{proxy:d}=le(),p=me(),C=W(null),_=W(!1),$=fe(t),{pickFiles:S,onDragover:z,onDragleave:U,processFiles:x,getDndNode:j}=Ne({editable:p.editable,dnd:_,getFileInput:X,addFilesToQueue:Y}),c=pe(t),e=b(()=>Object(t.modelValue)===t.modelValue?"length"in t.modelValue?Array.from(t.modelValue):[t.modelValue]:[]),n=b(()=>G(e.value)),K=b(()=>e.value.map(o=>o.name).join(", ")),a=b(()=>Se(e.value.reduce((o,g)=>o+g.size,0))),h=b(()=>({totalSize:a.value,filesNumber:e.value.length,maxFiles:t.maxFiles})),D=b(()=>({tabindex:-1,type:"file",title:"",accept:t.accept,capture:t.capture,name:$.value,...i,id:p.targetUid.value,disabled:p.editable.value!==!0})),P=b(()=>"q-file q-field--auto-height"+(_.value===!0?" q-file--dnd":"")),r=b(()=>t.multiple===!0&&t.append===!0);function y(o){const g=e.value.slice();g.splice(o,1),s(g)}function q(o){const g=e.value.indexOf(o);g>-1&&y(g)}function s(o){N("update:modelValue",t.multiple===!0?o:o[0])}function f(o){o.keyCode===13&&be(o)}function B(o){(o.keyCode===13||o.keyCode===32)&&S(o)}function X(){return C.value}function Y(o,g){const F=x(o,g,e.value,r.value),M=X();M!=null&&(M.value=""),F!==void 0&&((t.multiple===!0?t.modelValue&&F.every(oe=>e.value.includes(oe)):t.modelValue===F[0])||s(r.value===!0?e.value.concat(F):F))}function O(){return[w("input",{class:[t.inputClass,"q-file__filler"],style:t.inputStyle})]}function ae(){if(v.file!==void 0)return e.value.length===0?O():e.value.map((g,F)=>v.file({index:F,file:g,ref:this}));if(v.selected!==void 0)return e.value.length===0?O():v.selected({files:e.value,ref:this});if(t.useChips===!0)return e.value.length===0?O():e.value.map((g,F)=>w(qe,{key:"file-"+F,removable:p.editable.value,dense:!0,textColor:t.color,tabindex:t.tabindex,onRemove:()=>{y(F)}},()=>w("span",{class:"ellipsis",textContent:g.name})));const o=t.displayValue!==void 0?t.displayValue:K.value;return o.length!==0?[w("div",{class:t.inputClass,style:t.inputStyle,textContent:o})]:O()}function ie(){const o={ref:C,...D.value,...c.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:Y};return t.multiple===!0&&(o.multiple=!0),w("input",o)}return Object.assign(p,{fieldClass:P,emitValue:s,hasValue:n,inputRef:C,innerValue:e,floatingLabel:b(()=>n.value===!0||G(t.displayValue)),computedCounter:b(()=>{if(t.counterLabel!==void 0)return t.counterLabel(h.value);const o=t.maxFiles;return`${e.value.length}${o!==void 0?" / "+o:""} (${a.value})`}),getControlChild:()=>j("file"),getControl:()=>{const o={ref:p.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:t.tabindex};return p.editable.value===!0&&Object.assign(o,{onDragover:z,onDragleave:U,onKeydown:f,onKeyup:B}),w("div",o,[ie()].concat(ae()))}}),Object.assign(d,{removeAtIndex:y,removeFile:q,getNativeElement:()=>C.value}),ve(d,"nativeEl",()=>C.value),ge(p)}});const $e={class:"row q-pt-sm q-gutter-lg justify-center"},Ue=u("label",null,"R.U.C",-1),Ae=u("label",null,"Raz\xF3n Social",-1),Qe={class:"col-xs-11 col-md-5"},Re=u("label",null,"Nombre Comercial:",-1),De={class:"col-xs-11 col-md-5"},Pe=u("label",null,"Direcci\xF3n:",-1),Oe={class:"col-xs-11 col-md-5"},Ie=u("label",null,"Email:",-1),Te=u("label",null,"Obligado Contabilidad:",-1),Ee={class:"col-xs-11 col-md-5"},Ke=u("label",null,"Celular:",-1),Be=u("label",null,"Clave Certificado:",-1),Me=u("label",null,"Cargar Certificado:",-1),Le=u("label",null,"Logo de la empresa:",-1),Je=ye({__name:"FormEmpresa",props:{edit:{type:Boolean}},setup(t){const v=t,{actualizarLista:N,formEmpresa:i,loading:d,limpiarFormulario:p,allowOnlyNumber:C,validateNumRuc:_,validateNumCelular:$,transformToUpperCase:S,onRejected:z,onSubmit:U,isPwd:x,isValid:j}=je();return Ve(()=>i.value.clave_certificado,(c,e)=>{j.value&&c!==e&&(j.value=!1)},{deep:!0}),(c,e)=>(I(),T(ze,{onSubmit:e[14]||(e[14]=n=>l(U)(v.edit))},{default:V(()=>[m(_e,{class:"my-card"},{default:V(()=>[m(he,{class:"q-pt-lg"},{default:V(()=>[u("div",$e,[u("div",{class:A(["col-xs-11 col-md-5",[c.$q.screen.width>600||"q-mt-md"]])},[Ue,m(k,{type:c.$q.platform.is.mobile?"number":"text",modelValue:l(i).ruc,"onUpdate:modelValue":e[0]||(e[0]=n=>l(i).ruc=n),counter:"",maxlength:"13",rules:l(_),onKeyup:l(C),"lazy-rules":"",dense:"",filled:"",required:""},null,8,["type","modelValue","rules","onKeyup"])],2),u("div",{class:A(["col-xs-11 col-md-5",[c.$q.screen.width>600||"q-mt-xs"]])},[Ae,m(k,{modelValue:l(i).razon_social,"onUpdate:modelValue":e[1]||(e[1]=n=>l(i).razon_social=n),modelModifiers:{trim:!0},onKeyup:l(S),dense:"",filled:"",required:""},null,8,["modelValue","onKeyup"])],2),u("div",Qe,[Re,m(k,{modelValue:l(i).nombre_comercial,"onUpdate:modelValue":e[2]||(e[2]=n=>l(i).nombre_comercial=n),modelModifiers:{trim:!0},onKeyup:l(S),dense:"",filled:"",required:""},null,8,["modelValue","onKeyup"])]),u("div",De,[Pe,m(k,{modelValue:l(i).direccion_matriz,"onUpdate:modelValue":e[3]||(e[3]=n=>l(i).direccion_matriz=n),modelModifiers:{trim:!0},dense:"",filled:"",required:""},null,8,["modelValue"])]),u("div",Oe,[Ie,m(k,{modelValue:l(i).email,"onUpdate:modelValue":e[4]||(e[4]=n=>l(i).email=n),modelModifiers:{trim:!0},type:"email",dense:"",filled:"",required:""},null,8,["modelValue"])]),u("div",{class:"col-xs-11 col-md-5",style:Ce(c.$q.screen.width<600||"position: relative; top: 12px;left: 24px;")},[Te,m(Fe,{color:"green",size:"lg",modelValue:l(i).obligado_contabilidad,"onUpdate:modelValue":e[5]||(e[5]=n=>l(i).obligado_contabilidad=n)},null,8,["modelValue"])],4),u("div",Ee,[Ke,m(k,{type:c.$q.platform.is.mobile?"number":"text",modelValue:l(i).telefono,"onUpdate:modelValue":e[6]||(e[6]=n=>l(i).telefono=n),counter:"",maxlength:"10",rules:l($),onKeyup:l(C),"lazy-rules":"",dense:"",filled:"",required:""},null,8,["type","modelValue","rules","onKeyup"])]),u("div",{class:A(["col-xs-11 col-md-5",[c.$q.screen.width>600||"q-mt-xs"]])},[Be,m(k,{type:l(x)?"password":"text",filled:"",modelValue:l(i).clave_certificado,"onUpdate:modelValue":e[8]||(e[8]=n=>l(i).clave_certificado=n),modelModifiers:{trim:!0},dense:"",required:"","error-message":"La clave del certificado es incorrecta",error:l(j)},{append:V(()=>[m(Q,{name:l(x)?"visibility_off":"visibility",color:"blue-grey",class:"cursor-pointer",onClick:e[7]||(e[7]=n=>x.value=!l(x))},null,8,["name"])]),prepend:V(()=>[m(Q,{name:"key",color:"blue-grey-3"})]),_:1},8,["type","modelValue","error"])],2),u("div",{class:A(["col-xs-11 col-md-5",[c.$q.screen.width>600||"q-mt-sm"]])},[Me,m(ee,{dense:"",filled:"","bottom-slots":"",accept:".p12",onRejected:l(z),modelValue:l(i).archivo_certificado,"onUpdate:modelValue":e[10]||(e[10]=n=>l(i).archivo_certificado=n),label:l(i).archivo_certificado_old==null?"Cargar Certificado":l(i).archivo_certificado_old},{prepend:V(()=>[m(Q,{name:"attach_file"})]),append:V(()=>[typeof l(i).archivo_certificado=="object"&&l(i).archivo_certificado!==null?(I(),T(Q,{key:0,name:"close",onClick:e[9]||(e[9]=H(n=>l(i).archivo_certificado=null,["stop","prevent"])),class:"cursor-pointer"})):L("",!0)]),_:1},8,["onRejected","modelValue","label"])],2),u("div",{class:A(["col-xs-11 col-md-5",[c.$q.screen.width>600||"q-mt-sm"]])},[Le,m(ee,{dense:"",filled:"","bottom-slots":"",accept:".jpg, image/*",onRejected:l(z),modelValue:l(i).logo,"onUpdate:modelValue":e[12]||(e[12]=n=>l(i).logo=n),label:l(i).logo_old==null?"Cargar Logo":l(i).logo_old},{prepend:V(()=>[m(Q,{name:"fa-solid fa-image"})]),append:V(()=>[typeof l(i).logo=="object"&&l(i).logo!==null?(I(),T(Q,{key:0,name:"close",onClick:e[11]||(e[11]=H(n=>l(i).logo=null,["stop","prevent"])),class:"cursor-pointer"})):L("",!0)]),_:1},8,["onRejected","modelValue","label"])],2)])]),_:1}),m(xe,{class:A(["q-pb-md",[c.$q.screen.width<600?"justify-center q-ml-xl q-pt-none q-mb-md":"justify-between"]])},{default:V(()=>[c.$q.screen.width>600?(I(),T(J,{key:0,type:"submit",icon:"arrow_back",onClick:e[13]||(e[13]=n=>c.$router.push("/empresas")),outline:"",rounded:"",class:"q-ml-md",color:c.$q.dark.isActive?"blue-grey-2":"blue-grey-10"},{default:V(()=>[Z(" \xA0 Regresar ")]),_:1},8,["color"])):L("",!0),m(J,{type:"submit",icon:"save",loading:l(d),outline:"",rounded:"",class:"q-mr-lg",style:{color:"#696cff"}},{default:V(()=>[Z(" \xA0 Guardar Cambios ")]),_:1},8,["loading"])]),_:1},8,["class"])]),_:1})]),_:1}))}});export{Je as _};
