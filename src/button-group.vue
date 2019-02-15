<template>
    <div class="g-button-group">
        <slot></slot>
    </div>

</template>

<script>
    export default {
        name: 'g-button-group',
        mounted() {
            // console.log(this.$el.children)
            for(let node of this.$el.children){
                console.log(node.nodeName)
                if(node.nodeName !== 'BUTTON'){
                    console.error('老兄,g-button-group的子元素应该全是button')
                }
            }

        }
    }
</script>

<style lang="scss">
    .g-button-group{
        display: inline-flex;
        vertical-align: middle;

        > .g-button{
            border-radius: 0;
            margin-left: -1px;
            &:first-child{
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }
            &:last-child{
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
            &:hover{
                z-index: 1;
            }

        }
    }
</style>