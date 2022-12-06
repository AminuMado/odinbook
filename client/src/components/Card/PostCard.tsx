import "./PostCard.css";
import avatar_1 from "../../Assets/Images/1.jpg";
import avatar_2 from "../../Assets/Images/2.jpg";
import avatar_3 from "../../Assets/Images/3.jpg";
import avatar_4 from "../../Assets/Images/4.jpg";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import { NewComment } from "../Comment/CommentForm";
import { useState } from "react";
import { Collapsible } from "../Collapsible/Collapsible";
export const PostCard = () => {
  const [showNewComment, setShowNewComment] = useState(false);

  return (
    <>
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
          <button
            className={`postCard-options__like ${showNewComment ? "show" : ""}`}
          >
            Like
          </button>
          <Collapsible
            label="Comment"
            clicked={setShowNewComment}
            styleName={`postCard-options__comment ${
              showNewComment ? "show" : ""
            }`}
          >
            <NewComment />
          </Collapsible>
        </div>
      </div>
      <div className="postCard-container">
        <div className="postCard-header">
          <div className="postCard-header__left">
            <img
              className="postCard-header__userAvatar"
              src={avatar_2}
              alt="avatar"
            />
            <p className="postCard-header__username">Mahatma Ghandi</p>
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
          <button
            className={`postCard-options__like ${showNewComment ? "show" : ""}`}
          >
            Like
          </button>
          <Collapsible
            label="Comment"
            clicked={setShowNewComment}
            styleName={`postCard-options__comment ${
              showNewComment ? "show" : ""
            }`}
          >
            <NewComment />
          </Collapsible>
        </div>
      </div>
      <div className="postCard-container">
        <div className="postCard-header">
          <div className="postCard-header__left">
            <img
              className="postCard-header__userAvatar"
              src={avatar_3}
              alt="avatar"
            />
            <p className="postCard-header__username">Sister May</p>
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
          <button
            className={`postCard-options__like ${showNewComment ? "show" : ""}`}
          >
            Like
          </button>
          <Collapsible
            label="Comment"
            clicked={setShowNewComment}
            styleName={`postCard-options__comment ${
              showNewComment ? "show" : ""
            }`}
          >
            <NewComment />
          </Collapsible>
        </div>
      </div>
      <div className="postCard-container">
        <div className="postCard-header">
          <div className="postCard-header__left">
            <img
              className="postCard-header__userAvatar"
              src={avatar_4}
              alt="avatar"
            />
            <p className="postCard-header__username">White Man</p>
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
          <button
            className={`postCard-options__like ${showNewComment ? "show" : ""}`}
          >
            Like
          </button>
          <Collapsible
            label="Comment"
            clicked={setShowNewComment}
            styleName={`postCard-options__comment ${
              showNewComment ? "show" : ""
            }`}
          >
            <NewComment />
          </Collapsible>
        </div>
      </div>
    </>
  );
};
