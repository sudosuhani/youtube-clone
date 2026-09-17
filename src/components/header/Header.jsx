import { YOUTUBE_ICON_URL } from "../../utils/constants";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import getAutoSuggestion from "../../utils/helperFunctions/getAutoSuggestion";
import { useDispatch, useSelector } from "react-redux";
import { AutoSuggestion } from "../index";
import { setAutoSuggestionData, setIsShowAutoSuggestion, setSearchQuery } from "../../store/slices/searchSlice";
import getSearchResult from "../../utils/helperFunctions/getSearchResult";

const Header = () => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const dispatch = useDispatch();
  const autoSuggestionResultRecord = useSelector((state) => state.search.autoSuggestionResultRecord);
  const searchQuery = useSelector((state) => state.search.searchQuery);

  useEffect(() => {
    let timer;
    if(autoSuggestionResultRecord[searchQuery]){
      dispatch(setAutoSuggestionData(autoSuggestionResultRecord[searchQuery]))
    }else{
      timer = setTimeout(() =>  getAutoSuggestion(searchQuery, dispatch), 400);
    }
    
    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery])



  const handleInputChange = (e) => {
    if(e.target.value.length > 0){
      setIsSearchBarOpen(true);
      dispatch(setIsShowAutoSuggestion(true));
    }else{
      setIsSearchBarOpen(false);
    }

    dispatch(setSearchQuery(e.target.value));
  };

  const searchForQuery = () => {
    getSearchResult(searchQuery, dispatch);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
  }

  const searchOnEnter = (e) => {
    if (e.key === "Enter") {
      searchForQuery();
    }
  }

  return (
    <div className="bg-[#282828] px-6 flex z-10 fixed top-0 w-screen items-center h-12 justify-between">
      <div className="flex items-center">
        <div className="hidden md:block">
          <MenuIcon className="cursor-pointer" />
        </div>
        <Link to={"/"}>
          <img
            className="h-12 cursor-pointer ml-4"
            alt="logo"
            src={YOUTUBE_ICON_URL}
          />
        </Link>
      </div>
      <div className="flex items-center w-[90%] md:w-[50%] px-4">
        <div className="relative w-full">
          <input
            className="h-8 w-full bg-[#282828] text-white px-4 outline-none border border-gray-400 rounded-l-full"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={(e) => searchOnEnter(e)}
          />
          <div className={`${(isSearchBarOpen) ? 'absolute' : 'none'} w-full`}>
              <AutoSuggestion />
          </div>
        </div>
        <button onClick={searchForQuery} className="rounded-r-full h-8 text-white border border-gray-400 px-4 bg-[#222222]">
          <SearchIcon />
        </button>
      </div>
      <div className="hidden md:block cursor-pointer">
        <PersonIcon />
      </div>
    </div>
  );
};

export default Header;
