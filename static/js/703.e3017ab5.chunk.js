"use strict";(self.webpackChunkslimmom_project=self.webpackChunkslimmom_project||[]).push([[703],{1703:function(e,n,t){t.r(n),t.d(n,{default:function(){return M}});var r,i,a,o,l,s,p,d,x,h,m,c=t(6907),u=t(5705),g=t(6727),b=t(4554),y=t(168),f=t(890),j=t(9202),v=t(3271),w=(0,j.Z)(f.Z)(r||(r=(0,y.Z)(["\n  max-width: 280px;\n  margin-bottom: 34px;\n\n  font-family: VerdanaBold;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 25px;\n\n  "," {\n    max-width: 530px;\n    margin-bottom: 68px;\n\n    font-size: 34px;\n    line-height: 48px;\n  };\n"])),v.r.breakpoints.up("tablet")),Z=(0,j.Z)(u.l0)(i||(i=(0,y.Z)(["  \n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 240px;\n\n  "," {\n    max-width: 530px;\n    align-items: start;\n  };\n\n  "," {\n    max-width: 530px;\n    align-items: end;\n  };\n"])),v.r.breakpoints.up("tablet"),v.r.breakpoints.up("desktop")),k=j.Z.div(a||(a=(0,y.Z)(["\n  display: flex;\n  column-gap: 32px;\n  flex-wrap: wrap;\n  margin-bottom: 8px;\n\n  "," {\n    margin-bottom: 28px;\n  };\n"])),v.r.breakpoints.up("tablet")),q=j.Z.div(o||(o=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),T=(0,j.Z)(u.gN)(l||(l=(0,y.Z)(["\n  width: 240px;\n  padding: 4px 0;\n  margin-bottom: 32px;\n\n  background-color: transparent;\n  \n  border-top: none;\n  border-left: none;\n  border-bottom: 1px solid;\n  border-right: none;\n  border-color: ",";\n  outline: none;  \n\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n\n  transition: border-color ","ms ",";\n\n  &:hover,\n  &:focus {\n    border-color: ",";\n  };\n  \n  & ~ span {\n    position: absolute;\n    top: 0;\n    left: 0;\n  };\n\n  &:focus ~ span,\n  &:not(:focus):valid ~ span {\n    top: -16px;\n    font-size: 10px;\n    line-height: 14px;\n    color: ",";\n  };\n"])),v.r.palette.primary.grey,v.r.transitions.duration.standard,v.r.transitions.easing.easeOut,v.r.palette.primary.accent,v.r.palette.primary.accent),W=(0,j.Z)(u.Bc)(s||(s=(0,y.Z)(["\n  position: absolute;\n  top: 30px;\n  left: 0;\n  max-width: 240px;\n  font-size: 7px;\n  line-height: 10px;\n  color: ",";\n"])),v.r.palette.primary.errorMessage),z=j.Z.fieldset(p||(p=(0,y.Z)(["\n  border: none;\n  margin: 0;\n  padding: 0;\n  \n  font-size: 14px;\n  font-weight: 700;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n  color: ",";  \n"])),v.r.palette.primary.darkGrey),F=j.Z.label(d||(d=(0,y.Z)(["\n  position: relative;\n\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n  color: ",";  \n"])),v.r.palette.primary.darkGrey),A=j.Z.div(x||(x=(0,y.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 8px;\n  margin-bottom: 40px;\n\n  & > label {\n    display: flex;\n    align-items: center;    \n  };\n\n  & > label > span {\n    margin-left: 4px;\n  };\n\n  "," {\n    padding-top: 8px;\n    border-top: 1px solid ",";\n  };\n"])),v.r.breakpoints.up("tablet"),v.r.palette.primary.grey),B=(0,j.Z)(u.gN)(h||(h=(0,y.Z)(["\n  width: 20px;\n  height: 20px;\n\n  &:checked {\n    appearance: none;\n    border: 5px solid ",";\n    border-radius: 50%;\n    box-shadow: "," 0 0 0 1px;\n    background: ",";\n\n    & ~ span {\n      color: ",";\n    };\n  };\n"])),v.r.palette.primary.white,v.r.palette.primary.darkGrey,v.r.palette.primary.accent,v.r.palette.primary.accent),C=t(2842),E=(0,j.Z)(C.Z)(m||(m=(0,y.Z)(["\n  min-width: 180px;\n  padding: 13px 22px;\n\n  font-family: verdanaBold;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n  text-transform: capitalize;\n\n  background-color: ",";\n  border-radius: 30px;\n  box-shadow: 0px 4px 10px 0px ",";\n\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n    box-shadow: 0px 2px 5px 0px ",";\n  };\n"])),(function(e){return e.theme.palette.primary.accent}),v.r.palette.primary.accent,(function(e){return e.theme.palette.primary.accent}),v.r.palette.primary.accent),R=t(184),S=function(e){var n=e.name;return(0,R.jsx)(E,{type:"submit",variant:"contained",children:n})},G=g.Ry().shape({height:g.Rx().integer("An integer value must be entered").min(120,"The entered value must not be less than 120 (cm)").max(220,"The entered value should not exceed 220 (cm)").required("Entering this value is required"),age:g.Rx().integer("An integer value must be entered").min(18,"The entered value must not be less than 18 (years)").max(70,"The entered value should not exceed 70 (years)").required("Entering this value is required"),currentWeight:g.Rx().integer("An integer value must be entered").min(35,"The entered value must not be less than 35 (kg)").max(180,"The entered value should not exceed 180 (kg)").required("Entering this value is required"),desiredWeight:g.Rx().integer("An integer value must be entered").min(35,"The entered value must not be less than 35 (kg)").max(180,"The entered value should not exceed 180 (kg)").required("Entering this value is required"),bloodType:g.Z_().required("Entering this value is required")}),_={height:"",age:"",currentWeight:"",desiredWeight:"",bloodType:"1"},H=function(){return(0,R.jsxs)(b.Z,{component:"section",children:[(0,R.jsx)(w,{component:"h1",children:"Calculate your daily calorie intake right now"}),(0,R.jsx)(u.J9,{initialValues:_,validationSchema:G,onSubmit:function(e,n){var t=n.resetForm;console.log(e),t()},children:(0,R.jsxs)(Z,{autoComplete:"off",children:[(0,R.jsxs)(k,{children:[(0,R.jsxs)(q,{children:[(0,R.jsxs)(F,{htmlFor:"height",children:[(0,R.jsx)(T,{type:"number",min:"120",max:"220",name:"height",required:!0}),(0,R.jsx)("span",{children:"Height *"}),(0,R.jsx)(W,{component:"div",name:"height"})]}),(0,R.jsxs)(F,{htmlFor:"age",children:[(0,R.jsx)(T,{type:"number",min:"18",max:"70",name:"age",required:!0}),(0,R.jsx)("span",{children:"Age *"}),(0,R.jsx)(W,{component:"div",name:"age"})]}),(0,R.jsxs)(F,{htmlFor:"currentWeight",children:[(0,R.jsx)(T,{type:"number",min:"35",max:"180",name:"currentWeight",required:!0}),(0,R.jsx)("span",{children:"Current weight *"}),(0,R.jsx)(W,{component:"div",name:"currentWeight"})]})]}),(0,R.jsxs)(q,{children:[(0,R.jsxs)(F,{htmlFor:"desiredWeight",children:[(0,R.jsx)(T,{type:"number",min:"35",max:"180",name:"desiredWeight",required:!0}),(0,R.jsx)("span",{children:"Desired weight *"}),(0,R.jsx)(W,{component:"div",name:"desiredWeight"})]}),(0,R.jsxs)(z,{children:[(0,R.jsx)("legend",{children:"Blood type *"}),(0,R.jsxs)(A,{children:[(0,R.jsxs)("label",{htmlFor:"1",children:[(0,R.jsx)(B,{type:"radio",value:"1",name:"bloodType"}),(0,R.jsx)("span",{children:"1"})]}),(0,R.jsxs)("label",{htmlFor:"2",children:[(0,R.jsx)(B,{type:"radio",value:"2",name:"bloodType"}),(0,R.jsx)("span",{children:"2"})]}),(0,R.jsxs)("label",{htmlFor:"3",children:[(0,R.jsx)(B,{type:"radio",value:"3",name:"bloodType"}),(0,R.jsx)("span",{children:"3"})]}),(0,R.jsxs)("label",{htmlFor:"4",children:[(0,R.jsx)(B,{type:"radio",value:"4",name:"bloodType"}),(0,R.jsx)("span",{children:"4"})]})]}),(0,R.jsx)(W,{component:"div",name:"bloodType"})]})]})]}),(0,R.jsx)(S,{name:"Start losing weight"})]})})]})},M=function(){return(0,R.jsxs)(c.B6,{children:[(0,R.jsx)(c.ql,{children:(0,R.jsx)("title",{children:"SlimMom | Home"})}),(0,R.jsx)(H,{})]})}}}]);
//# sourceMappingURL=703.e3017ab5.chunk.js.map