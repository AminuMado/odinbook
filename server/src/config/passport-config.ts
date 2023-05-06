import config from "./config";
import passport from "passport";
import passportGoogle from "passport-google-oauth20";
import User from "../models/user";
const GoogleStrategy = passportGoogle.Strategy;

passport.use(
  new GoogleStrategy(
    {
      // options for the strategy
      clientID: config.google.clientId,
      clientSecret: config.google.clientSecret,
      callbackURL: "/auth/google/redirect",
    },
    (accessToken, refreshToken, profile, done) => {
      // get profile details
      // save profile details in db
    }
  )
);
