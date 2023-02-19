import "./ExplorePostCard.css";
import avatar1 from "../../Assets/Images/20.jpg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
export const ExplorePostCard = () => {
  // Todos
  // we need to come up with a design of a post card not the same but something that shows the likes count comment count and content user avatar
  // All this should just be for display clicking it should take you to post details page where you can explore further
  return (
    <div className="explorePostCard-container">
      <div className="explorePostCard-header">
        <div className="explorePostCard-header__left">
          <img
            className="explorePostCard-header__userAvatar"
            src={avatar1}
            alt="avatar"
          />
          <div className="explorePostCard-header__userDetails">
            <p className="explorePostCard-header__username">The Man Himself</p>
          </div>
        </div>
        <div className="explorePostCard-header__right">
          <p className="explorePostCard-header__datePosted">posted 2/12/2022</p>
        </div>
      </div>
      <div className="explorePostCard-body">
        <p className="explorePostCard-body__content">
          This is a sample post I am trying to make things small and compact no
          need for media queries. Or not I might have to make things a bit more
          bigger than necessary
        </p>
        <div className="explorePostCard-body__details">
          <div className="explorePostCard-body__likes">
            <FavoriteBorderIcon className="likeIcon" />
            <p className="likeCount">0</p>
          </div>
          <div className="explorePostCard-body__comments">
            <CommentIcon className="commentIcon" />
            <p className="commentCount">0</p>
          </div>
        </div>
      </div>
    </div>
  );
};
