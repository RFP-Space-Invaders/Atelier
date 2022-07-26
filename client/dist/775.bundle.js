"use strict";(self.webpackChunkatelier=self.webpackChunkatelier||[]).push([[775],{6636:(n,e,t)=>{t.d(e,{Z:()=>o});var r=t(5466),i=t(3823);function o(n){var e,t=n.imageUpload;return(0,r.useEffect)((function(){e=window.cloudinary.createUploadWidget({cloudName:"space-invaders",uploadPreset:"Atelier-space-invaders"},(function(n,e){!n&&e&&"success"===e.event&&(console.log("Done! Here is the image info: ",e.info),t(e.info.url))})),document.getElementById("upload_widget").addEventListener("click",(function(){e.open()}),!1)}),[]),(0,i.jsx)("button",{type:"button",id:"upload_widget",children:"Upload"})}},6656:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(5466),i=t(1225),o=t(3823);function l(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function a(n){var e,t,a=n.photos,u=(e=(0,r.useState)(!0),t=2,function(n){if(Array.isArray(n))return n}(e)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],l=!0,a=!1;try{for(t=t.call(n);!(l=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);l=!0);}catch(n){a=!0,i=n}finally{try{l||null==t.return||t.return()}finally{if(a)throw i}}return o}}(e,t)||function(n,e){if(n){if("string"==typeof n)return l(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?l(n,e):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=u[0],c=u[1];return(0,o.jsx)("div",{children:s?(0,o.jsx)("img",{src:a.url,alt:"imageOfLa",width:"100",height:"70",onClick:function(){return c(!1)}}):(0,o.jsx)(i.a,{src:a.url,alt:"imageOfLa",onClick:function(){return c(!0)}})})}},7775:(n,e,t)=>{t.r(e),t.d(e,{default:()=>_n});var r,i,o,l,a,u=t(5466),s=t(6116),c=t(6656),d=t(8549);function f(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var p,h,m,y,g,b,x,j,v,w,O,S,A,P=d.ZP.button(r||(r=f(["\n  padding: 0;\n  border: none;\n  background: none;\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: lighter;\n  opacity:0.4;\n  font-family: 'Oswald', sans-serif;\n"]))),k=d.ZP.div(i||(i=f(["\n  display: flex;\n  justify-content: space-between;\n  width: 30%;\n  padding-right: 15px;\n  @media (max-width: 500px) {\n    width: 60%;\n  }\n"]))),E=d.ZP.div(o||(o=f(["\n  display: flex;\n  justify-content: space-between;\n  width: 18rem;\n  margin-top: -0.09em;\n  margin-bottom: 0.3em;\n"]))),C=d.ZP.button(l||(l=f(["\n  display: flex;\n  align-items: flex-end;\n  padding: 0;\n  border: none;\n  background: none;\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: lighter;\n  opacity:0.4;\n  // font-family: 'Oswald', sans-serif;\n  // font-weight: 200;\n  // height: 30px;\n  // background-color: white;\n  // margin-left: 5px;\n  // font-size: 18px;\n  // cursor: pointer;\n  // &:hover {\n  //   background-color: #99AEAD;\n  // }\n"]))),q=d.ZP.button(a||(a=f(["\n  // margin-left: 1rem;\n  // border: none;\n  // background: none;\n  // text-decoration: underline;\n  // cursor: pointer;\n  // font-size: 13px;\n  // font-weight: lighter;\n  // opacity:0.4;\n  margin-right: 5px;\n  font-family: 'Oswald', sans-serif;\n  font-weight: 200;\n  // font-size: 18px;\n  min-height: 3rem;\n  background-color: white;\n  cursor: pointer;\n  &:hover {\n    background-color: #99AEAD;\n  }\n"])));function Z(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var I=d.ZP.ul(p||(p=Z(["\n  max-height: 600px;\n  min-heigh: 600px;\n  width: 85vw;\n  margin: 0 auto;\n  overflow-y: auto;\n  padding: 15px;\n  font-size: 14px;\n  background: glacier-white;\n  margin-bottom: -0.8rem;\n"]))),_=d.ZP.div(h||(h=Z(["\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n  @media (max-width: 500px) {\n    display: flex;\n    flex-direction: column;\n"]))),z=d.ZP.li(m||(m=Z(["\n  padding: 5px;\n  margin-bottom: 10px;\n  list-style: none;\n  border-bottom: 1px dashed;\n\n\n}\n"]))),D=d.ZP.span(y||(y=Z(["\n  padding-left: 2px;\n  font-size: 13px;\n  font-weight: lighter;\n  opacity: 0.4;\n  "]))),U=d.ZP.div(g||(g=Z(["\n  height: 250px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  margin-right: 5px;\n  width: 98%;\n\n"]))),L=d.ZP.li(b||(b=Z(["\n  display: flex;\n  flex-direction: column;\n  align-items: space-between;\n  justify-content: space-between;\n  margin-left: 5px;\n  width: 100%;\n  min-height: 40px;\n  margin-bottom: 0.3rem;\n\n"]))),Q=d.ZP.ul(x||(x=Z(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  min-height: 40px;\n  padding: 5px;\n  width: 100%;\n\n"]))),T=d.ZP.div(j||(j=Z(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin-left: 5px;\n  width: 100%;\n  min-height: 40px;\n  margin-bottom: 0.3rem;\n"]))),N=d.ZP.span(v||(v=Z(["\n  display: inline-block;\n  padding-left: 6px;\n  font-size:  15px;\n  font-weight: bold;\n"]))),F=d.ZP.div(w||(w=Z(["\n  display: flex;\n  align-items: flex-start;\n  color: #007185;\n  font-size: 17px;\n  font-weight: bold;\n  margin-left: 10px;\n  width: 60%;\n  span {\n    margin-right: 10px;\n  }\n  p {\n    margin: 0;\n  }\n"]))),R=d.ZP.input(O||(O=Z(["\n  width: 100%;\n  height: 4em;\n  padding: 1em;\n  margin: 0 auto;\n"]))),H=d.ZP.div(S||(S=Z(["\n  max-height: 50px;\n  display: flex;\n  justify-content: flex-start;\n  margin: 0 auto;\n  width: 65%;\n  font-size: 15px;\n  padding: 1.5rem;\n  background: glacier-white;\n  margin-top: 0.5rem;\n  margin-bottom: 1.5rem;\n  border-bottom 1px solid black;\n"]))),M=(d.ZP.div(A||(A=Z(["\n  min-height:600px;\n"]))),t(1225)),W=t(3823);function $(n){var e=n.answer,t=n.helpfulness,r=n.report,i=n.helpfulClicked,o=new Date(e.date.replace(/-/g,"/").replace(/T.+/,"")).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"});return(0,W.jsxs)(L,{children:[(0,W.jsx)("p",{style:{margin:0},children:e.body}),0===e.photos.length?null:(0,W.jsxs)(M.L,{children:[" ",e.photos.map((function(n,e){return(0,W.jsx)(c.Z,{photos:n},e)}))," "]}),(0,W.jsxs)(E,{children:[(0,W.jsxs)("div",{children:["Seller"===e.answerer_name||"seller"===e.answerer_name?(0,W.jsxs)(D,{children:["by"," ",(0,W.jsx)("b",{children:"Seller"}),","," "]}):(0,W.jsxs)(D,{children:["by"," ",e.answerer_name,","," "]}),(0,W.jsx)(D,{children:"".concat(o)})]}),(0,W.jsx)("span",{style:{opacity:.5},children:"|"}),(0,W.jsxs)("div",{children:[i?(0,W.jsx)(D,{children:"Helpful?"}):(0,W.jsx)(P,{type:"button",onClick:function(){t(e.answer_id)},children:"Helpful?"}),(0,W.jsx)(D,{children:"  Yes (".concat(e.helpfulness,")")})]}),(0,W.jsx)("span",{style:{opacity:.5},children:"|"}),(0,W.jsx)(P,{type:"button",onClick:function(){return r(e.answer_id)},children:"Report"})]})]})}var V=t(9768),Y=t(6636);function B(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function G(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?B(Object(t),!0).forEach((function(e){J(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):B(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function J(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function K(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],l=!0,a=!1;try{for(t=t.call(n);!(l=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);l=!0);}catch(n){a=!0,i=n}finally{try{l||null==t.return||t.return()}finally{if(a)throw i}}return o}}(n,e)||X(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(n,e){if(n){if("string"==typeof n)return nn(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?nn(n,e):void 0}}function nn(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}t(4559);var en={body:"",name:"",email:""};function tn(n){var e=n.onFormValidation,t=K((0,u.useState)(en),2),r=t[0],i=t[1],o=K((0,u.useState)([]),2),l=o[0],a=o[1],s=function(n){var e=n.target,t=e.name,o=e.value;i(G(G({},r),{},J({},t,o)))};return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)("h2",{children:"Submit an answer"}),(0,W.jsxs)("form",{onSubmit:function(n){n.preventDefault();var t=G(G({},r),{},{photos:l});e(t)},children:[(0,W.jsx)("div",{className:"text",children:(0,W.jsx)("input",{type:"text",name:"body",placeholder:"Enter an answer...",maxLength:"1000",size:"100",value:r.body,onChange:s,required:!0})}),(0,W.jsx)("div",{className:"name",children:(0,W.jsx)("input",{type:"text",name:"name",placeholder:"Enter a name",value:r.name,onChange:s})}),(0,W.jsx)("div",{className:"email",children:(0,W.jsxs)("label",{children:["Email",(0,W.jsx)("input",{type:"email",name:"email",placeholder:"Enter an email",value:r.email,onChange:s})]})}),(0,W.jsx)(Y.Z,{imageUpload:function(n){a((function(e){return[].concat(function(n){if(Array.isArray(n))return nn(n)}(t=e)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(t)||X(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[n]);var t}))}}),(0,W.jsx)("div",{children:(0,W.jsx)("input",{type:"submit",value:"Submit Answer"})})]})]})}function rn(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],l=!0,a=!1;try{for(t=t.call(n);!(l=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);l=!0);}catch(n){a=!0,i=n}finally{try{l||null==t.return||t.return()}finally{if(a)throw i}}return o}}(n,e)||function(n,e){if(n){if("string"==typeof n)return on(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?on(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function on(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var ln,an,un,sn,cn,dn,fn=t(4559);function pn(n){var e=n.question,t=n.helpfulness,r=n.reportQ,i=(n.seeMoreQuestion,n.helpfulClick),o=rn((0,u.useState)([]),2),l=o[0],a=o[1],c=rn((0,u.useState)([]),2),d=c[0],f=c[1],p=rn((0,u.useState)(2),2),h=p[0],m=p[1],y=rn((0,u.useState)(!1),2),g=y[0],b=y[1],x=rn((0,u.useState)(!1),2),j=x[0],v=x[1],w=rn((0,u.useState)(!1),2),O=w[0],S=(w[1],rn((0,u.useState)(0),2)),A=S[0],E=S[1],q=rn((0,u.useState)(!1),2),Z=q[0],I=(q[1],rn((0,u.useState)(!1),2)),L=I[0],R=I[1];console.log(e),(0,u.useEffect)((function(){h>2?(console.log("questionList_1"),f(l.slice(0,h))):(console.log("questionList"),fn({method:"get",url:"/qa/questions/".concat(e.question_id,"/answers"),params:{page:1,count:h}}).then((function(n){var e=n.data;s.unstable_batchedUpdates((function(){a(e.results),f(e.results.slice(0,h)),E(e.results.length)}))})).catch((function(n){return console.log(n)})))}),[h,L,O,j]);var H=function(n){fn({method:"put",url:"qa/answers/".concat(n,"/helpful")}).then((function(){return R(!L)})).catch((function(n){return console.log(n)}))},M=function(n){fn({method:"put",url:"qa/answers/".concat(n,"/report")}).then((function(){alert("Answer has been reported")})).catch((function(n){return console.log(n)}))},Y=function(){m(g?2:1e3),b(!g)};return(0,W.jsxs)("div",{id:"".concat(e.question_id),style:{postion:"relative"},children:[j?(0,W.jsx)(V.Z,{title:"This is the modal's title",description:"A short description of the modal's contents",isOpen:j,onCloseRequest:function(){v(!1)},children:(0,W.jsx)(tn,{helpfulClicked:Z,onFormValidation:function(n,e){fn({method:"post",url:"/qa/questions/".concat(e,"/answers"),data:n}).then((function(){alert("Thank you for your feedback")})).catch((function(){return alert("error")})),v(!1)}})}):null,(0,W.jsxs)(z,{style:{position:"relative"},children:[(0,W.jsxs)(_,{children:[(0,W.jsxs)(F,{children:[(0,W.jsx)("span",{children:"Q: "}),(0,W.jsx)("h4",{style:{margin:0},children:e.question_body})]}),(0,W.jsxs)(k,{children:[(0,W.jsxs)("div",{children:[i?(0,W.jsx)(D,{children:"Helpful?"}):(0,W.jsx)(P,{type:"button",onClick:function(){t(e.question_id)},children:"Helpful?"}),(0,W.jsx)(D,{children:"Yes (".concat(e.question_helpfulness,")")})]}),(0,W.jsx)(D,{children:"|"}),(0,W.jsx)(P,{type:"button",onClick:function(){return r(e.question_id)},children:"Report"}),(0,W.jsx)(D,{children:"|"}),(0,W.jsx)(P,{type:"button",onClick:function(){return v(!0)},children:"Add Answer"})]})]}),(0,W.jsxs)(Q,{children:[(0,W.jsx)(N,{children:"A: "}),(0,W.jsx)(T,{children:!0===g?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(U,{children:d.map((function(n){return(0,W.jsx)($,{helpfulness:H,report:M,answer:n},n.answer_id)}))}),g?(0,W.jsx)(C,{type:"button",onClick:function(){return Y()},children:"COLLAPSE"}):null]}):(0,W.jsx)(W.Fragment,{children:d.map((function(n,e){return(0,W.jsx)($,{helpfulness:H,report:M,answer:n},e)}))})}),!g&&A>2?(0,W.jsx)(C,{type:"button",onClick:function(){return Y()},children:"SEE MORE ANSWERS"}):null]})]})]})}function hn(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function mn(n){var e,t,r=n.setSearch,i=n.allQuestions,o=(e=(0,u.useState)(""),t=2,function(n){if(Array.isArray(n))return n}(e)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],l=!0,a=!1;try{for(t=t.call(n);!(l=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);l=!0);}catch(n){a=!0,i=n}finally{try{l||null==t.return||t.return()}finally{if(a)throw i}}return o}}(e,t)||function(n,e){if(n){if("string"==typeof n)return hn(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?hn(n,e):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=o[0],a=o[1];return(0,u.useEffect)((function(){console.log("filter"),function(n){if(n.length>2){var e=i.filter((function(e){return e.question_body.toLowerCase().includes(n.toLowerCase())}));r(e)}else r([])}(l)}),[l]),(0,W.jsx)("div",{children:(0,W.jsx)(R,{type:"search","max-length":"150",autoComplete:"off",value:l,placeholder:"HAVE A QUESTION? SEARCH FOR ANSWERS...",onChange:function(n){a(n.target.value)}})})}function yn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}d.ZP.div(ln||(ln=yn(['\n  position: fixed;\n  top: 10%;\n  left: 20%;\n  height: 70%;\n  width: 100%;\n  border-radius: 10px;\n  z-index: 10;\n  background: dodgerblue;\n  padding: 20px;\n\n  form {\n    margin-top: 30px;\n    width: 100%;\n    height: 60%;\n    position: absolute;\n    top: 15%;\n    left: 12%;\n    z-index: 11;\n\n    display: flex;\n    flex-direction: column;\n  }\n\n  input {\n    width: 30%;\n    height: 30px;\n    margin-bottom: 1em;\n    margin-top: 0.5em;\n    padding: 10px;\n  }\n  input[name="answer"] {\n    height: 80px;\n  }\n  input[type="submit"] {\n    width: 20%;\n    height: 40px;\n    margin-right: 30px;\n    margin-left: 40px;\n  }\n  input[type="button"] {\n    width: 20%;\n    height: 40px;\n    margin-right: 30px;\n\n  }\n\n'])));var gn=d.ZP.div(an||(an=yn(["\ninput {\n  width: 72%;\n  height: 4em;\n}\n"]))),bn=(d.ZP.div(un||(un=yn(["\n  text-align: center;\n  margin-bottom: 50px;\n"]))),d.ZP.div(sn||(sn=yn(["\n  display: flex;\n  flex-direction: row;\n\n  input {\n    width: 80%;\n    margin-bottom: -16px;\n  }\n\n  p {\n    width: 70%;\n    margin-bottom: 30px;\n  }\n"])))),xn=d.ZP.label(cn||(cn=yn(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n"]))),jn=d.ZP.div(dn||(dn=yn(["\n  position: relative;\n  left: 10%;\n"])));function vn(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function wn(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?vn(Object(t),!0).forEach((function(e){On(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):vn(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function On(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Sn(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function An(n){var e,t,r=n.onFormValidation,i=(e=(0,u.useState)({body:"",name:"",email:""}),t=2,function(n){if(Array.isArray(n))return n}(e)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],l=!0,a=!1;try{for(t=t.call(n);!(l=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);l=!0);}catch(n){a=!0,i=n}finally{try{l||null==t.return||t.return()}finally{if(a)throw i}}return o}}(e,t)||function(n,e){if(n){if("string"==typeof n)return Sn(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Sn(n,e):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=i[0],l=i[1],a=function(n){var e=n.target,t=e.name,r=e.value;l(wn(wn({},o),{},On({},t,r)))};return(0,W.jsxs)("form",{onSubmit:function(n){n.preventDefault(),r(o)},children:[(0,W.jsx)(gn,{children:(0,W.jsxs)(xn,{children:[(0,W.jsx)("span",{children:"Your Question *"}),(0,W.jsx)("input",{type:"text",name:"body",placeholder:"Enter your Question",maxLength:"1000",size:"100",value:o.body,onChange:a,required:!0})]})}),(0,W.jsxs)(bn,{children:[(0,W.jsxs)("div",{className:"name",children:[(0,W.jsxs)(xn,{children:[(0,W.jsx)("span",{children:"What is your nickname *"}),(0,W.jsx)("input",{type:"text",name:"name",placeholder:"Example: jackson11!",maxLength:"60",value:o.name,onChange:a,required:!0})]}),(0,W.jsx)("p",{children:"For privacy reasons, do not use your full name or email address"})]}),(0,W.jsxs)("div",{className:"email",children:[(0,W.jsxs)(xn,{children:[(0,W.jsx)("span",{children:"Your email *"}),(0,W.jsx)("input",{type:"email",name:"email",placeholder:"Why did you like the product or not?",value:o.email,onChange:a})]}),(0,W.jsx)("p",{children:"For authentication reasons, you will not be emailed"})]})]}),(0,W.jsxs)(jn,{children:[(0,W.jsx)("input",{type:"submit",value:"Submit Question"}),(0,W.jsx)("input",{type:"button",value:"close",onClick:function(){return setAddStatus(!1)}})]})]})}var Pn=t(4061);function kn(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function En(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?kn(Object(t),!0).forEach((function(e){Cn(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):kn(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function Cn(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function qn(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],l=!0,a=!1;try{for(t=t.call(n);!(l=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);l=!0);}catch(n){a=!0,i=n}finally{try{l||null==t.return||t.return()}finally{if(a)throw i}}return o}}(n,e)||function(n,e){if(n){if("string"==typeof n)return Zn(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Zn(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Zn(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var In=t(4559);function _n(n){var e=n.product_id,t=qn((0,u.useState)([]),2),r=t[0],i=t[1],o=qn((0,u.useState)([]),2),l=o[0],a=o[1],c=qn((0,u.useState)([]),2),d=c[0],f=c[1],p=qn((0,u.useState)(4),2),h=p[0],m=p[1],y=qn((0,u.useState)(2),2),g=y[0],b=y[1],x=qn((0,u.useState)(!1),2),j=x[0],v=x[1],w=(0,u.useContext)(Pn.I).name,O=qn((0,u.useState)(!1),2),S=O[0],A=O[1],P=qn((0,u.useState)(!0),2),k=P[0],E=P[1];function C(){In({method:"get",url:"/qa/questions",params:{product_id:e,page:1,count:h}}).then((function(n){var e=n.data;console.log(e),s.unstable_batchedUpdates((function(){i(e.results.slice(0,h)),b(e.results.length),a(e.results)})),E(!1)})).catch((function(n){return console.log(n)}))}(0,u.useEffect)((function(){console.log("questions"),C()}),[]),(0,u.useEffect)((function(){console.log("questions_1"),i(l.slice(0,h))}),[h]),(0,u.useEffect)((function(){console.log("question_2"),i(d)}),[d]);var Z=function(n){A(!0),In({method:"put",url:"/qa/answers/".concat(n,"/helpful")}).then((function(){C()})).catch((function(n){return console.log(n)}))},_=function(n){In({method:"put",url:"/qa/questions/".concat(n,"/report")}).then((function(){C(),alert("Question has been reported successfully")})).catch((function(n){return console.log(n)}))},z=null;return void 0!==r&&(z=0===d.length?r.map((function(n){return(0,W.jsx)(pn,{helpfulness:Z,reportQ:_,question:n,helpfulClick:S,setHelpfulBtnClick:A},n.question_id)})):d.map((function(n){return(0,W.jsx)(pn,{helpfulness:Z,reportQ:_,question:n,helpfulClick:S,setHelpfulBtnClick:A},n.question_id)}))),k?null:(0,W.jsxs)(W.Fragment,{children:[j?(0,W.jsx)(V.Z,{title:"Ask Your Question",description:"About ".concat(w),isOpen:j,onCloseRequest:function(){v(!1)},children:(0,W.jsx)(An,{onFormValidation:function(n){var t=En(En({},n),{},{product_id:e});In.post("/questions/questions/",t).then((function(){return console.log("successful posting questions")})).catch((function(n){return console.log("failed to post question",n)})),v(!1)}})}):null,(0,W.jsx)(I,{children:(0,W.jsx)(mn,{setSearch:f,allQuestions:l})}),(0,W.jsx)(I,{children:z}),(0,W.jsxs)(H,{children:[0===d.length&&(g>h||r.length>4)?(0,W.jsxs)(q,{type:"button",onClick:function(){return m((function(n){return n+2}))},children:["SEE"," (".concat(g-h,")")," ","MORE ANSWERED QUESTIONS"]}):null,(0,W.jsx)(q,{type:"button",onClick:function(){return v(!0)},children:"ADD A QUESTION  +"})]})]})}},1225:(n,e,t)=>{t.d(e,{L:()=>a,a:()=>u});var r,i,o=t(8549);function l(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var a=o.ZP.div(r||(r=l(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  cursor: pointer;\n  div {\n    padding-right: 20px;\n    width: 100px;\n  }\n  background: white;\n"]))),u=o.ZP.img(i||(i=l(["\n  position: fixed;\n  width: 50%;\n  height: 60%;\n  z-index: 3;\n  top: 20%;\n  left: 25%;\n  cursor: pointer;\n  backdrop-filter: blur(8px);\n"])))}}]);
//# sourceMappingURL=775.bundle.js.map