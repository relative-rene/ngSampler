import { formatTrackTitle, streamUrl, trackImageUrl, waveformUrl } from '../utils';


export interface TrackData {
  artwork_url: string;
  duration: number;
  favoritings_count?: number;
  id: number;
  likes_count?: number;
  permalink_url: string;
  playback_count: number;
  stream_url: string;
  streamable: boolean;
  title: string;
  user: {
    avatar_url: string;
    id: number;
    permalink_url: string;
    username: string;
  };
  user_favorite?: boolean;
  waveform_url: string;
}

export interface Track {
  artworkUrl: undefined | string;
  duration: undefined |number;
  id: undefined |number;
  liked: boolean;
  likesCount: number;
  permalinkUrl: undefined |string;
  playbackCount: null |number;
  streamable: undefined |boolean;
  streamUrl: null |string;
  title: undefined |string;
  userId: undefined |number;
  username: undefined |string;
  userPermalinkUrl: undefined |string;
  waveformUrl: null |string;
}

export function createTrack(data: TrackData): Track {
  return Object.assign({},{
    artworkUrl: trackImageUrl(data),
    duration: data.duration,
    id: data.id,
    liked: !!data.user_favorite,
    likesCount: data.favoritings_count || data.likes_count || 0,
    permalinkUrl: data.permalink_url,
    playbackCount: data.playback_count || 0,
    streamable: data.streamable,
    streamUrl: data.streamable ? streamUrl(data.stream_url) : null,
    title: formatTrackTitle(data.title),
    userId: data.user.id,
    username: data.user.username,
    userPermalinkUrl: data.user.permalink_url,
    waveformUrl: waveformUrl(data.waveform_url)
  }) 
}
