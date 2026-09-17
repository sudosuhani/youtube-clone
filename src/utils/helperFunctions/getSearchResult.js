import axios from "axios";
import { setPopularVideo } from "../../store/slices/ytSlice";
import { setAutoSuggestionData, setIsShowAutoSuggestion } from "../../store/slices/searchSlice";

const getSearchResult = async (query, dispatch) => {

    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${import.meta.env.VITE_GOOGLE_API_KEY}`

    try{
        const response = await axios.get(url);
        dispatch(setPopularVideo(response?.data?.items));
        dispatch(setAutoSuggestionData([]));
        dispatch(setIsShowAutoSuggestion(false));

    }catch(error){
        console.log('Error in getSearchResult: ', error)
        return [];
    }
}

export default getSearchResult;