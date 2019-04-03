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
      // type: [String, Number]
      type: Object
    },
    offset: {
      // type: [String, Number]
      type: Object
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
      type: Object
    }
  },
  data() {
    return {
      gutter: 0
    };
  },
  methods:{
    createClass: function(type, typeStr = "default") {
        if (!type) {
          return [];
        }
        let arr = [];
        if (type.col) {
          arr.push(`col-${typeStr}-${type.col}`);
        }
        if (type.offset) {
          arr.push(`offset-${typeStr}-${type.offset}`);
        }
        return arr
      }
  },
  computed: {
    //col--列的class
    colClass() {
      let { col, offset, phone, pad, narrowPc, pc, bigPc } = this;
      return [
        ...this.createClass(col),
        ...this.createClass(offset),
        ...this.createClass(phone, 'phone'),
        ...this.createClass(pad, 'pad'),
        ...this.createClass(narrowPc, 'narrowPc'),
        ...this.createClass(pc, 'pc'),
        ...this.createClass(bigPc, 'bigPc'),
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
    &.col-default-#{$i} {
      width: $i / 24 * 100%;
    }
  }
  @for $j from 1 through 24 {
    &.offset-default-#{$j} {
      margin-right: $j / 24 * 100%;
    }
  }
  @media (max-width: 576px) {
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
  @media (min-width: 577px) {
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
  @media (min-width: 769px) {
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
  @media (min-width: 993px) {
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
  @media (min-width: 1201px) {
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