import{m,am as h,an as C,n,p as t,i as k,N as q,bn as _,bo as y,bp as S,s as x}from"./index.92f39aa9.js";var $=m({name:"QBreadcrumbsEl",props:{...h,label:String,icon:String,tag:{type:String,default:"span"}},emits:["click"],setup(e,{slots:l}){const{linkTag:u,linkAttrs:o,linkClass:c,navigateOnClick:d}=C(),r=n(()=>({class:"q-breadcrumbs__el q-link flex inline items-center relative-position "+(e.disable!==!0?"q-link--focusable"+c.value:"q-breadcrumbs__el--disable"),...o.value,onClick:d})),i=n(()=>"q-breadcrumbs__el-icon"+(e.label!==void 0?" q-breadcrumbs__el-icon--with-label":""));return()=>{const s=[];return e.icon!==void 0&&s.push(t(k,{class:i.value,name:e.icon})),e.label!==void 0&&s.push(e.label),t(u.value,{...r.value},q(l.default,s))}}});const Q=["",!0];var E=m({name:"QBreadcrumbs",props:{..._,separator:{type:String,default:"/"},separatorColor:String,activeColor:{type:String,default:"primary"},gutter:{type:String,validator:e=>["none","xs","sm","md","lg","xl"].includes(e),default:"sm"}},setup(e,{slots:l}){const u=y(e),o=n(()=>`flex items-center ${u.value}${e.gutter==="none"?"":` q-gutter-${e.gutter}`}`),c=n(()=>e.separatorColor?` text-${e.separatorColor}`:""),d=n(()=>` text-${e.activeColor}`);return()=>{const r=S(x(l.default));if(r.length===0)return;let i=1;const s=[],v=r.filter(a=>a.type!==void 0&&a.type.name==="QBreadcrumbsEl").length,g=l.separator!==void 0?l.separator:()=>e.separator;return r.forEach(a=>{if(a.type!==void 0&&a.type.name==="QBreadcrumbsEl"){const b=i<v,p=a.props!==null&&Q.includes(a.props.disable),f=(b===!0?"":" q-breadcrumbs--last")+(p!==!0&&b===!0?d.value:"");i++,s.push(t("div",{class:`flex items-center${f}`},[a])),b===!0&&s.push(t("div",{class:"q-breadcrumbs__separator"+c.value},g()))}else s.push(a)}),t("div",{class:"q-breadcrumbs"},[t("div",{class:o.value},s)])}}});export{E as Q,$ as a};
