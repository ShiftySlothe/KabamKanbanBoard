// Define dependancies
const passport = require("passport");

module.exports = (app) => {
  // Initial call to google auth route
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  // Callback from google, which triggers the strategy
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/taskboard");
    }
  );

  //Logs user out
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  //
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
