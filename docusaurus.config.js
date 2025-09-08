// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: "Theo's Documentation Site",
  tagline: 'Hello From Theo',
  favicon:
    '//static.yximgs.com/udata/pkg/userGrowth-fe-infra/user-profile-bear-logo.ico',
  organizationName: 'wolffn',
  projectName: 'wolffn.github.io',
  url: 'https://wolffn.github.io',
  baseUrl: '/',
  // trailingSlash: true,

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/@callmebill/lxgw-wenkai-web@latest/style.css',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Theo',
        logo: {
          alt: 'My Site Logo',
          src: '//static.yximgs.com/udata/pkg/userGrowth-fe-infra/user-profile-bear-logo.svg',
        },
        items: [
          {
            to: 'docs/javascript/basic',
            activeBasePath: 'docs/javascript',
            label: 'Web',
            position: 'left',
            items: [
              {
                label: 'General',
                to: 'docs/general/todo/',
                activeBasePath: 'docs/general',
              },
              {
                label: 'JavaScript',
                to: 'docs/javascript/basic/',
                activeBasePath: 'docs/javascript',
              },
              {
                label: 'TypeScript',
                to: 'docs/typescript/basic/',
                activeBasePath: 'docs/typescript',
              },
              {
                label: 'CSS',
                to: 'docs/css/basic/',
                activeBasePath: 'docs/css',
              },
              {
                label: 'Libraries',
                to: 'docs/library/node/',
                activeBasePath: 'docs/library',
              },
            ],
          },

          {
            to: 'docs/data/db/table',
            activeBasePath: 'docs/data',
            label: 'Data',
            position: 'left',
            items: [
              {
                label: 'Database',
                to: 'docs/data/db/table',
                activeBasePath: 'docs/data/db',
              },
              {
                label: 'Python',
                to: 'docs/data/python/env',
                activeBasePath: 'docs/data/python',
              },
            ],
          },

          {
            to: 'docs/algorithm/tree/traverse',
            activeBasePath: 'docs/algorithm',
            label: 'Algorithm',
            position: 'left',
          },
          {
            to: 'docs/tools/shell/proxy',
            activeBasePath: 'docs/tools',
            label: 'Tools',
            position: 'left',
          },

          {
            to: 'docs/photography/lightroom-config',
            activeBasePath: 'docs/photography',
            label: 'Photography',
            position: 'left',
          },

          { to: 'blog', label: 'Articles', position: 'left' },
          {
            href: 'https://github.com/wolffn',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      algolia: {
        appId: 'TETNCU4RL8',
        apiKey: 'e74085e2ce425fa0838668d2c422606e',
        indexName: 'wolffn',
        contextualSearch: true,
        algoliaOptions: {}, // Optional, if provided by Algolia
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'JavaScript',
                to: 'docs/javascript/basic',
              },
              {
                label: 'TypeScript',
                to: 'docs/typescript/basic',
              },
            ],
          },
          {
            title: 'Articles',
            items: [
              {
                label: 'Tags',
                to: 'blog/tags/',
              },
              {
                label: 'Books',
                to: 'docs/books/health/这本书能让你睡得好/',
              },
              {
                label: 'VIM',
                to: 'blog/2018/03/31/效率至上-一文带你真正走进vim',
              },
              {
                label: 'Shell',
                to: 'blog/2016/08/26/Linux-Mac-Shell常用命令',
              },
              {
                label: 'Chrome',
                to: 'blog/2018/04/01/Chrome-Dev-Tools-性能篇',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/wolfFNs',
              },
              {
                label: 'Blog',
                to: 'https://wolffn.github.io/blog/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/wolffn',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Wolffn. Built with Docusaurus.`,
      },
    }),

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          // homePageId: 'docs/javascript/basic',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // sitemap: {
        //     changefreq: 'weekly',
        //     priority: 0.5,
        //     trailingSlash: true,
        // },
      },
    ],
  ],
};
