const persona = {
  name: `Aditi Mohanty`,
  fullName: `Aditi Anomita Mohanty`,
  handle: `rheaditi`,
  location: `Bangalore, India`,
  twitter: `https://twitter.com/rheaditi`,
  github: `https://github.com/rheaditi`,
  facebook: `https://www.facebook.com/rheaditi`,
  linkedin: `https://www.linkedin.com/in/aditimohanty`,
  medium: `https://medium.com/@rheaditi`,
  googleplus: `https://plus.google.com/107897063491970383192`,
  quora: `https://www.quora.com/profile/Aditi-Mohanty-1`,
  angellist: `https://angel.co/aditimohanty`,
  dribbble: `https://dribbble.com/rheaditi`,
  instagram: `https://www.instagram.com/rheaditi`,
  lastfm: `https://www.last.fm/user/rheaditi`,
  codepen: `https://codepen.io/rheaditi`,
  youtube: `https://www.youtube.com/channel/UC6FqIhJcioETW6xXzN6ILZA`,
  doselect: `https://doselect.com/@rheaditi`,
  soundcloud: `https://soundcloud.com/rheaditi`,
  deviantart: `https://rheaditi.deviantart.com`,
};

const site = {
  baseUrl: `http://aditimohanty.com`,
  pathPrefix: `gh-pages-playground`,
  title: `${persona.name} | Front-End Engineer, Bangalore, India`,
  description: `${persona.name} (@${persona.handle}), a female human from
${persona.location} - ❤s Javascript, video-games & music. Employed
at ClearTax.in.`,
  gaTrackingId: `UA-97738324-1`,
};

const openGraph = {
  locale: `en_IN`,
  localeAlternate: `en_US`,
};

const appTheme = {
  mainColor: '#5A50C7',
  backgroundColor: `#5A50C7`,
};

const siteMetadata = {
  siteUrl: `${site.baseUrl}/${site.pathPrefix}`,
  baseUrl: site.baseUrl,
  pathPrefix: site.pathPrefix,
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
  persona,
  openGraph,
  appTheme,
};

module.exports = siteMetadata;
