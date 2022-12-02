import { PostCard } from "../Card/PostCard";
import { NewPost } from "./NewPost";

export const Post = () => {
  return (
    <div>
      {/* This should have the new post and the posts in them the posts this should be where the api call occurs so id need to import a post card also */}
      <NewPost />
      <PostCard />
    </div>
  );
};
