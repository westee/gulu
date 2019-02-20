import Vue from 'vue'

import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Chai from 'chai'
import ChaiSpies from 'chai-spies'

Chai.use(ChaiSpies)

Vue.component('g-icon', Icon)
Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)

new Vue({
    el: '#app',
    data: {
        loadingFlag1: false,
        loadingFlag2: false,
        loadingFlag3: false,
        msg: '123'
    },
    created(){
      setTimeout(()=>{
          this.msg = 159487
          console.log(111)
      },1000)
    },
    methods: {
        inputChange(e) {
            console.log(1, e.target.value)
        }
    }
})


