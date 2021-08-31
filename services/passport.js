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
    },
    // Set up logic for when strategy is triggered
    (accessToken, refreshToken, profile, done) => {
      // Check if user exists
      User.findOne({ googleID: profile.id }).then((existingUser) => {
        if (existingUser) {
          done(null, existingUser);
        } else if (!existingUser) {
          // Add user to the DB
          new User({
            googleID: profile.id,
          })
            .save()
            .then((user) => done(null, user));
        }
      });
    }
  )
);
