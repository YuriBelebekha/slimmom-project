"use strict";(self.webpackChunkslimmom_project=self.webpackChunkslimmom_project||[]).push([[539],{2940:function(n,e,t){t.d(e,{z:function(){return c}});var r,i=t(168),a=t(2842),o=t(9202),s=t(3271),p=(0,o.Z)(a.Z)(r||(r=(0,i.Z)(["\n  min-width: 180px;\n  padding: 13px 22px;\n  margin-top: 20px;\n\n  font-family: verdanaBold;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n  text-transform: capitalize;\n  color: ",";\n\n  background-color: ",";\n\n  border: 2px solid ",";\n  border-radius: 30px;\n\n  transition: background-color ","ms ",",\n                         color ","ms ",";\n\n  &:hover{\n    background-color: ",";\n    border: 2px solid ",";\n    color: ",";\n  };\n\n  "," {\n    margin-top: 0;\n    margin-left: 32px;\n  };\n"])),s.r.palette.primary.accent,s.r.palette.primary.white,s.r.palette.primary.accent,s.r.transitions.duration.standard,s.r.transitions.easing.easeOut,s.r.transitions.duration.standard,s.r.transitions.easing.easeOut,s.r.palette.primary.accent,s.r.palette.primary.accent,s.r.palette.primary.white,s.r.breakpoints.up("tablet")),l=t(184),c=function(n){var e=n.name;return(0,l.jsx)(p,{type:"button",variant:"outlined",children:e})}},9467:function(n,e,t){t.d(e,{G:function(){return c}});var r,i=t(168),a=t(2842),o=t(9202),s=t(3271),p=(0,o.Z)(a.Z)(r||(r=(0,i.Z)(["\n  min-width: 180px;\n  padding: 13px 22px;  \n\n  font-family: verdanaBold;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n  text-transform: capitalize;\n\n  background-color: ",";\n  border-radius: 30px;\n  box-shadow: 0px 4px 10px 0px ",";\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n    box-shadow: 0px 2px 5px 0px ",";\n  };\n"])),(function(n){return n.theme.palette.primary.accent}),s.r.palette.primary.accent,(function(n){return n.theme.palette.primary.accent}),s.r.palette.primary.accent),l=t(184),c=function(n){var e=n.name;return(0,l.jsx)(p,{type:"submit",variant:"contained",children:e})}},8539:function(n,e,t){t.r(e),t.d(e,{default:function(){return O}});var r,i,a,o,s,p,l=t(6907),c=t(1087),d=t(5705),m=t(6727),x=t(4554),u=t(168),h=t(9202),g=t(890),f=t(3271),b=(0,h.Z)(g.Z)(r||(r=(0,u.Z)(["\n  text-align: center;\n  margin-bottom: 55px;\n\n  font-family: VerdanaBold;\n  font-weight: 700;\n  font-size: 14px;\n  text-transform: uppercase;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n  color: ",";\n\n  "," {\n    text-align: left;\n  };\n"])),f.r.palette.primary.accent,f.r.breakpoints.up("tablet")),y=(0,h.Z)(d.l0)(i||(i=(0,u.Z)(["\n  text-align: center;\n\n  "," {\n    text-align: left;\n  };\n"])),f.r.breakpoints.up("tablet")),j=h.Z.div(a||(a=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 28px;\n\n  align-items: center;\n\n  "," {\n    align-items: start;\n  };\n"])),f.r.breakpoints.up("tablet")),v=(0,h.Z)(d.gN)(o||(o=(0,u.Z)(["\n  width: 240px;\n  padding: 4px 0;\n  margin-bottom: 32px;\n\n  background-color: transparent;\n  \n  border-top: none;\n  border-left: none;\n  border-bottom: 1px solid;\n  border-right: none;\n  border-color: ",";\n  outline: none;  \n\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n\n  transition: border-color ","ms ",";\n\n  &:hover,\n  &:focus {\n    border-color: ",";\n  };\n  \n  & ~ span {\n    position: absolute;\n    top: 0;\n    left: 0;\n  };\n\n  &:focus ~ span,\n  &:not(:focus):valid ~ span {\n    top: -16px;\n    font-size: 10px;\n    line-height: 14px;\n    color: ",";\n  };\n"])),f.r.palette.primary.grey,f.r.transitions.duration.standard,f.r.transitions.easing.easeOut,f.r.palette.primary.accent,f.r.palette.primary.accent),Z=(0,h.Z)(d.Bc)(s||(s=(0,u.Z)(["\n  position: absolute;\n  top: 30px;\n  left: 0;\n  max-width: 240px;\n  font-size: 7px;\n  line-height: 10px;\n  color: ",";\n"])),f.r.palette.primary.errorMessage),w=h.Z.label(p||(p=(0,u.Z)(["\n  position: relative;\n\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n  color: ",";  \n"])),f.r.palette.primary.darkGrey),k=t(9467),z=t(2940),q=t(184),B=m.Ry().shape({email:m.Z_().email("Must be a valid email").required("Entering this value is required"),password:m.Z_().min(8,"Must be at least 8 characters long").max(30,"Must contain no more than 30 characters").required("Entering this value is required")}),M={email:"",password:""},L=function(){return(0,q.jsxs)(x.Z,{component:"section",children:[(0,q.jsx)(b,{component:"h1",children:"Log In"}),(0,q.jsx)(d.J9,{initialValues:M,validationSchema:B,onSubmit:function(n,e){var t=e.resetForm;console.log(n),t()},children:(0,q.jsxs)(y,{autoComplete:"off",children:[(0,q.jsxs)(j,{children:[(0,q.jsxs)(w,{htmlFor:"email",children:[(0,q.jsx)(v,{type:"email",name:"email",required:!0}),(0,q.jsx)("span",{children:"Email *"}),(0,q.jsx)(Z,{component:"div",name:"email"})]}),(0,q.jsxs)(w,{htmlFor:"password",children:[(0,q.jsx)(v,{type:"text",name:"password",required:!0}),(0,q.jsx)("span",{children:"Password *"}),(0,q.jsx)(Z,{component:"div",name:"password"})]})]}),(0,q.jsx)(k.G,{name:"Log In"}),(0,q.jsx)(c.OL,{to:"/registration",children:(0,q.jsx)(z.z,{name:"Register"})})]})})]})},O=function(){return(0,q.jsxs)(l.B6,{children:[(0,q.jsx)(l.ql,{children:(0,q.jsx)("title",{children:"SlimMom | Login"})}),(0,q.jsx)(L,{})]})}}}]);
//# sourceMappingURL=539.d5fe5e45.chunk.js.map