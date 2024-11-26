import{d as l,a as f,r as s,o as u,b as m,e as n,w as o,f as c,t as y,A as x,g as b,u as _}from"./index-DQzoCrCu.js";const A=l({__name:"basicUsage",setup(p){const t=f(0),r=()=>{x.numberAnimate(1050,0,1e3,a=>{t.value=Math.floor(a)})};return(a,e)=>{const i=s("xy-button");return u(),m("div",null,[n(i,{onClick:r,style:{"margin-right":"10px"}},{default:o(()=>e[0]||(e[0]=[c("开始动画")])),_:1}),c(y(t.value),1)])}}}),d=`<template>\r
  <div>\r
    <xy-button @click="actionAnimation" style="margin-right: 10px">开始动画</xy-button>{{num}}\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import {ref, reactive} from "vue";\r
import {AnimationUtils} from"yanyan-ui"\r
\r
const num = ref(0);\r
const actionAnimation = ()=>{\r
  AnimationUtils.numberAnimate(\r
    1050,\r
    0,\r
    1000,\r
    (value:number)=>{\r
      num.value = Math.floor(value);\r
    })\r
}\r
\r
<\/script>\r
\r
<style scoped lang="scss">\r
\r
</style>`,T=l({__name:"animationType",setup(p){const t=f(0),r=()=>{x.numberAnimate(1e3,0,100,a=>{t.value=Math.floor(a),console.log(Math.floor(a))},"ease")};return(a,e)=>{const i=s("xy-button");return u(),m("div",null,[n(i,{onClick:r,style:{"margin-right":"10px"}},{default:o(()=>e[0]||(e[0]=[c("开始动画")])),_:1}),c(y(t.value)+" ",1),e[1]||(e[1]=b("div",null,[c("打开控制台查看变化"),b("code",null,"ease:慢-快-慢")],-1))])}}}),U=l({__name:"index",setup(p){const t=[{title:"基础用法",id:"730ca7e09ce810897b17179341c60d20",slot:"basicUsage"},{title:"自定义动画函数",id:"fbee9f2c0f3bb1ca4f40289b422b993c",slot:"animationType"},{title:"API",id:"b8901c711f73a25476ce244d19528aa4",children:[{title:"Attributes",id:"911f114cc41ef70c13bb08412896216b",slot:"Attributes"}]}],r=[{name:"duration",explain:"动画持续时间 ms",type:"number"},{name:"from",explain:"起始值",type:"number"},{name:"to",explain:"结束值",type:"number"},{name:"callback",explain:"回调函数",type:[{value:"Function",complexType:"(value:number)=>void"}]},{name:"animationType",explain:"缓动函数 string类型可以设置为`steps(n, start | end)` 或者 `cubic-bezier(n1, n2, n3, n4)`",type:[{value:"animationType",complexType:"'linear' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'step-start' | 'step-end' | 'ease' | 'steps(n, start | end)' | 'cubic-bezier(n1, n2, n3, n4)' | (t: number) => number"}],default:"'linear'"}];return(a,e)=>{const i=s("xy-effect-preview"),v=s("xy-attribute-table"),g=s("xy-showcase-page");return u(),m("div",null,[n(g,{introduction:"为数字的变化提供动画支持，支出多种缓动动画效果及自定义动画函数来实现数字动画","page-title":"数字动画",catalogue:t},{basicUsage:o(()=>[n(i,{code:_(d)},{default:o(()=>[n(A)]),_:1},8,["code"])]),animationType:o(()=>[n(i,{code:_(d)},{default:o(()=>[n(T)]),_:1},8,["code"])]),Attributes:o(()=>[n(v,{data:r})]),_:1})])}}});export{U as default};
