(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{207:function(e,t,a){},208:function(e,t,a){},209:function(e,t,a){},210:function(e,t,a){},265:function(e,t,a){},267:function(e,t,a){"use strict";a.r(t);var n,i=a(0),c=a.n(i),r=a(16),s=a.n(r),l=(a(207),a(17)),o=(a(208),a(209),a(210),a(64)),j=a(128),d=a(183),b=a(2),h=function(e){var t=Object(i.useState)(0),a=Object(l.a)(t,2),n=a[0],c=a[1];return Object(b.jsx)(o.a,{style:{height:"350px",marginBottom:"50px"},children:Object(b.jsxs)(o.a.Body,{children:[Object(b.jsx)(o.a.Img,{src:e.foodItem.image,style:{height:"150px"}}),Object(b.jsx)(o.a.Title,{style:{marginTop:"4%",fontSize:"16px"},children:e.foodItem.item}),Object(b.jsx)(o.a.Subtitle,{className:"mb-2 text-muted",style:{fontSize:"12px"},children:e.foodItem.description}),Object(b.jsx)(o.a.Text,{style:{fontSize:"16px",fontWeight:"bold"},children:e.foodItem.price}),Object(b.jsxs)("div",{style:{marginTop:"10%"},children:[Object(b.jsx)(j.a,{onClick:function(){n>0?(c(n-1),e.foodItem.quantity=n-1,e.onOrderItemClick(e.foodItem)):d.a},children:"-"}),Object(b.jsx)("label",{style:{marginLeft:"5%",marginRight:"5%"},children:n}),Object(b.jsx)(j.a,{onClick:function(){c(n+1),e.foodItem.quantity=n+1,e.onOrderItemClick(e.foodItem)},children:"+"})]})]})})},O=a(135),x=a(161),m=a(162),u=a(107),g=function(e){var t=Object(i.useState)("Indian Kitchen"),a=Object(l.a)(t,2),n=a[0],c=(a[1],Object(i.useState)(["images/Kitchen1.jpg","images/Kitchen2.jpg"])),r=Object(l.a)(c,2),s=r[0],o=(r[1],Object(i.useState)([{id:1,image:"images/Dal-Makhani.jpg",item:"Dal Makhani Meal",description:"dal makhani, 4 roti, salad, 1 glass of lassi(700-900 Cal.)",price:"$5.90 + tax"},{id:2,image:"images/Rajma-Chawal-3.jpg",item:"Rajma Chawal Meal",description:"red kidney bean, 2 rice portions, salad, 1 glass of lassi(800-1000 Cal.)",price:"$6.20 + tax"},{id:3,image:"images/paneer-butter-masala_-2.jpg",item:"Paneer Butter Masala Meal",description:"paneer butter masala, 4 butter naan, salad, 1 glass of lassi(1300-1500 Cal.)",price:"$8.10 + tax"}])),j=Object(l.a)(o,2),d=j[0],g=(j[1],Object(i.useState)(new Map)),p=Object(l.a)(g,2),f=p[0],y=(p[1],function(t){var a=t.id,n=t.quantity;void 0===f.get(a)&&n>0?f.set(t.id,t):0==n&&f.delete(a),e.onOrderItemClick(f)});return Object(b.jsxs)("div",{className:"div-dimensions center-align",children:[Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("h1",{children:n}),Object(b.jsx)("br",{}),Object(b.jsx)(O.a,{style:{height:"50vh"},children:s.map((function(e){return Object(b.jsx)(O.a.Item,{children:Object(b.jsx)("img",{className:"d-block w-100",src:e,style:{height:"50vh"}})})}))}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("h4",{children:" Menu Items "}),Object(b.jsx)("br",{}),Object(b.jsx)(x.a,{children:Object(b.jsx)(m.a,{children:d.map((function(e){return Object(b.jsx)(u.a,{sm:4,children:Object(b.jsx)(h,{foodItem:e,onOrderItemClick:y})})}))})})]})},p=a(42),f=a(45),y=a(182),v=a(163),C=a.n(v),k=(a(227),a(303)),w=a(305),I=a(306),S=a(308),P=a(309),T=a(65),z=a(327),$=a(310),L=a(311),N=a(312),F=a(313),D=a(149),R=a(167),A=a.n(R),B=a(329),H=a(102),V=a(157),W=Object(f.a)(k.a)(n||(n=Object(p.a)(["\n  min-height: 300px;\n"])));var M=function(e){var t=e.removeItemFromList,a=e.item,n=a.id,i=a.title,r=a.rating,s=a.img,o=a.cost,j=a.mealType,d=a.delivery,h=c.a.useState(null),O=Object(l.a)(h,2),x=O[0],m=O[1],u=c.a.useState(!1),g=Object(l.a)(u,2),p=g[0],f=g[1],y=function(){m(null)};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(W,{children:[Object(b.jsx)(w.a,{action:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(I.a,{"aria-label":"settings","aria-haspopup":"true",onClick:function(e){m(e.currentTarget)},children:Object(b.jsx)(A.a,{})}),Object(b.jsxs)(H.a,{id:"menu"+n,anchorEl:x,keepMounted:!0,open:Boolean(x),onClose:y,children:[Object(b.jsx)(V.a,{onClick:y,children:"Update"}),Object(b.jsx)(V.a,{onClick:y,children:"Enable"}),Object(b.jsx)(V.a,{onClick:y,children:"Disable"}),Object(b.jsx)(V.a,{onClick:function(){f(!0),m(null)},children:"Remove"})]})]}),title:i,subheader:Object(b.jsx)(B.a,{name:"read-only",value:r,readOnly:!0}),titleTypographyProps:{variant:"body1",color:"textPrimary"}}),Object(b.jsx)(S.a,{style:{height:0,padding:"25%"},image:s,title:"mydish"}),Object(b.jsxs)(P.a,{children:[Object(b.jsxs)(T.a,{variant:"body2",color:"textPrimary",children:["Cost: ",Object(b.jsx)("span",{style:{float:"right"},children:o})]}),Object(b.jsxs)(T.a,{variant:"body2",color:"textPrimary",children:["Meal Type: ",Object(b.jsx)("span",{style:{float:"right"},children:j})]}),Object(b.jsxs)(T.a,{variant:"body2",color:"textPrimary",children:["Delivery: ",Object(b.jsx)("span",{style:{float:"right"},children:d})]})]})]}),Object(b.jsxs)(z.a,{open:p,onClose:y,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(b.jsx)($.a,{id:"alert-dialog-title",children:"Are you sure you want to delete this item?"}),Object(b.jsx)(L.a,{children:Object(b.jsx)(N.a,{id:"alert-dialog-description",children:"This action is irreversible. If you are planning to add this item again in the future, you can choose to disable the item instead of removal."})}),Object(b.jsxs)(F.a,{children:[Object(b.jsx)(D.a,{onClick:function(){f(!1)},color:"primary",children:"Cancel"}),Object(b.jsx)(D.a,{onClick:function(){t(n),f(!0)},color:"primary",autoFocus:!0,children:"Remove"})]})]})]})},E=a(328),q=a(324),G=a(156),K=a(181),Z=a(316),J=a(317),U=["Breakfast","Snack","Lunch","Dinner"],Y=Object(Z.a)((function(e){return{dropZoneArea:{marginTop:e.spacing(3),padding:e.spacing(2),minHeight:200}}}));var _=function(e){var t=e.addItem,a=e.nextId,n=e.open,i=e.handleClose,r=Y(),s=c.a.useState(""),o=Object(l.a)(s,2),j=o[0],d=o[1],h=c.a.useState(""),O=Object(l.a)(h,2),x=O[0],m=O[1];return Object(b.jsx)(z.a,{open:n,onClose:i,"aria-labelledby":"form-dialog-title",children:Object(b.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault();var n=e.target,i={id:a,title:n.title.value,rating:0,img:x,cost:"$".concat(n.cost.value),mealType:j,delivery:n.delivery.value};t(i)},children:[Object(b.jsx)($.a,{id:"form-dialog-title",children:"Add Dish"}),Object(b.jsxs)(L.a,{children:[Object(b.jsx)(G.a,{id:"title",label:"Dish Name",type:"text",fullWidth:!0}),Object(b.jsx)(G.a,{margin:"dense",id:"cost",label:"Cost",type:"text",fullWidth:!0}),Object(b.jsx)(G.a,{margin:"dense",id:"mealType",select:!0,label:"Select",value:j,onChange:function(e){return d(e.target.value)},helperText:"Please select meal type",children:U.map((function(e){return Object(b.jsx)(V.a,{value:e,children:e},e)}))}),Object(b.jsx)(G.a,{id:"delivery",label:"Delivery",type:"text",fullWidth:!0}),Object(b.jsx)(J.a,{fullWidth:!0,children:Object(b.jsx)(K.a,{filesLimit:1,dropzoneClass:r.dropZoneArea,dropzoneText:"Drag and drop a dish image here or click",acceptedFiles:["image/*"],onChange:function(e){var t=new FileReader;t.addEventListener("load",(function(){m(t.result)}),!1),e[0]&&t.readAsDataURL(e[0])}})})]}),Object(b.jsxs)(F.a,{children:[Object(b.jsx)(D.a,{onClick:i,children:"Cancel"}),Object(b.jsx)(D.a,{type:"submit",children:"Submit"})]})]})})},Q={superLargeDesktop:{breakpoint:{max:4e3,min:1201},items:5},desktop:{breakpoint:{max:1200,min:1025},items:4},laptop:{breakpoint:{max:1024,min:769},items:3},tablet:{breakpoint:{max:768,min:481},items:2},mobile:{breakpoint:{max:480,min:0},items:1}},X=[{id:1,title:"Veg Tacos",rating:4,img:"/assets/f1.jpg",cost:"$11.5",mealType:"Snack",delivery:"Free"},{id:2,title:"Chilly Chicken",rating:3,img:"/assets/f2.jpg",cost:"$13.5",mealType:"Dinner",delivery:"Free"},{id:3,title:"Prawn Noodles",rating:1,img:"/assets/f3.jpg",cost:"$9",mealType:"Lunch",delivery:"Free"},{id:4,title:"Veg Thali",rating:3,img:"/assets/f4.jpg",cost:"$14",mealType:"Lunch",delivery:"Free"},{id:5,title:"Veg Rice",rating:2,img:"/assets/f5.jpeg",cost:"$6",mealType:"Snack",delivery:"Free"},{id:6,title:"Chilly Paneer",rating:3,img:"/assets/f6.jpg",cost:"$6",mealType:"Snack",delivery:"Free"}];var ee,te,ae,ne=function(){var e=c.a.useState(X),t=Object(l.a)(e,2),a=t[0],n=t[1],i=c.a.useState(!1),r=Object(l.a)(i,2),s=r[0],o=r[1],j=c.a.useState(!1),d=Object(l.a)(j,2),h=d[0],O=d[1],x=function(e){return n(a.filter((function(t){return t.id!==e})))},m=function(){O(!1)};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{style:{textAlign:"center"},children:Object(b.jsx)(D.a,{variant:"outlined",onClick:function(){o(!0)},children:"Add dish"})}),Object(b.jsx)(C.a,{responsive:Q,children:a.map((function(e){return Object(b.jsx)(M,{item:e,removeItemFromList:x},e.id)}))}),s?Object(b.jsx)(c.a.Suspense,{fallback:Object(b.jsx)("p",{children:"loading"}),children:Object(b.jsx)(_,{open:s,addItem:function(e){n([].concat(Object(y.a)(a),[e])),o(!1),O(!0)},handleClose:function(){o(!1)},nextId:X[X.length-1].id})}):null,Object(b.jsx)(E.a,{open:h,autoHideDuration:6e3,onClose:m,children:Object(b.jsx)(q.a,{onClose:m,severity:"success",children:"New Dish added Successfully"})})]})},ie=f.a.div(ee||(ee=Object(p.a)(["\n  height: 40vh;\n  margin-bottom: 20px;\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n"]))),ce=f.a.div(te||(te=Object(p.a)(["\n  position: absolute;\n  color: white;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n"]))),re=f.a.img(ae||(ae=Object(p.a)(["\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n"])));var se=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(ie,{children:[Object(b.jsxs)(ce,{children:[Object(b.jsx)("h2",{children:"Hi Chef"}),Object(b.jsx)("h2",{children:"Welcome to the kitchen"})]}),Object(b.jsx)("div",{style:{height:"100%"},children:Object(b.jsx)(re,{src:"./assets/k12.jpg",alt:"kitchen"})})]}),Object(b.jsx)(ne,{})]})},le=a(21),oe=a(318),je=a(319),de=Object(Z.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,marginLeft:20,fontFamily:"cursive"}}}));function be(e){var t=e.orderedItems.size;console.log(t);var a=de(),n=Object(le.f)(),i=function(){n.push("/summaryAndPayment")};return Object(b.jsx)("div",{className:a.root,children:Object(b.jsx)(oe.a,{position:"static",children:Object(b.jsxs)(je.a,{children:[Object(b.jsx)(T.a,{variant:"h4",className:a.title,style:{color:"#ffc107"},children:"Dalffins"}),Object(b.jsx)(D.a,{color:"inherit",onClick:function(){n.push("/kitchen")},children:"Kitchen"}),Object(b.jsx)(D.a,{color:"inherit",children:"Help"}),t>0?Object(b.jsx)(D.a,{color:"inherit",style:{color:"#ffc107"},onClick:i,children:Object(b.jsxs)("b",{children:["Cart(",t,")"]})}):Object(b.jsx)(D.a,{color:"inherit",onClick:i,children:"Cart"}),Object(b.jsx)(D.a,{color:"inherit",children:"Settings"})]})})})}var he=Object(Z.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,marginLeft:20}}}));function Oe(){var e=he();return Object(b.jsx)("div",{className:e.root,children:Object(b.jsx)(oe.a,{position:"static",children:Object(b.jsx)(je.a,{style:{backgroundColor:"lightgrey"},children:Object(b.jsx)(D.a,{color:"inherit",style:{marginLeft:"auto",marginRight:"auto",color:"black"},children:"Copyright \xa9 2021 Dalffins. All rights reserved."})})})})}var xe=a(22),me=a(12),ue=a(314),ge=a(320),pe=a(177),fe=a.n(pe),ye=(a(264),a(265),a(136)),ve=a(151),Ce=a(132),ke=a.n(Ce),we=a(133),Ie=a.n(we),Se=a(134),Pe=a.n(Se),Te=a(179),ze=a.n(Te),$e=a(178),Le=a.n($e),Ne=a(325);var Fe,De,Re=function(){var e=Object(i.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1],c=Object(i.useState)(!1),r=Object(l.a)(c,2),s=r[0],o=r[1],j=Object(i.useState)(!1),d=Object(l.a)(j,2),h=d[0],O=d[1],x=Object(le.f)(),m=Object(i.useState)({firstName:!1,lastName:!1,email:!1,password:!1,confirmPassword:!1,checkedBox:!1}),u=Object(l.a)(m,2),g=u[0],p=u[1],f=Object(i.useState)({firstName:"",lastName:"",email:"",phoneNumber:"",snackbar:!1,checkbox:!1}),y=Object(l.a)(f,2),v=y[0],C=y[1],w=function(e){e.preventDefault();for(var t=0,a=Object.entries(g);t<a.length;t++){if(Object(l.a)(a[t],2)[1])return}v.checkbox?(C((function(e){return Object(me.a)(Object(me.a)({},e),{},{snackbar:!0})})),C((function(e){return Object(me.a)(Object(me.a)({},e),{},{phoneNumber:""})})),x.push("/registersuccess")):p((function(e){return Object(me.a)(Object(me.a)({},e),{},{checkedBox:!0})}))},P=function(e){var t=e.target,a=t.name,n=t.value;n.match(/^[ 0-9a-zA-Z]+$/)?p((function(e){return Object(me.a)(Object(me.a)({},e),{},Object(xe.a)({},a,!1))})):p((function(e){return Object(me.a)(Object(me.a)({},e),{},Object(xe.a)({},a,!0))})),C((function(e){return Object(me.a)(Object(me.a)({},e),{},Object(xe.a)({},a,n))}))},z=function(){C((function(e){return Object(me.a)(Object(me.a)({},e),{},{snackbar:!1})}))},$=function(){p((function(e){return Object(me.a)(Object(me.a)({},e),{},{checkedBox:!1})}))};return Object(b.jsx)("section",{children:Object(b.jsx)(ge.a,{component:"main",maxWidth:"lg",className:"mainContainer",children:Object(b.jsxs)(ye.a,{elevation:3,className:"inside",children:[Object(b.jsx)(k.a,{style:{margin:"3%",height:"100%"},md:6,children:Object(b.jsx)(S.a,{image:"images/image.jpg",title:"Tiffins image",style:{height:"649px",width:"1020px"}})}),Object(b.jsxs)("form",{onSubmit:w,children:[Object(b.jsxs)(ue.a,{item:!0,xs:12,sm:12,children:[Object(b.jsx)(Le.a,{color:"primary",style:{height:"30%",width:"30%",marginLeft:"30%"}}),Object(b.jsx)(T.a,{variant:"h5",style:{textAlign:"center",marginBottom:"3%"},children:"Dalffins Registration form!"})]}),Object(b.jsxs)(ue.a,{container:!0,spacing:3,children:[Object(b.jsx)(ue.a,{item:!0,xs:12,md:6,children:Object(b.jsx)(G.a,{name:"firstName",variant:"outlined",id:"firstName",label:"First Name",fullWidth:!0,required:!0,InputProps:{endAdornment:Object(b.jsx)(ve.a,{position:"start",children:Object(b.jsx)(ke.a,{})})},onChange:P,error:g.firstName,helperText:g.firstName?"Enter only alphanumeric characters!":""})}),Object(b.jsx)(ue.a,{item:!0,xs:12,md:6,children:Object(b.jsx)(G.a,{name:"lastName",variant:"outlined",id:"lastName",fullWidth:!0,required:!0,label:"Last Name",placeholder:"Last Name",InputProps:{endAdornment:Object(b.jsx)(ve.a,{position:"start",children:Object(b.jsx)(ke.a,{})})},onChange:P,error:g.lastName,helperText:g.lastName?"Enter only alphanumeric characters!":""})}),Object(b.jsx)(ue.a,{item:!0,xs:12,md:6,children:Object(b.jsx)(G.a,{variant:"outlined",name:"email",id:"email",label:"Email",type:"email",fullWidth:!0,required:!0,InputProps:{endAdornment:Object(b.jsx)(ve.a,{position:"start",children:Object(b.jsx)(ze.a,{})})},onChange:function(e){var t=e.target,a=t.name,n=t.value;n.match(/^\S+@\S+\.\S+$/)?p((function(e){return Object(me.a)(Object(me.a)({},e),{},Object(xe.a)({},a,!1))})):p((function(e){return Object(me.a)(Object(me.a)({},e),{},Object(xe.a)({},a,!0))})),C((function(e){return Object(me.a)(Object(me.a)({},e),{},Object(xe.a)({},a,n))}))},onBlur:function(e){var t=e.target,a=t.name,n=t.value;n.match(/^\S+@\S+\.\S+$/)?p((function(e){return Object(me.a)(Object(me.a)({},e),{},Object(xe.a)({},a,!1))})):p((function(e){return Object(me.a)(Object(me.a)({},e),{},Object(xe.a)({},a,!0))})),C((function(e){return Object(me.a)(Object(me.a)({},e),{},Object(xe.a)({},a,n))}))},error:g.email,helperText:g.email?"Example: abc@gmail.com":""})}),Object(b.jsx)(ue.a,{item:!0,xs:12,md:6,children:Object(b.jsx)(fe.a,{name:"phoneNumber",id:"phoneNumber",value:v.phoneNumber,defaultCountry:"ca",disableAreaCodes:!0,variant:"outlined",onlyCountries:["ca"],label:"Phone Number",fullWidth:!0,required:!0,onChange:function(e){return function(e){var t=e.target,a=t.name,n=t.value;C((function(e){return Object(me.a)(Object(me.a)({},e),{},Object(xe.a)({},a,n))}))}({target:{value:e,name:"phoneNumber"}})}})}),Object(b.jsx)(ue.a,{item:!0,xs:12,md:6,children:Object(b.jsx)(G.a,{name:"password",variant:"outlined",id:"password",label:"Password",type:s?"text":"password",fullWidth:!0,required:!0,InputProps:{endAdornment:Object(b.jsx)(ve.a,{position:"end",children:Object(b.jsx)(I.a,{label:"visibility of passwords",onClick:function(){o(!s)},children:s?Object(b.jsx)(Ie.a,{}):Object(b.jsx)(Pe.a,{})})})},onPaste:function(e){e.preventDefault()},onChange:function(e){e.preventDefault();var t=e.target,i=t.name,c=t.value;a.match('^[a-zA-Z0-9!@#$&()\\-`.+,/"]*$')&&(a.length+1>7?p((function(e){return Object(me.a)(Object(me.a)({},e),{},Object(xe.a)({},i,!1))})):p((function(e){return Object(me.a)(Object(me.a)({},e),{},Object(xe.a)({},i,!0))}))),n(c)},error:g.password,helperText:g.password?"Minimum of 8 characters!":""})}),Object(b.jsx)(ue.a,{item:!0,xs:12,md:6,children:Object(b.jsx)(G.a,{variant:"outlined",name:"confirmPassword",id:"confirm-password",label:"Confirm Password",type:h?"text":"password",fullWidth:!0,required:!0,InputProps:{endAdornment:Object(b.jsx)(ve.a,{position:"end",children:Object(b.jsx)(I.a,{label:"visibility of passwords",onClick:function(){O(!h)},children:h?Object(b.jsx)(Ie.a,{}):Object(b.jsx)(Pe.a,{})})})},onChange:function(e){var t=e.target,n=t.name,i=t.value;p(a===i?function(e){return Object(me.a)(Object(me.a)({},e),{},Object(xe.a)({},n,!1))}:function(e){return Object(me.a)(Object(me.a)({},e),{},Object(xe.a)({},n,!0))})},error:g.confirmPassword,helperText:g.confirmPassword?"Passwords do not match":""})}),Object(b.jsxs)(ue.a,{item:!0,xs:12,children:[Object(b.jsx)(Ne.a,{name:"checkbox",checked:v.checkbox,size:"small",color:"primary",inputProps:{"aria-label":"secondary checkbox"},onChange:function(e){C((function(e){return Object(me.a)(Object(me.a)({},e),{},{checkbox:!v.checkbox})}))}}),Object(b.jsx)(T.a,{variant:"caption",style:{fontSize:"14px"},children:"Yes, I agree to the terms and conditions of Dalffins!"})]}),Object(b.jsxs)(ue.a,{item:!0,xs:12,children:[Object(b.jsx)(D.a,{type:"submit",color:"primary",variant:"contained",style:{textTransform:"none",float:"right",width:"200px",margin:"2%"},OnClick:w,children:"Register"}),Object(b.jsx)(E.a,{open:v.snackbar,autoHideDuration:6e3,onClose:z,children:Object(b.jsx)(q.a,{elevation:6,variant:"filled",onClose:z,severity:"success",children:"Registered Successfully!!"})}),Object(b.jsx)(E.a,{open:g.checkedBox,autoHideDuration:6e3,onClose:$,children:Object(b.jsx)(q.a,{elevation:6,variant:"filled",onClose:$,severity:"error",children:"Please Agree to terms and conditions"})})]})]})]})]})})})},Ae=f.a.div(Fe||(Fe=Object(p.a)(["\n  min-height: 100vh;\n"]))),Be=f.a.main(De||(De=Object(p.a)(["\n  min-height: calc(100vh - 60px);\n  padding: 30px 8vw;\n"]))),He=(a(154),a(323)),Ve=a(321),We=a(180),Me=a(322);var Ee=function(){var e,t=Object(i.useState)(!1),a=Object(l.a)(t,2),n=a[0],c=a[1],r=Object(i.useState)("      "),s=Object(l.a)(r,2),d=s[0];return s[1],Object(b.jsx)("div",{children:Object(b.jsx)("div",{style:{marginTop:"5%",marginLeft:"5%",maxHeight:"50%"},children:Object(b.jsxs)(m.a,{style:{marginLeft:"auto",width:"90%",marginRight:"5%"},children:[Object(b.jsx)(u.a,{xs:6,class:"col-md-6 border-right",children:Object(b.jsx)("img",{src:"images/Chef2.jpg",width:"93%",height:"72%"})}),Object(b.jsxs)(u.a,{xs:6,style:{paddingLeft:"3%"},children:[Object(b.jsx)(m.a,{style:{marginRight:"20%"},children:Object(b.jsx)("h1",{children:"Order Summary"})}),Object(b.jsx)(m.a,{style:{marginRight:"20%",marginTop:"2%",maxHeight:"22%",minHHeight:"80%"},children:Object(b.jsx)("div",{children:Object(b.jsxs)(He.a,{style:{overflow:"scroll",maxHeight:"40%",width:"140%"},children:[Object(b.jsxs)(He.a.Item,{children:[Object(b.jsx)("b",{children:"Veg. Loaded Pizza x 3 "})," ... ($4 x 3 = $12)"]}),Object(b.jsxs)(He.a.Item,{children:[Object(b.jsx)("b",{children:"Veg. Loaded Pizza x 3 "})," ... ($4 x 3 = $12)"]}),Object(b.jsxs)(He.a.Item,{children:[Object(b.jsx)("b",{children:"Veg. Loaded Pizza x 3 "})," ... ($4 x 3 = $12)"]}),Object(b.jsxs)(He.a.Item,{children:[Object(b.jsx)("b",{children:"Veg. Loaded Pizza x 3 "})," ... ($4 x 3 = $12)"]}),Object(b.jsxs)(He.a.Item,{children:[Object(b.jsx)("b",{children:"Veg. Loaded Pizza x 3 "})," ... ($4 x 3 = $12)"]}),Object(b.jsxs)(He.a.Item,{children:[Object(b.jsx)("b",{children:"Veg. Loaded Pizza x 3 "})," ... ($4 x 3 = $12)"]}),Object(b.jsxs)(He.a.Item,{children:[Object(b.jsx)("b",{children:"Veg. Loaded Pizza x 3 "})," ... ($4 x 3 = $12)"]}),Object(b.jsxs)(He.a.Item,{children:[Object(b.jsx)("b",{children:"Veg. Loaded Pizza x 3 "})," ... ($4 x 3 = $12)"]}),Object(b.jsxs)(He.a.Item,{children:[Object(b.jsx)("b",{children:"Veg. Loaded Pizza x 3 "})," ... ($4 x 3 = $12)"]}),Object(b.jsxs)(He.a.Item,{children:[Object(b.jsx)("b",{children:"Veg. Loaded Pizza x 3 "})," ... ($4 x 3 = $12)"]}),Object(b.jsxs)(He.a.Item,{children:[Object(b.jsx)("b",{children:"Veg. Loaded Pizza x 3 "})," ... ($4 x 3 = $12)"]})]})})}),Object(b.jsx)(m.a,{style:{marginRight:"20%",marginTop:"3%"},children:Object(b.jsx)(Ve.a,{children:Object(b.jsx)(We.a,{as:"textarea","aria-label":"With textarea",placeholder:"Add special instructions...",style:{backgroundColor:"lightgrey",fontStyle:"italic",fontSize:"20px",margin:"auto"}})})}),Object(b.jsx)(m.a,{children:Object(b.jsx)(o.a,{body:!0,style:(e={color:"white",fontFamily:"cursive",fontSize:"130%",marginLeft:"19%",marginTop:"3%",backgroundColor:"#3f51b5"},Object(xe.a)(e,"color","white"),Object(xe.a)(e,"width","40%"),Object(xe.a)(e,"textAlign","center"),e),children:Object(b.jsx)("b",{children:"Total = 127.56$"})})}),Object(b.jsx)(m.a,{style:{marginRight:"25%",marginTop:"5%"},children:Object(b.jsx)("h1",{children:"Payment Option"})}),Object(b.jsx)(m.a,{children:Object(b.jsxs)("div",{children:[Object(b.jsx)(Me.a.Check,{onClick:function(){c(!1)},style:{marginTop:"2%"},type:"radio",label:"Pay by Cash",name:"formHorizontalRadios",id:"formHorizontalRadios1"}),Object(b.jsx)(Me.a.Check,{onClick:function(){window.alert("E-Interac details..."),c(!0)},style:{marginTop:"2%"},type:"radio",label:"Pay by E-Interac",name:"formHorizontalRadios",id:"formHorizontalRadios1"})]})}),Object(b.jsx)(m.a,{children:Object(b.jsx)("div",{children:n?Object(b.jsx)(Me.a,{children:Object(b.jsx)(Me.a.Group,{children:Object(b.jsx)(Me.a.File,{id:"exampleFormControlFile1",label:"E-Interac receipt",style:{marginTop:"2%",width:"90%"}})})}):Object(b.jsx)("div",{style:{marginBottom:"500%"},children:d})})}),Object(b.jsxs)(m.a,{children:[Object(b.jsx)(u.a,{children:Object(b.jsx)(j.a,{variant:"danger",style:{marginTop:"5%",width:"50%",padding:"5% 5%"},children:"Go Back"})}),Object(b.jsx)(u.a,{children:Object(b.jsx)(j.a,{variant:"success",style:{marginTop:"5%",width:"50%",padding:"5% 5%"},children:"Pay"})})]})]})]})})})};var qe=function(){var e=Object(i.useState)(new Map),t=Object(l.a)(e,2),a=t[0],n=t[1],c=Object(i.useState)(0),r=Object(l.a)(c,2),s=r[0],o=r[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("header",{children:[console.log("orderedItems "+a),Object(b.jsx)(be,{orderedItems:a})]}),Object(b.jsxs)(le.c,{children:[Object(b.jsx)(le.a,{exact:!0,path:"/foodSelection",children:Object(b.jsx)(g,{onOrderItemClick:function(e){console.log(e),n(e),o(a.size),console.log(s)}})}),Object(b.jsx)(le.a,{exact:!0,path:"/kitchen",children:Object(b.jsx)(Ae,{children:Object(b.jsx)(Be,{children:Object(b.jsx)(se,{})})})}),Object(b.jsx)(le.a,{exact:!0,path:"/summaryAndPayment",children:Object(b.jsx)(Ee,{orderItems:a})}),Object(b.jsx)(le.a,{exact:!0,path:"/",component:Re}),Object(b.jsx)(le.a,{exact:!0,path:"/registersuccess",children:Object(b.jsx)(g,{})})]}),Object(b.jsx)("footer",{children:Object(b.jsx)(Oe,{})})]})},Ge=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,330)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),c(e),r(e)}))},Ke=a(81);s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(Ke.a,{children:Object(b.jsx)(qe,{})})}),document.getElementById("root")),Ge()}},[[267,1,2]]]);
//# sourceMappingURL=main.46a1edcb.chunk.js.map