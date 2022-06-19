import BaseLayout from "@/layouts/base-layout";
import { Box, Typography } from "@mui/material";
import React from "react";
import MusicNoteIcon from "@heroicons/react/solid/MusicNoteIcon";
import { green } from "@mui/material/colors";

const HomePage = () => {
  return (
    <BaseLayout>
      <Box pt="2rem" textAlign="center">
        <MusicNoteIcon
          width={98}
          height={98}
          style={{
            color: green[600],
          }}
        />
        <Typography variant="h5">
          Welcome to{" "}
          <Typography variant="inherit" color={green[600]} display="inline">
            Musicshot
          </Typography>
        </Typography>
        <Typography>Play your favourite song here.</Typography>
      </Box>
    </BaseLayout>
  );
};

export default HomePage;
