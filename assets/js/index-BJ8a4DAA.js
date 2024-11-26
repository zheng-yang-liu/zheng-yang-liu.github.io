import{d as p,a as b,r as u,o as f,b as v,e as n,w as l,f as a,u as g}from"./index-DQzoCrCu.js";const c=p({__name:"basicUsage",setup(m){const o=b(!1);return(d,t)=>{const e=u("xy-button"),i=u("xy-dialog");return f(),v("div",null,[n(e,{onClick:t[0]||(t[0]=r=>o.value=!0)},{default:l(()=>t[2]||(t[2]=[a("打开弹框")])),_:1}),n(i,{visible:o.value,"onUpdate:visible":t[1]||(t[1]=r=>o.value=r)},{default:l(()=>t[3]||(t[3]=[a(" 这是对话框的内容 ")])),_:1},8,["visible"])])}}}),x=`<template>\r
  <div>\r
    <xy-button @click="visible=true">打开弹框</xy-button>\r
    <xy-dialog v-model:visible="visible">\r
      这是对话框的内容\r
    </xy-dialog>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import {ref} from "vue";\r
const visible = ref(false);\r
<\/script>\r
\r
<style scoped lang="scss">\r
\r
</style>`,_=p({__name:"customFooter",setup(m){const o=b(!1);return(d,t)=>{const e=u("xy-button"),i=u("xy-dialog");return f(),v("div",null,[n(e,{onClick:t[0]||(t[0]=r=>o.value=!0)},{default:l(()=>t[4]||(t[4]=[a("打开弹框")])),_:1}),n(i,{visible:o.value,"onUpdate:visible":t[3]||(t[3]=r=>o.value=r)},{footer:l(()=>[n(e,{onClick:t[1]||(t[1]=r=>o.value=!1)},{default:l(()=>t[5]||(t[5]=[a("取消")])),_:1}),n(e,{type:"primary",onClick:t[2]||(t[2]=r=>o.value=!1),style:{"margin-left":"10px"}},{default:l(()=>t[6]||(t[6]=[a("确定")])),_:1})]),default:l(()=>[t[7]||(t[7]=a(" 这是对话框的内容 "))]),_:1},8,["visible"])])}}}),C=`<template>\r
  <div>\r
    <xy-button @click="visible=true">打开弹框</xy-button>\r
    <xy-dialog v-model:visible="visible">\r
      这是对话框的内容\r
      <template #footer>\r
        <xy-button @click="visible=false">取消</xy-button>\r
        <xy-button type="primary" @click="visible=false" style="margin-left: 10px">确定</xy-button>\r
      </template>\r
    </xy-dialog>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import {ref} from "vue";\r
const visible = ref(false);\r
<\/script>\r
\r
<style scoped lang="scss">\r
\r
</style>`,k=p({__name:"closeAfterComplete",setup(m){const o=b(!1),d=async()=>(await(e=>new Promise(i=>setTimeout(i,e)))(3e3),console.log("关闭弹框"),!0);return(t,e)=>{const i=u("xy-button"),r=u("xy-dialog");return f(),v("div",null,[n(i,{onClick:e[0]||(e[0]=s=>o.value=!0)},{default:l(()=>e[2]||(e[2]=[a("打开弹框")])),_:1}),n(r,{visible:o.value,"onUpdate:visible":e[1]||(e[1]=s=>o.value=s),"default-bottom":"",confirmCallback:d},{default:l(()=>e[3]||(e[3]=[a(" 这是对话框的内容 ")])),_:1},8,["visible"])])}}}),w=`<template>\r
  <div>\r
    <xy-button @click="visible=true">打开弹框</xy-button>\r
    <xy-dialog\r
      v-model:visible="visible"\r
      default-bottom\r
      :confirmCallback="confirmCallback"\r
    >\r
      这是对话框的内容\r
    </xy-dialog>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import {ref} from "vue";\r
const visible = ref(false);\r
const confirmCallback = async () => {\r
  const waitFor = (ms: number) => new Promise(r => setTimeout(r, ms));\r
  await waitFor(3000);\r
  console.log("关闭弹框")\r
  return true\r
}\r
<\/script>\r
\r
<style scoped lang="scss">\r
\r
</style>`,$=p({__name:"draggableDialog",setup(m){const o=b(!1),d=b(!1);return(t,e)=>{const i=u("xy-button"),r=u("xy-dialog");return f(),v("div",null,[n(i,{onClick:e[0]||(e[0]=s=>o.value=!0),style:{"margin-right":"10px"}},{default:l(()=>e[4]||(e[4]=[a("存在范围限制")])),_:1}),n(i,{onClick:e[1]||(e[1]=s=>d.value=!0)},{default:l(()=>e[5]||(e[5]=[a("不存在范围限制")])),_:1}),n(r,{drag:!0,"default-bottom":"",visible:o.value,"onUpdate:visible":e[2]||(e[2]=s=>o.value=s)},{default:l(()=>e[6]||(e[6]=[a(" 拖拽存在范围限制 ")])),_:1},8,["visible"]),n(r,{drag:!0,"drag-range":!1,"default-bottom":"",visible:d.value,"onUpdate:visible":e[3]||(e[3]=s=>d.value=s)},{default:l(()=>e[7]||(e[7]=[a(" 拖拽不存在范围限制 ")])),_:1},8,["visible"])])}}}),D=`<template>\r
  <div>\r
    <xy-button @click="visible=true" style="margin-right: 10px">存在范围限制</xy-button>\r
    <xy-button @click="visibleDragRange=true">不存在范围限制</xy-button>\r
    <xy-dialog\r
      :drag="true"\r
      default-bottom\r
      v-model:visible="visible"\r
    >\r
      拖拽存在范围限制\r
    </xy-dialog>\r
\r
    <xy-dialog\r
      :drag="true"\r
      :drag-range="false"\r
      default-bottom\r
      v-model:visible="visibleDragRange"\r
    >\r
      拖拽不存在范围限制\r
    </xy-dialog>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import {ref} from "vue";\r
const visible = ref(false);\r
const visibleDragRange = ref(false);\r
<\/script>\r
\r
<style scoped lang="scss">\r
\r
</style>`,T=p({__name:"index",setup(m){const o=[{title:"基础用法",id:"290950c789dae996defdc25a23138e4e",slot:"basicUsage"},{title:"自定义底部",id:"20540fd4f9e7d24d5574070d7f812792",slot:"customFooter"},{title:"完成任务之后关闭对话框",id:"6aae41ad86d1d3d4e1a62fd909c1114b",slot:"closeAfterComplete"},{title:"可拖拽对话框",id:"c5101a6ace71170386593bc0ca1dacd6",slot:"draggableDialog"},{title:"API",id:"9a9bf1ffec5d01bfd9c15a09c6de6310",children:[{title:"Attributes",id:"6b81ea26df4356f8c042158b039401b3",slot:"Attributes"},{title:"Events",id:"7d28c8fcb0b257a29dd607f307ff33db",slot:"Events"}]}],d=[{name:"visible",explain:"是否显示",type:"boolean"},{name:"width",explain:"宽度",type:"number",default:"500"},{name:"height",explain:"最小高度",type:"number",default:"122"},{name:"title",explain:"标题",type:"string",default:"提示"},{name:"defaultBottom",explain:"是否显示默认底部按钮",type:"boolean",default:"false"},{name:"confirmCallback",explain:"点击确定执行的回调函数,需要有一个返回值,返回值为true时关闭弹窗",type:[{value:"Function",complexType:"()=>boolean"}]},{name:"clickOnExternalClose",explain:"点击外部关闭弹窗",type:"boolean",default:"false"},{name:"escClose",explain:"esc关闭",type:"boolean",default:"true"},{name:"drag",explain:"拖动",type:"boolean",default:"false"},{name:"dragRange",explain:"拖动范围限制",type:"boolean",default:"true"},{name:"dialogStyle",explain:"dialog样式",type:[{value:"object",complexType:"CSSStyleValue"}]}],t=[{name:"handleClose",explain:"关闭事件,`flag=0`右上角关闭/外部 `flag=-1`取消 `flag=1`确定",type:[{value:"Function",complexType:"(visible,flag)=>void"}]}];return(e,i)=>{const r=u("xy-effect-preview"),s=u("xy-attribute-table"),y=u("xy-showcase-page");return f(),v("div",null,[n(y,{introduction:"用于弹出内容或提示用户","page-title":"对话框",catalogue:o},{basicUsage:l(()=>[n(r,{code:g(x)},{default:l(()=>[n(c)]),_:1},8,["code"])]),customFooter:l(()=>[n(r,{code:g(C)},{default:l(()=>[n(_)]),_:1},8,["code"])]),closeAfterComplete:l(()=>[n(r,{code:g(w)},{default:l(()=>[n(k)]),_:1},8,["code"])]),draggableDialog:l(()=>[n(r,{code:g(D)},{default:l(()=>[n($)]),_:1},8,["code"])]),Attributes:l(()=>[n(s,{data:d})]),Events:l(()=>[n(s,{data:t,"columns-no-default":!1})]),_:1})])}}});export{T as default};
