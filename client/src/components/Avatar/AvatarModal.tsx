import "./AvatarModal.css";
import avatar1 from "../../Assets/Images/1.jpg";
export const AvatarModal = () => {
  // This component should have a modal and the image container
  return (
    <div className="avatarModal">
      <div className="avatarModal__overlay" />
      <img src={avatar1} alt="avatar" className="avatarModal__avatar" />
    </div>
  );
};
