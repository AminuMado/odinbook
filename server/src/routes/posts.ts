import { Router } from "express";
import { Request, Response } from "express";

const router = Router();
// GET all Posts
router.get("/", (req: Request, res: Response) => {
  res.json({ mssg: "GET all posts" });
});
// GET all single Post
router.get("/:id", (req: Request, res: Response) => {
  res.json({ mssg: "GET a single post" });
});
// POST a new post
router.post("/:id", (req: Request, res: Response) => {
  res.json({ mssg: "POST a  new post" });
});
// DELETE a post
router.post("/:id", (req: Request, res: Response) => {
  res.json({ mssg: "POST a  new post" });
});

// Exports
export default router;
