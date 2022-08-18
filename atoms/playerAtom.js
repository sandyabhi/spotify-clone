import { atom } from "recoil";

export const playState = atom({
  key: "playstate",
  default: false,
});

export const playingTrackState = atom({
  key: "playingTrackState",
  default: "",
});
