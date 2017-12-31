import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children }) => <div className="card">{children}</div>;
const Body = ({ children }) =>
  children ? <div className="card-body">{children}</div> : null;
const Footer = ({ children }) =>
  children ? <div className="card-footer">{children}</div> : null;

Card.propTypes = {
  children: PropTypes.node,
};

Card.defaultProps = {
  children: null,
};

Body.propTypes = {
  children: PropTypes.node,
};

Body.defaultProps = {
  children: null,
};

Footer.propTypes = {
  children: PropTypes.node,
};

Footer.defaultProps = {
  children: null,
};

export default Card;
export { Card, Body, Footer };
