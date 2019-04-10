<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "g-tabs",
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(val) {
        return ["horizontal", "vertical"].indexOf(val) >= 0;
      }
    }
  },
  data() {
    return {
      eventBus: new Vue()
    };
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  created() {},
  mounted() {
    if (!this.$children.length) {
      console.error('tabs组件必须包含<g-tabs-head>和<g-tabs-body>组件');
    }
    // this.$emit('update:selected','测试数据')
    this.$children.forEach(vm => {
      // tabs有两个子组件 g-tabs-body g-tabs-head
      if (vm.$options.name === "g-tabs-head") {
        // g-tabs-head的所有g-tabs-item组件
        vm.$children.map(item => {
          // 是g-tabs-item组件，且当前组件是选中组件。
          if (
            item.$options.name === "g-tabs-item" &&
            item.name === this.selected
          ) {
            // 选中的元素name和实例。
            this.eventBus.$emit("update:selected", this.selected, item);
          }
        });
      }
    });
  }
};
</script>

<style lang="scss">
</style>