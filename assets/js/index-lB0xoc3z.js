import{d as c,a as b,r as s,o as u,b as f,e as n,w as r,f as v,u as d}from"./index-DQzoCrCu.js";const _=c({__name:"basicUsage",setup(m){const t=b(!1),a=async o=>{console.log(o)};return(o,e)=>{const p=s("el-button"),l=s("xy-img-cropping");return u(),f("div",null,[n(p,{onClick:e[0]||(e[0]=i=>t.value=!0)},{default:r(()=>e[2]||(e[2]=[v("图像裁剪")])),_:1}),n(l,{visible:t.value,"onUpdate:visible":e[1]||(e[1]=i=>t.value=i),onConfirmReturn:a},null,8,["visible"])])}}}),x=`<template>\r
  <div>\r
    <el-button @click="visible=true">图像裁剪</el-button>\r
    <xy-img-cropping\r
      v-model:visible="visible"\r
      @confirmReturn="confirmReturn"\r
    >\r
    </xy-img-cropping>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import {ref} from "vue";\r
const visible = ref(false);\r
\r
const confirmReturn = async(file:File|string)=>{\r
  console.log(file);\r
  //网络请求\r
}\r
<\/script>\r
\r
<style scoped lang="scss">\r
\r
</style>`,y=c({__name:"uploadNoFile",setup(m){const t=b(!1),a=async o=>{console.log(o)};return(o,e)=>{const p=s("el-button"),l=s("xy-img-cropping");return u(),f("div",null,[n(p,{onClick:e[0]||(e[0]=i=>t.value=!0)},{default:r(()=>e[2]||(e[2]=[v("上传base64数据")])),_:1}),n(l,{title:"图像裁剪上传base64",visible:t.value,"onUpdate:visible":e[1]||(e[1]=i=>t.value=i),onConfirmReturn:a,uploadParamIsFile:!1},null,8,["visible"])])}}}),C=`<template>\r
  <div>\r
    <el-button @click="visible=true">上传base64数据</el-button>\r
    <xy-img-cropping\r
      title="图像裁剪上传base64"\r
      v-model:visible="visible"\r
      @confirmReturn="confirmReturn"\r
      :uploadParamIsFile="false"\r
    >\r
    </xy-img-cropping>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import {ref} from "vue";\r
\r
const visible = ref(false)\r
\r
const confirmReturn = async(file:File|string)=>{\r
  console.log(file);\r
  //网络请求\r
}\r
<\/script>\r
\r
<style scoped lang="scss">\r
\r
</style>`,R=c({__name:"fixedCroppingSize",setup(m){const t=b(!1),a=async o=>{console.log(o)};return(o,e)=>{const p=s("el-button"),l=s("xy-img-cropping");return u(),f("div",null,[n(p,{onClick:e[0]||(e[0]=i=>t.value=!0)},{default:r(()=>e[2]||(e[2]=[v("固定尺寸")])),_:1}),n(l,{title:"固定裁剪尺寸",visible:t.value,"onUpdate:visible":e[1]||(e[1]=i=>t.value=i),onConfirmReturn:a,previewSizeFixed:!0},null,8,["visible"])])}}}),F=`<template>\r
  <div>\r
    <el-button @click="visible=true">固定尺寸</el-button>\r
    <xy-img-cropping\r
      title="固定裁剪尺寸"\r
      v-model:visible="visible"\r
      @confirmReturn="confirmReturn"\r
      :previewSizeFixed="true"\r
    >\r
    </xy-img-cropping>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import {ref} from "vue";\r
\r
const visible = ref(false)\r
\r
const confirmReturn = async(file:File|string)=>{\r
  console.log(file);\r
  //网络请求\r
}\r
<\/script>\r
\r
<style scoped lang="scss">\r
\r
</style>`,w=c({__name:"index",setup(m){const t=[{title:"基础用法",id:"26eaff5ae8e63d0a31ea769bf561a3e2",slot:"basicUsage"},{title:"固定裁剪尺寸",id:"1defc5416439f56bb00028410d061489",slot:"fixedCroppingSize"},{title:"上传base64数据",explain:"用于图片数据需要使用`base64`格式进行数据上传情况",id:"fa1d5d2966d8618459a6c8ec33bfa7cb",slot:"uploadBase64"},{title:"API",children:[{title:"Attributes",slot:"xyImgCroppingProps"},{title:"Events",slot:"xyImgCroppingEvent"}]}],a=[{name:"visible",explain:"是否显示裁剪框",type:"boolean",default:"false"},{name:"title",explain:"弹框标题",type:"string",default:"图像裁剪"},{name:"previewSizeFixed",explain:"是否固定裁剪尺寸",type:"boolean",default:"false"},{name:"uploadParamIsFile",explain:"上传参数是否为`file`类型",type:"boolean",default:"true"},{name:"clickOnExternalClose",explain:"点击外部关闭弹框",type:"boolean",default:"false"},{name:"fileSize",explain:"文件大小限制",type:"number",default:"4"},{name:"immediateClose",explain:"是否立即关闭,等待网络请求返回后再关闭",type:"boolean",default:"false"}],o=[{name:"confirmReturn",explain:"确认裁剪的函数回调",type:[{value:"Function",complexType:"(file:File|string)=>void"}]}];return(e,p)=>{const l=s("xy-effect-preview"),i=s("xy-attribute-table"),g=s("xy-showcase-page");return u(),f("div",null,[n(g,{introduction:"用于对图片的裁剪，点击确定后默认不会立即关闭，等待网络请求返回后再关闭或使用`@confirmReturn`回调进行请求处理","page-title":"图像裁剪",catalogue:t},{basicUsage:r(()=>[n(l,{code:d(x)},{default:r(()=>[n(_)]),_:1},8,["code"])]),fixedCroppingSize:r(()=>[n(l,{code:d(F)},{default:r(()=>[n(R)]),_:1},8,["code"])]),uploadBase64:r(()=>[n(l,{code:d(C)},{default:r(()=>[n(y)]),_:1},8,["code"])]),xyImgCroppingProps:r(()=>[n(i,{data:a})]),xyImgCroppingEvent:r(()=>[n(i,{data:o,"columns-no-default":!0})]),_:1})])}}});export{w as default};
