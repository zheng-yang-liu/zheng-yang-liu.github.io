import{_ as d,r as c,b as r,c as s,i as e,w as o,p as _,e as f,g as p,d as y,j as i}from"./index-BBzx9Igv.js";const h={},v=t=>(_("data-v-b8bf2417"),t=t(),f(),t),w=v(()=>p("p",null,"显示更多",-1));function g(t,a){const n=c("xy-tooltip");return r(),s("div",null,[e(n,{content:"这是一段被隐藏的文字"},{default:o(()=>[w]),_:1})])}const S=d(h,[["render",g],["__scopeId","data-v-b8bf2417"]]),I=`<template>\r
  <div>\r
    <xy-tooltip content="这是一段被隐藏的文字">\r
      <p>显示更多</p>\r
    </xy-tooltip>\r
  </div>\r
</template>\r
<style scoped>\r
p{\r
  cursor: pointer;\r
  color: #1890ff;\r
}\r
</style>`,$={},C=t=>(_("data-v-80e2e9f5"),t=t(),f(),t),k=C(()=>p("p",null,"显示更多",-1));function T(t,a){const n=c("xy-tooltip");return r(),s("div",null,[e(n,{content:"这是一段被隐藏的文字",hoverShow:!1},{default:o(()=>[k]),_:1})])}const A=d($,[["render",T],["__scopeId","data-v-80e2e9f5"]]),U=`<template>\r
  <div>\r
    <xy-tooltip\r
      content="这是一段被隐藏的文字"\r
      :hoverShow="false"\r
    >\r
      <p>显示更多</p>\r
    </xy-tooltip>\r
  </div>\r
</template>\r
<style scoped>\r
p{\r
  cursor: pointer;\r
  color: #1890ff;\r
}\r
</style>`,B={},m=t=>(_("data-v-1a4b0092"),t=t(),f(),t),D=m(()=>p("p",null,"显示更多",-1)),N=m(()=>p("div",{class:"prompt"},"这是一段被隐藏的文字",-1));function O(t,a){const n=c("xy-tooltip");return r(),s("div",null,[e(n,null,{prompt:o(()=>[N]),default:o(()=>[D]),_:1})])}const V=d(B,[["render",O],["__scopeId","data-v-1a4b0092"]]),j=`<template>\r
  <div>\r
    <xy-tooltip>\r
      <p>显示更多</p>\r
      <template #prompt>\r
        <div class="prompt">这是一段被隐藏的文字</div>\r
      </template>\r
    </xy-tooltip>\r
  </div>\r
</template>\r
<style scoped>\r
p{\r
  cursor: pointer;\r
  color: #1890ff;\r
}\r
.prompt{\r
  background-color: #fae7e7;\r
  padding: 10px;\r
  border-radius: 5px;\r
  box-shadow: 0 0 10px rgba(234, 156, 156, 0.1);\r
}\r
</style>`,X=y({__name:"index",setup(t){const a=[{title:"基础用法",id:"3c2271cdea6fac38a0f15c1603bbd334",slot:"basicUsage"},{title:"点击显示",id:"bf548c6b2edbdbcb2697cf453dd6cf14",slot:"clickShow"},{title:"显示内容自定义",id:"b4d6cfa85388515191f0fb06da818254",slot:"customContent"},{title:"API",id:"0cd0f623019d031beb24f9098c0c96b6",children:[{title:"Attributes",id:"4ea3e7bd8154aa2b540a378decb97741",slot:"Attributes"},{title:"Slots",id:"4b99479b4f3cbf78f42dde350b846055",slot:"slots"}]}],n=[{name:"content",explain:"显示的文字",type:"string"},{name:"hoverShow",explain:"悬浮显示",type:"boolean",default:"true"},{name:"inTime",explain:"显示时间",type:"number",default:"0.3"},{name:"outTime",explain:"隐藏时间",type:"number",default:"0.3"},{name:"topOffset",explain:"顶部偏移量",type:"number",default:"10"},{name:"XOffset",explain:"左侧偏移量",type:"number",default:"0"},{name:"position",explain:"位置",type:[{value:"positionType",complexType:"'top' | 'right' | 'bottom' | 'left'"}],default:"'bottom'"}],b=[{name:"prompt",explain:"自定义显示的内容",type:"slot"}];return(E,M)=>{const l=c("xy-effect-preview"),u=c("xy-attribute-table"),x=c("xy-showcase-page");return r(),s("div",null,[e(x,{introduction:"用于显示某些隐藏的内容或显示hover时的提示信息","page-title":"文字提示",catalogue:a,screenMaxCatalogue:!1},{basicUsage:o(()=>[e(l,{code:i(I)},{default:o(()=>[e(S)]),_:1},8,["code"])]),clickShow:o(()=>[e(l,{code:i(U)},{default:o(()=>[e(A)]),_:1},8,["code"])]),customContent:o(()=>[e(l,{code:i(j)},{default:o(()=>[e(V)]),_:1},8,["code"])]),Attributes:o(()=>[e(u,{data:n})]),slots:o(()=>[e(u,{data:b,"columns-no-default":!0})]),_:1})])}}});export{X as default};
