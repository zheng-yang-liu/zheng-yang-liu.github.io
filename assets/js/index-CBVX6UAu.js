import{_ as f,r as s,b as r,c as i,i as e,w as t,k as a,d as _,j as y}from"./index-BBzx9Igv.js";const b={},x={class:"basicUsage"};function m(d,o){const n=s("xy-button");return r(),i("div",x,[e(n,null,{default:t(()=>[a("default")]),_:1}),e(n,{type:"success"},{default:t(()=>[a("success")]),_:1}),e(n,{type:"info"},{default:t(()=>[a("info")]),_:1}),e(n,{type:"warning"},{default:t(()=>[a("warning")]),_:1}),e(n,{type:"danger"},{default:t(()=>[a("danger")]),_:1})])}const g=f(b,[["render",m],["__scopeId","data-v-ef44717b"]]),v=`<template>\r
  <div class="basicUsage">\r
    <xy-button>default</xy-button>\r
    <xy-button type="success">success</xy-button>\r
    <xy-button type="info">info</xy-button>\r
    <xy-button type="warning">warning</xy-button>\r
    <xy-button type="danger">danger</xy-button>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
\r
<\/script>\r
\r
<style scoped>\r
.basicUsage{\r
  width: 500px;\r
  display: flex;\r
  justify-content: space-between;\r
}\r
</style>`,T=_({__name:"index",setup(d){const o=[{title:"基础用法",id:"7901232d578af68b0f357e756e9702a3",slot:"basicUsage"},{title:"API",id:"b9025265f1df958a8df6696e690096d7",children:[{title:"Attributes",id:"9d4210683414d03a0d165686b452b307",slot:"Attributes"},{title:"Events",id:"c1bb9d94d41397d77817100a7056bae0",slot:"Events"}]}],n=[{name:"width",explain:"最小宽度",type:"number",default:"84"},{name:"height",explain:"高度",type:"number",default:"32"},{name:"color",explain:"颜色",type:"string",default:"#fff"},{name:"type",explain:"类型",type:[{value:"buttonType",complexType:"'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'"}],default:"default"},{name:"frontIcon",explain:"前置图标",type:"string",default:""},{name:"postIcon",explain:"后置图标",type:"string",default:""}],l=[{name:"click",explain:"点击事件",type:[{value:"Function",complexType:"() => void"}]}];return(w,h)=>{const u=s("xy-effect-preview"),c=s("xy-attribute-table"),p=s("xy-showcase-page");return r(),i("div",null,[e(p,{introduction:"常用的操作按钮","page-title":"按钮",catalogue:o},{basicUsage:t(()=>[e(u,{code:y(v)},{default:t(()=>[e(g)]),_:1},8,["code"])]),Attributes:t(()=>[e(c,{data:n})]),Events:t(()=>[e(c,{data:l,"columns-no-default":!0})]),_:1})])}}});export{T as default};
