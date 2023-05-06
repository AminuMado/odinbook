import { Schema, model } from "mongoose";
import { IUser, UserModel } from "../interfaces/user";
import logging from "../config/logging";
const validator = require("validator");
const bcrypt = require("bcrypt");
// 1. Create an interface representing a document in MongoDB. or in this case, import it.

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser, UserModel>(
  {
    googleId: { required: true, type: String },
    email: { required: true, type: String },
    username: { type: String },
    name: { type: String, max: 25 },
    about: { type: String, default: "", max: 280 },
    avatar: { type: String },
    followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
    following: [{ type: Schema.Types.ObjectId, ref: "User" }],
    posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
    images: [{ type: Schema.Types.ObjectId, ref: "Image" }],
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    notifications: [{ type: Schema.Types.ObjectId, ref: "Notification" }],
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Static Signup Method
// userSchema.statics.signup = async function (
//   username: string,
//   email: string,
//   password: string
// ) {
//   // validation
//   if (!username || !email || !password) {
//     throw Error("All fields must be filled");
//   }
//   if (!validator.isEmail(email)) {
//     throw Error("Email is not valid");
//   }
//   if (!validator.isStrongPassword(password)) {
//     throw Error(
//       "Your password must be at least 8 characters long, contain at least one number and have a mixture of a symbol, uppercase and lowercase letters."
//     );
//   }

//   const emailExists = await this.findOne({ email });

//   if (emailExists) {
//     throw Error("Email already in use");
//   }

//   // Generate a salt and hash the password
//   const salt = await bcrypt.genSalt();
//   const hash = await bcrypt.hash(password, salt);

//   // Create the user with the username email and hashed password
//   const user = await this.create({ username, email, password: hash });
//   return user;
// };
// // static Login Method
// userSchema.statics.login = async function (email: string, password: string) {
//   // Check if email or password fields are empty
//   if (!email || !password) {
//     throw Error("All fields must be filled");
//   }

//   // Find the user associated with email in the db
//   const user = await this.findOne({ email });
//   if (!user) {
//     throw Error("Incorrect Email");
//   }

//   // Compare entered password with password in the db
//   const match = await bcrypt.compare(password, user.password);
//   if (!match) {
//     throw Error("Incorrect Password");
//   }

//   return user;
// };
// 3. Create a Model.
const User = model<IUser, UserModel>("User", userSchema);

// Exports
export default User;
