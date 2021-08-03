// https://v2.docusaurus.io/
module.exports = {
    title: "Theo's Documentation Site",
    tagline: 'Hello From Theo',
    favicon:
        '//static.yximgs.com/udata/pkg/userGrowth-fe-infra/user-profile-bear-logo.ico',

    organizationName: 'wolffn',
    projectName: 'wolffn.github.io',
    url: 'https://wolffn.github.io',
    baseUrl: '/',

    themeConfig: {
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
                    label: 'Development',
                    position: 'left',
                    items: [
                        {
                            label: 'General',
                            to: 'docs/general/todo',
                            activeBasePath: 'docs/general',
                        },
                        {
                            label: 'JavaScript',
                            to: 'docs/javascript/basic',
                            activeBasePath: 'docs/javascript',
                        },
                        {
                            label: 'CSS',
                            to: 'docs/css/basic',
                            activeBasePath: 'docs/css',
                        },
                    ],
                },
                {
                    to: 'docs/library/node',
                    activeBasePath: 'docs/library',
                    label: 'Library',
                    position: 'left',
                },
                {
                    to: 'docs/algorithm/tree/traverse',
                    activeBasePath: 'docs/algorithm',
                    label: 'Algorithm',
                    position: 'left',
                },
                {
                    to: 'docs/tools/shell/shell-script',
                    activeBasePath: 'docs/tools',
                    label: 'Tools',
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
            apiKey: '54d389cbe47f4a8e71e5888ae0091264',
            indexName: 'wolffn',
            // appId: 'app-id', // Optional, if you run the DocSearch crawler on your own
            algoliaOptions: {}, // Optional, if provided by Algolia
        },
        prism: {
            // https://github.com/FormidableLabs/prism-react-renderer/tree/master/src/themes
            // theme: require('prism-react-renderer/themes/dracula'),
            theme: require('prism-react-renderer/themes/github'),
            // theme: require('prism-react-renderer/themes/palenight'),
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
                            to: 'docs/javascript/typescript/basic',
                        },
                    ],
                },
                {
                    title: 'Tools',
                    items: [
                        {
                            label: 'VS Code',
                            to: 'docs/tools/tools/vscode',
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
    },

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
            },
        ],
    ],
};
