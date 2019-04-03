const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/column'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.exist
    })
    // 有异步代码需要加一个done参数。
    it('可以设置gutter.', (done) => {
        // const RowConstructor = Vue.extend(Row)
        // const ColConstructor = Vue.extend(Col)
        Vue.component('g-row', Row)
        Vue.component('g-col', Col)
        let div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <g-row :gutter="20">
            <g-col :col='12' :offset='12'>
            </g-col>
        </g-row>
        `
        const vm = new Vue({
            el: div
        })
        
        setTimeout(function(){
            let row = vm.$el.querySelector('.row')
            expect(getComputedStyle(row).marginLeft).to.equal('-10px')
            expect(getComputedStyle(row).marginRight).to.equal('-10px')
            let cols = vm.$el.querySelector('.col')
            expect(getComputedStyle(cols).paddingLeft).to.equal('10px')
            expect(getComputedStyle(cols).paddingRight).to.equal('10px')
            done()
            vm.$el.remove()
            vm.$destroy()
        },0)
    })

    it('可以设置 align.', () => {
        let div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Row)
        const vm = new Constructor({
            propsData: {
                align: 'left'
            }
        }).$mount(div)

        const divElement = vm.$el
        console.log(getComputedStyle(divElement).justifyContent)
        expect(getComputedStyle(divElement).justifyContent).to.equal('flex-start')
        vm.$destroy()
    })
   
})

