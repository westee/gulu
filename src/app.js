import Vue from 'vue'

import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './column'
import Content from './content'
import Footer from './footer'
import Header from './header'
import Layout from './layout'
import Sider from './sider'

import Chai from 'chai'
import ChaiSpies from 'chai-spies'

Chai.use(ChaiSpies)

let arr = {
    'g-icon': Icon,
    'g-button': Button,
    'g-button-group': ButtonGroup,
    'g-input': Input,
    'g-row': Row,
    'g-col': Col,
    'g-content': Content,
    'g-footer': Footer,
    'g-header': Header,
    'g-layout': Layout,
    'g-sider': Sider
}
for (let i in arr) {
    Vue.component(i, arr[i])
}

new Vue({
    el: '#app',
    data: {
        loadingFlag1: false,
        loadingFlag2: false,
        loadingFlag3: false,
        msg: '123'
    },
    created() {
        setTimeout(() => {
            this.msg = 159487
        }, 1000)
    },
    methods: {
        inputChange(e) {
            console.log(1, e.target.value)
            this.$emit('change', e.target.value)
        },
    }
})