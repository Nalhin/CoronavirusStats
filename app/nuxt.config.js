export default {
  mode: 'spa',
  head: {
    title: 'Koronawirus w Polsce',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'Koronawirus',
        name: 'Koronawirus',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap',
      },
    ],
  },
  loading: { color: '#fff' },
  css: [],
  plugins: [],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/moment',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-149072321-2',
      },
    ],
  ],
  moment: {
    locales: ['pl'],
  },
  modules: ['@nuxtjs/svg'],
  build: {
    extend(config, ctx) {},
  },
};
