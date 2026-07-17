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
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
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

          {
            label: 'Books',
            position: 'left',
            items: [
              { type: 'docSidebar', sidebarId: 'booksParenting', label: '育儿' },
              { type: 'docSidebar', sidebarId: 'booksHealth', label: '健康' },
              { type: 'docSidebar', sidebarId: 'booksMethodology', label: '工作方法论' },
              { type: 'docSidebar', sidebarId: 'booksProductivity', label: '效率' },
              { type: 'docSidebar', sidebarId: 'booksHistory', label: '历史' },
              { type: 'docSidebar', sidebarId: 'booksBiography', label: '人物传记' },
              { type: 'docSidebar', sidebarId: 'booksPsychology', label: '心理学' },
              { type: 'docSidebar', sidebarId: 'booksSociology', label: '社会学' },
              { type: 'docSidebar', sidebarId: 'booksScience', label: '科学技术' },
              { type: 'docSidebar', sidebarId: 'booksPhilosophy', label: '哲学' },
              { type: 'docSidebar', sidebarId: 'booksEssay', label: '杂文' },
              { type: 'docSidebar', sidebarId: 'booksGeography', label: '地理' },
              { type: 'docSidebar', sidebarId: 'booksPoem', label: '诗歌' },
              { type: 'docSidebar', sidebarId: 'booksNovel', label: '小说' },
            ],
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
        additionalLanguages: ['bash'],
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
