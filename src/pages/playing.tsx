import BaseLayout from "@/layouts/base-layout";
import { useAppDispatch, useAppSelector } from "@/store";
import PlayIcon from "@heroicons/react/solid/PlayIcon";
import XCircleIcon from "@heroicons/react/solid/XCircleIcon";
import RewindIcon from "@heroicons/react/solid/RewindIcon";
import FastForwardIcon from "@heroicons/react/solid/FastForwardIcon";
import StopIcon from "@heroicons/react/solid/StopIcon";
import { IconButton, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import { useRef } from "react";
import trackSlice from "@/store/slice/trackSlice";
import { shallowEqual } from "react-redux";

const PlayingPage = () => {
  const audioEl = useRef<HTMLAudioElement | null>();
  const track = useAppSelector(
    (value) => value.track.currentTrack,
    shallowEqual
  );
  const status = useAppSelector((value) => value.track.status);
  const dispatch = useAppDispatch();

  const initAudioElement = () => {
    const element = document.getElementById("track-player") as HTMLAudioElement;

    audioEl.current = element;
  };

  return (
    <BaseLayout>
      {status === "IDLE" ? (
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
      ) : (
        <Box display="flex" flexDirection="column" mt="3rem">
          <Box
            component="img"
            src={`https://api.napster.com/imageserver/v2/albums/${track?.albumId}/images/300x300.jpg`}
            width="200px"
            height="200px"
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
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mx="auto"
            mt="2rem"
          >
            <IconButton color="primary">
              <RewindIcon style={{ width: "1.5rem", height: "1.5rem" }} />
            </IconButton>
            <IconButton
              color="primary"
              onClick={(e) => {
                initAudioElement();

                const element = audioEl.current;

                switch (status) {
                  case "PAUSE":
                  case "FINISH":
                    element?.play();
                    dispatch(trackSlice.actions.play());
                    break;
                  case "PLAY":
                    element?.pause();
                    dispatch(trackSlice.actions.pause());
                    break;
                }
              }}
            >
              {(status === "PAUSE" || status === "FINISH") && (
                <PlayIcon style={{ width: "4rem", height: "4rem" }} />
              )}
              {status === "PLAY" && (
                <StopIcon style={{ width: "4rem", height: "4rem" }} />
              )}
            </IconButton>
            <IconButton color="primary">
              <FastForwardIcon style={{ width: "1.5rem", height: "1.5rem" }} />
            </IconButton>
          </Box>
        </Box>
      )}
    </BaseLayout>
  );
};

export default PlayingPage;
