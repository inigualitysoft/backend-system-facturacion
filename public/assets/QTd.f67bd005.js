import{m as c,n as u,p as n,s as r,z as v}from"./index.b06266f8.js";var i=c({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(t,{slots:e}){const l=v(),a=u(()=>"q-td"+(t.autoWidth===!0?" q-table--col-auto-width":"")+(t.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(t.props===void 0)return n("td",{class:a.value},r(e.default));const d=l.vnode.key,o=(t.props.colsMap!==void 0?t.props.colsMap[d]:null)||t.props.col;if(o===void 0)return;const{row:s}=t.props;return n("td",{class:a.value+o.__tdClass(s),style:o.__tdStyle(s)},r(e.default))}}});export{i as Q};
