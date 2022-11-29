import "./Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import LanguageIcon from "@mui/icons-material/Language";
import { useState } from "react";
export const Navbar = () => {
  const [active, setActive] = useState("home");

  return (
    <nav className="navbar">
      <ul>
        <li
          className={active === "home" ? "active" : ""}
          onClick={() => setActive("home")}
        >
          <HomeIcon />
          Timeline
        </li>
        <li
          className={active === "profile" ? "active" : ""}
          onClick={() => setActive("profile")}
        >
          <PersonIcon />
          Profile
        </li>
        <li
          className={active === "notifications" ? "active" : ""}
          onClick={() => setActive("notifications")}
        >
          <NotificationsIcon />
          Notifications
        </li>
        <li
          className={active === "explore" ? "active" : ""}
          onClick={() => setActive("explore")}
        >
          <LanguageIcon />
          Explore
        </li>
        <li className={active === "logout" ? "active" : ""}>
          <LogoutIcon />
          Logout
        </li>
      </ul>
    </nav>
  );
};