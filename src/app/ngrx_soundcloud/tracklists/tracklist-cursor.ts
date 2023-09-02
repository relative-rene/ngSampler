import { Tracklist } from './models/tracklist';


export interface TracklistCursor  {
  currentTrackId:number;
  nextTrackId: number;
  previousTrackId: number;
}

export function getTracklistCursor(trackId: number, { trackIds }: Tracklist): TracklistCursor {
  let index = trackIds.indexOf(trackId);
  let nextTrackId;
  let previousTrackId;

  if (index !== -1) {
    if (index < trackIds.length - 1) {
      nextTrackId = trackIds[index] + 1;
    }

    if (index > 0) {
      previousTrackId = trackIds[index] - 1;
    }
  }

  return  Object.create({
    currentTrackId: trackId,
    nextTrackId,
    previousTrackId
  }) as TracklistCursor;
}


