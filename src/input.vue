<template>
    <div :class="{'wrapper': true,'error': error} ">
        <input :value="inputValue" :disabled="disabled" v-bind:readonly="readonly"
               v-on:change="$emit('change', $event.currentTarget.value)" type="text"
               v-on:blur="$emit('blur', $event.currentTarget.value  )"
               v-on:input="$emit('input', $event.currentTarget.value)" v-on:focus="$emit('focus', $event.currentTarget.value)">
        <!--浏览器原生对象$event -->
        <template>
            <Icon name="warn" v-if="error"></Icon>
            <span class="message">{{ error }}</span>
        </template>

    </div>

</template>

<script>
    import Icon from './icon'

    export default {
        name: 'g-input',
        components: {
            'Icon': Icon
        },
        model: {
            prop: 'inputValue',
            event: 'input'
        },
        props: {
            inputValue: {
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                type: String
            }
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $border-radius: 4px;
    $red: #f14530;
    .wrapper {
        display: inline-flex;
        align-items: center;

        > input {
            padding: 9px 8px;
            height: $height;
            border: 1px solid $border-color;
            border-radius: $border-radius;

            &:hover {
                border-color: $border-color-hover;
            }

            &:focus {
                box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.5);
                outline: none;
            }

            /*&:disabled {*/
            /*outline: #333;*/
            /*border-color: #aaa;*/
            /*color: #ccc;*/
            /*}*/
            &[disabled],&[readonly] {
                border-color: #aaa;
                color: #ccc;
                cursor: not-allowed;
            }

        }

        &.error {
            :not(:last-child) {
                margin-right: 0.5em;
            }

            > input {
                border-color: $red;
                outline: $red;
                box-shadow: none;
            }

            .message {
                color: $red;
            }
        }

        .icon {
            color: $red;
        }
    }
</style>