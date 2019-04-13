---
title: Toast 弹窗
---

# 弹窗

<ClientOnly>
  <toast-demos></toast-demos>
</ClientOnly>

```html
  <div>
    <!-- tipMsg, toastPosition, autoClose, autoCloseDelay,closeText, enableHTML -->
    <g-button @click="toast('middle toast', 'middle', false, 0, '关闭', false)">middle</g-button>
    <g-button @click="toast('top toast', 'top', true, 10,'关闭', false)">top</g-button>
    <g-button @click="toast('<i>bottom toast</i>', 'bottom', false, 10,'关闭', true)">bottom</g-button>
  </div>
```
```js
<script>
import Plugin from '../../../src/plugin.js'
import Button from "../../../src/button";
import Vue from 'vue'
Vue.use(Plugin)
export default {
  components: {
    'g-button': Button
  },
  methods: {
    // 关闭taost时的回调函数
    test() {
      console.log("已经关闭");
    },
    toast(tipMsg, toastPosition, autoClose, autoCloseDelay = '', closeText, enableHTML) {
      this.$toast(tipMsg, {
        toastPosition,
        autoClose,
        autoCloseDelay,
        closeButton: {
          text: closeText,
          callback: this.test,
          enableHTML
        }
      });
    }
  }
};
</script>
```

| 参数           | 说明             | 类型            | 默认值 | 可选值            |
|----------------|------------------|-----------------|:------:|-------------------|
| autoClose      | 是否自动关闭     | Boolean         |  true  |                   |
| autoCloseDelay | 自动关闭延迟时间 | Number (单位:s) |   2    |                   |
| closeButton    | 关闭按钮的设置   | Object          |        |                   |
| toastPosition  | 显示位置         | String          |  top   | top,middle,bottom |

其中`closeButton{}`可选项为:
* text 关闭按钮文字
* callback 关闭回调
* enableHTML 是否支持HTML Boolean
