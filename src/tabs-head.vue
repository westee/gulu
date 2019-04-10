<template>
  <div class="tabs-head">
    <slot></slot>
    <div ref="line" class="line"></div>
    <div class="action-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
import { log } from 'util';
export default {
  name: "g-tabs-head",
  inject: ["eventBus"],
  created() {
    this.eventBus.$on('update:selected',(name, vm)=>{
      // console.log(name)
      let {width, height, left, right} = vm.$el.getBoundingClientRect()
      this.$refs.line.style.width = `${width}px`      
      this.$refs.line.style.marginLeft = `${left}px`            
    })
  }
};
</script>

<style lang="scss">
$tab-height: 40px;
.tabs-head {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  border-bottom: 1px solid #ddd;
  .line{
    position: absolute;
    border-bottom: 2px solid blue;
    bottom: 0px;
    width: 4em;
    transition: margin-left 0.3s, width 0.3s;
  }
  .action-wrapper{
    margin-left: auto;
  }
}
</style>