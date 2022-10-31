import{h as y,i as u,j as f,o as i,c as r,w as b,k as x,b as a,a as e,l as v,d as g,e as w,T as k,F as m,m as S,t as D,$ as T,g as L}from"./app.98e128ca.js";const N={class:"daisy-modal daisy-modal-bottom sm:daisy-modal-middle"},P={class:"daisy-modal-box border-[1px] border-base-300"},B={class:"min-h-[200px] overflow-y-scroll h-[200px] border-[1px] p-4 border-base-300 rounded-l-box"},M={key:0,class:"text-center"},R=e("h4",null,[e("i",{class:"text-primary fa fa-cog fa-spin"}),L("\xA0\xA0Loading your cart")],-1),V=[R],j={key:1,class:"prose daisy-prose"},C=e("h2",{class:"!m-0"},"Products found in your cart",-1),E={class:"daisy-steps daisy-steps-vertical"},F={class:"daisy-step daisy-step-primary"},O={class:"daisy-modal-action flex justify-between"},A=e("label",{for:"modle-add-new-record",class:"daisy-btn w-1/2"},"Discard",-1),I=["disabled"],z={__name:"AddNewRecord",emits:["refreshPastShoppingRecords"],setup(U,{expose:p,emit:_}){const h=y();let s=u(null),o=u(!1);f(()=>{c()});let n=()=>{T.ajax({url:"/api/add-shopping-record",method:"POST",data:{productList:s.value},success:()=>{s.value=null,o.value=!1,_("refreshPastShoppingRecords")},error:d=>{alert("Something went wrong \u{1F910}")}})},c=()=>{setTimeout(()=>{chrome.runtime.sendMessage(h.extensionID,"getLocalStorage",d=>{typeof d<"u"&&d.length>0&&(o.value=!0,setTimeout(()=>{s.value=d},2e3)),chrome.runtime.lastError&&console.log("No products found in extension DB")})},1200)};return p({checkForExtensionData:c}),(d,l)=>(i(),r(m,null,[b(e("input",{type:"checkbox",id:"modle-add-new-record",class:"daisy-modal-toggle","onUpdate:modelValue":l[0]||(l[0]=t=>v(o)?o.value=t:o=t)},null,512),[[x,a(o)]]),e("div",N,[e("div",P,[e("div",B,[g(k,{name:"router-view",mode:"out-in"},{default:w(()=>[a(s)==null?(i(),r("div",M,V)):(i(),r("div",j,[C,e("ul",E,[(i(!0),r(m,null,S(a(s),t=>(i(),r("li",F,D(t),1))),256))])]))]),_:1})]),e("div",O,[A,e("button",{class:"daisy-btn w-1/2 daisy-btn-success",disabled:a(s)==null,onClick:l[1]||(l[1]=(...t)=>a(n)&&a(n)(...t))},"Save record",8,I)])])])],64))}};export{z as default};