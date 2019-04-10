// const expect = chai.expect;
// import Vue from 'vue'
// import Tabs from '../src/tabs'
// import TabsHead from '../src/tabs-head'
// import TabsItem from '../src/tabs-item'
// import TabsPanel from '../src/tabs-panel'
// import TabsBody from '../src/tabs-body'

// Vue.component('g-tabs', Tabs)
// Vue.component('g-tabs-head', TabsHead)
// Vue.component('g-tabs-item', TabsItem)
// Vue.component('g-tabs-body', TabsBody)
// Vue.component('g-tabs-panel', TabsPanel)

// Vue.config.productionTip = false
// Vue.config.devtools = false

// describe('Tabs', () => {
//   it('存在.', () => {
//     expect(Tabs).to.exist
//   })
//   // 有异步代码需要加一个done参数。
//   it('可以接受selected.', (done) => {
//     // const TabsConstructor = Vue.extend(tabs)
//     // const ColConstructor = Vue.extend(Col)
//     let div = document.createElement('div')
//     document.body.appendChild(div)
//     div.innerHTML = `
//     <g-tabs selected="men">
//       <g-tabs-head>
//           <g-tabs-item name="men">
//               帅哥
//           </g-tabs-item>
//           <g-tabs-item name="women" disabled>
//               美女
//           </g-tabs-item>
//       </g-tabs-head>
//       <g-tabs-body>
//           <g-tabs-panel  name="men">
//               帅哥详细咨询
//           </g-tabs-panel>
//           <g-tabs-panel  name="women">
//               美女详细咨询
//           </g-tabs-panel>
//       </g-tabs-body>
// </g-tabs>
//         `
//     let vm = new Vue({
//       el: div
//     })
//     vm.$nextTick(() => {
//       expect(vm.$el.querySelector('.tabs-item[data-name="men"]').classList.contains('active')).to.eq(true)
//       done()
//     })
//   })

// })