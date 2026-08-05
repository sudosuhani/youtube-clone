import { useEffect, useState } from 'react'
import getPopularVideos from '../../../utils/helperFunctions/getPopularVideos';
import {  VideoCard, SkeletonContainer } from '../../';

const VideoContainer = () => {
    const [popularVideo, setPopularVideo] = useState([]);
    useEffect(() => {
        fetchVideos();
        
    }, []);

    const fetchVideos = async () => {
        const response = await getPopularVideos();
        setPopularVideo(response?.items);
    }

  if(popularVideo.length === 0){
      return <SkeletonContainer />
  };
  
  return (
    <div className='grid grid-cols-3 h-full overflow-y-auto no-scrollbar'>
      {
        popularVideo?.map((video) => {
          return <VideoCard key={video?.id} video={video} />
        })
      }
        
    </div>
  )
}

export default VideoContainer