import { colors } from "./colors";

export interface Playlist {
    id: number;
    albumid: number;
    title: string;
    cover: string;
    song_url: string;
    artist: string[];
    color: (typeof colors)[keyof typeof colors]
}