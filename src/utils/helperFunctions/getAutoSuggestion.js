import axios from "axios";
import jsonpAdapter from "axios-jsonp";
import { setAutoSuggestionResultRecord } from "../../store/slices/ytSlice";

const getAutoSuggestion = async (query, dispatch) => {
    try {
        const GOOGLE_AC_URL = `https://youtube.krabhiraj99.workers.dev/complete/search?client=firefox&ds=yt&q=${encodeURIComponent(query)}`
        const response = await axios({
          url: GOOGLE_AC_URL,
          method: "GET",
          adapter: jsonpAdapter,
        });

        console.log('response >>', response)
    
        if (response.status !== 200) {
          throw new Error("Suggest API not 200!");
        }

        dispatch(setAutoSuggestionResultRecord({[query]: response.data[1]}))
        return response.data[1];
    
      } catch (error) {
        console.error("Error fetching suggestions:", error);
        throw error;
      }
}

export default getAutoSuggestion;

// https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}