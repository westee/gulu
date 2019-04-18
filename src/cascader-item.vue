<template>
  <div class="cascader-item" :style="{height: popoverHeight+'px'}">
    <!-- 左边 -->
    <div class="left">
      <div
        class="label"
        v-for="(item, index) in items"
        :key="index"
        @click="selectedItem = item"
      >{{item.name}}</div>
    </div>
    <!-- 右边 -->
    <div class="right" v-if="getSubItem">
      <cascader-item :items="getSubItem" :popover-height="popoverHeight"></cascader-item>
    </div>
  </div>
</template>
<script>
const cascaderItem = {
  name: "cascaderItem",
  props: {
    items: {
      type: Array
    },
    popoverHeight: {
      type: Number
    }
  },
  data() {
    return {
      selectedItem: null
    };
  },
  computed: {
    //  获得下一级的数据
    getSubItem() {
      if (this.selectedItem && this.selectedItem.children) {
        return this.selectedItem.children;
      }
      return null;
    }
  }
};
export default cascaderItem;
</script>
<style lang='scss' scoped>
@import "common.scss";
.cascader-item {
  // border: 1px solid black;
  display: flex;
  .right {
    // margin-top: -1px;
    height: 100%;
  }
  .left {
    height: 100%;
    // border: 1px solid $border-color-light;
    padding: 0.3em 0;
    @extend .my-shadow;
    .label {
      padding: 0.3em 1em;
    }
  }
}
</style>