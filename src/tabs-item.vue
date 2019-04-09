<template>
  <div class="tabs-item" @click="yyy">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "g-tabs-item",
  inject: ["eventBus"],
  created(){
    this.eventBus.$on('update:selected', (val)=>{
      console.log('shuju:'+val)
    })
  },
  methods:{
    yyy(val){
      this.eventBus.$emit('update:selected', 'item的数据')
    }
  }
};
</script>

<style lang="scss">
</style>