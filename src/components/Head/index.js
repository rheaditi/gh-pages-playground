import React from 'react';
import Helmet from 'react-helmet';
import site from '../../../data/site';

const Head = () => {
  const { title, meta, baseUrl } = site;
  return (<Helmet
    title={title}
    meta={meta}>
    <link rel="canonical" href={baseUrl} />
    <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,500" rel="stylesheet" />
  </Helmet>);
};

export default Head;
