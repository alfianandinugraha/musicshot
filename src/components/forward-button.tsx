import useAudioElement from "@/hooks/use-audio-element";
import { useAppDispatch, useAppSelector } from "@/store";
import trackSlice from "@/store/slice/track-slice";
import FastForwardIcon from "@heroicons/react/solid/FastForwardIcon";
import RewindIcon from "@heroicons/react/solid/RewindIcon";
import { IconButton } from "@mui/material";
import React from "react";

const ForwardButton = () => {
  const { forward } = useAudioElement();
  const dispatch = useAppDispatch();
  const currentTime = useAppSelector((value) => value.track.currentTime);
  const duration = useAppSelector((value) => value.track.duration);

  return (
    <IconButton
      color="primary"
      disabled={currentTime >= duration}
      onClick={() => {
        dispatch(trackSlice.actions.forward());
        forward();
      }}
    >
      <FastForwardIcon style={{ width: "1.5rem", height: "1.5rem" }} />
    </IconButton>
  );
};

export default ForwardButton;
