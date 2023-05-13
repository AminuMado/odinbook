import passport from "passport";
import express from "express";

const router = express.Router();

// Auth with google
router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  res.send("This is the callback route");
});
router.get("/logout", function (req, res, next) {
  // @ts-ignore
  req.logOut();
  res.status(200).send("Logged Out");
});

export = router;
