import React from 'react';
import { Helmet } from 'react-helmet';

import Page from '../components/page';

const Layout = ({ children, data }) => (
  <div>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <link href='https://fonts.googleapis.com/css?family=Rubik' rel='stylesheet' />
    </Helmet>
    <Page>
      {children()}
    </Page>
  </div>
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
