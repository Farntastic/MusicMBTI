import { Mbti } from "./mbti.interface";
import { MUSictypePlaylist } from "./musictypeplaylist.interface"
import { MUSicTYPE } from "./musictype.interface"
import { MbtiPlaylist } from "./mbtiplaylis.interfacet"

export interface MUSic {
    id: number;
    song_name: string;
    link: string;
    img: string;
    mbtiId: Mbti; 

    musictypeId: MUSicTYPE;
    musicTypePlaylists: MUSictypePlaylist;
    mbtiPlaylists: MbtiPlaylist;
  
}