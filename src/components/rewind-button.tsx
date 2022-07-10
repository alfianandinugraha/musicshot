import useAudioElement from "@/hooks/use-audio-element";
import { useAppDispatch, useAppSelector } from "@/store";
import trackSlice from "@/store/slice/track-slice";
import RewindIcon from "@heroicons/react/solid/RewindIcon";
import { IconButton } from "@mui/material";
import React from "react";

const RewindButton = () => {
  const { rewind } = useAudioElement();
  const dispatch = useAppDispatch();
  const currentTime = useAppSelector((value) => value.track.currentTime);

  return (
    <IconButton
      color="primary"
      disabled={currentTime <= 0}
      onClick={() => {
        dispatch(trackSlice.actions.rewind());
        rewind();
      }}
    >
      <RewindIcon style={{ width: "1.5rem", height: "1.5rem" }} />
    </IconButton>
  );
};

export default RewindButton;
