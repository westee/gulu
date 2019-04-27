import {
  expect
} from "chai";
import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
import {
  mount
} from "@vue/test-utils";
import Popover from "@/popover.vue";

describe("popover.vue", () => {
  it('存在.', () => {
    expect(Popover).to.be.ok
  })

  it("可以设置position", () => {
    const wrapper = mount(Popover, {
      slots:{
        default: { template: '<button>点我</button>' },
        content: '<div>弹出框</div>'
      },
      propsData: {
        position: 'bottom'
      }
    });
    wrapper.find('button').trigger('click')
    let classes = wrapper.find('.content-wrapper').classes()
    expect(classes).to.include('position-bottom')
  });

  it('可以设置trigger.', () => {
    const wrapper = mount(Popover, {
      slots:{
        default: { template: '<button>点我</button>' },
        content: '<div>弹出框</div>'
      },
      propsData: {
        position: 'bottom',
        triggerType: 'hover'
      }
    });
    console.log(111)
    console.log(wrapper.find('.content-wrapper'))
    expect(wrapper.find('.content-wrapper').element).to.not.exist
    wrapper.find('.popover').trigger('mouseenter')
    console.log(wrapper.find('.content-wrapper'))
    expect(wrapper.find('.content-wrapper').element).to.exist
  })

  xit('icon 默认的 order 是 1', () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: 'loading'
      }
    });
    let svgElement = wrapper.find('svg')
    console.log(wrapper.element.$el)
    // expect(getComputedStyle(svgElement.html()).order).to.eq('1')
  })

  xit('设置 iconPosition 可以改变 order', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'zan',
        iconPosition: 'right'
      }
    }).$mount(div)
    const icon = vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
  })

  xit('点击 button 触发 click 事件', () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: 'setting',
      }
    })
    const callback = sinon.fake()
    const vm = wrapper.vm
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.been.called
  })

})