<template>
  <div class="tabs-panel" :class="panelClass" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "g-tabs-panel",
  inject: ["eventBus"],
  data() {
    return {
      active: false
    };
  },
  props: {
    name: {
      type: String | Number,
      required: true
    }
  },
  computed: {
    panelClass() {
      return {
        active: this.active
      };
    }
  },
  inject: ["eventBus"],
  created() {
    this.eventBus.$on("update:selected", name => {
      if (name === this.name) {
        // console.log('panel'+this.name+'选中');
        this.active = true;
      } else {
        // console.log('panel'+this.name+'未选中');
        this.active = false;
      }
    });
  }
};
</script>

<style lang="scss">
.tabs-panel {
  &.active {
    background: red;
  }
}
</style>