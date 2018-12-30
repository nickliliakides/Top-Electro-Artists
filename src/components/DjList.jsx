import React from 'react';
import Dj from './Dj';

const DjList = ({ djs }) => {
  return (
    <div>
      {djs.map(dj => {
        return (
          <Dj
            key={dj.id}
            name={dj.name}
            genre={dj.genre}
            nationality={dj.nationality}
            about={dj.about}
            picture={dj.picture}
            releases={dj.releases}
          />
        );
      })}
    </div>
  );
};

export default DjList;
