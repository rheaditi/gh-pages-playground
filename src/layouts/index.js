import React from 'react';
import PropTypes from 'prop-types';

import Head from '../components/Head';
import './index.scss';

const Layout = ({ children, data }) => (
  <div>
    {[
      <Head />,
      children(),
    ]}
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
