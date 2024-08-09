import{d as o,r as i,b as f,c as p,i as e,w as n,p as m,e as h,g as c,_ as y,j as b}from"./index-5Jm3zCii.js";import{_ as g}from"./logo-BzxmZ5PJ.js";const v={style:{height:"200px","background-color":"#f9f9fc",display:"inline-block"}},S=o({__name:"basicUsage",setup(t){const a=[{title:"地球",id:"1f02f411cf025aad163e96e6abbfa402",path:""},{title:"河北省",children:[{title:"石家庄市",id:"7fdcacc36de34c4bca82db93fb9415bd",path:""},{title:"唐山市",id:"d6c0bb03d361ae960ccffe9dbb51989d",path:""},{title:"秦皇岛市",id:"ddb69689fd8964547edbdc82730573e9",path:""}]},{title:"山西省",children:[{title:"太原市",id:"45bb8d54c3f987f413c4e489908bc181",path:""},{title:"大同市",id:"155f872ef336eec2c5f2ee0460a1a3fb",path:""}]}];return(l,d)=>{const r=i("xy-menu-left");return f(),p("div",v,[e(r,{menuItems:a})])}}}),I=`<template>\r
  <div style="height: 200px;background-color: #f9f9fc;display: inline-block">\r
    <xy-menu-left :menuItems="menuItems">\r
    </xy-menu-left>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
const menuItems = [\r
  {\r
    title:'地球',\r
    id:'1f02f411cf025aad163e96e6abbfa402',\r
    path:""\r
  },\r
  {\r
    title:"河北省",\r
    children:[\r
      {\r
        title:"石家庄市",\r
        id:"7fdcacc36de34c4bca82db93fb9415bd",\r
        path:"",\r
      },\r
      {\r
        title: "唐山市",\r
        id: "d6c0bb03d361ae960ccffe9dbb51989d",\r
        path: "",\r
      },\r
      {\r
        title: "秦皇岛市",\r
        id: "ddb69689fd8964547edbdc82730573e9",\r
        path: "",\r
      }\r
    ]\r
  },\r
  {\r
    title: "山西省",\r
    children: [\r
      {\r
        title: "太原市",\r
        id: "45bb8d54c3f987f413c4e489908bc181",\r
        path: ""\r
      },\r
      {\r
        title: "大同市",\r
        id: "155f872ef336eec2c5f2ee0460a1a3fb",\r
        path: ""\r
      }\r
    ]\r
  }\r
]\r
<\/script>\r
\r
<style scoped lang="scss">\r
\r
</style>`,k=t=>(m("data-v-56e8bff5"),t=t(),h(),t),w={style:{height:"200px","background-color":"#f9f9fc",display:"inline-block"}},O=k(()=>c("div",{class:"logo"},[c("img",{src:g}),c("p",null,"xuyan")],-1)),T=o({__name:"topLogo",setup(t){const a=[{title:"地球",id:"1f02f411cf025aad163e96e6abbfa402",path:""},{title:"河北省",children:[{title:"石家庄市",id:"7fdcacc36de34c4bca82db93fb9415bd",path:""},{title:"唐山市",id:"d6c0bb03d361ae960ccffe9dbb51989d",path:""},{title:"秦皇岛市",id:"ddb69689fd8964547edbdc82730573e9",path:""}]},{title:"山西省",children:[{title:"太原市",id:"45bb8d54c3f987f413c4e489908bc181",path:""},{title:"大同市",id:"155f872ef336eec2c5f2ee0460a1a3fb",path:""}]}];return(l,d)=>{const r=i("xy-menu-left");return f(),p("div",w,[e(r,{menuItems:a},{logo:n(()=>[O]),_:1})])}}}),C=y(T,[["__scopeId","data-v-56e8bff5"]]),L=`<template>\r
  <div style="height: 200px;background-color: #f9f9fc;display: inline-block">\r
    <xy-menu-left :menuItems="menuItems">\r
      <template #logo>\r
        <div class="logo">\r
          <img src="../../../../../assets/logo.png">\r
          <p>xuyan</p>\r
        </div>\r
      </template>\r
    </xy-menu-left>\r
  </div>\r
\r
</template>\r
\r
<script setup lang="ts">\r
const menuItems = [\r
  {\r
    title:'地球',\r
    id:'1f02f411cf025aad163e96e6abbfa402',\r
    path:""\r
  },\r
  {\r
    title:"河北省",\r
    children:[\r
      {\r
        title:"石家庄市",\r
        id:"7fdcacc36de34c4bca82db93fb9415bd",\r
        path:"",\r
      },\r
      {\r
        title: "唐山市",\r
        id: "d6c0bb03d361ae960ccffe9dbb51989d",\r
        path: "",\r
      },\r
      {\r
        title: "秦皇岛市",\r
        id: "ddb69689fd8964547edbdc82730573e9",\r
        path: "",\r
      }\r
    ]\r
  },\r
  {\r
    title: "山西省",\r
    children: [\r
      {\r
        title: "太原市",\r
        id: "45bb8d54c3f987f413c4e489908bc181",\r
        path: ""\r
      },\r
      {\r
        title: "大同市",\r
        id: "155f872ef336eec2c5f2ee0460a1a3fb",\r
        path: ""\r
      }\r
    ]\r
  }\r
]\r
<\/script>\r
\r
<style scoped>\r
.logo {\r
  cursor: pointer;\r
  display: flex;\r
  align-items: center;\r
  height: 40px;\r
  background-color: #e0f0ff;\r
  padding: 0 10px;\r
}\r
.logo img {\r
  width: 20px;\r
  height: 20px;\r
}\r
.logo p {\r
  font-size: 20px;\r
  margin-left: 6px;\r
  color: #409eff;\r
}\r
</style>`,V={style:{height:"200px","background-color":"#f9f9fc",display:"inline-block"}},j=o({__name:"preIcon",setup(t){const a=[{title:"地球",id:"1f02f411cf025aad163e96e6abbfa402",path:"",icon:"iconfont icon-donghua"},{title:"河北省",icon:"iconfont icon-kuaidiyuan-xianxing",children:[{title:"石家庄市",id:"7fdcacc36de34c4bca82db93fb9415bd",path:"",icon:"iconfont icon-dian"},{title:"唐山市",id:"d6c0bb03d361ae960ccffe9dbb51989d",path:"",icon:"iconfont icon-kuaidiyuan-zhuyi"},{title:"秦皇岛市",id:"ddb69689fd8964547edbdc82730573e9",icon:"iconfont icon-kuaidiyuan-fuzhi",path:""}]},{title:"山西省",children:[{title:"太原市",id:"45bb8d54c3f987f413c4e489908bc181",path:"",icon:"iconfont icon-kuaidiyuan-zhankai"},{title:"大同市",id:"155f872ef336eec2c5f2ee0460a1a3fb",path:"",icon:"iconfont icon-kuaidiyuan-xiaogongju"}]}];return(l,d)=>{const r=i("xy-menu-left");return f(),p("div",V,[e(r,{menuItems:a})])}}}),A=`<template>\r
  <div style="height: 200px;background-color: #f9f9fc;display: inline-block">\r
    <xy-menu-left :menuItems="menuItems">\r
    </xy-menu-left>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
const menuItems = [\r
  {\r
    title:'地球',\r
    id:'1f02f411cf025aad163e96e6abbfa402',\r
    path:"",\r
    icon: 'iconfont icon-donghua',\r
  },\r
  {\r
    title:"河北省",\r
    icon: 'iconfont icon-kuaidiyuan-xianxing',\r
    children:[\r
      {\r
        title:"石家庄市",\r
        id:"7fdcacc36de34c4bca82db93fb9415bd",\r
        path:"",\r
        icon: 'iconfont icon-dian',\r
      },\r
      {\r
        title: "唐山市",\r
        id: "d6c0bb03d361ae960ccffe9dbb51989d",\r
        path: "",\r
        icon: 'iconfont icon-kuaidiyuan-zhuyi',\r
      },\r
      {\r
        title: "秦皇岛市",\r
        id: "ddb69689fd8964547edbdc82730573e9",\r
        icon: 'iconfont icon-kuaidiyuan-fuzhi',\r
        path: "",\r
      }\r
    ]\r
  },\r
  {\r
    title: "山西省",\r
    children: [\r
      {\r
        title: "太原市",\r
        id: "45bb8d54c3f987f413c4e489908bc181",\r
        path: "",\r
        icon: 'iconfont icon-kuaidiyuan-zhankai',\r
      },\r
      {\r
        title: "大同市",\r
        id: "155f872ef336eec2c5f2ee0460a1a3fb",\r
        path: "",\r
        icon: 'iconfont icon-kuaidiyuan-xiaogongju',\r
      }\r
    ]\r
  }\r
]\r
\r
<\/script>\r
\r
<style scoped lang="scss">\r
\r
</style>`,_=t=>(m("data-v-69eebe81"),t=t(),h(),t),$={class:"showALl"},z=_(()=>c("p",null,"不隐藏已打开的子菜单项",-1)),D=_(()=>c("p",null,"隐藏已打开的子菜单项",-1)),B=o({__name:"showOnlyOneSubmenu",setup(t){const a=[{title:"地球",id:"1f02f411cf025aad163e96e6abbfa402",path:""},{title:"河北省",children:[{title:"石家庄市",id:"7fdcacc36de34c4bca82db93fb9415bd",path:"",children:[{title:"长安区",id:"4a633ba7e3c777b485fa962c880379ad",path:""},{title:"桥西区",id:"92ef1fcd2829cadc582a8fb67ad6eab4",path:""}]},{title:"唐山市",id:"d6c0bb03d361ae960ccffe9dbb51989d",path:"",children:[{title:"路南区",id:"38305fdff53f58a54bbe54633999e175",path:""},{title:"路北区",id:"89e071b352a869b8298066028c8b0e5b",path:""}]},{title:"秦皇岛市",id:"ddb69689fd8964547edbdc82730573e9",path:""}]},{title:"山西省",children:[{title:"太原市",id:"45bb8d54c3f987f413c4e489908bc181",path:""},{title:"大同市",id:"155f872ef336eec2c5f2ee0460a1a3fb",path:""}]}];return(l,d)=>{const r=i("xy-menu-left");return f(),p("div",$,[c("div",null,[e(r,{menuItems:a,isTheHeightSet:!1,showOnlyOneSubmenu:!1},{logo:n(()=>[z]),_:1})]),c("div",null,[e(r,{menuItems:a,isTheHeightSet:!1},{logo:n(()=>[D]),_:1})])])}}}),H=y(B,[["__scopeId","data-v-69eebe81"]]),N=`<template>\r
  <div class="showALl">\r
    <div>\r
      <xy-menu-left\r
        :menuItems="menuItems"\r
        :isTheHeightSet="false"\r
        :showOnlyOneSubmenu="false"\r
      >\r
        <template #logo>\r
          <p>不隐藏已打开的子菜单项</p>\r
        </template>\r
      </xy-menu-left>\r
    </div>\r
\r
    <div>\r
      <xy-menu-left\r
        :menuItems="menuItems"\r
        :isTheHeightSet="false"\r
      >\r
        <template #logo>\r
          <p>隐藏已打开的子菜单项</p>\r
        </template>\r
      </xy-menu-left>\r
    </div>\r
\r
  </div>\r
\r
</template>\r
\r
<script setup lang="ts">\r
const menuItems = [\r
  {\r
    title:'地球',\r
    id:'1f02f411cf025aad163e96e6abbfa402',\r
    path:""\r
  },\r
  {\r
    title:"河北省",\r
    children:[\r
      {\r
        title:"石家庄市",\r
        id:"7fdcacc36de34c4bca82db93fb9415bd",\r
        path:"",\r
        children:[\r
          {\r
            title:"长安区",\r
            id:"4a633ba7e3c777b485fa962c880379ad",\r
            path:"",\r
          },\r
          {\r
            title:"桥西区",\r
            id:"92ef1fcd2829cadc582a8fb67ad6eab4",\r
            path:"",\r
          }\r
        ]\r
      },\r
      {\r
        title: "唐山市",\r
        id: "d6c0bb03d361ae960ccffe9dbb51989d",\r
        path: "",\r
        children:[\r
          {\r
            title:"路南区",\r
            id:"38305fdff53f58a54bbe54633999e175",\r
            path:'',\r
          },\r
          {\r
            title:"路北区",\r
            id:"89e071b352a869b8298066028c8b0e5b",\r
            path:'',\r
          }\r
        ]\r
      },\r
      {\r
        title: "秦皇岛市",\r
        id: "ddb69689fd8964547edbdc82730573e9",\r
        path: "",\r
      }\r
    ]\r
  },\r
  {\r
    title: "山西省",\r
    children: [\r
      {\r
        title: "太原市",\r
        id: "45bb8d54c3f987f413c4e489908bc181",\r
        path: ""\r
      },\r
      {\r
        title: "大同市",\r
        id: "155f872ef336eec2c5f2ee0460a1a3fb",\r
        path: ""\r
      }\r
    ]\r
  }\r
]\r
<\/script>\r
\r
<style scoped lang="scss">\r
.showALl{\r
  display: grid;\r
  grid-template-columns:repeat(auto-fill,minmax(300px,1fr));\r
  p{\r
    padding: 10px 0;\r
  }\r
}\r
</style>`,F=o({__name:"index",setup(t){const a=[{title:"基础用法",id:"1642d0acf8e77f14015d9747ade17389",slot:"basicUsage"},{title:"带有顶部LOGO",id:"205d3c82c34a151a9032da0f75069f58",slot:"topLogo"},{title:"前置ICON",id:"9a87484354a5b534120be61a1f45bc28",slot:"preIcon"},{title:"展示多个菜单子项",explain:"切换菜单的不同子菜单时隐藏已经打开的子菜单项",id:"acdd93fd9078d0de09a3ccaaf2c415c6",slot:"showOnlyOneSubmenu"},{title:"API",id:"5d93ac9f30ec428c3cd0bca33a30ce4a",children:[{title:"Attributes",id:"3e5deda6c4364fc72285e22085ef13c7",slot:"attributes"},{title:"Events",id:"b1",slot:"events"}]}],l=[{name:"menuItems",explain:"菜单列表",type:[{value:"Array",complexType:`{ title: string,
          id: string,
          indentValue?: number,
          listPosition?: number,
          icon?: string,
          children?: Array<menuItem>,
          path?: string }`}]},{name:"height",explain:"菜单项高度",type:"number",default:"40"},{name:"width",explain:"菜单宽度",type:"number",default:"200"},{name:"submenuIndentConfig",explain:"子菜单缩进配置",type:[{value:"object",complexType:`{
          autoIndent: boolean,
          indentValue: number,
          currentIndent: number
        }`}],default:`{
      autoIndent: true,
      indentValue: 10,
      currentIndent: 0
    }`},{name:"startID",explain:"初始Id",type:"string"},{name:"selectStyle",explain:"选中item样式",type:[{value:"object",complexType:"CSSStyleValue"}]},{name:"itemStyle",explain:"item的样式",type:[{value:"object",complexType:"CSSStyleValue"}]},{name:"expandAll",explain:"是否全部展开",type:"boolean",default:"false"},{name:"selfJump",explain:"是否采用自身的跳转方式`router.push`,false时父组件需`@click`处理点击事件",type:"boolean",default:"true"},{name:"mouseOverStyle",explain:"鼠标悬浮item的样式",type:[{value:"object",complexType:"CSSStyleValue"}]},{name:"defaultStyle",explain:"是否使用自带的默认样式",type:"boolean",default:"true"},{name:"fillingDefaultIcon",explain:"是否填充默认图标",type:"boolean",default:"false"},{name:"menuLeftStyle",explain:"menuLeft的样式",type:[{value:"object",complexType:"CSSStyleValue"}]},{name:"isTheHeightSet",explain:"是否自动设置`menuLeft`的高度",type:"boolean",default:"false"},{name:"needPath",explain:"是否需要`path`",type:"boolean",default:"true"},{name:"areAllClickable",explain:"是否全部可选",type:"boolean",default:"false"},{name:"selectFirstItem",explain:"默认选中第一个可选item",type:"boolean",default:"false"},{name:"logoSlotStyle",explain:"logo插槽样式",type:[{value:"object",complexType:"CSSStyleValue"}]},{name:"itemTitleStyle",explain:"itemTitle文字样式",type:[{value:"object",complexType:"CSSStyleValue"}]},{name:"indent",explain:"是否缩进",type:"boolean",default:"true"},{name:"initByRouter",explain:"根据路由初始化`currentID`",type:"boolean",default:"false"},{name:"showPrompt",explain:"提示",type:"boolean",default:"true"},{name:"showOnlyOneSubmenu",explain:"仅展示一个子菜单项",type:"boolean",default:"true"},{name:"showScrollBar",explain:"是否显示滚动条",type:"boolean",default:"false"}],d=[{name:"clickItem",explain:"点击item时触发",type:[{value:"Function",complexType:"(item)=>void"}]}];return(r,P)=>{const s=i("xy-effect-preview"),u=i("xy-attribute-table"),x=i("xy-showcase-page");return f(),p("div",null,[e(x,{introduction:"左侧导航组件还具备高度的可定制性，能够根据不同的应用场景和用户需求进行个性化设置。","page-title":"左侧导航",catalogue:a},{basicUsage:n(()=>[e(s,{code:b(I),"effect-height":200},{default:n(()=>[e(S)]),_:1},8,["code"])]),topLogo:n(()=>[e(s,{code:b(L),"effect-height":200},{default:n(()=>[e(C)]),_:1},8,["code"])]),preIcon:n(()=>[e(s,{code:b(A),"effect-height":200},{default:n(()=>[e(j)]),_:1},8,["code"])]),showOnlyOneSubmenu:n(()=>[e(s,{code:b(N)},{default:n(()=>[e(H)]),_:1},8,["code"])]),attributes:n(()=>[e(u,{data:l})]),events:n(()=>[e(u,{data:d,columnsNoDefault:!0})]),_:1})])}}});export{F as default};
