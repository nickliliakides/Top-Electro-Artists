import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div>
        Top Electro Artists &nbsp; &copy; <span>{year} </span> by{' '}
        <a
          className="mylink"
          href="https://nicklils.github.io/nikolaosliliakidis.github.io/"
          target="_blank"
        >
          Nikolaos Liliakidis
        </a>
        . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
