import BaseLayout from "@/layouts/base-layout";
import { useAppDispatch, useAppSelector } from "@/store";
import PlayIcon from "@heroicons/react/solid/PlayIcon";
import XCircleIcon from "@heroicons/react/solid/XCircleIcon";
import RewindIcon from "@heroicons/react/solid/RewindIcon";
import FastForwardIcon from "@heroicons/react/solid/FastForwardIcon";
import StopIcon from "@heroicons/react/solid/StopIcon";
import RefreshIcon from "@heroicons/react/solid/RefreshIcon";
import { CircularProgress, IconButton, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import trackSlice from "@/store/slice/track-slice";
import { shallowEqual } from "react-redux";
import useAudioElement from "@/hooks/use-audio-element";
import TrackRange from "@/components/track-range";
import RewindButton from "@/components/rewind-button";
import ForwardButton from "@/components/forward-button";

const PlayingPage = () => {
  const track = useAppSelector(
    (value) => value.track.currentTrack,
    shallowEqual
  );
  const status = useAppSelector((value) => value.track.status);
  const { play, pause, rewind, forward } = useAudioElement();
  const dispatch = useAppDispatch();

  return (
    <BaseLayout>
      {(() => {
        switch (status) {
          case "IDLE":
            return (
              <Box
                mt="3rem"
                display="flex"
                flexDirection="column"
                alignItems="center"
                color={grey[400]}
              >
                <XCircleIcon style={{ width: "3rem", height: "3rem" }} />
                <Typography textAlign="center" mt="1rem">
                  No music playing
                </Typography>
              </Box>
            );
          case "PLAY":
          case "PAUSE":
          case "FINISH":
            return (
              <Box display="flex" flexDirection="column" mt="3rem">
                <Box
                  component="img"
                  src={`https://api.napster.com/imageserver/v2/albums/${track?.albumId}/images/300x300.jpg`}
                  width="180px"
                  height="180px"
                  mx="auto"
                  borderRadius="8px"
                />
                <Typography
                  textAlign="center"
                  fontSize="20px"
                  fontWeight="bold"
                  mt="1rem"
                >
                  {track?.name}
                </Typography>
                <Typography
                  variant="caption"
                  textAlign="center"
                  fontSize="14px"
                  mt=".5rem"
                >
                  {track?.artistName}
                </Typography>
                <TrackRange />
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mx="auto"
                >
                  <RewindButton />
                  <IconButton
                    color="primary"
                    onClick={(e) => {
                      switch (status) {
                        case "PAUSE":
                        case "FINISH":
                          play();
                          dispatch(trackSlice.actions.start());
                          break;
                        case "PLAY":
                          pause();
                          dispatch(trackSlice.actions.pause());
                          break;
                      }
                    }}
                  >
                    {status === "PAUSE" && (
                      <PlayIcon style={{ width: "4rem", height: "4rem" }} />
                    )}
                    {status === "PLAY" && (
                      <StopIcon style={{ width: "4rem", height: "4rem" }} />
                    )}
                    {status === "FINISH" && (
                      <RefreshIcon style={{ width: "4rem", height: "4rem" }} />
                    )}
                  </IconButton>
                  <ForwardButton />
                </Box>
              </Box>
            );
          case "FETCHING":
            return (
              <Box display="flex" flexDirection="column" alignItems="center">
                <CircularProgress sx={{ mt: "3rem" }} />
                <Typography sx={{ mt: "1rem" }}>Getting track info</Typography>
              </Box>
            );
          default:
            break;
        }
      })()}
    </BaseLayout>
  );
};

export default PlayingPage;
