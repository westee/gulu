<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <slot></slot>
    </div>
    <div class="popover" v-show="popoverVisible">
      <!-- 第一级 -->
      <div class="level1">
        <div
          v-for="(item1, index) in districtSource"
          :key="index"
          @click="level2Selected = item1"
        >{{item1.name}}</div>
      </div>
      <!-- 第二级 -->
      <div class="level2">
        {{level2Data.name}}
        <div
          v-for="(item2, index2) in level2Data"
          :key="index2"
          @click="level3Selected = item2"
        >{{item2.name}}</div>
      </div>
      <div class="level3">
        <div v-for="(item3, index3) in level3Data" :key="index3">{{item3.name}}</div>
      </div>
      <!-- <div v-for="item in districtSource">
        <cascader-item :sourceData="item">
        </cascader-item>
      </div>-->
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