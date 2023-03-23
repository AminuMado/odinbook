import { Schema, model } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
interface IPost {
  author: {};
  body: string;
  img: string;
  likes: string[];
  comments: object[];
}

// 2. Create a Schema corresponding to the document interface.
const postSchema = new Schema<IPost>(
  {
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    body: { type: String, max: 500 },
    img: { type: String },
    likes: [{ type: Schema.Types.ObjectId, ref: "Like" }],
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);

// 3. Create a Model.
const Post = model<IPost>("Post", postSchema);

export default Post;
