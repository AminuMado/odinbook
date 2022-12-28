import { useState } from "react";
import { useUserContext } from "../../hooks/useUserContext";
import "./EditProfileModal.css";

// type props = {
//   toggle: React.Dispatch<React.SetStateAction<boolean>>;
//   avatar: string;
// };
export const EditProfileModal = () => {
  const { state } = useUserContext();
  const [username, setUsername] = useState(state.user.username);
  const [about, setAbout] = useState(state.user.about);
  const [file, setFile] = useState<Blob | MediaSource | null>(null);

  const [avatar, setAvatar] = useState(state.user.avatar);
  // This component should have the capability to edit the profile, so chaning your profile picture and username and about me
  return (
    <div className="editProfileModal">
      <div
        className="editProfileModal__overlay"
        // onClick={() => toggle((prev) => !prev)}
      />
      {/* So we need an input for username,about me and profile photo, at the end it should be preloaded with the current user's detials from the context */}
      <div className="editProfileModalForm-container">
        <img className="editProfileModal__avatar" src={avatar} alt="avatar" />
        <form>
          <label htmlFor="fileInput" id="avatar">
            Change Avatar
          </label>
          <input
            type="file"
            hidden
            name="fileInput"
            id="fileInput"
            accept=".png,.jpeg,.jpg"
            onChange={(e) => {
              if (e.target.files) {
                setFile(e.target.files[0]);
                if (!file) return;
                setAvatar(URL.createObjectURL(file));
              }
            }}
          />
          <label htmlFor="username">Username</label>
          <input
            className="editProfileModalForm__input"
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="about">About Me</label>
          <textarea
            className="editProfileModal__textarea"
            id="about"
            name="about"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
          <button className="editProfileModal__button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
