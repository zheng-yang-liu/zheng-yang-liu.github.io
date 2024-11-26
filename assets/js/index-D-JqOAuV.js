import{d as c,r as a,o as r,b as s,e,w as n,g as _,u}from"./index-DQzoCrCu.js";const x='<div style="width: 100px;height: 20px;background-color: #e0f0ff">组件效果</div>',b=c({__name:"basicUsage",setup(d){return(i,t)=>{const o=a("xy-effect-preview");return r(),s("div",null,[e(o,{code:x},{default:n(()=>t[0]||(t[0]=[_("div",{style:{width:"100px",height:"20px","background-color":"#e0f0ff"}},"组件效果",-1)])),_:1})])}}}),g=`<template>\r
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
<\/script>`,v=c({__name:"index",setup(d){const i=[{title:"基础用法",id:"d2b01604ee737ad73b0385fb6fad77a2",slot:"basicUsage"},{title:"API",id:"35559cad6a30dfd794eaf6905ea03ab8",children:[{title:"Attributes",id:"4581527ae285384b9c054fcb725598bf",slot:"Attributes"}]}],t=[{name:"width",explain:"宽度",type:"string",default:"100%"},{name:"code",explain:"代码字符串",type:"string"},{name:"language",explain:"代码语言",type:"string",default:"xml"},{name:"effectHeight",explain:"效果区域`minHeight`",type:"number"}];return(o,m)=>{const p=a("xy-effect-preview"),f=a("xy-attribute-table"),l=a("xy-showcase-page");return r(),s("div",null,[e(l,{introduction:"对组件效果进行展示和便捷复制组件样例代码","page-title":"组件效果",catalogue:i},{basicUsage:n(()=>[e(p,{code:u(g)},{default:n(()=>[e(b)]),_:1},8,["code"])]),Attributes:n(()=>[e(f,{data:t})]),_:1})])}}});export{v as default};
