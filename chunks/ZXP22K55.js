import{a}from"./WBYFOOBE.js";import{a as n}from"./TJI4TFLZ.js";import{A as i}from"./HQXZBLYX.js";import{W as c,Y as d,ba as s}from"./5XNCO7TL.js";var O="[object Number]";function U(r){return typeof r=="number"||s(r)&&d(r)==O}var ar=U;function k(r,t,o){var f=-1,e=r.length;t<0&&(t=-t>e?0:e+t),o=o>e?e:o,o<0&&(o+=e),e=t>o?0:o-t>>>0,t>>>=0;for(var u=Array(e);++f<e;)u[f]=r[f+t];return u}var l=k;function E(r,t,o){var f=r.length;return o=o===void 0?f:o,!t&&o>=f?r:l(r,t,o)}var b=E;function w(r){return r.split("")}var g=w;var x="\\ud800-\\udfff",z="\\u0300-\\u036f",G="\\ufe20-\\ufe2f",J="\\u20d0-\\u20ff",L=z+G+J,V="\\ufe0e\\ufe0f",q="["+x+"]",m="["+L+"]",p="\\ud83c[\\udffb-\\udfff]",H="(?:"+m+"|"+p+")",h="[^"+x+"]",A="(?:\\ud83c[\\udde6-\\uddff]){2}",S="[\\ud800-\\udbff][\\udc00-\\udfff]",P="\\u200d",R=H+"?",F="["+V+"]?",W="(?:"+P+"(?:"+[h,A,S].join("|")+")"+F+R+")*",X=F+R+W,Y="(?:"+[h+m+"?",m,A,S,q].join("|")+")",Z=RegExp(p+"(?="+p+")|"+Y+X,"g");function _(r){return r.match(Z)||[]}var T=_;function B(r){return a(r)?T(r):g(r)}var v=B;function D(r){return function(t){t=i(t);var o=a(t)?v(t):void 0,f=o?o[0]:t.charAt(0),e=o?b(o,1).join(""):t.slice(1);return f[r]()+e}}var C=D;var K=C("toUpperCase"),y=K;function Q(r){return y(i(r).toLowerCase())}var Nr=Q;var M=1/0,$=17976931348623157e292;function rr(r){if(!r)return r===0?r:0;if(r=n(r),r===M||r===-M){var t=r<0?-1:1;return t*$}return r===r?r:0}var N=rr;function tr(r){var t=N(r),o=t%1;return t===t?o?t-o:t:0}var I=tr;var or=c.isFinite,er=Math.min;function fr(r){var t=Math[r];return function(o,f){if(o=n(o),f=f==null?0:er(I(f),292),f&&or(o)){var e=(i(o)+"e").split("e"),u=t(e[0]+"e"+(+e[1]+f));return e=(i(u)+"e").split("e"),+(e[0]+"e"+(+e[1]-f))}return t(o)}}var j=fr;var ir=j("round"),Vr=ir;export{ar as a,Nr as b,N as c,I as d,Vr as e};
