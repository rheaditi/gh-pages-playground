const postcssNext = require('postcss-cssnext');
const postcssPresetEnv = require('postcss-preset-env');

const me = {
  name: `Aditi Mohanty`,
  fullName: `Aditi Anomita Mohanty`,
  handle: `rheaditi`,
  location: `Bangalore, India`,
};

const site = {
  baseUrl: `http://aditimohanty.com`,
  title: `${me.name} | Front-End Engineer, Bangalore, India`,
  description: `${me.name} (@${me.handle}), a female human from ${me.location}\
- ❤s Javascript, video-games & music. Employed at ClearTax.in.`,
};

const openGraph = {
  locale: `en_IN`,
  localeAlternate: `en_US`,
};

const appTheme = {
  mainColor: '#5A50C7',
  backgroundColor: `#5A50C7`,
};

module.exports = {
  siteMetadata: {
    baseUrl: site.baseUrl,
    title: site.title,
    description: site.description,
    keywords: `Aditi Mohanty, Aditi Anomita Mohanty, rheaditi, rhea aditi, Rhea Aditi Mohanty,
    developer, web developer, front end developer, software engineer,
    Bangalore, Bengaluru, India, Karnataka,
    Bhubaneshwar, Odisha, Orissa,
    PESIT, PES Institute of Technology, PESSE, PESU,
    UI, UX, User Interface, User Experience,
    Web, Designer, Developer, Engineer`,
    copyright: `Aditi Anomita Mohanty, Copyright (c) ${new Date().getFullYear()}`,
    persona: me,
    openGraph,
    appTheme,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [postcssNext, postcssPresetEnv],
        precision: 8,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: me.fullName,
        short_name: `@${me.handle}`,
        description: site.description,

        display: 'standalone',
        background_color: appTheme.backgroundColor,
        theme_color: appTheme.mainColor,

        start_url: './?utm_source=app_manifest',
        lang: `en-In`,
        orientation: 'portrait-primary',
        icons: [
          {
            src: '/img/m-icon/android-icon-36x36.png',
            sizes: '36x36',
            type: 'image/png',
            density: '0.75',
          },
          {
            src: '/img/m-icon/android-icon-48x48.png',
            sizes: '48x48',
            type: 'image/png',
            density: '1.0',
          },
          {
            src: '/img/m-icon/android-icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
            density: '1.5',
          },
          {
            src: '/img/m-icon/android-icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
            density: '2.0',
          },
          {
            src: '/img/m-icon/android-icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
            density: '3.0',
          },
          {
            src: '/img/m-icon/android-icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            density: '4.0',
          },
        ],
      },
    },
  ],
  pathPrefix: `gh-pages-playground`,
};
