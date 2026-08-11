import { useEffect, useState } from "react";
import getPopularVideos from "../../../utils/helperFunctions/getPopularVideos";
import { VideoCard, SkeletonContainer } from "../../";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { setNextSetId, setPopularVideo } from "../../../store/slices/ytSlice";

const VideoContainer = () => {

  useEffect(() => {
    fetchVideos();
  }, []);

  const dispatch = useDispatch();

  const popularVideo = useSelector(state => state.youtube.popularVideo);
  const token = useSelector(state => state.youtube.nextSetId);

  const fetchMoreData = async () => {
    const response = await getPopularVideos(token);
    dispatch(setPopularVideo([...popularVideo, ...response.items]));
    dispatch(setNextSetId(response?.nextPageToken));
  };

  const fetchVideos = async () => {
    const response = await getPopularVideos();
    console.log(response)

    dispatch(setPopularVideo(response?.items));
    dispatch(setNextSetId(response?.nextPageToken));
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
        height={"calc(100vh - 96px)"}
        className="no-scrollbar"
        loader={<SkeletonContainer />}
      >
        <div className="grid grid-cols-3 gap-x-4 gap-y-2">
          {popularVideo?.map((video, index) => {
            return <VideoCard key={video?.id + index} video={video} />;
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default VideoContainer;
