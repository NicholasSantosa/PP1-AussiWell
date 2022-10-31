import{h as y,i as u,j as b,o as d,c as r,w as f,k as v,b as a,a as e,l as x,d as g,e as w,T as k,F as m,m as S,t as T,$ as D,g as L}from"./app.8c8536d4.js";const P={class:"daisy-modal daisy-modal-bottom sm:daisy-modal-middle"},M={class:"daisy-modal-box border-[1px] border-base-300"},N={class:"min-h-[200px] overflow-y-scroll h-[200px] border-[1px] p-4 border-base-300 rounded-l-box"},R={key:0,class:"text-center"},V=e("h4",null,[e("i",{class:"text-primary fa fa-cog fa-spin"}),L("\xA0\xA0Loading your cart")],-1),j=[V],B={key:1,class:"prose daisy-prose"},C=e("h2",{class:"!m-0"},"Products found in your cart",-1),F={class:"daisy-steps daisy-steps-vertical"},E={class:"daisy-step daisy-step-primary"},O={class:"daisy-modal-action flex justify-between"},A=e("label",{for:"modle-add-new-record",class:"daisy-btn w-1/2"},"Discard",-1),I=["disabled"],z={__name:"AddNewRecord",emits:["refreshPastShoppingRecords"],setup(U,{expose:p,emit:_}){const h=y();let s=u(null),t=u(!1);b(()=>{c()});let n=()=>{D.ajax({url:"/api/add-shopping-record",method:"POST",data:{productList:s.value},success:()=>{s.value=null,t.value=!1,_("refreshPastShoppingRecords")},error:i=>{alert("Something went wrong \u{1F910}")}})},c=()=>{setTimeout(()=>{try{chrome.runtime.sendMessage(h.extensionID,"getLocalStorage",i=>{i!==null&&(t.value=!0,setTimeout(()=>{s.value=i},2e3))})}catch{}},1200)};return p({checkForExtensionData:c}),(i,l)=>(d(),r(m,null,[f(e("input",{type:"checkbox",id:"modle-add-new-record",class:"daisy-modal-toggle","onUpdate:modelValue":l[0]||(l[0]=o=>x(t)?t.value=o:t=o)},null,512),[[v,a(t)]]),e("div",P,[e("div",M,[e("div",N,[g(k,{name:"router-view",mode:"out-in"},{default:w(()=>[a(s)==null?(d(),r("div",R,j)):(d(),r("div",B,[C,e("ul",F,[(d(!0),r(m,null,S(a(s),o=>(d(),r("li",E,T(o),1))),256))])]))]),_:1})]),e("div",O,[A,e("button",{class:"daisy-btn w-1/2 daisy-btn-success",disabled:a(s)==null,onClick:l[1]||(l[1]=(...o)=>a(n)&&a(n)(...o))},"Save record",8,I)])])])],64))}};export{z as default};
