import PlayIcon from "@heroicons/react/solid/PlayIcon";
import { Box, Button, Typography } from "@mui/material";

type TrackCardProps = {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
  onClickPlay?: () => void;
  isPlaying?: boolean;
};

const TrackCard = (props: TrackCardProps) => {
  return (
    <Box
      marginBottom="1rem"
      pl="1rem"
      boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"
      borderRadius="4px"
    >
      <Box display="flex">
        <Box pr="1rem" py="1rem">
          <Box>
            <Typography sx={{ fontWeight: "bold" }}>{props.title}</Typography>
            <Typography variant="caption">{props.artist}</Typography>
          </Box>
          <Button
            variant="contained"
            onClick={props.onClickPlay}
            startIcon={<PlayIcon style={{ width: "1rem", height: "1rem" }} />}
            sx={{
              mt: ".5rem",
            }}
            disabled={props.isPlaying}
          >
            {props.isPlaying ? "Playing" : "Play"}
          </Button>
        </Box>
        <Box
          component="img"
          src={props.imageUrl}
          borderRadius="0 4px 4px 0"
          maxWidth="120px"
          ml="auto"
          sx={{
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
};

export default TrackCard;
