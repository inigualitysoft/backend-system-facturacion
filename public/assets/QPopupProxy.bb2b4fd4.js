import{a as x}from"./date.d88e2a07.js";import{k as f,u as w,h as P,c as j}from"./format.b7cf0653.js";import{n as c,m as C,r as p,v as D,b8 as S,p as B,z as k,aY as Q}from"./index.7acef9a6.js";const M=["gregorian","persian"],A={modelValue:{required:!0},mask:{type:String},locale:Object,calendar:{type:String,validator:e=>M.includes(e),default:"gregorian"},landscape:Boolean,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,readonly:Boolean,disable:Boolean},E=["update:modelValue"];function F(e){return e.year+"/"+f(e.month)+"/"+f(e.day)}function I(e,d){const l=c(()=>e.disable!==!0&&e.readonly!==!0),h=c(()=>l.value===!0?0:-1),s=c(()=>{const a=[];return e.color!==void 0&&a.push(`bg-${e.color}`),e.textColor!==void 0&&a.push(`text-${e.textColor}`),a.join(" ")});function g(){return e.locale!==void 0?{...d.lang.date,...e.locale}:d.lang.date}function r(a){const n=new Date,u=a===!0?null:0;if(e.calendar==="persian"){const o=x(n);return{year:o.jy,month:o.jm,day:o.jd}}return{year:n.getFullYear(),month:n.getMonth()+1,day:n.getDate(),hour:u,minute:u,second:u,millisecond:u}}return{editable:l,tabindex:h,headerClass:s,getLocale:g,getCurrentDate:r}}var V=C({name:"QPopupProxy",props:{...w,breakpoint:{type:[String,Number],default:450}},emits:["show","hide"],setup(e,{slots:d,emit:l,attrs:h}){const{proxy:s}=k(),{$q:g}=s,r=p(!1),a=p(null),n=c(()=>parseInt(e.breakpoint,10)),{canShow:u}=P({showing:r});function o(){return g.screen.width<n.value||g.screen.height<n.value?"dialog":"menu"}const i=p(o()),v=c(()=>i.value==="menu"?{maxHeight:"99vh"}:{});D(()=>o(),t=>{r.value!==!0&&(i.value=t)});function y(t){r.value=!0,l("show",t)}function b(t){r.value=!1,i.value=o(),l("hide",t)}return Object.assign(s,{show(t){u(t)===!0&&a.value.show(t)},hide(t){a.value.hide(t)},toggle(t){a.value.toggle(t)}}),S(s,"currentComponent",()=>({type:i.value,ref:a.value})),()=>{const t={ref:a,...v.value,...h,onShow:y,onHide:b};let m;return i.value==="dialog"?m=Q:(m=j,Object.assign(t,{target:e.target,contextMenu:e.contextMenu,noParentEvent:!0,separateClosePopup:!0})),B(m,t,d.default)}}});export{V as Q,E as a,I as b,F as g,A as u};
