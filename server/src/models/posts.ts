import { Schema, model } from "mongoose";
import { IPost, PostModel } from "../interfaces/post";
// 1. Create an interface representing a document in MongoDB. or in this case, import it.

// 2. Create a Schema corresponding to the document interface.
const postSchema = new Schema<IPost, PostModel>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    img: { type: String, default: null },
    body: { type: String, minLength: 3, maxLength: 2000 },
    likes: [{ type: Schema.Types.ObjectId, ref: "Like" }],
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    notifications: [{ type: Schema.Types.ObjectId, ref: "Notification" }],
  },
  { timestamps: true }
);

// Static Method
// postSchema.statics.notNamedYet = async function (param1: string,param2: string,param3: string) {
// function body goes here
// };
// 3. Create a Model.
const Post = model<IPost, PostModel>("Post", postSchema);

// Exports
export default Post;
