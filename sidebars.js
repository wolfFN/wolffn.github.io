module.exports = {
  General: [
    'general/todo',
    'general/dom',
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
  TypeScript: [
    'typescript/basic',
    'typescript/covariant',
    'typescript/type-operation',
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
    'library/nx',
    'library/node',
    'library/hapi',
    'library/sequelize',
    {
      React: [
        'library/react/basic',
        'library/react/react-performance',
        'library/react/render',
        'library/react/conditional-rendering',
        'library/react/diff',
        'library/react/life-circle',
        'library/react/patterns',
        'library/react/fiber',
        'library/react/useImperativeHandle',
        'library/react/react-router',
        'library/react/redux-observable',
      ],
      Vue: ['library/vue/deep-selector'],
    },
  ],

  Database: [
    {
      MySQL: [
        'data/db/install-on-mac',
        'data/db/dump',
        'data/db/table',
        'data/db/data-type',
        'data/db/select',
        'data/db/update',
        'data/db/delete',
        'data/db/join',
      ],
    },
    'data/db/postgreSQL',
  ],

  Python: [
    'data/python/env',
    'data/python/sql-alchemy',
    'data/python/sql-alchemy-relationship',
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
    Ubuntu: [
      'tools/ubuntu/ubuntu',
      'tools/ubuntu/wsl',
      'tools/ubuntu/operation',
    ],
    Tools: [
      'tools/tools/vscode',
      'tools/tools/webstorm',
      'tools/tools/chrome',
      'tools/tools/Mermaid',
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
      'books/parenting/蒙台梭利的早教全书',
      'books/parenting/怎么说',
      'books/parenting/如何说',
    ],
    健康: [
      'books/health/这本书能让你睡得好',
      'books/health/这样喝茶最健康',
      'books/health/我能让你瘦',
      'books/health/控糖革命',
      'books/health/八部金刚功 八部长寿功',
      'books/health/一心只做一事',
    ],
    工作方法论: [
      'books/methodology/金字塔原理',
      'books/methodology/非暴力沟通',
      'books/methodology/麦肯锡结构化战略思维',
      'books/methodology/俞军产品方法论',
      'books/methodology/练习的心态',
      'books/methodology/卡片笔记写作法',
      'books/methodology/软技能，代码之外的生存指南',
      'books/methodology/暗时间',
      'books/methodology/How-to-Be-A-Programmer-CN',
      'books/methodology/把时间当作朋友',
      'books/methodology/超级精力管理术',
    ],
    效率: [
      'books/productivity/怦然心动的工作整理魔法',
      'books/productivity/搞定Ⅰ',
      'books/productivity/最重要的事只有一件',
    ],
    历史: [
      'books/history/失败者的春秋',
      'books/history/中央帝国的哲学密码',
      'books/history/朝鲜战争',
      'books/history/翦商',
      'books/history/秦并天下',
      'books/history/楚汉双雄',
      'books/history/弃长安',
      'books/history/大汉帝国在巴蜀',
      'books/history/重返：三国现场',
      'books/history/太后西奔',
      'books/history/危机与重构',
      'books/history/心路沧桑',
      'books/history/共天下',
      'books/history/世说俗谈',
    ],
    人物传记: [
      'books/biography/苏东坡传',
      'books/biography/夜航西飞',
      'books/biography/人类群星闪耀时',
      'books/biography/昨日的世界',
    ],
    心理学: [
      'books/psychology/欲罢不能：刷屏时代如何摆脱行为上瘾',
      'books/psychology/心流：最优体验心理学',
      'books/psychology/选择的悖论',
      'books/psychology/拖延心理学',
      'books/psychology/思考，快与慢',
      'books/psychology/内疚清理练习',
      'books/psychology/你的敏感，就是你的天赋',
    ],
    社会学: [
      'books/sociology/鬼谷子',
      'books/sociology/工作、消费主义和新穷人',
      'books/sociology/贫穷的本质',
      'books/sociology/见识：商业的本质和人生的智慧',
      'books/sociology/毫无意义的工作',
    ],
    科学技术: [
      'books/science/芯片战争',
      'books/science/芯片战争-余盛',
      'books/science/全球科技通史',
      'books/science/这就是ChatGpt',
    ],
    哲学: [
      'books/philosophy/禅语摩托车维修艺术',
      'books/philosophy/少有人走的路',
      'books/philosophy/人生的智慧',
      'books/philosophy/被讨厌的勇气',
    ],
    杂文: [
      'books/essay/佛祖在一号线',
      'books/essay/忏悔录',
      'books/essay/白说',
      'books/essay/晚来寂静',
      'books/essay/罗辑思维：成大事者不纠结',
      'books/essay/热风',
    ],
    地理: [
      'books/geography/这里是中国2',
      'books/geography/宇宙奥德赛：穿越银河系',
    ],
    诗歌: [
      'books/poem/星期六晚我们去散步吧',
      'books/poem/晴耕雨读,得闲饮茶',
      'books/poem/观看王维的十九种方式',
    ],
    小说: [
      'books/novel/追问',
      'books/novel/源泉',
      'books/novel/一句顶一万句',
      'books/novel/兰亭序杀局',
      'books/novel/苗疆蛊事',
      'books/novel/极品家丁',
      'books/novel/少年歌行',
      'books/novel/正道潜龙',
      'books/novel/我师兄实在太稳健了',
      'books/novel/娱乐春秋',
      'books/novel/群星',
      'books/novel/枭起青壤',
      'books/novel/杯雪',
    ],
  },
};
