<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <slot></slot>
    </div>
    <div class="popover" v-show="popoverVisible">
      <cascader-item
        :items="source"
        :popover-height="popoverHeight"
      ></cascader-item>
    </div>
  </div>
</template>
<script>
import CascaderItem from "./cascader-item";
export default {
  props: {
    source: {
      type: Array
    },
    popoverHeight: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      // 是否弹出选择栏
      popoverVisible: false
    };
  },
  components: {
    cascaderItem: CascaderItem
  }
};
</script>
<style lang="scss" scoped>
@import "common.scss";
.cascader {
  display: inline-block;
  position: relative;
  .trigger {
    height: $button-height;
    border: 1px solid black;
    width: 100px;
  }
  .popover {
    display: flex;
    @extend .my-shadow;
    position: absolute;
    top: 100%;
  }
}
</style>
