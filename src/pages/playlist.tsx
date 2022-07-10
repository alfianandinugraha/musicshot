import TrackCard from "@/components/track-card";
import useAudioElement from "@/hooks/use-audio-element";
import BaseLayout from "@/layouts/base-layout";
import { useAppSelector } from "@/store";
import { useGetAllTopQuery } from "@/store/apis/track-api";
import trackSlice from "@/store/slice/track-slice";
import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";

const PlaylistPage = () => {
  const {
    data: tracks = [],
    isSuccess,
    isLoading,
    refetch,
  } = useGetAllTopQuery();
  const trackId = useAppSelector((value) => value.track.currentTrack?.id);
  const { play } = useAudioElement();
  const dispatch = useDispatch();

  return (
    <BaseLayout>
      <Typography variant="h5" sx={{ mt: "1rem" }}>
        Playlist
      </Typography>
      <Box mb="5rem" mt="1rem">
        {isLoading ? (
          <Box display="flex" flexDirection="column" alignItems="center">
            <CircularProgress />
            <Typography sx={{ mt: "1rem" }}>Getting all track</Typography>
          </Box>
        ) : (
          <>
            {isSuccess ? (
              <>
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
              </>
            ) : (
              <Box display="flex" flexDirection="column" alignItems="center">
                <Typography>Failed to get data</Typography>
                <Button
                  variant="contained"
                  color="error"
                  sx={{ mt: "1rem" }}
                  onClick={refetch}
                >
                  Retry
                </Button>
              </Box>
            )}
          </>
        )}
      </Box>
    </BaseLayout>
  );
};

export default PlaylistPage;
