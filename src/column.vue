<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
let validator = value => {
  let valid = true;
  let keys = Object.keys(value);
  keys.forEach(key => {
    if (!["col", "offset"].includes(key)) {
      valid = false;
    }
  });
  return valid;
};
export default {
  name: "g-col",
  props: {
    col: {
      type: [String, Number]
    },
    offset: {
      type: [String, Number]
    },
    phone: {
      type: Object,
      validator
    },
    pad: {
      type: Object,
      validator
    },
    narrowPc: {
      type: Object,
      validator
    },
    pc: {
      type: Object,
      validator
    },
    bigPc: {
      type: Object,
    }
  },
  data() {
    return {
      gutter: 0
    };
  },
  computed: {
    //col--列的class
    colClass() {
      let { col, offset, phone, pad, narrowPc, pc, bigPc } = this;
      return [
        col && `col-${col}`,
        offset && `offset-${offset}`,
        phone && `col-phone-${phone.col}`,
        pad && `col-pad-${pad.col}`,
        narrowPc && `col-narrowPc-${narrowPc.col}`,
        pc && `col-pc-${pc.col}`,
        bigPc && `col-bigPc-${bigPc.col}`
      ];
    },
    // col--列的行内样式
    colStyle() {
      let { gutter } = this;
      return {
        paddingLeft: gutter / 2 + "px",
        paddingRight: gutter / 2 + "px"
      };
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.col {
  /*width: 50%;*/
  @for $i from 1 through 24 {
    &.col-#{$i} {
      width: $i / 24 * 100%;
    }
  }
  @for $j from 1 through 24 {
    &.offset-#{$j} {
      margin-right: $j / 24 * 100%;
    }
  }
}
@media (max-width: 576px) {
  .col {
    @for $i from 1 through 24 {
      &.col-phone-#{$i} {
        width: $i / 24 * 100%;
      }
    }
    @for $j from 1 through 24 {
      &.offset-phone-#{$j} {
        margin-right: $j / 24 * 100%;
      }
    }
  }
}
@media (min-width: 577px) and (max-width: 768px) {
  .col {
    @for $i from 1 through 24 {
      &.col-pad-#{$i} {
        width: $i / 24 * 100%;
      }
    }
    @for $j from 1 through 24 {
      &.offset-pad-#{$j} {
        margin-right: $j / 24 * 100%;
      }
    }
  }
}
@media (min-width: 769px) and (max-width: 992px) {
  .col {
    @for $i from 1 through 24 {
      &.col-narrow-pc-#{$i} {
        width: $i / 24 * 100%;
      }
    }
    @for $j from 1 through 24 {
      &.offset-narrow-pc-#{$j} {
        margin-right: $j / 24 * 100%;
      }
    }
  }
}
@media (min-width: 993px) and (max-width: 1200px) {
  .col {
    @for $i from 1 through 24 {
      &.col-pc-#{$i} {
        width: $i / 24 * 100%;
      }
    }
    @for $j from 1 through 24 {
      &.offset-pc-#{$j} {
        margin-right: $j / 24 * 100%;
      }
    }
  }
}
@media (min-width: 1201px) {
  .col {
    @for $i from 1 through 24 {
      &.col-big-pc-#{$i} {
        width: $i / 24 * 100%;
      }
    }
    @for $j from 1 through 24 {
      &.offset-big-pc-#{$j} {
        margin-right: $j / 24 * 100%;
      }
    }
  }
}
</style>