import React from 'react';
import PropTypes from 'prop-types';

import PersonaCard from '../components/PersonaCard';

const IndexPage = ({ data }) => (
  <div>
    <PersonaCard persona={data.site.siteMetadata.persona} />
  </div>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.object.isRequired,
  }).isRequired,
};

export default IndexPage;
export const query = graphql`
  query PersonaQuery {
    site {
      siteMetadata {
        persona {
          handle
        }
      }
    }
  }
`;
