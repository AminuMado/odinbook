import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import LanguageIcon from "@mui/icons-material/Language";
export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-menu">
        <ul>
          <li>
            <HomeIcon />
            Timeline
          </li>
          <li>
            <PersonIcon />
            Profile
          </li>
          <li>
            <NotificationsIcon />
            Notifications
          </li>
          <li>
            <LanguageIcon />
            Explore
          </li>
          <li>
            <LogoutIcon />
            Logout
          </li>
        </ul>
      </div>
    </nav>
  );
};
