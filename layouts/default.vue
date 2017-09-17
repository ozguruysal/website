<template>
    <div>
        <app-header></app-header>
        <nuxt/>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';

export default {
    components: {
        AppHeader,
        AppFooter,
    },
};
</script>
