import TrackCard from "@/components/track-card";
import useAudioElement from "@/hooks/use-audio-element";
import BaseLayout from "@/layouts/base-layout";
import { useAppSelector } from "@/store";
import { useGetAllTopQuery } from "@/store/apis/trackApi";
import trackSlice from "@/store/slice/trackSlice";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";

const PlaylistPage = () => {
  const { data: tracks = [] } = useGetAllTopQuery();
  const trackId = useAppSelector((value) => value.track.currentTrack?.id);
  const { play } = useAudioElement();
  const dispatch = useDispatch();

  return (
    <BaseLayout>
      <Typography variant="h5" sx={{ mt: "1rem" }}>
        Playlist
      </Typography>
      <Box mb="5rem" mt="1rem">
        {tracks.map((track) => {
          return (
            <TrackCard
              key={track.id}
              artist={track.artistName}
              id={track.id}
              title={track.albumName}
              isPlaying={trackId === track.id}
              imageUrl={`https://api.napster.com/imageserver/v2/albums/${track.albumId}/images/300x300.jpg`}
              onClickPlay={() => {
                play(track.previewURL);
                dispatch(trackSlice.actions.start(track));
              }}
            />
          );
        })}
      </Box>
    </BaseLayout>
  );
};

export default PlaylistPage;
