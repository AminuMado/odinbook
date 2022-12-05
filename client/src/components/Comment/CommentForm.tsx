import { useState } from "react";
import "./CommentForm.css";
export const Comment = () => {
  const [commentContent, setCommentContent] = useState("");
  return (
    <div className="newComment">
      <form>
        <textarea
          onChange={(e) => setCommentContent(e.target.value)}
          placeholder="Add new comment..."
          name="newComment"
        ></textarea>
        <button disabled={!commentContent} className="newComment__button">
          Post
        </button>
      </form>
    </div>
  );
};
