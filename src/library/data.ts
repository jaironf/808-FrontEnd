import { colors } from "./colors";

export interface album {
    id: number;
    albumId: number;
    title: string;
    cover: string;
    artists: string[];
    color: (typeof colors)[keyof typeof colors]
}

export const albums: album[] = [
     {
        id: 1,
        albumId: 1,
        title: "Torii Yama",
        cover: "https://example.com/covers/torii_yama.png",
        artists: ["Dellafuente"],
        color: colors.orange,
     },
     
]