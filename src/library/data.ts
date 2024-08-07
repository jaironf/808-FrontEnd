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
        cover: "src/assets/covers/Torii-Yama.png",
        artists: ["Dellafuente"],
        color: colors.orange,
     },
     {
        id: 2,
        albumId: 2,
        title: "Cosas que Brillan",
        cover: "src/assets/covers/Cosas-que-brillan.png",
        artists: ["Ébano"],
        color: colors.purple,
     },
     {
        id: 3,
        albumId: 3,
        title: "Blindao",
        cover: "src/assets/covers/Blindao.png",
        artists: ["Oddliquor"],
        color: colors.brown,
     },
     {
      id: 4,
      albumId: 4,
      title: "Tercer verano del amor",
      cover: "src/assets/covers/Tercer-verano-del-amor.png",
      artists: ["Nico Miseria"],
      color: colors.blue,
     },
     {
      id: 5,
    albumId: 5,
    title: "Me muevo con Dios",
    cover:  "src/assets/covers/Me-muevo-con-dios.png",
    artists: ["Cruz Cafuné"],
    color: colors.ligth_blue
     },
     {
      id: 6,
    albumId: 6,
    title: "La espalda del sol",
    cover: "src/assets/covers/La-espalda-del-sol.png",
    artists: ["Diego 900"],
    color: colors.green
     },
     {
      id: 7,
    albumId: 7,
    title: "Vultures 2",
    cover: "src/assets/covers/Vultures2.png",
    artists: ["Kanye West", "Ty Dolla $ign"],
    color: colors.ligth_brown
     },
     {
      id: 8,
    albumId: 8,
    title: "Good kid, m.A.A.d city(Delux)",
    cover: "src/assets/covers/Good-kid.png",
    artists: ["Kendrick Lamar"],
    color: colors.ligth_blue
     },
     {
      id: 9,
    albumId: 9,
    title: "blu€s",
    cover: "src/assets/covers/Blu€s.png",
    artists: ["Cruz Cafuné"],
    color: colors.orange
     },
     {
      id: 10,
    albumId: 10,
    title: "La fe que me tengas",
    cover: "src/assets/covers/La-fe-que-me-tengas.png",
    artists: ["Mvrk"],
    color: colors.ligth_blue
     },
]