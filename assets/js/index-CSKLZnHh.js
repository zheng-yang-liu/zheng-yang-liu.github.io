import{d as x,b as y,e,w as t,r,h as _,o as b,u as a,f as v,g as o,_ as L}from"./index-DQzoCrCu.js";const C=`<template>\r
  <div id="page1" class="page1">\r
    <div id="page1_sticky" class="page1_sticky">\r
      <video id="page1_video"\r
             class="page1_video"\r
             src="@/assets/video/vivo.webm"></video>\r
      <div id="page1_text"\r
           :style="page_text"\r
           class="page1_text">\r
        <p class="p1">IP68 级防尘抗水</p>\r
        <p>实力抗水，不放水</p>\r
        <p class="p3">出色的防尘抗水能力,从容应对更多生活挑战。</p>\r
      </div>\r
    </div>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import {onMounted} from "vue";\r
import {AnimationUtils} from "yanyan-ui"\r
\r
const page_text = {\r
  opacity: 0,\r
  marginTop: '20%'\r
}\r
const elementId = ['page1', 'page1_sticky', 'page1_video', 'page1_text'];\r
\r
//当前页面的id和根元素id\r
const currentPlatingElement = {\r
  currentID: 'page1',\r
  rootId: 'app',\r
}\r
\r
//动画配置列表  -- 均匀变化\r
let animationList = [\r
  {\r
    element: {elType: 'video', el: 'page1_video'}\r
  },\r
  {\r
    element: {elType: 'page1_text', el: 'page1_text'}\r
  }\r
]\r
//动画配置列表  -- 临界点变化\r
const animationCriticalList = [\r
  {\r
    elementID: 'page1_text',\r
    config: {\r
      critical: 80,\r
      exceed: [],\r
      noExceed: [{styleName: 'opacity', value: 0}]\r
    }\r
  }\r
]\r
//动画帧配置列表\r
const framesConfig = {\r
  page1_video: {\r
    currentTime: {\r
      start: 0,\r
      end: 5,\r
    }\r
  },\r
  page1_text: {\r
    opacity: {\r
      start: 0,\r
      end: 1,\r
    },\r
    marginTop: {\r
      start: 20,\r
      end: 0,\r
      ifNumber: false\r
    }\r
  }\r
}\r
//动画帧生效的范围\r
const animationRange = {\r
  page1_video: {\r
    start: 0,\r
    end: 80\r
  },\r
  page1_text: {\r
    start: 80,\r
    end: 100\r
  }\r
}\r
\r
const newAnimationList = AnimationUtils.setAnimationListConfig(animationList, framesConfig, animationRange);\r
console.log(newAnimationList, 'set生成的animationList---page1')\r
onMounted(() => {\r
  AnimationUtils.animationObserver(\r
    'page1_sticky',\r
    elementId,\r
    currentPlatingElement,\r
    newAnimationList,\r
    animationCriticalList\r
  );\r
})\r
\r
<\/script>\r
\r
<style scoped lang="scss">\r
  .page1{\r
    width:100%;\r
    height:600vh;\r
    .page1_sticky{\r
      width:100%;\r
      height:100vh;\r
      position:sticky;\r
      top:0;\r
      .page1_video{\r
        width:100%;\r
        height:100vh;\r
        position: absolute;\r
        top:50%;\r
        left:50%;\r
        transform: translate(-50%,-50%);\r
        object-fit: cover;\r
      }\r
      .page1_text{\r
        position: absolute;\r
        color: white;\r
        top:50%;\r
        left: 25%;\r
        transform: translate(-50%,-25%);\r
        opacity: 0;\r
        margin-top: -20%;\r
        font-size: 45px;\r
        font-family: 黑体：,serif;\r
        .p1{\r
          margin-bottom: 0.75rem;\r
          font-size: 24px;\r
        }\r
        .p3{\r
          font-size: 15px;\r
          color:#c6c6c6;\r
          margin-top: 0.75rem;\r
          padding-top: 0.375rem\r
        }\r
      }\r
    }\r
  }\r
</style>\r
`,I=`declare const animationObserver:{\r
    observerId: string,//需要进行监听交叉操作的元素ID\r
    elementIDList: string[],//所有需要操作的元素id\r
    // 当前页面的id和根元素id(app)\r
    currentPlatingElement:{\r
        currentID: string;\r
        rootId: string;// 根元素id(app)\r
    }\r
    // 需要操作的元素的配置\r
    animationList:{\r
        element: { elType: string; el: string; additional?: string };\r
        config?: {[key:string]:string};//{marginTop:"100px"}\r
    };\r
    // 要操作的元素的临界值配置\r
    animationCriticalList?:{\r
        elementID: string;\r
        config: {\r
            critical: number,\r
            exceed?: {styleName:string,value:number}[],\r
            noExceed?: {styleName:string,value:number}[],\r
        }\r
    }\r
}\r
declare const setAnimationListConfig:{\r
    animationList: {\r
        element: { elType: string; el: string; additional?: string };\r
    };\r
    //动画帧配置列表\r
    framesConfigs:{\r
        [key: string]: {//元素ID\r
            [key: string]: {//样式名\r
                end: number;//结束值\r
                start: number;//开始值\r
                unit?: string;//样式值单位 默认为px\r
                basePx?: number;//基础像素\r
                ifNumber?: boolean;//样式值是否是数字 默认为true\r
                specialValueName?: string;//特殊值名 transform: translateX(-50px); //单值\r
            };\r
        };\r
    };\r
    //动画帧范围\r
    animationRange:{\r
        [key: string]:{//元素ID\r
            end:number;//结束进度值\r
            start:number;//开始进度值\r
        }\r
    }\r
}`,T=x({__name:"index",setup(A){const s=_(),p=[{title:"基础用法",id:"e1b20faf7a50b2a15998cca84fd98fa1",slot:"basicUsage"},{title:"API",id:"6b563427555e5763fd0a592b66a228f5",children:[{title:"setAnimationListConfig",id:"d3a7c130c02858f85b4f5aeefbace16a",slot:"setAnimationListConfig"},{title:"animationObserver",id:"95a91c8ec24e423906f65de21b22f30f",slot:"animationObserver"}]},{title:"参数类型说明",id:"45b8b997e05ab8787ef346bdb8921819",slot:"AttributesType",explain:"函数参数类型说明"}],l=[{name:"animationList",explain:"动画配置列表 -- 均匀变化",type:[{value:"animationList",complexType:"查看参数类型说明"}]},{name:"framesConfigs",explain:"动画帧配置列表",type:[{value:"framesConfigs",complexType:"查看参数类型说明"}]},{name:"animationRange",explain:"动画帧范围",type:[{value:"animationRange",complexType:"查看参数类型说明"}]}],c=[{name:"observerId",explain:"需要进行监听交叉操作的元素`id`",type:"string"},{name:"elementIDList",explain:"所有需要操作的元素`id`",type:[{value:"Array",complexType:"string[]"}]},{name:"currentPlatingElement",explain:"当前页面的id和根元素`id(app)`",type:[{value:"currentPlatingElement",complexType:"查看参数类型说明"}]},{name:"animationList",explain:"需要操作的元素的配置",type:[{value:"animationList",complexType:"查看参数类型说明"}]},{name:"animationCriticalList",explain:"需要操作的元素的临界值配置",type:[{value:"animationCriticalList",complexType:"查看参数类型说明"}]}],m=()=>{s.push({path:"/pageEffects/page1"})};return(w,n)=>{const g=r("xy-button"),d=r("xy-effect-preview"),f=r("xy-code-preview"),i=r("xy-attribute-table"),u=r("xy-showcase-page");return b(),y("div",null,[e(u,{introduction:"为整体网页实现动画效果，根据滚动条节点为页面元素实现动画效果，官网产品展示效果","page-title":"页面动画",catalogue:p},{basicUsage:t(()=>[e(d,{code:a(C)},{default:t(()=>[e(g,{onClick:m},{default:t(()=>n[0]||(n[0]=[v("查看效果")])),_:1})]),_:1},8,["code"])]),AttributesType:t(()=>[e(f,{code:a(I),language:"typescript"},null,8,["code"])]),setAnimationListConfig:t(()=>[n[1]||(n[1]=o("p",{class:"APIExplain"},"生成animationList的config配置",-1)),e(i,{data:l})]),animationObserver:t(()=>[n[2]||(n[2]=o("p",{class:"APIExplain"},"动画监听器-执行动画",-1)),e(i,{data:c})]),_:1})])}}}),k=L(T,[["__scopeId","data-v-c9dba45c"]]);export{k as default};
