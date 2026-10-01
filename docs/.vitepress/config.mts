import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Maudica Wiki',
  description: 'Welcome to the Audica Modding Wiki! Here you will find all things Audica.',
  appearance: 'dark',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Maudica', link: 'https://maudica.com' },
      { text: 'Audica Modding Discord', link: 'https://discord.gg/cakQUt5' },
    ],

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/rorekk/maudica-wiki/edit/master/docs/:path',
      text: 'Edit this page on GitHub',
    },
  }
})
