import{d as h,a as i,K as u,E as m,Q as w,M as y,b as p,g as l,f as B,R as v,S as _,F as k,v as S,e as g,r as V,o as x,J as b,t as G,_ as D}from"./index-DQzoCrCu.js";const M={class:"graphBox"},N={class:"tools"},R=["onClick"],T=h({__name:"index",setup(U){const s=i("Rectangular"),C=[{value:"Rectangular",label:"矩形",icon:"juxing"},{value:"Circle",label:"圆形",icon:"yuanxing"},{value:"Triangle",label:"三角形",icon:"sanjiaoxing"}];let t=null;const c=i("#e8e6e6"),r=i("#191919");let e=null;u(()=>r.value,a=>{e.changeCanvasBG(a)}),u(()=>c.value,a=>{e.changeGraphColor(a)}),u(()=>s.value,a=>{e.setCurrentGraph(a)});const f=()=>{e.downloadCanvas()};return m(()=>{const a=t==null?void 0:t.getContext("2d");e=new w(t,a),e.init(),e.drawShape()}),y(()=>{e.destruction()}),(a,o)=>{const d=V("xy-icon");return x(),p("div",M,[l("div",N,[o[2]||(o[2]=B(" 背景颜色:")),v(l("input",{type:"color","onUpdate:modelValue":o[0]||(o[0]=n=>r.value=n),class:"colorSelect"},null,512),[[_,r.value]]),(x(),p(k,null,S(C,n=>l("div",{class:b(["graphical",n.value===s.value?"select":"noSelect"]),onClick:j=>s.value=n.value},[g(d,{icon:`iconfont icon-${n.icon}`},null,8,["icon"]),l("p",null,G(n.label),1)],10,R)),64)),v(l("input",{type:"color","onUpdate:modelValue":o[1]||(o[1]=n=>c.value=n),class:"colorSelect"},null,512),[[_,c.value]]),g(d,{icon:"iconfont icon-xiazai",title:"下载",onClick:f})]),l("canvas",{ref_key:"canvas",ref:t},null,512)])}}}),E=D(T,[["__scopeId","data-v-4190f763"]]);export{E as default};
