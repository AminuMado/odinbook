import "./Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import LanguageIcon from "@mui/icons-material/Language";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
export const Navbar = () => {
  const [active, setActive] = useState("home");
  const { logout } = useLogout();
  return (
    <nav className="navbar">
      <ul>
        <Link to="/home">
          <li
            className={active === "home" ? "active" : ""}
            onClick={() => setActive("home")}
          >
            <HomeIcon />
            Timeline
          </li>
        </Link>
        <Link to="/profile">
          <li
            className={active === "profile" ? "active" : ""}
            onClick={() => setActive("profile")}
          >
            <PersonIcon />
            Profile
          </li>
        </Link>
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
        <li className={active === "logout" ? "active" : ""} onClick={logout}>
          <LogoutIcon />
          Logout
        </li>
      </ul>
    </nav>
  );
};
