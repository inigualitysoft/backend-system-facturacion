import{m as r,n as s,p as l,s as u}from"./index.7acef9a6.js";var d=r({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(o,{slots:a}){const t=s(()=>{const n=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(e=>o[e]===!0).map(e=>`q-btn-group--${e}`).join(" ");return`q-btn-group row no-wrap${n.length!==0?" "+n:""}`+(o.spread===!0?" q-btn-group--spread":" inline")});return()=>l("div",{class:t.value},u(a.default))}});export{d as Q};
