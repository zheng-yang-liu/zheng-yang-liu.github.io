import{_ as d,r,o as l,b as c,e,w as n,g as a,d as m,u as i}from"./index-DQzoCrCu.js";const b={};function x(s,t){const o=r("xy-tooltip");return l(),c("div",null,[e(o,{content:"这是一段被隐藏的文字"},{default:n(()=>t[0]||(t[0]=[a("p",null,"显示更多",-1)])),_:1})])}const y=d(b,[["render",x],["__scopeId","data-v-203b4558"]]),v=`<template>\r
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
</style>`,g={};function w(s,t){const o=r("xy-tooltip");return l(),c("div",null,[e(o,{content:"这是一段被隐藏的文字",hoverShow:!1},{default:n(()=>t[0]||(t[0]=[a("p",null,"显示更多",-1)])),_:1})])}const h=d(g,[["render",w],["__scopeId","data-v-3cd7431f"]]),C=`<template>\r
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
</style>`,S={};function k(s,t){const o=r("xy-tooltip");return l(),c("div",null,[e(o,null,{prompt:n(()=>t[0]||(t[0]=[a("div",{class:"prompt"},"这是一段被隐藏的文字",-1)])),default:n(()=>[t[1]||(t[1]=a("p",null,"显示更多",-1))]),_:1})])}const T=d(S,[["render",k],["__scopeId","data-v-ea1e6108"]]),$=`<template>\r
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
</style>`,B=m({__name:"index",setup(s){const t=[{title:"基础用法",id:"3c2271cdea6fac38a0f15c1603bbd334",slot:"basicUsage"},{title:"点击显示",id:"bf548c6b2edbdbcb2697cf453dd6cf14",slot:"clickShow"},{title:"显示内容自定义",id:"b4d6cfa85388515191f0fb06da818254",slot:"customContent"},{title:"API",id:"0cd0f623019d031beb24f9098c0c96b6",children:[{title:"Attributes",id:"4ea3e7bd8154aa2b540a378decb97741",slot:"Attributes"},{title:"Slots",id:"4b99479b4f3cbf78f42dde350b846055",slot:"slots"}]}],o=[{name:"content",explain:"显示的文字",type:"string"},{name:"hoverShow",explain:"悬浮显示",type:"boolean",default:"true"},{name:"inTime",explain:"显示时间",type:"number",default:"0.3"},{name:"outTime",explain:"隐藏时间",type:"number",default:"0.3"},{name:"topOffset",explain:"顶部偏移量",type:"number",default:"10"},{name:"XOffset",explain:"左侧偏移量",type:"number",default:"0"},{name:"position",explain:"位置",type:[{value:"positionType",complexType:"'top' | 'right' | 'bottom' | 'left'"}],default:"'bottom'"}],u=[{name:"prompt",explain:"自定义显示的内容",type:"slot"}];return(A,I)=>{const p=r("xy-effect-preview"),f=r("xy-attribute-table"),_=r("xy-showcase-page");return l(),c("div",null,[e(_,{introduction:"用于显示某些隐藏的内容或显示hover时的提示信息","page-title":"文字提示",catalogue:t,screenMaxCatalogue:!1},{basicUsage:n(()=>[e(p,{code:i(v)},{default:n(()=>[e(y)]),_:1},8,["code"])]),clickShow:n(()=>[e(p,{code:i(C)},{default:n(()=>[e(h)]),_:1},8,["code"])]),customContent:n(()=>[e(p,{code:i($)},{default:n(()=>[e(T)]),_:1},8,["code"])]),Attributes:n(()=>[e(f,{data:o})]),slots:n(()=>[e(f,{data:u,"columns-no-default":!0})]),_:1})])}}});export{B as default};
