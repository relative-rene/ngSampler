import { Map } from 'immutable';
import { createTrack, Track, TrackData } from '../models/track';
import { TracklistActions } from '../tracklist-actions';
import { ActionPayload } from '../../core';


export type TracksState = Map<number,Track>;

const initialState: TracksState = Map<number,Track>();


export const tracksReducer = (state: TracksState = initialState, action: ActionPayload) => {
  switch (action.type) {
    case TracklistActions.FETCH_TRACKS_FULFILLED:
      return state.withMutations(tracks => {
        action.payload.collection.forEach((data: TrackData) => {
          tracks.set(data.id, createTrack(data));
        });
      });

    default:
      return state;
  }
};
