import { YOUTUBE_ICON_URL } from "../../utils/constants";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";
import getAutoSuggestion from "../../utils/helperFunctions/getAutoSuggestion";
import { useDispatch, useSelector } from "react-redux";
import { AutoSuggestion } from "../index";
import { setAutoSuggestionData } from "../../store/slices/ytSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const dispatch = useDispatch();
  const autoSuggestionResultRecord = useSelector((state) => state.youtube.autoSuggestionResultRecord);
  const handleInputChange = (e) => {
    
    if(e.target.value.length > 0){
      setIsSearchBarOpen(true);
    }else{
      setIsSearchBarOpen(false);
    }

    setSearchQuery(e.target.value);
    if(autoSuggestionResultRecord[e.target.value]){
      dispatch(setAutoSuggestionData(autoSuggestionResultRecord[e.target.value]))
    }else{
      getAutoSuggestion(e.target.value, dispatch);
    }
  };

  return (
    <div className="bg-[#282828] px-6 flex z-10 fixed top-0 w-screen items-center h-12 justify-between">
      <div className="flex items-center">
        <MenuIcon className="cursor-pointer" />
        <Link to={"/"}>
          <img
            className="h-12 cursor-pointer ml-4"
            alt="logo"
            src={YOUTUBE_ICON_URL}
          />
        </Link>
      </div>
      <div className="flex items-center w-[50%] px-4">
        <div className="relative w-full">
          <input
            className="h-8 w-full bg-[#282828] text-white px-4 outline-none border border-gray-400 rounded-l-full"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <div className={`${isSearchBarOpen ? 'absolute' : 'none'} w-full`}>
              <AutoSuggestion />
          </div>
        </div>
        <button className="rounded-r-full h-8 text-white border border-gray-400 px-4 bg-[#222222]">
          <SearchIcon />
        </button>
      </div>
      <div className="cursor-pointer">
        <PersonIcon />
      </div>
    </div>
  );
};

export default Header;
