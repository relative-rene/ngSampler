import { Action } from '@ngrx/store';
import { UserData } from './models/user';
import { tracklistIdForUserLikes, tracklistIdForUserTracks } from './utils';
import { ActionPayload } from '../core/interfaces';


export class UserActions {
  static FETCH_USER_FAILED = 'FETCH_USER_FAILED';
  static FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED';

  static LOAD_USER = 'LOAD_USER';
  static LOAD_USER_LIKES = 'LOAD_USER_LIKES';
  static LOAD_USER_TRACKS = 'LOAD_USER_TRACKS';


  fetchUserFailed(error: any): ActionPayload {
    return {
      type: UserActions.FETCH_USER_FAILED,
      payload: error
    };
  }

  fetchUserFulfilled(user: UserData): ActionPayload {
    return {
      type: UserActions.FETCH_USER_FULFILLED,
      payload: {
        user
      }
    };
  }

  loadUser(userId: any): ActionPayload {
    return {
      type: UserActions.LOAD_USER,
      payload: {
        userId: parseInt(userId, 10)
      }
    };
  }

  loadUserLikes(userId: any): ActionPayload {
    return {
      type: UserActions.LOAD_USER_LIKES,
      payload: {
        tracklistId: tracklistIdForUserLikes(userId),
        userId: parseInt(userId, 10)
      }
    };
  }

  loadUserTracks(userId: any): ActionPayload {
    return {
      type: UserActions.LOAD_USER_TRACKS,
      payload: {
        tracklistId: tracklistIdForUserTracks(userId),
        userId: parseInt(userId, 10)
      }
    };
  }
}
