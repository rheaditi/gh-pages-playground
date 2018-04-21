const site = require('./data/site');

module.exports = {
  pathPrefix: site.pathPrefix,
  siteMetadata: site,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass'
  ],
};
