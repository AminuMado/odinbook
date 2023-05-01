import express from "express";
import controller from "../controllers/user";

const router = express.Router();

router.post("/create/user", controller.signupUser);
router.post("/login/user", controller.loginUser);

export = router;
