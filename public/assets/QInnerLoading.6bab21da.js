import{m as b,I as v,aw as f,J as m,ay as y,n as t,p as n,T as S,z as C,B as h}from"./index.77dc7136.js";var k=b({name:"QInnerLoading",props:{...v,...f,showing:Boolean,color:String,size:{type:[String,Number],default:42},label:String,labelClass:String,labelStyle:[String,Array,Object]},setup(e,{slots:a}){const s=C(),i=m(e,s.proxy.$q),{transitionProps:r,transitionStyle:o}=y(e),u=t(()=>"q-inner-loading absolute-full column flex-center"+(i.value===!0?" q-inner-loading--dark":"")),c=t(()=>"q-inner-loading__label"+(e.labelClass!==void 0?` ${e.labelClass}`:""));function d(){const l=[n(h,{size:e.size,color:e.color})];return e.label!==void 0&&l.push(n("div",{class:c.value,style:e.labelStyle},[e.label])),l}function g(){return e.showing===!0?n("div",{class:u.value,style:o.value},a.default!==void 0?a.default():d()):null}return()=>n(S,r.value,g)}});export{k as Q};
