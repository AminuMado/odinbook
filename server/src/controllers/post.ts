import { NextFunction, Request, Response } from "express";
import mongoose, { Error } from "mongoose";
import { body, validationResult } from "express-validator";
import Post from "../models/posts";
/* --------- Get all Posts--------- */

const getPosts = async (req: Request, res: Response) => {
  const posts = await Post.find({})
    .sort({ createdAt: -1 })
    .populate("user")
    .populate("comments")
    .populate("likes");
  res.status(200).json(posts);
};

// /* --------- Get all Posts for timeline--------- */

// const getPostsForUser = async (req:Request, res:Response) => {
//   // We set the current user from the require auth middleware
//   const currentUser = req.user;
//   const Posts = await Post.find({ author: currentUser })
//     .sort({ createdAt: -1 })
//     .populate("author");
//   // .populate("comments");
//   res.status(200).json(Posts);
// };
// /* --------- Get a single Post --------- */

// const getPost = async (req:Request, res:Response) => {
//   const { id } = req.params;

//   // Check if ID is valid
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ error: "Post not found" });
//   }

//   // Find the Post
//   const Post = await Post.findById(id).populate("author").populate("comments");

//   if (!Post) {
//     return res.status(404).json({ error: "Post not found" });
//   }

//   // Success... Post has been found.

//   res.status(200).json(Post);
// };

/* --------- Create a Post --------- */

const createPost = [
  // validate and sanitize input fields
  // for now lets just work on making a post without an image
  body("body")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Body must not be empty"),

  //Process request after validation and sanitization
  async (req: Request, res: Response) => {
    // Extract the validation errors from a request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // get the required values from the request
    const { body } = req.body;
    // current user is gotten from the requireAuth middleware
    const user = req.user;
    // Add to the database
    try {
      const post = await Post.create({ user, body });
      return res.status(200).json(post);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  },
];
export { getPosts, createPost };
