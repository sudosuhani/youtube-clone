
export const YOUTUBE_ICON_URL =
  "https://www.logo.wine/a/logo/YouTube/YouTube-White-Full-Color-Dark-Background-Logo.wine.svg";

  export const categoryList = ['All', 'Music', 'Comedy Nights with Kapil', 'Podcasts', 'Sitcoms', 'Trailers', 'Thrillers', 'Gaming', 'Satire', 'Comedy Clubs', 'Roasts']

  export const YOUTUBE_VIDEO_API =  (apiKey, nextPageToken) => {
      if(nextPageToken.length > 0){
        return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${apiKey}&maxResults=12&pageToken=${nextPageToken}`
      }else{
        return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${apiKey}&maxResults=12`
      }
  }

  export const getYoutubeUrl = (id) => {
    return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1`
}

export const VIDEO_DETAIL_API = (id) => {
  return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${import.meta.env.VITE_GOOGLE_API_KEY}`
}