import "./PostCard.css";
import avatar_1 from "../../Assets/Images/1.jpg";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import { Comment } from "../Comment/CommentForm";
export const PostCard = () => {
  return (
    <div className="postCard-container">
      <div className="postCard-header">
        <div className="postCard-header__left">
          <img
            className="postCard-header__userAvatar"
            src={avatar_1}
            alt="avatar"
          />
          <p className="postCard-header__username">MichealScofield</p>
          <p className="postCard-header__datePosted">posted 2/12/2022</p>
        </div>
        <div className="postCard-header__right">
          <DeleteOutlineRoundedIcon className="postCard-header__deleteIcon" />
        </div>
      </div>
      <div className="postCard-body">
        <p className="postCard-body__content">
          Hello I am Michael Schofield and i am awesome Hello I am Michael
          Schofield and i am awesomecHello I am Michael Schofield awesome.
        </p>
        <div className="postCard-body__details">
          <p>Likes</p>
          <p>Comments</p>
        </div>
      </div>
      <div className="postCard-options">
        <button className="postCard-options__like"> Like</button>
        <button className="postCard-options__comment">Comment</button>
      </div>
      {/* This componemt contains various things
    1. the header part
      a. the usericon
      b. the username
      c. post date
      d. a delete icon
    2. the post body part
      a.the post content
    3. the post options part
      a. the number of likes
      b. the number of comments
    4. the post interaction and buttons part
      a. the like button
      b. the comment button */}
      <Comment />
    </div>
  );
};
