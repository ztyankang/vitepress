import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "陆地神仙",
  description: "vue3Vitepress",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '例子', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: '文件',
        items: [
          { text: '例子一', link: '/markdown-examples' },
          { text: '例子二', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
