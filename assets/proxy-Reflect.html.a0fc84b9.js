import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as p,c as e,a as n,b as o,e as s,d as c,r as l}from"./app.12e1e5a4.js";var i="/assets/proxy-handler.3e38884b.png",u="/assets/Reflect.1e440ccc.png";const r={},k=s('<h1 id="proxy-reflect" tabindex="-1"><a class="header-anchor" href="#proxy-reflect" aria-hidden="true">#</a> Proxy-Reflect</h1><h2 id="proxy" tabindex="-1"><a class="header-anchor" href="#proxy" aria-hidden="true">#</a> proxy</h2><p>\u5728ES6\u4E2D\uFF0C\u65B0\u589E\u4E86\u4E00\u4E2AProxy\u7C7B,\u5982\u679C\u6211\u4EEC\u5E0C\u671B\u76D1\u542C\u4E00\u4E2A\u5BF9\u8C61\u7684\u76F8\u5173\u64CD\u4F5C\uFF0C\u90A3\u4E48\u6211\u4EEC\u53EF\u4EE5\u5148\u521B\u5EFA\u4E00\u4E2A\u4EE3\u7406\u5BF9\u8C61</p><p>\u4E4B\u540E\u5BF9\u8BE5\u5BF9\u8C61\u7684\u6240\u6709\u64CD\u4F5C\uFF0C\u90FD\u901A\u8FC7\u4EE3\u7406\u5BF9\u8C61\u6765\u5B8C\u6210\uFF0C\u4EE3\u7406\u5BF9\u8C61\u53EF\u4EE5\u76D1\u542C\u6211\u4EEC\u60F3\u8981\u5BF9\u539F\u5BF9\u8C61\u8FDB\u884C\u54EA\u4E9B\u64CD\u4F5C</p><p>\u9996\u5148\uFF0Cnew Proxy\u5BF9\u8C61\uFF0C\u5E76\u4E14\u4F20\u5165\u9700\u8981\u4FA6\u542C\u7684\u5BF9\u8C61\u4EE5\u53CA\u4E00\u4E2A\u5904\u7406\u5BF9\u8C61\uFF0C\u79F0\u4E4B\u4E3Ahandler</p><p>const p = new Proxy(target, handler)</p><p>\u5176\u6B21\uFF0C\u4E4B\u540E\u7684\u64CD\u4F5C\u90FD\u662F\u76F4\u63A5\u5BF9Proxy\u7684\u64CD\u4F5C\uFF0C\u800C\u4E0D\u662F\u539F\u6709\u7684\u5BF9\u8C61\uFF0C\u5728handler\u91CC\u9762\u8FDB\u884C\u4FA6\u542C</p><p>\u5728handler\u4E2D\u6DFB\u52A0\u5BF9\u5E94\u7684\u6355\u6349\u5668\uFF08Trap\uFF09:</p><p>set\u548Cget\u5206\u522B\u5BF9\u5E94\u7684\u662F\u51FD\u6570\u7C7B\u578B\uFF1B</p><p>set\u51FD\u6570\u6709\u56DB\u4E2A\u53C2\u6570\uFF1A</p><ul><li><p>target\uFF1A\u76EE\u6807\u5BF9\u8C61\uFF08\u4FA6\u542C\u7684\u5BF9\u8C61\uFF09\uFF1B</p></li><li><p>property\uFF1A\u5C06\u88AB\u8BBE\u7F6E\u7684\u5C5E\u6027key\uFF1B</p></li><li><p>value\uFF1A\u65B0\u5C5E\u6027\u503C\uFF1B</p></li><li><p>receiver\uFF1A\u8C03\u7528\u7684\u4EE3\u7406\u5BF9\u8C61\uFF1B</p></li></ul><p>get\u51FD\u6570\u6709\u4E09\u4E2A\u53C2\u6570\uFF1A</p><ul><li><p>target\uFF1A\u76EE\u6807\u5BF9\u8C61\uFF08\u4FA6\u542C\u7684\u5BF9\u8C61\uFF09\uFF1B</p></li><li><p>property\uFF1A\u88AB\u83B7\u53D6\u7684\u5C5E\u6027key\uFF1B</p></li><li><p>receiver\uFF1A\u8C03\u7528\u7684\u4EE3\u7406\u5BF9\u8C61\uFF1B</p></li></ul><p><b>proxy\u6355\u83B7\u5668</b></p><p><img src="'+i+`" alt="proxy" loading="lazy"></p><p><b>Proxy\u7684construct\u548Capply</b></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> fooProxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>foo<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">apply</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> thisArg<span class="token punctuation">,</span> otherArgs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u51FD\u6570\u7684apply\u4FA6\u542C&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">target</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>thisArg<span class="token punctuation">,</span> otherArgs<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">construct</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> argArray<span class="token punctuation">,</span> newTarget</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> argArray<span class="token punctuation">,</span> newTarget<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">target</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>s
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reflect" tabindex="-1"><a class="header-anchor" href="#reflect" aria-hidden="true">#</a> Reflect</h2><p><b>Reflect\u4F5C\u7528</b></p><p>\u5B83\u4E3B\u8981\u63D0\u4F9B\u4E86\u5F88\u591A\u64CD\u4F5CJavaScript\u5BF9\u8C61\u7684\u65B9\u6CD5\uFF0C\u6709\u70B9\u50CFObject\u4E2D\u64CD\u4F5C\u5BF9\u8C61\u7684\u65B9\u6CD5\uFF1B</p><blockquote><p>\u5728\u65E9\u671F\u7684ECMA\u89C4\u8303\u4E2D\u6CA1\u6709\u8003\u8651\u5230\u8FD9\u79CD\u5BF9 \u5BF9\u8C61\u672C\u8EAB \u7684\u64CD\u4F5C\u5982\u4F55\u8BBE\u8BA1\u4F1A\u66F4\u52A0\u89C4\u8303\uFF0C\u6240\u4EE5\u5C06\u8FD9\u4E9BAPI\u653E\u5230\u4E86Object\u4E0A\u9762\uFF0C\u4F46\u662FObject\u4F5C\u4E3A\u4E00\u4E2A\u6784\u9020\u51FD\u6570\uFF0C\u8FD9\u4E9B\u64CD\u4F5C\u5B9E\u9645\u4E0A\u653E\u5230\u5B83\u8EAB\u4E0A\u5E76\u4E0D\u5408\u9002\uFF0C\u53E6\u5916\u8FD8\u5305\u542B\u4E00\u4E9B\u7C7B\u4F3C\u4E8E in\u3001delete\u64CD\u4F5C\u7B26\uFF0C\u8BA9JS\u770B\u8D77\u6765\u662F\u4F1A\u6709\u4E00\u4E9B\u5947\u602A\u7684\uFF0C\u6240\u4EE5\u5728ES6\u4E2D\u65B0\u589E\u4E86Reflect\uFF0C\u8BA9\u6211\u4EEC\u8FD9\u4E9B\u64CD\u4F5C\u90FD\u96C6\u4E2D\u5230\u4E86Reflect\u5BF9\u8C61\u4E0A\uFF1B\u53E6\u5916\u5728\u4F7F\u7528Proxy\u65F6\uFF0C\u53EF\u4EE5\u505A\u5230\u4E0D\u64CD\u4F5C\u539F\u5BF9\u8C61\uFF1B</p></blockquote><ol><li>\u4EE3\u7406\u5BF9\u8C61\u7684\u76EE\u7684\uFF1A \u4E0D\u7528\u76F4\u63A5\u64CD\u4F5C\u539F\u5BF9\u8C61</li><li>Reflect.set\u8FD4\u56DEBoolean\u503C\uFF0C\u53EF\u4EE5\u5224\u65AD\u672C\u6B21\u64CD\u4F5C\u662F\u5426\u6210\u529F</li><li>receiver\u5C31\u662F\u5916\u5C42Proxy\u5BF9\u8C61\uFF0CRefelect.set/get\u6700\u540E\u4E00\u4E2A\u53C2\u6570\uFF0C\u53EF\u4EE5\u51B3\u5B9A\u5BF9\u8C61\u8BBF\u95EE\u5668setter/getter\u7684this\u6307\u5411</li></ol>`,22),d={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/Comparing_Reflect_and_Object_methods",target:"_blank",rel:"noopener noreferrer"},v=c("Object\u548CProxy\u7684API\u533A\u522B"),m=s('<p><b>Reflect\u7684\u5E38\u89C1\u65B9\u6CD5</b></p><p><img src="'+u+`" alt="Reflect" loading="lazy"></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> objProxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">has</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">deleteProperty</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b>Receiver\u4F5C\u7528</b></p><p>\u4F7F\u7528getter\u3001setter\u7684\u65F6\u5019\u6709\u4E00\u4E2Areceiver\u7684\u53C2\u6570</p><p>\u5982\u679C\u6211\u4EEC\u7684\u6E90\u5BF9\u8C61\uFF08obj\uFF09\u6709setter\u3001getter\u7684\u8BBF\u95EE\u5668\u5C5E\u6027\uFF0C\u90A3\u4E48\u53EF\u4EE5\u901A\u8FC7receiver\u6765\u6539\u53D8\u91CC\u9762\u7684this</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> objProxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">has</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> receiver</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">deleteProperty</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b>Reflect\u7684construct</b></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token keyword">const</span> stu <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">construct</span><span class="token punctuation">(</span>Student<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;why&#39;</span><span class="token punctuation">,</span> <span class="token number">28</span><span class="token punctuation">]</span><span class="token punctuation">,</span> Animal<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stu<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Animal</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function b(f,y){const a=l("ExternalLinkIcon");return p(),e("div",null,[k,n("p",null,[n("a",d,[v,o(a)])]),m])}var w=t(r,[["render",b],["__file","proxy-Reflect.html.vue"]]);export{w as default};
