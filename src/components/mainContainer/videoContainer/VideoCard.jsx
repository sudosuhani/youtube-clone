/* eslint-disable react/prop-types */

import { formatViews } from "../../../utils/helperFunctions/helper"

const VideoCard = ({video}) => {
  return (
    <div className="flex flex-col w-96 shadow-md cursor-pointer rounded-xl">
      <img className="h-60 w-96 rounded-xl object-cover" src={video?.snippet?.thumbnails?.high?.url} alt={'thumbnail'} />
      <div className="p-2">
        <p className="font-bold w-[360px] line-clamp-2">{video?.snippet?.title}</p>
        <p className="text-sm text-gray-300 hover:text-gray-100 w-[360px] text-left line-clamp-1">{video?.snippet?.channelTitle}</p>
        <p className="text-sm text-gray-300 hover:text-gray-100 w-[360px] text-left">{`${formatViews(video?.statistics?.viewCount)} views`}</p>
      </div>
    </div>
  )
}

export default VideoCard