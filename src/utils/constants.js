
export const YOUTUBE_ICON_URL =
  "https://www.logo.wine/a/logo/YouTube/YouTube-White-Full-Color-Dark-Background-Logo.wine.svg";

  export const categoryList = ['All', 'Music', 'Comedy Nights with Kapil', 'Podcasts', 'Sitcoms', 'Trailers', 'Thrillers', 'Gaming', 'Satire', 'Comedy Clubs', 'Roasts']

  export const YOUTUBE_VIDEO_API =  (apiKey) => {
      return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${apiKey}&maxResults=20`
  }