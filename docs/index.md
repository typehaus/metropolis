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

## [Table of Contents](#table-of-contents)

1. [Getting Started](#getting-started)
   - [Install](#install)
   - [Import](#import)
   - [Implement](#implement)
2. [Specimens](#specimens)
3. [Metrics](#metrics)
   - [Italics](#italics)
   - [Dimensions](#dimensions)
   - [Alignment Zones](#alignment-zones)
4. [Workflow](#workflow)
   - [HT Letterspacer](#ht-letterspacer)
     - [Parameters](#parameters)
     - [Autospacing](#autospacing)
     - [User Interface](#user-interface)
   - [BubbleKern](#bubblekern)
   - [Cursify](#cursify)
5. [Release Process](#release-process)
6. [Export Formats](#export-formats)
7. [Future Plans](#future-plans)
8. [Alternatives to Glyphs](#alternatives-to-glyphs)
9. [Contributing](#contributing)

<br><hr><br>

## Getting Started

Metropolis has just been published by **`typehaus`** to the NPM registry! While it's still in the experimental stage, this makes it easier than ever to include it in your projects. [Just add `@typehaus/metropolis` to your project dependencies!](#install)

<br>

### Install

```bash
pnpm add @typehaus/metropolis
```

> If you don't have **pnpm**, [click here to find out why you should.](https://pnpm.io/motivation)

<br>

### Import

Best practice for CSS-based webfonts is to import them in the same place you import your stylesheets and theme files, to ensure they aren't missed by your pipeline's asset optimization steps.  

It's always recommended to consult the official documentation of whichever framework you're building with, but heres

- [Next.js](https://nextjs.org), prepend to `_app.tsx` or `_app.jsx` 
- [SvelteKit](https://kit.svelte.dev),  prepend to `__layout.svelte` file. 
- [Vue](https://vuejs.org) / [Nuxt](https://nuxtjs.org) / [Vitesse](https://github.com/antfu/vitesse), add to your default layout file

<br>

You can just import the whole family (if you're into that sort of thing):

```js
import '@typehaus/metropolis'
```

You can also opt to use a remote CDN service, like [**unpkg.com**](https://cdn.jsdelivr.net/npm/@typehaus/metropolis@latest) or [**jsdelivr.net**](https://jsdelivr.net/npm/@typehaus/metropolis):

```js
// this should only be used in development:
import 'https://unpkg.com/@typehaus/metropolis'
```

```js
// for production, only import assets from their fully-resolved URL, like this
import 'https://cdn.jsdelivr.net/npm/@typehaus/metropolis@12.0.0-next.7/100.css'
```

<br>

You can also import individual weights (recommended). Both the normal and italic style are included in each weight, and (for compatibility) both the keyword or numeric filename work just fine.

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

<br><hr><br><br>

## Metrics

Given an **em square of 1000**, the metrics for Metropolis are as follows:

|     Metric | Value  |
| ---------: | :---:  |
|   Ascender | `795`  |
| Cap Height | `687`  |
|   X-Height | `517`  |
|  Descender | `-205` |

### Italics

The italics angle is universally **`11.75°`**.

### Dimensions 

|               Light              |               Regular               |               Black               |
| :------------------------------: | :---------------------------------: | :-------------------------------: |
| ![](./img/02_DimensionsThin.png) | ![](./img/03_DimensionsRegular.png) | ![](./img/04_DimensionsBlack.png) |

> Also known as `stroke width`.

> **Example**: If drawing something like an `x`, I likely will start with an elongated vertical bar with the same width as the vertical stem in `n`. After rotating it the appropriate width to create the letter `x` of the desired width, a lot of adjustment takes place. The final result cannot be reasonably estimated something akin to `stroke width y at a degree of z`. This is essentially how all diagonals have been drawn to date. Start with an initial shape based off these dimensions and then infinite adjustment.

### Alignment Zones

Also across all current **`6`** masters, the alignment zones are +/- a value of **12**. This is a good value for this style of sans typeface for an em square of **`1000`**, so I'll often use a value of **`12`**, not just for Metropolis.

There likely should be many more formal values, but they don't exist. Pretty much all glyphs have been improvised beginning with the pen tool in Glyphs. I didn't draw this freehand as a prior step, becuase I wanted to get straight into the project in Glyphs. Maybe that's a 'wrong' way to do type design, but it works for me. That will explain why some outlikes are a bit primitive. For example, I'm still not really happy with the lowercase `a` overall, but I am reluctant to change it to something already familiar over something original. This is an original work, not a copy, after all.

Armed with all the above metrics, you should be able draw a great many number of outlines/glyphs. There are **`327`** already there by my count. I say outlines, I have intentionally left out spacing until now.

![Alignment Zones](./img/05_AlignmentZones.png)

<br><hr><br>

## Workflow

Metropolis is built with an entirely [**Glyphs.app**](https://glyphsapp.com) based workflow. I can't recommend Glyphs enough, though it does come with a price tag.

The two plugins that are essential to this workflow are [**HT Letterspacer**](https://huertatipografica.github.io/HTLetterspacer) and [**BubbleKern**](http://glyphsextensions.com/bubblekern). More on both those below.

![Metropolis Workflow in Glyphs.app](./img/00_Workflow.png)

<br><hr><br>

### HT Letterspacer

> **Checkout the [HT Letterspacer website](https://huertatipografica.github.io/HTLetterspacer) for a much more thorough explanation.**

**HT Letterspacer** is a tool that automatically calculates the appropriate left and right bearing on any glyph, essentially doing the spacing part of the design automatically.

In order for this to work, the plugin requires a few parameters, which can be found in the custom parameters in the masters tab of the font info window, namely `paramArea`, `paramDepth`, `paramOver`.

![HT Letterspacer Info Window](./img/01_InfoWindow.png)

#### Parameters

|           Metric |  Thin  | Regular | Black |
| ---------------: | :----: | :-----: | :---: |
|  **`paramArea`** |  `350` |  `310`  | `370` |
| **`paramDepth`** |   `5`  |   `7`   |  `16` |
|  **`paramOver`** |   `2`  |   `9`   |  `22` |

I roughly understand what these numbers do, but I'm not going to explain how I've arrived at these specific values. A **lot** of fiddling, adjusting, and trial and error.

#### Autospacing

In addition to this, each `*.glyphs` file needs a corresponding autospace file.

For instance, with Metropolis Regular:

	./Metropolis.glyphs
	./Metropolis_Black_autospace.py
	./Metropolis_Regular_autospace.py
	./Metropolis_Thin_autospace.py

And Metropolis Italic:

	./Metropolis-Italic.glyphs
	./Metropolis-Italic_Black_autospace.py
	./Metropolis-Italic_Regular_autospace.py
	./Metropolis-Italic_Thin_autospace.py


> **Note**: You will actually need a relatively new version of HT Letterspacer as I actually submitted a PR allowing masters/weights to have individually set values. (As far as I understand) the param values define overall weight (and/or rhythm) of the typeface, whereas the autospace file defines ratios between things like uppercase, small caps, lowercase, numbers etc.

#### User Interface

Once both the plugin and these settings are correctly set up, you can invoke the tool either with or without the User Interface (UI). The UI allows you to manually override settings (which is not what we want), so I choose to always invoke it without the UI. Once invoked, you can easily repeat the operation with <kbd>Option</kbd> + <kbd>Command</kbd> + <kbd>R</kbd>.

![HT Letterspacer User Interface](./img/06_HTLetterspacerUI.png)

When using this tool/making spacing adjustments, it's key to run it many times. You will see the glyphs coalesce into their eventual spacing, but it may actually take multiple runs of the tool for it to reach it's optimal point.

<br><hr><br>

### BubbleKern

After drawing and spacing our glyphs, we need to define approriate kerning information. This would be a mammoth job to do manually each release, so instead I'm using [**BubbleKern**](http://glyphsextensions.com/bubblekern/). If you think back to days of old physical type, imagine the 'bubbles' being the shaped physical block the glyph is mounted on. The block itself is contoured outside of the perimeter of the glyph to allow glyphs tightly align.

Basically for each outline layer, there needs to be a corresponding 'bubble' layer (see right hand side `Layers` pane).

It is crucial the width of the corresponding layers are the same (e.g. the `Thin` layer and it's immediately following `bubble` layer) for this to work correctly.

Once defined/drawn for every glyph, BubbleKern is then run. I have prepared `Metropolis BubbleKern Pairs.txt` for this. **Any kern pairs must go in this file. BubbleKern must only be run using this file.**

As a guide, I am using `56`, `53`, and `50` as offset values when drawing the kern bubbles for `Thin`, `Regular`, and `Black`, respectively. As a rule, I try to honor the values already arrived at by [**HT Letterspacer**](#ht-letterspacer).

![Glyphs Extension: BubbleKern](./img/07_BubbleKern.png)

<br><hr><br>

### Cursify

I'm largely using Glyph's 'Cursify' tool to do the italics. This yields better results that simply slanting the glyph shapes from the regular/normal glyph, though from memory I was doing something tricky like slanting the vertical bars and cursifying everything else.

Will update if/when I can recreate how I did this. Again, a lot of just eyeballing and trail and error.

|             Cursify              |             Slant            |
| :------------------------------: | :--------------------------: |
| ![Cursify](./img/08_Cursify.png) | ![Slant](./img/09_Slant.png) |

<br><hr><br>

## Release Process

1. Remove all kerning
2. Draw
3. Space
4. Draw BubbleKern bubbles 
5. Re-Run BubbleKern (use `./src/Metropolis BubbleKern Pairs.txt`)
6. Export 
7. Commit 
8. Create release tag

> **Note**: Hoping to arrive at optimal BubbleKern outlines soon to negate the need to ever re-do these.

### Export Formats

Once I've run BubbleKern, I create exports for OpenType, TrueType, UFO, EOT, WOFF & WOFF2.

---  

## Future Plans

### Small Caps

There are some additional metrics that likely need to be defined before this can go ahead. There is an open PR for some caps, but I haven't reviewed and I'm not sure if spacing and/or kerning has been appropriately set.

### Rounded

A rounded version. Adjusting strokes an addition 12 points at cap ends.

### Slab / Serif

This one has had the least thought, but might be cool. Also could serve as some preliminary work for a possible monospaced version.

### Monospaced

As above

### Micro / Text / Display

This possibly would require an entire redrawing effort. The current metrics *kind of* work, but separating for different display sizes would likely need quite a rethink of the core metrics (and therefore spacing too). I don't really have any plans to do this. It's more of a "if I was doing this all over again..." type thing.

### Alternatives to Glyphs

At present, the best bet is the UFO export. However, if you want to request glyph, you must raise an issue and add your modified file as an attachment to the issue, rather than a pull request. I will only allow PRs to the glyphs file.

This will in turn mean someone (likely myself) will need to translate this into an appropriate commit/PR.

---  

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


