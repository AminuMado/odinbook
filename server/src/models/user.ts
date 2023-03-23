import { Schema, model } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
interface IUser {
  // note I'd have to adjust the object[] to use the model or interface of the associated type eg followers:Iuser[]
  username: string;
  firstname: string;
  lastname: string;
  password: string;
  about: string;
  email: string;
  avatar?: string;
  followers: object[];
  following: object[];
  posts: object[];
  comments: object[];
  notifications: object[];
  isAdmin: boolean;
  images: string[];
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
  email: { required: true, type: String },
  username: { required: true, type: String },
  firstname: { required: true, type: String },
  lastname: { required: true, type: String },
  password: { required: true, type: String },
  about: { type: String, default: "", max: 280 },
  avatar: { type: String },
  followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  following: [{ type: Schema.Types.ObjectId, ref: "User" }],
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  images: [{ type: Schema.Types.ObjectId, ref: "Image" }],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  notifications: [{ type: Schema.Types.ObjectId, ref: "Notification" }],
  isAdmin: { type: Boolean, default: false },
});

// 3. Create a Model.
const User = model<IUser>("User", userSchema);

// Static Methods
// Write static methods here
// Exports
export default User;
