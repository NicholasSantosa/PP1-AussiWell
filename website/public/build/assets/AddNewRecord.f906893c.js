import{h as _,i as c,j as h,o as d,c as r,w as y,k as b,b as a,a as e,l as f,d as v,e as x,T as g,F as u,m as w,t as S,$ as k,g as T}from"./app.de0af895.js";const L={class:"daisy-modal daisy-modal-bottom sm:daisy-modal-middle"},P={class:"daisy-modal-box border-[1px] border-base-300"},D={class:"min-h-[200px] overflow-y-scroll h-[200px] border-[1px] p-4 border-base-300 rounded-l-box"},M={key:0,class:"text-center"},N=e("h4",null,[e("i",{class:"text-primary fa fa-cog fa-spin"}),T("\xA0\xA0Loading your cart")],-1),R=[N],V={key:1,class:"prose daisy-prose"},j=e("h2",{class:"!m-0"},"Products found in your cart",-1),B={class:"daisy-steps daisy-steps-vertical"},C={class:"daisy-step daisy-step-primary"},F={class:"daisy-modal-action flex justify-between"},O=e("label",{for:"modle-add-new-record",class:"daisy-btn w-1/2"},"Discard",-1),A=["disabled"],U={__name:"AddNewRecord",emits:["refreshPastShoppingRecords"],setup(E,{emit:m}){const p=_();let s=c(null),t=c(!1);h(()=>{setTimeout(()=>{try{chrome.runtime.sendMessage(p.extensionID,"getLocalStorage",i=>{i!==null&&(t.value=!0,setTimeout(()=>{s.value=i},2e3))})}catch{}},1200)});let n=()=>{k.ajax({url:"/api/add-shopping-record",method:"POST",data:{productList:s.value},success:()=>{s.value=null,t.value=!1,m("refreshPastShoppingRecords")},error:i=>{alert("Something went wrong \u{1F910}")}})};return(i,l)=>(d(),r(u,null,[y(e("input",{type:"checkbox",id:"modle-add-new-record",class:"daisy-modal-toggle","onUpdate:modelValue":l[0]||(l[0]=o=>f(t)?t.value=o:t=o)},null,512),[[b,a(t)]]),e("div",L,[e("div",P,[e("div",D,[v(g,{name:"router-view",mode:"out-in"},{default:x(()=>[a(s)==null?(d(),r("div",M,R)):(d(),r("div",V,[j,e("ul",B,[(d(!0),r(u,null,w(a(s),o=>(d(),r("li",C,S(o),1))),256))])]))]),_:1})]),e("div",F,[O,e("button",{class:"daisy-btn w-1/2 daisy-btn-success",disabled:a(s)==null,onClick:l[1]||(l[1]=(...o)=>a(n)&&a(n)(...o))},"Save record",8,A)])])])],64))}};export{U as default};