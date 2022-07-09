import TrackCard from "@/components/track-card";
import BaseLayout from "@/layouts/base-layout";
import { useGetAllTopQuery } from "@/store/apis/trackApi";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const PlaylistPage = () => {
  const { data: tracks = [] } = useGetAllTopQuery();
  console.log(tracks);
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
              imageUrl={`https://api.napster.com/imageserver/v2/albums/${track.albumId}/images/300x300.jpg`}
            />
          );
        })}
      </Box>
    </BaseLayout>
  );
};

export default PlaylistPage;
