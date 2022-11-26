import { useState } from "react";
import "./NewPost.css";
export const NewPost = () => {
  const [postContent, setPostContent] = useState("");
  return (
    <div className="newPost-container">
      {/* we have a top and a bottom seprated by a hr line
        The top contains the textarea and the bottom contains the submit button and the select image picker */}
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
        <div className="newPost-bottom">
          {/* Add the select image picker here */}
          <button className="newPost__button">Post</button>
        </div>
      </form>
      {/* {error && <div className="error">{error}</div>} */}
    </div>
  );
};
