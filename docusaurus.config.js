module.exports = {
    title: 'Theo Site',
    tagline: 'The tagline of my site',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    favicon: '//static.yximgs.com/udata/pkg/userGrowth-fe-infra/user-profile-bear-logo.ico',
    organizationName: 'facebook', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.
    themes: ['@docusaurus/theme-classic', '@docusaurus/theme-search-algolia'],
    themeConfig: {
        navbar: {
            title: 'My Site',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg',
            },
            links: [
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
                { to: 'blog', label: 'Blog', position: 'left' },
                {
                    href: 'https://github.com/facebook/docusaurus',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
            algolia: {
                apiKey: 'api-key',
                indexName: 'index-name',
                appId: 'app-id', // Optional, if you run the DocSearch crawler on your own
                algoliaOptions: {}, // Optional, if provided by Algolia
            },
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
