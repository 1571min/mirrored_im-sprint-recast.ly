export const searchYouTube = ({ query, max, key }, callback) => {
  // TODO
  let url = `https://www.googleapis.com/youtube/v3/search?+key=${key}&part=snippet&q=${query}&maxResults=${max}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => callback(data.items));
};
