import "./AvatarModal.css";
type props = {
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
  avatar: string;
};
export const AvatarModal = ({ toggle, avatar }: props) => {
  // This component should have a modal and the image container
  return (
    <div className="avatarModal">
      <div
        className="avatarModal__overlay"
        onClick={() => toggle((prev) => !prev)}
      />
      <img src={avatar} alt="avatar" className="avatarModal__avatar" />
    </div>
  );
};
