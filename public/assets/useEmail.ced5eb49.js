import{api as t}from"./axios.a8d45b11.js";import{u}from"./useHelpers.752873d2.js";import{r as o}from"./index.8bba9b46.js";const r=o({id:"",host:"",usuario:"",puerto:0,password:"",email_client:"",seguridad:"",empresa:"",company_id:null}),a=o(!1),p=o(!1),c=o(!0),d=o(!1),h=()=>{const{mostrarNotify:s}=u();return{api:t,formEmail:r,mostrarNotify:s,limpiarFormulario:()=>{r.value={id:"",host:"",usuario:"",puerto:0,password:"",email_client:"",seguridad:"",empresa:"",company_id:null}},loading:a,onSubmit:async()=>{try{a.value=!0;const{id:e,company_id:v,empresa:i,puerto:l,...m}=r.value,{data:n}=await t.patch(`/email/${e}`,{...m,company_id:i,puerto:l});s("positive",n.msg),a.value=!1,a.value=!1}catch(e){a.value=!1,s("warning",e.response.data.message)}},loadingTesting:p,isPwd:c,prompt:d}};export{h as u};
