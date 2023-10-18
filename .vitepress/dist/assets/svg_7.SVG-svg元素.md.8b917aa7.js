import{_ as l,o as a,c as o,Q as n,k as s}from"./chunks/framework.681fc4ae.js";const q=JSON.parse('{"title":"SVG svg元素","description":"","frontmatter":{},"headers":[],"relativePath":"svg/7.SVG-svg元素.md","filePath":"svg/7.SVG-svg元素.md"}'),p={name:"svg/7.SVG-svg元素.md"},t=n(`<h1 id="svg-svg元素" tabindex="-1">SVG svg元素 <a class="header-anchor" href="#svg-svg元素" aria-label="Permalink to &quot;SVG svg元素&quot;">​</a></h1><hr><blockquote></blockquote><ul><li><a href="#svg元素视频">SVG元素视频</a></li><li><a href="#嵌套svg元素">嵌套SVG元素</a></li></ul><p>所有SVG图片的根元素都是<code>&lt;svg&gt;</code>，就像下面这样：</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">svg</span><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">xmlns</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;http://www.w3.org/2000/svg&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">xmlns:xlink</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;http://www.w3.org/1999/xlink&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">svg</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">svg</span><span style="color:#24292E;">  </span><span style="color:#6F42C1;">xmlns</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;http://www.w3.org/2000/svg&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">xmlns:xlink</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;http://www.w3.org/1999/xlink&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">svg</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>记住两个命名空间的声明，否则Firefox将不会以图片的形式渲染SVG文件,而是将其当做XML文件。</p><h2 id="svg元素视频" tabindex="-1">SVG元素视频 <a class="header-anchor" href="#svg元素视频" aria-label="Permalink to &quot;SVG元素视频&quot;">​</a></h2><p>下面是SVG元素教程的视频版：</p>`,9),e=s("iframe",{width:"560",height:"315",src:"//www.youtube.com/embed/LaprzO9omAM?list=PLL8woMHwr36F2tCFnWTbVBQAGQ6nTcXOO",frameborder:"0",allowfullscreen:""},null,-1),c=n(`<h2 id="嵌套svg元素" tabindex="-1">嵌套SVG元素 <a class="header-anchor" href="#嵌套svg元素" aria-label="Permalink to &quot;嵌套SVG元素&quot;">​</a></h2><p>SVG元素可以相互嵌套，就像下面这样：</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">svg</span><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">xmlns</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;http://www.w3.org/2000/svg&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">xmlns:xlink</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;http://www.w3.org/1999/xlink&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">svg</span><span style="color:#E1E4E8;"> &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">svg</span><span style="color:#E1E4E8;"> &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">svg</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">svg</span><span style="color:#24292E;">  </span><span style="color:#6F42C1;">xmlns</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;http://www.w3.org/2000/svg&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">xmlns:xlink</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;http://www.w3.org/1999/xlink&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">svg</span><span style="color:#24292E;"> &gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">svg</span><span style="color:#24292E;"> &gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">svg</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>嵌套SVG元素可用于将SVG图形分组在一起，并将它们作为集合进行定位。嵌套在<code>svg</code>元素内的所有形状的(x,y)坐标将相对于其外层<code>svg</code>元素的(x,y)坐标进行定位。通过移动外层的<code>svg</code>元素，你也可以移动所有嵌套的形状。</p><p>下面是一个将两个矩形嵌套在两个<code>svg</code>元素的例子。两个矩形除了颜色不同之外，x,y坐标、高度和宽度都一样。外层的<code>svg</code>元素有不同的x值。由于矩形的x位置相对于其外层的<code>svg</code>元素的x位置，所以两个矩形在不同的x坐标。</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">svg</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">xmlns</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;http://www.w3.org/2000/svg&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">xmlns:xlink</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;http://www.w3.org/1999/xlink&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">svg</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">x</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;10&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">rect</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">x</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;10&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">y</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;10&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">height</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;100&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">width</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;100&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;stroke:#ff0000; fill: #0000ff&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">svg</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">svg</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">x</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;200&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">rect</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">x</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;10&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">y</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;10&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">height</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;100&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">width</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;100&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;stroke:#009900; fill: #00cc00&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">svg</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">svg</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">svg</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">xmlns</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;http://www.w3.org/2000/svg&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">xmlns:xlink</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;http://www.w3.org/1999/xlink&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">svg</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">x</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;10&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">rect</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">x</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;10&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">y</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;10&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">height</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;100&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">width</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;100&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;stroke:#ff0000; fill: #0000ff&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">svg</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">svg</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">x</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;200&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">rect</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">x</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;10&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">y</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;10&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">height</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;100&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">width</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;100&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;stroke:#009900; fill: #00cc00&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">svg</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">svg</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>可以发现，命名空间属性只需要在根<code>svg</code>元素声明。如果嵌套的元素没有设置命名空间，将假定它们都在默认的命名空间（根<code>svg</code>元素命名空间）中。</p><p>上面代码的结果如下：</p>`,8),r=s("p",null,[s("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[s("svg",{x:"10"},[s("rect",{x:"10",y:"10",height:"100",width:"100",style:{stroke:"#ff0000",fill:"#0000ff"}})]),s("svg",{x:"200"},[s("rect",{x:"10",y:"10",height:"100",width:"100",style:{stroke:"#009900",fill:"#00cc00"}})])])],-1),E=[t,e,c,r];function y(i,g,u,F,d,h){return a(),o("div",null,E)}const w=l(p,[["render",y]]);export{q as __pageData,w as default};
