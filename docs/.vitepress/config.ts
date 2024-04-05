import { type DefaultTheme, defineConfig } from 'vitepress';
import footnote from 'markdown-it-footnote';
import { origin, twitterHandle } from '../utils/constants';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Brian Pennington',
  description: "A driven developer who is passionate about exploration, learning, and creating intuitive user experiences through technology to solve real problems.",
  lang: 'en-US',
  lastUpdated: true,
  base: '/',
  outDir: './../dist',
  sitemap: {
    hostname: origin,
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
        property: 'og:image',
        content: `${origin}/brand-social-card.jpg`,
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
        content: twitterHandle,
      },
    ],
    [
      'meta',
      {
        name: 'twitter:creator',
        content: twitterHandle,
      },
    ],
    [
      'meta',
      {
        name: 'twitter:image',
        content: `${origin}/brand-social-card.jpg`,
      },
    ],

  ],
  // transformPageData(pageData, { siteConfig }) {
    // pageData.frontmatter.head ??= [];
    // pageData.headers ??= [];

    // const origin = 'https://brianpennington.dev';
    // const defaultKeywords = 'Software Engineering, Development, Software Development, Brian Pennington, Pennington, Junior Developer, Senior Developer, Developer, SaaS, Software As a Service, Management, Project Management';
    // const pageKeywords = `${defaultKeywords}${pageData.frontmatter.keywords ? `, ${pageData.frontmatter.keywords}` : ''}`;

    // const getPathFromFilepath = (filepath: string) => {
    //   const path = filepath.split('/');
    //   path.pop();
    //   return path.join('/');
    // }

    // const getSocialImagePath = () => {
    //   const socialImage: string | undefined = pageData.frontmatter.socialImage;
    //   return socialImage
    //     ? `${origin}/${getPathFromFilepath(pageData.relativePath)}/${socialImage}`
    //     : `${origin}/brand-social-card.jpg`;
    // };

    // const findAndReplaceOrAdd = (metaKey: string, metaKeyValue: string, content) => {
    //   const pageHeadIndex = pageData.headers.findIndex((tag) => {
    //     return tag?.[1]?.[metaKey] === metaKeyValue
    //   });
    //   const frontmatterHeadIndex = pageData.frontmatter.head.findIndex((tag) => {
    //     return tag?.[1]?.[metaKey] === metaKeyValue
    //   });
  
    //   if (pageHeadIndex === -1 && frontmatterHeadIndex === -1) {
    //     pageData.frontmatter.head.push(
    //       [
    //         'meta',
    //         {
    //           [metaKey]: metaKeyValue,
    //           content,
    //         },
    //       ],
    //     );
    //   } else {
    //     if (pageHeadIndex !== -1 && frontmatterHeadIndex !== -1) {
    //       pageData.headers[pageHeadIndex][1].content = content;
    //       pageData.frontmatter.head.splice(pageData.frontmatter.head[frontmatterHeadIndex], 1);
    //     } else if (pageHeadIndex !== -1) {
    //       pageData.headers[pageHeadIndex][1].content = content;
    //     } else if (frontmatterHeadIndex !== -1) {
    //       pageData.frontmatter.head[frontmatterHeadIndex][1].content = content;
    //     }
    //   }
    // }

    // // Add/update dynamic social meta tags
    // findAndReplaceOrAdd('name', 'keywords', pageKeywords);
    // // findAndReplaceOrAdd('property', 'og:title', `${pageData.title} | ${siteConfig.site.title}`);
    // // findAndReplaceOrAdd('property', 'og:description', pageData.description || siteConfig.site.description);
    // findAndReplaceOrAdd('property', 'og:url', `${origin}/${pageData.relativePath.replace(/.md$/, '.html')}`);
    // // findAndReplaceOrAdd('property', 'og:image', getSocialImagePath());
    // // findAndReplaceOrAdd('name', 'twitter:image', getSocialImagePath());
    // // findAndReplaceOrAdd('name', 'twitter:title', `${pageData.title} | ${siteConfig.site.title}`);
    // // findAndReplaceOrAdd('name', 'twitter:description', pageData.description || siteConfig.site.description);
    // function mapper(tag) {
    //   return tag[1].name || tag[1].property;
    // }
    // console.log('frontmatter\n', pageData.frontmatter.head.map(mapper));
    // console.log('useConfig\n', siteConfig.userConfig.head?.map(mapper));
    // console.log('headers\n', pageData.headers.map(mapper));
    // console.log('site\n', siteConfig.site.head?.map(mapper));
  // },
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
      text: 'April 2024',
      collapsed: false,
      items: [
        {
          text: 'AI Is Table Stakes for SWEs: Part 1',
          link: '/blog/2024-04/table-stakes-ai-pt-1.md',
        },
        {
          text: 'AI Is Table Stakes for SWEs: Part 2',
          link: '/blog/2024-04/table-stakes-ai-pt-2.md',
        },
      ]
    },
    {
      text: 'February 2024',
      collapsed: false,
      items: [
        {
          text: 'Building Things with Other People',
          link: '/blog/2024-02/building-with-other-people.md',
        },
      ],
    },
    {
      text: 'January 2024',
      collapsed: false,
      items: [
        {
          text: 'On Religions, Science, and Sanity',
          link: '/blog/2024-01/religion-science-sanity.md',
        },
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
    },
  ];
}
