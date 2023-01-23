// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
    build: {
        transpile: ['vuetify'],
    },
    imports: {
        dirs: ['store']
    },
    modules: [
        [
            '@pinia/nuxt',
            { autoImports: ['defineStore', 'acceptHMRUpdate'] },
        ]
    ],
    extends: [
        '@nuxtjs/eslint-config-typescript',
    ],
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },
});
  

