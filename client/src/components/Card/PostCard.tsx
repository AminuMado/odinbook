import "./PostCard.css";
import avatar_1 from "../../Assets/Images/1.jpg";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import { NewComment } from "../Comment/CommentForm";
import { useState } from "react";
import { Collapsible } from "../Collapsible/Collapsible";
import { Comment } from "../Comment/Comment";
import { AvatarModal } from "../Avatar/AvatarModal";
export const PostCard = () => {
  const [showNewComment, setShowNewComment] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const likeCount = 0;
  const commentCount = 1;
  return (
    <>
      <AvatarModal />
      <div className="postCard-container">
        <div className="postCard-header">
          <div className="postCard-header__left">
            <img
              className="postCard-header__userAvatar"
              src={avatar_1}
              alt="avatar"
            />
            <div className="postCard-header__userDetails">
              <p className="postCard-header__username">MichealScofield</p>
              <p className="postCard-header__datePosted">posted 2/12/2022</p>
            </div>
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
            <div className="postCard-body__details-top">
              {likeCount ? (
                <p className="postCard-options__likes">
                  {`${likeCount} Like${likeCount > 1 ? "s" : ""}`}
                </p>
              ) : (
                <p>0 Likes</p>
              )}
              {commentCount ? (
                <p
                  className="postCard-options__comments"
                  onClick={() => setShowComments(!showComments)}
                >
                  {`${commentCount} Comment${commentCount > 1 ? "s" : ""}`}
                </p>
              ) : (
                <p>0 Comments</p>
              )}
            </div>
          </div>
          <div className="postCard-body__details-bottom">
            <Collapsible isOpen={showComments}>
              <>
                <Comment />
                <Comment />
                <Comment />
              </>
            </Collapsible>
          </div>
        </div>
        <div className="postCard-options">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`postCard-options__like ${showNewComment ? "show" : ""}`}
          >
            {isLiked ? "Unlike" : "Like"}
          </button>
          <button
            onClick={() => setShowNewComment(!showNewComment)}
            className={`postCard-options__comment ${
              showNewComment ? "show" : ""
            }`}
          >
            Comment
          </button>
          <Collapsible isOpen={showNewComment}>
            <NewComment />
          </Collapsible>
        </div>
      </div>
    </>
  );
};
