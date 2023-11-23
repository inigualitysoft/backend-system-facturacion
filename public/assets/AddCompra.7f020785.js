import{Q as $t,a as Pe}from"./QBreadcrumbs.626c170d.js";import{m as St,b8 as At,J as Ht,L as Yt,br as Tt,r as H,n as h,b0 as Ft,D as ue,p as d,aF as fe,s as Ot,A as jt,bs as Pt,z as lt,h as $,d as It,u as Qt,x as Bt,o as Q,c as he,e as c,ai as A,f as v,g as y,Q as N,ah as _,aS as ge,aj as R,bt as Ie,aT as ot,am as Et,bu as Ut,P as Qe,w as Nt,ae as ye,i as z,R as Rt,ad as ke,b2 as zt,af as Me}from"./index.d41bbc77.js";import{Q as nt,b as rt}from"./QItemLabel.3788c9ad.js";import{Q as st}from"./QSelect.e2298bca.js";import{u as Lt,a as Kt,b as Wt,g as L,Q as Jt}from"./QPopupProxy.6516131d.js";import{t as ut,f as Gt,g as Xt,j as Be,_ as Zt,d as it}from"./date.8a67b9c4.js";import{p as be}from"./format.2bc25e5f.js";import{Q as ea,a as _e}from"./QTable.ec89ebde.js";import{Q as ta}from"./QBadge.05c368ae.js";import{Q as aa}from"./QForm.430f58c0.js";import{C as la}from"./ClosePopup.1e4fc19e.js";import{api as Ee}from"./axios.285a4291.js";import{u as oa}from"./useHelpers.26f595d3.js";import{u as na,a as ra}from"./AddProveedor.83770ded.js";import{u as sa,_ as ua}from"./SelectProduct.9a7ddae5.js";import"./QChip.3f015bda.js";import"./QList.fa60a52c.js";import"./use-quasar.312cdeb8.js";import"./QInnerLoading.37366724.js";function ia(){const l=new Map;return{getCache:function(F,b){return l[F]===void 0?l[F]=b:l[F]},getCacheWithFn:function(F,b){return l[F]===void 0?l[F]=b():l[F]}}}const G=20,da=["Calendar","Years","Months"],dt=l=>da.includes(l),Ue=l=>/^-?[\d]+\/[0-1]\d$/.test(l),se=" \u2014 ";function K(l){return l.year+"/"+be(l.month)}var ca=St({name:"QDate",props:{...Lt,...At,...Ht,multiple:Boolean,range:Boolean,title:String,subtitle:String,mask:{default:"YYYY/MM/DD"},defaultYearMonth:{type:String,validator:Ue},yearsInMonthView:Boolean,events:[Array,Function],eventColor:[String,Function],emitImmediately:Boolean,options:[Array,Function],navigationMinYearMonth:{type:String,validator:Ue},navigationMaxYearMonth:{type:String,validator:Ue},noUnset:Boolean,firstDayOfWeek:[String,Number],todayBtn:Boolean,minimal:Boolean,defaultView:{type:String,default:"Calendar",validator:dt}},emits:[...Kt,"rangeStart","rangeEnd","navigation"],setup(l,{slots:F,emit:b}){const{proxy:q}=jt(),{$q:P}=q,B=Yt(l,P),{getCache:Y}=ia(),{tabindex:C,headerClass:pe,getLocale:X,getCurrentDate:we}=Wt(l,P);let Z;const E=Tt(l),W=Pt(E),ie=H(null),I=H(Je()),p=H(X()),ee=h(()=>Je()),O=h(()=>X()),S=h(()=>we()),r=H(Ge(I.value,p.value)),V=H(l.defaultView),qe=P.lang.rtl===!0?"right":"left",te=H(qe.value),ae=H(qe.value),de=r.value.year,le=H(de-de%G-(de<0?G:0)),x=H(null),f=h(()=>{const e=l.landscape===!0?"landscape":"portrait";return`q-date q-date--${e} q-date--${e}-${l.minimal===!0?"minimal":"standard"}`+(B.value===!0?" q-date--dark q-dark":"")+(l.bordered===!0?" q-date--bordered":"")+(l.square===!0?" q-date--square no-border-radius":"")+(l.flat===!0?" q-date--flat no-shadow":"")+(l.disable===!0?" disabled":l.readonly===!0?" q-date--readonly":"")}),u=h(()=>l.color||"primary"),s=h(()=>l.textColor||"white"),D=h(()=>l.emitImmediately===!0&&l.multiple!==!0&&l.range!==!0),$e=h(()=>Array.isArray(l.modelValue)===!0?l.modelValue:l.modelValue!==null&&l.modelValue!==void 0?[l.modelValue]:[]),j=h(()=>$e.value.filter(e=>typeof e=="string").map(e=>Ye(e,I.value,p.value)).filter(e=>e.dateHash!==null&&e.day!==null&&e.month!==null&&e.year!==null)),oe=h(()=>{const e=t=>Ye(t,I.value,p.value);return $e.value.filter(t=>Ft(t)===!0&&t.from!==void 0&&t.to!==void 0).map(t=>({from:e(t.from),to:e(t.to)})).filter(t=>t.from.dateHash!==null&&t.to.dateHash!==null&&t.from.dateHash<t.to.dateHash)}),xe=h(()=>l.calendar!=="persian"?e=>new Date(e.year,e.month-1,e.day):e=>{const t=ut(e.year,e.month,e.day);return new Date(t.gy,t.gm-1,t.gd)}),Se=h(()=>l.calendar==="persian"?L:(e,t,a)=>Gt(new Date(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond),t===void 0?I.value:t,a===void 0?p.value:a,e.year,e.timezoneOffset)),ce=h(()=>j.value.length+oe.value.reduce((e,t)=>e+1+Xt(xe.value(t.to),xe.value(t.from)),0)),Ne=h(()=>{if(l.title!==void 0&&l.title!==null&&l.title.length!==0)return l.title;if(x.value!==null){const a=x.value.init,n=xe.value(a);return p.value.daysShort[n.getDay()]+", "+p.value.monthsShort[a.month-1]+" "+a.day+se+"?"}if(ce.value===0)return se;if(ce.value>1)return`${ce.value} ${p.value.pluralDay}`;const e=j.value[0],t=xe.value(e);return isNaN(t.valueOf())===!0?se:p.value.headerTitle!==void 0?p.value.headerTitle(t,e):p.value.daysShort[t.getDay()]+", "+p.value.monthsShort[e.month-1]+" "+e.day}),ct=h(()=>j.value.concat(oe.value.map(t=>t.from)).sort((t,a)=>t.year-a.year||t.month-a.month)[0]),vt=h(()=>j.value.concat(oe.value.map(t=>t.to)).sort((t,a)=>a.year-t.year||a.month-t.month)[0]),Re=h(()=>{if(l.subtitle!==void 0&&l.subtitle!==null&&l.subtitle.length!==0)return l.subtitle;if(ce.value===0)return se;if(ce.value>1){const e=ct.value,t=vt.value,a=p.value.monthsShort;return a[e.month-1]+(e.year!==t.year?" "+e.year+se+a[t.month-1]+" ":e.month!==t.month?se+a[t.month-1]:"")+" "+t.year}return j.value[0].year}),Ce=h(()=>{const e=[P.iconSet.datetime.arrowLeft,P.iconSet.datetime.arrowRight];return P.lang.rtl===!0?e.reverse():e}),ze=h(()=>l.firstDayOfWeek!==void 0?Number(l.firstDayOfWeek):p.value.firstDayOfWeek),mt=h(()=>{const e=p.value.daysShort,t=ze.value;return t>0?e.slice(t,7).concat(e.slice(0,t)):e}),U=h(()=>{const e=r.value;return l.calendar!=="persian"?new Date(e.year,e.month,0).getDate():Be(e.year,e.month)}),ft=h(()=>typeof l.eventColor=="function"?l.eventColor:()=>l.eventColor),k=h(()=>{if(l.navigationMinYearMonth===void 0)return null;const e=l.navigationMinYearMonth.split("/");return{year:parseInt(e[0],10),month:parseInt(e[1],10)}}),M=h(()=>{if(l.navigationMaxYearMonth===void 0)return null;const e=l.navigationMaxYearMonth.split("/");return{year:parseInt(e[0],10),month:parseInt(e[1],10)}}),Ae=h(()=>{const e={month:{prev:!0,next:!0},year:{prev:!0,next:!0}};return k.value!==null&&k.value.year>=r.value.year&&(e.year.prev=!1,k.value.year===r.value.year&&k.value.month>=r.value.month&&(e.month.prev=!1)),M.value!==null&&M.value.year<=r.value.year&&(e.year.next=!1,M.value.year===r.value.year&&M.value.month<=r.value.month&&(e.month.next=!1)),e}),De=h(()=>{const e={};return j.value.forEach(t=>{const a=K(t);e[a]===void 0&&(e[a]=[]),e[a].push(t.day)}),e}),Le=h(()=>{const e={};return oe.value.forEach(t=>{const a=K(t.from),n=K(t.to);if(e[a]===void 0&&(e[a]=[]),e[a].push({from:t.from.day,to:a===n?t.to.day:void 0,range:t}),a<n){let o;const{year:g,month:i}=t.from,m=i<12?{year:g,month:i+1}:{year:g+1,month:1};for(;(o=K(m))<=n;)e[o]===void 0&&(e[o]=[]),e[o].push({from:void 0,to:o===n?t.to.day:void 0,range:t}),m.month++,m.month>12&&(m.year++,m.month=1)}}),e}),ve=h(()=>{if(x.value===null)return;const{init:e,initHash:t,final:a,finalHash:n}=x.value,[o,g]=t<=n?[e,a]:[a,e],i=K(o),m=K(g);if(i!==T.value&&m!==T.value)return;const w={};return i===T.value?(w.from=o.day,w.includeFrom=!0):w.from=1,m===T.value?(w.to=g.day,w.includeTo=!0):w.to=U.value,w}),T=h(()=>K(r.value)),ht=h(()=>{const e={};if(l.options===void 0){for(let a=1;a<=U.value;a++)e[a]=!0;return e}const t=typeof l.options=="function"?l.options:a=>l.options.includes(a);for(let a=1;a<=U.value;a++){const n=T.value+"/"+be(a);e[a]=t(n)}return e}),gt=h(()=>{const e={};if(l.events===void 0)for(let t=1;t<=U.value;t++)e[t]=!1;else{const t=typeof l.events=="function"?l.events:a=>l.events.includes(a);for(let a=1;a<=U.value;a++){const n=T.value+"/"+be(a);e[a]=t(n)===!0&&ft.value(n)}}return e}),yt=h(()=>{let e,t;const{year:a,month:n}=r.value;if(l.calendar!=="persian")e=new Date(a,n-1,1),t=new Date(a,n-1,0).getDate();else{const o=ut(a,n,1);e=new Date(o.gy,o.gm-1,o.gd);let g=n-1,i=a;g===0&&(g=12,i--),t=Be(i,g)}return{days:e.getDay()-ze.value-1,endDay:t}}),Ke=h(()=>{const e=[],{days:t,endDay:a}=yt.value,n=t<0?t+7:t;if(n<6)for(let i=a-n;i<=a;i++)e.push({i,fill:!0});const o=e.length;for(let i=1;i<=U.value;i++){const m={i,event:gt.value[i],classes:[]};ht.value[i]===!0&&(m.in=!0,m.flat=!0),e.push(m)}if(De.value[T.value]!==void 0&&De.value[T.value].forEach(i=>{const m=o+i-1;Object.assign(e[m],{selected:!0,unelevated:!0,flat:!1,color:u.value,textColor:s.value})}),Le.value[T.value]!==void 0&&Le.value[T.value].forEach(i=>{if(i.from!==void 0){const m=o+i.from-1,w=o+(i.to||U.value)-1;for(let me=m;me<=w;me++)Object.assign(e[me],{range:i.range,unelevated:!0,color:u.value,textColor:s.value});Object.assign(e[m],{rangeFrom:!0,flat:!1}),i.to!==void 0&&Object.assign(e[w],{rangeTo:!0,flat:!1})}else if(i.to!==void 0){const m=o+i.to-1;for(let w=o;w<=m;w++)Object.assign(e[w],{range:i.range,unelevated:!0,color:u.value,textColor:s.value});Object.assign(e[m],{flat:!1,rangeTo:!0})}else{const m=o+U.value-1;for(let w=o;w<=m;w++)Object.assign(e[w],{range:i.range,unelevated:!0,color:u.value,textColor:s.value})}}),ve.value!==void 0){const i=o+ve.value.from-1,m=o+ve.value.to-1;for(let w=i;w<=m;w++)e[w].color=u.value,e[w].editRange=!0;ve.value.includeFrom===!0&&(e[i].editRangeFrom=!0),ve.value.includeTo===!0&&(e[m].editRangeTo=!0)}r.value.year===S.value.year&&r.value.month===S.value.month&&(e[o+S.value.day-1].today=!0);const g=e.length%7;if(g>0){const i=7-g;for(let m=1;m<=i;m++)e.push({i:m,fill:!0})}return e.forEach(i=>{let m="q-date__calendar-item ";i.fill===!0?m+="q-date__calendar-item--fill":(m+=`q-date__calendar-item--${i.in===!0?"in":"out"}`,i.range!==void 0&&(m+=` q-date__range${i.rangeTo===!0?"-to":i.rangeFrom===!0?"-from":""}`),i.editRange===!0&&(m+=` q-date__edit-range${i.editRangeFrom===!0?"-from":""}${i.editRangeTo===!0?"-to":""}`),(i.range!==void 0||i.editRange===!0)&&(m+=` text-${i.color}`)),i.classes=m}),e}),_t=h(()=>l.disable===!0?{"aria-disabled":"true"}:l.readonly===!0?{"aria-readonly":"true"}:{});ue(()=>l.modelValue,e=>{if(Z===e)Z=0;else{const t=Ge(I.value,p.value);ne(t.year,t.month,t)}}),ue(V,()=>{ie.value!==null&&q.$el.contains(document.activeElement)===!0&&ie.value.focus()}),ue(()=>r.value.year+"|"+r.value.month,()=>{b("navigation",{year:r.value.year,month:r.value.month})}),ue(ee,e=>{at(e,p.value,"mask"),I.value=e}),ue(O,e=>{at(I.value,e,"locale"),p.value=e});function We(){const e=S.value,t=De.value[K(e)];(t===void 0||t.includes(e.day)===!1)&&Fe(e),He(e.year,e.month)}function bt(e){dt(e)===!0&&(V.value=e)}function pt(e,t){["month","year"].includes(e)&&(e==="month"?Ze:Te)(t===!0?-1:1)}function He(e,t){V.value="Calendar",ne(e,t)}function wt(e,t){if(l.range===!1||!e){x.value=null;return}const a=Object.assign({...r.value},e),n=t!==void 0?Object.assign({...r.value},t):a;x.value={init:a,initHash:L(a),final:n,finalHash:L(n)},He(a.year,a.month)}function Je(){return l.calendar==="persian"?"YYYY/MM/DD":l.mask}function Ye(e,t,a){return Zt(e,t,a,l.calendar,{hour:0,minute:0,second:0,millisecond:0})}function Ge(e,t){const a=Array.isArray(l.modelValue)===!0?l.modelValue:l.modelValue?[l.modelValue]:[];if(a.length===0)return Xe();const n=a[a.length-1],o=Ye(n.from!==void 0?n.from:n,e,t);return o.dateHash===null?Xe():o}function Xe(){let e,t;if(l.defaultYearMonth!==void 0){const a=l.defaultYearMonth.split("/");e=parseInt(a[0],10),t=parseInt(a[1],10)}else{const a=S.value!==void 0?S.value:we();e=a.year,t=a.month}return{year:e,month:t,day:1,hour:0,minute:0,second:0,millisecond:0,dateHash:e+"/"+be(t)+"/01"}}function Ze(e){let t=r.value.year,a=Number(r.value.month)+e;a===13?(a=1,t++):a===0&&(a=12,t--),ne(t,a),D.value===!0&&Ve("month")}function Te(e){const t=Number(r.value.year)+e;ne(t,r.value.month),D.value===!0&&Ve("year")}function qt(e){ne(e,r.value.month),V.value=l.defaultView==="Years"?"Months":"Calendar",D.value===!0&&Ve("year")}function xt(e){ne(r.value.year,e),V.value="Calendar",D.value===!0&&Ve("month")}function Ct(e,t){const a=De.value[t];(a!==void 0&&a.includes(e.day)===!0?Oe:Fe)(e)}function J(e){return{year:e.year,month:e.month,day:e.day}}function ne(e,t,a){if(k.value!==null&&e<=k.value.year&&(e=k.value.year,t<k.value.month&&(t=k.value.month)),M.value!==null&&e>=M.value.year&&(e=M.value.year,t>M.value.month&&(t=M.value.month)),a!==void 0){const{hour:o,minute:g,second:i,millisecond:m,timezoneOffset:w,timeHash:me}=a;Object.assign(r.value,{hour:o,minute:g,second:i,millisecond:m,timezoneOffset:w,timeHash:me})}const n=e+"/"+be(t)+"/01";n!==r.value.dateHash&&(te.value=r.value.dateHash<n==(P.lang.rtl!==!0)?"left":"right",e!==r.value.year&&(ae.value=te.value),lt(()=>{le.value=e-e%G-(e<0?G:0),Object.assign(r.value,{year:e,month:t,day:1,dateHash:n})}))}function et(e,t,a){const n=e!==null&&e.length===1&&l.multiple===!1?e[0]:e;Z=n;const{reason:o,details:g}=tt(t,a);b("update:modelValue",n,o,g)}function Ve(e){const t=j.value[0]!==void 0&&j.value[0].dateHash!==null?{...j.value[0]}:{...r.value};lt(()=>{t.year=r.value.year,t.month=r.value.month;const a=l.calendar!=="persian"?new Date(t.year,t.month,0).getDate():Be(t.year,t.month);t.day=Math.min(Math.max(1,t.day),a);const n=re(t);Z=n;const{details:o}=tt("",t);b("update:modelValue",n,e,o)})}function tt(e,t){return t.from!==void 0?{reason:`${e}-range`,details:{...J(t.target),from:J(t.from),to:J(t.to)}}:{reason:`${e}-day`,details:J(t)}}function re(e,t,a){return e.from!==void 0?{from:Se.value(e.from,t,a),to:Se.value(e.to,t,a)}:Se.value(e,t,a)}function Fe(e){let t;if(l.multiple===!0)if(e.from!==void 0){const a=L(e.from),n=L(e.to),o=j.value.filter(i=>i.dateHash<a||i.dateHash>n),g=oe.value.filter(({from:i,to:m})=>m.dateHash<a||i.dateHash>n);t=o.concat(g).concat(e).map(i=>re(i))}else{const a=$e.value.slice();a.push(re(e)),t=a}else t=re(e);et(t,"add",e)}function Oe(e){if(l.noUnset===!0)return;let t=null;if(l.multiple===!0&&Array.isArray(l.modelValue)===!0){const a=re(e);e.from!==void 0?t=l.modelValue.filter(n=>n.from!==void 0?n.from!==a.from&&n.to!==a.to:!0):t=l.modelValue.filter(n=>n!==a),t.length===0&&(t=null)}et(t,"remove",e)}function at(e,t,a){const n=j.value.concat(oe.value).map(o=>re(o,e,t)).filter(o=>o.from!==void 0?o.from.dateHash!==null&&o.to.dateHash!==null:o.dateHash!==null);b("update:modelValue",(l.multiple===!0?n:n[0])||null,a)}function Dt(){if(l.minimal!==!0)return d("div",{class:"q-date__header "+pe.value},[d("div",{class:"relative-position"},[d(fe,{name:"q-transition--fade"},()=>d("div",{key:"h-yr-"+Re.value,class:"q-date__header-subtitle q-date__header-link "+(V.value==="Years"?"q-date__header-link--active":"cursor-pointer"),tabindex:C.value,...Y("vY",{onClick(){V.value="Years"},onKeyup(e){e.keyCode===13&&(V.value="Years")}})},[Re.value]))]),d("div",{class:"q-date__header-title relative-position flex no-wrap"},[d("div",{class:"relative-position col"},[d(fe,{name:"q-transition--fade"},()=>d("div",{key:"h-sub"+Ne.value,class:"q-date__header-title-label q-date__header-link "+(V.value==="Calendar"?"q-date__header-link--active":"cursor-pointer"),tabindex:C.value,...Y("vC",{onClick(){V.value="Calendar"},onKeyup(e){e.keyCode===13&&(V.value="Calendar")}})},[Ne.value]))]),l.todayBtn===!0?d($,{class:"q-date__header-today self-start",icon:P.iconSet.datetime.today,flat:!0,size:"sm",round:!0,tabindex:C.value,onClick:We}):null])])}function je({label:e,type:t,key:a,dir:n,goTo:o,boundaries:g,cls:i}){return[d("div",{class:"row items-center q-date__arrow"},[d($,{round:!0,dense:!0,size:"sm",flat:!0,icon:Ce.value[0],tabindex:C.value,disable:g.prev===!1,...Y("go-#"+t,{onClick(){o(-1)}})})]),d("div",{class:"relative-position overflow-hidden flex flex-center"+i},[d(fe,{name:"q-transition--jump-"+n},()=>d("div",{key:a},[d($,{flat:!0,dense:!0,noCaps:!0,label:e,tabindex:C.value,...Y("view#"+t,{onClick:()=>{V.value=t}})})]))]),d("div",{class:"row items-center q-date__arrow"},[d($,{round:!0,dense:!0,size:"sm",flat:!0,icon:Ce.value[1],tabindex:C.value,disable:g.next===!1,...Y("go+#"+t,{onClick(){o(1)}})})])]}const Vt={Calendar:()=>[d("div",{key:"calendar-view",class:"q-date__view q-date__calendar"},[d("div",{class:"q-date__navigation row items-center no-wrap"},je({label:p.value.months[r.value.month-1],type:"Months",key:r.value.month,dir:te.value,goTo:Ze,boundaries:Ae.value.month,cls:" col"}).concat(je({label:r.value.year,type:"Years",key:r.value.year,dir:ae.value,goTo:Te,boundaries:Ae.value.year,cls:""}))),d("div",{class:"q-date__calendar-weekdays row items-center no-wrap"},mt.value.map(e=>d("div",{class:"q-date__calendar-item"},[d("div",e)]))),d("div",{class:"q-date__calendar-days-container relative-position overflow-hidden"},[d(fe,{name:"q-transition--slide-"+te.value},()=>d("div",{key:T.value,class:"q-date__calendar-days fit"},Ke.value.map(e=>d("div",{class:e.classes},[e.in===!0?d($,{class:e.today===!0?"q-date__today":"",dense:!0,flat:e.flat,unelevated:e.unelevated,color:e.color,textColor:e.textColor,label:e.i,tabindex:C.value,...Y("day#"+e.i,{onClick:()=>{kt(e.i)},onMouseover:()=>{Mt(e.i)}})},e.event!==!1?()=>d("div",{class:"q-date__event bg-"+e.event}):null):d("div",""+e.i)]))))])])],Months(){const e=r.value.year===S.value.year,t=n=>k.value!==null&&r.value.year===k.value.year&&k.value.month>n||M.value!==null&&r.value.year===M.value.year&&M.value.month<n,a=p.value.monthsShort.map((n,o)=>{const g=r.value.month===o+1;return d("div",{class:"q-date__months-item flex flex-center"},[d($,{class:e===!0&&S.value.month===o+1?"q-date__today":null,flat:g!==!0,label:n,unelevated:g,color:g===!0?u.value:null,textColor:g===!0?s.value:null,tabindex:C.value,disable:t(o+1),...Y("month#"+o,{onClick:()=>{xt(o+1)}})})])});return l.yearsInMonthView===!0&&a.unshift(d("div",{class:"row no-wrap full-width"},[je({label:r.value.year,type:"Years",key:r.value.year,dir:ae.value,goTo:Te,boundaries:Ae.value.year,cls:" col"})])),d("div",{key:"months-view",class:"q-date__view q-date__months flex flex-center"},a)},Years(){const e=le.value,t=e+G,a=[],n=o=>k.value!==null&&k.value.year>o||M.value!==null&&M.value.year<o;for(let o=e;o<=t;o++){const g=r.value.year===o;a.push(d("div",{class:"q-date__years-item flex flex-center"},[d($,{key:"yr"+o,class:S.value.year===o?"q-date__today":null,flat:!g,label:o,dense:!0,unelevated:g,color:g===!0?u.value:null,textColor:g===!0?s.value:null,tabindex:C.value,disable:n(o),...Y("yr#"+o,{onClick:()=>{qt(o)}})})]))}return d("div",{class:"q-date__view q-date__years flex flex-center"},[d("div",{class:"col-auto"},[d($,{round:!0,dense:!0,flat:!0,icon:Ce.value[0],tabindex:C.value,disable:n(e),...Y("y-",{onClick:()=>{le.value-=G}})})]),d("div",{class:"q-date__years-content col self-stretch row items-center"},a),d("div",{class:"col-auto"},[d($,{round:!0,dense:!0,flat:!0,icon:Ce.value[1],tabindex:C.value,disable:n(t),...Y("y+",{onClick:()=>{le.value+=G}})})])])}};function kt(e){const t={...r.value,day:e};if(l.range===!1){Ct(t,T.value);return}if(x.value===null){const a=Ke.value.find(o=>o.fill!==!0&&o.i===e);if(l.noUnset!==!0&&a.range!==void 0){Oe({target:t,from:a.range.from,to:a.range.to});return}if(a.selected===!0){Oe(t);return}const n=L(t);x.value={init:t,initHash:n,final:t,finalHash:n},b("rangeStart",J(t))}else{const a=x.value.initHash,n=L(t),o=a<=n?{from:x.value.init,to:t}:{from:t,to:x.value.init};x.value=null,Fe(a===n?t:{target:t,...o}),b("rangeEnd",{from:J(o.from),to:J(o.to)})}}function Mt(e){if(x.value!==null){const t={...r.value,day:e};Object.assign(x.value,{final:t,finalHash:L(t)})}}return Object.assign(q,{setToday:We,setView:bt,offsetCalendar:pt,setCalendarTo:He,setEditingRange:wt}),()=>{const e=[d("div",{class:"q-date__content col relative-position"},[d(fe,{name:"q-transition--fade"},Vt[V.value])])],t=Ot(F.default);return t!==void 0&&e.push(d("div",{class:"q-date__actions"},t)),l.name!==void 0&&l.disable!==!0&&W(e,"push"),d("div",{class:f.value,..._t.value},[Dt(),d("div",{ref:ie,class:"q-date__main col column",tabindex:-1},e)])}}});const va={class:"q-ma-lg q-pt-md q-mb-none",style:{"margin-bottom":"10px"}},ma={class:"row q-col-gutter-lg"},fa=c("label",{class:"text-h6 text-center"},"Nueva Compra",-1),ha=[fa],ga={class:"row q-pt-none q-mx-lg q-col-gutter-md"},ya={class:"col-xs-12 col-md-5 q-mt-lg q-pl-none"},_a=c("label",null,"Seleccionar Proveedor: ",-1),ba=c("label",null,"Numero de Comprobante: ",-1),pa=c("label",null,"Fecha de compra: ",-1),wa={class:"row items-center justify-end"},qa=c("label",null,"Seleccionar Sucursal: ",-1),xa={key:1,class:"col-xs-12 col-md-5 q-pl-none"},Ca=c("label",null,"Filtrar por codigo de barra o nombre del producto:",-1),Da=c("label",null,"Descripci\xF3n: ",-1),Va={key:2,class:"col-xs-12 col-md-5 q-pl-none"},ka=c("label",null,"Filtrar por codigo de barra o nombre del producto:",-1),Ma={class:"col-xs-12 col-md-5"},$a=c("label",null,"Filtrar por codigo de barra o nombre del producto: ",-1),Sa={class:"col-12"},Aa={class:"full-width row flex-center text-lime-10 q-gutter-sm"},Ha=c("span",{class:"text-subtitle1"}," Agrega alg\xFAn producto ",-1),Ya={class:"col-12",style:{display:"flex","justify-content":"end"}},Ta={class:"text-right"},Fa=c("td",null,[c("b",null,"SUBTOTAL:")],-1),Oa={style:{width:"50px"},class:"text-subtitle1 text-weight-regular"},ja={class:"text-right"},Pa=c("td",null,[c("b",null,"IVA(12%):")],-1),Ia={style:{width:"50px"},class:"text-subtitle1 text-weight-regular"},Qa={class:"text-right"},Ba=c("td",null,[c("b",null,"TOTAL DESCUENTO:")],-1),Ea={style:{width:"50px"},class:"text-subtitle1 text-weight-regular"},Ua={class:"text-right"},Na=c("td",null,[c("b",null,"TOTAL DE COMPRA:")],-1),Ra={style:{width:"50px"}},cl=It({__name:"AddCompra",setup(l){const{agregarAndValidarStock:F,claim:b,filterByCodBarra:q,columns:P,rows:B,filterArticulo:Y,modalSelectProducto:C,getSubtotalByProduct:pe,loadingState:X,listProductos:we,quitarArticulo:Z,sucursal_selected:E,valorFactura:W}=sa();let{actualizarLista:ie}=na(),I=[];const p=H([]),ee=H(!1),{mostrarNotify:O}=oa(),S=H([]),r=H({proveedor_id:"",numero_comprobante:"",descripcion:"",inputDate:it.formatDate(Date.now(),"YYYY/MM/DD")}),V=Qt(),qe=f=>{F(f,"compras"),C.value=!1},te=async f=>{S.value=[];const{data:u}=await Ee.get(`/sucursal/find/${f}/company`);u.forEach(s=>{S.value.push({label:s.nombre,value:s.id})})};ue(ie,(f,u)=>{f&&ae()});const ae=async()=>{ee.value=!1;try{const{data:f}=await Ee.get("/providers/true");p.value=[],f.forEach(u=>{p.value.push({label:u.razon_social,value:u.id,num_doc:u.numero_documento})}),I=p.value}catch(f){console.log(f)}},de=async()=>{let f=!1;if(r.value.proveedor_id=="")return O("warning","Debes elegir algun proveedor");if(r.value.numero_comprobante=="")return O("warning","Por favor ingresa el numero de comprobante");if(r.value.descripcion=="")return O("warning","Por favor ingresa una descripci\xF3n");if((b.roles[0]=="Super-Administrador"||b.roles[0]=="Administrador")&&E.value=="")return O("warning","Debes seleccionar una sucursal");if(B.value.length==0)return O("warning","Debes agregar algun producto..");B.value.forEach((u,s)=>{u.cantidad<=0&&(O("warning",`Agrega una cantidad cantidad al producto: ${u.nombre} de la fila: ${s+1}`),f=!0)}),!f&&(r.value.products=B.value,r.value={...r.value,...W.value,fecha_compra:it.formatDate(r.value.inputDate,"DD/MM/YYYY"),user_id:b.id},Ut.create({title:"\xBFDeseas agregar esta compra?",ok:{push:!0,color:"cyan-10",label:"Agregar"},cancel:{push:!0,color:"blue-grey-6",label:"Cancelar"}}).onOk(async()=>{try{Qe.show({message:"Cargando..."});let u={headers:{sucursal_id:E.value}};await Ee.post("/buys",r.value,u),Qe.hide(),O("positive","Compra realizada exitosamente"),V.push("/compras")}catch(u){O("warning",u.response.data.message[0]),Qe.hide()}}))};(b.roles[0]=="Super-Administrador"||b.roles[0]=="Administrador")&&te(b.company.id),ae();const le=(f="",u)=>{if(f==="")return u(()=>{p.value=I});u(()=>{const s=f.toLowerCase();p.value=p.value.filter(D=>D.num_doc.indexOf(s)>-1||D.label.toLowerCase().indexOf(s)>-1)})},x=()=>{if((b.roles[0]=="Super-Administrador"||b.roles[0]=="Administrador")&&E.value.length==0)return O("warning","Elige una sucursal primeramente");Y("compras")};return Bt(()=>{B.value=[]}),(f,u)=>(Q(),he(Et,null,[c("div",va,[c("div",ma,[c("div",{class:A(["col-xs-12 col-md-6",[f.$q.screen.width<1022?"q-pt-sm":""]])},[v($t,{class:A(["row q-mr-xs",[f.$q.screen.width<1022?"justify-center q-pt-sm":"justify-start "]])},{default:y(()=>[v(Pe,{label:"Inicio",icon:"home",to:"/"}),v(Pe,{label:"Compras",icon:"shopping_cart",to:"/compras"}),v(Pe,{label:"Agregar Compra",icon:"add_circle"})]),_:1},8,["class"])],2),c("div",{class:A(["col-xs-12 col-md-6",[f.$q.screen.width<1022?"text-center q-pt-sm":"text-right"]])},ha,2)])]),c("div",ga,[c("div",ya,[_a,v(st,{color:"orange",filled:"",modelValue:r.value.proveedor_id,"onUpdate:modelValue":u[1]||(u[1]=s=>r.value.proveedor_id=s),dense:"",options:p.value,"emit-value":"","map-options":"",onFilter:le,"use-input":"","input-debounce":"0"},{append:y(()=>[v($,{round:"",dense:"",flat:"",icon:"person_add",onClick:u[0]||(u[0]=Nt(s=>ee.value=!0,["stop","prevent"]))})]),"no-option":y(()=>[v(nt,null,{default:y(()=>[v(rt,{class:"text-grey"},{default:y(()=>[ye(" No hay resultados ")]),_:1})]),_:1})]),_:1},8,["modelValue","options"])]),c("div",{class:A(["col-xs-12 col-md-3",f.$q.screen.width<=1023?"q-pl-none":"q-mt-lg"])},[ba,v(N,{modelValue:r.value.numero_comprobante,"onUpdate:modelValue":u[2]||(u[2]=s=>r.value.numero_comprobante=s),"input-style":{textAlign:"center",fontSize:"16px"},filled:"",mask:"###-###-#########","fill-mask":"",dense:"",required:""},null,8,["modelValue"])],2),c("div",{class:A(["col-xs-12 col-md-4",f.$q.screen.width<=1023?"q-pl-none":"q-mt-lg"])},[pa,v(N,{filled:"",dense:"",modelValue:r.value.inputDate,"onUpdate:modelValue":u[4]||(u[4]=s=>r.value.inputDate=s),"input-style":{textAlign:"center"},mask:"date",rules:["date"]},{append:y(()=>[v(z,{name:"event",class:"cursor-pointer"},{default:y(()=>[v(Jt,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:y(()=>[v(ca,{modelValue:r.value.inputDate,"onUpdate:modelValue":u[3]||(u[3]=s=>r.value.inputDate=s)},{default:y(()=>[c("div",wa,[Rt(v($,{label:"Close",color:"primary",flat:""},null,512),[[la]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],2),_(b).roles[0]=="Super-Administrador"||_(b).roles[0]=="Administrador"?(Q(),he("div",{key:0,class:A(["col-xs-12 col-md-5 q-ml-none q-pl-none",f.$q.screen.width>=1023||"q-pt-none"])},[qa,v(st,{filled:"",modelValue:_(E),"onUpdate:modelValue":[u[5]||(u[5]=s=>ge(E)?E.value=s:null),u[6]||(u[6]=s=>B.value=[])],options:S.value,"emit-value":"","map-options":"",dense:""},{"no-option":y(()=>[v(nt,null,{default:y(()=>[v(rt,{class:"text-grey"},{default:y(()=>[ye(" No se encontro sucursal ")]),_:1})]),_:1})]),_:1},8,["modelValue","options"])],2)):R("",!0),_(b).roles[0]!=="Super-Administrador"&&_(b).roles[0]!=="Administrador"&&f.$q.screen.width>=1023?(Q(),he("div",xa,[Ca,v(N,{outlined:"","bottom-slots":"",loading:_(X),dense:"",modelValue:_(q),"onUpdate:modelValue":u[8]||(u[8]=s=>ge(q)?q.value=s:null),modelModifiers:{trim:!0},onKeyup:Ie(x,["enter"])},{append:y(()=>[_(q)!==""?(Q(),ke(z,{key:0,name:"close",onClick:u[7]||(u[7]=s=>q.value=""),class:"cursor-pointer"})):R("",!0),v(z,{name:"search"})]),_:1},8,["loading","modelValue","onKeyup"])])):R("",!0),c("div",{class:A(["col-xs-12 col-sm-12 col-md-7",f.$q.screen.width<=1023?"q-pl-none q-pt-sm":"q-pt-md"])},[Da,v(N,{modelValue:r.value.descripcion,"onUpdate:modelValue":u[9]||(u[9]=s=>r.value.descripcion=s),modelModifiers:{trim:!0},dense:"",filled:"",required:""},null,8,["modelValue"])],2),_(b).roles[0]=="Super-Administrador"||_(b).roles[0]=="Administrador"?(Q(),he("div",Va,[ka,v(N,{outlined:"","bottom-slots":"",loading:_(X),dense:"",modelValue:_(q),"onUpdate:modelValue":u[11]||(u[11]=s=>ge(q)?q.value=s:null),modelModifiers:{trim:!0},onKeyup:Ie(x,["enter"])},{append:y(()=>[_(q)!==""?(Q(),ke(z,{key:0,name:"close",onClick:u[10]||(u[10]=s=>q.value=""),class:"cursor-pointer"})):R("",!0),v(z,{name:"search"})]),_:1},8,["loading","modelValue","onKeyup"])])):R("",!0)]),_(b).roles[0]!=="Super-Administrador"&&_(b).roles[0]!=="Administrador"&&f.$q.screen.width<=1023?(Q(),he("div",{key:0,class:A(["row q-pt-lg q-mx-lg",[f.$q.screen.width<=1023?"justify-center":"justify-left q-ml-md"]])},[c("div",Ma,[$a,v(N,{outlined:"","bottom-slots":"",loading:_(X),dense:"",modelValue:_(q),"onUpdate:modelValue":u[13]||(u[13]=s=>ge(q)?q.value=s:null),modelModifiers:{trim:!0},onKeyup:Ie(x,["enter"])},{append:y(()=>[_(q)!==""?(Q(),ke(z,{key:0,name:"close",onClick:u[12]||(u[12]=s=>q.value=""),class:"cursor-pointer"})):R("",!0),v(z,{name:"search"})]),_:1},8,["loading","modelValue","onKeyup"])])],2)):R("",!0),v(aa,{onSubmit:de},{default:y(()=>[c("div",{class:A(["row q-mx-lg justify-center",f.$q.screen.xs?"q-mt-lg":"q-mt-md"])},[c("div",Sa,[v(ea,{rows:_(B),columns:_(P),"row-key":"name","hide-pagination":!0,"rows-per-page-options":[50],class:A([f.$q.dark.isActive?"":"my-sticky-header-table3"])},{"no-data":y(({})=>[c("div",Aa,[Ha,v(z,{size:"2em",name:"playlist_add"})])]),"body-cell-cantidad":y(s=>[v(_e,{props:s},{default:y(()=>[v(N,{"input-class":"resaltarTextoInput",dense:"",required:"",onChange:D=>_(pe)(s.row),min:"0",type:"number",style:{width:"100px"},modelValue:s.row.cantidad,"onUpdate:modelValue":D=>s.row.cantidad=D,modelModifiers:{trim:!0}},null,8,["onChange","modelValue","onUpdate:modelValue"])]),_:2},1032,["props"])]),"body-cell-iva":y(s=>[v(_e,{props:s},{default:y(()=>[v(zt,{modelValue:s.row.aplicaIva,"onUpdate:modelValue":D=>s.row.aplicaIva=D},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["props"])]),"body-cell-descuento":y(s=>[v(_e,{props:s},{default:y(()=>[v(N,{"input-class":"resaltarTextoInput",dense:"",required:"",min:"0",onChange:D=>_(pe)(s.row),type:"number",style:{width:"100px"},modelValue:s.row.descuento,"onUpdate:modelValue":D=>s.row.descuento=D,modelModifiers:{trim:!0}},null,8,["onChange","modelValue","onUpdate:modelValue"])]),_:2},1032,["props"])]),"body-cell-pvm":y(s=>[v(_e,{props:s},{default:y(()=>[ye(" $"+Me(s.row.precio_compra),1)]),_:2},1032,["props"])]),"body-cell-acciones":y(s=>[v(_e,{props:s},{default:y(()=>[v($,{round:"",color:"deep-orange",onClick:D=>_(Z)(s.row.id),icon:"close",size:"8px"},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","class"])]),c("div",Ya,[c("table",{class:A([f.$q.screen.xs?"q-pt-sm":"linearTablaDetalle"])},[c("tr",Ta,[Fa,c("td",Oa," $"+Me(_(W).subtotal),1)]),c("tr",ja,[Pa,c("td",Ia," $"+Me(_(W).iva),1)]),c("tr",Qa,[Ba,c("td",Ea," $"+Me(_(W).descuento),1)]),c("tr",Ua,[Na,c("td",Ra,[v(ta,{outline:"",class:"text-subtitle1 text-weight-bold",color:"secondary",label:`$${_(W).total}`},null,8,["label"])])])],2)]),c("div",{class:A(["col-12 flex q-mt-md q-pb-md",[f.$q.screen.width<600?"justify-center":"justify-between"]])},[f.$q.screen.width>600?(Q(),ke($,{key:0,icon:"arrow_back",onClick:u[14]||(u[14]=s=>f.$router.push("/compras")),outline:"",rounded:"",class:"q-mr-lg",color:f.$q.dark.isActive?"blue-grey-2":"blue-grey-10"},{default:y(()=>[ye(" \xA0 Regresar ")]),_:1},8,["color"])):R("",!0),v($,{type:"submit",icon:"save",outline:"",rounded:"",class:A(f.$q.screen.width<600?"q-px-xl":"q-px-lg"),style:{color:"#696cff"}},{default:y(()=>[ye(" \xA0 Guardar ")]),_:1},8,["class"])],2)],2)]),_:1}),v(ot,{modelValue:ee.value,"onUpdate:modelValue":u[15]||(u[15]=s=>ee.value=s)},{default:y(()=>[v(ra)]),_:1},8,["modelValue"]),v(ot,{modelValue:_(C),"onUpdate:modelValue":u[16]||(u[16]=s=>ge(C)?C.value=s:null)},{default:y(()=>[v(ua,{listProductos:_(we),onAgregarProduct:qe},null,8,["listProductos"])]),_:1},8,["modelValue"])],64))}});export{cl as default};
