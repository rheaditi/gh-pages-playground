import React from 'react';
import styles from '../styles/pages/404.module.css';

import sad404Page from '../images/sad-404-page.svg';

const NotFoundPage = () => (
  <div className="text-center">
    <img
      src={sad404Page}
      alt="Oops. Not Found!"
      width="220"
      height="300"
      className={styles.image}
    />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
);

export default NotFoundPage;
