import { Document, Model, Schema } from "mongoose";

export interface IPost extends Document {
  user: { type: Schema.Types.ObjectId; ref: "User" };
  img: String | null;
  body: String;
  likes: [{ type: Schema.Types.ObjectId; ref: "Like" }];
  comments: [{ type: Schema.Types.ObjectId; ref: "Comment" }];
  notifications: [{ type: Schema.Types.ObjectId; ref: "Notification" }];
}

export interface PostModel extends Model<IPost> {
  notNamedYet1(param1: string, param2: string): Promise<IPost>;
  notNamedYet2(param1: string, param2: string, param3: string): Promise<IPost>;
}
