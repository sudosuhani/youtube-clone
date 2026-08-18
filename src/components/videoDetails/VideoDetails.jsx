import { useParams } from "react-router-dom";
import { getYoutubeUrl } from "../../utils/constants";
import { useEffect, useState } from "react";
import getVideoDetails from "../../utils/helperFunctions/getVideoDetails";
import { formatViews } from "../../utils/helperFunctions/helper";
import InfiniteScroll from "react-infinite-scroll-component";
import getPopularVideos from "../../utils/helperFunctions/getPopularVideos";
import { useDispatch, useSelector } from "react-redux";
import { setNextSetRecommendId, setRecommendedVideo } from "../../store/slices/ytSlice";
import  { SkeletonContainer, VideoCardHorizontal} from "../index";

const VideoDetails = () => {
  const params = useParams();
  const [videoDetails, setVideoDetails] = useState([]);
  const [isDescriptionOpen, SetIsDescriptionOpen] = useState(false);
  const dispatch = useDispatch();

  const recommendedVideo = useSelector((state) => state.youtube.recommendedVideo);
  const nextSetRecommendId = useSelector((state) => state.youtube.nextSetRecommendId);

  useEffect(() => {
    fetchVideoDetails();
    fetchRecommendedVideo();
  }, [params?.id]);

  const fetchMoreData = async () => {
    const response = await getPopularVideos(nextSetRecommendId);
    dispatch(setRecommendedVideo([...recommendedVideo, ...response.items]));
    dispatch(setNextSetRecommendId(response?.nextPageToken));
  }


  const fetchRecommendedVideo = async () => {
    const response = await getPopularVideos();

    dispatch(setRecommendedVideo(response?.items));
    dispatch(setNextSetRecommendId(response?.nextPageToken));
  }

  const fetchVideoDetails = async () => {
    const response = await getVideoDetails(params?.id);
    setVideoDetails(response);
  };

  if (recommendedVideo.length === 0) {
    return (
        <SkeletonContainer />
    );
  }

  return (
    <div className="mt-12 p-6">
      <InfiniteScroll
        dataLength={recommendedVideo.length}
        next={fetchMoreData}
        hasMore={true}
        height={"calc(100vh - 96px)"}
        className="no-scrollbar"
      >
        <div className="flex">
          <div className="w-[60vw]">
            <iframe
              className="h-[65vh] w-full rounded-xl"
              src={getYoutubeUrl(params?.id)}
              referrerPolicy="strict-origin-when-cross-origin"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="py-2 px-1">
              <p className="text-xl font-bold line-clamp-1">{videoDetails?.title}</p>
              <div className="flex items-center pt-2">
                <img
                  className="rounded-full h-10"
                  src={videoDetails?.channelLogoUrl}
                  alt="channel-logo"
                />
                <div className="flex flex-col ml-3">
                  <p className="font-bold">{videoDetails?.channelName}</p>
                  <p className="text-xs text-[#949494]">{`${formatViews(
                    videoDetails?.subscriberCount
                  ).toUpperCase()} subscribers`}</p>
                </div>
                <button className="bg-white hover:bg-[#D9D9D9] text-black ml-6 font-semibold px-4 py-1 rounded-full">
                  Subscribe
                </button>
              </div>
              <div className="bg-[#000] rounded-lg px-2 py-4 my-3 w-full">
                {
                  isDescriptionOpen ? 
                  videoDetails?.description?.split("\n").map((line, index) => (
                    <p className={`${line === '' && 'pt-4'}`} key={index}>{line}</p>
                  )) : videoDetails?.description?.split("\n").slice(0,4).map((line, index) => (
                    <p className={`${line === '' && 'pt-4'}`} key={index}>{line}</p>
                  ))
                }
                <p onClick={() => SetIsDescriptionOpen((val) => !val)} className="mt-3 font-bold text-sm cursor-pointer">Show {`${isDescriptionOpen ? ' less' : ' more'}`}</p>
              </div>
            </div>
          </div>

          <div className="w-[40vw] pl-6">
            {recommendedVideo?.map((video, index) => {
              return <VideoCardHorizontal key={video?.id + index} video={video} />;
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default VideoDetails;
