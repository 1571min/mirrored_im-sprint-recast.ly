import React from 'react';
import Nav from './Nav';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import { fakeData } from './__test__/fakeData';
import { searchYouTube } from './../searchYouTube';
import { YOUTUBE_API_KEY } from '../../config/youtube';
import PlayList from './PlayList';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: fakeData[0],
      videoList: [],
      playList: [],
      query: '',
    };
    this.searchClick = this.searchClick.bind(this);
    this.clickVideo = this.clickVideo.bind(this);
    this.watchLaterClick = this.watchLaterClick.bind(this);
    this.playListClick = this.playListClick.bind(this);
  }

  componentDidUpdate() {
    localStorage.setItem('list', JSON.stringify(this.state.playList));
    if (!localStorage.getItem('query')) {
      localStorage.setItem('query', this.state.query);
    }
  }

  componentDidMount() {
    console.log('Mount');
    let query = localStorage.getItem('query');
    console.log(query);
    let init = {
      query: query ? query : '',
      max: 10,
      key: YOUTUBE_API_KEY,
    };

    let storeList = localStorage.getItem('list');

    searchYouTube(init, (data) => {
      this.setState({
        currentVideo: data[0],
        videoList: data,
        playList: storeList ? JSON.parse(storeList) : [],
      });
    });
  }

  clickVideo(video) {
    this.setState({
      currentVideo: video,
    });
  }

  searchClick(query, max, key) {
    searchYouTube({ query, max, key }, (data) => {
      this.setState({
        currentVideo: data[0],
        videoList: data,
        query: query,
      });
    });
  }
  watchLaterClick(video) {
    let checkList = false;
    this.state.playList.some((ele) => {
      if (ele.id.videoId === video.id.videoId) {
        console.log('이미추가된 비디오');
        checkList = true;
      }
    });
    if (checkList) {
      alert('이미 추가된 비디오입니다.');
      return;
    }
    this.setState({ playList: [video, ...this.state.playList] });
  }

  playListClick(index, video, xButton) {
    let olderList = this.state.playList;
    if (xButton) {
      this.setState({
        playList: [
          ...olderList.slice(0, index),
          ...olderList.slice(index + 1, olderList.length),
        ],
      });
    } else {
      this.setState({
        currentVideo: video,
        playList: [
          ...olderList.slice(0, index),
          ...olderList.slice(index + 1, olderList.length),
        ],
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Nav searchVideo={this.searchClick} />
        <div className="box video-player">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="box video-list">
          <VideoList
            videos={this.state.videoList}
            clickVideo={this.clickVideo}
            watchLaterClick={this.watchLaterClick}
          />
        </div>
        <div className="box play-list">
          <PlayList
            playList={this.state.playList}
            playListClick={this.playListClick}
          />
        </div>
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
