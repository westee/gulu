<template>
  <div class="tabs-panel" :class="panelClass" v-if="active" :data-name="name">
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
      type: String,
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
    if (!this.eventBus) return;
    this.eventBus.$on("update:selected", (name, vm) => {
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

<style lang="scss"></style>
