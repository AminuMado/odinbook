import { Document, Model } from "mongoose";

export interface IUser extends Document {
  // We would have to make a better choice betweeen null or opional in fields;
  // Would have to address the object[] thingy would need it to be another model eg <comments>[]
  username: string;
  googleId: string;
  name: string;
  about: string;
  email: string;
  avatar: string | null;
  followers: object[];
  following: object[];
  posts: object[];
  comments: object[];
  notifications: object[];
  isAdmin: boolean;
  images: string[];
}

export interface UserModel extends Model<IUser> {
  login(email: string, password: string): Promise<IUser>;
  signup(username: string, email: string, password: string): Promise<IUser>;
}
