<template>
    <button class="g-button" :class="iconPosition" @click="$emit('click')">
        <!--<svg class="icon" v-if="icon" >-->
            <!--<use :xlink:href="`#icon-${icon}`"></use>-->
        <!--</svg>-->
        <g-icon v-if="icon && !loading"  :name="icon"></g-icon>
        <g-icon name="loading" v-if="loading" class="loading"></g-icon>
        <span class="content">
            <!--<slot name="text"></slot>-->
            <slot></slot>
        </span>
    </button>
</template>

<script>
    export default {
        // props: ['icon','iconPosition']
        props:{
            icon: {},
            loading:{
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator: function(value){
                    return !(value !== 'left' && value !== 'right');
                }
            }
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
        .content{order:2}
        .icon{order:1}
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
        @keyframes spin {
            from{ transform: rotate(0deg) }
            to{ transform: rotate(360deg) }
        }
        .loading{
            animation: spin 2s infinite linear;
        }
    }
</style>