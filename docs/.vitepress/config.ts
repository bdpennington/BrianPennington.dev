import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Brian Pennington',
  description: "Brian Pennington's personal website: blog, resume, interesting stuff",
  lang: 'en-US',
  lastUpdated: true,
  // base: '/docs',
  // srcDir: 'docs',
  outDir: 'dist',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: [2, 4],
    nav: nav(),

    sidebar: {
      // '/projects/': projectsSideBar(),
      // '/entries/': entriesSidebar(),
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/bdpennington/BrianPennington.dev',
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
    //   pattern: 'https://github.com/bdpennington/personal-site:path',
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
      text: 'About',
      link: 'about',
    },
    // {
    //   text: 'Blog',
    //   link: '/blog/',
    // },
    {
      text: 'Contact',
      link: 'contact',
    },
  ];
}
