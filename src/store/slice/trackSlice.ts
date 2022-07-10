import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Track } from "model";

type TRACK_STATUS = "PLAY" | "PAUSE" | "IDLE" | "FINISH" | "FETCHING";

type TrackState = {
  currentTrack: Track | undefined;
  status: TRACK_STATUS;
  duration: number;
  currentTime: number;
};

type TrackReducer = {
  start: (state: TrackState, action: PayloadAction<Track | undefined>) => void;
  pause: (state: TrackState) => void;
  finish: (state: TrackState) => void;
  progress: (state: TrackState, action: PayloadAction<number>) => void;
  play: (state: TrackState, action: PayloadAction<number>) => void;
};

const trackSlice = createSlice<TrackState, TrackReducer>({
  name: "track",
  initialState: {
    currentTrack: undefined,
    status: "IDLE",
    duration: 1,
    currentTime: 0,
  },
  reducers: {
    start(state: TrackState, action) {
      state.currentTrack = action.payload ?? state.currentTrack;
      state.status = state.currentTrack ? "PLAY" : "FETCHING";
    },
    pause(state: TrackState) {
      state.status = "PAUSE";
    },
    finish(state: TrackState) {
      state.status = "FINISH";
    },
    progress(state, action) {
      state.currentTime = action.payload;
    },
    play(state, action) {
      state.duration = action.payload;
      state.status = "PLAY";
    },
  },
});

export default trackSlice;
