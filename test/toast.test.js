const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {

  it('存在.', () => {
    expect(Toast).to.be.ok
  })
  it('可以设置autoClose,autoCloseDelay.', (done) => {
    let div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Toast)
    const vm = new Constructor({
      propsData: {
        autoClose: true,
        autoCloseDelay: 1.5
      }
    }).$mount(div)
    setTimeout(() => {
      expect(document.body.contains(vm.$el)).to.equal(false)
      done()
    }, 1600)
    vm.$el.remove()
    vm.$destroy()
  })
  it('可以设置closeButton.', () => {
    let callback = sinon.fake()
    const Constructor = Vue.extend(Toast)
    const vm = new Constructor({
      propsData: {
        closeButton:{
          text: '关闭',
          callback
        }
      }
    }).$mount()
    let close = vm.$el.querySelector('.close')
    expect(close.textContent).to.eq('关闭')
    close.click()
    expect(callback).have.been.called
    vm.$el.remove()
    vm.$destroy()
  })
  it('可以设置toastPosition.', () => {
    const Constructor = Vue.extend(Toast)
    const vm = new Constructor({
      propsData: {
        toastPosition: 'middle'
      }
    }).$mount()
    expect(vm.$el.classList.contains('position-middle')).to.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it('可以设置HTML.', () => {
    const Constructor = Vue.extend(Toast)
    const vm = new Constructor({
      propsData: {
        closeButton:{
          enable: true
        }
      }
    })
    vm.$slots.default = `<b id="test">hello</b>`
    vm.$mount()
    // 如果能获得就说明我们添加的是元素，而不是文本
    let target = vm.$el.querySelector('#test')
    expect(target).to.be.exist
    vm.$el.remove()
    vm.$destroy()
  })

})