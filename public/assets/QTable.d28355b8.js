import{m as A,p as r,s as p,y as bt,i as Ve,z as Q,n as c,I as me,J as Se,r as N,v as M,b2 as De,C as je,M as mt,L as St,x as Ee,E as yt,F as Be,N as Ne,a$ as ht,b0 as _t,bd as wt,be as Oe,bf as be,bg as Fe,bh as qt,_ as Ae,bi as Ct,bj as ge,bk as H,h as ee,ah as Pt}from"./index.f32ba181.js";import{Q as kt}from"./QList.134e73f2.js";import{u as Rt,a as xt,c as Qe,Q as Tt}from"./QSelect.cb1a9ee3.js";var Bt=A({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:l,emit:n}){const d=Q(),{proxy:{$q:o}}=d,f=s=>{n("click",s)};return()=>{if(e.props===void 0)return r("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:f},p(l.default));let s,u;const v=d.vnode.key;if(v){if(s=e.props.colsMap[v],s===void 0)return}else s=e.props.col;if(s.sortable===!0){const a=s.align==="right"?"unshift":"push";u=bt(l.default,[]),u[a](r(Ve,{class:s.__iconClass,name:o.iconSet.table.arrowUp}))}else u=p(l.default);const S={class:s.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:s.headerStyle,onClick:a=>{s.sortable===!0&&e.props.sort(s),f(a)}};return r("th",S,u)}}}),ol=A({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:l}){const n=Q(),d=c(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return r("td",{class:d.value},p(l.default));const o=n.vnode.key,f=(e.props.colsMap!==void 0?e.props.colsMap[o]:null)||e.props.col;if(f===void 0)return;const{row:s}=e.props;return r("td",{class:d.value+f.__tdClass(s),style:f.__tdStyle(s)},p(l.default))}}});const Ot=["horizontal","vertical","cell","none"];var Ft=A({name:"QMarkupTable",props:{...me,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>Ot.includes(e)}},setup(e,{slots:l}){const n=Q(),d=Se(e,n.proxy.$q),o=c(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(d.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>r("div",{class:o.value},[r("table",{class:"q-table"},p(l.default))])}});function He(e,l){return r("div",e,[r("table",{class:"q-table"},l)])}const $t={list:kt,table:Ft},Lt=["list","table","__qtable"];var Mt=A({name:"QVirtualScroll",props:{...Rt,type:{type:String,default:"list",validator:e=>Lt.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:l,attrs:n}){let d;const o=N(null),f=c(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:s,localResetVirtualScroll:u,padVirtualScroll:v,onVirtualScrollEvt:S}=xt({virtualScrollLength:f,getVirtualScrollTarget:C,getVirtualScrollEl:q}),a=c(()=>{if(f.value===0)return[];const O=(F,R)=>({index:s.value.from+R,item:F});return e.itemsFn===void 0?e.items.slice(s.value.from,s.value.to).map(O):e.itemsFn(s.value.from,s.value.to-s.value.from).map(O)}),m=c(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),w=c(()=>e.scrollTarget!==void 0?{}:{tabindex:0});M(f,()=>{u()}),M(()=>e.scrollTarget,()=>{h(),_()});function q(){return o.value.$el||o.value}function C(){return d}function _(){d=yt(q(),e.scrollTarget),d.addEventListener("scroll",S,Be.passive)}function h(){d!==void 0&&(d.removeEventListener("scroll",S,Be.passive),d=void 0)}function B(){let O=v(e.type==="list"?"div":"tbody",a.value.map(l.default));return l.before!==void 0&&(O=l.before().concat(O)),Ne(l.after,O)}return De(()=>{u()}),je(()=>{_()}),mt(()=>{_()}),St(()=>{h()}),Ee(()=>{h()}),()=>{if(l.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?He({ref:o,class:"q-table__middle "+m.value},B()):r($t[e.type],{...n,ref:o,class:[n.class,m.value],...w.value},B)}}});const Vt={xs:2,sm:4,md:6,lg:10,xl:14};function $e(e,l,n){return{transform:l===!0?`translateX(${n.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var Dt=A({name:"QLinearProgress",props:{...me,...ht,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:l}){const{proxy:n}=Q(),d=Se(e,n.$q),o=_t(e,Vt),f=c(()=>e.indeterminate===!0||e.query===!0),s=c(()=>e.reverse!==e.query),u=c(()=>({...o.value!==null?o.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),v=c(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),S=c(()=>$e(e.buffer!==void 0?e.buffer:1,s.value,n.$q)),a=c(()=>`with${e.instantFeedback===!0?"out":""}-transition`),m=c(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${a.value} q-linear-progress__track--${d.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),w=c(()=>$e(f.value===!0?1:e.value,s.value,n.$q)),q=c(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${a.value} q-linear-progress__model--${f.value===!0?"in":""}determinate`),C=c(()=>({width:`${e.value*100}%`})),_=c(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${a.value}`);return()=>{const h=[r("div",{class:m.value,style:S.value}),r("div",{class:q.value,style:w.value})];return e.stripe===!0&&f.value===!1&&h.push(r("div",{class:_.value,style:C.value})),r("div",{class:v.value,style:u.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},Ne(l.default,h))}}});let z=0;const jt={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Et=["update:fullscreen","fullscreen"];function Nt(){const e=Q(),{props:l,emit:n,proxy:d}=e;let o,f,s;const u=N(!1);wt(e)===!0&&M(()=>d.$route.fullPath,()=>{l.noRouteFullscreenExit!==!0&&a()}),M(()=>l.fullscreen,m=>{u.value!==m&&v()}),M(u,m=>{n("update:fullscreen",m),n("fullscreen",m)});function v(){u.value===!0?a():S()}function S(){u.value!==!0&&(u.value=!0,s=d.$el.parentNode,s.replaceChild(f,d.$el),document.body.appendChild(d.$el),z++,z===1&&document.body.classList.add("q-body--fullscreen-mixin"),o={handler:a},Oe.add(o))}function a(){u.value===!0&&(o!==void 0&&(Oe.remove(o),o=void 0),s.replaceChild(d.$el,f),u.value=!1,z=Math.max(0,z-1),z===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),d.$el.scrollIntoView!==void 0&&setTimeout(()=>{d.$el.scrollIntoView()})))}return De(()=>{f=document.createElement("span")}),je(()=>{l.fullscreen===!0&&S()}),Ee(a),Object.assign(d,{toggleFullscreen:v,setFullscreen:S,exitFullscreen:a}),{inFullscreen:u,toggleFullscreen:v}}function At(e,l){return new Date(e)-new Date(l)}const Qt={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function Ht(e,l,n,d){const o=c(()=>{const{sortBy:u}=l.value;return u&&n.value.find(v=>v.name===u)||null}),f=c(()=>e.sortMethod!==void 0?e.sortMethod:(u,v,S)=>{const a=n.value.find(q=>q.name===v);if(a===void 0||a.field===void 0)return u;const m=S===!0?-1:1,w=typeof a.field=="function"?q=>a.field(q):q=>q[a.field];return u.sort((q,C)=>{let _=w(q),h=w(C);return _==null?-1*m:h==null?1*m:a.sort!==void 0?a.sort(_,h,q,C)*m:be(_)===!0&&be(h)===!0?(_-h)*m:Fe(_)===!0&&Fe(h)===!0?At(_,h)*m:typeof _=="boolean"&&typeof h=="boolean"?(_-h)*m:([_,h]=[_,h].map(B=>(B+"").toLocaleString().toLowerCase()),_<h?-1*m:_===h?0:m)})});function s(u){let v=e.columnSortOrder;if(qt(u)===!0)u.sortOrder&&(v=u.sortOrder),u=u.name;else{const m=n.value.find(w=>w.name===u);m!==void 0&&m.sortOrder&&(v=m.sortOrder)}let{sortBy:S,descending:a}=l.value;S!==u?(S=u,a=v==="da"):e.binaryStateSort===!0?a=!a:a===!0?v==="ad"?S=null:a=!1:v==="ad"?a=!0:S=null,d({sortBy:S,descending:a,page:1})}return{columnToSort:o,computedSortMethod:f,sort:s}}const zt={filter:[String,Object],filterMethod:Function};function pt(e,l){const n=c(()=>e.filterMethod!==void 0?e.filterMethod:(d,o,f,s)=>{const u=o?o.toLowerCase():"";return d.filter(v=>f.some(S=>{const a=s(S,v)+"";return(a==="undefined"||a==="null"?"":a.toLowerCase()).indexOf(u)!==-1}))});return M(()=>e.filter,()=>{Ae(()=>{l({page:1},!0)})},{deep:!0}),{computedFilterMethod:n}}function Ut(e,l){for(const n in l)if(l[n]!==e[n])return!1;return!0}function Le(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const It={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function Wt(e,l){const{props:n,emit:d}=e,o=N(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:n.rowsPerPageOptions.length!==0?n.rowsPerPageOptions[0]:5},n.pagination)),f=c(()=>{const a=n["onUpdate:pagination"]!==void 0?{...o.value,...n.pagination}:o.value;return Le(a)}),s=c(()=>f.value.rowsNumber!==void 0);function u(a){v({pagination:a,filter:n.filter})}function v(a={}){Ae(()=>{d("request",{pagination:a.pagination||f.value,filter:a.filter||n.filter,getCellValue:l})})}function S(a,m){const w=Le({...f.value,...a});if(Ut(f.value,w)===!0){s.value===!0&&m===!0&&u(w);return}if(s.value===!0){u(w);return}n.pagination!==void 0&&n["onUpdate:pagination"]!==void 0?d("update:pagination",w):o.value=w}return{innerPagination:o,computedPagination:f,isServerSide:s,requestServerInteraction:v,setPagination:S}}function Kt(e,l,n,d,o,f){const{props:s,emit:u,proxy:{$q:v}}=e,S=c(()=>d.value===!0?n.value.rowsNumber||0:f.value),a=c(()=>{const{page:R,rowsPerPage:x}=n.value;return(R-1)*x}),m=c(()=>{const{page:R,rowsPerPage:x}=n.value;return R*x}),w=c(()=>n.value.page===1),q=c(()=>n.value.rowsPerPage===0?1:Math.max(1,Math.ceil(S.value/n.value.rowsPerPage))),C=c(()=>m.value===0?!0:n.value.page>=q.value),_=c(()=>(s.rowsPerPageOptions.includes(l.value.rowsPerPage)?s.rowsPerPageOptions:[l.value.rowsPerPage].concat(s.rowsPerPageOptions)).map(x=>({label:x===0?v.lang.table.allRows:""+x,value:x})));M(q,(R,x)=>{if(R===x)return;const U=n.value.page;R&&!U?o({page:1}):R<U&&o({page:R})});function h(){o({page:1})}function B(){const{page:R}=n.value;R>1&&o({page:R-1})}function O(){const{page:R,rowsPerPage:x}=n.value;m.value>0&&R*x<S.value&&o({page:R+1})}function F(){o({page:q.value})}return s["onUpdate:pagination"]!==void 0&&u("update:pagination",{...n.value}),{firstRowIndex:a,lastRowIndex:m,isFirstPage:w,isLastPage:C,pagesNumber:q,computedRowsPerPageOptions:_,computedRowsNumber:S,firstPage:h,prevPage:B,nextPage:O,lastPage:F}}const Gt={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},Jt=["update:selected","selection"];function Xt(e,l,n,d){const o=c(()=>{const C={};return e.selected.map(d.value).forEach(_=>{C[_]=!0}),C}),f=c(()=>e.selection!=="none"),s=c(()=>e.selection==="single"),u=c(()=>e.selection==="multiple"),v=c(()=>n.value.length!==0&&n.value.every(C=>o.value[d.value(C)]===!0)),S=c(()=>v.value!==!0&&n.value.some(C=>o.value[d.value(C)]===!0)),a=c(()=>e.selected.length);function m(C){return o.value[C]===!0}function w(){l("update:selected",[])}function q(C,_,h,B){l("selection",{rows:_,added:h,keys:C,evt:B});const O=s.value===!0?h===!0?_:[]:h===!0?e.selected.concat(_):e.selected.filter(F=>C.includes(d.value(F))===!1);l("update:selected",O)}return{hasSelectionMode:f,singleSelection:s,multipleSelection:u,allRowsSelected:v,someRowsSelected:S,rowsSelectedNumber:a,isRowSelected:m,clearSelection:w,updateSelection:q}}function Me(e){return Array.isArray(e)?e.slice():[]}const Yt={expanded:Array},Zt=["update:expanded"];function el(e,l){const n=N(Me(e.expanded));M(()=>e.expanded,s=>{n.value=Me(s)});function d(s){return n.value.includes(s)}function o(s){e.expanded!==void 0?l("update:expanded",s):n.value=s}function f(s,u){const v=n.value.slice(),S=v.indexOf(s);u===!0?S===-1&&(v.push(s),o(v)):S!==-1&&(v.splice(S,1),o(v))}return{isRowExpanded:d,setExpanded:o,updateExpanded:f}}const tl={visibleColumns:Array};function ll(e,l,n){const d=c(()=>{if(e.columns!==void 0)return e.columns;const u=e.rows[0];return u!==void 0?Object.keys(u).map(v=>({name:v,label:v.toUpperCase(),field:v,align:be(u[v])?"right":"left",sortable:!0})):[]}),o=c(()=>{const{sortBy:u,descending:v}=l.value;return(e.visibleColumns!==void 0?d.value.filter(a=>a.required===!0||e.visibleColumns.includes(a.name)===!0):d.value).map(a=>{const m=a.align||"right",w=`text-${m}`;return{...a,align:m,__iconClass:`q-table__sort-icon q-table__sort-icon--${m}`,__thClass:w+(a.headerClasses!==void 0?" "+a.headerClasses:"")+(a.sortable===!0?" sortable":"")+(a.name===u?` sorted ${v===!0?"sort-desc":""}`:""),__tdStyle:a.style!==void 0?typeof a.style!="function"?()=>a.style:a.style:()=>null,__tdClass:a.classes!==void 0?typeof a.classes!="function"?()=>w+" "+a.classes:q=>w+" "+a.classes(q):()=>w}})}),f=c(()=>{const u={};return o.value.forEach(v=>{u[v.name]=v}),u}),s=c(()=>e.tableColspan!==void 0?e.tableColspan:o.value.length+(n.value===!0?1:0));return{colList:d,computedCols:o,computedColsMap:f,computedColspan:s}}const te="q-table__bottom row items-center",ze={};Qe.forEach(e=>{ze[e]={}});var il=A({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...ze,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...me,...jt,...tl,...zt,...It,...Yt,...Gt,...Qt},emits:["request","virtualScroll",...Et,...Zt,...Jt],setup(e,{slots:l,emit:n}){const d=Q(),{proxy:{$q:o}}=d,f=Se(e,o),{inFullscreen:s,toggleFullscreen:u}=Nt(),v=c(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),S=N(null),a=N(null),m=c(()=>e.grid!==!0&&e.virtualScroll===!0),w=c(()=>" q-table__card"+(f.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),q=c(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":w.value)+(f.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(s.value===!0?" fullscreen scroll":"")),C=c(()=>q.value+(e.loading===!0?" q-table--loading":""));M(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+q.value,()=>{m.value===!0&&a.value!==null&&a.value.reset()});const{innerPagination:_,computedPagination:h,isServerSide:B,requestServerInteraction:O,setPagination:F}=Wt(d,j),{computedFilterMethod:R}=pt(e,F),{isRowExpanded:x,setExpanded:U,updateExpanded:pe}=el(e,n),le=c(()=>{let t=e.rows;if(B.value===!0||t.length===0)return t;const{sortBy:i,descending:g}=h.value;return e.filter&&(t=R.value(t,e.filter,$.value,j)),Ge.value!==null&&(t=Je.value(e.rows===t?t.slice():t,i,g)),t}),ye=c(()=>le.value.length),V=c(()=>{let t=le.value;if(B.value===!0)return t;const{rowsPerPage:i}=h.value;return i!==0&&(W.value===0&&e.rows!==t?t.length>K.value&&(t=t.slice(0,K.value)):t=t.slice(W.value,K.value)),t}),{hasSelectionMode:D,singleSelection:Ue,multipleSelection:he,allRowsSelected:Ie,someRowsSelected:_e,rowsSelectedNumber:ae,isRowSelected:ne,clearSelection:We,updateSelection:I}=Xt(e,n,V,v),{colList:Ke,computedCols:$,computedColsMap:we,computedColspan:qe}=ll(e,h,D),{columnToSort:Ge,computedSortMethod:Je,sort:re}=Ht(e,h,Ke,F),{firstRowIndex:W,lastRowIndex:K,isFirstPage:oe,isLastPage:ie,pagesNumber:G,computedRowsPerPageOptions:Xe,computedRowsNumber:J,firstPage:se,prevPage:ue,nextPage:ce,lastPage:de}=Kt(d,_,h,B,F,ye),Ye=c(()=>V.value.length===0),Ze=c(()=>{const t={};return Qe.forEach(i=>{t[i]=e[i]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function et(){m.value===!0&&a.value.reset()}function tt(){if(e.grid===!0)return ft();const t=e.hideHeader!==!0?xe:null;if(m.value===!0){const g=l["top-row"],b=l["bottom-row"],y={default:k=>Pe(k.item,l.body,k.index)};if(g!==void 0){const k=r("tbody",g({cols:$.value}));y.before=t===null?()=>k:()=>[t()].concat(k)}else t!==null&&(y.before=t);return b!==void 0&&(y.after=()=>r("tbody",b({cols:$.value}))),r(Mt,{ref:a,class:e.tableClass,style:e.tableStyle,...Ze.value,scrollTarget:e.virtualScrollTarget,items:V.value,type:"__qtable",tableColspan:qe.value,onVirtualScroll:at},y)}const i=[nt()];return t!==null&&i.unshift(t()),He({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},i)}function lt(t,i){if(a.value!==null){a.value.scrollTo(t,i);return}t=parseInt(t,10);const g=S.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(g!==null){const b=S.value.querySelector(".q-table__middle.scroll"),y=g.offsetTop-e.virtualScrollStickySizeStart,k=y<b.scrollTop?"decrease":"increase";b.scrollTop=y,n("virtualScroll",{index:t,from:0,to:_.value.rowsPerPage-1,direction:k})}}function at(t){n("virtualScroll",t)}function Ce(){return[r(Dt,{class:"q-table__linear-progress",color:e.color,dark:f.value,indeterminate:!0,trackColor:"transparent"})]}function Pe(t,i,g){const b=v.value(t),y=ne(b);if(i!==void 0)return i(ke({key:b,row:t,pageIndex:g,__trClass:y?"selected":""}));const k=l["body-cell"],P=$.value.map(T=>{const Y=l[`body-cell-${T.name}`],Z=Y!==void 0?Y:k;return Z!==void 0?Z(rt({key:b,row:t,pageIndex:g,col:T})):r("td",{class:T.__tdClass(t),style:T.__tdStyle(t)},j(T,t))});if(D.value===!0){const T=l["body-selection"],Y=T!==void 0?T(ot({key:b,row:t,pageIndex:g})):[r(ge,{modelValue:y,color:e.color,dark:f.value,dense:e.dense,"onUpdate:modelValue":(Z,gt)=>{I([b],[t],Z,gt)}})];P.unshift(r("td",{class:"q-table--col-auto-width"},Y))}const L={key:b,class:{selected:y}};return e.onRowClick!==void 0&&(L.class["cursor-pointer"]=!0,L.onClick=T=>{n("RowClick",T,t,g)}),e.onRowDblclick!==void 0&&(L.class["cursor-pointer"]=!0,L.onDblclick=T=>{n("RowDblclick",T,t,g)}),e.onRowContextmenu!==void 0&&(L.class["cursor-pointer"]=!0,L.onContextmenu=T=>{n("RowContextmenu",T,t,g)}),r("tr",L,P)}function nt(){const t=l.body,i=l["top-row"],g=l["bottom-row"];let b=V.value.map((y,k)=>Pe(y,t,k));return i!==void 0&&(b=i({cols:$.value}).concat(b)),g!==void 0&&(b=b.concat(g({cols:$.value}))),r("tbody",b)}function ke(t){return ve(t),t.cols=t.cols.map(i=>H({...i},"value",()=>j(i,t.row))),t}function rt(t){return ve(t),H(t,"value",()=>j(t.col,t.row)),t}function ot(t){return ve(t),t}function ve(t){Object.assign(t,{cols:$.value,colsMap:we.value,sort:re,rowIndex:W.value+t.pageIndex,color:e.color,dark:f.value,dense:e.dense}),D.value===!0&&H(t,"selected",()=>ne(t.key),(i,g)=>{I([t.key],[t.row],i,g)}),H(t,"expand",()=>x(t.key),i=>{pe(t.key,i)})}function j(t,i){const g=typeof t.field=="function"?t.field(i):i[t.field];return t.format!==void 0?t.format(g,i):g}const E=c(()=>({pagination:h.value,pagesNumber:G.value,isFirstPage:oe.value,isLastPage:ie.value,firstPage:se,prevPage:ue,nextPage:ce,lastPage:de,inFullscreen:s.value,toggleFullscreen:u}));function it(){const t=l.top,i=l["top-left"],g=l["top-right"],b=l["top-selection"],y=D.value===!0&&b!==void 0&&ae.value>0,k="q-table__top relative-position row items-center";if(t!==void 0)return r("div",{class:k},[t(E.value)]);let P;if(y===!0?P=b(E.value).slice():(P=[],i!==void 0?P.push(r("div",{class:"q-table__control"},[i(E.value)])):e.title&&P.push(r("div",{class:"q-table__control"},[r("div",{class:["q-table__title",e.titleClass]},e.title)]))),g!==void 0&&(P.push(r("div",{class:"q-table__separator col"})),P.push(r("div",{class:"q-table__control"},[g(E.value)]))),P.length!==0)return r("div",{class:k},P)}const Re=c(()=>_e.value===!0?null:Ie.value);function xe(){const t=st();return e.loading===!0&&l.loading===void 0&&t.push(r("tr",{class:"q-table__progress"},[r("th",{class:"relative-position",colspan:qe.value},Ce())])),r("thead",t)}function st(){const t=l.header,i=l["header-cell"];if(t!==void 0)return t(fe({header:!0})).slice();const g=$.value.map(b=>{const y=l[`header-cell-${b.name}`],k=y!==void 0?y:i,P=fe({col:b});return k!==void 0?k(P):r(Bt,{key:b.name,props:P},()=>b.label)});if(Ue.value===!0&&e.grid!==!0)g.unshift(r("th",{class:"q-table--col-auto-width"}," "));else if(he.value===!0){const b=l["header-selection"],y=b!==void 0?b(fe({})):[r(ge,{color:e.color,modelValue:Re.value,dark:f.value,dense:e.dense,"onUpdate:modelValue":Te})];g.unshift(r("th",{class:"q-table--col-auto-width"},y))}return[r("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},g)]}function fe(t){return Object.assign(t,{cols:$.value,sort:re,colsMap:we.value,color:e.color,dark:f.value,dense:e.dense}),he.value===!0&&H(t,"selected",()=>Re.value,Te),t}function Te(t){_e.value===!0&&(t=!1),I(V.value.map(v.value),V.value,t)}const X=c(()=>{const t=[e.iconFirstPage||o.iconSet.table.firstPage,e.iconPrevPage||o.iconSet.table.prevPage,e.iconNextPage||o.iconSet.table.nextPage,e.iconLastPage||o.iconSet.table.lastPage];return o.lang.rtl===!0?t.reverse():t});function ut(){if(e.hideBottom===!0)return;if(Ye.value===!0){if(e.hideNoData===!0)return;const g=e.loading===!0?e.loadingLabel||o.lang.table.loading:e.filter?e.noResultsLabel||o.lang.table.noResults:e.noDataLabel||o.lang.table.noData,b=l["no-data"],y=b!==void 0?[b({message:g,icon:o.iconSet.table.warning,filter:e.filter})]:[r(Ve,{class:"q-table__bottom-nodata-icon",name:o.iconSet.table.warning}),g];return r("div",{class:te+" q-table__bottom--nodata"},y)}const t=l.bottom;if(t!==void 0)return r("div",{class:te},[t(E.value)]);const i=e.hideSelectedBanner!==!0&&D.value===!0&&ae.value>0?[r("div",{class:"q-table__control"},[r("div",[(e.selectedRowsLabel||o.lang.table.selectedRecords)(ae.value)])])]:[];if(e.hidePagination!==!0)return r("div",{class:te+" justify-end"},dt(i));if(i.length!==0)return r("div",{class:te},i)}function ct(t){F({page:1,rowsPerPage:t.value})}function dt(t){let i;const{rowsPerPage:g}=h.value,b=e.paginationLabel||o.lang.table.pagination,y=l.pagination,k=e.rowsPerPageOptions.length>1;if(t.push(r("div",{class:"q-table__separator col"})),k===!0&&t.push(r("div",{class:"q-table__control"},[r("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||o.lang.table.recordsPerPage]),r(Tt,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:g,options:Xe.value,displayValue:g===0?o.lang.table.allRows:g,dark:f.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":ct})])),y!==void 0)i=y(E.value);else if(i=[r("span",g!==0?{class:"q-table__bottom-item"}:{},[g?b(W.value+1,Math.min(K.value,J.value),J.value):b(1,ye.value,J.value)])],g!==0&&G.value>1){const P={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(P.size="sm"),G.value>2&&i.push(r(ee,{key:"pgFirst",...P,icon:X.value[0],disable:oe.value,onClick:se})),i.push(r(ee,{key:"pgPrev",...P,icon:X.value[1],disable:oe.value,onClick:ue}),r(ee,{key:"pgNext",...P,icon:X.value[2],disable:ie.value,onClick:ce})),G.value>2&&i.push(r(ee,{key:"pgLast",...P,icon:X.value[3],disable:ie.value,onClick:de}))}return t.push(r("div",{class:"q-table__control"},i)),t}function vt(){const t=e.gridHeader===!0?[r("table",{class:"q-table"},[xe()])]:e.loading===!0&&l.loading===void 0?Ce():void 0;return r("div",{class:"q-table__middle"},t)}function ft(){const t=l.item!==void 0?l.item:i=>{const g=i.cols.map(y=>r("div",{class:"q-table__grid-item-row"},[r("div",{class:"q-table__grid-item-title"},[y.label]),r("div",{class:"q-table__grid-item-value"},[y.value])]));if(D.value===!0){const y=l["body-selection"],k=y!==void 0?y(i):[r(ge,{modelValue:i.selected,color:e.color,dark:f.value,dense:e.dense,"onUpdate:modelValue":(P,L)=>{I([i.key],[i.row],P,L)}})];g.unshift(r("div",{class:"q-table__grid-item-row"},k),r(Pt,{dark:f.value}))}const b={class:["q-table__grid-item-card"+w.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(b.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(b.onClick=y=>{n("RowClick",y,i.row,i.pageIndex)}),e.onRowDblclick!==void 0&&(b.onDblclick=y=>{n("RowDblclick",y,i.row,i.pageIndex)})),r("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(i.selected===!0?" q-table__grid-item--selected":"")},[r("div",b,g)])};return r("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},V.value.map((i,g)=>t(ke({key:v.value(i),row:i,pageIndex:g}))))}return Object.assign(d.proxy,{requestServerInteraction:O,setPagination:F,firstPage:se,prevPage:ue,nextPage:ce,lastPage:de,isRowSelected:ne,clearSelection:We,isRowExpanded:x,setExpanded:U,sort:re,resetVirtualScroll:et,scrollTo:lt,getCellValue:j}),Ct(d.proxy,{filteredSortedRows:()=>le.value,computedRows:()=>V.value,computedRowsNumber:()=>J.value}),()=>{const t=[it()],i={ref:S,class:C.value};return e.grid===!0?t.push(vt()):Object.assign(i,{class:[i.class,e.cardClass],style:e.cardStyle}),t.push(tt(),ut()),e.loading===!0&&l.loading!==void 0&&t.push(l.loading()),r("div",i,t)}}});export{il as Q,ol as a,Bt as b,Dt as c};
