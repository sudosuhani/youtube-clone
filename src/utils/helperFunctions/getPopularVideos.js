import {  YOUTUBE_VIDEO_API } from "../constants";
const getPopularVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEO_API(import.meta.env.VITE_GOOGLE_API_KEY));
    const popularVideo = await response.json();
    return popularVideo;
}

export default getPopularVideos;