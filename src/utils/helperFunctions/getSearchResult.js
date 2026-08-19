import axios from "axios";

const getSearchResult = async (query) => {

    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${import.meta.env.VITE_GOOGLE_API_KEY}`

    try{
        const response = axios.get(url);
        console.log('getSearchResult >>', response)
    }catch(error){
        console.log('Error in getSearchResult: ', error)
    }
}

export default getSearchResult;