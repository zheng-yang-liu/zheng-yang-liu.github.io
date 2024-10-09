import{d as c,l as f,r,b as l,c as u,i as e,w as a,k as s,t as y,A as x,g as _,j as b}from"./index-BBzx9Igv.js";const h=c({__name:"basicUsage",setup(m){const t=f(0),i=()=>{x.numberAnimate(1050,0,1e3,n=>{t.value=Math.floor(n)})};return(n,p)=>{const o=r("xy-button");return l(),u("div",null,[e(o,{onClick:i,style:{"margin-right":"10px"}},{default:a(()=>[s("开始动画")]),_:1}),s(y(t.value),1)])}}}),d=`<template>\r
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
</style>`,A=_("div",null,[s("打开控制台查看变化"),_("code",null,"ease:慢-快-慢")],-1),T=c({__name:"animationType",setup(m){const t=f(0),i=()=>{x.numberAnimate(1e3,0,100,n=>{t.value=Math.floor(n),console.log(Math.floor(n))},"ease")};return(n,p)=>{const o=r("xy-button");return l(),u("div",null,[e(o,{onClick:i,style:{"margin-right":"10px"}},{default:a(()=>[s("开始动画")]),_:1}),s(y(t.value)+" ",1),A])}}}),U=c({__name:"index",setup(m){const t=[{title:"基础用法",id:"730ca7e09ce810897b17179341c60d20",slot:"basicUsage"},{title:"自定义动画函数",id:"fbee9f2c0f3bb1ca4f40289b422b993c",slot:"animationType"},{title:"API",id:"b8901c711f73a25476ce244d19528aa4",children:[{title:"Attributes",id:"911f114cc41ef70c13bb08412896216b",slot:"Attributes"}]}],i=[{name:"duration",explain:"动画持续时间 ms",type:"number"},{name:"from",explain:"起始值",type:"number"},{name:"to",explain:"结束值",type:"number"},{name:"callback",explain:"回调函数",type:[{value:"Function",complexType:"(value:number)=>void"}]},{name:"animationType",explain:"缓动函数 string类型可以设置为`steps(n, start | end)` 或者 `cubic-bezier(n1, n2, n3, n4)`",type:[{value:"animationType",complexType:"'linear' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'step-start' | 'step-end' | 'ease' | string | (t: number) => number"}],default:"'linear'"}];return(n,p)=>{const o=r("xy-effect-preview"),g=r("xy-attribute-table"),v=r("xy-showcase-page");return l(),u("div",null,[e(v,{introduction:"为数字的变化提供动画支持，支出多种缓动动画效果及自定义动画函数来实现数字动画","page-title":"数字动画",catalogue:t},{basicUsage:a(()=>[e(o,{code:b(d)},{default:a(()=>[e(h)]),_:1},8,["code"])]),animationType:a(()=>[e(o,{code:b(d)},{default:a(()=>[e(T)]),_:1},8,["code"])]),Attributes:a(()=>[e(g,{data:i})]),_:1})])}}});export{U as default};
