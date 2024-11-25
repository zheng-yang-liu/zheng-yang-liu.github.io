import{d as v,a as p,r as m,o as y,b,e,g as x,f as d,_ as w,c as h,w as r,u as _}from"./index-mpseKrIt.js";const I=v({__name:"basicUsage",setup(V){const o=p("");return(u,a)=>{const l=m("xy-input");return y(),b("div",null,[e(l,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=s=>o.value=s),placeholder:"请输入内容"},null,8,["modelValue"])])}}}),D=`<template>\r
  <div>\r
    <xy-input v-model="testValue" placeholder="请输入内容"></xy-input>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import {ref} from "vue";\r
const testValue = ref<string>('');\r
<\/script>`,z={class:"inputList"},C=v({__name:"inputIcon",setup(V){const o=p(""),u=p(""),a=p(""),l=p(""),s=()=>{alert("iconDown")},g=()=>{alert("beforeIconDown")},n=()=>{alert("afterIconDown")};return(i,t)=>{const c=m("xy-input");return y(),b("div",z,[x("div",null,[d(" 前置图标 "),e(c,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=f=>o.value=f),placeholder:"请输入",beforeIcon:"zhuyi"},null,8,["modelValue"])]),x("div",null,[d(" 后置图标 "),e(c,{modelValue:u.value,"onUpdate:modelValue":t[1]||(t[1]=f=>u.value=f),placeholder:"请输入",size:"default",afterIcon:"sousuo",onAfterIconDown:n},null,8,["modelValue"])]),x("div",null,[d(" 图标点击事件 "),e(c,{modelValue:a.value,"onUpdate:modelValue":t[2]||(t[2]=f=>a.value=f),placeholder:"请输入",onIconDown:s,onBeforeIconDown:g,onAfterIconDown:n,beforeIcon:"zhuyi",afterIcon:"sousuo"},null,8,["modelValue"])]),x("div",null,[d(" 图标不能点击 "),e(c,{modelValue:l.value,"onUpdate:modelValue":t[3]||(t[3]=f=>l.value=f),placeholder:"请输入",onIconDown:s,onBeforeIconDown:g,onAfterIconDown:n,beforeIcon:"zhuyi",afterIcon:"sousuo",iconCanClick:!1},null,8,["modelValue"])])])}}}),S=w(C,[["__scopeId","data-v-3c4724c3"]]),T=`<template>\r
  <div class="inputList">\r
    <div>\r
      前置图标\r
      <xy-input\r
        v-model="testValue1"\r
        placeholder="请输入"\r
        beforeIcon="zhuyi"\r
      ></xy-input>\r
    </div>\r
    <div>\r
      后置图标\r
      <xy-input\r
        v-model="testValue2"\r
        placeholder="请输入"\r
        size="default"\r
        afterIcon="sousuo"\r
        @afterIconDown="afterIconDown"\r
      ></xy-input>\r
    </div>\r
    <div>\r
      图标点击事件\r
      <xy-input\r
        v-model="testValue3"\r
        placeholder="请输入"\r
        @iconDown="iconDown"\r
        @beforeIconDown="beforeIconDown"\r
        @afterIconDown="afterIconDown"\r
        beforeIcon="zhuyi"\r
        afterIcon="sousuo"\r
      ></xy-input>\r
    </div>\r
    <div>\r
      图标不能点击\r
      <xy-input\r
        v-model="testValue4"\r
        placeholder="请输入"\r
        @iconDown="iconDown"\r
        @beforeIconDown="beforeIconDown"\r
        @afterIconDown="afterIconDown"\r
        beforeIcon="zhuyi"\r
        afterIcon="sousuo"\r
        :iconCanClick="false"\r
      ></xy-input>\r
    </div>\r
\r
\r
\r
\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import {ref} from"vue"\r
const testValue1 = ref<string>('')\r
const testValue2 = ref<string>('')\r
const testValue3 = ref<string>('')\r
const testValue4 = ref<string>('')\r
const iconDown = ()=>{\r
  alert('iconDown')\r
}\r
const beforeIconDown = ()=>{\r
  alert('beforeIconDown')\r
}\r
const afterIconDown = ()=>{\r
  alert('afterIconDown')\r
}\r
<\/script>\r
\r
<style scoped lang="scss">\r
.inputList{\r
  display: grid;\r
  grid-template-columns: repeat(auto-fill, 300px);\r
  .xy-input{\r
    margin: 10px 0;\r
  }\r
}\r
</style>`,U=v({__name:"inputClear",setup(V){const o=p("");return(u,a)=>{const l=m("xy-input");return y(),b("div",null,[e(l,{clearable:"",modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=s=>o.value=s),placeholder:"请输入"},null,8,["modelValue"])])}}}),L=`<template>\r
  <div>\r
    <xy-input\r
      clearable\r
      v-model="testValue"\r
      placeholder="请输入"\r
    ></xy-input>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import {ref} from "vue"\r
const testValue = ref<string>('')\r
<\/script>`,k={class:"inputList"},A=v({__name:"inputTextarea",setup(V){const o=p(""),u=p(""),a=p(""),l=p(""),s=p("");return(g,n)=>{const i=m("xy-input");return y(),b("div",k,[x("div",null,[d(" 多行文本允许任意调节 "),e(i,{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=t=>o.value=t),placeholder:"请输入",textarea:""},null,8,["modelValue"])]),x("div",null,[d(" 多行文本不允许调整 "),e(i,{modelValue:u.value,"onUpdate:modelValue":n[1]||(n[1]=t=>u.value=t),placeholder:"请输入",textarea:"",textChangeSize:"none"},null,8,["modelValue"])]),x("div",null,[d(" 多行文本允许水平 "),e(i,{modelValue:a.value,"onUpdate:modelValue":n[2]||(n[2]=t=>a.value=t),placeholder:"请输入",textarea:"",textChangeSize:"horizontal"},null,8,["modelValue"])]),x("div",null,[d(" 多行文本允许垂直 "),e(i,{modelValue:l.value,"onUpdate:modelValue":n[3]||(n[3]=t=>l.value=t),placeholder:"请输入",textarea:"",textChangeSize:"vertical"},null,8,["modelValue"])]),x("div",null,[d(" 多行自动高度 "),e(i,{modelValue:s.value,"onUpdate:modelValue":n[4]||(n[4]=t=>s.value=t),placeholder:"请输入文字",height:"50",width:"240",textarea:"",textChangeSize:"vertical",autoSize:""},null,8,["modelValue"])])])}}}),$=w(A,[["__scopeId","data-v-9bac9212"]]),W=`<template>\r
  <div class="inputList">\r
    <div>\r
      多行文本允许任意调节\r
      <xy-input\r
        v-model="testValue1"\r
        placeholder="请输入"\r
        textarea\r
      ></xy-input>\r
    </div>\r
    <div>\r
      多行文本不允许调整\r
      <xy-input\r
        v-model="testValue2"\r
        placeholder="请输入"\r
        textarea\r
        textChangeSize="none"\r
      ></xy-input>\r
    </div>\r
    <div>\r
      多行文本允许水平\r
      <xy-input\r
        v-model="testValue3"\r
        placeholder="请输入"\r
        textarea\r
        textChangeSize="horizontal"\r
      ></xy-input>\r
    </div>\r
    <div>\r
      多行文本允许垂直\r
      <xy-input\r
        v-model="testValue4"\r
        placeholder="请输入"\r
        textarea\r
        textChangeSize="vertical"\r
      ></xy-input>\r
    </div>\r
    <div>\r
      多行自动高度\r
      <xy-input\r
        v-model="testValue5"\r
        placeholder="请输入文字"\r
        height="50"\r
        width="240"\r
        textarea\r
        textChangeSize="vertical"\r
        autoSize\r
      ></xy-input>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import {ref, reactive} from "vue";\r
const testValue1 = ref<string>('');\r
const testValue2 = ref<string>('');\r
const testValue3 = ref<string>('');\r
const testValue4 = ref<string>('');\r
const testValue5 = ref<string>('');\r
\r
<\/script>\r
\r
<style scoped lang="scss">\r
.inputList{\r
  display: grid;\r
  grid-template-columns: repeat(auto-fill, 300px);\r
  .xy-input{\r
    margin: 10px 0;\r
  }\r
}\r
</style>`,B=v({__name:"password",setup(V){const o=p("");return(u,a)=>{const l=m("xy-input");return y(),h(l,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=s=>o.value=s),placeholder:"请输入密码",password:""},null,8,["modelValue"])}}}),F=`<template>\r
 <xy-input\r
   v-model="testValue"\r
   placeholder="请输入密码"\r
   password\r
 ></xy-input>\r
</template>\r
\r
<script setup lang="ts">\r
import {ref} from "vue"\r
const testValue = ref<string>('')\r
<\/script>`,E={class:"inputList"},P=v({__name:"inputSlot",setup(V){const o=p(""),u=p(""),a=p(""),l=()=>{alert("前置slot--prepend点击")},s=()=>{alert("后置slot--append点击")};return(g,n)=>{const i=m("xy-icon"),t=m("xy-input");return y(),b("div",E,[d(" 前置slot "),e(t,{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=c=>o.value=c),maxWidth:"400"},{prepend:r(()=>[e(i,{icon:"iconfont icon-kuaidiyuan-xianxing"})]),_:1},8,["modelValue"]),d(" 后置slot "),e(t,{modelValue:u.value,"onUpdate:modelValue":n[1]||(n[1]=c=>u.value=c),maxWidth:"400"},{append:r(()=>[e(i,{icon:"iconfont icon-sousuo"})]),_:1},8,["modelValue"]),d(" 插槽 "),e(t,{modelValue:a.value,"onUpdate:modelValue":n[2]||(n[2]=c=>a.value=c),maxWidth:"400",onPrependDown:l,onAppendDown:s},{prepend:r(()=>[e(i,{icon:"iconfont icon-caidan"})]),append:r(()=>[e(i,{icon:"iconfont icon-shangchuan"})]),_:1},8,["modelValue"])])}}}),N=w(P,[["__scopeId","data-v-c74bf546"]]),j=`<template>\r
  <div class="inputList">\r
    前置slot\r
    <xy-input\r
      v-model="testValue1"\r
      maxWidth="400"\r
    >\r
      <template #prepend>\r
        <xy-icon icon="iconfont icon-kuaidiyuan-xianxing"></xy-icon>\r
      </template>\r
    </xy-input>\r
    后置slot\r
    <xy-input\r
      v-model="testValue2"\r
      maxWidth="400"\r
    >\r
      <template #append>\r
        <xy-icon icon="iconfont icon-sousuo"></xy-icon>\r
      </template>\r
    </xy-input>\r
    插槽\r
    <xy-input\r
      v-model="testValue3"\r
      maxWidth="400"\r
      @prepend-down="prependDown"\r
      @append-down="appendDown"\r
    >\r
      <template #prepend>\r
        <xy-icon icon="iconfont icon-caidan"></xy-icon>\r
      </template>\r
      <template #append>\r
        <xy-icon icon="iconfont icon-shangchuan"></xy-icon>\r
      </template>\r
    </xy-input>\r
\r
\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import {ref} from "vue"\r
\r
const testValue1 = ref<string>('')\r
const testValue2 = ref<string>('')\r
const testValue3 = ref<string>('')\r
const prependDown = () => {\r
  alert('前置slot--prepend点击')\r
};\r
const appendDown = () => {\r
  alert('后置slot--append点击')\r
};\r
\r
<\/script>\r
<style lang="scss" scoped>\r
.inputList {\r
  .xy-input {\r
    margin: 10px 0;\r
  }\r
}\r
</style>`,G=v({__name:"index",setup(V){const o=[{title:"基础用法",id:"837c3524ab84a9ae1663d4d6b3379323",slot:"basicUsage"},{title:"输入框图标",id:"d6015ca872c645fb92af24b88e37d5ba",slot:"inputIcon",explain:"可以设置输入框的前置图标和后置图标，以及点击事件"},{title:"一键清空",id:"b93c789688567beb8d970d81c24555e2",slot:"inputClear",explain:"`clearable`属性可以让输入框一键清空已经输入的内容"},{title:"密码框",id:"8ed9eb821d731adf05cc88ce3713601d",slot:"password",explain:"`password`属性可以让输入框变成密码框"},{title:"文本框slot",id:"43df4f5f467cf16f1dc11d3f62c1f726",slot:"inputSlot",explain:"可以设置输入框的前置插槽`prepend`和后置插槽`append`，以及点击事件"},{title:"API",id:"d0e02544670c02a8c116aab2baa0f67f",children:[{title:"Attributes",id:"1563c393dbe897320495e143e38edfa1",slot:"Attributes"},{title:"Events",id:"a8e7a21914fec6dd472b17392b59322e",slot:"Events"},{title:"Slots",id:"d8432f9d5e78a6ddd5e81f36bd8f1060",slot:"Slots"}]}],u=[{name:"width",explain:"宽度",type:"number",default:"0"},{name:"maxWidth",explain:"最大宽度",type:"number",default:"0"},{name:"height",explain:"高度",type:"number",default:"0"},{name:"size",explain:"尺寸",type:[{value:"inputSize",complexType:"'small' | 'default' | 'large'"}],default:"default"},{name:"disabled",explain:"是否禁用",type:"boolean",default:"false"},{name:"focusoutColor",explain:"失去焦点时边框的颜色",type:"string",default:"#c0c4cc"},{name:"focusColor",explain:"获取焦点时边框的颜色",type:"string",default:"#409eff"},{name:"clearable",explain:"是否可清空",type:"boolean",default:"false"},{name:"placeholder",explain:"占位符，提示文字，输入框为空时显示",type:"string"},{name:"beforeIcon",explain:"输入框前置图标",type:"string"},{name:"afterIcon",explain:"输入框后置图标",type:"string"},{name:"iconCanClick",explain:"输入框图标是否可点击",type:"boolean",default:"true"},{name:"password",explain:"是否是密码框",type:"boolean",default:"false"},{name:"textarea",explain:"是否是文本域",type:"boolean",default:"false"},{name:"textChangeSize",explain:"textarea尺寸的改变方式,`none`不允许调整、`both`允许任意调整、`horizontal`允许水平调整、`vertical`允许垂直调整",type:[{value:"sizeType",complexType:"'none' | 'both' | 'horizontal'|'vertical'"}],default:"both"},{name:"autoSize",explain:"textarea是否自动高度",type:"boolean",default:"false"},{name:"prependStyle",explain:"前置slot样式",type:[{value:"object",complexType:"CSSProperties{}"}]},{name:"appendStyle",explain:"后置slot样式",type:[{value:"object",complexType:"CSSProperties{}"}]},{name:"minLength",explain:"最小长度",type:"number"},{name:"maxLength",explain:"最大长度",type:"number"},{name:"bgColor",explain:"背景颜色",type:"string",default:"white"}],a=[{name:"iconDown",explain:"图标点击事件",type:[{value:"Function",complexType:"() => void"}]},{name:"beforeIconDown",explain:"前置图标点击事件",type:[{value:"Function",complexType:"() => void"}]},{name:"afterIconDown",explain:"后置图标点击事件",type:[{value:"Function",complexType:"() => void"}]},{name:"prependDown",explain:"前置slot点击事件",type:[{value:"Function",complexType:"() => void"}]},{name:"appendDown",explain:"后置slot点击事件",type:[{value:"Function",complexType:"() => void"}]}],l=[{name:"prepend",explain:"前置slot，只对单行文本框有效",type:"slot"},{name:"append",explain:"后置slot，只对单行文本框有效",type:"slot"}];return(s,g)=>{const n=m("xy-effect-preview"),i=m("xy-attribute-table"),t=m("xy-showcase-page");return y(),b("div",null,[e(t,{introduction:"","page-title":"input输入框",catalogue:o},{basicUsage:r(()=>[e(n,{code:_(D)},{default:r(()=>[e(I)]),_:1},8,["code"])]),inputIcon:r(()=>[e(n,{code:_(T)},{default:r(()=>[e(S)]),_:1},8,["code"])]),inputClear:r(()=>[e(n,{code:_(L)},{default:r(()=>[e(U)]),_:1},8,["code"])]),inputTextarea:r(()=>[e(n,{code:_(W)},{default:r(()=>[e($)]),_:1},8,["code"])]),password:r(()=>[e(n,{code:_(F)},{default:r(()=>[e(B)]),_:1},8,["code"])]),inputSlot:r(()=>[e(n,{code:_(j)},{default:r(()=>[e(N)]),_:1},8,["code"])]),Attributes:r(()=>[e(i,{data:u})]),Events:r(()=>[e(i,{data:a,"columns-no-default":!0})]),Slots:r(()=>[e(i,{data:l,"columns-no-default":!0})]),_:1})])}}});export{G as default};
