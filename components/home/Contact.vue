<template>
    <section class="contact text-center pt-10 pb-10" id="contact">
        <div class="container">
            <div class="col">
                <h1 class="mb-5">Get in Touch with Me!</h1>
                <p class="lead">You can follow me or get in touch with me via the following sites or send me an email.</p>
                <ul class="social-links list-inline pt-5">
                    <li class="list-inline-item"><a class="twitter" href="https://twitter.com/_ozguruysal" target="_blank"><icon name="twitter" width="40" height="40"></icon></a></li>
                    <li class="list-inline-item"><a class="github" href="https://github.com/ozguruysal" target="_blank"><icon name="github" width="40" height="40"></icon></a></li>
                    <li class="list-inline-item"><a class="dribbble" href="https://dribbble.com/ozguruysal" target="_blank"><icon name="dribbble" width="40" height="40"></icon></a></li>
                    <li class="list-inline-item"><a class="behance" href="https://www.behance.net/ozguruysal" target="_blank"><icon name="behance" width="40" height="40"></icon></a></li>
                    <li class="list-inline-item"><a class="linkedin" href="https://www.linkedin.com/in/ozgur-uysal" target="_blank"><icon name="linkedin" width="40" height="40"></icon></a></li>
                    <li class="list-inline-item"><a class="email" id="email" href=""><icon name="envelope" width="40" height="40"></icon></a></li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import Icon from '../Icon.vue';

export default {
    name: 'contact',

    components: {
        Icon,
    },

    mounted() {
        // Trying to avoid email scraping bstrds
        document.querySelector('#email').href = `mailto:${process.env.email}`;
    },
};
</script>

<style lang="scss">
@import '../../assets/scss/overrides/bootstrap/variables';
@import '../../assets/scss/vendor/bootstrap/functions';
@import '../../assets/scss/vendor/bootstrap/variables';
@import '../../assets/scss/vendor/bootstrap/mixins';

.social-links {
    .list-inline-item {
        margin-bottom: 1rem;

        &:not(:last-child) {
            margin-right: 0.75rem;

            @include media-breakpoint-up(sm) {
                margin-right: 2.2rem;
            }
        }
    }

    a {
        color: $gray-900;

        &.twitter:hover { color: #1da1f2 }
        &.github:hover { color: #0366d6 }
        &.dribbble:hover { color: $pink }
        &.behance:hover { color: #0057ff }
        &.linkedin:hover { color: #0077b5 }
        &.email:hover { color: $blue }
    }
}
</style>
