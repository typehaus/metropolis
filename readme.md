<h1 align=center>
<a href="https://typehaus.org/metropolis" title="View the Metropolis docs at typehaus.org"><img src="https://cdn.jsdelivr.net/gh/typehaus/metropolis/.github/assets/logo.png" alt="@typehaus/metropolis" align="center" title="typehaus.org/metropolis" width="500"></a>
</h1>

<div align=center>
<h5>Minimalist, modern, geometric typeface by <a href="https://github.com/chrismsimpson">Chris M. Simpson</a>. Revived as a webfont by <a href="https://github.com/typehaus"><strong><code>typehaus</code></strong></a>.</h5>
</div>
<br>

<div align=center>
<img src="https://badgen.net/npm/v/@typehaus/metropolis?icon=npm&label=&color=red&labelColor=red" alt="Latest Version">
<img src="https://badgen.net/github/last-commit/typehaus/metropolis/main?icon=github&color=123&labelColor=123&label=" alt="Last Commit">
<img src="https://badgen.net/packagephobia/install/@typehaus/metropolis?icon=packagephobia&label=&color=8cc055&labelColor=8cc055" alt="Size">
<img src="https://badgen.net/npm/types/@typehaus/metropolis?icon=typescript&color=cyan&labelColor=cyan&label=">
</div>
	
<br>

<table align=center border=0 style="border-color:transparent !important">
<tr><td>

```bash
pnpm add @typehaus/metropolis	
```

</td><td>

```bash
yarn add @typehaus/metropolis
```

</td><td>

```bash
npm i --save @typehaus/metropolis
```

</td></tr>
</table>

<br>

## Getting Started

You can just import the whole family (if you're into that sort of thing):

```js
import '@typehaus/metropolis'
```

You can also opt to use a remote CDN service, like [**unpkg.com**](https://cdn.jsdelivr.net/npm/@typehaus/metropolis@latest) or [**jsdelivr.net**](https://jsdelivr.net/npm/@typehaus/metropolis):

```js
// this should only be used in development
import 'https://unpkg.com/@typehaus/metropolis'
```

```js
// for production, import assets from their fully-resolved URL
import 'https://cdn.jsdelivr.net/npm/@typehaus/metropolis@12.0.0-next.7/100.css'
```

<br>

You can even import individual weights - which is **highly recommended**, and helps cut down on your final bundle size. Both the normal and italic style are included in each weight, and (for compatibility) both the keyword or numeric filename work just fine.

<details open><summary>100, Thin</summary>

```js
import '@typehaus/metropolis/100.css'
```
	
```js
import '@typehaus/metropolis/thin.css'
```

</details><details><summary>200, Extra·Light, X·Light</summary>


```js
import '@typehaus/metropolis/200.css'
```

```js
import '@typehaus/metropolis/xlight.css'
```

```js
import '@typehaus/metropolis/extralight.css'
```

</details><details><summary>300, Light</summary>


```js
import '@typehaus/metropolis/300.css'
```

```js
import '@typehaus/metropolis/light.css'
```

</details><details><summary>400, Book, Regular</summary>

```js
import '@typehaus/metropolis/400.css'
```

```js
import '@typehaus/metropolis/book.css'
```

```js
import '@typehaus/metropolis/regular.css'
```

</details><details><summary>500, Medium</summary>

```js
import '@typehaus/metropolis/500.css'
```

```js
import '@typehaus/metropolis/medium.css'
```

</details><details><summary>600, Semi·Bold</summary>

```js
import '@typehaus/metropolis/600.css'
```

```js
import '@typehaus/metropolis/semibold.css'
```

</details><details><summary>700, Bold</summary>

```js
import '@typehaus/metropolis/700.css'
```

```js
import '@typehaus/metropolis/bold.css'
```

</details><details><summary>800, Extra·Bold, X·Bold</summary>

```js
import '@typehaus/metropolis/800.css'
```

```js
import '@typehaus/metropolis/xbold.css'
```

```js
import '@typehaus/metropolis/extrabold.css'
```

</details><details><summary>900, Black</summary>

```js
import '@typehaus/metropolis/900.css'
```

```js
import '@typehaus/metropolis/black.css'
```

</details>

<br>

### Implement

Now you just need to add it to your actual CSS!

```css
html, body {
  font-family: 'Metropolis', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
}
```

> *The additional font families are* “emergency backups”... *that way, in the terrible (and unheard-of) event that your fonts don't load, your users won't be stuck with `Times New Roman`*.

<br><hr><br>

## Specimens

![Metropolis](https://cdn.jsdelivr.net/gh/typehaus/metropolis/docs/specimens/Metro-1.png)

![Metropolis](https://cdn.jsdelivr.net/gh/typehaus/metropolis/docs/specimens/Metro-2.png)

<br><hr><br>

## Contributing

Please refer to these contribution guidelines before proceeding with a PR:

### Submitting a Pull Request

We will only review PRs that are small and isolated and can be easily described and understood within the context of the PR rather than even needing to open it.

When saving the file for your PR close all other open tabs and leave one remaining with the added/modified glyphs visible. This makes it much easier to review PRs.

### Guidelines

Please **do**:

- Run the autospacing on your modified/created glyph before submitting as a PR
- Add relevant bubble kern to any modified/created glyph and set up as drescribed above
- Apply to all weights and both normal/italic where appropriate

Please **do not**:

- Modify any autospacing settings
- Modify any other kern bubbles
- Set manual kerns (or indeed run the kerning tool at all)
- Modify any glyphs not related to your changes

As a general rule, a small isolated commit should equal a small isolated PR. 

