import "./EditProfileModal.css";
type props = {
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
  avatar: string;
};
export const EditProfileModal = ({ toggle, avatar }: props) => {
  // This component should have the capability to edit the profile, so chaning your profile picture and username and about me
  return (
    <div className="editProfileModal">
      <div
        className="editProfileModal__overlay"
        onClick={() => toggle((prev) => !prev)}
      />
      {/* So we need an input for username,about me and profile photo, at the end it should be preloaded with the current user's detials from the context */}
      <div className="editProfileModalForm-container">
        <form>
          <label htmlFor="username">Username</label>
          <input
            className="editProfileModalForm__input"
            type="text"
            id="username"
            name="username"
          />
          <label htmlFor="about">About Me</label>
          <textarea
            className="editProfileModal__textarea"
            id="about"
            name="about"
          />
          <button className="editProfileModal__button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
