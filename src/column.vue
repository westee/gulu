<template>
    <div class="col" :class="[col && `col-${col}`,offset && `offset-${offset}`]"
         :style="{paddingLeft: gutter/2 + 'px', paddingRight: gutter/2 + 'px'}"
    >
        <div style="border: 1px solid green; height: 100px;">
            <slot></slot>
        </div>
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
        created() {
            console.log('col created');
        },
        mounted() {
            console.log('col mounted');
        },
    }
</script>

<style lang="scss" scoped>
    .col {
        height: 100px;
        width: 50%;
        /*border: 1px solid pink;*/
        /*background: cyan;*/
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