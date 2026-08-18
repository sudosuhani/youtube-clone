import { VIDEO_DETAIL_API } from "../constants";

const fetchChannelLogo = async (channelLogo) => {
  try {
    const res = await fetch(channelLogo);
    const data = await res.json();
    if (data.items && data.items.length > 0) {
      const channelLogoUrl = data.items[0].snippet.thumbnails.default.url;
      return channelLogoUrl;
    }
  } catch (error) {
    console.error("Error fetching channel logo:", error);
  }
};

const fetchChannelSubscriber = async (channelId) => {
    try{
        const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${import.meta.env.VITE_GOOGLE_API_KEY}`)
        const data = await response.json();
        if (data.items && data.items.length > 0) {
            const subscriberCount = data.items[0].statistics.subscriberCount;
            return subscriberCount;
        } else {
            console.log('No channel statistics found');
        }
    }catch(error){
        console.error('Error fetching subscriber count:', error)
    }
}

const getVideoDetails = async (videoId) => {
  try {
    const response = await fetch(VIDEO_DETAIL_API(videoId));
    const data = await response.json();
    if (data.items && data.items.length > 0) {
      const videoDetails = data.items[0].snippet;

      const title = videoDetails.title;
      const description = videoDetails.description;
      const channelName = videoDetails.channelTitle;
      const channelId = videoDetails.channelId;
      const channelLogo = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${import.meta.env.VITE_GOOGLE_API_KEY}`;

      const channelLogoUrl = await fetchChannelLogo(channelLogo);
      const subscriberCount = await fetchChannelSubscriber(channelId);
      return {
        title,
        description,
        channelName,
        channelLogoUrl,
        subscriberCount
      };
    }
  } catch (error){
    console.error("Error fetching video details:", error);
  }
};

export default getVideoDetails;
