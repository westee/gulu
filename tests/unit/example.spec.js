import {
  expect
} from "chai";
import {
  shallowMount,
  mount
} from "@vue/test-utils";
import Button from "@/button.vue";

describe("button.vue", () => {
  it('存在.', () => {
    expect(Button).to.be.ok
  })

  it("可以设置icon", () => {
    const msg = "new message";
    const wrapper = mount(Button, {
      propsData: {
        icon: 'setting'
      }
    });
    let useElement = wrapper.find('use')
    expect(useElement.attributes().href).to.eq('#icon-setting')
    // expect(wrapper.props().icon).to.eq('setting')
  });

  it('可以设置loading.', () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: 'loading'
      }
    });
    let useElement = wrapper.find('use')
    expect(useElement.attributes().href).to.eq('#icon-loading')
  })

  it('icon 默认的 order 是 1', () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: 'loading'
      }
    });
    let svgElement = wrapper.find('svg')
    console.log(wrapper.element.$el)
    // expect(getComputedStyle(svgElement.html()).order).to.eq('1')
  })

  it('设置 iconPosition 可以改变 order', () => {
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
  it('点击 button 触发 click 事件', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'setting',
      }
    }).$mount()

    const callback = sinon.fake();
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.been.called
    vm.$el.remove()
    vm.$destroy()
  })
})