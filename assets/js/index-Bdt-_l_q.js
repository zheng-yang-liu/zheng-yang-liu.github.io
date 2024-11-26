import{_ as f,r as o,o as i,b as d,e,w as n,f as s,d as y,u as b}from"./index-DQzoCrCu.js";const x={},_={class:"basicUsage"};function m(u,t){const a=o("xy-button");return i(),d("div",_,[e(a,null,{default:n(()=>t[0]||(t[0]=[s("default")])),_:1}),e(a,{type:"success"},{default:n(()=>t[1]||(t[1]=[s("success")])),_:1}),e(a,{type:"info"},{default:n(()=>t[2]||(t[2]=[s("info")])),_:1}),e(a,{type:"warning"},{default:n(()=>t[3]||(t[3]=[s("warning")])),_:1}),e(a,{type:"danger"},{default:n(()=>t[4]||(t[4]=[s("danger")])),_:1})])}const g=f(x,[["render",m],["__scopeId","data-v-0a9d58da"]]),v=`<template>\r
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
</style>`,A=y({__name:"index",setup(u){const t=[{title:"基础用法",id:"7901232d578af68b0f357e756e9702a3",slot:"basicUsage"},{title:"API",id:"b9025265f1df958a8df6696e690096d7",children:[{title:"Attributes",id:"9d4210683414d03a0d165686b452b307",slot:"Attributes"},{title:"Events",id:"c1bb9d94d41397d77817100a7056bae0",slot:"Events"}]}],a=[{name:"width",explain:"最小宽度",type:"number",default:"84"},{name:"height",explain:"高度",type:"number",default:"32"},{name:"color",explain:"颜色",type:"string",default:"#fff"},{name:"type",explain:"类型",type:[{value:"buttonType",complexType:"'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'"}],default:"default"},{name:"frontIcon",explain:"前置图标",type:"string",default:""},{name:"postIcon",explain:"后置图标",type:"string",default:""}],l=[{name:"click",explain:"点击事件",type:[{value:"Function",complexType:"() => void"}]}];return(w,U)=>{const p=o("xy-effect-preview"),r=o("xy-attribute-table"),c=o("xy-showcase-page");return i(),d("div",null,[e(c,{introduction:"常用的操作按钮","page-title":"按钮",catalogue:t},{basicUsage:n(()=>[e(p,{code:b(v)},{default:n(()=>[e(g)]),_:1},8,["code"])]),Attributes:n(()=>[e(r,{data:a})]),Events:n(()=>[e(r,{data:l,"columns-no-default":!0})]),_:1})])}}});export{A as default};
