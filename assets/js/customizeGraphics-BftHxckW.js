import{d as X,l as u,x as h,o as Y,S as w,a as k,c as p,g as n,k as y,U as _,V as v,F as S,m as b,i as x,W as G,r as B,b as g,q as V,t as z,_ as M}from"./index-D92MjMHd.js";const U={class:"graphBox"},A={class:"tools"},D=["onClick"],E=X({__name:"customizeGraphics",setup(I){const i=u("Rectangular"),m=[{value:"Rectangular",label:"矩形",icon:"juxing"},{value:"Circle",label:"圆形",icon:"yuanxing"},{value:"Triangle",label:"三角形",icon:"sanjiaoxing"},{value:"Ellipse",label:"椭圆",icon:"ellipse"}];let o=null;const r=u("#e8e6e6"),c=u("#191919");let t=null;class C extends G{get centerX(){return(this.minX+this.maxX)/2}get centerY(){return(this.minY+this.maxY)/2}get radiusX(){return(this.maxX-this.minX)/2}get radiusY(){return(this.maxY-this.minY)/2}draw(){const e=2*Math.PI;this._ctx.beginPath(),this._ctx.ellipse(this.centerX*this._dpi,this.centerY*this._dpi,this.radiusX*this._dpi,this.radiusY*this._dpi,0,0,e),this._ctx.fillStyle=this._color,this._ctx.fill(),this._ctx.strokeStyle="rgba(255,255,255,1)",this._ctx.lineWidth=3,this._ctx.lineCap="square",this._ctx.stroke()}isInside(a,l){const e=(a-this.centerX)/this.radiusX,d=(l-this.centerY)/this.radiusY;return Math.pow(e,2)+Math.pow(d,2)<=1}}h(()=>c.value,s=>{t.changeCanvasBG(s)}),h(()=>r.value,s=>{t.changeGraphColor(s)}),h(()=>i.value,s=>{t.setCurrentGraph(s)});const f=()=>{t.downloadCanvas()};return Y(()=>{const s=o==null?void 0:o.getContext("2d");t=new w(o,s),t.init(),t.drawShape(),t.setShape({Ellipse:C})}),k(()=>{t.destruction()}),(s,a)=>{const l=B("xy-icon");return g(),p("div",U,[n("div",A,[y(" 背景颜色:"),_(n("input",{type:"color","onUpdate:modelValue":a[0]||(a[0]=e=>c.value=e),class:"colorSelect"},null,512),[[v,c.value]]),(g(),p(S,null,b(m,e=>n("div",{class:V(["graphical",e.value===i.value?"select":"noSelect"]),onClick:d=>i.value=e.value},[x(l,{icon:`iconfont icon-${e.icon}`},null,8,["icon"]),n("p",null,z(e.label),1)],10,D)),64)),_(n("input",{type:"color","onUpdate:modelValue":a[1]||(a[1]=e=>r.value=e),class:"colorSelect"},null,512),[[v,r.value]]),x(l,{icon:"iconfont icon-xiazai",title:"下载",onClick:f})]),n("canvas",{ref_key:"canvas",ref:o},null,512)])}}}),j=M(E,[["__scopeId","data-v-4f62d7e7"]]);export{j as default};