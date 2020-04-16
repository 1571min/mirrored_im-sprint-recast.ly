import React from "react";
import Nav from "./Nav";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";
import { fakeData } from "./__test__/fakeData";
import { searchYouTube } from "./../searchYouTube";
import { YOUTUBE_API_KEY } from "../../config/youtube";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: fakeData[0],
      videoList: fakeData,
    };
    this.searchClick = this.searchClick.bind(this);
    this.clickVideo = this.clickVideo.bind(this);
  }

  componentDidMount() {
    this.searchClick("codestates", 5, YOUTUBE_API_KEY);
  }

  clickVideo(video) {
    this.setState({
      currentVideo: video,
    });
  }

  searchClick(query, max, key) {
    console.log(query, max, key);
    console.log(searchYouTube);
    searchYouTube({ query, max, key }, (data) => {
      this.setState({
        currentVideo: data[0],
        videoList: data,
      });
    });
  }

  render() {
    return (
      <div>
        <Nav searchVideo={this.searchClick} />{" "}
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />{" "}
        </div>{" "}
        <div className="col-md-5">
          <VideoList
            videos={this.state.videoList}
            clickVideo={this.clickVideo}
          />{" "}
        </div>{" "}
      </div>
    );
  }
}

// const App = () => {
//   const [data, setData] = useState(fakeData);
//   return (
//     <div>
//       <Nav />
//       <div className="col-md-7">
//         <VideoPlayer video={data[0]} />
//       </div>
//       <div className="col-md-5">
//         <VideoList videos={data} />
//       </div>
//     </div>
//   );
// };

export default App;
