import "./Comment.css";
import avatar_1 from "../../Assets/Images/1.jpg";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

export const Comment = () => {
  return (
    <div className="comment-container">
      {/* should have certain things
            1. Should have an avatar.
            2. should have a username
            3. Should have a date posted
            4. Should have a delete button
            5. Should have a content
        */}
      <img className="comment__userAvatar" src={avatar_1} alt="avatar" />
      <div className="comment-content-container">
        <div className="comment-header-container">
          <div className="comment-header-left">
            <p className="comment-header__username"> Micheal Scofield</p>
            <p className="comment-header__datePosted">posted 2/12/2022</p>
          </div>
          <div className="comment-header-right">
            <DeleteOutlineRoundedIcon className="comment-header__deleteIcon" />
          </div>
        </div>
        <p className="comment-content-text">Hello this is an example comment</p>
      </div>
    </div>
  );
};
