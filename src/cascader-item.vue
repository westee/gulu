<template>
  <div class="cascader-item" :style="{ height: popoverHeight + 'px' }">
    <!-- 左边 -->
    <div class="left">
      <div class="label" v-for="(item, index) in items" :key="index" 
      @click="onClickLabel(item)">
        {{ item.name }}
        <g-icon v-if="item.children" name="right"></g-icon>
      </div>
    </div>
    <!-- 右边 -->
    <div class="right" v-if="getSubItem">
      <cascader-item
        :items="getSubItem"
        :popover-height="popoverHeight"
        :selected-level="selectedLevel+1"
        :selected-arr="selectedArr"
        @update:selectedArr="onChangeSelected"
      ></cascader-item>
    </div>
  </div>
</template>
<script>
import Icon from "./icon";
const cascaderItem = {
  name: "cascaderItem",
  props: {
    items: {
      type: Array
    },
    popoverHeight: {
      type: Number
    },
    // 选中的每一级的数据
    selectedArr: {
      type: Array,
      default: () => []
    },
    selectedLevel: {
      type: Number,
      default: 0
    }
  },
  components: {
    "g-icon": Icon
  },
  computed: {
    //  获得下一级的数据
    getSubItem() {
      let selected = this.selectedArr[this.selectedLevel];
      if (selected && selected.children) {
        return selected.children;
      }
      return null;
    }
  },
  methods: {
    onClickLabel(item) {
      // 深拷贝selectedArr
      let deepCopy = JSON.parse(JSON.stringify(this.selectedArr));
      deepCopy[this.selectedLevel] = item;
      // console.log(deepCopy)
      this.$emit("update:selectedArr", deepCopy);
    },
    onChangeSelected(newData) {
      // console.log(newData)
      this.$emit("update:selectedArr", newData);
    }
  }
};
export default cascaderItem;
</script>
<style lang="scss" scoped>
@import "common.scss";
.cascader-item {
  display: flex;
  .right {
    height: 100%;
    border-left: 1px solid $border-color-light;
  }
  .left {
    height: 100%;
    padding: 0.3em 0;
    .label {
      padding: 0.3em 1em;
      display: flex;
      justify-content: center;
      align-items: center;
      white-space: nowrap;
      .icon {
        transform: scale(0.6);
        margin-left: auto;
      }
    }
  }
}
</style>
