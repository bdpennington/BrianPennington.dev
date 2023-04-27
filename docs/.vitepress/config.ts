import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Brian Pennington',
  description: "A driven developer who is passionate about exploration, learning, and creating intuitive user experiences through technology to solve real problems.",
  lang: 'en-US',
  lastUpdated: true,
  base: '/',
  outDir: './../dist',
  head: [
    [
      'script',
      {
        async: 'async',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-EQVL20F3PX',
      },
    ],
    [
      'script',
      {},
      `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-EQVL20F3PX');
      `
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: [2, 4],
    nav: nav(),

    sidebar: {
      // '/projects/': projectsSideBar(),
      // '/entries/': entriesSidebar(),
    },

    search: {
      provider: 'local'
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/bdpennington/',
      },
      {
        icon: 'twitter',
        link: 'https://twitter.com/penningtonbd',
      },
      {
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/brian-pennington/',
      },
    ],

    // editLink: {
    //   pattern: 'https://github.com/bdpennington/BrianPennington.dev:path',
    //   text: 'Edit this page on GitLab',
    // },

    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Brian Pennington`,
    },
  },
});

function nav() {
  return [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'About',
      link: 'about',
    },
    {
      text: 'Slides',
      link: '/slides/',
    },
    // {
    //   text: 'Blog',
    //   link: '/blog/',
    // },
    // {
    //   text: 'Contact',
    //   link: 'contact',
    // },
  ];
}
