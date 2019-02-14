<template>
    <svg class="icon" >
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>

<script>
    export default {
        name: 'icon-name',
        props: ['name']
    }
</script>

<style>
    .icon {
        width: 1em;
        height: 1em;
        /*vertical-align: -0.15em;*/
        fill: currentColor;
        margin-top: 0.15em;
        overflow: hidden;
    }
</style>