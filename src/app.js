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
import Toast from './toast'
import plugin from './plugin'

import Chai from 'chai'
import ChaiSpies from 'chai-spies'

Chai.use(ChaiSpies)
Vue.use(plugin)

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
    'g-sider': Sider,
    'g-toast': Toast
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
            this.$emit('change', e.target.value)
        },
        showToast2() {
            this.$toast(`${Math.random()}`, {
                toastPosition: 'middle',
                autoClose: false,
                closeButton: {
                    text: '关闭',
                    callback(toast) {
                        toast.test()
                        console.log('callback')
                    },
                    enable: false
                }
            })
        },
        showToast3() {
            this.$toast(`${Math.random()}`, {
                toastPosition: 'bottom',
                autoClose: false,
                closeButton: {
                    text: '关闭',
                    callback(toast) {
                        toast.test()
                        console.log('callback')
                    },
                    enable: false
                }
            })
        },
        showToast() {
            this.$toast(`${Math.random()}`, {
                toastPosition: 'top',
                autoClose: false,
                closeButton: {
                    text: '关闭',
                    callback(toast) {
                        toast.test()
                        console.log('callback')
                    },
                    enable: false
                }
            })
        }
    }
})