import{h as i,i as c,o as e,c as t,a as s,d as l,e as d,T as u,b as n,F as _,j as h,t as m,g as f}from"./app.05f50d41.js";const p={class:"prose daisy-prose w-full max-w-xl m-auto"},g={class:"relative"},v={key:0},y=s("h4",null,[s("i",{class:"text-primary fa fa-cog fa-spin"}),f("\xA0\xA0Loading your cart")],-1),k=[y],x={key:1},L=s("h4",null,"Products in your cart",-1),w=s("a",{href:"/logout",class:"daisy-btn mt-10"},"Logout",-1),V={__name:"Page",setup(T){let o=i(null);return c(()=>{chrome.runtime.sendMessage("faikcccoaifenipeoglkklceopfnnhoj","getLocalStorage",a=>{setTimeout(()=>{o.value=a},2500)})}),(a,B)=>(e(),t("div",p,[s("div",g,[l(u,{name:"router-view",mode:"out-in"},{default:d(()=>[n(o)==null?(e(),t("div",v,k)):(e(),t("div",x,[L,(e(!0),t(_,null,h(n(o),r=>(e(),t("div",null,m(r),1))),256))]))]),_:1})]),w]))}};export{V as default};
