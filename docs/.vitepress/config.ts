/// <reference types="vite/client" />

import { type DefaultTheme, defineConfig } from 'vitepress';
import footnote from 'markdown-it-footnote';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Brian Pennington',
  description: "A driven developer who is passionate about exploration, learning, and creating intuitive user experiences through technology to solve real problems.",
  lang: 'en-US',
  lastUpdated: true,
  base: '/',
  outDir: './../dist',
  sitemap: {
    hostname: 'https://brianpennington.dev',
  },
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
    [
      'meta',
      {
        name: 'author',
        content: 'Brian Pennington',
      },
    ],
    [
      'meta',
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      }
    ],
    [
      'meta',
      {
        name: 'twitter:site',
        content: '@penningtonbd',
      },
    ],
  ],
  transformPageData(pageData, { siteConfig }) {
    pageData.frontmatter.head ??= [];
    const origin = 'https://brianpennington.dev';

    const getPathFromFilepath = (filepath: string) => {
      const path = filepath.split('/');
      path.pop();
      return path.join('/');
    }

    const getSocialImagePath = () => {
      const socialImage: string | undefined = pageData.frontmatter.socialImage;
      return socialImage
        ? `${origin}/${getPathFromFilepath(pageData.relativePath)}/${socialImage}`
        : `${origin}/brand-social-card.jpg`;
    };

    const findAndReplaceOrAdd = (metaKey: string, metaKeyValue: string, content) => {
      const index = pageData.frontmatter.head.findIndex((tag) => {
        return tag?.[1]?.[metaKey] === metaKeyValue
      });
      if (index === -1) {
        pageData.frontmatter.head.push(
          [
            'meta',
            {
              [metaKey]: metaKeyValue,
              content,
            },
          ],
        );
      } else {
        pageData.frontmatter.head[index][1].content = content;
      }
    }
    
    // Add/update dynamic social meta tags
    findAndReplaceOrAdd('property', 'og:title', `${pageData.title} | ${siteConfig.site.title}`);
    findAndReplaceOrAdd('property', 'og:description', pageData.description || siteConfig.site.description);
    findAndReplaceOrAdd('property', 'og:url', `${origin}/${pageData.relativePath.replace(/.md$/, '.html')}`);
    findAndReplaceOrAdd('property', 'og:image', getSocialImagePath());
    findAndReplaceOrAdd('name', 'twitter:image', getSocialImagePath());
    findAndReplaceOrAdd('name', 'twitter:title', `${pageData.title} | ${siteConfig.site.title}`);
    findAndReplaceOrAdd('name', 'twitter:description', pageData.description || siteConfig.site.description);
  },
  markdown: {
    config: (md) => {
      md.use(footnote)
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: [2, 4],
    nav: nav(),

    sidebar: {
      '/blog/': blogSidebar(),
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

    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Brian Pennington`,
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
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
      text: 'Blog',
      link: '/blog/',
    },
    {
      text: 'Slides',
      link: '/slides/',
    },
    // {
    //   text: 'Contact',
    //   link: 'contact',
    // },
  ];
}

function blogSidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'January 2024',
      collapsed: false,
      items: [
        {
          text: 'Commodification of Software Engineers',
          link: '/blog/2024-01/devs-as-commodities.md',
        },
      ],
    },
    {
      text: 'December 2023',
      collapsed: false,
      items: [
        {
          text: 'EU Regs Will Kill OSS (Not)',
          link: '/blog/2023-12/death-of-oss.md',
        },
        {
          text: 'NYT Sues OpenAI',
          link: '/blog/2023-12/nyt-sues-openai.md',
        },
      ],
    },
    {
      text: 'March 2023',
      collapsed: false,
      items: [
        {
          text: 'AI-Assisted Coding',
          link: '/blog/2023-03/ai-assisted-coding.md',
        },
      ],
    },
    {
      text: 'September 2022',
      collapsed: false,
      items: [
        {
          text: 'XP for Large Projects',
          link: '/blog/2022-09/try-xp.md',
        },
      ],
    },
    {
      text: 'August 2022',
      collapsed: false,
      items: [
        {
          text: 'iHeartMedia Metaverse Concerts',
          link: '/blog/2022-08/ihm-metaverse.md',
        },
        {
          text: 'Testing as a Cost Savings and Reliability Practice',
          link: '/blog/2022-08/why-test.md',
        },
      ],
    }
  ]
}
