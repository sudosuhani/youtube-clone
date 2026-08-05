 
import {  YOUTUBE_ICON_URL } from "../../utils/constants";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <div className="bg-[#282828] px-6 flex fixed top-0 w-screen items-center justify-between">
      <div className="flex items-center">
        <MenuIcon className="cursor-pointer" />
        <img
          className="h-12 cursor-pointer ml-4"
          alt="logo"
          src={YOUTUBE_ICON_URL}
        />
      </div>
      <div className="flex items-center w-[50%] px-4">
        <input
          className="h-8 w-full bg-[#282828] text-white px-4 outline-none border border-gray-400 rounded-l-full"
          type="text"
          placeholder="Search"
        />
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
