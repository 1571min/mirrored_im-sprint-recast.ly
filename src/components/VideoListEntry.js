import React, { useState } from "react";

const VideoListEntry = (props) => {
  const [data] = useState(props);
  return (
    <div className="video-list-entry">
      {console.dir(data)}
      <div className="media-left media-middle">
        <img className="media-object" src={data.url} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title">{data.title}</div>
        <div className="video-list-entry-detail">{data.description}</div>
      </div>
    </div>
  );
};

export default VideoListEntry;
