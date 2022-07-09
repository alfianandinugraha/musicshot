import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material";
import muiTheme from "./themes/mui";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <ThemeProvider theme={muiTheme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
