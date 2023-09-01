

export interface PlayerState {
  isPlaying?: boolean;
  trackId?: number;
  tracklistId?: string;
  volume?: number;
}

export function createPlayerStateRecord(data: PlayerState): PlayerState {
  const { isPlaying, trackId, tracklistId, volume } = data
  return Object.assign({
    isPlaying: isPlaying || false,
    trackId: trackId || null,
    tracklistId: tracklistId || null,
    volume: volume || null
  });
}
