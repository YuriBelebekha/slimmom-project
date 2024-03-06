"use strict";(self.webpackChunkslimmom_project=self.webpackChunkslimmom_project||[]).push([[933],{9467:function(n,t,e){e.d(t,{G:function(){return s}});var r,i=e(168),a=e(4294),o=e(225),p=e(3271),l=(0,o.Z)(a.Z)(r||(r=(0,i.Z)(["\n  min-width: 180px;\n  padding: 13px 22px;\n\n  font-family: verdanaBold;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n  text-transform: capitalize;\n\n  background-color: ",";\n  border-radius: 30px;\n  box-shadow: 0px 4px 10px 0px ",";\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n    box-shadow: 0px 2px 5px 0px ",";\n  }\n"])),(function(n){return n.theme.palette.primary.accent}),p.r.palette.primary.accent,(function(n){return n.theme.palette.primary.accent}),p.r.palette.primary.accent),d=e(184),s=function(n){var t=n.name;return(0,d.jsx)(l,{type:"submit",variant:"contained",children:t})}},8933:function(n,t,e){e.d(t,{c:function(){return Dn},r:function(){return zn}});var r,i,a,o=e(1413),p=e(9439),l=e(2791),d=e(9434),s=e(7892),c=e.n(s),u=e(763),h=e(1652),x=e(4750),m=e(5526),g=e(4979),f=e(229),b=e(5095),Z=e.n(b),y=e(6976),w=e(6619),j=e(5705),k=e(6727),v=e(4724),C=e(923),M=e(3271),S=e(168),I=e(225),Y=e(890),z=(0,I.Z)(Y.Z)(r||(r=(0,S.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n  white-space: nowrap;\n  clip-path: inset(100%);\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n"]))),D=e(9467),P=e(4554),B=e(1774),E=e(5016),A=I.Z.form(i||(i=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  "," {\n    flex-direction: row;\n    align-items: start;\n  }\n"])),M.r.breakpoints.up("tablet")),F=(0,I.Z)(E.Z)(a||(a=(0,S.Z)(["\n  width: 280px;\n  height: 70px;\n  padding: 4px 0;\n  margin-bottom: 32px;\n\n  & label {\n    font-family: VerdanaBold;\n    font-size: 14px;\n    font-weight: 700;\n    line-height: 17px;\n    letter-spacing: 0.04em;\n  }\n\n  & label.Mui-focused {\n    color: ",";\n  }\n\n  & .MuiInput-underline:after {\n    border-bottom-color: ",";\n  }\n\n  & .MuiInput-root {\n    font-family: VerdanaBold;\n    font-size: 14px;\n    font-weight: 700;\n    line-height: 17px;\n    letter-spacing: 0.04em;\n    background: transparent;\n    height: 30px;\n  }\n\n  & .MuiFormHelperText-root {\n    position: absolute;\n    bottom: -20px;\n  }\n\n  "," {\n    width: 240px;\n\n    &:first-of-type {\n      margin-right: 20px;\n    }\n\n    &:nth-of-type(2) {\n      width: 106px;\n      margin-right: 85px;\n    }\n  }\n"])),M.r.palette.primary.accent,M.r.palette.primary.accent,M.r.breakpoints.up("tablet")),G=e(184),O=k.Ry().shape({weight:k.Rx("Enter your password").min(1,"Minimum 1 gram").max(3e3,"Maximum 3000 grams").positive().required("Weight is required")});var T,V,_,R,q,L,H,N,U,W,J,K,Q,X,$,nn=function(){var n,t=(0,d.I0)(),e=(0,v.e)(),r=(n=zn,String(c()(n).format("YYYY-MM-DD"))),i=C.h.getState().products.foundProductsList,a=(0,l.useState)(""),s=(0,p.Z)(a,2),u=s[0],h=s[1],x=(0,l.useState)(""),m=(0,p.Z)(x,2),g=m[0],f=m[1],b=(0,l.useState)(""),k=(0,p.Z)(b,2),S=k[0],I=k[1],Y=function(n,t){h(n.target.value)},E=(0,l.useMemo)((function(){return Z()(Y,500)}),[]);(0,l.useEffect)((function(){return t((0,y.C)(u)),function(){E.cancel()}}));var T=(0,j.TA)({initialValues:{date:"",productId:"",weight:""},validationSchema:O,onSubmit:function(n,e){var i=e.resetForm,a=e.setSubmitting,o={date:r,productId:S,weight:Number(n.weight)};t((0,w.ey)(o)).finally((function(){a(!1)})),i()}});return(0,G.jsxs)(P.Z,{children:[(0,G.jsx)(z,{component:"h2",children:"Search Product Form"}),(0,G.jsxs)(A,{onSubmit:T.handleSubmit,children:[(0,G.jsx)(B.Z,{freeSolo:!0,id:"search",disableClearable:!0,value:g,onInputChange:E,onChange:function(n,t,e){f("selectOption"===e?t:""),i.map((function(n){return n.title.en.toLowerCase()===t.toLowerCase()?I(n._id):null}))},options:i.map((function(n){return(t=n.title.en)[0].toUpperCase()+t.slice(1);var t})),renderOption:function(n,t){return(0,l.createElement)("li",(0,o.Z)((0,o.Z)({},n),{},{key:n.id}),t)},renderInput:function(n){return(0,G.jsx)(F,(0,o.Z)((0,o.Z)({},n),{},{variant:"standard",label:"Enter product name",InputProps:(0,o.Z)((0,o.Z)({},n.InputProps),{},{type:"search"})}))}}),(0,G.jsx)(F,{variant:"standard",id:"weight",name:"weight",label:"Enter grams",value:T.values.weight,onChange:T.handleChange,onBlur:T.handleBlur,error:T.touched.weight&&Boolean(T.errors.weight),helperText:T.touched.weight&&T.errors.weight}),e.width<M.r.breakpoints.values.tablet?(0,G.jsx)(D.G,{name:"Add"}):(0,G.jsx)(D.G,{name:"+"})]})]})},tn=e(4294),en=e(9095),rn=(0,I.Z)(tn.Z)(T||(T=(0,S.Z)(["\n  position: absolute;\n  bottom: 0;\n  min-width: 48px;\n  height: 48px;\n\n  font-size: 24px;\n  color: ",";\n\n  border-radius: 50%;\n  background-color: ",";\n  box-shadow: 0px 4px 10px 0px ",";\n\n  &:hover {\n    background-color: ",";\n  }\n"])),M.r.palette.primary.white,M.r.palette.primary.accent,M.r.palette.primary.accent,M.r.palette.primary.accent),an=(0,I.Z)(P.Z)(V||(V=(0,S.Z)(["\n  height: 100vh;\n  margin-top: 122px;\n  padding: 80px 20px;\n  text-align: center;\n\n  background-color: ",";\n  outline: none;\n"])),M.r.palette.primary.white),on=(0,I.Z)(en.Z)(_||(_=(0,S.Z)(["\n  .MuiModal-backdrop {\n    background-color: transparent;\n  }\n"]))),pn=(0,I.Z)(P.Z)(R||(R=(0,S.Z)(["\n  position: absolute;\n  top: 90px;\n  pointer-events: none;\n"]))),ln=function(){var n=l.useState(!1),t=(0,p.Z)(n,2),e=t[0],r=t[1];return(0,G.jsxs)("div",{children:[(0,G.jsx)(on,{open:e,onClose:function(){return r(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,G.jsxs)(an,{children:[(0,G.jsx)(pn,{children:(0,G.jsx)(f.Z,{})}),(0,G.jsx)(nn,{})]})}),(0,G.jsx)(rn,{onClick:function(){return r(!0)},children:"+"})]})},dn=(0,I.Z)(P.Z)(q||(q=(0,S.Z)(["\n  & button {\n    min-width: 0;\n    width: 48px;\n    height: 48px;\n  }\n"]))),sn=function(){return(0,G.jsx)(dn,{children:(0,G.jsx)(nn,{})})},cn=e(5987),un=e(9085),hn=e(8240),xn=e(9823),mn=e(663),gn=e(3400),fn=(0,I.Z)(P.Z)(L||(L=(0,S.Z)(["\n  min-width: 280px;\n  height: 200px;\n  z-index: 2;\n\n  "," {\n    width: 610px;\n    height: 245px;\n  }\n\n  "," {\n    width: 625px;\n    height: 315px;\n    margin-left: 0;\n  }\n"])),M.r.breakpoints.up("tablet"),M.r.breakpoints.up("desktop")),bn=(0,I.Z)(mn.OO)(H||(H=(0,S.Z)(["\n  width: 100%;\n  color: ",";\n"])),M.r.palette.primary.darkGrey),Zn=(0,I.Z)(P.Z)(N||(N=(0,S.Z)(["\n  &&::-webkit-scrollbar {\n    width: 6px;\n  }\n\n  &&::-webkit-scrollbar-track {\n    background: ",";\n  }\n\n  &&::-webkit-scrollbar-thumb {\n    height: 40px;\n    background: ",";\n  }\n"])),M.r.palette.primary.lightGrey,M.r.palette.secondary.accent),yn=(0,I.Z)(P.Z)(U||(U=(0,S.Z)(["\n  padding-left: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n\n  font-family: VerdanaRegular;\n  font-size: 12px;\n  line-height: 18px;\n  color: ",";\n\n  "," {\n    font-size: 14px;\n    line-height: 22px;\n  }\n"])),M.r.palette.primary.main,M.r.breakpoints.up("tablet")),wn=(0,I.Z)(P.Z)(W||(W=(0,S.Z)(["\n  width: 100%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  margin-right: 20px;\n  padding-bottom: 8px;\n\n  border-bottom: 1px solid ",";\n"])),M.r.palette.primary.grey),jn=(0,I.Z)(P.Z)(J||(J=(0,S.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  text-align: right;\n\n  &:nth-of-type(1) {\n    border-bottom: 1px solid ",";\n  }\n"])),M.r.palette.primary.grey),kn=(0,I.Z)(P.Z)(K||(K=(0,S.Z)(["\n  border-bottom: 1px solid ",";\n  padding-bottom: 8px;\n\n  &:nth-of-type(1) {\n    width: 50px;\n    margin-right: 10px;\n\n    "," {\n      width: 106px;\n      margin-right: 45px;\n    }\n\n    "," {\n      margin-right: 30px;\n    }\n  }\n\n  &:nth-of-type(2) {\n    width: 70px;\n    margin-right: 10px;\n\n    "," {\n      width: 106px;\n      margin-right: 30px;\n    }\n  }\n"])),M.r.palette.primary.grey,M.r.breakpoints.up("tablet"),M.r.breakpoints.up("desktop"),M.r.breakpoints.up("tablet")),vn=(0,I.Z)(gn.Z)(Q||(Q=(0,S.Z)(["\n  margin-right: 10px;\n\n  "," {\n    margin-right: 30px;\n  }\n"])),M.r.breakpoints.up("tablet")),Cn=["style"],Mn=function(n){var t=(0,d.I0)(),e=l.forwardRef((function(n,t){var e=n.style,r=(0,cn.Z)(n,Cn);return(0,G.jsx)(Zn,(0,o.Z)({"data-virtuoso":!0,style:(0,o.Z)({},e),ref:t},r))})),r=n.day,i=r.id,a=r.eatenProducts,p=function(n){n.preventDefault();var e=n.currentTarget.getAttribute("data-eaten-product-id");t((0,w._g)({dayId:i,eatenProductId:e})),un.Am.success("Deleted",hn.F)};return(0,G.jsxs)(fn,{children:[(0,G.jsx)(z,{component:"h3",children:"Products eaten per day"}),n.day.date&&n.day.eatenProducts.length>0?(0,G.jsx)(bn,{data:a,totalCount:a.length,itemContent:function(n,t){var e=t.title,r=t.weight,i=t.kcal,a=t.id;return(0,G.jsxs)(yn,{children:[(0,G.jsx)(wn,{children:e}),(0,G.jsxs)(jn,{children:[(0,G.jsxs)(kn,{children:[r," ",(0,G.jsx)("span",{children:"g"})]}),(0,G.jsxs)(kn,{children:[Math.round(i)," ",(0,G.jsx)("span",{children:"kcal"})]}),(0,G.jsx)(vn,{"data-eaten-product-id":a,onClick:p,children:(0,G.jsx)(xn.Z,{fontSize:"small"})})]})]})},components:{Scroller:e}}):(0,G.jsx)("div",{children:"The list of foods eaten today is empty"})]})},Sn=(0,I.Z)(P.Z)(X||(X=(0,S.Z)(["\n  display: flex;\n  align-items: center;\n  margin-top: 48px;\n  margin-bottom: 60px;\n  width: 155px;\n\n  "," {\n    width: 260px;\n    margin-top: 0;\n    margin-bottom: 40px;\n  }\n\n  & > .MuiSvgIcon-root {\n    fill: ",";\n  }\n\n  & > .MuiFormControl-root input {\n    padding: 0;\n    font-family: VerdanaBold;\n    font-size: 18px;\n    line-height: 22px;\n\n    "," {\n      font-size: 34px;\n      line-height: 41px;\n    }\n  }\n"])),M.r.breakpoints.up("tablet"),M.r.palette.primary.darkGrey,M.r.breakpoints.up("tablet")),In=(0,I.Z)(P.Z)($||($=(0,S.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  "," {\n    padding-right: 0;\n    padding-left: 0;\n    justify-content: start;\n  }\n"])),M.r.breakpoints.up("tablet")),Yn=new Date,zn=Yn;var Dn=function(){var n=(0,l.useState)(""),t=(0,p.Z)(n,2),e=t[0],r=t[1],i=(0,v.e)(),a=(0,d.I0)(),s=(0,l.useCallback)((function(n){var t;zn=n,a((0,w.Yp)({date:(t=zn,String(c()(t).format("YYYY-MM-DD")))})).then((function(n){r((function(t){return(0,u.isEqual)(t,n.payload)?t:(0,o.Z)({},n.payload)}))}))}),[a]);return(0,l.useEffect)((function(){s(zn)}),[e,s]),(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(Sn,{children:(0,G.jsxs)(h._,{dateAdapter:x.y,children:[(0,G.jsx)(m.O,{format:"DD.MM.YYYY",onAccept:s,value:c()(zn),maxDate:c()(Yn)}),(0,G.jsx)(g.Z,{})]})}),(0,G.jsx)(In,{children:i.width<M.r.breakpoints.values.tablet?(0,G.jsx)(ln,{}):(0,G.jsx)(sn,{})}),(0,G.jsx)(Mn,{day:e})]})}}}]);
//# sourceMappingURL=933.4b95d946.chunk.js.map