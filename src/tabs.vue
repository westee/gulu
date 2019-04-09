<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'g-tabs',
  props:{
    selected:{
      type:String,
      required: true
    },
    direction:{
      type: String,
      default: 'horizontal',
      validator(val){
        return ['horizontal', 'vertical'].indexOf(val) >= 0
      }
    }
  },
  data(){
    return {
      eventBus: new Vue()
    }
  },
  provide(){
    return{
      eventBus: this.eventBus
    }
  },
  created(){
    this.$emit('update:selected','测试数据')
  },
  mounted(){

  }
}
</script>

<style lang="scss">
  
</style>