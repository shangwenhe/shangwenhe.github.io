import{d as p,h as g,j as c,V as u,o as l,c as h,e as y,b as f,w as i,l as r,a as _,H as b,s,a1 as v,a2 as A,a3 as w,a4 as P,a5 as C,a6 as E,a7 as D,a8 as I,a9 as R,aa as M,u as x,y as L,ab as T,ac as V,ad as O,ae as k}from"./chunks/framework.681fc4ae.js";import{t as d}from"./chunks/theme.080d892e.js";const N=["id","host","repo","repoid","category","categoryid","mapping","term","strict","reactionsenabled","emitmetadata","inputposition","theme","lang","loading"],B=p({__name:"Giscus",props:{id:{},host:{},repo:{},repoId:{},category:{},categoryId:{},mapping:{},term:{},theme:{},strict:{},reactionsEnabled:{},emitMetadata:{},inputPosition:{},lang:{},loading:{}},setup(t){const a=g(!1);return c(()=>{a.value=!0,u(()=>import("./chunks/giscus-2a044aea.497f0bd4.js"),[])}),(e,n)=>a.value?(l(),h("giscus-widget",{key:0,id:e.id,host:e.host,repo:e.repo,repoid:e.repoId,category:e.category,categoryid:e.categoryId,mapping:e.mapping,term:e.term,strict:e.strict,reactionsenabled:e.reactionsEnabled,emitmetadata:e.emitMetadata,inputposition:e.inputPosition,theme:e.theme,lang:e.lang,loading:e.loading},null,8,N)):y("",!0)}});const j={__name:"my-layout",setup(t){const{Layout:a}=d;return(e,n)=>(l(),f(r(a),null,{"aside-outline-after":i(()=>[_(" My custom sidebar bottom content ")]),"doc-after":i(()=>[b(r(B),{id:"comments",repo:"shangwenhe/shangwenhe.github.io",repoId:"MDEwOlJlcG9zaXRvcnk0MDgxNTQyMA==",category:"Comments",categoryId:"DIC_kwDOAm7LPM4CZRBn",mapping:"url",strict:"0",reactionsEnabled:"0",emitMetadata:"1",inputPosition:"bottom",theme:"light",lang:"zh-CN",loading:"lazy",crossorigin:"anonymous",term:"Welcome to @giscus/vue component!"})]),_:1}))}},S={...d,Layout:j};function m(t){if(t.extends){const a=m(t.extends);return{...a,...t,async enhanceApp(e){a.enhanceApp&&await a.enhanceApp(e),t.enhanceApp&&await t.enhanceApp(e)}}}return t}const o=m(S),z=p({name:"VitePressApp",setup(){const{site:t}=x();return c(()=>{L(()=>{document.documentElement.lang=t.value.lang,document.documentElement.dir=t.value.dir})}),T(),V(),O(),o.setup&&o.setup(),()=>k(o.Layout)}});async function F(){const t=$(),a=G();a.provide(A,t);const e=w(t.route);return a.provide(P,e),a.component("Content",C),a.component("ClientOnly",E),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return e.frontmatter.value}},$params:{get(){return e.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:a,router:t,siteData:D}),{app:a,router:t,data:e}}function G(){return I(z)}function $(){let t=s,a;return R(e=>{let n=M(e);return n?(t&&(a=n),(t||a===n)&&(n=n.replace(/\.js$/,".lean.js")),s&&(t=!1),u(()=>import(n),[])):null},o.NotFound)}s&&F().then(({app:t,router:a,data:e})=>{a.go().then(()=>{v(a.route,e.site),t.mount("#app")})});export{F as createApp};
