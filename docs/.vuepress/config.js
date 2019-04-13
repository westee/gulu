module.exports = {
  base: "/gulu/",
  title: 'Biker UI',
  description: 'a vue rails',
  themeConfig: {
    // 顶部导航栏
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: '文档',
        link: '/components/'
      }
    ],
    // 侧边栏
    sidebar: [
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/input',
          '/components/toast',
          '/components/grid',
          '/components/popover',
          '/components/tab',
          '/components/layout'
        ]
      }
    ]
  }
}