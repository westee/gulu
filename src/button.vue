<template>
  <button class="g-button" :class="iconPosition" @click="$emit('click')">
    <!--<svg class="icon" v-if="icon" >-->
    <!--<use :xlink:href="`#icon-${icon}`"></use>-->
    <!--</svg>-->
    <g-icon v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon name="loading" v-if="loading" class="loading"></g-icon>
    <span class="button-content">
      <!--<slot name="text"></slot>-->
      <slot></slot>
    </span>
  </button>
</template>

<script>
// import Vue from 'vue'
import Icon from "./icon"; //相对路径，不能使用'icon'
// Vue.component('g-icon', Icon)

export default {
  // props: ['icon','iconPosition']
  name: "g-button",
  components: {
    //局部注册
    "g-icon": Icon
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: "left",
      validator: function(value) {
        return !(value !== "left" && value !== "right");
      }
    }
  }
};
</script>

<style lang="scss">
@import "common.scss";
.g-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  .button-content {
    order: 2;
  }
  .icon {
    order: 1;
  }
  &.right {
    .button-content {
      order: 1;
    }
    .icon {
      order: 2;
    }
  }
  &:hover {
    border-color: $border-cover-hover;
  }

  &:active {
    background: $button-active-bg;
  }

  &:focus {
    outline: none;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .loading {
    animation: spin 2s infinite linear;
  }
}
</style>