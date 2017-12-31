import React from 'react';
import Link from 'gatsby-link';

// import styles from './index.module.css';
import { Card, Body as CardBody, Footer as CardFooter } from '../common/Card';

export default ({ persona }) => {
  const x = 'text';
  console.log(JSON.stringify(persona, null, 2));
  return (
    <section>
      <Card>
        <CardBody>
          <h1 className="persona-title">
            <span>aditi</span>mohanty
          </h1>
          <p>
            A female human from Bangalore, India - ❤ javascript, video-games
            &amp; music. Employed at{' '}
            <Link
              to="https://cleartax.in"
              title="FREE & easiest way of Efiling & Saving Income Tax in India"
            >
              ClearTax.in
            </Link>. Goes by <Link to="https://twitter.com/">@rheaditi</Link> on
            the interwebs.
          </p>
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    </section>
  );
};
