<template>
    <header>
        <nav class="navbar navbar-expand-md navbar-light bg-white" :class="{open: isMobileMenuOpen}">
            <nuxt-link class="navbar-brand" to="/">
                <svg @click="isMobileMenuOpen = false" xmlns="http://www.w3.org/2000/svg" width="150" height="33.7" viewBox="0 0 150 33.7"><path d="M9.1 6.4c-5 0-9.1 4.1-9.1 9.1s4.1 9.1 9.1 9.1 9.1-4.1 9.1-9.1-4.1-9.1-9.1-9.1zm0 13.4c-2.4 0-4.3-1.9-4.3-4.3s1.9-4.3 4.3-4.3 4.3 1.9 4.3 4.3-2 4.3-4.3 4.3zM43.6 6.4c-5 0-9.1 4.1-9.1 9.1s4.1 9.1 9.1 9.1 9.1-4.1 9.1-9.1-4.1-9.1-9.1-9.1zm0 13.4c-2.4 0-4.3-1.9-4.3-4.3s1.9-4.3 4.3-4.3 4.3 1.9 4.3 4.3-1.9 4.3-4.3 4.3zM20.1 11.3l6-.1-6 8.6v4.8h12.3v-4.8h-6.1l6.1-8.6V6.4H20.1"/><path d="M43.6 28.9c-2.4 0-4.3-1.9-4.3-4.3h-4.8c0 5 4.1 9.1 9.1 9.1s9.1-4.1 9.1-9.1h-4.8c0 2.3-1.9 4.3-4.3 4.3zM65.5 16.6v.3c0 1.6-1.3 2.9-2.9 2.9s-2.9-1.3-2.9-2.9V6.4h-4.8v10.5c0 4.3 3.5 7.8 7.8 7.8s7.8-3.5 7.8-7.8V6.4h-4.8v10.2zM77.3 7.5V6.4h-4.8v18.2h4.8v-9.1c0-2.4 1.9-4.3 4.3-4.3.6 0 1.1.1 1.6.3v-5c-.5-.1-1.1-.1-1.6-.1-1.6 0-3 .4-4.3 1.1zM98.2 17.1c0 2.9-2.4 5.3-5.3 5.3s-5.3-2.4-5.3-5.3V6.4h-2.1v10.7c0 4.1 3.4 7.5 7.5 7.5s7.5-3.4 7.5-7.5V6.4h-2.1v10.7zM143.6 9.7c-1.7-2-4.2-3.2-6.9-3.2-5 0-9.1 4.1-9.1 9.1s4.1 9.1 9.1 9.1c2.8 0 5.3-1.3 6.9-3.2v3.2h2.1V6.4h-2.1v3.3zm-7 12.7c-3.8 0-6.9-3.1-6.9-6.9s3.1-6.9 6.9-6.9c3.8 0 6.9 3.1 6.9 6.9s-3 6.9-6.9 6.9zM147.9 0h2.1v24.6h-2.1zM120.7 9.1c2.1-.9 4.1.7 4.1 2.7h2.1c0-2.8-2.3-5.1-5.1-5.1s-5.1 2.3-5.1 5.1c0 1.5.6 4.1 4.8 5.1 3.2.7 3.2 2.4 3.2 3 0 1.2-.7 2.3-1.7 2.7-2.1.9-4.1-.7-4.1-2.7h-2.1c0 2.8 2.3 5.1 5.1 5.1s5.1-2.3 5.1-5.1c0-1.5-.6-4.1-4.8-5.1-3.2-.7-3.2-2.4-3.2-3 0-1.2.7-2.3 1.7-2.7zM114.6 6.4l-5 12.1-5-12.1h-2.3l6.2 14.9-3.2 7.6h2.4l9.2-22.5M3.5 0h4.3v4.3H3.5zM10 0h4.3v4.3H10zM57 0h4.3v4.3H57zM63.4 0h4.3v4.3h-4.3z"/></svg>
            </nuxt-link>

            <div class="hamburger-menu ml-auto d-md-none" @click="isMobileMenuOpen = !isMobileMenuOpen">
                <span></span>
            </div>

            <div class="site-navigation ml-auto">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link" href="#about" @click="onNavClick">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="#work" @click="onNavClick">Work</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contact" @click="onNavClick">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isMobileMenuOpen: false,
        };
    },

    methods: {
        onNavClick(e) {
            this.isMobileMenuOpen = false;
            this.$scrollTo(e.target.hash);
        },
    },
};
</script>
