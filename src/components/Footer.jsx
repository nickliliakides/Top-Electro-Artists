import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div>
        Top Electro Artists &nbsp; &copy; <span>{year} </span> by Nikolaos
        Liliakidis. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
