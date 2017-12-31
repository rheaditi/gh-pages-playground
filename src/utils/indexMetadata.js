import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const MetaData = ({ metaData }) => (
  <Helmet
    title={metaData.title}
    meta={[
      { name: 'author', content: metaData.persona.name },
      { name: 'copyright', content: metaData.copyright },
      { name: 'keywords', content: metaData.keywords },

      { name: 'description', content: metaData.description },
      {
        name: 'twitter:description',
        property: 'og:description',
        content: metaData.description,
      },

      { name: 'twitter:title', property: 'og:title', content: metaData.title },
      { property: 'og:site_name', content: metaData.title },
      { property: 'og:type', content: `website` },
      { property: 'og:url', content: metaData.baseUrl },
      { property: 'og:locale', content: metaData.openGraph.locale },
      {
        property: 'og:locale:alternate',
        content: metaData.openGraph.localeAlternate,
      },

      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:site', content: `@${metaData.persona.handle}` },
      { property: 'twitter:creator', content: `@${metaData.persona.handle}` },

      { name: 'msapplication-TileColor', content: metaData.appTheme.mainColor },
      { name: 'theme-color', content: metaData.appTheme.mainColor },
    ]}
  />
);

MetaData.propTypes = {
  metaData: PropTypes.shape({
    baseUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    keywords: PropTypes.string.isRequired,
    persona: PropTypes.shape({
      name: PropTypes.string.isRequired,
      handle: PropTypes.string.isRequired,
    }).isRequired,
    openGraph: PropTypes.shape({
      locale: PropTypes.string.isRequired,
      localeAlternate: PropTypes.string.isRequired,
    }).isRequired,
    appTheme: PropTypes.shape({
      mainColor: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MetaData;
