<template>
    <div class="row" :style="rowStyle">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'g-row',
        props: {
            gutter: {
                type: [Number, String]
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
    }
</style>