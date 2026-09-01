/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import { formatViews } from "../../../utils/helperFunctions/helper"

const VideoCard = ({video}) => {
  const navigate = useNavigate();
  const formattedViews = formatViews(video?.statistics?.viewCount);
  const videoId = typeof(video?.id) === 'string' ? video?.id : video?.id?.videoId;
  const handleClick = () => {
    navigate(`/watch/${videoId}`);
  }
  return (
    <div onClick={handleClick} className="flex flex-col w-96 shadow-md cursor-pointer rounded-xl">
      <img className="h-60 w-96 rounded-xl object-cover" src={video?.snippet?.thumbnails?.high?.url} alt={'thumbnail'} />
      <div className="p-2">
        <p className="font-bold w-[360px] line-clamp-2">{video?.snippet?.title}</p>
        <p className="text-sm text-gray-300 hover:text-gray-100 w-[360px] text-left line-clamp-1">{video?.snippet?.channelTitle}</p>
        <p className="text-sm text-gray-300 hover:text-gray-100 w-[360px] text-left">{`${ isNaN(formattedViews) ? `${(Math.random()*10).toFixed(1)}m` : formattedViews } views`}</p>
      </div>
    </div>
  )
}

export default VideoCard