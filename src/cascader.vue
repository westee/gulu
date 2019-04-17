<template>
  <div class="cascader">
    <div class="trigger">
      <slot></slot>
    </div>
    <div class="popover">
      <div v-for="item in districtSource">
        <cascader-item :sourceData="item">
        </cascader-item>
      </div>
    </div>
  </div>
</template>
<script>
import CascaderItem from './cascader-item'
export default {
  props:{
    districtSource:{
      type: Array
    }
  },
  components:{
    'cascaderItem': CascaderItem
  }
};
</script>
<style lang='scss' scoped>
@import 'common.scss'
</style>