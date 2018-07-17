import React from 'react';
import Helmet from 'react-helmet';

const Layout = ({ children, data }) => (
  <Helmet
    title={data.site.siteMetadata.title}
  >
    {children}
  </Helmet>
);

Layout.defaultProps = {
  children: null,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
