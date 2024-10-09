import{d as g,C,b as u,c as m,g as e,k as a,t as d,j as p,_ as D,D as N,p as w,e as I,r as f,i as n,w as o,E as U,l as T,G as Z,H as z,I as W,J as Q,K as $,L as _,F as R,m as G,z as L,M as ee,N as ne,O as te,n as B,P as X,o as re,v as k,Q as Y,R as ae}from"./index-D92MjMHd.js";const oe={class:"afterList"},se={class:"afterItem"},le={class:"afterItem"},ce={class:"afterItem"},ie=g({__name:"convertTimeFormat",setup(c){const t=new Date,r=t.getTime(),s={year:2021,month:1,day:1,hour:10,minute:9,second:8},l=C("YYYY-MM-DD",t),i=C("YYYY-MM-DD HH:mm:ss",r),v=C("YYYY年MM月DD日 HH时mm分s秒",s);return(x,y)=>(u(),m("div",oe,[e("div",se,[e("p",null,[a("转换前的时间格式(Date对象)："),e("code",null,d(p(t)),1)]),e("p",null,[a("转换后的的时间格式(YYYY-MM-DD)："),e("code",null,d(p(l)),1)])]),e("div",le,[e("p",null,[a("转换前的时间格式(时间戳)："),e("code",null,d(p(r)),1)]),e("p",null,[a("转换后的的时间格式(YYYY-MM-DD HH:mm:ss)："),e("code",null,d(p(i)),1)])]),e("div",ce,[e("p",null,[a("转换前的时间格式(formatDateNum时间对象)："),e("code",null,d(s))]),e("p",null,[a("转换后的的时间格式(YYYY年MM月DD日 HH时mm分s秒)："),e("code",null,d(p(v)),1)])])]))}}),de=D(ie,[["__scopeId","data-v-b539ddce"]]),pe=`<template>\r
  <div class="afterList">\r
    <div class="afterItem">\r
      <p>转换前的时间格式(Date对象)：<code>{{date}}</code> </p>\r
      <p>转换后的的时间格式(YYYY-MM-DD)：<code>{{ afterDate }}</code> </p>\r
    </div>\r
\r
    <div class="afterItem">\r
      <p>转换前的时间格式(时间戳)：<code>{{timeStamp}}</code> </p>\r
      <p>转换后的的时间格式(YYYY-MM-DD HH:mm:ss)：<code>{{ afterTimeStamp }}</code>  </p>\r
    </div>\r
\r
    <div class="afterItem">\r
      <p>转换前的时间格式(formatDateNum时间对象)：<code>{{formatDateNum}}</code> </p>\r
      <p>转换后的的时间格式(YYYY年MM月DD日 HH时mm分s秒)：<code>{{ afterFormatDateNum }}</code> </p>\r
    </div>\r
\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import {Tools} from "yanyan-ui";\r
const date = new Date();\r
const timeStamp = date.getTime();\r
const formatDateNum = {\r
  year:2021,\r
  month:1,\r
  day:1,\r
  hour:10,\r
  minute:9,\r
  second:8\r
}\r
const afterDate = Tools.convertTimeFormat('YYYY-MM-DD',date);\r
\r
const afterTimeStamp = Tools.convertTimeFormat('YYYY-MM-DD HH:mm:ss',timeStamp);\r
\r
const afterFormatDateNum = Tools.convertTimeFormat('YYYY年MM月DD日 HH时mm分s秒',formatDateNum);\r
\r
//时间格式对应转换方式\r
//YYYY -- 年\r
//MM -- 月 | M -- 月(不补0)\r
//DD -- 日 | D -- 日(不补0)\r
//HH -- 时 | H -- 时(不补0)\r
//mm -- 分 | m -- 分(不补0)\r
//ss -- 秒 | s -- 秒(不补0)\r
<\/script>\r
\r
<style scoped lang="scss">\r
.afterList{\r
  .afterItem:nth-child(2n){\r
    margin: 20px 0;\r
  }\r
  .afterItem{\r
    font-size: 14px;\r
  }\r
}\r
</style>`,ue=c=>(w("data-v-5b4d7eee"),c=c(),I(),c),me={class:"afterList"},ve={class:"afterItem"},ye={class:"afterItem"},fe={class:"afterItem"},xe=ue(()=>e("p",null,[a("转换前的时间格式："),e("code",null,"2024.10")],-1)),M="2024.10.09",ge=g({__name:"convertDateFormatByTemplate",setup(c){const t=N(M,"YYYY-MM-DD"),r=N(M,"YYYY[ MM ]DD"),s=N("2024.10","YYYY年MM月");return(l,i)=>(u(),m("div",me,[e("div",ve,[e("p",null,[a("转换前的时间格式："),e("code",null,d(M))]),e("p",null,[a("转换后的的时间格式(YYYY-MM-DD)："),e("code",null,d(p(t)),1)])]),e("div",ye,[e("p",null,[a("转换前的时间格式："),e("code",null,d(M))]),e("p",null,[a("转换后的的时间格式(YYYY[ MM ]DD)："),e("code",null,d(p(r)),1)])]),e("div",fe,[xe,e("p",null,[a("转换后的的时间格式(YYYY年MM月)："),e("code",null,d(p(s)),1)])])]))}}),he=D(ge,[["__scopeId","data-v-5b4d7eee"]]),be=`<template>\r
  <div class="afterList">\r
    <div class="afterItem">\r
      <p>转换前的时间格式：<code>{{date}}</code> </p>\r
      <p>转换后的的时间格式(YYYY-MM-DD)：<code>{{ afterDate }}</code></p>\r
    </div>\r
\r
    <div class="afterItem">\r
      <p>转换前的时间格式：<code>{{date}}</code> </p>\r
      <p>转换后的的时间格式(YYYY[ MM ]DD)：<code>{{ afterTimeStamp }}</code></p>\r
    </div>\r
\r
    <div class="afterItem">\r
      <p>转换前的时间格式：<code>2024.10</code> </p>\r
      <p>转换后的的时间格式(YYYY年MM月)：<code>{{ afterFormatDateNum }}</code></p>\r
    </div>\r
\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import {Tools} from "yanyan-ui";\r
\r
const date = '2024.10.09';\r
\r
const afterDate = Tools.convertDateFormatByTemplate(date,'YYYY-MM-DD');\r
\r
const afterTimeStamp = Tools.convertDateFormatByTemplate(date,"YYYY[ MM ]DD");\r
\r
const afterFormatDateNum = Tools.convertDateFormatByTemplate('2024.10',"YYYY年MM月");\r
// const afterFormatDateNum = Tools.convertDateFormatByTemplate(date,"YYYY年MM月");\r
\r
\r
<\/script>\r
\r
<style scoped lang="scss">\r
.afterList{\r
  .afterItem:nth-child(2n){\r
    margin: 20px 0;\r
  }\r
  .afterItem{\r
    font-size: 14px;\r
  }\r
}\r
</style>`,Te=g({__name:"groupBy",setup(c){const t=[{name:"张三",age:18,address:"北京"},{name:"李四",age:20,address:"上海"},{name:"王五",age:17,address:"北京"},{name:"赵六",age:20,address:"上海"},{name:"孙七",age:18,address:"北京"},{name:"周八",age:20,address:"上海"},{name:"吴九",age:16,address:"北京"},{name:"郑十",age:20,address:"上海"}],r=()=>{console.log(`原始数据
`,t),console.log(`按照年龄分组
`,U(t,"age")),console.log(`年龄小于18
`,U(t,s=>s.age<18))};return(s,l)=>{const i=f("xy-button");return u(),m("div",null,[n(i,{onClick:r},{default:o(()=>[a("开始分类")]),_:1}),a(" 通过控制台查看结果 ")])}}}),_e=`<template>\r
  <div>\r
    <xy-button @click="actionGroup">开始分类</xy-button>\r
    通过控制台查看结果\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import {Tools} from "yanyan-ui";\r
const arrayList = [\r
  {\r
    name:"张三",\r
    age:18,\r
    address:"北京"\r
  },\r
  {\r
    name:"李四",\r
    age:20,\r
    address:"上海"\r
  },\r
  {\r
    name:"王五",\r
    age:17,\r
    address:"北京"\r
  },\r
  {\r
    name:"赵六",\r
    age:20,\r
    address:"上海"\r
  },\r
  {\r
    name:"孙七",\r
    age:18,\r
    address:"北京"\r
  },\r
  {\r
    name:"周八",\r
    age:20,\r
    address:"上海"\r
  },\r
  {\r
    name:"吴九",\r
    age:16,\r
    address:"北京"\r
  },\r
  {\r
    name:"郑十",\r
    age:20,\r
    address:"上海"\r
  }\r
]\r
const actionGroup = ()=>{\r
  console.log('原始数据\\n',arrayList);\r
  console.log('按照年龄分组\\n',Tools.groupBy(arrayList,'age'));\r
  console.log('年龄小于18\\n',Tools.groupBy(arrayList,(item:any)=>item.age<18));\r
  //返回值类型\r
  //return:{\r
  // true:Array<any>,满足条件的元素\r
  // false:Array<any>不满足条件的元素\r
  // }|{key:Array<any>...}返回值为对象时，key值为分组的键值\r
}\r
<\/script>`,De={class:"list"},Fe={class:"item"},Ye={class:"item"},Me={class:"item"},we=g({__name:"deepCopy",setup(c){const t=T([{name:"张三",age:18,address:"北京市朝阳区"},{name:"李四",age:20,address:"北京市海淀区"},{name:"王五",age:22,address:"北京市昌平区"}]),r=T(t.value),s=T(Z(t.value)),l=()=>{r.value[1].name="李四改变-浅拷贝",r.value[1].address="北京市海淀区改变"},i=()=>{s.value[1].name="李四改变-深拷贝",s.value[1].address="北京市海淀区改变"};return(v,x)=>{const y=f("xy-button");return u(),m("div",De,[n(y,{onClick:l},{default:o(()=>[a("浅拷贝改变李四，地址")]),_:1}),n(y,{onClick:i},{default:o(()=>[a("深拷贝改变李四，地址")]),_:1}),e("div",Fe,[a("原始值："),e("code",null,d(t.value),1)]),e("div",Ye,[a("浅拷贝："),e("code",null,d(r.value),1)]),e("div",Me,[a("深拷贝："),e("code",null,d(s.value),1)])])}}}),Ie=D(we,[["__scopeId","data-v-0fb15bb4"]]),Ce=`<template>\r
  <div class="list">\r
    <xy-button @click="shallowChange">浅拷贝改变李四，地址</xy-button>\r
    <xy-button @click="deepChange">深拷贝改变李四，地址</xy-button>\r
    <div class="item">原始值：<code>{{rawData}}</code></div>\r
    <div class="item">浅拷贝：<code>{{shallowCopy}}</code></div>\r
    <div class="item">深拷贝：<code>{{deepCopyData}}</code></div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import {ref} from "vue";\r
import {Tools} from "yanyan-ui";\r
\r
const rawData = ref([\r
  {\r
    name: "张三",\r
    age: 18,\r
    address: "北京市朝阳区"\r
  },\r
  {\r
    name: "李四",\r
    age: 20,\r
    address: "北京市海淀区"\r
  },\r
  {\r
    name: "王五",\r
    age: 22,\r
    address: "北京市昌平区"\r
  }\r
])\r
const shallowCopy = ref(rawData.value);\r
\r
const deepCopyData = ref(Tools.deepCopy(rawData.value))\r
\r
const shallowChange = () => {\r
  shallowCopy.value[1].name = "李四改变-浅拷贝";\r
  shallowCopy.value[1].address = "北京市海淀区改变";\r
}\r
\r
const deepChange = () => {\r
  deepCopyData.value[1].name = "李四改变-深拷贝";\r
  deepCopyData.value[1].address = "北京市海淀区改变";\r
}\r
<\/script>\r
\r
<style scoped lang="scss">\r
.list{\r
  div:first-child{\r
    margin-right: 10px;\r
  }\r
  .item{\r
    margin: 10px 0 ;\r
  }\r
}\r
</style>`,Ne={style:{margin:"10px 0"}},Ae=g({__name:"accordingToKeyUnique",setup(c){const t=[{id:"1",name:"张三",age:18},{id:"2",name:"李四",age:20},{id:"1",name:"张三",age:19}],r=z(t,"id");return(s,l)=>(u(),m("div",null,[e("div",null,[e("code",null,"原始数据:"+d(t))]),e("div",Ne,[e("code",null,"去重数据:"+d(p(r)),1)])]))}}),Re=`<template>\r
  <div>\r
    <div><code>原始数据:{{original}}</code></div>\r
    <div style="margin: 10px 0"><code>去重数据:{{afterScreen}}</code></div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import {Tools} from "yanyan-ui";\r
const original = [\r
  {\r
    id:'1',\r
    name:"张三",\r
    age:18,\r
  },\r
  {\r
    id:'2',\r
    name:"李四",\r
    age:20,\r
  },\r
  {\r
    id:"1",\r
    name:"张三",\r
    age:19,\r
  }\r
]\r
const afterScreen = Tools.accordingToKeyUnique(original, 'id')\r
<\/script>`,Ge={class:"item"},qe={class:"item"},Le=g({__name:"debounce",setup(c){const t=T(0),r=T(0),s=()=>{const l=()=>{t.value++},i=()=>{console.log("lll"),r.value++},v=setInterval(l,100),x=W(i,1e3),y=setInterval(x,100);setTimeout(()=>{clearInterval(v),clearInterval(y)},3e3)};return(l,i)=>{const v=f("xy-button");return u(),m("div",null,[n(v,{onClick:s},{default:o(()=>[a("开始")]),_:1}),e("div",Ge,[a("未使用防抖："),e("code",null,d(t.value),1)]),e("div",qe,[a("使用防抖："),e("code",null,d(r.value),1)])])}}}),Ue=D(Le,[["__scopeId","data-v-ccca1220"]]),Be=`<template>\r
  <div>\r
    <xy-button @click="active">开始</xy-button>\r
    <div class="item">未使用防抖：<code>{{debounceNum}}</code></div>\r
    <div class="item">使用防抖：<code>{{noDebounceNum}}</code></div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import {ref} from "vue";\r
import {Tools} from "yanyan-ui";\r
const debounceNum = ref(0);\r
const noDebounceNum = ref(0);\r
\r
const active = ()=>{\r
  const addDe = () => {\r
    debounceNum.value++;\r
  };\r
  const addNoDe = () => {\r
    console.log('lll')\r
    noDebounceNum.value++;\r
  };\r
  const setDe = setInterval(addDe, 100);\r
  const setNoDe = Tools.debounce(addNoDe,1000);\r
  const acSetNoDe = setInterval(setNoDe,100);\r
\r
  setTimeout(()=>{\r
    clearInterval(setDe);\r
    clearInterval(acSetNoDe);\r
  },3000)\r
}\r
<\/script>\r
\r
<style scoped lang="scss">\r
.item{\r
  margin: 10px 0;\r
}\r
</style>`,S=`data:image/png;base64,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\r
`,Xe=g({__name:"base64ToFile",setup(c){const t=()=>{const r=Q(S,"test.png");console.log(S),console.log(`file
`,r)};return(r,s)=>{const l=f("xy-button");return u(),m("div",null,[n(l,{onClick:t},{default:o(()=>[a("开始转换")]),_:1}),a(" 通过控制台查看结果 ")])}}}),ke=`<template>\r
  <div>\r
    <xy-button @click="active">开始转换</xy-button>&nbsp;通过控制台查看结果\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import {Tools} from "yanyan-ui";\r
import base64Data from "./base64Data.txt?raw"\r
\r
const active = () =>{\r
  const file = Tools.base64ToFile(base64Data,'test.png');\r
  console.log(base64Data);\r
  console.log('file\\n', file);\r
}\r
<\/script>`,Se=g({__name:"fileToBase64",setup(c){const t=()=>{const r=document.createElement("input");r.type="file",r.onchange=s=>{const l=s.target.files[0];$(l,i=>{console.log(`file
`,l),console.log(i)})},r.click()};return(r,s)=>{const l=f("xy-button");return u(),m("div",null,[n(l,{onClick:t},{default:o(()=>[a("获取文件")]),_:1}),a(" 通过控制台查看结果 ")])}}}),je=`<template>\r
  <div>\r
    <xy-button @click="getFile">获取文件</xy-button>&nbsp;通过控制台查看结果\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import {Tools} from "yanyan-ui";\r
const getFile = ()=>{\r
  const input = document.createElement('input');\r
  input.type = 'file';\r
  input.onchange = (e:any)=>{\r
    const file = e.target.files[0];\r
    Tools.fileToBase64(file,(baseStr)=>{\r
      console.log('file\\n',file);\r
      console.log(baseStr);\r
    });\r
  }\r
  input.click();\r
}\r
<\/script>`,Ee={class:"item"},Pe=g({__name:"getType",setup(c){const t=[{name:"true/false",type:_(!0)},{name:"1",type:_(1)},{name:'"1"',type:_("1")},{name:"Function",type:_(()=>{})},{name:"[]",type:_([])},{name:"date",type:_(new Date)},{name:"regExp -正则",type:_(/./)},{name:"undefined",type:_(void 0)},{name:"null",type:_(null)},{name:"{}",type:_({})},{name:"blob -二进制",type:_(new Blob)},{name:"formData -表单数据",type:_(new FormData)},{name:"promise",type:_(new Promise(()=>{}))}];return(r,s)=>(u(),m("div",null,[(u(),m(R,null,G(t,l=>e("code",Ee,[a(d(l.name)+" 的数据类型为 ",1),e("em",null,d(l.type),1)])),64))]))}}),He=D(Pe,[["__scopeId","data-v-e6763f19"]]),Je=`<template>\r
  <div>\r
    <template v-for="item in type">\r
      <code class="item">{{item.name}} 的数据类型为 <em>{{item.type}}</em></code>\r
    </template>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import {Tools} from "yanyan-ui";\r
const type = [\r
  {\r
    name:"true/false",\r
    type:Tools.getType(true)\r
  },\r
  {\r
    name:'1',\r
    type:Tools.getType(1)\r
  },\r
  {\r
    name:'"1"',\r
    type:Tools.getType("1")\r
  },\r
  {\r
    name:"Function",\r
    type:Tools.getType(()=>{})\r
  },\r
  {\r
    name:'[]',\r
    type:Tools.getType([])\r
  },\r
  {\r
    name:"date",\r
    type:Tools.getType(new Date())\r
  },\r
  {\r
    name:"regExp -正则",\r
    type:Tools.getType(/./)\r
  },\r
  {\r
    name:'undefined',\r
    type:Tools.getType(undefined)\r
  },\r
  {\r
    name: 'null',\r
    type: Tools.getType(null)\r
  },\r
  {\r
    name:'{}',\r
    type:Tools.getType({})\r
  },\r
  {\r
    name:"blob -二进制",\r
    type:Tools.getType(new Blob())\r
  },\r
  {\r
    name:'formData -表单数据',\r
    type:Tools.getType(new FormData())\r
  },\r
  {\r
    name:"promise",\r
    type:Tools.getType(new Promise(()=>{}))\r
  }\r
]\r
<\/script>\r
\r
<style scoped lang="scss">\r
.item{\r
  display: block;\r
  margin: 10px 0;\r
}\r
</style>`,q=[{address:"河北省",children:[{address:"石家庄市",children:[{address:"长安区"},{address:"桥西区"}]},{address:"唐山市",children:[{address:"路北区"},{address:"路南区"}]}]},{address:"山西省",children:[{address:"太原市",children:[{address:"小店区"},{address:"迎泽区"}]},{address:"大同市",children:[{address:"城区"},{address:"矿区"}]}]}],Ke=c=>(w("data-v-ee0943a7"),c=c(),I(),c),Oe={class:"list"},Ve={class:"item"},Ze={key:0,class:"item"},ze=Ke(()=>e("div",null,"转换后",-1)),We=g({__name:"calculateItemDepth",setup(c){const t=JSON.stringify(q,null,2),r=T(!1),s=T(""),l=()=>{const{updatedList:i,nextPos:v}=ee(q,10,0,0);s.value=JSON.stringify(i,null,2),r.value=!0};return(i,v)=>{const x=f("xy-button"),y=f("xy-code-preview");return u(),m("div",Oe,[e("div",Ve,[e("div",null,[a("转换前 "),n(x,{onClick:l},{default:o(()=>[a("开始转换 ")]),_:1})]),n(y,{code:p(t),language:"JavaScript"},null,8,["code"])]),r.value?(u(),m("div",Ze,[ze,n(y,{code:s.value,language:"JavaScript"},null,8,["code"])])):L("",!0)])}}}),Qe=D(We,[["__scopeId","data-v-ee0943a7"]]),$e=`<template>\r
  <div class="list">\r
    <div class="item">\r
      <div>转换前\r
        <xy-button\r
          @click=active\r
        >开始转换\r
        </xy-button>\r
      </div>\r
      <xy-code-preview :code="formatData" language="JavaScript"></xy-code-preview>\r
    </div>\r
    <div class="item" v-if="showUpData">\r
      <div>转换后</div>\r
      <xy-code-preview :code="showUpdatedList" language="JavaScript"></xy-code-preview>\r
    </div>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import {ref} from "vue";\r
import {Tools} from "yanyan-ui";\r
import {rawData} from "./rawData"\r
const formatData = JSON.stringify(rawData, null, 2)\r
const showUpData = ref(false)\r
const showUpdatedList = ref('')\r
\r
const active = ()=>{\r
  const {updatedList,nextPos} = Tools.calculateItemDepth(\r
    rawData,\r
    10,\r
    0,\r
    0\r
  )\r
  showUpdatedList.value = JSON.stringify(updatedList, null, 2)\r
  showUpData.value = true\r
}\r
<\/script>\r
\r
<style scoped lang="scss">\r
.list{\r
  display:flex;\r
  justify-content:space-between;\r
  .item{\r
    width:47%;\r
    div{\r
      height: 32px;\r
      line-height: 32px;\r
      text-align:center;\r
      margin-bottom:5px ;\r
      div{\r
        margin-left: 5px;\r
      }\r
    }\r
  }\r
}\r
</style>\r
`,en=c=>(w("data-v-9d269ea7"),c=c(),I(),c),nn={class:"list"},tn={class:"item"},rn={key:0,class:"item"},an=en(()=>e("div",null,[a("搜索到的数据 "),e("em",null,[e("code",null,"条件:address===长安区")])],-1)),on=g({__name:"deepLookup",setup(c){const t=T(!1),r=T(""),s=()=>{const l=ne(q,i=>i.address==="长安区");r.value=JSON.stringify(l,null,2),t.value=!0};return(l,i)=>{const v=f("xy-button"),x=f("xy-code-preview");return u(),m("div",nn,[e("div",tn,[e("div",null,[a("原始数据 "),n(v,{onClick:s},{default:o(()=>[a("开始搜索 ")]),_:1})]),n(x,{code:"原始数据参考calculateItemDepth的原始数据",language:"JavaScript"})]),t.value?(u(),m("div",rn,[an,n(x,{code:r.value,language:"JavaScript"},null,8,["code"])])):L("",!0)])}}}),sn=D(on,[["__scopeId","data-v-9d269ea7"]]),ln=`<template>\r
  <div class="list">\r
    <div class="item">\r
      <div>原始数据\r
        <xy-button\r
          @click=active\r
        >开始搜索\r
        </xy-button>\r
      </div>\r
      <xy-code-preview code="原始数据参考calculateItemDepth的原始数据" language="JavaScript"></xy-code-preview>\r
    </div>\r
    <div class="item" v-if="showUpData">\r
      <div>搜索到的数据 <em><code>条件:address===长安区</code></em></div>\r
      <xy-code-preview :code="showUpdatedList" language="JavaScript"></xy-code-preview>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import {ref} from "vue";\r
import {Tools} from "yanyan-ui";\r
import {rawData} from "./rawData"\r
const showUpData = ref(false)\r
const showUpdatedList = ref('')\r
\r
const active = ()=>{\r
  const lookup = Tools.deepLookup(rawData,(item:any)=>item.address==="长安区")\r
  showUpdatedList.value = JSON.stringify(lookup, null, 2)\r
  showUpData.value = true\r
}\r
<\/script>\r
\r
<style scoped lang="scss">\r
.list{\r
  display: grid;\r
  grid-template-columns:repeat(auto-fill,minmax(400px,1fr));\r
  .item{\r
    width:100%;\r
    div{\r
      max-width: 400px;\r
      height: 32px;\r
      line-height: 32px;\r
      text-align:center;\r
      margin-bottom:5px ;\r
      div{\r
        margin-left: 5px;\r
      }\r
    }\r
    ::v-deep(pre){\r
       max-width: 400px;\r
    }\r
  }\r
}\r
</style>\r
`,cn={class:"item"},dn={class:"item"},pn=g({__name:"throttle",setup(c){const t=T(0),r=T(0),s=()=>{const l=()=>{t.value++},i=()=>{console.log("lll"),r.value++},v=setInterval(l,100),x=te(i,1e3),y=setInterval(x,100);setTimeout(()=>{clearInterval(v),clearInterval(y)},4e3)};return(l,i)=>{const v=f("xy-button");return u(),m("div",null,[n(v,{onClick:s},{default:o(()=>[a("开始")]),_:1}),e("div",cn,[a("未使用节流："),e("code",null,d(t.value),1)]),e("div",dn,[a("使用节流："),e("code",null,d(r.value),1)])])}}}),un=D(pn,[["__scopeId","data-v-00e375be"]]),mn=`<template>\r
  <div>\r
    <xy-button @click="active">开始</xy-button>\r
    <div class="item">未使用节流：<code>{{throttleNum}}</code></div>\r
    <div class="item">使用节流：<code>{{noThrottleNum}}</code></div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import {ref} from "vue";\r
import {Tools} from "yanyan-ui";\r
const throttleNum = ref(0);\r
const noThrottleNum = ref(0);\r
\r
const active = ()=>{\r
  const addDe = () => {\r
    throttleNum.value++;\r
  };\r
  const addNoDe = () => {\r
    console.log('lll')\r
    noThrottleNum.value++;\r
  };\r
  const setDe = setInterval(addDe, 100);\r
  const setNoDe = Tools.throttle(addNoDe,1000);\r
  const acSetNoDe = setInterval(setNoDe,100);\r
\r
  setTimeout(()=>{\r
    clearInterval(setDe);\r
    clearInterval(acSetNoDe);\r
  },4000)\r
}\r
<\/script>\r
\r
<style scoped lang="scss">\r
.item{\r
  margin: 10px 0;\r
}\r
</style>`,vn={class:"list"},yn={class:"item"},fn={class:"item"},A="春风和煦,炎阳似火",xn=g({__name:"copyText",setup(c){const t=async()=>{await B(A,!1)},r=async()=>{const s=await B(A,!1);s.code===200&&X("success","自定义Msg"+s.message),s.code===100&&X("error","自定义Msg"+s.message)};return(s,l)=>{const i=f("xy-button"),v=f("xy-code-preview"),x=f("xy-input");return u(),m("div",vn,[e("div",yn,[n(i,{onClick:t},{default:o(()=>[a("点击复制下面的文字")]),_:1}),n(i,{onClick:r},{default:o(()=>[a("点击复制自定义msg")]),_:1}),n(v,{code:A,style:{width:"200px",margin:"10px 0"}})]),e("div",fn,[n(x,{textarea:"",height:"150",width:"400"})])])}}}),gn=D(xn,[["__scopeId","data-v-18015c72"]]),hn=`<template>\r
  <div class="list">\r
    <div class="item">\r
      <xy-button @click="copy">点击复制下面的文字</xy-button>\r
      <xy-button @click="copyMsg">点击复制自定义msg</xy-button>\r
      <xy-code-preview\r
        :code="copyTxt"\r
        style="width: 200px;margin: 10px 0"\r
      ></xy-code-preview>\r
    </div>\r
    <div class="item">\r
      <xy-input textarea height="150" width="400"></xy-input>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import {Tools} from "yanyan-ui";\r
const copyTxt = "春风和煦,炎阳似火"\r
const copy = async()=>{\r
  await Tools.copyText(copyTxt,false);\r
}\r
const copyMsg = async()=>{\r
  const res = await Tools.copyText(copyTxt,false);\r
  if(res.code === 200){\r
    Tools.showMsg('success',"自定义Msg"+res.message)\r
  }\r
  if(res.code === 100){\r
    Tools.showMsg('error',"自定义Msg"+res.message)\r
  }\r
}\r
<\/script>\r
\r
<style scoped lang="scss">\r
.list{\r
  .item{\r
    div{\r
      margin: 5px 0;\r
    }\r
    div:nth-child(2){\r
      margin-left: 5px;\r
    }\r
  }\r
}\r
</style>`,bn=c=>(w("data-v-96471d3e"),c=c(),I(),c),Tn={class:"list"},_n={class:"item"},Dn={key:0,class:"item"},Fn=bn(()=>e("div",{style:{"line-height":"32px",height:"32px"}},"转化后的颜色值",-1)),Yn=g({__name:"changeColor",setup(c){const t=[{value:"#d14e4e"},{value:"rgb(237,165,9)"},{value:"rgba(200,32,161,0.46)"},{value:"#C820A175"},{value:"rgb(15,78,149)"}],r=T([]),s=T(!1),l=()=>{s.value=!0,r.value=[],r.value.push({value:Y(t[0].value,50),explain:"颜色值变浅50"}),r.value.push({value:Y(t[1].value,-50),explain:"颜色值加深"}),r.value.push({value:Y(t[2].value,-40),explain:"透明度减小40"}),r.value.push({value:Y(t[3].value,30),explain:"透明度增大30,透明度越大颜色越深最大为1/FF,最小为0"}),r.value.push({value:Y(t[4].value,30,!1),explain:"颜色值变浅30,不使用原始颜色类型值"})};return re(()=>{}),(i,v)=>{const x=f("xy-button");return u(),m("div",Tn,[e("div",_n,[n(x,{onClick:l},{default:o(()=>[a("转化")]),_:1}),(u(),m(R,null,G(t,(y,F)=>e("div",{class:"originalColor",key:F},[a(" 颜色"+d(F+1)+": ",1),e("p",{style:k({backgroundColor:`${y.value}`})},null,4),a(" 颜色值: "),e("code",null,d(y.value),1)])),64))]),s.value?(u(),m("div",Dn,[Fn,(u(!0),m(R,null,G(r.value,(y,F)=>(u(),m("div",{class:"originalColor",key:F},[a(" 颜色"+d(F+1)+": ",1),e("p",{style:k({backgroundColor:`${y.value}`})},null,4),a(" 颜色值: "),e("code",null,d(y.value),1),a(" 解释: "),e("code",null,d(y.explain),1)]))),128))])):L("",!0)])}}}),Mn=D(Yn,[["__scopeId","data-v-96471d3e"]]),wn=`<template>\r
  <div class="list">\r
    <div class="item">\r
      <xy-button @click="action">转化</xy-button>\r
      <div class="originalColor" v-for="(item,index) in colorValues" :key="index">\r
        颜色{{index+1}}:\r
        <p :style="{backgroundColor:\`\${item.value}\`}"></p>\r
        颜色值: <code>{{item.value}}</code>\r
      </div>\r
    </div>\r
    <div class="item" v-if="showColor">\r
      <div style="line-height: 32px;height: 32px">转化后的颜色值</div>\r
      <div class="originalColor" v-for="(item,index) in afterColor" :key="index">\r
        颜色{{index+1}}:\r
        <p :style="{backgroundColor:\`\${item.value}\`}"></p>\r
        颜色值: <code>{{item.value}}</code>\r
        解释: <code>{{item.explain}}</code>\r
      </div>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import {ref, onMounted} from "vue";\r
import {Tools} from "yanyan-ui";\r
const colorValues = [\r
  {\r
    value:"#d14e4e"\r
  },\r
  {\r
    value:"rgb(237,165,9)"\r
  },\r
  {\r
    value:"rgba(200,32,161,0.46)"\r
  },\r
  {\r
    value:"#C820A175"\r
  },\r
  {\r
    value:"rgb(15,78,149)"\r
  },\r
\r
];\r
const afterColor = ref<{value:string,explain:string}[]>([]);\r
const showColor = ref(false);\r
const action = () => {\r
  showColor.value = true;\r
  afterColor.value = [];\r
  afterColor.value.push({\r
    value:Tools.changeColor(colorValues[0].value, 50),\r
    explain:"颜色值变浅50"\r
  })\r
  afterColor.value.push({\r
    value:Tools.changeColor(colorValues[1].value, -50),\r
    explain:"颜色值加深"\r
  })\r
  afterColor.value.push({\r
    value:Tools.changeColor(colorValues[2].value, -40),\r
    explain:"透明度减小40"\r
  })\r
  afterColor.value.push({\r
    value:Tools.changeColor(colorValues[3].value, 30),\r
    explain:"透明度增大30,透明度越大颜色越深最大为1/FF,最小为0"\r
  })\r
  afterColor.value.push({\r
    value:Tools.changeColor(colorValues[4].value, 30,false),\r
    explain:"颜色值变浅30,不使用原始颜色类型值"\r
  })\r
}\r
\r
onMounted(()=>{\r
})\r
<\/script>\r
\r
<style scoped lang="scss">\r
.list{\r
  display: flex;\r
  justify-content: space-between;\r
   //允许换行\r
  flex-wrap: wrap;\r
  .item{\r
    width: 50%;\r
    .originalColor{\r
      line-height: 15px;\r
      margin: 20px 0;\r
      font-size: 14px;\r
      p{\r
        width: 15px;\r
        height: 15px;\r
        display: inline-block;\r
        margin:0 10px;\r
      }\r
    }\r
  }\r
}\r
</style>`,In=g({__name:"randomInterval",setup(c){const t=T(0),r=()=>{t.value=ae(2,15)};return(s,l)=>{const i=f("xy-button");return u(),m("div",null,[n(i,{onClick:r},{default:o(()=>[a("获取2~15之间的随机整数")]),_:1}),a(" "+d(t.value),1)])}}}),Cn=`<template>\r
  <div>\r
    <xy-button @click="action">获取2~15之间的随机整数</xy-button>\r
    {{random}}\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import {ref} from "vue";\r
import {Tools} from "yanyan-ui";\r
const random = ref(0);\r
const action = () =>{\r
  random.value = Tools.randomInterval(2, 15);\r
}\r
<\/script>`,Gn=g({__name:"index",setup(c){const t=[{title:"转换时间格式",id:"a19d557bcfd6b073227b7bb4f6064d1e",slot:"convertTimeFormat",explain:"convertTimeFormat"},{title:"根据模板转换日期格式",id:"86ca20608c2396fae74a1ac42bb0f6a5",slot:"convertDateFormatByTemplate",explain:"convertDateFormatByTemplate 可以输出任意格式的日期`YYYY?MM?DD`"},{title:"数组分类",id:"500f747af6ac481f5fcc48fccd9c9cf4",slot:"groupBy",explain:"groupBy"},{title:"深拷贝",id:"6ca826e54c2fc517a490d965e140d7f4",slot:"deepCopy",explain:"deepCopy"},{title:"根据key数组去重",id:"d20baa61b26da9222417603dd61098c8",slot:"accordingToKeyUnique",explain:"accordingToKeyUnique"},{title:"防抖函数",id:"7e42fd6ed0585f7d3e1cffca9482e46b",slot:"debounce",explain:"`debounce`只会在函数最后一次被调用时，执行该函数"},{title:"base64转file",id:"dd0d0806a158b993c905aa6b6085d93b",slot:"base64ToFile",explain:"base64ToFile"},{title:"file转base64",id:"a928fef94a6f48a78dc3307b424fc039",slot:"fileToBase64",explain:"fileToBase64"},{title:"获取数据类型",id:"2cc6d6148133df6633d4f10a52ccd35e",slot:"getType",explain:"getType"},{title:"列表各项添加深度和位置信息",id:"99fd158902fd4e14ffe79783e435389a",slot:"calculateItemDepth",explain:"calculateItemDepth"},{title:"深度搜索",id:"368400005b8f22011047aa05dd37e29f",explain:"deepLookup",slot:"deepLookup"},{title:"节流函数",id:"b164a7ddb591397d4c40c5ec1e72baa1",explain:"`throttle`每隔一段时间执行一次函数",slot:"throttle"},{title:"复制文本",id:"88a12fe87191ac7b4fe34cdf46aa3915",explain:"copyText",slot:"copyText"},{title:"改变颜色",id:"bb4261f1ba8241e517e97d1cbcea83ee",explain:"changeColor",slot:"changeColor"},{title:"区间随机整数",id:"406365844b4745fa28ef9143ab77ae04",explain:"randomInterval",slot:"randomInterval"}],r=[{name:"format",explain:"时间格式",type:"string"},{name:"date",explain:"语言",type:[{value:"time Object",complexType:"formatDateNum | Date | number"}]}],s=[{name:"date",explain:"日期字符串 年月日之间必须有任意非数字分隔符",type:"string"},{name:"targetFormat",explain:"目标的日期格式 `YYYY?MM?DD``?`可以用任意字符替换",type:"string"},{name:"return",explain:"返回值",type:"string"}],l=[{name:"array",explain:"原始数组",type:[{value:"Array",complexType:"Object[]"}]},{name:"rules",explain:"分组规则",type:[{value:"string"},{value:"Function",complexType:"(item:any)=>any"}]},{name:"return",explain:"返回值",type:[{value:"object",complexType:"{key:Array<any>...} | {true:Array<any>,false:Array<any>}"}]}],i=[{name:"array",explain:"原始数组",type:"any"},{name:"return",explain:"返回值",type:"any"}],v=[{name:"array",explain:"原始数组",type:[{value:"Array",complexType:"Object[]"}]},{name:"key",explain:"去重的`key`",type:"string"},{name:"return",explain:"返回值",type:[{value:"Array",complexType:"Object[]"}]}],x=[{name:"fn",explain:"需要防抖的函数",type:"Function"},{name:"delay",explain:"防抖时间`ms`",type:"number"},{name:"return",explain:"返回值",type:"Function"}],y=[{name:"urlData",explain:"`base64`数据",type:"string"},{name:"fileName",explain:"文件名",type:"string"},{name:"return",explain:"返回值",type:"File"}],F=[{name:"file",explain:"`file`文件对象",type:"File"},{name:"callback",explain:"回调函数",type:[{value:"Function",complexType:"(base64:string)=>void"}]}],j=[{name:"sourceData",explain:"源数据"},{name:"return",explain:"返回值的类型",type:[{value:"dataType",complexType:"'boolean'| |'number' |'string' |'function' |'array' |'date' |'regExp' |'undefined' |'null' |'object' |'blob' |'formData' |'promise'"}]}],E=[{name:"targetList",explain:"目标列表",type:[{value:"Array",complexType:"Object[]"}]},{name:"indentStep",explain:"深度步进值",type:"number",default:"1"},{name:"initialIndentValue",explain:"初始深度值",type:"number",default:"0"},{name:"currentPos",explain:"第一项位置的初始值",type:"number",default:"0"}],P=[{name:"dataList",explain:"目标数组",type:[{value:"Array",complexType:"Object[]"}]},{name:"condition",explain:"搜索条件",type:[{value:"Function",complexType:"(item:any)=>boolean"}]},{name:"return",explain:"返回值",type:[{value:"Array",complexType:"Object[]"}]}],H=[{name:"fn",explain:"需要节流的函数",type:"Function"},{name:"delay",explain:"节流时间`ms`",type:"number"},{name:"return",explain:"返回值",type:"Function"}],J=[{name:"text",explain:"需要复制的文本",type:"string"},{name:"ifShowMsg",explain:"是否显示提示",type:"boolean",default:"true"},{name:"return",explain:"返回值",type:[{value:"Promise",complexType:"Promise<{code:number,message:string}>"}]}],K=[{name:"colorValue",explain:"16进制颜色值 或 rgb() 或 rgba()",type:"string"},{name:"degree",explain:"改变的程度,负数加深颜色or透明度变小；正数颜色变浅or透明度变大",type:"number"},{name:"originally",explain:"返回结果和原本类型一致,false时输出16进制颜色值",type:"boolean",default:"true"},{name:"return",explain:"返回值",type:"string"}],O=[{name:"min",explain:"最小值",type:"number"},{name:"max",explain:"最大值",type:"number"},{name:"return",explain:"返回值介于`min`和`max`之间的随机数",type:"number"}];return(Nn,An)=>{const h=f("xy-effect-preview"),b=f("xy-attribute-table"),V=f("xy-showcase-page");return u(),m("div",null,[n(V,{introduction:"提供基础工具函数使用","page-title":"Tools",catalogue:t},{convertTimeFormat:o(()=>[n(h,{code:p(pe)},{default:o(()=>[n(de)]),_:1},8,["code"]),n(b,{data:r,"columns-no-default":!0})]),convertDateFormatByTemplate:o(()=>[n(h,{code:p(be)},{default:o(()=>[n(he)]),_:1},8,["code"]),n(b,{data:s,"columns-no-default":!0})]),groupBy:o(()=>[n(h,{code:p(_e)},{default:o(()=>[n(Te)]),_:1},8,["code"]),n(b,{data:l,"columns-no-default":!0})]),deepCopy:o(()=>[n(h,{code:p(Ce)},{default:o(()=>[n(Ie)]),_:1},8,["code"]),n(b,{data:i,"columns-no-default":!0})]),accordingToKeyUnique:o(()=>[n(h,{code:p(Re)},{default:o(()=>[n(Ae)]),_:1},8,["code"]),n(b,{data:v,"columns-no-default":!0})]),debounce:o(()=>[n(h,{code:p(Be)},{default:o(()=>[n(Ue)]),_:1},8,["code"]),n(b,{data:x,"columns-no-default":!0})]),base64ToFile:o(()=>[n(h,{code:p(ke)},{default:o(()=>[n(Xe)]),_:1},8,["code"]),n(b,{data:y,"columns-no-default":!0})]),fileToBase64:o(()=>[n(h,{code:p(je)},{default:o(()=>[n(Se)]),_:1},8,["code"]),n(b,{data:F,"columns-no-default":!0})]),getType:o(()=>[n(h,{code:p(Je)},{default:o(()=>[n(He)]),_:1},8,["code"]),n(b,{data:j,"columns-no-default":!0})]),calculateItemDepth:o(()=>[n(h,{code:p($e)},{default:o(()=>[n(Qe)]),_:1},8,["code"]),n(b,{data:E})]),deepLookup:o(()=>[n(h,{code:p(ln)},{default:o(()=>[n(sn)]),_:1},8,["code"]),n(b,{data:P,"columns-no-default":!0})]),throttle:o(()=>[n(h,{code:p(mn)},{default:o(()=>[n(un)]),_:1},8,["code"]),n(b,{data:H,"columns-no-default":!0})]),copyText:o(()=>[n(h,{code:p(hn)},{default:o(()=>[n(gn)]),_:1},8,["code"]),n(b,{data:J,"columns-no-default":!1})]),changeColor:o(()=>[n(h,{code:p(wn)},{default:o(()=>[n(Mn)]),_:1},8,["code"]),n(b,{data:K})]),randomInterval:o(()=>[n(h,{code:p(Cn)},{default:o(()=>[n(In)]),_:1},8,["code"]),n(b,{data:O,"columns-no-default":!0})]),_:1})])}}});export{Gn as default};
