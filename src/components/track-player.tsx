import { useAppDispatch } from "@/store";
import trackSlice from "@/store/slice/trackSlice";
import { useRef } from "react";

const TrackPlayer = () => {
  const audioRef = useRef<HTMLMediaElement | null>(null);
  const dispatch = useAppDispatch();

  return (
    <>
      <audio
        ref={audioRef}
        id="track-player"
        onEnded={() => {
          dispatch(trackSlice.actions.finish());
        }}
      />
    </>
  );
};

export default TrackPlayer;
