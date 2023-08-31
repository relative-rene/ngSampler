import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/map';

import { AppState } from '../../app';
import { Selector } from '../../core';
import { User } from '../models/user';
import { UsersState } from './users-reducer';
import { distinctUntilChanged, map } from 'rxjs';


export function getCurrentUser(): Selector<AppState,User> {
  return state$ => state$.pipe(
    getUsers(),
    map(users => users.get(users.get('currentUserId'))),
    distinctUntilChanged());
}

export function getUsers(): Selector<AppState,UsersState> {
  return state$ => state$.pipe(
    map(state => state.users),
    distinctUntilChanged());
}
