import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Chai from 'chai'
import ChaiSpies from 'chai-spies'
Chai.use(ChaiSpies)

Vue.component('g-icon', Icon)
Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)

new Vue({
    el: '#app',
    data:{
        loadingFlag1: false,
        loadingFlag2: false,
        loadingFlag3: false,
    }
})


//单元测试
{
    var expect = Chai.expect
    const constructor = Vue.extend(Button) //生成构造函数
    const btn = new constructor({ // 创建实例并传参
        propsData:{
            icon: 'zan'
        }
    })
    btn.$mount() //将实例挂载到#test节点
    let use = btn.$el.querySelector('use')
    let iconName = use.getAttribute('xlink:href')
    expect(iconName).to.equal('#icon-zan');
    btn.$el.remove()
    btn.$destroy()
    /**
     * actual: "#icon-zan"  //实际上是
     * expected: "#icon-za"  //期望的是
     * message: "expected '#icon-zan' to equal '#icon-za'" //提示信息
     */
}

{
    const constructor = Vue.extend(Button) //生成构造函数
    const btn = new constructor({ // 创建实例并传参
        propsData:{
            icon: 'zan',
            loading: true
        }
    })
    btn.$mount('#test') //将实例挂载到#test节点
    let use = btn.$el.querySelector('use')
    let iconName = use.getAttribute('xlink:href')
    expect(iconName).to.equal('#icon-loading');
    btn.$el.remove()
    btn.$destroy()
}

{
    let div = document.createElement('div')
    // div.id = 'assert'
    // div.style.visibility = 'hidden'
    document.body.appendChild(div)
    const constructor = Vue.extend(Button) //生成构造函数
    const btn = new constructor({ // 创建实例并传参
        propsData:{
            loading: true,
            iconPosition:'right'
        }
    })
    btn.$mount(div)
    let svg = btn.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.equal('2');
    btn.$el.remove()
    btn.$destroy()
}

//test click
{
    const constructor = Vue.extend(Button)
    const btn = new constructor({
        propsData:{
            icon: 'zan',
            loading: true
        }
    }).$mount()
    let spy = Chai.spy(function(){})
    btn.$on('click', spy)
    btn.$el.click()
    expect(spy).to.have.been.called();
    btn.$el.remove()
    btn.$destroy()
}