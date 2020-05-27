module.exports = {
    title: 'Theo\'s Personal Site',
    tagline: 'Hello From Theo',
    favicon: '//static.yximgs.com/udata/pkg/userGrowth-fe-infra/user-profile-bear-logo.ico',

    organizationName: 'wolffn',
    projectName: 'wolffn.github.io',
    url: 'https://wolffn.github.io',
    baseUrl: '/',

    // themes: ['@docusaurus/theme-classic', '@docusaurus/theme-search-algolia'],
    themes: ['@docusaurus/theme-classic'],
    themeConfig: {
        navbar: {
            title: 'Theo',
            logo: {
                alt: 'My Site Logo',
                src: '//static.yximgs.com/udata/pkg/userGrowth-fe-infra/user-profile-bear-logo.svg',
            },
            links: [
                { to: 'blog', label: 'Blog', position: 'left' },
                {
                    to: 'docs/sample/doc1',
                    activeBasePath: 'docs/sample',
                    label: 'Docs',
                    position: 'left',
                },
                {
                    to: 'docs/x/x1',
                    activeBasePath: 'docs/x',
                    label: 'X',
                    position: 'left',
                },
                {
                    href: 'https://github.com/facebook/docusaurus',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
            // algolia: {
            //     apiKey: 'api-key',
            //     indexName: 'index-name',
            //     appId: 'app-id', // Optional, if you run the DocSearch crawler on your own
            //     algoliaOptions: {}, // Optional, if provided by Algolia
            // },
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Style Guide',
                            to: 'docs/sample/doc1',
                        },
                        {
                            label: 'Second Doc',
                            to: 'docs/sample/doc2/',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                        },
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/invite/docusaurus',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/docusaurus',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: 'blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/facebook/docusaurus',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    // It is recommended to set document id as docs home page (`docs/` path).
                    homePageId: 'docs/',
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
