const dev = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BACKEND_URL': dev ? '' : '/gh-pages-playground',
};
