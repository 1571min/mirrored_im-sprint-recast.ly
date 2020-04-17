import React from 'react';

const VideoListEntry = (props) => {
  return (
    <li
      className="video-list-entry"
      onClick={() => props.clickVideo(props.video)}
    >
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
        <div className="video-list-entry-detail">
          {props.video.snippet.description}
        </div>
      </div>
      <button
        onClick={() => {
          props.watchLaterClick(props.video);
        }}
      >
        나중에 보기
      </button>
    </li>
  );
};

export default VideoListEntry;
