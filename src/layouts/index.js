import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

import MetaData from '../utils/indexMetadata';

const DefaultLayout = ({ children, data }) => (
  <div>
    {MetaData({ metaData: data.site.siteMetadata })}
    <div
      style={{
        margin: '3rem auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
);

DefaultLayout.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.shape({
    site: PropTypes.object,
  }).isRequired,
};

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
        keywords
        copyright
        baseUrl
        openGraph {
          locale
          localeAlternate
        }
        persona {
          name
          handle
        }
        appTheme {
          mainColor
        }
      }
    }
  }
`;
export default DefaultLayout;
