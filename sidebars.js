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
            snippets: [
                'javascript/snippets/conditional',
                'javascript/snippets/functions',
                'javascript/snippets/animation',
            ],
        },
    ],
    TypeScript: ['typescript/basic', 'typescript/covariant'],

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
        'library/nx',
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
                'library/react/fiber',
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
        'data-science/python/sql-alchemy-relationship',
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
            'tools/shell/ffmpeg',
        ],
        Mac: [
            'tools/mac/system',
            'tools/mac/terminal',
            'tools/mac/software',
            'tools/mac/skills',
            'tools/mac/alfred',
        ],
        Ubuntu: ['tools/ubuntu/ubuntu', 'tools/ubuntu/wsl'],
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
    books: {
        育儿: [
            'books/parenting/正面管教',
            'books/parenting/跟早教专家学儿童潜能开发',
            'books/parenting/爱上阅读的秘密',
            'books/parenting/妈妈教的数学',
            'books/parenting/蒙台梭利家庭方案',
        ],
        健康: ['books/health/这本书能让你睡得好'],
        历史: [
            'books/history/失败者的春秋',
            'books/history/中央帝国的哲学密码',
            'books/history/朝鲜战争',
            'books/history/翦商',
        ],
        心理学: ['books/psychology/欲罢不能：刷屏时代如何摆脱行为上瘾'],
        社会学: [
            'books/sociology/鬼谷子',
            'books/sociology/工作、消费主义和新穷人',
        ],
        哲学: ['books/philosophy/禅语摩托车维修艺术'],
        地理: ['books/geography/这里是中国2'],
        工作方法论: [
            'books/methodology/金字塔原理',
            'books/methodology/非暴力沟通',
            'books/methodology/麦肯锡结构化战略思维',
            'books/methodology/俞军产品方法论',
        ],
        效率: [
            'books/productivity/怦然心动的工作整理魔法',
            'books/productivity/搞定Ⅰ',
        ],
    },
};
