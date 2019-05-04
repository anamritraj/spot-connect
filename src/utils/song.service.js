import axios from "axios";

const getRecentlyPlayedSongs = () => {
  return axios.get("http://localhost:9000/spotify/recent");
};

export { getRecentlyPlayedSongs };
