<template>
  <div>
    {{sourceData.name}}
    <cascaderItem
      v-if="sourceData.children"
      v-for="(item, index) in sourceData.children"
      :sourceData="item"
      :key="index"
    ></cascaderItem>
  </div>
</template>
<script>
const cascaderItem = {
  name: "cascaderItem",
  props: {
    sourceData: {
      type: Object
    }
  }
};
export default cascaderItem;
</script>
<style lang='scss' scoped>
</style>