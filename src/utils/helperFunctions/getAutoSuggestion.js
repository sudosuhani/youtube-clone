import axios from "axios";
import jsonpAdapter from "axios-jsonp";
import { setAutoSuggestionData, setAutoSuggestionResultRecord } from "../../store/slices/searchSlice";

const getAutoSuggestion = async (query, dispatch) => {
    try {
        const GOOGLE_AC_URL = `https://youtube.krabhiraj99.workers.dev/complete/search?client=firefox&ds=yt&q=${encodeURIComponent(query)}`
        const response = await axios({
          url: GOOGLE_AC_URL,
          method: "GET",
          adapter: jsonpAdapter,
        });

    
        if (response.status !== 200) {
          throw new Error("Suggest API not 200!");
        }
        const res = response.data[1];
        console.log('response >>', res)

        dispatch(setAutoSuggestionResultRecord({[query]: res}))
        dispatch(setAutoSuggestionData(res))
        return res;
    
      } catch (error) {
        console.error("Error fetching suggestions:", error);
        throw error;
      }
}

export default getAutoSuggestion;

// https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}