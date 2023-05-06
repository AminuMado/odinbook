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
    async (accessToken, refreshToken, profile, done) => {
      // get profile details
      // save profile details in db
      const user = await User.findOne({ googleId: profile.id });

      // If user doesn't exist creates a new user. (similar to sign up)
      if (!user) {
        const newUser = await User.create({
          googleId: profile.id,
          name: profile.displayName,
          email: profile.emails?.[0].value,
          // we are using optional chaining because profile.emails may be undefined.
        });
        if (newUser) {
          done(null, newUser);
        }
      } else {
        done(null, user);
      }
    }
  )
);
