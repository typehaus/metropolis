import{_ as e,c as t,o as a,a as s}from"./app.b4005086.js";var r="/metropolis/assets/02_DimensionsThin.82ccc208.png",o="/metropolis/assets/03_DimensionsRegular.622582c3.png",n="/metropolis/assets/04_DimensionsBlack.4c0d9ef4.png",i="/metropolis/assets/05_AlignmentZones.2d7412ff.png",l="/metropolis/assets/00_Workflow.aec7e83a.png",p="/metropolis/assets/01_InfoWindow.89d62bbf.png",d="/metropolis/assets/06_HTLetterspacerUI.921c131f.png",c="/metropolis/assets/07_BubbleKern.f5abbc8a.png",h="/metropolis/assets/08_Cursify.26e12739.png",u="/metropolis/assets/09_Slant.3348a728.png";const T='{"title":"Table of Contents","description":"","frontmatter":{},"headers":[{"level":2,"title":"Table of Contents","slug":"table-of-contents"},{"level":2,"title":"Getting Started","slug":"getting-started"},{"level":3,"title":"Install","slug":"install"},{"level":3,"title":"Import","slug":"import"},{"level":3,"title":"Implement","slug":"implement"},{"level":2,"title":"Specimens","slug":"specimens"},{"level":2,"title":"Metrics","slug":"metrics"},{"level":3,"title":"Italics","slug":"italics"},{"level":3,"title":"Dimensions","slug":"dimensions"},{"level":3,"title":"Alignment Zones","slug":"alignment-zones"},{"level":2,"title":"Workflow","slug":"workflow"},{"level":3,"title":"HT Letterspacer","slug":"ht-letterspacer"},{"level":3,"title":"BubbleKern","slug":"bubblekern"},{"level":3,"title":"Cursify","slug":"cursify"},{"level":2,"title":"Release Process","slug":"release-process"},{"level":3,"title":"Export Formats","slug":"export-formats"},{"level":2,"title":"Future Plans","slug":"future-plans"},{"level":3,"title":"Small Caps","slug":"small-caps"},{"level":3,"title":"Rounded","slug":"rounded"},{"level":3,"title":"Slab / Serif","slug":"slab-serif"},{"level":3,"title":"Monospaced","slug":"monospaced"},{"level":3,"title":"Micro / Text / Display","slug":"micro-text-display"},{"level":3,"title":"Alternatives to Glyphs","slug":"alternatives-to-glyphs"},{"level":2,"title":"Contributing","slug":"contributing"},{"level":3,"title":"Submitting a Pull Request","slug":"submitting-a-pull-request"},{"level":3,"title":"Guidelines","slug":"guidelines"}],"relativePath":"index.md"}',g={},m=s(`<h1 align="center"><a href="https://typehaus.org/metropolis" title="View the Metropolis docs at typehaus.org"><img src="https://cdn.jsdelivr.net/gh/typehaus/metropolis/.github/assets/logo.png" alt="@typehaus/metropolis" align="center" title="typehaus.org/metropolis" width="500"></a></h1><div align="center"><h5>Minimalist, modern, geometric typeface by <a href="https://github.com/chrismsimpson">Chris M. Simpson</a>. Revived as a webfont by <a href="https://github.com/typehaus"><strong><code>typehaus</code></strong></a>.</h5></div><br><div align="center"><img src="https://badgen.net/npm/v/@typehaus/metropolis?icon=npm&amp;label=&amp;color=red&amp;labelColor=red" alt="Latest Version"><img src="https://badgen.net/github/last-commit/typehaus/metropolis/main?icon=github&amp;color=123&amp;labelColor=123&amp;label=" alt="Last Commit"><img src="https://badgen.net/packagephobia/install/@typehaus/metropolis?icon=packagephobia&amp;label=&amp;color=8cc055&amp;labelColor=8cc055" alt="Size"><img src="https://badgen.net/npm/types/@typehaus/metropolis?icon=typescript&amp;color=cyan&amp;labelColor=cyan&amp;label="></div><br><table align="center" border="0" style="border-color:transparent !important;"><tr><td><div class="language-bash"><pre><code><span class="token function">pnpm</span> <span class="token function">add</span> @typehaus/metropolis	
</code></pre></div></td><td><div class="language-bash"><pre><code><span class="token function">yarn</span> <span class="token function">add</span> @typehaus/metropolis
</code></pre></div></td><td><div class="language-bash"><pre><code><span class="token function">npm</span> i --save @typehaus/metropolis
</code></pre></div></td></tr></table><br><h2 id="table-of-contents" tabindex="-1"><a href="#table-of-contents">Table of Contents</a> <a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a></h2><ol><li><a href="#getting-started">Getting Started</a><ul><li><a href="#install">Install</a></li><li><a href="#import">Import</a></li><li><a href="#implement">Implement</a></li></ul></li><li><a href="#specimens">Specimens</a></li><li><a href="#metrics">Metrics</a><ul><li><a href="#italics">Italics</a></li><li><a href="#dimensions">Dimensions</a></li><li><a href="#alignment-zones">Alignment Zones</a></li></ul></li><li><a href="#workflow">Workflow</a><ul><li><a href="#ht-letterspacer">HT Letterspacer</a><ul><li><a href="#parameters">Parameters</a></li><li><a href="#autospacing">Autospacing</a></li><li><a href="#user-interface">User Interface</a></li></ul></li><li><a href="#bubblekern">BubbleKern</a></li><li><a href="#cursify">Cursify</a></li></ul></li><li><a href="#release-process">Release Process</a></li><li><a href="#export-formats">Export Formats</a></li><li><a href="#future-plans">Future Plans</a></li><li><a href="#alternatives-to-glyphs">Alternatives to Glyphs</a></li><li><a href="#contributing">Contributing</a></li></ol><p><br><hr><br></p><h2 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h2><p>Metropolis has just been published by <strong><code>typehaus</code></strong> to the NPM registry! While it&#39;s still in the experimental stage, this makes it easier than ever to include it in your projects. <a href="#install">Just add <code>@typehaus/metropolis</code> to your project dependencies!</a></p><br><h3 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-hidden="true">#</a></h3><div class="language-bash"><pre><code><span class="token function">pnpm</span> <span class="token function">add</span> @typehaus/metropolis
</code></pre></div><blockquote><p>If you don&#39;t have <strong>pnpm</strong>, <a href="https://pnpm.io/motivation" target="_blank" rel="noopener noreferrer">click here to find out why you should.</a></p></blockquote><br><h3 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h3><p>Best practice for CSS-based webfonts is to import them in the same place you import your stylesheets and theme files, to ensure they aren&#39;t missed by your pipeline&#39;s asset optimization steps.</p><p>It&#39;s always recommended to consult the official documentation of whichever framework you&#39;re building with, but heres</p><ul><li><a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">Next.js</a>, prepend to <code>_app.tsx</code> or <code>_app.jsx</code></li><li><a href="https://kit.svelte.dev" target="_blank" rel="noopener noreferrer">SvelteKit</a>, prepend to <code>__layout.svelte</code> file.</li><li><a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">Vue</a> / <a href="https://nuxtjs.org" target="_blank" rel="noopener noreferrer">Nuxt</a> / <a href="https://github.com/antfu/vitesse" target="_blank" rel="noopener noreferrer">Vitesse</a>, add to your default layout file</li></ul><br><p>You can just import the whole family (if you&#39;re into that sort of thing):</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;@typehaus/metropolis&#39;</span>
</code></pre></div><p>You can also opt to use a remote CDN service, like <a href="https://cdn.jsdelivr.net/npm/@typehaus/metropolis@latest" target="_blank" rel="noopener noreferrer"><strong>unpkg.com</strong></a> or <a href="https://jsdelivr.net/npm/@typehaus/metropolis" target="_blank" rel="noopener noreferrer"><strong>jsdelivr.net</strong></a>:</p><div class="language-js"><pre><code><span class="token comment">// this should only be used in development:</span>
<span class="token keyword">import</span> <span class="token string">&#39;https://unpkg.com/@typehaus/metropolis&#39;</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// for production, only import assets from their fully-resolved URL, like this</span>
<span class="token keyword">import</span> <span class="token string">&#39;https://cdn.jsdelivr.net/npm/@typehaus/metropolis@12.0.0-next.7/100.css&#39;</span>
</code></pre></div><br><p>You can also import individual weights (recommended). Both the normal and italic style are included in each weight, and (for compatibility) both the keyword or numeric filename work just fine.</p><details open><summary>100, Thin</summary><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;@typehaus/metropolis/100.css&#39;</span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;@typehaus/metropolis/thin.css&#39;</span>
</code></pre></div></details><details><summary>200, Extra\xB7Light, X\xB7Light</summary><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;@typehaus/metropolis/200.css&#39;</span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;@typehaus/metropolis/xlight.css&#39;</span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;@typehaus/metropolis/extralight.css&#39;</span>
</code></pre></div></details><details><summary>300, Light</summary><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;@typehaus/metropolis/300.css&#39;</span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;@typehaus/metropolis/light.css&#39;</span>
</code></pre></div></details><details><summary>400, Book, Regular</summary><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;@typehaus/metropolis/400.css&#39;</span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;@typehaus/metropolis/book.css&#39;</span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;@typehaus/metropolis/regular.css&#39;</span>
</code></pre></div></details><details><summary>500, Medium</summary><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;@typehaus/metropolis/500.css&#39;</span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;@typehaus/metropolis/medium.css&#39;</span>
</code></pre></div></details><details><summary>600, Semi\xB7Bold</summary><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;@typehaus/metropolis/600.css&#39;</span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;@typehaus/metropolis/semibold.css&#39;</span>
</code></pre></div></details><details><summary>700, Bold</summary><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;@typehaus/metropolis/700.css&#39;</span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;@typehaus/metropolis/bold.css&#39;</span>
</code></pre></div></details><details><summary>800, Extra\xB7Bold, X\xB7Bold</summary><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;@typehaus/metropolis/800.css&#39;</span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;@typehaus/metropolis/xbold.css&#39;</span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;@typehaus/metropolis/extrabold.css&#39;</span>
</code></pre></div></details><details><summary>900, Black</summary><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;@typehaus/metropolis/900.css&#39;</span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;@typehaus/metropolis/black.css&#39;</span>
</code></pre></div></details><br><h3 id="implement" tabindex="-1">Implement <a class="header-anchor" href="#implement" aria-hidden="true">#</a></h3><p>Now you just need to add it to your actual CSS!</p><div class="language-css"><pre><code><span class="token selector">html, body</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;Metropolis&#39;</span><span class="token punctuation">,</span> -apple-system<span class="token punctuation">,</span> BlinkMacSystemFont<span class="token punctuation">,</span> <span class="token string">&#39;Segoe UI&#39;</span><span class="token punctuation">,</span> Roboto<span class="token punctuation">,</span> <span class="token string">&#39;Open Sans&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Helvetica Neue&#39;</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p><em>The additional font families are</em> \u201Cemergency backups\u201D... <em>that way, in the terrible (and unheard-of) event that your fonts don&#39;t load, your users won&#39;t be stuck with <code>Times New Roman</code></em>.</p></blockquote><p><br><hr><br></p><h2 id="specimens" tabindex="-1">Specimens <a class="header-anchor" href="#specimens" aria-hidden="true">#</a></h2><p><img src="https://cdn.jsdelivr.net/gh/typehaus/metropolis/docs/specimens/Metro-1.png" alt=""></p><p><img src="https://cdn.jsdelivr.net/gh/typehaus/metropolis/docs/specimens/Metro-2.png" alt=""></p><p><br><hr><br><br></p><h2 id="metrics" tabindex="-1">Metrics <a class="header-anchor" href="#metrics" aria-hidden="true">#</a></h2><p>Given an <strong>em square of 1000</strong>, the metrics for Metropolis are as follows:</p><table><thead><tr><th style="text-align:right;">Metric</th><th style="text-align:center;">Value</th></tr></thead><tbody><tr><td style="text-align:right;">Ascender</td><td style="text-align:center;"><code>795</code></td></tr><tr><td style="text-align:right;">Cap Height</td><td style="text-align:center;"><code>687</code></td></tr><tr><td style="text-align:right;">X-Height</td><td style="text-align:center;"><code>517</code></td></tr><tr><td style="text-align:right;">Descender</td><td style="text-align:center;"><code>-205</code></td></tr></tbody></table><h3 id="italics" tabindex="-1">Italics <a class="header-anchor" href="#italics" aria-hidden="true">#</a></h3><p>The italics angle is universally <strong><code>11.75\xB0</code></strong>.</p><h3 id="dimensions" tabindex="-1">Dimensions <a class="header-anchor" href="#dimensions" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">Light</th><th style="text-align:center;">Regular</th><th style="text-align:center;">Black</th></tr></thead><tbody><tr><td style="text-align:center;"><img src="`+r+'" alt=""></td><td style="text-align:center;"><img src="'+o+'" alt=""></td><td style="text-align:center;"><img src="'+n+'" alt=""></td></tr></tbody></table><blockquote><p>Also known as <code>stroke width</code>.</p></blockquote><blockquote><p><strong>Example</strong>: If drawing something like an <code>x</code>, I likely will start with an elongated vertical bar with the same width as the vertical stem in <code>n</code>. After rotating it the appropriate width to create the letter <code>x</code> of the desired width, a lot of adjustment takes place. The final result cannot be reasonably estimated something akin to <code>stroke width y at a degree of z</code>. This is essentially how all diagonals have been drawn to date. Start with an initial shape based off these dimensions and then infinite adjustment.</p></blockquote><h3 id="alignment-zones" tabindex="-1">Alignment Zones <a class="header-anchor" href="#alignment-zones" aria-hidden="true">#</a></h3><p>Also across all current <strong><code>6</code></strong> masters, the alignment zones are +/- a value of <strong>12</strong>. This is a good value for this style of sans typeface for an em square of <strong><code>1000</code></strong>, so I&#39;ll often use a value of <strong><code>12</code></strong>, not just for Metropolis.</p><p>There likely should be many more formal values, but they don&#39;t exist. Pretty much all glyphs have been improvised beginning with the pen tool in Glyphs. I didn&#39;t draw this freehand as a prior step, becuase I wanted to get straight into the project in Glyphs. Maybe that&#39;s a &#39;wrong&#39; way to do type design, but it works for me. That will explain why some outlikes are a bit primitive. For example, I&#39;m still not really happy with the lowercase <code>a</code> overall, but I am reluctant to change it to something already familiar over something original. This is an original work, not a copy, after all.</p><p>Armed with all the above metrics, you should be able draw a great many number of outlines/glyphs. There are <strong><code>327</code></strong> already there by my count. I say outlines, I have intentionally left out spacing until now.</p><p><img src="'+i+'" alt=""></p><p><br><hr><br></p><h2 id="workflow" tabindex="-1">Workflow <a class="header-anchor" href="#workflow" aria-hidden="true">#</a></h2><p>Metropolis is built with an entirely <a href="https://glyphsapp.com" target="_blank" rel="noopener noreferrer"><strong>Glyphs.app</strong></a> based workflow. I can&#39;t recommend Glyphs enough, though it does come with a price tag.</p><p>The two plugins that are essential to this workflow are <a href="https://huertatipografica.github.io/HTLetterspacer" target="_blank" rel="noopener noreferrer"><strong>HT Letterspacer</strong></a> and <a href="http://glyphsextensions.com/bubblekern" target="_blank" rel="noopener noreferrer"><strong>BubbleKern</strong></a>. More on both those below.</p><p><img src="'+l+'" alt=""></p><p><br><hr><br></p><h3 id="ht-letterspacer" tabindex="-1">HT Letterspacer <a class="header-anchor" href="#ht-letterspacer" aria-hidden="true">#</a></h3><blockquote><p><strong>Checkout the <a href="https://huertatipografica.github.io/HTLetterspacer" target="_blank" rel="noopener noreferrer">HT Letterspacer website</a> for a much more thorough explanation.</strong></p></blockquote><p><strong>HT Letterspacer</strong> is a tool that automatically calculates the appropriate left and right bearing on any glyph, essentially doing the spacing part of the design automatically.</p><p>In order for this to work, the plugin requires a few parameters, which can be found in the custom parameters in the masters tab of the font info window, namely <code>paramArea</code>, <code>paramDepth</code>, <code>paramOver</code>.</p><p><img src="'+p+`" alt=""></p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:right;">Metric</th><th style="text-align:center;">Thin</th><th style="text-align:center;">Regular</th><th style="text-align:center;">Black</th></tr></thead><tbody><tr><td style="text-align:right;"><strong><code>paramArea</code></strong></td><td style="text-align:center;"><code>350</code></td><td style="text-align:center;"><code>310</code></td><td style="text-align:center;"><code>370</code></td></tr><tr><td style="text-align:right;"><strong><code>paramDepth</code></strong></td><td style="text-align:center;"><code>5</code></td><td style="text-align:center;"><code>7</code></td><td style="text-align:center;"><code>16</code></td></tr><tr><td style="text-align:right;"><strong><code>paramOver</code></strong></td><td style="text-align:center;"><code>2</code></td><td style="text-align:center;"><code>9</code></td><td style="text-align:center;"><code>22</code></td></tr></tbody></table><p>I roughly understand what these numbers do, but I&#39;m not going to explain how I&#39;ve arrived at these specific values. A <strong>lot</strong> of fiddling, adjusting, and trial and error.</p><h4 id="autospacing" tabindex="-1">Autospacing <a class="header-anchor" href="#autospacing" aria-hidden="true">#</a></h4><p>In addition to this, each <code>*.glyphs</code> file needs a corresponding autospace file.</p><p>For instance, with Metropolis Regular:</p><pre><code>./Metropolis.glyphs
./Metropolis_Black_autospace.py
./Metropolis_Regular_autospace.py
./Metropolis_Thin_autospace.py
</code></pre><p>And Metropolis Italic:</p><pre><code>./Metropolis-Italic.glyphs
./Metropolis-Italic_Black_autospace.py
./Metropolis-Italic_Regular_autospace.py
./Metropolis-Italic_Thin_autospace.py
</code></pre><blockquote><p><strong>Note</strong>: You will actually need a relatively new version of HT Letterspacer as I actually submitted a PR allowing masters/weights to have individually set values. (As far as I understand) the param values define overall weight (and/or rhythm) of the typeface, whereas the autospace file defines ratios between things like uppercase, small caps, lowercase, numbers etc.</p></blockquote><h4 id="user-interface" tabindex="-1">User Interface <a class="header-anchor" href="#user-interface" aria-hidden="true">#</a></h4><p>Once both the plugin and these settings are correctly set up, you can invoke the tool either with or without the User Interface (UI). The UI allows you to manually override settings (which is not what we want), so I choose to always invoke it without the UI. Once invoked, you can easily repeat the operation with <kbd>Option</kbd> + <kbd>Command</kbd> + <kbd>R</kbd>.</p><p><img src="`+d+'" alt=""></p><p>When using this tool/making spacing adjustments, it&#39;s key to run it many times. You will see the glyphs coalesce into their eventual spacing, but it may actually take multiple runs of the tool for it to reach it&#39;s optimal point.</p><p><br><hr><br></p><h3 id="bubblekern" tabindex="-1">BubbleKern <a class="header-anchor" href="#bubblekern" aria-hidden="true">#</a></h3><p>After drawing and spacing our glyphs, we need to define approriate kerning information. This would be a mammoth job to do manually each release, so instead I&#39;m using <a href="http://glyphsextensions.com/bubblekern/" target="_blank" rel="noopener noreferrer"><strong>BubbleKern</strong></a>. If you think back to days of old physical type, imagine the &#39;bubbles&#39; being the shaped physical block the glyph is mounted on. The block itself is contoured outside of the perimeter of the glyph to allow glyphs tightly align.</p><p>Basically for each outline layer, there needs to be a corresponding &#39;bubble&#39; layer (see right hand side <code>Layers</code> pane).</p><p>It is crucial the width of the corresponding layers are the same (e.g. the <code>Thin</code> layer and it&#39;s immediately following <code>bubble</code> layer) for this to work correctly.</p><p>Once defined/drawn for every glyph, BubbleKern is then run. I have prepared <code>Metropolis BubbleKern Pairs.txt</code> for this. <strong>Any kern pairs must go in this file. BubbleKern must only be run using this file.</strong></p><p>As a guide, I am using <code>56</code>, <code>53</code>, and <code>50</code> as offset values when drawing the kern bubbles for <code>Thin</code>, <code>Regular</code>, and <code>Black</code>, respectively. As a rule, I try to honor the values already arrived at by <a href="#ht-letterspacer"><strong>HT Letterspacer</strong></a>.</p><p><img src="'+c+'" alt=""></p><p><br><hr><br></p><h3 id="cursify" tabindex="-1">Cursify <a class="header-anchor" href="#cursify" aria-hidden="true">#</a></h3><p>I&#39;m largely using Glyph&#39;s &#39;Cursify&#39; tool to do the italics. This yields better results that simply slanting the glyph shapes from the regular/normal glyph, though from memory I was doing something tricky like slanting the vertical bars and cursifying everything else.</p><p>Will update if/when I can recreate how I did this. Again, a lot of just eyeballing and trail and error.</p><table><thead><tr><th style="text-align:center;">Cursify</th><th style="text-align:center;">Slant</th></tr></thead><tbody><tr><td style="text-align:center;"><img src="'+h+'" alt=""></td><td style="text-align:center;"><img src="'+u+'" alt=""></td></tr></tbody></table><p><br><hr><br></p><h2 id="release-process" tabindex="-1">Release Process <a class="header-anchor" href="#release-process" aria-hidden="true">#</a></h2><ol><li>Remove all kerning</li><li>Draw</li><li>Space</li><li>Draw BubbleKern bubbles</li><li>Re-Run BubbleKern (use <code>./src/Metropolis BubbleKern Pairs.txt</code>)</li><li>Export</li><li>Commit</li><li>Create release tag</li></ol><blockquote><p><strong>Note</strong>: Hoping to arrive at optimal BubbleKern outlines soon to negate the need to ever re-do these.</p></blockquote><h3 id="export-formats" tabindex="-1">Export Formats <a class="header-anchor" href="#export-formats" aria-hidden="true">#</a></h3><p>Once I&#39;ve run BubbleKern, I create exports for OpenType, TrueType, UFO, EOT, WOFF &amp; WOFF2.</p><hr><h2 id="future-plans" tabindex="-1">Future Plans <a class="header-anchor" href="#future-plans" aria-hidden="true">#</a></h2><h3 id="small-caps" tabindex="-1">Small Caps <a class="header-anchor" href="#small-caps" aria-hidden="true">#</a></h3><p>There are some additional metrics that likely need to be defined before this can go ahead. There is an open PR for some caps, but I haven&#39;t reviewed and I&#39;m not sure if spacing and/or kerning has been appropriately set.</p><h3 id="rounded" tabindex="-1">Rounded <a class="header-anchor" href="#rounded" aria-hidden="true">#</a></h3><p>A rounded version. Adjusting strokes an addition 12 points at cap ends.</p><h3 id="slab-serif" tabindex="-1">Slab / Serif <a class="header-anchor" href="#slab-serif" aria-hidden="true">#</a></h3><p>This one has had the least thought, but might be cool. Also could serve as some preliminary work for a possible monospaced version.</p><h3 id="monospaced" tabindex="-1">Monospaced <a class="header-anchor" href="#monospaced" aria-hidden="true">#</a></h3><p>As above</p><h3 id="micro-text-display" tabindex="-1">Micro / Text / Display <a class="header-anchor" href="#micro-text-display" aria-hidden="true">#</a></h3><p>This possibly would require an entire redrawing effort. The current metrics <em>kind of</em> work, but separating for different display sizes would likely need quite a rethink of the core metrics (and therefore spacing too). I don&#39;t really have any plans to do this. It&#39;s more of a &quot;if I was doing this all over again...&quot; type thing.</p><h3 id="alternatives-to-glyphs" tabindex="-1">Alternatives to Glyphs <a class="header-anchor" href="#alternatives-to-glyphs" aria-hidden="true">#</a></h3><p>At present, the best bet is the UFO export. However, if you want to request glyph, you must raise an issue and add your modified file as an attachment to the issue, rather than a pull request. I will only allow PRs to the glyphs file.</p><p>This will in turn mean someone (likely myself) will need to translate this into an appropriate commit/PR.</p><hr><h2 id="contributing" tabindex="-1">Contributing <a class="header-anchor" href="#contributing" aria-hidden="true">#</a></h2><p>Please refer to these contribution guidelines before proceeding with a PR:</p><h3 id="submitting-a-pull-request" tabindex="-1">Submitting a Pull Request <a class="header-anchor" href="#submitting-a-pull-request" aria-hidden="true">#</a></h3><p>We will only review PRs that are small and isolated and can be easily described and understood within the context of the PR rather than even needing to open it.</p><p>When saving the file for your PR close all other open tabs and leave one remaining with the added/modified glyphs visible. This makes it much easier to review PRs.</p><h3 id="guidelines" tabindex="-1">Guidelines <a class="header-anchor" href="#guidelines" aria-hidden="true">#</a></h3><p>Please <strong>do</strong>:</p><ul><li>Run the autospacing on your modified/created glyph before submitting as a PR</li><li>Add relevant bubble kern to any modified/created glyph and set up as drescribed above</li><li>Apply to all weights and both normal/italic where appropriate</li></ul><p>Please <strong>do not</strong>:</p><ul><li>Modify any autospacing settings</li><li>Modify any other kern bubbles</li><li>Set manual kerns (or indeed run the kerning tool at all)</li><li>Modify any glyphs not related to your changes</li></ul><p>As a general rule, a small isolated commit should equal a small isolated PR.</p>',133),y=[m];function b(f,k,v,w,x,_){return a(),t("div",null,y)}var j=e(g,[["render",b]]);export{T as __pageData,j as default};