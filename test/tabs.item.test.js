const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsItem from '../src/tabs-item'
import TabsPanel from '../src/tabs-panel'
import TabsBody from '../src/tabs-body'

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-panel', TabsPanel)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', () => {
  it('存在.', () => {
    expect(TabsItem).to.exist
  })
  // 有异步代码需要加一个done参数。
  it('可以接受diasbled,name.', () => {
    const TabsConstructor = Vue.extend(TabsItem)
    let tabsItem = new TabsConstructor({
      propsData: {
        disabled: true,
        name: 'xxx'
      }
    }).$mount()
    expect(tabsItem.$el.getAttribute('data-name="xxx"'))
    expect(tabsItem.$el.classList.contains('disabled')).to.eq(true)
  })
  it('可以禁用item.', () => {
    const callback = sinon.fake()
    const TabsConstructor = Vue.extend(TabsItem)
    let vm = new TabsConstructor({
      propsData: {
        disabled: false,
        name: 'xyz'
      }
    }).$mount()
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.not.been.called
  })
})