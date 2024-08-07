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
     {
        id: 2,
        albumId: 2,
        title: "Cosas que Brillan",
        cover: "https://example.com/covers/cosas_que_brillan.png",
        artists: ["Ébano"],
        color: colors.purple,
     },
     {
        id: 3,
        albumId: 3,
        title: "Blindao",
        cover: "https://example.com/covers/blindao.png",
        artists: ["Oddliquor"],
        color: colors.brown,
     },
     {
      id: 4,
      albumId: 4,
      title: "Tercer verano del amor",
      cover: "https://example.com/covers/tercer_verano_del_amor.png",
      artists: ["Nico Miseria"],
      color: colors.blue,
     },
     {
      id: 5,
    albumId: 5,
    title: "Me muevo con Dios",
    cover:  "https://example.com/covers/me_muevo_con_dios.png",
    artists: ["Cruz Cafuné"],
    color: colors.ligth_blue
     },
     {
      id: 6,
    albumId: 6,
    title: "La espalda del sol",
    cover: "https://example.com/covers/la_espalda_del_sol.png",
    artists: ["Diego 900"],
    color: colors.green
     },
     {
      id: 7,
    albumId: 7,
    title: "Vultures 2",
    cover: "https://example.com/covers/vultures_2.png",
    artists: ["Kanye West, Ty Dolla $ign"],
    color: colors.ligth_brown
     },
     {
      id: 8,
    albumId: 8,
    title: "Good kid, m.A.A.d city(Delux)",
    cover: "https://example.com/covers/Good_kid,_m.A.A.d_city_(Delux).png",
    artists: ["Kendrick Lamar"],
    color: colors.ligth_blue
     },
     {
      id: 9,
    albumId: 9,
    title: "blu€s",
    cover: "https://example.com/covers/blu€s.png",
    artists: ["Cruz Cafuné"],
    color: colors.orange
     },
     {
      id: 10,
    albumId: 10,
    title: "La fe que me tengas",
    cover: "https://example.com/covers/la_fe_que_me_tengas.png",
    artists: ["Mvrk"],
    color: colors.ligth_blue
     },
]