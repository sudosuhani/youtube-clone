import axios from "axios";
import { YOUTUBE_TOP_LEVEL_COMMENT_API } from "../constants";

const getTopLevelComments = async (videoId, nextPageToken) => {
    const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
    try{
        const response = await axios.get(YOUTUBE_TOP_LEVEL_COMMENT_API(apiKey, nextPageToken, videoId));
        return response?.data;
    }catch(err){
        console.log('Err while fetching top level comments: ', err)
        return [];
    }

}

export default getTopLevelComments;