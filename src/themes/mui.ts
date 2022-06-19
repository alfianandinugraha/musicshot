import { createTheme } from "@mui/material";

const muiTheme = createTheme({
  components: {
    MuiBottomNavigationAction: {
      styleOverrides: {
        label: {
          color: "white",
          marginTop: ".25rem",
        },
      },
    },
  },
});

export default muiTheme;
