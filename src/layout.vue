<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data(){
    return {
      layoutClass: {
        hasSider: false
      }
    }
  },
  mounted(){
    this.$children.map((child)=>{      
      // 如果layout组件下的子组件有sider组件
      if( child.$options.name === 'g-sider' ){
        this.layoutClass.hasSider = true        
      }
    })
  }
};
</script>

<style lang="scss">
.layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
  &.hasSider{
    flex-direction: row;
    .layout{
      flex-grow: 1; 
    }
  }
}

</style>
