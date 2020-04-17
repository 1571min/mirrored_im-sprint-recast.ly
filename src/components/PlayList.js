import React from 'react';
import PlayListEntry from './PlayListEntry';

const PlayList = (props) => {
  const h2Style = {
    color: 'white',
  };
  return (
    <div>
      <h2 style={h2Style}>Watch later</h2>
      <ul className="play-list">
        {props.playList.map((ele, idx) => (
          <PlayListEntry
            video={ele}
            key={idx}
            index={idx}
            playListClick={props.playListClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default PlayList;
