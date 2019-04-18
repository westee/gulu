<template>
  <div class="cascader-item">
    
      <!-- 左边 -->
      <div class="left">
        <div
          v-for="(item, index) in items"
          :key="index"
          @click="selectedItem = item"
        >{{item.name}}</div>
      </div>
      <!-- 右边 -->
      <div class="right" v-if="getSubItem">
        <cascader-item :items="getSubItem">
        </cascader-item>
      </div>
    
  </div>
</template>
<script>
const cascaderItem = {
  name: "cascaderItem",
  props: {
    items: {
      type: Array
    }
  },
  data() {
    return {
      selectedItem: null
    }
  },
  computed: {
    //  获得下一级的数据
    getSubItem(){
      if(this.selectedItem && this.selectedItem.children){
        return this.selectedItem.children
      }
      return null
    }
  },
};
export default cascaderItem;
</script>
<style lang='scss' scoped>
.cascader-item{
  border: 1px solid red;  
  display: flex;
  .right{
    margin-top: -1px;
  }
}
</style>