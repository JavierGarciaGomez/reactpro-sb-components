var p=Object.defineProperty;var n=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var t=(o,r,e)=>r in o?p(o,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[r]=e,s=(o,r)=>{for(var e in r||(r={}))y.call(r,e)&&t(o,e,r[e]);if(n)for(var e of n(r))m.call(r,e)&&t(o,e,r[e]);return o};import{j as c}from"./jsx-runtime.2716467e.js";import"./index.5f275141.js";const a=({allCaps:o=!1,color:r="primary",label:e="No Label",size:i="normal",fontColor:d})=>c("span",{className:`label ${i} text-${r}`,style:{color:d},children:o?e.toUpperCase():e});try{a.displayName="MyLabel",a.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:{value:"No Label"},description:"Este es el mensaje a mostrar en la etiqueta",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Este es el tama\xF1o de la etiqueta",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"Si quiere todo capitalizado",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"Colores b\xE1sicos del bot\xF3n",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},fontColor:{defaultValue:null,description:"Color personalizado de la fuente",name:"fontColor",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"Color personalizado de la fuente",name:"backgroundColor",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/MyLabel.tsx#MyLabel"]={docgenInfo:a.__docgenInfo,name:"MyLabel",path:"src/components/MyLabel.tsx#MyLabel"})}catch{}var T={parameters:{storySource:{source:`import { MyLabel } from "../../components/MyLabel";\r
import { ComponentMeta, ComponentStory } from "@storybook/react";\r
\r
export default {\r
  title: "UI/MyLabel",\r
  component: MyLabel,\r
  argTypes: {\r
    size: { control: "select" },\r
    color: { control: "select" },\r
    fontColor: { control: "color" },\r
  },\r
} as ComponentMeta<typeof MyLabel>;\r
\r
const Template: ComponentStory<typeof MyLabel> = (args) => (\r
  <MyLabel {...args} />\r
);\r
\r
export const Basic = Template.bind({});\r
Basic.args = {\r
  size: "normal",\r
  allCaps: false, // true: capitalizar toda la palabra\r
};\r
\r
export const AllCaps = Template.bind({});\r
AllCaps.args = {\r
  size: "normal",\r
  allCaps: true,\r
};\r
\r
export const Secondary = Template.bind({});\r
Secondary.args = {\r
  size: "normal",\r
  color: "secondary", // primary | secondary | tertiary\r
};\r
\r
export const Tertiary = Template.bind({});\r
Tertiary.args = {\r
  size: "normal",\r
  color: "tertiary",\r
};\r
\r
export const CustomFontColor = Template.bind({});\r
CustomFontColor.args = {\r
  size: "h1",\r
  fontColor: "#5517ac",\r
};\r
`,locationsMap:{basic:{startLoc:{col:49,line:14},endLoc:{col:1,line:16},startBody:{col:49,line:14},endBody:{col:1,line:16}},"all-caps":{startLoc:{col:49,line:14},endLoc:{col:1,line:16},startBody:{col:49,line:14},endBody:{col:1,line:16}},secondary:{startLoc:{col:49,line:14},endLoc:{col:1,line:16},startBody:{col:49,line:14},endBody:{col:1,line:16}},tertiary:{startLoc:{col:49,line:14},endLoc:{col:1,line:16},startBody:{col:49,line:14},endBody:{col:1,line:16}},"custom-font-color":{startLoc:{col:49,line:14},endLoc:{col:1,line:16},startBody:{col:49,line:14},endBody:{col:1,line:16}}}}},title:"UI/MyLabel",component:a,argTypes:{size:{control:"select"},color:{control:"select"},fontColor:{control:"color"}}};const l=o=>c(a,s({},o)),u=l.bind({});u.args={size:"normal",allCaps:!1};const b=l.bind({});b.args={size:"normal",allCaps:!0};const f=l.bind({});f.args={size:"normal",color:"secondary"};const C=l.bind({});C.args={size:"normal",color:"tertiary"};const L=l.bind({});L.args={size:"h1",fontColor:"#5517ac"};const _=["Basic","AllCaps","Secondary","Tertiary","CustomFontColor"];export{b as AllCaps,u as Basic,L as CustomFontColor,f as Secondary,C as Tertiary,_ as __namedExportsOrder,T as default};
//# sourceMappingURL=MyLabel.stories.a60f5aa8.js.map
