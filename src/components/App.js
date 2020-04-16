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
      currentVideo: "",
      videoList: fakeData,
    };
    this.serchClick = this.serchClick.bind(this);
  }

  componentDidMount() {
    this.serchClick("codestates", 5, YOUTUBE_API_KEY);
  }

  serchClick(query, max, key) {
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
        <Nav searchVideo={this.serchClick} />{" "}
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />{" "}
        </div>{" "}
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} />{" "}
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
