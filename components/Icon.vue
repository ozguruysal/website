<template>
    <svg viewBox="0 0 20 20" class="icon align-middle d-inline" width="1em" height="1em">
        <use v-bind:xlink:href="href"></use>
    </svg>
</template>

<script>
export default {
    name: 'icon',

    props: {
        name: String,
    },

    computed: {
        href() {
            return `#${this.name}`;
        },
    },
};
</script>
