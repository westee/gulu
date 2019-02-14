<template>
    <button class="g-button" :class="iconPosition">
        <svg class="icon" v-if="icon" >
            <use :xlink:href="`#icon-${icon}`"></use>
        </svg>
        <span class="content">
            <slot name="text"></slot>
        </span>
    </button>
</template>

<script>
    export default {
        // props: ['icon','iconPosition']
        props:{
            icon: {},
            iconPosition: {
                type: String,
                default: 'left',
                validator: function(value){
                    return !(value !== 'left' && value !== 'right');
                }
            },

        }
    }
</script>

<style lang="scss">
    .g-button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        &.right{
            .content{order: 1}
            .icon{order: 2}
        }
        &:hover {
            border-color: var(--border-cover-hover);
        }

        &:active {
            background: var(--button-active-bg)
        }

        &:focus {
            outline: none
        }
    }
</style>