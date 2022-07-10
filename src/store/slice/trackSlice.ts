import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Track } from "model";

type TRACK_STATUS = "PLAY" | "PAUSE" | "IDLE" | "FINISH";

type TrackState = {
  currentTrack: Track | undefined;
  status: TRACK_STATUS;
};

type TrackReducer = {
  play: (state: TrackState, action: PayloadAction<Track | undefined>) => void;
  pause: (state: TrackState) => void;
  finish: (state: TrackState) => void;
};

const trackSlice = createSlice<TrackState, TrackReducer>({
  name: "track",
  initialState: {
    currentTrack: undefined,
    status: "IDLE",
  },
  reducers: {
    play(state: TrackState, action) {
      state.currentTrack = action.payload ?? state.currentTrack;
      state.status = "PLAY";
    },
    pause(state: TrackState) {
      state.status = "PAUSE";
    },
    finish(state: TrackState) {
      state.status = "FINISH";
    },
  },
});

export default trackSlice;
