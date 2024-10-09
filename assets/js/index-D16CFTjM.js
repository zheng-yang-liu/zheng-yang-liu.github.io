import{d as i,r as n,b as p,h as d,c as b,i as e,w as a,j as y}from"./index-BBzx9Igv.js";const x=i({__name:"basicUsage",setup(l){const t=[{name:"name",explain:"名称",type:"string"},{name:"age",explain:"年龄",type:"number",default:18},{name:"address",explain:"地址",type:[{value:"address",complexType:"'beijing' | 'shanghai' | 'sichuan' | 'hebei' | 'tianjin' | 'chengdu'"}]},{name:"hobby",explain:"爱好",type:[{value:"string"},{value:"Array",complexType:"string[]"}]}];return(r,o)=>{const s=n("xy-attribute-table");return p(),d(s,{data:t})}}}),_=`<template>\r
    <xy-attribute-table :data="data"></xy-attribute-table>\r
</template>\r
\r
<script setup lang="ts">\r
const data = [\r
  {\r
    name: 'name',\r
    explain: '名称',\r
    type: 'string'\r
  },\r
  {\r
    name: 'age',\r
    explain: '年龄',\r
    type:'number',\r
    default:18\r
  },\r
  {\r
    name: 'address',\r
    explain: '地址',\r
    type: [\r
      {\r
        value: 'address',\r
        complexType: "'beijing' | 'shanghai' | 'sichuan' | 'hebei' | 'tianjin' | 'chengdu'"\r
      }\r
    ],\r
  },\r
  {\r
    name:"hobby",\r
    explain:"爱好",\r
    type:[\r
      {\r
        value:"string",\r
      },\r
      {\r
        value:"Array",\r
        complexType:"string[]"\r
      }\r
    ]\r
  }\r
]\r
<\/script>\r
\r
<style scoped lang="scss">\r
\r
</style>`,f=i({__name:"index",setup(l){const t=[{title:"基础用法",id:"49559d974908abd08a305553c97851b9",slot:"basicUsage"},{title:"API",id:"808db7ae581a79042aabe721074c8e2a",children:[{title:"Attributes",id:"0f08545013d2e5f534d84f026659fb17",slot:"Attributes"}]}],r=[{name:"data",explain:"数据",type:[{value:"Array",complexType:`{
          name:string,
          explain:string,
          type:string | {value:string,complexType?:string}[],
          default?:string
        }[]`}]},{name:"promptTopOffset",explain:"类型提示`Tooltip`距离顶部的偏移量",type:"number",default:"5"},{name:"promptXOffset",explain:"类型提示`Tooltip`距离左侧的偏移量",type:"number",default:"0"},{name:"columnsNoDefault",explain:"是否显示默认值列",type:"boolean",default:"false"}];return(o,s)=>{const c=n("xy-effect-preview"),u=n("xy-attribute-table"),m=n("xy-showcase-page");return p(),b("div",null,[e(m,{introduction:"属性列表","page-title":"对组件的属性进行展示",catalogue:t},{basicUsage:a(()=>[e(c,{code:y(_)},{default:a(()=>[e(x)]),_:1},8,["code"])]),Attributes:a(()=>[e(u,{data:r})]),_:1})])}}});export{f as default};
