"use strict";(self.webpackChunkslimmom_project=self.webpackChunkslimmom_project||[]).push([[295],{9467:function(e,n,r){r.d(n,{G:function(){return d}});var t,o=r(168),a=r(4294),i=r(225),l=r(3271),s=(0,i.Z)(a.Z)(t||(t=(0,o.Z)(["\n  min-width: 180px;\n  padding: 13px 22px;  \n\n  font-family: verdanaBold;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n  text-transform: capitalize;\n\n  background-color: ",";\n  border-radius: 30px;\n  box-shadow: 0px 4px 10px 0px ",";\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n    box-shadow: 0px 2px 5px 0px ",";\n  };\n"])),(function(e){return e.theme.palette.primary.accent}),l.r.palette.primary.accent,(function(e){return e.theme.palette.primary.accent}),l.r.palette.primary.accent),c=r(184),d=function(e){var n=e.name;return(0,c.jsx)(s,{type:"submit",variant:"contained",children:n})}},3295:function(e,n,r){r.r(n),r.d(n,{default:function(){return $e}});var t=r(6907),o=r(5705),a=r(2791),i=r(6727),l=r(7133),s=r(9439),c=r(7462),d=r(3366),u=r(9278),p=r(4419),h=r(6934),m=r(1402),f=r(5878),g=r(1217);function b(e){return(0,g.Z)("MuiFormGroup",e)}(0,f.Z)("MuiFormGroup",["root","row","error"]);var v=r(2930),x=r(6147),Z=r(184),y=["className","row"],k=(0,h.ZP)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,r.row&&n.row]}})((function(e){var n=e.ownerState;return(0,c.Z)({display:"flex",flexDirection:"column",flexWrap:"wrap"},n.row&&{flexDirection:"row"})})),w=a.forwardRef((function(e,n){var r=(0,m.Z)({props:e,name:"MuiFormGroup"}),t=r.className,o=r.row,a=void 0!==o&&o,i=(0,d.Z)(r,y),l=(0,v.Z)(),s=(0,x.Z)({props:r,muiFormControl:l,states:["error"]}),h=(0,c.Z)({},r,{row:a,error:s.error}),f=function(e){var n=e.classes,r={root:["root",e.row&&"row",e.error&&"error"]};return(0,p.Z)(r,b,n)}(h);return(0,Z.jsx)(k,(0,c.Z)({className:(0,u.Z)(f.root,t),ownerState:h,ref:n},i))})),C=r(2071),j=r(5158);var S=a.createContext(void 0),R=r(8252).Z,P=["actions","children","defaultValue","name","onChange","value"],B=a.forwardRef((function(e,n){var r=e.actions,t=e.children,o=e.defaultValue,i=e.name,l=e.onChange,u=e.value,p=(0,d.Z)(e,P),h=a.useRef(null),m=(0,j.Z)({controlled:u,default:o,name:"RadioGroup"}),f=(0,s.Z)(m,2),g=f[0],b=f[1];a.useImperativeHandle(r,(function(){return{focus:function(){var e=h.current.querySelector("input:not(:disabled):checked");e||(e=h.current.querySelector("input:not(:disabled)")),e&&e.focus()}}}),[]);var v=(0,C.Z)(n,h),x=R(i),y=a.useMemo((function(){return{name:x,onChange:function(e){b(e.target.value),l&&l(e,e.target.value)},value:g}}),[x,l,b,g]);return(0,Z.jsx)(S.Provider,{value:y,children:(0,Z.jsx)(w,(0,c.Z)({role:"radiogroup",ref:v},p,{children:t}))})})),F=r(4942),M=r(831),q=r(2466),z=r(3457),N=r(7078),T=r(8519),W=r(5080),I=r(1184),V=r(5682),E=["component","direction","spacing","divider","children","className","useFlexGap"],G=(0,W.Z)(),A=(0,z.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return n.root}});function L(e){return(0,N.Z)({props:e,name:"MuiStack",defaultTheme:G})}function D(e,n){var r=a.Children.toArray(e).filter(Boolean);return r.reduce((function(e,t,o){return e.push(t),o<r.length-1&&e.push(a.cloneElement(n,{key:"separator-".concat(o)})),e}),[])}var O=function(e){var n=e.ownerState,r=e.theme,t=(0,c.Z)({display:"flex",flexDirection:"column"},(0,I.k9)({theme:r},(0,I.P$)({values:n.direction,breakpoints:r.breakpoints.values}),(function(e){return{flexDirection:e}})));if(n.spacing){var o=(0,V.hB)(r),a=Object.keys(r.breakpoints.values).reduce((function(e,r){return("object"===typeof n.spacing&&null!=n.spacing[r]||"object"===typeof n.direction&&null!=n.direction[r])&&(e[r]=!0),e}),{}),i=(0,I.P$)({values:n.direction,base:a}),l=(0,I.P$)({values:n.spacing,base:a});"object"===typeof i&&Object.keys(i).forEach((function(e,n,r){if(!i[e]){var t=n>0?i[r[n-1]]:"column";i[e]=t}}));t=(0,q.Z)(t,(0,I.k9)({theme:r},l,(function(e,r){return n.useFlexGap?{gap:(0,V.NA)(o,e)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":(0,F.Z)({},"margin".concat((t=r?i[r]:n.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[t])),(0,V.NA)(o,e))};var t})))}return t=(0,I.dt)(r.breakpoints,t)};var H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.createStyledComponent,r=void 0===n?A:n,t=e.useThemeProps,o=void 0===t?L:t,i=e.componentName,l=void 0===i?"MuiStack":i,s=function(){return(0,p.Z)({root:["root"]},(function(e){return(0,g.Z)(l,e)}),{})},u=r(O),h=a.forwardRef((function(e,n){var r=o(e),t=(0,T.Z)(r),a=t.component,i=void 0===a?"div":a,l=t.direction,p=void 0===l?"column":l,h=t.spacing,m=void 0===h?0:h,f=t.divider,g=t.children,b=t.className,v=t.useFlexGap,x=void 0!==v&&v,y=(0,d.Z)(t,E),k={direction:p,spacing:m,useFlexGap:x},w=s();return(0,Z.jsx)(u,(0,c.Z)({as:i,ownerState:k,ref:n,className:(0,M.Z)(w.root,b)},y,{children:f?D(g,f):g}))}));return h}({createStyledComponent:(0,h.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return n.root}}),useThemeProps:function(e){return(0,m.Z)({props:e,name:"MuiStack"})}}),$=H,_=r(890),U=r(4036);function J(e){return(0,g.Z)("MuiFormControlLabel",e)}var K=(0,f.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),Q=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],X=(0,h.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[(0,F.Z)({},"& .".concat(K.label),n.label),n.root,n["labelPlacement".concat((0,U.Z)(r.labelPlacement))]]}})((function(e){var n=e.theme,r=e.ownerState;return(0,c.Z)((0,F.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(K.disabled),{cursor:"default"}),"start"===r.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===r.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===r.labelPlacement&&{flexDirection:"column",marginLeft:16},(0,F.Z)({},"& .".concat(K.label),(0,F.Z)({},"&.".concat(K.disabled),{color:(n.vars||n).palette.text.disabled})))})),Y=(0,h.ZP)("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:function(e,n){return n.asterisk}})((function(e){var n=e.theme;return(0,F.Z)({},"&.".concat(K.error),{color:(n.vars||n).palette.error.main})})),ee=a.forwardRef((function(e,n){var r,t,o=(0,m.Z)({props:e,name:"MuiFormControlLabel"}),i=o.className,l=o.componentsProps,s=void 0===l?{}:l,h=o.control,f=o.disabled,g=o.disableTypography,b=o.label,y=o.labelPlacement,k=void 0===y?"end":y,w=o.required,C=o.slotProps,j=void 0===C?{}:C,S=(0,d.Z)(o,Q),R=(0,v.Z)(),P=null!=(r=null!=f?f:h.props.disabled)?r:null==R?void 0:R.disabled,B=null!=w?w:h.props.required,F={disabled:P,required:B};["checked","name","onChange","value","inputRef"].forEach((function(e){"undefined"===typeof h.props[e]&&"undefined"!==typeof o[e]&&(F[e]=o[e])}));var M=(0,x.Z)({props:o,muiFormControl:R,states:["error"]}),q=(0,c.Z)({},o,{disabled:P,labelPlacement:k,required:B,error:M.error}),z=function(e){var n=e.classes,r=e.disabled,t=e.labelPlacement,o=e.error,a=e.required,i={root:["root",r&&"disabled","labelPlacement".concat((0,U.Z)(t)),o&&"error",a&&"required"],label:["label",r&&"disabled"],asterisk:["asterisk",o&&"error"]};return(0,p.Z)(i,J,n)}(q),N=null!=(t=j.typography)?t:s.typography,T=b;return null==T||T.type===_.Z||g||(T=(0,Z.jsx)(_.Z,(0,c.Z)({component:"span"},N,{className:(0,u.Z)(z.label,null==N?void 0:N.className),children:T}))),(0,Z.jsxs)(X,(0,c.Z)({className:(0,u.Z)(z.root,i),ownerState:q,ref:n},S,{children:[a.cloneElement(h,F),B?(0,Z.jsxs)($,{direction:"row",alignItems:"center",children:[T,(0,Z.jsxs)(Y,{ownerState:q,"aria-hidden":!0,className:z.asterisk,children:["\u2009","*"]})]}):T]}))})),ne=r(2065),re=r(2982);function te(e){return(0,g.Z)("PrivateSwitchBase",e)}(0,f.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var oe=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],ae=(0,h.ZP)(re.Z)((function(e){var n=e.ownerState;return(0,c.Z)({padding:9,borderRadius:"50%"},"start"===n.edge&&{marginLeft:"small"===n.size?-3:-12},"end"===n.edge&&{marginRight:"small"===n.size?-3:-12})})),ie=(0,h.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),le=a.forwardRef((function(e,n){var r=e.autoFocus,t=e.checked,o=e.checkedIcon,a=e.className,i=e.defaultChecked,l=e.disabled,h=e.disableFocusRipple,m=void 0!==h&&h,f=e.edge,g=void 0!==f&&f,b=e.icon,x=e.id,y=e.inputProps,k=e.inputRef,w=e.name,C=e.onBlur,S=e.onChange,R=e.onFocus,P=e.readOnly,B=e.required,F=void 0!==B&&B,M=e.tabIndex,q=e.type,z=e.value,N=(0,d.Z)(e,oe),T=(0,j.Z)({controlled:t,default:Boolean(i),name:"SwitchBase",state:"checked"}),W=(0,s.Z)(T,2),I=W[0],V=W[1],E=(0,v.Z)(),G=l;E&&"undefined"===typeof G&&(G=E.disabled);var A="checkbox"===q||"radio"===q,L=(0,c.Z)({},e,{checked:I,disabled:G,disableFocusRipple:m,edge:g}),D=function(e){var n=e.classes,r=e.checked,t=e.disabled,o=e.edge,a={root:["root",r&&"checked",t&&"disabled",o&&"edge".concat((0,U.Z)(o))],input:["input"]};return(0,p.Z)(a,te,n)}(L);return(0,Z.jsxs)(ae,(0,c.Z)({component:"span",className:(0,u.Z)(D.root,a),centerRipple:!0,focusRipple:!m,disabled:G,tabIndex:null,role:void 0,onFocus:function(e){R&&R(e),E&&E.onFocus&&E.onFocus(e)},onBlur:function(e){C&&C(e),E&&E.onBlur&&E.onBlur(e)},ownerState:L,ref:n},N,{children:[(0,Z.jsx)(ie,(0,c.Z)({autoFocus:r,checked:t,defaultChecked:i,className:D.input,disabled:G,id:A?x:void 0,name:w,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var n=e.target.checked;V(n),S&&S(e,n)}},readOnly:P,ref:k,required:F,ownerState:L,tabIndex:M,type:q},"checkbox"===q&&void 0===z?{}:{value:z},y)),I?o:b]}))})),se=r(9201),ce=(0,se.Z)((0,Z.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),de=(0,se.Z)((0,Z.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),ue=(0,h.ZP)("span")({position:"relative",display:"flex"}),pe=(0,h.ZP)(ce)({transform:"scale(1)"}),he=(0,h.ZP)(de)((function(e){var n=e.theme,r=e.ownerState;return(0,c.Z)({left:0,position:"absolute",transform:"scale(0)",transition:n.transitions.create("transform",{easing:n.transitions.easing.easeIn,duration:n.transitions.duration.shortest})},r.checked&&{transform:"scale(1)",transition:n.transitions.create("transform",{easing:n.transitions.easing.easeOut,duration:n.transitions.duration.shortest})})}));var me=function(e){var n=e.checked,r=void 0!==n&&n,t=e.classes,o=void 0===t?{}:t,a=e.fontSize,i=(0,c.Z)({},e,{checked:r});return(0,Z.jsxs)(ue,{className:o.root,ownerState:i,children:[(0,Z.jsx)(pe,{fontSize:a,className:o.background,ownerState:i}),(0,Z.jsx)(he,{fontSize:a,className:o.dot,ownerState:i})]})},fe=r(8949).Z;function ge(e){return(0,g.Z)("MuiRadio",e)}var be=(0,f.Z)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]),ve=["checked","checkedIcon","color","icon","name","onChange","size","className"],xe=(0,h.ZP)(le,{shouldForwardProp:function(e){return(0,h.FO)(e)||"classes"===e},name:"MuiRadio",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,n["color".concat((0,U.Z)(r.color))]]}})((function(e){var n=e.theme,r=e.ownerState;return(0,c.Z)({color:(n.vars||n).palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:n.vars?"rgba(".concat("default"===r.color?n.vars.palette.action.activeChannel:n.vars.palette[r.color].mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,ne.Fq)("default"===r.color?n.palette.action.active:n.palette[r.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&(0,F.Z)({},"&.".concat(be.checked),{color:(n.vars||n).palette[r.color].main}),(0,F.Z)({},"&.".concat(be.disabled),{color:(n.vars||n).palette.action.disabled}))}));var Ze,ye,ke,we,Ce,je,Se,Re=(0,Z.jsx)(me,{checked:!0}),Pe=(0,Z.jsx)(me,{}),Be=a.forwardRef((function(e,n){var r,t,o,i,l=(0,m.Z)({props:e,name:"MuiRadio"}),s=l.checked,h=l.checkedIcon,f=void 0===h?Re:h,g=l.color,b=void 0===g?"primary":g,v=l.icon,x=void 0===v?Pe:v,y=l.name,k=l.onChange,w=l.size,C=void 0===w?"medium":w,j=l.className,R=(0,d.Z)(l,ve),P=(0,c.Z)({},l,{color:b,size:C}),B=function(e){var n=e.classes,r=e.color,t=e.size,o={root:["root","color".concat((0,U.Z)(r)),"medium"!==t&&"size".concat((0,U.Z)(t))]};return(0,c.Z)({},n,(0,p.Z)(o,ge,n))}(P),F=a.useContext(S),M=s,q=fe(k,F&&F.onChange),z=y;return F&&("undefined"===typeof M&&(o=F.value,M="object"===typeof(i=l.value)&&null!==i?o===i:String(o)===String(i)),"undefined"===typeof z&&(z=F.name)),(0,Z.jsx)(xe,(0,c.Z)({type:"radio",icon:a.cloneElement(x,{fontSize:null!=(r=Pe.props.fontSize)?r:C}),checkedIcon:a.cloneElement(f,{fontSize:null!=(t=Re.props.fontSize)?t:C}),ownerState:P,classes:B,name:z,checked:M,onChange:q,ref:n,className:(0,u.Z)(B.root,j)},R))})),Fe=r(168),Me=r(225),qe=r(4554),ze=r(8233),Ne=r(8096),Te=r(3271),We=(0,Me.Z)(qe.Z)(Ze||(Ze=(0,Fe.Z)(["\n  max-width: 280px;\n\n  "," {\n    max-width: 530px;\n  };\n"])),Te.r.breakpoints.up("tablet")),Ie=(0,Me.Z)(_.Z)(ye||(ye=(0,Fe.Z)(["\n  text-align: center;\n  margin-bottom: 55px;\n  text-align: left;\n\n  font-family: VerdanaBold;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 25px;\n  color: ",";\n\n  "," {\n    margin-bottom: 60px;\n    \n    font-size: 34px;\n    line-height: 48px;\n    text-align: left;\n  };\n"])),Te.r.palette.primary.main,Te.r.breakpoints.up("tablet")),Ve=Me.Z.form(ke||(ke=(0,Fe.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;  \n\n  "," {\n    align-items: start;    \n  };\n\n  "," {\n    align-items: end;\n  };\n"])),Te.r.breakpoints.up("tablet"),Te.r.breakpoints.up("desktop")),Ee=(0,Me.Z)(ze.Z)(we||(we=(0,Fe.Z)(["\n  width: 280px;\n  padding: 4px 0;\n  margin-bottom: 32px;  \n  \n  & label {\n    font-family: VerdanaBold;\n    font-size: 14px;\n    font-weight: 700;\n    line-height: 17px;\n    letter-spacing: 0.04em;\n  };\n\n  & label.Mui-focused {\n    color: ",";\n  };\n\n  & .MuiInput-underline:after {\n    border-bottom-color: ",";    \n  };\n\n  & .MuiInput-root {\n    font-family: VerdanaBold;\n    font-size: 14px;\n    font-weight: 700;\n    line-height: 17px;\n    letter-spacing: 0.04em;\n    background: transparent;\n  };\n  \n  & .MuiFormHelperText-root {\n    position: absolute;\n    bottom: -20px;\n  };\n\n  "," {\n    width: 240px;\n  };\n"])),Te.r.palette.primary.accent,Te.r.palette.primary.accent,Te.r.breakpoints.up("tablet")),Ge=(0,Me.Z)(qe.Z)(Ce||(Ce=(0,Fe.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  "," {\n    flex-direction: row;\n    margin-bottom: 38px;\n  };  \n"])),Te.r.breakpoints.up("tablet")),Ae=(0,Me.Z)(qe.Z)(je||(je=(0,Fe.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  "," {\n    &:last-child {\n      margin-left: 32px;\n    };\n  };\n\n  "," {\n    &:last-child {\n      margin-right: 18px;\n    };\n  };\n"])),Te.r.breakpoints.up("tablet"),Te.r.breakpoints.up("desktop")),Le=(0,Me.Z)(Ne.Z)(Se||(Se=(0,Fe.Z)(["\n  margin-bottom: 40px;\n\n  & label.Mui-focused {\n    color: ",";\n  };\n\n  & > label {\n    font-family: VerdanaBold;\n    font-size: 14px;\n    font-weight: 700;\n    line-height: 17px;\n    letter-spacing: 0.04em;\n  };\n\n  & .Mui-checked {    \n    color: ",";\n  };\n\n  & .MuiFormGroup-root {\n\n  };\n\n  "," {\n    margin-bottom: 0;    \n\n    & > label {\n      padding-top: 20px;\n      padding-bottom: 11px;\n      border-bottom: 1px solid ",";    \n    };    \n  };\n"])),Te.r.palette.primary.accent,Te.r.palette.primary.accent,Te.r.breakpoints.up("tablet"),Te.r.palette.primary.darkGrey),De=r(9467),Oe=i.Ry().shape({height:i.Rx("Enter your height").integer("An integer value must be entered").min(120,"Value must not be less than 120 (cm)").max(220,"Value should not exceed 220 (cm)").required("Height is required"),age:i.Rx("Enter your age").integer("An integer value must be entered").min(18,"Value must not be less than 18 (years)").max(70,"Value should not exceed 70 (years)").required("Age is required"),currentWeight:i.Rx("Enter your current weight").integer("An integer value must be entered").min(35,"Value must not be less than 35 (kg)").max(180,"Value should not exceed 180 (kg)").required("Current weight is required"),desiredWeight:i.Rx("Enter your desired weight").integer("An integer value must be entered").min(35,"Value must not be less than 35 (kg)").max(180,"Value should not exceed 180 (kg)").required("Desired weight is required"),bloodType:i.Z_("Enter your blood type").required("Blood type is required")}),He=function(){var e=(0,o.TA)({initialValues:{height:"",age:"",currentWeight:"",desiredWeight:"",bloodType:"1"},validationSchema:Oe,onSubmit:function(e,n){var r=n.resetForm;console.log(e),r()}});return(0,Z.jsxs)(We,{component:"section",children:[(0,Z.jsx)(Ie,{component:"h1",children:"Calculate your daily calorie intake right now"}),(0,Z.jsxs)(Ve,{onSubmit:e.handleSubmit,children:[(0,Z.jsxs)(Ge,{children:[(0,Z.jsxs)(Ae,{children:[(0,Z.jsx)(Ee,{variant:"standard",id:"height",name:"height",label:"Height *",type:"number",value:e.values.height,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.height&&Boolean(e.errors.height),helperText:e.touched.height&&e.errors.height}),(0,Z.jsx)(Ee,{variant:"standard",id:"age",name:"age",label:"Age *",type:"number",value:e.values.age,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.age&&Boolean(e.errors.age),helperText:e.touched.age&&e.errors.age}),(0,Z.jsx)(Ee,{variant:"standard",id:"currentWeight",name:"currentWeight",label:"Current weight *",type:"number",value:e.values.currentWeight,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.currentWeight&&Boolean(e.errors.currentWeight),helperText:e.touched.currentWeight&&e.errors.currentWeight})]}),(0,Z.jsxs)(Ae,{children:[(0,Z.jsx)(Ee,{variant:"standard",id:"desiredWeight",name:"desiredWeight",label:"Desired weight *",type:"number",value:e.values.desiredWeight,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.desiredWeight&&Boolean(e.errors.desiredWeight),helperText:e.touched.desiredWeight&&e.errors.desiredWeight}),(0,Z.jsxs)(Le,{children:[(0,Z.jsx)(l.Z,{id:"bloodType",children:"Blood type *"}),(0,Z.jsxs)(B,{row:!0,"aria-labelledby":"bloodType",name:"bloodType",value:e.values.bloodType,onChange:e.handleChange,children:[(0,Z.jsx)(ee,{value:"1",control:(0,Z.jsx)(Be,{}),label:"1"}),(0,Z.jsx)(ee,{value:"2",control:(0,Z.jsx)(Be,{}),label:"2"}),(0,Z.jsx)(ee,{value:"3",control:(0,Z.jsx)(Be,{}),label:"3"}),(0,Z.jsx)(ee,{value:"4",control:(0,Z.jsx)(Be,{}),label:"4"})]})]})]})]}),(0,Z.jsx)(De.G,{name:"Start losing weight"})]})]})},$e=function(){return(0,Z.jsxs)(t.B6,{children:[(0,Z.jsx)(t.ql,{children:(0,Z.jsx)("title",{children:"SlimMom | Home"})}),(0,Z.jsx)(He,{})]})}}}]);
//# sourceMappingURL=295.bad44c2d.chunk.js.map