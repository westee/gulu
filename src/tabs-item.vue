<template>
  <div
    class="tabs-item"
    @click="clickItem"
    :class="itemClass"
    :data-name="name"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "g-tabs-item",
  data() {
    return {
      active: false
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    }
  },
  inject: ["eventBus"],
  computed: {
    itemClass() {
      return {
        active: this.active,
        disabled: this.disabled
      };
    }
  },
  created() {
    if (this.eventBus) {
      this.eventBus.$on("update:selected", (name, vm) => {
        if (name === this.name) {
          // console.log(this.name+'选中');
          this.active = true;
        } else {
          // console.log(this.name+'未选中');
          this.active = false;
        }
      });
    }
  },
  methods: {
    clickItem(val) {
      if (this.disabled) {
        return;
      }
      this.eventBus
        ? this.eventBus.$emit("update:selected", this.name, this)
        : "";
    }
  }
};
</script>

<style lang="scss" scope>
$tab-height: 40px;
.tabs-item {
  cursor: pointer;
  padding: 0 1em;
  flex-shrink: 0;
  line-height: $tab-height;
  min-height: $tab-height;
  &.active {
    // background: red;
    // color: #3eaf7c;
  }
  &.disabled {
    cursor: not-allowed;
    color: gray;
  }
}
</style>
