module.exports = {
  base:"/gulu/",
  title: 'Biker UI',
  description: 'a vue rails',
  themeConfig: {
    // 顶部导航栏
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Guide',
        link: '/guide/'
      },
      {
        text: 'External',
        link: 'https://google.com'
      },
    ],
    // 侧边栏
    sidebar: [
      '/',
      {
      title: '组件',
      collapsable: true,
      children: [
        '/components/button.md'
      ]
    } ]
  }
}