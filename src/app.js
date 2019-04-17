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

import Tabs from './tabs'
import TabsItem from './tabs-item'
import TabsPanel from './tabs-panel'
import TabsBody from './tabs-body'
import TabsHead from './tabs-head'

import Popover from './popover'

import Cascader from './cascader'
import CascaderItem from './cascader-item'

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
    'g-toast': Toast,
    'g-tabs': Tabs,
    'g-tabs-item': TabsItem,
    'g-tabs-panel': TabsPanel,
    'g-tabs-head': TabsHead,
    'g-tabs-body': TabsBody,
    'g-popover': Popover,
    'g-cascader': Cascader,
    'g-cascader-item': CascaderItem
}
for (let i in arr) {
    Vue.component(i, arr[i])
}

new Vue({
    el: '#app',
    data: {
        districtData: [{
            name: '山东',
            children: [{
                    name: '济南',
                    children: [{
                            name: '历城区'
                        },
                        {
                            name: '历下区'
                        },
                        {
                            name: '市中区'
                        }
                    ]
                },
                {
                    name: '青岛',
                    children: [{
                            name: '黄岛区'
                        },
                        {
                            name: '胶州区'
                        },
                        {
                            name: '平度市'
                        }
                    ]
                }
            ]
        }, {
            name: '浙江',
            children: [{
                    name: '杭州',
                    children: [{
                            name: '上城区'
                        },
                        {
                            name: '下城区'
                        },
                        {
                            name: '江干'
                        }
                    ]
                },
                {
                    name: '嘉兴',
                    children: [{
                            name: '南湖区'
                        },
                        {
                            name: '秀洲区'
                        },
                        {
                            name: '海宁县'
                        }
                    ]
                }
            ]
        }]
    },
    created() {},
    methods: {}
})