const me = {
  name: `Aditi Mohanty`,
  fullName: `Aditi Anomita Mohanty`,
  handle: `rheaditi`,
  location: `Bangalore, India`,
};

const openGraph = {
  locale: `en_IN`,
  localeAlternate: `en_US`,
};

const appTheme = {
  mainColor: '#ff9a9e',
};

module.exports = {
  siteMetadata: {
    baseUrl: `http://aditimohanty.com`,
    title: `${me.name} | Front-End Engineer, Bangalore, India`,
    description: `${me.name} (@${me.handle}), a female human from ${me.location}
    - ❤s Javascript, video-games & music. Employed at ClearTax.in.`,
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
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
  pathPrefix: `gh-pages-playground`,
};
