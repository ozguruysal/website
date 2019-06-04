module.exports = {
    head: {
        title: 'Özgür Uysal | Designer & Front End Developer',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Portfolio Site for Özgür Uysal, Designer & Front End Developer' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
    },

    router: {
        // base: '/website/',
    },

    loading: { color: '#487fff' },

    css: [
        '@/assets/scss/main.scss',
    ],

    plugins: [
        '~/plugins/svg-sprite-loader',
        '~/plugins/vue-scrollto',
        { src: '~plugins/ga.js', ssr: false },
    ],

    build: {
        extend(config, ctx) {
            if (ctx.dev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/,
                });
            }

            // We are removing the SVGs from URL loader's test property
            // We'll handle them with svg-sprite-loader.js in plugins folder
            const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));
            svgRule.test = /\.(png|jpe?g|gif|webp)$/;
        },

        vendor: ['axios'],
    },

    env: {
        dribbbleToken: '9ef7253312909c40f804ca06c81668cbd9cccee1590e39cc4accd1bd4d8cbb95',
        email: 'ozguruysal@gmail.com',
    },
};
