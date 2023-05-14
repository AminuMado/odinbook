import { Router } from "express";
import { Request, Response, NextFunction } from "express";
import { createPost } from "../controllers/post";

const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user) {
    res.redirect("/auth/login");
  } else {
    next();
  }
};

const router = Router();
// GET all Posts
router.get("/", (req: Request, res: Response) => {
  res.json({ mssg: "GET all posts" });
});
// GET a single Post
router.get("/:id", (req: Request, res: Response) => {
  res.json({ mssg: "GET a single post" });
});
// Create a new post
router.post("/:id", createPost);
// DELETE a post
router.delete("/:id", (req: Request, res: Response) => {
  res.json({ mssg: "DELETE a post" });
});

// Exports
export default router;
