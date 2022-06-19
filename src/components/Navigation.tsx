import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import BottomNavigation from "@mui/material/BottomNavigation";
import { green } from "@mui/material/colors";
import HomeIcon from "@heroicons/react/solid/HomeIcon";
import PlayIcon from "@heroicons/react/solid/PlayIcon";
import CollectionIcon from "@heroicons/react/solid/CollectionIcon";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const menu = [
  {
    label: "Home",
    icon: HomeIcon,
    path: "/",
  },
  {
    label: "Playing",
    icon: PlayIcon,
    path: "/playing",
  },
  {
    label: "Playlist",
    icon: CollectionIcon,
    path: "/playlist",
  },
];

const Navigation = () => {
  const [active, setActive] = useState(-1);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const index = menu.findIndex((value) => value.path === location.pathname);
    index >= 0 && setActive(index);
  }, [location.pathname]);

  return (
    <BottomNavigation
      showLabels
      value={active}
      sx={{
        backgroundColor: green[600],
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
      }}
      onChange={(_, value) => {
        navigate(menu[value].path);
        setActive(value);
      }}
    >
      {menu.map((item) => {
        return (
          <BottomNavigationAction
            label={item.label}
            key={item.label}
            icon={<item.icon width={16} style={{ color: "white" }} />}
          />
        );
      })}
    </BottomNavigation>
  );
};

export default Navigation;
