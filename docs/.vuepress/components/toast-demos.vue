<template>
  <div>
    <!-- tipMsg, toastPosition, autoClose, autoCloseDelay,closeText, enableHTML -->
    <g-button @click="toast('middle toast', 'middle', false, 0, '关闭', false)">middle</g-button>
    <g-button @click="toast('top toast', 'top', true, 10,'关闭', false)">top</g-button>
    <g-button @click="toast('<i>bottom toast</i>', 'bottom', false, 10,'关闭', true)">bottom</g-button>
  </div>
</template>
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
<style lang='scss' scoped>
</style>