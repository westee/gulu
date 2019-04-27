const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/column'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
    it('存在.', () => {
        expect(Col).to.be.ok
    })
    it('可以设置 col.', () => {
        let div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                coloffset: {
                    col: 1,
                    offset: 1
                }
            }
        }).$mount(div)

        const divElement = vm.$el
        expect(divElement.classList.contains('col-default-1')).to.eq(true)
        expect(divElement.classList.contains('offset-default-1')).to.eq(true)
        vm.$el.remove()
        vm.$destroy()
    })
    it('可以设置 phone.', () => {
        let div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                phone: {
                    col: 1,
                    offset: 1
                }
            }
        }).$mount(div)

        const divElement = vm.$el
        expect(divElement.classList.contains('col-phone-1')).to.eq(true)
        expect(divElement.classList.contains('offset-phone-1')).to.eq(true)
        vm.$el.remove()
        vm.$destroy()
    })
    it('可以设置 pad.', () => {
        let div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                pad: {
                    col: 1,
                    offset: 1
                }
            }
        }).$mount(div)

        const divElement = vm.$el
        expect(divElement.classList.contains('col-pad-1')).to.eq(true)
        expect(divElement.classList.contains('offset-pad-1')).to.eq(true)
        vm.$el.remove()
        vm.$destroy()
    })

    it('可以设置 narrowPc.', () => {
        let div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                narrowPc: {
                    col: 1,
                    offset: 1
                }
            }
        }).$mount(div)

        const divElement = vm.$el
        expect(divElement.classList.contains('col-narrowPc-1')).to.eq(true)
        expect(divElement.classList.contains('offset-narrowPc-1')).to.eq(true)
        vm.$el.remove()
        vm.$destroy()
    })
    it('可以设置 pc.', () => {
        let div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                pc: {
                    col: 1,
                    offset: 1
                }
            }
        }).$mount(div)

        const divElement = vm.$el
        expect(divElement.classList.contains('col-pc-1')).to.eq(true)
        expect(divElement.classList.contains('offset-pc-1')).to.eq(true)
        vm.$el.remove()
        vm.$destroy()
    })
    it('可以设置 bigPc.', () => {
        let div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                bigPc: {
                    col: 1,
                    offset: 1
                }
            }
        }).$mount(div)

        const divElement = vm.$el
        expect(divElement.classList.contains('col-bigPc-1')).to.eq(true)
        expect(divElement.classList.contains('offset-bigPc-1')).to.eq(true)
        vm.$el.remove()
        vm.$destroy()
    })
})