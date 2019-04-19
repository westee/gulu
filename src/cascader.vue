<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <slot></slot>
    </div>
    <div class="popover" v-show="popoverVisible">
      <cascader-item
        :items="source"
        :popover-height="popoverHeight"
        :selected-arr="selectedArr"
        @update:selectedArr="onSelectedArrChange"
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
    },
    selectedArr: {
      type: Array,
      default: () => {
        return [];
      }
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
  },
  methods: {
    // cascader-item组件发来的通知，由于cascader组件的selectedArr也是props值，
    // 因此他也不能更改，继续通知上一级。
    onSelectedArrChange(data) {
      /**
       * @todo 
       * 感觉selectedArr名字取得不好，要改
       */
      this.$emit('update:selectedArr', data)
    }
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
