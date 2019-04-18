<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <slot></slot>
    </div>
    <div class="popover" v-show="popoverVisible">
      <cascader-item :items="districtSource"></cascader-item>
    </div>
  </div>
</template>
<script>
import CascaderItem from "./cascader-item";
export default {
  props: {
    districtSource: {
      type: Array
    }
  },
  data() {
    return {
      // 是否弹出选择栏
      popoverVisible: false,
      level2Selected: null,
      level3Selected: null
    };
  },
  computed: {
    level2Data() {
      if (this.level2Selected) {
        return this.level2Selected.children;
      }
      return [];
    },
    level3Data() {
      if (this.level3Selected) {
        return this.level3Selected.children;
      }
      return [];
    }
  },
  components: {
    cascaderItem: CascaderItem
  }
};
</script>
<style lang='scss' scoped>
@import "common.scss";
.cascader {
  .trigger {
    height: $button-height;
    border: 1px solid red;
    width: 100px;
  }
  .popover {
    border: 1px solid cyan;
    display: flex;
  }
}
</style>