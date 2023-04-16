import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Brian Pennington',
  description: "Brian Pennington's personal website: engineering daybook, resume, interesting stuff",
  lang: 'en-US',
  lastUpdated: true,
  outDir: './../dist',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: [2, 4],
    nav: [
      // { text: "Home", link: "/" },
      // { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: {
      // '/projects/': projectsSideBar(),
      // '/entries/': entriesSidebar(),
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/bdpennington',
      },
    ],

    // editLink: {
    //   pattern: 'https://github.com/bdpennington:path',
    //   text: 'Edit this page on GitLab',
    // },

    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Brian Pennington`,
    },
  },
});
