import "./NewPost.css";
import { useState } from "react";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import CancelIcon from "@mui/icons-material/Cancel";
export const NewPost = () => {
  const [postContent, setPostContent] = useState("");
  const [file, setFile] = useState<Blob | MediaSource | null>(null);
  return (
    <div className="newPost-container">
      <form className="newPost">
        <div className="newPost-top">
          <textarea
            className="newPost__textarea"
            placeholder="What's on your mind?"
            value={postContent}
            id="content"
            name="content"
            onChange={(e) => setPostContent(e.target.value)}
          />
        </div>
        <hr className="newPost-hr" />
        {file && (
          <div className="newPost-img-container">
            <img
              className="newPost-img"
              src={URL.createObjectURL(file)}
              alt=""
            />
            <CancelIcon
              className="newPost-cancelIcon"
              onClick={() => setFile(null)}
            />
          </div>
        )}
        <div className="newPost-bottom">
          <label htmlFor="fileInput">
            <PermMediaIcon />
            Add an image
          </label>
          <input
            type="file"
            hidden
            name="fileInput"
            id="fileInput"
            accept=".png,.jpeg,.jpg"
            onChange={(e) => {
              if (e.target.files) {
                setFile(e.target.files[0]);
              }
            }}
          />
          <button disabled={!postContent} className="newPost__button">
            Post
          </button>
        </div>
      </form>
      {/* {error && <div className="error">{error}</div>} */}
    </div>
  );
};
