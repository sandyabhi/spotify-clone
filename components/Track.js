import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { playingTrackState, playState } from "../atoms/playerAtom";
import { ImHeadphones } from "react-icons/im";

function Track({ track, chooseTrack }) {
  const [hasLiked, setHasLiked] = useState(false);
  const [play, setPlay] = useRecoilState(playState);
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

  const handlePlay = () => {
    chooseTrack(track);

    if (track.uri === playingTrack.uri) {
      setPlay(!play);
    }
  };

  return (
    <div className="group flex cursor-default items-center justify-between space-x-20 rounded-lg py-2 px-4 transition ease-out hover:bg-white/10">
      <div className="flex items-center">
        <img
          src={track.albumUrl}
          alt={track.title}
          className="mr-3 h-12 w-12 rounded-xl object-cover"
        />
        <div>
          <h4 className="w-[450px] truncate text-sm  font-semibold text-white">
            {track.title}
          </h4>
          <p className="text-[13px] font-semibold text-[rgb(179,179,179)] group-hover:text-white">
            {track.artist}
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-2.5 md:ml-auto ">
        <div className="flex space-x-1 text-sm font-semibold text-white">
          <ImHeadphones className="text-lg" />
          <h4>{track.popularity}</h4>
        </div>
        <div className="relative flex h-10 w-[85px] cursor-pointer items-center rounded-full border-2 border-[#262626] group-hover:border-white/40">
          <AiFillHeart
            className={`icon ml-3 text-xl ${
              hasLiked ? "text-[#1ED760]" : "text-[#868686]"
            }`}
            onClick={() => setHasLiked(!hasLiked)}
          />
          {track.uri === playingTrack.uri && play ? (
            <div
              className="icon absolute -right-0.5 flex h-10 w-10 items-center justify-center rounded-full border border-[#15883e] bg-[#15883e] hover:scale-110"
              onClick={handlePlay}
            >
              <BsFillPauseFill className="text-xl text-white" />
            </div>
          ) : (
            <div
              className="icon absolute -right-0.5 flex h-10 w-10 items-center justify-center rounded-full border border-white/60 hover:scale-110 hover:border-[#15883e] hover:bg-[#15883e]"
              onClick={handlePlay}
            >
              <BsFillPlayFill className="ml-[1px] text-xl text-white" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Track;
