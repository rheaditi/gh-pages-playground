import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <div>
    {children}
  </div>
);

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  children: PropTypes.element,
};
