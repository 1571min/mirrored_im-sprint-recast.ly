import React from 'react';
import Nav from './Nav';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import { fakeData } from './__test__/fakeData';

const App = () => (
  <div>
    <Nav />
    <div className="col-md-7">
      <VideoPlayer />
    </div>
    <div className="col-md-5">
      <VideoList videos={fakeData} />
    </div>
  </div>
);

export default App;
