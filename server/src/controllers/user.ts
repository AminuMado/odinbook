import { Request, Response } from "express";
import User from "../models/user";

/* --------- Get User --------- */
const getUser = (req: Request, res: Response) => {
  const user = req.user;
  if (!user) {
    res.status(404).json({ error: "No User Signed In" });
  }
  res.status(200).json({ user });
};
/* --------- Log In --------- */

const loginUser = async (req: Request, res: Response) => {
  // Get the username email and password from the request
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const username = user.username;

    // create a token
    // const token = createToken(user._id);

    // respond with the token and username
    // res.status(200).json({ username, token });
    res.status(200).json({ user });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

/* --------- Sign Up --------- */

const signupUser = async (req: Request, res: Response) => {
  // Get the username email and password from the request
  const { username, email, password } = req.body;
  try {
    const user = await User.signup(username, email, password);

    // Create a Token
    // const token = createToken(user._id);

    // Respond with the username and token
    // res.status(200).json({ username, token });
    res.status(201).json({ user });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export default { getUser, loginUser, signupUser };
