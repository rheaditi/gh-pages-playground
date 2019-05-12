const dev = process.env.NODE_ENV !== 'production';

const withTypescript = require('@zeit/next-typescript');
module.exports = withTypescript({
  exportPathMap: () => ({
    '/': { page: '/' },
  }),
  assetPrefix: dev ? '/' : 'gh-pages-playground',
});
