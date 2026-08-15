import { useParams } from "react-router-dom"
import { getYoutubeUrl, VIDEO_DETAIL_API } from "../../utils/constants";
import { useEffect, useState } from "react";

const VideoDetails = () => {
  const params = useParams();
  const [videoDetails, setVideoDetails] = useState([]);

  useEffect(() => {
    fetchVideoDetails();
  }, [])
  const fetchVideoDetails = async () => {
      const res = await fetch(VIDEO_DETAIL_API(params?.id));
      const response = await res.json();
      setVideoDetails(response?.items)
      console.log('response >>', response)

  }

  return (
    <div className="mt-12 p-6">
      <div className="flex items-center">
        <div className="w-[60vw]">
          <iframe
                className="h-[75vh] w-full rounded-xl"
                src={getYoutubeUrl(params?.id)}
                referrerPolicy="strict-origin-when-cross-origin"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>


        </div>

        <div>

        </div>
      </div>

    </div>
  )
}

export default VideoDetails