import "./Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import LanguageIcon from "@mui/icons-material/Language";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useUserContext } from "../../hooks/useUserContext";
export const Navbar = () => {
  const [active, setActive] = useState("home");
  const { logout } = useLogout();
  const { state } = useUserContext();
  const newNotification = state.user.notifications.some(
    (notification) => notification.isSeen === false
  );
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
        <Link to="/notification" className="navNotification-container">
          <li
            className={active === "notifications" ? "active" : ""}
            onClick={() => setActive("notifications")}
          >
            <NotificationsIcon />
            Notifications
            {newNotification && <p className="newNotification" />}
          </li>
        </Link>
        <Link to="/explore">
          <li
            className={active === "explore" ? "active" : ""}
            onClick={() => setActive("explore")}
          >
            <LanguageIcon />
            Explore
          </li>
        </Link>
        <li className={active === "logout" ? "active" : ""} onClick={logout}>
          <LogoutIcon />
          Logout
        </li>
      </ul>
    </nav>
  );
};
