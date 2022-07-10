import useAudioElement from "@/hooks/use-audio-element";
import { useAppDispatch, useAppSelector } from "@/store";
import trackSlice from "@/store/slice/track-slice";
import { Box, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import { Range } from "react-range";

const TrackRange = () => {
  const duration = useAppSelector((value) => value.track.duration);
  const currentTime = useAppSelector((value) => value.track.currentTime);
  const { setTime } = useAudioElement();
  const dispatch = useAppDispatch();

  const trackFillWidth = (currentTime / Math.ceil(duration)) * 100;

  return (
    <Box width="80%" mx="auto">
      <Range
        min={0}
        max={Math.ceil(duration)}
        onChange={(e) => {
          dispatch(trackSlice.actions.progress(e[0]));
          setTime(e[0]);
        }}
        values={[Math.ceil(currentTime)]}
        renderTrack={({ props, children }) => {
          return (
            <Box
              {...props}
              mx="auto"
              mt="2rem"
              style={{
                ...props.style,
                height: "6px",
                width: "100%",
                background: `linear-gradient(to right, ${green[300]} 0%, ${green[300]} ${trackFillWidth}%, #ccc ${trackFillWidth}%, #ccc 100%)`,
                borderRadius: "4px",
              }}
            >
              {children}
            </Box>
          );
        }}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "1rem",
              width: "1rem",
              borderRadius: "999px",
              backgroundColor: green[600],
            }}
          />
        )}
      />
      <Box
        display="flex"
        width="100%"
        justifyContent="space-between"
        mt=".5rem"
      >
        <Typography>00:{Math.ceil(currentTime)}</Typography>
        <Typography>00:{Math.ceil(duration)}</Typography>
      </Box>
    </Box>
  );
};

export default TrackRange;
