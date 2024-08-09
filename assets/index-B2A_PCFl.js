import{d as g,u as v,c as y,i as r,w as n,r as e,b as f,j as t,k as c}from"./index-5Jm3zCii.js";const b=`<template>\r
  <div class="graphBox">\r
    <div class="tools">\r
      背景颜色:<input type="color" v-model="BGColor" class="colorSelect"/>\r
      <template v-for="item in options">\r
        <div\r
          class="graphical"\r
          :class="item.value===selectValue?'select':'noSelect'"\r
          @click="selectValue=item.value"\r
        >\r
          <xy-icon :icon="\`iconfont icon-\${item.icon}\`"></xy-icon>\r
          <p>{{ item.label }}</p>\r
        </div>\r
      </template>\r
\r
      <input type="color" v-model="graphColor" class="colorSelect"/>\r
      <xy-icon icon="iconfont icon-xiazai" title="下载" @click="downCanvas"></xy-icon>\r
    </div>\r
    <canvas ref="canvas"></canvas>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import {ref,onMounted,watch,onBeforeUnmount} from 'vue';\r
import {DrawGraph,Graph} from "yanyan-ui";\r
const selectValue = ref('Rectangular');\r
const options = [\r
  {\r
    value: 'Rectangular',\r
    label: '矩形',\r
    icon:"juxing"\r
  },\r
  {\r
    value: 'Circle',\r
    label: '圆形',\r
    icon:'yuanxing'\r
  },\r
  {\r
    value:"Triangle",\r
    label:"三角形",\r
    icon:"sanjiaoxing"\r
  }\r
]\r
let canvas:any = null;\r
const graphColor= ref("#e8e6e6");\r
const BGColor= ref("#191919");\r
let graph:any = null;\r
\r
\r
watch(()=>BGColor.value,(newVal)=>{\r
  graph.changeCanvasBG(newVal);\r
})\r
watch(()=>graphColor.value,(newVal)=>{\r
  graph.changeGraphColor(newVal);\r
})\r
watch(()=>selectValue.value,(newVal)=>{\r
  graph.setCurrentGraph(newVal);\r
})\r
const downCanvas = ()=>{\r
  graph.downloadCanvas();\r
}\r
onMounted(()=>{\r
  const ctx = canvas?.getContext('2d');\r
  graph = new DrawGraph(canvas,ctx);\r
  graph.init();\r
  graph.drawShape();\r
})\r
//页面销毁\r
onBeforeUnmount(()=>{\r
  graph.destruction();\r
})\r
\r
\r
<\/script>\r
<style scoped lang="scss">\r
.graphBox{\r
  width: 100vw;\r
  height: 100vh;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  .tools{\r
    position: fixed;\r
    top: 5%;\r
    left: 50%;\r
    transform: translateX(-50%);\r
    display: flex;\r
    align-items: center;\r
    justify-content: center;\r
    .colorSelect{\r
      margin: 0 10px;\r
    }\r
  }\r
\r
  .graphical{\r
    text-align: center;\r
    cursor: pointer;\r
    margin: 0 10px;\r
    padding: 5px;\r
    p{\r
      margin: 0;\r
      font-size: 12px;\r
    }\r
  }\r
  .select{\r
    border: 1px solid #014da1;\r
    border-radius: 5px;\r
  }\r
}\r
</style>`,w=`<template>\r
  <div class="graphBox">\r
    <div class="tools">\r
      背景颜色:<input type="color" v-model="BGColor" class="colorSelect"/>\r
      <template v-for="item in options">\r
        <div\r
          class="graphical"\r
          :class="item.value===selectValue?'select':'noSelect'"\r
          @click="selectValue=item.value"\r
        >\r
          <xy-icon :icon="\`iconfont icon-\${item.icon}\`"></xy-icon>\r
          <p>{{ item.label }}</p>\r
        </div>\r
      </template>\r
\r
      <input type="color" v-model="graphColor" class="colorSelect"/>\r
      <xy-icon icon="iconfont icon-xiazai" title="下载" @click="downCanvas"></xy-icon>\r
    </div>\r
    <canvas ref="canvas"></canvas>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import {ref,onMounted,watch,onBeforeUnmount} from 'vue';\r
import {DrawGraph,Graph} from "yanyan-ui";\r
const selectValue = ref('Rectangular');\r
const options = [\r
  {\r
    value: 'Rectangular',\r
    label: '矩形',\r
    icon:"juxing"\r
  },\r
  {\r
    value: 'Circle',\r
    label: '圆形',\r
    icon:'yuanxing'\r
  },\r
  {\r
    value:"Triangle",\r
    label:"三角形",\r
    icon:"sanjiaoxing"\r
  },\r
  {\r
    value:"Ellipse",\r
    label:"椭圆",\r
    icon:"ellipse"\r
  }\r
]\r
let canvas:any = null;\r
const graphColor= ref("#e8e6e6");\r
const BGColor= ref("#191919");\r
let graph:any = null;\r
\r
class Ellipse extends Graph{\r
  get centerX(){\r
    return (this.minX + this.maxX) / 2;\r
  }\r
  get centerY(){\r
    return (this.minY + this.maxY) / 2;\r
  }\r
  get radiusX(){\r
    return (this.maxX - this.minX) / 2;\r
  }\r
  get radiusY(){\r
    return (this.maxY - this.minY) / 2;\r
  }\r
  draw(){\r
    const rotation = 0;  // 椭圆的旋转角度，以弧度表示\r
    const startAngle = 0; // 椭圆的起始角度，以弧度表示\r
    const endAngle = 2 * Math.PI; // 椭圆的结束角度，以弧度表示\r
\r
    // 开始绘制路径\r
    this._ctx.beginPath();\r
    this._ctx.ellipse(\r
      this.centerX*this._dpi, this.centerY*this._dpi,\r
      this.radiusX*this._dpi,\r
      this.radiusY*this._dpi,\r
      rotation,\r
      startAngle,\r
      endAngle\r
    );\r
    this._ctx.fillStyle = this._color;\r
    this._ctx.fill();\r
\r
    // 绘制边框\r
    this._ctx.strokeStyle = "rgba(255,255,255,1)";\r
    this._ctx.lineWidth = 3;\r
\r
    this._ctx.lineCap = "square";\r
    this._ctx.stroke();\r
  }\r
  // 判断是否在椭圆内\r
  isInside(x:number,y:number):boolean{\r
    // 计算椭圆方程的左侧值\r
    const normalizedX = (x - this.centerX) / this.radiusX;\r
    const normalizedY = (y - this.centerY) / this.radiusY;\r
    const value = Math.pow(normalizedX,2) + Math.pow(normalizedY,2);\r
\r
    // 如果值小于或等于1，则点在椭圆内\r
    return value <= 1;\r
  }\r
}\r
watch(()=>BGColor.value,(newVal)=>{\r
  graph.changeCanvasBG(newVal);\r
})\r
watch(()=>graphColor.value,(newVal)=>{\r
  graph.changeGraphColor(newVal);\r
})\r
watch(()=>selectValue.value,(newVal)=>{\r
  graph.setCurrentGraph(newVal);\r
})\r
const downCanvas = ()=>{\r
  graph.downloadCanvas();\r
}\r
onMounted(()=>{\r
  const ctx = canvas?.getContext('2d');\r
  graph = new DrawGraph(canvas,ctx);\r
  graph.init();\r
  graph.drawShape();\r
  graph.setShape({Ellipse:Ellipse});\r
})\r
//页面销毁\r
onBeforeUnmount(()=>{\r
  graph.destruction();\r
})\r
\r
\r
<\/script>\r
<style scoped lang="scss">\r
.graphBox{\r
  width: 100vw;\r
  height: 100vh;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  .tools{\r
    position: fixed;\r
    top: 5%;\r
    left: 50%;\r
    transform: translateX(-50%);\r
    display: flex;\r
    align-items: center;\r
    justify-content: center;\r
    .colorSelect{\r
      margin: 0 10px;\r
    }\r
  }\r
\r
  .graphical{\r
    text-align: center;\r
    cursor: pointer;\r
    margin: 0 10px;\r
    padding: 5px;\r
    p{\r
      margin: 0;\r
      font-size: 12px;\r
    }\r
  }\r
  .select{\r
    border: 1px solid #014da1;\r
    border-radius: 5px;\r
  }\r
}\r
</style>`,C=`/**\r
 * 绘制对象\r
 * */\r
export declare class DrawGraph {\r
  /**\r
   * 构造函数 - 创建一个绘图对象。\r
   * @param canvas - 画布元素。\r
   * @param ctx - 画布上下文。\r
   */\r
  constructor(\r
    canvas: HTMLCanvasElement,\r
    ctx: CanvasRenderingContext2D\r
  );\r
\r
  /**\r
   * 初始化绘图\r
   * @param width - 画布宽度\r
   * @param height - 画布高度\r
   * @param canvasBG - 画布背景颜色\r
   * @param graphColor - 图形颜色\r
   */\r
  init(width: number, height: number, canvasBG: string, graphColor: string): void;\r
\r
  /**\r
   * 销毁绘图\r
   */\r
  destruction(): void;\r
\r
  /**\r
   * 设置自定义图形\r
   * @param customShape - 自定义图形\r
   */\r
  setShape(customShape: Object): void;\r
\r
  /**\r
   * 设置当前图形\r
   * @param currentGraph - 当前图形\r
   */\r
  setCurrentGraph(currentGraph: string): void;\r
\r
  /**\r
   * 改变填充颜色\r
   * @param graphColor - 填充颜色\r
   */\r
  changeGraphColor(graphColor: string): void;\r
}\r
\r
/**\r
 * 表示图形的总类-用于自定义图形时继承此类。\r
 * */\r
export declare class Graph{\r
  /**\r
   * 构造函数 - 创建一个图形。\r
   * @param color - 图形的颜色。\r
   * @param startX - 起始的 X 坐标。\r
   * @param startY - 起始的 Y 坐标。\r
   * @param ctx - 绘图上下文。\r
   * @param width - 画布的宽度。\r
   * @param height - 画布的高度。\r
   * @param dpi - DPI 缩放系数。\r
   */\r
  constructor(\r
    color:string,\r
    startX:number,\r
    startY:number,\r
    ctx:CanvasRenderingContext2D,\r
    width:number,\r
    height:number,\r
    dpi:number\r
  );\r
  /**\r
   * 设置终止的 X 坐标。\r
   * @param value - 新的终止 X 坐标。\r
   */\r
  endX(value:number):void;\r
  /**\r
   * 设置终止的 Y 坐标。\r
   * @param value - 新的终止 Y 坐标。\r
   */\r
  endY(value:number):void;\r
}\r
\r
`,_=`import {Graph} from "yanyan-ui";\r
\r
export default class Ellipse extends Graph{\r
  get centerX(){\r
    return (this.minX + this.maxX) / 2;\r
  }\r
  get centerY(){\r
    return (this.minY + this.maxY) / 2;\r
  }\r
  get radiusX(){\r
    return (this.maxX - this.minX) / 2;\r
  }\r
  get radiusY(){\r
    return (this.maxY - this.minY) / 2;\r
  }\r
  draw(){\r
    const rotation = 0;  // 椭圆的旋转角度，以弧度表示\r
    const startAngle = 0; // 椭圆的起始角度，以弧度表示\r
    const endAngle = 2 * Math.PI; // 椭圆的结束角度，以弧度表示\r
\r
    // 开始绘制路径\r
    this._ctx.beginPath();\r
    this._ctx.ellipse(\r
      this.centerX*this._dpi, this.centerY*this._dpi,\r
      this.radiusX*this._dpi,\r
      this.radiusY*this._dpi,\r
      rotation,\r
      startAngle,\r
      endAngle\r
    );\r
    this._ctx.fillStyle = this._color;\r
    this._ctx.fill();\r
\r
    // 绘制边框\r
    this._ctx.strokeStyle = "rgba(255,255,255,1)";\r
    this._ctx.lineWidth = 3;\r
\r
    this._ctx.lineCap = "square";\r
    this._ctx.stroke();\r
  }\r
  // 判断是否在椭圆内\r
  isInside(x:number,y:number):boolean{\r
    // 计算椭圆方程的左侧值\r
    const normalizedX = (x - this.centerX) / this.radiusX;\r
    const normalizedY = (y - this.centerY) / this.radiusY;\r
    const value = Math.pow(normalizedX,2) + Math.pow(normalizedY,2);\r
\r
    // 如果值小于或等于1，则点在椭圆内\r
    return value <= 1;\r
  }\r
}`,B=g({__name:"index",setup(G){const a=v(),p=[{title:"基础用法",id:"22d7da554d8a9cce46dcc3f2cd91751f",slot:"basicUsage"},{title:"自定义图形",id:"6f367e97d08f62052546a55ba8475d29",slot:"customizeGraphics",explain:"自定义图形,通过继承`Graph类`，编写自定义`draw`、`isInside`方法，实现绘制自定义图形，本例的椭圆为自定图形"},{title:"工具类",id:"cdc1ea8222bd9e6eef2aa5df80245f96",children:[{title:"DrawGraph",id:"a946b1bf72cdf43e0b43ec4d15105c94",slot:"DrawGraph"},{title:"Graph",id:"3a4a748c276990d2f5049cbcd81baf89",slot:"Graph",explain:"图形基类，提供基础属性和方法,快速实现自定义图形类的生成"}]},{title:"详细类型",id:"a58cda25a7165341bd4abd14aec0f325",slot:"detailType"},{title:"GraphExample",id:"c33f2dbbb280611235f89e7f044bc18d",slot:"GraphExample",explain:"通过继承`Graph类`，实现自定义椭圆图形"}],u=[{name:"constructor",explain:"构造函数 - 创建一个绘图对象。",type:[{value:"Function",complexType:`constructor(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D)`}]},{name:"init",explain:"初始化绘图",type:[{value:"Function",complexType:"init(width: number, height: number, canvasBG: string, graphColor: string): void;"}]},{name:"changeCanvasBG",explain:"改变背景颜色",type:[{value:"Function",complexType:"changeCanvasBG(color: string): void;"}]},{name:"destruction",explain:"销毁绘图",type:[{value:"Function",complexType:"destruction(): void;"}]},{name:"changeGraphColor",explain:"改变填充颜色",type:[{value:"Function",complexType:"changeGraphColor(graphColor: string): void;"}]},{name:"downloadCanvas",explain:"下载`canvas`",type:[{value:"Function",complexType:"downloadCanvas(): void;"}]}],h=[{name:"constructor",explain:"构造函数 - 创建一个绘图对象。",type:[{value:"Function",complexType:`constructor(color:string,
    startX:number,
    startY:number,
    ctx:CanvasRenderingContext2D,
    width:number,
    height:number,
    dpi:number)`}]},{name:"endX",explain:"设置结束点X坐标",type:[{value:"set Function",complexType:"number"}]},{name:"endY",explain:"设置结束点Y坐标",type:[{value:"set Function",complexType:"number"}]},{name:"minX",explain:"最小X坐标",type:[{value:"get Function",complexType:"number"}]},{name:"minY",explain:"最小Y坐标",type:[{value:"get Function",complexType:"number"}]},{name:"maxX",explain:"最大X坐标",type:[{value:"get Function",complexType:"number"}]},{name:"maxY",explain:"最大Y坐标",type:[{value:"get Function",complexType:"number"}]},{name:"_color",explain:"填充颜色",type:"string"},{name:"_ctx",explain:"`canvas`上下文",type:[{value:"CanvasRenderingContext2D",complexType:"CanvasRenderingContext2D"}]},{name:"_dpi",explain:"设备像素比",type:"number"},{name:"draw",explain:"绘制图形 --需继承后重写",type:[{value:"Function",complexType:"()=>void"}]},{name:"isInside",explain:"判断是否在图形内 -- 需继承后重写",type:[{value:"Function",complexType:"(x,y)=>boolean"}]}],d=()=>{a.push("/pageEffects/canvasGraph")},m=()=>{a.push("/pageEffects/customizeGraphics")};return(X,Y)=>{const i=e("xy-button"),o=e("xy-effect-preview"),l=e("xy-attribute-table"),s=e("xy-code-preview"),x=e("xy-showcase-page");return f(),y("div",null,[r(x,{introduction:"可以实现各种图形的绘制，支持自定义绘制图形","page-title":"canvas绘图",catalogue:p},{basicUsage:n(()=>[r(o,{code:t(b)},{default:n(()=>[r(i,{onClick:d},{default:n(()=>[c("查看效果")]),_:1})]),_:1},8,["code"])]),customizeGraphics:n(()=>[r(o,{code:t(w)},{default:n(()=>[r(i,{onClick:m},{default:n(()=>[c("查看效果")]),_:1})]),_:1},8,["code"])]),DrawGraph:n(()=>[r(l,{data:u,"columns-no-default":!0})]),Graph:n(()=>[r(l,{data:h,"columns-no-default":!0})]),detailType:n(()=>[r(s,{code:t(C),language:"typescript"},null,8,["code"])]),GraphExample:n(()=>[r(s,{code:t(_),language:"typescript"},null,8,["code"])]),_:1})])}}});export{B as default};
