import { createTheme } from "@mui/material";
import { green, grey, red } from "@mui/material/colors";

const muiTheme = createTheme({
  palette: {
    primary: {
      ...green,
      contrastText: "white",
    },
    error: {
      ...red,
      contrastText: "white",
    },
  },
  typography: {
    h5: {
      fontWeight: "bold",
    },
    caption: {
      fontStyle: "italic",
      color: grey[400],
    },
  },
  components: {
    MuiBottomNavigationAction: {
      styleOverrides: {
        label: {
          color: "white",
          marginTop: ".25rem",
          "&.Mui-selected": {
            fontSize: "0.75rem",
          },
        },
        root: {
          "&.Mui-selected": {
            backgroundColor: green[700],
          },
        },
      },
    },
  },
});

export default muiTheme;
