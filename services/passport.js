// Define dependancies
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

// Inform passport of the oAuth strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    // Set up logic for when strategy is triggered
    async (accessToken, refreshToken, profile, done) => {
      // Check if user exists
      const existingUser = await User.findOne({ googleID: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      // Add user to the DB
      const user = await new User({ googleID: profile.id }).save();
      done(null, user);
    }
  )
);
