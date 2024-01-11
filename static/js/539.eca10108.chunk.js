"use strict";(self.webpackChunkslimmom_project=self.webpackChunkslimmom_project||[]).push([[539],{2940:function(n,e,r){r.d(e,{z:function(){return d}});var t,a=r(168),i=r(4294),o=r(225),l=r(3271),s=(0,o.Z)(i.Z)(t||(t=(0,a.Z)(["\n  min-width: 180px;\n  padding: 11px 22px;\n  margin-top: 20px;\n\n  font-family: verdanaBold;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n  text-transform: capitalize;\n  color: ",";\n\n  background-color: ",";\n\n  border: 2px solid ",";\n  border-radius: 30px;\n\n  transition: background-color ","ms\n      ",",\n    color ","ms\n      ",";\n\n  &:hover {\n    background-color: ",";\n    border: 2px solid ",";\n    color: ",";\n  }\n\n  "," {\n    margin-top: 0;\n    margin-left: 32px;\n  }\n"])),l.r.palette.primary.accent,l.r.palette.primary.white,l.r.palette.primary.accent,l.r.transitions.duration.standard,l.r.transitions.easing.easeOut,l.r.transitions.duration.standard,l.r.transitions.easing.easeOut,l.r.palette.primary.accent,l.r.palette.primary.accent,l.r.palette.primary.white,l.r.breakpoints.up("tablet")),p=r(184),d=function(n){var e=n.name;return(0,p.jsx)(s,{type:"button",variant:"outlined",children:e})}},9467:function(n,e,r){r.d(e,{G:function(){return d}});var t,a=r(168),i=r(4294),o=r(225),l=r(3271),s=(0,o.Z)(i.Z)(t||(t=(0,a.Z)(["\n  min-width: 180px;\n  padding: 13px 22px;\n\n  font-family: verdanaBold;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n  text-transform: capitalize;\n\n  background-color: ",";\n  border-radius: 30px;\n  box-shadow: 0px 4px 10px 0px ",";\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n    box-shadow: 0px 2px 5px 0px ",";\n  }\n"])),(function(n){return n.theme.palette.primary.accent}),l.r.palette.primary.accent,(function(n){return n.theme.palette.primary.accent}),l.r.palette.primary.accent),p=r(184),d=function(n){var e=n.name;return(0,p.jsx)(s,{type:"submit",variant:"contained",children:e})}},8539:function(n,e,r){r.r(e),r.d(e,{default:function(){return M}});var t,a,i,o,l=r(6907),s=r(9434),p=r(1835),d=r(1087),c=r(5705),m=r(6727),u=r(4554),x=r(168),h=r(225),f=r(890),g=r(7293),b=r(3271),w=(0,h.Z)(f.Z)(t||(t=(0,x.Z)(["\n  text-align: center;\n  margin-bottom: 55px;\n\n  font-family: VerdanaBold;\n  font-weight: 700;\n  font-size: 14px;\n  text-transform: uppercase;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n  color: ",";\n\n  "," {\n    text-align: left;\n  }\n"])),b.r.palette.primary.accent,b.r.breakpoints.up("tablet")),y=h.Z.form(a||(a=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  "," {\n    align-items: start;\n  }\n"])),b.r.breakpoints.up("tablet")),v=(0,h.Z)(g.Z)(i||(i=(0,x.Z)(["\n  width: 280px;\n  padding: 4px 0;\n  margin-bottom: 32px;\n\n  & label {\n    font-family: VerdanaBold;\n    font-size: 14px;\n    font-weight: 700;\n    line-height: 17px;\n    letter-spacing: 0.04em;\n  }\n\n  & label.Mui-focused {\n    color: ",";\n  }\n\n  & .MuiInput-underline:after {\n    border-bottom-color: ",";\n  }\n\n  & .MuiInput-root {\n    font-family: VerdanaBold;\n    font-size: 14px;\n    font-weight: 700;\n    line-height: 17px;\n    letter-spacing: 0.04em;\n    background: transparent;\n  }\n\n  & .MuiFormHelperText-root {\n    position: absolute;\n    bottom: -20px;\n  }\n\n  "," {\n    width: 240px;\n  }\n"])),b.r.palette.primary.accent,b.r.palette.primary.accent,b.r.breakpoints.up("tablet")),Z=(0,h.Z)(u.Z)(o||(o=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 28px;\n\n  "," {\n    flex-direction: row;\n  }\n"])),b.r.breakpoints.up("tablet")),j=r(9467),k=r(2940),B=r(184),z=m.Ry().shape({email:m.Z_("Enter your email").email("Enter a valid email").required("Email is required"),password:m.Z_("Enter your password").min(8,"Minimum 8 characters length").required("Password is required")}),C=function(){var n=(0,s.I0)(),e=(0,c.TA)({initialValues:{email:"",password:""},validationSchema:z,onSubmit:function(e,r){var t=r.resetForm,a=r.setSubmitting;console.log(e);var i={email:e.email,password:e.password};n((0,p.x4)(i)).finally((function(){a(!1)})),t()}});return(0,B.jsxs)(u.Z,{component:"section",children:[(0,B.jsx)(w,{component:"h1",children:"Log In"}),(0,B.jsxs)(y,{onSubmit:e.handleSubmit,children:[(0,B.jsx)(v,{variant:"standard",id:"email",name:"email",label:"Email *",value:e.values.email,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.email&&Boolean(e.errors.email),helperText:e.touched.email&&e.errors.email}),(0,B.jsx)(v,{variant:"standard",id:"password",name:"password",label:"Password *",type:"password",value:e.values.password,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.password&&Boolean(e.errors.password),helperText:e.touched.password&&e.errors.password}),(0,B.jsxs)(Z,{children:[(0,B.jsx)(j.G,{name:"Log In"}),(0,B.jsx)(d.OL,{to:"/registration",children:(0,B.jsx)(k.z,{name:"Register"})})]})]})]})},M=function(){return(0,B.jsxs)(l.B6,{children:[(0,B.jsx)(l.ql,{children:(0,B.jsx)("title",{children:"SlimMom | Login"})}),(0,B.jsx)(C,{})]})}}}]);
//# sourceMappingURL=539.eca10108.chunk.js.map