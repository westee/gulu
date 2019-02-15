import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

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