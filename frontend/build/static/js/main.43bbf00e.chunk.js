(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,n){e.exports=n(47)},36:function(e,t,n){},38:function(e,t,n){},44:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(21),l=n.n(c),i=(n(36),n(38),n(17)),r=n(26),u=(n(44),n(19)),s=n(25),m=function(){var e=Object(a.useState)([""]),t=Object(i.a)(e,2),n=t[0],c=(t[1],Object(a.useState)([""])),l=Object(i.a)(c,2),m=l[0],d=(l[1],Object(a.useState)("white")),f=Object(i.a)(d,2),v=f[0],E=f[1],h=Object(a.useState)(1),g=Object(i.a)(h,2),p=g[0],b=g[1],w=Object(a.useRef)({color:"white",socketUrl:"/",lineWidth:1}).current;return Object(a.useEffect)(function(){w.socketUrl="https://lets-collab.onrender.com",w.socket=r.a.connect(w.socketUrl,function(){}),console.log(w),w.socket.on("image-data",function(e){var t=new Image,n=document.getElementById("canvas").getContext("2d");t.src=e,t.addEventListener("load",function(){n.drawImage(t,0,0)})})},[]),Object(a.useEffect)(function(){var e=function(e,t){console.log(e);var n="touch"===t?e.touches[0]:e;f("move",n)},t=function(e,t){console.log(e.touches);var n="touch"===t?e.touches[0]:e;f("down",n)},a=function(e,t){var n="touch"===t?e.touches[0]:e;f("up",n)},o=0,c=0,l=0,i=0,r=!1,u=document.getElementById("canvas");u.height=window.innerHeight,u.width=window.innerWidth;var s=u.getContext("2d"),d=function(e){s.beginPath(),s.moveTo(o,l),s.lineTo(c,i),s.strokeStyle=w.color,s.lineCap="round",s.lineJoin="round",s.lineWidth=w.lineWidth,s.stroke(),s.closePath(),function(){if(console.log(w),!w.waiting){var e=u.toDataURL("image/png");n.push(e),m.push(e),w.socket.emit("image-data",e),w.waiting=!0,setTimeout(function(){w.waiting=!1},100)}}()},f=function(e,t){"down"===e&&(o=c,l=i,c=t.clientX-u.offsetLeft,i=t.clientY-u.offsetTop,r=!0),"up"!==e&&"out"!==e||(r=!1),"move"===e&&r&&(o=c,l=i,c=t.clientX-u.offsetLeft,i=t.clientY-u.offsetTop,d())};u.addEventListener("mousemove",e),u.addEventListener("mousedown",t),u.addEventListener("mouseup",a),u.addEventListener("touchmove",function(t){return e(t,"touch")},{passive:!0}),u.addEventListener("touchstart",function(e){return t(e,"touch")},{passive:!0}),u.addEventListener("touchend",function(e){return a(e,"touch")})},[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"blackboard"},o.a.createElement("figure",{className:"frame"},o.a.createElement("div",{className:"color-picker-wrapper"},o.a.createElement("div",null,o.a.createElement("h3",null,"Let's Collab")),o.a.createElement("div",null,o.a.createElement("input",{className:"color-picker",type:"color",defaultValue:"#EFEFEF",onChange:function(e){return t=e.target.value,E(t),void(w.color=t);var t}}),o.a.createElement("input",{min:"2",max:"50",type:"range",value:p,onChange:function(e){var t;t=parseInt(e.target.value),b(t),w.lineWidth=p}}),o.a.createElement("span",null,p))),o.a.createElement("canvas",{className:"canvas",id:"canvas"})),o.a.createElement("div",{className:"button-wrapper"},o.a.createElement("button",{className:"btn",onClick:function(e){w.lineWidth=10,w.color="black"}},o.a.createElement(u.a,{size:14})),o.a.createElement("button",{className:"btn",onClick:function(e){w.lineWidth=p,w.color=v,document.getElementById("canvas").getContext("2d").globalCompositeOperation="source-over"}},o.a.createElement(u.b,{size:14})),o.a.createElement("button",{className:"btn",onClick:function(e){!function(){var e=document.getElementById("canvas");e.getContext("2d").clearRect(0,0,e.width,e.height)}()}},o.a.createElement(s.a,{size:14})))))};var d=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m,null))};l.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.Fragment,null,o.a.createElement(d,null)))}},[[27,2,1]]]);
//# sourceMappingURL=main.43bbf00e.chunk.js.map