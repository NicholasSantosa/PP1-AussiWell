import{h as n,i as _,o as d,c as r,w as m,j as h,b as a,a as s,k as y,d as f,e as b,T as v,F as c,l as x,t as w,$ as g,g as k}from"./app.4249d8c7.js";const S={class:"daisy-modal daisy-modal-bottom sm:daisy-modal-middle"},T={class:"daisy-modal-box border-[1px] border-base-300"},P={class:"min-h-[200px] overflow-y-scroll h-[200px] border-[1px] p-4 border-base-300 rounded-l-box"},D={key:0,class:"text-center"},L=s("h4",null,[s("i",{class:"text-primary fa fa-cog fa-spin"}),k("\xA0\xA0Loading your cart")],-1),M=[L],N={key:1,class:"prose daisy-prose"},R=s("h2",{class:"!m-0"},"Products found in your cart",-1),V={class:"daisy-steps daisy-steps-vertical"},j={class:"daisy-step daisy-step-primary"},B={class:"daisy-modal-action flex justify-between"},C=s("label",{for:"modle-add-new-record",class:"daisy-btn w-1/2"},"Discard",-1),F=["disabled"],E={__name:"AddNewRecord",emits:["refreshPastShoppingRecords"],setup(O,{emit:u}){let e=n(null),o=n(!1);_(()=>{Math.floor(Math.random()*11)%2==0&&(o.value=!0,setTimeout(()=>{e.value=["Toothpaste","Deodrant","Water"]},2e3))});let i=()=>{g.ajax({url:"/api/add-shopping-record",method:"POST",data:{productList:e.value},success:()=>{e.value=null,o.value=!1,u("refreshPastShoppingRecords")},error:p=>{alert("Something went wrong \u{1F910}")}})};return(p,l)=>(d(),r(c,null,[m(s("input",{type:"checkbox",id:"modle-add-new-record",class:"daisy-modal-toggle","onUpdate:modelValue":l[0]||(l[0]=t=>y(o)?o.value=t:o=t)},null,512),[[h,a(o)]]),s("div",S,[s("div",T,[s("div",P,[f(v,{name:"router-view",mode:"out-in"},{default:b(()=>[a(e)==null?(d(),r("div",D,M)):(d(),r("div",N,[R,s("ul",V,[(d(!0),r(c,null,x(a(e),t=>(d(),r("li",j,w(t),1))),256))])]))]),_:1})]),s("div",B,[C,s("button",{class:"daisy-btn w-1/2 daisy-btn-success",disabled:a(e)==null,onClick:l[1]||(l[1]=(...t)=>a(i)&&a(i)(...t))},"Save record",8,F)])])])],64))}};export{E as default};
