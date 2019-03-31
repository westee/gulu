const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.exist
    })
    it('可以设置gutter.', () => {
        const Constructor = Vue.extend(Row)
        const vm = new Constructor({
            propsData: {
                icon: 'setting'
            }
        }).$mount()
        const useElement = vm.$el.querySelector('use')
        expect(useElement.getAttribute('xlink:href')).to.equal('#icon-setting')
        vm.$destroy()
    })
   
})