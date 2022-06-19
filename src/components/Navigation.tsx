import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import BottomNavigation from "@mui/material/BottomNavigation";
import { green } from "@mui/material/colors";
import HomeIcon from "@heroicons/react/solid/HomeIcon";
import PlayIcon from "@heroicons/react/solid/PlayIcon";
import CollectionIcon from "@heroicons/react/solid/CollectionIcon";

const Navigation = () => {
  return (
    <BottomNavigation
      value="Home"
      showLabels
      sx={{
        backgroundColor: green[600],
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
      }}
    >
      <BottomNavigationAction
        label="Home"
        icon={<HomeIcon width={16} style={{ color: "white" }} />}
      />
      <BottomNavigationAction
        label="Playing"
        icon={<PlayIcon width={16} style={{ color: "white" }} />}
      />
      <BottomNavigationAction
        label="Playlist"
        icon={<CollectionIcon width={16} style={{ color: "white" }} />}
      />
    </BottomNavigation>
  );
};

export default Navigation;
