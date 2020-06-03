module.exports = {
    web: {
        Todo: ['web/todo'],
        General: [
            'web/general/network',
            'web/general/cache',
            'web/general/performance',
            'web/general/security',
        ],
        Javascript: [
            'web/js/basic',
            'web/js/array',
            'web/js/object',
            'web/js/destruct',
            'web/js/event-loop',
            'web/js/memory',
            'web/js/regex',
            'web/js/module',
        ],
        CSS: ['web/css/basic', 'web/css/blank', 'web/css/margin'],

        React: [
            'web/react/basic',
            'web/react/conditional-rendering',
            'web/react/diff',
            'web/react/life-circle',
            'web/react/patterns',
            'web/react/react-router',
            'web/react/redux-observable',
        ],
        Vue: ['web/vue/deep-selector'],
        Library: [
            'web/library/node',
            'web/library/hapi',
            'web/library/sequelize',
        ],
    },
    tools: {
        shell: [
            'tools/shell/shell-script',
            'tools/shell/tmux',
            'tools/shell/git',
        ],
    },
    snippets: {
        Javascript: ['snippets/js/conditional', 'snippets/js/functions'],
        CSS: ['snippets/css/animation'],
    },
};
