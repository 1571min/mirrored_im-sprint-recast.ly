import React, { useState } from "react";
import VideoListEntry from "./VideoListEntry";

// 실제 API를 쓰게 되면 이 fakeData는 더이상 import 하지 않아야 합니다.
import { fakeData } from "./__test__/fakeData";
console.log(fakeData);

const VideoList = () => {
  const [data] = useState(fakeData);
  return (
    <div className="video-list media">
      {data.map((ele, idx) => (
        <VideoListEntry
          snippet={ele.snippet}
          title={ele.snippet.title}
          description={ele.snippet.description}
          url={ele.snippet.thumbnails.default.url}
          key={idx}
        />
      ))}
    </div>
  );
};

export default VideoList;
