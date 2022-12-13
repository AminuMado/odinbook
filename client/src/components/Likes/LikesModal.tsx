import "./LikesModal.css";
type props = {
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
  likes: { avatar: string; username: string }[];
};
export const LikesModal = ({ toggle, likes }: props) => {
  return (
    <div className="likesModal">
      <div
        className="likesModal__overlay"
        onClick={() => toggle((prev) => !prev)}
      />
      <div className="likesModal__likesContainer">
        {likes.map((like) => {
          return (
            <div className="likesModal__like">
              <img
                src={like.avatar}
                alt="avatar"
                className="likesModal__avatar"
              />
              <p className="likesModal__username">{like.username}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
