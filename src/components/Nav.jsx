import React from 'react';
import './Nav.css';

const Nav = ({ searchChange }) => {
  return (
    <nav className="navbar navbar-expand-sm sticky-top navbar-dark bg-dark mb-3">
      <div className="container">
        <a className="home" href="/">
          top electro artists
        </a>
        <img
          className="logo"
          src="https://i.pinimg.com/originals/89/2d/90/892d90036c53bc15fd13f9f7f93e9a78.png"
          style={{
            width: '110px',
            height: '60px',
            color: 'white'
          }}
        />

        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse search" id="navbarNav">
          <form className="form-inline ml-auto">
            <input
              type="search"
              className="form-control mr-2 search"
              placeholder="Search DJs or Genres"
              onChange={searchChange}
            />
          </form>
        </div>
      </div>
    </nav>

    // <div className="row my-nav">
    //   <div className="col-md-5">
    //     <a className="home" href="/">
    //       <div className="title text-center">Top Electroartists</div>
    //     </a>
    //   </div>
    //   <div className="col-md-2">
    //     <img
    //       className="logo"
    //       alt="logo"
    // src="https://i.pinimg.com/originals/89/2d/90/892d90036c53bc15fd13f9f7f93e9a78.png"
    // style={{
    //   width: "120px",
    //   height: "80px",
    //   color: "white"
    // }}
    //     />
    //   </div>

    //   <div className="col-md-5">
    //     <input
    //       type="search"
    //       className="form-control mr-2 input"
    //       placeholder="Search DJs, Genres"
    //       onChange={searchChange}
    //     />
    //   </div>
    // </div>
  );
};

export default Nav;
