import"./index-76fb7be0.js";import{j as y,a as h}from"./jsx-runtime-03b4ddbf.js";import{g as b}from"./_commonjsHelpers-de833af9.js";var d={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(i){(function(){var r={}.hasOwnProperty;function o(){for(var t="",e=0;e<arguments.length;e++){var n=arguments[e];n&&(t=s(t,a(n)))}return t}function a(t){if(typeof t=="string"||typeof t=="number")return t;if(typeof t!="object")return"";if(Array.isArray(t))return o.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var n in t)r.call(t,n)&&t[n]&&(e=s(e,n));return e}function s(t,e){return e?t?t+" "+e:t+e:t}i.exports?(o.default=o,i.exports=o):window.classNames=o})()})(d);var x=d.exports;const l=b(x);function m({children:i,type:r,icon:o,display:a,size:s,hover:t,disable:e}){return y("button",{type:"button",className:l("btn",{[`btn-${r}`]:!0},{[`size-${s}`]:!0},{[`btn-${r}-hover`]:t==!0},{[`btn-${r}-disabled`]:e==!0}),disabled:e,children:[a=="text only"||h("i",{className:l("ph","mr-2",{[`${o}`]:!0},{[`icon-${s}`]:!0})}),a=="icon only"||i]})}m.__docgenInfo={description:"",methods:[],displayName:"MyButton"};const B={title:"Example/MyButton",component:m,tags:["autodocs"],argTypes:{display:{options:["default","icon only","text only"],control:{type:"radio"},description:"select preference of Button type"},type:{options:["default","neutral","reverse"],control:{type:"radio"},description:"select type of Button "},icon:{description:"use any class from Phosphor icons to change icons"},size:{options:["default","sm","xsm"],control:{type:"radio"},description:"select the size of button"},hover:{description:"select to see button in hover state"},children:{description:"write  button text here"}}},c={args:{children:"Action",type:"default",size:"default",display:"default",icon:"ph-user-circle",hover:!1,disable:!1}};var u,p,f;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: "Action",
    type: "default",
    size: "default",
    display: "default",
    icon: "ph-user-circle",
    hover: false,
    disable: false
  }
}`,...(f=(p=c.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const N=["Default"];export{c as Default,N as __namedExportsOrder,B as default};
