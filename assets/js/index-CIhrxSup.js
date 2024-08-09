import{d as s,r as t,b as o,c as i,i as e,w as n,j as m}from"./index-Cp9bqpii.js";const b=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <div class="heart"></div>
</body>
</html>`,u=s({__name:"basicUsage",setup(d){return(a,c)=>{const r=t("xy-code-preview");return o(),i("div",null,[e(r,{code:b})])}}}),h=`<template>\r
  <div>\r
    <xy-code-preview :code="code" ></xy-code-preview>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
const code = \`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
</head>\r
<body>\r
    <div class="heart"></div>\r
</body>\r
</html>\`\r
\r
<\/script>\r
\r
<style scoped lang="scss">\r
\r
</style>`,y=s({__name:"index",setup(d){const a=[{title:"基础用法",id:"1263bb5639edb534714206741166b6b3",slot:"basicUsage"},{title:"API",id:"904ae0b2d39452a3128d580066e37017",children:[{title:"Attributes",id:"69a03e3918e64cb11fcfccc5a286db22",slot:"Attributes"}]}],c=[{name:"code",explain:"代码内容",type:"string"},{name:"language",explain:"语言",type:"string",default:"xml"},{name:"round",explain:"是否圆角",type:"boolean",default:"true"}];return(r,x)=>{const l=t("xy-effect-preview"),p=t("xy-attribute-table"),_=t("xy-showcase-page");return o(),i("div",null,[e(_,{introduction:"对代码进行高亮展示","page-title":"代码高亮",catalogue:a},{basicUsage:n(()=>[e(l,{code:m(h)},{default:n(()=>[e(u)]),_:1},8,["code"])]),Attributes:n(()=>[e(p,{data:c})]),_:1})])}}});export{y as default};
