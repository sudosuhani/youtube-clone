/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";

const AutoSuggestion = () => {
  const autoSuggestionData = useSelector(
    (state) => state.youtube.autoSuggestionData
  );

  if (autoSuggestionData.length === 0) return;

  return (
    <div className="py-2 bg-black rounded-lg">
      {autoSuggestionData.map((data) => {
        return (
          <div
            className="flex items-center py-1 px-3 my-1 gap-x-3 hover:bg-[#212121] cursor-pointer"
            key={data}
          >
            <SearchIcon sx={{ fontSize: 20, color: "#D9D9D9",}} />
            <p>{data}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AutoSuggestion;
