

export interface UserData {
  avatar_url: string;
  city?: string;
  country?: string;
  followers_count?: number;
  followings_count?: number;
  full_name?: string;
  id: number;
  playlist_count?: number;
  public_favorites_count?: number;
  track_count?: number;
  username: string;
  profile?:boolean;
}

export interface User {
  avatarUrl: string;
  city: string;
  country: string;
  followersCount: number;
  followingsCount: number;
  fullName: string;
  id: number;
  likesCount: number;
  playlistCount: number;
  profile: boolean;
  trackCount: number;
  username: string;
}

export function createUser(data: UserData, profile: boolean = false): User {
  let attrs = {
    avatarUrl: data.avatar_url,
    id: data.id,
    username: data.username
  };

  if (profile) {
    attrs = Object.assign({...attrs}, {
      city: data.city,
      country: data.country,
      followersCount: data.followers_count,
      followingsCount: data.followings_count,
      fullName: data.full_name,
      likesCount: data.public_favorites_count,
      playlistCount: data.playlist_count,
      profile: true,
      trackCount: data.track_count
    });
  }

  return {...attrs} as User;
}
