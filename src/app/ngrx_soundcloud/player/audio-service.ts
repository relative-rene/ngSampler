import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

import { Action } from '@ngrx/store';
import { Observable, fromEvent, map, merge } from 'rxjs';
import { PLAYER_MAX_VOLUME, PLAYER_VOLUME_INCREMENT } from '../constants';
import { Times } from './reducers/times-state';
import { AudioSource } from './audio-source';
import { PlayerActions } from './player-actions';


export class AudioService {
  events$: Observable<Action>;

  constructor(actions: PlayerActions, protected audio: AudioSource) {
    this.events$ = merge(
      fromEvent(audio, 'ended').pipe(map(actions.audioEnded)),
      fromEvent(audio, 'pause').pipe(map(actions.audioPaused)),
      fromEvent(audio, 'playing').pipe(map(actions.audioPlaying)),
      fromEvent(audio, 'timeupdate', this.getTimes).pipe(map(actions.audioTimeUpdated)),
      fromEvent(audio, 'volumechange').pipe(map(() => actions.audioVolumeChanged(this.volume))
    ));
  }


  get volume(): number {
    return Math.floor(this.audio.volume * 100);
  }

  set volume(volume: number) {
    this.audio.volume = volume / 100;
  }

  decreaseVolume(): void {
    let volume = this.volume - PLAYER_VOLUME_INCREMENT;
    if (volume >= 0) this.volume = volume;
  }

  increaseVolume(): void {
    let volume = this.volume + PLAYER_VOLUME_INCREMENT;
    if (volume <= PLAYER_MAX_VOLUME) this.volume = volume;
  }

  pause(): void {
    this.audio.pause();
  }

  play(url?: string): void {
    if (url) this.audio.src = url;
    let promise: any = this.audio.play();
    if (promise && promise.catch) promise.catch(() => {}); // tslint:disable-line:no-empty
  }

  seek(time: number): void {
    this.audio.currentTime = time;
  }

  private getTimes(event: Event): Times {
    const { buffered, currentTime, duration } = event.target as HTMLAudioElement;
    const bufferedTime = buffered.length ? buffered.end(0) : 0;
    return {
      bufferedTime,
      currentTime,
      duration,
      percentBuffered: `${(bufferedTime / duration * 100) || 0}%`,
      percentCompleted: `${(currentTime / duration * 100) || 0}%`
    };
  }
}
