import React from "react";
import Nav from "./Nav";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";
import { fakeData } from "./__test__/fakeData";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: fakeData,
    };
  }
  render() {
    return (
      <div>
        <Nav />{" "}
        <div className="col-md-7">
          <VideoPlayer video={this.state.data[0]} />{" "}
        </div>{" "}
        <div className="col-md-5">
          <VideoList videos={this.state.data} />{" "}
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
