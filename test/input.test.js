const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.ok
    })
    const Constructor = Vue.extend(Input)

    describe('props', () => {
        let vm
        afterEach(()=>{
            vm.$destroy()
        })
        it('可以设置inputValue.', () => {
             vm = new Constructor({
                propsData: {
                    inputValue: '错误'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('错误')
        })

        it('可以设置disabled.', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
        })

        it('可以设置readonly.', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
        })

        it('可以接收error message.', () => {
            vm = new Constructor({
                propsData: {
                    error: '错误信息'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#icon-warn')
            const errorElement = vm.$el.querySelector('span')
            expect(errorElement.innerHTML).to.equal('错误信息')
        })
    })

    /**
     * 函数测试
     */
    describe('事件',()=>{
        let vm
        afterEach(()=>{
            vm.$destroy()
        })
        let eventNameArray = ['change','blur','focus','input']
        eventNameArray.forEach((value)=>{
            it(`可以${value}`, () => {

                vm = new Constructor({}).$mount()
                let callback = sinon.fake();
                vm.$on(value,callback)
                let event = new Event(value)
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.calledWith(event)
            })
        })


        // it('可以blur', () => {
        //     vm = new Constructor({}).$mount()
        //     let callback = sinon.fake();
        //     vm.$on('blur',callback)
        //     let event = new Event('blur')
        //     let inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     expect(callback).to.have.been.calledWith(event)
        // })
        //
        // it('可以focus', () => {
        //     vm = new Constructor({}).$mount()
        //     let callback = sinon.fake();
        //     vm.$on('focus',callback)
        //     let event = new Event('focus')
        //     let inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     expect(callback).to.have.been.calledWith(event)
        // })
        //
        // it('可以input', () => {
        //     vm = new Constructor({}).$mount()
        //     let callback = sinon.fake();
        //     vm.$on('input',callback)
        //     let event = new Event('input')
        //     let inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     expect(callback).to.have.been.calledWith(event)
        // })


    })


})