import { useState } from "react";
import "./CommentForm.css";
export const NewComment = () => {
  const [commentContent, setCommentContent] = useState("");
  return (
    <div className="newComment">
      <form>
        <textarea
          onChange={(e) => setCommentContent(e.target.value)}
          placeholder="Add new comment..."
          name="newComment"
        />
        <button disabled={!commentContent} className="newComment__button">
          Post
        </button>
      </form>
    </div>
  );
};
