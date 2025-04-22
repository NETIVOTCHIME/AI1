import{P as i,da as $,f as G,ga as m,ja as c,m as b,u as S}from"./GZKBVB6W.js";import{D as K,E as V,F as W}from"./PCHDBHHN.js";import{a as t,b as B}from"./5XNCO7TL.js";import{a as F}from"./4B6UFNBQ.js";import{f as n}from"./GAV6HCJA.js";var w=n(W()),D=n(V());function _(r){return(0,D.default)("MuiCircularProgress",r)}var L=(0,w.default)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]),Y=L;B();var j=n(F());var U=n(K());var f=n(G()),Z=["className","color","disableShrink","size","style","thickness","value","variant"],u=r=>r,M,R,N,O,s=44,q=(0,i.keyframes)(M||(M=u`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),A=(0,i.keyframes)(R||(R=u`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),H=r=>{let{classes:e,variant:o,color:a,disableShrink:d}=r,y={root:["root",o,`color${c(a)}`],svg:["svg"],circle:["circle",`circle${c(o)}`,d&&"circleDisableShrink"]};return(0,U.default)(y,_,e)},J=m("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{let{ownerState:o}=r;return[e.root,e[o.variant],e[`color${c(o.color)}`]]}})(({ownerState:r,theme:e})=>t({display:"inline-block"},r.variant==="determinate"&&{transition:e.transitions.create("transform")},r.color!=="inherit"&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&(0,i.css)(N||(N=u`
      animation: ${0} 1.4s linear infinite;
    `),q)),Q=m("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),X=m("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{let{ownerState:o}=r;return[e.circle,e[`circle${c(o.variant)}`],o.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>t({stroke:"currentColor"},r.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&(0,i.css)(O||(O=u`
      animation: ${0} 1.4s ease-in-out infinite;
    `),A)),rr=j.forwardRef(function(e,o){let a=$({props:e,name:"MuiCircularProgress"}),{className:d,color:y="primary",disableShrink:z=!1,size:h=40,style:E,thickness:l=3.6,value:P=0,variant:T="indeterminate"}=a,I=b(a,Z),p=t({},a,{color:y,disableShrink:z,size:h,thickness:l,value:P,variant:T}),v=H(p),g={},k={},x={};if(T==="determinate"){let C=2*Math.PI*((s-l)/2);g.strokeDasharray=C.toFixed(3),x["aria-valuenow"]=Math.round(P),g.strokeDashoffset=`${((100-P)/100*C).toFixed(3)}px`,k.transform="rotate(-90deg)"}return(0,f.jsx)(J,t({className:S(v.root,d),style:t({width:h,height:h},k,E),ownerState:p,ref:o,role:"progressbar"},x,I,{children:(0,f.jsx)(Q,{className:v.svg,ownerState:p,viewBox:`${s/2} ${s/2} ${s} ${s}`,children:(0,f.jsx)(X,{className:v.circle,style:g,ownerState:p,cx:s,cy:s,r:(s-l)/2,fill:"none",strokeWidth:l})})}))}),er=rr;export{_ as a,Y as b,er as c};
