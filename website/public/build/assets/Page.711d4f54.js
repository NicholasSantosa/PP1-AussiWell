import{i as f,q as m,j as b,r as g,o as r,c as n,d as y,e as v,a as s,F as k,m as x,b as d,t as i,g as p}from"./app.98e128ca.js";const C={class:"prose daisy-prose max-w-full text-center"},L=s("h1",null,"Hello!",-1),O=p("Back"),w=s("h2",null,"Emissions from this purchase",-1),B={class:"daisy-steps daisy-steps-vertical"},E={class:"daisy-step daisy-step-primary"},F={class:"text-error"},N=s("h2",null,"# Carbon footprint",-1),j=s("p",null,"The combined carbon footprint for this purchase",-1),M={class:"daisy-stats shadow"},T={class:"daisy-stat"},V=s("div",{class:"daisy-stat-figure text-error"},[s("i",{class:"fa fa-smog"})],-1),S=s("div",{class:"daisy-stat-title"},"Total CO2",-1),q={class:"daisy-stat-value text-error"},A=s("div",{class:"daisy-stat-desc"},"kg CO2 /kg",-1),H={__name:"Page",props:{record:Object},setup(_){const h=_;let o=f([]),u=m(()=>{let t=0;return o.value.forEach(a=>{t+=a.footprint}),t}),l={"dry pasta":1.1,"chicken breast":4.1,beef:32,lamb:28,apple:.15,banana:.14,potatoes:.24,milk:2.2,"almond milk":.47,"blue cheese":14,bread:1,cabbage:.15,eggs:2.2};return b(()=>{let t=JSON.parse(h.record.product_list);Object.keys(l).forEach(a=>{for(let e=0;e<t.length&&t.length!=o.value.length;e++)a.includes(t[e].toLowerCase())||t[e].toLowerCase().includes(a)?o.value.push({name:t[e],footprint:l[a]}):o.value.push({name:t[e],footprint:Math.floor(Math.random()*(1e3-100)+100)/100})})}),(t,a)=>{const e=g("Link");return r(),n("div",C,[L,y(e,{href:"/dashboard",class:"daisy-btn daisy-btn-accent"},{default:v(()=>[O]),_:1}),s("div",null,[w,s("ul",B,[(r(!0),n(k,null,x(d(o),c=>(r(),n("li",E,[s("span",null,[p(i(c.name)+" is ",1),s("span",F,i(c.footprint)+" kg CO2 /kg",1)])]))),256))]),N,j,s("div",M,[s("div",T,[V,S,s("div",q,i(d(u)),1),A])])])])}}};export{H as default};