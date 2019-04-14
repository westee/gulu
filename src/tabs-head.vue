<template>
  <div class="tabs-head" ref="head">
    <slot></slot>
    <div ref="line" class="line"></div>
    <div class="action-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template> 

<script>
export default {
  name: "g-tabs-head",
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on('update:selected',(name, vm)=>{
      let {width, height, left, right} = vm.$el.getBoundingClientRect()
      let {left: left2} = this.$refs.head.getBoundingClientRect()

      this.$refs.line.style.width = `${width}px`      
      this.$refs.line.style.left = `${left - left2}px`            
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
    left: 0;
    position: absolute;
    border-bottom: 2px solid #3eaf7c;
    bottom: 0px;
    width: 4em;
    transition: all 0.3s, width 0.3s;
  }
  .action-wrapper{
    margin-left: auto;
  }
}
</style>