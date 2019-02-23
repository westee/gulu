<template>
    <div class="col" :class="colClass" :style="colStyle">
            <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'g-col',
        props: {
            col: {
                type: [String, Number],
            },
            offset: {
                type: [String, Number],

            },
        },
        data() {
            return {
                gutter: 0
            }
        },
        computed:{
            //col--列的class
            colClass(){
                let {col, offset} = this
                return [ col && `col-${col}`,offset && `offset-${offset}`]
            },
            // col--列的行内样式
            colStyle(){
                let {gutter }=  this
                return {paddingLeft: gutter/2 + 'px', paddingRight: gutter/2 + 'px'}
            }
        },
        created() {},
        mounted() {},
    }
</script>

<style lang="scss" scoped>
    .col {
        /*width: 50%;*/
        @for $i from 1 through 24 {
            &.col-#{$i} {
                width: $i / 24 *100%;
            }
        }
        @for $j from 1 through 24 {
            &.offset-#{$j} {
                margin-right: $j / 24 *100%;
            }
        }
    }
</style>