import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'typehaus/metropolis',
  base: '/metropolis',
  themeConfig: {
    logo: '/favicon.svg',
    head: [
      '<link rel="shortcut icon" type="image/svg+xml" href="./favicon.svg" />',
    ],
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
