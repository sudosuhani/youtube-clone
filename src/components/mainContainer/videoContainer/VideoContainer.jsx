import { useEffect, useState } from "react";
import getPopularVideos from "../../../utils/helperFunctions/getPopularVideos";
import { VideoCard, SkeletonContainer } from "../../";
import InfiniteScroll from "react-infinite-scroll-component";

const VideoContainer = () => {
  useEffect(() => {
    fetchVideos();
  }, []);

  const [popularVideo, setPopularVideo] = useState([]);
  const [token, setToken] = useState([]);

  const fetchMoreData = async () => {
    const response = await getPopularVideos(token);
    setPopularVideo((video) => [...video, ...response.items]);
    setToken(response?.nextPageToken);
  };

  const fetchVideos = async () => {
    const response = await getPopularVideos();
    setPopularVideo(response?.items);
    setToken(response?.nextPageToken);
  };

  if (popularVideo.length === 0) {
    return (
        <SkeletonContainer />
    );
  }

  return (
    <div className="overflow-x-hidden">
      <InfiniteScroll
        dataLength={popularVideo.length}
        next={fetchMoreData}
        hasMore={true}
        height={"calc(100vh - 90px)"}
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
