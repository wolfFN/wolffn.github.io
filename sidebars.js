module.exports = {
    General: [
        'general/todo',
        'general/network',
        'general/https',
        'general/cache',
        'general/performance',
        'general/security',
    ],
    JavaScript: [
        'javascript/basic',
        'javascript/array',
        'javascript/object',
        'javascript/destruct',
        'javascript/event-loop',
        'javascript/memory',
        'javascript/regex',
        'javascript/module',
        {
            TypeScript: ['javascript/typescript/basic'],
            snippets: [
                'javascript/snippets/conditional',
                'javascript/snippets/functions',
                'javascript/snippets/animation',
            ],
        },
    ],
    CSS: [
        'css/basic',
        'css/blank',
        'css/margin',
        'css/animation',
        {
            snippets: ['css/snippets/tricks'],
        },
    ],
    Library: [
        'library/node',
        'library/hapi',
        'library/sequelize',
        {
            React: [
                'library/react/basic',
                'library/react/react-performance',
                'library/react/conditional-rendering',
                'library/react/diff',
                'library/react/life-circle',
                'library/react/patterns',
                'library/react/react-router',
                'library/react/redux-observable',
            ],
            Vue: ['library/vue/deep-selector'],
        },
    ],

    Database: [
        {
            MySQL: [
                'data-science/db/install-on-mac',
                'data-science/db/dump',
                'data-science/db/table',
                'data-science/db/data-type',
                'data-science/db/select',
                'data-science/db/update',
                'data-science/db/delete',
                'data-science/db/join',
            ],
        },
        'data-science/db/postgreSQL',
    ],

    Python: [
        'data-science/python/env',
        'data-science/python/sql-alchemy',
    ],

    tools: {
        Shell: [
            'tools/shell/commands',
            'tools/shell/proxy',
            'tools/shell/npm',
            'tools/shell/shell-script',
            'tools/shell/tmux',
            'tools/shell/git',
            'tools/shell/grep',
            'tools/shell/awk',
            'tools/shell/uniq',
        ],
        Mac: [
            'tools/mac/system',
            'tools/mac/terminal',
            'tools/mac/software',
            'tools/mac/skills',
            'tools/mac/alfred',
        ],
        Ubuntu: ['tools/ubuntu/ubuntu'],
        Tools: [
            'tools/tools/vscode',
            'tools/tools/webstorm',
            'tools/tools/chrome',
        ],

        软技能: [
            'tools/soft/delay',
            'tools/soft/team-work',
            'tools/soft/subjective',
        ],
    },
    algorithm: {
        字符串: ['algorithm/string/substring_search'],
        树: ['algorithm/tree/traverse'],
        图: [
            'algorithm/graphs/union-find',
            'algorithm/graphs/bellman-ford',
            'algorithm/graphs/dijkstra',
        ],
        应用: [
            'algorithm/application/binary-search',
            'algorithm/application/double-pointer',
            'algorithm/application/fibonacci',
            'algorithm/application/dutch-flag',
            'algorithm/application/leetcode-hot-300',
        ],
    },
};
