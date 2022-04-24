import type { DefaultTheme, HeadConfig } from 'vitepress';
import { defineConfig } from 'vitepress';

const head: HeadConfig[] = [
  [
    'link', {
      'rel': 'prefetch',
      'as': 'style',
      'type': 'text/css;charset=utf-8',
      'href': 'https://cdn.jsdelivr.net/npm/@typehaus/metropolis/index.css',
      'crossorigin': 'anonymous',
    }
  ],
  [
    'link', {
      'rel': 'prefetch',
      'as': 'module',
      'type': 'application/javascript;charset=utf-8',
      'href': 'https://cdn.jsdelivr.net/npm/windicss-runtime-dom',
      'crossorigin': 'anonymous',
    }
  ],
  [
    'link',
    {
      'rel': 'prefetch',
      'as': 'icon',
      'type': 'image/svg+xml;charset=utf-8',
      'href': '/favicon.svg',
    }
  ],
  [
    'link',
    {
      'rel': 'icon',
      'type': 'image/svg+xml;charset=utf-8',
      'href': '/favicon.svg',
    }
  ],
  [
    'link',
    {
      'rel': 'stylesheet',
      'type': 'text/css;charset=utf-8',
      'href': 'https://cdn.jsdelivr.net/npm/@typehaus/metropolis/index.css',
      'crossorigin': 'anonymous',
    }
  ],
  [
    'script', {
      'type': 'module',
      'src': 'https://cdn.jsdelivr.net/npm/windicss-runtime-dom',
      'crossorigin': 'anonymous',
    }
  ],
  [
    'link',
    {
      'rel': 'mask-icon',
      'type': 'image/svg+xml;charset=utf-8',
      'href': '/favicon.svg',
      'color': '#112233',
    }
  ],
  [
    'meta',
    {
      'name': 'theme-color',
      'content': '#112233',
      'value': '#112233',
    }
  ],
];

const nav: DefaultTheme.NavItem[] = [
  {
    text: 'Downloads',
    target: '_blank',
    rel: 'noopener',
    ariaLabel: 'Download Fonts from GitHub Repository',
    link: 'https://github.com/typehaus/metropolis/tree/main/dist'
  },
  {
    text: 'Discussions',
    target: '_blank',
    rel: 'noopener',
    ariaLabel: 'GitHub Discussions',
    link: 'https://github.com/typehaus/metropolis/discussions'
  }
];

export default defineConfig({
  lang: 'en-US',
  title: 'typehaus/metropolis',
  base: '/',
  head: head,
  themeConfig: {
    nav: nav,
    logo: '/favicon.svg',
    repo: 'typehaus/metropolis',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Edit on GitHub',
    lastUpdated: 'Updated on',
    prevLinks: true,
    nextLinks: true,
  }
})
