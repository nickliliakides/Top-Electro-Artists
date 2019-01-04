import React from 'react';
import './Dj.css';

const Dj = ({ name, genre, nationality, about, picture, releases }) => {
  return (
    <div className="main-container">
      <div className="box">
        <img
          className="image img-thumbnail"
          src={picture}
          alt="Artist"
          style={{ width: '320px', height: '200px', borderRadius: '4px' }}
        />
      </div>
      <div className="box2">
        <h2 className="text-center nam">{name}</h2>
        <h4 className="text-center gen">Genre: {genre}</h4>
        <h6 className="text-center nat">Nationality: {nationality}</h6>
      </div>
      <div className="box3">
        <h4 id="bt">Bio:</h4>
        <p className="bio">{about}</p>
        <footer>
          <small>
            <a target="_blank" rel="noopener noreferrer" href={releases}>
              Latest Releases on Beatport
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
};

export default Dj;
