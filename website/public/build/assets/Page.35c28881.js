import{h as d,i as u,o as e,c as t,a as s,t as n,d as _,e as p,T as h,b as i,F as m,j as f,g}from"./app.6f0724f8.js";const y={class:"prose daisy-prose w-full max-w-xl m-auto"},v=["src"],x=s("a",{href:"/logout",class:"daisy-btn"},"Logout",-1),k={class:"relative mt-10"},w={key:0},L=s("h4",null,[s("i",{class:"text-primary fa fa-cog fa-spin"}),g("\xA0\xA0Loading your cart")],-1),T=[L],b={key:1},j=s("h3",null,"Products in your cart",-1),B={class:"daisy-steps daisy-steps-vertical"},N={class:"daisy-step daisy-step-secondary"},H={__name:"Page",props:{user:Object},setup(c){const r=c;let a=d(null);return u(()=>{chrome.runtime.sendMessage("faikcccoaifenipeoglkklceopfnnhoj","getLocalStorage",o=>{setTimeout(()=>{a.value=o},2500)})}),(o,V)=>(e(),t("div",y,[s("h1",null,"Hi, "+n(r.user.name),1),s("img",{src:"/images/hand-plant.svg",class:"w-full max-w-[100px]",alt:"Hand plant"},null,8,v),x,s("div",k,[_(h,{name:"router-view",mode:"out-in"},{default:p(()=>[i(a)==null?(e(),t("div",w,T)):(e(),t("div",b,[j,s("ul",B,[(e(!0),t(m,null,f(i(a),l=>(e(),t("li",N,n(l),1))),256))])]))]),_:1})])]))}};export{H as default};
