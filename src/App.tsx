import Navigation from "@/components/Navigation";
import Container from "@mui/material/Container";
import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/home";
import PlayingPage from "./pages/playing";
import PlaylistPage from "./pages/playlist";
import TrackPlayer from "./components/track-player";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/playing" element={<PlayingPage />} />
        <Route path="/playlist" element={<PlaylistPage />} />
      </Routes>
      <TrackPlayer />
      <Navigation />
    </>
  );
}

export default App;
