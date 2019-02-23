<template>
    <div class="row" :style="rowStyle" :class="`align-${align}`">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'g-row',
        props: {
            gutter: {
                type: [Number, String]
            },
            align:{
                type: String,
                validator(val){
                    return ['left','right','center'].includes(val)
                }
            }
        },
        computed: {
            rowStyle() {
                return {
                    marginLeft: -this.gutter / 2 + 'px',
                    marginRight: -this.gutter / 2 + 'px'
                }
            }
        },
        created() {
        },
        mounted() {
            this.$children.forEach((val) => {
                val.gutter = this.gutter
            })
        },
    }
</script>

<style lang="scss" scoped>
    .row {
        display: flex;
        &.align-left {
            justify-content: flex-start;
        }
        &.align-right {
            justify-content: flex-end;
        }
        &.align-center {
            justify-content: center;
        }
    }
</style>