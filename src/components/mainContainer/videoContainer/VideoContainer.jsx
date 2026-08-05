import { useEffect, useState } from 'react'
import getPopularVideos from '../../../utils/helperFunctions/getPopularVideos';
import VideoCard from './VideoCard';

const VideoContainer = () => {
    const [popularVideo, setPopularVideo] = useState([]);
    useEffect(() => {
        fetchVideos();
        
    }, []);

    const fetchVideos = async () => {
        const response = await getPopularVideos();
        setPopularVideo(response?.items);
    }

  popularVideo.length === 0 && null;
  
  return (
    <div className='grid grid-cols-3'>
      {
        popularVideo?.map((video) => {
          return <VideoCard key={video?.id} video={video} />
        })
      }
        
    </div>
  )
}

export default VideoContainer