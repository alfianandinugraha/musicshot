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
  rewind: (state: TrackState) => void;
  forward: (state: TrackState) => void;
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
      state.status = action.payload ? "FETCHING" : "PLAY";
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
    rewind(state) {
      const time = state.currentTime - 5;
      state.currentTime = time < 0 ? 0 : time;
      state.status = "PLAY";
    },
    forward(state) {
      const time = state.currentTime + 5;
      state.currentTime = time >= state.duration ? state.duration : time;
      state.status = "PLAY";
    },
  },
});

export default trackSlice;
