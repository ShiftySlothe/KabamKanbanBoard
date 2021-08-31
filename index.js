// Define dependancies
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");

//Run scripts
require("./models/user");
require("./services/passport");

const connectToDB = async () => {
  try {
    await mongoose.connect(keys.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err.message);
    //exit process with failure
    process.exit(1);
  }
};

connectToDB();

const app = express();

// Initialize cookie session
try {
  app.use(
    cookieSession({
      // MaxAge in ms
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey],
    })
  );
  console.log("Cookie session set up");
} catch (err) {
  console.log("Cookie session set up - FAILED");
  console.error(err.message);
  //exit process with failure
  process.exit(1);
}

// Initialize passport
try {
  app.use(passport.initialize());
  app.use(passport.session());
  console.log("Passport Initialized");
} catch (err) {
  console.log("Passport Initialized - FAILED");
  console.error(err.message);
  //exit process with failure
  process.exit(1);
}

// Assign routes
require("./routes/authRoutes")(app);

// PORT set by PaaS or local host:5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log(`App listening on port ${PORT || 5000}`);
