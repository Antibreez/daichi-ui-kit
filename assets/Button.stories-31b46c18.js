import{d as z,e as x,f as r,n as S,o as h}from"./vue.esm-bundler-9f98ab6d.js";const V=["disabled"],v=z({__name:"Button",props:{disabled:{type:Boolean,default:!1},size:{type:String,default:"medium"},color:{type:String,default:"primary"}},setup(t){const n=t;return(e,l)=>(h(),x("button",{class:S(["button",[n.size,n.color]]),disabled:n.disabled},[r(e.$slots,"left-icon",{},void 0,!0),r(e.$slots,"default",{},void 0,!0),r(e.$slots,"right-icon",{},void 0,!0)],10,V))}});const k=(t,n)=>{const e=t.__vccOpts||t;for(const[l,b]of n)e[l]=b;return e},u=k(v,[["__scopeId","data-v-181832dd"]]);v.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",values:["small","medium","large"],type:{name:"string"},defaultValue:{func:!1,value:"'medium'"}},{name:"color",values:["primary","secondary"],type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}}],slots:[{name:"left-icon"},{name:"default"},{name:"right-icon"}],sourceFiles:["F:/daichi-ui/daichi-ui-kit/src/components/button/Button.vue"]};const $={title:"Button",component:u,argTypes:{disabled:{control:{type:"boolean"},defaultValue:!1},size:{control:{type:"radio"},options:["small","medium","large"],defaultValue:"medium"},color:{control:{type:"select"},options:["primary","secondary"],defaultValue:"primary"}}},_=t=>({components:{Button:u},setup(){return{args:t}},template:`
    <div style="display: flex; flex-direction: row; gap: 12px;">
      <Button v-bind="args" size="large">Button</Button>
      <Button v-bind="args" size="medium">Button</Button>
      <Button v-bind="args" size="small">Button</Button>
    </div>
  `}),s=t=>({components:{Button:u},setup(){return{args:t}},template:'<Button v-bind="args">Button</Button>'}),o=_.bind({});o.args={color:"primary"};const a=_.bind({});a.args={color:"secondary"};var i,d,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: '<Button v-bind="args">Button</Button>'
})`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,m,B;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="display: flex; flex-direction: row; gap: 12px;">
      <Button v-bind="args" size="large">Button</Button>
      <Button v-bind="args" size="medium">Button</Button>
      <Button v-bind="args" size="small">Button</Button>
    </div>
  \`
})`,...(B=(m=o.parameters)==null?void 0:m.docs)==null?void 0:B.source}}};var g,f,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  components: {
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="display: flex; flex-direction: row; gap: 12px;">
      <Button v-bind="args" size="large">Button</Button>
      <Button v-bind="args" size="medium">Button</Button>
      <Button v-bind="args" size="small">Button</Button>
    </div>
  \`
})`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const C=["DefaultButton","PrimaryButton","SecondaryButton"];export{s as DefaultButton,o as PrimaryButton,a as SecondaryButton,C as __namedExportsOrder,$ as default};
//# sourceMappingURL=Button.stories-31b46c18.js.map
