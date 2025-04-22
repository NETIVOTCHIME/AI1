import{I as F}from"./6FRVXCKT.js";import{b as w}from"./GRG36H53.js";import{c as P}from"./454JMIH7.js";import{a as R}from"./SVU5JQST.js";import{i as I}from"./CORDBAGF.js";import{c as H}from"./KHKEWIY7.js";import{b as v}from"./TJI4TFLZ.js";import{Ka as O}from"./5XNCO7TL.js";import{a as K}from"./PJ57C2TE.js";import{f as W,h as b}from"./GAV6HCJA.js";var B=(n,t)=>{let e=function(r){let a=Date.now();return setTimeout(function(){r({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-a))}})},1)};try{return typeof window!==void 0&&window.requestIdleCallback?window.requestIdleCallback(n,t):e(n)}catch{return e(n)}};var Y=()=>{try{return window.self!==window.top}catch{return!1}},Z=(n,t,e)=>{let r=e.value;e.value=function(...a){let i=r.apply(this,a);return Y()||I("tabs","query",[{active:!0,currentWindow:!0}]).then(l=>{let m=l?.[0]?.id;m&&I("tabs","sendMessage",[m,{id:H,event:"Client_listenPageTranslationEvent",data:{fn:t,args:a}}]).then().catch()}),i}},x=Z;var E="maxai-trans",g="maxai-trans-inline",T="maxai-trans-block";var M=W(K());var _=n=>{let{display:t}=getComputedStyle(n);return t.includes("inline")},A=n=>!_(n),J=n=>n.querySelectorAll(`& > ${E}`);var G=n=>{let t=E.toUpperCase();J(n).forEach(r=>{r.nextElementSibling?.tagName===t&&r.remove()});let e=n.previousElementSibling;e?.tagName===t&&e.previousSibling?.nodeType!==Node.TEXT_NODE&&e.remove()},S=function(n,t){t.parentElement?.insertBefore(n,t.nextSibling),G(t.parentElement)};var X=n=>{let t=n?.parentElement;for(;t;){let{display:e}=getComputedStyle(t);if(A(t)&&e!=="none")return t;t=t.parentElement}return null},$=n=>{let t=n?.parentElement;for(;t;){let{display:e}=getComputedStyle(t);if(_(t)&&e!=="none")return t;t=t.parentElement}return null},D=n=>{let t=n.parentElement,e=null;for(;t&&t.tagName!=="BODY"&&_(t)&&t.childNodes.length===1;)e=t,t=t.parentElement;return e};function U(n){let t=n;for(;t&&t.tagName!=="BODY";){if(t?.contentEditable==="true")return t;t=t.parentElement}return null}var z=n=>{try{if(n){if(["title","SCRIPT","STYLE","NOSCRIPT","IFRAME","BODY","PRE","OBJECT","CITE","NOBR"].includes(n.tagName)||n.tagName==="CODE"&&(n.innerText.includes(`
`)||n.innerText.includes("\r"))||n.closest("PRE")||n.closest("cite"))return!1;let{display:e}=getComputedStyle(n);return!(e==="none"||n.getAttribute("translate")==="no"||n.getAttribute("contenteditable")==="true"||n.classList.contains("notranslate")||n.className.includes("icon")||/^\d+$/.test(n.innerText))}else return!1}catch{return!1}},j=n=>{let t=n?.trim()||"";return!!(t.length<2||/^\d+$/.test(t)||/^(.){0,3}(\d*[,:._-])*\d+(.){0,5}$/g.test(t)||/^(([A-Z0-9]+[_-])*[A-Z0-9]){1,8}$/g.test(t)||/^\w+@\w+[.]\w+$/g.test(t)||/^(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(t)||/^@[\S]+$/g.test(t)||/^[-`~!@#$%^&*()_+=[\]{};:'",<.>/?]+$/g.test(t)||/^(\p{Emoji_Presentation}|\p{Extended_Pictographic}|\p{Emoji_Modifier_Base}|\p{Emoji_Component}|\p{Emoji}\uFE0F)+$/u.test(t))},L=n=>{let t={am:"am",ar:"ar",bg:"bg",bn:"bn",ca:"ca",cs:"cs",da:"da",de:"de",el:"el",en:"en",en_GB:"en",en_US:"en",es:"es",es_419:"es",et:"et",fa:"fa",fi:"fi",fil:"fil",fr:"fr",gu:"gu",he:"he",he_IL:"he",hi:"hi",hr:"hr",hy:"hy",hu:"hu",in:"in",id:"id",it:"it",ja:"ja",kn:"kn",ko:"ko",lt:"lt",lv:"lv",ml:"ml",mr:"mr",ms:"ms",nl:"nl",no:"no",pl:"pl",pt_BR:"pt",pt_PT:"pt",ro:"ro",ru:"ru",sk:"sk",sl:"sl",sr:"sr",sv:"sv",sw:"sw",ta:"ta",te:"te",th:"th",tr:"tr",ua:"uk",uk:"uk",vi:"vi",zh:"zh-Hans",zh_CN:"zh-Hans",zh_TW:"zh-Hant"};return Object.values(t).find(e=>e===n)||t[n]||t[n.replace("-","_")]||t[n.split("_")[0]]||t[n.split("-")[0]]||n};var C="TRANSLATOR_ACCESS_TOKEN_CACHE_KEY",y=30,N=class{constructor(){this.token="",this.authFetching=!1,this.getCacheToken().then(t=>{this.token=t})}async getCacheToken(){let t=await M.default.storage.local.get(C);return t[C]?t[C]:""}async setCacheToken(t){await M.default.storage.local.set({[C]:t})}async fetchAccessToken(){try{if(this.authFetching)return;this.authFetching=!0;let t=await w("https://edge.microsoft.com/translate/auth",{method:"GET",parse:"text"});if(t?.responseRaw?.ok===!0&&t.responseRaw?.status===200){let e=t.data||"";this.token=e,await this.setCacheToken(e)}}catch{}finally{this.authFetching=!1}}async translate(t,e="",r="",a=!0){this.token||await this.fetchAccessToken();try{if(!this.token)return t.forEach(s=>s.updateFetchStatus("error")),!1;if(t.length>y){let s=[];for(let o=0;o<t.length;o+=y){let d=t.slice(o,o+y),p=await this.translate(d,e,r);s.push(p)}return s.every(o=>o)}let i=t.map(s=>s.rawText).filter(s=>s);if(i.length<=0)return!1;t.forEach(s=>s.updateFetchStatus("fetching"));let c=L(e),l=L(r),m=await F(w(`https://api-edge.cognitive.microsofttranslator.com/translate?from=${l}&to=${c}&api-version=3.0&includeSentenceLength=true`,{parse:"json",method:"POST",body:JSON.stringify(i.map(s=>({Text:s}))),headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.token}`}}),2e4,null),h=m?.responseRaw;if(h?.status===401&&a)return await this.fetchAccessToken(),this.translate(t,e,r,!1);let u=!1;if(m&&m.data&&h?.ok===!0&&h?.status===200){let s=m?.data??null;if(s.length===i.length){u=!0;for(let o=0;o<s.length;o++){let d=t[o],p=s?.[o];p&&(d.translatedText=p.translations?.[0]?.text,d.translatedLangCode=p.translations?.[0]?.to,d.originalLangCode=p.detectedLanguage?.language,d.isTranslated=!0,d.updateFetchStatus("success"))}}return u}return u||t.forEach(s=>s.updateFetchStatus("error")),u}catch{return t.forEach(c=>c.updateFetchStatus("error")),!1}}},q=N;var k=class{constructor(t,e){let r=t.filter(a=>e.contains(a));this.rawElement=e,this.rawText=r.map(a=>a?.nodeValue?.trim()||"").join(" "),this.textNodes=r,this.translatedLangCode="",this.originalLangCode="",this.translatedText="",this.isTranslated=!1,this.observer=null,this.isIntersecting=!1,this.translateStatus="idle",this.translateContainerElement=null,this.translateInnerElement=null,this.isInline=!1,this.observeIntersection(),this.insertCustomElement()}observeIntersection(){if(!this.observer){let t=e=>{let r=e[0];this.isIntersecting=r.isIntersecting,this.isIntersecting&&window.dispatchEvent(new CustomEvent("MAXAI_PageTranslatorEvent_doTranslate"))};this.observer=new IntersectionObserver(t,{threshold:.1}),this.rawElement&&this.observer.observe(this.rawElement)}}disconnectObserver(){this.observer&&(this.observer.disconnect(),this.observer=null)}insertCustomElement(){if(this.rawElement){let t=!1,e=this.rawText.trim();e.match(/\p{Unified_Ideograph}/gu)?t=e.length<=.25*15:e.length<=15&&e.split(" ").filter(l=>l.trim()).length<=2&&(t=!0),this.isInline=t;let a=document.createElement(E),i=document.createElement(t?g:T);i.classList.add("notranslate"),a.appendChild(i),this.translateContainerElement=a,this.translateInnerElement=i;let c=this.textNodes[this.textNodes.length-1];if(this.textNodes.length===1)S(a,c);else{let l=$(c);S(a,l||c)}this.makeSureContainerHeightAuto(a.parentElement)}}makeSureContainerHeightAuto(t){if(t&&t!==document.body){let{webkitLineClamp:e}=getComputedStyle(t);if(O(e)){t.style.webkitLineClamp="unset",t.style.paddingBottom="2px";return}this.makeSureContainerHeightAuto(t.parentElement)}}updateFetchStatus(t){this.translateStatus=t,this.translateInnerElement?.removeEventListener("click",this.handleInlineElementClick),t==="fetching"&&this.renderLoadingStatus(),t==="success"&&(this.renderTranslatedText(),this.disconnectObserver()),t==="error"&&this.renderErrorStatus()}renderTranslatedText(){if(this.translatedText&&this.isTranslated&&this.translateInnerElement){let t=this.translatedText,e=/[\s\p{P}]+/gu;if(this.rawText.replace(e,"")===t.replace(e,"")&&(t=""),this.translateInnerElement.removeAttribute("title"),this.translateInnerElement.innerText=t,this.translateInnerElement.className="",!t)return;if(this.isInline)this.translateInnerElement.classList.add("maxai-trans-inline");else if(!this.translateContainerElement?.querySelector("& > br")){let a=document.createElement("br");this.translateContainerElement?.insertBefore(a,this.translateInnerElement)}}}renderLoadingStatus(){this.translateInnerElement&&(this.translateInnerElement.innerHTML=`
        <svg class="maxai-trans-inline maxai-trans-icon maxai-trans-loading" style="display: inline;" width="12" height="12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle opacity="0.25" cx="12" cy="12" r="10" stroke="currentColor" strokewidth="4"></circle>
          <path opacity="0.75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      `,this.translateInnerElement.classList.add("loading"))}renderErrorStatus(){this.translateInnerElement&&(this.translateInnerElement.title="retry",this.translateInnerElement.classList.add("retry"),this.translateInnerElement.innerHTML=`
        <svg class="maxai-trans-inline maxai-trans-icon maxai-trans-refresh" style="display: inline;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12">
          <path d="M1.705 8.005a.75.75 0 0 1 .834.656 5.5 5.5 0 0 0 9.592 2.97l-1.204-1.204a.25.25 0 0 1 .177-.427h3.646a.25.25 0 0 1 .25.25v3.646a.25.25 0 0 1-.427.177l-1.38-1.38A7.002 7.002 0 0 1 1.05 8.84a.75.75 0 0 1 .656-.834ZM8 2.5a5.487 5.487 0 0 0-4.131 1.869l1.204 1.204A.25.25 0 0 1 4.896 6H1.25A.25.25 0 0 1 1 5.75V2.104a.25.25 0 0 1 .427-.177l1.38 1.38A7.002 7.002 0 0 1 14.95 7.16a.75.75 0 0 1-1.49.178A5.5 5.5 0 0 0 8 2.5Z" fill="currentColor"></path>
        </svg>
      `,this.translateInnerElement.addEventListener("click",this.handleInlineElementClick))}handleInlineElementClick(t){t.stopPropagation(),t.preventDefault(),window.dispatchEvent(new CustomEvent("MAXAI_PageTranslatorEvent_retryTranslate"))}reset(){this.disconnectObserver(),this.rawElement.removeChild(this.translateContainerElement),this.translateStatus="idle",this.translatedText="",this.isTranslated=!1,this.isIntersecting=!1,this.translatedLangCode="",this.originalLangCode=""}},V=k;var f=class{constructor(t,e){this.mutationsObserver=null;this.textNodesSet=new Set,this.translateItemsSet=new Set,this.translator=new q,this.isEnable=!1,this.loading=!1,this.fromCode=t??"",this.toCode=e??"en",this._fetching=!1,this.onFetchingChange=()=>{},this.startEventListener()}get fetching(){return this._fetching}set fetching(t){this._fetching=t,this.onFetchingChange&&this.isEnable&&this.onFetchingChange(t)}setOnFetchingChange(t){this.onFetchingChange=t}updateFromCode(t){this.fromCode=t}updateToCode(t){this.toCode=t}toggle(t){t?this.startPageTranslator():this.hideTranslateElements()}retranslate(){this.translateItemsSet.forEach(t=>{t.translateContainerElement?.remove()}),this.translateItemsSet.clear(),this.textNodesSet.clear(),this.startPageTranslator()}findSameTranslateItem(t){let e=this.translateItemsSet;for(let r of e)if(r.rawElement===t)return r;return null}startPageTranslator(){if(this.injectStyle(),this.showTranslateElements(),!this.isEnable)return;let t=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,c=>{if(this.textNodesSet.has(c))return NodeFilter.FILTER_REJECT;let l=c.parentElement;return!(c.nodeValue||"").trim()||!l||l.closest(E)||["SCRIPT","STYLE"].includes(l.nodeName)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}),e=!1,r=[],a=null,i=()=>{B(c=>{let l=c.timeRemaining();for(let m=0;l>0;l-=performance.now()-m){m=performance.now();let h=t.nextNode();if(!h){r.length&&a&&this.newPageTranslateItem(r,a),e=!0,setTimeout(()=>{v(this.doTranslate,100).call(this)},500);return}let u=X(h);if(!u||!z(h.parentElement))continue;a||(a=u);let s=D(h),o=s?s.previousElementSibling:h.previousSibling,d=!1;o&&(d=o.nodeName==="BR"||o.nodeName==="LI"||("tagName"in o?A(o):!1)),a!==u||d?(this.newPageTranslateItem(r,a),a=u,r=[h]):r.push(h)}l<=0&&!e&&i()})};i()}newPageTranslateItem(t,e){t.forEach(i=>{this.textNodesSet.add(i)});let r=t.map(i=>i.textContent||"").join("").trim();if(j(r)||U(e))return;let a=new V(t,e);this.translateItemsSet.add(a)}async doTranslate(t=[]){if(this.fetching)return;let e=[...t];this.translateItemsSet.forEach(r=>{!r.isTranslated&&r.isIntersecting&&r.translateStatus==="idle"&&e.push(r)}),e.length>0&&(this.fetching=!0,await this.translator.translate(e,this.toCode,this.fromCode),this.fetching=!1)}async retryTranslate(){let t=[];this.translateItemsSet.forEach(e=>{!e.isTranslated&&e.isIntersecting&&e.translateStatus==="error"&&t.push(e)}),this.doTranslate(t)}startEventListener(){let t=v(this.doTranslate,500).bind(this),e=v(this.retryTranslate,500).bind(this),r={MAXAI_PageTranslatorEvent_doTranslate:()=>{t()},MAXAI_PageTranslatorEvent_retryTranslate:()=>{e()}};window.addEventListener("MAXAI_PageTranslatorEvent_doTranslate",r.MAXAI_PageTranslatorEvent_doTranslate),window.addEventListener("MAXAI_PageTranslatorEvent_retryTranslate",r.MAXAI_PageTranslatorEvent_retryTranslate),window.addEventListener("beforeunload",()=>{window.removeEventListener("MAXAI_PageTranslatorEvent_doTranslate",r.MAXAI_PageTranslatorEvent_doTranslate),window.removeEventListener("MAXAI_PageTranslatorEvent_retryTranslate",r.MAXAI_PageTranslatorEvent_retryTranslate)})}injectStyle(){let t="maxai-translate-style";if(document.getElementById(t))return;let e=document.createElement("style");e.id=t,e.innerHTML=`
      @keyframes maxai-trans-spin {
        to {transform: rotate(360deg);}
      }
      ${E}.maxai-trans-hide {
        display: none !important;
      }
      ${T} {
        display: inline;
        margin: 4px 0;
        background-image: linear-gradient(to right, rgba(148, 168, 184, 0.8) 50%, rgba(255, 255, 255, 0) 0%);
        background-position: bottom;
        background-size: 9px 2px;
        background-repeat: repeat-x;
        padding-bottom: 3px;

        visibility: visible !important;
      }
      ${g} {
        background-image: linear-gradient(to right, rgba(148, 168, 184, 0.8) 50%, rgba(255, 255, 255, 0) 0%);
        background-position: bottom;
        background-size: 9px 2px;
        background-repeat: repeat-x;
        padding-bottom: 3px;

        visibility: visible !important;
      }

      ${g}.retry,
      ${T}.retry {
        white-space: normal;
        margin: 0;
      }

      .maxai-trans-icon {
        display: inline !important;
        border: none !important;
        background: transparent !important;
        color: #9065B0 !important;
        vertical-align: middle !important;
        fill: none !important;
        stroke: none !important;
      }
      .maxai-trans-inline {
        margin-inline-start: 4px !important;        
      }
      .maxai-trans-loading {
        animation: maxai-trans-spin 1s linear infinite !important;
      }
      .maxai-trans-refresh {
        cursor: pointer;
      }
    `;let r=P();r==="tiktok.com"?e.innerHTML+=`
      body.maxai-trans-show [data-e2e="user-post-item-list"] [data-e2e="user-post-item-desc"] {
        height: auto;
      }
      `:r==="larksuite.com"?e.innerHTML+=`
      body.maxai-trans-show .catalogue-container .catalogue__list-item {
        height: auto!important;
      }
      body.maxai-trans-show .catalogue-container .catalogue__list-item ${T} {
        margin-left: 16px;
      }
      `:r.includes("youtube.com")?e.innerHTML+=`
      body.maxai-trans-show #video-title-link .ytd-rich-grid-media,
      body.maxai-trans-show #video-title,
      body.maxai-trans-show .ShortsLockupViewModelHostMetadataTitle, 
      body.maxai-trans-show a.ShortsLockupViewModelHostEndpoint,
      body.maxai-trans-show a.yt-lockup-metadata-view-model-wiz__title
      {
        max-height: none!important;
      }
      `:r.includes("notion")&&(e.innerHTML+=`
      ${T} {
        visibility: unset !important;
      }
      ${g} {
        visibility: unset !important;
      }
      `),document.head.appendChild(e)}hideTranslateElements(){this.isEnable=!1,document.body.classList.remove("maxai-trans-show"),this.translateItemsSet.forEach(t=>{t.translateContainerElement?.classList.add("maxai-trans-hide")}),this.closeMutationsObserver()}showTranslateElements(){this.isEnable=!0,document.body.classList.add("maxai-trans-show"),this.translateItemsSet.forEach(t=>{t.translateContainerElement?.classList.remove("maxai-trans-hide")}),this.startMutationsObserver()}closeMutationsObserver(){this.mutationsObserver&&(this.mutationsObserver.disconnect(),this.mutationsObserver=null)}startMutationsObserver(){this.mutationsObserver||(this.mutationsObserver=new MutationObserver(R(this.startPageTranslator,300).bind(this)),this.mutationsObserver.observe(document,{attributes:!1,childList:!0,characterData:!0,subtree:!0}))}};b([x],f.prototype,"updateFromCode",1),b([x],f.prototype,"updateToCode",1),b([x],f.prototype,"toggle",1),b([x],f.prototype,"retranslate",1);var It=new f;export{L as a,It as b};
