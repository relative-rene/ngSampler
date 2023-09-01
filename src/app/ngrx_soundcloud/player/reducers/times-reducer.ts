import { Action, ActionReducer } from '@ngrx/store';
import { PlayerActions } from '../player-actions';
import { Times, createTimesStateRecord } from './times-state';


export const initialState: Times = createTimesStateRecord() as Times;


export const timesReducer: ActionReducer<Times> = (state: Times = initialState, {payload, type}: Action) => {
  switch (type) {
    case PlayerActions.AUDIO_ENDED:
    case PlayerActions.PLAY_SELECTED_TRACK:
      return createTimesStateRecord() as Times;

    case PlayerActions.AUDIO_TIME_UPDATED:
      return Object.assign({...state},{...payload}) as Times;

    default:
      return state;
  }
};
