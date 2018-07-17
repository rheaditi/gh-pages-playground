const ERROR = 2;
const WARN  = 1;
const OFF   = 0;

module.exports = {
  extends: 'airbnb',
  env: {
    'shared-node-browser': true,
  },
  globals: {
    graphql: true,
  },
  rules: {
    'react/prop-types': OFF,
    'jsx-quotes': [WARN, 'prefer-single'],
  },
};
