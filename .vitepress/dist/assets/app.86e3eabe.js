import{d as p,h as g,j as c,V as u,o as l,c as h,e as f,b as y,w as i,l as r,H as _,s,a1 as v,a2 as A,a3 as w,a4 as P,a5 as b,a6 as C,a7 as E,a8 as D,a9 as I,aa as R,u as L,y as M,ab as x,ac as O,ad as T,ae as V}from"./chunks/framework.681fc4ae.js";import{t as d}from"./chunks/theme.29460b02.js";const k=["id","host","repo","repoid","category","categoryid","mapping","term","strict","reactionsenabled","emitmetadata","inputposition","theme","lang","loading"],B=p({__name:"Giscus",props:{id:{},host:{},repo:{},repoId:{},category:{},categoryId:{},mapping:{},term:{},theme:{},strict:{},reactionsEnabled:{},emitMetadata:{},inputPosition:{},lang:{},loading:{}},setup(t){const a=g(!1);return c(()=>{a.value=!0,u(()=>import("./chunks/giscus-2a044aea.497f0bd4.js"),[])}),(e,n)=>a.value?(l(),h("giscus-widget",{key:0,id:e.id,host:e.host,repo:e.repo,repoid:e.repoId,category:e.category,categoryid:e.categoryId,mapping:e.mapping,term:e.term,strict:e.strict,reactionsenabled:e.reactionsEnabled,emitmetadata:e.emitMetadata,inputposition:e.inputPosition,theme:e.theme,lang:e.lang,loading:e.loading},null,8,k)):f("",!0)}});const N={__name:"my-layout",setup(t){const{Layout:a}=d;return(e,n)=>(l(),y(r(a),null,{"aside-outline-after":i(()=>[]),"doc-after":i(()=>[_(r(B),{id:"comments",repo:"shangwenhe/shangwenhe.github.io",repoId:"MDEwOlJlcG9zaXRvcnk0MDgxNTQyMA==",category:"Comments",categoryId:"DIC_kwDOAm7LPM4CZRBn",mapping:"url",strict:"1",reactionsEnabled:"0",emitMetadata:"1",inputPosition:"bottom",theme:"light",lang:"zh-CN",loading:"lazy",crossorigin:"anonymous",term:"Welcome to @giscus/vue component!"})]),_:1}))}},j={...d,Layout:N};function m(t){if(t.extends){const a=m(t.extends);return{...a,...t,async enhanceApp(e){a.enhanceApp&&await a.enhanceApp(e),t.enhanceApp&&await t.enhanceApp(e)}}}return t}const o=m(j),S=p({name:"VitePressApp",setup(){const{site:t}=L();return c(()=>{M(()=>{document.documentElement.lang=t.value.lang,document.documentElement.dir=t.value.dir})}),x(),O(),T(),o.setup&&o.setup(),()=>V(o.Layout)}});async function z(){const t=G(),a=F();a.provide(A,t);const e=w(t.route);return a.provide(P,e),a.component("Content",b),a.component("ClientOnly",C),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return e.frontmatter.value}},$params:{get(){return e.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:a,router:t,siteData:E}),{app:a,router:t,data:e}}function F(){return D(S)}function G(){let t=s,a;return I(e=>{let n=R(e);return n?(t&&(a=n),(t||a===n)&&(n=n.replace(/\.js$/,".lean.js")),s&&(t=!1),u(()=>import(n),[])):null},o.NotFound)}s&&z().then(({app:t,router:a,data:e})=>{a.go().then(()=>{v(a.route,e.site),t.mount("#app")})});export{z as createApp};