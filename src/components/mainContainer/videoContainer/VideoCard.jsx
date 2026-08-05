/* eslint-disable react/prop-types */

import { formatViews } from "../../../utils/helperFunctions/helper"

const VideoCard = ({video}) => {
  return (
    <div className="flex flex-col w-96 shadow-md cursor-pointer  p-2 rounded-xl">
      <img className="h-60 w-96 rounded-xl object-cover" src={video?.snippet?.thumbnails?.high?.url} alt={'thumbnail'} />
      <p className="font-bold w-96 line-clamp-2">{video?.snippet?.title}</p>
      <p className="text-sm text-gray-300 hover:text-gray-100 w-96 text-left line-clamp-1">{video?.snippet?.channelTitle}</p>
      <p className="text-sm text-gray-300 hover:text-gray-100 w-96 text-left">{`${formatViews(video?.statistics?.viewCount)} views`}</p>
    </div>
  )
}

export default VideoCard