import{d as o,r as t,b as r,c as s,i as e,w as a,g as _,j as u}from"./index-5Jm3zCii.js";const x=_("div",{style:{width:"100px",height:"20px","background-color":"#e0f0ff"}},"组件效果",-1),b='<div style="width: 100px;height: 20px;background-color: #e0f0ff">组件效果</div>',g=o({__name:"basicUsage",setup(d){return(n,c)=>{const i=t("xy-effect-preview");return r(),s("div",null,[e(i,{code:b},{default:a(()=>[x]),_:1})])}}}),h=`<template>\r
  <div>\r
    <xy-effect-preview :code="code">\r
      <div style="width: 100px;height: 20px;background-color: #e0f0ff">组件效果</div>\r
    </xy-effect-preview>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
\r
const code = \`<div style="width: 100px;height: 20px;background-color: #e0f0ff">组件效果</div>\`\r
\r
<\/script>`,y=o({__name:"index",setup(d){const n=[{title:"基础用法",id:"d2b01604ee737ad73b0385fb6fad77a2",slot:"basicUsage"},{title:"API",id:"35559cad6a30dfd794eaf6905ea03ab8",children:[{title:"Attributes",id:"4581527ae285384b9c054fcb725598bf",slot:"Attributes"}]}],c=[{name:"width",explain:"宽度",type:"string",default:"100%"},{name:"code",explain:"代码字符串",type:"string"},{name:"language",explain:"代码语言",type:"string",default:"xml"},{name:"effectHeight",explain:"效果区域`minHeight`",type:"number"}];return(i,m)=>{const p=t("xy-effect-preview"),f=t("xy-attribute-table"),l=t("xy-showcase-page");return r(),s("div",null,[e(l,{introduction:"对组件效果进行展示和便捷复制组件样例代码","page-title":"组件效果",catalogue:n},{basicUsage:a(()=>[e(p,{code:u(h)},{default:a(()=>[e(g)]),_:1},8,["code"])]),Attributes:a(()=>[e(f,{data:c})]),_:1})])}}});export{y as default};
