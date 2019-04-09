<template>
  <div class="tabs-item" @click="yyy" :class="itemClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "g-tabs-item",
  data(){
    return {
      active: false
    }
  },
  props:{
    disabled:{
      type: Boolean,
      default: false
    },
    name:{
      type: String | Number,
      required: true
    }
  },
  inject: ["eventBus"],
  computed:{
    itemClass(){
      return {
        active: this.active
      }
    }
  },
  created(){
    this.eventBus.$on('update:selected', (name)=>{
      if(name === this.name){
        // console.log(this.name+'选中');
        this.active = true;
      }else{
        // console.log(this.name+'未选中');
        this.active = false;
      }
    })
  },
  methods:{
    yyy(val){
      this.eventBus.$emit('update:selected', this.name)
    }
  }
};
</script>

<style lang="scss">
.tabs-item{
  padding: 0 1em;
  flex-shrink: 0;
  &.active{
    background: red;
  }
}
</style>