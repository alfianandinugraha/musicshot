import { useAppDispatch } from "@/store";
import trackSlice from "@/store/slice/track-slice";
import { useRef } from "react";
import { useThrottledCallback } from "use-debounce";

const TrackPlayer = () => {
  const audioRef = useRef<HTMLMediaElement | null>(null);
  const dispatch = useAppDispatch();

  const debounced = useThrottledCallback((value: number) => {
    dispatch(trackSlice.actions.progress(value));
  }, 1000);

  return (
    <>
      <audio
        ref={audioRef}
        id="track-player"
        onEnded={() => {
          dispatch(trackSlice.actions.finish());
        }}
        onTimeUpdate={(e) => {
          debounced(e.currentTarget.currentTime);
        }}
        onLoadedMetadata={(e) => {
          dispatch(trackSlice.actions.play(e.currentTarget.duration));
        }}
      />
    </>
  );
};

export default TrackPlayer;
