import"./index-76fb7be0.js";import{j as S,a as j}from"./jsx-runtime-03b4ddbf.js";import{g as B}from"./_commonjsHelpers-de833af9.js";var z={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(o){(function(){var c={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var s=arguments[t];s&&(e=n(e,i(s)))}return e}function i(e){if(typeof e=="string"||typeof e=="number")return e;if(typeof e!="object")return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var s in e)c.call(e,s)&&e[s]&&(t=n(t,s));return t}function n(e,t){return t?e?e+" "+t:e+t:e}o.exports?(r.default=r,o.exports=r):window.classNames=r})()})(z);var N=z.exports;const u=B(N);function A({children:o,type:c,icon:r,display:i,size:n,disable:e,onClick:t}){return S("button",{type:"button",className:u("btn",{[`btn-${c}`]:!0},{[`size-${n}`]:!0},{[`btn-${c}-disabled`]:e==!0}),onClick:t,disabled:e,children:[i=="text only"||j("i",{className:u("ph","mr-2",{[`${r}`]:!0},{[`icon-${n}`]:!0})}),i=="icon only"||o]})}A.__docgenInfo={description:"",methods:[],displayName:"MyButton"};const M={title:"Example/MyButton",component:A,tags:["autodocs"],argTypes:{onClick:{action:"clicked"},display:{options:["default","icon only","text only"],control:{type:"radio"},description:"select preference of Button type"},type:{options:["default","neutral","reverse"],control:{type:"radio"},description:"select type of Button "},icon:{description:"use any class from Phosphor icons to change icons"},size:{options:["default","sm","xsm"],control:{type:"radio"},description:"select the size of button"},children:{description:"write  button text here"}}},a={args:{children:"Action",type:"default",size:"default",display:"default",icon:"ph-user-circle",disable:!1}},l={args:{size:"sm",type:"neutral",children:"Action",icon:"ph-user-circle"}},p={args:{size:"xsm",type:"reverse",children:"Action",icon:"ph-user-circle"}};var d,m,f;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: "Action",
    type: "default",
    size: "default",
    display: "default",
    icon: "ph-user-circle",
    disable: false
  }
}`,...(f=(m=a.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var y,h,x;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: "sm",
    type: "neutral",
    children: "Action",
    icon: "ph-user-circle"
  }
}`,...(x=(h=l.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,g,v;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: "xsm",
    type: "reverse",
    children: "Action",
    icon: "ph-user-circle"
  }
}`,...(v=(g=p.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const O=["Default","small","Xsmall"];export{a as Default,p as Xsmall,O as __namedExportsOrder,M as default,l as small};
