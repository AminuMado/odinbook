import "./Comment.css";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import { AvatarModal } from "../Avatar/AvatarModal";
import { useState } from "react";
type props = {
  avatar: string;
  username: string;
  datePosted: string;
  content: string;
};
export const Comment = ({ avatar, content, datePosted, username }: props) => {
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  return (
    <>
      {showAvatarModal && (
        <AvatarModal toggle={setShowAvatarModal} avatar={avatar} />
      )}
      <div className="comment-container">
        {/* should have certain things
            1. Should have an avatar.
            2. should have a username
            3. Should have a date posted
            4. Should have a delete button
            5. Should have a content
          */}
        <img
          className="comment__userAvatar"
          src={avatar}
          alt="avatar"
          onClick={() => setShowAvatarModal(!showAvatarModal)}
        />
        <div className="comment-content-container">
          <div className="comment-header-container">
            <div className="comment-header-left">
              <p className="comment-header__username"> {username}</p>
              <p className="comment-header__datePosted">posted {datePosted}</p>
            </div>
            <div className="comment-header-right">
              <DeleteOutlineRoundedIcon className="comment-header__deleteIcon" />
            </div>
          </div>
          <p className="comment-content-text">{content}</p>
        </div>
      </div>
    </>
  );
};
