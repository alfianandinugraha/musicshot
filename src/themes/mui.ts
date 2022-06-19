import { createTheme } from "@mui/material";
import { green } from "@mui/material/colors";

const muiTheme = createTheme({
  typography: {
    h5: {
      fontWeight: "bold",
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
