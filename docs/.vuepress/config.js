const dayjs = require('dayjs');

module.exports = {
  head: [['link', { rel: 'manifest', href: '/manifest.json' }]],
  plugins: [
    [
      '@vuepress/blog',
      {
        // その他の設定
      },
    ],
    [
      '@vuepress/google-analytics',
      {
        ga: '', // UA-00000000-0
      },
    ],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          return dayjs(timestamp).format('YYYY/MM/DD H時m分');
        },
      },
    ],
    ['@vuepress/medium-zoom'],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
  ],
  title: 'HelloWorld',
  themeConfig: {
    sidebar: [
      {
        title: 'TOP',
        children: ['/'],
      },
      {
        title: 'Subject1',
        children: [
          '/subject1/page1',
          '/subject1/page2',
          '/subject1/page3',
        ],
      },
      {
        title: 'Subject2',
        children: [
          '/subject2/page1',
          '/subject2/page2',
          '/subject2/page3',
        ],
      },
      {
        title: 'Subject3',
        children: [
          '/subject3/page1',
          '/subject3/page2',
          '/subject3/page3',
        ],
      },
    ],
  },
};
