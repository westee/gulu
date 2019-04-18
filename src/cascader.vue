<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <slot></slot>
    </div>
    <div class="popover" v-show="popoverVisible">
      <cascader-item :items="districtSource" :popover-height="popoverHeight"></cascader-item>
    </div>
  </div>
</template>
<script>
import CascaderItem from "./cascader-item";
export default {
  props: {
    districtSource: {
      type: Array
    },
    popoverHeight:{
      type: Number
    }
  },
  data() {
    return {
      // 是否弹出选择栏
      popoverVisible: false,
    };
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
    border: 1px solid black;
    width: 100px;
  }
  .popover {
    display: flex;
  }
}
</style>