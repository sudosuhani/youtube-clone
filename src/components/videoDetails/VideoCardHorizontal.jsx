/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { formatViews } from "../../utils/helperFunctions/helper";

const VideoCardHorizontal = ({video}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/watch/${video?.id}`);
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  }

  return (
    <div onClick={handleClick} className="flex items-center gap-x-2 mb-2 py-2 w-full shadow-md cursor-pointer rounded-xl">
      <img className="h-24 rounded-xl object-cover" src={video?.snippet?.thumbnails?.high?.url} alt={'thumbnail'} />
      <div className="p-2">
        <p className="font-semibold text-sm line-clamp-2">{video?.snippet?.title}</p>
        <p className="text-xs text-gray-300 hover:text-gray-100 text-left line-clamp-1">{video?.snippet?.channelTitle}</p>
        <p className="text-xs text-gray-300 hover:text-gray-100 text-left">{`${formatViews(video?.statistics?.viewCount)} views`}</p>
      </div>
    </div>
  )
}

export default VideoCardHorizontal;