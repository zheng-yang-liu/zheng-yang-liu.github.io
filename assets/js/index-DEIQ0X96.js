import{d as b,l as c,r as u,b as p,c as f,i as e,w as t,k as r,j as m}from"./index-Cc2LZtMy.js";const y=b({__name:"basicUsage",setup(v){const l=c(!1);return(d,a)=>{const n=u("xy-button"),i=u("xy-dialog");return p(),f("div",null,[e(n,{onClick:a[0]||(a[0]=o=>l.value=!0)},{default:t(()=>[r("打开弹框")]),_:1}),e(i,{visible:l.value,"onUpdate:visible":a[1]||(a[1]=o=>l.value=o)},{default:t(()=>[r(" 这是对话框的内容 ")]),_:1},8,["visible"])])}}}),x=`<template>\r
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
</style>`,_=b({__name:"customFooter",setup(v){const l=c(!1);return(d,a)=>{const n=u("xy-button"),i=u("xy-dialog");return p(),f("div",null,[e(n,{onClick:a[0]||(a[0]=o=>l.value=!0)},{default:t(()=>[r("打开弹框")]),_:1}),e(i,{visible:l.value,"onUpdate:visible":a[3]||(a[3]=o=>l.value=o)},{footer:t(()=>[e(n,{onClick:a[1]||(a[1]=o=>l.value=!1)},{default:t(()=>[r("取消")]),_:1}),e(n,{type:"primary",onClick:a[2]||(a[2]=o=>l.value=!1),style:{"margin-left":"10px"}},{default:t(()=>[r("确定")]),_:1})]),default:t(()=>[r(" 这是对话框的内容 ")]),_:1},8,["visible"])])}}}),k=`<template>\r
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
</style>`,C=b({__name:"closeAfterComplete",setup(v){const l=c(!1),d=async()=>(await(n=>new Promise(i=>setTimeout(i,n)))(3e3),console.log("关闭弹框"),!0);return(a,n)=>{const i=u("xy-button"),o=u("xy-dialog");return p(),f("div",null,[e(i,{onClick:n[0]||(n[0]=s=>l.value=!0)},{default:t(()=>[r("打开弹框")]),_:1}),e(o,{visible:l.value,"onUpdate:visible":n[1]||(n[1]=s=>l.value=s),"default-bottom":"",confirmCallback:d},{default:t(()=>[r(" 这是对话框的内容 ")]),_:1},8,["visible"])])}}}),w=`<template>\r
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
</style>`,$=b({__name:"draggableDialog",setup(v){const l=c(!1),d=c(!1);return(a,n)=>{const i=u("xy-button"),o=u("xy-dialog");return p(),f("div",null,[e(i,{onClick:n[0]||(n[0]=s=>l.value=!0),style:{"margin-right":"10px"}},{default:t(()=>[r("存在范围限制")]),_:1}),e(i,{onClick:n[1]||(n[1]=s=>d.value=!0)},{default:t(()=>[r("不存在范围限制")]),_:1}),e(o,{drag:!0,"default-bottom":"",visible:l.value,"onUpdate:visible":n[2]||(n[2]=s=>l.value=s)},{default:t(()=>[r(" 拖拽存在范围限制 ")]),_:1},8,["visible"]),e(o,{drag:!0,"drag-range":!1,"default-bottom":"",visible:d.value,"onUpdate:visible":n[3]||(n[3]=s=>d.value=s)},{default:t(()=>[r(" 拖拽不存在范围限制 ")]),_:1},8,["visible"])])}}}),D=`<template>\r
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
</style>`,T=b({__name:"index",setup(v){const l=[{title:"基础用法",id:"290950c789dae996defdc25a23138e4e",slot:"basicUsage"},{title:"自定义底部",id:"20540fd4f9e7d24d5574070d7f812792",slot:"customFooter"},{title:"完成任务之后关闭对话框",id:"6aae41ad86d1d3d4e1a62fd909c1114b",slot:"closeAfterComplete"},{title:"可拖拽对话框",id:"c5101a6ace71170386593bc0ca1dacd6",slot:"draggableDialog"},{title:"API",id:"9a9bf1ffec5d01bfd9c15a09c6de6310",children:[{title:"Attributes",id:"6b81ea26df4356f8c042158b039401b3",slot:"Attributes"},{title:"Events",id:"7d28c8fcb0b257a29dd607f307ff33db",slot:"Events"}]}],d=[{name:"visible",explain:"是否显示",type:"boolean"},{name:"width",explain:"宽度",type:"number",default:"500"},{name:"height",explain:"最小高度",type:"number",default:"122"},{name:"title",explain:"标题",type:"string",default:"提示"},{name:"defaultBottom",explain:"是否显示默认底部按钮",type:"boolean",default:"false"},{name:"confirmCallback",explain:"点击确定执行的回调函数,需要有一个返回值,返回值为true时关闭弹窗",type:[{value:"Function",complexType:"()=>boolean"}]},{name:"clickOnExternalClose",explain:"点击外部关闭弹窗",type:"boolean",default:"false"},{name:"escClose",explain:"esc关闭",type:"boolean",default:"true"},{name:"drag",explain:"拖动",type:"boolean",default:"false"},{name:"dragRange",explain:"拖动范围限制",type:"boolean",default:"true"},{name:"dialogStyle",explain:"dialog样式",type:[{value:"object",complexType:"CSSStyleValue"}]}],a=[{name:"handleClose",explain:"关闭事件,`flag=0`右上角关闭/外部 `flag=-1`取消 `flag=1`确定",type:[{value:"Function",complexType:"(visible,flag)=>void"}]}];return(n,i)=>{const o=u("xy-effect-preview"),s=u("xy-attribute-table"),g=u("xy-showcase-page");return p(),f("div",null,[e(g,{introduction:"用于弹出内容或提示用户","page-title":"对话框",catalogue:l},{basicUsage:t(()=>[e(o,{code:m(x)},{default:t(()=>[e(y)]),_:1},8,["code"])]),customFooter:t(()=>[e(o,{code:m(k)},{default:t(()=>[e(_)]),_:1},8,["code"])]),closeAfterComplete:t(()=>[e(o,{code:m(w)},{default:t(()=>[e(C)]),_:1},8,["code"])]),draggableDialog:t(()=>[e(o,{code:m(D)},{default:t(()=>[e($)]),_:1},8,["code"])]),Attributes:t(()=>[e(s,{data:d})]),Events:t(()=>[e(s,{data:a,"columns-no-default":!1})]),_:1})])}}});export{T as default};
