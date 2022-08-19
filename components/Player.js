import { useEffect } from "react";
//import SpotifyPlayer from "react-spotify-web-playback";
import { useRecoilState } from "recoil";
import { playingTrackState, playState } from "../atoms/playerAtom";
import {
  BsFillPauseFill,
  BsFillPlayFill,
  BsFillSkipEndFill,
  BsFillSkipStartFill,
} from "react-icons/bs";
import { FiVolume2 } from "react-icons/fi";
import { RiPlayList2Fill, RiComputerLine } from "react-icons/ri";
import { MdOutlineSpeaker } from "react-icons/md";
import { BiShuffle } from "react-icons/bi";
import { IoRepeatOutline } from "react-icons/io5";
import { CgArrowsExpandRight } from "react-icons/cg";

function Player({ accessToken, trackUri }) {
  const [play, setPlay] = useRecoilState(playState);
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

  useEffect(() => {
    if (trackUri) {
      setPlay(true);
    }
  }, [trackUri]);

  if (!accessToken) return null;

  const handlePlay = () => {
    setPlay(!play);
  };

  return (
    <div className="relative flex items-center justify-between space-x-20 overflow-x-scroll rounded-t-2xl bg-[#181818] px-5 py-2.5 scrollbar-hide md:space-x-0 md:overflow-x-hidden">
      <div className="flex items-center">
        <img
          src={playingTrack.albumUrl}
          alt=""
          className="mr-3 h-14 rounded-xl"
        />
        <div>
          <h4 className="max-w-[150px] truncate text-sm text-white md:max-w-[250px]">
            {playingTrack.title}
          </h4>
          <h5 className="text-xs text-[rgb(179,179,179)]">
            {playingTrack.artist}
          </h5>
        </div>
      </div>

      <div className="inset-x-auto flex w-full flex-col items-center space-y-2 md:absolute">
        <div className="flex items-center space-x-4 text-xl text-[#b3b3b3]">
          <BiShuffle className="playerIcon text-lg" />
          <BsFillSkipStartFill className="playerIcon" />
          <div
            onClick={handlePlay}
            className="playerIcon flex h-8 w-8 items-center justify-center rounded-full bg-white text-black hover:text-black"
          >
            {play ? (
              <BsFillPauseFill className="text-xl" />
            ) : (
              <BsFillPlayFill className="ml-[1px] text-xl" />
            )}
          </div>
          <BsFillSkipEndFill className="playerIcon" />
          <IoRepeatOutline className="playerIcon" />
        </div>
        <div className="flex items-center space-x-2.5 text-xs text-[#CECECE]">
          <h4 className="-mt-0.5">0:00</h4>
          <div className="h-1 w-72 rounded-xl bg-[#383838] lg:w-[450px]" />
          <h4 className="-mt-0.5">0:00</h4>
        </div>
      </div>

      <div className="flex items-center space-x-3 text-[#b3b3b3]">
        <RiPlayList2Fill className="playerIcon" />
        <div className="playerIcon flex items-center">
          <RiComputerLine className="croppedIcon" />
          <MdOutlineSpeaker className="-ml-2.5" />
        </div>
        <div className="flex items-center space-x-3">
          <FiVolume2 className="playerIcon text-xl text-[#b3b3b3]" />
          <div className="h-1 w-[88px] rounded-xl bg-[#383838]">
            <div className="h-1 w-14 rounded-xl bg-[#b3b3b3]" />
          </div>
        </div>
        <CgArrowsExpandRight className="playerIcon" />
      </div>
    </div>
  );
}

export default Player;
