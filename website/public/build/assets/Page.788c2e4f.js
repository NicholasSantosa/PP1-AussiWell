import{h as _,i as p,$ as h,o,c as a,a as s,t as f,d as c,b as e,n as x,e as g,T as y,g as d,F as k,l as w,m as v}from"./app.4249d8c7.js";import b from"./AddNewRecord.726d5f24.js";import R from"./PastRecord.cdbefc37.js";const S={class:"w-full max-w-2xl m-auto"},T={class:"prose daisy-prose text-center max-w-full"},B={class:"!m-0"},j=s("a",{href:"/logout",class:"daisy-link daisy-link-primary inline-block mt-5"},"Logout",-1),C={class:"prose daisy-prose mt-14 text-center max-w-full"},E=s("h2",null,[s("i",{class:"text-primary fa fa-clock-rotate-left"}),d(" Your Shopping history")],-1),L=["disabled"],N=d(" Refresh "),P={class:"mt-8 w-full"},V={key:0,class:"text-center prose daisy-prose max-w-full mt-8"},$=s("h1",null,[s("i",{class:"text-accent fa fa-atom fa-spin"})],-1),F=[$],z={key:1,class:"prose daisy-prose max-w-full mt-14"},D=["src"],G=s("h4",{class:"text-center text-neutral mt-8"},"Looks empty in here",-1),H={key:2,class:"flex flex-wrap justify-center"},q={__name:"Page",props:{user:Object},setup(u){const m=u;let t=_(null);p(()=>{l()});let l=()=>{h.ajax({url:"/api/get-all-shopping-records",method:"GET",beforeSend:()=>{t.value=null},success:r=>{setTimeout(()=>{t.value=r},1e3)},error:()=>{alert("Something went wrong \u{1F910}")}})};return(r,i)=>(o(),a("div",S,[s("div",T,[s("h1",B,"Hi, "+f(m.user.name),1),j]),c(b,{onRefreshPastShoppingRecords:e(l)},null,8,["onRefreshPastShoppingRecords"]),s("div",C,[E,s("button",{class:"daisy-btn daisy-btn-accent gap-2",onClick:i[0]||(i[0]=(...n)=>e(l)&&e(l)(...n)),disabled:e(t)==null},[s("i",{class:x(["fa fa-yin-yang",{"fa-spin":e(t)==null}])},null,2),N],8,L)]),s("div",P,[c(y,{name:"router-view",mode:"out-in"},{default:g(()=>[e(t)==null?(o(),a("div",V,F)):e(t).length==0?(o(),a("div",z,[s("img",{src:"/images/alien-taken.svg",class:"w-full max-w-[200px] block mx-auto",alt:"Empty cart"},null,8,D),G])):(o(),a("div",H,[(o(!0),a(k,null,w(e(t),n=>(o(),v(R,{record:n},null,8,["record"]))),256))]))]),_:1})])]))}};export{q as default};
