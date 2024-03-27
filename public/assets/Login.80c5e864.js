import{d as g,r as m,o as f,c as b,e as t,w as v,f as o,g as u,Q as p,h as _,i as d}from"./index.7acef9a6.js";import{a as y}from"./axios.870a43e3.js";import{u as w}from"./use-quasar.c0f2ab40.js";import{u as x}from"./useHelpers.5242f772.js";var h="/assets/logo.2e824ef4.png";const V={class:"area-login"},k=t("h1",{class:"title"},"Iniciar Sesion",-1),q={class:"login"},I=t("div",{class:"element-form"},[t("img",{src:h,style:{width:"80%","margin-left":"29px","margin-top":"48px","margin-bottom":"24px"}})],-1),S=["onSubmit"],F=g({__name:"Login",setup(C){const l=m(!0),i=m(!1),r=m({email:"",password:""}),{mostrarNotify:n}=x(),c=async()=>{try{i.value=!0;const{data:{token:a,permisos:e}}=await y.post("/auth/login",r.value),s=w();s.setToken(a),s.setPermisos(e),location.href="/"}catch(a){if(i.value=!1,a.response.data.message=="Credentials not valid(password)")return n("warning","La contrase\xF1a esta incorrecta");if(a.response.data.message=="Credentials not valid(email)")return n("warning","El email esta incorrecto");if(a.response.data.message=="password must be longer than or equal to 6 characters")return n("warning","la contrase\xF1a debe tener m\xE1s de 6 caracteres o m\xE1s");n("warning",a.response.data.message)}};return(a,e)=>(f(),b("section",V,[k,t("div",q,[I,t("form",{onSubmit:v(c,["prevent"]),class:"element-form q-mt-md"},[o(p,{"label-color":"blue-grey-3",class:"q-mb-lg","bg-color":"blue-grey-10",filled:"",label:"Ingresa tu email",modelValue:r.value.email,"onUpdate:modelValue":e[0]||(e[0]=s=>r.value.email=s),modelModifiers:{trim:!0},required:""},{prepend:u(()=>[o(d,{name:"person",color:"blue-grey-3"})]),_:1},8,["modelValue"]),o(p,{type:l.value?"password":"text","label-color":"blue-grey-3",filled:"","bg-color":"blue-grey-10",label:"Ingresa tu contrase\xF1a",modelValue:r.value.password,"onUpdate:modelValue":e[2]||(e[2]=s=>r.value.password=s),modelModifiers:{trim:!0},required:""},{append:u(()=>[o(d,{name:l.value?"visibility_off":"visibility",color:"blue-grey",class:"cursor-pointer",onClick:e[1]||(e[1]=s=>l.value=!l.value)},null,8,["name"])]),prepend:u(()=>[o(d,{name:"key",color:"blue-grey-3"})]),_:1},8,["type","modelValue"]),o(_,{label:"Ingresar",class:"q-px-xl",loading:i.value,type:"submit",color:"deep-purple-6"},null,8,["loading"])],40,S)])]))}});export{F as default};
