import{d,u,c as g,i as e,w as n,r as t,b as m,j as f,g as x,_ as b}from"./index-DugxiAAU.js";const y=`<template>\r
  <div>\r
    <xy-showcase-page\r
      introduction="用于对图片的裁剪"\r
      page-title="图像裁剪"\r
      :catalogue="catalogue"\r
    >\r
      <template #basicUsage>\r
        basicUsage插槽内容\r
      </template>\r
      <template #fixedCroppingSize>\r
        fixedCroppingSize插槽内容\r
      </template>\r
      <template #uploadBase64>\r
        uploadBase64插槽内容\r
      </template>\r
\r
      <template #xyImgCroppingProps>\r
        xyImgCroppingProps插槽内容\r
      </template>\r
      <template #xyImgCroppingEvent>\r
        xyImgCroppingEvent插槽内容\r
      </template>\r
    </xy-showcase-page>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
\r
const catalogue = [\r
  {\r
    title:"基础用法",\r
    id:"26eaff5ae8e63d0a31ea769bf561a3e2",\r
    slot:"basicUsage"\r
  },\r
  {\r
    title:"固定裁剪尺寸",\r
    id:"1defc5416439f56bb00028410d061489",\r
    slot:"fixedCroppingSize"\r
  },\r
  {\r
    title:"上传base64数据",\r
    explain:"用于图片数据需要使用base64格式进行数据上传情况",\r
    id:"fa1d5d2966d8618459a6c8ec33bfa7cb",\r
    slot:"uploadBase64"\r
  },\r
  {\r
    title:"API",\r
    children:[\r
      {\r
        title:"Attributes",\r
        slot:'xyImgCroppingProps'\r
      },\r
      {\r
        title:"Events",\r
        slot:"xyImgCroppingEvent"\r
      }\r
    ]\r
  }\r
]\r
const attributesData = [\r
  {\r
    name:"visible",\r
    explain:"是否显示裁剪框",\r
    type:"boolean",\r
    default:"false"\r
  },\r
  {\r
    name:'title',\r
    explain:"弹框标题",\r
    type:"string",\r
    default:"图像裁剪"\r
  },\r
  {\r
    name:"previewSizeFixed",\r
    explain:"是否固定裁剪尺寸",\r
    type:"boolean",\r
    default:"false"\r
  },\r
  {\r
    name:"uploadParamIsFile",\r
    explain:"上传参数是否为file类型",\r
    type:"boolean",\r
    default:"true"\r
  },\r
  {\r
    name:"clickOnExternalClose",\r
    explain:"点击外部关闭弹框",\r
    type:"boolean",\r
    default:"false"\r
  },\r
  {\r
    name:"fileSize",\r
    explain:"文件大小限制",\r
    type:"number",\r
    default:"4"\r
  }\r
]\r
const eventData = [\r
  {\r
    name:"confirmReturn",\r
    explain:"确认裁剪的函数回调",\r
    type:[{value:"Function",complexType:"(file:File|string)=>void"}]\r
  }\r
]\r
\r
<\/script>\r
\r
<style scoped lang="scss">\r
\r
</style>`,_=d({__name:"index",setup(v){const a=u(),i=[{title:"基础用法",id:"9e06530b14cdc42bd5202949fb9a8909",slot:"basicUsage"},{title:"API",id:"6d40a10a319df3f22f5ccd965e396870",children:[{title:"Attributes",id:"8cf4ee797569ebd670ff2a027e21555a",slot:"Attributes"},{title:"Emits",id:"cbf99ccca884ce3bc38fb3bf4a0c0309",slot:"Emits"}]}],l=[{name:"catalogue",explain:"目录列表",type:[{value:"Array",complexType:`{
          id: string;
          title: string;
          slot?: string;
          explain?: string | string[];
          children?: catalogue[];
        }`}]},{name:"pageTitle",explain:"页面标题",type:"string"},{name:"introduction",explain:"页面介绍",type:[{value:"string"},{value:"Array",complexType:"string[]"}]},{name:"showCatalogue",explain:"是否显示目录",type:"boolean",default:"true"},{name:"titleTriggerRange",explain:"标题触发范围的`height`,从顶部开始计算,为屏幕高度的四分之三+`titleTriggerRange`",type:"number",default:"0"},{name:"showCatalogueWidth",explain:"动态显示目录的宽度",type:"number",default:"1075"},{name:"screenMaxCatalogue",explain:"只有全屏状态下才显示目录",type:"boolean",default:"false"},{name:"currentTitleID",explain:"当前标题ID,可以通过`getCssVar('--current-titleID')`全局获取",type:"string"}],s=[{name:"update:currentTitleID",explain:"更新当前标题ID",type:"string"}],o=()=>{a.push("/component/imgCropping")};return(C,h)=>{const p=t("xy-effect-preview"),r=t("xy-attribute-table"),c=t("xy-showcase-page");return m(),g("div",null,[e(c,{introduction:"对编写的组件进行说明包括基本使用样例、属性、方法等进行说明","page-title":"组件说明",catalogue:i},{basicUsage:n(()=>[e(p,{code:f(y)},{default:n(()=>[x("div",{onClick:o,class:"toPath"},"页面效果参考图像裁剪")]),_:1},8,["code"])]),Attributes:n(()=>[e(r,{data:l})]),Emits:n(()=>[e(r,{data:s,"columns-no-default":!0})]),_:1})])}}}),w=b(_,[["__scopeId","data-v-23c5aaf5"]]);export{w as default};
