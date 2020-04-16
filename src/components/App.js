import React from "react";
import Nav from "./Nav";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";
import { fakeData } from "./__test__/fakeData";
import searchYoutube from "./../searchYoutube";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: fakeData,
    };
    this.serchClick = this.serchClick.bind(this);
  }
  serchClick(query, max, key) {
    searchYoutube(query, max, key, (data) => {
      this.setState({ videoList: data });
    });
  }

  render() {
    return (
      <div>
        <Nav searchVideo={this.serchClick} />{" "}
        <div className="col-md-7">
          <VideoPlayer video={this.state.videoList[0]} />{" "}
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
