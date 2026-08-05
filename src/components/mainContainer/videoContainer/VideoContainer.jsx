import { useEffect, useState } from "react";
import getPopularVideos from "../../../utils/helperFunctions/getPopularVideos";
import { VideoCard, SkeletonContainer } from "../../";
import InfiniteScroll from "react-infinite-scroll-component";
// import { setPopularVideo } from "../../../store/slices/ytSlice";
// import { useSelector } from "react-redux";

const VideoContainer = () => {
  useEffect(() => {
    fetchVideos();
  }, []);

  const [popularVideo, setPopularVideo] = useState([]);
  const [token, setToken] = useState([]);



  // const popularVideo = useSelector((state) => state?.popularVideo);
  const fetchMoreData = async () => {
    console.log("fetch more data");
    const response = await getPopularVideos(token);
    console.log('response >>', response)
    setPopularVideo((video) => [...video, ...response.items]);
    setToken(response?.nextPageToken);
  };

  const fetchVideos = async () => {
    const response = await getPopularVideos();
    setPopularVideo(response?.items);
    setToken(response?.nextPageToken);
  };

  if (popularVideo.length === 0) {
    return <SkeletonContainer />;
  }

  return (
    <div className="overflow-x-hidden">
      <InfiniteScroll
        dataLength={popularVideo.length}
        next={fetchMoreData}
        hasMore={true}
        height={'calc(100vh - 90px)'}
        className="no-scrollbar"
        loader={<SkeletonContainer />}
      >
        <div className="grid grid-cols-3 ">
          {popularVideo?.map((video, index) => {
            return <VideoCard key={video?.id + index} video={video} />;
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default VideoContainer;
