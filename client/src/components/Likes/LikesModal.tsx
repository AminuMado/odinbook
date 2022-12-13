import "./LikesModal.css";
import avatar from "../../Assets/Images/3.jpg";
export const LikesModal = () => {
  return (
    <div className="likesModal">
      {/* We should have an overlay and the username and avatar like */}
      <div className="likesModal__overlay" />
      <div className="likesModal__like">
        <img src={avatar} alt="avatar" className="likesModal__avatar" />
        <p className="likesModal__username">the example user</p>
      </div>
    </div>
  );
};
