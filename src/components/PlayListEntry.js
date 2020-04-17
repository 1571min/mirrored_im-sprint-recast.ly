import React from 'react';

const PlayListEntry = (props) => {
  return (
    <li className="play-list-entry">
      <button
        onClick={() => props.playListClick(props.index, props.video, true)}
      >
        X
      </button>
      <div onClick={() => props.playListClick(props.index, props.video, false)}>
        <div className="media-left media-middle">
          <img
            className="media-object"
            src={props.video.snippet.thumbnails.default.url}
            alt=""
          />
        </div>
        <div className="media-body">
          <div className="video-list-entry-title">
            {props.video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  );
};

export default PlayListEntry;
