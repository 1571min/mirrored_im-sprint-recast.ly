import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { YOUTUBE_API_KEY } from '../config/youtube.example';

const title = 'hello world';
console.log(App);
console.log(YOUTUBE_API_KEY);

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);