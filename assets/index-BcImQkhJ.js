import{d as o,r as n,b as l,c as p,i as t,w as s,k as m,A as x,p as h,e as v,g as c,_ as b,j as f}from"./index-5Jm3zCii.js";const y=e=>(h("data-v-61507255"),e=e(),v(),e),w={class:"basicBox"},k=y(()=>c("svg",{t:"1721030842723",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3191",width:"32",height:"32"},[c("path",{class:"svgLine",d:"M621.674667 408.021333c16.618667-74.24 28.224-127.936 34.837333-161.194666C673.152 163.093333 629.941333 85.333333 544.298667 85.333333c-77.226667 0-116.010667 38.378667-138.88 115.093334l-0.586667 2.24c-13.728 62.058667-34.72 110.165333-62.506667 144.586666a158.261333 158.261333 0 0 1-119.733333 58.965334l-21.909333 0.469333C148.437333 407.808 106.666667 450.816 106.666667 503.498667V821.333333c0 64.8 52.106667 117.333333 116.394666 117.333334h412.522667c84.736 0 160.373333-53.568 189.12-133.92l85.696-239.584c21.802667-60.96-9.536-128.202667-70.005333-150.186667a115.552 115.552 0 0 0-39.488-6.954667H621.674667z",fill:"#000000","p-id":"3192"})],-1)),A=o({__name:"basicUsage",setup(e){const a=()=>{x.svgAnimation(2,"ease",".svgLine","#000","36","round")};return(i,d)=>{const r=n("xy-button");return l(),p("div",w,[t(r,{onClick:a},{default:s(()=>[m("开始动画")]),_:1}),k])}}}),C=b(A,[["__scopeId","data-v-61507255"]]),B=`<template>\r
  <div class="basicBox">\r
    <xy-button @click="show">开始动画</xy-button>\r
    <svg t="1721030842723" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3191" width="32" height="32">\r
      <path class="svgLine" d="M621.674667 408.021333c16.618667-74.24 28.224-127.936 34.837333-161.194666C673.152 163.093333 629.941333 85.333333 544.298667 85.333333c-77.226667 0-116.010667 38.378667-138.88 115.093334l-0.586667 2.24c-13.728 62.058667-34.72 110.165333-62.506667 144.586666a158.261333 158.261333 0 0 1-119.733333 58.965334l-21.909333 0.469333C148.437333 407.808 106.666667 450.816 106.666667 503.498667V821.333333c0 64.8 52.106667 117.333333 116.394666 117.333334h412.522667c84.736 0 160.373333-53.568 189.12-133.92l85.696-239.584c21.802667-60.96-9.536-128.202667-70.005333-150.186667a115.552 115.552 0 0 0-39.488-6.954667H621.674667z" fill="#000000" p-id="3192"></path>\r
    </svg>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import{AnimationUtils}from"yanyan-ui"\r
const show = () => {\r
  AnimationUtils.svgAnimation(\r
    2,\r
    "ease",\r
    '.svgLine',\r
    '#000',\r
    '36',\r
    'round'\r
  );\r
}\r
<\/script>\r
\r
<style scoped lang="scss">\r
@import"yanyan-ui/assets/style/mixin.scss";\r
.basicBox{\r
  @include display-flex(center);\r
  //设置其中第一个div元素的样式\r
  &>div:first-child{\r
    margin-right: 20px;\r
  }\r
\r
  path{\r
    fill: none;\r
    stroke: #000;\r
    stroke-width: 36;\r
  }\r
}\r
\r
</style>`,U=o({__name:"index",setup(e){const a=[{title:"基础用法",id:"b0de01509cdaec5d6a38306b48cf1248",slot:"basicUsage",explain:"为path添加类型为`svgLine`/`自定义类名`,使其拥有动画"},{title:"API",id:"bbfa338e937c98e85cb9ae9253eccdd7",children:[{title:"Attributes",id:"f76278972084afb73a44d69429940ae0",slot:"Attributes"}]}],i=[{name:"time",explain:"动画时间`s`",type:"number",default:"2"},{name:"timingFunction",explain:"动画速度曲线、string类型可以设置为`steps(n, start | end)` 或者 `cubic-bezier(n1, n2, n3, n4)`",type:[{value:"timingFunction",complexType:"'ease' | 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'step-start' | 'step-end' | string"}],default:"ease"},{name:"lineClassName",explain:"类名",type:"string",default:".svgLine"},{name:"color",explain:"描边颜色",type:"string",default:"#000"},{name:"strokeWidth",explain:"描边宽度",type:"string",default:"36"},{name:"strokeLinecap",explain:"描边样式",type:[{value:"strokeLinecap",complexType:"'butt' | 'round' | 'square' | 'inherit'"}],default:"round"},{name:"fill",explain:"填充",type:"string",default:"none"}];return(d,r)=>{const u=n("xy-effect-preview"),_=n("xy-attribute-table"),g=n("xy-showcase-page");return l(),p("div",null,[t(g,{introduction:"为svg路径实现描边动画的效果，支持多种缓动动画","page-title":"svg描边动画",catalogue:a},{basicUsage:s(()=>[t(u,{code:f(B)},{default:s(()=>[t(C)]),_:1},8,["code"])]),Attributes:s(()=>[t(_,{data:i})]),_:1})])}}});export{U as default};
